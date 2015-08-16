(function() {
  'use strict'

  angular
    .module('ezinvoiceApp')
    .factory('Ajax', Ajax);

    function Ajax($http) {
      var service = {
        getInvoices : getInvoices,
        getInvoice  : getInvoice,
        updateInvoice : updateInvoice,
        createEntry : createEntry,
        addEntry    : addEntry
      }
      return service;
      ////////////////////////////////////
      function getInvoices(callback) {
        $http.get('http://localhost:9000/api/invoices').
          then(function (res) {
            callback(res.data);
          }, function (res) {
             console.error('Error: Could not retreieve invoice.');
          });
      }
      function getInvoice(invoiceId, callback) {
        $http.get('http://localhost:9000/api/invoices/' + invoiceId).
          then(function (res) {
            callback(res.data);
          }, function (res) {
             console.error('Error: Could not retreieve invoice.');
          });
      }
      function updateInvoice(invoiceId, invoice, callback) {
        debugger;
        $http.put('http://localhost:9000/api/invoices/'+invoiceId, invoice).
          then(function(res) {
            callback(res.data);
          }, function(res) {
            console.error('Could not add entry to the invoice.');
          });       
      }
      function createEntry(entry, callback) {
        $http.post('http://localhost:9000/api/entrys', entry).
          then(function(res) {
            callback(res.data);
          }, function(res) {
            console.error('Could not add entry to the invoice.');
          });
      }
      function addEntry(invoice, entry, callback) {
        $http.put('http://localhost:9000/api/invoices/'+invoice+'/addEntry='+entry).
          then(function(res) {
            callback(res.data);
          }, function(res) {
            console.error('Error: Could not add new entry to the invoice.');
          });
      }
    }
})();
