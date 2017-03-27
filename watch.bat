@echo off
start cmd /k webpack -w
#start cmd /k browser-sync start --proxy "192.168.95.1" "**/*.html"
start cmd /k browser-sync start --server --files "**/*.html"