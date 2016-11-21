(() => {

	'use strict';

	angular.module('app')
		.controller('CAddPost', function(FApi, FPost, $state)
		{

			let vm = this;




			// ------------------------------------------------------------
			// Name: addPost
			// Abstract: Adds a new post to the blog list
			// ------------------------------------------------------------
			vm.addPost = function(isValid, postForm)
			{
				// Is the form valid?
				if(isValid)
				{
					// Yes, post the image via Database API
					let newPostPromise = FApi.addNewPost(vm.postData);

					// Once returned...
					newPostPromise.then(function(response)
					{
						// Response status 200?
						if(response.status === 200)
						{
							// Yes, reset the form
							FPost.resetForm(postForm);

							vm.postData = {};

							// Redirect the user to the home view
							$state.go('home');
						}
					});
				}
				else
				{
					// No, warn the user to check validation
					alert('Please ensure all fields are valid and try again.');
				}
			}
		})

})();
