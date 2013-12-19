define(['backbone', 'text!scripts/templates/recipestemplate.html'], function(Backbone, Template){

	var recipesList = Backbone.View.extend({

		el: '#appView',

		template: _.template(Template),

		initialize: function (){

			this.render();
		},

		render: function(){

		$(this.el).append(this.template());
        return this;

		}
	});

	return recipesList;

});