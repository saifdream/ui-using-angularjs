angular.module('oneAutoSuggsion', ['ui.bootstrap']);
angular.module('oneAutoSuggsion').controller('oneAutoSuggsionctrl', function($scope, $http, limitToFilter) {

  $scope.country = undefined;

    $scope.getCountry = function(val) {
        return $http.get('json/countries.json', {
          params: {
        	country: val,
            sensor: false
          }
        }).then(function(response){
            return response.data;
            //return limitToFilter(response.data, 10);
        });
      };
});