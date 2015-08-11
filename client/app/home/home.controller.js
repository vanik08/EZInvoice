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

	function HomeCtrl(Ajax) {
		var vm = this;

		Ajax.getInvoices(function (data) {
			vm.m = data;
		});
	}
})();
