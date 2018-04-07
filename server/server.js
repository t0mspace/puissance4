import express from 'express';
import http from 'http';
import fs from 'fs';
import path from 'path';
import socket from 'socket.io';



const app = express();
const server = http.Server(app);
const io = socket(server);

io.on('connection', (socket)=>{
    console.log(socket);
    console.log('a user connected');
    socket.emit('message', 'Vous êtes connectés');
})
server.listen(8080);
// let server = http.createServer(express);




let file = path.resolve('./public/index.html');


app.use(express.static('public'));



// // Chargement de la page index.html
app.get('/', (req, res) => {
    //let url = convertURL(req.url);
    //res.setHeader("Content-Type", mime.getExtension('text/html; charset=utf8')) //Solution!
    res.sendFile(file)
});


