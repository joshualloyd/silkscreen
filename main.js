process.env.DEBUG = 'metalsmith:* metalsmith';

const electron = require('electron');
const {app, BrowserWindow} = electron;
const metalsmith = require('./build.js');

app.on('ready', () => {
  let win = new BrowserWindow({width:800, height:600});
  win.loadURL(`file://${__dirname}/index.html`);
  win.webContents.openDevTools();
})

exports.buildSite = () => {
  console.log('starting site build');
  metalsmith();
}
