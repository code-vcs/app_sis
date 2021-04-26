let { app, BrowserWindow } = require('electron');

require('electron-reload')(__dirname, {
    require: (`${__dirname}/node_modules/electron`)
})
function createServer() {
    let window = new BrowserWindow({
        icon:'img/icone.png',
        width: 630,
        height: 300,
        frame:null,
       resizable:false,
        title:"Sisvcs",
    })
    window.loadFile('view/login.html')
}
app.whenReady().then(createServer);