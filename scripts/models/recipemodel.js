define(['underscore','backbone'], function(_,Backbone){

	var Recipe = Backbone.Model.extend({
		defaults: {

			name: 'pannkaka',
			ingredients: 'ost'

		}
	});

	return Recipe;
});