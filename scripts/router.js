define(['underscore',
		'jquery',
		'backbone',
		'scripts/views/topmenu',
		'scripts/views/recipesview',
		'scripts/collections/recipecollection'], function(_,$,Backbone, TopMenu, RecipesView, RecipeCollection){

	var Router = Backbone.Router.extend({

		routes: {

			"": "start",
			"other": "other"
		},

		initialize: function(){

			new TopMenu({el:"#appView"});
		},

		start: function(){

			var recipes = new RecipeCollection();

			recipes.fetch({

				success: function(data){

					console.log("RECEPT", data);
					var view = new RecipesView({el:"#appView", collection: data});
					view.render();
				}
			});


		}
	});

	return Router;
});