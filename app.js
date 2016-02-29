(function(){
	
	var app= angular.module('app' , ['ngRoute']);

	app.config(['$routeProvider' , function($routeProvider){
	$routeProvider

	.when('/home',{
		templateUrl: 'home1.html'
	})

	.when('/product',{
		templateUrl: 'product.html'
	})

	.when('/about',{
		templateUrl:'about.html'
		
	})

	.when('/product/:pcode',{
		templateUrl:'eobj_pcode.html',
		controller: 'myCtrl'
	})

	.otherwise({redirectTo: '/home'});

}]);
})();