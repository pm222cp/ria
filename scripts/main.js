require.config({

	paths: {

		"jquery": "scripts/jquery",
		"backbone": "scripts/backbone"
	}

});

require(['views/helloworld'], function(SayHello){

	new SayHello();

});