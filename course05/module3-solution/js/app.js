(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'templates/itemsList.html',
      scope: {
        found: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };

    return ddo;
  }

  function FoundItemsDirectiveController() {
    var list = this;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var NarrowItDown = this;

    NarrowItDown.found = [];

    NarrowItDown.search = function() {
      NarrowItDown.found = MenuSearchService.getMatchedMenuItems(NarrowItDown.searchTerm);
      console.log(NarrowItDown.found);
    }

    NarrowItDown.removeItem = function ($index) {
      NarrowItDown.found.splice($index, 1);
    };
  }

  MenuSearchService.$inject = ['$http', '$q'];
  function MenuSearchService($http, $q) {
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
      });
    };
  }
})();