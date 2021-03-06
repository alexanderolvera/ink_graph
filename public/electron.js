const path = require('path');

const { app, BrowserWindow, Menu } = require('electron');
const isDev = false

Menu.setApplicationMenu(null)

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    show: false,
    width: 800,
    height: 425,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    }
  });



  // and load the index.html of the app.
  // win.loadFile("index.html");
  // win.loadURL(url.format())
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.resolve(__dirname, '../build/index.html')}`
  );
  // win.loadFile(path.join(__dirname, './index.html'))
  // win.loadURL('https://github.com')
  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }
  win.once('ready-to-show', () => {
    win.show()
  })
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});