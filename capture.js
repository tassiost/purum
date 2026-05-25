const { chromium } = require('playwright');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

function startServer() {
  return new Promise((resolve, reject) => {
    console.log('Starting local Express server...');
    const serverProcess = spawn('node', ['server.js'], {
      env: { ...process.env, PORT: '3000' }
    });

    serverProcess.stdout.on('data', (data) => {
      const output = data.toString();
      console.log(`[Server]: ${output.trim()}`);
      if (output.includes('STITCH ENGINE RUNNING AT PORT')) {
        resolve(serverProcess);
      }
    });

    serverProcess.stderr.on('data', (data) => {
      console.error(`[Server Error]: ${data}`);
    });

    serverProcess.on('error', (err) => {
      reject(err);
    });
  });
}

(async () => {
  let serverProcess;
  try {
    serverProcess = await startServer();
    await new Promise(r => setTimeout(r, 1000));

    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    // Set viewport
    await page.setViewportSize({ width: 1440, height: 900 });
    
    // Listen to browser console and errors
    page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
    page.on('pageerror', err => console.error('BROWSER RUNTIME ERROR:', err.message));

    const url = 'http://localhost:3000';
    console.log(`Opening live server URL: ${url}`);
    
    await page.goto(url, { waitUntil: 'networkidle' });
    
    // Wait for everything to load
    await page.waitForTimeout(2000);

    // Click the custom player's Play button programmatically!
    console.log('Clicking custom player Play button...');
    const playBtn = await page.$('#player-play-btn');
    if (playBtn) {
      await playBtn.click();
      console.log('Play button clicked successfully.');
    } else {
      console.log('ERROR: Play button not found on page!');
    }

    // Wait 5 seconds to let the audio play and see if any errors are logged
    await page.waitForTimeout(5000);

    console.log('Capturing full page...');
    await page.screenshot({ path: 'screenshots/fullpage_test_play.png', fullPage: true });

    await browser.close();
  } catch (error) {
    console.error('An error occurred during capture:', error);
  } finally {
    if (serverProcess) {
      console.log('Stopping local Express server...');
      serverProcess.kill();
    }
  }
})();
