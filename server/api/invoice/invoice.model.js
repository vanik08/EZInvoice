'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InvoiceSchema = new Schema({
  client: String,
  date: Date,
  entries: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('Invoice', InvoiceSchema);