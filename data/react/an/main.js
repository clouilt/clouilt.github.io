'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getJSON(_url, f) {
	var ajaxdata = $.ajax({
		url: _url,
		async: true,
		success: function success(ajaxdata) {
			f(ajaxdata);
		}
	});
}

function safeGet(m, a) {
	if (m[a] === undefined) {
		return {};
	}
	return m[a];
}

function initApp(React, ReactDOM) {
	require([], function () {
		var App = function (_React$Component) {
			_inherits(App, _React$Component);

			_createClass(App, [{
				key: 'setchartable',
				value: function setchartable(_chartable) {
					this.setState({
						chartable: _chartable
					});
				}
			}, {
				key: 'sethandbook',
				value: function sethandbook(handbook) {
					var hb = handbook['handbookDict'];
					var k = Object.keys(hb);
					k.sort();
					this.setState({
						handbook: hb,
						keys: k
					});
				}
			}]);

			function App(props) {
				_classCallCheck(this, App);

				var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

				var handbookurl = './json/handbook_info_table.json';
				var handbook_ = getJSON(handbookurl, _this.sethandbook.bind(_this));

				var charurl = './json/character_table.json';
				var chartable = getJSON(charurl, _this.setchartable.bind(_this));
				_this.state = {
					keys: [],
					handbook: [],
					chartable: {}
				};
				return _this;
			}

			_createClass(App, [{
				key: 'render',
				value: function render() {
					var _this2 = this;

					return React.createElement(
						'div',
						{ 'class': 'd-flex' },
						React.createElement(
							'ul',
							{ 'class': 'p-2 myflex list-group' },
							this.state.keys.map(function (x) {
								return React.createElement(
									'li',
									{ 'class': 'p-2 mt-2 border media' },
									React.createElement(
										'div',
										{ 'class': 'mr-3 leftinfo' },
										React.createElement(
											'p',
											null,
											_this2.state.handbook[x]['charID']
										),
										React.createElement(
											'p',
											null,
											safeGet(_this2.state.chartable, [_this2.state.handbook[x]['charID']])['name']
										),
										React.createElement('hr', null),
										React.createElement(
											'p',
											null,
											safeGet(_this2.state.chartable, [_this2.state.handbook[x]['charID']])['description']
										),
										React.createElement(
											'p',
											null,
											safeGet(_this2.state.chartable, [_this2.state.handbook[x]['charID']])['itemUsage']
										),
										React.createElement(
											'p',
											null,
											safeGet(_this2.state.chartable, [_this2.state.handbook[x]['charID']])['itemDesc']
										)
									),
									React.createElement(
										'div',
										{ 'class': 'media-body content' },
										_this2.state.handbook[x]['storyTextAudio'].map(function (xx) {
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
