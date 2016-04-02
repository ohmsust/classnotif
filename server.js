var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');


// Must Call before any route hit
// app.use(middleware.requireAuthentication);


app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About Us');
});


app.use(middleware.logger);
app.use(express.static(__dirname + '/public'));


app.listen(PORT, function (){
	console.log('Server started at port '+ PORT +' ... ... ...')
});