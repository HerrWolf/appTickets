//Comando para establecer comunicacion activa/activa
var socket = io();

var label = $('#lblNuevoTicket');

// On Connect
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// On Disconnect
socket.on('disconnect', function() {

    console.log('Desconectado del servidor');

});

socket.on('estadoActual', function(resp) {

    label.text(resp.actual);

});

$('button').on('click', function() {

    // console.log('click');
    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);

    });

})