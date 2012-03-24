ibjhb.mvc.model.Player = Backbone.Model.extend({
	initialize			: function(model) {
		return this;
	}
	,mutators			: {
		battingAverage	: function(){
			var multiple = Math.pow(10, 3);
			return (Math.round((this.hits / this.at_bats) * multiple) / multiple);
		}
	}
});