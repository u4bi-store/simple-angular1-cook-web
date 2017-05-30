var 
    app = angular.module("app", ['ngRoute', 'angularCSS']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/intro', {
      templateUrl: './template/intro.html',
      controller: 'introCtrl',
      css : './css/introCtrl.css'
    })
    .when('/main', {
      templateUrl: './template/main.html',
      controller: 'mainCtrl',
      css : ['css/common.css' , './css/mainCtrl.css']
    })
    .otherwise({
      redirectTo: '/intro'
    });
}]);

app.run(function($rootScope){
  console.log('init');
  $rootScope.app = 'angular1 : ';

});

app.controller('introCtrl', function($scope, $rootScope, Good){
  $scope.title = $rootScope.app + Good.fix('intro');

});

app.controller('mainCtrl', function($scope, $rootScope, Good){
  $scope.title = $rootScope.app + Good.fix('main');

});

app.factory('Good', Good);

function Good(){
  return {
    fix : fix,
  }
  
  function fix(value){
    return value.toUpperCase();
  };

}