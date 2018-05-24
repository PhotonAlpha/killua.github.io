webpackJsonp([3],{

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _counter = __webpack_require__(45);

var _reactRedux = __webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_Component) {
    _inherits(Counter, _Component);

    function Counter() {
        _classCallCheck(this, Counter);

        return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).apply(this, arguments));
    }

    _createClass(Counter, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    '\u5F53\u524D\u8BA1\u6570\u4E3A',
                    this.props.counter.count
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            console.log('调用自增函数');
                            _this2.props.increment();
                        } },
                    '\u81EA\u589E'
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            console.log('调用自减函数');
                            _this2.props.decrement();
                        } },
                    '\u81EA\u51CF'
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            console.log('调用重置函数');
                            _this2.props.reset();
                        } },
                    '\u91CD\u7F6E'
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Counter;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        counter: state.counter
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        increment: function increment() {
            dispatch((0, _counter.increment)());
        },
        decrement: function decrement() {
            dispatch((0, _counter.decrement)());
        },
        reset: function reset() {
            dispatch((0, _counter.reset)());
        }
    };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Counter);

exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Counter, 'Counter', '/Users/caoqiang/Desktop/workspace/photonalpha.github.io/Portal/src/pages/Counter/Counter.js');
    reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/caoqiang/Desktop/workspace/photonalpha.github.io/Portal/src/pages/Counter/Counter.js');
    reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/caoqiang/Desktop/workspace/photonalpha.github.io/Portal/src/pages/Counter/Counter.js');
    reactHotLoader.register(_default, 'default', '/Users/caoqiang/Desktop/workspace/photonalpha.github.io/Portal/src/pages/Counter/Counter.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQ291bnRlci9Db3VudGVyLmpzIl0sIm5hbWVzIjpbIkNvdW50ZXIiLCJwcm9wcyIsImNvdW50ZXIiLCJjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiLCJyZXNldCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxPOzs7Ozs7Ozs7OztpQ0FDTztBQUFBOztBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQVcseUJBQUtDLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkM7QUFBOUIsaUJBREo7QUFFSTtBQUFBO0FBQUEsc0JBQVEsU0FBUyxtQkFBTTtBQUNuQkMsb0NBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsbUNBQUtKLEtBQUwsQ0FBV0ssU0FBWDtBQUNILHlCQUhEO0FBQUE7QUFBQSxpQkFGSjtBQU9JO0FBQUE7QUFBQSxzQkFBUSxTQUFTLG1CQUFNO0FBQ25CRixvQ0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDQSxtQ0FBS0osS0FBTCxDQUFXTSxTQUFYO0FBQ0gseUJBSEQ7QUFBQTtBQUFBLGlCQVBKO0FBWUk7QUFBQTtBQUFBLHNCQUFRLFNBQVMsbUJBQU07QUFDbkJILG9DQUFRQyxHQUFSLENBQVksUUFBWjtBQUNBLG1DQUFLSixLQUFMLENBQVdPLEtBQVg7QUFDSCx5QkFIRDtBQUFBO0FBQUE7QUFaSixhQURKO0FBb0JIOzs7Ozs7Ozs7RUF0QmlCQyxnQjs7QUF5QnRCLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQy9CLFdBQU87QUFDSFQsaUJBQVNTLE1BQU1UO0FBRFosS0FBUDtBQUdILENBSkQ7O0FBTUEsSUFBTVUscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3JDLFdBQU87QUFDSFAsbUJBQVcscUJBQU07QUFDYk8scUJBQVMseUJBQVQ7QUFDSCxTQUhFO0FBSUhOLG1CQUFXLHFCQUFNO0FBQ2JNLHFCQUFTLHlCQUFUO0FBQ0gsU0FORTtBQU9ITCxlQUFPLGlCQUFNO0FBQ1RLLHFCQUFTLHFCQUFUO0FBQ0g7QUFURSxLQUFQO0FBV0gsQ0FaRDs7ZUFjZSx5QkFBUUgsZUFBUixFQUF5QkUsa0JBQXpCLEVBQTZDWixPQUE3QyxDOzs7Ozs7Ozs7Ozs7Ozs0QkE3Q1RBLE87NEJBeUJBVSxlOzRCQU1BRSxrQiIsImZpbGUiOiJjb3VudGVyLjc0YzIyNmQ4OGFjMTk0ZmVlYTE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2luY3JlbWVudCwgZGVjcmVtZW50LCByZXNldH0gZnJvbSAnYWN0aW9ucy9jb3VudGVyJztcblxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNsYXNzIENvdW50ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj7lvZPliY3orqHmlbDkuLp7dGhpcy5wcm9wcy5jb3VudGVyLmNvdW50fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6LCD55So6Ieq5aKe5Ye95pWwJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaW5jcmVtZW50KCk7XG4gICAgICAgICAgICAgICAgfX0+6Ieq5aKeXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfosIPnlKjoh6rlh4/lh73mlbAnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWNyZW1lbnQoKTtcbiAgICAgICAgICAgICAgICB9fT7oh6rlh49cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+iwg+eUqOmHjee9ruWHveaVsCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgfX0+6YeN572uXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY291bnRlcjogc3RhdGUuY291bnRlclxuICAgIH1cbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGluY3JlbWVudDogKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goaW5jcmVtZW50KCkpXG4gICAgICAgIH0sXG4gICAgICAgIGRlY3JlbWVudDogKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goZGVjcmVtZW50KCkpXG4gICAgICAgIH0sXG4gICAgICAgIHJlc2V0OiAoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChyZXNldCgpKVxuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ291bnRlcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL0NvdW50ZXIvQ291bnRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=