@echo off
title PURUM PLAYWRIGHT AUDIT
echo ===================================================
echo Starting Playwright visual layout audit...
echo This will launch the local server, run browser
echo automation, and capture high-res screenshots inside
echo the "screenshots/" folder.
echo ===================================================
node capture.js
pause
