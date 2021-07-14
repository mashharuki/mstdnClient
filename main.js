/**
 * メインとなる関数
 */

// 必要なモジュールを読み込む
const electron = require('electron')
const path = require('path')
const url = require('url')
// appを用意する。
const app = electron.app
const BrowserWindow = electron.BrowserWindow

// Electronのライフサイクル
let mainWindow
app.on('ready', createWindow)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
app.on('activate', () => {
    if (mainWindow === null) createWindow()
})

// ウィンドウを作成
function createWindow () {
    mainWindow = new BrowserWindow({
        width: 600, 
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })
    // index.htmlを読み込む
    mainWindow.loadURL('file://' + __dirname + '/index.html')
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}
 
 