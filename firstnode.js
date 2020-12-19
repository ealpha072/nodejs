var http =require('http')//module created..
//http module allows node to transfer data over http
var myDate = require('./firstmodule')

//makes local pc run as a server
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write('The date and time are currently: '+ myDate.myDateTime)
  res.end('')
}).listen(8080)


//modules...