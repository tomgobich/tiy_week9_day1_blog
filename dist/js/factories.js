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
'use strict';

(function () {

	'use strict';

	angular.module('app').factory('FPost', function () {

		// ------------------------------------------------------------
		// Name: resetForm
		// Abstract: Resets angular form states
		// ------------------------------------------------------------
		var resetForm = function resetForm(form) {
			// Reset angular states
			form.$setPristine();
			form.$setUntouched();
		};

		return {
			resetForm: resetForm
		};
	});
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZBcGkuanMiLCJGUG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJqcy9mYWN0b3JpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5mYWN0b3J5KCdGQXBpJywgZnVuY3Rpb24gKCRodHRwKSB7XG5cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBOYW1lOiBnZXRBbGxCbG9nc1xuXHRcdC8vIEFic3RyYWN0OiBHZXRzIGFsbCBibG9nc1xuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdHZhciBnZXRBbGxCbG9ncyA9IGZ1bmN0aW9uIGdldEFsbEJsb2dzKCkge1xuXHRcdFx0dmFyIHByb21pc2UgPSAkaHR0cCh7XG5cdFx0XHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0XHRcdHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYmxvZydcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHR9O1xuXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gTmFtZTogZ2V0U2luZ2xlUG9zdFxuXHRcdC8vIEFic3RyYWN0OiBHZXRzIGFsbCBibG9nc1xuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdHZhciBnZXRTaW5nbGVQb3N0ID0gZnVuY3Rpb24gZ2V0U2luZ2xlUG9zdChwb3N0SUQpIHtcblx0XHRcdHZhciBwcm9taXNlID0gJGh0dHAoe1xuXHRcdFx0XHRtZXRob2Q6ICdHRVQnLFxuXHRcdFx0XHR1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2Jsb2cvJyArIHBvc3RJRFxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdH07XG5cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBOYW1lOiBhZGROZXdQb3N0XG5cdFx0Ly8gQWJzdHJhY3Q6IEFkZHMgYSBuZXcgYmxvZyBwb3N0XG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0dmFyIGFkZE5ld1Bvc3QgPSBmdW5jdGlvbiBhZGROZXdQb3N0KHBvc3QpIHtcblx0XHRcdHZhciBwcm9taXNlID0gJGh0dHAoe1xuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdHRpdGxlOiBwb3N0LnRpdGxlLFxuXHRcdFx0XHRcdGJsb2c6IHBvc3QuYmxvZ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2Jsb2cnXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0fTtcblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIE5hbWU6IGFkZE5ld0NvbW1lbnRcblx0XHQvLyBBYnN0cmFjdDogQWRkcyBhIG5ldyBibG9nIHBvc3Rcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHR2YXIgYWRkTmV3Q29tbWVudCA9IGZ1bmN0aW9uIGFkZE5ld0NvbW1lbnQoY29tbWVudCkge1xuXHRcdFx0dmFyIHByb21pc2UgPSAkaHR0cCh7XG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0cG9zdElEOiBjb21tZW50LnBvc3RJRCxcblx0XHRcdFx0XHRjb21tZW50OiBjb21tZW50LmNvbW1lbnRcblx0XHRcdFx0fSxcblx0XHRcdFx0dXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ibG9nL2NvbW1lbnQnXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0fTtcblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIE5hbWU6IGRlbGV0ZVVzZXJcblx0XHQvLyBBYnN0cmFjdDogRGVsZXRlcyBhIHVzZXJcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHR2YXIgZGVsZXRlVXNlciA9IGZ1bmN0aW9uIGRlbGV0ZVVzZXIocG9zdElEKSB7XG5cdFx0XHR2YXIgcHJvbWlzZSA9ICRodHRwKHtcblx0XHRcdFx0bWV0aG9kOiAnREVMRVRFJyxcblx0XHRcdFx0dXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2Vycy8nICsgcG9zdElEXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0fTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRnZXRBbGxCbG9nczogZ2V0QWxsQmxvZ3MsXG5cdFx0XHRnZXRTaW5nbGVQb3N0OiBnZXRTaW5nbGVQb3N0LFxuXHRcdFx0YWRkTmV3UG9zdDogYWRkTmV3UG9zdCxcblx0XHRcdGFkZE5ld0NvbW1lbnQ6IGFkZE5ld0NvbW1lbnQsXG5cdFx0XHRkZWxldGVVc2VyOiBkZWxldGVVc2VyXG5cdFx0fTtcblx0fSk7XG59KSgpOyIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0YW5ndWxhci5tb2R1bGUoJ2FwcCcpLmZhY3RvcnkoJ0ZQb3N0JywgZnVuY3Rpb24gKCkge1xuXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gTmFtZTogcmVzZXRGb3JtXG5cdFx0Ly8gQWJzdHJhY3Q6IFJlc2V0cyBhbmd1bGFyIGZvcm0gc3RhdGVzXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0dmFyIHJlc2V0Rm9ybSA9IGZ1bmN0aW9uIHJlc2V0Rm9ybShmb3JtKSB7XG5cdFx0XHQvLyBSZXNldCBhbmd1bGFyIHN0YXRlc1xuXHRcdFx0Zm9ybS4kc2V0UHJpc3RpbmUoKTtcblx0XHRcdGZvcm0uJHNldFVudG91Y2hlZCgpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0cmVzZXRGb3JtOiByZXNldEZvcm1cblx0XHR9O1xuXHR9KTtcbn0pKCk7Il19
