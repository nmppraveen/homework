var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
$scope.subtract=function(num1,num2)
{
  $scope.result=parseInt(num1)-parseInt(num2);
}

});
