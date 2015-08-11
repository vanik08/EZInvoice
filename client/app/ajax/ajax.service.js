(function() {
  'use strict'

  angular
    .module('ezinvoiceApp')
    .factory('Ajax', Ajax);

    function Ajax($http) {
      var service = {
        getInvoices : getInvoices
      }
      return service;
      ////////////////////////////////////

      function getInvoices(callback) {
        $http.get('http://localhost:9000/api/invoices').
          then(function (res) {
            callback(res.data);
          }, function (res) {
             console.error('error');
          });
      }
    }
})();
