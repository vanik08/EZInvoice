// 'use strict';

// angular.module('ezinvoiceApp')
//   .controller('InvoiceCtrl', function ($scope) {
//     $scope.message = 'Hello';
//   });

(function() {
	'use strict';

	angular
		.module('ezinvoiceApp')
		.controller('InvoiceCtrl', InvoiceCtrl)

	function InvoiceCtrl(Ajax, $stateParams, $scope, $modal) {
		//jshint validthis=true
		var vm = this;
		vm.invoice = $scope.$parent.currentInvoice;
    vm.loadInvoice = loadInvoice;
    vm.updateTotal = updateTotal;
    vm.showNewInvoiceDialog = false;
    vm.toggleNewInvoiceDialog = toggleNewInvoiceDialog;
    vm.createEntry = createEntry;

    vm.inputJob;
    vm.inputHours;
    vm.inputTimeStarted;
    vm.inputTimeEnded;
    vm.inputNotes;
    vm.inputRate;
    vm.inputTax;
    vm.inputTotal = 0;

    vm.loadInvoice();

    function loadInvoice() {
  		//When URL is not re-directed and the parent scope is empty,
  		//such as the page being refreshed, request and find the invoice
  		if(vm.invoice == undefined) {
        refreshInvoice();
  		}
    }
    function refreshInvoice() {
      var invoiceId = $stateParams.id;
      Ajax.getInvoice(invoiceId, function (data) {
        console.log(data);
        vm.invoice = data;
      });
    }
    function updateInvoice() {
      var invoice = {
        total : vm.inputTotal+vm.invoice.total
      }
      Ajax.updateInvoice(vm.invoice._id, invoice, function (data) {
        console.log(data);
        vm.invoice = data;
        refreshInvoice;
      });
    }
    function updateTotal() {
      if(vm.inputRate >= 1 && vm.inputHours >= 1)
        vm.inputTotal = vm.inputRate*vm.inputHours;
      else 
        vm.inputTotal = 0;
    }
    function toggleNewInvoiceDialog() {
      vm.showNewInvoiceDialog = !vm.showNewInvoiceDialog;
    }
    function createEntry() {
      var entry = {
        job       :  vm.inputJob,
        rate      :  vm.inputRate,
        hours     :  vm.inputHours,
        startTime :  vm.inputTimeStarted,
        endTime   :  vm.inputTimeEnded,
        total     :  vm.inputTotal,
        notes     :  vm.inputNotes
      }
      Ajax.createEntry(entry, function (data) {
        Ajax.addEntry(vm.invoice._id, data._id, function (data) {
          console.log(data);
          refreshInvoice();
          vm.showNewInvoiceDialog = false;
        });
      });
      updateInvoice();
    }
	}
})();
