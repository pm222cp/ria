define(['backbone'], function(Backbone){

	var Recipe = Backbone.Model.extend({
		defaults: {

			name: 'pannkaka',
			ingredients: 'ost'

		}
	});

	return Recipe;
});