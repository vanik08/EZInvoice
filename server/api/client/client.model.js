'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ClientSchema = new Schema({
  name: {
  	first: String,
  	last: String
  },
  invoices: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('Client', ClientSchema);