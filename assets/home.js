webpackJsonp([0],{

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _carousel = __webpack_require__(553);

var _carousel2 = _interopRequireDefault(_carousel);

var _getPrototypeOf = __webpack_require__(26);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(22);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(23);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(24);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(25);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(575);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _thumbnail = __webpack_require__(587);

var _thumbnail2 = _interopRequireDefault(_thumbnail);

var _style = __webpack_require__(590);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function (_React$Component) {
    (0, _inherits3.default)(Home, _React$Component);

    function Home(props) {
        (0, _classCallCheck3.default)(this, Home);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));

        _this.state = {
            carouselData: ['', '', ''],
            orderData: [],
            imgHeight: 120
        };
        return _this;
    }

    (0, _createClass3.default)(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            setTimeout(function () {
                _this2.setState({
                    carouselData: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
                    orderData: [{
                        img_url: '../../images/order1.png',
                        like: 1200,
                        price: '满199减100/满399减200',
                        order_address: '京东 | 15:30',
                        status: 1,
                        people_count: 2,
                        order_description: '这是恨便宜的拼单,欢迎来购买.本店特价不要998只要89,真的只要这个价'
                    }, {
                        img_url: '../../images/order1.png',
                        like: 1200,
                        price: '满299减100/满399减200',
                        order_address: '淘宝 | 15:30',
                        status: 1,
                        people_count: 23,
                        order_description: '这是恨便宜的拼单,欢迎来购买.本店特价不要998只要89,真的只要这个价'
                    }, {
                        img_url: '../../images/order1.png',
                        like: 1200,
                        price: '满299减100/满399减200',
                        order_address: '淘宝 | 15:30',
                        status: 1,
                        people_count: 23,
                        order_description: '这是恨便宜的拼单,欢迎来购买.本店特价不要998只要89,真的只要这个价'
                    }, {
                        img_url: '../../images/order1.png',
                        like: 1200,
                        price: '满299减100/满399减200',
                        order_address: '淘宝 | 15:30',
                        status: 1,
                        people_count: 23,
                        order_description: '这是恨便宜的拼单,欢迎来购买.本店特价不要998只要89,真的只要这个价'
                    }]
                });
            }, 500);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _style2.default.home },
                _react2.default.createElement(
                    'div',
                    { className: _style2.default.carousel },
                    _react2.default.createElement(
                        _carousel2.default,
                        {
                            autoplay: true,
                            infinite: true,
                            selectedIndex: 1,
                            beforeChange: function beforeChange(from, to) {
                                return console.log('slide from ' + from + ' to ' + to);
                            },
                            afterChange: function afterChange(index) {
                                return console.log('slide to', index);
                            },
                            style: { height: '100%' }
                        },
                        this.state.carouselData.map(function (ii) {
                            return _react2.default.createElement(
                                'a',
                                {
                                    key: ii,
                                    href: 'http://www.alipay.com',
                                    style: { display: 'inline-block', width: '100%', height: '100%' }
                                },
                                _react2.default.createElement('img', {
                                    src: 'https://zos.alipayobjects.com/rmsportal/' + ii + '.png',
                                    alt: '',
                                    style: { width: '100%', verticalAlign: 'top', height: '100%' },
                                    onLoad: function onLoad() {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        //this.setState({ imgHeight: 'auto' });
                                    }
                                })
                            );
                        })
                    )
                ),
                this.state.orderData.map(function (data, index) {
                    return _react2.default.createElement(_thumbnail2.default, { key: '_' + index, data: data });
                })
            );
        }
    }]);
    return Home;
}(_react2.default.Component); /**
                               * Created by luwenwei on 17/11/25.
                               */


exports.default = Home;

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(64), __esModule: true };

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(560);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(561);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(554);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(555);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(557);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(558);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(559);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(562);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames3 = __webpack_require__(63);

var _classnames4 = _interopRequireDefault(_classnames3);

var _rmcNukaCarousel = __webpack_require__(565);

var _rmcNukaCarousel2 = _interopRequireDefault(_rmcNukaCarousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Carousel = function (_React$Component) {
    (0, _inherits3['default'])(Carousel, _React$Component);

    function Carousel(props) {
        (0, _classCallCheck3['default'])(this, Carousel);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

        _this.onChange = function (index) {
            _this.setState({
                selectedIndex: index
            }, function () {
                if (_this.props.afterChange) {
                    _this.props.afterChange(index);
                }
            });
        };
        _this.state = {
            selectedIndex: _this.props.selectedIndex
        };
        return _this;
    }

    (0, _createClass3['default'])(Carousel, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                infinite = _a.infinite,
                selectedIndex = _a.selectedIndex,
                beforeChange = _a.beforeChange,
                afterChange = _a.afterChange,
                dots = _a.dots,
                restProps = __rest(_a, ["infinite", "selectedIndex", "beforeChange", "afterChange", "dots"]);var prefixCls = restProps.prefixCls,
                dotActiveStyle = restProps.dotActiveStyle,
                dotStyle = restProps.dotStyle,
                className = restProps.className,
                vertical = restProps.vertical;

            var newProps = (0, _extends3['default'])({}, restProps, { wrapAround: infinite, slideIndex: selectedIndex, beforeSlide: beforeChange });
            var Decorators = [];
            if (dots) {
                Decorators = [{
                    component: function component(_ref) {
                        var slideCount = _ref.slideCount,
                            slidesToScroll = _ref.slidesToScroll,
                            currentSlide = _ref.currentSlide;

                        var arr = [];
                        for (var i = 0; i < slideCount; i += slidesToScroll) {
                            arr.push(i);
                        }
                        var dotDom = arr.map(function (index) {
                            var dotCls = (0, _classnames4['default'])(prefixCls + '-wrap-dot', (0, _defineProperty3['default'])({}, prefixCls + '-wrap-dot-active', index === currentSlide));
                            var _dotStyle = index === currentSlide ? dotActiveStyle : dotStyle;
                            return _react2['default'].createElement(
                                'div',
                                { className: dotCls, key: index },
                                _react2['default'].createElement('span', { style: _dotStyle })
                            );
                        });
                        return _react2['default'].createElement(
                            'div',
                            { className: prefixCls + '-wrap' },
                            dotDom
                        );
                    },
                    position: 'BottomCenter'
                }];
            }
            var wrapCls = (0, _classnames4['default'])(prefixCls, className, (0, _defineProperty3['default'])({}, prefixCls + '-vertical', vertical));
            return _react2['default'].createElement(_rmcNukaCarousel2['default'], (0, _extends3['default'])({}, newProps, { className: wrapCls, decorators: Decorators, afterSlide: this.onChange }));
        }
    }]);
    return Carousel;
}(_react2['default'].Component);

exports['default'] = Carousel;

Carousel.defaultProps = {
    prefixCls: 'am-carousel',
    dots: true,
    arrows: false,
    autoplay: false,
    infinite: false,
    cellAlign: 'center',
    selectedIndex: 0,
    dotStyle: {},
    dotActiveStyle: {}
};
module.exports = exports['default'];

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(551);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(556);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(65), __esModule: true };

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(551);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(552);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(66), __esModule: true };

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(67), __esModule: true };

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(563);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(564);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(552);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(69), __esModule: true };

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carousel__ = __webpack_require__(566);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__carousel__["a"]; });


/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__decorators__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_exenv__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_exenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_exenv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_raf__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_raf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_raf__);











