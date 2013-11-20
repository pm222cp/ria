define(['backbone', 'scripts/views/helloworld', 'scripts/views/saygoodbye'], function(Backbone, SayHello, SayGoodBye){

	var Router = Backbone.Router.extend({

		routes: {


			"": "home",
			"other": "other"

		},

		home: function(){

			new SayHello();
		},

		other: function(){

			new SayGoodBye();


		}
	});

	return Router;
});