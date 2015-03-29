(function(A) {
	var Arr = function () {};
	Arr.prototype.clone = function (array) {
		var me = this, copy;
		if (array instanceof Array) return array.slice(0);
		throw new Error("Unable to copy array! Its type isn't supported.");
	};

	A.Arr = new Arr();
})(A);