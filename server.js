var express = require('express');

var app = express();
var result = {};

app.get('/',function(req,res){
    result['ipaddress'] = "some-ip";
    result['language'] = 'some-lang';
    result['software'] = 'some-software';
    res.send(result);
});

app.listen(8080, function(){
    console.log("listening on 8080")
});