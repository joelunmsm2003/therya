angular
  .module('app')
  .component('headercomponent', {
    templateUrl: '../html/header/header.html',
    controller: HeaderController
  });



function HeaderController($scope){


  $scope.createuser= function(data){

  	  console.log('holalalal',data)

  }

}
