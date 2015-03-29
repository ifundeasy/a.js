(function(A) {
	A.Store = function (object) {
		if (!A.App) return console.error("Please make sure to A.create('application', {}) first");
		if (!object) return console.error("Please make sure to set A.create('store', {}) object");

		this.init(object);
	};

	A.Store.prototype.init = function (object) {
		var me = this;

		console.warn("Keep calm for A.create('store', {}). Not implemented yet!")
	};
})(A);