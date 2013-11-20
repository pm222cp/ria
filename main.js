require.config({

	//Prevent caching for development
	urlArgs: "bust=" +(new Date()).getTime(),

	paths: {

		"jquery": "libraries/jquery",
		"backbone": "libraries/backbone",
		"underscore": "libraries/underscore",
		"text": "libraries/text"
	}

});

require(['backbone', 'scripts/router'], function(Backbone, Router){

	new Router();
	Backbone.history.start();
});
