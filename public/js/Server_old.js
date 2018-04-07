export class Server_old{

    /**
     *
     * @param http
     * @param fs
     */
    constructor(http, fs) {
        console.log(http);
        this.webserver = http.createServer((req, res) => {
            fs.readFile('./index.html', 'utf-8', (error, content) => {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(content);
            });
        });
    }

    /**
     *
     * @param socketIO
     */
    startListening(socketIO)
    {
        this.io = socketIO.listen(this.webserver);
    }

    /**
     *
     * @param socketIO
     */
    manageConnections()
    {
        this.io.sockets.on('connection', function () {
            console.log('Un client est connecté !');
        });

        this.webserver.listen(80);
    }




}