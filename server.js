var express = require('express');
var parseAcceptLanguage = require('parse-accept-language');

var app = express();
var result = {};

var port = process.env.PORT || 8080;

app.get('/',function(req,res){

    result['ipaddress'] = getClientIP(req);

    result['language'] = parseAcceptLanguage(req)[0].value;
    
    var regExp = new RegExp(/\(([^)]+)\)/)
    result['software'] = regExp.exec(req.get("User-Agent"))[1];
    
    res.send(result);
});

function getClientIP(req) {
    var ip = req.get("X-Forwarded-For");
    if(!ip) {
        ip = req.ip;
    }
    return ip;
}

app.listen(port, function(){
    console.log("listening on "+port);
});