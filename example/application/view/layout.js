A.create('view', {
	node: document.getElementsByTagName('body')[0],
	init: A.Ui.new({
		id   : 'my-container',
		el   : 'div',
		items: [
			{
				el  : 'h1',
				text: A.App.name
			},
			{
				el  : 'div',
				id  : 'my-content'
			}
		]
	})
});