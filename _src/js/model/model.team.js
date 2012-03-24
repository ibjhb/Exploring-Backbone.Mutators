ibjhb.mvc.model.Team = Backbone.Model.extend({
	initialize			: function(model) {
		return this;
	}
	,mutators			: {
		teamName		: function(){
			return this.city + ' ' + this.nickname;
		}
	}
});