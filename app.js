// Requires \\
  var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

// Routes \\
app.get('/', function(req, res){
  fs.readFile('./data.txt', function(err, data){
    res.header('Content-Type', 'text/html');
    res.send(data);
    console.log(data);
  });

})

app.get('/:filename', function(req, res) {
  fs.readFile('./public/' + req.params.filename, function(err, contents){
    res.header('Content-Type', 'text/html');
    res.send(contents);
  })
});

// res.sendFile('whatever.txt', {root : './public/html'})

// Creating Server and Listening for Connections \\
app.listen(process.env.PORT || 8080, function(){
	console.log('Server up and running!');
});


// fs.readFileSync()
