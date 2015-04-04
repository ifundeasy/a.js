/*!
 * Ui.js Javascript Library v0.0.2
 * Make HTML with javascript's way
 *
 * Copyright 2015 Rappresent. and other contributors
 * Released under the MIT license
 *
 * Date : 3/18/15
 */

(function (A) {
	var Ui = function () {
		this.obj = new Object();
	};
	Ui.prototype.new = function (param, htmlTarget) {
		var me = this;

		me.element = undefined;
		if (param.constructor === Object) {
			me.obj = param;
			me.obj.el = me.obj.el || 'div'; //div is default element
			me.element = document.createElement(me.obj.el.toString());

			me.setAttr();
			me.setText();
			me.setHTML();
			me.setCSS();
			me.setEvents();
			me.setItems();
		}

		if (htmlTarget) {
			htmlTarget.appendChild(me.element);
		}

		return me.element;
	};

	//set element attribute
	Ui.prototype.setAttr = function () {
		var me = this;
		var obj = me.obj;
		var exception = ['css', 'text', 'style', 'html', 'el'];

		if (obj.constructor === Object && (Object.keys(obj).length)) {
			obj.id = obj.id || ('ex-ui-' + A.random() + A.random() + A.random());
			Object.keys(obj).forEach(function (key, i) {
				if (obj[key].constructor == String) {
					if (exception.indexOf(key) === -1) {
						me.element.setAttribute(key, obj[key]);
					}
				}
			});
		}
		return (me.element);
	};

	//set inner text element
	Ui.prototype.setText = function () {
		var me = this;
		var obj = me.obj;
		var text = obj.text;

		if (text && text.constructor == String) {
			//me.element.appendChild(document.createTextNode(html));
			me.element.textContent = text; //more faster!
		}
		return (me.element);
	};

	//set inner html element
	Ui.prototype.setHTML = function () {
		var me = this;
		var obj = me.obj;
		var html = obj.html;

		if (html && html.constructor == String) {
			me.element.innerHTML = html;
		}
		return (me.element);
	};

	//set element style
	Ui.prototype.setCSS = function () {
		var me = this;
		var obj = me.obj;
		var css = obj.css;

		if (css && (css.constructor == Object) && (Object.keys(css).length)) {
			Object.keys(css).forEach(function (key, i) {
				if (css[key].constructor == String) me.element.style[key] = css[key];
			});
		}
		return (me.element);
	};

	//attach event handler for element
	Ui.prototype.setEvents = function () {
		var me = this;
		var obj = me.obj;
		var event = obj.event;

		if (event && (event.constructor === Object) && (Object.keys(event).length)) {
			Object.keys(event).forEach(function (key, i) {
				me.element.addEventListener(key, function (opts) {
					typeof event[key] == "function" ? fn = event[key](me.element, opts) : fn = event[key];
					return fn;
				});
			});
		}
		return (me.element);
	};

	//append items for children element
	Ui.prototype.setItems = function () {
		var me = this;
		var obj = me.obj;
		var items = obj.items;

		if (items) {
			if (items.constructor === Object) me.element.appendChild(new Ui().new(items));
			if (items.constructor === Array) {
				items.forEach(function (item) {
					me.element.appendChild((new Ui()).new(item))
				});
			}
		}
		return (me.element);
	};

	//reverse a Element (single) to Ui format
	Ui.prototype.reverse = function (element) {
		function get (elem) {
			var node = {};

			getEl(elem, node);
			getClass(elem, node);
			getAttr(elem, node);
			getStyle(elem, node);
			getText(elem, node);
			getItems(elem, node);

			return node;
		}
		function getEl (elem, node) {
			node["el"] = elem.nodeName.toLowerCase();
		}
		function getClass (elem, node) {
			node["class"] = elem.classList.toString();
			if (!elem.classList.toString().length) delete node["class"];
		}
		function getAttr (elem, node) {
			if (elem.attributes.length > 0) {
				for (var i = 0; i < elem.attributes.length; i++) {
					node[elem.attributes[i].nodeName] = elem.attributes[i].value
				}
			}
		}
		function getStyle (elem, node) {
			if (elem.style.length){
				node['css'] = {};
				for (var i = 0; i < elem.style.length; i++) {
					var key = '';
					var x = elem.style[i].split('-');
					for(var j = 1; j < x.length; j++) {
						x[j] = x[j].replace(x[j][0],x[j].substr(0, 1).toUpperCase());
					}
					x.forEach(function(i){
						key += i
					});
					node['css'][elem.style[i]] = elem.style[key]
				}
			}
		}
		function getText (elem, node) {
			for (var k = 0; k < elem.childNodes.length; k++) {
				var child = elem.childNodes[k];
				if (elem.childNodes[k].nodeType == 3) {
					if (
						(child.nodeValue.replace(/\t|\n|\s/gi, '').length > 0) ||
						(child.nodeName.toLowerCase() == 'pre')
					) {
						node["text"] = child.nodeValue;
					}
				}
			}
		}
		function getItems (elem, node) {
			node["items"] = '';
			if (elem.childElementCount > 0) {
				elem.childElementCount == 1 ? node["items"] = new Object() : node["items"] = new Array();
			}
			switch (node["items"].constructor) {
				case Object :
					node["items"] = get(elem.children[0], {});
					break;
				case Array :
					for (var k = 0; k < elem.childElementCount; k++) {
						node["items"].push(get(elem.children[k], {}));
					}
					break;
				default :
					delete node["items"];
					break;
			}
		}

		if (element instanceof Element) {
			return get(element);
		}
		console.error('Make sure to assign a paramater instanceof Element');
	};

	A.Ui = new Ui();
})(A);