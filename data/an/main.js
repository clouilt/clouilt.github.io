'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function initApp(React, ReactDOM) {
	require([], function () {
		var data = [];
		var jsonurl = './json/handbook_info_table.json';
		var ajaxdata = $.ajax({ url: jsonurl, async: false });
		var jsontxt = ajaxdata.responseText;
		var obj_ = JSON.parse(jsontxt);

		var obj = obj_['handbookDict'];
		var keys = Object.keys(obj);
		keys.sort();
		console.log(keys);

		var columns = [{
			Header: "hash function",
			accessor: 'f'
		}, {
			Header: 'value',
			accessor: 'val'
		}];

		var App = function (_React$Component) {
			_inherits(App, _React$Component);

			function App(props) {
				_classCallCheck(this, App);

				var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

				_this.state = {};
				return _this;
			}

			_createClass(App, [{
				key: 'render',
				value: function render() {
					return React.createElement(
						'div',
						{ 'class': 'd-flex' },
						React.createElement(
							'ul',
							{ 'class': 'p-2 myflex list-group' },
							keys.map(function (x) {
								return React.createElement(
									'li',
									{ 'class': 'p-2 mt-2 border media' },
									React.createElement(
										'div',
										{ 'class': 'mr-3 userinfo' },
										React.createElement(
											'p',
											null,
											obj[x]['charID']
										)
									),
									React.createElement(
										'div',
										{ 'class': 'media-body content' },
										obj[x]['storyTextAudio'].map(function (xx) {
											return React.createElement(
												'div',
												null,
												React.createElement(
													'p',
													null,
													xx['storyTitle']
												),
												xx['stories'].map(function (xxx) {
													return React.createElement(
														'p',
														null,
														xxx['storyText']
													);
												}),
												React.createElement('hr', null)
											);
										})
									)
								);
							})
						)
					);
				}
			}]);

			return App;
		}(React.Component);

		ReactDOM.render(React.createElement(App), document.getElementById('appArea'));
	}); // require
}

define(function () {
	return { initApp: initApp };
});
