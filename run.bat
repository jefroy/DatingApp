@echo off

start "VSCODE" cmd /c "code . & exit /b"

cd API
start "dotnet watch run" cmd /c "dotnet watch run & exit /b"
start "RIDER" cmd /c "rider.bat . & exit /b"

cd ..

rem cd DatingApp-SPA
rem start "ng serve" cmd /c "ng serve & exit /b"

rem closeup
TASKKILL /IM Code.exe
TASKKILL /IM rider64.exe

exit /b

