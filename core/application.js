(function(A) {
	A.Application = function (object) {
		if (!object) return console.error("Please make sure to set A.create('application', {}) object");

		this.init(object)
	};

	A.Application.prototype.init = function (object) {
		A.App = object;
		A.interval({
			param : typeof object.controller == "string",
			count : 5,
			second: 10,
			complete : function(result){
				if (result) {
					A.App.path = A.App.path || 'app';

					A.Load({
						test    : A.App.controller,
						yep     : A.App.path + '/controller/' + A.App.controller,
						callback: function (url, result, idx) {
							if (!result) console.error(url, result);
						},
						complete: function () {
							if (A.App.init && (typeof A.App.init == "function")) A.App.init();
						}
					});
				}
			}
		});
	}
})(A);