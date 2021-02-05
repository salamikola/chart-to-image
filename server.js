var http = require('http');
var events = require('events');

var eventEmitter = new events.EventEmitter();

http.createServer(function (req, res) {  
    eventEmitter.emit('server request');
    // Send the HTTP header   
    // HTTP Status: 200 : OK  
    // Content Type: text/plain  
    res.writeHead(200, {'Content-Type': 'text/plain'});  
    // Send the response body as "Hello World"  
    res.end('Hello World\n');  
 }).listen(8081);  

 eventEmitter.on('server request',() => {

    console.log('a request has been made on this server');
 });
 // Console will print the message  
 console.log('Server running at http://127.0.0.1:8081/');