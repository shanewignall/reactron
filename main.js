const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');


let window

function createWindow () {
  window = new BrowserWindow({width: 800, height: 600})

  window.setMenu(null)

  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  window.on('closed', function () {
    window = null
  })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Re-create a window in the app when the dock icon
// is clicked and there are no other windows open.
app.on('activate', function () {
  if (window === null) {
    createWindow()
  }
})
