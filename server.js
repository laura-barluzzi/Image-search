var express = require('express');
var https = require('https');
var tools = require('./tools');
var Store = require('./storage');
var app = express();
var store = new Store();

app.get('/api/imagesearch/:search', function (req, res) {
    var date = new Date();
    store.addSearch(req.params.search, date);

    var searchPath = '/bing/v5.0/images/search?q=' + req.params.search +
                     '&offset=' + (req.query.offset || 0) + '&count=5';
    var options = tools.getOptions(searchPath);

    https.request(options, function(httpRes){
        var httpResData = "";

        httpRes.on('data', function(chuck) {
            httpResData += chuck;
        });

        httpRes.on('end', function() {
            var imageObj = tools.getResult(JSON.parse(httpResData));
            res.send(JSON.stringify(imageObj.images));
        });

        httpRes.on('error', function (err) {
            console.log(err);
        });
    }).end();
});

app.get('/api/latest/imagesearch', function (req, res) {
    res.send(JSON.stringify(store.getInfo())); 
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});