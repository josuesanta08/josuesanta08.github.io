(function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.message = "";

    $scope.checkLunch = function () {
      if($scope.food) {
        var res = $scope.food.split(",");
        $scope.message = res.length>3 ? "Too much!" : "Enjoy!";
      } else {
        $scope.message = "Please enter data first";
      }
    };
  }
})();