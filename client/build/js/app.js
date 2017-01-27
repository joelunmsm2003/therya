function ColegioService ($http,$q,$log,$localStorage) {  
    return {
        colegios: colegios,
        colegio: colegio
    }


    function colegio (data){


        console.log('ingresar...',data)

        var defered = $q.defer();
        var promise = defered.promise;

        $http({

        url: host+"api-token-auth/",
        data: data,
        method: 'POST'
        }).
        success(function(data) {


        console.log(data)

        $localStorage.token = data.token;

        return promise;

        })


    }


    function colegios (){

        var defered = $q.defer();

        var promise = defered.promise;

        $http.get(host+'colegios/')

        .success(function(data) {

        defered.resolve(data);

        })

        return promise

    }


}




function UserService ($http,$q,$log,$localStorage) {  
    return {
        ingresar: ingresar,
        alumnos: alumnos
    }


    function ingresar (data){


        console.log('ingresar...',data)

        var defered = $q.defer();
        var promise = defered.promise;

        $http({

        url: host+"api-token-auth/",
        data: data,
        method: 'POST'
        }).
        success(function(data) {


        console.log(data)

        $localStorage.token = data.token;

        return promise;

        })


    }


    function alumnos (){

        var defered = $q.defer();

        var promise = defered.promise;

        $http.get(host+'useralumno/')

        .success(function(data) {

        defered.resolve(data);

        })

        return promise

    }


}




// Initialize the Firebase SDK

	  var config = {
			apiKey: "AIzaSyAOJT8i-OwNLYOmsd1qdlweiKU9jOYJwPA",
			authDomain: "therya-e8bca.firebaseapp.com",
			databaseURL: "https://therya-e8bca.firebaseio.com",
			storageBucket: "therya-e8bca.appspot.com",
			messagingSenderId: "1076633937247"
	  };
	  firebase.initializeApp(config);

angular

.module('app', ['firebase','ngSanitize','angular-input-stars','rzModule','ui.router','ngStorage','ui.bootstrap','ngAnimate','ngTouch','ngScrollTo','flow','xeditable','ngResource','gettext','ngMap','ngLocale','tmh.dynamicLocale','wyvernzora.un-svg'])
      
.config(routesConfig)
.service('UserService', UserService)
.service('ColegioService', ColegioService)

function routesConfig($stateProvider, $urlRouterProvider, $locationProvider,$httpProvider) {

	$stateProvider

		.state('screen1',{
			url : '/screen1',
			template: "<screen1></screen1>",
		})
		.state('andy',{
			url : '/andy',
			template: "<andycomponent></andycomponent>",

		})
		.state('screen2',{
			url : '/screen2',
			template: "<screen2></screen2>",

		})
		

		.state('home',{
			url : '/home',
			template: "<homecomponent></homecomponent>",

		});


	host = 'http://localhost:8000/'


	$locationProvider.html5Mode(true);

	$httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
	return {
	    'request': function (config) {
	        config.headers = config.headers || {};
	        if ($localStorage.token) {
	            config.headers.Authorization = 'Bearer ' + $localStorage.token;
	        }
	        return config;
	    },
	    'responseError': function(response) {
	        if(response.status === 401 || response.status === 403) {

	            $location.path('/signin');
	        }
	        return $q.reject(response);
	    }
	};
	}]);




}
angular
  .module('app')
  .component('alumnoscomponent', {
    templateUrl: '../html/alumnos/alumnos.html',
    controller: AlumnosController,
    bindings: {
      alumnos: '='
    }
  });



function AlumnosController($scope){

	this.alumnos

	.then(function(data) {

            $scope.alumnos=data

            console.log('UA',data)
        
    })






}

angular
  .module('app')
  .component('andycomponent', {
    templateUrl: 'html/andy/andy.html',
    controller: AndyController
  });


function AndyController(){

}

angular
  .module('app')
  .component('colecomponent', {
    templateUrl: 'html/colegio/colegio.html',
    controller: ColeController
  });


function ColeController(ColegioServicio){


	console.log('cole..',ColegioServicio.alumnos())

}

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

angular
  .module('prettyUrl')
  .component('screen1', {
    templateUrl: './screen1.html',
    controller: Screen2Controller
  });


function Screen2Controller(){

}

angular
  .module('prettyUrl')
  .component('screen2', {
    templateUrl: 'html/screen2/screen2.html',
    controller: Screen2Controller
  });


function Screen2Controller(){

}


