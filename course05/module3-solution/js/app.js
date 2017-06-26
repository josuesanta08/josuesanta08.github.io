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
        onRemove: '&',
        hasItems: '<'
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

    NarrowItDown.hasItems = true;
    NarrowItDown.found = [];

    NarrowItDown.search = function() {
      var promise = MenuSearchService.getMatchedMenuItems(NarrowItDown.searchTerm);
      promise.then(function (data) {
        NarrowItDown.found = data;
        NarrowItDown.hasItems = NarrowItDown.found.length ? true : false;
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    NarrowItDown.removeItem = function ($index) {
      NarrowItDown.found.splice($index, 1);
    };
  }

  MenuSearchService.$inject = ['$http', '$q'];
  function MenuSearchService($http, $q) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      if (searchTerm === "") {
        searchTerm = null;
      }
      var deferred = $q.defer();
      $http({
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function (result) {
        // process result and only keep items that match
        var foundItems = result.data.menu_items;
        foundItems = foundItems.filter(function(menu_item) {
          return menu_item.description.indexOf(searchTerm) !== -1
        });

        // return processed items
        deferred.resolve(foundItems);
      });
      return deferred.promise;
    };
  }
})();