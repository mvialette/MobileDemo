/**
'ngAnimate', 'ngMaterial'
*/

var monApp = angular.module('YourApp', []);

/*
monApp.controller('AppCtrl', ['$scope', '$timeout', '$materialSidenav',function($scope, $timeout, $materialSidenav) {
*/
monApp.controller('AppCtrl', ['$scope',function($scope) {
		$scope.toto = 'Maxime';
	}]);
		
	/*
	$scope.toggleLeft = function() {
		$materialSidenav('left').toggle();
	};
	$scope.toggleRight = function() {
		$materialSidenav('right').toggle();
	};
	
}]);

/*
monApp.controller('LeftCtrl', function($scope, $timeout, $materialSidenav) {
  $scope.close = function() {
    $materialSidenav('left').close();
  };
});

monApp.controller('RightCtrl', function($scope, $timeout, $materialSidenav) {
  $scope.close = function() {
    $materialSidenav('right').close();
  };
});
*/