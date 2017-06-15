(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function ToBuyController($scope, ShoppingListCheckOffService) {
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

  AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
    
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var service.to_buy = [
      { name: "cookies", quantity: 10 },
      { name: "pizza", quantity: 1 },
      { name: "juice", quantity: 5 },
      { name: "snacks", quantity: 10 },
      { name: "chocolate", quantity: 3 }
    ];
    var service.bought = [];

    // List of shopping items
    var items = [];

    service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    };

    service.removeItem = function (itemIdex) {
      items.splice(itemIdex, 1);
    };

    service.getItems = function () {
      return items;
    };
  }
})();