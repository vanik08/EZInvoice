(function() {
  'use strict'
  angular.module('ezinvoiceApp')
    .controller('MainCtrl', function (socket) {
      var vm = this;
      vm.m = 'Test of vm.m';
    });
})();

// 'use strict';

// angular.module('ezinvoiceApp')
//   .controller('MainCtrl', function ($scope, $http, socket) {
//     $scope.awesomeThings = [];

//     $http.get('/api/things').success(function(awesomeThings) {
//       $scope.awesomeThings = awesomeThings;
//       socket.syncUpdates('thing', $scope.awesomeThings);
//     });

//     $scope.addThing = function() {
//       if($scope.newThing === '') {
//         return;
//       }
//       $http.post('/api/things', { name: $scope.newThing });
//       $scope.newThing = '';
//     };

//     $scope.deleteThing = function(thing) {
//       $http.delete('/api/things/' + thing._id);
//     };

//     $scope.$on('$destroy', function () {
//       socket.unsyncUpdates('thing');
//     });
//   });
