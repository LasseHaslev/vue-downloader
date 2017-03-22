// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 1337;

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var fs = require( 'fs' );

var uploadingCount = 0;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// routes will go here
app.get( '/download', function(req, res, next) {

    var file = __dirname + '/../../../files/image.jpg';
    res.download(file); // Set disposition and send it.
} );

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
