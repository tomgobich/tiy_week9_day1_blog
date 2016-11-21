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