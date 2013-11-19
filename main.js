require.config({

	urlArgs: "bust=" +(new Date()).getTime(),

	paths: {

		"jquery": "libraries/jquery",
		"backbone": "libraries/backbone",
		"underscore": "libraries/underscore"
	}

});

require(['scripts/views/helloworld'], function(SayHello){

	new SayHello();

});
