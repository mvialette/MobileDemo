var yourApp = angular.module('YourApp', [ 'ngAnimate', 'ngMaterial' ]);

yourApp.controller('AppCtrl', function($scope, $timeout, $materialSidenav) {

	$scope.texte = 'Maxime';

  $scope.toggleLeft = function() {
    $materialSidenav('left').toggle();
  };
  $scope.toggleRight = function() {
    $materialSidenav('right').toggle();
  };
});

yourApp.controller('LeftCtrl', function($scope, $timeout, $materialSidenav) {
  $scope.close = function() {
    $materialSidenav('left').close();
  };
});

yourApp.controller('RightCtrl', function($scope, $timeout, $materialSidenav) {
  $scope.close = function() {
    $materialSidenav('right').close();
  };
});