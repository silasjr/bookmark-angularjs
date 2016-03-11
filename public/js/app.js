var app = angular.module('bookmark', ['ngRoute', 'ngAnimate', 'ngMessages', 'ngTable']);

 /**
 * Configure Angular ngApp with route and cache the needed providers
 */
app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		  when('/', {
		    templateUrl: 'views/home.html',
		    controller: 'HomeController'
		  }).when('/bookmark', {
		    templateUrl: 'views/bookmark-list.html',
		    controller: 'BookmarkListCtrl'
		  }).when('/bookmark/list', {
		    templateUrl: 'views/bookmark-form.html',
		    controller: 'HomeController'
		  }).
		  otherwise({
		    redirectTo: '/'
		  });
	}
]);