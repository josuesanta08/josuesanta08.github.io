(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var NarrowItDown = this;

    NarrowItDown.search = function() {
      var found = MenuSearchService.getMatchedMenuItems(NarrowItDown.searchTerm);
    }
  }

  function MenuSearchService() {
    var service = this;

    var getMatchedMenuItems = function (searchTerm) {
      return $http({
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function (result) {
        // process result and only keep items that match
        var foundItems = result.data;

        console.log(foundItems);

        // return processed items
        return foundItems;
      }, function (error) {
        console.log("Error " + error)
      });
    };
  }
})();