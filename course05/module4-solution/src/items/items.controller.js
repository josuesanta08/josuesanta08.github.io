(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['$stateParams', 'MenuDataService', 'items'];
  function ItemsController($stateParams, MenuDataService, items) {
  	var itemsList = this;
    itemsList.items = items;
  }

})();