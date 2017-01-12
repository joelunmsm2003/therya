angular
  .module('app')
  .component('newusercomponent', {
    templateUrl: '../html/newuser/newuser.html',
    controller: NewuserController
  });



function NewuserController($scope,UserService){


	$scope.alumnos = UserService.alumnos()

	$scope.newuser = function(data){

		console.log('gfgfgf',data)

	}


}
