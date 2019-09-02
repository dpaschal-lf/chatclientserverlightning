
$(document).ready(startApp);
const ws = new WebSocket('ws://localhost:8888');

ws.addEventListener('open', function(event){
    console.log('made a connection!');
    sendPacketMessage( "someone has joined the chat" );
})

ws.addEventListener('message', function( event ){
    console.log('got a message ', event.data);
    const data = JSON.parse(event.data);
    const message = data.message;
    const from = data.from;
    displayMessage( from, message );
})


function startApp(){
    $("#send").click( sendMessage );
}

function sendPacketMessage( message ){
    const packetToSend = JSON.stringify({
        name: $("#name").val(),
        message: message
    })
    ws.send( packetToSend );
}

function sendMessage(){
    const message = $("#outboundMessage").val();

    sendPacketMessage( message );
    $("#outboundMessage").val('');
}

function displayMessage( name, message ){
    var messageContainer = $("<div>", {
        class: 'messageContainer'
    });
    var name= $("<div>", {
        text: name,
        class: 'name'
    })
    var message = $("<div>",{
        class: 'message',
        text: message
    })
    messageContainer.append( name, message)
    $("#display").prepend( messageContainer );
}