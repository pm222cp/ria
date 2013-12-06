define(['backbone', 'scripts/views/topmenu', 'scripts/views/saygoodbye'], function(Backbone, TopMenu, SayGoodBye){

	var Router = Backbone.Router.extend({

		routes: {

			"": "startUp",
			"other": "other"
		},

		startUp: function(){

			new TopMenu();
		},

		other: function(){

			new SayGoodBye();
		}
	});

	return Router;
});