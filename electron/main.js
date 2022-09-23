const { BrowserWindow, app } = require('electron')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    frame:false
  });
  win.loadFile("./dist/index.html");
};

app.whenReady().then(() => {
  createWindow();
});
