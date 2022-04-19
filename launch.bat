@ echo off
if not exist node_modules (call npm i)
node app.js
pause
