"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function initApp(React, ReactDOM, rs) {
	//console.log(rs);
	//var Button = rs.Button;
	require(["forge", "qrcode", "css!./data/react/hash.css"], function (forge, qrcode) {
		var App = function (_React$Component) {
			_inherits(App, _React$Component);

			function App(props) {
				_classCallCheck(this, App);

				var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

				_this.state = {
					curColumn: 1,
					curRow: 1,
					lsa: [[0]]
				};
				_this.textChanged = _this.textChanged.bind(_this);
				return _this;
			}

			_createClass(App, [{
				key: "textChanged",
				value: function textChanged(x, y, event) {
					var value = event.target.value;
					this.setState(function (oldstate) {
						oldstate.lsa[x][y] = value;
						return { lsa: oldstate.lsa };
					});
				}
			}, {
				key: "addRow",
				value: function addRow(evt) {
					this.setState(function (oldstate) {
						var tmp = Array(oldstate.curColumn).fill(0);
						//for (var i = 0; i < oldstate.curColumn; ++i)
						//tmp.push(0);
						oldstate.lsa.push(tmp);
						return {
							lsa: oldstate.lsa,
							curRow: oldstate.curRow + 1
						};
					});
				}
			}, {
				key: "addColumn",
				value: function addColumn(evt) {
					this.setState(function (oldstate) {
						var tmp = oldstate.lsa;
						for (var i = 0; i < oldstate.curRow; ++i) {
							tmp[i].push(0);
						}return {
							lsa: tmp,
							curColumn: oldstate.curColumn + 1
						};
					});
				}
			}, {
				key: "render",
				value: function render() {
					return React.createElement(
						"div",
						null,
						React.createElement(
							"div",
							null,
							React.createElement(
								rs.Button,
								{ color: "danger", onClick: this.addRow.bind(this) },
								" Add Row"
							),
							React.createElement(
								rs.Button,
								{ color: "danger", onClick: this.addColumn.bind(this) },
								"Add Column"
							)
						),
						React.createElement(
							rs.Table,
							{ hover: true },
							this.state.lsa.map(function (x, i) {
								return React.createElement(
									"tr",
									null,
									x.map(function (xx, ii) {
										return React.createElement(
											"td",
											null,
											React.createElement("input", { value: xx, onChange: this.textChanged.bind(this, i, ii) })
										);
									}.bind(this))
								);
							}.bind(this))
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
