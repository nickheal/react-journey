'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var propTypes = require('prop-types');

var JourneyContext = React.createContext();

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function getScrimStyle(step) {
  var boundingRect = step.getBoundingClientRect();
  var left = boundingRect.left;
  var right = left + boundingRect.width;
  var top = boundingRect.top;
  var bottom = top + boundingRect.height;
  var _window = window,
      innerHeight = _window.innerHeight,
      innerWidth = _window.innerWidth;
  return {
    clipPath: "polygon(\n      0px 0px,\n      0px ".concat(innerHeight, "px,\n      ").concat(left, "px ").concat(innerHeight, "px,\n      ").concat(left, "px ").concat(top, "px,\n      ").concat(right, "px ").concat(top, "px,\n      ").concat(right, "px ").concat(bottom, "px,\n      ").concat(left, "px ").concat(bottom, "px,\n      ").concat(left, "px ").concat(innerHeight, "px,\n      ").concat(innerWidth, "px ").concat(innerHeight, "px,\n      ").concat(innerWidth, "px 0px\n    )"),
    backgroundColor: '#333',
    height: '100%',
    left: 0,
    opacity: 0.75,
    position: 'fixed',
    top: 0,
    transition: 'clip-path 500ms ease-in-out',
    width: '100%',
    zIndex: 1
  };
}

function getTooltipStyle(step) {
  var TOOLTIP_WIDTH = 300;
  var boundingRect = step.getBoundingClientRect();
  var itemHorizontalCenter = boundingRect.left + boundingRect.width / 2;
  var tooltipLeft = itemHorizontalCenter - TOOLTIP_WIDTH / 2;
  if (tooltipLeft < 0) tooltipLeft = 0;
  if (tooltipLeft + TOOLTIP_WIDTH > window.innerWidth) tooltipLeft = window.innerWidth - TOOLTIP_WIDTH;
  return {
    transform: "translate(".concat(tooltipLeft, "px, ").concat(boundingRect.bottom, "px)"),
    background: '#fff',
    borderRadius: 4,
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    transition: 'transform 500ms ease-in-out',
    width: 300,
    zIndex: 3
  };
}

var Journey = function Journey(_ref) {
  var _steps$currentStep, _steps$currentStep2, _steps$currentStep3;

  var Component = _ref.Component,
      steps = _ref.steps;

  var _useContext = React.useContext(JourneyContext),
      stop = _useContext.stop;

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentStep = _useState2[0],
      setCurrentStep = _useState2[1];

  function onClickNext() {
    if (currentStep >= steps.length - 1) return stop();
    setCurrentStep(currentStep + 1);
  }

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    style: getScrimStyle((_steps$currentStep = steps[currentStep]) === null || _steps$currentStep === void 0 ? void 0 : _steps$currentStep.el)
  }), /*#__PURE__*/React__default.createElement("div", {
    style: getTooltipStyle((_steps$currentStep2 = steps[currentStep]) === null || _steps$currentStep2 === void 0 ? void 0 : _steps$currentStep2.el)
  }, /*#__PURE__*/React__default.createElement(Component, {
    currentStep: currentStep,
    message: (_steps$currentStep3 = steps[currentStep]) === null || _steps$currentStep3 === void 0 ? void 0 : _steps$currentStep3.message,
    onClickNext: onClickNext,
    totalSteps: steps.length
  })));
};

var JourneyProvider = function JourneyProvider(_ref) {
  var children = _ref.children,
      Component = _ref.Component;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      steps = _useState4[0],
      setSteps = _useState4[1];

  var _useState5 = React.useState({
    register: function register(el, message) {
      console.log(el, message, steps);
      setSteps(function (prevSteps) {
        return [].concat(_toConsumableArray(prevSteps), [{
          el: el,
          message: message
        }]);
      });
    },
    run: function run() {
      setActive(true);
    },
    stop: function stop() {
      setActive(false);
    },
    unRegister: function unRegister(el) {
      setSteps(function (prevSteps) {
        return prevSteps.filter(function (step) {
          return step.el !== el;
        });
      });
    }
  }),
      _useState6 = _slicedToArray(_useState5, 1),
      value = _useState6[0];

  return /*#__PURE__*/React__default.createElement(JourneyContext.Provider, {
    value: value
  }, children, active && (steps === null || steps === void 0 ? void 0 : steps.length) > 0 && /*#__PURE__*/React__default.createElement(Journey, {
    Component: Component,
    steps: steps
  }));
};

var TourStep = function TourStep(_ref) {
  var children = _ref.children,
      message = _ref.message;

  var _useContext = React.useContext(JourneyContext),
      register = _useContext.register,
      unRegister = _useContext.unRegister;

  var el = React.useRef(null);
  React.useEffect(function () {
    var current = el.current;
    register(current, message);
    return function () {
      return unRegister(current);
    };
  }, [message, register, unRegister]);
  return /*#__PURE__*/React__default.createElement("div", {
    ref: el
  }, children);
};

TourStep.propTypes = {
  children: propTypes.node.isRequired,
  message: propTypes.string.isRequired
};

var JourneyComponent = function JourneyComponent(_ref) {
  var currentStep = _ref.currentStep,
      message = _ref.message,
      onClickNext = _ref.onClickNext,
      totalSteps = _ref.totalSteps;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("p", null, message), /*#__PURE__*/React__default.createElement("button", {
    onClick: onClickNext
  }, currentStep === totalSteps - 1 ? 'Done' : 'Next'));
};

var useJourney = function useJourney() {
  return React.useContext(JourneyContext);
};

exports.JourneyComponent = JourneyComponent;
exports.JourneyProvider = JourneyProvider;
exports.JourneyStep = TourStep;
exports.useJourney = useJourney;
