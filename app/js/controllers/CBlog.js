(() => {

	'use strict';

	angular.module('app')
		.controller('CBlog', function($state, $stateParams, FApi, FPost)
		{

			let vm = this;

			let postID = $stateParams.id;

			// ------------------------------------------------------------
			// Name: getSinglePost
			// Abstract: Gets single blog from database
			// ------------------------------------------------------------
			const getSinglePost = function()
			{
				// Get all blogs from API
				let blogPromise = FApi.getSinglePost(postID);

				// Once returned...
				blogPromise.then(function(response)
				{
					// Target needed data
					vm.blog = response.data;

					console.log(vm.blog);
				});
			}



			// ------------------------------------------------------------
			// Name: addComment
			// Abstract: Adds a new comment to a blog post
			// ------------------------------------------------------------
			vm.addComment = function(isValid, postForm)
			{
				// Is the form valid?
				if(isValid)
				{
					let commentData = {
						postID: postID,
						comment: vm.postData.comment
					}

					// Yes, post the image via Database API
					let newCommentPromise = FApi.addNewComment(commentData);

					// Once returned...
					newCommentPromise.then(function(response)
					{
						console.log(response);
						// Response status 200?
						if(response.status === 200)
						{
							// Yes, update local data
							vm.blog = response.data;

							// Reset the form
							FPost.resetForm(postForm);

							vm.postData = {};
						}
					});
				}
				else
				{
					// No, warn the user to check validation
					alert('Please ensure all fields are valid and try again.');
				}
			}



			getSinglePost();
		})

})();
