let express = require('express');
let app = express();
let path = require('path');
let port = 3020;


app.use('/css', express.static(__dirname + '/css'));
app.use('/view', express.static(__dirname + '/view'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/src', express.static(__dirname + '/src'));
app.use('/info', express.static(__dirname + '/info'));
app.use('/img', express.static(__dirname + '/img'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/view/login.html'))
})
app.listen(port, () => {
    console.log("Server rodando")
})