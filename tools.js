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

    getJSON: function(data) {
        var result = "exportedInformation";
        return JSON.stringify(result);
    }
}