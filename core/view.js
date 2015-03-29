(function(A) {
	A.View = function (object) {
		if (!A.App) return console.error("Please make sure to A.create('application', {}) first");
		if (!A.App.controller) return console.error("Please make sure to A.create('controller', {}) first");
		if (!object) return console.error("Please make sure to set A.create('view', {}) object");
		if (Object.keys(object).length < 1) return console.error("Please make sure to set A.create('view', {}) init object with instanceof Element");

		this.init(object);
	};
	A.View.prototype.init = function (object) {
		A.App.views = A.App.views || {};

		if (!(object.name && (typeof object.name == 'string'))) {
			object.name = 'ex-view-' + A.random() + A.random() + A.random();
		}

		if (!(object.node && (object.node instanceof Element))) {
			object.node = document.getElementsByTagName('body')[0];
		}

		if (object.init && (object.init instanceof Element)) {
			object.node.appendChild(object.init);
			A.App.views[object.name] = object;
		} else {
			console.error("Please make sure you have correct code, for example bellow : ");
			console.warn("A.create('view', {");
			console.warn("    name : 'example',");
			console.warn("    node : document.getElementsByTagName('body')[0],");
			console.warn("    init : A.Ui.new({");
			console.warn("        el : 'div',");
			console.warn("        id : 'ex-view-1'");
			console.warn("    })");
			console.warn("})");
		}
	}
})(A);