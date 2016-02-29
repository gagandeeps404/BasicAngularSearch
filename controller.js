(function(){
	"use strict";
	angular.module("app")
	.controller("myCtrl" ,['$http' , '$scope' , 'appconstants' ,tableController ]);

	function tableController($http, $scope, appconstants){
		var vm =this;
		vm.appName= appconstants.APPLICATION_NAME;
		vm.appVersion = appconstants.APPLICATION_VERSION;
		

		$http.get('data.json').success(function(edata){

			vm.prod =edata;
		});


		
		$scope.edata=vm.prod;
		$scope.orderProp='pname';
		$scope.direction = false;

		$scope.sort = function(column) {
      if ($scope.orderProp === column) {
        $scope.direction = !$scope.direction;
      } else {
        $scope.orderProp = column;
        $scope.direction = false;
      }
    }

	}
}());