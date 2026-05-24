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
    // Wait an extra second to be safe
    await new Promise(r => setTimeout(r, 1000));

    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    // Set a standard desktop resolution
    await page.setViewportSize({ width: 1440, height: 900 });
    
    const url = 'http://localhost:3000';
    console.log(`Opening live server URL: ${url}`);
    
    await page.goto(url, { waitUntil: 'networkidle' });
    
    // Wait an extra 4 seconds for soundcloud, fonts, and images to render under HTTP
    await page.waitForTimeout(4000);
    
    const screenshotsDir = path.join(__dirname, 'screenshots');
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir, { recursive: true });
    }

    console.log('Capturing full page of live local server...');
    await page.screenshot({ path: 'screenshots/fullpage_live.png', fullPage: true });

    console.log('Capturing section: Audio...');
    const audio = await page.$('#audio');
    if (audio) {
      await audio.screenshot({ path: 'screenshots/section_audio_live.png' });
    }

    console.log('Screenshots saved successfully under the "screenshots/" directory.');
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
