var http =require('http')//module created..
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
//read files
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
  fs.readFile('demofile.html',function(err,data){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

//create files
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  //appends contentb to a file if non exist, a file is created
  if (err) throw err;
  console.log('Saved!');
});

fs.open('mynewfile2.txt', 'w', function (err, file) {
  //w is a flag for writing on the file. if no file exist, an empty one is created
  if (err) throw err;
  console.log('Saved!');
});

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  //replaces the specified file and content if it exists
  //If the file does not exist, a new file, containing the specified content, will be created
  if (err) throw err;
  console.log('Saved!');
});

//update files
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
  // appends the specified content at the end
});

fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
  //replaces the specified file and content
});


//rename files
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
  //renames a file
});
