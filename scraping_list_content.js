'use strict';
/* global require, module, console, process*/

var Crawler = require("crawler");
var _ = require('underscore');
let cheerio = require('cheerio');
var Govt = require('./govt.js');
var fs = require('fs');
var qs = require('qs');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

function getUrl(query) {
	var url = 'https://govtprocurement.delhi.gov.in';
	url += query;

	url = url.split('?');
	var obj = qs.parse(url[1]);

	delete obj.session;

	url = url[0] + "?" + qs.stringify(obj);

	return url;
}


var callBackForMain = function(error, res, done) {
	if (error) {
		console.log(error);
	} else {
		console.log("inside callBackForMain");
		var $ = cheerio.load(res.body);
		let basicDetailsRows = $('.tablebg').children().html();
		var basicDetails = {
			rowHtml: basicDetailsRows
		};
		Govt.create(basicDetails);
	}


	done();
};

var c = new Crawler({
	maxConnections: 1,
	rateLimit: 2000,
	// This will be called for each crawled page
	callback: function(error, res, done) {
		if (error) {
			console.log(error);
		} else {
			// var $ = res.$;

			var $ = cheerio.load(res.body);

			var a = $('a');

			var ps = [];

			_.each(a, (eachA) => {
				if (eachA.attribs && eachA.attribs.title === "View Tender Information") {
					let url = getUrl(eachA.attribs.href);
					ps.push({uri:url, callback: callBackForMain});
				}
			});
			
			c.queue(ps);

		}
		done();
	}
});

c.queue('https://govtprocurement.delhi.gov.in/nicgep/app?component=%24DirectLink&page=FrontEndTendersByOrganisation&service=direct&sp=SoF6FjpQuIeRKmQtPduGlRQ%3D%3D');