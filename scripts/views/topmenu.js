define(['jquery', 'underscore', 'backbone', 'text!scripts/templates/topmenu.html'], function($, _, Backbone, Template){

	var topMenu = Backbone.View.extend({

		template: _.template(Template),

		initialize: function (){

			this.render();
		},

		render: function(){

			//Different menuitems per page? Dynamicallly generate menuitems later
			this.$el.html(this.template({

			}));

		}
	});

	return topMenu;

});