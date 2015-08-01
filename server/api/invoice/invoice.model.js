'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InvoiceSchema = new Schema({
  client: String,
  date: Date,
  entries: [{ type: Schema.Types.ObjectId, ref: 'Entry'}],
  total: Number
});

module.exports = mongoose.model('Invoice', InvoiceSchema);