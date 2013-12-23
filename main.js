require.config({

	//Prevent caching for development
	urlArgs: "bust=" +(new Date()).getTime(),

	paths: {

		jquery: "libraries/jquery",
		underscore: "libraries/underscore",
		backbone: "libraries/backbone",
		purebackbone: "libraries/backbone.min",
		"bb-loc": "libraries/backbone-localStorage",
		"text": "libraries/text"
	},

	shim: {
		underscore: {
		exports: "_"
	},
		jquery: {
		exports: "jQuery"
	},
		purebackbone: {
		deps: ['underscore', 'jquery'],
		exports: 'Backbone'
	},
		"bb-loc": ["purebackbone", "underscore"]
	}

});

require(['backbone', 'scripts/router'], function(Backbone, Router){

	//Start router
	new Router();
	Backbone.history.start();
});
