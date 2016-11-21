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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNQb3N0LmpzIiwiQ0Jsb2cuanMiLCJDQWRkUG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJqcy9jb250cm9sbGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0YW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ0NQb3N0JywgZnVuY3Rpb24gKEZBcGkpIHtcblxuXHRcdHZhciB2bSA9IHRoaXM7XG5cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBOYW1lOiBnZXRBbGxCbG9nc1xuXHRcdC8vIEFic3RyYWN0OiBHZXRzIGFsbCBibG9ncyBmcm9tIGRhdGFiYXNlXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0dmFyIGdldEFsbEJsb2dzID0gZnVuY3Rpb24gZ2V0QWxsQmxvZ3MoKSB7XG5cdFx0XHQvLyBHZXQgYWxsIGJsb2dzIGZyb20gQVBJXG5cdFx0XHR2YXIgYmxvZ0xpc3RQcm9taXNlID0gRkFwaS5nZXRBbGxCbG9ncygpO1xuXG5cdFx0XHQvLyBPbmNlIHJldHVybmVkLi4uXG5cdFx0XHRibG9nTGlzdFByb21pc2UudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0Ly8gVGFyZ2V0IG5lZWRlZCBkYXRhXG5cdFx0XHRcdHZtLmJsb2dMaXN0ID0gcmVzcG9uc2UuZGF0YTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHRnZXRBbGxCbG9ncygpO1xuXHR9KTtcbn0pKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29udHJvbGxlcignQ0Jsb2cnLCBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsIEZBcGksIEZQb3N0KSB7XG5cblx0XHR2YXIgdm0gPSB0aGlzO1xuXG5cdFx0dmFyIHBvc3RJRCA9ICRzdGF0ZVBhcmFtcy5pZDtcblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIE5hbWU6IGdldFNpbmdsZVBvc3Rcblx0XHQvLyBBYnN0cmFjdDogR2V0cyBzaW5nbGUgYmxvZyBmcm9tIGRhdGFiYXNlXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0dmFyIGdldFNpbmdsZVBvc3QgPSBmdW5jdGlvbiBnZXRTaW5nbGVQb3N0KCkge1xuXHRcdFx0Ly8gR2V0IGFsbCBibG9ncyBmcm9tIEFQSVxuXHRcdFx0dmFyIGJsb2dQcm9taXNlID0gRkFwaS5nZXRTaW5nbGVQb3N0KHBvc3RJRCk7XG5cblx0XHRcdC8vIE9uY2UgcmV0dXJuZWQuLi5cblx0XHRcdGJsb2dQcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdC8vIFRhcmdldCBuZWVkZWQgZGF0YVxuXHRcdFx0XHR2bS5ibG9nID0gcmVzcG9uc2UuZGF0YTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBOYW1lOiBhZGRDb21tZW50XG5cdFx0Ly8gQWJzdHJhY3Q6IEFkZHMgYSBuZXcgY29tbWVudCB0byBhIGJsb2cgcG9zdFxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdHZtLmFkZENvbW1lbnQgPSBmdW5jdGlvbiAoaXNWYWxpZCwgcG9zdEZvcm0pIHtcblx0XHRcdC8vIElzIHRoZSBmb3JtIHZhbGlkP1xuXHRcdFx0aWYgKGlzVmFsaWQpIHtcblx0XHRcdFx0dmFyIGNvbW1lbnREYXRhID0ge1xuXHRcdFx0XHRcdHBvc3RJRDogcG9zdElELFxuXHRcdFx0XHRcdGNvbW1lbnQ6IHZtLnBvc3REYXRhLmNvbW1lbnRcblx0XHRcdFx0fTtcblxuXHRcdFx0XHQvLyBZZXMsIHBvc3QgdGhlIGltYWdlIHZpYSBEYXRhYmFzZSBBUElcblx0XHRcdFx0dmFyIG5ld0NvbW1lbnRQcm9taXNlID0gRkFwaS5hZGROZXdDb21tZW50KGNvbW1lbnREYXRhKTtcblxuXHRcdFx0XHQvLyBPbmNlIHJldHVybmVkLi4uXG5cdFx0XHRcdG5ld0NvbW1lbnRQcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0Ly8gUmVzcG9uc2Ugc3RhdHVzIDIwMD9cblx0XHRcdFx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcblx0XHRcdFx0XHRcdC8vIFllcywgdXBkYXRlIGxvY2FsIGRhdGFcblx0XHRcdFx0XHRcdHZtLmJsb2cgPSByZXNwb25zZS5kYXRhO1xuXG5cdFx0XHRcdFx0XHQvLyBSZXNldCB0aGUgZm9ybVxuXHRcdFx0XHRcdFx0RlBvc3QucmVzZXRGb3JtKHBvc3RGb3JtKTtcblxuXHRcdFx0XHRcdFx0dm0ucG9zdERhdGEgPSB7fTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gTm8sIHdhcm4gdGhlIHVzZXIgdG8gY2hlY2sgdmFsaWRhdGlvblxuXHRcdFx0XHRhbGVydCgnUGxlYXNlIGVuc3VyZSBhbGwgZmllbGRzIGFyZSB2YWxpZCBhbmQgdHJ5IGFnYWluLicpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRnZXRTaW5nbGVQb3N0KCk7XG5cdH0pO1xufSkoKTsiLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb250cm9sbGVyKCdDQWRkUG9zdCcsIGZ1bmN0aW9uIChGQXBpLCBGUG9zdCwgJHN0YXRlKSB7XG5cblx0XHR2YXIgdm0gPSB0aGlzO1xuXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gTmFtZTogYWRkUG9zdFxuXHRcdC8vIEFic3RyYWN0OiBBZGRzIGEgbmV3IHBvc3QgdG8gdGhlIGJsb2cgbGlzdFxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdHZtLmFkZFBvc3QgPSBmdW5jdGlvbiAoaXNWYWxpZCwgcG9zdEZvcm0pIHtcblx0XHRcdC8vIElzIHRoZSBmb3JtIHZhbGlkP1xuXHRcdFx0aWYgKGlzVmFsaWQpIHtcblx0XHRcdFx0Ly8gWWVzLCBwb3N0IHRoZSBpbWFnZSB2aWEgRGF0YWJhc2UgQVBJXG5cdFx0XHRcdHZhciBuZXdQb3N0UHJvbWlzZSA9IEZBcGkuYWRkTmV3UG9zdCh2bS5wb3N0RGF0YSk7XG5cblx0XHRcdFx0Ly8gT25jZSByZXR1cm5lZC4uLlxuXHRcdFx0XHRuZXdQb3N0UHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRcdC8vIFJlc3BvbnNlIHN0YXR1cyAyMDA/XG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRcdFx0XHQvLyBZZXMsIHJlc2V0IHRoZSBmb3JtXG5cdFx0XHRcdFx0XHRGUG9zdC5yZXNldEZvcm0ocG9zdEZvcm0pO1xuXG5cdFx0XHRcdFx0XHR2bS5wb3N0RGF0YSA9IHt9O1xuXG5cdFx0XHRcdFx0XHQvLyBSZWRpcmVjdCB0aGUgdXNlciB0byB0aGUgaG9tZSB2aWV3XG5cdFx0XHRcdFx0XHQkc3RhdGUuZ28oJ2hvbWUnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gTm8sIHdhcm4gdGhlIHVzZXIgdG8gY2hlY2sgdmFsaWRhdGlvblxuXHRcdFx0XHRhbGVydCgnUGxlYXNlIGVuc3VyZSBhbGwgZmllbGRzIGFyZSB2YWxpZCBhbmQgdHJ5IGFnYWluLicpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0pO1xufSkoKTsiXX0=
