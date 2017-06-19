(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('itemsList', itemsList);

  function ItemsList() {
    var ddo = {
      templateUrl: '../templates/itemsList.html',
      scope: {
        list: '<foundItems',
        onRemove: '&'
      },
      controller: ItemsListDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };

    return ddo;
  }

  function ItemsListDirectiveController() {
    var list = this;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var NarrowItDown = this;

    var NarrowItDown.found = [];

    NarrowItDown.search = function() {
      NarrowItDown.found = MenuSearchService.getMatchedMenuItems(NarrowItDown.searchTerm);
    }

    NarrowItDown.removeItem = function ($index) {
      NarrowItDown.found.splice($index, 1);
    };
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function (result) {
        // process result and only keep items that match
        var foundItems = result.data.menu_items;
        foundItems = foundItems.filter(function(menu_item) {
          return menu_item.description.indexOf(searchTerm) !== -1
        });

        // return processed items
        return foundItems;
      }, function (error) {
        console.log("Error " + error)
      });
    };
  }
})();