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
  			Ajax.getInvoices(function (data) {
  				data.forEach(function (item) {
  					if(item._id === $stateParams.id) {
  						vm.invoice = item;
  					}
  				})
  			});
  		}
    }
    function updateTotal() {
      if(vm.inputRate >= 1 && vm.inputHours >= 1)
        vm.inputTotal = vm.inputRate*vm.inputHours;
      else 
        vm.inputTotal = 0;
    }
	}
})();
