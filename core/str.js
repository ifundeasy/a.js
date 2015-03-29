(function(A) {
	var Str = function () {};
	Str.prototype.toTitleCase = function (string) {
		return string.replace(/\w\S*/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	};

	Str.prototype.clone = function (string) {
		var me = this, copy;
		if (null == string || "object" != typeof string) return string.toString();
		throw new Error("Unable to copy string! Its type isn't supported.");
	};

	A.Str = new Str()
})(A);