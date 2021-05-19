const { app, BrowserWindow } = require("electron");
const puppeteer = require('puppeteer');

function createMain() {
    win = new BrowserWindow({
        width: 1200,
        height: 800,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavascript: true,
            contextIsolation: true,
        }
    })
    
    win.loadFile("index.html");
}

app.on('ready', function () {
    console.log("Started!")
    createMain();
  });