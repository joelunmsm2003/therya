webpackJsonp([4],{

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	angular
	  .module('prettyUrl')
	  .component('home', {
	       template: __webpack_require__(16),
	        controller: AppController
	  });



	function AppController(gettextCatalog,$scope,$http,$q,$filter,$location,$localStorage,gettext){


	    $scope.paso1 = 0

	    $scope.paso2 = 0

	    $scope.paso3 = 0

	    if($localStorage.paso1){

	       $scope.paso1 = $localStorage.paso1 

	    }

	    if($localStorage.paso2){


	       $scope.paso2 = $localStorage.paso2 

	    }

	      if($localStorage.paso3){

	       $scope.paso3 = $localStorage.paso3 

	    }

	    $(".rtt").tooltip();


	    $localStorage.mapa = false

	    $('footercomponent').hide()

	    var translated = gettextCatalog.getString("Hello");

	    $scope.entries = hotelsService.query(); 

	    $('input[name=search]').focus();

	    $scope.model  ={}

	    $scope.deleteHero = function(hero,data) {

	      $location.path('/infohotel/'+data.hotel)

	    }

	    $scope.muestra = false

	    $('.page-heading').fadeIn(3000)  

	    $http.get(host+'hotel/').success(function(data) {

	    $scope.hotels = data

	    $scope.hotels = $filter('filter')(data,{"status" : 3})

	    setTimeout(function(){ 

	    $('footercomponent').fadeIn('slow');

	    }, 2000);


	    })

		  interesService.getAll().then(function(data) {

	    $scope.datax1 = data

	    $scope.datax = data
	            
	    })

	    $scope.chips =[]

	    $scope.addchip = function (data,index) {

	      $scope.chips.push(data)

	      $scope.datax.splice(index,1)

	    }

	    $scope.add = function(data,index){

	      $scope.chips.splice(index,1)

	      $scope.datax.push(data)

	      $scope.sort_by('id',$scope.datax)

	    }

	    $scope.sort_by = function(newSortingOrder,array) {

	        function sortByKey(array, key) {
	            return array.sort(function(a, b) {
	            var x = a[key]; var y = b[key];
	            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	            });
	        }

	        $scope.datax = sortByKey(array, newSortingOrder);
	  
	    };

	    $scope.search_hotels = function() {

	      cities = []

	      intereses = []


	      obj = $scope.chips

	      for( var key in obj ) {



	        if (obj[key]['categoria']=='City'){

	          cities.push(obj[key]['id'])

	        }
	        else{

	          intereses.push(obj[key]['id'])
	        }
	      }

	     
	      $location.path('/filtro/'+cities+'/'+intereses)

	    };



	    $scope.search = function () {

	      $scope.listgroup = true

	      if ($scope.tipo){

	        $scope.fil = true

	      }

	      else{

	        $scope.fil = false

	      }

	      if($localStorage.lan == 'es_PE'){

	        $scope.datax = $filter('filter')($scope.datax1,{"name" : $scope.tipo})

	      }
	      else{

	        $scope.datax = $filter('filter')($scope.datax1,{"name_en" : $scope.tipo})
	      }

	      

	    }


	    function ObjectLength( object ) {
	    var length = 0;
	    for( var key in object ) {
	        if( object.hasOwnProperty(key) ) {
	            ++length;
	        }
	    }
	    return length;
	    };



	}

/***/ },

/***/ 16:
/***/ function(module, exports) {

	module.exports = "989898989";

/***/ }

});