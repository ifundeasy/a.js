(function(A) {
	A.Controller = function (object) {
		if (!A.App) return console.error("Please make sure to A.create('application', {}) first");
		if (!object) return console.error("Please make sure to set A.create('controller', {}) object");

		this.init(object);
	};

	A.Controller.prototype.callback = function (url, result, idx) {
		console.log(result, url);
		if (!result) console.error(url, result)
	};
	A.Controller.prototype.init = function (object) {
		var me = this;
		var generator = function (param, dir) {
			var path = dir || '';
			var result = false;

			if (param instanceof Array) {
				result = param.map(function (name) {
					return (path + name)
				})
			} else if (typeof param == "string") {
				result = (path + param);
			}

			return result;
		};

		object.other = generator(object.other);
		object.core = generator(object.core, A.path + 'core/');
		object.extend = generator(object.extend, A.path + 'extend/');
		object.plugin = generator(object.plugin);
		object.models = generator(object.models, A.App.path + '/model/');
		object.stores = generator(object.stores, A.App.path + '/store/');
		object.views = generator(object.views, A.App.path + '/view/');

		A.Load([
			{
				test    : object.other,
				yep     : object.other,
				callback: me.callback
			},
			{
				test    : object.core,
				yep     : object.core,
				callback: me.callback
			},
			{
				test    : object.extend,
				yep     : object.extend,
				callback: me.callback
			},
			{
				test    : object.plugin,
				yep     : object.plugin,
				callback: me.callback
			},
			{
				test    : object.models,
				yep     : object.models,
				callback: me.callback
			},
			{
				test    : object.stores,
				yep     : object.stores,
				callback: me.callback
			},
			{
				test    : object.views,
				yep     : object.views,
				callback: me.callback,
				complete: function () {
					A.App.controller = object;
					A.App.controller.init()
				}
			}
		])
	};
})(A);