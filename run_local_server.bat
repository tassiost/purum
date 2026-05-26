@echo off
title PURUM SYSTEM SERVER
echo ===================================================
echo Starting local PURUM systems server on Port 3000...
echo Website will open automatically in your browser.
echo To stop the server at any time, close this window.
echo ===================================================
start http://localhost:3000
node server.js
pause
