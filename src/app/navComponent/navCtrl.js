(function(){
  'use strict';

  angular
    .module('myApp')
    .component('navComponent',{
      templateUrl: 'src/app/navComponent/navctrl.html',
      controller: navCtrl,
      controllerAs: 'vm'
    });

    function navCtrl() {
      var vm = this;
    }
})();
