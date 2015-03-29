A.create("application", {
	name : "Hello World!",
	path : "application",
	controller : "home.js",
	init : function () {
		var me = this;
		console.log("put your command before launch your controller of " + me.controller + " here");
	}
});