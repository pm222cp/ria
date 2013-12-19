require.config({

	//Prevent caching for development
	urlArgs: "bust=" +(new Date()).getTime(),

	paths: {

		"jquery": "libraries/jquery",
		"underscore": "libraries/underscore",
		"backbone": "libraries/backbone",
		"text": "libraries/text",
		"localstorage": "libraries/backbone.localStorage"
	}

});

require(['backbone', 'scripts/router'], function(Backbone, Router){

	//Start router
	new Router();
	Backbone.history.start();
});
