const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');

// Conditionally include the dev tools installer to load React Dev Tools
let installExtension, REACT_DEVELOPER_TOOLS; // NEW!

if (isDev) {
  const devTools = require('electron-devtools-installer');
  installExtension = devTools.default;
  REACT_DEVELOPER_TOOLS = devTools.REACT_DEVELOPER_TOOLS;
} // NEW!

// Handle creating/removing shortcuts on Windows when installing/uninstalling
if (require('electron-squirrel-startup')) {
  app.quit();
} // NEW!

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // show: false,
    opacity: 0.5,
    frame: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  const startURL = isDev
    ? 'http://localhost:3033'
    : `file://${path.join(__dirname, '../build/index.html')}`;

  mainWindow.loadURL(startURL);

  mainWindow.once('ready-to-show', () => mainWindow.show());
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}
app.whenReady().then(() => {
  createWindow();

  if (isDev) {
    installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((error) => console.log(`An error occurred: , ${error}`));
  }
}); // UPDATED!
