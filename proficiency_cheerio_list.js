'use strict';
/* global require, module, console, process*/

let cheerio = require('cheerio');
let _ = require('underscore');
let winston = require('winston');
let fs = require('fs');


let htmlContent  = fs.readFileSync('/Users/anmol/tricog/tricog_try/list_info.html','utf-8');

let $ = cheerio.load(htmlContent);

let rows = $('a');
// console.log(rows);

_.each(rows, function(row, i){
	if(i=='100')
	console.log(row.attribs);
});


// _.each(rows, row=>{
// 	var columns = row.children;
// 	console.log(columns.length);

// });



// let basicTableChilren = table1['0'].children.serializeArray();

// let rows = basicTableChilren[0].children;
// console.log(rows);