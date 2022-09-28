const { BrowserWindow, app } = require('electron')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
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
