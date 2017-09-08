'use strict';
/* global require, module, console, process*/
var qs = require('qs');

var url = 'https://govtprocurement.delhi.gov.in/nicgep/app;jsessionid=DE84A00EC8C2AA540CF5A7B423FD5255.delspeg1?component=%24DirectLink&page=FrontEndViewTender&service=direct&session=T&sp=SEY%2BeVPSjcMLImZ%2BWwMZiyw%3D%3D';
url = url.split('?');
var obj = qs.parse(url[1]);

delete obj.session;

url = url[0]+"?"+qs.stringify(obj);
console.log(url);