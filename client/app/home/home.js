angular
  .module('app')
  .component('homecomponent', {
    templateUrl: '../html/home/home.html',
    controller: HomeController
  });



function HomeController($scope,$firebaseObject,$firebaseArray,$filter){





    var ref = firebase.database().ref().child("PEDIDOS");
  // create a synchronized array
  // click on `index.html` above to see it used in the DOM!
  $scope.pedidos = $firebaseArray(ref);

    console.log('pedidos',$scope.pedidos)


  $scope.pedidos = $filter('filter')($scope.pedidos,{'EMPRESA' : '123'})


  console.log('pedidos',$scope.pedidos)

}
