(function(A) {
	A.Model = function (object) {
		if (!A.App) return console.error("Please make sure to A.create('application', {}) first");
		if (!object) return console.error("Please make sure to set A.create('model', {}) object");

		this.init(object);
	};

	A.Model.prototype.init = function (object) {
		var me = this;

		console.warn("Keep calm for A.create('model', {}). Not implemented yet!")
	};
})(A);