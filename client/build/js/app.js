

var app = angular.module('prettyUrl',[
		'ui.router',
		'ngStorage',
		'gettext'
	]);

app.config(routesConfig)

function routesConfig($stateProvider, $urlRouterProvider, $locationProvider,$httpProvider) {

	$stateProvider

		.state('screen1',{
			url : '/screen1',
			template: "<screen1></screen1>",
		})
		.state('andy',{
			url : '/andy',
			template: "<andy></andy>",

		})
		.state('screen2',{
			url : '/screen2',
			template: "<screen2></screen2>",

		})

		.state('home',{
			url : '/',
			template: "<home></home>",

		});



	$urlRouterProvider.otherwise('/');


	//Client side Configuration to pretty url
	//Remove # from url

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


	if (window.location.href.slice(0,19) == "http://192.168.0.58"){

	host = 'http://192.168.0.58:8000/' 

	}

	if (window.location.href.slice(0,25) == "http://chooseandbookit.tk"){


	host = 'http://chooseandbookit.tk:8000/' 

	}

	if (window.location.href.slice(0,19) == "http://192.168.1.33"){

	host = 'http://192.168.1.33:8000/' 

	}

}
angular
  .module('prettyUrl')
  .component('andy', {
    templateUrl: 'html/andy/andy.html',
    controller: AndyController
  });


function AndyController(){

}

angular
  .module('prettyUrl')
  .component('home', {
    templateUrl: 'home.html',
    controller: HomeController
  });


function HomeController($scope){

  console.log('holalalal')

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


