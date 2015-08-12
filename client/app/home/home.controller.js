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

		Ajax.getInvoices(function (data) {
			vm.m = data;
		});
		
		function setInvoice(invoice) {
			$scope.$parent.currentInvoice = invoice;
		}
	}
})();
