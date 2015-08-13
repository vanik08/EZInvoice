'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EntrySchema = new Schema({
  job: String,
  client: String,
  rate: Number,
  hours: Number,
  startTime: Date,
  endTime: Date,
  total: Number,
  tax: Number,
  notes: String
});

module.exports = mongoose.model('Entry', EntrySchema);