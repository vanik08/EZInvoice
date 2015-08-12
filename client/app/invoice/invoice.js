'use strict';

angular.module('ezinvoiceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('invoice', {
        url: '/invoice/:id',
        templateUrl: 'app/invoice/invoice.html',
        controller: 'InvoiceCtrl as InvoiceCtrl'
      });
  });