angular.module('popupApp', ['ui.bootstrap']);
angular.module('popupApp').controller('ModalDemoCtrl', function ($scope, $modal, $log) {

  //$scope.one = '';
  //$scope.two = '';
  //$scope.three = '';
  //$scope.four = '';

  $scope.animationsEnabled = true;
  
  // One Function
  $scope.openOne = function () {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'one.html',
      controller: 'oneModalInstanceCtrl',
      resolve: {
    	  one: function () {
          return $scope.one;
        }
      }
    });

    modalInstance.result.then(function (one) {
      $scope.one = one;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
  
  //Two Function
  $scope.openTwo = function () {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'two.html',
      controller: 'twoModalInstanceCtrl',
      resolve: {
        two: function () {
          return $scope.two;
        }
      }
    });

    modalInstance.result.then(function (two) {
      $scope.two = two;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
  
  //Three Function
  $scope.openThree = function () {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'three.html',
      controller: 'threeModalInstanceCtrl',
      resolve: {
        three: function () {
          return $scope.three;
        }
      }
    });

    modalInstance.result.then(function (three) {
      $scope.three = three;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
  
  //Four Function
  $scope.openFour = function () {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'four.html',
      controller: 'fourModalInstanceCtrl',
      resolve: {
    	  four: function () {
          return $scope.four;
        }
      }
    });

    modalInstance.result.then(function (four) {
      $scope.four = four;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('popupApp').controller('oneModalInstanceCtrl', function ($scope, $modalInstance, one) {

  $scope.one = one;

  $scope.ok = function () {
    $modalInstance.close($scope.one);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

angular.module('popupApp').controller('twoModalInstanceCtrl', function ($scope, $modalInstance, two) {

	$scope.two = two;

	  $scope.ok = function () {
	    $modalInstance.close($scope.two);
	  };

	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
	});

angular.module('popupApp').controller('threeModalInstanceCtrl', function ($scope, $modalInstance, three) {

	$scope.three = three;

	  $scope.ok = function () {
	    $modalInstance.close($scope.three);
	  };

	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
	});

angular.module('popupApp').controller('fourModalInstanceCtrl', function ($scope, $modalInstance, four) {

	$scope.four = four;

	  $scope.ok = function () {
	    $modalInstance.close($scope.four);
	  };

	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
	});