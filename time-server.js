var net = require('net');

function zeroFill(i){
  return (i < 10 ? '0' : '') + i
}

function dateNow(){
  var date = new Date();
  return date.getFullYear() + '-' + zeroFill(date.getMonth() + 1) + '-' + zeroFill(date.getDate()) + ' ' + zeroFill(date.getHours()) + ':' + zeroFill(date.getMinutes());
}

var server = net.createServer(function(socket){
  socket.end(dateNow()+'\n');
});
server.listen(Number(process.argv[2]));
