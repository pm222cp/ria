define(['backbone'], function(Backbone){

	var app = Backbone.View.extend({

		initialize: function (){

			$('#testDiv').append('Hello World!');
		}
	});

	return app;

});