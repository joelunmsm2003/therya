angular
  .module('app')
  .component('homecomponent', {
    templateUrl: '../html/home/home.html',
    controller: HomeController
  });



function HomeController($scope,UserService){


$scope.alumnos = UserService.alumnos()


}
