define(['jquery','underscore','backbone', 'text!scripts/templates/recipestemplate.html'], function($, _, Backbone, Template){

	var recipesList = Backbone.View.extend({

		id: "mainContent",

		template: _.template(Template),

		initialize: function (){

			console.log("recipesview körs");
		},

		render: function(recipes){

			this.$el.append(this.template({
				recipes: this.collection.models
			}));
			return this;


		}
	});

	return recipesList;

});