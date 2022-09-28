angular.module('multiAutoSuggestion', ['ngTagsInput']);
	
angular.module('multiAutoSuggestion').controller('multiAutoSuggestionCtrl', function($scope, $http) {
	
	$scope.tags = [];
	
	$scope.loadCountries = function($query) {
		return $http.get('json/countries.json', { cache: true}).then(function(response) {
	
			var countries = response.data;
	        $scope.Total = countries;
	
	        return countries.filter(function(country) {
	        	return country.name.toLowerCase().indexOf($query.toLowerCase()) != -1;
	        });
	        
	   });
	};
	      
	      $scope.TagItem = [];
	      $scope.TagItem = $scope.tags;
	
});