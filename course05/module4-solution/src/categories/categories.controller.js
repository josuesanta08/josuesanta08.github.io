(function () {
'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['MenuDataService'];
  function CategoriesController(MenuDataService) {
  	var categoriesList = this;
  	MenuDataService.getAllCategories()
  	.then(function (data) {
        categoriesList.categories = data;
  	})
  	.catch(function (error) {
  		console.log(error);
  	});
  }

})();
