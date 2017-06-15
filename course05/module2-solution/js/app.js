(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function ToBuyController($scope, ShoppingListCheckOffService) {
    $scope.to_buy = ShoppingListCheckOffService.to_buy;

    $scope.checkLunch = function () {
      
    };
  }

  AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
    $scope.bought = ShoppingListCheckOffService.bought;

    $scope.checkLunch = function () {
      
    };
  }

  function ShoppingListCheckOffService() {
    var service = this;

    service.to_buy = [
      { name: "cookies", quantity: 10 },
      { name: "pizza", quantity: 1 },
      { name: "juice", quantity: 5 },
      { name: "snacks", quantity: 10 },
      { name: "chocolate", quantity: 3 }
    ];
    service.bought = [];

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