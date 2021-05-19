const { app, BrowserWindow } = require("electron");
//const puppeteer = require('puppeteer');
const path = require('path')
const fs = require('fs')
const os = require('os')
const process = require("process");

global.sharedObject = {prop1: process.argv};

if (global.sharedObject.prop1[2] == "HELLO") {
    console.log("hahahahahha")
} else {
    console.log(":(")
}

function createMain() {
    win = new BrowserWindow({
        show: false,
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

    // generate pdf
    win.webContents.on('did-finish-load', () => {

        var d = new Date();
        var m = d.getMinutes();
        var s = d.getSeconds();

        const options = {
            marginsType: 1,
            printBackground: false,
            printSelectionOnly: false,
            landscape: false,
            pageSize: 'A4',
            scaleFactor: 100
        }
        const pdfPath = path.join("./pdf-test/", `temp${m}-${s}.pdf`)
        win.webContents.printToPDF(options).then(data => {
            console.log(pdfPath);
            fs.writeFile(pdfPath, data, (error) => {
            if (error) throw error
                console.log(`Wrote PDF successfully to ${pdfPath}`)
            })
        }).catch(error => {
                console.log(`Failed to write PDF to ${pdfPath}: `, error)
            })
        })
}

function createSecond() {
    win = new BrowserWindow({
        show: false,
        width: 1200,
        height: 800,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavascript: true,
            contextIsolation: true,
        }
    })
    
    win.loadFile("./pdf-templates/template-1.html");

    // generate pdf
    win.webContents.on('did-finish-load', () => {

        var d = new Date();
        var m = d.getMinutes();
        var s = d.getSeconds();

        const options = {
            marginsType: 1,
            printBackground: false,
            printSelectionOnly: false,
            landscape: false,
            pageSize: 'A4',
            scaleFactor: 100
        }
        const pdfPath = path.join("./pdf-test/", `temp${m}-${s}.pdf`)
        win.webContents.printToPDF(options).then(data => {
            console.log(pdfPath);
            fs.writeFile(pdfPath, data, (error) => {
            if (error) throw error
                console.log(`Wrote PDF successfully to ${pdfPath}`)
            })
        }).catch(error => {
                console.log(`Failed to write PDF to ${pdfPath}: `, error)
            })
        })
}

app.on('ready', function () {
    console.log("Started!");
    createMain();
    createSecond();
  });