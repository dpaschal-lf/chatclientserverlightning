

const WebSocket = require('ws');

const ws = new WebSocket.Server( {
    'port': 8888
});

ws.on('connection', function( conn ){
    console.log('got a connection!');
    conn.on('message', function( message ){
        console.log('got a message!', message);
    })
    conn.on('close', function(){
        console.log('connection closed!')
    })
})