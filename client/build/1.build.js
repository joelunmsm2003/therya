webpackJsonp([1],{

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	angular.module('prettyUrl')
	    .component('screen1', {
	        template: __webpack_require__(10),
	        controller: Screen1Controller,
	        controllerAs: 'vm'
	    });

	Screen1Controller.$inject = [];
	function Screen1Controller(){
		var vm = this;
	}

/***/ },

/***/ 10:
/***/ function(module, exports) {

	module.exports = "<H1>Screen 1</H1>\n<a ui-sref=\"screen2\">Go to Screen 2</a>\n<a ui-sref=\"andy\">Go to Andy</a>";

/***/ }

});