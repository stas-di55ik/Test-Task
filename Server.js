//Getting net module (TCP protocol was selected according to the task)
const net = require('net');

//Configuration
const port = 9999;

//Creating an instance of the server and attach the client handling callback
const server = net.createServer(onClientConnection);

//Start of the listening on given port and host
server.listen(port,function(){
   console.log(`Server started on port: ${port}`); 
});


//Client handling callback
function onClientConnection(sock){
    //Loging when a client connnects
    console.log(`Connected client: ${sock.remoteAddress}:${sock.remotePort}`);
    
	//Handling the client data
    sock.on('data',function(data){
        //Loging data received from the client
        console.log(`Client sent: ${data}`);
		
		//Preparing and sending a response to the client 
		let serverResponse = "Hello, I`m a server"
		sock.write(serverResponse);
		
		//Closing the connection 
		sock.end()        
	});
    
	//Handling when client connection is closed
    sock.on('close',function(){
        console.log(`Closed connection: ${sock.remoteAddress}:${sock.remotePort}`);
    });
    
	//Handling client connection error
    sock.on('error',function(error){
        console.error(`Client: ${sock.remoteAddress}:${sock.remotePort} Connection error: ${error}`);
    });
};