// from https://github.com/chenglou/tween-functions
function easeOutCirc(t, b, _c, d) {
    var c = _c - b;
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
}
function linear(t, b, _c, d) {
    var c = _c - b;
    return c * t / d + b;
}
var DEFAULT_STACK_BEHAVIOR = 'ADDITIVE';
var DEFAULT_DURATION = 300;
var DEFAULT_DELAY = 0;
var stackBehavior = {
    ADDITIVE: 'ADDITIVE',
    DESTRUCTIVE: 'DESTRUCTIVE'
};
var addEvent = function addEvent(elem, type, eventHandle) {
    if (elem === null || typeof elem === 'undefined') {
        return;
    }
    if (elem.addEventListener) {
        elem.addEventListener(type, eventHandle, false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on' + type, eventHandle);
    } else {
        elem['on' + type] = eventHandle;
    }
};
var removeEvent = function removeEvent(elem, type, eventHandle) {
    if (elem === null || typeof elem === 'undefined') {
        return;
    }
    if (elem.removeEventListener) {
        elem.removeEventListener(type, eventHandle, false);
    } else if (elem.detachEvent) {
        elem.detachEvent('on' + type, eventHandle);
    } else {
        elem['on' + type] = null;
    }
};

var Carousel = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Carousel, _React$Component);

    function Carousel(props) {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Carousel);

        var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

        _this._rafCb = function () {
            var state = _this.state;
            if (state.tweenQueue.length === 0) {
                return;
            }
            var now = Date.now();
            var newTweenQueue = [];
            for (var i = 0; i < state.tweenQueue.length; i++) {
                var item = state.tweenQueue[i];
                var initTime = item.initTime,
                    config = item.config;

                if (now - initTime < config.duration) {
                    newTweenQueue.push(item);
                } else {
                    if (config.onEnd) {
                        config.onEnd();
                    }
                }
            }
            // onEnd might trigger a parent callback that removes this component
            // -1 means we've canceled it in componentWillUnmount
            if (_this._rafID === -1) {
                return;
            }
            _this.setState({
                tweenQueue: newTweenQueue
            });
            _this._rafID = __WEBPACK_IMPORTED_MODULE_8_raf___default()(_this._rafCb);
        };
        _this.handleClick = function (e) {
            if (_this.clickSafe === true) {
                e.preventDefault();
                e.stopPropagation();
                if (e.nativeEvent) {
                    e.nativeEvent.stopPropagation();
                }
            }
        };
        _this.autoplayIterator = function () {
            if (_this.props.wrapAround) {
                return _this.nextSlide();
            }
            if (_this.state.currentSlide !== _this.state.slideCount - _this.state.slidesToShow) {
                _this.nextSlide();
            } else {
                _this.stopAutoplay();
            }
        };
        // Action Methods
        _this.goToSlide = function (index) {
            var _this$props = _this.props,
                beforeSlide = _this$props.beforeSlide,
                afterSlide = _this$props.afterSlide;

            if (index >= __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.count(_this.props.children) || index < 0) {
                if (!_this.props.wrapAround) {
                    return;
                }
                ;
                if (index >= __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.count(_this.props.children)) {
                    beforeSlide(_this.state.currentSlide, 0);
                    return _this.setState({
                        currentSlide: 0
                    }, function () {
                        _this.animateSlide(null, null, _this.getTargetLeft(null, index), function () {
                            _this.animateSlide(null, 0.01);
                            afterSlide(0);
                            _this.resetAutoplay();
                            _this.setExternalData();
                        });
                    });
                } else {
                    var endSlide = __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.count(_this.props.children) - _this.state.slidesToScroll;
                    beforeSlide(_this.state.currentSlide, endSlide);
                    return _this.setState({
                        currentSlide: endSlide
                    }, function () {
                        _this.animateSlide(null, null, _this.getTargetLeft(null, index), function () {
                            _this.animateSlide(null, 0.01);
                            afterSlide(endSlide);
                            _this.resetAutoplay();
                            _this.setExternalData();
                        });
                    });
                }
            }
            beforeSlide(_this.state.currentSlide, index);
            _this.setState({
                currentSlide: index
            }, function () {
                _this.animateSlide();
                _this.props.afterSlide(index);
                _this.resetAutoplay();
                _this.setExternalData();
            });
        };
        _this.nextSlide = function () {
            var childrenCount = __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.count(_this.props.children);
            var slidesToShow = _this.props.slidesToShow;
            if (_this.props.slidesToScroll === 'auto') {
                slidesToShow = _this.state.slidesToScroll;
            }
            if (_this.state.currentSlide >= childrenCount - slidesToShow && !_this.props.wrapAround) {
                return;
            }
            if (_this.props.wrapAround) {
                _this.goToSlide(_this.state.currentSlide + _this.state.slidesToScroll);
            } else {
                if (_this.props.slideWidth !== 1) {
                    return _this.goToSlide(_this.state.currentSlide + _this.state.slidesToScroll);
                }
                _this.goToSlide(Math.min(_this.state.currentSlide + _this.state.slidesToScroll, childrenCount - slidesToShow));
            }
        };
        _this.previousSlide = function () {
            if (_this.state.currentSlide <= 0 && !_this.props.wrapAround) {
                return;
            }
            if (_this.props.wrapAround) {
                _this.goToSlide(_this.state.currentSlide - _this.state.slidesToScroll);
            } else {
                _this.goToSlide(Math.max(0, _this.state.currentSlide - _this.state.slidesToScroll));
            }
        };
        _this.onResize = function () {
            _this.setDimensions();
        };
        _this.onReadyStateChange = function () {
            _this.setDimensions();
        };
        _this.state = {
            currentSlide: _this.props.slideIndex,
            dragging: false,
            frameWidth: 0,
            left: 0,
            slideCount: 0,
            slidesToScroll: _this.props.slidesToScroll,
            slideWidth: 0,
            top: 0,
            tweenQueue: []
        };
        _this.touchObject = {};
        _this.clickSafe = true;
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Carousel, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setInitialDimensions();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setDimensions();
            this.bindEvents();
            this.setExternalData();
            if (this.props.autoplay) {
                this.startAutoplay();
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                slideCount: nextProps.children.length
            });
            this.setDimensions(nextProps);
            if (this.props.slideIndex !== nextProps.slideIndex && nextProps.slideIndex !== this.state.currentSlide) {
                this.goToSlide(nextProps.slideIndex);
            }
            if (this.props.autoplay !== nextProps.autoplay) {
                if (nextProps.autoplay) {
                    this.startAutoplay();
                } else {
                    this.stopAutoplay();
                }
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.unbindEvents();
            this.stopAutoplay();
            __WEBPACK_IMPORTED_MODULE_8_raf___default.a.cancel(this._rafID);
            this._rafID = -1;
        }
        // react-tween-state

    }, {
        key: 'tweenState',
        value: function tweenState(path, _ref) {
            var _this2 = this;

            var easing = _ref.easing,
                duration = _ref.duration,
                delay = _ref.delay,
                beginValue = _ref.beginValue,
                endValue = _ref.endValue,
                onEnd = _ref.onEnd,
                configSB = _ref.stackBehavior;

            this.setState(function (state) {
                var cursor = state;
                var stateName = void 0;
                // see comment below on pash hash
                var pathHash = void 0;
                if (typeof path === 'string') {
                    stateName = path;
                    pathHash = path;
                } else {
                    for (var i = 0; i < path.length - 1; i++) {
                        cursor = cursor[path[i]];
                    }
                    stateName = path[path.length - 1];
                    pathHash = path.join('|');
                }
                // see the reasoning for these defaults at the top of file
                var newConfig = {
                    easing: easing,
                    duration: duration == null ? DEFAULT_DURATION : duration,
                    delay: delay == null ? DEFAULT_DELAY : delay,
                    beginValue: beginValue == null ? cursor[stateName] : beginValue,
                    endValue: endValue,
                    onEnd: onEnd,
                    stackBehavior: configSB || DEFAULT_STACK_BEHAVIOR
                };
                var newTweenQueue = state.tweenQueue;
                if (newConfig.stackBehavior === stackBehavior.DESTRUCTIVE) {
                    newTweenQueue = state.tweenQueue.filter(function (item) {
                        return item.pathHash !== pathHash;
                    });
                }
                // we store path hash, so that during value retrieval we can use hash
                // comparison to find the path. See the kind of shitty thing you have to
                // do when you don't have value comparison for collections?
                newTweenQueue.push({
                    pathHash: pathHash,
                    config: newConfig,
                    initTime: Date.now() + newConfig.delay
                });
                // sorry for mutating. For perf reasons we don't want to deep clone.
                // guys, can we please all start using persistent collections so that
                // we can stop worrying about nonesense like this
                cursor[stateName] = newConfig.endValue;
                if (newTweenQueue.length === 1) {
                    _this2._rafID = __WEBPACK_IMPORTED_MODULE_8_raf___default()(_this2._rafCb);
                }
                // this will also include the above mutated update
                return { tweenQueue: newTweenQueue };
            });
        }
    }, {
        key: 'getTweeningValue',
        value: function getTweeningValue(path) {
            var state = this.state;
            var tweeningValue = void 0;
            var pathHash = void 0;
            if (typeof path === 'string') {
                tweeningValue = state[path];
                pathHash = path;
            } else {
                tweeningValue = state;
                for (var i = 0; i < path.length; i++) {
                    tweeningValue = tweeningValue[path[i]];
                }
                pathHash = path.join('|');
            }
            var now = Date.now();
            for (var _i = 0; _i < state.tweenQueue.length; _i++) {
                var _state$tweenQueue$_i = state.tweenQueue[_i],
                    itemPathHash = _state$tweenQueue$_i.pathHash,
                    initTime = _state$tweenQueue$_i.initTime,
                    config = _state$tweenQueue$_i.config;

                if (itemPathHash !== pathHash) {
                    continue;
                }
                var progressTime = now - initTime > config.duration ? config.duration : Math.max(0, now - initTime);
                // `now - initTime` can be negative if initTime is scheduled in the
                // future by a delay. In this case we take 0
                // if duration is 0, consider that as jumping to endValue directly. This
                // is needed because the easing functino might have undefined behavior for
                // duration = 0
                var easeValue = config.duration === 0 ? config.endValue : config.easing(progressTime, config.beginValue, config.endValue, config.duration);
                var contrib = easeValue - config.endValue;
                tweeningValue += contrib;
            }
            return tweeningValue;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var children = __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.count(this.props.children) > 1 ? this.formatChildren(this.props.children) : this.props.children;
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { className: ['slider', this.props.className || ''].join(' '), ref: 'slider', style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.getSliderStyles(), this.props.style) },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'div',
                    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ className: 'slider-frame', ref: 'frame', style: this.getFrameStyles() }, this.getTouchEvents(), this.getMouseEvents(), { onClick: this.handleClick }),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        'ul',
                        { className: 'slider-list', ref: 'list', style: this.getListStyles() },
                        children
                    )
                ),
                this.props.decorators ? this.props.decorators.map(function (Decorator, index) {
                    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        'div',
                        { style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, _this3.getDecoratorStyles(Decorator.position), Decorator.style || {}), className: 'slider-decorator-' + index, key: index },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Decorator.component, { currentSlide: _this3.state.currentSlide, slideCount: _this3.state.slideCount, frameWidth: _this3.state.frameWidth, slideWidth: _this3.state.slideWidth, slidesToScroll: _this3.state.slidesToScroll, cellSpacing: _this3.props.cellSpacing, slidesToShow: _this3.props.slidesToShow, wrapAround: _this3.props.wrapAround, nextSlide: _this3.nextSlide, previousSlide: _this3.previousSlide, goToSlide: _this3.goToSlide })
                    );
                }) : null,
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('style', { type: 'text/css', dangerouslySetInnerHTML: { __html: this.getStyleTagStyles() } })
            );
        }
        // Touch Events

    }, {
        key: 'getTouchEvents',
        value: function getTouchEvents() {
            var self = this;
            if (this.props.swiping === false) {
                return null;
            }
            return {
                onTouchStart: function onTouchStart(e) {
                    self.touchObject = {
                        startX: e.touches[0].pageX,
                        startY: e.touches[0].pageY
                    };
                    self.handleMouseOver();
                },
                onTouchMove: function onTouchMove(e) {
                    var direction = self.swipeDirection(self.touchObject.startX, e.touches[0].pageX, self.touchObject.startY, e.touches[0].pageY);
                    if (direction !== 0) {
                        e.preventDefault();
                    }
                    var length = self.props.vertical ? Math.round(Math.sqrt(Math.pow(e.touches[0].pageY - self.touchObject.startY, 2))) : Math.round(Math.sqrt(Math.pow(e.touches[0].pageX - self.touchObject.startX, 2)));
                    self.touchObject = {
                        startX: self.touchObject.startX,
                        startY: self.touchObject.startY,
                        endX: e.touches[0].pageX,
                        endY: e.touches[0].pageY,
                        length: length,
                        direction: direction
                    };
                    self.setState({
                        left: self.props.vertical ? 0 : self.getTargetLeft(self.touchObject.length * self.touchObject.direction),
                        top: self.props.vertical ? self.getTargetLeft(self.touchObject.length * self.touchObject.direction) : 0
                    });
                },
                onTouchEnd: function onTouchEnd(e) {
                    self.handleSwipe(e);
                    self.handleMouseOut();
                },
                onTouchCancel: function onTouchCancel(e) {
                    self.handleSwipe(e);
                }
            };
        }
    }, {
        key: 'getMouseEvents',
        value: function getMouseEvents() {
            var self = this;
            if (this.props.dragging === false) {
                return null;
            }
            return {
                onMouseOver: function onMouseOver() {
                    self.handleMouseOver();
                },
                onMouseOut: function onMouseOut() {
                    self.handleMouseOut();
                },
                onMouseDown: function onMouseDown(e) {
                    self.touchObject = {
                        startX: e.clientX,
                        startY: e.clientY
                    };
                    self.setState({
                        dragging: true
                    });
                },
                onMouseMove: function onMouseMove(e) {
                    if (!self.state.dragging) {
                        return;
                    }
                    var direction = self.swipeDirection(self.touchObject.startX, e.clientX, self.touchObject.startY, e.clientY);
                    if (direction !== 0) {
                        e.preventDefault();
                    }
                    var length = self.props.vertical ? Math.round(Math.sqrt(Math.pow(e.clientY - self.touchObject.startY, 2))) : Math.round(Math.sqrt(Math.pow(e.clientX - self.touchObject.startX, 2)));
                    self.touchObject = {
                        startX: self.touchObject.startX,
                        startY: self.touchObject.startY,
                        endX: e.clientX,
                        endY: e.clientY,
                        length: length,
                        direction: direction
                    };
                    self.setState({
                        left: self.props.vertical ? 0 : self.getTargetLeft(self.touchObject.length * self.touchObject.direction),
                        top: self.props.vertical ? self.getTargetLeft(self.touchObject.length * self.touchObject.direction) : 0
                    });
                },
                onMouseUp: function onMouseUp(e) {
                    if (!self.state.dragging) {
                        return;
                    }
                    self.handleSwipe(e);
                },
                onMouseLeave: function onMouseLeave(e) {
                    if (!self.state.dragging) {
                        return;
                    }
                    self.handleSwipe(e);
                }
            };
        }
    }, {
        key: 'handleMouseOver',
        value: function handleMouseOver() {
            if (this.props.autoplay) {
                this.autoplayPaused = true;
                this.stopAutoplay();
            }
        }
    }, {
        key: 'handleMouseOut',
        value: function handleMouseOut() {
            if (this.props.autoplay && this.autoplayPaused) {
                this.startAutoplay();
                this.autoplayPaused = null;
            }
        }
    }, {
        key: 'handleSwipe',
        value: function handleSwipe(_) {
            if (typeof this.touchObject.length !== 'undefined' && this.touchObject.length > 44) {
                this.clickSafe = true;
            } else {
                this.clickSafe = false;
            }
            var _props = this.props,
                slidesToShow = _props.slidesToShow,
                slidesToScroll = _props.slidesToScroll,
                swipeSpeed = _props.swipeSpeed;
            // var slidesToShow = this.props.slidesToShow;

            if (slidesToScroll === 'auto') {
                slidesToShow = this.state.slidesToScroll;
            }
            if (__WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.count(this.props.children) > 1 && this.touchObject.length > this.state.slideWidth / slidesToShow / swipeSpeed) {
                if (this.touchObject.direction === 1) {
                    if (this.state.currentSlide >= __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.count(this.props.children) - slidesToShow && !this.props.wrapAround) {
                        this.animateSlide(this.props.edgeEasing);
                    } else {
                        this.nextSlide();
                    }
                } else if (this.touchObject.direction === -1) {
                    if (this.state.currentSlide <= 0 && !this.props.wrapAround) {
                        this.animateSlide(this.props.edgeEasing);
                    } else {
                        this.previousSlide();
                    }
                }
            } else {
                this.goToSlide(this.state.currentSlide);
            }
            this.touchObject = {};
            this.setState({
                dragging: false
            });
        }
    }, {
        key: 'swipeDirection',
        value: function swipeDirection(x1, x2, y1, y2) {
            var xDist = x1 - x2;
            var yDist = y1 - y2;
            var r = Math.atan2(yDist, xDist);
            var swipeAngle = Math.round(r * 180 / Math.PI);
            if (swipeAngle < 0) {
                swipeAngle = 360 - Math.abs(swipeAngle);
            }
            if (swipeAngle <= 45 && swipeAngle >= 0) {
                return 1;
            }
            if (swipeAngle <= 360 && swipeAngle >= 315) {
                return 1;
            }
            if (swipeAngle >= 135 && swipeAngle <= 225) {
                return -1;
            }
            if (this.props.vertical === true) {
                if (swipeAngle >= 35 && swipeAngle <= 135) {
                    return 1;
                } else {
                    return -1;
                }
            }
            return 0;
        }
    }, {
        key: 'startAutoplay',
        value: function startAutoplay() {
            if (__WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.count(this.props.children) <= 1) {
                return;
            }
            this.autoplayID = setInterval(this.autoplayIterator, this.props.autoplayInterval);
        }
    }, {
        key: 'resetAutoplay',
        value: function resetAutoplay() {
            if (this.props.resetAutoplay && this.props.autoplay && !this.autoplayPaused) {
                this.stopAutoplay();
                this.startAutoplay();
            }
        }
    }, {
        key: 'stopAutoplay',
        value: function stopAutoplay() {
            if (this.autoplayID) {
                clearInterval(this.autoplayID);
            }
        }
        // Animation

    }, {
        key: 'animateSlide',
        value: function animateSlide(easing, duration, endValue, callback) {
            this.tweenState(this.props.vertical ? 'top' : 'left', {
                easing: easing || this.props.easing,
                duration: duration || this.props.speed,
                endValue: endValue || this.getTargetLeft(),
                delay: null,
                beginValue: null,
                onEnd: callback || null,
                stackBehavior: stackBehavior
            });
        }
    }, {
        key: 'getTargetLeft',
        value: function getTargetLeft(touchOffset, slide) {
            var offset = void 0;
            var target = slide || this.state.currentSlide;
            var cellSpacing = this.props.cellSpacing;
            switch (this.props.cellAlign) {
                case 'left':
                    {
                        offset = 0;
                        offset -= cellSpacing * target;
                        break;
                    }
                case 'center':
                    {
                        offset = (this.state.frameWidth - this.state.slideWidth) / 2;
                        offset -= cellSpacing * target;
                        break;
                    }
                case 'right':
                    {
                        offset = this.state.frameWidth - this.state.slideWidth;
                        offset -= cellSpacing * target;
                        break;
                    }
                default:
                    break;
            }
            var left = this.state.slideWidth * target;
            var lastSlide = this.state.currentSlide > 0 && target + this.state.slidesToScroll >= this.state.slideCount;
            if (lastSlide && this.props.slideWidth !== 1 && !this.props.wrapAround && this.props.slidesToScroll === 'auto') {
                left = this.state.slideWidth * this.state.slideCount - this.state.frameWidth;
                offset = 0;
                offset -= cellSpacing * (this.state.slideCount - 1);
            }
            offset -= touchOffset || 0;
            return (left - offset) * -1;
        }
        // Bootstrapping

    }, {
        key: 'bindEvents',
        value: function bindEvents() {
            if (__WEBPACK_IMPORTED_MODULE_7_exenv___default.a.canUseDOM) {
                addEvent(window, 'resize', this.onResize);
                addEvent(document, 'readystatechange', this.onReadyStateChange);
            }
        }
    }, {
        key: 'unbindEvents',
        value: function unbindEvents() {
            if (__WEBPACK_IMPORTED_MODULE_7_exenv___default.a.canUseDOM) {
                removeEvent(window, 'resize', this.onResize);
                removeEvent(document, 'readystatechange', this.onReadyStateChange);
            }
        }
    }, {
        key: 'formatChildren',
        value: function formatChildren(children) {
            var _this4 = this;

            var positionValue = this.props.vertical ? this.getTweeningValue('top') : this.getTweeningValue('left');
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.map(children, function (child, index) {
                return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'li',
                    { className: 'slider-slide', style: _this4.getSlideStyles(index, positionValue), key: index },
                    child
                );
            });
        }
    }, {
        key: 'setInitialDimensions',
        value: function setInitialDimensions() {
            var _this5 = this;

            var _props2 = this.props,
                vertical = _props2.vertical,
                initialSlideHeight = _props2.initialSlideHeight,
                initialSlideWidth = _props2.initialSlideWidth,
                slidesToShow = _props2.slidesToShow,
                cellSpacing = _props2.cellSpacing,
                children = _props2.children;

            var slideWidth = vertical ? initialSlideHeight || 0 : initialSlideWidth || 0;
            var slideHeight = initialSlideHeight ? initialSlideHeight * slidesToShow : 0;
            var frameHeight = slideHeight + cellSpacing * (slidesToShow - 1);
            this.setState({
                slideHeight: slideHeight,
                frameWidth: vertical ? frameHeight : '100%',
                slideCount: __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.count(children),
                slideWidth: slideWidth
            }, function () {
                _this5.setLeft();
                _this5.setExternalData();
            });
        }
    }, {
        key: 'setDimensions',
        value: function setDimensions(props) {
            var _this6 = this;

            props = props || this.props;
            var frameWidth = void 0;
            var frameHeight = void 0;
            var slideHeight = void 0;
            var slideWidth = void 0;
            var slidesToScroll = props.slidesToScroll;
            var frame = this.refs.frame;
            var firstSlide = frame.childNodes[0].childNodes[0];
            if (firstSlide) {
                firstSlide.style.height = 'auto';
                slideHeight = this.props.vertical ? firstSlide.offsetHeight * props.slidesToShow : firstSlide.offsetHeight;
            } else {
                slideHeight = 100;
            }
            if (typeof props.slideWidth !== 'number') {
                slideWidth = parseInt(props.slideWidth, 10);
            } else {
                if (props.vertical) {
                    slideWidth = slideHeight / props.slidesToShow * props.slideWidth;
                } else {
                    slideWidth = frame.offsetWidth / props.slidesToShow * props.slideWidth;
                }
            }
            if (!props.vertical) {
                slideWidth -= props.cellSpacing * ((100 - 100 / props.slidesToShow) / 100);
            }
            frameHeight = slideHeight + props.cellSpacing * (props.slidesToShow - 1);
            frameWidth = props.vertical ? frameHeight : frame.offsetWidth;
            if (props.slidesToScroll === 'auto') {
                slidesToScroll = Math.floor(frameWidth / (slideWidth + props.cellSpacing));
            }
            this.setState({
                slideHeight: slideHeight,
                frameWidth: frameWidth,
                slideWidth: slideWidth,
                slidesToScroll: slidesToScroll,
                left: props.vertical ? 0 : this.getTargetLeft(),
                top: props.vertical ? this.getTargetLeft() : 0
            }, function () {
                _this6.setLeft();
            });
        }
    }, {
        key: 'setLeft',
        value: function setLeft() {
            this.setState({
                left: this.props.vertical ? 0 : this.getTargetLeft(),
                top: this.props.vertical ? this.getTargetLeft() : 0
            });
        }
        // Data

    }, {
        key: 'setExternalData',
        value: function setExternalData() {
            if (this.props.data) {
                this.props.data();
            }
        }
        // Styles

    }, {
        key: 'getListStyles',
        value: function getListStyles() {
            var listWidth = this.state.slideWidth * __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.count(this.props.children);
            var cellSpacing = this.props.cellSpacing;
            var spacingOffset = cellSpacing * __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.count(this.props.children);
            var transform = 'translate3d(' + this.getTweeningValue('left') + 'px, ' + this.getTweeningValue('top') + 'px, 0)';
            return {
                transform: transform,
                WebkitTransform: transform,
                msTransform: 'translate(' + this.getTweeningValue('left') + 'px, ' + this.getTweeningValue('top') + 'px)',
                position: 'relative',
                display: 'block',
                margin: this.props.vertical ? cellSpacing / 2 * -1 + 'px 0px' : '0px ' + cellSpacing / 2 * -1 + 'px',
                padding: 0,
                height: this.props.vertical ? listWidth + spacingOffset : this.state.slideHeight,
                width: this.props.vertical ? 'auto' : listWidth + spacingOffset,
                cursor: this.state.dragging === true ? 'pointer' : 'inherit',
                boxSizing: 'border-box',
                MozBoxSizing: 'border-box'
            };
        }
    }, {
        key: 'getFrameStyles',
        value: function getFrameStyles() {
            return {
                position: 'relative',
                display: 'block',
                overflow: this.props.frameOverflow,
                height: this.props.vertical ? this.state.frameWidth || 'initial' : 'auto',
                margin: this.props.framePadding,
                padding: 0,
                transform: 'translate3d(0, 0, 0)',
                WebkitTransform: 'translate3d(0, 0, 0)',
                msTransform: 'translate(0, 0)',
                boxSizing: 'border-box',
                MozBoxSizing: 'border-box'
            };
        }
    }, {
        key: 'getSlideStyles',
        value: function getSlideStyles(index, positionValue) {
            var targetPosition = this.getSlideTargetPosition(index, positionValue);
            var cellSpacing = this.props.cellSpacing;
            return {
                position: 'absolute',
                left: this.props.vertical ? 0 : targetPosition,
                top: this.props.vertical ? targetPosition : 0,
                display: this.props.vertical ? 'block' : 'inline-block',
                listStyleType: 'none',
                verticalAlign: 'top',
                width: this.props.vertical ? '100%' : this.state.slideWidth,
                height: 'auto',
                boxSizing: 'border-box',
                MozBoxSizing: 'border-box',
                marginLeft: this.props.vertical ? 'auto' : cellSpacing / 2,
                marginRight: this.props.vertical ? 'auto' : cellSpacing / 2,
                marginTop: this.props.vertical ? cellSpacing / 2 : 'auto',
                marginBottom: this.props.vertical ? cellSpacing / 2 : 'auto'
            };
        }
    }, {
        key: 'getSlideTargetPosition',
        value: function getSlideTargetPosition(index, positionValue) {
            var slidesToShow = this.state.frameWidth / this.state.slideWidth;
            var targetPosition = (this.state.slideWidth + this.props.cellSpacing) * index;
            var end = (this.state.slideWidth + this.props.cellSpacing) * slidesToShow * -1;
            if (this.props.wrapAround) {
                var slidesBefore = Math.ceil(positionValue / this.state.slideWidth);
                if (this.state.slideCount - slidesBefore <= index) {
                    return (this.state.slideWidth + this.props.cellSpacing) * (this.state.slideCount - index) * -1;
                }
                var slidesAfter = Math.ceil((Math.abs(positionValue) - Math.abs(end)) / this.state.slideWidth);
                if (this.state.slideWidth !== 1) {
                    slidesAfter = Math.ceil((Math.abs(positionValue) - this.state.slideWidth) / this.state.slideWidth);
                }
                if (index <= slidesAfter - 1) {
                    return (this.state.slideWidth + this.props.cellSpacing) * (this.state.slideCount + index);
                }
            }
            return targetPosition;
        }
    }, {
        key: 'getSliderStyles',
        value: function getSliderStyles() {
            return {
                position: 'relative',
                display: 'block',
                width: this.props.width,
                height: 'auto',
                boxSizing: 'border-box',
                MozBoxSizing: 'border-box',
                visibility: this.state.slideWidth ? 'visible' : 'hidden'
            };
        }
    }, {
        key: 'getStyleTagStyles',
        value: function getStyleTagStyles() {
            return '.slider-slide > img {width: 100%; display: block;}';
        }
    }, {
        key: 'getDecoratorStyles',
        value: function getDecoratorStyles(position) {
            switch (position) {
                case 'TopLeft':
                    {
                        return {
                            position: 'absolute',
                            top: 0,
                            left: 0
                        };
                    }
                case 'TopCenter':
                    {
                        return {
                            position: 'absolute',
                            top: 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            WebkitTransform: 'translateX(-50%)',
                            msTransform: 'translateX(-50%)'
                        };
                    }
                case 'TopRight':
                    {
                        return {
                            position: 'absolute',
                            top: 0,
                            right: 0
                        };
                    }
                case 'CenterLeft':
                    {
                        return {
                            position: 'absolute',
                            top: '50%',
                            left: 0,
                            transform: 'translateY(-50%)',
                            WebkitTransform: 'translateY(-50%)',
                            msTransform: 'translateY(-50%)'
                        };
                    }
                case 'CenterCenter':
                    {
                        return {
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%,-50%)',
                            WebkitTransform: 'translate(-50%, -50%)',
                            msTransform: 'translate(-50%, -50%)'
                        };
                    }
                case 'CenterRight':
                    {
                        return {
                            position: 'absolute',
                            top: '50%',
                            right: 0,
                            transform: 'translateY(-50%)',
                            WebkitTransform: 'translateY(-50%)',
                            msTransform: 'translateY(-50%)'
                        };
                    }
                case 'BottomLeft':
                    {
                        return {
                            position: 'absolute',
                            bottom: 0,
                            left: 0
                        };
                    }
                case 'BottomCenter':
                    {
                        return {
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                            textAlign: 'center'
                        };
                    }
                case 'BottomRight':
                    {
                        return {
                            position: 'absolute',
                            bottom: 0,
                            right: 0
                        };
                    }
                default:
                    {
                        return {
                            position: 'absolute',
                            top: 0,
                            left: 0
                        };
                    }
            }
        }
    }]);

    return Carousel;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

