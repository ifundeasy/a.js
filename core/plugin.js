(function(A) {
	A.Plugin = function (object) {
		if (!A.App) return console.error("Please make sure to A.create('application', {}) first");
		if (!object) return console.error("Please make sure to set A.create('ux', {}) object");

		this.init(object);
	};

	A.Plugin.prototype.init = function (object) {
		var me = this;

		A.ux = A.ux || {};
		if (object.name && (typeof object.name == "string")) {
			A.ux[object.name] = object;

			if (A.ux[object.name].init) A.ux[object.name].init();
		}
		console.warn("Keep calm for A.create('plugin', {}). Not implemented yet!")
	};
})(A);