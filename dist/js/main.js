'use strict';

(function () {

	'use strict';

	angular.module('app', ['ui.router', 'ngAnimate']).filter('moment', function () {
		return function (input) {
			return moment(input).fromNow();
		};
	}).config(appConfig);

	appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function appConfig($stateProvider, $urlRouterProvider) {
		$stateProvider.state('home', {
			url: '/',
			templateUrl: 'partials/home.html',
			controller: 'CPost',
			controllerAs: 'controller'
		}).state('blog', {
			url: '/blog/:id',
			templateUrl: 'partials/blog.html',
			controller: 'CBlog',
			controllerAs: 'controller'
		}).state('addNew', {
			url: '/add-post',
			templateUrl: 'partials/add-post.html',
			controller: 'CAddPost',
			controllerAs: 'controller'
		});
	}
})();