const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 400,
  })
  // In production, webpack outputs to dist/index.html
  const startFile = require('fs').existsSync('dist/index.html') ? 'dist/index.html' : 'index.html'
  win.loadFile(startFile)
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})