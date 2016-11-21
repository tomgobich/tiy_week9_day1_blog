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
'use strict';

(function () {

	'use strict';

	angular.module('app').controller('CBlog', function ($state, $stateParams, FApi, FPost) {

		var vm = this;

		var postID = $stateParams.id;

		// ------------------------------------------------------------
		// Name: getSinglePost
		// Abstract: Gets single blog from database
		// ------------------------------------------------------------
		var getSinglePost = function getSinglePost() {
			// Get all blogs from API
			var blogPromise = FApi.getSinglePost(postID);

			// Once returned...
			blogPromise.then(function (response) {
				// Target needed data
				vm.blog = response.data;

				console.log(vm.blog);
			});
		};

		// ------------------------------------------------------------
		// Name: addComment
		// Abstract: Adds a new comment to a blog post
		// ------------------------------------------------------------
		vm.addComment = function (isValid, postForm) {
			// Is the form valid?
			if (isValid) {
				var commentData = {
					postID: postID,
					comment: vm.postData.comment
				};

				// Yes, post the image via Database API
				var newCommentPromise = FApi.addNewComment(commentData);

				// Once returned...
				newCommentPromise.then(function (response) {
					console.log(response);
					// Response status 200?
					if (response.status === 200) {
						// Yes, update local data
						vm.blog = response.data;

						// Reset the form
						FPost.resetForm(postForm);

						vm.postData = {};
					}
				});
			} else {
				// No, warn the user to check validation
				alert('Please ensure all fields are valid and try again.');
			}
		};

		getSinglePost();
	});
})();
'use strict';

