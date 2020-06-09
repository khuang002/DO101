var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Hello World!\n");
});

app.get('/mars', function(req, res){
    res.send("Hello Mars!\n");
});

app.listen(3000, function(){
    console.log("example app listening on port 3000!")
});