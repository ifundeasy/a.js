A.create('view', {
	node: document.getElementById('my-content'),
	init: A.Ui.new({
		el   : 'div',
		items: [
			{
				el  : 'span',
				text: 'ini tombol '
			},
			{
				el  : 'button',
				text: 'klik ya!',
				event : {
					click : function () {
						alert('cieee habis nge-klik bang aji!')
					},
					mouseover : function () {
						document.getElementById('my-notes').textContent = Date.now();
					}
				}
			},
			{
				el  : 'div',
				text: 'notes : ',
				items : {
					id : 'my-notes',
					el : 'span'
				}
			},
		]
	})
});