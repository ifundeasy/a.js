(function(A) {
	var Obj = function () {};
	Obj.prototype.clone = function (object) {
		var me = this, copy;

		if (object instanceof Object) {
			copy = {};
			for (var attr in object) {
				if (object.hasOwnProperty(attr)) copy[attr] = me.clone(object[attr]);
			}
			return copy;
		}

		throw new Error("Unable to copy object! Its type isn't supported.");
	};

	A.Obj = new Obj()
})(A);