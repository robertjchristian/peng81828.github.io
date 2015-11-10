var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'pages/myPage.html',
		controller: 'myController'
	})
	.when('/second', {
		templateUrl: 'pages/secondpage.html',
		controller: 'secondController'
	})
	.when('/#/', {
		templateUrl: 'pages/myPage.html',
		controller: 'myController'
	})

});

myApp.controller('secondController', function($scope) {
		$scope.secondName = "Slim Shady";
});

myApp.controller('myController', function($scope) {
	$scope.name = "Jose";
	$scope.edad = "16";
});