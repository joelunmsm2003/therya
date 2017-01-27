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