define(['backbone', 'localstorage', '../models/recipemodel'], function(Backbone, Recipe){

	var RecipeCollection = Backbone.Collection.extend({
		model: Recipe,
		localStorage: new Backbone.LocalStorage("RecipeCollection"),

		initialize: function (){

			console.log("Skapat något i localstorage?");
		}
	});

	return RecipeCollection;
});