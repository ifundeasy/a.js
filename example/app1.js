A.create("application", {
	name : "Hello World!",
	path : "application",
	init : function () {
		var me = this;
		console.log("put your command before launch your controller of " + me.controller + " here");
	}
});