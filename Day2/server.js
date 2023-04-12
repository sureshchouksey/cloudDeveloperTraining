var express = require("express");
var app = express();

app.get('/', function(req,res){
    res.send("Hello istepup world");
})

app.get('/nodejs', function(req,res){
    res.send("istepup nodejs training");
})

app.get('/devops',function(req,res){
    res.send('istepup devops training');
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })

console.log("Hello world");
