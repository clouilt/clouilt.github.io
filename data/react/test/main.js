"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function initApp(React, ReactDOM, reactstrap) {
	var Button = reactstrap.Button;
	console.log(reactstrap);
	require(["forge", "qrcode", "css!./data/react/hash.css"], function (forge, qrcode) {
		var App = function (_React$Component) {
			_inherits(App, _React$Component);

			function App(props) {
				_classCallCheck(this, App);

				var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

				_this.state = {
					textvalue: "default"
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
				}
			}, {
				key: "render",
				value: function render() {
					return React.createElement(
						"div",
						null,
						React.createElement("textarea", { "class": "form-control", placeholder: "Input here", id: "inputtext", value: this.state.textvalue, onChange: this.textChanged }),
						React.createElement(
							Button,
							{ color: "danger" },
							" ",
							this.state.textvalue
						)
					);
				}
			}]);

			return App;
		}(React.Component);

		ReactDOM.render(React.createElement(App), document.getElementById('appArea'));
	}); // require
}
