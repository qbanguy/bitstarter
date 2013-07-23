var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	fs.readFile(__dirname + '/index.html', 'utf8', function(err, text){
		 response.send(text);
	});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening localhost:%s on " + port, port);
});