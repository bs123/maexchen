var PORT = 9000;
var HOST = '10.10.10.1';

var dgram = require('dgram');




var client = dgram.createSocket('udp4');
var ourDiceRoll = [0,0];
var opponentDiceRoll = [0,0];

client.on('message', (msg, rinfo) => {
	var param = msg.toString().split(';');
	
	if(param[0] == 'ROUND STARTING') {
		answer('JOIN', param[1]);
	} else if(param[0] == 'YOUR TURN') {
		answer('ROLL', param[1]);
	} else if(param[0] == 'ROLLED' ) {
		console.log('+++++ROLLED' + param[1]);
		
		ourDiceRoll = param[1].split(',');
		console.log('+++++ROLLED' + ourDiceRoll[0] + ',' + ourDiceRoll[1] );
		answer('ANNOUNCE', ourDiceRoll.join(',')+ ';'+param[2])
		 	
	} else if(param[0] == 'ANNOUNCED' ) {
		console.log('++ANNOUNCED' + param[1]);
		//answer('ROLL', param[1]);	
		opponentDiceRoll = param[1].split(',');
		console.log('+++++OPPONEND AN' + opponentDiceRoll[0] + ',' + opponentDiceRoll[1] );
		
	}
	console.log(param);
});

function answer(msg, param) {
	var message = new Buffer(msg + ';' + param);
	client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
	});
}

var message = new Buffer('REGISTER;JT');
client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('Start');
//    client.close();
});
