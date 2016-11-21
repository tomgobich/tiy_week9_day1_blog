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
		}).state('login', {
			url: '/login',
			templateUrl: 'partials/login.html',
			controller: 'CLogin',
			controllerAs: 'controller'
		});
	}
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianMvbWFpbi1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ3VpLnJvdXRlcicsICduZ0FuaW1hdGUnXSkuZmlsdGVyKCdtb21lbnQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChpbnB1dCkge1xuXHRcdFx0cmV0dXJuIG1vbWVudChpbnB1dCkuZnJvbU5vdygpO1xuXHRcdH07XG5cdH0pLmNvbmZpZyhhcHBDb25maWcpO1xuXG5cdGFwcENvbmZpZy4kaW5qZWN0ID0gWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInXTtcblx0ZnVuY3Rpb24gYXBwQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcblx0XHQkc3RhdGVQcm92aWRlci5zdGF0ZSgnaG9tZScsIHtcblx0XHRcdHVybDogJy8nLFxuXHRcdFx0dGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9ob21lLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ0NQb3N0Jyxcblx0XHRcdGNvbnRyb2xsZXJBczogJ2NvbnRyb2xsZXInXG5cdFx0fSkuc3RhdGUoJ2Jsb2cnLCB7XG5cdFx0XHR1cmw6ICcvYmxvZy86aWQnLFxuXHRcdFx0dGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9ibG9nLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ0NCbG9nJyxcblx0XHRcdGNvbnRyb2xsZXJBczogJ2NvbnRyb2xsZXInXG5cdFx0fSkuc3RhdGUoJ2FkZE5ldycsIHtcblx0XHRcdHVybDogJy9hZGQtcG9zdCcsXG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL2FkZC1wb3N0Lmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ0NBZGRQb3N0Jyxcblx0XHRcdGNvbnRyb2xsZXJBczogJ2NvbnRyb2xsZXInXG5cdFx0fSkuc3RhdGUoJ2xvZ2luJywge1xuXHRcdFx0dXJsOiAnL2xvZ2luJyxcblx0XHRcdHRlbXBsYXRlVXJsOiAncGFydGlhbHMvbG9naW4uaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAnQ0xvZ2luJyxcblx0XHRcdGNvbnRyb2xsZXJBczogJ2NvbnRyb2xsZXInXG5cdFx0fSk7XG5cdH1cbn0pKCk7Il19
