'use strict';

(function () {

	'use strict';

	angular.module('app').controller('CPost', function (FApi) {

		var vm = this;

		// ------------------------------------------------------------
		// Name: getAllBlogs
		// Abstract: Gets all blogs from database
		// ------------------------------------------------------------
		var getAllBlogs = function getAllBlogs() {
			// Get all blogs from API
			var blogListPromise = FApi.getAllBlogs();

			// Once returned...
			blogListPromise.then(function (response) {
				// Target needed data
				vm.blogList = response.data;
			});
		};

		getAllBlogs();
	});
})();