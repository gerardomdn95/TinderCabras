(function(){
  'use strict';

  angular
    .module('myApp')
    .component('appComponent',{
      templateUrl: 'src/app/appComponent/appComponent.html',
      controller: appCtrl,
      controllerAs: 'vm'
    });

    function appCtrl() {
      var vm = this;
    }
})();
