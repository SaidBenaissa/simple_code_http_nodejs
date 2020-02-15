// const path = require('path');
// const os = require('os');
// const fs = require('fs');

// const EventEmitter = require('events');
// // const emitter = new EventEmitter();



// const Logger = require('./logger');
// const logger = new Logger();
// // Register listener
// logger.on('messageLogged',(e) => {
//     console.log("Logging called",e);

// });
// logger.log('message');


// const fileObject = path.parse(__filename);

// var totaleMemory = os.totalmem(); 
// var freeMemory = os.freemem(); 

// // const files = fs.readdirSync('./');

// fs.readdir('-', function(err, files){
//     if(err) console.log('Error---', err);
//     else console.log(`Files in the current folder: ${files}`);


// });



// //console.log(fileObject);
// // console.log(`Total memory is ${totaleMemory}`);
// // console.log(`Free Memory is ${totaleMemory}`);

// // console.log(`Files in the current folder: ${files}`);

// const http = require('http');
// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.write('Hello Said BENAISSA');
//         res.end();
//     }
// });

// // server.on("connection", (socket) => {
// //     console.log('New connection');
// // });

// server.listen(3000)
// console.log('Listening on port 3000 ...')


const http = require('http');
const server = http.createServer((req,res) => {

    if(req.url === '/'){
        res.write('Hell2222o Said BENAISSA');
        res.end();
    }

});

server.listen(3000);
