
$(document).ready(startApp);
const ws = new WebSocket('ws://localhost:8888');

ws.addEventListener('open', function(event){
    console.log('made a connection!');
    ws.send('greetings!');
})

ws.addEventListener('message', function( event ){
    console.log('got a message ', event.data);
    displayMessage( event.data );
})


function startApp(){
    $("#send").click( sendMessage );
}

function sendMessage(){
    const message = $("#outboundMessage").val();
    ws.send( message );
    $("#outboundMessage").val('');
}

function displayMessage( message ){
    $("#display").html( message + "<br>" + $("#display").html() )
}