Carousel.defaultProps = {
    afterSlide: function afterSlide() {},
    autoplay: false,
    resetAutoplay: true,
    swipeSpeed: 12,
    autoplayInterval: 3000,
    beforeSlide: function beforeSlide() {},
    cellAlign: 'left',
    cellSpacing: 0,
    data: function data() {},
    decorators: __WEBPACK_IMPORTED_MODULE_6__decorators__["a" /* default */],
    dragging: true,
    easing: easeOutCirc,
    edgeEasing: linear,
    framePadding: '0px',
    frameOverflow: 'hidden',
    slideIndex: 0,
    slidesToScroll: 1,
    slidesToShow: 1,
    slideWidth: 1,
    speed: 500,
    swiping: true,
    vertical: false,
    width: '100%',
    wrapAround: false,
    style: {}
};
/* harmony default export */ __webpack_exports__["a"] = (Carousel);

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$assign = __webpack_require__(568)["default"];

exports["default"] = _Object$assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.__esModule = true;

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(569), __esModule: true };

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(570);
module.exports = __webpack_require__(7).Object.assign;

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(33);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(571)});

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.1 Object.assign(target, source, ...)
var $        = __webpack_require__(5)
  , toObject = __webpack_require__(291)
  , IObject  = __webpack_require__(290);

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = __webpack_require__(62)(function(){
  var a = Object.assign
    , A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , $$    = arguments
    , $$len = $$.length
    , index = 1
    , getKeys    = $.getKeys
    , getSymbols = $.getSymbols
    , isEnum     = $.isEnum;
  while($$len > index){
    var S      = IObject($$[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  }
  return T;
} : Object.assign;

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);







var DefaultDecorators = [{
    component: function (_React$Component) {
        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(component, _React$Component);

        function component() {
            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, component);

            var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (component.__proto__ || Object.getPrototypeOf(component)).apply(this, arguments));

            _this.handleClick = function (e) {
                e.preventDefault();
                _this.props.previousSlide();
            };
            return _this;
        }

        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(component, [{
            key: 'render',
            value: function render() {
                return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                    'button',
                    { style: this.getButtonStyles(this.props.currentSlide === 0 && !this.props.wrapAround), onClick: this.handleClick },
                    'PREV'
                );
            }
        }, {
            key: 'getButtonStyles',
            value: function getButtonStyles(disabled) {
                return {
                    border: 0,
                    background: 'rgba(0,0,0,0.4)',
                    color: 'white',
                    padding: 10,
                    outline: 0,
                    opacity: disabled ? 0.3 : 1,
                    cursor: 'pointer'
                };
            }
        }]);

        return component;
    }(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component),
    position: 'CenterLeft'
}, {
    component: function (_React$Component2) {
        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(component, _React$Component2);

        function component() {
            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, component);

            var _this2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (component.__proto__ || Object.getPrototypeOf(component)).apply(this, arguments));

            _this2.handleClick = function (e) {
                e.preventDefault();
                if (_this2.props.nextSlide) {
                    _this2.props.nextSlide();
                }
            };
            return _this2;
        }

        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(component, [{
            key: 'render',
            value: function render() {
                return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                    'button',
                    { style: this.getButtonStyles(this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount && !this.props.wrapAround), onClick: this.handleClick },
                    'NEXT'
                );
            }
        }, {
            key: 'getButtonStyles',
            value: function getButtonStyles(disabled) {
                return {
                    border: 0,
                    background: 'rgba(0,0,0,0.4)',
                    color: 'white',
                    padding: 10,
                    outline: 0,
                    opacity: disabled ? 0.3 : 1,
                    cursor: 'pointer'
                };
            }
        }]);

        return component;
    }(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component),
    position: 'CenterRight'
}, {
    component: function (_React$Component3) {
        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(component, _React$Component3);

        function component() {
            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, component);

            return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (component.__proto__ || Object.getPrototypeOf(component)).apply(this, arguments));
        }

        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(component, [{
            key: 'render',
            value: function render() {
                var _this4 = this;

                var indexes = this.getIndexes(this.props.slideCount, this.props.slidesToScroll);
                return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                    'ul',
                    { style: this.getListStyles() },
                    indexes.map(function (index) {
                        return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                            'li',
                            { style: _this4.getListItemStyles(), key: index },
                            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                                'button',
                                { style: _this4.getButtonStyles(_this4.props.currentSlide === index), onClick: _this4.props.goToSlide && _this4.props.goToSlide.bind(null, index) },
                                '\u2022'
                            )
                        );
                    })
                );
            }
        }, {
            key: 'getIndexes',
            value: function getIndexes(count, inc) {
                var arr = [];
                for (var i = 0; i < count; i += inc) {
                    arr.push(i);
                }
                return arr;
            }
        }, {
            key: 'getListStyles',
            value: function getListStyles() {
                return {
                    position: 'relative',
                    margin: 0,
                    top: -10,
                    padding: 0
                };
            }
        }, {
            key: 'getListItemStyles',
            value: function getListItemStyles() {
                return {
                    listStyleType: 'none',
                    display: 'inline-block'
                };
            }
        }, {
            key: 'getButtonStyles',
            value: function getButtonStyles(active) {
                return {
                    border: 0,
                    background: 'transparent',
                    color: 'black',
                    cursor: 'pointer',
                    padding: 10,
                    outline: 0,
                    fontSize: 24,
                    opacity: active ? 1 : 0.5
                };
            }
        }]);

        return component;
    }(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component),
    position: 'BottomCenter'
}];
/* harmony default export */ __webpack_exports__["a"] = (DefaultDecorators);

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return ExecutionEnvironment;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());


