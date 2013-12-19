define(['backbone',
		'scripts/views/topmenu',
		'scripts/views/recipesview',
		'scripts/models/recipemodel',
		'scripts/collections/recipecollection'], function(Backbone, TopMenu, RecipesView, RecipeModel, RecipeCollection){

	var Router = Backbone.Router.extend({

		routes: {

			"": "start",
			"other": "other"
		},

		initialize: function(){

			new TopMenu();

			var recipes = new RecipeCollection();

			recipes.fetch({
				success: function(recipes){

					new RecipesView({collection: recipes});
				}
			});

		},

		start: function(){


		}
	});

	return Router;
});