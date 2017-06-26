(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;

    service.getAllCategories = function () {
      return $http({
        url: "https://davids-restaurant.herokuapp.com/categories.json"
      }).then(function (result) {
        // process result and only keep items that match
        var foundItems = result.data;
        return foundItems;
      });
    };

    service.getItemsForCategory = function (categoryShortName) {
      url = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName;
      return $http({
        url: url
      }).then(function (result) {
        // process result and only keep items that match
        var foundItems = result.data;
        return foundItems;
      });
    };
  }
})();