/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(292)
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47)))

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(576);

__webpack_require__(585);

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(577);

__webpack_require__(579);

__webpack_require__(581);

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(578);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(32)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../css-loader/index.js!./normalize.css", function() {
			var newContent = require("!!../css-loader/index.js!./normalize.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(undefined);
// imports


// module
exports.push([module.i, "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(580);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(32)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js!./index.css", function() {
			var newContent = require("!!../../../css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(undefined);
// imports


// module
exports.push([module.i, "/*do not import this file except components/style/index.less*/\n.am-fade-enter,\n.am-fade-appear {\n  opacity: 0;\n  -webkit-animation-duration: .2s;\n          animation-duration: .2s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n          animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.am-fade-leave {\n  -webkit-animation-duration: .2s;\n          animation-duration: .2s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n          animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.am-fade-enter.am-fade-enter-active,\n.am-fade-appear.am-fade-appear-active {\n  -webkit-animation-name: amFadeIn;\n          animation-name: amFadeIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.am-fade-leave.am-fade-leave-active {\n  -webkit-animation-name: amFadeOut;\n          animation-name: amFadeOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n@-webkit-keyframes amFadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes amFadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes amFadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes amFadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.am-slide-up-enter,\n.am-slide-up-appear {\n  -webkit-transform: translate(0, 100%);\n      -ms-transform: translate(0, 100%);\n          transform: translate(0, 100%);\n}\n.am-slide-up-enter,\n.am-slide-up-appear,\n.am-slide-up-leave {\n  -webkit-animation-duration: .2s;\n          animation-duration: .2s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n          animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.am-slide-up-enter.am-slide-up-enter-active,\n.am-slide-up-appear.am-slide-up-appear-active {\n  -webkit-animation-name: amSlideUpIn;\n          animation-name: amSlideUpIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.am-slide-up-leave.am-slide-up-leave-active {\n  -webkit-animation-name: amSlideUpOut;\n          animation-name: amSlideUpOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n@-webkit-keyframes amSlideUpIn {\n  0% {\n    -webkit-transform: translate(0, 100%);\n            transform: translate(0, 100%);\n  }\n  100% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n}\n@keyframes amSlideUpIn {\n  0% {\n    -webkit-transform: translate(0, 100%);\n            transform: translate(0, 100%);\n  }\n  100% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes amSlideUpOut {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  100% {\n    -webkit-transform: translate(0, 100%);\n            transform: translate(0, 100%);\n  }\n}\n@keyframes amSlideUpOut {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  100% {\n    -webkit-transform: translate(0, 100%);\n            transform: translate(0, 100%);\n  }\n}\n.am.am-zoom-enter,\n.am.am-zoom-leave {\n  display: block;\n}\n.am-zoom-enter,\n.am-zoom-appear {\n  opacity: 0;\n  -webkit-animation-duration: .2s;\n          animation-duration: .2s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n          animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  -webkit-animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);\n          animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.am-zoom-leave {\n  -webkit-animation-duration: .2s;\n          animation-duration: .2s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n          animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  -webkit-animation-timing-function: cubic-bezier(0.6, -0.3, 0.74, 0.05);\n          animation-timing-function: cubic-bezier(0.6, -0.3, 0.74, 0.05);\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.am-zoom-enter.am-zoom-enter-active,\n.am-zoom-appear.am-zoom-appear-active {\n  -webkit-animation-name: amZoomIn;\n          animation-name: amZoomIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.am-zoom-leave.am-zoom-leave-active {\n  -webkit-animation-name: amZoomOut;\n          animation-name: amZoomOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n@-webkit-keyframes amZoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@keyframes amZoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@-webkit-keyframes amZoomOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n}\n@keyframes amZoomOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n}\n.am-slide-down-enter,\n.am-slide-down-appear {\n  -webkit-transform: translate(0, -100%);\n      -ms-transform: translate(0, -100%);\n          transform: translate(0, -100%);\n}\n.am-slide-down-enter,\n.am-slide-down-appear,\n.am-slide-down-leave {\n  -webkit-animation-duration: .2s;\n          animation-duration: .2s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n          animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.am-slide-down-enter.am-slide-down-enter-active,\n.am-slide-down-appear.am-slide-down-appear-active {\n  -webkit-animation-name: amSlideDownIn;\n          animation-name: amSlideDownIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.am-slide-down-leave.am-slide-down-leave-active {\n  -webkit-animation-name: amSlideDownOut;\n          animation-name: amSlideDownOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n@-webkit-keyframes amSlideDownIn {\n  0% {\n    -webkit-transform: translate(0, -100%);\n            transform: translate(0, -100%);\n  }\n  100% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n}\n@keyframes amSlideDownIn {\n  0% {\n    -webkit-transform: translate(0, -100%);\n            transform: translate(0, -100%);\n  }\n  100% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes amSlideDownOut {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  100% {\n    -webkit-transform: translate(0, -100%);\n            transform: translate(0, -100%);\n  }\n}\n@keyframes amSlideDownOut {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  100% {\n    -webkit-transform: translate(0, -100%);\n            transform: translate(0, -100%);\n  }\n}\n*,\n*:before,\n*:after {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  background-color: #f5f5f9;\n}\n*[contenteditable] {\n  -webkit-user-select: auto !important;\n}\n*:focus {\n  outline: none;\n}\na {\n  background: transparent;\n  text-decoration: none;\n  outline: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _toConsumableArray2 = __webpack_require__(582);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development' && !process.env.DISABLE_ANTD_MOBILE_UPGRADE) {
    try {
        var localVersion = __webpack_require__(584);
        if (!localVersion._disable && fetch) {
            var generateCallbackFunction = function generateCallbackFunction() {
                return 'jsonp_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);
            };

            var clearFunction = function clearFunction(functionName) {
                // IE8 throws an exception when you try to delete a property on window
                // http://stackoverflow.com/a/1824228/751089
                try {
                    delete window[functionName];
                } catch (e) {
                    window[functionName] = undefined;
                }
            };

            var removeScript = function removeScript(scriptId) {
                var script = document.getElementById(scriptId);
                if (script) {
                    document.getElementsByTagName('head')[0].removeChild(script);
                }
            };

            var fetchJsonp = function fetchJsonp(_url) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                // to avoid param reassign
                var url = _url;
                var timeout = options.timeout || defaultOptions.timeout;
                var jsonpCallback = options.jsonpCallback || defaultOptions.jsonpCallback;
                var timeoutId = void 0;
                return new Promise(function (resolve, reject) {
                    var callbackFunction = options.jsonpCallbackFunction || generateCallbackFunction();
                    var scriptId = jsonpCallback + '_' + callbackFunction;
                    window[callbackFunction] = function (response) {
                        resolve({
                            ok: true,
                            // keep consistent with fetch API
                            json: function json() {
                                return Promise.resolve(response);
                            }
                        });
                        if (timeoutId) {
                            clearTimeout(timeoutId);
                        }
                        removeScript(scriptId);
                        clearFunction(callbackFunction);
                    };
                    // Check if the user set their own params, and if not add a ? to start a list of params
                    url += url.indexOf('?') === -1 ? '?' : '&';
                    var jsonpScript = document.createElement('script');
                    jsonpScript.setAttribute('src', '' + url + jsonpCallback + '=' + callbackFunction);
                    if (options.charset) {
                        jsonpScript.setAttribute('charset', options.charset);
                    }
                    jsonpScript.id = scriptId;
                    document.getElementsByTagName('head')[0].appendChild(jsonpScript);
                    timeoutId = setTimeout(function () {
                        reject(new Error('JSONP request to ' + _url + ' timed out'));
                        clearFunction(callbackFunction);
                        removeScript(scriptId);
                        window[callbackFunction] = function () {
                            clearFunction(callbackFunction);
                        };
                    }, timeout);
                    // Caught if got 404/500
                    jsonpScript.onerror = function () {
                        reject(new Error('JSONP request to ' + _url + ' failed'));
                        clearFunction(callbackFunction);
                        removeScript(scriptId);
                        if (timeoutId) {
                            clearTimeout(timeoutId);
                        }
                    };
                });
            };
            //#endregion


            //#region fetch-jsonp
            var defaultOptions = {
                timeout: 5000,
                jsonpCallback: 'callback',
                jsonpCallbackFunction: null
            };
            var gateway = 'https://basement-gzone.alipay.com/mgw_proxy/unauthorized_endpoint';
            var params = {
                path: 'antd-mobile-upgrade-tip/upgrade-tip-h5data',
                'x-basement-operation': 'com.alipay.h5data.fengdie.get'
            };
            var requestData = encodeURIComponent(JSON.stringify([params]));
            fetchJsonp(gateway + '?requestData=' + requestData).then(function (res) {
                return res.json();
            }).then(function (data) {
                if (!data.result || !data.result.success) {
                    return;
                } else {
                    data = data.result.result;
                }
                var notice = '';
                var tipComponents = data.filter(function (item) {
                    var key = item.name;
                    if (key === '[notice]') {
                        notice = item.tip;
                    }
                    if (!localVersion[key]) {
                        return false;
                    }
                    var oldVer = localVersion[key].split('.');
                    var newVer = item.version.split('.');
                    var result = false;
                    var length = Math.max(oldVer.length, newVer.length);
                    for (var i = 0; i < length; i++) {
                        if (oldVer[i] !== newVer[i]) {
                            var newVerNum = +newVer[i];
                            var oldVerNum = +oldVer[i];
                            var hasNaN = isNaN(newVerNum) || isNaN(oldVerNum);
                            result = !(!hasNaN && oldVerNum >= newVerNum);
                            if (result) {
                                break;
                            }
                        }
                    }
                    return result;
                });
                if (notice) {
                    console.warn('--------------------------------------------------------\n', '[antd-mobile-upgrade-tip] Notice:\n', notice + '\n', '--------------------------------------------------------');
                }
                if (tipComponents.length > 0) {
                    var _console;

                    (_console = console).warn.apply(_console, ['--------------------------------------------------------\n', '[antd-mobile-upgrade-tip] some components is expired:\n', '\n'].concat((0, _toConsumableArray3['default'])(tipComponents.map(function (newData) {
                        var key = newData.name;
                        return key + ': ' + localVersion[key] + ' => ' + newData.version + ' ' + newData.tip + ' ' + newData.url + '\n';
                    })), ['\n', '[you can reinstall node_modules to upgrade all of them.]\n', '[about this] http://mobile.ant.design/docs/react/upgrade-tip-cn\n', '--------------------------------------------------------']));
                }
            })['catch'](function () {});
        }
    } catch (error) {}
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(583);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(293), __esModule: true };

/***/ }),

/***/ 584:
/***/ (function(module, exports) {

module.exports = {"antd-mobile":"2.1.0","rc-checkbox":"2.0.3","rc-collapse":"1.7.6","rc-drawer":"0.4.11","rc-slider":"8.2.0","rc-swipeout":"2.0.4","rmc-notification":"1.0.0","rmc-calendar":"1.1.2","rmc-cascader":"5.0.0","rmc-date-picker":"6.0.5","rmc-dialog":"1.0.6","rmc-feedback":"1.0.3","rmc-input-number":"1.0.4","rmc-list-view":"0.11.3","rmc-nuka-carousel":"3.0.1","rmc-picker":"5.0.4","rmc-pull-to-refresh":"1.0.6","rmc-steps":"1.0.0","rmc-tabs":"1.2.22","rmc-tooltip":"1.0.1"}

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(586);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(32)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../css-loader/index.js!./index.css", function() {
			var newContent = require("!!../../../../css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(undefined);
// imports


// module
exports.push([module.i, ".am-carousel {\n  position: relative;\n}\n.am-carousel-wrap {\n  font-size: 18px;\n  color: #000;\n  background: none;\n  text-align: center;\n  zoom: 1;\n  width: 100%;\n}\n.am-carousel-wrap-dot {\n  display: inline-block;\n  zoom: 1;\n}\n.am-carousel-wrap-dot > span {\n  display: block;\n  width: 8px;\n  height: 8px;\n  margin: 0 3px;\n  border-radius: 50%;\n  background: #ccc;\n}\n.am-carousel-wrap-dot-active > span {\n  background: #888;\n}\n", ""]);

// exports


/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(26);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(22);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(23);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(24);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(25);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(588);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by luwenwei on 17/12/4.
 */
var ThumbnailComponent = function (_React$Component) {
    (0, _inherits3.default)(ThumbnailComponent, _React$Component);

    function ThumbnailComponent(props) {
        (0, _classCallCheck3.default)(this, ThumbnailComponent);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ThumbnailComponent.__proto__ || (0, _getPrototypeOf2.default)(ThumbnailComponent)).call(this, props));

        _this.state = {};
        _this.data = props.data;
        return _this;
    }

    (0, _createClass3.default)(ThumbnailComponent, [{
        key: "render",
        value: function render() {
            var data = this.data;
            return data ? _react2.default.createElement(
                "div",
                { className: _style2.default.thumbnail, style: this.props.style },
                _react2.default.createElement(
                    "div",
                    { className: _style2.default.like },
                    _react2.default.createElement("i", { className: "fa fa-star", style: { color: '#FB674C' } }),
                    _react2.default.createElement(
                        "span",
                        { style: { color: '#FFFFFF', 'marginLeft': '5px', fontSize: '10px' } },
                        data.like
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: _style2.default.thumbnail_img },
                    _react2.default.createElement("img", { src: this.data.img_url })
                ),
                _react2.default.createElement(
                    "div",
                    { className: _style2.default.thumbnail_description },
                    _react2.default.createElement(
                        "div",
                        { className: _style2.default.thumbnail_order_description },
                        data.order_description
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: _style2.default.price },
                        data.price
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: _style2.default.people_count },
                        "\u5EFA\u8BAE\u62FC\u5355\u4EBA\u6570: ",
                        data.people_count + '人'
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: _style2.default.bottom },
                        _react2.default.createElement(
                            "span",
                            { className: _style2.default.order_address },
                            this.data.order_address
                        ),
                        _react2.default.createElement(
                            "span",
                            { className: _style2.default.btn },
                            _react2.default.createElement(
                                "button",
                                { className: _style2.default.create_order },
                                "\u521B\u5EFA\u62FC\u5355"
                            )
                        )
                    )
                )
            ) : null;
        }
    }]);
    return ThumbnailComponent;
}(_react2.default.Component);

ThumbnailComponent.defaultProps = {};
exports.default = ThumbnailComponent;

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(589);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(32)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js?modules&localIdentName=[name]__[local]-[hash:base64:5]!../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../node_modules/postcss-loader/lib/index.js!./style.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js?modules&localIdentName=[name]__[local]-[hash:base64:5]!../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../node_modules/postcss-loader/lib/index.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(undefined);
// imports


// module
exports.push([module.i, ".style__thumbnail-F4lyf {\n  margin: 0 0 0.22222rem 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background: #ffffff;\n  position: relative; }\n\n.style__thumbnail-F4lyf .style__like-3UvX9 {\n  position: absolute;\n  left: 0;\n  top: 0.27778rem;\n  text-align: center;\n  min-width: 1.47222rem;\n  height: 0.5rem;\n  background: #4A4A4A;\n  border-top-right-radius: 0.27778rem;\n  border-bottom-right-radius: 0.27778rem;\n  font-size: 0.33333rem;\n  line-height: 0.5rem; }\n\n.style__thumbnail-F4lyf .style__thumbnail_img-2GBcn {\n  width: 4.16667rem;\n  height: 4.16667rem; }\n\n.style__thumbnail-F4lyf .style__thumbnail_img-2GBcn img {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0; }\n\n.style__thumbnail-F4lyf .style__thumbnail_description-1gSDL {\n  padding: 0.22222rem 0.36111rem 0 0.38889rem;\n  font-size: 0.38889rem;\n  width: 5.83333rem; }\n\n.style__thumbnail-F4lyf .style__thumbnail_description-1gSDL .style__title-82p7i {\n  line-height: 0.55556rem;\n  height: 0.55556rem;\n  color: #969696;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.style__thumbnail-F4lyf .style__thumbnail_description-1gSDL .style__thumbnail_order_description-1lUV2 {\n  color: #333333;\n  font-size: 0.38889rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  margin-bottom: 0.13889rem;\n  line-height: 0.55556rem; }\n\n.style__thumbnail-F4lyf .style__thumbnail_description-1gSDL .style__price-2EJLZ, .style__thumbnail-F4lyf .style__thumbnail_description-1gSDL .style__people_count-zy79q {\n  color: #FF5E04;\n  font-size: 0.38889rem; }\n\n.style__thumbnail-F4lyf .style__thumbnail_description-1gSDL .style__bottom-3O1q6 {\n  height: 0.88889rem;\n  margin-top: 0.75rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between; }\n\n.style__thumbnail-F4lyf .style__thumbnail_description-1gSDL .style__bottom-3O1q6 .style__order_address-2G8LM {\n  color: #999999;\n  font-size: 0.27778rem;\n  line-height: 0.88889rem; }\n\n.style__thumbnail-F4lyf .style__thumbnail_description-1gSDL .style__bottom-3O1q6 .style__btn-gEESg {\n  color: #999999;\n  font-size: 0.27778rem; }\n\n.style__thumbnail-F4lyf .style__thumbnail_description-1gSDL .style__bottom-3O1q6 .style__btn-gEESg button {\n  width: 2.27778rem;\n  height: 0.88889rem;\n  outline: none; }\n\n.style__thumbnail-F4lyf .style__thumbnail_description-1gSDL .style__bottom-3O1q6 .style__btn-gEESg button.style__create_order-2EJlz {\n  background: #FFB740;\n  color: #ffffff;\n  text-align: center;\n  font-size: 0.38889rem;\n  border-radius: 0.41667rem;\n  border: none;\n  line-height: 0.88889rem; }\n", ""]);

// exports
exports.locals = {
	"thumbnail": "style__thumbnail-F4lyf",
	"like": "style__like-3UvX9",
	"thumbnail_img": "style__thumbnail_img-2GBcn",
	"thumbnail_description": "style__thumbnail_description-1gSDL",
	"title": "style__title-82p7i",
	"thumbnail_order_description": "style__thumbnail_order_description-1lUV2",
	"price": "style__price-2EJLZ",
	"people_count": "style__people_count-zy79q",
	"bottom": "style__bottom-3O1q6",
	"order_address": "style__order_address-2G8LM",
	"btn": "style__btn-gEESg",
	"create_order": "style__create_order-2EJlz"
};

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(591);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(32)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js?modules&localIdentName=[name]__[local]-[hash:base64:5]!../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../node_modules/postcss-loader/lib/index.js!./style.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js?modules&localIdentName=[name]__[local]-[hash:base64:5]!../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../node_modules/postcss-loader/lib/index.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(undefined);
// imports


// module
exports.push([module.i, ".style__home-18hJ1 .style__carousel-3TsCH {\n  width: 100%;\n  height: 3.33333rem;\n  background: #cccccc;\n  margin-bottom: 0.22222rem; }\n\n.slider-frame {\n  height: 100% !important; }\n  .slider-frame .slider-list {\n    height: 100% !important; }\n    .slider-frame .slider-list .slider-slide {\n      height: 100% !important; }\n", ""]);

// exports
exports.locals = {
	"home": "style__home-18hJ1",
	"carousel": "style__carousel-3TsCH"
};

/***/ })

});