//Getting net module (TCP protocol was selected according to the task)
const net = require('net');

//Configuration
const port = 9999;

//Creating the socket client
const client = new net.Socket();

//Connection to the server on the configured port
client.connect(port, function(){
    //Loging when the connection is established
    console.log(`Client connected to server on port: ${port}`);

    //Try to send data to the server
    client.write('Hello');
});

//Handling data coming from server
client.on('data', function(data){
    console.log(`Server sent: ${data}`);
});

//Handling connection close
client.on('close', function(){
    console.log('Client`s connection is closed');
});

//Handling error
client.on('error', function(error){
    console.error(`Connection error ${error}`);
});

