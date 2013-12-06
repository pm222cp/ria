require.config({

	//Prevent caching for development
	urlArgs: "bust=" +(new Date()).getTime(),

	paths: {

		"jquery": "libraries/jquery",
		"backbone": "libraries/backbone",
		"underscore": "libraries/underscore",
		"text": "libraries/text",
		"localstorage": "libraries/localstorage"
	}

});

require(['backbone', 'scripts/router'], function(Backbone, Router){

	//Start router
	new Router();
	Backbone.history.start();
});
