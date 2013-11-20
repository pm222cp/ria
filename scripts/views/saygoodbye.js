define(['backbone', 'text!scripts/templates/say_good_bye_template.html'], function(Backbone, Template){

	var app = Backbone.View.extend({

		el: '#appView',

		template: _.template(Template),

		initialize: function (){

			this.render();
		},

		render: function(){

			this.$el.html(this.template({
				sayGoodBye: "Good bye world!"
			}));

		}
	});

	return app;

});