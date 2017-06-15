(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function ToBuyController($scope, ShoppingListCheckOffService) {
    $scope.to_buy = ShoppingListCheckOffService.to_buy;

    $scope.buy_item = function ($index) {
      ShoppingListCheckOffService.buy_item($index);
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

    service.buy_item = function ($index) {
      service.bought.push(service.to_buy[$index]);
      service.to_buy.splice($index);
    };

    service.removeItem = function (itemIdex) {
      items.splice(itemIdex, 1);
    };

    service.getItems = function () {
      return items;
    };
  }
})();