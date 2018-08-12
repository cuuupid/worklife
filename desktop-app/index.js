const electron = require('electron')
const {
    app,
    BrowserWindow
} = electron

function createWindow() {
    let {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
    win = new BrowserWindow({
        width: 520,
        height: 550,
        frame: false,
        x: width - 520,
        y: height - 550
    })
    win.loadFile('index.html')
}

app.on('ready', createWindow)