(function () {

	'use strict';

	angular.module('app').controller('CAddPost', function (FApi, FPost, $state) {

		var vm = this;

		// ------------------------------------------------------------
		// Name: addPost
		// Abstract: Adds a new post to the blog list
		// ------------------------------------------------------------
		vm.addPost = function (isValid, postForm) {
			// Is the form valid?
			if (isValid) {
				// Yes, post the image via Database API
				var newPostPromise = FApi.addNewPost(vm.postData);

				// Once returned...
				newPostPromise.then(function (response) {
					// Response status 200?
					if (response.status === 200) {
						// Yes, reset the form
						FPost.resetForm(postForm);

						vm.postData = {};

						// Redirect the user to the home view
						$state.go('home');
					}
				});
			} else {
				// No, warn the user to check validation
				alert('Please ensure all fields are valid and try again.');
			}
		};
	});
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNQb3N0LmpzIiwiQ0Jsb2cuanMiLCJDQWRkUG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJqcy9jb250cm9sbGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0YW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ0NQb3N0JywgZnVuY3Rpb24gKEZBcGkpIHtcblxuXHRcdHZhciB2bSA9IHRoaXM7XG5cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBOYW1lOiBnZXRBbGxCbG9nc1xuXHRcdC8vIEFic3RyYWN0OiBHZXRzIGFsbCBibG9ncyBmcm9tIGRhdGFiYXNlXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0dmFyIGdldEFsbEJsb2dzID0gZnVuY3Rpb24gZ2V0QWxsQmxvZ3MoKSB7XG5cdFx0XHQvLyBHZXQgYWxsIGJsb2dzIGZyb20gQVBJXG5cdFx0XHR2YXIgYmxvZ0xpc3RQcm9taXNlID0gRkFwaS5nZXRBbGxCbG9ncygpO1xuXG5cdFx0XHQvLyBPbmNlIHJldHVybmVkLi4uXG5cdFx0XHRibG9nTGlzdFByb21pc2UudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0Ly8gVGFyZ2V0IG5lZWRlZCBkYXRhXG5cdFx0XHRcdHZtLmJsb2dMaXN0ID0gcmVzcG9uc2UuZGF0YTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHRnZXRBbGxCbG9ncygpO1xuXHR9KTtcbn0pKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29udHJvbGxlcignQ0Jsb2cnLCBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsIEZBcGksIEZQb3N0KSB7XG5cblx0XHR2YXIgdm0gPSB0aGlzO1xuXG5cdFx0dmFyIHBvc3RJRCA9ICRzdGF0ZVBhcmFtcy5pZDtcblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIE5hbWU6IGdldFNpbmdsZVBvc3Rcblx0XHQvLyBBYnN0cmFjdDogR2V0cyBzaW5nbGUgYmxvZyBmcm9tIGRhdGFiYXNlXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0dmFyIGdldFNpbmdsZVBvc3QgPSBmdW5jdGlvbiBnZXRTaW5nbGVQb3N0KCkge1xuXHRcdFx0Ly8gR2V0IGFsbCBibG9ncyBmcm9tIEFQSVxuXHRcdFx0dmFyIGJsb2dQcm9taXNlID0gRkFwaS5nZXRTaW5nbGVQb3N0KHBvc3RJRCk7XG5cblx0XHRcdC8vIE9uY2UgcmV0dXJuZWQuLi5cblx0XHRcdGJsb2dQcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdC8vIFRhcmdldCBuZWVkZWQgZGF0YVxuXHRcdFx0XHR2bS5ibG9nID0gcmVzcG9uc2UuZGF0YTtcblxuXHRcdFx0XHRjb25zb2xlLmxvZyh2bS5ibG9nKTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBOYW1lOiBhZGRDb21tZW50XG5cdFx0Ly8gQWJzdHJhY3Q6IEFkZHMgYSBuZXcgY29tbWVudCB0byBhIGJsb2cgcG9zdFxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdHZtLmFkZENvbW1lbnQgPSBmdW5jdGlvbiAoaXNWYWxpZCwgcG9zdEZvcm0pIHtcblx0XHRcdC8vIElzIHRoZSBmb3JtIHZhbGlkP1xuXHRcdFx0aWYgKGlzVmFsaWQpIHtcblx0XHRcdFx0dmFyIGNvbW1lbnREYXRhID0ge1xuXHRcdFx0XHRcdHBvc3RJRDogcG9zdElELFxuXHRcdFx0XHRcdGNvbW1lbnQ6IHZtLnBvc3REYXRhLmNvbW1lbnRcblx0XHRcdFx0fTtcblxuXHRcdFx0XHQvLyBZZXMsIHBvc3QgdGhlIGltYWdlIHZpYSBEYXRhYmFzZSBBUElcblx0XHRcdFx0dmFyIG5ld0NvbW1lbnRQcm9taXNlID0gRkFwaS5hZGROZXdDb21tZW50KGNvbW1lbnREYXRhKTtcblxuXHRcdFx0XHQvLyBPbmNlIHJldHVybmVkLi4uXG5cdFx0XHRcdG5ld0NvbW1lbnRQcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0XHRcdC8vIFJlc3BvbnNlIHN0YXR1cyAyMDA/XG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRcdFx0XHQvLyBZZXMsIHVwZGF0ZSBsb2NhbCBkYXRhXG5cdFx0XHRcdFx0XHR2bS5ibG9nID0gcmVzcG9uc2UuZGF0YTtcblxuXHRcdFx0XHRcdFx0Ly8gUmVzZXQgdGhlIGZvcm1cblx0XHRcdFx0XHRcdEZQb3N0LnJlc2V0Rm9ybShwb3N0Rm9ybSk7XG5cblx0XHRcdFx0XHRcdHZtLnBvc3REYXRhID0ge307XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIE5vLCB3YXJuIHRoZSB1c2VyIHRvIGNoZWNrIHZhbGlkYXRpb25cblx0XHRcdFx0YWxlcnQoJ1BsZWFzZSBlbnN1cmUgYWxsIGZpZWxkcyBhcmUgdmFsaWQgYW5kIHRyeSBhZ2Fpbi4nKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Z2V0U2luZ2xlUG9zdCgpO1xuXHR9KTtcbn0pKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29udHJvbGxlcignQ0FkZFBvc3QnLCBmdW5jdGlvbiAoRkFwaSwgRlBvc3QsICRzdGF0ZSkge1xuXG5cdFx0dmFyIHZtID0gdGhpcztcblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIE5hbWU6IGFkZFBvc3Rcblx0XHQvLyBBYnN0cmFjdDogQWRkcyBhIG5ldyBwb3N0IHRvIHRoZSBibG9nIGxpc3Rcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHR2bS5hZGRQb3N0ID0gZnVuY3Rpb24gKGlzVmFsaWQsIHBvc3RGb3JtKSB7XG5cdFx0XHQvLyBJcyB0aGUgZm9ybSB2YWxpZD9cblx0XHRcdGlmIChpc1ZhbGlkKSB7XG5cdFx0XHRcdC8vIFllcywgcG9zdCB0aGUgaW1hZ2UgdmlhIERhdGFiYXNlIEFQSVxuXHRcdFx0XHR2YXIgbmV3UG9zdFByb21pc2UgPSBGQXBpLmFkZE5ld1Bvc3Qodm0ucG9zdERhdGEpO1xuXG5cdFx0XHRcdC8vIE9uY2UgcmV0dXJuZWQuLi5cblx0XHRcdFx0bmV3UG9zdFByb21pc2UudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0XHQvLyBSZXNwb25zZSBzdGF0dXMgMjAwP1xuXHRcdFx0XHRcdGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0XHRcdFx0Ly8gWWVzLCByZXNldCB0aGUgZm9ybVxuXHRcdFx0XHRcdFx0RlBvc3QucmVzZXRGb3JtKHBvc3RGb3JtKTtcblxuXHRcdFx0XHRcdFx0dm0ucG9zdERhdGEgPSB7fTtcblxuXHRcdFx0XHRcdFx0Ly8gUmVkaXJlY3QgdGhlIHVzZXIgdG8gdGhlIGhvbWUgdmlld1xuXHRcdFx0XHRcdFx0JHN0YXRlLmdvKCdob21lJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIE5vLCB3YXJuIHRoZSB1c2VyIHRvIGNoZWNrIHZhbGlkYXRpb25cblx0XHRcdFx0YWxlcnQoJ1BsZWFzZSBlbnN1cmUgYWxsIGZpZWxkcyBhcmUgdmFsaWQgYW5kIHRyeSBhZ2Fpbi4nKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9KTtcbn0pKCk7Il19
