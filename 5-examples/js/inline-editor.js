/* The controller is a regular javascript function that
	is called when angularJS runs into the ng-controller declaration. */

function InlineEditorController($scope) {
	/* $scope is a special object that makes its properties available to the
		view as variables.  Here we set some default values: */

	$scope.showtooltip = false;
	$scope.value = 'edit me';

	// Some helper functions that will be available in the angular declarations

	$scope.hideTooltip = function() {
		/* When a model is changed, the view will be automatically
			updated by angular JS.  In this case it will hide the tooltip. */

		$scope.showtooltip = false;
	}

	$scope.toggleTooltip = function(e) {
		e.stopPropagation();
		$scope.showtooltip = !$scope.showtooltip;
	}
}
