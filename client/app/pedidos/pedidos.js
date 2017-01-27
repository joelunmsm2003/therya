angular
  .module('app')
  .component('pedidoscomponent', {
    templateUrl: '../html/pedidos/pedidos.html',
    controller: PedidosController
  });



function PedidosController($scope,$firebaseArray,$filter){


    var ref = firebase.database().ref().child("PEDIDOS");
  // create a synchronized array
  // click on `index.html` above to see it used in the DOM!
  $scope.pedidos = $firebaseArray(ref);

    console.log('pedidos',$scope.pedidos)





}
