var unirest = require('unirest');
var express = require('express');
var app = express();

app.get('/:tag', function(req, res) {
    // console.log(req.params.tag);
    unirest.get('http://api.stackexchange.com/2.2/tags/' + req.params.tag + '/top-answerers/all_time?site=stackoverflow').end(function(response) {
        res.send(response.body);
    });
});

app.listen(8080);
