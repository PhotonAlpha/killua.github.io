webpackJsonp([2],{

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Home, [{
        key: '_handleClick',
        value: function _handleClick() {
            this.setState({
                count: ++this.state.count
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                'this is home~!',
                _react2.default.createElement('br', null),
                '\u5F53\u524D\u8BA1\u6570 new\uFF1A',
                this.state.count,
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this2._handleClick();
                        } },
                    'auto plus'
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Home;
}(_react.Component);

var _default = Home;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Home, 'Home', '/Users/caoqiang/Desktop/workspace/photonalpha.github.io/Portal/src/pages/Home/Home.js');
    reactHotLoader.register(_default, 'default', '/Users/caoqiang/Desktop/workspace/photonalpha.github.io/Portal/src/pages/Home/Home.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSG9tZS9Ib21lLmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsInN0YXRlIiwiY291bnQiLCJzZXRTdGF0ZSIsIl9oYW5kbGVDbGljayIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7QUFDakIsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsbUJBQU87QUFERSxTQUFiO0FBRmU7QUFLbEI7Ozs7dUNBRWM7QUFDWCxpQkFBS0MsUUFBTCxDQUFjO0FBQ1ZELHVCQUFPLEVBQUUsS0FBS0QsS0FBTCxDQUFXQztBQURWLGFBQWQ7QUFHSDs7O2lDQUVRO0FBQUE7O0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFDa0IseURBRGxCO0FBQUE7QUFFYyxxQkFBS0QsS0FBTCxDQUFXQyxLQUZ6QjtBQUUrQix5REFGL0I7QUFHSTtBQUFBO0FBQUEsc0JBQVEsU0FBUztBQUFBLG1DQUFNLE9BQUtFLFlBQUwsRUFBTjtBQUFBLHlCQUFqQjtBQUFBO0FBQUE7QUFISixhQURKO0FBT0g7Ozs7Ozs7OztFQXRCNkJDLGdCOztlQUFiTixJOzs7Ozs7Ozs7Ozs7OzRCQUFBQSxJIiwiZmlsZSI6ImhvbWUuYzUyYjE3NGU5MmZhZGMwODg0ZmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY291bnQ6IDBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oYW5kbGVDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb3VudDogKyt0aGlzLnN0YXRlLmNvdW50XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgdGhpcyBpcyBob21lfiE8YnIvPlxuICAgICAgICAgICAgICAgIOW9k+WJjeiuoeaVsCBuZXfvvJp7dGhpcy5zdGF0ZS5jb3VudH08YnIvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5faGFuZGxlQ2xpY2soKX0+YXV0byBwbHVzPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvSG9tZS9Ib21lLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==