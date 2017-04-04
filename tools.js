module.exports = {
    getOptions: function(searchPath) {
        return { host: 'api.cognitive.microsoft.com',
                 path: searchPath,
                 method: 'GET',
                 headers: {'Ocp-Apim-Subscription-Key':
                           'f333bf4fe90a4eea87330d821553f640',
                           'accept': 'application/json'}
               }
    },

    getResult: function(resJson) {
        var images = resJson.value.map(function(value) {
        return {"image-url": value.contentUrl,
                "alt-text": value.name,
                "page-url": value.hostPageDisplayUrl
               };
        });
        return {"images" : images}; // array
    }
}