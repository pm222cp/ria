define(['underscore', 'backbone', '../models/recipemodel'], function(_,Backbone, Recipe){

	var RecipeCollection = Backbone.Collection.extend({
		model: Recipe,
		localStorage: new Backbone.LocalStorage("RecipeCollection"),

		initialize: function (){


		}
	});

	return RecipeCollection;
});