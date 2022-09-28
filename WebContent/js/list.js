/* List Page Application Using AngularJS */
var list = angular.module('list', []);

/* This Function verify Pending task before form submit. */
/*
list.service("listService", function ($q, $timeout){
	this.getAsync = function () {
        var deferred = $q.defer();
        $timeout(function () {
            deferred.resolve("columnName");
            deferred.resolve("pageNumber");
        });
        return deferred.promise;
	};
});
*/

/* List Page Controller */
list.controller('listController', function ($scope) {
	
	$scope.personlist = [
	                   { id:1, fname: 'Md Saiful', lname:'Islam', email:'saif99.2012@gmail.com', contact:'01612205942', role:'Admin' },
	                   { id:2, fname: 'Md Saiful', lname:'Islam', email:'saif79.2012@gmail.com', contact:'01912205942', role:'Manager' },
	                   { id:3, fname: 'Md Saiful', lname:'Islam', email:'saif69.2012@gmail.com', contact:'01712205942', role:'Accountant' },
	                   { id:4, fname: 'Md Saiful', lname:'Islam', email:'saif59.2012@gmail.com', contact:'01812205942', role:'Executive' },
	                   { id:5, fname: 'Md Saiful', lname:'Islam', email:'saif89.2012@gmail.com', contact:'01512205942', role:'Officer' }
	                  ];
	  
	/* This function work when page is loaded.
	 * List Page Properties */
	$scope.getList  = function(){
		  
		  $scope.totalPage = 100;
		  $scope.currentTotalPage = 50;
		  $scope.currentPage = 1;
		  $scope.entriPerPage= 10;
		  $scope.pageNumber = $scope.currentPage;
	  }
	$scope.getList();
	 
	/*Column Sorting Function*/
	$scope.setColumnValue = function(name){
		  
		  //$scope.columnName = name;
		  //$scope.sortQuery();
		$('input[name="columnName"]').val(name);
		document.getList.submit();
	  }
	  
	/*List Sorting Query Submit Function*/
	/*
	$scope.sortQuery  = function(){
		
		listService.getAsync().then(function(result) {
            $scope.columnName = result;
            document.getList.submit();
        });
	  }*/
	
	/*Page Number Query Function*/
	$scope.setPageValue = function(pageNo){
		  
		$('input[name="pageNumber"]').val(pageNo);
		document.getList.submit();
	  }
});