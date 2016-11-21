var PORT = 9000;
var HOST = '10.10.10.1';

var dgram = require('dgram');




var client = dgram.createSocket('udp4');


client.on('message', (msg, rinfo) => {
	
	console.log(msg);
	console.log(message);
});

var message = new Buffer('REGISTER;JT');
client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('Start');
//    client.close();
});
