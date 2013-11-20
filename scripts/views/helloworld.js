define(['backbone', 'text!scripts/templates/hello_template.html'], function(Backbone, Template){

	var app = Backbone.View.extend({

		el: '#appView',

		template: _.template(Template),

		initialize: function (){

			this.render();
		},

		render: function(){

			this.$el.html(this.template({
				sayHello: "Hello World"
			}));

		}
	});

	return app;

});