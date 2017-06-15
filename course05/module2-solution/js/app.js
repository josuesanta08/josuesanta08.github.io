(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var ToBuy=this;

    ToBuy.to_buy = ShoppingListCheckOffService.to_buy;

    ToBuy.buy_item = function ($index) {
      ShoppingListCheckOffService.buy_item($index);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var Bought=this;
    Bought.bought = ShoppingListCheckOffService.bought;
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
      service.to_buy.splice($index, 1);
    };
  }
})();