(function(A) {
	var Tgl = function () {};

	Tgl.prototype.clone = function (date) {
		var me = this, copy;
		if (date instanceof Date) {
			copy = new Date();
			copy.setTime(date.getTime());
			return copy;
		}

		throw new Error("Unable to copy date! Its type isn't supported.");
	};

	A.Date = new Tgl();
})(A);