// 'use strict';

// angular.module('ezinvoiceApp')
//   .controller('HomeCtrl', function ($scope) {
//     $scope.message = 'Hello';
//   });

(function() {
	'use strict';

	angular
		.module('ezinvoiceApp')
		.controller('HomeCtrl', HomeCtrl)

	function HomeCtrl(Ajax, $scope) {
		//jshint validthis=true
		var vm = this;

		vm.setInvoice = setInvoice;
		vm.createInvoice = createInvoice;
		vm.inputClient;

		getInvoices();
		
		function getInvoices() {
			Ajax.getInvoices(function (data) {
				vm.m = data;
			});
		}
		function setInvoice(invoice) {
			$scope.$parent.currentInvoice = invoice;
		}
		function createInvoice() {
			Ajax.createInvoice(vm.inputClient, function (data) {
				getInvoices();
			});
		}
	}
})();
