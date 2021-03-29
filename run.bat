@echo off

start "VSCODE" cmd /c "code . & exit /b"

cd API
@REM start "dotnet watch run" cmd /c "dotnet watch run & exit /b"
start "RIDER" cmd /c "rider.bat . & exit /b"

cd ..

cd client
@REM start "ng serve" cmd /c "ng serve & exit /b"
start "WEBSTORM" cmd /c "webstorm.bat . & exit /b"

cd ..

rem closeup
TASKKILL /IM Code.exe
TASKKILL /IM rider64.exe
TASKKILL /IM webstorm64.exe

exit /b

