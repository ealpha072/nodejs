/*var http =require('http')//module created..
//http module allows node to transfer data over http
var myDate = require('./firstmodule')

//makes local pc run as a server
//creates server object..function passed in .createServer runs when the port is opened
http.createServer(function(req,res){
  //.createServer creates a http server 
  res.writeHead(200,{'Content-Type':'text/html'});//added if response from http server is to be displayed as html
  //first parameter of writehead is status code; 200 means its ok
  //second par is object containing response header
  res.write(req.url)
  //res.write('The date and time are currently: '+ myDate.myDateTime)//writes response to client
  res.end()//ends response
}).listen(8080)//port to listen to

//the function passed into createServer has req argument which is the client request as an object
//the object has a url prepertycoming after domain name.

///FILE SYSTEM MODULE..

var fs  = require ('fs'); //includes the file system module
//read files*/
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
  fs.readFile('demofile.html',function(err,data){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);