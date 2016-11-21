(() => {

	'use strict';

	angular.module('app')
		.controller('CPost', function(FApi)
		{

			let vm = this;



			// ------------------------------------------------------------
			// Name: getAllBlogs
			// Abstract: Gets all blogs from database
			// ------------------------------------------------------------
			const getAllBlogs = function()
			{
				// Get all blogs from API
				let blogListPromise = FApi.getAllBlogs();

				// Once returned...
				blogListPromise.then(function(response)
				{
					// Target needed data
					vm.blogList = response.data;
				});
			}



			getAllBlogs();
		})

})();
