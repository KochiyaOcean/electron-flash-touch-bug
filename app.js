var BrowserWindow = require('electron').BrowserWindow;
var app = require('electron').app;
var path = require('path');
var flashPath = path.join(__dirname, 'pepflashplayer.dll')
app.commandLine.appendSwitch('ppapi-flash-path', flashPath);
app.commandLine.appendSwitch('ppapi-flash-version', '20.0.0.248');
app.on('ready', function() {
  var mainWindow;
  mainWindow = new BrowserWindow();
  mainWindow.loadURL("file://"+ __dirname + "/index.html");
  // mainWindow.openDevTools({detach: true});
});
