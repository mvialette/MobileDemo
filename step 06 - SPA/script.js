var appControllers = angular.module('YourControllers', []);

appControllers.controller('MainController', ['$scope',function($scope) {
	$scope.userName = 'Maxime VIALETTE';
}]);

appControllers.controller('HomeCtrl', ['$scope',function($scope) {
	$scope.pageName = 'Accueil';
}]);

appControllers.controller('EmptyCtrl', ['$scope',function($scope) {
}]);

appControllers.controller('LibraryCtrl', ['$scope',function($scope) {
	var Book = function(bookName, price, publishDate) {
		this.bookName = bookName;
		this.price = price;
		this.publishDate = publishDate;
		this.toString = function() {
			return this.bookName + " (" + this.price; + ")";
		};
	};
	
	var someBooks = [];
	
	someBooks.push(new Book('Devenez un ninja avec AngularJS', '12€', '01/09/2014'));
	someBooks.push(new Book('Devenez un ninja avec AngularJS Second Edition', '24€', '01/09/2014'));
	someBooks.push(new Book('Devenez un ninja avec AngularJS 3th Edition', '36€', '01/09/2014'));
	someBooks.push(new Book('Devenez un ninja avec AngularJS 4th Edition', '48€', '01/09/2014'));
	
	$scope.books = someBooks;
}]);

var monApp = angular.module('YourApp', [ 'ngRoute', 'YourControllers']);

monApp.config(['$routeProvider', function($routeProvider) {

	$routeProvider
		.when('/home', {
				controller : 'HomeCtrl',
				templateUrl : 'partials/home.html'
			}
		).when('/library', {
				controller : 'LibraryCtrl',
				templateUrl : 'partials/library.html'
			}
		).when('/apps', {
				controller : 'EmptyCtrl',
				templateUrl : 'partials/apps.html'
			}
		).when('/settings', {
				controller : 'EmptyCtrl',
				templateUrl : 'partials/settings.html'
			}
		).otherwise(
			{
				redirectTo : '/home'
			}
		);
}]);
/*
monApp.controller('AppCtrl', ['$scope', '$timeout', '$materialSidenav',function($scope, $timeout, $materialSidenav) {
*/

/*
monApp.controller('AppCtrl', ['$scope',function($scope) {
	$scope.toto = 'Jessica';
		
	$scope.toggleLeft = function() {
		$materialSidenav('left').toggle();
	};
	$scope.toggleRight = function() {
		$materialSidenav('right').toggle();
	};
}]);
*/
	