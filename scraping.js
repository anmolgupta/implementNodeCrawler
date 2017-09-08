
var Crawler = require("crawler");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
var c = new Crawler({
    maxConnections : 1,
    rateLimit: 1000,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log($("title").text());
            console.log(res.body);
        }
        done();
    }
});

c.queue('https://govtprocurement.delhi.gov.in/nicgep/app?page=WebTenderStatusLists&service=page');

// Queue just one URL, with default callback
// c.queue('http://www.amazon.com');

// Queue a list of URLs
// c.queue(['http://www.google.com/','http://www.yahoo.com']);

// Queue URLs with custom callbacks & parameters
// c.queue([{
//     uri: 'http://parishackers.org/',
//     jQuery: false,

//     // The global callback won't be called
//     callback: function (error, res, done) {
//         if(error){
//             console.log(error);
//         }else{
//             console.log('Grabbed', res.body.length, 'bytes');
//         }
//         done();
//     }
// }]);

// Queue some HTML code directly without grabbing (mostly for tests)
// c.queue([{
//     html: '<p>This is a <strong>test</strong></p>'
// }]);