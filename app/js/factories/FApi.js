(() => {

	'use strict';

	angular.module('app')
		.factory('FApi', function($http)
		{



			// ------------------------------------------------------------
			// Name: getAllBlogs
			// Abstract: Gets all blogs
			// ------------------------------------------------------------
			const getAllBlogs = function()
			{
				let promise = $http({
					method: 'GET',
					url: `http://localhost:3000/api/blog`,
				})

				return promise;
			}



			// ------------------------------------------------------------
			// Name: getSinglePost
			// Abstract: Gets all blogs
			// ------------------------------------------------------------
			const getSinglePost = function(postID)
			{
				let promise = $http({
					method: 'GET',
					url: `http://localhost:3000/api/blog/${postID}`,
				})

				return promise;
			}



			// ------------------------------------------------------------
			// Name: addNewPost
			// Abstract: Adds a new blog post
			// ------------------------------------------------------------
			const addNewPost = function(post)
			{
				let promise = $http({
					method: 'POST',
					data: {
						title: post.title,
						blog: post.blog
					},
					url: `http://localhost:3000/api/blog`,
				})

				return promise;
			}



			// ------------------------------------------------------------
			// Name: addNewComment
			// Abstract: Adds a new blog post
			// ------------------------------------------------------------
			const addNewComment = function(comment)
			{
				let promise = $http({
					method: 'POST',
					data: {
						postID: comment.postID,
						comment: comment.comment
					},
					url: `http://localhost:3000/api/blog/comment`,
				})

				return promise;
			}


			// ------------------------------------------------------------
			// Name: deleteUser
			// Abstract: Deletes a user
			// ------------------------------------------------------------
			const deleteUser = function(postID)
			{
				let promise = $http({
					method: 'DELETE',
					url: `http://localhost:3000/api/users/${postID}`,
				})

				return promise;
			}




			return {
				getAllBlogs,
				getSinglePost,
				addNewPost,
				addNewComment,
				deleteUser,
			}
		})
})();
