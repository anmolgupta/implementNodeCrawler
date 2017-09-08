'use strict';
/* global require, module, console, process*/

let cheerio = require('cheerio');
let _ = require('underscore');
let winston = require('winston');
let himalaya = require('himalaya');
let fs = require('fs');


let htmlContent  = fs.readFileSync('/Users/anmol/tricog/tricog_try/main_info.html','utf-8');



let $ = cheerio.load(htmlContent);

let basicDetailsRows = $('body');
var json = himalaya.parse(basicDetailsRows.html());
fs.writeFileSync('/Users/anmol/tricog/tricog_try/main_info.json',JSON.stringify(json));

