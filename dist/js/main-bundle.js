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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJqcy9tYWluLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0YW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsndWkucm91dGVyJywgJ25nQW5pbWF0ZSddKS5maWx0ZXIoJ21vbWVudCcsIGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XG5cdFx0XHRyZXR1cm4gbW9tZW50KGlucHV0KS5mcm9tTm93KCk7XG5cdFx0fTtcblx0fSkuY29uZmlnKGFwcENvbmZpZyk7XG5cblx0YXBwQ29uZmlnLiRpbmplY3QgPSBbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlciddO1xuXHRmdW5jdGlvbiBhcHBDb25maWcoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuXHRcdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdob21lJywge1xuXHRcdFx0dXJsOiAnLycsXG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL2hvbWUuaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAnQ1Bvc3QnLFxuXHRcdFx0Y29udHJvbGxlckFzOiAnY29udHJvbGxlcidcblx0XHR9KS5zdGF0ZSgnYmxvZycsIHtcblx0XHRcdHVybDogJy9ibG9nLzppZCcsXG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL2Jsb2cuaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAnQ0Jsb2cnLFxuXHRcdFx0Y29udHJvbGxlckFzOiAnY29udHJvbGxlcidcblx0XHR9KS5zdGF0ZSgnYWRkTmV3Jywge1xuXHRcdFx0dXJsOiAnL2FkZC1wb3N0Jyxcblx0XHRcdHRlbXBsYXRlVXJsOiAncGFydGlhbHMvYWRkLXBvc3QuaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAnQ0FkZFBvc3QnLFxuXHRcdFx0Y29udHJvbGxlckFzOiAnY29udHJvbGxlcidcblx0XHR9KTtcblx0fVxufSkoKTsiXX0=
