A.create('controller', {
	other : [ //todo : make sure to write full path / url
		'lib/jquery-1.11.1.min.js'
	],
	core  : [ //todo : load core class path ex.js/core
		'_temp.js'
	],
	extend: [ //todo : load extend (core class extension) path ex.js/extend
		'dateformat.js'
	],
	plugin: [ //todo : make sure to write full path / url
		'application/plugin/newdate.js'
	],
	models: ["home.js"],
	stores: ["home.js"],
	views : ["layout.js", "home.js"],
	init  : function () {
		console.log("controller, home.js is launch");
		console.log(A.App);
		document.getElementById("my-notes").textContent = 'cobain hover tombol diatas';
		$('body').css('margin', 0);
		$('body').css('height', window.innerHeight);
		$('#my-container').css('padding', '10px');
		$('#my-container').css('height', '80%');
	},
	ex172g: 123123, //todo : annonymous key : value
});