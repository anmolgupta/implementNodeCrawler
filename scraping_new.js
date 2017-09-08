// 'use strict';
// /* global require, module, console*/
// var request = require('request');
// var winston = require('winston');
// var options = {
// 	method:"GET",
// 	url:"https://govtprocurement.delhi.gov.in/nicgep/app?page=WebTenderStatusLists&service=page",	
// };

// request.get(options, function(err, response){
// 	if(err){
// 		winston.error(err);
// 		return;
// 	}

// 	console.log(response);
// });

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
var request = require("request");

var options = { method: 'GET',
  url: 'https://govtprocurement.delhi.gov.in/nicgep/app',
  qs: { page: 'WebTenderStatusLists', service: 'page' },
  headers: 
   { 'postman-token': '87ac1f77-d660-3b93-2b20-ded5e0cbdc11',
     'cache-control': 'no-cache',
     'content-type': 'application/json' },
  body: 
   { SpaceAvailable: 1840988,
     RemoteReboot: -1,
     LastCodeUpdate: '2016-11-15T17:24:57.000Z',
     NetworkPing: '46.9 ms',
     SerialActive: 1,
     LastExecUpdate: '20160719-moduleUpdate.sh',
     FailedUpdates: 0,
     ModemIMSI: '404450943149972',
     BatteryVoltage: 3.29,
     SendLog: -1,
     CodeUpdate: 102,
     Token: '8caf7f10-2f8b-11e6-9948-c3f5ca63feea-anmol',
     ACDisconnected: 0,
     WifiSSID: 'Tricog Health Services',
     BatteryDischarging: 0,
     ModemRSSI: 23,
     UnsyncedData: 0,
     NextAlarmIn: 35996,
     KeepAlive: -1,
     CodeUpdateNeeded: -1,
     DeviceID: 'Tricog-Dongle-0000',
     TimeStamp: '2017-08-30T05:04:57.000Z',
     LastShutdown: -1,
     ModemIMEI: '356793032037178',
     ModemLocation: 'MCC: 404, MNC: 45, LAC: 34101, CID: 26898741',
     BatteryLevel: 0,
     RemoteAddr: '223.186.216.144',
     dateTimeStamp: '2017-08-30T05:04:43.185Z' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});