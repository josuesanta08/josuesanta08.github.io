(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['$stateParams', 'MenuDataService'];
  function ItemsController($stateParams, MenuDataService) {
  	var itemsList = this;

  	console.log($stateParams.itemId);
  	MenuDataService.getItemsForCategory($stateParams.itemId)
  	.then(function (data) {
        itemsList.items = data;
        console.log(itemsList.items);
  	})
  	.catch(function (error) {
  		console.log(error);
  	});
  }

})();