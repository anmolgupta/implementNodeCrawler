'use strict';
/* global require, module, console, process*/

var Crawler = require("crawler");
var _ = require('underscore');
var Govt = require('./govt.js');
var fs = require('fs');

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
            

            let basicDetailsRows = $('.tablebg').children().html();
            var basicDetails = {rowHtml: basicDetailsRows};
            console.log(basicDetails);
            Govt.create(basicDetails);
        }
        done();
    }
});

c.queue('https://govtprocurement.delhi.gov.in/nicgep/app?component=%24DirectLink&page=FrontEndViewTender&service=direct&sp=SsnCM%2BIZ819BMgE5YBM7bww%3D%3D');
