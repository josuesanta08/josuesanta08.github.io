(function () {
  'use strict';

  angular.module('data')
  .component('items', {
  	templateUrl: 'src/items/templates/items.template.html',
  	bindings: {
  		items: '<'
  	}
  });
})();