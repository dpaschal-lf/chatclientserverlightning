

const WebSocket = require('ws');

const connections = [];

const ws = new WebSocket.Server( {
    'port': 8888
});

ws.on('connection', function( conn ){
    connections.push( conn );
    console.log('got a connection!, count: ' + connections.length);
    conn.on('message', function( dataString ){
        console.log(dataString);
        const data = JSON.parse(dataString);
        const message = data.message;
        const name = data.name;
        console.log('got a message!', data);
        for( var connIndex = connections.length-1; connIndex>=0; connIndex--){
            connections[connIndex].send( JSON.stringify({
                from: name,
                message: message
            }) );
        }
    })
    conn.on('close', function(){
        console.log('connection closed!')
    })
})