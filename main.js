let { app, BrowserWindow } = require('electron');
//const S3 = require('aws-sdk/clients/s3');
//update
//ajuda na construção do app
require('electron-reload')(__dirname, {
    require: (`${__dirname}/node_modules/electron`)
})

//app.setUserTasks([])
function createServer() {
    let window = new BrowserWindow({

        icon: 'img/icone.png',
        show:false,
        darkTheme:true,
        width: 630,
        height: 300,
        //frame: null,
       // resizable: false,
        title: "Sisvcs",
       // webPreferences: {
           // nodeIntegration: true,
           // contextIsolation: false,
       // }
    })

    window.loadFile('view/login.html');
    // require ( 'update-electron-app' ) ( )   // npm i update-electron-app
    window.once("ready-to-show",()=>{
       window.show(); // so executa quando tiver tudo pronto, evita os flashes brancos da janela
    })
}
app.whenReady().then(createServer);


