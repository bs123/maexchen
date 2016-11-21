var PORT = 9000;
var HOST = '10.10.10.1';

var dgram = require('dgram');




var client = dgram.createSocket('udp4');


client.on('message', (msg, rinfo) => {
	var param = msg.toString().split(';');
	
	if(param[0] == 'ROUND STARTING') {
		var message = new Buffer('JOIN;' + param[1]);
		client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
			console.log(err);
		});
	}
	console.log(param);
});

var message = new Buffer('REGISTER;JT');
client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('Start');
//    client.close();
});
