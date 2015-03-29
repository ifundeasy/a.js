(function (Modernizr) {
	var A = function () {
		var me = this;

		me.isReady = false;
	};
	if (Modernizr && Modernizr.load) {
		A.prototype.core = {
			Application: "application.js",
			Str        : "str.js",
			Obj        : "obj.js",
			Arr        : "array.js",
			Date       : "date.js",
			Ui         : "ui.js",

			//todo : Bridge between user MVC* & UX
			Model      : "model.js",
			View       : "view.js",
			Controller : "controller.js",
			Store      : "store.js",
			Plugin     : "plugin.js"
		};
		A.prototype.path = document.getElementById('a.js').src.replace('main.js', '');
		A.prototype.Modernizr = Modernizr;
		A.prototype.Load = Modernizr.load;
		A.prototype.random = function () {
			return Math.floor((1 + Math.random()) * 0x1000000).toString(32).substring(1);
		};
		A.prototype.uuid = function () {
			var me = this;
			return (
			me.random() + me.random() + me.random() + me.random() +
			me.random() + me.random() + me.random() + me.random()
			)
		};
		A.prototype.init = function () {
			var me = this;

			me.Load({
				test    : Object.keys(me.core),
				yep     : Object.keys(me.core).map(function (name) {
					return (me.path + 'core/' + me.core[name])
				}),
				callback: function (url, result, idx) {
					me.isReady = false;
					if (!result) console.error(url, result)
				},
				complete: function () {
					me.isReady = true;
					console.log('A.isReady :', me.isReady)
				}
			});
		};
		A.prototype.create = function (scope, object, count) {
			var me = this, result;

			if (scope && object) {
				switch (scope) {
					case 'application' :
						result = new me.Application(object);
						break;
					case 'model' :
						result = new me.Model(object);
						break;
					case 'view' :
						result = new me.View(object);
						break;
					case 'controller' :
						result = new me.Controller(object);
						break;
					case 'store' :
						result = new me.Store(object);
						break;
					case 'plugin' :
						result = new me.Plugin(object);
						break;
					default  :
						result = console.error(scope, 'is undefined scope!');
						break;
				}
			}

			return result;
		};
		A.prototype.interval = function (config) {
			var z = undefined, i = 0, cb;
			var obj = {
				param   : config.param || false,
				count   : config.count || 10,
				second  : config.second || 100,
				complete: config.complete
			};
			z = setInterval(function () {
				if (obj.param || (i == obj.count)) {
					clearInterval(z);
					z = undefined;
					i = 0;

					if (config.complete) typeof config.complete == 'function' ? cb = config.complete(!(i == obj.count)) : cb = config.complete;
				}
				i++;
			}, obj.second)
		};

		window.A = new A();
		return window.A.init();
	}
	console.log('Modernizr.load is', Modernizr.load)
})(Modernizr);