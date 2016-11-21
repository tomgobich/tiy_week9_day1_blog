'use strict';

(function () {

	'use strict';

	angular.module('app').factory('FApi', function ($http) {

		// ------------------------------------------------------------
		// Name: getAllBlogs
		// Abstract: Gets all blogs
		// ------------------------------------------------------------
		var getAllBlogs = function getAllBlogs() {
			var promise = $http({
				method: 'GET',
				url: 'http://localhost:3000/api/blog'
			});

			return promise;
		};

		// ------------------------------------------------------------
		// Name: getSinglePost
		// Abstract: Gets all blogs
		// ------------------------------------------------------------
		var getSinglePost = function getSinglePost(postID) {
			var promise = $http({
				method: 'GET',
				url: 'http://localhost:3000/api/blog/' + postID
			});

			return promise;
		};

		// ------------------------------------------------------------
		// Name: addNewPost
		// Abstract: Adds a new blog post
		// ------------------------------------------------------------
		var addNewPost = function addNewPost(post) {
			var promise = $http({
				method: 'POST',
				data: {
					title: post.title,
					blog: post.blog
				},
				url: 'http://localhost:3000/api/blog'
			});

			return promise;
		};

		// ------------------------------------------------------------
		// Name: addNewComment
		// Abstract: Adds a new blog post
		// ------------------------------------------------------------
		var addNewComment = function addNewComment(comment) {
			var promise = $http({
				method: 'POST',
				data: {
					postID: comment.postID,
					comment: comment.comment
				},
				url: 'http://localhost:3000/api/blog/comment'
			});

			return promise;
		};

		// ------------------------------------------------------------
		// Name: deleteUser
		// Abstract: Deletes a user
		// ------------------------------------------------------------
		var deleteUser = function deleteUser(postID) {
			var promise = $http({
				method: 'DELETE',
				url: 'http://localhost:3000/api/users/' + postID
			});

			return promise;
		};

		return {
			getAllBlogs: getAllBlogs,
			getSinglePost: getSinglePost,
			addNewPost: addNewPost,
			addNewComment: addNewComment,
			deleteUser: deleteUser
		};
	});
})();