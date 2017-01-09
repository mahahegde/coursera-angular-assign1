(function(){
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope','$filter'];
  function LunchCheckController($scope){
    $scope.message = "";
    $scope.checkLunchMenu = function () {
      var count = 0;
      // Check for entered string to contain at least a non-whitespace character
      if ( (typeof $scope.lunchMenu != 'undefined') && /\S+/.test($scope.lunchMenu) ) {
        // Split the string at comma
        count = $scope.lunchMenu.split(",").length
      }
      // Check number of comma separated strings and set message accordingly
      if ( count == 0 ){
        $scope.message = "Please enter data first";
      }else if ( count <= 3 ){
        $scope.message = "Enjoy!";
      }else {
        $scope.message = "Too much!"
      }
    };
  }
})();
