var app = angular.module('slideMenuApp', ['snap','ngRoute','ngTouch','ngResource']);

app.config(['$routeProvider', function($routeProvider) {

		$routeProvider.when('/first/:itemId?', {
			templateUrl:'templates/first-template.html',
			controller:'FirstTemplateCtrl'
		})
		.when('/second/:itemId?', {
			templateUrl:'templates/second-template.html',
			controller:'SecondTemplateCtrl'
		})
		.when('/third/:itemId?', {
			templateUrl:'templates/third-template.html',
			controller:'ThirdTemplateCtrl'
		})
		.otherwise({redirectTo: '/first'});
}]);

app.controller('MainCtrl', function($scope, $http, $location, $rootScope) {

	$scope.title = ''; //this is for the document title binding

	$scope.routingLeftMenu = function(url, id)	{
			window.location = "#/" + url + id;
	}

	$scope.init = function () {

		//Load Left Menu
		$http({method: 'GET', url: 'data/left_menu.json'}).
			success(function(data, status, headers, config) {
			$scope.items = data;
		});
	};
}); //end MainCtrl