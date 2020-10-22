var app = angular.module("app", []);
app.controller("controller", function ($scope, $http) {
   $scope.nota1 = "";
   $scope.nota2 = "";
   $scope.nota3 = "";
   $scope.calcular = function () {
      $scope.sumatoria = $scope.nota1 + $scope.nota2 + $scope.nota3;
      $scope.promedio = (($scope.nota1 + $scope.nota2 + $scope.nota3) / 3).toFixed(2);
      $scope.mayor = Math.max($scope.nota1, $scope.nota2, $scope.nota3);
      $scope.menor = Math.min($scope.nota1, $scope.nota2, $scope.nota3);
      $scope.intermedio = ($scope.nota1 != $scope.mayor || $scope.nota1 != $scope.menor) ? $scope.nota1 : (($scope.nota2 != $scope.mayor || $scope.nota2 != $scope.menor) ? $scope.nota2:($scope.nota3 != $scope.mayor || $scope.nota3 != $scope.menor) ? $scope.nota3:0);
   }
});