var express = require('express');
var https = require('https');
var tools = require('./tools');
var app = express();

app.get('/api/imagesearch/:search', function (req, res) {
    var searchPath = '/bing/v5.0/images/search?q=' + req.params.search +
                     '&offset=' + (req.query.offset || 0);
    var options = tools.getOptions(searchPath);

    https.request(options, function(httpRes){
            var httpResData = "";

            httpRes.on('data', function(chuck) {
                httpResData += chuck;
            });
        
            httpRes.on('end', function() {
                // extract what I need
                // store data info
                res.send(httpResData);
            });

            httpRes.on('error', function (err) {
                console.log(err);
            });
            
        }).end();
});

app.get('/api/latest/imagesearch/', function (req, res) {
   res.send('Last 10 researches done from database'); 
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});