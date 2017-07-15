(function(){
  'use strict';

  angular
    .module('myApp')
    .component('logComponent',{
      templateUrl: 'src/app/logComponent/log.html',
      controller: logCtrl,
      controllerAs: 'vm'
    });

    function logCtrl() {
      var vm = this;
    }
})();
