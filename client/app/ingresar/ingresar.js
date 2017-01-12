angular
  .module('app')
  .component('logincomponent', {
    templateUrl: '../html/ingresar/ingresar.html',
    controller: IngresarController
  });


function IngresarController($scope,UserService){

	console.log(UserService.alumnos())

	$scope.ingresar = function(data){

	console.log('Ijjjsjs',UserService.ingresar(data))





	}


}
