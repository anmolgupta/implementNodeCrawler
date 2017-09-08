 'use strict';
 /* global require,module */
 /* node:true,quotmark:false */
var mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;
var Schema = mongoose.Schema;
var config = require('./config.js');

var connection = mongoose.createConnection(config.mongo.db);

var govtSchema = new Schema({
}, {minimize:false, strict:false});

var Govt = connection.model('govt', govtSchema);


module.exports = Govt;