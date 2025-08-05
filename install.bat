@echo off
echo Deleting node_modules and package-lock.json...

REM Delete node_modules folder
IF EXIST node_modules (
    rmdir /s /q node_modules
)

REM Delete package-lock.json file
IF EXIST package-lock.json (
    del /f /q package-lock.json
)

echo Running npm install...
npm install

echo.
echo Done!
pause