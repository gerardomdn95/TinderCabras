(function () {
  'use strict';
  config.$inject = ['$routeProvider'];
  function config($routeProvider) {
    $routeProvider
      .when('/home', {
        template: '<nav-component></nav-component>',
        controllerAs: 'vm'
      })
      .when('/app', {
        template: '<app-component></app-component>',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }
  angular
  .module('myApp')
  .config(config);

})();
