var express = require('express');
var parseAcceptLanguage = require('parse-accept-language');

var app = express();
var result = {};

app.get('/',function(req,res){
    result['ipaddress'] = req.ip;
    //result['ipaddress'] = req.connection.remoteAddress;
    result['language'] = parseAcceptLanguage(req)[0].value;
    result['software'] = 'some-software';
    res.send(result);
});

app.listen(8080, function(){
    console.log("listening on 8080");
});