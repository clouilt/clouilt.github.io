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

function toColor(flag) {
	if (flag) return 'btn-success';
	return 'btn-default';
}

function toLs(doublels) {
	var res = [];
	for (var i = 0; i < doublels.length; ++i) {
		var x = doublels[i];
		if (x[1]) res.push(x[0]);
	}
	return res;
}

function has(ls, x) {
	for (var i = 0; i < ls.length; ++i) {
		if (x === ls[i]) return true;
	}return false;
}

var crls = [1, 3, 11];

var gls = [[['位移'], [['崖心', 5], ['阿消', 4], ['暗索', 4], ['可颂', 5], ['食铁兽', 5]]], [['削弱'], [['初雪', 5], ['陨星', 5], ['夜烟', 4], ['流星', 4]]], [['召唤'], [['梅尔', 5]]], [['快速复活'], [['砾', 4], ['红', 5]]], [['控场'], [['红', 5], ['梅尔', 5], ['德克萨斯', 5]]], [['支援'], [['白面鸮', 5], ['凛冬', 5], ['华法琳', 5], ['Castle-3', 1], ['杜宾', 4]]], [['爆发'], [['守林人', 5]]], [['特种干员'], [['崖心', 5], ['阿消', 4], ['砾', 4], ['红', 5], ['暗索', 4], ['狮蝎', 5], ['食铁兽', 5]]], [['减速', '狙击干员'], [['白雪', 4]]], [['减速', '群攻'], [['白雪', 4]]], [['减速', '输出'], [['真理', 5], ['霜叶', 4]]], [['减速', '近卫干员'], [['霜叶', 4]]], [['减速', '近战位'], [['霜叶', 4], ['食铁兽', 5]]], [['治疗', '近战位'], [['古米', 4], ['临光', 5]]], [['治疗', '重装干员'], [['古米', 4], ['临光', 5]]], [['治疗', '防护'], [['古米', 4], ['临光', 5]]], [['狙击干员', '生存'], [['杰西卡', 4]]], [['狙击干员', '群攻'], [['陨星', 5], ['白雪', 4]]], [['生存', '群攻'], [['幽灵鲨', 5], ['艾丝黛尔', 4]]], [['生存', '远程位'], [['杰西卡', 4]]], [['生存', '重装干员'], [['火神', 5]]], [['生存', '防护'], [['火神', 5]]], [['男', '近卫干员'], [['Castle-3', 1]]], [['男', '防护'], [['角峰', 4]]], [['群攻', '近卫干员'], [['幽灵鲨', 5], ['艾丝黛尔', 4]]], [['群攻', '近战位'], [['幽灵鲨', 5], ['艾丝黛尔', 4]]], [['辅助干员', '输出'], [['真理', 5]]], [['输出', '重装干员'], [['火神', 5], ['雷蛇', 5]]], [['输出', '防护'], [['火神', 5], ['雷蛇', 5]]], [['女', '术士干员', '输出'], [['夜烟', 4]]]];

function initApp(React, ReactDOM) {
	require([], function () {
		var App = function (_React$Component) {
			_inherits(App, _React$Component);

			_createClass(App, [{
				key: 'toggleBtn',
				value: function toggleBtn(n) {
					var ls = this.state.btnls;
					ls[n][1] = !ls[n][1];
					this.setState({
						btnls: ls
					});
				}
			}, {
				key: 'flip',
				value: function flip() {
					var ls = this.state.btnls;
					for (var i = 0; i < ls.length; ++i) {
						ls[i][1] = !ls[i][1];
					}this.setState({
						btnls: ls
					});
				}
			}, {
				key: 'GO',
				value: function GO() {
					var tmp = toLs(this.state.btnls);
					console.log(tmp);
					var res = [];
					for (var i = 0; i < gls.length; ++i) {
						var x = gls[i][0];
						var t = true;
						for (var ii = 0; ii < x.length; ++ii) {
							var xx = x[ii];
							t = t && has(tmp, xx);
						}
						if (t) res.push(gls[i]);
					}
					this.setState({
						res: res
					});
				}
			}]);

			function App(props) {
				_classCallCheck(this, App);

				var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

				_this.state = {
					btnls: [['男', false], ['女', false], ['远程位', false], ['近战位', false], ['近卫干员', false], ['术士干员', false], ['先锋干员', false], ['医疗干员', false], ['特种干员', false], ['重装干员', false], ['辅助干员', false], ['狙击干员', false], ['新手', false], ['召唤', false], ['削弱', false], ['防护', false], ['爆发', false], ['快速复活', false], ['生存', false], ['费用回复', false], ['治疗', false], ['群攻', false], ['输出', false], ['减速', false], ['位移', false], ['支援', false], ['控场', false]],
					res: []
				};
				return _this;
			}

			_createClass(App, [{
				key: 'render',
				value: function render() {
					var _this2 = this;

					return React.createElement(
						'div',
						{ 'class': '' },
						this.state.btnls.map(function (x, i) {
							return React.createElement(
								'span',
								null,
								React.createElement(
									'button',
									{ type: 'button', 'class': ['btn', toColor(x[1])].join(' '), onClick: _this2.toggleBtn.bind(_this2, i) },
									String(x[0])
								),
								has(crls, i) ? React.createElement('hr', null) : ""
							);
						}),
						React.createElement('hr', null),
						React.createElement(
							'button',
							{ type: 'button', onClick: this.flip.bind(this) },
							' Flip '
						),
						React.createElement(
							'button',
							{ type: 'button', onClick: this.GO.bind(this) },
							' GO '
						),
						React.createElement('hr', null),
						React.createElement(
							'ul',
							{ 'class': 'p-2 myflex list-group' },
							this.state.res.map(function (x, i) {
								return React.createElement(
									'li',
									{ 'class': 'p-2 mt-2 border media' },
									React.createElement(
										'div',
										{ 'class': 'mr-3 leftinfo' },
										React.createElement(
											'p',
											null,
											String(x[0])
										)
									),
									React.createElement(
										'div',
										{ 'class': 'media-body content' },
										React.createElement(
											'p',
											null,
											String(x[1])
										)
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
