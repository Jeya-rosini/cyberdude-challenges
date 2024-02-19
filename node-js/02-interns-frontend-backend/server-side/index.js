const httpServer = require('http')
const internsData = require('./data/interns.json');

const serverPort = "2528"

httpServer.createServer((request, response) => {
    console.log("The server port is created " + serverPort);
    response.write("Hello World!!, This is Rosini")
    response.end()
}).listen(serverPort)