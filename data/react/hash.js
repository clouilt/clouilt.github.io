"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function initApp(React, ReactDOM) {
	require(["forge", "qrcode", "css!./data/react/hash.css"], function (forge, qrcode) {
		function getHash(name, text) {
			var md = eval('forge.md.' + name + '.create();');
			md.update(text);
			return md.digest().toHex();
		}

		var fls = ['md5', 'sha1', 'sha256', 'sha384', 'sha512'];

		var data = [];

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

				_this.state = {
					textvalue: ""
				};
				_this.textChanged = _this.textChanged.bind(_this);
				return _this;
			}

			_createClass(App, [{
				key: "textChanged",
				value: function textChanged(event) {
					var value = event.target.value;
					this.setState({
						textvalue: value
					});
					$('#qr').html('');
					$('#qr').qrcode(this.state.textvalue);
				}
			}, {
				key: "render",
				value: function render() {
					var _this2 = this;

					return React.createElement(
						"div",
						null,
						React.createElement("textarea", { "class": "form-control", placeholder: "Input here", id: "inputtext", value: this.state.textvalue, onChange: this.textChanged }),
						React.createElement(
							"table",
							{ id: "mytbl" },
							React.createElement(
								"tr",
								null,
								React.createElement(
									"td",
									null,
									"raw"
								),
								React.createElement(
									"td",
									null,
									this.state.textvalue,
									" "
								)
							),
							fls.map(function (x) {
								return React.createElement(
									"tr",
									null,
									React.createElement(
										"td",
										null,
										x
									),
									" ",
									React.createElement(
										"td",
										null,
										getHash(x, _this2.state.textvalue)
									)
								);
							}),
							React.createElement(
								"tr",
								null,
								React.createElement(
									"td",
									null,
									"qrcode"
								),
								React.createElement("td", { id: "qr" })
							)
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
