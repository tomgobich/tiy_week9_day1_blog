(() => {

	'use strict';

	angular.module('app')
		.factory('FPost', function()
		{



			// ------------------------------------------------------------
			// Name: resetForm
			// Abstract: Resets angular form states
			// ------------------------------------------------------------
			const resetForm = function(form)
			{
				// Reset angular states
				form.$setPristine();
				form.$setUntouched();
			}




			return {
				resetForm
			}
		})
})();
