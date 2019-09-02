

const ws = new WebSocket('ws://localhost:8888');

ws.addEventListener('open', function(event){
    console.log('made a connection!');
})

ws.addEventListener('message', function( event ){
    console.log('got a message ', event.data)
})
