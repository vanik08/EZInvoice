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

    vm.inputJob;
    vm.inputHours;
    vm.inputTimeStarted;
    vm.inputTimeEnded;
    vm.inputNotes;
    vm.inputRate;
    vm.inputTax;
    vm.inputTotal;

    $scope.$watch('vm.inputRate', function (current) {
      vm.inputTotal = current || 0;
      console.log('watched');
      debugger;
    });

    vm.loadInvoice();

    function loadInvoice() {
  		//When URL is not re-directed and the parent scope is empty,
  		//such as the page being refreshed, request and find the invoice
  		if(vm.invoice == undefined) {
  			console.warn('undefined');
  			Ajax.getInvoices(function (data) {
  				data.forEach(function (item) {
  					if(item._id === $stateParams.id) {
  						vm.invoice = item;
  					}
  				})
  			});
  		}
    }
	}
})();
