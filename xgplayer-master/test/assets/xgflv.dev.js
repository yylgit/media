window["FlvPlayer"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/concat-typed-array/lib/concat.js":
/*!*******************************************************!*\
  !*** ./node_modules/concat-typed-array/lib/concat.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (ResultConstructor) {
  var totalLength = 0;

  for (var _len = arguments.length, arrays = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arrays[_key - 1] = arguments[_key];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arrays[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var arr = _step.value;

      totalLength += arr.length;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var result = new ResultConstructor(totalLength);
  var offset = 0;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = arrays[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _arr = _step2.value;

      result.set(_arr, offset);
      offset += _arr.length;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return result;
};

/***/ }),

/***/ "./node_modules/concat-typed-array/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/concat-typed-array/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _concat = __webpack_require__(/*! ./concat */ "./node_modules/concat-typed-array/lib/concat.js");

var _concat2 = _interopRequireDefault(_concat);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = _concat2.default;

/***/ }),

/***/ "./node_modules/d/index.js":
/*!*********************************!*\
  !*** ./node_modules/d/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! type/value/is */ "./node_modules/type/value/is.js"),
    isPlainFunction = __webpack_require__(/*! type/plain-function/is */ "./node_modules/type/plain-function/is.js"),
    assign = __webpack_require__(/*! es5-ext/object/assign */ "./node_modules/es5-ext/object/assign/index.js"),
    normalizeOpts = __webpack_require__(/*! es5-ext/object/normalize-options */ "./node_modules/es5-ext/object/normalize-options.js"),
    contains = __webpack_require__(/*! es5-ext/string/#/contains */ "./node_modules/es5-ext/string/#/contains/index.js");

var d = module.exports = function (dscr, value /*, options*/) {
	var c, e, w, options, desc;
	if (arguments.length < 2 || typeof dscr !== "string") {
		options = value;
		value = dscr;
		dscr = null;
	} else {
		options = arguments[2];
	}
	if (isValue(dscr)) {
		c = contains.call(dscr, "c");
		e = contains.call(dscr, "e");
		w = contains.call(dscr, "w");
	} else {
		c = w = true;
		e = false;
	}

	desc = { value: value, configurable: c, enumerable: e, writable: w };
	return !options ? desc : assign(normalizeOpts(options), desc);
};

d.gs = function (dscr, get, set /*, options*/) {
	var c, e, options, desc;
	if (typeof dscr !== "string") {
		options = set;
		set = get;
		get = dscr;
		dscr = null;
	} else {
		options = arguments[3];
	}
	if (!isValue(get)) {
		get = undefined;
	} else if (!isPlainFunction(get)) {
		options = get;
		get = set = undefined;
	} else if (!isValue(set)) {
		set = undefined;
	} else if (!isPlainFunction(set)) {
		options = set;
		set = undefined;
	}
	if (isValue(dscr)) {
		c = contains.call(dscr, "c");
		e = contains.call(dscr, "e");
	} else {
		c = true;
		e = false;
	}

	desc = { get: get, set: set, configurable: c, enumerable: e };
	return !options ? desc : assign(normalizeOpts(options), desc);
};

/***/ }),

/***/ "./node_modules/es5-ext/function/noop.js":
/*!***********************************************!*\
  !*** ./node_modules/es5-ext/function/noop.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// eslint-disable-next-line no-empty-function

module.exports = function () {};

/***/ }),

/***/ "./node_modules/es5-ext/object/assign/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/object/assign/is-implemented.js")() ? Object.assign : __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/object/assign/shim.js");

/***/ }),

/***/ "./node_modules/es5-ext/object/assign/is-implemented.js":
/*!**************************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/is-implemented.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var assign = Object.assign,
	    obj;
	if (typeof assign !== "function") return false;
	obj = { foo: "raz" };
	assign(obj, { bar: "dwa" }, { trzy: "trzy" });
	return obj.foo + obj.bar + obj.trzy === "razdwatrzy";
};

/***/ }),

/***/ "./node_modules/es5-ext/object/assign/shim.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/shim.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(/*! ../keys */ "./node_modules/es5-ext/object/keys/index.js"),
    value = __webpack_require__(/*! ../valid-value */ "./node_modules/es5-ext/object/valid-value.js"),
    max = Math.max;

module.exports = function (dest, src /*, …srcn*/) {
	var error,
	    i,
	    length = max(arguments.length, 2),
	    assign;
	dest = Object(value(dest));
	assign = function assign(key) {
		try {
			dest[key] = src[key];
		} catch (e) {
			if (!error) error = e;
		}
	};
	for (i = 1; i < length; ++i) {
		src = arguments[i];
		keys(src).forEach(assign);
	}
	if (error !== undefined) throw error;
	return dest;
};

/***/ }),

/***/ "./node_modules/es5-ext/object/is-value.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/object/is-value.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _undefined = __webpack_require__(/*! ../function/noop */ "./node_modules/es5-ext/function/noop.js")(); // Support ES3 engines

module.exports = function (val) {
  return val !== _undefined && val !== null;
};

/***/ }),

/***/ "./node_modules/es5-ext/object/keys/index.js":
/*!***************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/object/keys/is-implemented.js")() ? Object.keys : __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/object/keys/shim.js");

/***/ }),

/***/ "./node_modules/es5-ext/object/keys/is-implemented.js":
/*!************************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/is-implemented.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	try {
		Object.keys("primitive");
		return true;
	} catch (e) {
		return false;
	}
};

/***/ }),

/***/ "./node_modules/es5-ext/object/keys/shim.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/shim.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ../is-value */ "./node_modules/es5-ext/object/is-value.js");

var keys = Object.keys;

module.exports = function (object) {
  return keys(isValue(object) ? Object(object) : object);
};

/***/ }),

/***/ "./node_modules/es5-ext/object/normalize-options.js":
/*!**********************************************************!*\
  !*** ./node_modules/es5-ext/object/normalize-options.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ./is-value */ "./node_modules/es5-ext/object/is-value.js");

var forEach = Array.prototype.forEach,
    create = Object.create;

var process = function process(src, obj) {
	var key;
	for (key in src) {
		obj[key] = src[key];
	}
};

// eslint-disable-next-line no-unused-vars
module.exports = function (opts1 /*, …options*/) {
	var result = create(null);
	forEach.call(arguments, function (options) {
		if (!isValue(options)) return;
		process(Object(options), result);
	});
	return result;
};

/***/ }),

/***/ "./node_modules/es5-ext/object/valid-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-callable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (fn) {
	if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
	return fn;
};

/***/ }),

/***/ "./node_modules/es5-ext/object/valid-value.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-value.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ./is-value */ "./node_modules/es5-ext/object/is-value.js");

module.exports = function (value) {
	if (!isValue(value)) throw new TypeError("Cannot use null or undefined");
	return value;
};

/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/string/#/contains/is-implemented.js")() ? String.prototype.contains : __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/string/#/contains/shim.js");

/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/is-implemented.js":
/*!******************************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/is-implemented.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var str = "razdwatrzy";

module.exports = function () {
	if (typeof str.contains !== "function") return false;
	return str.contains("dwa") === true && str.contains("foo") === false;
};

/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/shim.js":
/*!********************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/shim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var indexOf = String.prototype.indexOf;

module.exports = function (searchString /*, position*/) {
	return indexOf.call(this, searchString, arguments[1]) > -1;
};

/***/ }),

/***/ "./node_modules/event-emitter/index.js":
/*!*********************************************!*\
  !*** ./node_modules/event-emitter/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var d = __webpack_require__(/*! d */ "./node_modules/d/index.js"),
    callable = __webpack_require__(/*! es5-ext/object/valid-callable */ "./node_modules/es5-ext/object/valid-callable.js"),
    apply = Function.prototype.apply,
    call = Function.prototype.call,
    create = Object.create,
    defineProperty = Object.defineProperty,
    defineProperties = Object.defineProperties,
    hasOwnProperty = Object.prototype.hasOwnProperty,
    descriptor = { configurable: true, enumerable: false, writable: true },
    on,
    _once2,
    off,
    emit,
    methods,
    descriptors,
    base;

on = function on(type, listener) {
	var data;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) {
		data = descriptor.value = create(null);
		defineProperty(this, '__ee__', descriptor);
		descriptor.value = null;
	} else {
		data = this.__ee__;
	}
	if (!data[type]) data[type] = listener;else if (_typeof(data[type]) === 'object') data[type].push(listener);else data[type] = [data[type], listener];

	return this;
};

_once2 = function once(type, listener) {
	var _once, self;

	callable(listener);
	self = this;
	on.call(this, type, _once = function once() {
		off.call(self, type, _once);
		apply.call(listener, this, arguments);
	});

	_once.__eeOnceListener__ = listener;
	return this;
};

off = function off(type, listener) {
	var data, listeners, candidate, i;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) return this;
	data = this.__ee__;
	if (!data[type]) return this;
	listeners = data[type];

	if ((typeof listeners === 'undefined' ? 'undefined' : _typeof(listeners)) === 'object') {
		for (i = 0; candidate = listeners[i]; ++i) {
			if (candidate === listener || candidate.__eeOnceListener__ === listener) {
				if (listeners.length === 2) data[type] = listeners[i ? 0 : 1];else listeners.splice(i, 1);
			}
		}
	} else {
		if (listeners === listener || listeners.__eeOnceListener__ === listener) {
			delete data[type];
		}
	}

	return this;
};

emit = function emit(type) {
	var i, l, listener, listeners, args;

	if (!hasOwnProperty.call(this, '__ee__')) return;
	listeners = this.__ee__[type];
	if (!listeners) return;

	if ((typeof listeners === 'undefined' ? 'undefined' : _typeof(listeners)) === 'object') {
		l = arguments.length;
		args = new Array(l - 1);
		for (i = 1; i < l; ++i) {
			args[i - 1] = arguments[i];
		}listeners = listeners.slice();
		for (i = 0; listener = listeners[i]; ++i) {
			apply.call(listener, this, args);
		}
	} else {
		switch (arguments.length) {
			case 1:
				call.call(listeners, this);
				break;
			case 2:
				call.call(listeners, this, arguments[1]);
				break;
			case 3:
				call.call(listeners, this, arguments[1], arguments[2]);
				break;
			default:
				l = arguments.length;
				args = new Array(l - 1);
				for (i = 1; i < l; ++i) {
					args[i - 1] = arguments[i];
				}
				apply.call(listeners, this, args);
		}
	}
};

methods = {
	on: on,
	once: _once2,
	off: off,
	emit: emit
};

descriptors = {
	on: d(on),
	once: d(_once2),
	off: d(off),
	emit: d(emit)
};

base = defineProperties({}, descriptors);

module.exports = exports = function exports(o) {
	return o == null ? create(base) : defineProperties(Object(o), descriptors);
};
exports.methods = methods;

/***/ }),

/***/ "./node_modules/type/function/is.js":
/*!******************************************!*\
  !*** ./node_modules/type/function/is.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototype = __webpack_require__(/*! ../prototype/is */ "./node_modules/type/prototype/is.js");

module.exports = function (value) {
	if (typeof value !== "function") return false;

	if (!hasOwnProperty.call(value, "length")) return false;

	try {
		if (typeof value.length !== "number") return false;
		if (typeof value.call !== "function") return false;
		if (typeof value.apply !== "function") return false;
	} catch (error) {
		return false;
	}

	return !isPrototype(value);
};

/***/ }),

/***/ "./node_modules/type/object/is.js":
/*!****************************************!*\
  !*** ./node_modules/type/object/is.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isValue = __webpack_require__(/*! ../value/is */ "./node_modules/type/value/is.js");

// prettier-ignore
var possibleTypes = { "object": true, "function": true, "undefined": true /* document.all */ };

module.exports = function (value) {
	if (!isValue(value)) return false;
	return hasOwnProperty.call(possibleTypes, typeof value === "undefined" ? "undefined" : _typeof(value));
};

/***/ }),

/***/ "./node_modules/type/plain-function/is.js":
/*!************************************************!*\
  !*** ./node_modules/type/plain-function/is.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(/*! ../function/is */ "./node_modules/type/function/is.js");

var classRe = /^\s*class[\s{/}]/,
    functionToString = Function.prototype.toString;

module.exports = function (value) {
	if (!isFunction(value)) return false;
	if (classRe.test(functionToString.call(value))) return false;
	return true;
};

/***/ }),

/***/ "./node_modules/type/prototype/is.js":
/*!*******************************************!*\
  !*** ./node_modules/type/prototype/is.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! ../object/is */ "./node_modules/type/object/is.js");

module.exports = function (value) {
	if (!isObject(value)) return false;
	try {
		if (!value.constructor) return false;
		return value.constructor.prototype === value;
	} catch (error) {
		return false;
	}
};

/***/ }),

/***/ "./node_modules/type/value/is.js":
/*!***************************************!*\
  !*** ./node_modules/type/value/is.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ES3 safe

var _undefined = void 0;

module.exports = function (value) {
  return value !== _undefined && value !== null;
};

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, repository, keywords, author, license, devDependencies, peerDependency, dependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"xgplayer-flv\",\"version\":\"1.1.5\",\"description\":\"flv demuxer for xgplayer\",\"main\":\"./dist/index.js\",\"scripts\":{\"test\":\"echo \\\"Error: no test specified\\\" && exit 1\",\"prepare\":\"npm run build\",\"dev\":\"webpack --progress --display-chunks --watch --config ./webpack.config.dev.js\",\"yyl\":\"webpack --progress --display-chunks --watch --config ./webpack.config.yyl.js\",\"build\":\"webpack --progress --display-chunks -p\",\"watch\":\"webpack --progress --display-chunks -p --watch\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/bytedance/xgplayer.git\"},\"keywords\":[],\"author\":\"leo\",\"license\":\"MIT\",\"devDependencies\":{\"babel\":\"^6.23.0\",\"babel-env\":\"^2.4.1\",\"babel-eslint\":\"^8.2.2\",\"babel-loader\":\"^7.1.2\",\"babel-plugin-transform-class-properties\":\"^6.24.1\",\"babel-plugin-transform-decorators\":\"^6.24.1\",\"babel-plugin-transform-react-constant-elements\":\"^6.23.0\",\"babel-plugin-transform-react-inline-elements\":\"^6.22.0\",\"babel-preset-es2015\":\"^6.24.1\",\"clean-webpack-plugin\":\"^0.1.17\",\"css-loader\":\"^0.28.10\",\"extract-text-webpack-plugin\":\"^3.0.2\",\"html-loader\":\"^0.5.5\",\"html-webpack-plugin\":\"^2.30.1\",\"style-loader\":\"^0.20.2\",\"webpack\":\"^4.12.0\",\"webpack-cli\":\"^3.1.2\",\"webpack-dev-server\":\"^2.11.1\"},\"peerDependency\":{\"xgplayer\":\"^0.1.0\"},\"dependencies\":{\"concat-typed-array\":\"^1.0.2\",\"event-emitter\":\"^0.3.5\"}}");

/***/ }),

/***/ "./src/Flv.js":
/*!********************!*\
  !*** ./src/Flv.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author fuyuhao
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _MainParser = __webpack_require__(/*! ./parse/MainParser */ "./src/parse/MainParser.js");

var _MainParser2 = _interopRequireDefault(_MainParser);

var _MSE = __webpack_require__(/*! ./parse/MSE */ "./src/parse/MSE.js");

var _MSE2 = _interopRequireDefault(_MSE);

var _VodTask = __webpack_require__(/*! ./tasks/VodTask */ "./src/tasks/VodTask.js");

var _VodTask2 = _interopRequireDefault(_VodTask);

var _config = __webpack_require__(/*! ./constants/config */ "./src/constants/config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-unused-vars */
var Flv = function () {
  function Flv(options, player) {
    _classCallCheck(this, Flv);

    this._player = player;
    this._options = Object.assign({}, (0, _config2.default)(), options);
    // 真正的flv播放器
    this.flvPlayer = new _MainParser2.default(this._options, player);
    this.mse = new _MSE2.default(player.video);
    this.isSeeking = false;
    this.isDataLoading = false;
    this.tempCurrentTime = 0;
    this.tempFlvPlayer = null;
    this.isChangingSrc = false;
    this.initPlayerEvents(player, this._options);
    this.initFlvPlayerEvents(this.flvPlayer, this.mse);
    this.initMseEvents(this.mse, this.flvPlayer);
  }

  _createClass(Flv, [{
    key: 'load',
    value: function load() {
      this.flvPlayer.startLoadData();
    }
  }, {
    key: 'initPlayerEvents',
    value: function initPlayerEvents(player, options) {
      var _this = this;

      var mse = this.mse;

      player.mse = mse;
      this.handleSeeking = function () {
        if (_this.isChangingSrc) {
          _this.isChangingSrc = false;
          return;
        }
        var buffered = player.buffered,
            currentTime = player.currentTime;

        var isBuffered = false;
        if (buffered.length) {
          for (var i = 0, len = buffered.length; i < len; i++) {
            if (currentTime > buffered.start(i) && currentTime < buffered.end(i)) {
              isBuffered = true;
              break;
            }
          }
        }
        if (isBuffered) {
          return;
        }
        _VodTask2.default.clear();
        if (!_this.isSeekable) {
          _this._player.currentTime = _this.tempCurrentTime;
          return;
        }
        _this.flvPlayer.seek(player.currentTime);
        _this.isSeeking = true;
      };
      if (!options.isLive) {
        player.on('seeking', function () {
          _this.handleSeeking();
        });
      }
      this.handleTimeUpdate = function () {
        _this.tempCurrentTime = player.currentTime;
        if (!_this.isSeeking && _this.flvPlayer.isMediaInfoReady && !_this.tempFlvPlayer) {
          _this.progressChecker(player);
        }
        if (_this._options.isLive) {
          return;
        }
        _this.isEnded(player, _this.flvPlayer);
      };
      player.on('timeupdate', function () {
        _this.handleTimeUpdate();
      });
      player._replay = function () {
        player.mse.destroy();
        _VodTask2.default.clear();
        var _mse = new _MSE2.default(player.video);
        _this.flvPlayer.replay();

        mse.on('sourceopen', function () {
          _this.flvPlayer.isSourceOpen = true;
          mse.appendBuffer(_this.flvPlayer.ftyp_moov.buffer);
          setTimeout(function () {
            player.play();
          }, 0);
          mse.on('updateend', function () {
            var _flvPlayer = _this.flvPlayer,
                pendingFragments = _flvPlayer.pendingFragments,
                hasPendingFragments = _flvPlayer.hasPendingFragments;

            _this.isSeeking = false;
            if (hasPendingFragments) {
              var fragment = pendingFragments.shift();
              if (!mse.appendBuffer(fragment.data)) {
                pendingFragments.unshift(fragment);
              } else {
                player.emit('cacheupdate', player);
              }
            }
          });
        });
        mse.on('error', function (e) {
          player.emit('error', e);
        });

        player.mse = mse;
        player.video.src = _this.mse.url;
        return true;
      };

      player.switchURL = function (url) {
        _this._options.url = url;
        // this.flvPlayer.unbindEvents()
        if (!player.config.isLive) {
          _VodTask2.default.clear();
          var tempFlvPlayer = _this.tempFlvPlayer = new _MainParser2.default(_this._options, player);

          tempFlvPlayer.isSourceOpen = true;
          tempFlvPlayer.isTempPlayer = true;
          _this.initFlvPlayerEvents(tempFlvPlayer, mse);
          tempFlvPlayer.handleMediaFragment = function () {
            _this.isSeeking = false;
            _this.unbindFlvPlayerEvents(_this.flvPlayer);
            _this.flvPlayer.destroy();
            _this.flvPlayer = tempFlvPlayer;
            _this.tempFlvPlayer = null;

            mse.appendBuffer(tempFlvPlayer.ftyp_moov);
            tempFlvPlayer.handleMediaFragment = function (fragment) {
              return mse.appendBuffer(fragment.data);
            };
            return false;
          };
          tempFlvPlayer.startLoadData();
        }
      };
    }
  }, {
    key: 'unbindFlvPlayerEvents',
    value: function unbindFlvPlayerEvents(flvPlayer) {
      flvPlayer.handleSeekEnd = function () {
        return null;
      };
      flvPlayer.handleError = function () {
        return null;
      };
      flvPlayer.handleMediaFragment = function () {
        return null;
      };
    }
  }, {
    key: 'initFlvPlayerEvents',
    value: function initFlvPlayerEvents(flvPlayer, mse) {
      var _this2 = this;

      var handleFtypMoov = function handleFtypMoov(ftypMoov) {
        if (flvPlayer.isSourceOpen && !_this2.tempFlvPlayer) {
          mse.appendBuffer(ftypMoov.buffer);
        } else if (!_this2.isChangingSrc && !_this2._options.isLive) {
          _this2.isSeeking = true;
          flvPlayer.seek(_this2._player.currentTime);
        }
      };
      flvPlayer.once('ready', handleFtypMoov);
      flvPlayer.handleSeekEnd = function () {
        _this2.isSeeking = false;
      };
      flvPlayer.handleError = function (e) {
        this._player.emit('error', e);
      };
      if (!this.tempFlvPlayer) {
        flvPlayer.handleMediaFragment = function (fragment) {
          return _this2.tempFlvPlayer ? false : mse.appendBuffer(fragment.data);
        };
      }
    }
  }, {
    key: 'initMseEvents',
    value: function initMseEvents(mse) {
      var _this3 = this;

      mse.on('error', function (e) {
        _this3._player.emit('error', e);
      });
      var onSourceOpen = function onSourceOpen() {
        _this3.flvPlayer.isSourceOpen = true;
        if (_this3.flvPlayer.ftyp_moov !== null) {
          mse.appendBuffer(_this3.flvPlayer.ftyp_moov.buffer);
        }

        mse.on('updateend', function () {
          var _flvPlayer2 = _this3.flvPlayer,
              pendingFragments = _flvPlayer2.pendingFragments,
              hasPendingFragments = _flvPlayer2.hasPendingFragments;


          if (hasPendingFragments) {
            var fragment = pendingFragments.shift();
            if (!mse.appendBuffer(fragment.data)) {
              pendingFragments.unshift(fragment);
            } else {
              _this3._player.emit('cacheupdate', _this3._player);
            }
          }
        });
      };
      mse.on('sourceopen', onSourceOpen);
    }
  }, {
    key: 'loadData',
    value: function loadData(currentTime) {
      return this.flvPlayer.loadSegments(true, currentTime, this._options.preloadTime);
    }
  }, {
    key: 'progressChecker',
    value: function progressChecker(player) {
      var _this4 = this;

      var _options = this._options,
          minCachedTime = _options.minCachedTime,
          preloadTime = _options.preloadTime;

      var range = player.getBufferedRange();
      if (this.flvPlayer.videoDuration - range[1] * this.flvPlayer.videoTimeScale < 0.1 * this.flvPlayer.videoTimeScale) {
        return;
      }
      if (range[1] - player.currentTime < minCachedTime && !this.isDataLoading) {
        this.isDataLoading = true;
        this.flvPlayer.loadSegments(true, player.currentTime, preloadTime).then(function () {
          _this4.isDataLoading = false;
        });
      }
    }
  }, {
    key: 'clearPlayerCache',
    value: function clearPlayerCache() {
      var range = this._player.getBufferedRange();
      if (range.length === 2) {
        // this.mse.removeBuffer(range[0], range[1])
      }
    }
  }, {
    key: 'isEnded',
    value: function isEnded(player, flv) {
      if (flv.videoDuration - player.currentTime * flv.videoTimeScale < 2 * flv.videoTimeScale) {
        var range = player.getBufferedRange();
        if (player.currentTime - range[1] < 0.1) {
          this.mse.endOfStream();
        }
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _VodTask2.default.clear();
      this._options = {};
      this.mse = null;
      this.isSeeking = false;
      this.isDataLoading = false;
      this.tempCurrentTime = 0;
      this.tempFlvPlayer = null;
      this.isChangingSrc = false;
      this.handleTimeUpdate = function () {};
      this.handleSeeking = function () {};
      this.flvPlayer.destroy();
      this._player.pause();
    }
  }, {
    key: 'isSeekable',
    get: function get() {
      return this.flvPlayer.isSeekable;
    }
  }]);

  return Flv;
}();

exports.default = Flv;

/***/ }),

/***/ "./src/constants/config.js":
/*!*********************************!*\
  !*** ./src/constants/config.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getDefaultConf = function getDefaultConf() {
  return {
    preloadTime: 30,
    minCachedTime: 5,
    autoCleanSourceBuffer: true,
    autoCleanMaxBackTime: 30,
    isLive: false,
    cors: true
  };
};

exports.default = getDefaultConf;

/***/ }),

/***/ "./src/constants/metaFields.js":
/*!*************************************!*\
  !*** ./src/constants/metaFields.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var fields = [{
  name: 'duration',
  type: Boolean,
  parser: function parser(target, origin) {
    target.mediaInfo.duration = origin.duration;
  }
}, {
  name: 'hasAudio',
  type: Boolean,
  parser: function parser(target, origin) {
    target.mediaInfo.hasAudio = origin.hasAudio;
  }
}, {
  name: 'hasVideo',
  type: Boolean,
  parser: function parser(target, origin) {
    target.mediaInfo.hasVideo = origin.hasVideo;
  }
}, {
  name: 'audiodatarate',
  type: Number,
  parser: function parser(target, origin) {
    target.mediaInfo.audioDataRate = origin.audiodatarate;
  }
}, {
  name: 'videodatarate',
  type: Number,
  parser: function parser(target, origin) {
    target.mediaInfo.videoDataRate = origin.videodatarate;
  }
}, {
  name: 'width',
  type: Number,
  parser: function parser(target, origin) {
    target.mediaInfo.width = origin.width;
  }
}, {
  name: 'height',
  type: Number,
  parser: function parser(target, origin) {
    target.mediaInfo.height = origin.height;
  }
}, {
  name: 'duration',
  type: Number,
  parser: function parser(target, origin) {
    if (!target.state.duration) {
      var duration = Math.floor(origin.duration * target.state.timeScale);
      target.state.duration = target.mediaInfo.duration = duration;
    }
  },
  onTypeErr: function onTypeErr(target) {
    target.mediaInfo.duration = 0;
  }
}, {
  name: 'framerate',
  type: Number,
  parser: function parser(target, origin) {
    var fpsNum = Math.floor(origin.framerate * 1000);
    if (fpsNum > 0) {
      var fps = fpsNum / 1000;
      var referFrameRate = target.referFrameRate,
          mediaInfo = target.mediaInfo;

      referFrameRate.fixed = true;
      referFrameRate.fps = fps;
      referFrameRate.fpsNum = fpsNum;
      referFrameRate.fpsDen = 1000;
      mediaInfo.fps = fps;
    }
  }
}, {
  name: 'keyframes',
  type: Object,
  parser: function parser(target, origin) {
    var keyframes = origin.keyframes;

    target.mediaInfo.hasKeyframes = !!keyframes;
    if (keyframes) {
      target.mediaInfo.keyframes = this._parseKeyframes(keyframes);
    }
    origin.keyframes = null;
  },
  onTypeErr: function onTypeErr(target) {
    target.mediaInfo.hasKeyframes = false;
  }
}];
exports.default = fields;

/***/ }),

/***/ "./src/constants/types.js":
/*!********************************!*\
  !*** ./src/constants/types.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MetaTypes = exports.MetaTypes = {
  NUMBER: 0,
  BOOLEAN: 1,
  STRING: 2,
  OBJECT: 3,
  MIX_ARRAY: 8,
  OBJECT_END: 9,
  STRICT_ARRAY: 10,
  DATE: 11,
  LONE_STRING: 12
};

var EventTypes = exports.EventTypes = {
  DATA_READY: 'data_ready',
  META_DATA_READY: 'meta_data_ready',
  TRACK_META_READY: 'track_meta_ready',
  MEDIA_INFO_READY: 'media_info_ready',
  META_END_POSITION: 'meta_end_position',
  ERROR: 'error'
};

var soundRateTypes = exports.soundRateTypes = [5500, 11000, 22000, 44000];

var AudioObjectTypes = exports.AudioObjectTypes = {
  0: 'Null',
  1: 'AAC Main',
  2: 'AAC LC',
  3: 'AAC SSR(Scalable Sample Rate)',
  4: 'AAC LTP(Long Term Prediction)',
  5: 'HE-AAC / SBR(Spectral Band Replication)',
  6: 'AAC Scalable'
};

var samplingFrequencyTypes = exports.samplingFrequencyTypes = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000];

var browserTypes = exports.browserTypes = {
  IE: 'ie',
  FIRE_FOX: 'firefox',
  CHROME: 'chrome',
  OPERA: 'opera',
  SAFARI: 'safari'
};

var mp3Versions = exports.mp3Versions = {
  V25: 0,
  RESERVED: 1,
  V20: 2,
  V10: 3
};

var audioSampleRate = exports.audioSampleRate = {
  V10: [44100, 48000, 32000, 0],
  V20: [22050, 24000, 16000, 0],
  V25: [11025, 12000, 8000, 0]
};

var mp3BitRate = exports.mp3BitRate = {
  Layer1: [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1],
  Layer2: [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, -1],
  Layer3: [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1]
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _xgplayer = __webpack_require__(/*! xgplayer */ "xgplayer");

var _xgplayer2 = _interopRequireDefault(_xgplayer);

var _VodTask = __webpack_require__(/*! ./tasks/VodTask */ "./src/tasks/VodTask.js");

var _VodTask2 = _interopRequireDefault(_VodTask);

var _Flv = __webpack_require__(/*! ./Flv */ "./src/Flv.js");

var _Flv2 = _interopRequireDefault(_Flv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlvPlayer = function (_Player) {
  _inherits(FlvPlayer, _Player);

  function FlvPlayer(options) {
    _classCallCheck(this, FlvPlayer);

    var _this = _possibleConstructorReturn(this, (FlvPlayer.__proto__ || Object.getPrototypeOf(FlvPlayer)).call(this, options));

    _this._options = options;
    _this.__flv__ = null;
    _this.init(options);

    Object.defineProperty(_this, 'src', {
      set: function set(val) {
        if (typeof val === 'string' && val.startsWith('blob:')) {
          return;
        }
        _this._options.url = val;
        _this.__flv__.destroy();
        _this.__flv__ = new _Flv2.default(_this._options, _this);
        _this.__flv__.load();
        // flv 也是video组件播放 地址是mse.url
        _this.video.src = _this.__flv__.mse.url;
        _this.currentTime = 0;
        setTimeout(function () {
          _this.play();
        }, 0);
      },
      get: function get() {
        return _this._options.url;
      },
      configurable: true
    });
    if (options.autoplay) {
      _this.start();
    }
    return _this;
  }

  _createClass(FlvPlayer, [{
    key: 'init',
    value: function init(options) {
      var player = this;
      var isLive = options.isLive;

      player.__flv__ = new _Flv2.default(options, player);
      player.once('complete', function () {
        // start方法的下一个事件循环触发complete
        player.createInstance(player.__flv__);
      });
      player.on('pause', function () {
        !isLive && _VodTask2.default.clear();
      });
      this.once('destroy', function () {
        _VodTask2.default.clear();
        player.__flv__.destroy();
        player.__flv__.mse = null;
        player.video.src = '';
        player.__flv__ = null;
      });
    }
  }, {
    key: 'createInstance',
    value: function createInstance(flv) {
      var player = this;
      if (this._options.isLive) {
        _xgplayer2.default.util.addClass(player.root, 'xgplayer-is-live');
        var live = _xgplayer2.default.util.createDom('xg-live', '正在直播', {}, 'xgplayer-live');
        player.controls.appendChild(live);
      }
      flv.load();
    }
  }, {
    key: 'start',
    value: function start() {
      if (!this.inited) {
        return;
      }
      var flvPlayer = this.__flv__;
      _get(FlvPlayer.prototype.__proto__ || Object.getPrototypeOf(FlvPlayer.prototype), 'start', this).call(this, flvPlayer.mse.url);
      this.src = flvPlayer.mse.url;
      return true;
    }
  }, {
    key: 'inited',
    get: function get() {
      return this.__flv__ !== undefined;
    }
  }]);

  return FlvPlayer;
}(_xgplayer2.default);

module.exports = FlvPlayer;

/***/ }),

/***/ "./src/models/MediaInfo.js":
/*!*********************************!*\
  !*** ./src/models/MediaInfo.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediaInfo = function () {
    function MediaInfo(data) {
        var _this = this;

        _classCallCheck(this, MediaInfo);

        var _default = {
            mimeType: null,
            codec: '',
            duration: null,
            hasAudio: false,
            hasVideo: false,
            audioCodec: null,
            videoCodec: null,

            videoDataRate: null,
            audioDataRate: null,
            audioSampleRate: null,
            audioChannelCount: null,
            audioConfig: null,

            width: null,
            height: null,
            fps: null,
            profile: null,
            level: null,
            chromaFormat: null,

            pixelRatio: [],

            _metaData: null,
            segments: [],
            hasKeyframes: null,
            keyframes: []
        };

        var initData = Object.assign({}, _default, data);
        Object.entries(initData).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                k = _ref2[0],
                v = _ref2[1];

            _this[k] = v;
        });
    }

    _createClass(MediaInfo, [{
        key: 'isComplete',
        get: function get() {
            var mimeType = this.mimeType,
                duration = this.duration,
                hasKeyframes = this.hasKeyframes;

            return mimeType !== null && duration !== null && hasKeyframes !== null && this.isVideoInfoFilled && this.isAudioInfoFilled;
        }
    }, {
        key: 'isAudioInfoFilled',
        get: function get() {
            var hasAudio = this.hasAudio,
                audioCodec = this.audioCodec,
                audioSampleRate = this.audioSampleRate,
                audioChannelCount = this.audioChannelCount;


            return !!(!hasAudio || hasAudio && audioCodec && audioSampleRate && audioChannelCount);
        }
    }, {
        key: 'isVideoInfoFilled',
        get: function get() {
            var notNullFields = ['videoCodec', 'width', 'height', 'fps', 'profile', 'level', 'chromaFormat'];
            for (var i = 0, len = notNullFields.length; i < len; i++) {
                if (this[notNullFields[i]] === null) {
                    return false;
                }
            }

            return this.hasVideo;
        }
    }]);

    return MediaInfo;
}();

exports.default = MediaInfo;

/***/ }),

/***/ "./src/models/MediaSample.js":
/*!***********************************!*\
  !*** ./src/models/MediaSample.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediaSample = function () {
    function MediaSample(info) {
        var _this = this;

        _classCallCheck(this, MediaSample);

        var _default = MediaSample.getDefaultInf();

        if (!info || Object.prototype.toString.call(info) !== '[object Object]') {
            return _default;
        }
        var sample = Object.assign({}, _default, info);

        Object.entries(sample).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                k = _ref2[0],
                v = _ref2[1];

            _this[k] = v;
        });
    }

    _createClass(MediaSample, null, [{
        key: 'getDefaultInf',
        value: function getDefaultInf() {
            return {
                dts: null,
                pts: null,
                duration: null,
                position: null,
                isRAP: false, // is Random access point
                originDts: null
            };
        }
    }]);

    return MediaSample;
}();

exports.default = MediaSample;

/***/ }),

/***/ "./src/models/MediaSegment.js":
/*!************************************!*\
  !*** ./src/models/MediaSegment.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediaSegment = function () {
    function MediaSegment() {
        _classCallCheck(this, MediaSegment);

        this.startDts = -1;
        this.endDts = -1;
        this.startPts = -1;
        this.endPts = -1;
        this.originStartDts = -1;
        this.originEndDts = -1;
        this.randomAccessPoints = [];
        this.firstSample = null;
        this.lastSample = null;
    }

    _createClass(MediaSegment, [{
        key: "addRAP",
        value: function addRAP(sample) {
            sample.isRAP = true;
            this.randomAccessPoints.push(sample);
        }
    }]);

    return MediaSegment;
}();

exports.default = MediaSegment;

/***/ }),

/***/ "./src/models/MediaSegmentList.js":
/*!****************************************!*\
  !*** ./src/models/MediaSegmentList.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediaSegmentList = function () {
    function MediaSegmentList(type) {
        _classCallCheck(this, MediaSegmentList);

        this._type = type;
        this._list = [];
        this._lastAppendLocation = -1; // cached last insert location
    }

    _createClass(MediaSegmentList, [{
        key: "isEmpty",
        value: function isEmpty() {
            return this._list.length === 0;
        }
    }, {
        key: "clear",
        value: function clear() {
            this._list = [];
            this._lastAppendLocation = -1;
        }
    }, {
        key: "_searchNearestSegmentBefore",
        value: function _searchNearestSegmentBefore(beginDts) {
            var list = this._list;
            if (list.length === 0) {
                return -2;
            }
            var last = list.length - 1;
            var mid = 0;
            var lbound = 0;
            var ubound = last;

            var idx = 0;

            if (beginDts < list[0].originDts) {
                idx = -1;
                return idx;
            }

            while (lbound <= ubound) {
                mid = lbound + Math.floor((ubound - lbound) / 2);
                if (mid === last || beginDts > list[mid].lastSample.originDts && beginDts < list[mid + 1].originDts) {
                    idx = mid;
                    break;
                } else if (list[mid].originDts < beginDts) {
                    lbound = mid + 1;
                } else {
                    ubound = mid - 1;
                }
            }
            return idx;
        }
    }, {
        key: "_searchNearestSegmentAfter",
        value: function _searchNearestSegmentAfter(beginDts) {
            return this._searchNearestSegmentBefore(beginDts) + 1;
        }
    }, {
        key: "append",
        value: function append(segment) {
            var list = this._list;
            var lastAppendIdx = this._lastAppendLocation;
            var insertIdx = 0;

            if (lastAppendIdx !== -1 && lastAppendIdx < list.length && segment.originStartDts >= list[lastAppendIdx].lastSample.originDts && (lastAppendIdx === list.length - 1 || lastAppendIdx < list.length - 1 && segment.originStartDts < list[lastAppendIdx + 1].originStartDts)) {
                insertIdx = lastAppendIdx + 1; // use cached location idx
            } else {
                if (list.length > 0) {
                    insertIdx = this._searchNearestSegmentBefore(segment.originStartDts) + 1;
                }
            }

            this._lastAppendLocation = insertIdx;
            this._list.splice(insertIdx, 0, segment);
        }
    }, {
        key: "getLastSegmentBefore",
        value: function getLastSegmentBefore(beginDts) {
            var idx = this._searchNearestSegmentBefore(beginDts);
            if (idx >= 0) {
                return this._list[idx];
            } else {
                // -1
                return null;
            }
        }
    }, {
        key: "getLastSampleBefore",
        value: function getLastSampleBefore(beginDts) {
            var segment = this.getLastSegmentBefore(beginDts);
            if (segment !== null) {
                return segment.lastSample;
            } else {
                return null;
            }
        }
    }, {
        key: "getLastRAPBefore",
        value: function getLastRAPBefore(beginDts) {
            var segmentIdx = this._searchNearestSegmentBefore(beginDts);
            var randomAccessPoints = this._list[segmentIdx].randomAccessPoints;
            while (randomAccessPoints.length === 0 && segmentIdx > 0) {
                segmentIdx--;
                randomAccessPoints = this._list[segmentIdx].randomAccessPoints;
            }
            if (randomAccessPoints.length > 0) {
                return randomAccessPoints[randomAccessPoints.length - 1];
            } else {
                return null;
            }
        }
    }, {
        key: "type",
        get: function get() {
            return this._type;
        }
    }, {
        key: "length",
        get: function get() {
            return this._list.length;
        }
    }]);

    return MediaSegmentList;
}();

exports.default = MediaSegmentList;

/***/ }),

/***/ "./src/models/Store.js":
/*!*****************************!*\
  !*** ./src/models/Store.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MediaInfo = __webpack_require__(/*! ./MediaInfo */ "./src/models/MediaInfo.js");

var _MediaInfo2 = _interopRequireDefault(_MediaInfo);

var _sniffer = __webpack_require__(/*! ../utils/sniffer */ "./src/utils/sniffer.js");

var _sniffer2 = _interopRequireDefault(_sniffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
  function Store() {
    _classCallCheck(this, Store);

    this.state = {
      isLe: _sniffer2.default.isLe,
      _hasAudio: false,
      _hasVideo: false,
      _mediaInfo: new _MediaInfo2.default(),
      _metaData: null,
      _videoTrack: { type: 'video', id: 1, samples: [], length: 0 },
      _audioTrack: { type: 'audio', id: 2, samples: [], length: 0 },
      _videoMetaData: null,
      _audioMetaData: null,
      _audioInitialMetadataDispatched: false,
      _videoInitialMetadataDispatched: false,
      tags: [],
      timeStampBase: 0,
      hasVideoFlagOverrided: false,
      hasAudioFlagOverrided: false,
      timeScale: 1000,
      duration: 0,
      isLive: false,
      durationOverrided: false,
      naluLengthSize: 4,
      _referFrameRate: {
        fixed: true,
        fps: 23.976,
        fpsNum: 23976,
        fpsDen: 1000
      },
      metaEndPosition: -1
    };

    this.methods = {
      _isInitialMetadataDispatched: function () {
        var _state = this.state,
            _hasAudio = _state._hasAudio,
            _hasVideo = _state._hasVideo,
            _audioInitialMetadataDispatched = _state._audioInitialMetadataDispatched,
            _videoInitialMetadataDispatched = _state._videoInitialMetadataDispatched;

        if (_hasAudio && _hasVideo) {
          // both audio & video
          return _audioInitialMetadataDispatched && _videoInitialMetadataDispatched;
        }
        if (_hasAudio && !_hasVideo) {
          // audio only
          return this._audioInitialMetadataDispatched;
        }
        if (!_hasAudio && _hasVideo) {
          // video only
          return _videoInitialMetadataDispatched;
        }
        return false;
      }.bind(this)
    };
  }

  _createClass(Store, [{
    key: 'clearTags',
    value: function clearTags() {
      this.state.tags = [];
    }
  }, {
    key: 'referFrameRate',
    get: function get() {
      return this.state._referFrameRate;
    },
    set: function set(val) {
      this.state._referFrameRate = val;
    }
  }, {
    key: 'mediaInfo',
    set: function set(mediaInfo) {
      this.state._mediaInfo = mediaInfo;
    },
    get: function get() {
      return this.state._mediaInfo;
    }
  }, {
    key: 'metaData',
    get: function get() {
      return this.state._metaData;
    },
    set: function set(v) {
      this.state._metaData = v;
    }
  }, {
    key: 'hasMetaData',
    get: function get() {
      return this.state._metaData !== null;
    }
  }, {
    key: 'audioTrack',
    set: function set(val) {
      this.state._audioTrack = val;
    },
    get: function get() {
      return this.state._audioTrack;
    }
  }, {
    key: 'videoTrack',
    set: function set(val) {
      this.state._videoTrack = val;
    },
    get: function get() {
      return this.state._videoTrack;
    }
  }, {
    key: 'hasAudio',
    set: function set(val) {
      this.state._hasAudio = val;
      this.state._mediaInfo.hasAudio = val;
    },
    get: function get() {
      return this.state._hasAudio;
    }
  }, {
    key: 'hasVideo',
    set: function set(val) {
      this.state._hasVideo = val;
      this.state._mediaInfo.hasVideo = val;
    },
    get: function get() {
      return this.state._hasVideo;
    }
  }, {
    key: 'videoMetaData',
    set: function set(val) {
      this.state._videoMetaData = val;
    },
    get: function get() {
      return this.state._videoMetaData;
    }
  }, {
    key: 'audioMetaData',
    set: function set(val) {
      this.state._audioMetaData = val;
    },
    get: function get() {
      return this.state._audioMetaData;
    }
  }, {
    key: 'keyframes',
    get: function get() {
      return this.state._mediaInfo.keyframes;
    }
  }, {
    key: 'isSeekable',
    get: function get() {
      return this.state._mediaInfo.hasKeyframes;
    }
  }, {
    key: 'isLe',
    get: function get() {
      return this.state.isLe;
    }
  }, {
    key: 'hasInitialMetaDispatched',
    get: function get() {
      var _state2 = this.state,
          _hasAudio = _state2._hasAudio,
          _hasVideo = _state2._hasVideo,
          _audioInitialMetadataDispatched = _state2._audioInitialMetadataDispatched,
          _videoInitialMetadataDispatched = _state2._videoInitialMetadataDispatched;

      if (_hasAudio && _hasVideo) {
        return _audioInitialMetadataDispatched && _videoInitialMetadataDispatched;
      }
      if (_hasAudio && !_hasVideo) {
        return this._audioInitialMetadataDispatched;
      }
      if (!_hasAudio && _hasVideo) {
        return _videoInitialMetadataDispatched;
      }
      return false;
    }
  }, {
    key: 'videoTimeScale',
    get: function get() {
      return this.state.timeScale;
    }
  }, {
    key: 'metaEndPosition',
    get: function get() {
      return this.state.metaEndPosition;
    },
    set: function set(pos) {
      this.state.metaEndPosition = pos;
    }
  }, {
    key: 'isLive',
    get: function get() {
      return this.state.isLive;
    },
    set: function set(val) {
      this.state.isLive = val;
    }
  }]);

  return Store;
}();

exports.default = Store;

/***/ }),

/***/ "./src/models/Tag.js":
/*!***************************!*\
  !*** ./src/models/Tag.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlvTag = function () {
    function FlvTag() {
        _classCallCheck(this, FlvTag);

        this.tagType = -1;
        this.bodySize = -1;
        this.tagSize = -1;
        this.position = -1;
        this.Timestamp = -1;
        this.StreamID = -1;
        this.body = -1;
        this.time = -1;
        this.arr = [];
    }

    _createClass(FlvTag, [{
        key: 'getTime',
        value: function getTime() {
            this.arr = [];
            for (var i = 0; i < this.Timestamp.length; i++) {
                this.arr.push(this.Timestamp[i].toString(16).length === 1 ? '0' + this.Timestamp[i].toString(16) : this.Timestamp[i].toString(16));
            }
            this.arr.pop();
            var time = this.arr.join('');
            this.time = parseInt(time, 16);
            return parseInt(time, 16);
        }
    }]);

    return FlvTag;
}();

exports.default = FlvTag;

/***/ }),

/***/ "./src/models/error.js":
/*!*****************************!*\
  !*** ./src/models/error.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _package = __webpack_require__(/*! ../../package.json */ "./package.json");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ErrorTypes = {
  network: {
    code: 1,
    msg: '视频下载错误',
    remark: '只要视频下载错误就使用此类型，无论是video本身的超时还是xhr的分段请求超时或者资源不存在'
  },
  mse: {
    code: 2,
    msg: '流追加错误',
    remark: '追加流的时候如果类型不对、无法被正确解码则会触发此类错误'
  },
  parse: {
    code: 3,
    msg: '解析错误',
    remark: 'mp4、hls、flv我们都是使用js进行格式解析，如果解析失败则会触发此类错误'
  },
  format: {
    code: 4,
    msg: '格式错误',
    remark: '如果浏览器不支持的格式导致播放错误'
  },
  decoder: {
    code: 5,
    msg: '解码错误',
    remark: '浏览器解码异常会抛出此类型错误'
  },
  runtime: {
    code: 6,
    msg: '语法错误',
    remark: '播放器语法错误'
  },
  timeout: {
    code: 7,
    msg: '播放超时',
    remark: '播放过程中无法正常请求下一个分段导致播放中断'
  },
  other: {
    code: 8,
    msg: '其他错误',
    remark: '不可知的错误或被忽略的错误类型'
  }
};

var Errors = function Errors(type, currentTime, duration, networkState, readyState, src, currentSrc, ended) {
  var errd = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : { line: '', handle: '', msg: '', version: '' };

  _classCallCheck(this, Errors);

  var r = {};
  r.playerVersion = _package.version; // 播放器版本
  r.errorType = type;
  r.domain = document.domain; // domain
  r.duration = duration; // 视频时长
  r.currentTime = currentTime;
  r.networkState = networkState;
  r.readyState = readyState;
  r.currentSrc = currentSrc;
  r.src = src;
  r.ended = ended;
  r.errd = errd; // 错误详情
  r.ex = (ErrorTypes[type] || {}).msg; // 补充信息
  return r;
};

exports.default = Errors;

/***/ }),

/***/ "./src/parse/FlvParser.js":
/*!********************************!*\
  !*** ./src/parse/FlvParser.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Demuxer2 = __webpack_require__(/*! ./demux/Demuxer */ "./src/parse/demux/Demuxer.js");

var _Demuxer3 = _interopRequireDefault(_Demuxer2);

var _Buffer = __webpack_require__(/*! ../write/Buffer */ "./src/write/Buffer.js");

var _Buffer2 = _interopRequireDefault(_Buffer);

var _Tag = __webpack_require__(/*! ../models/Tag */ "./src/models/Tag.js");

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //破译者 
//parseData 最后是创建tag this._store.state.tags中


var FlvParser = function (_Demuxer) {
  _inherits(FlvParser, _Demuxer);

  function FlvParser(store) {
    _classCallCheck(this, FlvParser);

    var _this = _possibleConstructorReturn(this, (FlvParser.__proto__ || Object.getPrototypeOf(FlvParser)).call(this, store));

    _this.CLASS_NAME = _this.constructor.name;
    _this.temp_u8a = null;
    _this.dataLen = 0;
    _this.stop = false;
    _this.index = 0; // record the position in single round
    _this.offset = 0;
    _this.filePosition = 0; // record current file position
    _this.firstFlag = true;
    return _this;
  }

  _createClass(FlvParser, [{
    key: 'seek',
    value: function seek() {
      this.offset = 0;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.temp_u8a = null;
      this.dataLen = 0;
      this.stop = false;
      this.index = 0; // record the position in single round
      this.offset = 0;
      this.filePosition = 0;
    }
  }, {
    key: 'setFlv',
    value: function setFlv(flvU8a) {
      // 每一次setFlv都回重置index和offset 然后返回offset 外面根据offset进行裁剪数据
      this.stop = false;
      this.index = 0;
      this.offset = 0;
      var tempU8a = this.temp_u8a = flvU8a;
      this.dataLen = this.temp_u8a.length;

      if (!this.firstFlag) {
        return this.parseData();
        // 超过13个字节才开始处理
      } else if (tempU8a.length > 13 && FlvParser.isFlvHead(tempU8a)) {
        // 解析是否有音视频 
        this.parseHead();
        // 改变this.index
        this.readData(9); // 跳过头部
        this.readData(4); // 跳过下一个记录头部size的 int32
        this.parseData();
        this.firstFlag = false;
        this.filePosition += this.offset;
        return this.offset;
      } else {
        return this.offset;
      }
    }
  }, {
    key: 'parseData',
    value: function parseData() {
      var u8aLength = this.temp_u8a.length;
      // 这里有个疑问 如果header和body不是一次来的 tag会不会计算错误，没有严格的tag的开始和结束标志 
      // 第一次buffer tag的body没有完全到结束了 但是offset把11个header字节删除了，下次来就没有header字节了。

      while (this.index < u8aLength && !this.stop) {
        //offset是最后返回的处理到的位置
        this.offset = this.index;
        var tag = new _Tag2.default();
        if (this.unreadLength >= 11) {
          // 可以读出头部信息
          tag.position = this.filePosition + this.offset;
          tag.tagType = this.readData(1)[0];
          tag.bodySize = this.readData(3);
          tag.Timestamp = this.readData(4);
          tag.StramId = this.readData(3);
        } else {
          // 如果数据小于11个字节 则直接return offset就是当前的index
          this.stop = true;
          continue;
        }
        if (this.unreadLength >= this.getBodySize(tag.bodySize) + 4) {
          tag.body = this.readData(this.getBodySize(tag.bodySize));
          tag.tagSize = this.readData(4);
          // 最后是存放到了store中的tags
          var _store$state = this._store.state,
              tags = _store$state.tags,
              _hasVideo = _store$state._hasVideo,
              _hasAudio = _store$state._hasAudio;

          switch (tag.tagType) {
            case 9:
              _hasVideo && tags.push(tag);
              break;
            case 8:
              _hasAudio && tags.push(tag);
              break;
            case 18:
              tags.push(tag);
              break;
          }
        } else {
          this.stop = true;
          continue;
        }

        this.offset = this.index;
      }
      this.filePosition += this.offset;
      this.temp_u8a = null;
      return this.offset;
    }

    /**
     * @param sizeArr
     * @return
     */

  }, {
    key: 'getBodySize',
    value: function getBodySize(sizeArr) {
      return _Buffer2.default.readAsInt(sizeArr);
    }
    // 

  }, {
    key: 'parseHead',
    value: function parseHead() {
      var tempU8a = this.temp_u8a,
          _store = this._store;

      var result = {
        match: false
        // 第四个字节是1
      };if (tempU8a[3] !== 1) {
        return result;
      }
      // 第五个字节
      var flag = tempU8a[4];
      // 100  第三位是1代表有音频
      var hasAudio = (flag & 4) >>> 2 !== 0;
      // 01 第一位是1 代表有视频
      var hasVideo = (flag & 1) !== 0;

      if (!hasAudio && !hasVideo) {
        return result;
      }

      _store.hasAudio = hasAudio;
      _store.hasVideo = hasVideo;
    }
  }, {
    key: 'readData',
    value: function readData(length) {
      var _index = this.index;
      this.index += length;
      return this.temp_u8a.slice(_index, _index + length);
    }
  }, {
    key: 'unreadLength',
    get: function get() {
      return this.dataLen - this.index;
    }
  }], [{
    key: 'isFlvHead',
    value: function isFlvHead(tempU8a) {
      var firstThreeChars = [tempU8a[0], tempU8a[1], tempU8a[2]];
      return String.fromCharCode.apply(String, firstThreeChars) === 'FLV';
    }
  }]);

  return FlvParser;
}(_Demuxer3.default);

exports.default = FlvParser;

/***/ }),

/***/ "./src/parse/MSE.js":
/*!**************************!*\
  !*** ./src/parse/MSE.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventEmitter = __webpack_require__(/*! event-emitter */ "./node_modules/event-emitter/index.js");

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var count = 0;

var MSE = function () {
  function MSE(mediaElement) {
    _classCallCheck(this, MSE);

    //codecs 解码器
    this.codecs = 'video/mp4; codecs="avc1.64001E, mp4a.40.5"';
    var self = this;
    (0, _eventEmitter2.default)(this);
    this.mediaSource = new window.MediaSource();
    mediaElement.src = window.URL.createObjectURL(this.mediaSource);
    this.url = mediaElement.src;
    this.handleSourceOpen = this.onSourceOpen.bind(this);
    this.mediaSource.addEventListener('sourceopen', this.handleSourceOpen);

    this.mediaSource.addEventListener('sourceclose', function () {
      self.emit('sourceclose');
    });
  }

  _createClass(MSE, [{
    key: 'onSourceOpen',
    value: function onSourceOpen() {
      var self = this;
      self.sourceBuffer = self.mediaSource.addSourceBuffer(self.codecs);
      self.sourceBuffer.addEventListener('error', function (e) {
        self.emit('error', {
          type: 'sourceBuffer',
          error: e
        });
      });
      self.sourceBuffer.addEventListener('updateend', function (e) {
        self.emit('updateend');
      });
      self.emit('sourceopen');
      self.sourceBuffer.addEventListener('error', function (e) {
        self.emit('error', {
          type: 'mediaSource',
          error: e
        });
      });
    }
  }, {
    key: 'appendBuffer',
    value: function appendBuffer(buffer) {
      var sourceBuffer = this.sourceBuffer;
      if (sourceBuffer.updating === false && this.state === 'open') {
        sourceBuffer.appendBuffer(buffer);
        return true;
      } else {
        if (this.state === 'closed') {
          this.emit('error', {
            type: 'sourceBuffer',
            error: new Error('mediaSource is not attached to video or mediaSource is closed')
          });
        } else if (this.state === 'ended') {
          this.emit('error', {
            type: 'sourceBuffer',
            error: new Error('mediaSource is closed')
          });
        } else {
          if (sourceBuffer.updating === true) {
            this.emit('warn', {
              type: 'sourceBuffer',
              error: new Error('mediaSource is busy')
            });
          }
          return false;
        }
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      // this.mediaSource.removeEventListener('sourceopen', this.handleSourceOpen)
      this.__ee__ = {};
      // this.mediaSource = null
      // this.endOfStream()
    }
  }, {
    key: 'removeBuffer',
    value: function removeBuffer(start, end) {
      this.sourceBuffer.remove(start, end);
    }
  }, {
    key: 'endOfStream',
    value: function endOfStream() {
      if (this.mediaSource.readyState === 'open') {
        this.mediaSource.endOfStream();
      }
    }
  }, {
    key: 'state',
    get: function get() {
      return this.mediaSource.readyState;
    }
  }, {
    key: 'duration',
    get: function get() {
      return this.mediaSource.duration;
    },
    set: function set(value) {
      this.mediaSource.duration = value;
    }
  }], [{
    key: 'isSupported',
    value: function isSupported(codecs) {
      return window.MediaSource && window.MediaSource.isTypeSupported(codecs);
    }
  }]);

  return MSE;
}();

exports.default = MSE;

/***/ }),

/***/ "./src/parse/MainParser.js":
/*!*********************************!*\
  !*** ./src/parse/MainParser.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Mp4remux = __webpack_require__(/*! ./remux/Mp4remux */ "./src/parse/remux/Mp4remux.js");

var _Mp4remux2 = _interopRequireDefault(_Mp4remux);

var _FlvParser = __webpack_require__(/*! ./FlvParser */ "./src/parse/FlvParser.js");

var _FlvParser2 = _interopRequireDefault(_FlvParser);

var _TagDemuxer = __webpack_require__(/*! ./demux/TagDemuxer */ "./src/parse/demux/TagDemuxer.js");

var _TagDemuxer2 = _interopRequireDefault(_TagDemuxer);

var _Store = __webpack_require__(/*! ../models/Store */ "./src/models/Store.js");

var _Store2 = _interopRequireDefault(_Store);

var _VodTask = __webpack_require__(/*! ../tasks/VodTask */ "./src/tasks/VodTask.js");

var _VodTask2 = _interopRequireDefault(_VodTask);

var _LiveTask = __webpack_require__(/*! ../tasks/LiveTask */ "./src/tasks/LiveTask.js");

var _LiveTask2 = _interopRequireDefault(_LiveTask);

var _Buffer = __webpack_require__(/*! ../write/Buffer */ "./src/write/Buffer.js");

var _Buffer2 = _interopRequireDefault(_Buffer);

var _TransCoder2 = __webpack_require__(/*! ./TransCoder */ "./src/parse/TransCoder.js");

var _TransCoder3 = _interopRequireDefault(_TransCoder2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NOOP = function NOOP() {};

var MainParser = function (_TransCoder) {
  _inherits(MainParser, _TransCoder);

  function MainParser(config, player) {
    _classCallCheck(this, MainParser);

    var _this = _possibleConstructorReturn(this, (MainParser.__proto__ || Object.getPrototypeOf(MainParser)).call(this));

    _this.CLASS_NAME = _this.constructor.name;
    _this._config = config;
    _this._player = player;
    _this._tempBaseTime = 0;
    _this.firstFlag = true;
    _this._store = new _Store2.default();
    _this._store.isLive = config.isLive || false;
    _this._store.player = player;
    // 解析成tag 存入store
    _this.flvParser = new _FlvParser2.default(_this._store);
    // 标记解析器
    _this.tagDemuxer = new _TagDemuxer2.default(_this._store);
    _this.mp4remuxer = new _Mp4remux2.default(_this._store);
    _this.buffer = new _Buffer2.default();
    _this.bufferKeyframes = new Set();
    _this.META_CHUNK_SIZE = Math.pow(10, 6);
    _this.CHUNK_SIZE = Math.pow(10, 6);
    _this.ftyp_moov = null;
    _this.isSourceOpen = false;
    _this._isNewSegmentsArrival = false;
    _this.isSeeking = false;
    _this.loadTask = null;
    _this.range = {
      start: -1,
      end: -1
    };
    _this._pendingFragments = [];
    _this._pendingRemoveRange = [];
    _this.err_cnt = 0;
    _this.requestConfig = {
      mode: _this._config.cors ? 'cors' : 'same-origin'
    };
    _this.initEventBind();
    return _this;
  }
  // 开始加载数据


  _createClass(MainParser, [{
    key: 'startLoadData',
    value: function startLoadData() {
      if (!this._config.isLive) {
        this.initMeta();
      } else {
        this.initLiveStream();
      }
    }
    // 直播

  }, {
    key: 'initLiveStream',
    value: function initLiveStream() {
      // 加载数据
      this.loadTask = new _LiveTask2.default(this._config.url, this.requestConfig).run(this.loadLiveData.bind(this));
    }
  }, {
    key: 'loadLiveData',
    value: function loadLiveData(buffer) {
      // 直播结束
      if (buffer === undefined) {
        this.emit('live-end');
        this._player.mse.endOfStream();
        this.destroy();
      }
      try {
        //https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
        // Uint8Array 8位无符号整型数组  每一个元素正好是一个字节
        // this.buffer就是一个数据缓冲池 往里加数据 根据处理的offset进行删除
        this.buffer.write(new Uint8Array(buffer));
        // 解析tag
        var offset = this.setFlv(this.buffer.buffer);
        this.buffer.buffer = this.buffer.buffer.slice(offset);
      } catch (e) {
        console.log(e.message);
      }
    }
    // 非直播

  }, {
    key: 'initMeta',
    value: function initMeta() {
      var _this2 = this;

      var self = this;
      var Resolver = {
        resolveChunk: function resolveChunk(_ref) {
          var timeStamp = _ref.timeStamp,
              buffer = _ref.buffer;

          if (timeStamp !== self.loadTask.timeStamp) return;
          self.err_cnt = 0;
          self.buffer.write(new Uint8Array(buffer));
          var offset = self.setFlv(self.buffer.buffer);
          self.buffer.buffer = self.buffer.buffer.slice(offset);
          if (!self.isMediaInfoReady) {
            self.initMeta();
          }
        }
      };
      this.range = {
        start: this.range.end + 1,
        end: this.range.end + this.META_CHUNK_SIZE
      };
      var loadData = function loadData() {
        return _this2.loadMetaData(_this2.range.start, _this2.range.end).then(Resolver.resolveChunk).catch(function (e) {
          console.log(e);
          if (_this2.err_cnt >= 3) {
            _this2._player.emit('error', e);
            _this2.destroy();
            return;
          }
          _this2.err_cnt += 1;
          loadData();
        });
      };
      return loadData();
    }
  }, {
    key: 'loadSegments',
    value: function loadSegments(changeRange) {
      var _this3 = this;

      var currentTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var preloadTime = arguments[2];

      this._isNewSegmentsArrival = false;
      var resolveChunk = function resolveChunk(_ref2) {
        var timeStamp = _ref2.timeStamp,
            buffer = _ref2.buffer;

        if (_this3.isTempPlayer) {
          _this3.isTempPlayer = false;
        }
        if (timeStamp !== _this3.loadTask.timeStamp) return;
        _this3.err_cnt = 0;
        _this3.buffer.write(new Uint8Array(buffer));
        if (_this3.isSeeking) {
          _this3._pendingFragments = [];
        }
        var offset = _this3.setFlv(_this3.buffer.buffer);
        _this3.buffer.buffer = _this3.buffer.buffer.slice(offset);
        if (!_this3._isNewSegmentsArrival) {
          _this3.loadSegments(true);
        } else {
          _this3.isSeeking = false;
        }
      };
      if (changeRange) {
        var _range = this.range;

        if (this.getNextRangeEnd(currentTime, preloadTime) <= _range.end) {
          return Promise.resolve();
        }

        this.range = {
          start: this.range.end + 1,
          end: currentTime === undefined ? this.range.end + this.CHUNK_SIZE - 1 : this.getNextRangeEnd(currentTime, preloadTime) - 1
        };

        if (this.range.start >= this.range.end || !this.range.end) {
          this.range = _range;
          return Promise.resolve();
        }
      }
      var loadData = function loadData() {
        if (_this3.stop) return;
        return _this3._loadSegmentsData(_this3.range.start, _this3.range.end).then(resolveChunk).catch(function (e) {
          if (_this3.err_cnt >= 3) {
            _this3._player.emit('error', '加载视频失败');
            _this3.destroy();
            return;
          }
          _this3.err_cnt += 1;
          loadData();
        });
      };
      return loadData();
    }
  }, {
    key: 'getNextRangeEnd',
    value: function getNextRangeEnd(start, preloadTime) {
      var _store = this._store,
          _store$keyframes = _store.keyframes,
          times = _store$keyframes.times,
          filePositions = _store$keyframes.filePositions,
          videoTimeScale = _store.videoTimeScale;

      if (!times || !filePositions) {
        return this.range.end + this.CHUNK_SIZE;
      }
      start *= videoTimeScale;

      var expectEnd = start + preloadTime * videoTimeScale;
      if (expectEnd > times[times.length - 1]) {
        return filePositions[filePositions.length - 1];
      }
      var left = 0;
      var right = times.length - 1;
      var index = void 0;

      while (left <= right) {
        var mid = Math.floor((right + left) / 2);
        if (times[mid] <= expectEnd && expectEnd <= times[mid + 1]) {
          index = mid + 1;
          break;
        } else if (left === right) {
          index = mid;
          break;
        } else if (expectEnd < times[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }

      return index ? filePositions[index] : undefined;
    }
  }, {
    key: '_loadSegmentsData',
    value: function _loadSegmentsData() {
      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : start + this.CHUNK_SIZE;

      this.loadTask = new _VodTask2.default(this._config.url, [start, end], this.requestConfig);
      return this.loadTask.promise;
    }
  }, {
    key: 'loadMetaData',
    value: function loadMetaData() {
      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : start + this.META_CHUNK_SIZE;

      this.loadTask = new _VodTask2.default(this._config.url, [start, end], this.requestConfig);
      return this.loadTask.promise;
    }
  }, {
    key: 'setFlvFirst',
    value: function setFlvFirst(arrayBuff, baseTime) {
      // 调用flvParser
      var offset = this.flvParser.setFlv(new Uint8Array(arrayBuff));
      var tags = this._store.state.tags;


      if (tags.length) {
        if (tags[0].tagType !== 18) {
          throw new Error('flv file without metadata tag');
        }

        if (this._tempBaseTime !== 0 && this._tempBaseTime === tags[0].getTime()) {
          this._store.state._timestampBase = 0;
        }
        // 解析标记
        this.tagDemuxer.resolveTags(tags);
      }

      this.firstFlag = false;
      return offset;
    }
  }, {
    key: 'setFlvUsually',
    value: function setFlvUsually(arrayBuff, baseTime) {
      this.isParsing = true;
      var offset = this.flvParser.setFlv(new Uint8Array(arrayBuff));
      var tags = this._store.state.tags;

      if (tags.length) {
        // 解析标记
        this.tagDemuxer.resolveTags(tags);
      }
      return offset;
    }
  }, {
    key: 'handleDataReady',
    value: function handleDataReady(audioTrack, videoTrack) {
      this.mp4remuxer.remux(audioTrack, videoTrack);
    }
  }, {
    key: 'handleMetaDataReady',
    value: function handleMetaDataReady(type, meta) {
      this.mp4remuxer.onMetaDataReady(type, meta);
    }
  }, {
    key: 'handleError',
    value: function handleError(e) {
      this.error(e);
    }
  }, {
    key: 'handleNewMediaFragment',
    value: function handleNewMediaFragment(newFrag) {
      var _this4 = this;

      this._isNewSegmentsArrival = true;
      this._pendingFragments.push(newFrag);
      var randomAccessPoints = newFrag.fragment.randomAccessPoints;

      if (randomAccessPoints && randomAccessPoints.length) {
        randomAccessPoints.forEach(function (rap) {
          _this4.bufferKeyframes.add(rap.dts);
        });
      }
      if (!this.isSourceOpen) {
        return;
      }
      if (this._pendingFragments.length) {
        var fragment = this._pendingFragments.shift();
        if (!this.handleMediaFragment(fragment)) {
          this._pendingFragments.unshift(fragment);
        } else {
          this.handleSeekEnd();
          this._player.emit('cacheupdate', this._player);
        }
      }
    }
  }, {
    key: 'handleMediaInfoReady',
    value: function handleMediaInfoReady(mediaInfo) {
      var FTYP_MOOV = this.mp4remuxer.onMediaInfoReady(mediaInfo);
      if (!this.ftyp_moov) {
        this.ftyp_moov = FTYP_MOOV;
        this.emit('ready', FTYP_MOOV);
      }
    }
  }, {
    key: 'initEventBind',
    value: function initEventBind() {
      this.tagDemuxer.handleDataReady = this.handleDataReady.bind(this);
      this.tagDemuxer.handleMediaInfoReady = this.handleMediaInfoReady.bind(this);
      this.tagDemuxer.handleMetaDataReady = this.handleMetaDataReady.bind(this);
      this.tagDemuxer.setEventBind();
      this.mp4remuxer.handleMediaFragment = this.handleNewMediaFragment.bind(this);
    }
  }, {
    key: 'replay',
    value: function replay() {
      this.isSourceOpen = false;
      this.range = {
        start: this._store.metaEndPosition,
        end: this.getNextRangeEnd(0, this._config.preloadTime) - 1
      };
      this.mp4remuxer.seek();
      this.flvParser.seek();
      this.clearBuffer();
      this.loadSegments(false);
    }
  }, {
    key: 'clearBuffer',
    value: function clearBuffer() {
      this._pendingFragments = [];
      this._pendingRemoveRange = [];
    }
  }, {
    key: 'unbindEvents',
    value: function unbindEvents() {
      this.tagDemuxer.handleDataReady = NOOP;
      this.tagDemuxer.handleMediaInfoReady = NOOP;
      this.tagDemuxer.handleMetaDataReady = NOOP;
      this.tagDemuxer.setEventBind();
      this.mp4remuxer.handleMediaFragment = NOOP;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.mp4remuxer.destroy();
      this.flvParser.destroy();
      this.tagDemuxer.destroy();
      this.mp4remuxer = null;
      this.flvParser = null;
      this.tagDemuxer = null;
      this.loadSegments = function () {
        return null;
      };
      this._store = null;
      this.clearBuffer();
      this.stop = true;
      this.loadTask && this.loadTask.cancel();
    }
  }, {
    key: 'seek',
    value: function seek(target) {
      this.loadTask.cancel();
      var _store2 = this._store,
          _store2$keyframes = _store2.keyframes,
          keyframes = _store2$keyframes === undefined ? {} : _store2$keyframes,
          videoTimeScale = _store2.videoTimeScale;

      var seekStart = target * videoTimeScale;
      var startFilePos = void 0;
      var endFilePos = void 0;
      var length = Math.min(keyframes.filePositions.length, keyframes.times.length);
      var preloadTime = this._config.preloadTime;


      function getEndFilePos(time, idx) {
        if (idx === keyframes.times.length) {
          endFilePos = idx;
          return false;
        }
        if (time <= preloadTime && preloadTime <= keyframes.times[idx + 1]) {
          endFilePos = idx;
          return false;
          // 需要处理EOF的情况
        }
        return true;
      }

      var lo = 0;
      var hi = length - 2;
      while (lo <= hi) {
        var mid = Math.floor((lo + hi) / 2);
        var currentTime = keyframes.times[mid];
        var nextTime = keyframes.times[mid + 1] ? keyframes.times[mid + 1] : Number.MAX_SAFE_INTEGER;
        if (currentTime <= seekStart && seekStart <= nextTime || lo === hi) {
          while (keyframes.times[mid] >= seekStart) {
            mid -= 1;
          }
          startFilePos = mid - 1;
          preloadTime = preloadTime * videoTimeScale + seekStart;
          keyframes.times.every(getEndFilePos);
          break;
        } else if (seekStart < currentTime) {
          hi = mid - 1;
        } else {
          lo = mid + 1;
        }
      }

      if (!this.isSeeking) {
        this.isSeeking = true;
      } else {
        this._store.clearTags();
      }
      this._pendingFragments = [];
      this.mp4remuxer.seek();
      this.flvParser.seek();
      _VodTask2.default.clear();
      var _range = this.range;
      if (keyframes.filePositions[startFilePos] < _range.end) {
        startFilePos += 1;
        endFilePos += 1;
      }
      this.range = {
        start: keyframes.filePositions[startFilePos],
        end: keyframes.filePositions[endFilePos] - 1 || ''
      };
      this.buffer = new _Buffer2.default();
      this.loadSegments(false);
    }
  }, {
    key: 'setFlv',
    get: function get() {
      return this.firstFlag ? this.setFlvFirst : this.setFlvUsually;
    }
  }, {
    key: 'isMediaInfoReady',
    get: function get() {
      return this._store.mediaInfo.isComplete;
    }
  }, {
    key: 'videoDuration',
    get: function get() {
      return this._store.mediaInfo.duration;
    }
  }, {
    key: 'hasPendingFragments',
    get: function get() {
      return !!this._pendingFragments.length;
    }
  }, {
    key: 'pendingFragments',
    get: function get() {
      return this._pendingFragments;
    }
  }, {
    key: 'videoTimeScale',
    get: function get() {
      return this._store.videoTimeScale;
    }
  }, {
    key: 'hasPendingRemoveRanges',
    get: function get() {
      return this._pendingRemoveRange.length;
    }
  }, {
    key: 'pendingRemoveRanges',
    get: function get() {
      return this._pendingRemoveRange;
    }
  }, {
    key: 'isSeekable',
    get: function get() {
      return this._store.isSeekable;
    }
  }]);

  return MainParser;
}(_TransCoder3.default);

exports.default = MainParser;

/***/ }),

/***/ "./src/parse/SPSParser.js":
/*!********************************!*\
  !*** ./src/parse/SPSParser.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ExpGolomb = __webpack_require__(/*! ../utils/ExpGolomb */ "./src/utils/ExpGolomb.js");

var _ExpGolomb2 = _interopRequireDefault(_ExpGolomb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SPSParser = function () {
    function SPSParser() {
        _classCallCheck(this, SPSParser);
    }

    _createClass(SPSParser, null, [{
        key: 'getProfileStr',
        value: function getProfileStr(profileIdc) {
            switch (profileIdc) {
                case 66:
                    return 'Baseline';
                case 77:
                    return 'Main';
                case 88:
                    return 'Extended';
                case 100:
                    return 'High';
                case 110:
                    return 'High10';
                case 122:
                    return 'High422';
                case 244:
                    return 'High444';
                default:
                    return 'Unknown';
            }
        }
    }, {
        key: 'getLevelStr',
        value: function getLevelStr(levelIdc) {
            return (levelIdc / 10).toFixed(1);
        }
    }, {
        key: 'getChromaFormatStr',
        value: function getChromaFormatStr(chroma) {
            switch (chroma) {
                case 420:
                    return '4:2:0';
                case 422:
                    return '4:2:2';
                case 444:
                    return '4:4:4';
                default:
                    return 'Unknown';
            }
        }

        /**
         * read SPS
         * @param originArr
         */

    }, {
        key: 'parseSPS',
        value: function parseSPS(originArr) {

            var rbsp = SPSParser._ebsp2rbsp(originArr);

            var stream = new _ExpGolomb2.default(rbsp);
            var spsConfig = stream.readSPS();
            var chromaFormat = spsConfig.chromaFormat,
                levelIdc = spsConfig.levelIdc,
                profileIdc = spsConfig.profileIdc;

            spsConfig.profileString = SPSParser.getProfileStr(profileIdc);
            spsConfig.levelString = SPSParser.getLevelStr(levelIdc);
            spsConfig.chromaFormatString = SPSParser.getChromaFormatStr(chromaFormat);

            return spsConfig;
        }

        //

    }, {
        key: '_ebsp2rbsp',
        value: function _ebsp2rbsp(originArr) {
            var originLen = originArr.byteLength;
            var dist = new Uint8Array(originArr.byteLength);
            var distSize = 0;

            for (var i = 0, len = originLen; i < len; i++) {
                if (i > 2 && originArr[i] === 3 && originArr[i - 1] === 0 && originArr[i - 2] === 0) {
                    continue;
                }
                dist[distSize++] = originArr[i];
            }

            return new Uint8Array(dist.buffer, 0, distSize);
        }
    }]);

    return SPSParser;
}();

exports.default = SPSParser;

/***/ }),

/***/ "./src/parse/TransCoder.js":
/*!*********************************!*\
  !*** ./src/parse/TransCoder.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Observer = __webpack_require__(/*! ../utils/Observer */ "./src/utils/Observer.js");

var _Observer2 = _interopRequireDefault(_Observer);

var _error = __webpack_require__(/*! ../models/error */ "./src/models/error.js");

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 转码器基类
 */
var TransCoder = function () {
  function TransCoder(store) {
    _classCallCheck(this, TransCoder);

    if (store) {
      this._store = store;
    }
    this._observer = _Observer2.default;
    this.on = _Observer2.default.on.bind(_Observer2.default);
    this.emit = _Observer2.default.emit.bind(_Observer2.default);
    this.off = _Observer2.default.off.bind(_Observer2.default);
    this.flush = _Observer2.default.flush.bind(_Observer2.default);
    this.once = _Observer2.default.once.bind(_Observer2.default);
  }

  _createClass(TransCoder, [{
    key: 'emitError',
    value: function emitError(type) {
      var errorDetail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { line: '', handle: '', msg: '', version: '' };
      var _store = this._store,
          player = _store.player,
          state = _store.state;

      if (player) {
        var errorToEmit = new _error2.default(type, player.currentTime, state.duration, '', true, player.config.url, player.config.url, player.ended, errorDetail);
        player.emit('error', errorToEmit);
      }
    }
  }]);

  return TransCoder;
}();

exports.default = TransCoder;

/***/ }),

/***/ "./src/parse/demux/AudioDemuxer.js":
/*!*****************************************!*\
  !*** ./src/parse/demux/AudioDemuxer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Demuxer2 = __webpack_require__(/*! ./Demuxer */ "./src/parse/demux/Demuxer.js");

var _Demuxer3 = _interopRequireDefault(_Demuxer2);

var _DataView4Read = __webpack_require__(/*! ../../utils/DataView4Read */ "./src/utils/DataView4Read.js");

var _DataView4Read2 = _interopRequireDefault(_DataView4Read);

var _types = __webpack_require__(/*! ../../constants/types */ "./src/constants/types.js");

var _sniffer = __webpack_require__(/*! ../../utils/sniffer */ "./src/utils/sniffer.js");

var _sniffer2 = _interopRequireDefault(_sniffer);

var _Buffer = __webpack_require__(/*! ../../write/Buffer */ "./src/write/Buffer.js");

var _Buffer2 = _interopRequireDefault(_Buffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // refrence: https://github.com/video-dev/hls.js/blob/master/src/demux/adts.js

// import { mp3Versions, mp3BitRate, audioSampleRate } from '../../constants/types';
// resolve 方法 解析tag  AAC解码， 更新store中的audioTrack audioMetaData


var AudioDemuxer = function (_Demuxer) {
  _inherits(AudioDemuxer, _Demuxer);

  function AudioDemuxer(store) {
    _classCallCheck(this, AudioDemuxer);

    var _this = _possibleConstructorReturn(this, (AudioDemuxer.__proto__ || Object.getPrototypeOf(AudioDemuxer)).call(this, store));

    _this.CLASS_NAME = _this.constructor.name;
    _this.currentTag = null;
    _this.data = new Uint8Array(0);
    _this.readOffset = 0;
    _this._store.audioMetaData = null;
    _this.handleDataReady = function () {};
    _this.handleMetaDataReady = function () {};
    _this.handleMediaInfoReady = function () {};
    return _this;
  }

  _createClass(AudioDemuxer, [{
    key: 'resolve',
    value: function resolve(tag) {
      this.readOffset = 0;
      var store = this._store;
      // 修改store中的audioTrack audioMetaData

      var track = store.audioTrack;

      this.currentTag = tag;
      this.data = tag.body;
      var meta = store.audioMetaData;


      if (!meta) {
        meta = store.audioMetaData = {};
        store.audioMetaData = this.initAudioMeta(meta);
      }

      var dv = new _DataView4Read2.default(tag.body.buffer, this);

      var sound = dv.getUint8();

      var soundFormatIdx = sound >>> 4; //  UInt4
      var soundRate = (sound & 12) >>> 2; //  UInt2
      // const soundSize = (sound & 2) >>> 1 //   UInt1
      var soundType = sound % 1; // UInt1

      meta.audioSampleRate = _types.soundRateTypes[soundRate];
      meta.channelCount = soundType === 0 ? 1 : 2;

      if (soundFormatIdx !== 10 && soundFormatIdx !== 2) {
        this.error('only support AAC Audio format so far');
        return;
      } else if (soundFormatIdx === 10) {
        // AAC
        var aacInfo = this._parseAACAudio();
        if (!aacInfo) {
          return;
        }

        var aacData = aacInfo.data,
            sampleFreq = aacInfo.data.sampleFreq;

        if (aacInfo.packetType === 0) {
          // AAC sequence header
          meta.sampleRate = sampleFreq;
          meta.channelCount = aacData.channelCount;
          meta.codec = aacData.codec;
          meta.manifestCodec = aacData.manifestCodec;
          meta.config = aacData.config;
          meta.refSampleDuration = 1024 / sampleFreq * meta.timeScale;
          if (store.hasInitialMetaDispatched) {
            if (store.videoTrack.length || store.audioTrack.length) {
              this.handleDataReady(store.videoTrack, store.audioTrack);
            }
          } else {
            store.state._audioInitialMetadataDispatched = true;
          }

          this.handleMetaDataReady('audio', meta);

          var mi = store.mediaInfo;

          mi.audioCodec = meta.codec;
          mi.audioSampleRate = meta.sampleRate;
          mi.audioChannelCount = meta.channelCount;
          mi.audioConfig = meta.config;
          if (mi.hasVideo) {
            if (mi.videoCodec) {
              mi.mimeType = 'video/x-flv; codecs="' + mi.videoCodec + ',' + mi.audioCodec + '"';
              mi.codec = mi.mimeType.replace('x-flv', 'mp4');
            }
          } else {
            mi.mimeType = 'video/x-flv; codecs="' + mi.audioCodec + '"';
            mi.codec = mi.mimeType.replace('x-flv', 'mp4');
          }

          if (mi.isComplete) {
            this.handleMediaInfoReady(mi);
          }
        } else if (aacInfo.packetType === 1) {
          // AAC raw frame data
          var dts = store.state.timeStampBase + this.currentTag.getTime();
          var aacSample = { unit: aacInfo.data, length: aacInfo.data.byteLength, dts: dts, pts: dts };
          track.samples.push(aacSample);
          track.length += aacInfo.data.length;
        }
      }

      this.resetStatus();
    }
  }, {
    key: '_parseAACAudio',
    value: function _parseAACAudio() {
      if (this.unreadLength <= 1) {
        return;
      }
      var aacData = {};
      var aacArray = new Uint8Array(this.data.buffer, this.readOffset, this.unreadLength);
      var packetType = aacArray[0];
      this.readOffset += 1;
      aacData.packetType = packetType;
      if (!packetType) {
        var _currentTag = this.currentTag,
            position = _currentTag.position,
            tagSize = _currentTag.tagSize;

        this._store.metaEndPosition = position + _Buffer2.default.readAsInt(tagSize) + 4;
        aacData.data = this._parseAACAudioSpecificConfig(); // AAC Sequence header
      } else {
        aacData.data = aacArray.slice(1);
      }

      return aacData;
    }
  }, {
    key: '_parseAACAudioSpecificConfig',
    value: function _parseAACAudioSpecificConfig() {
      var dv = new _DataView4Read2.default(this.data.buffer, this);
      var getAndNum = _DataView4Read2.default.getAndNum;


      var resultObj = {
        samplingFrequency: null,
        extAudioObjectType: null,
        extAudioSamplingIdx: null
      };
      var config = {};
      var UInt0 = dv.getUint8();
      var UInt1 = dv.getUint8();

      var tempAudioObjectType = void 0;
      var audioObjectType = tempAudioObjectType = UInt0 >>> 3; // UInt5
      var samplingIdx = (UInt0 & getAndNum(5, 7)) << 1 | UInt1 >>> 7; // UInt4
      if (samplingIdx < 0 || samplingIdx > _types.samplingFrequencyTypes.length) {
        this.emitError('decoder', {
          line: '141',
          handle: '_parseAACAudioSpecificConfig',
          msg: 'invalid samplingFrequencyIndex ' + samplingIdx
        });
        this.dispatch(_types.EventTypes.ERROR, 'error samplingFrequencyIndex: ' + samplingIdx);
        return;
      }

      resultObj.samplingFrequency = _types.samplingFrequencyTypes[samplingIdx];

      var channelCount = resultObj.channelCount = (UInt1 & getAndNum(1, 4)) >>> 3;
      if (channelCount < 0 || channelCount > 7) {
        this.emitError('decoder', {
          line: '154',
          handle: '_parseAACAudioSpecificConfig',
          msg: 'invalid Audio Channel Count: ' + channelCount
        });
        this.dispatch(_types.EventTypes.ERROR, 'error Audio Channel Count: ' + channelCount);
        return;
      }

      if (audioObjectType === 5) {
        // HE-AAC
        var UInt2 = dv.getUint8();
        resultObj.extAudioSamplingIdx = (UInt1 & getAndNum(5, 7)) << 1 | UInt2 >>> 7;
        resultObj.extAudioObjectType = (UInt2 & getAndNum(1, 5)) >>> 2;
      }

      if (_sniffer2.default.browser === _types.browserTypes.FIRE_FOX) {
        if (samplingIdx >= 6) {
          // HE-AAC uses SBR, high frequencies are constructed from low frequencies
          audioObjectType = 5;
          config = new Array(4);
          resultObj.extAudioSamplingIdx = samplingIdx - 3;
        } else {
          audioObjectType = 2;
          config = new Array(2);
          resultObj.extAudioSamplingIdx = samplingIdx;
        }
      } else if (_sniffer2.default.os.isAndroid) {
        // Android : always use AAC
        audioObjectType = 2;
        config = new Array(2);
        resultObj.extAudioSamplingIdx = samplingIdx;
      } else {
        /*  for other browsers (Chrome/Vivaldi/Opera ...)
                  always force audio type to be HE-AAC SBR, as some browsers do not support audio codec switch properly (like Chrome ...)
              */
        audioObjectType = 5;
        resultObj.extensionSamplingIndex = samplingIdx;
        config = new Array(4);

        if (samplingIdx >= 6) {
          resultObj.extensionSamplingIdx = samplingIdx - 3;
        } else if (channelCount === 1) {
          audioObjectType = 2;
          config = new Array(2);
          resultObj.extensionSamplingIndex = samplingIdx;
        }
      }

      config[0] = audioObjectType << 3;
      config[0] |= (samplingIdx & 0x0E) >> 1;
      config[1] |= (samplingIdx & 0x01) << 7;
      config[1] |= channelCount << 3;
      if (audioObjectType === 5) {
        config[1] |= (resultObj.extAudioSamplingIdx & 0x0E) >> 1;
        config[2] = (resultObj.extensionSamplingIdx & 0x01) << 7;
        // adtsObjectType (force to 2, chrome is checking that object type is less than 5 ???
        //    https://chromium.googlesource.com/chromium/src.git/+/master/media/formats/mp4/aac.cc
        config[2] |= 2 << 2;
        config[3] = 0;
      }

      return {
        config: config,
        sampleFreq: resultObj.samplingFrequency,
        channelCount: channelCount,
        codec: 'mp4a.40.' + audioObjectType,
        manifestCodec: 'mp4a.40.' + tempAudioObjectType
      };
    }
  }, {
    key: 'initAudioMeta',
    value: function initAudioMeta(meta) {
      var _store = this._store,
          state = _store.state,
          track = _store.audioTrack;


      meta.duration = state.duration;
      meta.timeScale = state.timeScale;
      meta.type = 'audio';
      meta.id = track.id;

      return meta;
    }
  }, {
    key: 'resetStatus',
    value: function resetStatus() {
      this.currentTag = null;
      this.data = new Uint8Array(0);
      this.readOffset = 0;
    }
  }, {
    key: 'dataSize',
    get: function get() {
      return this.data.length;
    }
  }, {
    key: 'unreadLength',
    get: function get() {
      return this.dataSize - this.readOffset;
    }
  }]);

  return AudioDemuxer;
}(_Demuxer3.default);

exports.default = AudioDemuxer;

/***/ }),

/***/ "./src/parse/demux/Demuxer.js":
/*!************************************!*\
  !*** ./src/parse/demux/Demuxer.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ../../utils/Log */ "./src/utils/Log.js");

var _Log2 = _interopRequireDefault(_Log);

var _TransCoder2 = __webpack_require__(/*! ../TransCoder */ "./src/parse/TransCoder.js");

var _TransCoder3 = _interopRequireDefault(_TransCoder2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Demuxer = function (_TransCoder) {
  _inherits(Demuxer, _TransCoder);

  function Demuxer() {
    _classCallCheck(this, Demuxer);

    return _possibleConstructorReturn(this, (Demuxer.__proto__ || Object.getPrototypeOf(Demuxer)).apply(this, arguments));
  }

  _createClass(Demuxer, [{
    key: 'dispatch',
    value: function dispatch(type) {
      var _observer;

      var prefix = 'demuxer_';

      for (var _len = arguments.length, payload = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        payload[_key - 1] = arguments[_key];
      }

      (_observer = this._observer).emit.apply(_observer, ['' + prefix + type].concat(payload));
    }
  }, {
    key: 'error',
    value: function error(message) {
      var _CLASS_NAME = this.CLASS_NAME,
          CLASS_NAME = _CLASS_NAME === undefined ? 'Demuxer' : _CLASS_NAME;

      _Log2.default.error('[' + CLASS_NAME + ' error] ', message);
    }
  }, {
    key: 'info',
    value: function info(message) {
      var _CLASS_NAME2 = this.CLASS_NAME,
          CLASS_NAME = _CLASS_NAME2 === undefined ? 'Demuxer' : _CLASS_NAME2;

      _Log2.default.info('[' + CLASS_NAME + ' info] ', message);
    }
  }, {
    key: 'log',
    value: function log(message) {
      var _CLASS_NAME3 = this.CLASS_NAME,
          CLASS_NAME = _CLASS_NAME3 === undefined ? 'Demuxer' : _CLASS_NAME3;

      _Log2.default.log('[' + CLASS_NAME + ' log] ', message);
    }
  }, {
    key: 'warn',
    value: function warn(message) {
      var _CLASS_NAME4 = this.CLASS_NAME,
          CLASS_NAME = _CLASS_NAME4 === undefined ? 'Demuxer' : _CLASS_NAME4;

      _Log2.default.warn('[' + CLASS_NAME + ' warn] ', message);
    }
  }]);

  return Demuxer;
}(_TransCoder3.default);

exports.default = Demuxer;

/***/ }),

/***/ "./src/parse/demux/MetaDemuxer.js":
/*!****************************************!*\
  !*** ./src/parse/demux/MetaDemuxer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _types = __webpack_require__(/*! ../../constants/types */ "./src/constants/types.js");

var _UTF = __webpack_require__(/*! ../../utils/UTF8 */ "./src/utils/UTF8.js");

var _UTF2 = _interopRequireDefault(_UTF);

var _Demuxer2 = __webpack_require__(/*! ./Demuxer */ "./src/parse/demux/Demuxer.js");

var _Demuxer3 = _interopRequireDefault(_Demuxer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * meta信息解析
 */
var MetaDemuxer = function (_Demuxer) {
    _inherits(MetaDemuxer, _Demuxer);

    function MetaDemuxer(store) {
        _classCallCheck(this, MetaDemuxer);

        var _this = _possibleConstructorReturn(this, (MetaDemuxer.__proto__ || Object.getPrototypeOf(MetaDemuxer)).call(this, store));

        _this.offset = 0;
        _this.readOffset = _this.offset;
        return _this;
    }

    _createClass(MetaDemuxer, [{
        key: 'resolve',
        value: function resolve(meta, size) {
            if (size < 3) {
                throw 'not enough data for metainfo';
            }
            var metaData = {};
            var name = this.parseValue(meta);
            var value = this.parseValue(meta, size - name.bodySize);
            metaData[name.data] = value.data;

            this.resetStatus();
            return metaData;
        }
    }, {
        key: 'resetStatus',
        value: function resetStatus() {
            this.offset = 0;
            this.readOffset = this.offset;
        }
    }, {
        key: 'parseString',
        value: function parseString(buffer) {
            var dv = new DataView(buffer, this.readOffset);
            var strLen = dv.getUint16(0, !this.isLe);
            var str = '';
            if (strLen > 0) {
                str = _UTF2.default.decode(new Uint8Array(buffer, this.readOffset + 2, strLen));
            } else {
                str = '';
            }
            var size = strLen + 2;
            this.readOffset += size;
            return {
                data: str,
                bodySize: strLen + 2
            };
        }
    }, {
        key: 'parseDate',
        value: function parseDate(buffer, size) {
            var isLe = this.isLe;

            var dv = new DataView(buffer, this.readOffset, size);
            var ts = dv.getFloat64(0, !isLe);
            var timeOffset = dv.getInt16(8, !isLe);
            ts += timeOffset * 60 * 1000;

            this.readOffset += 10;
            return {
                data: new Date(ts),
                bodySize: 10
            };
        }
    }, {
        key: 'parseObject',
        value: function parseObject(buffer, size) {
            var name = this.parseString(buffer, size);
            var value = this.parseValue(buffer, size - name.bodySize);
            return {
                data: {
                    name: name.data,
                    value: value.data
                },
                bodySize: name.bodySize + value.bodySize,
                isObjEnd: value.isObjEnd
            };
        }
    }, {
        key: 'parseLongString',
        value: function parseLongString(buffer) {
            var dv = new DataView(buffer, this.readOffset);
            var strLen = dv.getUint32(0, !this.isLe);
            var str = '';
            if (strLen > 0) {
                str = _UTF2.default.decode(new Uint8Array(buffer, this.readOffset + 2, strLen));
            } else {
                str = '';
            }
            // const size = strLen + 4;
            this.readOffset += strLen + 4;
            return {
                data: str,
                bodySize: strLen + 4
            };
        }

        /**
         * 解析meta中的变量
         */

    }, {
        key: 'parseValue',
        value: function parseValue(data, size) {
            var buffer = new ArrayBuffer();
            if (data instanceof ArrayBuffer) {
                buffer = data;
            } else {
                buffer = data.buffer;
            }
            var isLe = this.isLe;
            var NUMBER = _types.MetaTypes.NUMBER,
                BOOLEAN = _types.MetaTypes.BOOLEAN,
                STRING = _types.MetaTypes.STRING,
                OBJECT = _types.MetaTypes.OBJECT,
                MIX_ARRAY = _types.MetaTypes.MIX_ARRAY,
                OBJECT_END = _types.MetaTypes.OBJECT_END,
                STRICT_ARRAY = _types.MetaTypes.STRICT_ARRAY,
                DATE = _types.MetaTypes.DATE,
                LONE_STRING = _types.MetaTypes.LONE_STRING;

            var dataView = new DataView(buffer, this.readOffset, size);
            var isObjEnd = false;
            var type = dataView.getUint8(0);
            var offset = 1;
            this.readOffset += 1;
            var value = null;

            switch (type) {
                case NUMBER:
                    {
                        value = dataView.getFloat64(1, !isLe);
                        this.readOffset += 8;
                        offset += 8;
                        break;
                    }
                case BOOLEAN:
                    {
                        var boolNum = dataView.getUint8(1);
                        value = !!boolNum;
                        this.readOffset += 1;
                        offset += 1;
                        break;
                    }
                case STRING:
                    {
                        var str = this.parseString(buffer);
                        value = str.data;
                        offset += str.bodySize;
                        break;
                    }
                case OBJECT:
                    {
                        value = {};
                        var objEndSize = 0;
                        if (dataView.getUint32(size - 4, !isLe) & 0x00FFFFFF) {
                            objEndSize = 3;
                        }
                        // this.readOffset += offset - 1;
                        while (offset < size - 4) {

                            var amfObj = this.parseObject(buffer, size - offset - objEndSize);
                            if (amfObj.isObjectEnd) {
                                break;
                            }
                            value[amfObj.data.name] = amfObj.data.value;
                            offset += amfObj.bodySize;
                        }
                        if (offset <= size - 3) {
                            var mark = dataView.getUint32(offset - 1, !isLe) & 0x00FFFFFF;
                            if (mark === 9) {
                                this.readOffset += 3;
                                offset += 3;
                            }
                        }
                        break;
                    }
                case MIX_ARRAY:
                    {
                        value = {};
                        offset += 4;
                        this.readOffset += 4;
                        var _objEndSize = 0;
                        if ((dataView.getUint32(size - 4, !isLe) & 0x00FFFFFF) === 9) {
                            _objEndSize = 3;
                        }

                        while (offset < size - 8) {
                            var amfVar = this.parseObject(buffer, size - offset - _objEndSize);
                            if (amfVar.isObjectEnd) {
                                break;
                            }
                            value[amfVar.data.name] = amfVar.data.value;
                            offset += amfVar.bodySize;
                        }
                        if (offset <= size - 3) {
                            var marker = dataView.getUint32(offset - 1, !isLe) & 0x00FFFFFF;
                            if (marker === 9) {
                                offset += 3;
                                this.readOffset += 3;
                            }
                        }
                        break;
                    }

                case OBJECT_END:
                    {
                        value = null;
                        isObjEnd = true;
                        break;
                    }

                case STRICT_ARRAY:
                    {
                        value = [];
                        var arrLength = dataView.getUint32(1, !isLe);
                        offset += 4;
                        this.readOffset += 4;
                        for (var i = 0; i < arrLength; i++) {

                            var script = this.parseValue(buffer, size - offset);
                            value.push(script.data);
                            offset += script.bodySize;
                        }
                        break;
                    }

                case DATE:
                    {
                        var date = this.parseDate(buffer, size - 1);
                        value = date.data;
                        offset += date.bodySize;
                        break;
                    }

                case LONE_STRING:
                    {
                        var longStr = this.parseLongString(buffer, size - 1);
                        value = longStr.data;
                        offset += longStr.bodySize;
                        break;
                    }

                default:
                    {
                        offset = size;
                    }
            }

            return {
                data: value,
                bodySize: offset,
                isObjEnd: isObjEnd
            };
        }
    }, {
        key: 'isLe',
        get: function get() {
            return this._store.isLe;
        }
    }]);

    return MetaDemuxer;
}(_Demuxer3.default);

exports.default = MetaDemuxer;

/***/ }),

/***/ "./src/parse/demux/TagDemuxer.js":
/*!***************************************!*\
  !*** ./src/parse/demux/TagDemuxer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Demuxer2 = __webpack_require__(/*! ./Demuxer */ "./src/parse/demux/Demuxer.js");

var _Demuxer3 = _interopRequireDefault(_Demuxer2);

var _MetaDemuxer = __webpack_require__(/*! ./MetaDemuxer */ "./src/parse/demux/MetaDemuxer.js");

var _MetaDemuxer2 = _interopRequireDefault(_MetaDemuxer);

var _VideoDemuxer = __webpack_require__(/*! ./VideoDemuxer */ "./src/parse/demux/VideoDemuxer.js");

var _VideoDemuxer2 = _interopRequireDefault(_VideoDemuxer);

var _AudioDemuxer = __webpack_require__(/*! ./AudioDemuxer */ "./src/parse/demux/AudioDemuxer.js");

var _AudioDemuxer2 = _interopRequireDefault(_AudioDemuxer);

var _Log = __webpack_require__(/*! ../../utils/Log */ "./src/utils/Log.js");

var _Log2 = _interopRequireDefault(_Log);

var _metaFields = __webpack_require__(/*! ../../constants/metaFields */ "./src/constants/metaFields.js");

var _metaFields2 = _interopRequireDefault(_metaFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var nativeHasProp = Object.prototype.hasOwnProperty;

var Tagdemux = function (_Demuxer) {
  _inherits(Tagdemux, _Demuxer);

  function Tagdemux(store) {
    _classCallCheck(this, Tagdemux);

    var _this = _possibleConstructorReturn(this, (Tagdemux.__proto__ || Object.getPrototypeOf(Tagdemux)).call(this, store));

    _this.CLASS_NAME = _this.constructor.name;
    _this._metaDemuxer = new _MetaDemuxer2.default(store);
    _this._videoDemuxer = new _VideoDemuxer2.default(store);
    _this._audioDemuxer = new _AudioDemuxer2.default(store);
    _this._firstParse = true;
    _this._dataOffset = 0;
    _this.handleMediaInfoReady = function () {};
    _this.handleDataReady = function () {};
    _this.handleMetaDataReady = function () {};
    return _this;
  }

  _createClass(Tagdemux, [{
    key: 'setEventBind',
    value: function setEventBind() {
      this._videoDemuxer.handleDataReady = this.handleDataReady;
      this._videoDemuxer.handleMetaDataReady = this.handleMetaDataReady;
      this._videoDemuxer.handleMediaInfoReady = this.handleMediaInfoReady;
      this._audioDemuxer.handleDataReady = this.handleDataReady;
      this._audioDemuxer.handleMetaDataReady = this.handleMetaDataReady;
      this._audioDemuxer.handleMediaInfoReady = this.handleMediaInfoReady;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this._metaDemuxer = null;
      this._videoDemuxer = null;
      this._audioDemuxer = null;
    }
  }, {
    key: 'resolveTags',
    value: function resolveTags() {
      var _this2 = this;

      var tags = this._store.state.tags;
      var store = this._store;
      var videoTrack = store.videoTrack,
          audioTrack = store.audioTrack;


      tags.forEach(function (tag) {
        _this2.resolveTag(tag);
      });

      if (this._store.hasInitialMetaDispatched) {
        if (videoTrack.length || audioTrack.length) {
          this.handleDataReady(audioTrack, videoTrack);
        }
      }

      this._store.state.tags = [];
    }
  }, {
    key: 'resolveTag',
    value: function resolveTag(tag) {
      switch (String(tag.tagType)) {
        case '8':
          // audio
          this._resolveAudioTag(tag);
          break;
        case '9':
          // video
          this._resolveVideoTag(tag);
          break;
        case '18':
          // metadata
          this._resolveMetaTag(tag);
          break;
      }
    }
  }, {
    key: '_resolveAudioTag',
    value: function _resolveAudioTag(tag) {
      if (tag.bodySize <= 1) {
        this.warn('Not enough data for audio tag body');
      }
      this._audioDemuxer.resolve(tag);
    }
  }, {
    key: '_resolveVideoTag',
    value: function _resolveVideoTag(tag) {
      if (tag.bodySize <= 1) {
        this.error('Not enough data for video tag body');
        return;
      }
      var _hasVideo = this._hasVideo,
          hasVideoFlagOverrided = this.hasVideoFlagOverrided;

      if (hasVideoFlagOverrided && !_hasVideo) {
        return;
      }

      this._videoDemuxer.resolve(tag);
    }
  }, {
    key: '_initMetaData',
    value: function _initMetaData(metaData) {
      var _this3 = this;

      var s = this._store;

      if (nativeHasProp.call(metaData, 'onMetaData')) {
        if (s.hasMetaData) {
          _Log2.default.log('[' + this.CLASS_NAME + ']', 'found another meta tag');
        }
        s.metaData = metaData;
        var onMetaData = metaData.onMetaData;

        _metaFields2.default.forEach(function (field) {
          var name = field.name,
              type = field.type,
              parser = field.parser,
              onTypeErr = field.onTypeErr;

          if (Object(onMetaData[name]) instanceof type) {
            parser.call(_this3, s, onMetaData);
          } else {
            if (onTypeErr && onTypeErr instanceof Function) {
              onTypeErr(s, onMetaData);
            }
          }
        });

        this._store.mediaInfo._metaData = metaData;
        // 同步到共享store
        if (this._store.mediaInfo.isComplete) {
          this.handleMediaInfoReady(this._store.mediaInfo);
        }
      }
    }
  }, {
    key: '_resolveMetaTag',
    value: function _resolveMetaTag(tag) {
      var body = tag.body;

      var metaObj = this._metaDemuxer.resolve(body, body.length);
      this._initMetaData(metaObj);
    }
  }, {
    key: '_parseKeyframes',
    value: function _parseKeyframes(keyframes) {
      var times = [];
      var filePositions = [];
      var _store = this._store,
          videoTimeScale = _store.videoTimeScale,
          state = _store.state;

      for (var i = 1; i < keyframes.times.length; i++) {
        times[times.length] = state.timeStampBase + Math.floor(keyframes.times[i] * videoTimeScale);
        filePositions[filePositions.length] = keyframes.filepositions[i];
      }

      return {
        times: times,
        filePositions: filePositions
      };
    }
  }]);

  return Tagdemux;
}(_Demuxer3.default);

exports.default = Tagdemux;

/***/ }),

/***/ "./src/parse/demux/VideoDemuxer.js":
/*!*****************************************!*\
  !*** ./src/parse/demux/VideoDemuxer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Demuxer2 = __webpack_require__(/*! ./Demuxer */ "./src/parse/demux/Demuxer.js");

var _Demuxer3 = _interopRequireDefault(_Demuxer2);

var _SPSParser = __webpack_require__(/*! ../SPSParser */ "./src/parse/SPSParser.js");

var _SPSParser2 = _interopRequireDefault(_SPSParser);

var _DataView4Read = __webpack_require__(/*! ../../utils/DataView4Read */ "./src/utils/DataView4Read.js");

var _DataView4Read2 = _interopRequireDefault(_DataView4Read);

var _types = __webpack_require__(/*! ../../constants/types */ "./src/constants/types.js");

var _Buffer = __webpack_require__(/*! ../../write/Buffer */ "./src/write/Buffer.js");

var _Buffer2 = _interopRequireDefault(_Buffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoDemuxer = function (_Demuxer) {
  _inherits(VideoDemuxer, _Demuxer);

  function VideoDemuxer(store) {
    _classCallCheck(this, VideoDemuxer);

    var _this = _possibleConstructorReturn(this, (VideoDemuxer.__proto__ || Object.getPrototypeOf(VideoDemuxer)).call(this, store));

    _this.CLASS_NAME = _this.constructor.name;
    _this.readOffset = 0;
    _this.data = new Uint8Array(0);
    _this.currentTag = null;
    _this._store.videoMetaData = null;
    return _this;
  }

  _createClass(VideoDemuxer, [{
    key: 'resetStatus',
    value: function resetStatus() {
      this.readOffset = 0;
      this.data = new Uint8Array(0);
      this.currentTag = null;
    }
  }, {
    key: 'resolve',
    value: function resolve(tag) {
      this.data = tag.body;
      this.currentTag = tag;
      var firstUI8 = this.readData(1)[0];
      var frameType = (firstUI8 & 0xF0) >>> 4;
      var codecId = firstUI8 & 0x0F;
      if (codecId !== 7) {
        /** 1: JPEG
              * 2: H263
              * 3: Screen video
              * 4: On2 VP6
              * 5: On2 VP6
              * 6: Screen videoversion 2
              * 7: AVC
              */
        this.error('unsupported codecId: ' + codecId);
        return;
      }
      this._parseAVCPacket(frameType);

      this.resetStatus();
    }
  }, {
    key: '_parseAVCPacket',
    value: function _parseAVCPacket(frameType) {
      if (this.unreadLength < 4) {
        this.error('Invalid Avc Tag');
      }
      var isLe = this._store.isLe;
      var buffer = this.data.buffer;

      var dv = new DataView(buffer, this.readOffset, this.unreadLength);
      var packageType = dv.getUint8(0);

      var cpsTime = dv.getUint32(0, !isLe) & 0x00FFFFFF;
      cpsTime = cpsTime << 8 >> 8;
      this.readOffset += 4;

      switch (packageType) {
        case 0:
          {
            var _currentTag = this.currentTag,
                position = _currentTag.position,
                tagSize = _currentTag.tagSize;


            this._store.metaEndPosition = position + _Buffer2.default.readAsInt(tagSize) + 4; // 缓存scriptTag结束的位置，replay使用
            this._parseAVCDecoderConfigurationRecord();
            break;
          }
        case 1:
          {
            this._parseAVCVideoData(frameType, cpsTime);
            break;
          }
        case 2:
          {
            break;
          }
        default:
          {
            // 报错
          }
      }
    }
  }, {
    key: '_parseAVCDecoderConfigurationRecord',
    value: function _parseAVCDecoderConfigurationRecord() {
      if (this.unreadLength < 7) {
        this.error('Invalid AVCDecoderConfigurationRecord, lack of data!');
        return;
      }

      var mi = this._store.mediaInfo;
      // stash offset&unreadSize before parsing sps&pps
      // const tempOffset = this.readOffset
      // const tempUnreadLength = this.unreadLength

      var store = this._store;

      var meta = this._store.videoMetaData;
      var track = this._store.videoTrack;
      var dv = new _DataView4Read2.default(this.data.buffer, this);
      if (meta) {
        if (meta.avcc !== undefined) {
          this.error('found another AVCDecoderConfigurationRecord!');
        }
      } else {
        if (!store.state._hasVideo && !store.state.hasVideoFlagOverrided) {
          store.state._hasVideo = true;
          store._mediaInfo.hasVideo = true;
        }
        meta = store.videoMetaData = {};
        meta.type = 'video';
        meta.id = track.id;
        meta.timeScale = store.videoTimeScale;
        meta.duration = store.state.duration;
        mi.timescale = store.videoTimeScale;
      }

      var version = dv.getUint8();
      var avcProfile = dv.getUint8();
      dv.getUint8();
      dv.getUint8();
      if (version !== 1 || avcProfile === 0) {
        // 处理错误
        return;
      }

      var naluLengthSize = store.state.naluLengthSize = dv.getUint(2, this.readOffset, false) + 1;
      if (naluLengthSize !== 3 && naluLengthSize !== 4) {
        // 处理错误
        return;
      }

      var spsLength = dv.getUint(5, null, false);
      if (spsLength === 0) {
        this.emitError('decoder', {
          line: 128,
          handler: '_parseAVCDecoderConfigurationRecord',
          msg: 'no sps in this video'
        });
        // 处理错误
        return;
      } else if (spsLength > 1) {
        this.emitError('decoder', {
          line: 132,
          handler: '_parseAVCDecoderConfigurationRecord',
          msg: 'spsLength > 1'
        });
        this.warn('AVCDecoderConfigurationRecord: spsLength > 1');
      }
      var sps = void 0;
      for (var i = 0; i < spsLength; i++) {
        var len = dv.getUint16();

        if (len === 0) {
          continue;
        }
        sps = new Uint8Array(this.data.buffer, this.readOffset, len);
        this.readOffset += len;
        var spsConfig = _SPSParser2.default.parseSPS(sps);

        if (i !== 0) {
          continue;
        }

        var codecSize = spsConfig.codecSize,
            presentSize = spsConfig.presentSize,
            profileString = spsConfig.profileString,
            levelString = spsConfig.levelString,
            chromaFormat = spsConfig.chromaFormat,
            pixelRatio = spsConfig.pixelRatio,
            frameRate = spsConfig.frameRate,
            refFrames = spsConfig.refFrames,
            bitDepth = spsConfig.bitDepth;


        meta.width = codecSize.width;
        meta.height = codecSize.height;
        meta.presentWidth = presentSize.width;
        meta.presentHeight = presentSize.height;

        meta.profile = profileString;
        meta.level = levelString;
        // meta.profileCompatibility = profileCompatibility;
        // meta.naluLengthSize = naluLengthSize;

        meta.bitDepth = bitDepth;
        meta.chromaFormat = chromaFormat;
        meta.pixelRatio = pixelRatio;
        meta.frameRate = frameRate;

        if (!frameRate.fixed || frameRate.fpsNum === 0 || frameRate.fpsDen === 0) {
          meta.frameRate = store.referFrameRate;
        }

        var _meta$frameRate = meta.frameRate,
            fpsDen = _meta$frameRate.fpsDen,
            fpsNum = _meta$frameRate.fpsNum;

        meta.refSampleDuration = meta.timeScale * (fpsDen / fpsNum);

        var codecArr = sps.subarray(1, 4);
        var codecStr = 'avc1.';
        for (var j = 0; j < 3; j++) {
          var hex = codecArr[j].toString(16);
          hex = hex.padStart(2, '0');
          codecStr += hex;
        }

        meta.codec = codecStr;

        var _mi = this._store.mediaInfo;

        _mi.width = meta.width;
        _mi.height = meta.height;
        _mi.fps = meta.frameRate.fps;
        _mi.profile = meta.profile;
        _mi.level = meta.level;
        _mi.refFrames = refFrames;
        _mi.pixelRatio = pixelRatio;
        _mi.videoCodec = codecStr;
        _mi.chromaFormat = chromaFormat;
        if (_mi.hasAudio) {
          if (_mi.audioCodec) {
            _mi.mimeType = 'video/x-flv; codecs="' + _mi.videoCodec + ',' + _mi.audioCodec + '"';
            _mi.codec = _mi.mimeType.replace('x-flv', 'mp4');
          }
        } else {
          _mi.mimeType = 'video/x-flv; codecs="' + _mi.videoCodec + '"';
          _mi.codec = _mi.mimeType.replace('x-flv', 'mp4');
        }
      }
      var pps = void 0;
      var ppsCount = dv.getUint8();
      if (!ppsCount) {
        this.emitError('decoder', {
          line: 227,
          handler: '_parseAVCDecoderConfigurationRecord',
          msg: 'no pps in this video'
        });
        this.dispatch(_types.EventTypes.ERROR, 'no pps in this video');
        return;
      } else if (ppsCount > 1) {
        this.warn('AVCDecoderConfigurationRecord has ppsCount: ' + ppsCount);
      }

      for (var _i = 0; _i < ppsCount; _i++) {
        var ppsSize = dv.getUint16();

        if (!ppsSize) {
          continue;
        }

        pps = new Uint8Array(this.data.buffer, this.readOffset, ppsSize);
        this.readOffset += ppsSize;
      }

      mi.sps = meta.sps = sps;
      mi.pps = meta.pps = pps;

      if (mi.isComplete) {
        this.handleMediaInfoReady(mi);
      }
      if (store.hasInitialMetaDispatched) {
        if (store.videoTrack.length || store.audioTrack.length) {
          this.handleDataReady(store.videoTrack, store.audioTrack);
        }
      } else {
        store.state._videoInitialMetadataDispatched = true;
      }

      this.handleMetaDataReady('video', meta);
    }
  }, {
    key: '_parseAVCVideoData',
    value: function _parseAVCVideoData(frameType, cpsTime) {
      var dv = new _DataView4Read2.default(this.data.buffer, this);

      var naluList = [];
      var dataLen = 0;
      var naluLenSize = this._store.state.naluLengthSize;

      var ts = this._store.state.timeStampBase + this.currentTag.getTime();
      var isKeyframe = frameType === 1;
      while (this.unreadLength > 0) {
        if (this.unreadLength < 4) {
          this.warn('not enough data for parsing AVC');
          break;
        }
        var tempReadOffset = this.readOffset;
        var naluSize = naluLenSize === 4 ? dv.getUint32() : dv.getUint24();
        if (naluSize > this.unreadLength) {
          return;
        }

        var unitType = dv.getUint(5, this.readOffset, false);

        if (unitType === 5) {
          isKeyframe = true;
        }

        var data = new Uint8Array(this.data.buffer, tempReadOffset, naluLenSize + naluSize);
        this.readOffset = tempReadOffset + naluLenSize + naluSize;
        var naluUnit = {
          type: unitType,
          data: data
        };
        naluList.push(naluUnit);
        dataLen += data.byteLength;
      }
      dv = null;
      if (naluList.length) {
        var videoTrack = this._store.videoTrack;

        var videoSample = {
          units: naluList,
          length: dataLen,
          dts: ts,
          cps: cpsTime,
          pts: ts + cpsTime,
          isKeyframe: isKeyframe,
          position: isKeyframe ? this.currentTag.position : undefined
        };
        videoTrack.samples.push(videoSample);
        videoTrack.length += dataLen;
      }
    }
  }, {
    key: 'readData',
    value: function readData(num) {
      var data = this.data,
          readOffset = this.readOffset;

      if (this.dataSize > readOffset + num) {
        this.readOffset += num;
        return data.slice(readOffset, num);
      }
      return [];
    }
  }, {
    key: 'dataSize',
    get: function get() {
      return this.data.length;
    }
  }, {
    key: 'unreadLength',
    get: function get() {
      return this.dataSize - this.readOffset;
    }
  }]);

  return VideoDemuxer;
}(_Demuxer3.default);

exports.default = VideoDemuxer;

/***/ }),

/***/ "./src/parse/remux/Fmp4.js":
/*!*********************************!*\
  !*** ./src/parse/remux/Fmp4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// const UINT32_MAX = Math.pow(2, 32) - 1;


var _Buffer = __webpack_require__(/*! ../../write/Buffer */ "./src/write/Buffer.js");

var _Buffer2 = _interopRequireDefault(_Buffer);

var _funcUtils = __webpack_require__(/*! ../../utils/funcUtils */ "./src/utils/funcUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FMP4 = function () {
  function FMP4() {
    _classCallCheck(this, FMP4);
  }

  _createClass(FMP4, null, [{
    key: 'size',
    value: function size(value) {
      return _Buffer2.default.writeUint32(value);
    }
  }, {
    key: 'initBox',
    value: function initBox(size, name) {
      var buffer = new _Buffer2.default();

      for (var _len = arguments.length, content = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        content[_key - 2] = arguments[_key];
      }

      buffer.write.apply(buffer, [FMP4.size(size), FMP4.type(name)].concat(content));
      return buffer.buffer;
    }
  }, {
    key: 'extension',
    value: function extension(version, flag) {
      return new Uint8Array([version, flag >> 16 & 0xff, flag >> 8 & 0xff, flag & 0xff]);
    }
  }, {
    key: 'ftyp',
    value: function ftyp() {
      return FMP4.initBox(24, 'ftyp', new Uint8Array([0x69, 0x73, 0x6F, 0x6D, // isom,
      0x0, 0x0, 0x00, 0x01, // minor_version: 0x01
      0x69, 0x73, 0x6F, 0x6D, // isom
      0x61, 0x76, 0x63, 0x31 // avc1
      ]));
    }
  }, {
    key: 'moov',
    value: function moov(data) {
      var size = 8;
      var mvhd = FMP4.mvhd(data.duration, data.timescale);
      var trak1 = FMP4.videoTrak(data);
      var trak2 = FMP4.audioTrak(data);
      var mvex = FMP4.mvex(data.duration, data.timescale);
      [mvhd, trak1, trak2, mvex].forEach(function (item) {
        size += item.byteLength;
      });
      return FMP4.initBox(size, 'moov', mvhd, trak1, trak2, mvex);
    }
  }, {
    key: 'mvhd',
    value: function mvhd(duration, timeScale) {
      var timescale = timeScale || 1000;
      // duration *= timescale;
      var bytes = new Uint8Array([0x00, 0x00, 0x00, 0x00, // version(0) + flags     1位的box版本+3位flags   box版本，0或1，一般为0。（以下字节数均按version=0）
      0x00, 0x00, 0x00, 0x00, // creation_time    创建时间  （相对于UTC时间1904-01-01零点的秒数）
      0x00, 0x00, 0x00, 0x00, // modification_time   修改时间

      /**
             * timescale: 4 bytes文件媒体在1秒时间内的刻度值，可以理解为1秒长度
             */
      timescale >>> 24 & 0xFF, timescale >>> 16 & 0xFF, timescale >>> 8 & 0xFF, timescale & 0xFF,

      /**
             * duration: 4 bytes该track的时间长度，用duration和time scale值可以计算track时长，比如audio track的time scale = 8000,
             * duration = 560128，时长为70.016，video track的time scale = 600, duration = 42000，时长为70
             */
      duration >>> 24 & 0xFF, duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, 0x00, 0x01, 0x00, 0x00, // Preferred rate: 1.0   推荐播放速率，高16位和低16位分别为小数点整数部分和小数部分，即[16.16] 格式，该值为1.0（0x00010000）表示正常前向播放
      /**
             * PreferredVolume(1.0, 2bytes) + reserved(2bytes)
             * 与rate类似，[8.8] 格式，1.0（0x0100）表示最大音量
             */
      0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, //  reserved: 4 + 4 bytes保留位
      0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, // ----begin composition matrix----
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // 视频变换矩阵   线性代数
      0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00, // ----end composition matrix----
      0x00, 0x00, 0x00, 0x00, // ----begin pre_defined 6 * 4 bytes----
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // pre-defined 保留位
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // ----end pre_defined 6 * 4 bytes----
      0xFF, 0xFF, 0xFF, 0xFF // next_track_ID 下一个track使用的id号
      ]);
      return FMP4.initBox(8 + bytes.length, 'mvhd', new Uint8Array(bytes));
    }
  }, {
    key: 'videoTrak',
    value: function videoTrak(data) {
      var size = 8;
      var tkhd = FMP4.tkhd({
        id: 1,
        duration: data.duration,
        timescale: data.timescale,
        width: data.width,
        height: data.height,
        type: 'video'
      });
      var mdia = FMP4.mdia({
        type: 'video',
        timescale: data.timescale,
        duration: data.duration,
        sps: data.sps,
        pps: data.pps,
        pixelRatio: data.pixelRatio,
        width: data.width,
        height: data.height
      });
      [tkhd, mdia].forEach(function (item) {
        size += item.byteLength;
      });
      return FMP4.initBox(size, 'trak', tkhd, mdia);
    }
  }, {
    key: 'audioTrak',
    value: function audioTrak(data) {
      var size = 8;
      var tkhd = FMP4.tkhd({
        id: 2,
        duration: data.duration,
        timescale: data.timescale,
        width: 0,
        height: 0,
        type: 'audio'
      });
      var mdia = FMP4.mdia({
        type: 'audio',
        timescale: data.timescale,
        duration: data.duration,
        channelCount: data.audioChannelCount,
        samplerate: data.audioSampleRate,
        config: data.audioConfig
      });
      [tkhd, mdia].forEach(function (item) {
        size += item.byteLength;
      });
      return FMP4.initBox(size, 'trak', tkhd, mdia);
    }
  }, {
    key: 'tkhd',
    value: function tkhd(data) {
      var id = data.id;
      var duration = data.duration;
      var width = data.width;
      var height = data.height;
      var content = new Uint8Array([0x00, 0x00, 0x00, 0x07, // version(0) + flags 1位版本 box版本，0或1，一般为0。（以下字节数均按version=0）按位或操作结果值，预定义如下：
      // 0x000001 track_enabled，否则该track不被播放；
      // 0x000002 track_in_movie，表示该track在播放中被引用；
      // 0x000004 track_in_preview，表示该track在预览时被引用。
      // 一般该值为7，1+2+4 如果一个媒体所有track均未设置track_in_movie和track_in_preview，将被理解为所有track均设置了这两项；对于hint track，该值为0
      // hint track 这个特殊的track并不包含媒体数据，而是包含了一些将其他数据track打包成流媒体的指示信息。
      0x00, 0x00, 0x00, 0x00, // creation_time创建时间（相对于UTC时间1904-01-01零点的秒数）
      0x00, 0x00, 0x00, 0x00, // modification time 修改时间
      id >>> 24 & 0xFF, // track_ID: 4 bytes id号，不能重复且不能为0
      id >>> 16 & 0xFF, id >>> 8 & 0xFF, id & 0xFF, 0x00, 0x00, 0x00, 0x00, // reserved: 4 bytes    保留位
      duration >>> 24 & 0xFF, // duration: 4 bytes track的时间长度
      duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, 0x00, 0x00, 0x00, 0x00, // reserved: 2 * 4 bytes    保留位
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // layer(2bytes) + alternate_group(2bytes)  视频层，默认为0，值小的在上层.track分组信息，默认为0表示该track未与其他track有群组关系
      0x00, 0x00, 0x00, 0x00, // volume(2bytes) + reserved(2bytes)    [8.8] 格式，如果为音频track，1.0（0x0100）表示最大音量；否则为0   +保留位
      0x00, 0x01, 0x00, 0x00, // ----begin composition matrix----
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, // 视频变换矩阵
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00, // ----end composition matrix----
      width >>> 8 & 0xFF, // //宽度
      width & 0xFF, 0x00, 0x00, height >>> 8 & 0xFF, // 高度
      height & 0xFF, 0x00, 0x00]);
      return FMP4.initBox(8 + content.byteLength, 'tkhd', content);
    }
  }, {
    key: 'edts',
    value: function edts(data) {
      var buffer = new _Buffer2.default();
      var duration = data.duration;
      var mediaTime = data.mediaTime;
      buffer.write(FMP4.size(36), FMP4.type('edts'));
      // elst
      buffer.write(FMP4.size(28), FMP4.type('elst'));
      buffer.write(new Uint8Array([0x00, 0x00, 0x00, 0x01, // entry count
      duration >> 24 & 0xff, duration >> 16 & 0xff, duration >> 8 & 0xff, duration & 0xff, mediaTime >> 24 & 0xff, mediaTime >> 16 & 0xff, mediaTime >> 8 & 0xff, mediaTime & 0xff, 0x00, 0x00, 0x00, 0x01 // media rate
      ]));
      return buffer.buffer;
    }
  }, {
    key: 'mdia',
    value: function mdia(data) {
      var size = 8;
      var mdhd = FMP4.mdhd(data.timescale, data.duration);
      var hdlr = FMP4.hdlr(data.type);
      var minf = FMP4.minf(data);
      [mdhd, hdlr, minf].forEach(function (item) {
        size += item.byteLength;
      });
      return FMP4.initBox(size, 'mdia', mdhd, hdlr, minf);
    }
  }, {
    key: 'mdhd',
    value: function mdhd(timescale, duration) {
      var content = new Uint8Array([0x00, 0x00, 0x00, 0x00, // creation_time    创建时间
      0x00, 0x00, 0x00, 0x00, // modification_time修改时间
      timescale >>> 24 & 0xFF, // timescale: 4 bytes    文件媒体在1秒时间内的刻度值，可以理解为1秒长度
      timescale >>> 16 & 0xFF, timescale >>> 8 & 0xFF, timescale & 0xFF, duration >>> 24 & 0xFF, // duration: 4 bytes  track的时间长度
      duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, 0x55, 0xC4, // language: und (undetermined) 媒体语言码。最高位为0，后面15位为3个字符（见ISO 639-2/T标准中定义）
      0x00, 0x00 // pre_defined = 0
      ]);
      return FMP4.initBox(12 + content.byteLength, 'mdhd', FMP4.extension(0, 0), content);
    }
  }, {
    key: 'hdlr',
    value: function hdlr(type) {
      var value = [0x00, // version 0
      0x00, 0x00, 0x00, // flags
      0x00, 0x00, 0x00, 0x00, // pre_defined
      0x76, 0x69, 0x64, 0x65, // handler_type: 'vide'
      0x00, 0x00, 0x00, 0x00, // reserved
      0x00, 0x00, 0x00, 0x00, // reserved
      0x00, 0x00, 0x00, 0x00, // reserved
      0x56, 0x69, 0x64, 0x65, 0x6f, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x00 // name: 'VideoHandler'
      ];
      if (type === 'audio') {
        value.splice.apply(value, [8, 4].concat([0x73, 0x6f, 0x75, 0x6e]));
        value.splice.apply(value, [24, 13].concat([0x53, 0x6f, 0x75, 0x6e, 0x64, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x00]));
      }
      return FMP4.initBox(8 + value.length, 'hdlr', new Uint8Array(value));
    }
  }, {
    key: 'minf',
    value: function minf(data) {
      var size = 8;
      var vmhd = data.type === 'video' ? FMP4.vmhd() : FMP4.smhd();
      var dinf = FMP4.dinf();
      var stbl = FMP4.stbl(data);
      [vmhd, dinf, stbl].forEach(function (item) {
        size += item.byteLength;
      });
      return FMP4.initBox(size, 'minf', vmhd, dinf, stbl);
    }
  }, {
    key: 'vmhd',
    value: function vmhd() {
      return FMP4.initBox(20, 'vmhd', new Uint8Array([0x00, // version
      0x00, 0x00, 0x01, // flags
      0x00, 0x00, // graphicsmode
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00 // opcolor
      ]));
    }
  }, {
    key: 'smhd',
    value: function smhd() {
      return FMP4.initBox(16, 'smhd', new Uint8Array([0x00, // version
      0x00, 0x00, 0x00, // flags
      0x00, 0x00, // balance
      0x00, 0x00 // reserved
      ]));
    }
  }, {
    key: 'dinf',
    value: function dinf() {
      var buffer = new _Buffer2.default();
      var dref = [0x00, // version 0
      0x00, 0x00, 0x00, // flags
      0x00, 0x00, 0x00, 0x01, // entry_count
      0x00, 0x00, 0x00, 0x0c, // entry_size
      0x75, 0x72, 0x6c, 0x20, // 'url' type
      0x00, // version 0
      0x00, 0x00, 0x01 // entry_flags
      ];
      buffer.write(FMP4.size(36), FMP4.type('dinf'), FMP4.size(28), FMP4.type('dref'), new Uint8Array(dref));
      return buffer.buffer;
    }
  }, {
    key: 'stbl',
    value: function stbl(data) {
      var size = 8;
      var stsd = FMP4.stsd(data);
      var stts = FMP4.stts();
      var stsc = FMP4.stsc();
      var stsz = FMP4.stsz();
      var stco = FMP4.stco();
      [stsd, stts, stsc, stsz, stco].forEach(function (item) {
        size += item.byteLength;
      });
      return FMP4.initBox(size, 'stbl', stsd, stts, stsc, stsz, stco);
    }
  }, {
    key: 'stsd',
    value: function stsd(data) {
      var content = void 0;
      if (data.type === 'audio') {
        // if (!data.isAAC && data.codec === 'mp4') {
        //     content = FMP4.mp3(data);
        // } else {
        //
        // }
        // 支持mp4a
        content = FMP4.mp4a(data);
      } else {
        content = FMP4.avc1(data);
      }
      return FMP4.initBox(16 + content.byteLength, 'stsd', FMP4.extension(0, 0), new Uint8Array([0x00, 0x00, 0x00, 0x01]), content);
    }
  }, {
    key: 'mp4a',
    value: function mp4a(data) {
      var content = new Uint8Array([0x00, 0x00, 0x00, // reserved
      0x00, 0x00, 0x00, // reserved
      0x00, 0x01, // data_reference_index
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // reserved
      0x00, data.channelCount, // channelcount
      0x00, 0x10, // sampleSize:16bits
      0x00, 0x00, 0x00, 0x00, // reserved2
      data.samplerate >> 8 & 0xff, data.samplerate & 0xff, //
      0x00, 0x00]);
      var esds = FMP4.esds(data.config);
      return FMP4.initBox(8 + content.byteLength + esds.byteLength, 'mp4a', content, esds);
    }
  }, {
    key: 'esds',
    value: function esds() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [43, 146, 8, 0];

      var configlen = config.length;
      var buffer = new _Buffer2.default();
      var content = new Uint8Array([0x00, // version 0
      0x00, 0x00, 0x00, // flags

      0x03, // descriptor_type
      0x17 + configlen, // length
      0x00, 0x01, // es_id
      0x00, // stream_priority

      0x04, // descriptor_type
      0x0f + configlen, // length
      0x40, // codec : mpeg4_audio
      0x15, // stream_type
      0x00, 0x00, 0x00, // buffer_size
      0x00, 0x00, 0x00, 0x00, // maxBitrate
      0x00, 0x00, 0x00, 0x00, // avgBitrate

      0x05 // descriptor_type
      ].concat([configlen]).concat(config).concat([0x06, 0x01, 0x02]));
      buffer.write(FMP4.size(8 + content.byteLength), FMP4.type('esds'), content);
      return buffer.buffer;
    }
  }, {
    key: 'avc1',
    value: function avc1(data) {
      var buffer = new _Buffer2.default();
      var size = 40; // 8(avc1)+8(avcc)+8(btrt)+16(pasp)
      var sps = data.sps;
      var pps = data.pps;
      var width = data.width;
      var height = data.height;
      var hSpacing = data.pixelRatio[0];
      var vSpacing = data.pixelRatio[1];
      var avccBuffer = new _Buffer2.default();
      avccBuffer.write(new Uint8Array([0x01, // version
      sps[1], // profile
      sps[2], // profile compatible
      sps[3], // level
      0xfc | 3, 0xE0 | 1 // 目前只处理一个sps
      ].concat([sps.length >>> 8 & 0xff, sps.length & 0xff])));
      avccBuffer.write(sps, new Uint8Array([1, pps.length >>> 8 & 0xff, pps.length & 0xff]), pps);

      var avcc = avccBuffer.buffer;
      var avc1 = new Uint8Array([0x00, 0x00, 0x00, // reserved
      0x00, 0x00, 0x00, // reserved
      0x00, 0x01, // data_reference_index
      0x00, 0x00, // pre_defined
      0x00, 0x00, // reserved
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // pre_defined
      width >> 8 & 0xff, width & 0xff, // width
      height >> 8 & 0xff, height & 0xff, // height
      0x00, 0x48, 0x00, 0x00, // horizresolution
      0x00, 0x48, 0x00, 0x00, // vertresolution
      0x00, 0x00, 0x00, 0x00, // reserved
      0x00, 0x01, // frame_count
      0x12, 0x64, 0x61, 0x69, 0x6C, // dailymotion/hls.js
      0x79, 0x6D, 0x6F, 0x74, 0x69, 0x6F, 0x6E, 0x2F, 0x68, 0x6C, 0x73, 0x2E, 0x6A, 0x73, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // compressorname
      0x00, 0x18, // depth = 24
      0x11, 0x11]); // pre_defined = -1
      var btrt = new Uint8Array([0x00, 0x1c, 0x9c, 0x80, // bufferSizeDB
      0x00, 0x2d, 0xc6, 0xc0, // maxBitrate
      0x00, 0x2d, 0xc6, 0xc0 // avgBitrate
      ]);
      var pasp = new Uint8Array([hSpacing >> 24, // hSpacing
      hSpacing >> 16 & 0xff, hSpacing >> 8 & 0xff, hSpacing & 0xff, vSpacing >> 24, // vSpacing
      vSpacing >> 16 & 0xff, vSpacing >> 8 & 0xff, vSpacing & 0xff]);

      buffer.write(FMP4.size(size + avc1.byteLength + avcc.byteLength + btrt.byteLength), FMP4.type('avc1'), avc1, FMP4.size(8 + avcc.byteLength), FMP4.type('avcC'), avcc, FMP4.size(20), FMP4.type('btrt'), btrt, FMP4.size(16), FMP4.type('pasp'), pasp);
      return buffer.buffer;
    }
  }, {
    key: 'stts',
    value: function stts() {
      var content = new Uint8Array([0x00, // version
      0x00, 0x00, 0x00, // flags
      0x00, 0x00, 0x00, 0x00 // entry_count
      ]);
      return FMP4.initBox(16, 'stts', content);
    }
  }, {
    key: 'stsc',
    value: function stsc() {
      var content = new Uint8Array([0x00, // version
      0x00, 0x00, 0x00, // flags
      0x00, 0x00, 0x00, 0x00 // entry_count
      ]);
      return FMP4.initBox(16, 'stsc', content);
    }
  }, {
    key: 'stco',
    value: function stco() {
      var content = new Uint8Array([0x00, // version
      0x00, 0x00, 0x00, // flags
      0x00, 0x00, 0x00, 0x00 // entry_count
      ]);
      return FMP4.initBox(16, 'stco', content);
    }
  }, {
    key: 'stsz',
    value: function stsz() {
      var content = new Uint8Array([0x00, // version
      0x00, 0x00, 0x00, // flags
      0x00, 0x00, 0x00, 0x00, // sample_size
      0x00, 0x00, 0x00, 0x00 // sample_count
      ]);
      return FMP4.initBox(20, 'stsz', content);
    }
  }, {
    key: 'mvex',
    value: function mvex(duration) {
      var buffer = new _Buffer2.default();
      var mehd = _Buffer2.default.writeUint32(duration);
      buffer.write(FMP4.size(88), FMP4.type('mvex'), FMP4.size(16), FMP4.type('mehd'), FMP4.extension(0, 0), mehd, FMP4.trex(1), FMP4.trex(2));
      return buffer.buffer;
    }
  }, {
    key: 'trex',
    value: function trex(id) {
      var content = new Uint8Array([0x00, // version 0
      0x00, 0x00, 0x00, // flags
      id >> 24, id >> 16 & 0xff, id >> 8 & 0xff, id & 0xff, // track_ID
      0x00, 0x00, 0x00, 0x01, // default_sample_description_index
      0x00, 0x00, 0x00, 0x00, // default_sample_duration
      0x00, 0x00, 0x00, 0x00, // default_sample_size
      0x00, 0x01, 0x00, 0x01 // default_sample_flags
      ]);
      return FMP4.initBox(8 + content.byteLength, 'trex', content);
    }
  }, {
    key: 'moof',
    value: function moof(data) {
      var size = 8;
      var mfhd = FMP4.mfhd();
      var traf = FMP4.traf(data);
      [mfhd, traf].forEach(function (item) {
        size += item.byteLength;
      });
      return FMP4.initBox(size, 'moof', mfhd, traf);
    }
  }, {
    key: 'mfhd',
    value: function mfhd() {
      var content = _Buffer2.default.writeUint32(FMP4.sequence);
      FMP4.sequence += 1;
      return FMP4.initBox(16, 'mfhd', FMP4.extension(0, 0), content);
    }
  }, {
    key: 'traf',
    value: function traf(data) {
      var size = 8;
      var tfhd = FMP4.tfhd(data.id);
      var tfdt = FMP4.tfdt(data.time);
      var sdtp = FMP4.sdtp(data);
      var trun = FMP4.trun(data, sdtp.byteLength);
      [tfhd, tfdt, sdtp, trun].forEach(function (item) {
        size += item.byteLength;
      });
      return FMP4.initBox(size, 'traf', tfhd, tfdt, sdtp, trun);
    }
  }, {
    key: 'tfhd',
    value: function tfhd(id) {
      var content = _Buffer2.default.writeUint32(id);
      return FMP4.initBox(16, 'tfhd', FMP4.extension(0, 0), content);
    }
  }, {
    key: 'tfdt',
    value: function tfdt(time) {
      // let upper = Math.floor(time / (UINT32_MAX + 1)),
      //     lower = Math.floor(time % (UINT32_MAX + 1));
      return FMP4.initBox(16, 'tfdt', FMP4.extension(0, 0), _Buffer2.default.writeUint32(time));
    }
  }, {
    key: 'trun',
    value: function trun(data, sdtpLength) {
      // let id = data.id;
      // let ceil = id === 1 ? 16 : 12;
      var buffer = new _Buffer2.default();
      var sampleCount = _Buffer2.default.writeUint32(data.samples.length);
      // mdat-header 8
      // moof-header 8
      // mfhd 16
      // traf-header 8
      // thhd 16
      // tfdt 20
      // trun-header 12
      // sampleCount 4
      // data-offset 4
      // samples.length
      var offset = _Buffer2.default.writeUint32(8 + 8 + 16 + 8 + 16 + 16 + 12 + 4 + 4 + 16 * data.samples.length + sdtpLength);
      buffer.write(FMP4.size(20 + 16 * data.samples.length), FMP4.type('trun'), new Uint8Array([0x00, 0x00, 0x0F, 0x01]), sampleCount, offset);

      var size = buffer.buffer.byteLength;
      var writeOffset = 0;
      data.samples.forEach(function () {
        size += 16;
      });

      var trunBox = new Uint8Array(size);

      trunBox.set(buffer.buffer, 0);
      writeOffset += buffer.buffer.byteLength;
      data.samples.forEach(function (item) {
        trunBox.set(_Buffer2.default.writeUint32(item.duration), writeOffset);
        writeOffset += 4;
        trunBox.set(_Buffer2.default.writeUint32(item.size), writeOffset);
        writeOffset += 4;

        if (data.id === 1) {
          trunBox.set(_Buffer2.default.writeUint32(item.isKeyframe ? 0x02000000 : 0x01010000), writeOffset);
          writeOffset += 4;
          trunBox.set(_Buffer2.default.writeUint32(item.cps), writeOffset);
          writeOffset += 4;
        } else {
          trunBox.set(_Buffer2.default.writeUint32(0x01000000), writeOffset);
          writeOffset += 4;
          trunBox.set(_Buffer2.default.writeUint32(0), writeOffset);
          writeOffset += 4;
        }

        // buffer.write(Buffer.writeUint32(0));
      });
      return trunBox;
    }
  }, {
    key: 'sdtp',
    value: function sdtp(data) {
      var buffer = new _Buffer2.default();
      buffer.write(FMP4.size(12 + data.samples.length), FMP4.type('sdtp'), FMP4.extension(0, 0));
      data.samples.forEach(function (item) {
        buffer.write(new Uint8Array(data.id === 1 ? [item.key ? 32 : 16] : [16]));
      });
      return buffer.buffer;
    }
  }, {
    key: 'mdat',
    value: function mdat(data) {
      var buffer = new _Buffer2.default();
      var size = 8;
      data.samples.forEach(function (item) {
        size += item.size;
      });
      buffer.write(FMP4.size(size), FMP4.type('mdat'));
      var mdatBox = new Uint8Array(size);
      var offset = 0;
      mdatBox.set(buffer.buffer, offset);
      offset += 8;
      data.samples.forEach(function (item) {
        item.buffer.forEach(function (unit) {
          mdatBox.set(unit.data, offset);
          offset += unit.data.byteLength;
          // buffer.write(unit.data);
        });
      });
      return mdatBox;
    }
  }]);

  return FMP4;
}();

FMP4.type = (0, _funcUtils.cacheWrapper)(function (name) {
  return new Uint8Array([name.charCodeAt(0), name.charCodeAt(1), name.charCodeAt(2), name.charCodeAt(3)]);
});
FMP4.sequence = 1;

exports.default = FMP4;

/***/ }),

/***/ "./src/parse/remux/Mp4remux.js":
/*!*************************************!*\
  !*** ./src/parse/remux/Mp4remux.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MediaSegmentList = __webpack_require__(/*! ../../models/MediaSegmentList */ "./src/models/MediaSegmentList.js");

var _MediaSegmentList2 = _interopRequireDefault(_MediaSegmentList);

var _MediaSegment = __webpack_require__(/*! ../../models/MediaSegment */ "./src/models/MediaSegment.js");

var _MediaSegment2 = _interopRequireDefault(_MediaSegment);

var _MediaSample = __webpack_require__(/*! ../../models/MediaSample */ "./src/models/MediaSample.js");

var _MediaSample2 = _interopRequireDefault(_MediaSample);

var _sniffer = __webpack_require__(/*! ../../utils/sniffer */ "./src/utils/sniffer.js");

var _sniffer2 = _interopRequireDefault(_sniffer);

var _Buffer = __webpack_require__(/*! ../../write/Buffer */ "./src/write/Buffer.js");

var _Buffer2 = _interopRequireDefault(_Buffer);

var _Fmp = __webpack_require__(/*! ./Fmp4 */ "./src/parse/remux/Fmp4.js");

var _Fmp2 = _interopRequireDefault(_Fmp);

var _Remuxer2 = __webpack_require__(/*! ./Remuxer */ "./src/parse/remux/Remuxer.js");

var _Remuxer3 = _interopRequireDefault(_Remuxer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mp4Remuxer = function (_Remuxer) {
  _inherits(Mp4Remuxer, _Remuxer);

  function Mp4Remuxer(store) {
    _classCallCheck(this, Mp4Remuxer);

    var _this = _possibleConstructorReturn(this, (Mp4Remuxer.__proto__ || Object.getPrototypeOf(Mp4Remuxer)).call(this, store));

    _this._dtsBase = 0;
    _this._isDtsBaseInited = false;
    _this._videoMeta = null;
    _this._audioMeta = null;
    _this._audioNextDts = null;
    _this._videoNextDts = null;
    _this._videoSegmentList = new _MediaSegmentList2.default('video');
    _this._audioSegmentList = new _MediaSegmentList2.default('audio');
    var browser = _sniffer2.default.browser;

    _this._fillSilenceFrame = browser === 'ie';
    _this.handleMediaFragment = function () {};
    return _this;
  }

  _createClass(Mp4Remuxer, [{
    key: 'destroy',
    value: function destroy() {
      this._dtsBase = -1;
      this._dtsBaseInited = false;
      this._audioMeta = null;
      this._videoMeta = null;
      this._videoNextDts = null;
      this._audioNextDts = null;
      this._videoSegmentList.clear();
      this._audioSegmentList.clear();
      this._videoSegmentList = null;
      this._audioSegmentList = null;
    }
  }, {
    key: 'remux',
    value: function remux(audioTrack, videoTrack) {
      !this._isDtsBaseInited && this.calcDtsBase(audioTrack, videoTrack);

      this._remuxVideo(videoTrack);
      this._remuxAudio(audioTrack);
    }
  }, {
    key: 'seek',
    value: function seek() {
      this._videoNextDts = null;
      this._audioNextDts = null;
      this._videoSegmentList.clear();
      this._audioSegmentList.clear();
    }
  }, {
    key: 'onMetaDataReady',
    value: function onMetaDataReady(type, meta) {
      this['_' + type + 'Meta'] = meta;
    }
  }, {
    key: 'onMediaInfoReady',
    value: function onMediaInfoReady(mediaInfo) {
      var ftypMoov = new _Buffer2.default();
      var ftyp = _Fmp2.default.ftyp();
      var moov = _Fmp2.default.moov(mediaInfo);
      ftypMoov.write(ftyp, moov);
      return ftypMoov.buffer;
    }
  }, {
    key: 'calcDtsBase',
    value: function calcDtsBase(audioTrack, videoTrack) {
      var audioBase = Infinity;
      var videoBase = Infinity;
      if (audioTrack.samples && audioTrack.samples.length) {
        audioBase = audioTrack.samples[0].dts;
      }
      if (videoTrack.samples && videoTrack.samples.length) {
        videoBase = videoTrack.samples[0].dts;
      }

      this._dtsBase = Math.min(audioBase, videoBase);
      this._isDtsBaseInited = true;
    }
  }, {
    key: '_remuxVideo',
    value: function _remuxVideo(videoTrack) {
      if (!this._videoMeta) {
        return;
      }
      var track = videoTrack;
      if (!videoTrack.samples || !videoTrack.samples.length) {
        return;
      }
      var samples = track.samples;

      var dtsCorrection = void 0;
      var firstDts = -1;
      var lastDts = -1;
      var firstPts = -1;
      var lastPts = -1;

      var mp4Samples = [];
      var mdatBox = {
        samples: []
      };
      var videoSegment = new _MediaSegment2.default();
      while (samples.length) {
        var avcSample = samples.shift();
        var isKeyframe = avcSample.isKeyframe,
            cps = avcSample.cps;

        var dts = avcSample.dts - this._dtsBase;

        if (dtsCorrection === undefined) {
          if (!this._videoNextDts) {
            if (this._videoSegmentList.isEmpty()) {
              dtsCorrection = 0;
            } else {
              var lastSegment = this._videoSegmentList.getLastSegmentBefore(dts);
              if (lastSegment) {
                var gap = void 0;
                var _lastDts = lastSegment.lastDts,
                    lastGap = lastSegment.gap;

                gap = dts - (_lastDts + lastGap) > 3 ? dts - (_lastDts + lastGap) : 0;
                dtsCorrection = dts - (_lastDts + gap);
              } else {
                dtsCorrection = 0;
              }
            }
          } else {
            dtsCorrection = dts - this._videoNextDts >= 1000 ? 0 : dts - this._videoNextDts;
          }
        }
        var originDts = dts;
        dts -= dtsCorrection;
        var pts = dts + cps;

        if (firstDts === -1) {
          firstDts = dts;
          firstPts = pts;
        }
        var _units = [];
        while (avcSample.units.length) {
          var mdatSample = {
            buffer: [],
            size: 0
          };
          var unit = avcSample.units.shift();
          _units.push(unit);
          mdatSample.buffer.push(unit);
          mdatSample.size += unit.data.byteLength;

          mdatBox.samples.push(mdatSample);
        }

        var sampleDuration = 0;

        if (samples.length >= 1) {
          var nextDts = samples[0].dts - this._dtsBase - dtsCorrection;
          sampleDuration = nextDts - dts;
        } else {
          if (mp4Samples.length >= 1) {
            // lastest sample, use second last duration
            sampleDuration = mp4Samples[mp4Samples.length - 1].duration;
          } else {
            // the only one sample, use reference duration
            sampleDuration = this._videoMeta.refSampleDuration;
          }
        }

        if (isKeyframe) {
          var rap = new _MediaSample2.default({
            dts: dts,
            pts: pts,
            duration: sampleDuration,
            originDts: avcSample.dts,
            position: avcSample.position,
            isRAP: true
          });
          videoSegment.addRAP(rap);
        }

        mp4Samples.push({
          dts: dts,
          cps: cps,
          pts: pts,
          units: _units,
          size: avcSample.length,
          isKeyframe: isKeyframe,
          duration: sampleDuration,
          originDts: originDts
        });
      }
      var first = mp4Samples[0];
      var last = mp4Samples[mp4Samples.length - 1];
      lastDts = last.dts + last.duration;
      lastPts = last.pts + last.duration;

      this._videoNextDts = lastDts;

      videoSegment.startDts = firstDts;
      videoSegment.endDts = lastDts;
      videoSegment.startPts = firstPts;
      videoSegment.endPts = lastPts;
      videoSegment.originStartDts = first.originDts;
      videoSegment.originEndDts = last.originDts + last.duration;
      videoSegment.gap = dtsCorrection;
      var firstSample = new _MediaSample2.default({
        dts: first.dts,
        pts: first.pts,
        duration: first.duration,
        isKeyframe: first.isKeyframe,
        originDts: first.originDts
      });
      var lastSample = new _MediaSample2.default({
        dts: last.dts,
        pts: last.pts,
        duration: last.duration,
        isKeyframe: last.isKeyframe,
        originDts: last.originDts
      });
      videoSegment.firstSample = firstSample;
      videoSegment.lastSample = lastSample;
      var moofMdat = new _Buffer2.default();

      track.samples = mp4Samples;
      track.time = firstDts;
      var moof = _Fmp2.default.moof(track);
      var mdat = _Fmp2.default.mdat(mdatBox);
      moofMdat.write(moof, mdat);

      if (!this._store.isLive) {
        this._videoSegmentList.append(videoSegment);
      }

      track.samples = [];
      track.length = 0;

      this.handleMediaFragment({
        type: 'video',
        data: moofMdat.buffer.buffer,
        sampleCount: mp4Samples.length,
        fragment: videoSegment
      });
    }
  }, {
    key: '_remuxAudio',
    value: function _remuxAudio(track) {
      if (!this._audioMeta) {
        return;
      }
      var samples = track.samples;

      var dtsCorrection = void 0;
      var firstDts = -1;
      var lastDts = -1;
      // let firstPts = -1
      // let lastPts = -1
      var silentDuration = void 0;
      var mp4Samples = [];

      var mdatBox = {
        samples: []
      };
      if (!samples || !samples.length) {
        return;
      }
      var isFirstDtsInited = false;
      while (samples.length) {
        var sample = samples.shift();
        var unit = sample.unit;

        var dts = sample.dts - this._dtsBase;

        var needSilentFrame = false;
        if (dtsCorrection === undefined) {
          if (!this._audioNextDts) {
            if (this._audioSegmentList.isEmpty()) {
              dtsCorrection = 0;
            } else {
              var lastSegment = this._audioSegmentList.getLastSegmentBefore(dts);
              if (lastSegment) {
                var gap = void 0;
                var _lastDts2 = lastSegment.lastDts,
                    lastGap = lastSegment.gap;

                gap = dts - (_lastDts2 + lastGap) > 3 ? dts - (_lastDts2 + lastGap) : 0;
                dtsCorrection = dts - (_lastDts2 + gap);
              } else {
                needSilentFrame = this._fillSilenceFrame && !this._videoSegmentList.isEmpty();
                dtsCorrection = 0;
              }
            }
          } else {
            dtsCorrection = dts - this._audioNextDts >= 1000 ? 0 : dts - this._audioNextDts;
          }
        }
        var originDts = dts;
        dts -= dtsCorrection;

        if (needSilentFrame) {
          var videoSegment = this._videoSegmentList.getLastSampleBefore(originDts);

          if (videoSegment && videoSegment.startDts < dts) {
            silentDuration = dts - videoSegment.startDts;
            dts = videoSegment.startDts;
          } else {
            needSilentFrame = false;
          }
        }

        if (!isFirstDtsInited) {
          firstDts = dts;
          isFirstDtsInited = true;
        }

        if (needSilentFrame) {
          samples.unshift(sample);
          var silentFrame = this.initSilentAudio(dts, silentDuration);
          mp4Samples.push(silentFrame);

          var _mdatSample = {
            buffer: [],
            size: 0
          };
          _mdatSample.buffer.push({
            data: silentFrame.unit
          });
          _mdatSample.size += silentFrame.unit.byteLength;

          mdatBox.samples.push(_mdatSample);
          continue;
        }

        var sampleDuration = 0;

        if (samples.length >= 1) {
          var nextDts = samples[0].dts - this._dtsBase - dtsCorrection;
          sampleDuration = nextDts - dts;
        } else {
          if (mp4Samples.length >= 1) {
            // use second last sample duration
            sampleDuration = mp4Samples[mp4Samples.length - 1].duration;
          } else {
            // the only one sample, use reference sample duration
            sampleDuration = this._audioMeta.refSampleDuration;
          }
        }

        var mp4Sample = {
          dts: dts,
          pts: dts,
          cts: 0,
          size: unit.byteLength,
          duration: sampleDuration,
          originDts: originDts
        };

        var mdatSample = {
          buffer: [],
          size: 0
        };
        mdatSample.buffer.push({
          data: unit
        });
        mdatSample.size += unit.byteLength;

        mdatBox.samples.push(mdatSample);

        mp4Samples.push(mp4Sample);
      }

      var last = mp4Samples[mp4Samples.length - 1];
      lastDts = last.dts + last.duration;

      this._audioNextDts = lastDts;

      var audioSegment = new _MediaSegment2.default();
      audioSegment.startDts = firstDts;
      audioSegment.endDts = lastDts;
      audioSegment.startPts = firstDts;
      audioSegment.endPts = lastDts;
      audioSegment.originStartDts = mp4Samples[0].originDts;
      audioSegment.originEndDts = last.originDts + last.duration;
      audioSegment.gap = dtsCorrection;
      audioSegment.firstSample = new _MediaSample2.default({
        dts: mp4Samples[0].dts,
        pts: mp4Samples[0].pts,
        duration: mp4Samples[0].duration,
        originDts: mp4Samples[0].originDts
      });
      audioSegment.lastSample = new _MediaSample2.default({
        dts: last.dts,
        pts: last.pts,
        duration: last.duration,
        originDts: last.originDts
      });

      track.samples = mp4Samples;
      var moofMdat = new _Buffer2.default();
      track.time = firstDts;
      var moof = _Fmp2.default.moof(track, firstDts);
      var mdat = _Fmp2.default.mdat(mdatBox);
      moofMdat.write(moof, mdat);

      if (!this._store.isLive) {
        this._audioSegmentList.append(audioSegment);
      }
      track.samples = [];
      track.length = 0;
      this.handleMediaFragment({
        type: 'audio',
        data: moofMdat.buffer.buffer,
        sampleCount: mp4Samples.length,
        fragment: audioSegment
      });
    }
  }, {
    key: 'initSilentAudio',
    value: function initSilentAudio(dts, duration) {
      var unit = Mp4Remuxer.getSilentFrame(this._audioMeta.channelCount);
      return {
        dts: dts,
        pts: dts,
        cps: 0,
        duration: duration,
        unit: unit,
        size: unit.byteLength,
        originDts: dts
      };
    }
  }], [{
    key: 'getSilentFrame',
    value: function getSilentFrame(channelCount) {
      if (channelCount === 1) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x23, 0x80]);
      } else if (channelCount === 2) {
        return new Uint8Array([0x21, 0x00, 0x49, 0x90, 0x02, 0x19, 0x00, 0x23, 0x80]);
      } else if (channelCount === 3) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x8e]);
      } else if (channelCount === 4) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x80, 0x2c, 0x80, 0x08, 0x02, 0x38]);
      } else if (channelCount === 5) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x38]);
      } else if (channelCount === 6) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x00, 0xb2, 0x00, 0x20, 0x08, 0xe0]);
      }
      return null;
    }
  }]);

  return Mp4Remuxer;
}(_Remuxer3.default);

exports.default = Mp4Remuxer;

/***/ }),

/***/ "./src/parse/remux/Remuxer.js":
/*!************************************!*\
  !*** ./src/parse/remux/Remuxer.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ../../utils/Log */ "./src/utils/Log.js");

var _Log2 = _interopRequireDefault(_Log);

var _TransCoder2 = __webpack_require__(/*! ../TransCoder */ "./src/parse/TransCoder.js");

var _TransCoder3 = _interopRequireDefault(_TransCoder2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Remuxer = function (_TransCoder) {
  _inherits(Remuxer, _TransCoder);

  function Remuxer() {
    _classCallCheck(this, Remuxer);

    return _possibleConstructorReturn(this, (Remuxer.__proto__ || Object.getPrototypeOf(Remuxer)).apply(this, arguments));
  }

  _createClass(Remuxer, [{
    key: 'dispatch',
    value: function dispatch(type) {
      var _observer;

      var prefix = 'remuxer_';

      for (var _len = arguments.length, payload = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        payload[_key - 1] = arguments[_key];
      }

      (_observer = this._observer).emit.apply(_observer, ['' + prefix + type].concat(payload));
    }
  }, {
    key: 'error',
    value: function error(message) {
      var _CLASS_NAME = this.CLASS_NAME,
          CLASS_NAME = _CLASS_NAME === undefined ? 'Remuxer' : _CLASS_NAME;

      _Log2.default.error('[' + CLASS_NAME + ' error] ', message);
    }
  }, {
    key: 'info',
    value: function info(message) {
      var _CLASS_NAME2 = this.CLASS_NAME,
          CLASS_NAME = _CLASS_NAME2 === undefined ? 'Remuxer' : _CLASS_NAME2;

      _Log2.default.info('[' + CLASS_NAME + ' info] ', message);
    }
  }, {
    key: 'log',
    value: function log(message) {
      var _CLASS_NAME3 = this.CLASS_NAME,
          CLASS_NAME = _CLASS_NAME3 === undefined ? 'Remuxer' : _CLASS_NAME3;

      _Log2.default.log('[' + CLASS_NAME + ' log] ', message);
    }
  }, {
    key: 'warn',
    value: function warn(message) {
      var _CLASS_NAME4 = this.CLASS_NAME,
          CLASS_NAME = _CLASS_NAME4 === undefined ? 'Remuxer' : _CLASS_NAME4;

      _Log2.default.warn('[' + CLASS_NAME + ' warn] ', message);
    }
  }]);

  return Remuxer;
}(_TransCoder3.default);

exports.default = Remuxer;

/***/ }),

/***/ "./src/tasks/LiveTask.js":
/*!*******************************!*\
  !*** ./src/tasks/LiveTask.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 直播任务获取 直播数据
var LiveTask = function () {
  function LiveTask(url, config) {
    _classCallCheck(this, LiveTask);

    //https://developer.mozilla.org/zh-CN/docs/Web/API/Headers
    var _headers = new window.Headers();

    var _config = {
      headers: Object.assign({}, _headers),
      method: 'GET',
      cache: 'default',
      mode: 'cors'
    };
    this._stop = false;
    //https://developer.mozilla.org/zh-CN/docs/Web/API/Request/Request
    this.request = new Request(url, Object.assign({}, _config, config)); // eslint-disable-line
  }

  _createClass(LiveTask, [{
    key: 'run',
    value: function run(callback) {
      var _this = this;

      var self = this;
      // 利用fetch 拿到res.body.getReader() 然后递归的调用read方法 获取result.value 传给callback
      function resolve(reader) {
        reader.read().then(function (result) {
          if (self._stop) {
            reader.cancel();
            return;
          }
          callback(result.done ? undefined : result.value);
          resolve(reader);
        });
      }

      var prom = new Promise(function (resolve, reject) {
        var isTimeout = true;

        fetch(_this.request).then(function (res) {
          // eslint-disable-line
          isTimeout = false;
          resolve(res);
        });
        setTimeout(function () {
          isTimeout && reject(); // eslint-disable-line
        }, 5000);
      });

      prom.then(function (res) {
        var reader = res.body.getReader();
        resolve(reader);
      }).catch(function (res) {
        callback();
      });

      return this;
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this._stop = true;
    }
  }]);

  return LiveTask;
}();

exports.default = LiveTask;

/***/ }),

/***/ "./src/tasks/VodTask.js":
/*!******************************!*\
  !*** ./src/tasks/VodTask.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _XHRLoader = __webpack_require__(/*! ./loaders/XHRLoader */ "./src/tasks/loaders/XHRLoader.js");

var _XHRLoader2 = _interopRequireDefault(_XHRLoader);

var _FetchLoader = __webpack_require__(/*! ./loaders/FetchLoader */ "./src/tasks/loaders/FetchLoader.js");

var _FetchLoader2 = _interopRequireDefault(_FetchLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoadCls = function (window) {
  if (window.fetch) {
    return _FetchLoader2.default;
  }
  return _XHRLoader2.default;
}(window);
// 保证只有2个任务处于请求状态， 新建任务往队列里添加，任务完成从队列删除 每次变化都会更新队列进行请求。

var VodTask = function () {
  function VodTask(url, range, headers) {
    _classCallCheck(this, VodTask);

    console.log(range);
    this.url = url;
    this.range = range;
    this.id = range.join('-');
    this.on = false;
    this.loader = new LoadCls(url, range, headers);
    this.isCanceled = false;
    VodTask.queue.push(this);
    VodTask.update();
  }

  _createClass(VodTask, [{
    key: 'cancel',
    value: function cancel() {
      this.isCanceled = true;
      this.loader.cancel();
    }
  }, {
    key: 'run',
    value: function run() {
      if (this.loader.readyState === 1) {
        this.on = true;
        this.loader.run();
      } else {
        VodTask.remove();
      }
    }
  }, {
    key: 'promise',
    get: function get() {
      return this.loader.promise;
    }
  }, {
    key: 'timeStamp',
    get: function get() {
      return this.loader.timeStamp;
    }
  }], [{
    key: 'remove',
    value: function remove(loader) {
      VodTask.queue.filter(function (item, idx) {
        if (item.url === loader.url && item.id === loader.id) {
          VodTask.queue.splice(idx, 1);
          return true;
        } else {
          return false;
        }
      });
      VodTask.update();
    }
  }, {
    key: 'update',
    value: function update() {
      var Queue = VodTask.queue;
      var sended = Queue.filter(function (item) {
        return item.on;
      });
      var wait = Queue.filter(function (item) {
        return !item.on;
      });
      var max = VodTask.limit - sended.length;
      wait.forEach(function (item, idx) {
        if (idx < max) {
          item.run();
        }
      });
    }
  }, {
    key: 'clear',
    value: function clear() {
      VodTask.queue.forEach(function (item) {
        if (!item.loader.complete) {
          item.cancel();
        }
      });
      VodTask.queue.length = 0;
    }
  }]);

  return VodTask;
}();

VodTask.queue = [];
VodTask.limit = 2;
window.VodTask = VodTask;

exports.default = VodTask;

/***/ }),

/***/ "./src/tasks/loaders/FetchLoader.js":
/*!******************************************!*\
  !*** ./src/tasks/loaders/FetchLoader.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VodTask = __webpack_require__(/*! ../VodTask */ "./src/tasks/VodTask.js");

var _VodTask2 = _interopRequireDefault(_VodTask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FetchLoader = function () {
  function FetchLoader(url, range) {
    var _this = this;

    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, FetchLoader);

    this.url = url;
    this.on = false;
    this.complete = false;
    this.isStopped = false;
    this.timeStamp = Date.now();
    var _config = {
      headers: {
        Range: 'bytes=' + range[0] + '-' + range[1]
      },
      method: 'GET',
      cache: 'default',
      mode: 'cors'
    };

    this.request = function () {
      _this.on = true;
      return window.fetch(url, Object.assign({}, _config, config)).then(function (res) {
        if (res.status > 299 || res.status < 200 || !res.ok) {
          _this.complete = true;
          _VodTask2.default.remove(_this);
          return Promise.reject(new Error('url ' + res.status + ' ' + res.statusText));
        }
        return Promise.resolve(res);
      }).then(function (res) {
        return res.arrayBuffer();
      }).then(function (buffer) {
        _this.complete = true;
        _this.byteLength = buffer.byteLength;
        _VodTask2.default.remove(_this);
        if (_this.isStopped) return {};
        return {
          buffer: buffer,
          timeStamp: _this.timeStamp
        };
      });
    };
  }

  _createClass(FetchLoader, [{
    key: 'run',
    value: function run() {
      this._promise = this.request();
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this.isStopped = true;
    }
  }, {
    key: 'readyState',
    get: function get() {
      return 1;
    }
  }, {
    key: 'promise',
    get: function get() {
      return this.on ? this._promise : this.request();
    }
  }]);

  return FetchLoader;
}();

exports.default = FetchLoader;

/***/ }),

/***/ "./src/tasks/loaders/XHRLoader.js":
/*!****************************************!*\
  !*** ./src/tasks/loaders/XHRLoader.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VodTask = __webpack_require__(/*! ../VodTask */ "./src/tasks/VodTask.js");

var _VodTask2 = _interopRequireDefault(_VodTask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var XHRLoader = function () {
    function XHRLoader(url, range) {
        var _this = this;

        _classCallCheck(this, XHRLoader);

        this.url = url;
        var xhr = new XMLHttpRequest();
        xhr.open('get', url);
        xhr.responseType = 'arraybuffer';
        xhr.setRequestHeader('Range', 'bytes=' + range[0] + '-' + range[1]);
        xhr.onabort = function () {
            _VodTask2.default.remove(_this);
        };
        this._promise = new Promise(function (resolve, reject) {
            xhr.onload = function () {
                if (xhr.status === 200 || xhr.status === 206) {
                    resolve(xhr.response);
                }
                _VodTask2.default.remove(this);
            };
            xhr.onerror = function (e) {
                reject(e);
                _VodTask2.default.remove(_this);
            };
        });

        this._xhr = xhr;
    }

    _createClass(XHRLoader, [{
        key: 'run',
        value: function run() {
            this._xhr.send();
        }
    }, {
        key: 'cancel',
        value: function cancel() {
            this._xhr.abort();
        }
    }, {
        key: 'promise',
        get: function get() {
            return this._promise;
        }
    }, {
        key: 'readyState',
        get: function get() {
            return this._xhr.readyState;
        }
    }]);

    return XHRLoader;
}();

exports.default = XHRLoader;

/***/ }),

/***/ "./src/utils/DataView4Read.js":
/*!************************************!*\
  !*** ./src/utils/DataView4Read.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataView4Read = function () {
    function DataView4Read(buffer, context) {
        _classCallCheck(this, DataView4Read);

        this._dv = new DataView(buffer);
        this._context = context;
        this.initProxy();
    }

    _createClass(DataView4Read, [{
        key: 'initProxy',
        value: function initProxy() {
            var _this = this;

            var sizeArr = [8, 16, 32];
            var self = this;
            var _store = this._context._store;

            sizeArr.forEach(function (size) {
                _this['getUint' + size] = function (offset) {
                    if (!offset) {
                        offset = self._context.readOffset;
                    }
                    if (offset === self._context.readOffset) {
                        self._context.readOffset += size / 8;
                    }
                    // 这里读取字节序 为什么是反的  如果isLe是低位字节 就是false 按照的是高位字节
                    return self._dv['getUint' + size](offset, !_store.isLe);
                };
            });

            /**
             * 显式声明一个比其它位数更常用读取24位整数方法
             * @param offset
             * @param isHigh
             */
            this.getUint24 = function (offset) {
                var result = this.getUint(24, offset, false); // 会读取Uint32,做 and 操作之后回退一位。
                self._context.readOffset -= 1;
                return result;
            };

            this.getUint = function (size, offset) {
                var isHigh = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

                if (size > 32) {
                    throw 'not supported read size';
                }
                var readSize = 32;
                if (!this['getUint' + size]) {
                    for (var i = 0, len = sizeArr.length; i < len; i++) {
                        if (size < sizeArr[i]) {
                            readSize = sizeArr[i];
                            break;
                        }
                    }

                    var numToAnd = isHigh ? DataView4Read.getAndNum(0, size - 1, readSize) : DataView4Read.getAndNum(readSize - size, readSize - 1, readSize);
                    return self['getUint' + readSize](offset, !_store.isLe) & numToAnd;
                } else {
                    return self['getUint' + readSize](offset, !_store.isLe);
                }
            };
        }
    }], [{
        key: 'getAndNum',
        value: function getAndNum(begin, end) {
            var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;

            var result = 0;
            var index = --size;
            while (index > 0) {
                if (index > end || index < begin) {
                    index--;
                    continue;
                } else {
                    result += Math.pow(2, size - index);
                    index--;
                }
            }

            return result;
        }
    }]);

    return DataView4Read;
}();

exports.default = DataView4Read;

/***/ }),

/***/ "./src/utils/ExpGolomb.js":
/*!********************************!*\
  !*** ./src/utils/ExpGolomb.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log */ "./src/utils/Log.js");

var _Log2 = _interopRequireDefault(_Log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ExpGolomb = function () {
    function ExpGolomb(data) {
        _classCallCheck(this, ExpGolomb);

        this.data = data;
        // the number of bytes left to examine in this.data
        this.bytesAvailable = data.byteLength;
        // the current word being examined
        this.word = 0; // :uint
        // the number of bits left to examine in the current word
        this.bitsAvailable = 0; // :uint
    }
    // ():void


    _createClass(ExpGolomb, [{
        key: 'loadWord',
        value: function loadWord() {
            var data = this.data,
                bytesAvailable = this.bytesAvailable,
                position = data.byteLength - bytesAvailable,
                workingBytes = new Uint8Array(4),
                availableBytes = Math.min(4, bytesAvailable);
            if (availableBytes === 0) {
                throw new Error('no bytes available');
            }
            workingBytes.set(data.subarray(position, position + availableBytes));
            this.word = new DataView(workingBytes.buffer).getUint32(0);
            // track the amount of this.data that has been processed
            this.bitsAvailable = availableBytes * 8;
            this.bytesAvailable -= availableBytes;
        }

        // (count:int):void

    }, {
        key: 'skipBits',
        value: function skipBits(count) {
            var skipBytes; // :int
            if (this.bitsAvailable > count) {
                this.word <<= count;
                this.bitsAvailable -= count;
            } else {
                count -= this.bitsAvailable;
                skipBytes = count >> 3;
                count -= skipBytes >> 3;
                this.bytesAvailable -= skipBytes;
                this.loadWord();
                this.word <<= count;
                this.bitsAvailable -= count;
            }
            return skipBytes;
        }

        // (size:int):uint

    }, {
        key: 'readBits',
        value: function readBits(size) {
            var bits = Math.min(this.bitsAvailable, size),
                // :uint
            valu = this.word >>> 32 - bits; // :uint
            if (size > 32) {
                _Log2.default.error('Cannot read more than 32 bits at a time');
            }
            this.bitsAvailable -= bits;
            if (this.bitsAvailable > 0) {
                this.word <<= bits;
            } else if (this.bytesAvailable > 0) {
                this.loadWord();
            }
            bits = size - bits;
            if (bits > 0 && this.bitsAvailable) {
                return valu << bits | this.readBits(bits);
            } else {
                return valu;
            }
        }

        // ():uint

    }, {
        key: 'skipLZ',
        value: function skipLZ() {
            var leadingZeroCount; // :uint
            for (leadingZeroCount = 0; leadingZeroCount < this.bitsAvailable; ++leadingZeroCount) {
                if (0 !== (this.word & 0x80000000 >>> leadingZeroCount)) {
                    // the first bit of working word is 1
                    this.word <<= leadingZeroCount;
                    this.bitsAvailable -= leadingZeroCount;
                    return leadingZeroCount;
                }
            }
            // we exhausted word and still have not found a 1
            this.loadWord();
            return leadingZeroCount + this.skipLZ();
        }

        // ():void

    }, {
        key: 'skipUEG',
        value: function skipUEG() {
            this.skipBits(1 + this.skipLZ());
        }

        // ():void

    }, {
        key: 'skipEG',
        value: function skipEG() {
            this.skipBits(1 + this.skipLZ());
        }

        // ():uint

    }, {
        key: 'readUEG',
        value: function readUEG() {
            var clz = this.skipLZ(); // :uint
            return this.readBits(clz + 1) - 1;
        }

        // ():int

    }, {
        key: 'readEG',
        value: function readEG() {
            var valu = this.readUEG(); // :int
            if (0x01 & valu) {
                // the number is odd if the low order bit is set
                return 1 + valu >>> 1; // add 1 to make it even, and divide by 2
            } else {
                return -1 * (valu >>> 1); // divide by two then make it negative
            }
        }

        // Some convenience functions
        // :Boolean

    }, {
        key: 'readBoolean',
        value: function readBoolean() {
            return 1 === this.readBits(1);
        }

        // ():int

    }, {
        key: 'readUByte',
        value: function readUByte() {
            return this.readBits(8);
        }

        // ():int

    }, {
        key: 'readUShort',
        value: function readUShort() {
            return this.readBits(16);
        }
        // ():int

    }, {
        key: 'readUInt',
        value: function readUInt() {
            return this.readBits(32);
        }

        /**
         * Advance the ExpGolomb decoder past a scaling list. The scaling
         * list is optionally transmitted as part of a sequence parameter
         * set and is not relevant to transmuxing.
         * @param count {number} the number of entries in this scaling list
         * @see Recommendation ITU-T H.264, Section 7.3.2.1.1.1
         */

    }, {
        key: 'skipScalingList',
        value: function skipScalingList(count) {
            var lastScale = 8,
                nextScale = 8,
                j,
                deltaScale;
            for (j = 0; j < count; j++) {
                if (nextScale !== 0) {
                    deltaScale = this.readEG();
                    nextScale = (lastScale + deltaScale + 256) % 256;
                }
                lastScale = nextScale === 0 ? lastScale : nextScale;
            }
        }

        /**
         * Read a sequence parameter set and return some interesting video
         * properties. A sequence parameter set is the H264 metadata that
         * describes the properties of upcoming video frames.
         * @param data {Uint8Array} the bytes of a sequence parameter set
         * @return {object} an object with configuration parsed from the
         * sequence parameter set, including the dimensions of the
         * associated video frames.
         */

    }, {
        key: 'readSPS',
        value: function readSPS() {
            var frameCropLeftOffset = 0,
                frameCropRightOffset = 0,
                frameCropTopOffset = 0,
                frameCropBottomOffset = 0,
                profileIdc,

            // profileCompat,
            levelIdc,
                codecWidth,
                codecHeight,
                presentWidth,
                numRefFramesInPicOrderCntCycle,
                picWidthInMbsMinus1,
                picHeightInMapUnitsMinus1,
                frameMbsOnlyFlag,
                scalingListCount,
                i,
                readUByte = this.readUByte.bind(this),
                readBits = this.readBits.bind(this),
                readUEG = this.readUEG.bind(this),
                readBoolean = this.readBoolean.bind(this),
                skipBits = this.skipBits.bind(this),
                skipEG = this.skipEG.bind(this),
                skipUEG = this.skipUEG.bind(this),
                skipScalingList = this.skipScalingList.bind(this);

            readUByte();
            profileIdc = readUByte(); // profile_idc
            readBits(5); // profileCompat constraint_set[0-4]_flag, u(5)
            skipBits(3); // reserved_zero_3bits u(3),
            levelIdc = readUByte(); // level_idc u(8)
            skipUEG(); // seq_parameter_set_id
            var chromaFormatIdc = 1;
            var chromaFormat = 420;
            var chromaFormats = [0, 420, 422, 444];
            var bitDepthLuma = 8;
            var profileIdcs = [100, 110, 122, 244, 44, 83, 86, 118, 128];
            // some profiles have more optional data we don't need
            if (profileIdcs.includes(profileIdc)) {
                chromaFormatIdc = readUEG();
                if (chromaFormatIdc === 3) {
                    skipBits(1); // separate_colour_plane_flag
                }
                if (chromaFormatIdc <= 3) {
                    chromaFormat = chromaFormats[chromaFormatIdc];
                }
                bitDepthLuma = readUEG() + 8; // bit_depth_luma_minus8
                skipUEG(); // bit_depth_chroma_minus8
                skipBits(1); // qpprime_y_zero_transform_bypass_flag
                if (readBoolean()) {
                    // seq_scaling_matrix_present_flag
                    scalingListCount = chromaFormatIdc !== 3 ? 8 : 12;
                    for (i = 0; i < scalingListCount; i++) {
                        if (readBoolean()) {
                            // seq_scaling_list_present_flag[ i ]
                            i < 6 ? skipScalingList(16) : skipScalingList(64);
                        }
                    }
                }
            }
            skipUEG(); // log2_max_frame_num_minus4
            var picOrderCntType = readUEG();
            if (picOrderCntType === 0) {
                readUEG(); // log2_max_pic_order_cnt_lsb_minus4
            } else if (picOrderCntType === 1) {
                skipBits(1); // delta_pic_order_always_zero_flag
                skipEG(); // offset_for_non_ref_pic
                skipEG(); // offset_for_top_to_bottom_field
                numRefFramesInPicOrderCntCycle = readUEG();
                for (i = 0; i < numRefFramesInPicOrderCntCycle; i++) {
                    skipEG(); // offset_for_ref_frame[ i ]
                }
            }
            var refFrames = readUEG(); // max_num_ref_frames
            skipBits(1); // gaps_in_frame_num_value_allowed_flag
            picWidthInMbsMinus1 = readUEG();
            picHeightInMapUnitsMinus1 = readUEG();
            frameMbsOnlyFlag = readBits(1);
            if (frameMbsOnlyFlag === 0) {
                skipBits(1); // mb_adaptive_frame_field_flag
            }
            skipBits(1); // direct_8x8_inference_flag
            if (readBoolean()) {
                // frame_cropping_flag
                frameCropLeftOffset = readUEG();
                frameCropRightOffset = readUEG();
                frameCropTopOffset = readUEG();
                frameCropBottomOffset = readUEG();
            }
            var frameRate = {
                fps: 0,
                fpsFixed: true,
                fpsNum: 0,
                fpsDen: 0
            };
            var pixelRatio = [1, 1];
            if (readBoolean()) {
                // vui_parameters_present_flag
                if (readBoolean()) {
                    // aspect_ratio_info_present_flag
                    var aspectRatioIdc = readUByte();
                    switch (aspectRatioIdc) {
                        case 1:
                            pixelRatio = [1, 1];
                            break;
                        case 2:
                            pixelRatio = [12, 11];
                            break;
                        case 3:
                            pixelRatio = [10, 11];
                            break;
                        case 4:
                            pixelRatio = [16, 11];
                            break;
                        case 5:
                            pixelRatio = [40, 33];
                            break;
                        case 6:
                            pixelRatio = [24, 11];
                            break;
                        case 7:
                            pixelRatio = [20, 11];
                            break;
                        case 8:
                            pixelRatio = [32, 11];
                            break;
                        case 9:
                            pixelRatio = [80, 33];
                            break;
                        case 10:
                            pixelRatio = [18, 11];
                            break;
                        case 11:
                            pixelRatio = [15, 11];
                            break;
                        case 12:
                            pixelRatio = [64, 33];
                            break;
                        case 13:
                            pixelRatio = [160, 99];
                            break;
                        case 14:
                            pixelRatio = [4, 3];
                            break;
                        case 15:
                            pixelRatio = [3, 2];
                            break;
                        case 16:
                            pixelRatio = [2, 1];
                            break;
                        case 255:
                            {
                                pixelRatio = [readUByte() << 8 | readUByte(), readUByte() << 8 | readUByte()];
                                break;
                            }
                    }
                }
                if (readBoolean()) {
                    // overscan_info_present_flag
                    readBoolean(); // overscan_appropriate_flag
                }
                if (readBoolean()) {
                    // video_signal_type_present_flag
                    readBits(4); // video_format & video_full_range_flag
                    if (readBoolean()) {
                        // colour_description_present_flag
                        readBits(24); // colour_primaries & transfer_characteristics & matrix_coefficients
                    }
                }
                if (readBoolean()) {
                    // chroma_loc_info_present_flag
                    readUEG(); // chroma_sample_loc_type_top_field
                    readUEG(); // chroma_sample_loc_type_bottom_field
                }

                if (readBoolean()) {
                    // timing_info_present_flag
                    var numUnitInTick = readBits(32);
                    frameRate.fpsNum = readBits(32);
                    frameRate.fixed = this.readBoolean();
                    frameRate.fpsDen = numUnitInTick * 2;
                    frameRate.fps = frameRate.fpsNum / frameRate.fpsDen;
                }
                var cropUnitX = 0,
                    cropUnitY = 0;
                if (chromaFormatIdc === 0) {
                    cropUnitX = 1;
                    cropUnitX = 2 - frameMbsOnlyFlag;
                } else {
                    var subWc = chromaFormatIdc === 3 ? 1 : 2;
                    var subHc = chromaFormatIdc === 1 ? 2 : 1;
                    cropUnitX = subWc;
                    cropUnitY = subHc * (2 - frameMbsOnlyFlag);
                }

                codecWidth = (picWidthInMbsMinus1 + 1) * 16;
                codecHeight = (2 - frameMbsOnlyFlag) * ((picHeightInMapUnitsMinus1 + 1) * 16);

                codecWidth -= (frameCropLeftOffset + frameCropRightOffset) * cropUnitX;
                codecHeight -= (frameCropTopOffset + frameCropBottomOffset) * cropUnitY;

                var pixelScale = pixelRatio[0] === 1 || pixelRatio[1] === 1 ? 1 : pixelRatio[0] / pixelRatio[1];

                presentWidth = pixelScale * codecWidth;
            }
            return {
                profileIdc: profileIdc,
                levelIdc: levelIdc,
                refFrames: refFrames,
                chromaFormat: chromaFormat,
                bitDepth: bitDepthLuma,
                frameRate: frameRate,
                codecSize: {
                    width: codecWidth,
                    height: codecHeight
                },
                presentSize: {
                    width: presentWidth,
                    height: codecHeight
                },
                width: Math.ceil((picWidthInMbsMinus1 + 1) * 16 - frameCropLeftOffset * 2 - frameCropRightOffset * 2),
                height: (2 - frameMbsOnlyFlag) * (picHeightInMapUnitsMinus1 + 1) * 16 - (frameMbsOnlyFlag ? 2 : 4) * (frameCropTopOffset + frameCropBottomOffset),
                pixelRatio: pixelRatio
            };
        }
    }, {
        key: 'readSliceType',
        value: function readSliceType() {
            // skip NALu type
            this.readUByte();
            // discard first_mb_in_slice
            this.readUEG();
            // return slice_type
            return this.readUEG();
        }
    }]);

    return ExpGolomb;
}();

exports.default = ExpGolomb;

/***/ }),

/***/ "./src/utils/Log.js":
/*!**************************!*\
  !*** ./src/utils/Log.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
    function Logger() {
        _classCallCheck(this, Logger);
    }

    _createClass(Logger, null, [{
        key: "log",
        value: function log() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            window.console.log.apply(window, args);
        }
    }, {
        key: "info",
        value: function info() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            window.console.info.apply(window, args);
        }
    }, {
        key: "error",
        value: function error() {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            window.console.error.apply(window, args);
        }
    }, {
        key: "warn",
        value: function warn() {
            for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
            }

            window.console.warn.apply(window, args);
        }
    }]);

    return Logger;
}();

exports.default = Logger;

/***/ }),

/***/ "./src/utils/Observer.js":
/*!*******************************!*\
  !*** ./src/utils/Observer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author fuyuhao
 */

var nativeSlice = Array.prototype.slice;

var Observer = function () {
  function Observer() {
    _classCallCheck(this, Observer);

    this.fnId = 1;
    this._listenerIdMap = {};
    this._listeners = {};
  }

  _createClass(Observer, [{
    key: "on",
    value: function on(key, fn) {
      var fnId = this.fnId++;
      var listeners = this._getListenersByKey(key);
      this._listenerIdMap[fnId] = fn;
      if (listeners) {
        listeners.unshift(fnId);
        return fnId;
      }
      this._listeners[key] = [fnId];
      return fnId;
    }
  }, {
    key: "emit",
    value: function emit(key) {
      var args = nativeSlice.call(arguments, 1);
      var listeners = this._getListenersByKey(key) || [];
      for (var i = 0, len = listeners.length; i < len; i++) {
        var fn = this._getListenerById(listeners[i]);
        fn && fn.apply(null, args);
      }
    }
  }, {
    key: "once",
    value: function once(key, fn) {
      var fnId = this.fnId++;
      var listeners = this._getListenersByKey(key);
      var _this = this;

      function onceFunc() {
        var args = nativeSlice.call(arguments);
        fn.apply(null, args);
        _this.off(key, fnId);
      }
      this._listenerIdMap[fnId] = onceFunc;
      if (listeners) {
        listeners.unshift(fnId);
        return fnId;
      }
      this._listeners[key] = [fnId];
      return fnId;
    }
  }, {
    key: "off",
    value: function off(key, fnId) {
      var listeners = this._getListenersByKey(key);
      var fn = this._getListenerById(fnId);
      if (!fn || !listeners || listeners.indexOf(fnId) < 0) {
        return;
      }
      delete this._listenerIdMap[fnId];
      if (listeners.length === 1) {
        delete this._listeners[key];
      } else {
        listeners[listeners.indexOf(fnId)] = undefined;
      }
    }
  }, {
    key: "_getListenersByKey",
    value: function _getListenersByKey(key) {
      return this._listeners[key];
    }
  }, {
    key: "_getListenerById",
    value: function _getListenerById(fnId) {
      return this._listenerIdMap[fnId];
    }
  }, {
    key: "flush",
    value: function flush(key) {
      var _this2 = this;

      var listeners = this._getListenersByKey(key);
      if (listeners) {
        listeners.forEach(function (fnId) {
          delete _this2._listenerIdMap[fnId];
        });
        delete this._listeners[key];
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._listeners = null;
      this._listenerIdMap = null;
    }
  }]);

  return Observer;
}();

exports.default = new Observer();

/***/ }),

/***/ "./src/utils/UTF8.js":
/*!***************************!*\
  !*** ./src/utils/UTF8.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable */
var UTF8 = function () {
    function UTF8() {
        _classCallCheck(this, UTF8);
    }

    _createClass(UTF8, null, [{
        key: 'decode',
        value: function decode(uint8array) {
            var out = [];
            var input = uint8array;
            var i = 0;
            var length = uint8array.length;

            while (i < length) {
                if (input[i] < 0x80) {
                    out.push(String.fromCharCode(input[i]));
                    ++i;
                    continue;
                } else if (input[i] < 0xC0) {
                    // fallthrough
                } else if (input[i] < 0xE0) {
                    if (UTF8._checkContinuation(input, i, 1)) {
                        var ucs4 = (input[i] & 0x1F) << 6 | input[i + 1] & 0x3F;
                        if (ucs4 >= 0x80) {
                            out.push(String.fromCharCode(ucs4 & 0xFFFF));
                            i += 2;
                            continue;
                        }
                    }
                } else if (input[i] < 0xF0) {
                    if (UTF8._checkContinuation(input, i, 2)) {
                        var _ucs = (input[i] & 0xF) << 12 | (input[i + 1] & 0x3F) << 6 | input[i + 2] & 0x3F;
                        if (_ucs >= 0x800 && (_ucs & 0xF800) !== 0xD800) {
                            out.push(String.fromCharCode(_ucs & 0xFFFF));
                            i += 3;
                            continue;
                        }
                    }
                } else if (input[i] < 0xF8) {
                    if (UTF8._checkContinuation(input, i, 3)) {
                        var _ucs2 = (input[i] & 0x7) << 18 | (input[i + 1] & 0x3F) << 12 | (input[i + 2] & 0x3F) << 6 | input[i + 3] & 0x3F;
                        if (_ucs2 > 0x10000 && _ucs2 < 0x110000) {
                            _ucs2 -= 0x10000;
                            out.push(String.fromCharCode(_ucs2 >>> 10 | 0xD800));
                            out.push(String.fromCharCode(_ucs2 & 0x3FF | 0xDC00));
                            i += 4;
                            continue;
                        }
                    }
                }
                out.push(String.fromCharCode(0xFFFD));
                ++i;
            }

            return out.join('');
        }
    }, {
        key: '_checkContinuation',
        value: function _checkContinuation(uint8array, start, checkLength) {
            var array = uint8array;
            if (start + checkLength < array.length) {
                while (checkLength--) {
                    if ((array[++start] & 0xC0) !== 0x80) return false;
                }
                return true;
            } else {
                return false;
            }
        }
    }]);

    return UTF8;
}();

exports.default = UTF8;

/***/ }),

/***/ "./src/utils/funcUtils.js":
/*!********************************!*\
  !*** ./src/utils/funcUtils.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.debounce = debounce;
function debounce(func, wait, immediate) {
    var timeout, result;

    var debounced = function debounced(args) {
        if (timeout) {
            clearTimeout(timeout);
        }
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(func, wait);
            if (callNow) {
                result = func();
            }
        } else {
            timeout = setTimeout(func, wait);
        }

        return result;
    };

    debounced.cancel = function () {
        clearTimeout(timeout);
        timeout = null;
    };

    return debounced;
}

var cacheWrapper = exports.cacheWrapper = function cacheWrapper(fn) {

    var cache = {};
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var key = args.reduce(function (pre, cur) {
            return pre + '_' + cur;
        }, '');
        var result = fn.apply(undefined, args);
        if (cache[key] !== undefined) {
            return cache[key];
        } else {
            cache[key] = result;
            return result;
        }
    };
};

/***/ }),

/***/ "./src/utils/sniffer.js":
/*!******************************!*\
  !*** ./src/utils/sniffer.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// 字节序是否是 小字节序 是反的
var le = function () {
    var buf = new ArrayBuffer(2);
    new DataView(buf).setInt16(0, 256, true); // little-endian write
    return new Int16Array(buf)[0] === 256; // platform-spec read, if equal then LE
}();
var sniffer = {
    get device() {
        var r = sniffer.os;
        return r.isPc ? 'pc' : r.isTablet ? 'tablet' : 'mobile';
    },
    get browser() {
        var ua = navigator.userAgent.toLowerCase();
        var reg = {
            ie: /rv:([\d.]+)\) like gecko/,
            firfox: /firefox\/([\d.]+)/,
            chrome: /chrome\/([\d.]+)/,
            opera: /opera.([\d.]+)/,
            safari: /version\/([\d.]+).*safari/
        };
        return [].concat(Object.keys(reg).filter(function (key) {
            return reg[key].test(ua);
        }))[0];
    },
    get os() {
        var ua = navigator.userAgent,
            isWindowsPhone = /(?:Windows Phone)/.test(ua),
            isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
            isAndroid = /(?:Android)/.test(ua),
            isFireFox = /(?:Firefox)/.test(ua),
            isTablet = /(?:iPad|PlayBook)/.test(ua) || isAndroid && !/(?:Mobile)/.test(ua) || isFireFox && /(?:Tablet)/.test(ua),
            isPhone = /(?:iPhone)/.test(ua) && !isTablet,
            isPc = !isPhone && !isAndroid && !isSymbian;
        return {
            isTablet: isTablet,
            isPhone: isPhone,
            isAndroid: isAndroid,
            isPc: isPc,
            isSymbian: isSymbian,
            isWindowsPhone: isWindowsPhone,
            isFireFox: isFireFox
        };
    },
    get isLe() {
        return le;
    }
};

exports.default = sniffer;

/***/ }),

/***/ "./src/write/Buffer.js":
/*!*****************************!*\
  !*** ./src/write/Buffer.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _concatTypedArray = __webpack_require__(/*! concat-typed-array */ "./node_modules/concat-typed-array/lib/index.js");

var _concatTypedArray2 = _interopRequireDefault(_concatTypedArray);

var _Log = __webpack_require__(/*! ../utils/Log */ "./src/utils/Log.js");

var _Log2 = _interopRequireDefault(_Log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Buffer = function () {
    function Buffer(buffer) {
        _classCallCheck(this, Buffer);

        this.buffer = buffer || new Uint8Array(0);
    }

    _createClass(Buffer, [{
        key: 'write',
        value: function write() {
            var _this = this;

            for (var _len = arguments.length, buffer = Array(_len), _key = 0; _key < _len; _key++) {
                buffer[_key] = arguments[_key];
            }

            buffer.forEach(function (item) {
                if (item) {
                    _this.buffer = (0, _concatTypedArray2.default)(Uint8Array, _this.buffer, item);
                } else {
                    _Log2.default.error(item);
                }
            });
        }
    }], [{
        key: 'writeUint32',
        value: function writeUint32(value) {
            return new Uint8Array([value >> 24, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff]);
        }
    }, {
        key: 'readAsInt',
        value: function readAsInt(arr) {
            var temp = '';
            function padStart4Hex(hexNum) {
                var hexStr = hexNum.toString(16);
                return hexStr.padStart(2, '0');
            }
            arr.forEach(function (num) {
                temp += padStart4Hex(num);
            });
            return parseInt(temp, 16);
        }
    }]);

    return Buffer;
}();

exports.default = Buffer;

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ }),

/***/ "xgplayer":
/*!*************************!*\
  !*** external "Player" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["Player"]; }());

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GbHZQbGF5ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vbm9kZV9tb2R1bGVzL2NvbmNhdC10eXBlZC1hcnJheS9saWIvY29uY2F0LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL25vZGVfbW9kdWxlcy9jb25jYXQtdHlwZWQtYXJyYXkvbGliL2luZGV4LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL25vZGVfbW9kdWxlcy9kL2luZGV4LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL25vZGVfbW9kdWxlcy9lczUtZXh0L2Z1bmN0aW9uL25vb3AuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L2Fzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvYXNzaWduL2lzLWltcGxlbWVudGVkLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9hc3NpZ24vc2hpbS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvaXMtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L2tleXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L2tleXMvaXMtaW1wbGVtZW50ZWQuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L2tleXMvc2hpbS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3Qvbm9ybWFsaXplLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L3ZhbGlkLWNhbGxhYmxlLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC92YWxpZC12YWx1ZS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9zdHJpbmcvIy9jb250YWlucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9zdHJpbmcvIy9jb250YWlucy9pcy1pbXBsZW1lbnRlZC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9zdHJpbmcvIy9jb250YWlucy9zaGltLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL25vZGVfbW9kdWxlcy9ldmVudC1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL25vZGVfbW9kdWxlcy90eXBlL2Z1bmN0aW9uL2lzLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL25vZGVfbW9kdWxlcy90eXBlL29iamVjdC9pcy5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9ub2RlX21vZHVsZXMvdHlwZS9wbGFpbi1mdW5jdGlvbi9pcy5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9ub2RlX21vZHVsZXMvdHlwZS9wcm90b3R5cGUvaXMuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vbm9kZV9tb2R1bGVzL3R5cGUvdmFsdWUvaXMuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL0Zsdi5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvY29uc3RhbnRzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvY29uc3RhbnRzL21ldGFGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL2NvbnN0YW50cy90eXBlcy5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL21vZGVscy9NZWRpYUluZm8uanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL21vZGVscy9NZWRpYVNhbXBsZS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvbW9kZWxzL01lZGlhU2VnbWVudC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvbW9kZWxzL01lZGlhU2VnbWVudExpc3QuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL21vZGVscy9TdG9yZS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvbW9kZWxzL1RhZy5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvbW9kZWxzL2Vycm9yLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL3NyYy9wYXJzZS9GbHZQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL3BhcnNlL01TRS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvcGFyc2UvTWFpblBhcnNlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvcGFyc2UvU1BTUGFyc2VyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL3NyYy9wYXJzZS9UcmFuc0NvZGVyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL3NyYy9wYXJzZS9kZW11eC9BdWRpb0RlbXV4ZXIuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL3BhcnNlL2RlbXV4L0RlbXV4ZXIuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL3BhcnNlL2RlbXV4L01ldGFEZW11eGVyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL3NyYy9wYXJzZS9kZW11eC9UYWdEZW11eGVyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL3NyYy9wYXJzZS9kZW11eC9WaWRlb0RlbXV4ZXIuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL3BhcnNlL3JlbXV4L0ZtcDQuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL3BhcnNlL3JlbXV4L01wNHJlbXV4LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL3NyYy9wYXJzZS9yZW11eC9SZW11eGVyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL3NyYy90YXNrcy9MaXZlVGFzay5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvdGFza3MvVm9kVGFzay5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvdGFza3MvbG9hZGVycy9GZXRjaExvYWRlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvdGFza3MvbG9hZGVycy9YSFJMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL3V0aWxzL0RhdGFWaWV3NFJlYWQuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL3V0aWxzL0V4cEdvbG9tYi5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvdXRpbHMvTG9nLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL3NyYy91dGlscy9PYnNlcnZlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvdXRpbHMvVVRGOC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvdXRpbHMvZnVuY1V0aWxzLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL3NyYy91dGlscy9zbmlmZmVyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL3NyYy93cml0ZS9CdWZmZXIuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyL2V4dGVybmFsIFwiUGxheWVyXCIiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiUmVzdWx0Q29uc3RydWN0b3IiLCJ0b3RhbExlbmd0aCIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcnJheXMiLCJBcnJheSIsIl9rZXkiLCJfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uIiwiX2RpZEl0ZXJhdG9yRXJyb3IiLCJfaXRlcmF0b3JFcnJvciIsInVuZGVmaW5lZCIsIl9pdGVyYXRvciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiX3N0ZXAiLCJuZXh0IiwiZG9uZSIsImFyciIsImVyciIsInJldHVybiIsInJlc3VsdCIsIm9mZnNldCIsIl9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yIiwiX2RpZEl0ZXJhdG9yRXJyb3IyIiwiX2l0ZXJhdG9yRXJyb3IyIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9hcnIiLCJzZXQiLCJfY29uY2F0IiwicmVxdWlyZSIsIl9jb25jYXQyIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJtb2R1bGUiLCJpc1ZhbHVlIiwiaXNQbGFpbkZ1bmN0aW9uIiwiYXNzaWduIiwibm9ybWFsaXplT3B0cyIsImNvbnRhaW5zIiwiZCIsImRzY3IiLCJjIiwiZSIsInciLCJvcHRpb25zIiwiZGVzYyIsImNhbGwiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJncyIsImdldCIsImZvbyIsImJhciIsInRyenkiLCJrZXlzIiwibWF4IiwiTWF0aCIsImRlc3QiLCJzcmMiLCJlcnJvciIsImkiLCJrZXkiLCJmb3JFYWNoIiwiX3VuZGVmaW5lZCIsInZhbCIsIm9iamVjdCIsInByb3RvdHlwZSIsImNyZWF0ZSIsInByb2Nlc3MiLCJvcHRzMSIsImZuIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwic3RyIiwiaW5kZXhPZiIsInNlYXJjaFN0cmluZyIsImNhbGxhYmxlIiwiYXBwbHkiLCJGdW5jdGlvbiIsImRlZmluZVByb3BlcnRpZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImRlc2NyaXB0b3IiLCJvbiIsIm9uY2UiLCJvZmYiLCJlbWl0IiwibWV0aG9kcyIsImRlc2NyaXB0b3JzIiwiYmFzZSIsInR5cGUiLCJsaXN0ZW5lciIsImRhdGEiLCJfX2VlX18iLCJwdXNoIiwic2VsZiIsIl9fZWVPbmNlTGlzdGVuZXJfXyIsImxpc3RlbmVycyIsImNhbmRpZGF0ZSIsInNwbGljZSIsImwiLCJhcmdzIiwic2xpY2UiLCJvIiwiaXNQcm90b3R5cGUiLCJwb3NzaWJsZVR5cGVzIiwiaXNGdW5jdGlvbiIsImNsYXNzUmUiLCJmdW5jdGlvblRvU3RyaW5nIiwidG9TdHJpbmciLCJ0ZXN0IiwiaXNPYmplY3QiLCJjb25zdHJ1Y3RvciIsIkZsdiIsInBsYXllciIsIl9wbGF5ZXIiLCJfb3B0aW9ucyIsImZsdlBsYXllciIsIk1haW5QYXJzZXIiLCJtc2UiLCJNU0UiLCJ2aWRlbyIsImlzU2Vla2luZyIsImlzRGF0YUxvYWRpbmciLCJ0ZW1wQ3VycmVudFRpbWUiLCJ0ZW1wRmx2UGxheWVyIiwiaXNDaGFuZ2luZ1NyYyIsImluaXRQbGF5ZXJFdmVudHMiLCJpbml0Rmx2UGxheWVyRXZlbnRzIiwiaW5pdE1zZUV2ZW50cyIsInN0YXJ0TG9hZERhdGEiLCJoYW5kbGVTZWVraW5nIiwiYnVmZmVyZWQiLCJjdXJyZW50VGltZSIsImlzQnVmZmVyZWQiLCJsZW4iLCJzdGFydCIsImVuZCIsIlZvZFRhc2siLCJjbGVhciIsImlzU2Vla2FibGUiLCJzZWVrIiwiaXNMaXZlIiwiaGFuZGxlVGltZVVwZGF0ZSIsImlzTWVkaWFJbmZvUmVhZHkiLCJwcm9ncmVzc0NoZWNrZXIiLCJpc0VuZGVkIiwiX3JlcGxheSIsImRlc3Ryb3kiLCJfbXNlIiwicmVwbGF5IiwiaXNTb3VyY2VPcGVuIiwiYXBwZW5kQnVmZmVyIiwiZnR5cF9tb292IiwiYnVmZmVyIiwic2V0VGltZW91dCIsInBsYXkiLCJwZW5kaW5nRnJhZ21lbnRzIiwiaGFzUGVuZGluZ0ZyYWdtZW50cyIsImZyYWdtZW50Iiwic2hpZnQiLCJ1bnNoaWZ0IiwidXJsIiwic3dpdGNoVVJMIiwiY29uZmlnIiwiaXNUZW1wUGxheWVyIiwiaGFuZGxlTWVkaWFGcmFnbWVudCIsInVuYmluZEZsdlBsYXllckV2ZW50cyIsImhhbmRsZVNlZWtFbmQiLCJoYW5kbGVFcnJvciIsImhhbmRsZUZ0eXBNb292IiwiZnR5cE1vb3YiLCJvblNvdXJjZU9wZW4iLCJsb2FkU2VnbWVudHMiLCJwcmVsb2FkVGltZSIsIm1pbkNhY2hlZFRpbWUiLCJyYW5nZSIsImdldEJ1ZmZlcmVkUmFuZ2UiLCJ2aWRlb0R1cmF0aW9uIiwidmlkZW9UaW1lU2NhbGUiLCJ0aGVuIiwiZmx2IiwiZW5kT2ZTdHJlYW0iLCJwYXVzZSIsImdldERlZmF1bHRDb25mIiwiYXV0b0NsZWFuU291cmNlQnVmZmVyIiwiYXV0b0NsZWFuTWF4QmFja1RpbWUiLCJjb3JzIiwiZmllbGRzIiwibmFtZSIsIkJvb2xlYW4iLCJwYXJzZXIiLCJ0YXJnZXQiLCJvcmlnaW4iLCJtZWRpYUluZm8iLCJkdXJhdGlvbiIsImhhc0F1ZGlvIiwiaGFzVmlkZW8iLCJOdW1iZXIiLCJhdWRpb0RhdGFSYXRlIiwiYXVkaW9kYXRhcmF0ZSIsInZpZGVvRGF0YVJhdGUiLCJ2aWRlb2RhdGFyYXRlIiwid2lkdGgiLCJoZWlnaHQiLCJzdGF0ZSIsImZsb29yIiwidGltZVNjYWxlIiwib25UeXBlRXJyIiwiZnBzTnVtIiwiZnJhbWVyYXRlIiwiZnBzIiwicmVmZXJGcmFtZVJhdGUiLCJmaXhlZCIsImZwc0RlbiIsImtleWZyYW1lcyIsImhhc0tleWZyYW1lcyIsIl9wYXJzZUtleWZyYW1lcyIsIk1ldGFUeXBlcyIsIk5VTUJFUiIsIkJPT0xFQU4iLCJTVFJJTkciLCJPQkpFQ1QiLCJNSVhfQVJSQVkiLCJPQkpFQ1RfRU5EIiwiU1RSSUNUX0FSUkFZIiwiREFURSIsIkxPTkVfU1RSSU5HIiwiRXZlbnRUeXBlcyIsIkRBVEFfUkVBRFkiLCJNRVRBX0RBVEFfUkVBRFkiLCJUUkFDS19NRVRBX1JFQURZIiwiTUVESUFfSU5GT19SRUFEWSIsIk1FVEFfRU5EX1BPU0lUSU9OIiwiRVJST1IiLCJzb3VuZFJhdGVUeXBlcyIsIkF1ZGlvT2JqZWN0VHlwZXMiLCJzYW1wbGluZ0ZyZXF1ZW5jeVR5cGVzIiwiYnJvd3NlclR5cGVzIiwiSUUiLCJGSVJFX0ZPWCIsIkNIUk9NRSIsIk9QRVJBIiwiU0FGQVJJIiwibXAzVmVyc2lvbnMiLCJWMjUiLCJSRVNFUlZFRCIsIlYyMCIsIlYxMCIsImF1ZGlvU2FtcGxlUmF0ZSIsIm1wM0JpdFJhdGUiLCJMYXllcjEiLCJMYXllcjIiLCJMYXllcjMiLCJGbHZQbGF5ZXIiLCJfX2Zsdl9fIiwiaW5pdCIsInN0YXJ0c1dpdGgiLCJsb2FkIiwiYXV0b3BsYXkiLCJjcmVhdGVJbnN0YW5jZSIsIlBsYXllciIsInV0aWwiLCJhZGRDbGFzcyIsInJvb3QiLCJsaXZlIiwiY3JlYXRlRG9tIiwiY29udHJvbHMiLCJhcHBlbmRDaGlsZCIsImluaXRlZCIsIk1lZGlhSW5mbyIsIl9kZWZhdWx0IiwibWltZVR5cGUiLCJjb2RlYyIsImF1ZGlvQ29kZWMiLCJ2aWRlb0NvZGVjIiwiYXVkaW9DaGFubmVsQ291bnQiLCJhdWRpb0NvbmZpZyIsInByb2ZpbGUiLCJsZXZlbCIsImNocm9tYUZvcm1hdCIsInBpeGVsUmF0aW8iLCJfbWV0YURhdGEiLCJzZWdtZW50cyIsImluaXREYXRhIiwiZW50cmllcyIsImsiLCJ2IiwiaXNWaWRlb0luZm9GaWxsZWQiLCJpc0F1ZGlvSW5mb0ZpbGxlZCIsIm5vdE51bGxGaWVsZHMiLCJNZWRpYVNhbXBsZSIsImluZm8iLCJnZXREZWZhdWx0SW5mIiwic2FtcGxlIiwiZHRzIiwicHRzIiwicG9zaXRpb24iLCJpc1JBUCIsIm9yaWdpbkR0cyIsIk1lZGlhU2VnbWVudCIsInN0YXJ0RHRzIiwiZW5kRHRzIiwic3RhcnRQdHMiLCJlbmRQdHMiLCJvcmlnaW5TdGFydER0cyIsIm9yaWdpbkVuZER0cyIsInJhbmRvbUFjY2Vzc1BvaW50cyIsImZpcnN0U2FtcGxlIiwibGFzdFNhbXBsZSIsIk1lZGlhU2VnbWVudExpc3QiLCJfdHlwZSIsIl9saXN0IiwiX2xhc3RBcHBlbmRMb2NhdGlvbiIsImJlZ2luRHRzIiwibGlzdCIsImxhc3QiLCJtaWQiLCJsYm91bmQiLCJ1Ym91bmQiLCJpZHgiLCJfc2VhcmNoTmVhcmVzdFNlZ21lbnRCZWZvcmUiLCJzZWdtZW50IiwibGFzdEFwcGVuZElkeCIsImluc2VydElkeCIsImdldExhc3RTZWdtZW50QmVmb3JlIiwic2VnbWVudElkeCIsIlN0b3JlIiwiaXNMZSIsInNuaWZmZXIiLCJfaGFzQXVkaW8iLCJfaGFzVmlkZW8iLCJfbWVkaWFJbmZvIiwiX3ZpZGVvVHJhY2siLCJpZCIsInNhbXBsZXMiLCJfYXVkaW9UcmFjayIsIl92aWRlb01ldGFEYXRhIiwiX2F1ZGlvTWV0YURhdGEiLCJfYXVkaW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkIiwiX3ZpZGVvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZCIsInRhZ3MiLCJ0aW1lU3RhbXBCYXNlIiwiaGFzVmlkZW9GbGFnT3ZlcnJpZGVkIiwiaGFzQXVkaW9GbGFnT3ZlcnJpZGVkIiwiZHVyYXRpb25PdmVycmlkZWQiLCJuYWx1TGVuZ3RoU2l6ZSIsIl9yZWZlckZyYW1lUmF0ZSIsIm1ldGFFbmRQb3NpdGlvbiIsIl9pc0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWQiLCJiaW5kIiwicG9zIiwiRmx2VGFnIiwidGFnVHlwZSIsImJvZHlTaXplIiwidGFnU2l6ZSIsIlRpbWVzdGFtcCIsIlN0cmVhbUlEIiwiYm9keSIsInRpbWUiLCJwb3AiLCJqb2luIiwicGFyc2VJbnQiLCJFcnJvclR5cGVzIiwibmV0d29yayIsImNvZGUiLCJtc2ciLCJyZW1hcmsiLCJwYXJzZSIsImZvcm1hdCIsImRlY29kZXIiLCJydW50aW1lIiwidGltZW91dCIsIm90aGVyIiwiRXJyb3JzIiwibmV0d29ya1N0YXRlIiwicmVhZHlTdGF0ZSIsImN1cnJlbnRTcmMiLCJlbmRlZCIsImVycmQiLCJsaW5lIiwiaGFuZGxlIiwidmVyc2lvbiIsInIiLCJwbGF5ZXJWZXJzaW9uIiwiZXJyb3JUeXBlIiwiZG9tYWluIiwiZG9jdW1lbnQiLCJleCIsIkZsdlBhcnNlciIsInN0b3JlIiwiQ0xBU1NfTkFNRSIsInRlbXBfdThhIiwiZGF0YUxlbiIsInN0b3AiLCJpbmRleCIsImZpbGVQb3NpdGlvbiIsImZpcnN0RmxhZyIsImZsdlU4YSIsInRlbXBVOGEiLCJwYXJzZURhdGEiLCJpc0ZsdkhlYWQiLCJwYXJzZUhlYWQiLCJyZWFkRGF0YSIsInU4YUxlbmd0aCIsInRhZyIsIlRhZyIsInVucmVhZExlbmd0aCIsIlN0cmFtSWQiLCJnZXRCb2R5U2l6ZSIsIl9zdG9yZSIsInNpemVBcnIiLCJCdWZmZXIiLCJyZWFkQXNJbnQiLCJtYXRjaCIsImZsYWciLCJfaW5kZXgiLCJmaXJzdFRocmVlQ2hhcnMiLCJmcm9tQ2hhckNvZGUiLCJEZW11eGVyIiwiY291bnQiLCJtZWRpYUVsZW1lbnQiLCJjb2RlY3MiLCJtZWRpYVNvdXJjZSIsIndpbmRvdyIsIk1lZGlhU291cmNlIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaGFuZGxlU291cmNlT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzb3VyY2VCdWZmZXIiLCJhZGRTb3VyY2VCdWZmZXIiLCJ1cGRhdGluZyIsIkVycm9yIiwicmVtb3ZlIiwiaXNUeXBlU3VwcG9ydGVkIiwiTk9PUCIsIl9jb25maWciLCJfdGVtcEJhc2VUaW1lIiwiZmx2UGFyc2VyIiwidGFnRGVtdXhlciIsIlRhZ0RlbXV4ZXIiLCJtcDRyZW11eGVyIiwiTXA0UmVtdXhlciIsImJ1ZmZlcktleWZyYW1lcyIsIlNldCIsIk1FVEFfQ0hVTktfU0laRSIsInBvdyIsIkNIVU5LX1NJWkUiLCJfaXNOZXdTZWdtZW50c0Fycml2YWwiLCJsb2FkVGFzayIsIl9wZW5kaW5nRnJhZ21lbnRzIiwiX3BlbmRpbmdSZW1vdmVSYW5nZSIsImVycl9jbnQiLCJyZXF1ZXN0Q29uZmlnIiwibW9kZSIsImluaXRFdmVudEJpbmQiLCJpbml0TWV0YSIsImluaXRMaXZlU3RyZWFtIiwiTGl2ZVRhc2siLCJydW4iLCJsb2FkTGl2ZURhdGEiLCJ3cml0ZSIsIlVpbnQ4QXJyYXkiLCJzZXRGbHYiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIlJlc29sdmVyIiwicmVzb2x2ZUNodW5rIiwidGltZVN0YW1wIiwibG9hZERhdGEiLCJsb2FkTWV0YURhdGEiLCJjYXRjaCIsImNoYW5nZVJhbmdlIiwiX3JhbmdlIiwiZ2V0TmV4dFJhbmdlRW5kIiwiUHJvbWlzZSIsInJlc29sdmUiLCJfbG9hZFNlZ21lbnRzRGF0YSIsInRpbWVzIiwiZmlsZVBvc2l0aW9ucyIsImV4cGVjdEVuZCIsImxlZnQiLCJyaWdodCIsInByb21pc2UiLCJhcnJheUJ1ZmYiLCJiYXNlVGltZSIsImdldFRpbWUiLCJfdGltZXN0YW1wQmFzZSIsInJlc29sdmVUYWdzIiwiaXNQYXJzaW5nIiwiYXVkaW9UcmFjayIsInZpZGVvVHJhY2siLCJyZW11eCIsIm1ldGEiLCJvbk1ldGFEYXRhUmVhZHkiLCJuZXdGcmFnIiwiYWRkIiwicmFwIiwiRlRZUF9NT09WIiwib25NZWRpYUluZm9SZWFkeSIsImhhbmRsZURhdGFSZWFkeSIsImhhbmRsZU1lZGlhSW5mb1JlYWR5IiwiaGFuZGxlTWV0YURhdGFSZWFkeSIsInNldEV2ZW50QmluZCIsImhhbmRsZU5ld01lZGlhRnJhZ21lbnQiLCJjbGVhckJ1ZmZlciIsImNhbmNlbCIsInNlZWtTdGFydCIsInN0YXJ0RmlsZVBvcyIsImVuZEZpbGVQb3MiLCJtaW4iLCJnZXRFbmRGaWxlUG9zIiwibG8iLCJoaSIsIm5leHRUaW1lIiwiTUFYX1NBRkVfSU5URUdFUiIsImV2ZXJ5IiwiY2xlYXJUYWdzIiwic2V0Rmx2Rmlyc3QiLCJzZXRGbHZVc3VhbGx5IiwiaXNDb21wbGV0ZSIsIlRyYW5zQ29kZXIiLCJTUFNQYXJzZXIiLCJwcm9maWxlSWRjIiwibGV2ZWxJZGMiLCJ0b0ZpeGVkIiwiY2hyb21hIiwib3JpZ2luQXJyIiwicmJzcCIsIl9lYnNwMnJic3AiLCJzdHJlYW0iLCJFeHBHb2xvbWIiLCJzcHNDb25maWciLCJyZWFkU1BTIiwicHJvZmlsZVN0cmluZyIsImdldFByb2ZpbGVTdHIiLCJsZXZlbFN0cmluZyIsImdldExldmVsU3RyIiwiY2hyb21hRm9ybWF0U3RyaW5nIiwiZ2V0Q2hyb21hRm9ybWF0U3RyIiwib3JpZ2luTGVuIiwiYnl0ZUxlbmd0aCIsImRpc3QiLCJkaXN0U2l6ZSIsIl9vYnNlcnZlciIsIm9ic2VydmVyIiwiZmx1c2giLCJlcnJvckRldGFpbCIsImVycm9yVG9FbWl0IiwiQXVkaW9EZW11eGVyIiwiY3VycmVudFRhZyIsInJlYWRPZmZzZXQiLCJhdWRpb01ldGFEYXRhIiwidHJhY2siLCJpbml0QXVkaW9NZXRhIiwiZHYiLCJEYXRhVmlldzRSZWFkIiwic291bmQiLCJnZXRVaW50OCIsInNvdW5kRm9ybWF0SWR4Iiwic291bmRSYXRlIiwic291bmRUeXBlIiwiY2hhbm5lbENvdW50IiwiYWFjSW5mbyIsIl9wYXJzZUFBQ0F1ZGlvIiwiYWFjRGF0YSIsInNhbXBsZUZyZXEiLCJwYWNrZXRUeXBlIiwic2FtcGxlUmF0ZSIsIm1hbmlmZXN0Q29kZWMiLCJyZWZTYW1wbGVEdXJhdGlvbiIsImhhc0luaXRpYWxNZXRhRGlzcGF0Y2hlZCIsIm1pIiwicmVwbGFjZSIsImFhY1NhbXBsZSIsInVuaXQiLCJyZXNldFN0YXR1cyIsImFhY0FycmF5IiwiX3BhcnNlQUFDQXVkaW9TcGVjaWZpY0NvbmZpZyIsImdldEFuZE51bSIsInJlc3VsdE9iaiIsInNhbXBsaW5nRnJlcXVlbmN5IiwiZXh0QXVkaW9PYmplY3RUeXBlIiwiZXh0QXVkaW9TYW1wbGluZ0lkeCIsIlVJbnQwIiwiVUludDEiLCJ0ZW1wQXVkaW9PYmplY3RUeXBlIiwiYXVkaW9PYmplY3RUeXBlIiwic2FtcGxpbmdJZHgiLCJlbWl0RXJyb3IiLCJkaXNwYXRjaCIsIlVJbnQyIiwiYnJvd3NlciIsIm9zIiwiaXNBbmRyb2lkIiwiZXh0ZW5zaW9uU2FtcGxpbmdJbmRleCIsImV4dGVuc2lvblNhbXBsaW5nSWR4IiwiZGF0YVNpemUiLCJwcmVmaXgiLCJwYXlsb2FkIiwiTG9nIiwid2FybiIsIk1ldGFEZW11eGVyIiwic2l6ZSIsIm1ldGFEYXRhIiwicGFyc2VWYWx1ZSIsIkRhdGFWaWV3Iiwic3RyTGVuIiwiZ2V0VWludDE2IiwiVVRGOCIsImRlY29kZSIsInRzIiwiZ2V0RmxvYXQ2NCIsInRpbWVPZmZzZXQiLCJnZXRJbnQxNiIsIkRhdGUiLCJwYXJzZVN0cmluZyIsImlzT2JqRW5kIiwiZ2V0VWludDMyIiwiQXJyYXlCdWZmZXIiLCJkYXRhVmlldyIsImJvb2xOdW0iLCJvYmpFbmRTaXplIiwiYW1mT2JqIiwicGFyc2VPYmplY3QiLCJpc09iamVjdEVuZCIsIm1hcmsiLCJhbWZWYXIiLCJtYXJrZXIiLCJhcnJMZW5ndGgiLCJzY3JpcHQiLCJkYXRlIiwicGFyc2VEYXRlIiwibG9uZ1N0ciIsInBhcnNlTG9uZ1N0cmluZyIsIm5hdGl2ZUhhc1Byb3AiLCJUYWdkZW11eCIsIl9tZXRhRGVtdXhlciIsIl92aWRlb0RlbXV4ZXIiLCJWaWRlb0RlbXV4ZXIiLCJfYXVkaW9EZW11eGVyIiwiX2ZpcnN0UGFyc2UiLCJfZGF0YU9mZnNldCIsInJlc29sdmVUYWciLCJfcmVzb2x2ZUF1ZGlvVGFnIiwiX3Jlc29sdmVWaWRlb1RhZyIsIl9yZXNvbHZlTWV0YVRhZyIsInMiLCJoYXNNZXRhRGF0YSIsIkxvZ2dlciIsIm9uTWV0YURhdGEiLCJtZXRhRmllbGRzIiwiZmllbGQiLCJtZXRhT2JqIiwiX2luaXRNZXRhRGF0YSIsImZpbGVwb3NpdGlvbnMiLCJ2aWRlb01ldGFEYXRhIiwiZmlyc3RVSTgiLCJmcmFtZVR5cGUiLCJjb2RlY0lkIiwiX3BhcnNlQVZDUGFja2V0IiwicGFja2FnZVR5cGUiLCJjcHNUaW1lIiwiX3BhcnNlQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQiLCJfcGFyc2VBVkNWaWRlb0RhdGEiLCJhdmNjIiwidGltZXNjYWxlIiwiYXZjUHJvZmlsZSIsImdldFVpbnQiLCJzcHNMZW5ndGgiLCJoYW5kbGVyIiwic3BzIiwicGFyc2VTUFMiLCJjb2RlY1NpemUiLCJwcmVzZW50U2l6ZSIsImZyYW1lUmF0ZSIsInJlZkZyYW1lcyIsImJpdERlcHRoIiwicHJlc2VudFdpZHRoIiwicHJlc2VudEhlaWdodCIsImNvZGVjQXJyIiwic3ViYXJyYXkiLCJjb2RlY1N0ciIsImoiLCJoZXgiLCJwYWRTdGFydCIsInBwcyIsInBwc0NvdW50IiwicHBzU2l6ZSIsIm5hbHVMaXN0IiwibmFsdUxlblNpemUiLCJpc0tleWZyYW1lIiwidGVtcFJlYWRPZmZzZXQiLCJuYWx1U2l6ZSIsImdldFVpbnQyNCIsInVuaXRUeXBlIiwibmFsdVVuaXQiLCJ2aWRlb1NhbXBsZSIsInVuaXRzIiwiY3BzIiwibnVtIiwiRk1QNCIsIndyaXRlVWludDMyIiwiY29udGVudCIsImluaXRCb3giLCJtdmhkIiwidHJhazEiLCJ2aWRlb1RyYWsiLCJ0cmFrMiIsImF1ZGlvVHJhayIsIm12ZXgiLCJpdGVtIiwiYnl0ZXMiLCJ0a2hkIiwibWRpYSIsInNhbXBsZXJhdGUiLCJtZWRpYVRpbWUiLCJtZGhkIiwiaGRsciIsIm1pbmYiLCJleHRlbnNpb24iLCJ2bWhkIiwic21oZCIsImRpbmYiLCJzdGJsIiwiZHJlZiIsInN0c2QiLCJzdHRzIiwic3RzYyIsInN0c3oiLCJzdGNvIiwibXA0YSIsImF2YzEiLCJlc2RzIiwiY29uZmlnbGVuIiwiY29uY2F0IiwiaFNwYWNpbmciLCJ2U3BhY2luZyIsImF2Y2NCdWZmZXIiLCJidHJ0IiwicGFzcCIsIm1laGQiLCJ0cmV4IiwibWZoZCIsInRyYWYiLCJzZXF1ZW5jZSIsInRmaGQiLCJ0ZmR0Iiwic2R0cCIsInRydW4iLCJzZHRwTGVuZ3RoIiwic2FtcGxlQ291bnQiLCJ3cml0ZU9mZnNldCIsInRydW5Cb3giLCJtZGF0Qm94IiwiY2hhckNvZGVBdCIsIl9kdHNCYXNlIiwiX2lzRHRzQmFzZUluaXRlZCIsIl92aWRlb01ldGEiLCJfYXVkaW9NZXRhIiwiX2F1ZGlvTmV4dER0cyIsIl92aWRlb05leHREdHMiLCJfdmlkZW9TZWdtZW50TGlzdCIsIl9hdWRpb1NlZ21lbnRMaXN0IiwiX2ZpbGxTaWxlbmNlRnJhbWUiLCJfZHRzQmFzZUluaXRlZCIsImNhbGNEdHNCYXNlIiwiX3JlbXV4VmlkZW8iLCJfcmVtdXhBdWRpbyIsImZ0eXAiLCJtb292IiwiYXVkaW9CYXNlIiwiSW5maW5pdHkiLCJ2aWRlb0Jhc2UiLCJkdHNDb3JyZWN0aW9uIiwiZmlyc3REdHMiLCJsYXN0RHRzIiwiZmlyc3RQdHMiLCJsYXN0UHRzIiwibXA0U2FtcGxlcyIsInZpZGVvU2VnbWVudCIsImF2Y1NhbXBsZSIsImlzRW1wdHkiLCJsYXN0U2VnbWVudCIsImdhcCIsImxhc3RHYXAiLCJfdW5pdHMiLCJtZGF0U2FtcGxlIiwic2FtcGxlRHVyYXRpb24iLCJuZXh0RHRzIiwiYWRkUkFQIiwiZmlyc3QiLCJtb29mTWRhdCIsIm1vb2YiLCJtZGF0IiwiYXBwZW5kIiwic2lsZW50RHVyYXRpb24iLCJpc0ZpcnN0RHRzSW5pdGVkIiwibmVlZFNpbGVudEZyYW1lIiwiZ2V0TGFzdFNhbXBsZUJlZm9yZSIsInNpbGVudEZyYW1lIiwiaW5pdFNpbGVudEF1ZGlvIiwibXA0U2FtcGxlIiwiY3RzIiwiYXVkaW9TZWdtZW50IiwiZ2V0U2lsZW50RnJhbWUiLCJSZW11eGVyIiwiX2hlYWRlcnMiLCJIZWFkZXJzIiwiaGVhZGVycyIsIm1ldGhvZCIsImNhY2hlIiwiX3N0b3AiLCJyZXF1ZXN0IiwiUmVxdWVzdCIsImNhbGxiYWNrIiwicmVhZGVyIiwicmVhZCIsInByb20iLCJyZWplY3QiLCJpc1RpbWVvdXQiLCJmZXRjaCIsInJlcyIsImdldFJlYWRlciIsIkxvYWRDbHMiLCJGZXRjaExvYWRlciIsIlhIUkxvYWRlciIsImxvYWRlciIsImlzQ2FuY2VsZWQiLCJxdWV1ZSIsInVwZGF0ZSIsImZpbHRlciIsIlF1ZXVlIiwic2VuZGVkIiwid2FpdCIsImxpbWl0IiwiY29tcGxldGUiLCJpc1N0b3BwZWQiLCJub3ciLCJSYW5nZSIsInN0YXR1cyIsIm9rIiwic3RhdHVzVGV4dCIsImFycmF5QnVmZmVyIiwiX3Byb21pc2UiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25hYm9ydCIsIm9ubG9hZCIsInJlc3BvbnNlIiwib25lcnJvciIsIl94aHIiLCJzZW5kIiwiYWJvcnQiLCJjb250ZXh0IiwiX2R2IiwiX2NvbnRleHQiLCJpbml0UHJveHkiLCJpc0hpZ2giLCJyZWFkU2l6ZSIsIm51bVRvQW5kIiwiYmVnaW4iLCJieXRlc0F2YWlsYWJsZSIsIndvcmQiLCJiaXRzQXZhaWxhYmxlIiwid29ya2luZ0J5dGVzIiwiYXZhaWxhYmxlQnl0ZXMiLCJza2lwQnl0ZXMiLCJsb2FkV29yZCIsImJpdHMiLCJ2YWx1IiwicmVhZEJpdHMiLCJsZWFkaW5nWmVyb0NvdW50Iiwic2tpcExaIiwic2tpcEJpdHMiLCJjbHoiLCJyZWFkVUVHIiwibGFzdFNjYWxlIiwibmV4dFNjYWxlIiwiZGVsdGFTY2FsZSIsInJlYWRFRyIsImZyYW1lQ3JvcExlZnRPZmZzZXQiLCJmcmFtZUNyb3BSaWdodE9mZnNldCIsImZyYW1lQ3JvcFRvcE9mZnNldCIsImZyYW1lQ3JvcEJvdHRvbU9mZnNldCIsImNvZGVjV2lkdGgiLCJjb2RlY0hlaWdodCIsIm51bVJlZkZyYW1lc0luUGljT3JkZXJDbnRDeWNsZSIsInBpY1dpZHRoSW5NYnNNaW51czEiLCJwaWNIZWlnaHRJbk1hcFVuaXRzTWludXMxIiwiZnJhbWVNYnNPbmx5RmxhZyIsInNjYWxpbmdMaXN0Q291bnQiLCJyZWFkVUJ5dGUiLCJyZWFkQm9vbGVhbiIsInNraXBFRyIsInNraXBVRUciLCJza2lwU2NhbGluZ0xpc3QiLCJjaHJvbWFGb3JtYXRJZGMiLCJjaHJvbWFGb3JtYXRzIiwiYml0RGVwdGhMdW1hIiwicHJvZmlsZUlkY3MiLCJpbmNsdWRlcyIsInBpY09yZGVyQ250VHlwZSIsImZwc0ZpeGVkIiwiYXNwZWN0UmF0aW9JZGMiLCJudW1Vbml0SW5UaWNrIiwiY3JvcFVuaXRYIiwiY3JvcFVuaXRZIiwic3ViV2MiLCJzdWJIYyIsInBpeGVsU2NhbGUiLCJjZWlsIiwibmF0aXZlU2xpY2UiLCJPYnNlcnZlciIsImZuSWQiLCJfbGlzdGVuZXJJZE1hcCIsIl9saXN0ZW5lcnMiLCJfZ2V0TGlzdGVuZXJzQnlLZXkiLCJfZ2V0TGlzdGVuZXJCeUlkIiwiX3RoaXMiLCJvbmNlRnVuYyIsInVpbnQ4YXJyYXkiLCJvdXQiLCJpbnB1dCIsIl9jaGVja0NvbnRpbnVhdGlvbiIsInVjczQiLCJjaGVja0xlbmd0aCIsImFycmF5IiwiZGVib3VuY2UiLCJmdW5jIiwiaW1tZWRpYXRlIiwiZGVib3VuY2VkIiwiY2xlYXJUaW1lb3V0IiwiY2FsbE5vdyIsImNhY2hlV3JhcHBlciIsInJlZHVjZSIsInByZSIsImN1ciIsImxlIiwiYnVmIiwic2V0SW50MTYiLCJJbnQxNkFycmF5IiwiZGV2aWNlIiwiaXNQYyIsImlzVGFibGV0IiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsInJlZyIsImllIiwiZmlyZm94IiwiY2hyb21lIiwib3BlcmEiLCJzYWZhcmkiLCJpc1dpbmRvd3NQaG9uZSIsImlzU3ltYmlhbiIsImlzRmlyZUZveCIsImlzUGhvbmUiLCJ0ZW1wIiwicGFkU3RhcnQ0SGV4IiwiaGV4TnVtIiwiaGV4U3RyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUEr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LGVBQU87QUFDZnE0Qix3QkFBUUMsYUFBYXZRLEdBQWIsQ0FBUjtBQUNILGFBRkQ7QUFHQSxtQkFBT3BWLFNBQVMwbEIsSUFBVCxFQUFlLEVBQWYsQ0FBUDtBQUNIOzs7Ozs7a0JBR1V4aUIsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ2YsYUFBYSxtQ0FBbUMsRUFBRSxJIiwiZmlsZSI6InhnZmx2LmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoUmVzdWx0Q29uc3RydWN0b3IpIHtcbiAgdmFyIHRvdGFsTGVuZ3RoID0gMDtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJyYXlzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFycmF5c1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBhcnJheXNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICB2YXIgYXJyID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgIHRvdGFsTGVuZ3RoICs9IGFyci5sZW5ndGg7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciByZXN1bHQgPSBuZXcgUmVzdWx0Q29uc3RydWN0b3IodG90YWxMZW5ndGgpO1xuICB2YXIgb2Zmc2V0ID0gMDtcbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IGFycmF5c1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgdmFyIF9hcnIgPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgIHJlc3VsdC5zZXQoX2Fyciwgb2Zmc2V0KTtcbiAgICAgIG9mZnNldCArPSBfYXJyLmxlbmd0aDtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuKSB7XG4gICAgICAgIF9pdGVyYXRvcjIucmV0dXJuKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjIpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jb25jYXQgPSByZXF1aXJlKCcuL2NvbmNhdCcpO1xuXG52YXIgX2NvbmNhdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb25jYXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jb25jYXQyLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc1ZhbHVlICAgICAgICAgPSByZXF1aXJlKFwidHlwZS92YWx1ZS9pc1wiKVxuICAsIGlzUGxhaW5GdW5jdGlvbiA9IHJlcXVpcmUoXCJ0eXBlL3BsYWluLWZ1bmN0aW9uL2lzXCIpXG4gICwgYXNzaWduICAgICAgICAgID0gcmVxdWlyZShcImVzNS1leHQvb2JqZWN0L2Fzc2lnblwiKVxuICAsIG5vcm1hbGl6ZU9wdHMgICA9IHJlcXVpcmUoXCJlczUtZXh0L29iamVjdC9ub3JtYWxpemUtb3B0aW9uc1wiKVxuICAsIGNvbnRhaW5zICAgICAgICA9IHJlcXVpcmUoXCJlczUtZXh0L3N0cmluZy8jL2NvbnRhaW5zXCIpO1xuXG52YXIgZCA9IChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkc2NyLCB2YWx1ZS8qLCBvcHRpb25zKi8pIHtcblx0dmFyIGMsIGUsIHcsIG9wdGlvbnMsIGRlc2M7XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMiB8fCB0eXBlb2YgZHNjciAhPT0gXCJzdHJpbmdcIikge1xuXHRcdG9wdGlvbnMgPSB2YWx1ZTtcblx0XHR2YWx1ZSA9IGRzY3I7XG5cdFx0ZHNjciA9IG51bGw7XG5cdH0gZWxzZSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1syXTtcblx0fVxuXHRpZiAoaXNWYWx1ZShkc2NyKSkge1xuXHRcdGMgPSBjb250YWlucy5jYWxsKGRzY3IsIFwiY1wiKTtcblx0XHRlID0gY29udGFpbnMuY2FsbChkc2NyLCBcImVcIik7XG5cdFx0dyA9IGNvbnRhaW5zLmNhbGwoZHNjciwgXCJ3XCIpO1xuXHR9IGVsc2Uge1xuXHRcdGMgPSB3ID0gdHJ1ZTtcblx0XHRlID0gZmFsc2U7XG5cdH1cblxuXHRkZXNjID0geyB2YWx1ZTogdmFsdWUsIGNvbmZpZ3VyYWJsZTogYywgZW51bWVyYWJsZTogZSwgd3JpdGFibGU6IHcgfTtcblx0cmV0dXJuICFvcHRpb25zID8gZGVzYyA6IGFzc2lnbihub3JtYWxpemVPcHRzKG9wdGlvbnMpLCBkZXNjKTtcbn0pO1xuXG5kLmdzID0gZnVuY3Rpb24gKGRzY3IsIGdldCwgc2V0LyosIG9wdGlvbnMqLykge1xuXHR2YXIgYywgZSwgb3B0aW9ucywgZGVzYztcblx0aWYgKHR5cGVvZiBkc2NyICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0b3B0aW9ucyA9IHNldDtcblx0XHRzZXQgPSBnZXQ7XG5cdFx0Z2V0ID0gZHNjcjtcblx0XHRkc2NyID0gbnVsbDtcblx0fSBlbHNlIHtcblx0XHRvcHRpb25zID0gYXJndW1lbnRzWzNdO1xuXHR9XG5cdGlmICghaXNWYWx1ZShnZXQpKSB7XG5cdFx0Z2V0ID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKCFpc1BsYWluRnVuY3Rpb24oZ2V0KSkge1xuXHRcdG9wdGlvbnMgPSBnZXQ7XG5cdFx0Z2V0ID0gc2V0ID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKCFpc1ZhbHVlKHNldCkpIHtcblx0XHRzZXQgPSB1bmRlZmluZWQ7XG5cdH0gZWxzZSBpZiAoIWlzUGxhaW5GdW5jdGlvbihzZXQpKSB7XG5cdFx0b3B0aW9ucyA9IHNldDtcblx0XHRzZXQgPSB1bmRlZmluZWQ7XG5cdH1cblx0aWYgKGlzVmFsdWUoZHNjcikpIHtcblx0XHRjID0gY29udGFpbnMuY2FsbChkc2NyLCBcImNcIik7XG5cdFx0ZSA9IGNvbnRhaW5zLmNhbGwoZHNjciwgXCJlXCIpO1xuXHR9IGVsc2Uge1xuXHRcdGMgPSB0cnVlO1xuXHRcdGUgPSBmYWxzZTtcblx0fVxuXG5cdGRlc2MgPSB7IGdldDogZ2V0LCBzZXQ6IHNldCwgY29uZmlndXJhYmxlOiBjLCBlbnVtZXJhYmxlOiBlIH07XG5cdHJldHVybiAhb3B0aW9ucyA/IGRlc2MgOiBhc3NpZ24obm9ybWFsaXplT3B0cyhvcHRpb25zKSwgZGVzYyk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eS1mdW5jdGlvblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7fTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2lzLWltcGxlbWVudGVkXCIpKCkgPyBPYmplY3QuYXNzaWduIDogcmVxdWlyZShcIi4vc2hpbVwiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ24sIG9iajtcblx0aWYgKHR5cGVvZiBhc3NpZ24gIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGZhbHNlO1xuXHRvYmogPSB7IGZvbzogXCJyYXpcIiB9O1xuXHRhc3NpZ24ob2JqLCB7IGJhcjogXCJkd2FcIiB9LCB7IHRyenk6IFwidHJ6eVwiIH0pO1xuXHRyZXR1cm4gb2JqLmZvbyArIG9iai5iYXIgKyBvYmoudHJ6eSA9PT0gXCJyYXpkd2F0cnp5XCI7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBrZXlzICA9IHJlcXVpcmUoXCIuLi9rZXlzXCIpXG4gICwgdmFsdWUgPSByZXF1aXJlKFwiLi4vdmFsaWQtdmFsdWVcIilcbiAgLCBtYXggICA9IE1hdGgubWF4O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkZXN0LCBzcmMvKiwg4oCmc3JjbiovKSB7XG5cdHZhciBlcnJvciwgaSwgbGVuZ3RoID0gbWF4KGFyZ3VtZW50cy5sZW5ndGgsIDIpLCBhc3NpZ247XG5cdGRlc3QgPSBPYmplY3QodmFsdWUoZGVzdCkpO1xuXHRhc3NpZ24gPSBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGRlc3Rba2V5XSA9IHNyY1trZXldO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZTtcblx0XHR9XG5cdH07XG5cdGZvciAoaSA9IDE7IGkgPCBsZW5ndGg7ICsraSkge1xuXHRcdHNyYyA9IGFyZ3VtZW50c1tpXTtcblx0XHRrZXlzKHNyYykuZm9yRWFjaChhc3NpZ24pO1xuXHR9XG5cdGlmIChlcnJvciAhPT0gdW5kZWZpbmVkKSB0aHJvdyBlcnJvcjtcblx0cmV0dXJuIGRlc3Q7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdW5kZWZpbmVkID0gcmVxdWlyZShcIi4uL2Z1bmN0aW9uL25vb3BcIikoKTsgLy8gU3VwcG9ydCBFUzMgZW5naW5lc1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbCAhPT0gX3VuZGVmaW5lZCAmJiB2YWwgIT09IG51bGw7IH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9pcy1pbXBsZW1lbnRlZFwiKSgpID8gT2JqZWN0LmtleXMgOiByZXF1aXJlKFwiLi9zaGltXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHR0cnkge1xuXHRcdE9iamVjdC5rZXlzKFwicHJpbWl0aXZlXCIpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc1ZhbHVlID0gcmVxdWlyZShcIi4uL2lzLXZhbHVlXCIpO1xuXG52YXIga2V5cyA9IE9iamVjdC5rZXlzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QpIHsgcmV0dXJuIGtleXMoaXNWYWx1ZShvYmplY3QpID8gT2JqZWN0KG9iamVjdCkgOiBvYmplY3QpOyB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc1ZhbHVlID0gcmVxdWlyZShcIi4vaXMtdmFsdWVcIik7XG5cbnZhciBmb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2gsIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG5cbnZhciBwcm9jZXNzID0gZnVuY3Rpb24gKHNyYywgb2JqKSB7XG5cdHZhciBrZXk7XG5cdGZvciAoa2V5IGluIHNyYykgb2JqW2tleV0gPSBzcmNba2V5XTtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0czEvKiwg4oCmb3B0aW9ucyovKSB7XG5cdHZhciByZXN1bHQgPSBjcmVhdGUobnVsbCk7XG5cdGZvckVhY2guY2FsbChhcmd1bWVudHMsIGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdFx0aWYgKCFpc1ZhbHVlKG9wdGlvbnMpKSByZXR1cm47XG5cdFx0cHJvY2VzcyhPYmplY3Qob3B0aW9ucyksIHJlc3VsdCk7XG5cdH0pO1xuXHRyZXR1cm4gcmVzdWx0O1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbikge1xuXHRpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoZm4gKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcblx0cmV0dXJuIGZuO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNWYWx1ZSA9IHJlcXVpcmUoXCIuL2lzLXZhbHVlXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRpZiAoIWlzVmFsdWUodmFsdWUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSBudWxsIG9yIHVuZGVmaW5lZFwiKTtcblx0cmV0dXJuIHZhbHVlO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2lzLWltcGxlbWVudGVkXCIpKCkgPyBTdHJpbmcucHJvdG90eXBlLmNvbnRhaW5zIDogcmVxdWlyZShcIi4vc2hpbVwiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3RyID0gXCJyYXpkd2F0cnp5XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRpZiAodHlwZW9mIHN0ci5jb250YWlucyAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiBzdHIuY29udGFpbnMoXCJkd2FcIikgPT09IHRydWUgJiYgc3RyLmNvbnRhaW5zKFwiZm9vXCIpID09PSBmYWxzZTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGluZGV4T2YgPSBTdHJpbmcucHJvdG90eXBlLmluZGV4T2Y7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlYXJjaFN0cmluZy8qLCBwb3NpdGlvbiovKSB7XG5cdHJldHVybiBpbmRleE9mLmNhbGwodGhpcywgc2VhcmNoU3RyaW5nLCBhcmd1bWVudHNbMV0pID4gLTE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZCAgICAgICAgPSByZXF1aXJlKCdkJylcbiAgLCBjYWxsYWJsZSA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L3ZhbGlkLWNhbGxhYmxlJylcblxuICAsIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LCBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGxcbiAgLCBjcmVhdGUgPSBPYmplY3QuY3JlYXRlLCBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eVxuICAsIGRlZmluZVByb3BlcnRpZXMgPSBPYmplY3QuZGVmaW5lUHJvcGVydGllc1xuICAsIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAsIGRlc2NyaXB0b3IgPSB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlIH1cblxuICAsIG9uLCBvbmNlLCBvZmYsIGVtaXQsIG1ldGhvZHMsIGRlc2NyaXB0b3JzLCBiYXNlO1xuXG5vbiA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xuXHR2YXIgZGF0YTtcblxuXHRjYWxsYWJsZShsaXN0ZW5lcik7XG5cblx0aWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsICdfX2VlX18nKSkge1xuXHRcdGRhdGEgPSBkZXNjcmlwdG9yLnZhbHVlID0gY3JlYXRlKG51bGwpO1xuXHRcdGRlZmluZVByb3BlcnR5KHRoaXMsICdfX2VlX18nLCBkZXNjcmlwdG9yKTtcblx0XHRkZXNjcmlwdG9yLnZhbHVlID0gbnVsbDtcblx0fSBlbHNlIHtcblx0XHRkYXRhID0gdGhpcy5fX2VlX187XG5cdH1cblx0aWYgKCFkYXRhW3R5cGVdKSBkYXRhW3R5cGVdID0gbGlzdGVuZXI7XG5cdGVsc2UgaWYgKHR5cGVvZiBkYXRhW3R5cGVdID09PSAnb2JqZWN0JykgZGF0YVt0eXBlXS5wdXNoKGxpc3RlbmVyKTtcblx0ZWxzZSBkYXRhW3R5cGVdID0gW2RhdGFbdHlwZV0sIGxpc3RlbmVyXTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbm9uY2UgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcblx0dmFyIG9uY2UsIHNlbGY7XG5cblx0Y2FsbGFibGUobGlzdGVuZXIpO1xuXHRzZWxmID0gdGhpcztcblx0b24uY2FsbCh0aGlzLCB0eXBlLCBvbmNlID0gZnVuY3Rpb24gKCkge1xuXHRcdG9mZi5jYWxsKHNlbGYsIHR5cGUsIG9uY2UpO1xuXHRcdGFwcGx5LmNhbGwobGlzdGVuZXIsIHRoaXMsIGFyZ3VtZW50cyk7XG5cdH0pO1xuXG5cdG9uY2UuX19lZU9uY2VMaXN0ZW5lcl9fID0gbGlzdGVuZXI7XG5cdHJldHVybiB0aGlzO1xufTtcblxub2ZmID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XG5cdHZhciBkYXRhLCBsaXN0ZW5lcnMsIGNhbmRpZGF0ZSwgaTtcblxuXHRjYWxsYWJsZShsaXN0ZW5lcik7XG5cblx0aWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsICdfX2VlX18nKSkgcmV0dXJuIHRoaXM7XG5cdGRhdGEgPSB0aGlzLl9fZWVfXztcblx0aWYgKCFkYXRhW3R5cGVdKSByZXR1cm4gdGhpcztcblx0bGlzdGVuZXJzID0gZGF0YVt0eXBlXTtcblxuXHRpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ29iamVjdCcpIHtcblx0XHRmb3IgKGkgPSAwOyAoY2FuZGlkYXRlID0gbGlzdGVuZXJzW2ldKTsgKytpKSB7XG5cdFx0XHRpZiAoKGNhbmRpZGF0ZSA9PT0gbGlzdGVuZXIpIHx8XG5cdFx0XHRcdFx0KGNhbmRpZGF0ZS5fX2VlT25jZUxpc3RlbmVyX18gPT09IGxpc3RlbmVyKSkge1xuXHRcdFx0XHRpZiAobGlzdGVuZXJzLmxlbmd0aCA9PT0gMikgZGF0YVt0eXBlXSA9IGxpc3RlbmVyc1tpID8gMCA6IDFdO1xuXHRcdFx0XHRlbHNlIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGlmICgobGlzdGVuZXJzID09PSBsaXN0ZW5lcikgfHxcblx0XHRcdFx0KGxpc3RlbmVycy5fX2VlT25jZUxpc3RlbmVyX18gPT09IGxpc3RlbmVyKSkge1xuXHRcdFx0ZGVsZXRlIGRhdGFbdHlwZV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5lbWl0ID0gZnVuY3Rpb24gKHR5cGUpIHtcblx0dmFyIGksIGwsIGxpc3RlbmVyLCBsaXN0ZW5lcnMsIGFyZ3M7XG5cblx0aWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsICdfX2VlX18nKSkgcmV0dXJuO1xuXHRsaXN0ZW5lcnMgPSB0aGlzLl9fZWVfX1t0eXBlXTtcblx0aWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcblxuXHRpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ29iamVjdCcpIHtcblx0XHRsID0gYXJndW1lbnRzLmxlbmd0aDtcblx0XHRhcmdzID0gbmV3IEFycmF5KGwgLSAxKTtcblx0XHRmb3IgKGkgPSAxOyBpIDwgbDsgKytpKSBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcblxuXHRcdGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgpO1xuXHRcdGZvciAoaSA9IDA7IChsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXSk7ICsraSkge1xuXHRcdFx0YXBwbHkuY2FsbChsaXN0ZW5lciwgdGhpcywgYXJncyk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdGNhc2UgMTpcblx0XHRcdGNhbGwuY2FsbChsaXN0ZW5lcnMsIHRoaXMpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0Y2FsbC5jYWxsKGxpc3RlbmVycywgdGhpcywgYXJndW1lbnRzWzFdKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdGNhbGwuY2FsbChsaXN0ZW5lcnMsIHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRsID0gYXJndW1lbnRzLmxlbmd0aDtcblx0XHRcdGFyZ3MgPSBuZXcgQXJyYXkobCAtIDEpO1xuXHRcdFx0Zm9yIChpID0gMTsgaSA8IGw7ICsraSkge1xuXHRcdFx0XHRhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdH1cblx0XHRcdGFwcGx5LmNhbGwobGlzdGVuZXJzLCB0aGlzLCBhcmdzKTtcblx0XHR9XG5cdH1cbn07XG5cbm1ldGhvZHMgPSB7XG5cdG9uOiBvbixcblx0b25jZTogb25jZSxcblx0b2ZmOiBvZmYsXG5cdGVtaXQ6IGVtaXRcbn07XG5cbmRlc2NyaXB0b3JzID0ge1xuXHRvbjogZChvbiksXG5cdG9uY2U6IGQob25jZSksXG5cdG9mZjogZChvZmYpLFxuXHRlbWl0OiBkKGVtaXQpXG59O1xuXG5iYXNlID0gZGVmaW5lUHJvcGVydGllcyh7fSwgZGVzY3JpcHRvcnMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbiAobykge1xuXHRyZXR1cm4gKG8gPT0gbnVsbCkgPyBjcmVhdGUoYmFzZSkgOiBkZWZpbmVQcm9wZXJ0aWVzKE9iamVjdChvKSwgZGVzY3JpcHRvcnMpO1xufTtcbmV4cG9ydHMubWV0aG9kcyA9IG1ldGhvZHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZShcIi4uL3Byb3RvdHlwZS9pc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG5cblx0aWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBcImxlbmd0aFwiKSkgcmV0dXJuIGZhbHNlO1xuXG5cdHRyeSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZS5sZW5ndGggIT09IFwibnVtYmVyXCIpIHJldHVybiBmYWxzZTtcblx0XHRpZiAodHlwZW9mIHZhbHVlLmNhbGwgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGZhbHNlO1xuXHRcdGlmICh0eXBlb2YgdmFsdWUuYXBwbHkgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGZhbHNlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiAhaXNQcm90b3R5cGUodmFsdWUpO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNWYWx1ZSA9IHJlcXVpcmUoXCIuLi92YWx1ZS9pc1wiKTtcblxuLy8gcHJldHRpZXItaWdub3JlXG52YXIgcG9zc2libGVUeXBlcyA9IHsgXCJvYmplY3RcIjogdHJ1ZSwgXCJmdW5jdGlvblwiOiB0cnVlLCBcInVuZGVmaW5lZFwiOiB0cnVlIC8qIGRvY3VtZW50LmFsbCAqLyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRpZiAoIWlzVmFsdWUodmFsdWUpKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHBvc3NpYmxlVHlwZXMsIHR5cGVvZiB2YWx1ZSk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZShcIi4uL2Z1bmN0aW9uL2lzXCIpO1xuXG52YXIgY2xhc3NSZSA9IC9eXFxzKmNsYXNzW1xcc3svfV0vLCBmdW5jdGlvblRvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRpZiAoIWlzRnVuY3Rpb24odmFsdWUpKSByZXR1cm4gZmFsc2U7XG5cdGlmIChjbGFzc1JlLnRlc3QoZnVuY3Rpb25Ub1N0cmluZy5jYWxsKHZhbHVlKSkpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIHRydWU7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoXCIuLi9vYmplY3QvaXNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdGlmICghaXNPYmplY3QodmFsdWUpKSByZXR1cm4gZmFsc2U7XG5cdHRyeSB7XG5cdFx0aWYgKCF2YWx1ZS5jb25zdHJ1Y3RvcikgcmV0dXJuIGZhbHNlO1xuXHRcdHJldHVybiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPT09IHZhbHVlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBFUzMgc2FmZVxudmFyIF91bmRlZmluZWQgPSB2b2lkIDA7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZSAhPT0gX3VuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbDsgfTtcbiIsIi8qKlxuICogQGF1dGhvciBmdXl1aGFvXG4gKi9cbmltcG9ydCBNYWluUGFyc2VyIGZyb20gJy4vcGFyc2UvTWFpblBhcnNlcidcbmltcG9ydCBNU0UgZnJvbSAnLi9wYXJzZS9NU0UnXG5pbXBvcnQgVm9kVGFzayBmcm9tICcuL3Rhc2tzL1ZvZFRhc2snXG5pbXBvcnQgZ2V0RGVmYXVsdENvbmYgZnJvbSAnLi9jb25zdGFudHMvY29uZmlnJ1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsdiB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zLCBwbGF5ZXIpIHtcbiAgICB0aGlzLl9wbGF5ZXIgPSBwbGF5ZXJcbiAgICB0aGlzLl9vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZ2V0RGVmYXVsdENvbmYoKSwgb3B0aW9ucylcbiAgICAvLyDnnJ/mraPnmoRmbHbmkq3mlL7lmahcbiAgICB0aGlzLmZsdlBsYXllciA9IG5ldyBNYWluUGFyc2VyKHRoaXMuX29wdGlvbnMsIHBsYXllcilcbiAgICB0aGlzLm1zZSA9IG5ldyBNU0UocGxheWVyLnZpZGVvKVxuICAgIHRoaXMuaXNTZWVraW5nID0gZmFsc2VcbiAgICB0aGlzLmlzRGF0YUxvYWRpbmcgPSBmYWxzZVxuICAgIHRoaXMudGVtcEN1cnJlbnRUaW1lID0gMFxuICAgIHRoaXMudGVtcEZsdlBsYXllciA9IG51bGxcbiAgICB0aGlzLmlzQ2hhbmdpbmdTcmMgPSBmYWxzZVxuICAgIHRoaXMuaW5pdFBsYXllckV2ZW50cyhwbGF5ZXIsIHRoaXMuX29wdGlvbnMpXG4gICAgdGhpcy5pbml0Rmx2UGxheWVyRXZlbnRzKHRoaXMuZmx2UGxheWVyLCB0aGlzLm1zZSlcbiAgICB0aGlzLmluaXRNc2VFdmVudHModGhpcy5tc2UsIHRoaXMuZmx2UGxheWVyKVxuICB9XG5cbiAgbG9hZCAoKSB7XG4gICAgdGhpcy5mbHZQbGF5ZXIuc3RhcnRMb2FkRGF0YSgpXG4gIH1cblxuICBpbml0UGxheWVyRXZlbnRzIChwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IG1zZSB9ID0gdGhpc1xuICAgIHBsYXllci5tc2UgPSBtc2VcbiAgICB0aGlzLmhhbmRsZVNlZWtpbmcgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0NoYW5naW5nU3JjKSB7XG4gICAgICAgIHRoaXMuaXNDaGFuZ2luZ1NyYyA9IGZhbHNlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3QgeyBidWZmZXJlZCwgY3VycmVudFRpbWUgfSA9IHBsYXllclxuICAgICAgbGV0IGlzQnVmZmVyZWQgPSBmYWxzZVxuICAgICAgaWYgKGJ1ZmZlcmVkLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYnVmZmVyZWQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBpZiAoY3VycmVudFRpbWUgPiBidWZmZXJlZC5zdGFydChpKSAmJiBjdXJyZW50VGltZSA8IGJ1ZmZlcmVkLmVuZChpKSkge1xuICAgICAgICAgICAgaXNCdWZmZXJlZCA9IHRydWVcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNCdWZmZXJlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIFZvZFRhc2suY2xlYXIoKVxuICAgICAgaWYgKCF0aGlzLmlzU2Vla2FibGUpIHtcbiAgICAgICAgdGhpcy5fcGxheWVyLmN1cnJlbnRUaW1lID0gdGhpcy50ZW1wQ3VycmVudFRpbWVcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLmZsdlBsYXllci5zZWVrKHBsYXllci5jdXJyZW50VGltZSlcbiAgICAgIHRoaXMuaXNTZWVraW5nID0gdHJ1ZVxuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMuaXNMaXZlKSB7XG4gICAgICBwbGF5ZXIub24oJ3NlZWtpbmcnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlU2Vla2luZygpXG4gICAgICB9KVxuICAgIH1cbiAgICB0aGlzLmhhbmRsZVRpbWVVcGRhdGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnRlbXBDdXJyZW50VGltZSA9IHBsYXllci5jdXJyZW50VGltZVxuICAgICAgaWYgKCF0aGlzLmlzU2Vla2luZyAmJiB0aGlzLmZsdlBsYXllci5pc01lZGlhSW5mb1JlYWR5ICYmICF0aGlzLnRlbXBGbHZQbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0NoZWNrZXIocGxheWVyKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuaXNMaXZlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdGhpcy5pc0VuZGVkKHBsYXllciwgdGhpcy5mbHZQbGF5ZXIpXG4gICAgfVxuICAgIHBsYXllci5vbigndGltZXVwZGF0ZScsICgpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlVGltZVVwZGF0ZSgpXG4gICAgfSlcbiAgICBwbGF5ZXIuX3JlcGxheSA9ICgpID0+IHtcbiAgICAgIHBsYXllci5tc2UuZGVzdHJveSgpXG4gICAgICBWb2RUYXNrLmNsZWFyKClcbiAgICAgIGNvbnN0IF9tc2UgPSBuZXcgTVNFKHBsYXllci52aWRlbylcbiAgICAgIHRoaXMuZmx2UGxheWVyLnJlcGxheSgpXG5cbiAgICAgIG1zZS5vbignc291cmNlb3BlbicsICgpID0+IHtcbiAgICAgICAgdGhpcy5mbHZQbGF5ZXIuaXNTb3VyY2VPcGVuID0gdHJ1ZVxuICAgICAgICBtc2UuYXBwZW5kQnVmZmVyKHRoaXMuZmx2UGxheWVyLmZ0eXBfbW9vdi5idWZmZXIpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHBsYXllci5wbGF5KClcbiAgICAgICAgfSwgMClcbiAgICAgICAgbXNlLm9uKCd1cGRhdGVlbmQnLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3Qge3BlbmRpbmdGcmFnbWVudHMsIGhhc1BlbmRpbmdGcmFnbWVudHN9ID0gdGhpcy5mbHZQbGF5ZXJcbiAgICAgICAgICB0aGlzLmlzU2Vla2luZyA9IGZhbHNlXG4gICAgICAgICAgaWYgKGhhc1BlbmRpbmdGcmFnbWVudHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gcGVuZGluZ0ZyYWdtZW50cy5zaGlmdCgpXG4gICAgICAgICAgICBpZiAoIW1zZS5hcHBlbmRCdWZmZXIoZnJhZ21lbnQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgcGVuZGluZ0ZyYWdtZW50cy51bnNoaWZ0KGZyYWdtZW50KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGxheWVyLmVtaXQoJ2NhY2hldXBkYXRlJywgcGxheWVyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICBtc2Uub24oJ2Vycm9yJywgKGUpID0+IHtcbiAgICAgICAgcGxheWVyLmVtaXQoJ2Vycm9yJywgZSlcbiAgICAgIH0pXG5cbiAgICAgIHBsYXllci5tc2UgPSBtc2VcbiAgICAgIHBsYXllci52aWRlby5zcmMgPSB0aGlzLm1zZS51cmxcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcGxheWVyLnN3aXRjaFVSTCA9ICh1cmwpID0+IHtcbiAgICAgIHRoaXMuX29wdGlvbnMudXJsID0gdXJsXG4gICAgICAvLyB0aGlzLmZsdlBsYXllci51bmJpbmRFdmVudHMoKVxuICAgICAgaWYgKCFwbGF5ZXIuY29uZmlnLmlzTGl2ZSkge1xuICAgICAgICBWb2RUYXNrLmNsZWFyKClcbiAgICAgICAgY29uc3QgdGVtcEZsdlBsYXllciA9IHRoaXMudGVtcEZsdlBsYXllciA9IG5ldyBNYWluUGFyc2VyKHRoaXMuX29wdGlvbnMsIHBsYXllcilcblxuICAgICAgICB0ZW1wRmx2UGxheWVyLmlzU291cmNlT3BlbiA9IHRydWVcbiAgICAgICAgdGVtcEZsdlBsYXllci5pc1RlbXBQbGF5ZXIgPSB0cnVlXG4gICAgICAgIHRoaXMuaW5pdEZsdlBsYXllckV2ZW50cyh0ZW1wRmx2UGxheWVyLCBtc2UpXG4gICAgICAgIHRlbXBGbHZQbGF5ZXIuaGFuZGxlTWVkaWFGcmFnbWVudCA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzU2Vla2luZyA9IGZhbHNlXG4gICAgICAgICAgdGhpcy51bmJpbmRGbHZQbGF5ZXJFdmVudHModGhpcy5mbHZQbGF5ZXIpXG4gICAgICAgICAgdGhpcy5mbHZQbGF5ZXIuZGVzdHJveSgpXG4gICAgICAgICAgdGhpcy5mbHZQbGF5ZXIgPSB0ZW1wRmx2UGxheWVyXG4gICAgICAgICAgdGhpcy50ZW1wRmx2UGxheWVyID0gbnVsbFxuXG4gICAgICAgICAgbXNlLmFwcGVuZEJ1ZmZlcih0ZW1wRmx2UGxheWVyLmZ0eXBfbW9vdilcbiAgICAgICAgICB0ZW1wRmx2UGxheWVyLmhhbmRsZU1lZGlhRnJhZ21lbnQgPSAoZnJhZ21lbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtc2UuYXBwZW5kQnVmZmVyKGZyYWdtZW50LmRhdGEpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHRlbXBGbHZQbGF5ZXIuc3RhcnRMb2FkRGF0YSgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHVuYmluZEZsdlBsYXllckV2ZW50cyAoZmx2UGxheWVyKSB7XG4gICAgZmx2UGxheWVyLmhhbmRsZVNlZWtFbmQgPSAoKSA9PiBudWxsXG4gICAgZmx2UGxheWVyLmhhbmRsZUVycm9yID0gKCkgPT4gbnVsbFxuICAgIGZsdlBsYXllci5oYW5kbGVNZWRpYUZyYWdtZW50ID0gKCkgPT4gbnVsbFxuICB9XG4gIGluaXRGbHZQbGF5ZXJFdmVudHMgKGZsdlBsYXllciwgbXNlKSB7XG4gICAgY29uc3QgaGFuZGxlRnR5cE1vb3YgPSAoZnR5cE1vb3YpID0+IHtcbiAgICAgIGlmIChmbHZQbGF5ZXIuaXNTb3VyY2VPcGVuICYmICF0aGlzLnRlbXBGbHZQbGF5ZXIpIHtcbiAgICAgICAgbXNlLmFwcGVuZEJ1ZmZlcihmdHlwTW9vdi5idWZmZXIpXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzQ2hhbmdpbmdTcmMgJiYgIXRoaXMuX29wdGlvbnMuaXNMaXZlKSB7XG4gICAgICAgIHRoaXMuaXNTZWVraW5nID0gdHJ1ZVxuICAgICAgICBmbHZQbGF5ZXIuc2Vlayh0aGlzLl9wbGF5ZXIuY3VycmVudFRpbWUpXG4gICAgICB9XG4gICAgfVxuICAgIGZsdlBsYXllci5vbmNlKCdyZWFkeScsIGhhbmRsZUZ0eXBNb292KVxuICAgIGZsdlBsYXllci5oYW5kbGVTZWVrRW5kID0gKCkgPT4ge1xuICAgICAgdGhpcy5pc1NlZWtpbmcgPSBmYWxzZVxuICAgIH1cbiAgICBmbHZQbGF5ZXIuaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdGhpcy5fcGxheWVyLmVtaXQoJ2Vycm9yJywgZSlcbiAgICB9XG4gICAgaWYgKCF0aGlzLnRlbXBGbHZQbGF5ZXIpIHtcbiAgICAgIGZsdlBsYXllci5oYW5kbGVNZWRpYUZyYWdtZW50ID0gKGZyYWdtZW50KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRlbXBGbHZQbGF5ZXIgPyBmYWxzZSA6IG1zZS5hcHBlbmRCdWZmZXIoZnJhZ21lbnQuZGF0YSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbml0TXNlRXZlbnRzIChtc2UpIHtcbiAgICBtc2Uub24oJ2Vycm9yJywgKGUpID0+IHtcbiAgICAgIHRoaXMuX3BsYXllci5lbWl0KCdlcnJvcicsIGUpXG4gICAgfSlcbiAgICBjb25zdCBvblNvdXJjZU9wZW4gPSAoKSA9PiB7XG4gICAgICB0aGlzLmZsdlBsYXllci5pc1NvdXJjZU9wZW4gPSB0cnVlXG4gICAgICBpZiAodGhpcy5mbHZQbGF5ZXIuZnR5cF9tb292ICE9PSBudWxsKSB7XG4gICAgICAgIG1zZS5hcHBlbmRCdWZmZXIodGhpcy5mbHZQbGF5ZXIuZnR5cF9tb292LmJ1ZmZlcilcbiAgICAgIH1cblxuICAgICAgbXNlLm9uKCd1cGRhdGVlbmQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcGVuZGluZ0ZyYWdtZW50cywgaGFzUGVuZGluZ0ZyYWdtZW50cyB9ID0gdGhpcy5mbHZQbGF5ZXJcblxuICAgICAgICBpZiAoaGFzUGVuZGluZ0ZyYWdtZW50cykge1xuICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gcGVuZGluZ0ZyYWdtZW50cy5zaGlmdCgpXG4gICAgICAgICAgaWYgKCFtc2UuYXBwZW5kQnVmZmVyKGZyYWdtZW50LmRhdGEpKSB7XG4gICAgICAgICAgICBwZW5kaW5nRnJhZ21lbnRzLnVuc2hpZnQoZnJhZ21lbnQpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllci5lbWl0KCdjYWNoZXVwZGF0ZScsIHRoaXMuX3BsYXllcilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIG1zZS5vbignc291cmNlb3BlbicsIG9uU291cmNlT3BlbilcbiAgfVxuXG4gIGxvYWREYXRhIChjdXJyZW50VGltZSkge1xuICAgIHJldHVybiB0aGlzLmZsdlBsYXllci5sb2FkU2VnbWVudHModHJ1ZSwgY3VycmVudFRpbWUsIHRoaXMuX29wdGlvbnMucHJlbG9hZFRpbWUpXG4gIH1cblxuICBwcm9ncmVzc0NoZWNrZXIgKHBsYXllcikge1xuICAgIGNvbnN0IHsgbWluQ2FjaGVkVGltZSwgcHJlbG9hZFRpbWUgfSA9IHRoaXMuX29wdGlvbnNcbiAgICBjb25zdCByYW5nZSA9IHBsYXllci5nZXRCdWZmZXJlZFJhbmdlKClcbiAgICBpZiAodGhpcy5mbHZQbGF5ZXIudmlkZW9EdXJhdGlvbiAtIHJhbmdlWzFdICogdGhpcy5mbHZQbGF5ZXIudmlkZW9UaW1lU2NhbGUgPCAwLjEgKiB0aGlzLmZsdlBsYXllci52aWRlb1RpbWVTY2FsZSkgeyByZXR1cm4gfVxuICAgIGlmIChyYW5nZVsxXSAtIHBsYXllci5jdXJyZW50VGltZSA8IG1pbkNhY2hlZFRpbWUgJiYgIXRoaXMuaXNEYXRhTG9hZGluZykge1xuICAgICAgdGhpcy5pc0RhdGFMb2FkaW5nID0gdHJ1ZVxuICAgICAgdGhpcy5mbHZQbGF5ZXIubG9hZFNlZ21lbnRzKHRydWUsIHBsYXllci5jdXJyZW50VGltZSwgcHJlbG9hZFRpbWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGF0YUxvYWRpbmcgPSBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgY2xlYXJQbGF5ZXJDYWNoZSAoKSB7XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLl9wbGF5ZXIuZ2V0QnVmZmVyZWRSYW5nZSgpXG4gICAgaWYgKHJhbmdlLmxlbmd0aCA9PT0gMikge1xuICAgICAgLy8gdGhpcy5tc2UucmVtb3ZlQnVmZmVyKHJhbmdlWzBdLCByYW5nZVsxXSlcbiAgICB9XG4gIH1cbiAgaXNFbmRlZCAocGxheWVyLCBmbHYpIHtcbiAgICBpZiAoZmx2LnZpZGVvRHVyYXRpb24gLSBwbGF5ZXIuY3VycmVudFRpbWUgKiBmbHYudmlkZW9UaW1lU2NhbGUgPCAyICogZmx2LnZpZGVvVGltZVNjYWxlKSB7XG4gICAgICBjb25zdCByYW5nZSA9IHBsYXllci5nZXRCdWZmZXJlZFJhbmdlKClcbiAgICAgIGlmIChwbGF5ZXIuY3VycmVudFRpbWUgLSByYW5nZVsxXSA8IDAuMSkge1xuICAgICAgICB0aGlzLm1zZS5lbmRPZlN0cmVhbSgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGRlc3Ryb3kgKCkge1xuICAgIFZvZFRhc2suY2xlYXIoKVxuICAgIHRoaXMuX29wdGlvbnMgPSB7fVxuICAgIHRoaXMubXNlID0gbnVsbFxuICAgIHRoaXMuaXNTZWVraW5nID0gZmFsc2VcbiAgICB0aGlzLmlzRGF0YUxvYWRpbmcgPSBmYWxzZVxuICAgIHRoaXMudGVtcEN1cnJlbnRUaW1lID0gMFxuICAgIHRoaXMudGVtcEZsdlBsYXllciA9IG51bGxcbiAgICB0aGlzLmlzQ2hhbmdpbmdTcmMgPSBmYWxzZVxuICAgIHRoaXMuaGFuZGxlVGltZVVwZGF0ZSA9ICgpID0+IHt9XG4gICAgdGhpcy5oYW5kbGVTZWVraW5nID0gKCkgPT4ge31cbiAgICB0aGlzLmZsdlBsYXllci5kZXN0cm95KClcbiAgICB0aGlzLl9wbGF5ZXIucGF1c2UoKVxuICB9XG4gIGdldCBpc1NlZWthYmxlICgpIHtcbiAgICByZXR1cm4gdGhpcy5mbHZQbGF5ZXIuaXNTZWVrYWJsZVxuICB9XG59XG4iLCJjb25zdCBnZXREZWZhdWx0Q29uZiA9ICgpID0+ICh7XG4gIHByZWxvYWRUaW1lOiAzMCxcbiAgbWluQ2FjaGVkVGltZTogNSxcbiAgYXV0b0NsZWFuU291cmNlQnVmZmVyOiB0cnVlLFxuICBhdXRvQ2xlYW5NYXhCYWNrVGltZTogMzAsXG4gIGlzTGl2ZTogZmFsc2UsXG4gIGNvcnM6IHRydWVcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGdldERlZmF1bHRDb25mXG4iLCJjb25zdCBmaWVsZHMgPSBbe1xuICBuYW1lOiAnZHVyYXRpb24nLFxuICB0eXBlOiBCb29sZWFuLFxuICBwYXJzZXIgKHRhcmdldCwgb3JpZ2luKSB7XG4gICAgdGFyZ2V0Lm1lZGlhSW5mby5kdXJhdGlvbiA9IG9yaWdpbi5kdXJhdGlvblxuICB9XG59LCB7XG4gIG5hbWU6ICdoYXNBdWRpbycsXG4gIHR5cGU6IEJvb2xlYW4sXG4gIHBhcnNlciAodGFyZ2V0LCBvcmlnaW4pIHtcbiAgICB0YXJnZXQubWVkaWFJbmZvLmhhc0F1ZGlvID0gb3JpZ2luLmhhc0F1ZGlvXG4gIH1cbn0sIHtcbiAgbmFtZTogJ2hhc1ZpZGVvJyxcbiAgdHlwZTogQm9vbGVhbixcbiAgcGFyc2VyICh0YXJnZXQsIG9yaWdpbikge1xuICAgIHRhcmdldC5tZWRpYUluZm8uaGFzVmlkZW8gPSBvcmlnaW4uaGFzVmlkZW9cbiAgfVxufSwge1xuICBuYW1lOiAnYXVkaW9kYXRhcmF0ZScsXG4gIHR5cGU6IE51bWJlcixcbiAgcGFyc2VyICh0YXJnZXQsIG9yaWdpbikge1xuICAgIHRhcmdldC5tZWRpYUluZm8uYXVkaW9EYXRhUmF0ZSA9IG9yaWdpbi5hdWRpb2RhdGFyYXRlXG4gIH1cbn0sIHtcbiAgbmFtZTogJ3ZpZGVvZGF0YXJhdGUnLFxuICB0eXBlOiBOdW1iZXIsXG4gIHBhcnNlciAodGFyZ2V0LCBvcmlnaW4pIHtcbiAgICB0YXJnZXQubWVkaWFJbmZvLnZpZGVvRGF0YVJhdGUgPSBvcmlnaW4udmlkZW9kYXRhcmF0ZVxuICB9XG59LCB7XG4gIG5hbWU6ICd3aWR0aCcsXG4gIHR5cGU6IE51bWJlcixcbiAgcGFyc2VyICh0YXJnZXQsIG9yaWdpbikge1xuICAgIHRhcmdldC5tZWRpYUluZm8ud2lkdGggPSBvcmlnaW4ud2lkdGhcbiAgfVxufSwge1xuICBuYW1lOiAnaGVpZ2h0JyxcbiAgdHlwZTogTnVtYmVyLFxuICBwYXJzZXIgKHRhcmdldCwgb3JpZ2luKSB7XG4gICAgdGFyZ2V0Lm1lZGlhSW5mby5oZWlnaHQgPSBvcmlnaW4uaGVpZ2h0XG4gIH1cbn0sIHtcbiAgbmFtZTogJ2R1cmF0aW9uJyxcbiAgdHlwZTogTnVtYmVyLFxuICBwYXJzZXIgKHRhcmdldCwgb3JpZ2luKSB7XG4gICAgaWYgKCF0YXJnZXQuc3RhdGUuZHVyYXRpb24pIHtcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gTWF0aC5mbG9vcihvcmlnaW4uZHVyYXRpb24gKiB0YXJnZXQuc3RhdGUudGltZVNjYWxlKVxuICAgICAgdGFyZ2V0LnN0YXRlLmR1cmF0aW9uID0gdGFyZ2V0Lm1lZGlhSW5mby5kdXJhdGlvbiA9IGR1cmF0aW9uXG4gICAgfVxuICB9LFxuICBvblR5cGVFcnIgKHRhcmdldCkge1xuICAgIHRhcmdldC5tZWRpYUluZm8uZHVyYXRpb24gPSAwXG4gIH1cbn0sIHtcbiAgbmFtZTogJ2ZyYW1lcmF0ZScsXG4gIHR5cGU6IE51bWJlcixcbiAgcGFyc2VyICh0YXJnZXQsIG9yaWdpbikge1xuICAgIGNvbnN0IGZwc051bSA9IE1hdGguZmxvb3Iob3JpZ2luLmZyYW1lcmF0ZSAqIDEwMDApXG4gICAgaWYgKGZwc051bSA+IDApIHtcbiAgICAgIGNvbnN0IGZwcyA9IGZwc051bSAvIDEwMDBcbiAgICAgIGNvbnN0IHsgcmVmZXJGcmFtZVJhdGUsIG1lZGlhSW5mbyB9ID0gdGFyZ2V0XG4gICAgICByZWZlckZyYW1lUmF0ZS5maXhlZCA9IHRydWVcbiAgICAgIHJlZmVyRnJhbWVSYXRlLmZwcyA9IGZwc1xuICAgICAgcmVmZXJGcmFtZVJhdGUuZnBzTnVtID0gZnBzTnVtXG4gICAgICByZWZlckZyYW1lUmF0ZS5mcHNEZW4gPSAxMDAwXG4gICAgICBtZWRpYUluZm8uZnBzID0gZnBzXG4gICAgfVxuICB9XG59LCB7XG4gIG5hbWU6ICdrZXlmcmFtZXMnLFxuICB0eXBlOiBPYmplY3QsXG4gIHBhcnNlciAodGFyZ2V0LCBvcmlnaW4pIHtcbiAgICBjb25zdCB7IGtleWZyYW1lcyB9ID0gb3JpZ2luXG4gICAgdGFyZ2V0Lm1lZGlhSW5mby5oYXNLZXlmcmFtZXMgPSAhIWtleWZyYW1lc1xuICAgIGlmIChrZXlmcmFtZXMpIHtcbiAgICAgIHRhcmdldC5tZWRpYUluZm8ua2V5ZnJhbWVzID0gdGhpcy5fcGFyc2VLZXlmcmFtZXMoa2V5ZnJhbWVzKVxuICAgIH1cbiAgICBvcmlnaW4ua2V5ZnJhbWVzID0gbnVsbFxuICB9LFxuICBvblR5cGVFcnIgKHRhcmdldCkge1xuICAgIHRhcmdldC5tZWRpYUluZm8uaGFzS2V5ZnJhbWVzID0gZmFsc2VcbiAgfVxufV1cbmV4cG9ydCBkZWZhdWx0IGZpZWxkc1xuIiwiZXhwb3J0IGNvbnN0IE1ldGFUeXBlcyA9IHtcbiAgTlVNQkVSOiAwLFxuICBCT09MRUFOOiAxLFxuICBTVFJJTkc6IDIsXG4gIE9CSkVDVDogMyxcbiAgTUlYX0FSUkFZOiA4LFxuICBPQkpFQ1RfRU5EOiA5LFxuICBTVFJJQ1RfQVJSQVk6IDEwLFxuICBEQVRFOiAxMSxcbiAgTE9ORV9TVFJJTkc6IDEyXG59XG5cbmV4cG9ydCBjb25zdCBFdmVudFR5cGVzID0ge1xuICBEQVRBX1JFQURZOiAnZGF0YV9yZWFkeScsXG4gIE1FVEFfREFUQV9SRUFEWTogJ21ldGFfZGF0YV9yZWFkeScsXG4gIFRSQUNLX01FVEFfUkVBRFk6ICd0cmFja19tZXRhX3JlYWR5JyxcbiAgTUVESUFfSU5GT19SRUFEWTogJ21lZGlhX2luZm9fcmVhZHknLFxuICBNRVRBX0VORF9QT1NJVElPTjogJ21ldGFfZW5kX3Bvc2l0aW9uJyxcbiAgRVJST1I6ICdlcnJvcidcbn1cblxuZXhwb3J0IGNvbnN0IHNvdW5kUmF0ZVR5cGVzID0gW1xuICA1NTAwLFxuICAxMTAwMCxcbiAgMjIwMDAsXG4gIDQ0MDAwXG5dXG5cbmV4cG9ydCBjb25zdCBBdWRpb09iamVjdFR5cGVzID0ge1xuICAwOiAnTnVsbCcsXG4gIDE6ICdBQUMgTWFpbicsXG4gIDI6ICdBQUMgTEMnLFxuICAzOiAnQUFDIFNTUihTY2FsYWJsZSBTYW1wbGUgUmF0ZSknLFxuICA0OiAnQUFDIExUUChMb25nIFRlcm0gUHJlZGljdGlvbiknLFxuICA1OiAnSEUtQUFDIC8gU0JSKFNwZWN0cmFsIEJhbmQgUmVwbGljYXRpb24pJyxcbiAgNjogJ0FBQyBTY2FsYWJsZSdcbn1cblxuZXhwb3J0IGNvbnN0IHNhbXBsaW5nRnJlcXVlbmN5VHlwZXMgPSBbXG4gIDk2MDAwLCA4ODIwMCxcbiAgNjQwMDAsIDQ4MDAwLFxuICA0NDEwMCwgMzIwMDAsXG4gIDI0MDAwLCAyMjA1MCxcbiAgMTYwMDAsIDEyMDAwLFxuICAxMTAyNSwgODAwMFxuXVxuXG5leHBvcnQgY29uc3QgYnJvd3NlclR5cGVzID0ge1xuICBJRTogJ2llJyxcbiAgRklSRV9GT1g6ICdmaXJlZm94JyxcbiAgQ0hST01FOiAnY2hyb21lJyxcbiAgT1BFUkE6ICdvcGVyYScsXG4gIFNBRkFSSTogJ3NhZmFyaSdcbn1cblxuZXhwb3J0IGNvbnN0IG1wM1ZlcnNpb25zID0ge1xuICBWMjU6IDAsXG4gIFJFU0VSVkVEOiAxLFxuICBWMjA6IDIsXG4gIFYxMDogM1xufVxuXG5leHBvcnQgY29uc3QgYXVkaW9TYW1wbGVSYXRlID0ge1xuICBWMTA6IFs0NDEwMCwgNDgwMDAsIDMyMDAwLCAwXSxcbiAgVjIwOiBbMjIwNTAsIDI0MDAwLCAxNjAwMCwgMF0sXG4gIFYyNTogWzExMDI1LCAxMjAwMCwgODAwMCwgMF1cbn1cblxuZXhwb3J0IGNvbnN0IG1wM0JpdFJhdGUgPSB7XG4gIExheWVyMTogWzAsIDMyLCA2NCwgOTYsIDEyOCwgMTYwLCAxOTIsIDIyNCwgMjU2LCAyODgsIDMyMCwgMzUyLCAzODQsIDQxNiwgNDQ4LCAtMV0sXG4gIExheWVyMjogWzAsIDMyLCA0OCwgNTYsIDY0LCA4MCwgOTYsIDExMiwgMTI4LCAxNjAsIDE5MiwgMjI0LCAyNTYsIDMyMCwgMzg0LCAtMV0sXG4gIExheWVyMzogWzAsIDMyLCA0MCwgNDgsIDU2LCA2NCwgODAsIDk2LCAxMTIsIDEyOCwgMTYwLCAxOTIsIDIyNCwgMjU2LCAzMjAsIC0xXVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICd4Z3BsYXllcidcbmltcG9ydCBWb2RUYXNrIGZyb20gJy4vdGFza3MvVm9kVGFzaydcbmltcG9ydCBGbHYgZnJvbSAnLi9GbHYnXG5cbmNsYXNzIEZsdlBsYXllciBleHRlbmRzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuX19mbHZfXyA9IG51bGxcbiAgICB0aGlzLmluaXQob3B0aW9ucylcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnc3JjJywge1xuICAgICAgc2V0OiAodmFsKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyAmJiB2YWwuc3RhcnRzV2l0aCgnYmxvYjonKSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29wdGlvbnMudXJsID0gdmFsXG4gICAgICAgIHRoaXMuX19mbHZfXy5kZXN0cm95KClcbiAgICAgICAgdGhpcy5fX2Zsdl9fID0gbmV3IEZsdih0aGlzLl9vcHRpb25zLCB0aGlzKVxuICAgICAgICB0aGlzLl9fZmx2X18ubG9hZCgpXG4gICAgICAgIC8vIGZsdiDkuZ/mmK92aWRlb+e7hOS7tuaSreaUviDlnLDlnYDmmK9tc2UudXJsXG4gICAgICAgIHRoaXMudmlkZW8uc3JjID0gdGhpcy5fX2Zsdl9fLm1zZS51cmxcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbGF5KClcbiAgICAgICAgfSwgMClcbiAgICAgIH0sXG4gICAgICBnZXQ6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnMudXJsXG4gICAgICB9LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgICBpZiAob3B0aW9ucy5hdXRvcGxheSkge1xuICAgICAgdGhpcy5zdGFydCgpXG4gICAgfVxuICB9XG5cbiAgaW5pdCAob3B0aW9ucykge1xuICAgIGNvbnN0IHBsYXllciA9IHRoaXNcbiAgICBjb25zdCB7IGlzTGl2ZSB9ID0gb3B0aW9uc1xuICAgIHBsYXllci5fX2Zsdl9fID0gbmV3IEZsdihvcHRpb25zLCBwbGF5ZXIpXG4gICAgcGxheWVyLm9uY2UoJ2NvbXBsZXRlJywgKCkgPT4ge1xuICAgICAgLy8gc3RhcnTmlrnms5XnmoTkuIvkuIDkuKrkuovku7blvqrnjq/op6blj5Fjb21wbGV0ZVxuICAgICAgcGxheWVyLmNyZWF0ZUluc3RhbmNlKHBsYXllci5fX2Zsdl9fKVxuICAgIH0pXG4gICAgcGxheWVyLm9uKCdwYXVzZScsICgpID0+IHtcbiAgICAgICFpc0xpdmUgJiYgVm9kVGFzay5jbGVhcigpXG4gICAgfSlcbiAgICB0aGlzLm9uY2UoJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgICBWb2RUYXNrLmNsZWFyKClcbiAgICAgIHBsYXllci5fX2Zsdl9fLmRlc3Ryb3koKVxuICAgICAgcGxheWVyLl9fZmx2X18ubXNlID0gbnVsbFxuICAgICAgcGxheWVyLnZpZGVvLnNyYyA9ICcnXG4gICAgICBwbGF5ZXIuX19mbHZfXyA9IG51bGxcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSW5zdGFuY2UgKGZsdikge1xuICAgIGNvbnN0IHBsYXllciA9IHRoaXNcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5pc0xpdmUpIHtcbiAgICAgIFBsYXllci51dGlsLmFkZENsYXNzKHBsYXllci5yb290LCAneGdwbGF5ZXItaXMtbGl2ZScpXG4gICAgICBjb25zdCBsaXZlID0gUGxheWVyLnV0aWwuY3JlYXRlRG9tKCd4Zy1saXZlJywgJ+ato+WcqOebtOaSrScsIHt9LCAneGdwbGF5ZXItbGl2ZScpXG4gICAgICBwbGF5ZXIuY29udHJvbHMuYXBwZW5kQ2hpbGQobGl2ZSlcbiAgICB9XG4gICAgZmx2LmxvYWQoKVxuICB9XG5cbiAgc3RhcnQgKCkge1xuICAgIGlmICghdGhpcy5pbml0ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBmbHZQbGF5ZXIgPSB0aGlzLl9fZmx2X19cbiAgICBzdXBlci5zdGFydChmbHZQbGF5ZXIubXNlLnVybClcbiAgICB0aGlzLnNyYyA9IGZsdlBsYXllci5tc2UudXJsXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGdldCBpbml0ZWQgKCkge1xuICAgIHJldHVybiB0aGlzLl9fZmx2X18gIT09IHVuZGVmaW5lZFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmx2UGxheWVyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYUluZm8ge1xuICAgIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgICAgIGNvbnN0IF9kZWZhdWx0ID0ge1xuICAgICAgICAgICAgbWltZVR5cGU6IG51bGwsXG4gICAgICAgICAgICBjb2RlYzogJycsXG4gICAgICAgICAgICBkdXJhdGlvbjogbnVsbCxcbiAgICAgICAgICAgIGhhc0F1ZGlvOiBmYWxzZSxcbiAgICAgICAgICAgIGhhc1ZpZGVvOiBmYWxzZSxcbiAgICAgICAgICAgIGF1ZGlvQ29kZWM6IG51bGwsXG4gICAgICAgICAgICB2aWRlb0NvZGVjOiBudWxsLFxuXG4gICAgICAgICAgICB2aWRlb0RhdGFSYXRlOiBudWxsLFxuICAgICAgICAgICAgYXVkaW9EYXRhUmF0ZTogbnVsbCxcbiAgICAgICAgICAgIGF1ZGlvU2FtcGxlUmF0ZTogbnVsbCxcbiAgICAgICAgICAgIGF1ZGlvQ2hhbm5lbENvdW50OiBudWxsLFxuICAgICAgICAgICAgYXVkaW9Db25maWc6IG51bGwsXG5cbiAgICAgICAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgICAgICAgaGVpZ2h0OiBudWxsLFxuICAgICAgICAgICAgZnBzOiBudWxsLFxuICAgICAgICAgICAgcHJvZmlsZTogbnVsbCxcbiAgICAgICAgICAgIGxldmVsOiBudWxsLFxuICAgICAgICAgICAgY2hyb21hRm9ybWF0OiBudWxsLFxuXG4gICAgICAgICAgICBwaXhlbFJhdGlvOiBbXSxcblxuICAgICAgICAgICAgX21ldGFEYXRhOiBudWxsLFxuICAgICAgICAgICAgc2VnbWVudHM6IFtdLFxuICAgICAgICAgICAgaGFzS2V5ZnJhbWVzOiBudWxsLFxuICAgICAgICAgICAga2V5ZnJhbWVzOiBbXSxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpbml0RGF0YSA9ICBPYmplY3QuYXNzaWduKHt9LCBfZGVmYXVsdCwgZGF0YSk7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGluaXREYXRhKS5mb3JFYWNoKChbaywgdl0pPT4ge1xuICAgICAgICAgICAgdGhpc1trXSA9IHY7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIGdldCBpc0NvbXBsZXRlICgpIHtcbiAgICAgICAgY29uc3QgeyBtaW1lVHlwZSwgZHVyYXRpb24sIGhhc0tleWZyYW1lcyB9ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG1pbWVUeXBlICE9PSBudWxsXG4gICAgICAgICAgICAmJiBkdXJhdGlvbiAhPT0gbnVsbFxuICAgICAgICAgICAgJiYgaGFzS2V5ZnJhbWVzICE9PSBudWxsXG4gICAgICAgICAgICAmJiB0aGlzLmlzVmlkZW9JbmZvRmlsbGVkXG4gICAgICAgICAgICAmJiB0aGlzLmlzQXVkaW9JbmZvRmlsbGVkO1xuICAgIH1cbiAgICBnZXQgaXNBdWRpb0luZm9GaWxsZWQgKCkge1xuICAgICAgICBjb25zdCB7IGhhc0F1ZGlvLFxuICAgICAgICAgICAgYXVkaW9Db2RlYyxcbiAgICAgICAgICAgIGF1ZGlvU2FtcGxlUmF0ZSxcbiAgICAgICAgICAgIGF1ZGlvQ2hhbm5lbENvdW50LFxuICAgICAgICB9ID0gdGhpcztcblxuICAgICAgICByZXR1cm4gISEoIWhhc0F1ZGlvIHx8IChoYXNBdWRpbyAmJiBhdWRpb0NvZGVjICYmIGF1ZGlvU2FtcGxlUmF0ZSAmJiBhdWRpb0NoYW5uZWxDb3VudCkpO1xuXG4gICAgfVxuXG4gICAgZ2V0IGlzVmlkZW9JbmZvRmlsbGVkICgpIHtcbiAgICAgICAgY29uc3Qgbm90TnVsbEZpZWxkcyA9IFtcbiAgICAgICAgICAgICd2aWRlb0NvZGVjJyxcbiAgICAgICAgICAgICd3aWR0aCcsXG4gICAgICAgICAgICAnaGVpZ2h0JyxcbiAgICAgICAgICAgICdmcHMnLFxuICAgICAgICAgICAgJ3Byb2ZpbGUnLFxuICAgICAgICAgICAgJ2xldmVsJyxcbiAgICAgICAgICAgICdjaHJvbWFGb3JtYXQnLFxuICAgICAgICBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbm90TnVsbEZpZWxkcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXNbbm90TnVsbEZpZWxkc1tpXV0gPT09IG51bGwpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5oYXNWaWRlbztcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYVNhbXBsZSB7XG4gICAgY29uc3RydWN0b3IgKGluZm8pIHtcbiAgICAgICAgbGV0IF9kZWZhdWx0ID0gTWVkaWFTYW1wbGUuZ2V0RGVmYXVsdEluZigpO1xuXG4gICAgICAgIGlmICghaW5mbyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5mbykgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICAgICAgICByZXR1cm4gX2RlZmF1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNhbXBsZSA9IE9iamVjdC5hc3NpZ24oe30sIF9kZWZhdWx0LCBpbmZvKTtcblxuICAgICAgICBPYmplY3QuZW50cmllcyhzYW1wbGUpLmZvckVhY2goKFtrLCB2XSkgPT4ge1xuICAgICAgICAgICAgdGhpc1trXSA9IHY7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgc3RhdGljIGdldERlZmF1bHRJbmYgKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZHRzOiBudWxsLFxuICAgICAgICAgICAgcHRzOiBudWxsLFxuICAgICAgICAgICAgZHVyYXRpb246IG51bGwsXG4gICAgICAgICAgICBwb3NpdGlvbjogbnVsbCxcbiAgICAgICAgICAgIGlzUkFQOiBmYWxzZSwgLy8gaXMgUmFuZG9tIGFjY2VzcyBwb2ludFxuICAgICAgICAgICAgb3JpZ2luRHRzOiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cblxufVxuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYVNlZ21lbnQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5zdGFydER0cyA9IC0xO1xuICAgICAgICB0aGlzLmVuZER0cyA9IC0xO1xuICAgICAgICB0aGlzLnN0YXJ0UHRzID0gLTE7XG4gICAgICAgIHRoaXMuZW5kUHRzID0gLTE7XG4gICAgICAgIHRoaXMub3JpZ2luU3RhcnREdHMgPSAtMTtcbiAgICAgICAgdGhpcy5vcmlnaW5FbmREdHMgPSAtMTtcbiAgICAgICAgdGhpcy5yYW5kb21BY2Nlc3NQb2ludHMgPSBbXTtcbiAgICAgICAgdGhpcy5maXJzdFNhbXBsZSA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdFNhbXBsZSA9IG51bGw7XG4gICAgfVxuXG4gICAgYWRkUkFQIChzYW1wbGUpIHtcbiAgICAgICAgc2FtcGxlLmlzUkFQID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yYW5kb21BY2Nlc3NQb2ludHMucHVzaChzYW1wbGUpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYVNlZ21lbnRMaXN0IHtcblxuICAgIGNvbnN0cnVjdG9yICh0eXBlKSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLl9saXN0ID0gW107XG4gICAgICAgIHRoaXMuX2xhc3RBcHBlbmRMb2NhdGlvbiA9IC0xOyAvLyBjYWNoZWQgbGFzdCBpbnNlcnQgbG9jYXRpb25cbiAgICB9XG5cbiAgICBnZXQgdHlwZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xuICAgIH1cblxuICAgIGdldCBsZW5ndGggKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGlzdC5sZW5ndGg7XG4gICAgfVxuXG4gICAgaXNFbXB0eSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saXN0Lmxlbmd0aCA9PT0gMDtcbiAgICB9XG5cbiAgICBjbGVhciAoKSB7XG4gICAgICAgIHRoaXMuX2xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5fbGFzdEFwcGVuZExvY2F0aW9uID0gLTE7XG4gICAgfVxuXG4gICAgX3NlYXJjaE5lYXJlc3RTZWdtZW50QmVmb3JlIChiZWdpbkR0cykge1xuICAgICAgICBsZXQgbGlzdCA9IHRoaXMuX2xpc3Q7XG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIC0yO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsYXN0ID0gbGlzdC5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgbWlkID0gMDtcbiAgICAgICAgbGV0IGxib3VuZCA9IDA7XG4gICAgICAgIGxldCB1Ym91bmQgPSBsYXN0O1xuXG4gICAgICAgIGxldCBpZHggPSAwO1xuXG4gICAgICAgIGlmIChiZWdpbkR0cyA8IGxpc3RbMF0ub3JpZ2luRHRzKSB7XG4gICAgICAgICAgICBpZHggPSAtMTtcbiAgICAgICAgICAgIHJldHVybiBpZHg7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAobGJvdW5kIDw9IHVib3VuZCkge1xuICAgICAgICAgICAgbWlkID0gbGJvdW5kICsgTWF0aC5mbG9vcigodWJvdW5kIC0gbGJvdW5kKSAvIDIpO1xuICAgICAgICAgICAgaWYgKG1pZCA9PT0gbGFzdCB8fCAoYmVnaW5EdHMgPiBsaXN0W21pZF0ubGFzdFNhbXBsZS5vcmlnaW5EdHNcbiAgICAgICAgICAgICAgICAgICAgJiYgKGJlZ2luRHRzIDwgbGlzdFttaWQgKyAxXS5vcmlnaW5EdHMpKSkge1xuICAgICAgICAgICAgICAgIGlkeCA9IG1pZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGlzdFttaWRdLm9yaWdpbkR0cyA8IGJlZ2luRHRzKSB7XG4gICAgICAgICAgICAgICAgbGJvdW5kID0gbWlkICsgMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdWJvdW5kID0gbWlkIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWR4O1xuICAgIH1cblxuICAgIF9zZWFyY2hOZWFyZXN0U2VnbWVudEFmdGVyIChiZWdpbkR0cykge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VhcmNoTmVhcmVzdFNlZ21lbnRCZWZvcmUoYmVnaW5EdHMpICsgMTtcbiAgICB9XG5cbiAgICBhcHBlbmQgKHNlZ21lbnQpIHtcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLl9saXN0O1xuICAgICAgICBsZXQgbGFzdEFwcGVuZElkeCA9IHRoaXMuX2xhc3RBcHBlbmRMb2NhdGlvbjtcbiAgICAgICAgbGV0IGluc2VydElkeCA9IDA7XG5cbiAgICAgICAgaWYgKGxhc3RBcHBlbmRJZHggIT09IC0xICYmIGxhc3RBcHBlbmRJZHggPCBsaXN0Lmxlbmd0aFxuICAgICAgICAgICAgJiYgc2VnbWVudC5vcmlnaW5TdGFydER0cyA+PSBsaXN0W2xhc3RBcHBlbmRJZHhdLmxhc3RTYW1wbGUub3JpZ2luRHRzXG4gICAgICAgICAgICAmJiAoKGxhc3RBcHBlbmRJZHggPT09IGxpc3QubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICB8fCAobGFzdEFwcGVuZElkeCA8IGxpc3QubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAmJiBzZWdtZW50Lm9yaWdpblN0YXJ0RHRzIDwgbGlzdFtsYXN0QXBwZW5kSWR4ICsgMV0ub3JpZ2luU3RhcnREdHMpKSkge1xuICAgICAgICAgICAgaW5zZXJ0SWR4ID0gbGFzdEFwcGVuZElkeCArIDE7IC8vIHVzZSBjYWNoZWQgbG9jYXRpb24gaWR4XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAobGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0SWR4ID0gdGhpcy5fc2VhcmNoTmVhcmVzdFNlZ21lbnRCZWZvcmUoc2VnbWVudC5vcmlnaW5TdGFydER0cykgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbGFzdEFwcGVuZExvY2F0aW9uID0gaW5zZXJ0SWR4O1xuICAgICAgICB0aGlzLl9saXN0LnNwbGljZShpbnNlcnRJZHgsIDAsIHNlZ21lbnQpO1xuICAgIH1cblxuICAgIGdldExhc3RTZWdtZW50QmVmb3JlIChiZWdpbkR0cykge1xuICAgICAgICBsZXQgaWR4ID0gdGhpcy5fc2VhcmNoTmVhcmVzdFNlZ21lbnRCZWZvcmUoYmVnaW5EdHMpO1xuICAgICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9saXN0W2lkeF07XG4gICAgICAgIH0gZWxzZSB7IC8vIC0xXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExhc3RTYW1wbGVCZWZvcmUgKGJlZ2luRHRzKSB7XG4gICAgICAgIGxldCBzZWdtZW50ID0gdGhpcy5nZXRMYXN0U2VnbWVudEJlZm9yZShiZWdpbkR0cyk7XG4gICAgICAgIGlmIChzZWdtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VnbWVudC5sYXN0U2FtcGxlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMYXN0UkFQQmVmb3JlIChiZWdpbkR0cykge1xuICAgICAgICBsZXQgc2VnbWVudElkeCA9IHRoaXMuX3NlYXJjaE5lYXJlc3RTZWdtZW50QmVmb3JlKGJlZ2luRHRzKTtcbiAgICAgICAgbGV0IHJhbmRvbUFjY2Vzc1BvaW50cyA9IHRoaXMuX2xpc3Rbc2VnbWVudElkeF0ucmFuZG9tQWNjZXNzUG9pbnRzO1xuICAgICAgICB3aGlsZSAocmFuZG9tQWNjZXNzUG9pbnRzLmxlbmd0aCA9PT0gMCAmJiBzZWdtZW50SWR4ID4gMCkge1xuICAgICAgICAgICAgc2VnbWVudElkeC0tO1xuICAgICAgICAgICAgcmFuZG9tQWNjZXNzUG9pbnRzID0gdGhpcy5fbGlzdFtzZWdtZW50SWR4XS5yYW5kb21BY2Nlc3NQb2ludHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJhbmRvbUFjY2Vzc1BvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmFuZG9tQWNjZXNzUG9pbnRzW3JhbmRvbUFjY2Vzc1BvaW50cy5sZW5ndGggLSAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0IE1lZGlhSW5mbyBmcm9tICcuL01lZGlhSW5mbydcbmltcG9ydCBzbmlmZmVyIGZyb20gJy4uL3V0aWxzL3NuaWZmZXInXG5jbGFzcyBTdG9yZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNMZTogc25pZmZlci5pc0xlLFxuICAgICAgX2hhc0F1ZGlvOiBmYWxzZSxcbiAgICAgIF9oYXNWaWRlbzogZmFsc2UsXG4gICAgICBfbWVkaWFJbmZvOiBuZXcgTWVkaWFJbmZvKCksXG4gICAgICBfbWV0YURhdGE6IG51bGwsXG4gICAgICBfdmlkZW9UcmFjazoge3R5cGU6ICd2aWRlbycsIGlkOiAxLCBzYW1wbGVzOiBbXSwgbGVuZ3RoOiAwfSxcbiAgICAgIF9hdWRpb1RyYWNrOiB7dHlwZTogJ2F1ZGlvJywgaWQ6IDIsIHNhbXBsZXM6IFtdLCBsZW5ndGg6IDB9LFxuICAgICAgX3ZpZGVvTWV0YURhdGE6IG51bGwsXG4gICAgICBfYXVkaW9NZXRhRGF0YTogbnVsbCxcbiAgICAgIF9hdWRpb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWQ6IGZhbHNlLFxuICAgICAgX3ZpZGVvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZDogZmFsc2UsXG4gICAgICB0YWdzOiBbXSxcbiAgICAgIHRpbWVTdGFtcEJhc2U6IDAsXG4gICAgICBoYXNWaWRlb0ZsYWdPdmVycmlkZWQ6IGZhbHNlLFxuICAgICAgaGFzQXVkaW9GbGFnT3ZlcnJpZGVkOiBmYWxzZSxcbiAgICAgIHRpbWVTY2FsZTogMTAwMCxcbiAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgaXNMaXZlOiBmYWxzZSxcbiAgICAgIGR1cmF0aW9uT3ZlcnJpZGVkOiBmYWxzZSxcbiAgICAgIG5hbHVMZW5ndGhTaXplOiA0LFxuICAgICAgX3JlZmVyRnJhbWVSYXRlOiB7XG4gICAgICAgIGZpeGVkOiB0cnVlLFxuICAgICAgICBmcHM6IDIzLjk3NixcbiAgICAgICAgZnBzTnVtOiAyMzk3NixcbiAgICAgICAgZnBzRGVuOiAxMDAwXG4gICAgICB9LFxuICAgICAgbWV0YUVuZFBvc2l0aW9uOiAtMVxuICAgIH1cblxuICAgIHRoaXMubWV0aG9kcyA9IHtcbiAgICAgIF9pc0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIF9oYXNBdWRpbyxcbiAgICAgICAgICBfaGFzVmlkZW8sXG4gICAgICAgICAgX2F1ZGlvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZCxcbiAgICAgICAgICBfdmlkZW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIGlmIChfaGFzQXVkaW8gJiYgX2hhc1ZpZGVvKSB7IC8vIGJvdGggYXVkaW8gJiB2aWRlb1xuICAgICAgICAgIHJldHVybiBfYXVkaW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkICYmIF92aWRlb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWRcbiAgICAgICAgfVxuICAgICAgICBpZiAoX2hhc0F1ZGlvICYmICFfaGFzVmlkZW8pIHsgLy8gYXVkaW8gb25seVxuICAgICAgICAgIHJldHVybiB0aGlzLl9hdWRpb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWRcbiAgICAgICAgfVxuICAgICAgICBpZiAoIV9oYXNBdWRpbyAmJiBfaGFzVmlkZW8pIHsgLy8gdmlkZW8gb25seVxuICAgICAgICAgIHJldHVybiBfdmlkZW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LmJpbmQodGhpcylcbiAgICB9XG4gIH1cblxuICBjbGVhclRhZ3MgKCkge1xuICAgIHRoaXMuc3RhdGUudGFncyA9IFtdXG4gIH1cbiAgZ2V0IHJlZmVyRnJhbWVSYXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5fcmVmZXJGcmFtZVJhdGVcbiAgfVxuXG4gIHNldCByZWZlckZyYW1lUmF0ZSAodmFsKSB7XG4gICAgdGhpcy5zdGF0ZS5fcmVmZXJGcmFtZVJhdGUgPSB2YWxcbiAgfVxuXG4gIHNldCBtZWRpYUluZm8gKG1lZGlhSW5mbykge1xuICAgIHRoaXMuc3RhdGUuX21lZGlhSW5mbyA9IG1lZGlhSW5mb1xuICB9XG5cbiAgZ2V0IG1lZGlhSW5mbyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuX21lZGlhSW5mb1xuICB9XG5cbiAgZ2V0IG1ldGFEYXRhICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5fbWV0YURhdGFcbiAgfVxuXG4gIGdldCBoYXNNZXRhRGF0YSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuX21ldGFEYXRhICE9PSBudWxsXG4gIH1cblxuICBzZXQgbWV0YURhdGEgKHYpIHtcbiAgICB0aGlzLnN0YXRlLl9tZXRhRGF0YSA9IHZcbiAgfVxuXG4gIHNldCBhdWRpb1RyYWNrICh2YWwpIHtcbiAgICB0aGlzLnN0YXRlLl9hdWRpb1RyYWNrID0gdmFsXG4gIH1cblxuICBnZXQgYXVkaW9UcmFjayAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuX2F1ZGlvVHJhY2tcbiAgfVxuXG4gIHNldCB2aWRlb1RyYWNrICh2YWwpIHtcbiAgICB0aGlzLnN0YXRlLl92aWRlb1RyYWNrID0gdmFsXG4gIH1cblxuICBnZXQgdmlkZW9UcmFjayAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuX3ZpZGVvVHJhY2tcbiAgfVxuXG4gIHNldCBoYXNBdWRpbyAodmFsKSB7XG4gICAgdGhpcy5zdGF0ZS5faGFzQXVkaW8gPSB2YWxcbiAgICB0aGlzLnN0YXRlLl9tZWRpYUluZm8uaGFzQXVkaW8gPSB2YWxcbiAgfVxuXG4gIGdldCBoYXNBdWRpbyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuX2hhc0F1ZGlvXG4gIH1cblxuICBzZXQgaGFzVmlkZW8gKHZhbCkge1xuICAgIHRoaXMuc3RhdGUuX2hhc1ZpZGVvID0gdmFsXG4gICAgdGhpcy5zdGF0ZS5fbWVkaWFJbmZvLmhhc1ZpZGVvID0gdmFsXG4gIH1cblxuICBnZXQgaGFzVmlkZW8gKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLl9oYXNWaWRlb1xuICB9XG5cbiAgc2V0IHZpZGVvTWV0YURhdGEgKHZhbCkge1xuICAgIHRoaXMuc3RhdGUuX3ZpZGVvTWV0YURhdGEgPSB2YWxcbiAgfVxuXG4gIGdldCB2aWRlb01ldGFEYXRhICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5fdmlkZW9NZXRhRGF0YVxuICB9XG5cbiAgc2V0IGF1ZGlvTWV0YURhdGEgKHZhbCkge1xuICAgIHRoaXMuc3RhdGUuX2F1ZGlvTWV0YURhdGEgPSB2YWxcbiAgfVxuXG4gIGdldCBhdWRpb01ldGFEYXRhICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5fYXVkaW9NZXRhRGF0YVxuICB9XG5cbiAgZ2V0IGtleWZyYW1lcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuX21lZGlhSW5mby5rZXlmcmFtZXNcbiAgfVxuICBnZXQgaXNTZWVrYWJsZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuX21lZGlhSW5mby5oYXNLZXlmcmFtZXNcbiAgfVxuXG4gIGdldCBpc0xlICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5pc0xlXG4gIH1cbiAgZ2V0IGhhc0luaXRpYWxNZXRhRGlzcGF0Y2hlZCAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgX2hhc0F1ZGlvLFxuICAgICAgX2hhc1ZpZGVvLFxuICAgICAgX2F1ZGlvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZCxcbiAgICAgIF92aWRlb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWRcbiAgICB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChfaGFzQXVkaW8gJiYgX2hhc1ZpZGVvKSB7XG4gICAgICByZXR1cm4gX2F1ZGlvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZCAmJiBfdmlkZW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkXG4gICAgfVxuICAgIGlmIChfaGFzQXVkaW8gJiYgIV9oYXNWaWRlbykge1xuICAgICAgcmV0dXJuIHRoaXMuX2F1ZGlvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZFxuICAgIH1cbiAgICBpZiAoIV9oYXNBdWRpbyAmJiBfaGFzVmlkZW8pIHtcbiAgICAgIHJldHVybiBfdmlkZW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZ2V0IHZpZGVvVGltZVNjYWxlICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS50aW1lU2NhbGVcbiAgfVxuXG4gIGdldCBtZXRhRW5kUG9zaXRpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLm1ldGFFbmRQb3NpdGlvblxuICB9XG5cbiAgc2V0IG1ldGFFbmRQb3NpdGlvbiAocG9zKSB7XG4gICAgdGhpcy5zdGF0ZS5tZXRhRW5kUG9zaXRpb24gPSBwb3NcbiAgfVxuXG4gIGdldCBpc0xpdmUgKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmlzTGl2ZVxuICB9XG5cbiAgc2V0IGlzTGl2ZSAodmFsKSB7XG4gICAgdGhpcy5zdGF0ZS5pc0xpdmUgPSB2YWxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yZVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmx2VGFnIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMudGFnVHlwZSA9IC0xO1xuICAgICAgICB0aGlzLmJvZHlTaXplID0gLTE7XG4gICAgICAgIHRoaXMudGFnU2l6ZSA9IC0xO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gLTE7XG4gICAgICAgIHRoaXMuVGltZXN0YW1wID0gLTE7XG4gICAgICAgIHRoaXMuU3RyZWFtSUQgPSAtMTtcbiAgICAgICAgdGhpcy5ib2R5ID0gLTE7XG4gICAgICAgIHRoaXMudGltZSA9IC0xO1xuICAgICAgICB0aGlzLmFyciA9IFtdO1xuICAgIH1cblxuICAgIGdldFRpbWUgKCkge1xuICAgICAgICB0aGlzLmFyciA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuVGltZXN0YW1wLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFyci5wdXNoKCh0aGlzLlRpbWVzdGFtcFtpXS50b1N0cmluZygxNikubGVuZ3RoID09PSAxID8gJzAnICsgdGhpcy5UaW1lc3RhbXBbaV0udG9TdHJpbmcoMTYpIDogdGhpcy5UaW1lc3RhbXBbaV0udG9TdHJpbmcoMTYpKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcnIucG9wKCk7XG4gICAgICAgIGNvbnN0IHRpbWUgPSB0aGlzLmFyci5qb2luKCcnKTtcbiAgICAgICAgdGhpcy50aW1lID0gcGFyc2VJbnQodGltZSwgMTYpO1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGltZSwgMTYpO1xuICAgIH1cblxufSIsImltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXG5jb25zdCBFcnJvclR5cGVzID0ge1xuICBuZXR3b3JrOiB7XG4gICAgY29kZTogMSxcbiAgICBtc2c6ICfop4bpopHkuIvovb3plJnor68nLFxuICAgIHJlbWFyazogJ+WPquimgeinhumikeS4i+i9vemUmeivr+WwseS9v+eUqOatpOexu+Wei++8jOaXoOiuuuaYr3ZpZGVv5pys6Lqr55qE6LaF5pe26L+Y5piveGhy55qE5YiG5q616K+35rGC6LaF5pe25oiW6ICF6LWE5rqQ5LiN5a2Y5ZyoJ1xuICB9LFxuICBtc2U6IHtcbiAgICBjb2RlOiAyLFxuICAgIG1zZzogJ+a1gei/veWKoOmUmeivrycsXG4gICAgcmVtYXJrOiAn6L+95Yqg5rWB55qE5pe25YCZ5aaC5p6c57G75Z6L5LiN5a+544CB5peg5rOV6KKr5q2j56Gu6Kej56CB5YiZ5Lya6Kem5Y+R5q2k57G76ZSZ6K+vJ1xuICB9LFxuICBwYXJzZToge1xuICAgIGNvZGU6IDMsXG4gICAgbXNnOiAn6Kej5p6Q6ZSZ6K+vJyxcbiAgICByZW1hcms6ICdtcDTjgIFobHPjgIFmbHbmiJHku6zpg73mmK/kvb/nlKhqc+i/m+ihjOagvOW8j+ino+aekO+8jOWmguaenOino+aekOWksei0peWImeS8muinpuWPkeatpOexu+mUmeivrydcbiAgfSxcbiAgZm9ybWF0OiB7XG4gICAgY29kZTogNCxcbiAgICBtc2c6ICfmoLzlvI/plJnor68nLFxuICAgIHJlbWFyazogJ+WmguaenOa1j+iniOWZqOS4jeaUr+aMgeeahOagvOW8j+WvvOiHtOaSreaUvumUmeivrydcbiAgfSxcbiAgZGVjb2Rlcjoge1xuICAgIGNvZGU6IDUsXG4gICAgbXNnOiAn6Kej56CB6ZSZ6K+vJyxcbiAgICByZW1hcms6ICfmtY/op4jlmajop6PnoIHlvILluLjkvJrmipvlh7rmraTnsbvlnovplJnor68nXG4gIH0sXG4gIHJ1bnRpbWU6IHtcbiAgICBjb2RlOiA2LFxuICAgIG1zZzogJ+ivreazlemUmeivrycsXG4gICAgcmVtYXJrOiAn5pKt5pS+5Zmo6K+t5rOV6ZSZ6K+vJ1xuICB9LFxuICB0aW1lb3V0OiB7XG4gICAgY29kZTogNyxcbiAgICBtc2c6ICfmkq3mlL7otoXml7YnLFxuICAgIHJlbWFyazogJ+aSreaUvui/h+eoi+S4reaXoOazleato+W4uOivt+axguS4i+S4gOS4quWIhuauteWvvOiHtOaSreaUvuS4reaWrSdcbiAgfSxcbiAgb3RoZXI6IHtcbiAgICBjb2RlOiA4LFxuICAgIG1zZzogJ+WFtuS7lumUmeivrycsXG4gICAgcmVtYXJrOiAn5LiN5Y+v55+l55qE6ZSZ6K+v5oiW6KKr5b+955Wl55qE6ZSZ6K+v57G75Z6LJ1xuICB9XG59XG5cbmNsYXNzIEVycm9ycyB7XG4gIGNvbnN0cnVjdG9yICh0eXBlLCBjdXJyZW50VGltZSwgZHVyYXRpb24sIG5ldHdvcmtTdGF0ZSwgcmVhZHlTdGF0ZSwgc3JjLCBjdXJyZW50U3JjLFxuICAgIGVuZGVkLCBlcnJkID0ge2xpbmU6ICcnLCBoYW5kbGU6ICcnLCBtc2c6ICcnLCB2ZXJzaW9uOiAnJ30pIHtcbiAgICBsZXQgciA9IHt9XG4gICAgci5wbGF5ZXJWZXJzaW9uID0gdmVyc2lvbiAvLyDmkq3mlL7lmajniYjmnKxcbiAgICByLmVycm9yVHlwZSA9IHR5cGVcbiAgICByLmRvbWFpbiA9IGRvY3VtZW50LmRvbWFpbiAvLyBkb21haW5cbiAgICByLmR1cmF0aW9uID0gZHVyYXRpb24gLy8g6KeG6aKR5pe26ZW/XG4gICAgci5jdXJyZW50VGltZSA9IGN1cnJlbnRUaW1lXG4gICAgci5uZXR3b3JrU3RhdGUgPSBuZXR3b3JrU3RhdGVcbiAgICByLnJlYWR5U3RhdGUgPSByZWFkeVN0YXRlXG4gICAgci5jdXJyZW50U3JjID0gY3VycmVudFNyY1xuICAgIHIuc3JjID0gc3JjXG4gICAgci5lbmRlZCA9IGVuZGVkXG4gICAgci5lcnJkID0gZXJyZCAvLyDplJnor6/or6bmg4VcbiAgICByLmV4ID0gKEVycm9yVHlwZXNbdHlwZV0gfHwge30pLm1zZyAvLyDooaXlhYXkv6Hmga9cbiAgICByZXR1cm4gclxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yc1xuIiwiLy/noLTor5HogIUgXG4vL3BhcnNlRGF0YSDmnIDlkI7mmK/liJvlu7p0YWcgdGhpcy5fc3RvcmUuc3RhdGUudGFnc+S4rVxuaW1wb3J0IERlbXV4ZXIgZnJvbSAnLi9kZW11eC9EZW11eGVyJ1xuaW1wb3J0IEJ1ZmZlciBmcm9tICcuLi93cml0ZS9CdWZmZXInXG5pbXBvcnQgVGFnIGZyb20gJy4uL21vZGVscy9UYWcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsdlBhcnNlciBleHRlbmRzIERlbXV4ZXIge1xuICBjb25zdHJ1Y3RvciAoc3RvcmUpIHtcbiAgICBzdXBlcihzdG9yZSlcbiAgICB0aGlzLkNMQVNTX05BTUUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWVcbiAgICB0aGlzLnRlbXBfdThhID0gbnVsbFxuICAgIHRoaXMuZGF0YUxlbiA9IDBcbiAgICB0aGlzLnN0b3AgPSBmYWxzZVxuICAgIHRoaXMuaW5kZXggPSAwIC8vIHJlY29yZCB0aGUgcG9zaXRpb24gaW4gc2luZ2xlIHJvdW5kXG4gICAgdGhpcy5vZmZzZXQgPSAwXG4gICAgdGhpcy5maWxlUG9zaXRpb24gPSAwIC8vIHJlY29yZCBjdXJyZW50IGZpbGUgcG9zaXRpb25cbiAgICB0aGlzLmZpcnN0RmxhZyA9IHRydWVcbiAgfVxuXG4gIHNlZWsgKCkge1xuICAgIHRoaXMub2Zmc2V0ID0gMFxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy50ZW1wX3U4YSA9IG51bGxcbiAgICB0aGlzLmRhdGFMZW4gPSAwXG4gICAgdGhpcy5zdG9wID0gZmFsc2VcbiAgICB0aGlzLmluZGV4ID0gMCAvLyByZWNvcmQgdGhlIHBvc2l0aW9uIGluIHNpbmdsZSByb3VuZFxuICAgIHRoaXMub2Zmc2V0ID0gMFxuICAgIHRoaXMuZmlsZVBvc2l0aW9uID0gMFxuICB9XG5cbiAgc2V0Rmx2IChmbHZVOGEpIHtcbiAgICAvLyDmr4/kuIDmrKFzZXRGbHbpg73lm57ph43nva5pbmRleOWSjG9mZnNldCDnhLblkI7ov5Tlm55vZmZzZXQg5aSW6Z2i5qC55o2ub2Zmc2V06L+b6KGM6KOB5Ymq5pWw5o2uXG4gICAgdGhpcy5zdG9wID0gZmFsc2VcbiAgICB0aGlzLmluZGV4ID0gMFxuICAgIHRoaXMub2Zmc2V0ID0gMFxuICAgIGNvbnN0IHRlbXBVOGEgPSB0aGlzLnRlbXBfdThhID0gZmx2VThhXG4gICAgdGhpcy5kYXRhTGVuID0gdGhpcy50ZW1wX3U4YS5sZW5ndGhcblxuICAgIGlmICghdGhpcy5maXJzdEZsYWcpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlRGF0YSgpXG4gICAgICAvLyDotoXov4cxM+S4quWtl+iKguaJjeW8gOWni+WkhOeQhlxuICAgIH0gZWxzZSBpZiAodGVtcFU4YS5sZW5ndGggPiAxMyAmJiBGbHZQYXJzZXIuaXNGbHZIZWFkKHRlbXBVOGEpKSB7XG4gICAgICAvLyDop6PmnpDmmK/lkKbmnInpn7Pop4bpopEgXG4gICAgICB0aGlzLnBhcnNlSGVhZCgpXG4gICAgICAvLyDmlLnlj5h0aGlzLmluZGV4XG4gICAgICB0aGlzLnJlYWREYXRhKDkpIC8vIOi3s+i/h+WktOmDqFxuICAgICAgdGhpcy5yZWFkRGF0YSg0KSAvLyDot7Pov4fkuIvkuIDkuKrorrDlvZXlpLTpg6hzaXpl55qEIGludDMyXG4gICAgICB0aGlzLnBhcnNlRGF0YSgpXG4gICAgICB0aGlzLmZpcnN0RmxhZyA9IGZhbHNlXG4gICAgICB0aGlzLmZpbGVQb3NpdGlvbiArPSB0aGlzLm9mZnNldFxuICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm9mZnNldFxuICAgIH1cbiAgfVxuXG4gIHBhcnNlRGF0YSAoKSB7XG4gICAgY29uc3Qge2xlbmd0aDogdThhTGVuZ3RofSA9IHRoaXMudGVtcF91OGFcbiAgICAvLyDov5nph4zmnInkuKrnlpHpl64g5aaC5p6caGVhZGVy5ZKMYm9keeS4jeaYr+S4gOasoeadpeeahCB0YWfkvJrkuI3kvJrorqHnrpfplJnor6/vvIzmsqHmnInkuKXmoLznmoR0YWfnmoTlvIDlp4vlkoznu5PmnZ/moIflv5cgXG4gICAgLy8g56ys5LiA5qyhYnVmZmVyIHRhZ+eahGJvZHnmsqHmnInlrozlhajliLDnu5PmnZ/kuoYg5L2G5pivb2Zmc2V05oqKMTHkuKpoZWFkZXLlrZfoioLliKDpmaTkuobvvIzkuIvmrKHmnaXlsLHmsqHmnIloZWFkZXLlrZfoioLkuobjgIJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHU4YUxlbmd0aCAmJiAhdGhpcy5zdG9wKSB7XG4gICAgICAvL29mZnNldOaYr+acgOWQjui/lOWbnueahOWkhOeQhuWIsOeahOS9jee9rlxuICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLmluZGV4XG4gICAgICBjb25zdCB0YWcgPSBuZXcgVGFnKClcbiAgICAgIGlmICh0aGlzLnVucmVhZExlbmd0aCA+PSAxMSkge1xuICAgICAgICAvLyDlj6/ku6Xor7vlh7rlpLTpg6jkv6Hmga9cbiAgICAgICAgdGFnLnBvc2l0aW9uID0gdGhpcy5maWxlUG9zaXRpb24gKyB0aGlzLm9mZnNldFxuICAgICAgICB0YWcudGFnVHlwZSA9IHRoaXMucmVhZERhdGEoMSlbMF1cbiAgICAgICAgdGFnLmJvZHlTaXplID0gdGhpcy5yZWFkRGF0YSgzKVxuICAgICAgICB0YWcuVGltZXN0YW1wID0gdGhpcy5yZWFkRGF0YSg0KVxuICAgICAgICB0YWcuU3RyYW1JZCA9IHRoaXMucmVhZERhdGEoMylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOWmguaenOaVsOaNruWwj+S6jjEx5Liq5a2X6IqCIOWImeebtOaOpXJldHVybiBvZmZzZXTlsLHmmK/lvZPliY3nmoRpbmRleFxuICAgICAgICB0aGlzLnN0b3AgPSB0cnVlXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBpZiAodGhpcy51bnJlYWRMZW5ndGggPj0gdGhpcy5nZXRCb2R5U2l6ZSh0YWcuYm9keVNpemUpICsgNCkge1xuICAgICAgICB0YWcuYm9keSA9IHRoaXMucmVhZERhdGEodGhpcy5nZXRCb2R5U2l6ZSh0YWcuYm9keVNpemUpKVxuICAgICAgICB0YWcudGFnU2l6ZSA9IHRoaXMucmVhZERhdGEoNClcbiAgICAgICAgLy8g5pyA5ZCO5piv5a2Y5pS+5Yiw5LqGc3RvcmXkuK3nmoR0YWdzXG4gICAgICAgIGNvbnN0IHt0YWdzLCBfaGFzVmlkZW8sIF9oYXNBdWRpb30gPSB0aGlzLl9zdG9yZS5zdGF0ZVxuICAgICAgICBzd2l0Y2ggKHRhZy50YWdUeXBlKSB7XG4gICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgX2hhc1ZpZGVvICYmIHRhZ3MucHVzaCh0YWcpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIF9oYXNBdWRpbyAmJiB0YWdzLnB1c2godGFnKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgdGFncy5wdXNoKHRhZylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RvcCA9IHRydWVcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLmluZGV4XG4gICAgfVxuICAgIHRoaXMuZmlsZVBvc2l0aW9uICs9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy50ZW1wX3U4YSA9IG51bGxcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gc2l6ZUFyclxuICAgKiBAcmV0dXJuXG4gICAqL1xuICBnZXRCb2R5U2l6ZSAoc2l6ZUFycikge1xuICAgIHJldHVybiBCdWZmZXIucmVhZEFzSW50KHNpemVBcnIpXG4gIH1cbiAgLy8gXG4gIHBhcnNlSGVhZCAoKSB7XG4gICAgY29uc3Qge3RlbXBfdThhOiB0ZW1wVThhLCBfc3RvcmV9ID0gdGhpc1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIG1hdGNoOiBmYWxzZVxuICAgIH1cbiAgICAvLyDnrKzlm5vkuKrlrZfoioLmmK8xXG4gICAgaWYgKHRlbXBVOGFbM10gIT09IDEpIHtcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gICAgLy8g56ys5LqU5Liq5a2X6IqCXG4gICAgY29uc3QgZmxhZyA9IHRlbXBVOGFbNF1cbiAgICAvLyAxMDAgIOesrOS4ieS9jeaYrzHku6PooajmnInpn7PpopFcbiAgICBjb25zdCBoYXNBdWRpbyA9ICgoZmxhZyAmIDQpID4+PiAyKSAhPT0gMFxuICAgIC8vIDAxIOesrOS4gOS9jeaYrzEg5Luj6KGo5pyJ6KeG6aKRXG4gICAgY29uc3QgaGFzVmlkZW8gPSAoZmxhZyAmIDEpICE9PSAwXG5cbiAgICBpZiAoIWhhc0F1ZGlvICYmICFoYXNWaWRlbykge1xuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIF9zdG9yZS5oYXNBdWRpbyA9IGhhc0F1ZGlvXG4gICAgX3N0b3JlLmhhc1ZpZGVvID0gaGFzVmlkZW9cbiAgfVxuXG4gIHJlYWREYXRhIChsZW5ndGgpIHtcbiAgICBjb25zdCBfaW5kZXggPSB0aGlzLmluZGV4XG4gICAgdGhpcy5pbmRleCArPSBsZW5ndGhcbiAgICByZXR1cm4gdGhpcy50ZW1wX3U4YS5zbGljZShfaW5kZXgsIF9pbmRleCArIGxlbmd0aClcbiAgfVxuXG4gIGdldCB1bnJlYWRMZW5ndGggKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFMZW4gLSB0aGlzLmluZGV4XG4gIH1cblxuICBzdGF0aWMgaXNGbHZIZWFkICh0ZW1wVThhKSB7XG4gICAgbGV0IGZpcnN0VGhyZWVDaGFycyA9IFt0ZW1wVThhWzBdLCB0ZW1wVThhWzFdLCB0ZW1wVThhWzJdXVxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgZmlyc3RUaHJlZUNoYXJzKSA9PT0gJ0ZMVidcbiAgfVxufVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudC1lbWl0dGVyJ1xubGV0IGNvdW50ID0gMFxuY2xhc3MgTVNFIHtcbiAgY29uc3RydWN0b3IgKG1lZGlhRWxlbWVudCkge1xuICAgIC8vY29kZWNzIOino+eggeWZqFxuICAgIHRoaXMuY29kZWNzID0gJ3ZpZGVvL21wNDsgY29kZWNzPVwiYXZjMS42NDAwMUUsIG1wNGEuNDAuNVwiJ1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIEV2ZW50RW1pdHRlcih0aGlzKVxuICAgIHRoaXMubWVkaWFTb3VyY2UgPSBuZXcgd2luZG93Lk1lZGlhU291cmNlKClcbiAgICBtZWRpYUVsZW1lbnQuc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5tZWRpYVNvdXJjZSlcbiAgICB0aGlzLnVybCA9IG1lZGlhRWxlbWVudC5zcmNcbiAgICB0aGlzLmhhbmRsZVNvdXJjZU9wZW4gPSB0aGlzLm9uU291cmNlT3Blbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5tZWRpYVNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdzb3VyY2VvcGVuJywgdGhpcy5oYW5kbGVTb3VyY2VPcGVuKVxuXG4gICAgdGhpcy5tZWRpYVNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdzb3VyY2VjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuZW1pdCgnc291cmNlY2xvc2UnKVxuICAgIH0pXG4gIH1cblxuICBvblNvdXJjZU9wZW4gKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5zb3VyY2VCdWZmZXIgPSBzZWxmLm1lZGlhU291cmNlLmFkZFNvdXJjZUJ1ZmZlcihzZWxmLmNvZGVjcylcbiAgICBzZWxmLnNvdXJjZUJ1ZmZlci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBzZWxmLmVtaXQoJ2Vycm9yJywge1xuICAgICAgICB0eXBlOiAnc291cmNlQnVmZmVyJyxcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH0pXG4gICAgfSlcbiAgICBzZWxmLnNvdXJjZUJ1ZmZlci5hZGRFdmVudExpc3RlbmVyKCd1cGRhdGVlbmQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgc2VsZi5lbWl0KCd1cGRhdGVlbmQnKVxuICAgIH0pXG4gICAgc2VsZi5lbWl0KCdzb3VyY2VvcGVuJylcbiAgICBzZWxmLnNvdXJjZUJ1ZmZlci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBzZWxmLmVtaXQoJ2Vycm9yJywge1xuICAgICAgICB0eXBlOiAnbWVkaWFTb3VyY2UnLFxuICAgICAgICBlcnJvcjogZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIGdldCBzdGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVkaWFTb3VyY2UucmVhZHlTdGF0ZVxuICB9XG5cbiAgZ2V0IGR1cmF0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5tZWRpYVNvdXJjZS5kdXJhdGlvblxuICB9XG5cbiAgc2V0IGR1cmF0aW9uICh2YWx1ZSkge1xuICAgIHRoaXMubWVkaWFTb3VyY2UuZHVyYXRpb24gPSB2YWx1ZVxuICB9XG5cbiAgYXBwZW5kQnVmZmVyIChidWZmZXIpIHtcbiAgICBsZXQgc291cmNlQnVmZmVyID0gdGhpcy5zb3VyY2VCdWZmZXJcbiAgICBpZiAoc291cmNlQnVmZmVyLnVwZGF0aW5nID09PSBmYWxzZSAmJiB0aGlzLnN0YXRlID09PSAnb3BlbicpIHtcbiAgICAgIHNvdXJjZUJ1ZmZlci5hcHBlbmRCdWZmZXIoYnVmZmVyKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICdjbG9zZWQnKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCB7XG4gICAgICAgICAgdHlwZTogJ3NvdXJjZUJ1ZmZlcicsXG4gICAgICAgICAgZXJyb3I6IG5ldyBFcnJvcignbWVkaWFTb3VyY2UgaXMgbm90IGF0dGFjaGVkIHRvIHZpZGVvIG9yIG1lZGlhU291cmNlIGlzIGNsb3NlZCcpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09ICdlbmRlZCcpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIHtcbiAgICAgICAgICB0eXBlOiAnc291cmNlQnVmZmVyJyxcbiAgICAgICAgICBlcnJvcjogbmV3IEVycm9yKCdtZWRpYVNvdXJjZSBpcyBjbG9zZWQnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNvdXJjZUJ1ZmZlci51cGRhdGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuZW1pdCgnd2FybicsIHtcbiAgICAgICAgICAgIHR5cGU6ICdzb3VyY2VCdWZmZXInLFxuICAgICAgICAgICAgZXJyb3I6IG5ldyBFcnJvcignbWVkaWFTb3VyY2UgaXMgYnVzeScpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICAvLyB0aGlzLm1lZGlhU291cmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NvdXJjZW9wZW4nLCB0aGlzLmhhbmRsZVNvdXJjZU9wZW4pXG4gICAgdGhpcy5fX2VlX18gPSB7fVxuICAgIC8vIHRoaXMubWVkaWFTb3VyY2UgPSBudWxsXG4gICAgLy8gdGhpcy5lbmRPZlN0cmVhbSgpXG4gIH1cbiAgcmVtb3ZlQnVmZmVyIChzdGFydCwgZW5kKSB7XG4gICAgdGhpcy5zb3VyY2VCdWZmZXIucmVtb3ZlKHN0YXJ0LCBlbmQpXG4gIH1cblxuICBlbmRPZlN0cmVhbSAoKSB7XG4gICAgaWYgKHRoaXMubWVkaWFTb3VyY2UucmVhZHlTdGF0ZSA9PT0gJ29wZW4nKSB7XG4gICAgICB0aGlzLm1lZGlhU291cmNlLmVuZE9mU3RyZWFtKClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaXNTdXBwb3J0ZWQgKGNvZGVjcykge1xuICAgIHJldHVybiB3aW5kb3cuTWVkaWFTb3VyY2UgJiYgd2luZG93Lk1lZGlhU291cmNlLmlzVHlwZVN1cHBvcnRlZChjb2RlY3MpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTVNFXG4iLCJpbXBvcnQgTXA0UmVtdXhlciBmcm9tICcuL3JlbXV4L01wNHJlbXV4J1xuaW1wb3J0IEZsdlBhcnNlciBmcm9tICcuL0ZsdlBhcnNlcidcbmltcG9ydCBUYWdEZW11eGVyIGZyb20gJy4vZGVtdXgvVGFnRGVtdXhlcidcbmltcG9ydCBTdG9yZSBmcm9tICcuLi9tb2RlbHMvU3RvcmUnXG5pbXBvcnQgVm9kVGFzayBmcm9tICcuLi90YXNrcy9Wb2RUYXNrJ1xuaW1wb3J0IExpdmVUYXNrIGZyb20gJy4uL3Rhc2tzL0xpdmVUYXNrJ1xuaW1wb3J0IEJ1ZmZlciBmcm9tICcuLi93cml0ZS9CdWZmZXInXG5pbXBvcnQgVHJhbnNDb2RlciBmcm9tICcuL1RyYW5zQ29kZXInXG5cbmNvbnN0IE5PT1AgPSAoKSA9PiB7fVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblBhcnNlciBleHRlbmRzIFRyYW5zQ29kZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnLCBwbGF5ZXIpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5DTEFTU19OQU1FID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnXG4gICAgdGhpcy5fcGxheWVyID0gcGxheWVyXG4gICAgdGhpcy5fdGVtcEJhc2VUaW1lID0gMFxuICAgIHRoaXMuZmlyc3RGbGFnID0gdHJ1ZVxuICAgIHRoaXMuX3N0b3JlID0gbmV3IFN0b3JlKClcbiAgICB0aGlzLl9zdG9yZS5pc0xpdmUgPSBjb25maWcuaXNMaXZlIHx8IGZhbHNlXG4gICAgdGhpcy5fc3RvcmUucGxheWVyID0gcGxheWVyXG4gICAgLy8g6Kej5p6Q5oiQdGFnIOWtmOWFpXN0b3JlXG4gICAgdGhpcy5mbHZQYXJzZXIgPSBuZXcgRmx2UGFyc2VyKHRoaXMuX3N0b3JlKVxuICAgIC8vIOagh+iusOino+aekOWZqFxuICAgIHRoaXMudGFnRGVtdXhlciA9IG5ldyBUYWdEZW11eGVyKHRoaXMuX3N0b3JlKVxuICAgIHRoaXMubXA0cmVtdXhlciA9IG5ldyBNcDRSZW11eGVyKHRoaXMuX3N0b3JlKVxuICAgIHRoaXMuYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgdGhpcy5idWZmZXJLZXlmcmFtZXMgPSBuZXcgU2V0KClcbiAgICB0aGlzLk1FVEFfQ0hVTktfU0laRSA9IE1hdGgucG93KDEwLCA2KVxuICAgIHRoaXMuQ0hVTktfU0laRSA9IE1hdGgucG93KDEwLCA2KVxuICAgIHRoaXMuZnR5cF9tb292ID0gbnVsbFxuICAgIHRoaXMuaXNTb3VyY2VPcGVuID0gZmFsc2VcbiAgICB0aGlzLl9pc05ld1NlZ21lbnRzQXJyaXZhbCA9IGZhbHNlXG4gICAgdGhpcy5pc1NlZWtpbmcgPSBmYWxzZVxuICAgIHRoaXMubG9hZFRhc2sgPSBudWxsXG4gICAgdGhpcy5yYW5nZSA9IHtcbiAgICAgIHN0YXJ0OiAtMSxcbiAgICAgIGVuZDogLTFcbiAgICB9XG4gICAgdGhpcy5fcGVuZGluZ0ZyYWdtZW50cyA9IFtdXG4gICAgdGhpcy5fcGVuZGluZ1JlbW92ZVJhbmdlID0gW11cbiAgICB0aGlzLmVycl9jbnQgPSAwXG4gICAgdGhpcy5yZXF1ZXN0Q29uZmlnID0ge1xuICAgICAgbW9kZTogdGhpcy5fY29uZmlnLmNvcnMgPyAnY29ycycgOiAnc2FtZS1vcmlnaW4nXG4gICAgfVxuICAgIHRoaXMuaW5pdEV2ZW50QmluZCgpXG4gIH1cbiAgLy8g5byA5aeL5Yqg6L295pWw5o2uXG4gIHN0YXJ0TG9hZERhdGEgKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmlzTGl2ZSkge1xuICAgICAgdGhpcy5pbml0TWV0YSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdExpdmVTdHJlYW0oKVxuICAgIH1cbiAgfVxuICAvLyDnm7Tmkq1cbiAgaW5pdExpdmVTdHJlYW0gKCkge1xuICAgIC8vIOWKoOi9veaVsOaNrlxuICAgIHRoaXMubG9hZFRhc2sgPSBuZXcgTGl2ZVRhc2sodGhpcy5fY29uZmlnLnVybCwgdGhpcy5yZXF1ZXN0Q29uZmlnKS5ydW4odGhpcy5sb2FkTGl2ZURhdGEuYmluZCh0aGlzKSlcbiAgfVxuXG4gIGxvYWRMaXZlRGF0YSAoYnVmZmVyKSB7XG4gICAgLy8g55u05pKt57uT5p2fXG4gICAgaWYgKGJ1ZmZlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmVtaXQoJ2xpdmUtZW5kJylcbiAgICAgIHRoaXMuX3BsYXllci5tc2UuZW5kT2ZTdHJlYW0oKVxuICAgICAgdGhpcy5kZXN0cm95KClcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvemgtQ04vZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvVWludDhBcnJheVxuICAgICAgLy8gVWludDhBcnJheSA45L2N5peg56ym5Y+35pW05Z6L5pWw57uEICDmr4/kuIDkuKrlhYPntKDmraPlpb3mmK/kuIDkuKrlrZfoioJcbiAgICAgIC8vIHRoaXMuYnVmZmVy5bCx5piv5LiA5Liq5pWw5o2u57yT5Yay5rGgIOW+gOmHjOWKoOaVsOaNriDmoLnmja7lpITnkIbnmoRvZmZzZXTov5vooYzliKDpmaRcbiAgICAgIHRoaXMuYnVmZmVyLndyaXRlKG5ldyBVaW50OEFycmF5KGJ1ZmZlcikpXG4gICAgICAvLyDop6PmnpB0YWdcbiAgICAgIGxldCBvZmZzZXQgPSB0aGlzLnNldEZsdih0aGlzLmJ1ZmZlci5idWZmZXIpXG4gICAgICB0aGlzLmJ1ZmZlci5idWZmZXIgPSB0aGlzLmJ1ZmZlci5idWZmZXIuc2xpY2Uob2Zmc2V0KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8g6Z2e55u05pKtXG4gIGluaXRNZXRhICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IFJlc29sdmVyID0ge1xuICAgICAgcmVzb2x2ZUNodW5rICh7dGltZVN0YW1wLCBidWZmZXJ9KSB7XG4gICAgICAgIGlmICh0aW1lU3RhbXAgIT09IHNlbGYubG9hZFRhc2sudGltZVN0YW1wKSByZXR1cm5cbiAgICAgICAgc2VsZi5lcnJfY250ID0gMFxuICAgICAgICBzZWxmLmJ1ZmZlci53cml0ZShuZXcgVWludDhBcnJheShidWZmZXIpKVxuICAgICAgICBsZXQgb2Zmc2V0ID0gc2VsZi5zZXRGbHYoc2VsZi5idWZmZXIuYnVmZmVyKVxuICAgICAgICBzZWxmLmJ1ZmZlci5idWZmZXIgPSBzZWxmLmJ1ZmZlci5idWZmZXIuc2xpY2Uob2Zmc2V0KVxuICAgICAgICBpZiAoIXNlbGYuaXNNZWRpYUluZm9SZWFkeSkge1xuICAgICAgICAgIHNlbGYuaW5pdE1ldGEoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmFuZ2UgPSB7XG4gICAgICBzdGFydDogdGhpcy5yYW5nZS5lbmQgKyAxLFxuICAgICAgZW5kOiB0aGlzLnJhbmdlLmVuZCArIHRoaXMuTUVUQV9DSFVOS19TSVpFXG4gICAgfVxuICAgIGNvbnN0IGxvYWREYXRhID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMubG9hZE1ldGFEYXRhKHRoaXMucmFuZ2Uuc3RhcnQsIHRoaXMucmFuZ2UuZW5kKS50aGVuKFJlc29sdmVyLnJlc29sdmVDaHVuaykuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgaWYgKHRoaXMuZXJyX2NudCA+PSAzKSB7XG4gICAgICAgICAgdGhpcy5fcGxheWVyLmVtaXQoJ2Vycm9yJywgZSlcbiAgICAgICAgICB0aGlzLmRlc3Ryb3koKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXJyX2NudCArPSAxXG4gICAgICAgIGxvYWREYXRhKClcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBsb2FkRGF0YSgpXG4gIH1cblxuICBsb2FkU2VnbWVudHMgKGNoYW5nZVJhbmdlLCBjdXJyZW50VGltZSA9IDAsIHByZWxvYWRUaW1lKSB7XG4gICAgdGhpcy5faXNOZXdTZWdtZW50c0Fycml2YWwgPSBmYWxzZVxuICAgIGNvbnN0IHJlc29sdmVDaHVuayA9ICh7dGltZVN0YW1wLCBidWZmZXJ9KSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1RlbXBQbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5pc1RlbXBQbGF5ZXIgPSBmYWxzZVxuICAgICAgfVxuICAgICAgaWYgKHRpbWVTdGFtcCAhPT0gdGhpcy5sb2FkVGFzay50aW1lU3RhbXApIHJldHVyblxuICAgICAgdGhpcy5lcnJfY250ID0gMFxuICAgICAgdGhpcy5idWZmZXIud3JpdGUobmV3IFVpbnQ4QXJyYXkoYnVmZmVyKSlcbiAgICAgIGlmICh0aGlzLmlzU2Vla2luZykge1xuICAgICAgICB0aGlzLl9wZW5kaW5nRnJhZ21lbnRzID0gW11cbiAgICAgIH1cbiAgICAgIGxldCBvZmZzZXQgPSB0aGlzLnNldEZsdih0aGlzLmJ1ZmZlci5idWZmZXIpXG4gICAgICB0aGlzLmJ1ZmZlci5idWZmZXIgPSB0aGlzLmJ1ZmZlci5idWZmZXIuc2xpY2Uob2Zmc2V0KVxuICAgICAgaWYgKCF0aGlzLl9pc05ld1NlZ21lbnRzQXJyaXZhbCkge1xuICAgICAgICB0aGlzLmxvYWRTZWdtZW50cyh0cnVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc1NlZWtpbmcgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2hhbmdlUmFuZ2UpIHtcbiAgICAgIGxldCBfcmFuZ2UgPSB0aGlzLnJhbmdlXG5cbiAgICAgIGlmICh0aGlzLmdldE5leHRSYW5nZUVuZChjdXJyZW50VGltZSwgcHJlbG9hZFRpbWUpIDw9IF9yYW5nZS5lbmQpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMucmFuZ2UgPSB7XG4gICAgICAgIHN0YXJ0OiB0aGlzLnJhbmdlLmVuZCArIDEsXG4gICAgICAgIGVuZDogY3VycmVudFRpbWUgPT09IHVuZGVmaW5lZCA/IHRoaXMucmFuZ2UuZW5kICsgdGhpcy5DSFVOS19TSVpFIC0gMSA6IHRoaXMuZ2V0TmV4dFJhbmdlRW5kKGN1cnJlbnRUaW1lLCBwcmVsb2FkVGltZSkgLSAxXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnJhbmdlLnN0YXJ0ID49IHRoaXMucmFuZ2UuZW5kIHx8ICF0aGlzLnJhbmdlLmVuZCkge1xuICAgICAgICB0aGlzLnJhbmdlID0gX3JhbmdlXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBsb2FkRGF0YSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0b3ApIHJldHVyblxuICAgICAgcmV0dXJuIHRoaXMuX2xvYWRTZWdtZW50c0RhdGEodGhpcy5yYW5nZS5zdGFydCwgdGhpcy5yYW5nZS5lbmQpLnRoZW4ocmVzb2x2ZUNodW5rKS5jYXRjaChlID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZXJyX2NudCA+PSAzKSB7XG4gICAgICAgICAgdGhpcy5fcGxheWVyLmVtaXQoJ2Vycm9yJywgJ+WKoOi9veinhumikeWksei0pScpXG4gICAgICAgICAgdGhpcy5kZXN0cm95KClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycl9jbnQgKz0gMVxuICAgICAgICBsb2FkRGF0YSgpXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gbG9hZERhdGEoKVxuICB9XG5cbiAgZ2V0TmV4dFJhbmdlRW5kIChzdGFydCwgcHJlbG9hZFRpbWUpIHtcbiAgICBjb25zdCB7a2V5ZnJhbWVzOiB7dGltZXMsIGZpbGVQb3NpdGlvbnN9LCB2aWRlb1RpbWVTY2FsZX0gPSB0aGlzLl9zdG9yZVxuICAgIGlmICghdGltZXMgfHwgIWZpbGVQb3NpdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLnJhbmdlLmVuZCArIHRoaXMuQ0hVTktfU0laRVxuICAgIH1cbiAgICBzdGFydCAqPSB2aWRlb1RpbWVTY2FsZVxuXG4gICAgbGV0IGV4cGVjdEVuZCA9IHN0YXJ0ICsgKHByZWxvYWRUaW1lICogdmlkZW9UaW1lU2NhbGUpXG4gICAgaWYgKGV4cGVjdEVuZCA+IHRpbWVzW3RpbWVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICByZXR1cm4gZmlsZVBvc2l0aW9uc1tmaWxlUG9zaXRpb25zLmxlbmd0aCAtIDFdXG4gICAgfVxuICAgIGxldCBsZWZ0ID0gMFxuICAgIGxldCByaWdodCA9IHRpbWVzLmxlbmd0aCAtIDFcbiAgICBsZXQgaW5kZXhcblxuICAgIHdoaWxlIChsZWZ0IDw9IHJpZ2h0KSB7XG4gICAgICBsZXQgbWlkID0gTWF0aC5mbG9vcigocmlnaHQgKyBsZWZ0KSAvIDIpXG4gICAgICBpZiAodGltZXNbbWlkXSA8PSBleHBlY3RFbmQgJiYgZXhwZWN0RW5kIDw9IHRpbWVzW21pZCArIDFdKSB7XG4gICAgICAgIGluZGV4ID0gbWlkICsgMVxuICAgICAgICBicmVha1xuICAgICAgfSBlbHNlIGlmIChsZWZ0ID09PSByaWdodCkge1xuICAgICAgICBpbmRleCA9IG1pZFxuICAgICAgICBicmVha1xuICAgICAgfSBlbHNlIGlmIChleHBlY3RFbmQgPCB0aW1lc1ttaWRdKSB7XG4gICAgICAgIHJpZ2h0ID0gbWlkIC0gMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVmdCA9IG1pZCArIDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXggPyBmaWxlUG9zaXRpb25zW2luZGV4XSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgX2xvYWRTZWdtZW50c0RhdGEgKHN0YXJ0ID0gMCwgZW5kID0gc3RhcnQgKyB0aGlzLkNIVU5LX1NJWkUpIHtcbiAgICB0aGlzLmxvYWRUYXNrID0gbmV3IFZvZFRhc2sodGhpcy5fY29uZmlnLnVybCwgW3N0YXJ0LCBlbmRdLCB0aGlzLnJlcXVlc3RDb25maWcpXG4gICAgcmV0dXJuIHRoaXMubG9hZFRhc2sucHJvbWlzZVxuICB9XG5cbiAgbG9hZE1ldGFEYXRhIChzdGFydCA9IDAsIGVuZCA9IHN0YXJ0ICsgdGhpcy5NRVRBX0NIVU5LX1NJWkUpIHtcbiAgICB0aGlzLmxvYWRUYXNrID0gbmV3IFZvZFRhc2sodGhpcy5fY29uZmlnLnVybCwgW3N0YXJ0LCBlbmRdLCB0aGlzLnJlcXVlc3RDb25maWcpXG4gICAgcmV0dXJuIHRoaXMubG9hZFRhc2sucHJvbWlzZVxuICB9XG5cbiAgc2V0Rmx2Rmlyc3QgKGFycmF5QnVmZiwgYmFzZVRpbWUpIHtcbiAgICAvLyDosIPnlKhmbHZQYXJzZXJcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmZsdlBhcnNlci5zZXRGbHYobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmKSlcbiAgICBjb25zdCB7dGFnc30gPSB0aGlzLl9zdG9yZS5zdGF0ZVxuXG4gICAgaWYgKHRhZ3MubGVuZ3RoKSB7XG4gICAgICBpZiAodGFnc1swXS50YWdUeXBlICE9PSAxOCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZsdiBmaWxlIHdpdGhvdXQgbWV0YWRhdGEgdGFnJylcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3RlbXBCYXNlVGltZSAhPT0gMCAmJiB0aGlzLl90ZW1wQmFzZVRpbWUgPT09IHRhZ3NbMF0uZ2V0VGltZSgpKSB7XG4gICAgICAgIHRoaXMuX3N0b3JlLnN0YXRlLl90aW1lc3RhbXBCYXNlID0gMFxuICAgICAgfVxuICAgICAgLy8g6Kej5p6Q5qCH6K6wXG4gICAgICB0aGlzLnRhZ0RlbXV4ZXIucmVzb2x2ZVRhZ3ModGFncylcbiAgICB9XG5cbiAgICB0aGlzLmZpcnN0RmxhZyA9IGZhbHNlXG4gICAgcmV0dXJuIG9mZnNldFxuICB9XG5cbiAgc2V0Rmx2VXN1YWxseSAoYXJyYXlCdWZmLCBiYXNlVGltZSkge1xuICAgIHRoaXMuaXNQYXJzaW5nID0gdHJ1ZVxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuZmx2UGFyc2VyLnNldEZsdihuZXcgVWludDhBcnJheShhcnJheUJ1ZmYpKVxuICAgIGNvbnN0IHt0YWdzfSA9IHRoaXMuX3N0b3JlLnN0YXRlXG4gICAgaWYgKHRhZ3MubGVuZ3RoKSB7XG4gICAgICAvLyDop6PmnpDmoIforrBcbiAgICAgIHRoaXMudGFnRGVtdXhlci5yZXNvbHZlVGFncyh0YWdzKVxuICAgIH1cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBoYW5kbGVEYXRhUmVhZHkgKGF1ZGlvVHJhY2ssIHZpZGVvVHJhY2spIHtcbiAgICB0aGlzLm1wNHJlbXV4ZXIucmVtdXgoYXVkaW9UcmFjaywgdmlkZW9UcmFjaylcbiAgfVxuXG4gIGhhbmRsZU1ldGFEYXRhUmVhZHkgKHR5cGUsIG1ldGEpIHtcbiAgICB0aGlzLm1wNHJlbXV4ZXIub25NZXRhRGF0YVJlYWR5KHR5cGUsIG1ldGEpXG4gIH1cblxuICBoYW5kbGVFcnJvciAoZSkge1xuICAgIHRoaXMuZXJyb3IoZSlcbiAgfVxuXG4gIGhhbmRsZU5ld01lZGlhRnJhZ21lbnQgKG5ld0ZyYWcpIHtcbiAgICB0aGlzLl9pc05ld1NlZ21lbnRzQXJyaXZhbCA9IHRydWVcbiAgICB0aGlzLl9wZW5kaW5nRnJhZ21lbnRzLnB1c2gobmV3RnJhZylcbiAgICBjb25zdCB7cmFuZG9tQWNjZXNzUG9pbnRzfSA9IG5ld0ZyYWcuZnJhZ21lbnRcbiAgICBpZiAocmFuZG9tQWNjZXNzUG9pbnRzICYmIHJhbmRvbUFjY2Vzc1BvaW50cy5sZW5ndGgpIHtcbiAgICAgIHJhbmRvbUFjY2Vzc1BvaW50cy5mb3JFYWNoKHJhcCA9PiB7XG4gICAgICAgIHRoaXMuYnVmZmVyS2V5ZnJhbWVzLmFkZChyYXAuZHRzKVxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzU291cmNlT3Blbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLl9wZW5kaW5nRnJhZ21lbnRzLmxlbmd0aCkge1xuICAgICAgY29uc3QgZnJhZ21lbnQgPSB0aGlzLl9wZW5kaW5nRnJhZ21lbnRzLnNoaWZ0KClcbiAgICAgIGlmICghdGhpcy5oYW5kbGVNZWRpYUZyYWdtZW50KGZyYWdtZW50KSkge1xuICAgICAgICB0aGlzLl9wZW5kaW5nRnJhZ21lbnRzLnVuc2hpZnQoZnJhZ21lbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhbmRsZVNlZWtFbmQoKVxuICAgICAgICB0aGlzLl9wbGF5ZXIuZW1pdCgnY2FjaGV1cGRhdGUnLCB0aGlzLl9wbGF5ZXIpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTWVkaWFJbmZvUmVhZHkgKG1lZGlhSW5mbykge1xuICAgIGNvbnN0IEZUWVBfTU9PViA9IHRoaXMubXA0cmVtdXhlci5vbk1lZGlhSW5mb1JlYWR5KG1lZGlhSW5mbylcbiAgICBpZiAoIXRoaXMuZnR5cF9tb292KSB7XG4gICAgICB0aGlzLmZ0eXBfbW9vdiA9IEZUWVBfTU9PVlxuICAgICAgdGhpcy5lbWl0KCdyZWFkeScsIEZUWVBfTU9PVilcbiAgICB9XG4gIH1cblxuICBpbml0RXZlbnRCaW5kICgpIHtcbiAgICB0aGlzLnRhZ0RlbXV4ZXIuaGFuZGxlRGF0YVJlYWR5ID0gdGhpcy5oYW5kbGVEYXRhUmVhZHkuYmluZCh0aGlzKVxuICAgIHRoaXMudGFnRGVtdXhlci5oYW5kbGVNZWRpYUluZm9SZWFkeSA9IHRoaXMuaGFuZGxlTWVkaWFJbmZvUmVhZHkuYmluZCh0aGlzKVxuICAgIHRoaXMudGFnRGVtdXhlci5oYW5kbGVNZXRhRGF0YVJlYWR5ID0gdGhpcy5oYW5kbGVNZXRhRGF0YVJlYWR5LmJpbmQodGhpcylcbiAgICB0aGlzLnRhZ0RlbXV4ZXIuc2V0RXZlbnRCaW5kKClcbiAgICB0aGlzLm1wNHJlbXV4ZXIuaGFuZGxlTWVkaWFGcmFnbWVudCA9IHRoaXMuaGFuZGxlTmV3TWVkaWFGcmFnbWVudC5iaW5kKHRoaXMpXG4gIH1cblxuICByZXBsYXkgKCkge1xuICAgIHRoaXMuaXNTb3VyY2VPcGVuID0gZmFsc2VcbiAgICB0aGlzLnJhbmdlID0ge1xuICAgICAgc3RhcnQ6IHRoaXMuX3N0b3JlLm1ldGFFbmRQb3NpdGlvbixcbiAgICAgIGVuZDogdGhpcy5nZXROZXh0UmFuZ2VFbmQoMCwgdGhpcy5fY29uZmlnLnByZWxvYWRUaW1lKSAtIDFcbiAgICB9XG4gICAgdGhpcy5tcDRyZW11eGVyLnNlZWsoKVxuICAgIHRoaXMuZmx2UGFyc2VyLnNlZWsoKVxuICAgIHRoaXMuY2xlYXJCdWZmZXIoKVxuICAgIHRoaXMubG9hZFNlZ21lbnRzKGZhbHNlKVxuICB9XG5cbiAgY2xlYXJCdWZmZXIgKCkge1xuICAgIHRoaXMuX3BlbmRpbmdGcmFnbWVudHMgPSBbXVxuICAgIHRoaXMuX3BlbmRpbmdSZW1vdmVSYW5nZSA9IFtdXG4gIH1cbiAgdW5iaW5kRXZlbnRzICgpIHtcbiAgICB0aGlzLnRhZ0RlbXV4ZXIuaGFuZGxlRGF0YVJlYWR5ID0gTk9PUFxuICAgIHRoaXMudGFnRGVtdXhlci5oYW5kbGVNZWRpYUluZm9SZWFkeSA9IE5PT1BcbiAgICB0aGlzLnRhZ0RlbXV4ZXIuaGFuZGxlTWV0YURhdGFSZWFkeSA9IE5PT1BcbiAgICB0aGlzLnRhZ0RlbXV4ZXIuc2V0RXZlbnRCaW5kKClcbiAgICB0aGlzLm1wNHJlbXV4ZXIuaGFuZGxlTWVkaWFGcmFnbWVudCA9IE5PT1BcbiAgfVxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLm1wNHJlbXV4ZXIuZGVzdHJveSgpXG4gICAgdGhpcy5mbHZQYXJzZXIuZGVzdHJveSgpXG4gICAgdGhpcy50YWdEZW11eGVyLmRlc3Ryb3koKVxuICAgIHRoaXMubXA0cmVtdXhlciA9IG51bGxcbiAgICB0aGlzLmZsdlBhcnNlciA9IG51bGxcbiAgICB0aGlzLnRhZ0RlbXV4ZXIgPSBudWxsXG4gICAgdGhpcy5sb2FkU2VnbWVudHMgPSAoKSA9PiBudWxsXG4gICAgdGhpcy5fc3RvcmUgPSBudWxsXG4gICAgdGhpcy5jbGVhckJ1ZmZlcigpXG4gICAgdGhpcy5zdG9wID0gdHJ1ZVxuICAgIHRoaXMubG9hZFRhc2sgJiYgdGhpcy5sb2FkVGFzay5jYW5jZWwoKVxuICB9XG5cbiAgc2VlayAodGFyZ2V0KSB7XG4gICAgdGhpcy5sb2FkVGFzay5jYW5jZWwoKVxuICAgIGNvbnN0IHtrZXlmcmFtZXMgPSB7fSwgdmlkZW9UaW1lU2NhbGV9ID0gdGhpcy5fc3RvcmVcbiAgICBsZXQgc2Vla1N0YXJ0ID0gdGFyZ2V0ICogdmlkZW9UaW1lU2NhbGVcbiAgICBsZXQgc3RhcnRGaWxlUG9zXG4gICAgbGV0IGVuZEZpbGVQb3NcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLm1pbihrZXlmcmFtZXMuZmlsZVBvc2l0aW9ucy5sZW5ndGgsIGtleWZyYW1lcy50aW1lcy5sZW5ndGgpXG4gICAgbGV0IHtwcmVsb2FkVGltZX0gPSB0aGlzLl9jb25maWdcblxuICAgIGZ1bmN0aW9uIGdldEVuZEZpbGVQb3MgKHRpbWUsIGlkeCkge1xuICAgICAgaWYgKGlkeCA9PT0ga2V5ZnJhbWVzLnRpbWVzLmxlbmd0aCkge1xuICAgICAgICBlbmRGaWxlUG9zID0gaWR4XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgaWYgKHRpbWUgPD0gcHJlbG9hZFRpbWUgJiYgcHJlbG9hZFRpbWUgPD0ga2V5ZnJhbWVzLnRpbWVzW2lkeCArIDFdKSB7XG4gICAgICAgIGVuZEZpbGVQb3MgPSBpZHhcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIC8vIOmcgOimgeWkhOeQhkVPRueahOaDheWGtVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgbG8gPSAwXG4gICAgbGV0IGhpID0gbGVuZ3RoIC0gMlxuICAgIHdoaWxlIChsbyA8PSBoaSkge1xuICAgICAgbGV0IG1pZCA9IE1hdGguZmxvb3IoKGxvICsgaGkpIC8gMilcbiAgICAgIGxldCBjdXJyZW50VGltZSA9IGtleWZyYW1lcy50aW1lc1ttaWRdXG4gICAgICBsZXQgbmV4dFRpbWUgPSBrZXlmcmFtZXMudGltZXNbbWlkICsgMV0gPyBrZXlmcmFtZXMudGltZXNbbWlkICsgMV0gOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxuICAgICAgaWYgKChjdXJyZW50VGltZSA8PSBzZWVrU3RhcnQgJiYgc2Vla1N0YXJ0IDw9IG5leHRUaW1lKSB8fCBsbyA9PT0gaGkpIHtcbiAgICAgICAgd2hpbGUgKGtleWZyYW1lcy50aW1lc1ttaWRdID49IHNlZWtTdGFydCkge1xuICAgICAgICAgIG1pZCAtPSAxXG4gICAgICAgIH1cbiAgICAgICAgc3RhcnRGaWxlUG9zID0gbWlkIC0gMVxuICAgICAgICBwcmVsb2FkVGltZSA9IHByZWxvYWRUaW1lICogdmlkZW9UaW1lU2NhbGUgKyBzZWVrU3RhcnRcbiAgICAgICAga2V5ZnJhbWVzLnRpbWVzLmV2ZXJ5KGdldEVuZEZpbGVQb3MpXG4gICAgICAgIGJyZWFrXG4gICAgICB9IGVsc2UgaWYgKHNlZWtTdGFydCA8IGN1cnJlbnRUaW1lKSB7XG4gICAgICAgIGhpID0gbWlkIC0gMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG8gPSBtaWQgKyAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzU2Vla2luZykge1xuICAgICAgdGhpcy5pc1NlZWtpbmcgPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0b3JlLmNsZWFyVGFncygpXG4gICAgfVxuICAgIHRoaXMuX3BlbmRpbmdGcmFnbWVudHMgPSBbXVxuICAgIHRoaXMubXA0cmVtdXhlci5zZWVrKClcbiAgICB0aGlzLmZsdlBhcnNlci5zZWVrKClcbiAgICBWb2RUYXNrLmNsZWFyKClcbiAgICBjb25zdCBfcmFuZ2UgPSB0aGlzLnJhbmdlXG4gICAgaWYgKGtleWZyYW1lcy5maWxlUG9zaXRpb25zW3N0YXJ0RmlsZVBvc10gPCBfcmFuZ2UuZW5kKSB7XG4gICAgICBzdGFydEZpbGVQb3MgKz0gMVxuICAgICAgZW5kRmlsZVBvcyArPSAxXG4gICAgfVxuICAgIHRoaXMucmFuZ2UgPSB7XG4gICAgICBzdGFydDoga2V5ZnJhbWVzLmZpbGVQb3NpdGlvbnNbc3RhcnRGaWxlUG9zXSxcbiAgICAgIGVuZDoga2V5ZnJhbWVzLmZpbGVQb3NpdGlvbnNbZW5kRmlsZVBvc10gLSAxIHx8ICcnXG4gICAgfVxuICAgIHRoaXMuYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgdGhpcy5sb2FkU2VnbWVudHMoZmFsc2UpXG4gIH1cblxuICBnZXQgc2V0Rmx2ICgpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdEZsYWcgPyB0aGlzLnNldEZsdkZpcnN0IDogdGhpcy5zZXRGbHZVc3VhbGx5XG4gIH1cblxuICBnZXQgaXNNZWRpYUluZm9SZWFkeSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JlLm1lZGlhSW5mby5pc0NvbXBsZXRlXG4gIH1cblxuICBnZXQgdmlkZW9EdXJhdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JlLm1lZGlhSW5mby5kdXJhdGlvblxuICB9XG5cbiAgZ2V0IGhhc1BlbmRpbmdGcmFnbWVudHMgKCkge1xuICAgIHJldHVybiAhIXRoaXMuX3BlbmRpbmdGcmFnbWVudHMubGVuZ3RoXG4gIH1cblxuICBnZXQgcGVuZGluZ0ZyYWdtZW50cyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlbmRpbmdGcmFnbWVudHNcbiAgfVxuXG4gIGdldCB2aWRlb1RpbWVTY2FsZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JlLnZpZGVvVGltZVNjYWxlXG4gIH1cblxuICBnZXQgaGFzUGVuZGluZ1JlbW92ZVJhbmdlcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlbmRpbmdSZW1vdmVSYW5nZS5sZW5ndGhcbiAgfVxuXG4gIGdldCBwZW5kaW5nUmVtb3ZlUmFuZ2VzICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGVuZGluZ1JlbW92ZVJhbmdlXG4gIH1cblxuICBnZXQgaXNTZWVrYWJsZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JlLmlzU2Vla2FibGVcbiAgfVxufVxuIiwiaW1wb3J0IEV4cEdvbG9tYiBmcm9tICAnLi4vdXRpbHMvRXhwR29sb21iJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNQU1BhcnNlciB7XG4gICAgc3RhdGljIGdldFByb2ZpbGVTdHIgKHByb2ZpbGVJZGMpIHtcbiAgICAgICAgc3dpdGNoIChwcm9maWxlSWRjKSB7XG4gICAgICAgICAgICBjYXNlIDY2OlxuICAgICAgICAgICAgICAgIHJldHVybiAnQmFzZWxpbmUnO1xuICAgICAgICAgICAgY2FzZSA3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ01haW4nO1xuICAgICAgICAgICAgY2FzZSA4ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0V4dGVuZGVkJztcbiAgICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgICAgIHJldHVybiAnSGlnaCc7XG4gICAgICAgICAgICBjYXNlIDExMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0hpZ2gxMCc7XG4gICAgICAgICAgICBjYXNlIDEyMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0hpZ2g0MjInO1xuICAgICAgICAgICAgY2FzZSAyNDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdIaWdoNDQ0JztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdVbmtub3duJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRMZXZlbFN0ciAobGV2ZWxJZGMpIHtcbiAgICAgICAgcmV0dXJuIChsZXZlbElkYyAvIDEwKS50b0ZpeGVkKDEpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRDaHJvbWFGb3JtYXRTdHIgKGNocm9tYSkge1xuICAgICAgICBzd2l0Y2ggKGNocm9tYSkge1xuICAgICAgICAgICAgY2FzZSA0MjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuICc0OjI6MCc7XG4gICAgICAgICAgICBjYXNlIDQyMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJzQ6MjoyJztcbiAgICAgICAgICAgIGNhc2UgNDQ0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnNDo0OjQnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1Vua25vd24nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVhZCBTUFNcbiAgICAgKiBAcGFyYW0gb3JpZ2luQXJyXG4gICAgICovXG4gICAgc3RhdGljIHBhcnNlU1BTIChvcmlnaW5BcnIpIHtcblxuICAgICAgICBsZXQgcmJzcCA9IFNQU1BhcnNlci5fZWJzcDJyYnNwKG9yaWdpbkFycik7XG5cbiAgICAgICAgY29uc3Qgc3RyZWFtID0gbmV3IEV4cEdvbG9tYihyYnNwKTtcbiAgICAgICAgY29uc3Qgc3BzQ29uZmlnID0gc3RyZWFtLnJlYWRTUFMoKTtcbiAgICAgICAgY29uc3QgeyBjaHJvbWFGb3JtYXQsIGxldmVsSWRjLCBwcm9maWxlSWRjIH0gPSBzcHNDb25maWc7XG4gICAgICAgIHNwc0NvbmZpZy5wcm9maWxlU3RyaW5nID0gU1BTUGFyc2VyLmdldFByb2ZpbGVTdHIocHJvZmlsZUlkYyk7XG4gICAgICAgIHNwc0NvbmZpZy5sZXZlbFN0cmluZyA9IFNQU1BhcnNlci5nZXRMZXZlbFN0cihsZXZlbElkYyk7XG4gICAgICAgIHNwc0NvbmZpZy5jaHJvbWFGb3JtYXRTdHJpbmcgPSBTUFNQYXJzZXIuZ2V0Q2hyb21hRm9ybWF0U3RyKGNocm9tYUZvcm1hdCk7XG5cbiAgICAgICAgcmV0dXJuIHNwc0NvbmZpZztcblxuICAgIH1cblxuICAgIC8vXG4gICAgc3RhdGljIF9lYnNwMnJic3AgKG9yaWdpbkFycikge1xuICAgICAgICBjb25zdCBvcmlnaW5MZW4gPSAgb3JpZ2luQXJyLmJ5dGVMZW5ndGg7XG4gICAgICAgIGNvbnN0IGRpc3QgPSBuZXcgVWludDhBcnJheShvcmlnaW5BcnIuYnl0ZUxlbmd0aCk7XG4gICAgICAgIGxldCBkaXN0U2l6ZSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG9yaWdpbkxlbjsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDIgJiYgb3JpZ2luQXJyW2ldID09PSAzICYmIG9yaWdpbkFycltpIC0gMV0gPT09IDAgJiYgb3JpZ2luQXJyW2kgLSAyXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlzdFtkaXN0U2l6ZSsrXSA9IG9yaWdpbkFycltpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShkaXN0LmJ1ZmZlciwgMCwgZGlzdFNpemUpO1xuICAgIH1cbn0iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSAnLi4vdXRpbHMvT2JzZXJ2ZXInXG5pbXBvcnQgRXJyb3JzIGZyb20gJy4uL21vZGVscy9lcnJvcidcblxuLyoqXG4gKiDovaznoIHlmajln7rnsbtcbiAqL1xuY2xhc3MgVHJhbnNDb2RlciB7XG4gIGNvbnN0cnVjdG9yIChzdG9yZSkge1xuICAgIGlmIChzdG9yZSkge1xuICAgICAgdGhpcy5fc3RvcmUgPSBzdG9yZVxuICAgIH1cbiAgICB0aGlzLl9vYnNlcnZlciA9IG9ic2VydmVyXG4gICAgdGhpcy5vbiA9IG9ic2VydmVyLm9uLmJpbmQob2JzZXJ2ZXIpXG4gICAgdGhpcy5lbWl0ID0gb2JzZXJ2ZXIuZW1pdC5iaW5kKG9ic2VydmVyKVxuICAgIHRoaXMub2ZmID0gb2JzZXJ2ZXIub2ZmLmJpbmQob2JzZXJ2ZXIpXG4gICAgdGhpcy5mbHVzaCA9IG9ic2VydmVyLmZsdXNoLmJpbmQob2JzZXJ2ZXIpXG4gICAgdGhpcy5vbmNlID0gb2JzZXJ2ZXIub25jZS5iaW5kKG9ic2VydmVyKVxuICB9XG4gIGVtaXRFcnJvciAodHlwZSwgZXJyb3JEZXRhaWwgPSB7bGluZTogJycsIGhhbmRsZTogJycsIG1zZzogJycsIHZlcnNpb246ICcnfSkge1xuICAgIGNvbnN0IHsgcGxheWVyLCBzdGF0ZSB9ID0gdGhpcy5fc3RvcmVcbiAgICBpZiAocGxheWVyKSB7XG4gICAgICBjb25zdCBlcnJvclRvRW1pdCA9IG5ldyBFcnJvcnModHlwZSwgcGxheWVyLmN1cnJlbnRUaW1lLCBzdGF0ZS5kdXJhdGlvbiwgJycsIHRydWUsIHBsYXllci5jb25maWcudXJsLCBwbGF5ZXIuY29uZmlnLnVybCwgcGxheWVyLmVuZGVkLCBlcnJvckRldGFpbClcbiAgICAgIHBsYXllci5lbWl0KCdlcnJvcicsIGVycm9yVG9FbWl0KVxuICAgIH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVHJhbnNDb2RlclxuIiwiLy8gcmVmcmVuY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS92aWRlby1kZXYvaGxzLmpzL2Jsb2IvbWFzdGVyL3NyYy9kZW11eC9hZHRzLmpzXG5pbXBvcnQgRGVtdXhlciBmcm9tICcuL0RlbXV4ZXInXG5pbXBvcnQgRGF0YVZpZXc0UmVhZCBmcm9tICcuLi8uLi91dGlscy9EYXRhVmlldzRSZWFkJ1xuLy8gaW1wb3J0IHsgbXAzVmVyc2lvbnMsIG1wM0JpdFJhdGUsIGF1ZGlvU2FtcGxlUmF0ZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy90eXBlcyc7XG4vLyByZXNvbHZlIOaWueazlSDop6PmnpB0YWcgIEFBQ+ino+egge+8jCDmm7TmlrBzdG9yZeS4reeahGF1ZGlvVHJhY2sgYXVkaW9NZXRhRGF0YVxuaW1wb3J0IHtcbiAgc291bmRSYXRlVHlwZXMsXG4gIHNhbXBsaW5nRnJlcXVlbmN5VHlwZXMsXG4gIEV2ZW50VHlwZXMsXG4gIGJyb3dzZXJUeXBlc1xufSBmcm9tICcuLi8uLi9jb25zdGFudHMvdHlwZXMnXG5pbXBvcnQgc25pZmZlciBmcm9tICcuLi8uLi91dGlscy9zbmlmZmVyJ1xuaW1wb3J0IEJ1ZmZlciBmcm9tICcuLi8uLi93cml0ZS9CdWZmZXInXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb0RlbXV4ZXIgZXh0ZW5kcyBEZW11eGVyIHtcbiAgY29uc3RydWN0b3IgKHN0b3JlKSB7XG4gICAgc3VwZXIoc3RvcmUpXG4gICAgdGhpcy5DTEFTU19OQU1FID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgdGhpcy5jdXJyZW50VGFnID0gbnVsbFxuICAgIHRoaXMuZGF0YSA9IG5ldyBVaW50OEFycmF5KDApXG4gICAgdGhpcy5yZWFkT2Zmc2V0ID0gMFxuICAgIHRoaXMuX3N0b3JlLmF1ZGlvTWV0YURhdGEgPSBudWxsXG4gICAgdGhpcy5oYW5kbGVEYXRhUmVhZHkgPSAoKSA9PiB7fVxuICAgIHRoaXMuaGFuZGxlTWV0YURhdGFSZWFkeSA9ICgpID0+IHt9XG4gICAgdGhpcy5oYW5kbGVNZWRpYUluZm9SZWFkeSA9ICgpID0+IHt9XG4gIH1cbiAgcmVzb2x2ZSAodGFnKSB7XG4gICAgdGhpcy5yZWFkT2Zmc2V0ID0gMFxuICAgIGNvbnN0IHsgX3N0b3JlOiBzdG9yZSB9ID0gdGhpc1xuICAgIC8vIOS/ruaUuXN0b3Jl5Lit55qEYXVkaW9UcmFjayBhdWRpb01ldGFEYXRhXG4gICAgY29uc3QgeyBhdWRpb1RyYWNrOiB0cmFjayB9ID0gc3RvcmVcbiAgICB0aGlzLmN1cnJlbnRUYWcgPSB0YWdcbiAgICB0aGlzLmRhdGEgPSB0YWcuYm9keVxuICAgIGxldCB7XG4gICAgICBhdWRpb01ldGFEYXRhOiBtZXRhXG4gICAgfSA9IHN0b3JlXG5cbiAgICBpZiAoIW1ldGEpIHtcbiAgICAgIG1ldGEgPSBzdG9yZS5hdWRpb01ldGFEYXRhID0ge31cbiAgICAgIHN0b3JlLmF1ZGlvTWV0YURhdGEgPSB0aGlzLmluaXRBdWRpb01ldGEobWV0YSlcbiAgICB9XG5cbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldzRSZWFkKHRhZy5ib2R5LmJ1ZmZlciwgdGhpcylcblxuICAgIGNvbnN0IHNvdW5kID0gZHYuZ2V0VWludDgoKVxuXG4gICAgY29uc3Qgc291bmRGb3JtYXRJZHggPSBzb3VuZCA+Pj4gNCAvLyAgVUludDRcbiAgICBjb25zdCBzb3VuZFJhdGUgPSAoc291bmQgJiAxMikgPj4+IDIgLy8gIFVJbnQyXG4gICAgLy8gY29uc3Qgc291bmRTaXplID0gKHNvdW5kICYgMikgPj4+IDEgLy8gICBVSW50MVxuICAgIGNvbnN0IHNvdW5kVHlwZSA9IChzb3VuZCAlIDEpIC8vIFVJbnQxXG5cbiAgICBtZXRhLmF1ZGlvU2FtcGxlUmF0ZSA9IHNvdW5kUmF0ZVR5cGVzW3NvdW5kUmF0ZV1cbiAgICBtZXRhLmNoYW5uZWxDb3VudCA9IHNvdW5kVHlwZSA9PT0gMCA/IDEgOiAyXG5cbiAgICBpZiAoc291bmRGb3JtYXRJZHggIT09IDEwICYmIHNvdW5kRm9ybWF0SWR4ICE9PSAyKSB7XG4gICAgICB0aGlzLmVycm9yKCdvbmx5IHN1cHBvcnQgQUFDIEF1ZGlvIGZvcm1hdCBzbyBmYXInKVxuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIGlmIChzb3VuZEZvcm1hdElkeCA9PT0gMTApIHsgLy8gQUFDXG4gICAgICBjb25zdCBhYWNJbmZvID0gdGhpcy5fcGFyc2VBQUNBdWRpbygpXG4gICAgICBpZiAoIWFhY0luZm8pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgZGF0YTogYWFjRGF0YSwgZGF0YTogeyBzYW1wbGVGcmVxIH0gfSA9IGFhY0luZm9cbiAgICAgIGlmIChhYWNJbmZvLnBhY2tldFR5cGUgPT09IDApIHsgLy8gQUFDIHNlcXVlbmNlIGhlYWRlclxuICAgICAgICBtZXRhLnNhbXBsZVJhdGUgPSBzYW1wbGVGcmVxXG4gICAgICAgIG1ldGEuY2hhbm5lbENvdW50ID0gYWFjRGF0YS5jaGFubmVsQ291bnRcbiAgICAgICAgbWV0YS5jb2RlYyA9IGFhY0RhdGEuY29kZWNcbiAgICAgICAgbWV0YS5tYW5pZmVzdENvZGVjID0gYWFjRGF0YS5tYW5pZmVzdENvZGVjXG4gICAgICAgIG1ldGEuY29uZmlnID0gYWFjRGF0YS5jb25maWdcbiAgICAgICAgbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiA9IDEwMjQgLyBzYW1wbGVGcmVxICogbWV0YS50aW1lU2NhbGVcbiAgICAgICAgaWYgKHN0b3JlLmhhc0luaXRpYWxNZXRhRGlzcGF0Y2hlZCkge1xuICAgICAgICAgIGlmIChzdG9yZS52aWRlb1RyYWNrLmxlbmd0aCB8fCBzdG9yZS5hdWRpb1RyYWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVEYXRhUmVhZHkoc3RvcmUudmlkZW9UcmFjaywgc3RvcmUuYXVkaW9UcmFjaylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RvcmUuc3RhdGUuX2F1ZGlvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGFuZGxlTWV0YURhdGFSZWFkeSgnYXVkaW8nLCBtZXRhKVxuXG4gICAgICAgIGNvbnN0IHsgbWVkaWFJbmZvOiBtaSB9ID0gc3RvcmVcbiAgICAgICAgbWkuYXVkaW9Db2RlYyA9IG1ldGEuY29kZWNcbiAgICAgICAgbWkuYXVkaW9TYW1wbGVSYXRlID0gbWV0YS5zYW1wbGVSYXRlXG4gICAgICAgIG1pLmF1ZGlvQ2hhbm5lbENvdW50ID0gbWV0YS5jaGFubmVsQ291bnRcbiAgICAgICAgbWkuYXVkaW9Db25maWcgPSBtZXRhLmNvbmZpZ1xuICAgICAgICBpZiAobWkuaGFzVmlkZW8pIHtcbiAgICAgICAgICBpZiAobWkudmlkZW9Db2RlYykge1xuICAgICAgICAgICAgbWkubWltZVR5cGUgPSBgdmlkZW8veC1mbHY7IGNvZGVjcz1cIiR7bWkudmlkZW9Db2RlY30sJHttaS5hdWRpb0NvZGVjfVwiYFxuICAgICAgICAgICAgbWkuY29kZWMgPSBtaS5taW1lVHlwZS5yZXBsYWNlKCd4LWZsdicsICdtcDQnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtaS5taW1lVHlwZSA9IGB2aWRlby94LWZsdjsgY29kZWNzPVwiJHttaS5hdWRpb0NvZGVjfVwiYFxuICAgICAgICAgIG1pLmNvZGVjID0gbWkubWltZVR5cGUucmVwbGFjZSgneC1mbHYnLCAnbXA0JylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtaS5pc0NvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVNZWRpYUluZm9SZWFkeShtaSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhYWNJbmZvLnBhY2tldFR5cGUgPT09IDEpIHsgLy8gQUFDIHJhdyBmcmFtZSBkYXRhXG4gICAgICAgIGxldCBkdHMgPSBzdG9yZS5zdGF0ZS50aW1lU3RhbXBCYXNlICsgdGhpcy5jdXJyZW50VGFnLmdldFRpbWUoKVxuICAgICAgICBsZXQgYWFjU2FtcGxlID0geyB1bml0OiBhYWNJbmZvLmRhdGEsIGxlbmd0aDogYWFjSW5mby5kYXRhLmJ5dGVMZW5ndGgsIGR0czogZHRzLCBwdHM6IGR0cyB9XG4gICAgICAgIHRyYWNrLnNhbXBsZXMucHVzaChhYWNTYW1wbGUpXG4gICAgICAgIHRyYWNrLmxlbmd0aCArPSBhYWNJbmZvLmRhdGEubGVuZ3RoXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5yZXNldFN0YXR1cygpXG4gIH1cblxuICBfcGFyc2VBQUNBdWRpbyAoKSB7XG4gICAgaWYgKHRoaXMudW5yZWFkTGVuZ3RoIDw9IDEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBhYWNEYXRhID0ge31cbiAgICBsZXQgYWFjQXJyYXkgPSBuZXcgVWludDhBcnJheSh0aGlzLmRhdGEuYnVmZmVyLCB0aGlzLnJlYWRPZmZzZXQsIHRoaXMudW5yZWFkTGVuZ3RoKVxuICAgIGNvbnN0IHBhY2tldFR5cGUgPSBhYWNBcnJheVswXVxuICAgIHRoaXMucmVhZE9mZnNldCArPSAxXG4gICAgYWFjRGF0YS5wYWNrZXRUeXBlID0gcGFja2V0VHlwZVxuICAgIGlmICghcGFja2V0VHlwZSkge1xuICAgICAgY29uc3QgeyBwb3NpdGlvbiwgdGFnU2l6ZSB9ID0gdGhpcy5jdXJyZW50VGFnXG4gICAgICB0aGlzLl9zdG9yZS5tZXRhRW5kUG9zaXRpb24gPSBwb3NpdGlvbiArIEJ1ZmZlci5yZWFkQXNJbnQodGFnU2l6ZSkgKyA0XG4gICAgICBhYWNEYXRhLmRhdGEgPSB0aGlzLl9wYXJzZUFBQ0F1ZGlvU3BlY2lmaWNDb25maWcoKSAvLyBBQUMgU2VxdWVuY2UgaGVhZGVyXG4gICAgfSBlbHNlIHtcbiAgICAgIGFhY0RhdGEuZGF0YSA9IGFhY0FycmF5LnNsaWNlKDEpXG4gICAgfVxuXG4gICAgcmV0dXJuIGFhY0RhdGFcbiAgfVxuICBfcGFyc2VBQUNBdWRpb1NwZWNpZmljQ29uZmlnICgpIHtcbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldzRSZWFkKHRoaXMuZGF0YS5idWZmZXIsIHRoaXMpXG4gICAgY29uc3QgeyBnZXRBbmROdW0gfSA9IERhdGFWaWV3NFJlYWRcblxuICAgIGxldCByZXN1bHRPYmogPSB7XG4gICAgICBzYW1wbGluZ0ZyZXF1ZW5jeTogbnVsbCxcbiAgICAgIGV4dEF1ZGlvT2JqZWN0VHlwZTogbnVsbCxcbiAgICAgIGV4dEF1ZGlvU2FtcGxpbmdJZHg6IG51bGxcbiAgICB9XG4gICAgbGV0IGNvbmZpZyA9IHt9XG4gICAgY29uc3QgVUludDAgPSBkdi5nZXRVaW50OCgpXG4gICAgY29uc3QgVUludDEgPSBkdi5nZXRVaW50OCgpXG5cbiAgICBsZXQgdGVtcEF1ZGlvT2JqZWN0VHlwZVxuICAgIGxldCBhdWRpb09iamVjdFR5cGUgPSB0ZW1wQXVkaW9PYmplY3RUeXBlID0gVUludDAgPj4+IDMgLy8gVUludDVcbiAgICBsZXQgc2FtcGxpbmdJZHggPSAoKFVJbnQwICYgZ2V0QW5kTnVtKDUsIDcpKSA8PCAxKSB8IChVSW50MSA+Pj4gNykgLy8gVUludDRcbiAgICBpZiAoc2FtcGxpbmdJZHggPCAwIHx8IHNhbXBsaW5nSWR4ID4gc2FtcGxpbmdGcmVxdWVuY3lUeXBlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZW1pdEVycm9yKCdkZWNvZGVyJywge1xuICAgICAgICBsaW5lOiAnMTQxJyxcbiAgICAgICAgaGFuZGxlOiAnX3BhcnNlQUFDQXVkaW9TcGVjaWZpY0NvbmZpZycsXG4gICAgICAgIG1zZzogYGludmFsaWQgc2FtcGxpbmdGcmVxdWVuY3lJbmRleCAke3NhbXBsaW5nSWR4fWBcbiAgICAgIH0pXG4gICAgICB0aGlzLmRpc3BhdGNoKEV2ZW50VHlwZXMuRVJST1IsIGBlcnJvciBzYW1wbGluZ0ZyZXF1ZW5jeUluZGV4OiAke3NhbXBsaW5nSWR4fWApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZXN1bHRPYmouc2FtcGxpbmdGcmVxdWVuY3kgPSBzYW1wbGluZ0ZyZXF1ZW5jeVR5cGVzW3NhbXBsaW5nSWR4XVxuXG4gICAgbGV0IGNoYW5uZWxDb3VudCA9IHJlc3VsdE9iai5jaGFubmVsQ291bnQgPSAoVUludDEgJiBnZXRBbmROdW0oMSwgNCkpID4+PiAzXG4gICAgaWYgKGNoYW5uZWxDb3VudCA8IDAgfHwgY2hhbm5lbENvdW50ID4gNykge1xuICAgICAgdGhpcy5lbWl0RXJyb3IoJ2RlY29kZXInLCB7XG4gICAgICAgIGxpbmU6ICcxNTQnLFxuICAgICAgICBoYW5kbGU6ICdfcGFyc2VBQUNBdWRpb1NwZWNpZmljQ29uZmlnJyxcbiAgICAgICAgbXNnOiBgaW52YWxpZCBBdWRpbyBDaGFubmVsIENvdW50OiAke2NoYW5uZWxDb3VudH1gXG4gICAgICB9KVxuICAgICAgdGhpcy5kaXNwYXRjaChFdmVudFR5cGVzLkVSUk9SLCBgZXJyb3IgQXVkaW8gQ2hhbm5lbCBDb3VudDogJHtjaGFubmVsQ291bnR9YClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChhdWRpb09iamVjdFR5cGUgPT09IDUpIHsgLy8gSEUtQUFDXG4gICAgICBjb25zdCBVSW50MiA9IGR2LmdldFVpbnQ4KClcbiAgICAgIHJlc3VsdE9iai5leHRBdWRpb1NhbXBsaW5nSWR4ID0gKChVSW50MSAmIGdldEFuZE51bSg1LCA3KSkgPDwgMSkgfCBVSW50MiA+Pj4gN1xuICAgICAgcmVzdWx0T2JqLmV4dEF1ZGlvT2JqZWN0VHlwZSA9IChVSW50MiAmIGdldEFuZE51bSgxLCA1KSkgPj4+IDJcbiAgICB9XG5cbiAgICBpZiAoc25pZmZlci5icm93c2VyID09PSBicm93c2VyVHlwZXMuRklSRV9GT1gpIHtcbiAgICAgIGlmIChzYW1wbGluZ0lkeCA+PSA2KSB7XG4gICAgICAgIC8vIEhFLUFBQyB1c2VzIFNCUiwgaGlnaCBmcmVxdWVuY2llcyBhcmUgY29uc3RydWN0ZWQgZnJvbSBsb3cgZnJlcXVlbmNpZXNcbiAgICAgICAgYXVkaW9PYmplY3RUeXBlID0gNVxuICAgICAgICBjb25maWcgPSBuZXcgQXJyYXkoNClcbiAgICAgICAgcmVzdWx0T2JqLmV4dEF1ZGlvU2FtcGxpbmdJZHggPSBzYW1wbGluZ0lkeCAtIDNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF1ZGlvT2JqZWN0VHlwZSA9IDJcbiAgICAgICAgY29uZmlnID0gbmV3IEFycmF5KDIpXG4gICAgICAgIHJlc3VsdE9iai5leHRBdWRpb1NhbXBsaW5nSWR4ID0gc2FtcGxpbmdJZHhcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNuaWZmZXIub3MuaXNBbmRyb2lkKSB7XG4gICAgICAvLyBBbmRyb2lkIDogYWx3YXlzIHVzZSBBQUNcbiAgICAgIGF1ZGlvT2JqZWN0VHlwZSA9IDJcbiAgICAgIGNvbmZpZyA9IG5ldyBBcnJheSgyKVxuICAgICAgcmVzdWx0T2JqLmV4dEF1ZGlvU2FtcGxpbmdJZHggPSBzYW1wbGluZ0lkeFxuICAgIH0gZWxzZSB7XG4gICAgICAvKiAgZm9yIG90aGVyIGJyb3dzZXJzIChDaHJvbWUvVml2YWxkaS9PcGVyYSAuLi4pXG4gICAgICAgICAgICAgICAgYWx3YXlzIGZvcmNlIGF1ZGlvIHR5cGUgdG8gYmUgSEUtQUFDIFNCUiwgYXMgc29tZSBicm93c2VycyBkbyBub3Qgc3VwcG9ydCBhdWRpbyBjb2RlYyBzd2l0Y2ggcHJvcGVybHkgKGxpa2UgQ2hyb21lIC4uLilcbiAgICAgICAgICAgICovXG4gICAgICBhdWRpb09iamVjdFR5cGUgPSA1XG4gICAgICByZXN1bHRPYmouZXh0ZW5zaW9uU2FtcGxpbmdJbmRleCA9IHNhbXBsaW5nSWR4XG4gICAgICBjb25maWcgPSBuZXcgQXJyYXkoNClcblxuICAgICAgaWYgKHNhbXBsaW5nSWR4ID49IDYpIHtcbiAgICAgICAgcmVzdWx0T2JqLmV4dGVuc2lvblNhbXBsaW5nSWR4ID0gc2FtcGxpbmdJZHggLSAzXG4gICAgICB9IGVsc2UgaWYgKGNoYW5uZWxDb3VudCA9PT0gMSkge1xuICAgICAgICBhdWRpb09iamVjdFR5cGUgPSAyXG4gICAgICAgIGNvbmZpZyA9IG5ldyBBcnJheSgyKVxuICAgICAgICByZXN1bHRPYmouZXh0ZW5zaW9uU2FtcGxpbmdJbmRleCA9IHNhbXBsaW5nSWR4XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uZmlnWzBdID0gYXVkaW9PYmplY3RUeXBlIDw8IDNcbiAgICBjb25maWdbMF0gfD0gKHNhbXBsaW5nSWR4ICYgMHgwRSkgPj4gMVxuICAgIGNvbmZpZ1sxXSB8PSAoc2FtcGxpbmdJZHggJiAweDAxKSA8PCA3XG4gICAgY29uZmlnWzFdIHw9IGNoYW5uZWxDb3VudCA8PCAzXG4gICAgaWYgKGF1ZGlvT2JqZWN0VHlwZSA9PT0gNSkge1xuICAgICAgY29uZmlnWzFdIHw9IChyZXN1bHRPYmouZXh0QXVkaW9TYW1wbGluZ0lkeCAmIDB4MEUpID4+IDFcbiAgICAgIGNvbmZpZ1syXSA9IChyZXN1bHRPYmouZXh0ZW5zaW9uU2FtcGxpbmdJZHggJiAweDAxKSA8PCA3XG4gICAgICAvLyBhZHRzT2JqZWN0VHlwZSAoZm9yY2UgdG8gMiwgY2hyb21lIGlzIGNoZWNraW5nIHRoYXQgb2JqZWN0IHR5cGUgaXMgbGVzcyB0aGFuIDUgPz8/XG4gICAgICAvLyAgICBodHRwczovL2Nocm9taXVtLmdvb2dsZXNvdXJjZS5jb20vY2hyb21pdW0vc3JjLmdpdC8rL21hc3Rlci9tZWRpYS9mb3JtYXRzL21wNC9hYWMuY2NcbiAgICAgIGNvbmZpZ1syXSB8PSAyIDw8IDJcbiAgICAgIGNvbmZpZ1szXSA9IDBcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnLFxuICAgICAgc2FtcGxlRnJlcTogcmVzdWx0T2JqLnNhbXBsaW5nRnJlcXVlbmN5LFxuICAgICAgY2hhbm5lbENvdW50LFxuICAgICAgY29kZWM6IGBtcDRhLjQwLiR7YXVkaW9PYmplY3RUeXBlfWAsXG4gICAgICBtYW5pZmVzdENvZGVjOiBgbXA0YS40MC4ke3RlbXBBdWRpb09iamVjdFR5cGV9YFxuICAgIH1cbiAgfVxuXG4gIGluaXRBdWRpb01ldGEgKG1ldGEpIHtcbiAgICBjb25zdCB7IHN0YXRlLCBhdWRpb1RyYWNrOiB0cmFjayB9ID0gdGhpcy5fc3RvcmVcblxuICAgIG1ldGEuZHVyYXRpb24gPSBzdGF0ZS5kdXJhdGlvblxuICAgIG1ldGEudGltZVNjYWxlID0gc3RhdGUudGltZVNjYWxlXG4gICAgbWV0YS50eXBlID0gJ2F1ZGlvJ1xuICAgIG1ldGEuaWQgPSB0cmFjay5pZFxuXG4gICAgcmV0dXJuIG1ldGFcbiAgfVxuXG4gIHJlc2V0U3RhdHVzICgpIHtcbiAgICB0aGlzLmN1cnJlbnRUYWcgPSBudWxsXG4gICAgdGhpcy5kYXRhID0gbmV3IFVpbnQ4QXJyYXkoMClcbiAgICB0aGlzLnJlYWRPZmZzZXQgPSAwXG4gIH1cbiAgZ2V0IGRhdGFTaXplICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aFxuICB9XG5cbiAgZ2V0IHVucmVhZExlbmd0aCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNpemUgLSB0aGlzLnJlYWRPZmZzZXRcbiAgfVxufVxuIiwiaW1wb3J0IExvZyBmcm9tICcuLi8uLi91dGlscy9Mb2cnXG5pbXBvcnQgVHJhbnNDb2RlciBmcm9tICcuLi9UcmFuc0NvZGVyJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVtdXhlciBleHRlbmRzIFRyYW5zQ29kZXIge1xuICBkaXNwYXRjaCAodHlwZSwgLi4ucGF5bG9hZCkge1xuICAgIGNvbnN0IHByZWZpeCA9ICdkZW11eGVyXydcbiAgICB0aGlzLl9vYnNlcnZlci5lbWl0KGAke3ByZWZpeH0ke3R5cGV9YCwgLi4ucGF5bG9hZClcbiAgfVxuICBlcnJvciAobWVzc2FnZSkge1xuICAgIGNvbnN0IHsgQ0xBU1NfTkFNRSA9ICdEZW11eGVyJyB9ID0gdGhpc1xuICAgIExvZy5lcnJvcihgWyR7Q0xBU1NfTkFNRX0gZXJyb3JdIGAsIG1lc3NhZ2UpXG4gIH1cblxuICBpbmZvIChtZXNzYWdlKSB7XG4gICAgY29uc3QgeyBDTEFTU19OQU1FID0gJ0RlbXV4ZXInIH0gPSB0aGlzXG4gICAgTG9nLmluZm8oYFske0NMQVNTX05BTUV9IGluZm9dIGAsIG1lc3NhZ2UpXG4gIH1cblxuICBsb2cgKG1lc3NhZ2UpIHtcbiAgICBjb25zdCB7IENMQVNTX05BTUUgPSAnRGVtdXhlcicgfSA9IHRoaXNcbiAgICBMb2cubG9nKGBbJHtDTEFTU19OQU1FfSBsb2ddIGAsIG1lc3NhZ2UpXG4gIH1cblxuICB3YXJuIChtZXNzYWdlKSB7XG4gICAgY29uc3QgeyBDTEFTU19OQU1FID0gJ0RlbXV4ZXInIH0gPSB0aGlzXG4gICAgTG9nLndhcm4oYFske0NMQVNTX05BTUV9IHdhcm5dIGAsIG1lc3NhZ2UpXG4gIH1cbn1cbiIsImltcG9ydCB7IE1ldGFUeXBlcyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy90eXBlcyc7XG5pbXBvcnQgVVRGOCBmcm9tICcuLi8uLi91dGlscy9VVEY4JztcbmltcG9ydCBEZW11eGVyIGZyb20gJy4vRGVtdXhlcic7XG5cbi8qKlxuICogbWV0YeS/oeaBr+ino+aekFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhRGVtdXhlciBleHRlbmRzIERlbXV4ZXIge1xuICAgIGNvbnN0cnVjdG9yIChzdG9yZSkge1xuICAgICAgICBzdXBlcihzdG9yZSk7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgfVxuICAgIGdldCBpc0xlICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3JlLmlzTGU7XG4gICAgfVxuICAgIHJlc29sdmUgKG1ldGEsIHNpemUpIHtcbiAgICAgICAgaWYgKHNpemUgPCAzKSB7XG4gICAgICAgICAgICB0aHJvdyAnbm90IGVub3VnaCBkYXRhIGZvciBtZXRhaW5mbyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWV0YURhdGEgPSB7fTtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMucGFyc2VWYWx1ZShtZXRhKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUobWV0YSwgc2l6ZSAtIG5hbWUuYm9keVNpemUpO1xuICAgICAgICBtZXRhRGF0YVtuYW1lLmRhdGFdID0gdmFsdWUuZGF0YTtcblxuICAgICAgICB0aGlzLnJlc2V0U3RhdHVzKCk7XG4gICAgICAgIHJldHVybiBtZXRhRGF0YTtcbiAgICB9XG5cbiAgICByZXNldFN0YXR1cyAoKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgfVxuXG4gICAgcGFyc2VTdHJpbmcgKGJ1ZmZlcikge1xuICAgICAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldyhidWZmZXIsIHRoaXMucmVhZE9mZnNldCk7XG4gICAgICAgIGNvbnN0IHN0ckxlbiA9IGR2LmdldFVpbnQxNigwLCAhdGhpcy5pc0xlKTtcbiAgICAgICAgbGV0IHN0ciA9ICcnO1xuICAgICAgICBpZiAoc3RyTGVuID4gMCkge1xuICAgICAgICAgICAgc3RyID0gVVRGOC5kZWNvZGUobmV3IFVpbnQ4QXJyYXkoYnVmZmVyLCB0aGlzLnJlYWRPZmZzZXQgKyAyLCBzdHJMZW4pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0ciA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzaXplID0gc3RyTGVuICsgMjtcbiAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IHNpemU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBzdHIsXG4gICAgICAgICAgICBib2R5U2l6ZTogc3RyTGVuICsgMixcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwYXJzZURhdGUgKGJ1ZmZlciwgc2l6ZSkge1xuICAgICAgICBjb25zdCB7IGlzTGUgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGR2ID0gbmV3IERhdGFWaWV3KGJ1ZmZlciwgdGhpcy5yZWFkT2Zmc2V0LCBzaXplKTtcbiAgICAgICAgbGV0IHRzID0gZHYuZ2V0RmxvYXQ2NCgwLCAhaXNMZSk7XG4gICAgICAgIGNvbnN0IHRpbWVPZmZzZXQgPSBkdi5nZXRJbnQxNig4LCAhaXNMZSk7XG4gICAgICAgIHRzICs9IHRpbWVPZmZzZXQgKiA2MCAqIDEwMDA7XG5cbiAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IDEwO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YTogbmV3IERhdGUodHMpLFxuICAgICAgICAgICAgYm9keVNpemU6IDEwLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHBhcnNlT2JqZWN0IChidWZmZXIsIHNpemUpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMucGFyc2VTdHJpbmcoYnVmZmVyLCBzaXplKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUoYnVmZmVyLCBzaXplIC0gbmFtZS5ib2R5U2l6ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZS5kYXRhLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZS5kYXRhLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHlTaXplOiBuYW1lLmJvZHlTaXplICsgdmFsdWUuYm9keVNpemUsXG4gICAgICAgICAgICBpc09iakVuZDogdmFsdWUuaXNPYmpFbmQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcGFyc2VMb25nU3RyaW5nIChidWZmZXIpIHtcbiAgICAgICAgY29uc3QgZHYgPSBuZXcgRGF0YVZpZXcoYnVmZmVyLCB0aGlzLnJlYWRPZmZzZXQpO1xuICAgICAgICBjb25zdCBzdHJMZW4gPSBkdi5nZXRVaW50MzIoMCwgIXRoaXMuaXNMZSk7XG4gICAgICAgIGxldCBzdHIgPSAnJztcbiAgICAgICAgaWYgKHN0ckxlbiA+IDApIHtcbiAgICAgICAgICAgIHN0ciA9IFVURjguZGVjb2RlKG5ldyBVaW50OEFycmF5KGJ1ZmZlciwgdGhpcy5yZWFkT2Zmc2V0ICsgMiwgc3RyTGVuKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHIgPSAnJztcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zdCBzaXplID0gc3RyTGVuICsgNDtcbiAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IHN0ckxlbiArIDQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBzdHIsXG4gICAgICAgICAgICBib2R5U2l6ZTogc3RyTGVuICsgNCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDop6PmnpBtZXRh5Lit55qE5Y+Y6YePXG4gICAgICovXG4gICAgcGFyc2VWYWx1ZSAoZGF0YSwgc2l6ZSkge1xuICAgICAgICBsZXQgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKCk7XG4gICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgIGJ1ZmZlciA9IGRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWZmZXIgPSBkYXRhLmJ1ZmZlcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGlzTGUgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIE5VTUJFUixcbiAgICAgICAgICAgIEJPT0xFQU4sXG4gICAgICAgICAgICBTVFJJTkcsXG4gICAgICAgICAgICBPQkpFQ1QsXG4gICAgICAgICAgICBNSVhfQVJSQVksXG4gICAgICAgICAgICBPQkpFQ1RfRU5ELFxuICAgICAgICAgICAgU1RSSUNUX0FSUkFZLFxuICAgICAgICAgICAgREFURSxcbiAgICAgICAgICAgIExPTkVfU1RSSU5HLFxuICAgICAgICB9ID0gTWV0YVR5cGVzO1xuICAgICAgICBjb25zdCBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIsIHRoaXMucmVhZE9mZnNldCwgc2l6ZSk7XG4gICAgICAgIGxldCBpc09iakVuZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCB0eXBlID0gZGF0YVZpZXcuZ2V0VWludDgoMCk7XG4gICAgICAgIGxldCBvZmZzZXQgPSAxO1xuICAgICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gMTtcbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgTlVNQkVSOiB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkYXRhVmlldy5nZXRGbG9hdDY0KDEsICFpc0xlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gODtcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gODtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgQk9PTEVBTjoge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvb2xOdW0gPSBkYXRhVmlldy5nZXRVaW50OCgxKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICEhYm9vbE51bTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gMTtcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgU1RSSU5HOiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyID0gdGhpcy5wYXJzZVN0cmluZyhidWZmZXIpO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gc3RyLmRhdGE7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IHN0ci5ib2R5U2l6ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgT0JKRUNUOiB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgb2JqRW5kU2l6ZSA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQzMihzaXplIC0gNCwgIWlzTGUpICYgMHgwMEZGRkZGRikge1xuICAgICAgICAgICAgICAgICAgICBvYmpFbmRTaXplID0gMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5yZWFkT2Zmc2V0ICs9IG9mZnNldCAtIDE7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG9mZnNldCA8IHNpemUgLSA0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1mT2JqID0gdGhpcy5wYXJzZU9iamVjdChidWZmZXIsIHNpemUgLSBvZmZzZXQgLSBvYmpFbmRTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFtZk9iai5pc09iamVjdEVuZCkgeyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVthbWZPYmouZGF0YS5uYW1lXSA9IGFtZk9iai5kYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgKz0gYW1mT2JqLmJvZHlTaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0IDw9IHNpemUgLSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmsgPSBkYXRhVmlldy5nZXRVaW50MzIob2Zmc2V0IC0gMSwgIWlzTGUpICYgMHgwMEZGRkZGRjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hcmsgPT09IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZE9mZnNldCArPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIE1JWF9BUlJBWToge1xuICAgICAgICAgICAgICAgIHZhbHVlID0ge307XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IDQ7XG4gICAgICAgICAgICAgICAgbGV0IG9iakVuZFNpemUgPSAwO1xuICAgICAgICAgICAgICAgIGlmICgoZGF0YVZpZXcuZ2V0VWludDMyKHNpemUgLSA0LCAhaXNMZSkgJiAweDAwRkZGRkZGKSA9PT0gOSkge1xuICAgICAgICAgICAgICAgICAgICBvYmpFbmRTaXplID0gMztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAob2Zmc2V0IDwgc2l6ZSAtIDgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1mVmFyID0gdGhpcy5wYXJzZU9iamVjdChidWZmZXIsIHNpemUgLSBvZmZzZXQgLSBvYmpFbmRTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFtZlZhci5pc09iamVjdEVuZCkgeyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVthbWZWYXIuZGF0YS5uYW1lXSA9IGFtZlZhci5kYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgKz0gYW1mVmFyLmJvZHlTaXplO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPD0gc2l6ZSAtIDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFya2VyID0gZGF0YVZpZXcuZ2V0VWludDMyKG9mZnNldCAtIDEsICFpc0xlKSAmIDB4MDBGRkZGRkY7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXJrZXIgPT09IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IDM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgT0JKRUNUX0VORDoge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpc09iakVuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgU1RSSUNUX0FSUkFZOiB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBhcnJMZW5ndGggPSBkYXRhVmlldy5nZXRVaW50MzIoMSwgIWlzTGUpO1xuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZE9mZnNldCArPSA0O1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzY3JpcHQgPSB0aGlzLnBhcnNlVmFsdWUoYnVmZmVyLCBzaXplIC0gb2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUucHVzaChzY3JpcHQuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSBzY3JpcHQuYm9keVNpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlIERBVEU6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gdGhpcy5wYXJzZURhdGUoYnVmZmVyLCBzaXplIC0gMSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkYXRlLmRhdGE7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IGRhdGUuYm9keVNpemU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgTE9ORV9TVFJJTkc6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb25nU3RyID0gdGhpcy5wYXJzZUxvbmdTdHJpbmcoYnVmZmVyLCBzaXplIC0gMSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBsb25nU3RyLmRhdGE7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IGxvbmdTdHIuYm9keVNpemU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBzaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlLFxuICAgICAgICAgICAgYm9keVNpemU6IG9mZnNldCxcbiAgICAgICAgICAgIGlzT2JqRW5kOiBpc09iakVuZCxcbiAgICAgICAgfTtcbiAgICB9XG5cbn1cblxuIiwiaW1wb3J0IERlbXV4ZXIgZnJvbSAnLi9EZW11eGVyJ1xuaW1wb3J0IE1ldGFEZW11eGVyIGZyb20gJy4vTWV0YURlbXV4ZXInXG5pbXBvcnQgVmlkZW9EZW11eGVyIGZyb20gJy4vVmlkZW9EZW11eGVyJ1xuaW1wb3J0IEF1ZGlvRGVtdXhlciBmcm9tICcuL0F1ZGlvRGVtdXhlcidcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vLi4vdXRpbHMvTG9nJ1xuaW1wb3J0IG1ldGFGaWVsZHMgZnJvbSAnLi4vLi4vY29uc3RhbnRzL21ldGFGaWVsZHMnXG5cbmNvbnN0IG5hdGl2ZUhhc1Byb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhZ2RlbXV4IGV4dGVuZHMgRGVtdXhlciB7XG4gIGNvbnN0cnVjdG9yIChzdG9yZSkge1xuICAgIHN1cGVyKHN0b3JlKVxuICAgIHRoaXMuQ0xBU1NfTkFNRSA9IHRoaXMuY29uc3RydWN0b3IubmFtZVxuICAgIHRoaXMuX21ldGFEZW11eGVyID0gbmV3IE1ldGFEZW11eGVyKHN0b3JlKVxuICAgIHRoaXMuX3ZpZGVvRGVtdXhlciA9IG5ldyBWaWRlb0RlbXV4ZXIoc3RvcmUpXG4gICAgdGhpcy5fYXVkaW9EZW11eGVyID0gbmV3IEF1ZGlvRGVtdXhlcihzdG9yZSlcbiAgICB0aGlzLl9maXJzdFBhcnNlID0gdHJ1ZVxuICAgIHRoaXMuX2RhdGFPZmZzZXQgPSAwXG4gICAgdGhpcy5oYW5kbGVNZWRpYUluZm9SZWFkeSA9ICgpID0+IHt9XG4gICAgdGhpcy5oYW5kbGVEYXRhUmVhZHkgPSAoKSA9PiB7fVxuICAgIHRoaXMuaGFuZGxlTWV0YURhdGFSZWFkeSA9ICgpID0+IHt9XG4gIH1cbiAgc2V0RXZlbnRCaW5kICgpIHtcbiAgICB0aGlzLl92aWRlb0RlbXV4ZXIuaGFuZGxlRGF0YVJlYWR5ID0gdGhpcy5oYW5kbGVEYXRhUmVhZHlcbiAgICB0aGlzLl92aWRlb0RlbXV4ZXIuaGFuZGxlTWV0YURhdGFSZWFkeSA9IHRoaXMuaGFuZGxlTWV0YURhdGFSZWFkeVxuICAgIHRoaXMuX3ZpZGVvRGVtdXhlci5oYW5kbGVNZWRpYUluZm9SZWFkeSA9IHRoaXMuaGFuZGxlTWVkaWFJbmZvUmVhZHlcbiAgICB0aGlzLl9hdWRpb0RlbXV4ZXIuaGFuZGxlRGF0YVJlYWR5ID0gdGhpcy5oYW5kbGVEYXRhUmVhZHlcbiAgICB0aGlzLl9hdWRpb0RlbXV4ZXIuaGFuZGxlTWV0YURhdGFSZWFkeSA9IHRoaXMuaGFuZGxlTWV0YURhdGFSZWFkeVxuICAgIHRoaXMuX2F1ZGlvRGVtdXhlci5oYW5kbGVNZWRpYUluZm9SZWFkeSA9IHRoaXMuaGFuZGxlTWVkaWFJbmZvUmVhZHlcbiAgfVxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl9tZXRhRGVtdXhlciA9IG51bGxcbiAgICB0aGlzLl92aWRlb0RlbXV4ZXIgPSBudWxsXG4gICAgdGhpcy5fYXVkaW9EZW11eGVyID0gbnVsbFxuICB9XG5cbiAgcmVzb2x2ZVRhZ3MgKCkge1xuICAgIGNvbnN0IHt0YWdzfSA9IHRoaXMuX3N0b3JlLnN0YXRlXG5cbiAgICBjb25zdCB7X3N0b3JlOiBzdG9yZX0gPSB0aGlzXG4gICAgY29uc3Qge3ZpZGVvVHJhY2ssIGF1ZGlvVHJhY2t9ID0gc3RvcmVcblxuICAgIHRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XG4gICAgICB0aGlzLnJlc29sdmVUYWcodGFnKVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5fc3RvcmUuaGFzSW5pdGlhbE1ldGFEaXNwYXRjaGVkKSB7XG4gICAgICBpZiAodmlkZW9UcmFjay5sZW5ndGggfHwgYXVkaW9UcmFjay5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVEYXRhUmVhZHkoYXVkaW9UcmFjaywgdmlkZW9UcmFjaylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9zdG9yZS5zdGF0ZS50YWdzID0gW11cbiAgfVxuXG4gIHJlc29sdmVUYWcgKHRhZykge1xuICAgIHN3aXRjaCAoU3RyaW5nKHRhZy50YWdUeXBlKSkge1xuICAgICAgY2FzZSAnOCc6IC8vIGF1ZGlvXG4gICAgICAgIHRoaXMuX3Jlc29sdmVBdWRpb1RhZyh0YWcpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICc5JzogLy8gdmlkZW9cbiAgICAgICAgdGhpcy5fcmVzb2x2ZVZpZGVvVGFnKHRhZylcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJzE4JzogLy8gbWV0YWRhdGFcbiAgICAgICAgdGhpcy5fcmVzb2x2ZU1ldGFUYWcodGFnKVxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIF9yZXNvbHZlQXVkaW9UYWcgKHRhZykge1xuICAgIGlmICh0YWcuYm9keVNpemUgPD0gMSkge1xuICAgICAgdGhpcy53YXJuKCdOb3QgZW5vdWdoIGRhdGEgZm9yIGF1ZGlvIHRhZyBib2R5JylcbiAgICB9XG4gICAgdGhpcy5fYXVkaW9EZW11eGVyLnJlc29sdmUodGFnKVxuICB9XG5cbiAgX3Jlc29sdmVWaWRlb1RhZyAodGFnKSB7XG4gICAgaWYgKHRhZy5ib2R5U2l6ZSA8PSAxKSB7XG4gICAgICB0aGlzLmVycm9yKCdOb3QgZW5vdWdoIGRhdGEgZm9yIHZpZGVvIHRhZyBib2R5JylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB7X2hhc1ZpZGVvLCBoYXNWaWRlb0ZsYWdPdmVycmlkZWR9ID0gdGhpc1xuICAgIGlmIChoYXNWaWRlb0ZsYWdPdmVycmlkZWQgJiYgIV9oYXNWaWRlbykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fdmlkZW9EZW11eGVyLnJlc29sdmUodGFnKVxuICB9XG5cbiAgX2luaXRNZXRhRGF0YSAobWV0YURhdGEpIHtcbiAgICBjb25zdCB7X3N0b3JlOiBzfSA9IHRoaXNcbiAgICBpZiAobmF0aXZlSGFzUHJvcC5jYWxsKG1ldGFEYXRhLCAnb25NZXRhRGF0YScpKSB7XG4gICAgICBpZiAocy5oYXNNZXRhRGF0YSkge1xuICAgICAgICBMb2dnZXIubG9nKGBbJHt0aGlzLkNMQVNTX05BTUV9XWAsICdmb3VuZCBhbm90aGVyIG1ldGEgdGFnJylcbiAgICAgIH1cbiAgICAgIHMubWV0YURhdGEgPSBtZXRhRGF0YVxuICAgICAgY29uc3Qgb25NZXRhRGF0YSA9IG1ldGFEYXRhLm9uTWV0YURhdGFcblxuICAgICAgbWV0YUZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgY29uc3Qge25hbWUsIHR5cGUsIHBhcnNlciwgb25UeXBlRXJyfSA9IGZpZWxkXG4gICAgICAgIGlmIChPYmplY3Qob25NZXRhRGF0YVtuYW1lXSkgaW5zdGFuY2VvZiB0eXBlKSB7XG4gICAgICAgICAgcGFyc2VyLmNhbGwodGhpcywgcywgb25NZXRhRGF0YSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAob25UeXBlRXJyICYmIG9uVHlwZUVyciBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBvblR5cGVFcnIocywgb25NZXRhRGF0YSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuX3N0b3JlLm1lZGlhSW5mby5fbWV0YURhdGEgPSBtZXRhRGF0YVxuICAgICAgLy8g5ZCM5q2l5Yiw5YWx5Lqrc3RvcmVcbiAgICAgIGlmICh0aGlzLl9zdG9yZS5tZWRpYUluZm8uaXNDb21wbGV0ZSkge1xuICAgICAgICB0aGlzLmhhbmRsZU1lZGlhSW5mb1JlYWR5KHRoaXMuX3N0b3JlLm1lZGlhSW5mbylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfcmVzb2x2ZU1ldGFUYWcgKHRhZykge1xuICAgIGNvbnN0IHtib2R5fSA9IHRhZ1xuICAgIGNvbnN0IG1ldGFPYmogPSB0aGlzLl9tZXRhRGVtdXhlci5yZXNvbHZlKGJvZHksIGJvZHkubGVuZ3RoKVxuICAgIHRoaXMuX2luaXRNZXRhRGF0YShtZXRhT2JqKVxuICB9XG5cbiAgX3BhcnNlS2V5ZnJhbWVzIChrZXlmcmFtZXMpIHtcbiAgICBsZXQgdGltZXMgPSBbXVxuICAgIGxldCBmaWxlUG9zaXRpb25zID0gW11cbiAgICBjb25zdCB7dmlkZW9UaW1lU2NhbGUsIHN0YXRlfSA9IHRoaXMuX3N0b3JlXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBrZXlmcmFtZXMudGltZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRpbWVzW3RpbWVzLmxlbmd0aF0gPSBzdGF0ZS50aW1lU3RhbXBCYXNlICsgTWF0aC5mbG9vcihrZXlmcmFtZXMudGltZXNbaV0gKiB2aWRlb1RpbWVTY2FsZSlcbiAgICAgIGZpbGVQb3NpdGlvbnNbZmlsZVBvc2l0aW9ucy5sZW5ndGhdID0ga2V5ZnJhbWVzLmZpbGVwb3NpdGlvbnNbaV1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGltZXMsXG4gICAgICBmaWxlUG9zaXRpb25zXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgRGVtdXhlciBmcm9tICcuL0RlbXV4ZXInXG5pbXBvcnQgU1BTUGFyc2VyIGZyb20gJy4uL1NQU1BhcnNlcidcbmltcG9ydCBEYXRhVmlldzRSZWFkIGZyb20gJy4uLy4uL3V0aWxzL0RhdGFWaWV3NFJlYWQnXG5pbXBvcnQgeyBFdmVudFR5cGVzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3R5cGVzJ1xuaW1wb3J0IEJ1ZmZlciBmcm9tICcuLi8uLi93cml0ZS9CdWZmZXInXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlb0RlbXV4ZXIgZXh0ZW5kcyBEZW11eGVyIHtcbiAgY29uc3RydWN0b3IgKHN0b3JlKSB7XG4gICAgc3VwZXIoc3RvcmUpXG4gICAgdGhpcy5DTEFTU19OQU1FID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgdGhpcy5yZWFkT2Zmc2V0ID0gMFxuICAgIHRoaXMuZGF0YSA9IG5ldyBVaW50OEFycmF5KDApXG4gICAgdGhpcy5jdXJyZW50VGFnID0gbnVsbFxuICAgIHRoaXMuX3N0b3JlLnZpZGVvTWV0YURhdGEgPSBudWxsXG4gIH1cblxuICByZXNldFN0YXR1cyAoKSB7XG4gICAgdGhpcy5yZWFkT2Zmc2V0ID0gMFxuICAgIHRoaXMuZGF0YSA9IG5ldyBVaW50OEFycmF5KDApXG4gICAgdGhpcy5jdXJyZW50VGFnID0gbnVsbFxuICB9XG5cbiAgcmVzb2x2ZSAodGFnKSB7XG4gICAgdGhpcy5kYXRhID0gdGFnLmJvZHlcbiAgICB0aGlzLmN1cnJlbnRUYWcgPSB0YWdcbiAgICBjb25zdCBmaXJzdFVJOCA9IHRoaXMucmVhZERhdGEoMSlbMF1cbiAgICBjb25zdCBmcmFtZVR5cGUgPSAoZmlyc3RVSTggJiAweEYwKSA+Pj4gNFxuICAgIGNvbnN0IGNvZGVjSWQgPSBmaXJzdFVJOCAmIDB4MEZcbiAgICBpZiAoY29kZWNJZCAhPT0gNykge1xuICAgICAgLyoqIDE6IEpQRUdcbiAgICAgICAgICAgICogMjogSDI2M1xuICAgICAgICAgICAgKiAzOiBTY3JlZW4gdmlkZW9cbiAgICAgICAgICAgICogNDogT24yIFZQNlxuICAgICAgICAgICAgKiA1OiBPbjIgVlA2XG4gICAgICAgICAgICAqIDY6IFNjcmVlbiB2aWRlb3ZlcnNpb24gMlxuICAgICAgICAgICAgKiA3OiBBVkNcbiAgICAgICAgICAgICovXG4gICAgICB0aGlzLmVycm9yKGB1bnN1cHBvcnRlZCBjb2RlY0lkOiAke2NvZGVjSWR9YClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLl9wYXJzZUFWQ1BhY2tldChmcmFtZVR5cGUpXG5cbiAgICB0aGlzLnJlc2V0U3RhdHVzKClcbiAgfVxuXG4gIF9wYXJzZUFWQ1BhY2tldCAoZnJhbWVUeXBlKSB7XG4gICAgaWYgKHRoaXMudW5yZWFkTGVuZ3RoIDwgNCkge1xuICAgICAgdGhpcy5lcnJvcignSW52YWxpZCBBdmMgVGFnJylcbiAgICB9XG4gICAgY29uc3QgaXNMZSA9IHRoaXMuX3N0b3JlLmlzTGVcbiAgICBjb25zdCB7IGJ1ZmZlciB9ID0gdGhpcy5kYXRhXG4gICAgY29uc3QgZHYgPSBuZXcgRGF0YVZpZXcoYnVmZmVyLCB0aGlzLnJlYWRPZmZzZXQsIHRoaXMudW5yZWFkTGVuZ3RoKVxuICAgIGNvbnN0IHBhY2thZ2VUeXBlID0gZHYuZ2V0VWludDgoMClcblxuICAgIGxldCBjcHNUaW1lID0gZHYuZ2V0VWludDMyKDAsICFpc0xlKSAmIDB4MDBGRkZGRkZcbiAgICBjcHNUaW1lID0gKGNwc1RpbWUgPDwgOCkgPj4gOFxuICAgIHRoaXMucmVhZE9mZnNldCArPSA0XG5cbiAgICBzd2l0Y2ggKHBhY2thZ2VUeXBlKSB7XG4gICAgICBjYXNlIDA6IHtcbiAgICAgICAgY29uc3QgeyBwb3NpdGlvbiwgdGFnU2l6ZSB9ID0gdGhpcy5jdXJyZW50VGFnXG5cbiAgICAgICAgdGhpcy5fc3RvcmUubWV0YUVuZFBvc2l0aW9uID0gcG9zaXRpb24gKyBCdWZmZXIucmVhZEFzSW50KHRhZ1NpemUpICsgNCAvLyDnvJPlrZhzY3JpcHRUYWfnu5PmnZ/nmoTkvY3nva7vvIxyZXBsYXnkvb/nlKhcbiAgICAgICAgdGhpcy5fcGFyc2VBVkNEZWNvZGVyQ29uZmlndXJhdGlvblJlY29yZCgpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlIDE6IHtcbiAgICAgICAgdGhpcy5fcGFyc2VBVkNWaWRlb0RhdGEoZnJhbWVUeXBlLCBjcHNUaW1lKVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY2FzZSAyOiB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIC8vIOaKpemUmVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9wYXJzZUFWQ0RlY29kZXJDb25maWd1cmF0aW9uUmVjb3JkICgpIHtcbiAgICBpZiAodGhpcy51bnJlYWRMZW5ndGggPCA3KSB7XG4gICAgICB0aGlzLmVycm9yKCdJbnZhbGlkIEFWQ0RlY29kZXJDb25maWd1cmF0aW9uUmVjb3JkLCBsYWNrIG9mIGRhdGEhJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgbWVkaWFJbmZvOiBtaSB9ID0gdGhpcy5fc3RvcmVcbiAgICAvLyBzdGFzaCBvZmZzZXQmdW5yZWFkU2l6ZSBiZWZvcmUgcGFyc2luZyBzcHMmcHBzXG4gICAgLy8gY29uc3QgdGVtcE9mZnNldCA9IHRoaXMucmVhZE9mZnNldFxuICAgIC8vIGNvbnN0IHRlbXBVbnJlYWRMZW5ndGggPSB0aGlzLnVucmVhZExlbmd0aFxuXG4gICAgY29uc3QgeyBfc3RvcmU6IHN0b3JlIH0gPSB0aGlzXG4gICAgbGV0IG1ldGEgPSB0aGlzLl9zdG9yZS52aWRlb01ldGFEYXRhXG4gICAgbGV0IHRyYWNrID0gdGhpcy5fc3RvcmUudmlkZW9UcmFja1xuICAgIGNvbnN0IGR2ID0gbmV3IERhdGFWaWV3NFJlYWQodGhpcy5kYXRhLmJ1ZmZlciwgdGhpcylcbiAgICBpZiAobWV0YSkge1xuICAgICAgaWYgKG1ldGEuYXZjYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuZXJyb3IoJ2ZvdW5kIGFub3RoZXIgQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQhJylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFzdG9yZS5zdGF0ZS5faGFzVmlkZW8gJiYgIXN0b3JlLnN0YXRlLmhhc1ZpZGVvRmxhZ092ZXJyaWRlZCkge1xuICAgICAgICBzdG9yZS5zdGF0ZS5faGFzVmlkZW8gPSB0cnVlXG4gICAgICAgIHN0b3JlLl9tZWRpYUluZm8uaGFzVmlkZW8gPSB0cnVlXG4gICAgICB9XG4gICAgICBtZXRhID0gc3RvcmUudmlkZW9NZXRhRGF0YSA9IHt9XG4gICAgICBtZXRhLnR5cGUgPSAndmlkZW8nXG4gICAgICBtZXRhLmlkID0gdHJhY2suaWRcbiAgICAgIG1ldGEudGltZVNjYWxlID0gc3RvcmUudmlkZW9UaW1lU2NhbGVcbiAgICAgIG1ldGEuZHVyYXRpb24gPSBzdG9yZS5zdGF0ZS5kdXJhdGlvblxuICAgICAgbWkudGltZXNjYWxlID0gc3RvcmUudmlkZW9UaW1lU2NhbGVcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJzaW9uID0gZHYuZ2V0VWludDgoKVxuICAgIGNvbnN0IGF2Y1Byb2ZpbGUgPSBkdi5nZXRVaW50OCgpXG4gICAgZHYuZ2V0VWludDgoKVxuICAgIGR2LmdldFVpbnQ4KClcbiAgICBpZiAodmVyc2lvbiAhPT0gMSB8fCBhdmNQcm9maWxlID09PSAwKSB7XG4gICAgICAvLyDlpITnkIbplJnor69cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG5hbHVMZW5ndGhTaXplID0gc3RvcmUuc3RhdGUubmFsdUxlbmd0aFNpemUgPSBkdi5nZXRVaW50KDIsIHRoaXMucmVhZE9mZnNldCwgZmFsc2UpICsgMVxuICAgIGlmIChuYWx1TGVuZ3RoU2l6ZSAhPT0gMyAmJiBuYWx1TGVuZ3RoU2l6ZSAhPT0gNCkge1xuICAgICAgLy8g5aSE55CG6ZSZ6K+vXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzcHNMZW5ndGggPSBkdi5nZXRVaW50KDUsIG51bGwsIGZhbHNlKVxuICAgIGlmIChzcHNMZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuZW1pdEVycm9yKCdkZWNvZGVyJywge1xuICAgICAgICBsaW5lOiAxMjgsXG4gICAgICAgIGhhbmRsZXI6ICdfcGFyc2VBVkNEZWNvZGVyQ29uZmlndXJhdGlvblJlY29yZCcsXG4gICAgICAgIG1zZzogJ25vIHNwcyBpbiB0aGlzIHZpZGVvJ1xuICAgICAgfSlcbiAgICAgIC8vIOWkhOeQhumUmeivr1xuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIGlmIChzcHNMZW5ndGggPiAxKSB7XG4gICAgICB0aGlzLmVtaXRFcnJvcignZGVjb2RlcicsIHtcbiAgICAgICAgbGluZTogMTMyLFxuICAgICAgICBoYW5kbGVyOiAnX3BhcnNlQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQnLFxuICAgICAgICBtc2c6ICdzcHNMZW5ndGggPiAxJ1xuICAgICAgfSlcbiAgICAgIHRoaXMud2FybignQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQ6IHNwc0xlbmd0aCA+IDEnKVxuICAgIH1cbiAgICBsZXQgc3BzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcHNMZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbGVuID0gZHYuZ2V0VWludDE2KClcblxuICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgc3BzID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5kYXRhLmJ1ZmZlciwgdGhpcy5yZWFkT2Zmc2V0LCBsZW4pXG4gICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gbGVuXG4gICAgICBjb25zdCBzcHNDb25maWcgPSBTUFNQYXJzZXIucGFyc2VTUFMoc3BzKVxuXG4gICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7XG4gICAgICAgIGNvZGVjU2l6ZSxcbiAgICAgICAgcHJlc2VudFNpemUsXG4gICAgICAgIHByb2ZpbGVTdHJpbmcsXG4gICAgICAgIGxldmVsU3RyaW5nLFxuICAgICAgICBjaHJvbWFGb3JtYXQsXG4gICAgICAgIHBpeGVsUmF0aW8sXG4gICAgICAgIGZyYW1lUmF0ZSxcbiAgICAgICAgcmVmRnJhbWVzLFxuICAgICAgICBiaXREZXB0aFxuICAgICAgfSA9IHNwc0NvbmZpZ1xuXG4gICAgICBtZXRhLndpZHRoID0gY29kZWNTaXplLndpZHRoXG4gICAgICBtZXRhLmhlaWdodCA9IGNvZGVjU2l6ZS5oZWlnaHRcbiAgICAgIG1ldGEucHJlc2VudFdpZHRoID0gcHJlc2VudFNpemUud2lkdGhcbiAgICAgIG1ldGEucHJlc2VudEhlaWdodCA9IHByZXNlbnRTaXplLmhlaWdodFxuXG4gICAgICBtZXRhLnByb2ZpbGUgPSBwcm9maWxlU3RyaW5nXG4gICAgICBtZXRhLmxldmVsID0gbGV2ZWxTdHJpbmdcbiAgICAgIC8vIG1ldGEucHJvZmlsZUNvbXBhdGliaWxpdHkgPSBwcm9maWxlQ29tcGF0aWJpbGl0eTtcbiAgICAgIC8vIG1ldGEubmFsdUxlbmd0aFNpemUgPSBuYWx1TGVuZ3RoU2l6ZTtcblxuICAgICAgbWV0YS5iaXREZXB0aCA9IGJpdERlcHRoXG4gICAgICBtZXRhLmNocm9tYUZvcm1hdCA9IGNocm9tYUZvcm1hdFxuICAgICAgbWV0YS5waXhlbFJhdGlvID0gcGl4ZWxSYXRpb1xuICAgICAgbWV0YS5mcmFtZVJhdGUgPSBmcmFtZVJhdGVcblxuICAgICAgaWYgKCFmcmFtZVJhdGUuZml4ZWQgfHxcbiAgICAgICAgICAgICAgICBmcmFtZVJhdGUuZnBzTnVtID09PSAwIHx8XG4gICAgICAgICAgICAgICAgZnJhbWVSYXRlLmZwc0RlbiA9PT0gMCkge1xuICAgICAgICBtZXRhLmZyYW1lUmF0ZSA9IHN0b3JlLnJlZmVyRnJhbWVSYXRlXG4gICAgICB9XG5cbiAgICAgIGxldCB7IGZwc0RlbiwgZnBzTnVtIH0gPSBtZXRhLmZyYW1lUmF0ZVxuICAgICAgbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiA9IG1ldGEudGltZVNjYWxlICogKGZwc0RlbiAvIGZwc051bSlcblxuICAgICAgbGV0IGNvZGVjQXJyID0gc3BzLnN1YmFycmF5KDEsIDQpXG4gICAgICBsZXQgY29kZWNTdHIgPSAnYXZjMS4nXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgICBsZXQgaGV4ID0gY29kZWNBcnJbal0udG9TdHJpbmcoMTYpXG4gICAgICAgIGhleCA9IGhleC5wYWRTdGFydCgyLCAnMCcpXG4gICAgICAgIGNvZGVjU3RyICs9IGhleFxuICAgICAgfVxuXG4gICAgICBtZXRhLmNvZGVjID0gY29kZWNTdHJcblxuICAgICAgY29uc3QgeyBtZWRpYUluZm86IG1pIH0gPSB0aGlzLl9zdG9yZVxuICAgICAgbWkud2lkdGggPSBtZXRhLndpZHRoXG4gICAgICBtaS5oZWlnaHQgPSBtZXRhLmhlaWdodFxuICAgICAgbWkuZnBzID0gbWV0YS5mcmFtZVJhdGUuZnBzXG4gICAgICBtaS5wcm9maWxlID0gbWV0YS5wcm9maWxlXG4gICAgICBtaS5sZXZlbCA9IG1ldGEubGV2ZWxcbiAgICAgIG1pLnJlZkZyYW1lcyA9IHJlZkZyYW1lc1xuICAgICAgbWkucGl4ZWxSYXRpbyA9IHBpeGVsUmF0aW9cbiAgICAgIG1pLnZpZGVvQ29kZWMgPSBjb2RlY1N0clxuICAgICAgbWkuY2hyb21hRm9ybWF0ID0gY2hyb21hRm9ybWF0XG4gICAgICBpZiAobWkuaGFzQXVkaW8pIHtcbiAgICAgICAgaWYgKG1pLmF1ZGlvQ29kZWMpIHtcbiAgICAgICAgICBtaS5taW1lVHlwZSA9IGB2aWRlby94LWZsdjsgY29kZWNzPVwiJHttaS52aWRlb0NvZGVjfSwke21pLmF1ZGlvQ29kZWN9XCJgXG4gICAgICAgICAgbWkuY29kZWMgPSBtaS5taW1lVHlwZS5yZXBsYWNlKCd4LWZsdicsICdtcDQnKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtaS5taW1lVHlwZSA9IGB2aWRlby94LWZsdjsgY29kZWNzPVwiJHttaS52aWRlb0NvZGVjfVwiYFxuICAgICAgICBtaS5jb2RlYyA9IG1pLm1pbWVUeXBlLnJlcGxhY2UoJ3gtZmx2JywgJ21wNCcpXG4gICAgICB9XG4gICAgfVxuICAgIGxldCBwcHNcbiAgICBjb25zdCBwcHNDb3VudCA9IGR2LmdldFVpbnQ4KClcbiAgICBpZiAoIXBwc0NvdW50KSB7XG4gICAgICB0aGlzLmVtaXRFcnJvcignZGVjb2RlcicsIHtcbiAgICAgICAgbGluZTogMjI3LFxuICAgICAgICBoYW5kbGVyOiAnX3BhcnNlQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQnLFxuICAgICAgICBtc2c6ICdubyBwcHMgaW4gdGhpcyB2aWRlbydcbiAgICAgIH0pXG4gICAgICB0aGlzLmRpc3BhdGNoKEV2ZW50VHlwZXMuRVJST1IsICdubyBwcHMgaW4gdGhpcyB2aWRlbycpXG4gICAgICByZXR1cm5cbiAgICB9IGVsc2UgaWYgKHBwc0NvdW50ID4gMSkge1xuICAgICAgdGhpcy53YXJuKGBBVkNEZWNvZGVyQ29uZmlndXJhdGlvblJlY29yZCBoYXMgcHBzQ291bnQ6ICR7cHBzQ291bnR9YClcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBwc0NvdW50OyBpKyspIHtcbiAgICAgIGxldCBwcHNTaXplID0gZHYuZ2V0VWludDE2KClcblxuICAgICAgaWYgKCFwcHNTaXplKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHBwcyA9IG5ldyBVaW50OEFycmF5KHRoaXMuZGF0YS5idWZmZXIsIHRoaXMucmVhZE9mZnNldCwgcHBzU2l6ZSlcbiAgICAgIHRoaXMucmVhZE9mZnNldCArPSBwcHNTaXplXG4gICAgfVxuXG4gICAgbWkuc3BzID0gbWV0YS5zcHMgPSBzcHNcbiAgICBtaS5wcHMgPSBtZXRhLnBwcyA9IHBwc1xuXG4gICAgaWYgKG1pLmlzQ29tcGxldGUpIHtcbiAgICAgIHRoaXMuaGFuZGxlTWVkaWFJbmZvUmVhZHkobWkpXG4gICAgfVxuICAgIGlmIChzdG9yZS5oYXNJbml0aWFsTWV0YURpc3BhdGNoZWQpIHtcbiAgICAgIGlmIChzdG9yZS52aWRlb1RyYWNrLmxlbmd0aCB8fCBzdG9yZS5hdWRpb1RyYWNrLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmhhbmRsZURhdGFSZWFkeShzdG9yZS52aWRlb1RyYWNrLCBzdG9yZS5hdWRpb1RyYWNrKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdG9yZS5zdGF0ZS5fdmlkZW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkID0gdHJ1ZVxuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlTWV0YURhdGFSZWFkeSgndmlkZW8nLCBtZXRhKVxuICB9XG5cbiAgX3BhcnNlQVZDVmlkZW9EYXRhIChmcmFtZVR5cGUsIGNwc1RpbWUpIHtcbiAgICBsZXQgZHYgPSBuZXcgRGF0YVZpZXc0UmVhZCh0aGlzLmRhdGEuYnVmZmVyLCB0aGlzKVxuXG4gICAgbGV0IG5hbHVMaXN0ID0gW11cbiAgICBsZXQgZGF0YUxlbiA9IDBcbiAgICBjb25zdCB7IG5hbHVMZW5ndGhTaXplOiBuYWx1TGVuU2l6ZSB9ID0gdGhpcy5fc3RvcmUuc3RhdGVcbiAgICBsZXQgdHMgPSB0aGlzLl9zdG9yZS5zdGF0ZS50aW1lU3RhbXBCYXNlICsgdGhpcy5jdXJyZW50VGFnLmdldFRpbWUoKVxuICAgIGxldCBpc0tleWZyYW1lID0gKGZyYW1lVHlwZSA9PT0gMSlcbiAgICB3aGlsZSAodGhpcy51bnJlYWRMZW5ndGggPiAwKSB7XG4gICAgICBpZiAodGhpcy51bnJlYWRMZW5ndGggPCA0KSB7XG4gICAgICAgIHRoaXMud2Fybignbm90IGVub3VnaCBkYXRhIGZvciBwYXJzaW5nIEFWQycpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjb25zdCB0ZW1wUmVhZE9mZnNldCA9IHRoaXMucmVhZE9mZnNldFxuICAgICAgbGV0IG5hbHVTaXplID0gbmFsdUxlblNpemUgPT09IDQgPyBkdi5nZXRVaW50MzIoKSA6IGR2LmdldFVpbnQyNCgpXG4gICAgICBpZiAobmFsdVNpemUgPiB0aGlzLnVucmVhZExlbmd0aCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IHVuaXRUeXBlID0gZHYuZ2V0VWludCg1LCB0aGlzLnJlYWRPZmZzZXQsIGZhbHNlKVxuXG4gICAgICBpZiAodW5pdFR5cGUgPT09IDUpIHtcbiAgICAgICAgaXNLZXlmcmFtZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGEgPSBuZXcgVWludDhBcnJheSh0aGlzLmRhdGEuYnVmZmVyLCB0ZW1wUmVhZE9mZnNldCwgbmFsdUxlblNpemUgKyBuYWx1U2l6ZSlcbiAgICAgIHRoaXMucmVhZE9mZnNldCA9IHRlbXBSZWFkT2Zmc2V0ICsgbmFsdUxlblNpemUgKyBuYWx1U2l6ZVxuICAgICAgY29uc3QgbmFsdVVuaXQgPSB7XG4gICAgICAgIHR5cGU6IHVuaXRUeXBlLFxuICAgICAgICBkYXRhXG4gICAgICB9XG4gICAgICBuYWx1TGlzdC5wdXNoKG5hbHVVbml0KVxuICAgICAgZGF0YUxlbiArPSBkYXRhLmJ5dGVMZW5ndGhcbiAgICB9XG4gICAgZHYgPSBudWxsXG4gICAgaWYgKG5hbHVMaXN0Lmxlbmd0aCkge1xuICAgICAgY29uc3QgeyB2aWRlb1RyYWNrIH0gPSB0aGlzLl9zdG9yZVxuICAgICAgY29uc3QgdmlkZW9TYW1wbGUgPSB7XG4gICAgICAgIHVuaXRzOiBuYWx1TGlzdCxcbiAgICAgICAgbGVuZ3RoOiBkYXRhTGVuLFxuICAgICAgICBkdHM6IHRzLFxuICAgICAgICBjcHM6IGNwc1RpbWUsXG4gICAgICAgIHB0czogKHRzICsgY3BzVGltZSksXG4gICAgICAgIGlzS2V5ZnJhbWUsXG4gICAgICAgIHBvc2l0aW9uOiBpc0tleWZyYW1lID8gdGhpcy5jdXJyZW50VGFnLnBvc2l0aW9uIDogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgICB2aWRlb1RyYWNrLnNhbXBsZXMucHVzaCh2aWRlb1NhbXBsZSlcbiAgICAgIHZpZGVvVHJhY2subGVuZ3RoICs9IGRhdGFMZW5cbiAgICB9XG4gIH1cblxuICByZWFkRGF0YSAobnVtKSB7XG4gICAgY29uc3QgeyBkYXRhLCByZWFkT2Zmc2V0IH0gPSB0aGlzXG4gICAgaWYgKHRoaXMuZGF0YVNpemUgPiByZWFkT2Zmc2V0ICsgbnVtKSB7XG4gICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gbnVtXG4gICAgICByZXR1cm4gZGF0YS5zbGljZShyZWFkT2Zmc2V0LCBudW0pXG4gICAgfVxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgZ2V0IGRhdGFTaXplICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aFxuICB9XG4gIGdldCB1bnJlYWRMZW5ndGggKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFTaXplIC0gdGhpcy5yZWFkT2Zmc2V0XG4gIH1cbn1cbiIsImltcG9ydCBCdWZmZXIgZnJvbSAnLi4vLi4vd3JpdGUvQnVmZmVyJ1xuLy8gY29uc3QgVUlOVDMyX01BWCA9IE1hdGgucG93KDIsIDMyKSAtIDE7XG5pbXBvcnQgeyBjYWNoZVdyYXBwZXIgfSBmcm9tICcuLi8uLi91dGlscy9mdW5jVXRpbHMnXG5jbGFzcyBGTVA0IHtcbiAgc3RhdGljIHNpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci53cml0ZVVpbnQzMih2YWx1ZSlcbiAgfVxuICBzdGF0aWMgaW5pdEJveCAoc2l6ZSwgbmFtZSwgLi4uY29udGVudCkge1xuICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGJ1ZmZlci53cml0ZShGTVA0LnNpemUoc2l6ZSksIEZNUDQudHlwZShuYW1lKSwgLi4uY29udGVudClcbiAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlclxuICB9XG4gIHN0YXRpYyBleHRlbnNpb24gKHZlcnNpb24sIGZsYWcpIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgdmVyc2lvbixcbiAgICAgIChmbGFnID4+IDE2KSAmIDB4ZmYsXG4gICAgICAoZmxhZyA+PiA4KSAmIDB4ZmYsXG4gICAgICBmbGFnICYgMHhmZlxuICAgIF0pXG4gIH1cbiAgc3RhdGljIGZ0eXAgKCkge1xuICAgIHJldHVybiBGTVA0LmluaXRCb3goMjQsICdmdHlwJywgbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHg2OSwgMHg3MywgMHg2RiwgMHg2RCwgLy8gaXNvbSxcbiAgICAgIDB4MCwgMHgwLCAweDAwLCAweDAxLCAvLyBtaW5vcl92ZXJzaW9uOiAweDAxXG4gICAgICAweDY5LCAweDczLCAweDZGLCAweDZELCAvLyBpc29tXG4gICAgICAweDYxLCAweDc2LCAweDYzLCAweDMxIC8vIGF2YzFcbiAgICBdKSlcbiAgfVxuICBzdGF0aWMgbW9vdiAoZGF0YSkge1xuICAgIGxldCBzaXplID0gOFxuICAgIGxldCBtdmhkID0gRk1QNC5tdmhkKGRhdGEuZHVyYXRpb24sIGRhdGEudGltZXNjYWxlKVxuICAgIGxldCB0cmFrMSA9IEZNUDQudmlkZW9UcmFrKGRhdGEpXG4gICAgbGV0IHRyYWsyID0gRk1QNC5hdWRpb1RyYWsoZGF0YSlcbiAgICBsZXQgbXZleCA9IEZNUDQubXZleChkYXRhLmR1cmF0aW9uLCBkYXRhLnRpbWVzY2FsZSk7XG4gICAgW212aGQsIHRyYWsxLCB0cmFrMiwgbXZleF0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5ieXRlTGVuZ3RoXG4gICAgfSlcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KHNpemUsICdtb292JywgbXZoZCwgdHJhazEsIHRyYWsyLCBtdmV4KVxuICB9XG4gIHN0YXRpYyBtdmhkIChkdXJhdGlvbiwgdGltZVNjYWxlKSB7XG4gICAgbGV0IHRpbWVzY2FsZSA9IHRpbWVTY2FsZSB8fCAxMDAwXG4gICAgLy8gZHVyYXRpb24gKj0gdGltZXNjYWxlO1xuICAgIGxldCBieXRlcyA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHZlcnNpb24oMCkgKyBmbGFncyAgICAgMeS9jeeahGJveOeJiOacrCsz5L2NZmxhZ3MgICBib3jniYjmnKzvvIww5oiWMe+8jOS4gOiIrOS4ujDjgILvvIjku6XkuIvlrZfoioLmlbDlnYfmjIl2ZXJzaW9uPTDvvIlcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGNyZWF0aW9uX3RpbWUgICAg5Yib5bu65pe26Ze0ICDvvIjnm7jlr7nkuo5VVEPml7bpl7QxOTA0LTAxLTAx6Zu254K555qE56eS5pWw77yJXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBtb2RpZmljYXRpb25fdGltZSAgIOS/ruaUueaXtumXtFxuXG4gICAgICAvKipcbiAgICAgICAgICAgICAqIHRpbWVzY2FsZTogNCBieXRlc+aWh+S7tuWqkuS9k+WcqDHnp5Lml7bpl7TlhoXnmoTliLvluqblgLzvvIzlj6/ku6XnkIbop6PkuLox56eS6ZW/5bqmXG4gICAgICAgICAgICAgKi9cbiAgICAgICh0aW1lc2NhbGUgPj4+IDI0KSAmIDB4RkYsXG4gICAgICAodGltZXNjYWxlID4+PiAxNikgJiAweEZGLFxuICAgICAgKHRpbWVzY2FsZSA+Pj4gOCkgJiAweEZGLFxuICAgICAgKHRpbWVzY2FsZSkgJiAweEZGLFxuXG4gICAgICAvKipcbiAgICAgICAgICAgICAqIGR1cmF0aW9uOiA0IGJ5dGVz6K+ldHJhY2vnmoTml7bpl7Tplb/luqbvvIznlKhkdXJhdGlvbuWSjHRpbWUgc2NhbGXlgLzlj6/ku6XorqHnrpd0cmFja+aXtumVv++8jOavlOWmgmF1ZGlvIHRyYWNr55qEdGltZSBzY2FsZSA9IDgwMDAsXG4gICAgICAgICAgICAgKiBkdXJhdGlvbiA9IDU2MDEyOO+8jOaXtumVv+S4ujcwLjAxNu+8jHZpZGVvIHRyYWNr55qEdGltZSBzY2FsZSA9IDYwMCwgZHVyYXRpb24gPSA0MjAwMO+8jOaXtumVv+S4ujcwXG4gICAgICAgICAgICAgKi9cbiAgICAgIChkdXJhdGlvbiA+Pj4gMjQpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbiA+Pj4gMTYpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbiA+Pj4gOCkgJiAweEZGLFxuICAgICAgKGR1cmF0aW9uKSAmIDB4RkYsXG4gICAgICAweDAwLCAweDAxLCAweDAwLCAweDAwLCAvLyBQcmVmZXJyZWQgcmF0ZTogMS4wICAg5o6o6I2Q5pKt5pS+6YCf546H77yM6auYMTbkvY3lkozkvY4xNuS9jeWIhuWIq+S4uuWwj+aVsOeCueaVtOaVsOmDqOWIhuWSjOWwj+aVsOmDqOWIhu+8jOWNs1sxNi4xNl0g5qC85byP77yM6K+l5YC85Li6MS4w77yIMHgwMDAxMDAwMO+8ieihqOekuuato+W4uOWJjeWQkeaSreaUvlxuICAgICAgLyoqXG4gICAgICAgICAgICAgKiBQcmVmZXJyZWRWb2x1bWUoMS4wLCAyYnl0ZXMpICsgcmVzZXJ2ZWQoMmJ5dGVzKVxuICAgICAgICAgICAgICog5LiOcmF0Zeexu+S8vO+8jFs4LjhdIOagvOW8j++8jDEuMO+8iDB4MDEwMO+8ieihqOekuuacgOWkp+mfs+mHj1xuICAgICAgICAgICAgICovXG4gICAgICAweDAxLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gIHJlc2VydmVkOiA0ICsgNCBieXRlc+S/neeVmeS9jVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDEsIDB4MDAsIDB4MDAsIC8vIC0tLS1iZWdpbiBjb21wb3NpdGlvbiBtYXRyaXgtLS0tXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8g6KeG6aKR5Y+Y5o2i55+p6Zi1ICAg57q/5oCn5Luj5pWwXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMSwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4NDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIC0tLS1lbmQgY29tcG9zaXRpb24gbWF0cml4LS0tLVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gLS0tLWJlZ2luIHByZV9kZWZpbmVkIDYgKiA0IGJ5dGVzLS0tLVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHByZS1kZWZpbmVkIOS/neeVmeS9jVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyAtLS0tZW5kIHByZV9kZWZpbmVkIDYgKiA0IGJ5dGVzLS0tLVxuICAgICAgMHhGRiwgMHhGRiwgMHhGRiwgMHhGRiAvLyBuZXh0X3RyYWNrX0lEIOS4i+S4gOS4qnRyYWNr5L2/55So55qEaWTlj7dcbiAgICBdKVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goOCArIGJ5dGVzLmxlbmd0aCwgJ212aGQnLCBuZXcgVWludDhBcnJheShieXRlcykpXG4gIH1cbiAgc3RhdGljIHZpZGVvVHJhayAoZGF0YSkge1xuICAgIGxldCBzaXplID0gOFxuICAgIGxldCB0a2hkID0gRk1QNC50a2hkKHtcbiAgICAgIGlkOiAxLFxuICAgICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb24sXG4gICAgICB0aW1lc2NhbGU6IGRhdGEudGltZXNjYWxlLFxuICAgICAgd2lkdGg6IGRhdGEud2lkdGgsXG4gICAgICBoZWlnaHQ6IGRhdGEuaGVpZ2h0LFxuICAgICAgdHlwZTogJ3ZpZGVvJ1xuICAgIH0pXG4gICAgbGV0IG1kaWEgPSBGTVA0Lm1kaWEoe1xuICAgICAgdHlwZTogJ3ZpZGVvJyxcbiAgICAgIHRpbWVzY2FsZTogZGF0YS50aW1lc2NhbGUsXG4gICAgICBkdXJhdGlvbjogZGF0YS5kdXJhdGlvbixcbiAgICAgIHNwczogZGF0YS5zcHMsXG4gICAgICBwcHM6IGRhdGEucHBzLFxuICAgICAgcGl4ZWxSYXRpbzogZGF0YS5waXhlbFJhdGlvLFxuICAgICAgd2lkdGg6IGRhdGEud2lkdGgsXG4gICAgICBoZWlnaHQ6IGRhdGEuaGVpZ2h0XG4gICAgfSk7XG4gICAgW3RraGQsIG1kaWFdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBzaXplICs9IGl0ZW0uYnl0ZUxlbmd0aFxuICAgIH0pXG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveChzaXplLCAndHJhaycsIHRraGQsIG1kaWEpXG4gIH1cbiAgc3RhdGljIGF1ZGlvVHJhayAoZGF0YSkge1xuICAgIGxldCBzaXplID0gOFxuICAgIGxldCB0a2hkID0gRk1QNC50a2hkKHtcbiAgICAgIGlkOiAyLFxuICAgICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb24sXG4gICAgICB0aW1lc2NhbGU6IGRhdGEudGltZXNjYWxlLFxuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICB0eXBlOiAnYXVkaW8nXG4gICAgfSlcbiAgICBsZXQgbWRpYSA9IEZNUDQubWRpYSh7XG4gICAgICB0eXBlOiAnYXVkaW8nLFxuICAgICAgdGltZXNjYWxlOiBkYXRhLnRpbWVzY2FsZSxcbiAgICAgIGR1cmF0aW9uOiBkYXRhLmR1cmF0aW9uLFxuICAgICAgY2hhbm5lbENvdW50OiBkYXRhLmF1ZGlvQ2hhbm5lbENvdW50LFxuICAgICAgc2FtcGxlcmF0ZTogZGF0YS5hdWRpb1NhbXBsZVJhdGUsXG4gICAgICBjb25maWc6IGRhdGEuYXVkaW9Db25maWdcbiAgICB9KTtcbiAgICBbdGtoZCwgbWRpYV0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5ieXRlTGVuZ3RoXG4gICAgfSlcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KHNpemUsICd0cmFrJywgdGtoZCwgbWRpYSlcbiAgfVxuICBzdGF0aWMgdGtoZCAoZGF0YSkge1xuICAgIGxldCBpZCA9IGRhdGEuaWRcbiAgICBsZXQgZHVyYXRpb24gPSBkYXRhLmR1cmF0aW9uXG4gICAgbGV0IHdpZHRoID0gZGF0YS53aWR0aFxuICAgIGxldCBoZWlnaHQgPSBkYXRhLmhlaWdodFxuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwNywgLy8gdmVyc2lvbigwKSArIGZsYWdzIDHkvY3niYjmnKwgYm9454mI5pys77yMMOaIljHvvIzkuIDoiKzkuLow44CC77yI5Lul5LiL5a2X6IqC5pWw5Z2H5oyJdmVyc2lvbj0w77yJ5oyJ5L2N5oiW5pON5L2c57uT5p6c5YC877yM6aKE5a6a5LmJ5aaC5LiL77yaXG4gICAgICAvLyAweDAwMDAwMSB0cmFja19lbmFibGVk77yM5ZCm5YiZ6K+ldHJhY2vkuI3ooqvmkq3mlL7vvJtcbiAgICAgIC8vIDB4MDAwMDAyIHRyYWNrX2luX21vdmll77yM6KGo56S66K+ldHJhY2vlnKjmkq3mlL7kuK3ooqvlvJXnlKjvvJtcbiAgICAgIC8vIDB4MDAwMDA0IHRyYWNrX2luX3ByZXZpZXfvvIzooajnpLror6V0cmFja+WcqOmihOiniOaXtuiiq+W8leeUqOOAglxuICAgICAgLy8g5LiA6Iis6K+l5YC85Li6N++8jDErMis0IOWmguaenOS4gOS4quWqkuS9k+aJgOaciXRyYWNr5Z2H5pyq6K6+572udHJhY2tfaW5fbW92aWXlkox0cmFja19pbl9wcmV2aWV377yM5bCG6KKr55CG6Kej5Li65omA5pyJdHJhY2vlnYforr7nva7kuobov5nkuKTpobnvvJvlr7nkuo5oaW50IHRyYWNr77yM6K+l5YC85Li6MFxuICAgICAgLy8gaGludCB0cmFjayDov5nkuKrnibnmrornmoR0cmFja+W5tuS4jeWMheWQq+WqkuS9k+aVsOaNru+8jOiAjOaYr+WMheWQq+S6huS4gOS6m+WwhuWFtuS7luaVsOaNrnRyYWNr5omT5YyF5oiQ5rWB5aqS5L2T55qE5oyH56S65L+h5oGv44CCXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBjcmVhdGlvbl90aW1l5Yib5bu65pe26Ze077yI55u45a+55LqOVVRD5pe26Ze0MTkwNC0wMS0wMembtueCueeahOenkuaVsO+8iVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gbW9kaWZpY2F0aW9uIHRpbWUg5L+u5pS55pe26Ze0XG4gICAgICAoaWQgPj4+IDI0KSAmIDB4RkYsIC8vIHRyYWNrX0lEOiA0IGJ5dGVzIGlk5Y+377yM5LiN6IO96YeN5aSN5LiU5LiN6IO95Li6MFxuICAgICAgKGlkID4+PiAxNikgJiAweEZGLFxuICAgICAgKGlkID4+PiA4KSAmIDB4RkYsXG4gICAgICAoaWQpICYgMHhGRixcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkOiA0IGJ5dGVzICAgIOS/neeVmeS9jVxuICAgICAgKGR1cmF0aW9uID4+PiAyNCkgJiAweEZGLCAvLyBkdXJhdGlvbjogNCBieXRlcyB0cmFja+eahOaXtumXtOmVv+W6plxuICAgICAgKGR1cmF0aW9uID4+PiAxNikgJiAweEZGLFxuICAgICAgKGR1cmF0aW9uID4+PiA4KSAmIDB4RkYsXG4gICAgICAoZHVyYXRpb24pICYgMHhGRixcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkOiAyICogNCBieXRlcyAgICDkv53nlZnkvY1cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBsYXllcigyYnl0ZXMpICsgYWx0ZXJuYXRlX2dyb3VwKDJieXRlcykgIOinhumikeWxgu+8jOm7mOiupOS4ujDvvIzlgLzlsI/nmoTlnKjkuIrlsYIudHJhY2vliIbnu4Tkv6Hmga/vvIzpu5jorqTkuLow6KGo56S66K+ldHJhY2vmnKrkuI7lhbbku5Z0cmFja+aciee+pOe7hOWFs+ezu1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gdm9sdW1lKDJieXRlcykgKyByZXNlcnZlZCgyYnl0ZXMpICAgIFs4LjhdIOagvOW8j++8jOWmguaenOS4uumfs+mikXRyYWNr77yMMS4w77yIMHgwMTAw77yJ6KGo56S65pyA5aSn6Z+z6YeP77yb5ZCm5YiZ5Li6MCAgICvkv53nlZnkvY1cbiAgICAgIDB4MDAsIDB4MDEsIDB4MDAsIDB4MDAsIC8vIC0tLS1iZWdpbiBjb21wb3NpdGlvbiBtYXRyaXgtLS0tXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAxLCAweDAwLCAweDAwLCAvLyDop4bpopHlj5jmjaLnn6npmLVcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4NDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIC0tLS1lbmQgY29tcG9zaXRpb24gbWF0cml4LS0tLVxuICAgICAgKHdpZHRoID4+PiA4KSAmIDB4RkYsIC8vIC8v5a695bqmXG4gICAgICAod2lkdGgpICYgMHhGRixcbiAgICAgIDB4MDAsIDB4MDAsXG4gICAgICAoaGVpZ2h0ID4+PiA4KSAmIDB4RkYsIC8vIOmrmOW6plxuICAgICAgKGhlaWdodCkgJiAweEZGLFxuICAgICAgMHgwMCwgMHgwMFxuICAgIF0pXG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveCg4ICsgY29udGVudC5ieXRlTGVuZ3RoLCAndGtoZCcsIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIGVkdHMgKGRhdGEpIHtcbiAgICBsZXQgYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgbGV0IGR1cmF0aW9uID0gZGF0YS5kdXJhdGlvblxuICAgIGxldCBtZWRpYVRpbWUgPSBkYXRhLm1lZGlhVGltZVxuICAgIGJ1ZmZlci53cml0ZShGTVA0LnNpemUoMzYpLCBGTVA0LnR5cGUoJ2VkdHMnKSlcbiAgICAvLyBlbHN0XG4gICAgYnVmZmVyLndyaXRlKEZNUDQuc2l6ZSgyOCksIEZNUDQudHlwZSgnZWxzdCcpKVxuICAgIGJ1ZmZlci53cml0ZShuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAxLCAvLyBlbnRyeSBjb3VudFxuICAgICAgKGR1cmF0aW9uID4+IDI0KSAmIDB4ZmYsIChkdXJhdGlvbiA+PiAxNikgJiAweGZmLCAoZHVyYXRpb24gPj4gOCkgJiAweGZmLCBkdXJhdGlvbiAmIDB4ZmYsXG4gICAgICAobWVkaWFUaW1lID4+IDI0KSAmIDB4ZmYsIChtZWRpYVRpbWUgPj4gMTYpICYgMHhmZiwgKG1lZGlhVGltZSA+PiA4KSAmIDB4ZmYsIG1lZGlhVGltZSAmIDB4ZmYsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAxIC8vIG1lZGlhIHJhdGVcbiAgICBdKSlcbiAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlclxuICB9XG4gIHN0YXRpYyBtZGlhIChkYXRhKSB7XG4gICAgbGV0IHNpemUgPSA4XG4gICAgbGV0IG1kaGQgPSBGTVA0Lm1kaGQoZGF0YS50aW1lc2NhbGUsIGRhdGEuZHVyYXRpb24pXG4gICAgbGV0IGhkbHIgPSBGTVA0LmhkbHIoZGF0YS50eXBlKVxuICAgIGxldCBtaW5mID0gRk1QNC5taW5mKGRhdGEpO1xuICAgIFttZGhkLCBoZGxyLCBtaW5mXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLmJ5dGVMZW5ndGhcbiAgICB9KVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goc2l6ZSwgJ21kaWEnLCBtZGhkLCBoZGxyLCBtaW5mKVxuICB9XG4gIHN0YXRpYyBtZGhkICh0aW1lc2NhbGUsIGR1cmF0aW9uKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBjcmVhdGlvbl90aW1lICAgIOWIm+W7uuaXtumXtFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gbW9kaWZpY2F0aW9uX3RpbWXkv67mlLnml7bpl7RcbiAgICAgICh0aW1lc2NhbGUgPj4+IDI0KSAmIDB4RkYsIC8vIHRpbWVzY2FsZTogNCBieXRlcyAgICDmlofku7blqpLkvZPlnKgx56eS5pe26Ze05YaF55qE5Yi75bqm5YC877yM5Y+v5Lul55CG6Kej5Li6MeenkumVv+W6plxuICAgICAgKHRpbWVzY2FsZSA+Pj4gMTYpICYgMHhGRixcbiAgICAgICh0aW1lc2NhbGUgPj4+IDgpICYgMHhGRixcbiAgICAgICh0aW1lc2NhbGUpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbiA+Pj4gMjQpICYgMHhGRiwgLy8gZHVyYXRpb246IDQgYnl0ZXMgIHRyYWNr55qE5pe26Ze06ZW/5bqmXG4gICAgICAoZHVyYXRpb24gPj4+IDE2KSAmIDB4RkYsXG4gICAgICAoZHVyYXRpb24gPj4+IDgpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbikgJiAweEZGLFxuICAgICAgMHg1NSwgMHhDNCwgLy8gbGFuZ3VhZ2U6IHVuZCAodW5kZXRlcm1pbmVkKSDlqpLkvZPor63oqIDnoIHjgILmnIDpq5jkvY3kuLow77yM5ZCO6Z2iMTXkvY3kuLoz5Liq5a2X56ym77yI6KeBSVNPIDYzOS0yL1TmoIflh4bkuK3lrprkuYnvvIlcbiAgICAgIDB4MDAsIDB4MDAgLy8gcHJlX2RlZmluZWQgPSAwXG4gICAgXSlcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDEyICsgY29udGVudC5ieXRlTGVuZ3RoLCAnbWRoZCcsIEZNUDQuZXh0ZW5zaW9uKDAsIDApLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyBoZGxyICh0eXBlKSB7XG4gICAgbGV0IHZhbHVlID0gWzB4MDAsIC8vIHZlcnNpb24gMFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHByZV9kZWZpbmVkXG4gICAgICAweDc2LCAweDY5LCAweDY0LCAweDY1LCAvLyBoYW5kbGVyX3R5cGU6ICd2aWRlJ1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZFxuICAgICAgMHg1NiwgMHg2OSwgMHg2NCwgMHg2NSxcbiAgICAgIDB4NmYsIDB4NDgsIDB4NjEsIDB4NmUsXG4gICAgICAweDY0LCAweDZjLCAweDY1LCAweDcyLCAweDAwIC8vIG5hbWU6ICdWaWRlb0hhbmRsZXInXG4gICAgXVxuICAgIGlmICh0eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICB2YWx1ZS5zcGxpY2UoOCwgNCwgLi4uWzB4NzMsIDB4NmYsIDB4NzUsIDB4NmVdKVxuICAgICAgdmFsdWUuc3BsaWNlKDI0LCAxMywgLi4uWzB4NTMsIDB4NmYsIDB4NzUsIDB4NmUsXG4gICAgICAgIDB4NjQsIDB4NDgsIDB4NjEsIDB4NmUsXG4gICAgICAgIDB4NjQsIDB4NmMsIDB4NjUsIDB4NzIsIDB4MDBdKVxuICAgIH1cbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDggKyB2YWx1ZS5sZW5ndGgsICdoZGxyJywgbmV3IFVpbnQ4QXJyYXkodmFsdWUpKVxuICB9XG4gIHN0YXRpYyBtaW5mIChkYXRhKSB7XG4gICAgbGV0IHNpemUgPSA4XG4gICAgbGV0IHZtaGQgPSBkYXRhLnR5cGUgPT09ICd2aWRlbycgPyBGTVA0LnZtaGQoKSA6IEZNUDQuc21oZCgpXG4gICAgbGV0IGRpbmYgPSBGTVA0LmRpbmYoKVxuICAgIGxldCBzdGJsID0gRk1QNC5zdGJsKGRhdGEpO1xuICAgIFt2bWhkLCBkaW5mLCBzdGJsXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLmJ5dGVMZW5ndGhcbiAgICB9KVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goc2l6ZSwgJ21pbmYnLCB2bWhkLCBkaW5mLCBzdGJsKVxuICB9XG4gIHN0YXRpYyB2bWhkICgpIHtcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDIwLCAndm1oZCcsIG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIC8vIHZlcnNpb25cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDEsIC8vIGZsYWdzXG4gICAgICAweDAwLCAweDAwLCAvLyBncmFwaGljc21vZGVcbiAgICAgIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCAvLyBvcGNvbG9yXG4gICAgXSkpXG4gIH1cbiAgc3RhdGljIHNtaGQgKCkge1xuICAgIHJldHVybiBGTVA0LmluaXRCb3goMTYsICdzbWhkJywgbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvblxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIC8vIGJhbGFuY2VcbiAgICAgIDB4MDAsIDB4MDAgLy8gcmVzZXJ2ZWRcbiAgICBdKSlcbiAgfVxuICBzdGF0aWMgZGluZiAoKSB7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGxldCBkcmVmID0gWzB4MDAsIC8vIHZlcnNpb24gMFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDEsIC8vIGVudHJ5X2NvdW50XG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDBjLCAvLyBlbnRyeV9zaXplXG4gICAgICAweDc1LCAweDcyLCAweDZjLCAweDIwLCAvLyAndXJsJyB0eXBlXG4gICAgICAweDAwLCAvLyB2ZXJzaW9uIDBcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDEgLy8gZW50cnlfZmxhZ3NcbiAgICBdXG4gICAgYnVmZmVyLndyaXRlKEZNUDQuc2l6ZSgzNiksIEZNUDQudHlwZSgnZGluZicpLCBGTVA0LnNpemUoMjgpLCBGTVA0LnR5cGUoJ2RyZWYnKSwgbmV3IFVpbnQ4QXJyYXkoZHJlZikpXG4gICAgcmV0dXJuIGJ1ZmZlci5idWZmZXJcbiAgfVxuICBzdGF0aWMgc3RibCAoZGF0YSkge1xuICAgIGxldCBzaXplID0gOFxuICAgIGxldCBzdHNkID0gRk1QNC5zdHNkKGRhdGEpXG4gICAgbGV0IHN0dHMgPSBGTVA0LnN0dHMoKVxuICAgIGxldCBzdHNjID0gRk1QNC5zdHNjKClcbiAgICBsZXQgc3RzeiA9IEZNUDQuc3RzeigpXG4gICAgbGV0IHN0Y28gPSBGTVA0LnN0Y28oKTtcbiAgICBbc3RzZCwgc3R0cywgc3RzYywgc3Rzeiwgc3Rjb10uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5ieXRlTGVuZ3RoXG4gICAgfSlcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KHNpemUsICdzdGJsJywgc3RzZCwgc3R0cywgc3RzYywgc3Rzeiwgc3RjbylcbiAgfVxuICBzdGF0aWMgc3RzZCAoZGF0YSkge1xuICAgIGxldCBjb250ZW50XG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ2F1ZGlvJykge1xuICAgICAgLy8gaWYgKCFkYXRhLmlzQUFDICYmIGRhdGEuY29kZWMgPT09ICdtcDQnKSB7XG4gICAgICAvLyAgICAgY29udGVudCA9IEZNUDQubXAzKGRhdGEpO1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vXG4gICAgICAvLyB9XG4gICAgICAvLyDmlK/mjIFtcDRhXG4gICAgICBjb250ZW50ID0gRk1QNC5tcDRhKGRhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgPSBGTVA0LmF2YzEoZGF0YSlcbiAgICB9XG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveCgxNiArIGNvbnRlbnQuYnl0ZUxlbmd0aCwgJ3N0c2QnLCBGTVA0LmV4dGVuc2lvbigwLCAwKSwgbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4MDAsIDB4MDAsIDB4MDFdKSwgY29udGVudClcbiAgfVxuICBzdGF0aWMgbXA0YSAoZGF0YSkge1xuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCAweDAxLCAvLyBkYXRhX3JlZmVyZW5jZV9pbmRleFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCBkYXRhLmNoYW5uZWxDb3VudCwgLy8gY2hhbm5lbGNvdW50XG4gICAgICAweDAwLCAweDEwLCAvLyBzYW1wbGVTaXplOjE2Yml0c1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWQyXG4gICAgICAoZGF0YS5zYW1wbGVyYXRlID4+IDgpICYgMHhmZixcbiAgICAgIGRhdGEuc2FtcGxlcmF0ZSAmIDB4ZmYsIC8vXG4gICAgICAweDAwLCAweDAwXG4gICAgXSlcbiAgICBsZXQgZXNkcyA9IEZNUDQuZXNkcyhkYXRhLmNvbmZpZylcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDggKyBjb250ZW50LmJ5dGVMZW5ndGggKyBlc2RzLmJ5dGVMZW5ndGgsICdtcDRhJywgY29udGVudCwgZXNkcylcbiAgfVxuICBzdGF0aWMgZXNkcyAoY29uZmlnID0gWzQzLCAxNDYsIDgsIDBdKSB7XG4gICAgY29uc3QgY29uZmlnbGVuID0gY29uZmlnLmxlbmd0aFxuICAgIGxldCBidWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICBsZXQgY29udGVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIC8vIHZlcnNpb24gMFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcblxuICAgICAgMHgwMywgLy8gZGVzY3JpcHRvcl90eXBlXG4gICAgICAweDE3ICsgY29uZmlnbGVuLCAvLyBsZW5ndGhcbiAgICAgIDB4MDAsIDB4MDEsIC8vIGVzX2lkXG4gICAgICAweDAwLCAvLyBzdHJlYW1fcHJpb3JpdHlcblxuICAgICAgMHgwNCwgLy8gZGVzY3JpcHRvcl90eXBlXG4gICAgICAweDBmICsgY29uZmlnbGVuLCAvLyBsZW5ndGhcbiAgICAgIDB4NDAsIC8vIGNvZGVjIDogbXBlZzRfYXVkaW9cbiAgICAgIDB4MTUsIC8vIHN0cmVhbV90eXBlXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBidWZmZXJfc2l6ZVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gbWF4Qml0cmF0ZVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gYXZnQml0cmF0ZVxuXG4gICAgICAweDA1IC8vIGRlc2NyaXB0b3JfdHlwZVxuICAgIF0uY29uY2F0KFtjb25maWdsZW5dKS5jb25jYXQoY29uZmlnKS5jb25jYXQoWzB4MDYsIDB4MDEsIDB4MDJdKSlcbiAgICBidWZmZXIud3JpdGUoRk1QNC5zaXplKDggKyBjb250ZW50LmJ5dGVMZW5ndGgpLCBGTVA0LnR5cGUoJ2VzZHMnKSwgY29udGVudClcbiAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlclxuICB9XG4gIHN0YXRpYyBhdmMxIChkYXRhKSB7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGxldCBzaXplID0gNDAvLyA4KGF2YzEpKzgoYXZjYykrOChidHJ0KSsxNihwYXNwKVxuICAgIGxldCBzcHMgPSBkYXRhLnNwc1xuICAgIGxldCBwcHMgPSBkYXRhLnBwc1xuICAgIGxldCB3aWR0aCA9IGRhdGEud2lkdGhcbiAgICBsZXQgaGVpZ2h0ID0gZGF0YS5oZWlnaHRcbiAgICBsZXQgaFNwYWNpbmcgPSBkYXRhLnBpeGVsUmF0aW9bMF1cbiAgICBsZXQgdlNwYWNpbmcgPSBkYXRhLnBpeGVsUmF0aW9bMV1cbiAgICBsZXQgYXZjY0J1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGF2Y2NCdWZmZXIud3JpdGUobmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMSwgLy8gdmVyc2lvblxuICAgICAgc3BzWzFdLCAvLyBwcm9maWxlXG4gICAgICBzcHNbMl0sIC8vIHByb2ZpbGUgY29tcGF0aWJsZVxuICAgICAgc3BzWzNdLCAvLyBsZXZlbFxuICAgICAgMHhmYyB8IDMsXG4gICAgICAweEUwIHwgMSAvLyDnm67liY3lj6rlpITnkIbkuIDkuKpzcHNcbiAgICBdLmNvbmNhdChbc3BzLmxlbmd0aCA+Pj4gOCAmIDB4ZmYsIHNwcy5sZW5ndGggJiAweGZmXSkpKVxuICAgIGF2Y2NCdWZmZXIud3JpdGUoc3BzLCBuZXcgVWludDhBcnJheShbMSwgcHBzLmxlbmd0aCA+Pj4gOCAmIDB4ZmYsIHBwcy5sZW5ndGggJiAweGZmXSksIHBwcylcblxuICAgIGxldCBhdmNjID0gYXZjY0J1ZmZlci5idWZmZXJcbiAgICBsZXQgYXZjMSA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZFxuICAgICAgMHgwMCwgMHgwMSwgLy8gZGF0YV9yZWZlcmVuY2VfaW5kZXhcbiAgICAgIDB4MDAsIDB4MDAsIC8vIHByZV9kZWZpbmVkXG4gICAgICAweDAwLCAweDAwLCAvLyByZXNlcnZlZFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBwcmVfZGVmaW5lZFxuICAgICAgKHdpZHRoID4+IDgpICYgMHhmZixcbiAgICAgIHdpZHRoICYgMHhmZiwgLy8gd2lkdGhcbiAgICAgIChoZWlnaHQgPj4gOCkgJiAweGZmLFxuICAgICAgaGVpZ2h0ICYgMHhmZiwgLy8gaGVpZ2h0XG4gICAgICAweDAwLCAweDQ4LCAweDAwLCAweDAwLCAvLyBob3JpenJlc29sdXRpb25cbiAgICAgIDB4MDAsIDB4NDgsIDB4MDAsIDB4MDAsIC8vIHZlcnRyZXNvbHV0aW9uXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZFxuICAgICAgMHgwMCwgMHgwMSwgLy8gZnJhbWVfY291bnRcbiAgICAgIDB4MTIsXG4gICAgICAweDY0LCAweDYxLCAweDY5LCAweDZDLCAvLyBkYWlseW1vdGlvbi9obHMuanNcbiAgICAgIDB4NzksIDB4NkQsIDB4NkYsIDB4NzQsXG4gICAgICAweDY5LCAweDZGLCAweDZFLCAweDJGLFxuICAgICAgMHg2OCwgMHg2QywgMHg3MywgMHgyRSxcbiAgICAgIDB4NkEsIDB4NzMsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGNvbXByZXNzb3JuYW1lXG4gICAgICAweDAwLCAweDE4LCAvLyBkZXB0aCA9IDI0XG4gICAgICAweDExLCAweDExXSkgLy8gcHJlX2RlZmluZWQgPSAtMVxuICAgIGxldCBidHJ0ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgMHgxYywgMHg5YywgMHg4MCwgLy8gYnVmZmVyU2l6ZURCXG4gICAgICAweDAwLCAweDJkLCAweGM2LCAweGMwLCAvLyBtYXhCaXRyYXRlXG4gICAgICAweDAwLCAweDJkLCAweGM2LCAweGMwIC8vIGF2Z0JpdHJhdGVcbiAgICBdKVxuICAgIGxldCBwYXNwID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgKGhTcGFjaW5nID4+IDI0KSwgLy8gaFNwYWNpbmdcbiAgICAgIChoU3BhY2luZyA+PiAxNikgJiAweGZmLFxuICAgICAgKGhTcGFjaW5nID4+IDgpICYgMHhmZixcbiAgICAgIGhTcGFjaW5nICYgMHhmZixcbiAgICAgICh2U3BhY2luZyA+PiAyNCksIC8vIHZTcGFjaW5nXG4gICAgICAodlNwYWNpbmcgPj4gMTYpICYgMHhmZixcbiAgICAgICh2U3BhY2luZyA+PiA4KSAmIDB4ZmYsXG4gICAgICB2U3BhY2luZyAmIDB4ZmZcbiAgICBdKVxuXG4gICAgYnVmZmVyLndyaXRlKFxuICAgICAgRk1QNC5zaXplKHNpemUgKyBhdmMxLmJ5dGVMZW5ndGggKyBhdmNjLmJ5dGVMZW5ndGggKyBidHJ0LmJ5dGVMZW5ndGgpLCBGTVA0LnR5cGUoJ2F2YzEnKSwgYXZjMSxcbiAgICAgIEZNUDQuc2l6ZSg4ICsgYXZjYy5ieXRlTGVuZ3RoKSwgRk1QNC50eXBlKCdhdmNDJyksIGF2Y2MsXG4gICAgICBGTVA0LnNpemUoMjApLCBGTVA0LnR5cGUoJ2J0cnQnKSwgYnRydCxcbiAgICAgIEZNUDQuc2l6ZSgxNiksIEZNUDQudHlwZSgncGFzcCcpLCBwYXNwXG4gICAgKVxuICAgIHJldHVybiBidWZmZXIuYnVmZmVyXG4gIH1cbiAgc3RhdGljIHN0dHMgKCkge1xuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvblxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAgLy8gZW50cnlfY291bnRcbiAgICBdKVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goMTYsICdzdHRzJywgY29udGVudClcbiAgfVxuICBzdGF0aWMgc3RzYyAoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAvLyB2ZXJzaW9uXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCAvLyBlbnRyeV9jb3VudFxuICAgIF0pXG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveCgxNiwgJ3N0c2MnLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyBzdGNvICgpIHtcbiAgICBsZXQgY29udGVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIC8vIHZlcnNpb25cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGZsYWdzXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwIC8vIGVudHJ5X2NvdW50XG4gICAgXSlcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDE2LCAnc3RjbycsIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIHN0c3ogKCkge1xuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvblxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHNhbXBsZV9zaXplXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwIC8vIHNhbXBsZV9jb3VudFxuICAgIF0pXG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveCgyMCwgJ3N0c3onLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyBtdmV4IChkdXJhdGlvbikge1xuICAgIGxldCBidWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICBsZXQgbWVoZCA9IEJ1ZmZlci53cml0ZVVpbnQzMihkdXJhdGlvbilcbiAgICBidWZmZXIud3JpdGUoRk1QNC5zaXplKDg4KSwgRk1QNC50eXBlKCdtdmV4JyksIEZNUDQuc2l6ZSgxNiksIEZNUDQudHlwZSgnbWVoZCcpLCBGTVA0LmV4dGVuc2lvbigwLCAwKSwgbWVoZCwgRk1QNC50cmV4KDEpLCBGTVA0LnRyZXgoMikpXG4gICAgcmV0dXJuIGJ1ZmZlci5idWZmZXJcbiAgfVxuICBzdGF0aWMgdHJleCAoaWQpIHtcbiAgICBsZXQgY29udGVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIC8vIHZlcnNpb24gMFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIChpZCA+PiAyNCksXG4gICAgICAoaWQgPj4gMTYpICYgMHhmZixcbiAgICAgIChpZCA+PiA4KSAmIDB4ZmYsXG4gICAgICAoaWQgJiAweGZmKSwgLy8gdHJhY2tfSURcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDEsIC8vIGRlZmF1bHRfc2FtcGxlX2Rlc2NyaXB0aW9uX2luZGV4XG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBkZWZhdWx0X3NhbXBsZV9kdXJhdGlvblxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZGVmYXVsdF9zYW1wbGVfc2l6ZVxuICAgICAgMHgwMCwgMHgwMSwgMHgwMCwgMHgwMSAvLyBkZWZhdWx0X3NhbXBsZV9mbGFnc1xuICAgIF0pXG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveCg4ICsgY29udGVudC5ieXRlTGVuZ3RoLCAndHJleCcsIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIG1vb2YgKGRhdGEpIHtcbiAgICBsZXQgc2l6ZSA9IDhcbiAgICBsZXQgbWZoZCA9IEZNUDQubWZoZCgpXG4gICAgbGV0IHRyYWYgPSBGTVA0LnRyYWYoZGF0YSk7XG4gICAgW21maGQsIHRyYWZdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBzaXplICs9IGl0ZW0uYnl0ZUxlbmd0aFxuICAgIH0pXG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveChzaXplLCAnbW9vZicsIG1maGQsIHRyYWYpXG4gIH1cbiAgc3RhdGljIG1maGQgKCkge1xuICAgIGxldCBjb250ZW50ID0gQnVmZmVyLndyaXRlVWludDMyKEZNUDQuc2VxdWVuY2UpXG4gICAgRk1QNC5zZXF1ZW5jZSArPSAxXG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveCgxNiwgJ21maGQnLCBGTVA0LmV4dGVuc2lvbigwLCAwKSwgY29udGVudClcbiAgfVxuICBzdGF0aWMgdHJhZiAoZGF0YSkge1xuICAgIGxldCBzaXplID0gOFxuICAgIGxldCB0ZmhkID0gRk1QNC50ZmhkKGRhdGEuaWQpXG4gICAgbGV0IHRmZHQgPSBGTVA0LnRmZHQoZGF0YS50aW1lKVxuICAgIGxldCBzZHRwID0gRk1QNC5zZHRwKGRhdGEpXG4gICAgbGV0IHRydW4gPSBGTVA0LnRydW4oZGF0YSwgc2R0cC5ieXRlTGVuZ3RoKTtcbiAgICBbdGZoZCwgdGZkdCwgc2R0cCwgdHJ1bl0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5ieXRlTGVuZ3RoXG4gICAgfSlcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KHNpemUsICd0cmFmJywgdGZoZCwgdGZkdCwgc2R0cCwgdHJ1bilcbiAgfVxuICBzdGF0aWMgdGZoZCAoaWQpIHtcbiAgICBsZXQgY29udGVudCA9IEJ1ZmZlci53cml0ZVVpbnQzMihpZClcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDE2LCAndGZoZCcsIEZNUDQuZXh0ZW5zaW9uKDAsIDApLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyB0ZmR0ICh0aW1lKSB7XG4gICAgLy8gbGV0IHVwcGVyID0gTWF0aC5mbG9vcih0aW1lIC8gKFVJTlQzMl9NQVggKyAxKSksXG4gICAgLy8gICAgIGxvd2VyID0gTWF0aC5mbG9vcih0aW1lICUgKFVJTlQzMl9NQVggKyAxKSk7XG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveCgxNiwgJ3RmZHQnLCBGTVA0LmV4dGVuc2lvbigwLCAwKSwgQnVmZmVyLndyaXRlVWludDMyKHRpbWUpKVxuICB9XG4gIHN0YXRpYyB0cnVuIChkYXRhLCBzZHRwTGVuZ3RoKSB7XG4gICAgLy8gbGV0IGlkID0gZGF0YS5pZDtcbiAgICAvLyBsZXQgY2VpbCA9IGlkID09PSAxID8gMTYgOiAxMjtcbiAgICBsZXQgYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgbGV0IHNhbXBsZUNvdW50ID0gQnVmZmVyLndyaXRlVWludDMyKGRhdGEuc2FtcGxlcy5sZW5ndGgpXG4gICAgLy8gbWRhdC1oZWFkZXIgOFxuICAgIC8vIG1vb2YtaGVhZGVyIDhcbiAgICAvLyBtZmhkIDE2XG4gICAgLy8gdHJhZi1oZWFkZXIgOFxuICAgIC8vIHRoaGQgMTZcbiAgICAvLyB0ZmR0IDIwXG4gICAgLy8gdHJ1bi1oZWFkZXIgMTJcbiAgICAvLyBzYW1wbGVDb3VudCA0XG4gICAgLy8gZGF0YS1vZmZzZXQgNFxuICAgIC8vIHNhbXBsZXMubGVuZ3RoXG4gICAgbGV0IG9mZnNldCA9IEJ1ZmZlci53cml0ZVVpbnQzMig4ICsgOCArIDE2ICsgOCArIDE2ICsgMTYgKyAxMiArIDQgKyA0ICsgMTYgKiBkYXRhLnNhbXBsZXMubGVuZ3RoICsgc2R0cExlbmd0aClcbiAgICBidWZmZXIud3JpdGUoRk1QNC5zaXplKDIwICsgMTYgKiBkYXRhLnNhbXBsZXMubGVuZ3RoKSwgRk1QNC50eXBlKCd0cnVuJyksIG5ldyBVaW50OEFycmF5KFsweDAwLCAweDAwLCAweDBGLCAweDAxXSksIHNhbXBsZUNvdW50LCBvZmZzZXQpXG5cbiAgICBsZXQgc2l6ZSA9IGJ1ZmZlci5idWZmZXIuYnl0ZUxlbmd0aFxuICAgIGxldCB3cml0ZU9mZnNldCA9IDBcbiAgICBkYXRhLnNhbXBsZXMuZm9yRWFjaCgoKSA9PiB7XG4gICAgICBzaXplICs9IDE2XG4gICAgfSlcblxuICAgIGxldCB0cnVuQm94ID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSlcblxuICAgIHRydW5Cb3guc2V0KGJ1ZmZlci5idWZmZXIsIDApXG4gICAgd3JpdGVPZmZzZXQgKz0gYnVmZmVyLmJ1ZmZlci5ieXRlTGVuZ3RoXG4gICAgZGF0YS5zYW1wbGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIHRydW5Cb3guc2V0KEJ1ZmZlci53cml0ZVVpbnQzMihpdGVtLmR1cmF0aW9uKSwgd3JpdGVPZmZzZXQpXG4gICAgICB3cml0ZU9mZnNldCArPSA0XG4gICAgICB0cnVuQm94LnNldChCdWZmZXIud3JpdGVVaW50MzIoaXRlbS5zaXplKSwgd3JpdGVPZmZzZXQpXG4gICAgICB3cml0ZU9mZnNldCArPSA0XG5cbiAgICAgIGlmIChkYXRhLmlkID09PSAxKSB7XG4gICAgICAgIHRydW5Cb3guc2V0KEJ1ZmZlci53cml0ZVVpbnQzMihpdGVtLmlzS2V5ZnJhbWUgPyAweDAyMDAwMDAwIDogMHgwMTAxMDAwMCksIHdyaXRlT2Zmc2V0KVxuICAgICAgICB3cml0ZU9mZnNldCArPSA0XG4gICAgICAgIHRydW5Cb3guc2V0KEJ1ZmZlci53cml0ZVVpbnQzMihpdGVtLmNwcyksIHdyaXRlT2Zmc2V0KVxuICAgICAgICB3cml0ZU9mZnNldCArPSA0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnVuQm94LnNldChCdWZmZXIud3JpdGVVaW50MzIoMHgwMTAwMDAwMCksIHdyaXRlT2Zmc2V0KVxuICAgICAgICB3cml0ZU9mZnNldCArPSA0XG4gICAgICAgIHRydW5Cb3guc2V0KEJ1ZmZlci53cml0ZVVpbnQzMigwKSwgd3JpdGVPZmZzZXQpXG4gICAgICAgIHdyaXRlT2Zmc2V0ICs9IDRcbiAgICAgIH1cblxuICAgICAgLy8gYnVmZmVyLndyaXRlKEJ1ZmZlci53cml0ZVVpbnQzMigwKSk7XG4gICAgfSlcbiAgICByZXR1cm4gdHJ1bkJveFxuICB9XG4gIHN0YXRpYyBzZHRwIChkYXRhKSB7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGJ1ZmZlci53cml0ZShGTVA0LnNpemUoMTIgKyBkYXRhLnNhbXBsZXMubGVuZ3RoKSwgRk1QNC50eXBlKCdzZHRwJyksIEZNUDQuZXh0ZW5zaW9uKDAsIDApKVxuICAgIGRhdGEuc2FtcGxlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgYnVmZmVyLndyaXRlKG5ldyBVaW50OEFycmF5KGRhdGEuaWQgPT09IDEgPyBbaXRlbS5rZXkgPyAzMiA6IDE2XSA6IFsxNl0pKVxuICAgIH0pXG4gICAgcmV0dXJuIGJ1ZmZlci5idWZmZXJcbiAgfVxuICBzdGF0aWMgbWRhdCAoZGF0YSkge1xuICAgIGxldCBidWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICBsZXQgc2l6ZSA9IDhcbiAgICBkYXRhLnNhbXBsZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5zaXplXG4gICAgfSlcbiAgICBidWZmZXIud3JpdGUoRk1QNC5zaXplKHNpemUpLCBGTVA0LnR5cGUoJ21kYXQnKSlcbiAgICBsZXQgbWRhdEJveCA9IG5ldyBVaW50OEFycmF5KHNpemUpXG4gICAgbGV0IG9mZnNldCA9IDBcbiAgICBtZGF0Qm94LnNldChidWZmZXIuYnVmZmVyLCBvZmZzZXQpXG4gICAgb2Zmc2V0ICs9IDhcbiAgICBkYXRhLnNhbXBsZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0uYnVmZmVyLmZvckVhY2goKHVuaXQpID0+IHtcbiAgICAgICAgbWRhdEJveC5zZXQodW5pdC5kYXRhLCBvZmZzZXQpXG4gICAgICAgIG9mZnNldCArPSB1bml0LmRhdGEuYnl0ZUxlbmd0aFxuICAgICAgICAvLyBidWZmZXIud3JpdGUodW5pdC5kYXRhKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gbWRhdEJveFxuICB9XG59XG5GTVA0LnR5cGUgPSBjYWNoZVdyYXBwZXIoKG5hbWUpID0+IHtcbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFtuYW1lLmNoYXJDb2RlQXQoMCksIG5hbWUuY2hhckNvZGVBdCgxKSwgbmFtZS5jaGFyQ29kZUF0KDIpLCBuYW1lLmNoYXJDb2RlQXQoMyldKVxufSlcbkZNUDQuc2VxdWVuY2UgPSAxXG5cbmV4cG9ydCBkZWZhdWx0IEZNUDRcbiIsImltcG9ydCBNZWRpYVNlZ21lbnRMaXN0IGZyb20gJy4uLy4uL21vZGVscy9NZWRpYVNlZ21lbnRMaXN0J1xuaW1wb3J0IE1lZGlhU2VnbWVudCBmcm9tICcuLi8uLi9tb2RlbHMvTWVkaWFTZWdtZW50J1xuaW1wb3J0IE1lZGlhU2FtcGxlIGZyb20gJy4uLy4uL21vZGVscy9NZWRpYVNhbXBsZSdcbmltcG9ydCBzbmlmZmVyIGZyb20gJy4uLy4uL3V0aWxzL3NuaWZmZXInXG5pbXBvcnQgQnVmZmVyIGZyb20gJy4uLy4uL3dyaXRlL0J1ZmZlcidcbmltcG9ydCBGTVA0IGZyb20gJy4vRm1wNCdcbmltcG9ydCBSZW11eGVyIGZyb20gJy4vUmVtdXhlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXA0UmVtdXhlciBleHRlbmRzIFJlbXV4ZXIge1xuICBjb25zdHJ1Y3RvciAoc3RvcmUpIHtcbiAgICBzdXBlcihzdG9yZSlcbiAgICB0aGlzLl9kdHNCYXNlID0gMFxuICAgIHRoaXMuX2lzRHRzQmFzZUluaXRlZCA9IGZhbHNlXG4gICAgdGhpcy5fdmlkZW9NZXRhID0gbnVsbFxuICAgIHRoaXMuX2F1ZGlvTWV0YSA9IG51bGxcbiAgICB0aGlzLl9hdWRpb05leHREdHMgPSBudWxsXG4gICAgdGhpcy5fdmlkZW9OZXh0RHRzID0gbnVsbFxuICAgIHRoaXMuX3ZpZGVvU2VnbWVudExpc3QgPSBuZXcgTWVkaWFTZWdtZW50TGlzdCgndmlkZW8nKVxuICAgIHRoaXMuX2F1ZGlvU2VnbWVudExpc3QgPSBuZXcgTWVkaWFTZWdtZW50TGlzdCgnYXVkaW8nKVxuICAgIGNvbnN0IHticm93c2VyfSA9IHNuaWZmZXJcbiAgICB0aGlzLl9maWxsU2lsZW5jZUZyYW1lID0gYnJvd3NlciA9PT0gJ2llJ1xuICAgIHRoaXMuaGFuZGxlTWVkaWFGcmFnbWVudCA9ICgpID0+IHt9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl9kdHNCYXNlID0gLTFcbiAgICB0aGlzLl9kdHNCYXNlSW5pdGVkID0gZmFsc2VcbiAgICB0aGlzLl9hdWRpb01ldGEgPSBudWxsXG4gICAgdGhpcy5fdmlkZW9NZXRhID0gbnVsbFxuICAgIHRoaXMuX3ZpZGVvTmV4dER0cyA9IG51bGxcbiAgICB0aGlzLl9hdWRpb05leHREdHMgPSBudWxsXG4gICAgdGhpcy5fdmlkZW9TZWdtZW50TGlzdC5jbGVhcigpXG4gICAgdGhpcy5fYXVkaW9TZWdtZW50TGlzdC5jbGVhcigpXG4gICAgdGhpcy5fdmlkZW9TZWdtZW50TGlzdCA9IG51bGxcbiAgICB0aGlzLl9hdWRpb1NlZ21lbnRMaXN0ID0gbnVsbFxuICB9XG5cbiAgcmVtdXggKGF1ZGlvVHJhY2ssIHZpZGVvVHJhY2spIHtcbiAgICAhdGhpcy5faXNEdHNCYXNlSW5pdGVkICYmIHRoaXMuY2FsY0R0c0Jhc2UoYXVkaW9UcmFjaywgdmlkZW9UcmFjaylcblxuICAgIHRoaXMuX3JlbXV4VmlkZW8odmlkZW9UcmFjaylcbiAgICB0aGlzLl9yZW11eEF1ZGlvKGF1ZGlvVHJhY2spXG4gIH1cblxuICBzZWVrICgpIHtcbiAgICB0aGlzLl92aWRlb05leHREdHMgPSBudWxsXG4gICAgdGhpcy5fYXVkaW9OZXh0RHRzID0gbnVsbFxuICAgIHRoaXMuX3ZpZGVvU2VnbWVudExpc3QuY2xlYXIoKVxuICAgIHRoaXMuX2F1ZGlvU2VnbWVudExpc3QuY2xlYXIoKVxuICB9XG5cbiAgb25NZXRhRGF0YVJlYWR5ICh0eXBlLCBtZXRhKSB7XG4gICAgdGhpc1tgXyR7dHlwZX1NZXRhYF0gPSBtZXRhXG4gIH1cblxuICBvbk1lZGlhSW5mb1JlYWR5IChtZWRpYUluZm8pIHtcbiAgICBsZXQgZnR5cE1vb3YgPSBuZXcgQnVmZmVyKClcbiAgICBsZXQgZnR5cCA9IEZNUDQuZnR5cCgpXG4gICAgbGV0IG1vb3YgPSBGTVA0Lm1vb3YobWVkaWFJbmZvKVxuICAgIGZ0eXBNb292LndyaXRlKGZ0eXAsIG1vb3YpXG4gICAgcmV0dXJuIGZ0eXBNb292LmJ1ZmZlclxuICB9XG5cbiAgY2FsY0R0c0Jhc2UgKGF1ZGlvVHJhY2ssIHZpZGVvVHJhY2spIHtcbiAgICBsZXQgYXVkaW9CYXNlID0gSW5maW5pdHlcbiAgICBsZXQgdmlkZW9CYXNlID0gSW5maW5pdHlcbiAgICBpZiAoYXVkaW9UcmFjay5zYW1wbGVzICYmIGF1ZGlvVHJhY2suc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIGF1ZGlvQmFzZSA9IGF1ZGlvVHJhY2suc2FtcGxlc1swXS5kdHNcbiAgICB9XG4gICAgaWYgKHZpZGVvVHJhY2suc2FtcGxlcyAmJiB2aWRlb1RyYWNrLnNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICB2aWRlb0Jhc2UgPSB2aWRlb1RyYWNrLnNhbXBsZXNbMF0uZHRzXG4gICAgfVxuXG4gICAgdGhpcy5fZHRzQmFzZSA9IE1hdGgubWluKGF1ZGlvQmFzZSwgdmlkZW9CYXNlKVxuICAgIHRoaXMuX2lzRHRzQmFzZUluaXRlZCA9IHRydWVcbiAgfVxuXG4gIF9yZW11eFZpZGVvICh2aWRlb1RyYWNrKSB7XG4gICAgaWYgKCF0aGlzLl92aWRlb01ldGEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB0cmFjayA9IHZpZGVvVHJhY2tcbiAgICBpZiAoIXZpZGVvVHJhY2suc2FtcGxlcyB8fCAhdmlkZW9UcmFjay5zYW1wbGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGxldCB7c2FtcGxlc30gPSB0cmFja1xuICAgIGxldCBkdHNDb3JyZWN0aW9uXG4gICAgbGV0IGZpcnN0RHRzID0gLTFcbiAgICBsZXQgbGFzdER0cyA9IC0xXG4gICAgbGV0IGZpcnN0UHRzID0gLTFcbiAgICBsZXQgbGFzdFB0cyA9IC0xXG5cbiAgICBjb25zdCBtcDRTYW1wbGVzID0gW11cbiAgICBjb25zdCBtZGF0Qm94ID0ge1xuICAgICAgc2FtcGxlczogW11cbiAgICB9XG4gICAgY29uc3QgdmlkZW9TZWdtZW50ID0gbmV3IE1lZGlhU2VnbWVudCgpXG4gICAgd2hpbGUgKHNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBhdmNTYW1wbGUgPSBzYW1wbGVzLnNoaWZ0KClcbiAgICAgIGNvbnN0IHtpc0tleWZyYW1lLCBjcHN9ID0gYXZjU2FtcGxlXG4gICAgICBsZXQgZHRzID0gYXZjU2FtcGxlLmR0cyAtIHRoaXMuX2R0c0Jhc2VcblxuICAgICAgaWYgKGR0c0NvcnJlY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoIXRoaXMuX3ZpZGVvTmV4dER0cykge1xuICAgICAgICAgIGlmICh0aGlzLl92aWRlb1NlZ21lbnRMaXN0LmlzRW1wdHkoKSkge1xuICAgICAgICAgICAgZHRzQ29ycmVjdGlvbiA9IDBcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbGFzdFNlZ21lbnQgPSB0aGlzLl92aWRlb1NlZ21lbnRMaXN0LmdldExhc3RTZWdtZW50QmVmb3JlKGR0cylcbiAgICAgICAgICAgIGlmIChsYXN0U2VnbWVudCkge1xuICAgICAgICAgICAgICBsZXQgZ2FwXG4gICAgICAgICAgICAgIGNvbnN0IHtsYXN0RHRzLCBnYXA6IGxhc3RHYXB9ID0gbGFzdFNlZ21lbnRcbiAgICAgICAgICAgICAgZ2FwID0gZHRzIC0gKGxhc3REdHMgKyBsYXN0R2FwKSA+IDMgPyBkdHMgLSAobGFzdER0cyArIGxhc3RHYXApIDogMFxuICAgICAgICAgICAgICBkdHNDb3JyZWN0aW9uID0gZHRzIC0gKGxhc3REdHMgKyBnYXApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkdHNDb3JyZWN0aW9uID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkdHNDb3JyZWN0aW9uID0gZHRzIC0gdGhpcy5fdmlkZW9OZXh0RHRzID49IDEwMDAgPyAwIDogZHRzIC0gdGhpcy5fdmlkZW9OZXh0RHRzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IG9yaWdpbkR0cyA9IGR0c1xuICAgICAgZHRzIC09IGR0c0NvcnJlY3Rpb25cbiAgICAgIGNvbnN0IHB0cyA9IGR0cyArIGNwc1xuXG4gICAgICBpZiAoZmlyc3REdHMgPT09IC0xKSB7XG4gICAgICAgIGZpcnN0RHRzID0gZHRzXG4gICAgICAgIGZpcnN0UHRzID0gcHRzXG4gICAgICB9XG4gICAgICBsZXQgX3VuaXRzID0gW11cbiAgICAgIHdoaWxlIChhdmNTYW1wbGUudW5pdHMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBtZGF0U2FtcGxlID0ge1xuICAgICAgICAgIGJ1ZmZlcjogW10sXG4gICAgICAgICAgc2l6ZTogMFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVuaXQgPSBhdmNTYW1wbGUudW5pdHMuc2hpZnQoKVxuICAgICAgICBfdW5pdHMucHVzaCh1bml0KVxuICAgICAgICBtZGF0U2FtcGxlLmJ1ZmZlci5wdXNoKHVuaXQpXG4gICAgICAgIG1kYXRTYW1wbGUuc2l6ZSArPSB1bml0LmRhdGEuYnl0ZUxlbmd0aFxuXG4gICAgICAgIG1kYXRCb3guc2FtcGxlcy5wdXNoKG1kYXRTYW1wbGUpXG4gICAgICB9XG5cbiAgICAgIGxldCBzYW1wbGVEdXJhdGlvbiA9IDBcblxuICAgICAgaWYgKHNhbXBsZXMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgY29uc3QgbmV4dER0cyA9IHNhbXBsZXNbMF0uZHRzIC0gdGhpcy5fZHRzQmFzZSAtIGR0c0NvcnJlY3Rpb25cbiAgICAgICAgc2FtcGxlRHVyYXRpb24gPSBuZXh0RHRzIC0gZHRzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobXA0U2FtcGxlcy5sZW5ndGggPj0gMSkgeyAvLyBsYXN0ZXN0IHNhbXBsZSwgdXNlIHNlY29uZCBsYXN0IGR1cmF0aW9uXG4gICAgICAgICAgc2FtcGxlRHVyYXRpb24gPSBtcDRTYW1wbGVzW21wNFNhbXBsZXMubGVuZ3RoIC0gMV0uZHVyYXRpb25cbiAgICAgICAgfSBlbHNlIHsgLy8gdGhlIG9ubHkgb25lIHNhbXBsZSwgdXNlIHJlZmVyZW5jZSBkdXJhdGlvblxuICAgICAgICAgIHNhbXBsZUR1cmF0aW9uID0gdGhpcy5fdmlkZW9NZXRhLnJlZlNhbXBsZUR1cmF0aW9uXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzS2V5ZnJhbWUpIHtcbiAgICAgICAgY29uc3QgcmFwID0gbmV3IE1lZGlhU2FtcGxlKHtcbiAgICAgICAgICBkdHMsXG4gICAgICAgICAgcHRzLFxuICAgICAgICAgIGR1cmF0aW9uOiBzYW1wbGVEdXJhdGlvbixcbiAgICAgICAgICBvcmlnaW5EdHM6IGF2Y1NhbXBsZS5kdHMsXG4gICAgICAgICAgcG9zaXRpb246IGF2Y1NhbXBsZS5wb3NpdGlvbixcbiAgICAgICAgICBpc1JBUDogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICB2aWRlb1NlZ21lbnQuYWRkUkFQKHJhcClcbiAgICAgIH1cblxuICAgICAgbXA0U2FtcGxlcy5wdXNoKHtcbiAgICAgICAgZHRzLFxuICAgICAgICBjcHMsXG4gICAgICAgIHB0cyxcbiAgICAgICAgdW5pdHM6IF91bml0cyxcbiAgICAgICAgc2l6ZTogYXZjU2FtcGxlLmxlbmd0aCxcbiAgICAgICAgaXNLZXlmcmFtZSxcbiAgICAgICAgZHVyYXRpb246IHNhbXBsZUR1cmF0aW9uLFxuICAgICAgICBvcmlnaW5EdHNcbiAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGZpcnN0ID0gbXA0U2FtcGxlc1swXVxuICAgIGNvbnN0IGxhc3QgPSBtcDRTYW1wbGVzW21wNFNhbXBsZXMubGVuZ3RoIC0gMV1cbiAgICBsYXN0RHRzID0gbGFzdC5kdHMgKyBsYXN0LmR1cmF0aW9uXG4gICAgbGFzdFB0cyA9IGxhc3QucHRzICsgbGFzdC5kdXJhdGlvblxuXG4gICAgdGhpcy5fdmlkZW9OZXh0RHRzID0gbGFzdER0c1xuXG4gICAgdmlkZW9TZWdtZW50LnN0YXJ0RHRzID0gZmlyc3REdHNcbiAgICB2aWRlb1NlZ21lbnQuZW5kRHRzID0gbGFzdER0c1xuICAgIHZpZGVvU2VnbWVudC5zdGFydFB0cyA9IGZpcnN0UHRzXG4gICAgdmlkZW9TZWdtZW50LmVuZFB0cyA9IGxhc3RQdHNcbiAgICB2aWRlb1NlZ21lbnQub3JpZ2luU3RhcnREdHMgPSBmaXJzdC5vcmlnaW5EdHNcbiAgICB2aWRlb1NlZ21lbnQub3JpZ2luRW5kRHRzID0gbGFzdC5vcmlnaW5EdHMgKyBsYXN0LmR1cmF0aW9uXG4gICAgdmlkZW9TZWdtZW50LmdhcCA9IGR0c0NvcnJlY3Rpb25cbiAgICBjb25zdCBmaXJzdFNhbXBsZSA9IG5ldyBNZWRpYVNhbXBsZSh7XG4gICAgICBkdHM6IGZpcnN0LmR0cyxcbiAgICAgIHB0czogZmlyc3QucHRzLFxuICAgICAgZHVyYXRpb246IGZpcnN0LmR1cmF0aW9uLFxuICAgICAgaXNLZXlmcmFtZTogZmlyc3QuaXNLZXlmcmFtZSxcbiAgICAgIG9yaWdpbkR0czogZmlyc3Qub3JpZ2luRHRzXG4gICAgfSlcbiAgICBjb25zdCBsYXN0U2FtcGxlID0gbmV3IE1lZGlhU2FtcGxlKHtcbiAgICAgIGR0czogbGFzdC5kdHMsXG4gICAgICBwdHM6IGxhc3QucHRzLFxuICAgICAgZHVyYXRpb246IGxhc3QuZHVyYXRpb24sXG4gICAgICBpc0tleWZyYW1lOiBsYXN0LmlzS2V5ZnJhbWUsXG4gICAgICBvcmlnaW5EdHM6IGxhc3Qub3JpZ2luRHRzXG4gICAgfSlcbiAgICB2aWRlb1NlZ21lbnQuZmlyc3RTYW1wbGUgPSBmaXJzdFNhbXBsZVxuICAgIHZpZGVvU2VnbWVudC5sYXN0U2FtcGxlID0gbGFzdFNhbXBsZVxuICAgIGxldCBtb29mTWRhdCA9IG5ldyBCdWZmZXIoKVxuXG4gICAgdHJhY2suc2FtcGxlcyA9IG1wNFNhbXBsZXNcbiAgICB0cmFjay50aW1lID0gZmlyc3REdHNcbiAgICBjb25zdCBtb29mID0gRk1QNC5tb29mKHRyYWNrKVxuICAgIGNvbnN0IG1kYXQgPSBGTVA0Lm1kYXQobWRhdEJveClcbiAgICBtb29mTWRhdC53cml0ZShtb29mLCBtZGF0KVxuXG4gICAgaWYgKCF0aGlzLl9zdG9yZS5pc0xpdmUpIHtcbiAgICAgIHRoaXMuX3ZpZGVvU2VnbWVudExpc3QuYXBwZW5kKHZpZGVvU2VnbWVudClcbiAgICB9XG5cbiAgICB0cmFjay5zYW1wbGVzID0gW11cbiAgICB0cmFjay5sZW5ndGggPSAwXG5cbiAgICB0aGlzLmhhbmRsZU1lZGlhRnJhZ21lbnQoe1xuICAgICAgdHlwZTogJ3ZpZGVvJyxcbiAgICAgIGRhdGE6IG1vb2ZNZGF0LmJ1ZmZlci5idWZmZXIsXG4gICAgICBzYW1wbGVDb3VudDogbXA0U2FtcGxlcy5sZW5ndGgsXG4gICAgICBmcmFnbWVudDogdmlkZW9TZWdtZW50XG4gICAgfSlcbiAgfVxuXG4gIF9yZW11eEF1ZGlvICh0cmFjaykge1xuICAgIGlmICghdGhpcy5fYXVkaW9NZXRhKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3Qge3NhbXBsZXN9ID0gdHJhY2tcbiAgICBsZXQgZHRzQ29ycmVjdGlvblxuICAgIGxldCBmaXJzdER0cyA9IC0xXG4gICAgbGV0IGxhc3REdHMgPSAtMVxuICAgIC8vIGxldCBmaXJzdFB0cyA9IC0xXG4gICAgLy8gbGV0IGxhc3RQdHMgPSAtMVxuICAgIGxldCBzaWxlbnREdXJhdGlvblxuICAgIGxldCBtcDRTYW1wbGVzID0gW11cblxuICAgIGNvbnN0IG1kYXRCb3ggPSB7XG4gICAgICBzYW1wbGVzOiBbXVxuICAgIH1cbiAgICBpZiAoIXNhbXBsZXMgfHwgIXNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbGV0IGlzRmlyc3REdHNJbml0ZWQgPSBmYWxzZVxuICAgIHdoaWxlIChzYW1wbGVzLmxlbmd0aCkge1xuICAgICAgbGV0IHNhbXBsZSA9IHNhbXBsZXMuc2hpZnQoKVxuICAgICAgY29uc3Qge3VuaXR9ID0gc2FtcGxlXG4gICAgICBsZXQgZHRzID0gc2FtcGxlLmR0cyAtIHRoaXMuX2R0c0Jhc2VcblxuICAgICAgbGV0IG5lZWRTaWxlbnRGcmFtZSA9IGZhbHNlXG4gICAgICBpZiAoZHRzQ29ycmVjdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICghdGhpcy5fYXVkaW9OZXh0RHRzKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2F1ZGlvU2VnbWVudExpc3QuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICBkdHNDb3JyZWN0aW9uID0gMFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0U2VnbWVudCA9IHRoaXMuX2F1ZGlvU2VnbWVudExpc3QuZ2V0TGFzdFNlZ21lbnRCZWZvcmUoZHRzKVxuICAgICAgICAgICAgaWYgKGxhc3RTZWdtZW50KSB7XG4gICAgICAgICAgICAgIGxldCBnYXBcbiAgICAgICAgICAgICAgY29uc3Qge2xhc3REdHMsIGdhcDogbGFzdEdhcH0gPSBsYXN0U2VnbWVudFxuICAgICAgICAgICAgICBnYXAgPSBkdHMgLSAobGFzdER0cyArIGxhc3RHYXApID4gMyA/IGR0cyAtIChsYXN0RHRzICsgbGFzdEdhcCkgOiAwXG4gICAgICAgICAgICAgIGR0c0NvcnJlY3Rpb24gPSBkdHMgLSAobGFzdER0cyArIGdhcClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5lZWRTaWxlbnRGcmFtZSA9IHRoaXMuX2ZpbGxTaWxlbmNlRnJhbWUgJiYgIXRoaXMuX3ZpZGVvU2VnbWVudExpc3QuaXNFbXB0eSgpXG4gICAgICAgICAgICAgIGR0c0NvcnJlY3Rpb24gPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGR0c0NvcnJlY3Rpb24gPSBkdHMgLSB0aGlzLl9hdWRpb05leHREdHMgPj0gMTAwMCA/IDAgOiBkdHMgLSB0aGlzLl9hdWRpb05leHREdHNcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3Qgb3JpZ2luRHRzID0gZHRzXG4gICAgICBkdHMgLT0gZHRzQ29ycmVjdGlvblxuXG4gICAgICBpZiAobmVlZFNpbGVudEZyYW1lKSB7XG4gICAgICAgIGNvbnN0IHZpZGVvU2VnbWVudCA9IHRoaXMuX3ZpZGVvU2VnbWVudExpc3QuZ2V0TGFzdFNhbXBsZUJlZm9yZShvcmlnaW5EdHMpXG5cbiAgICAgICAgaWYgKHZpZGVvU2VnbWVudCAmJiB2aWRlb1NlZ21lbnQuc3RhcnREdHMgPCBkdHMpIHtcbiAgICAgICAgICBzaWxlbnREdXJhdGlvbiA9IGR0cyAtIHZpZGVvU2VnbWVudC5zdGFydER0c1xuICAgICAgICAgIGR0cyA9IHZpZGVvU2VnbWVudC5zdGFydER0c1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5lZWRTaWxlbnRGcmFtZSA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc0ZpcnN0RHRzSW5pdGVkKSB7XG4gICAgICAgIGZpcnN0RHRzID0gZHRzXG4gICAgICAgIGlzRmlyc3REdHNJbml0ZWQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkU2lsZW50RnJhbWUpIHtcbiAgICAgICAgc2FtcGxlcy51bnNoaWZ0KHNhbXBsZSlcbiAgICAgICAgY29uc3Qgc2lsZW50RnJhbWUgPSB0aGlzLmluaXRTaWxlbnRBdWRpbyhkdHMsIHNpbGVudER1cmF0aW9uKVxuICAgICAgICBtcDRTYW1wbGVzLnB1c2goc2lsZW50RnJhbWUpXG5cbiAgICAgICAgbGV0IG1kYXRTYW1wbGUgPSB7XG4gICAgICAgICAgYnVmZmVyOiBbXSxcbiAgICAgICAgICBzaXplOiAwXG4gICAgICAgIH1cbiAgICAgICAgbWRhdFNhbXBsZS5idWZmZXIucHVzaCh7XG4gICAgICAgICAgZGF0YTogc2lsZW50RnJhbWUudW5pdFxuICAgICAgICB9KVxuICAgICAgICBtZGF0U2FtcGxlLnNpemUgKz0gc2lsZW50RnJhbWUudW5pdC5ieXRlTGVuZ3RoXG5cbiAgICAgICAgbWRhdEJveC5zYW1wbGVzLnB1c2gobWRhdFNhbXBsZSlcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgbGV0IHNhbXBsZUR1cmF0aW9uID0gMFxuXG4gICAgICBpZiAoc2FtcGxlcy5sZW5ndGggPj0gMSkge1xuICAgICAgICBjb25zdCBuZXh0RHRzID0gc2FtcGxlc1swXS5kdHMgLSB0aGlzLl9kdHNCYXNlIC0gZHRzQ29ycmVjdGlvblxuICAgICAgICBzYW1wbGVEdXJhdGlvbiA9IG5leHREdHMgLSBkdHNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChtcDRTYW1wbGVzLmxlbmd0aCA+PSAxKSB7IC8vIHVzZSBzZWNvbmQgbGFzdCBzYW1wbGUgZHVyYXRpb25cbiAgICAgICAgICBzYW1wbGVEdXJhdGlvbiA9IG1wNFNhbXBsZXNbbXA0U2FtcGxlcy5sZW5ndGggLSAxXS5kdXJhdGlvblxuICAgICAgICB9IGVsc2UgeyAvLyB0aGUgb25seSBvbmUgc2FtcGxlLCB1c2UgcmVmZXJlbmNlIHNhbXBsZSBkdXJhdGlvblxuICAgICAgICAgIHNhbXBsZUR1cmF0aW9uID0gdGhpcy5fYXVkaW9NZXRhLnJlZlNhbXBsZUR1cmF0aW9uXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgbXA0U2FtcGxlID0ge1xuICAgICAgICBkdHMsXG4gICAgICAgIHB0czogZHRzLFxuICAgICAgICBjdHM6IDAsXG4gICAgICAgIHNpemU6IHVuaXQuYnl0ZUxlbmd0aCxcbiAgICAgICAgZHVyYXRpb246IHNhbXBsZUR1cmF0aW9uLFxuICAgICAgICBvcmlnaW5EdHNcbiAgICAgIH1cblxuICAgICAgbGV0IG1kYXRTYW1wbGUgPSB7XG4gICAgICAgIGJ1ZmZlcjogW10sXG4gICAgICAgIHNpemU6IDBcbiAgICAgIH1cbiAgICAgIG1kYXRTYW1wbGUuYnVmZmVyLnB1c2goe1xuICAgICAgICBkYXRhOiB1bml0XG4gICAgICB9KVxuICAgICAgbWRhdFNhbXBsZS5zaXplICs9IHVuaXQuYnl0ZUxlbmd0aFxuXG4gICAgICBtZGF0Qm94LnNhbXBsZXMucHVzaChtZGF0U2FtcGxlKVxuXG4gICAgICBtcDRTYW1wbGVzLnB1c2gobXA0U2FtcGxlKVxuICAgIH1cblxuICAgIGNvbnN0IGxhc3QgPSBtcDRTYW1wbGVzW21wNFNhbXBsZXMubGVuZ3RoIC0gMV1cbiAgICBsYXN0RHRzID0gbGFzdC5kdHMgKyBsYXN0LmR1cmF0aW9uXG5cbiAgICB0aGlzLl9hdWRpb05leHREdHMgPSBsYXN0RHRzXG5cbiAgICBjb25zdCBhdWRpb1NlZ21lbnQgPSBuZXcgTWVkaWFTZWdtZW50KClcbiAgICBhdWRpb1NlZ21lbnQuc3RhcnREdHMgPSBmaXJzdER0c1xuICAgIGF1ZGlvU2VnbWVudC5lbmREdHMgPSBsYXN0RHRzXG4gICAgYXVkaW9TZWdtZW50LnN0YXJ0UHRzID0gZmlyc3REdHNcbiAgICBhdWRpb1NlZ21lbnQuZW5kUHRzID0gbGFzdER0c1xuICAgIGF1ZGlvU2VnbWVudC5vcmlnaW5TdGFydER0cyA9IG1wNFNhbXBsZXNbMF0ub3JpZ2luRHRzXG4gICAgYXVkaW9TZWdtZW50Lm9yaWdpbkVuZER0cyA9IGxhc3Qub3JpZ2luRHRzICsgbGFzdC5kdXJhdGlvblxuICAgIGF1ZGlvU2VnbWVudC5nYXAgPSBkdHNDb3JyZWN0aW9uXG4gICAgYXVkaW9TZWdtZW50LmZpcnN0U2FtcGxlID0gbmV3IE1lZGlhU2FtcGxlKHtcbiAgICAgIGR0czogbXA0U2FtcGxlc1swXS5kdHMsXG4gICAgICBwdHM6IG1wNFNhbXBsZXNbMF0ucHRzLFxuICAgICAgZHVyYXRpb246IG1wNFNhbXBsZXNbMF0uZHVyYXRpb24sXG4gICAgICBvcmlnaW5EdHM6IG1wNFNhbXBsZXNbMF0ub3JpZ2luRHRzXG4gICAgfSlcbiAgICBhdWRpb1NlZ21lbnQubGFzdFNhbXBsZSA9IG5ldyBNZWRpYVNhbXBsZSh7XG4gICAgICBkdHM6IGxhc3QuZHRzLFxuICAgICAgcHRzOiBsYXN0LnB0cyxcbiAgICAgIGR1cmF0aW9uOiBsYXN0LmR1cmF0aW9uLFxuICAgICAgb3JpZ2luRHRzOiBsYXN0Lm9yaWdpbkR0c1xuICAgIH0pXG5cbiAgICB0cmFjay5zYW1wbGVzID0gbXA0U2FtcGxlc1xuICAgIGNvbnN0IG1vb2ZNZGF0ID0gbmV3IEJ1ZmZlcigpXG4gICAgdHJhY2sudGltZSA9IGZpcnN0RHRzXG4gICAgY29uc3QgbW9vZiA9IEZNUDQubW9vZih0cmFjaywgZmlyc3REdHMpXG4gICAgY29uc3QgbWRhdCA9IEZNUDQubWRhdChtZGF0Qm94KVxuICAgIG1vb2ZNZGF0LndyaXRlKG1vb2YsIG1kYXQpXG5cbiAgICBpZiAoIXRoaXMuX3N0b3JlLmlzTGl2ZSkge1xuICAgICAgdGhpcy5fYXVkaW9TZWdtZW50TGlzdC5hcHBlbmQoYXVkaW9TZWdtZW50KVxuICAgIH1cbiAgICB0cmFjay5zYW1wbGVzID0gW11cbiAgICB0cmFjay5sZW5ndGggPSAwXG4gICAgdGhpcy5oYW5kbGVNZWRpYUZyYWdtZW50KHtcbiAgICAgIHR5cGU6ICdhdWRpbycsXG4gICAgICBkYXRhOiBtb29mTWRhdC5idWZmZXIuYnVmZmVyLFxuICAgICAgc2FtcGxlQ291bnQ6IG1wNFNhbXBsZXMubGVuZ3RoLFxuICAgICAgZnJhZ21lbnQ6IGF1ZGlvU2VnbWVudFxuICAgIH0pXG4gIH1cblxuICBpbml0U2lsZW50QXVkaW8gKGR0cywgZHVyYXRpb24pIHtcbiAgICBjb25zdCB1bml0ID0gTXA0UmVtdXhlci5nZXRTaWxlbnRGcmFtZSh0aGlzLl9hdWRpb01ldGEuY2hhbm5lbENvdW50KVxuICAgIHJldHVybiB7XG4gICAgICBkdHMsXG4gICAgICBwdHM6IGR0cyxcbiAgICAgIGNwczogMCxcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgdW5pdCxcbiAgICAgIHNpemU6IHVuaXQuYnl0ZUxlbmd0aCxcbiAgICAgIG9yaWdpbkR0czogZHRzXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldFNpbGVudEZyYW1lIChjaGFubmVsQ291bnQpIHtcbiAgICBpZiAoY2hhbm5lbENvdW50ID09PSAxKSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4YzgsIDB4MDAsIDB4ODAsIDB4MjMsIDB4ODBdKVxuICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSAyKSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MjEsIDB4MDAsIDB4NDksIDB4OTAsIDB4MDIsIDB4MTksIDB4MDAsIDB4MjMsIDB4ODBdKVxuICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSAzKSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4YzgsIDB4MDAsIDB4ODAsIDB4MjAsIDB4ODQsIDB4MDEsIDB4MjYsIDB4NDAsIDB4MDgsIDB4NjQsIDB4MDAsIDB4OGVdKVxuICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSA0KSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4YzgsIDB4MDAsIDB4ODAsIDB4MjAsIDB4ODQsIDB4MDEsIDB4MjYsIDB4NDAsIDB4MDgsIDB4NjQsIDB4MDAsIDB4ODAsIDB4MmMsIDB4ODAsIDB4MDgsIDB4MDIsIDB4MzhdKVxuICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSA1KSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4YzgsIDB4MDAsIDB4ODAsIDB4MjAsIDB4ODQsIDB4MDEsIDB4MjYsIDB4NDAsIDB4MDgsIDB4NjQsIDB4MDAsIDB4ODIsIDB4MzAsIDB4MDQsIDB4OTksIDB4MDAsIDB4MjEsIDB4OTAsIDB4MDIsIDB4MzhdKVxuICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSA2KSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4YzgsIDB4MDAsIDB4ODAsIDB4MjAsIDB4ODQsIDB4MDEsIDB4MjYsIDB4NDAsIDB4MDgsIDB4NjQsIDB4MDAsIDB4ODIsIDB4MzAsIDB4MDQsIDB4OTksIDB4MDAsIDB4MjEsIDB4OTAsIDB4MDIsIDB4MDAsIDB4YjIsIDB4MDAsIDB4MjAsIDB4MDgsIDB4ZTBdKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iLCJpbXBvcnQgTG9nIGZyb20gJy4uLy4uL3V0aWxzL0xvZydcbmltcG9ydCBUcmFuc0NvZGVyIGZyb20gJy4uL1RyYW5zQ29kZXInXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW11eGVyIGV4dGVuZHMgVHJhbnNDb2RlciB7XG4gIGRpc3BhdGNoICh0eXBlLCAuLi5wYXlsb2FkKSB7XG4gICAgY29uc3QgcHJlZml4ID0gJ3JlbXV4ZXJfJ1xuICAgIHRoaXMuX29ic2VydmVyLmVtaXQoYCR7cHJlZml4fSR7dHlwZX1gLCAuLi5wYXlsb2FkKVxuICB9XG4gIGVycm9yIChtZXNzYWdlKSB7XG4gICAgY29uc3QgeyBDTEFTU19OQU1FID0gJ1JlbXV4ZXInIH0gPSB0aGlzXG4gICAgTG9nLmVycm9yKGBbJHtDTEFTU19OQU1FfSBlcnJvcl0gYCwgbWVzc2FnZSlcbiAgfVxuXG4gIGluZm8gKG1lc3NhZ2UpIHtcbiAgICBjb25zdCB7IENMQVNTX05BTUUgPSAnUmVtdXhlcicgfSA9IHRoaXNcbiAgICBMb2cuaW5mbyhgWyR7Q0xBU1NfTkFNRX0gaW5mb10gYCwgbWVzc2FnZSlcbiAgfVxuXG4gIGxvZyAobWVzc2FnZSkge1xuICAgIGNvbnN0IHsgQ0xBU1NfTkFNRSA9ICdSZW11eGVyJyB9ID0gdGhpc1xuICAgIExvZy5sb2coYFske0NMQVNTX05BTUV9IGxvZ10gYCwgbWVzc2FnZSlcbiAgfVxuXG4gIHdhcm4gKG1lc3NhZ2UpIHtcbiAgICBjb25zdCB7IENMQVNTX05BTUUgPSAnUmVtdXhlcicgfSA9IHRoaXNcbiAgICBMb2cud2FybihgWyR7Q0xBU1NfTkFNRX0gd2Fybl0gYCwgbWVzc2FnZSlcbiAgfVxufVxuIiwiLy8g55u05pKt5Lu75Yqh6I635Y+WIOebtOaSreaVsOaNrlxuY2xhc3MgTGl2ZVRhc2sge1xuICBjb25zdHJ1Y3RvciAodXJsLCBjb25maWcpIHtcbiAgICAvL2h0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL3poLUNOL2RvY3MvV2ViL0FQSS9IZWFkZXJzXG4gICAgY29uc3QgX2hlYWRlcnMgPSBuZXcgd2luZG93LkhlYWRlcnMoKVxuXG4gICAgY29uc3QgX2NvbmZpZyA9IHtcbiAgICAgIGhlYWRlcnM6IE9iamVjdC5hc3NpZ24oe30sIF9oZWFkZXJzKSxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBjYWNoZTogJ2RlZmF1bHQnLFxuICAgICAgbW9kZTogJ2NvcnMnXG4gICAgfVxuICAgIHRoaXMuX3N0b3AgPSBmYWxzZVxuICAgIC8vaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvemgtQ04vZG9jcy9XZWIvQVBJL1JlcXVlc3QvUmVxdWVzdFxuICAgIHRoaXMucmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCwgT2JqZWN0LmFzc2lnbih7fSwgX2NvbmZpZywgY29uZmlnKSkgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICB9XG5cbiAgcnVuIChjYWxsYmFjaykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgLy8g5Yip55SoZmV0Y2gg5ou/5YiwcmVzLmJvZHkuZ2V0UmVhZGVyKCkg54S25ZCO6YCS5b2S55qE6LCD55SocmVhZOaWueazlSDojrflj5ZyZXN1bHQudmFsdWUg5Lyg57uZY2FsbGJhY2tcbiAgICBmdW5jdGlvbiByZXNvbHZlIChyZWFkZXIpIHtcbiAgICAgIHJlYWRlci5yZWFkKCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBpZiAoc2VsZi5fc3RvcCkge1xuICAgICAgICAgIHJlYWRlci5jYW5jZWwoKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdC5kb25lID8gdW5kZWZpbmVkIDogcmVzdWx0LnZhbHVlKVxuICAgICAgICByZXNvbHZlKHJlYWRlcilcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBpc1RpbWVvdXQgPSB0cnVlXG5cbiAgICAgIGZldGNoKHRoaXMucmVxdWVzdCkudGhlbigocmVzKSA9PiB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgaXNUaW1lb3V0ID0gZmFsc2VcbiAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICB9KVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlzVGltZW91dCAmJiByZWplY3QoKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICB9LCA1MDAwKVxuICAgIH0pXG5cbiAgICBwcm9tXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSByZXMuYm9keS5nZXRSZWFkZXIoKVxuICAgICAgICByZXNvbHZlKHJlYWRlcilcbiAgICAgIH0pXG4gICAgICAuY2F0Y2gocmVzID0+IHtcbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgfSlcblxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgY2FuY2VsICgpIHtcbiAgICB0aGlzLl9zdG9wID0gdHJ1ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpdmVUYXNrXG4iLCJpbXBvcnQgWEhSTG9hZGVyIGZyb20gJy4vbG9hZGVycy9YSFJMb2FkZXInXG5pbXBvcnQgRmV0Y2hMb2FkZXIgZnJvbSAnLi9sb2FkZXJzL0ZldGNoTG9hZGVyJ1xuY29uc3QgTG9hZENscyA9IChmdW5jdGlvbiAod2luZG93KSB7XG4gIGlmICh3aW5kb3cuZmV0Y2gpIHtcbiAgICByZXR1cm4gRmV0Y2hMb2FkZXJcbiAgfVxuICByZXR1cm4gWEhSTG9hZGVyXG59KSh3aW5kb3cpXG4vLyDkv53or4Hlj6rmnIky5Liq5Lu75Yqh5aSE5LqO6K+35rGC54q25oCB77yMIOaWsOW7uuS7u+WKoeW+gOmYn+WIl+mHjOa3u+WKoO+8jOS7u+WKoeWujOaIkOS7jumYn+WIl+WIoOmZpCDmr4/mrKHlj5jljJbpg73kvJrmm7TmlrDpmJ/liJfov5vooYzor7fmsYLjgIJcbmNsYXNzIFZvZFRhc2sge1xuICBjb25zdHJ1Y3RvciAodXJsLCByYW5nZSwgaGVhZGVycykge1xuICAgIGNvbnNvbGUubG9nKHJhbmdlKVxuICAgIHRoaXMudXJsID0gdXJsXG4gICAgdGhpcy5yYW5nZSA9IHJhbmdlXG4gICAgdGhpcy5pZCA9IHJhbmdlLmpvaW4oJy0nKVxuICAgIHRoaXMub24gPSBmYWxzZVxuICAgIHRoaXMubG9hZGVyID0gbmV3IExvYWRDbHModXJsLCByYW5nZSwgaGVhZGVycylcbiAgICB0aGlzLmlzQ2FuY2VsZWQgPSBmYWxzZVxuICAgIFZvZFRhc2sucXVldWUucHVzaCh0aGlzKVxuICAgIFZvZFRhc2sudXBkYXRlKClcbiAgfVxuXG4gIGNhbmNlbCAoKSB7XG4gICAgdGhpcy5pc0NhbmNlbGVkID0gdHJ1ZVxuICAgIHRoaXMubG9hZGVyLmNhbmNlbCgpXG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlIChsb2FkZXIpIHtcbiAgICBWb2RUYXNrLnF1ZXVlLmZpbHRlcigoaXRlbSwgaWR4KSA9PiB7XG4gICAgICBpZiAoaXRlbS51cmwgPT09IGxvYWRlci51cmwgJiYgaXRlbS5pZCA9PT0gbG9hZGVyLmlkKSB7XG4gICAgICAgIFZvZFRhc2sucXVldWUuc3BsaWNlKGlkeCwgMSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pXG4gICAgVm9kVGFzay51cGRhdGUoKVxuICB9XG5cbiAgc3RhdGljIHVwZGF0ZSAoKSB7XG4gICAgbGV0IFF1ZXVlID0gVm9kVGFzay5xdWV1ZVxuICAgIGxldCBzZW5kZWQgPSBRdWV1ZS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ub24pXG4gICAgbGV0IHdhaXQgPSBRdWV1ZS5maWx0ZXIoaXRlbSA9PiAhaXRlbS5vbilcbiAgICBsZXQgbWF4ID0gVm9kVGFzay5saW1pdCAtIHNlbmRlZC5sZW5ndGhcbiAgICB3YWl0LmZvckVhY2goKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgaWYgKGlkeCA8IG1heCkge1xuICAgICAgICBpdGVtLnJ1bigpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJ1biAoKSB7XG4gICAgaWYgKHRoaXMubG9hZGVyLnJlYWR5U3RhdGUgPT09IDEpIHtcbiAgICAgIHRoaXMub24gPSB0cnVlXG4gICAgICB0aGlzLmxvYWRlci5ydW4oKVxuICAgIH0gZWxzZSB7XG4gICAgICBWb2RUYXNrLnJlbW92ZSgpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsZWFyICgpIHtcbiAgICBWb2RUYXNrLnF1ZXVlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoIWl0ZW0ubG9hZGVyLmNvbXBsZXRlKSB7XG4gICAgICAgIGl0ZW0uY2FuY2VsKClcbiAgICAgIH1cbiAgICB9KVxuICAgIFZvZFRhc2sucXVldWUubGVuZ3RoID0gMFxuICB9XG5cbiAgZ2V0IHByb21pc2UgKCkge1xuICAgIHJldHVybiB0aGlzLmxvYWRlci5wcm9taXNlXG4gIH1cbiAgZ2V0IHRpbWVTdGFtcCAoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZGVyLnRpbWVTdGFtcFxuICB9XG59XG5cblZvZFRhc2sucXVldWUgPSBbXVxuVm9kVGFzay5saW1pdCA9IDJcbndpbmRvdy5Wb2RUYXNrID0gVm9kVGFza1xuXG5leHBvcnQgZGVmYXVsdCBWb2RUYXNrXG4iLCJpbXBvcnQgVm9kVGFzayBmcm9tICcuLi9Wb2RUYXNrJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmV0Y2hMb2FkZXIge1xuICBjb25zdHJ1Y3RvciAodXJsLCByYW5nZSwgY29uZmlnID0ge30pIHtcbiAgICB0aGlzLnVybCA9IHVybFxuICAgIHRoaXMub24gPSBmYWxzZVxuICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZVxuICAgIHRoaXMuaXNTdG9wcGVkID0gZmFsc2VcbiAgICB0aGlzLnRpbWVTdGFtcCA9IERhdGUubm93KClcbiAgICBjb25zdCBfY29uZmlnID0ge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBSYW5nZTogYGJ5dGVzPSR7cmFuZ2VbMF19LSR7cmFuZ2VbMV19YFxuICAgICAgfSxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBjYWNoZTogJ2RlZmF1bHQnLFxuICAgICAgbW9kZTogJ2NvcnMnXG4gICAgfVxuXG4gICAgdGhpcy5yZXF1ZXN0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5vbiA9IHRydWVcbiAgICAgIHJldHVybiB3aW5kb3cuZmV0Y2godXJsLCBPYmplY3QuYXNzaWduKHt9LCBfY29uZmlnLCBjb25maWcpKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzID4gMjk5IHx8IHJlcy5zdGF0dXMgPCAyMDAgfHwgIXJlcy5vaykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlXG4gICAgICAgICAgVm9kVGFzay5yZW1vdmUodGhpcylcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGB1cmwgJHtyZXMuc3RhdHVzfSAke3Jlcy5zdGF0dXNUZXh0fWApKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzKVxuICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmFycmF5QnVmZmVyKCkpLnRoZW4oYnVmZmVyID0+IHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IHRydWVcbiAgICAgICAgdGhpcy5ieXRlTGVuZ3RoID0gYnVmZmVyLmJ5dGVMZW5ndGhcbiAgICAgICAgVm9kVGFzay5yZW1vdmUodGhpcylcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSByZXR1cm4ge31cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBidWZmZXIsXG4gICAgICAgICAgdGltZVN0YW1wOiB0aGlzLnRpbWVTdGFtcFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJ1biAoKSB7XG4gICAgdGhpcy5fcHJvbWlzZSA9IHRoaXMucmVxdWVzdCgpXG4gIH1cblxuICBnZXQgcmVhZHlTdGF0ZSAoKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIGNhbmNlbCAoKSB7XG4gICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlXG4gIH1cblxuICBnZXQgcHJvbWlzZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMub24gPyB0aGlzLl9wcm9taXNlIDogdGhpcy5yZXF1ZXN0KClcbiAgfVxufVxuIiwiaW1wb3J0IFZvZFRhc2sgZnJvbSAnLi4vVm9kVGFzayc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYSFJMb2FkZXIge1xuICAgIGNvbnN0cnVjdG9yICh1cmwsIHJhbmdlKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9wZW4oJ2dldCcsIHVybCk7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignUmFuZ2UnLCBgYnl0ZXM9JHtyYW5nZVswXX0tJHtyYW5nZVsxXX1gKTtcbiAgICAgICAgeGhyLm9uYWJvcnQgPSAoKSA9PiB7XG4gICAgICAgICAgICBWb2RUYXNrLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCB8fCB4aHIuc3RhdHVzID09PSAyMDYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh4aHIucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBWb2RUYXNrLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB4aHIub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIFZvZFRhc2sucmVtb3ZlKHRoaXMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5feGhyID0geGhyO1xuICAgIH1cblxuICAgIGdldCBwcm9taXNlICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb21pc2U7XG4gICAgfVxuXG4gICAgZ2V0IHJlYWR5U3RhdGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5feGhyLnJlYWR5U3RhdGU7XG4gICAgfVxuXG4gICAgcnVuICgpIHtcbiAgICAgICAgdGhpcy5feGhyLnNlbmQoKTtcbiAgICB9XG5cbiAgICBjYW5jZWwgKCkge1xuICAgICAgICB0aGlzLl94aHIuYWJvcnQoKTtcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhVmlldzRSZWFkIHtcbiAgICBjb25zdHJ1Y3RvciAoYnVmZmVyLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuX2R2ID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmluaXRQcm94eSgpO1xuICAgIH1cblxuICAgIGluaXRQcm94eSAoKSB7XG4gICAgICAgIGNvbnN0IHNpemVBcnIgPSBbOCwgMTYsIDMyXTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHsgX3N0b3JlIH0gPSB0aGlzLl9jb250ZXh0O1xuICAgICAgICBzaXplQXJyLmZvckVhY2goc2l6ZSA9PiB7XG4gICAgICAgICAgICB0aGlzW2BnZXRVaW50JHtzaXplfWBdID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICAgICAgICAgICAgICAgIGlmICghb2Zmc2V0KSB7IG9mZnNldCA9IHNlbGYuX2NvbnRleHQucmVhZE9mZnNldDsgfVxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPT09IHNlbGYuX2NvbnRleHQucmVhZE9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl9jb250ZXh0LnJlYWRPZmZzZXQgKz0gc2l6ZSAvIDg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOi/memHjOivu+WPluWtl+iKguW6jyDkuLrku4DkuYjmmK/lj43nmoQgIOWmguaenGlzTGXmmK/kvY7kvY3lrZfoioIg5bCx5pivZmFsc2Ug5oyJ54Wn55qE5piv6auY5L2N5a2X6IqCXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2R2W2BnZXRVaW50JHtzaXplfWBdKG9mZnNldCwgIV9zdG9yZS5pc0xlKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYvuW8j+WjsOaYjuS4gOS4quavlOWFtuWug+S9jeaVsOabtOW4uOeUqOivu+WPljI05L2N5pW05pWw5pa55rOVXG4gICAgICAgICAqIEBwYXJhbSBvZmZzZXRcbiAgICAgICAgICogQHBhcmFtIGlzSGlnaFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5nZXRVaW50MjQgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldFVpbnQoMjQsIG9mZnNldCwgZmFsc2UpOyAvLyDkvJror7vlj5ZVaW50MzIs5YGaIGFuZCDmk43kvZzkuYvlkI7lm57pgIDkuIDkvY3jgIJcbiAgICAgICAgICAgIHNlbGYuX2NvbnRleHQucmVhZE9mZnNldCAtPSAxO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmdldFVpbnQgPSBmdW5jdGlvbiAoc2l6ZSwgb2Zmc2V0LCBpc0hpZ2ggPSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoc2l6ZSA+IDMyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ25vdCBzdXBwb3J0ZWQgcmVhZCBzaXplJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZWFkU2l6ZSA9IDMyO1xuICAgICAgICAgICAgaWYgKCF0aGlzW2BnZXRVaW50JHtzaXplfWBdKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHNpemVBcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpemUgPCBzaXplQXJyW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkU2l6ZSA9IHNpemVBcnJbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbnVtVG9BbmQgPSBpc0hpZ2ggPyBEYXRhVmlldzRSZWFkLmdldEFuZE51bSgwLCBzaXplIC0gMSwgcmVhZFNpemUpIDogRGF0YVZpZXc0UmVhZC5nZXRBbmROdW0ocmVhZFNpemUgLSBzaXplLCByZWFkU2l6ZSAtIDEsIHJlYWRTaXplKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZltgZ2V0VWludCR7cmVhZFNpemV9YF0ob2Zmc2V0LCAhX3N0b3JlLmlzTGUpICYgbnVtVG9BbmQ7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGZbYGdldFVpbnQke3JlYWRTaXplfWBdKG9mZnNldCwgIV9zdG9yZS5pc0xlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QW5kTnVtIChiZWdpbiwgZW5kLCBzaXplID0gOCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICAgICAgbGV0IGluZGV4ID0gLS1zaXplO1xuICAgICAgICB3aGlsZSAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiBlbmQgfHwgaW5kZXggPCBiZWdpbikge1xuICAgICAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBNYXRoLnBvdygyLCBzaXplIC0gaW5kZXgpO1xuICAgICAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn0iLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4vTG9nJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cEdvbG9tYiB7XG4gICAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgLy8gdGhlIG51bWJlciBvZiBieXRlcyBsZWZ0IHRvIGV4YW1pbmUgaW4gdGhpcy5kYXRhXG4gICAgICAgIHRoaXMuYnl0ZXNBdmFpbGFibGUgPSBkYXRhLmJ5dGVMZW5ndGg7XG4gICAgICAgIC8vIHRoZSBjdXJyZW50IHdvcmQgYmVpbmcgZXhhbWluZWRcbiAgICAgICAgdGhpcy53b3JkID0gMDsgLy8gOnVpbnRcbiAgICAgICAgLy8gdGhlIG51bWJlciBvZiBiaXRzIGxlZnQgdG8gZXhhbWluZSBpbiB0aGUgY3VycmVudCB3b3JkXG4gICAgICAgIHRoaXMuYml0c0F2YWlsYWJsZSA9IDA7IC8vIDp1aW50XG4gICAgfVxuICAgIC8vICgpOnZvaWRcbiAgICBsb2FkV29yZCAoKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5kYXRhLFxuICAgICAgICAgICAgYnl0ZXNBdmFpbGFibGUgPSB0aGlzLmJ5dGVzQXZhaWxhYmxlLFxuICAgICAgICAgICAgcG9zaXRpb24gPSBkYXRhLmJ5dGVMZW5ndGggLSBieXRlc0F2YWlsYWJsZSxcbiAgICAgICAgICAgIHdvcmtpbmdCeXRlcyA9IG5ldyBVaW50OEFycmF5KDQpLFxuICAgICAgICAgICAgYXZhaWxhYmxlQnl0ZXMgPSBNYXRoLm1pbig0LCBieXRlc0F2YWlsYWJsZSk7XG4gICAgICAgIGlmIChhdmFpbGFibGVCeXRlcyA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBieXRlcyBhdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgICAgICB3b3JraW5nQnl0ZXMuc2V0KGRhdGEuc3ViYXJyYXkocG9zaXRpb24sIHBvc2l0aW9uICsgYXZhaWxhYmxlQnl0ZXMpKTtcbiAgICAgICAgdGhpcy53b3JkID0gbmV3IERhdGFWaWV3KHdvcmtpbmdCeXRlcy5idWZmZXIpLmdldFVpbnQzMigwKTtcbiAgICAgICAgLy8gdHJhY2sgdGhlIGFtb3VudCBvZiB0aGlzLmRhdGEgdGhhdCBoYXMgYmVlbiBwcm9jZXNzZWRcbiAgICAgICAgdGhpcy5iaXRzQXZhaWxhYmxlID0gYXZhaWxhYmxlQnl0ZXMgKiA4O1xuICAgICAgICB0aGlzLmJ5dGVzQXZhaWxhYmxlIC09IGF2YWlsYWJsZUJ5dGVzO1xuICAgIH1cblxuICAgIC8vIChjb3VudDppbnQpOnZvaWRcbiAgICBza2lwQml0cyAoY291bnQpIHtcbiAgICAgICAgdmFyIHNraXBCeXRlczsgLy8gOmludFxuICAgICAgICBpZiAodGhpcy5iaXRzQXZhaWxhYmxlID4gY291bnQpIHtcbiAgICAgICAgICAgIHRoaXMud29yZCA8PD0gY291bnQ7XG4gICAgICAgICAgICB0aGlzLmJpdHNBdmFpbGFibGUgLT0gY291bnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb3VudCAtPSB0aGlzLmJpdHNBdmFpbGFibGU7XG4gICAgICAgICAgICBza2lwQnl0ZXMgPSBjb3VudCA+PiAzO1xuICAgICAgICAgICAgY291bnQgLT0gKHNraXBCeXRlcyA+PiAzKTtcbiAgICAgICAgICAgIHRoaXMuYnl0ZXNBdmFpbGFibGUgLT0gc2tpcEJ5dGVzO1xuICAgICAgICAgICAgdGhpcy5sb2FkV29yZCgpO1xuICAgICAgICAgICAgdGhpcy53b3JkIDw8PSBjb3VudDtcbiAgICAgICAgICAgIHRoaXMuYml0c0F2YWlsYWJsZSAtPSBjb3VudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2tpcEJ5dGVzO1xuICAgIH1cblxuICAgIC8vIChzaXplOmludCk6dWludFxuICAgIHJlYWRCaXRzIChzaXplKSB7XG4gICAgICAgIGxldCBiaXRzID0gTWF0aC5taW4odGhpcy5iaXRzQXZhaWxhYmxlLCBzaXplKSwgLy8gOnVpbnRcbiAgICAgICAgICAgIHZhbHUgPSB0aGlzLndvcmQgPj4+ICgzMiAtIGJpdHMpOyAvLyA6dWludFxuICAgICAgICBpZiAoc2l6ZSA+IDMyKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoJ0Nhbm5vdCByZWFkIG1vcmUgdGhhbiAzMiBiaXRzIGF0IGEgdGltZScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYml0c0F2YWlsYWJsZSAtPSBiaXRzO1xuICAgICAgICBpZiAodGhpcy5iaXRzQXZhaWxhYmxlID4gMCkge1xuICAgICAgICAgICAgdGhpcy53b3JkIDw8PSBiaXRzO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYnl0ZXNBdmFpbGFibGUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRXb3JkKCk7XG4gICAgICAgIH1cbiAgICAgICAgYml0cyA9IHNpemUgLSBiaXRzO1xuICAgICAgICBpZiAoYml0cyA+IDAgJiYgdGhpcy5iaXRzQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdSA8PCBiaXRzIHwgdGhpcy5yZWFkQml0cyhiaXRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gKCk6dWludFxuICAgIHNraXBMWiAoKSB7XG4gICAgICAgIHZhciBsZWFkaW5nWmVyb0NvdW50OyAvLyA6dWludFxuICAgICAgICBmb3IgKGxlYWRpbmdaZXJvQ291bnQgPSAwOyBsZWFkaW5nWmVyb0NvdW50IDwgdGhpcy5iaXRzQXZhaWxhYmxlOyArK2xlYWRpbmdaZXJvQ291bnQpIHtcbiAgICAgICAgICAgIGlmICgwICE9PSAodGhpcy53b3JkICYgKDB4ODAwMDAwMDAgPj4+IGxlYWRpbmdaZXJvQ291bnQpKSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBmaXJzdCBiaXQgb2Ygd29ya2luZyB3b3JkIGlzIDFcbiAgICAgICAgICAgICAgICB0aGlzLndvcmQgPDw9IGxlYWRpbmdaZXJvQ291bnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5iaXRzQXZhaWxhYmxlIC09IGxlYWRpbmdaZXJvQ291bnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlYWRpbmdaZXJvQ291bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UgZXhoYXVzdGVkIHdvcmQgYW5kIHN0aWxsIGhhdmUgbm90IGZvdW5kIGEgMVxuICAgICAgICB0aGlzLmxvYWRXb3JkKCk7XG4gICAgICAgIHJldHVybiBsZWFkaW5nWmVyb0NvdW50ICsgdGhpcy5za2lwTFooKTtcbiAgICB9XG5cbiAgICAvLyAoKTp2b2lkXG4gICAgc2tpcFVFRyAoKSB7XG4gICAgICAgIHRoaXMuc2tpcEJpdHMoMSArIHRoaXMuc2tpcExaKCkpO1xuICAgIH1cblxuICAgIC8vICgpOnZvaWRcbiAgICBza2lwRUcgKCkge1xuICAgICAgICB0aGlzLnNraXBCaXRzKDEgKyB0aGlzLnNraXBMWigpKTtcbiAgICB9XG5cbiAgICAvLyAoKTp1aW50XG4gICAgcmVhZFVFRyAoKSB7XG4gICAgICAgIHZhciBjbHogPSB0aGlzLnNraXBMWigpOyAvLyA6dWludFxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkQml0cyhjbHogKyAxKSAtIDE7XG4gICAgfVxuXG4gICAgLy8gKCk6aW50XG4gICAgcmVhZEVHICgpIHtcbiAgICAgICAgdmFyIHZhbHUgPSB0aGlzLnJlYWRVRUcoKTsgLy8gOmludFxuICAgICAgICBpZiAoMHgwMSAmIHZhbHUpIHtcbiAgICAgICAgICAgIC8vIHRoZSBudW1iZXIgaXMgb2RkIGlmIHRoZSBsb3cgb3JkZXIgYml0IGlzIHNldFxuICAgICAgICAgICAgcmV0dXJuICgxICsgdmFsdSkgPj4+IDE7IC8vIGFkZCAxIHRvIG1ha2UgaXQgZXZlbiwgYW5kIGRpdmlkZSBieSAyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLTEgKiAodmFsdSA+Pj4gMSk7IC8vIGRpdmlkZSBieSB0d28gdGhlbiBtYWtlIGl0IG5lZ2F0aXZlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTb21lIGNvbnZlbmllbmNlIGZ1bmN0aW9uc1xuICAgIC8vIDpCb29sZWFuXG4gICAgcmVhZEJvb2xlYW4gKCkge1xuICAgICAgICByZXR1cm4gMSA9PT0gdGhpcy5yZWFkQml0cygxKTtcbiAgICB9XG5cbiAgICAvLyAoKTppbnRcbiAgICByZWFkVUJ5dGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkQml0cyg4KTtcbiAgICB9XG5cbiAgICAvLyAoKTppbnRcbiAgICByZWFkVVNob3J0ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZEJpdHMoMTYpO1xuICAgIH1cbiAgICAvLyAoKTppbnRcbiAgICByZWFkVUludCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRCaXRzKDMyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZHZhbmNlIHRoZSBFeHBHb2xvbWIgZGVjb2RlciBwYXN0IGEgc2NhbGluZyBsaXN0LiBUaGUgc2NhbGluZ1xuICAgICAqIGxpc3QgaXMgb3B0aW9uYWxseSB0cmFuc21pdHRlZCBhcyBwYXJ0IG9mIGEgc2VxdWVuY2UgcGFyYW1ldGVyXG4gICAgICogc2V0IGFuZCBpcyBub3QgcmVsZXZhbnQgdG8gdHJhbnNtdXhpbmcuXG4gICAgICogQHBhcmFtIGNvdW50IHtudW1iZXJ9IHRoZSBudW1iZXIgb2YgZW50cmllcyBpbiB0aGlzIHNjYWxpbmcgbGlzdFxuICAgICAqIEBzZWUgUmVjb21tZW5kYXRpb24gSVRVLVQgSC4yNjQsIFNlY3Rpb24gNy4zLjIuMS4xLjFcbiAgICAgKi9cbiAgICBza2lwU2NhbGluZ0xpc3QgKGNvdW50KSB7XG4gICAgICAgIHZhciBsYXN0U2NhbGUgPSA4LFxuICAgICAgICAgICAgbmV4dFNjYWxlID0gOCxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBkZWx0YVNjYWxlO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAgICAgaWYgKG5leHRTY2FsZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGRlbHRhU2NhbGUgPSB0aGlzLnJlYWRFRygpO1xuICAgICAgICAgICAgICAgIG5leHRTY2FsZSA9IChsYXN0U2NhbGUgKyBkZWx0YVNjYWxlICsgMjU2KSAlIDI1NjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhc3RTY2FsZSA9IChuZXh0U2NhbGUgPT09IDApXG4gICAgICAgICAgICAgICAgPyBsYXN0U2NhbGVcbiAgICAgICAgICAgICAgICA6IG5leHRTY2FsZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWQgYSBzZXF1ZW5jZSBwYXJhbWV0ZXIgc2V0IGFuZCByZXR1cm4gc29tZSBpbnRlcmVzdGluZyB2aWRlb1xuICAgICAqIHByb3BlcnRpZXMuIEEgc2VxdWVuY2UgcGFyYW1ldGVyIHNldCBpcyB0aGUgSDI2NCBtZXRhZGF0YSB0aGF0XG4gICAgICogZGVzY3JpYmVzIHRoZSBwcm9wZXJ0aWVzIG9mIHVwY29taW5nIHZpZGVvIGZyYW1lcy5cbiAgICAgKiBAcGFyYW0gZGF0YSB7VWludDhBcnJheX0gdGhlIGJ5dGVzIG9mIGEgc2VxdWVuY2UgcGFyYW1ldGVyIHNldFxuICAgICAqIEByZXR1cm4ge29iamVjdH0gYW4gb2JqZWN0IHdpdGggY29uZmlndXJhdGlvbiBwYXJzZWQgZnJvbSB0aGVcbiAgICAgKiBzZXF1ZW5jZSBwYXJhbWV0ZXIgc2V0LCBpbmNsdWRpbmcgdGhlIGRpbWVuc2lvbnMgb2YgdGhlXG4gICAgICogYXNzb2NpYXRlZCB2aWRlbyBmcmFtZXMuXG4gICAgICovXG4gICAgcmVhZFNQUyAoKSB7XG4gICAgICAgIHZhciBmcmFtZUNyb3BMZWZ0T2Zmc2V0ID0gMCxcbiAgICAgICAgICAgIGZyYW1lQ3JvcFJpZ2h0T2Zmc2V0ID0gMCxcbiAgICAgICAgICAgIGZyYW1lQ3JvcFRvcE9mZnNldCA9IDAsXG4gICAgICAgICAgICBmcmFtZUNyb3BCb3R0b21PZmZzZXQgPSAwLFxuICAgICAgICAgICAgcHJvZmlsZUlkYyxcbiAgICAgICAgICAgIC8vIHByb2ZpbGVDb21wYXQsXG4gICAgICAgICAgICBsZXZlbElkYyxcbiAgICAgICAgICAgIGNvZGVjV2lkdGgsXG4gICAgICAgICAgICBjb2RlY0hlaWdodCxcbiAgICAgICAgICAgIHByZXNlbnRXaWR0aCxcbiAgICAgICAgICAgIG51bVJlZkZyYW1lc0luUGljT3JkZXJDbnRDeWNsZSxcbiAgICAgICAgICAgIHBpY1dpZHRoSW5NYnNNaW51czEsXG4gICAgICAgICAgICBwaWNIZWlnaHRJbk1hcFVuaXRzTWludXMxLFxuICAgICAgICAgICAgZnJhbWVNYnNPbmx5RmxhZyxcbiAgICAgICAgICAgIHNjYWxpbmdMaXN0Q291bnQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgcmVhZFVCeXRlID0gdGhpcy5yZWFkVUJ5dGUuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHJlYWRCaXRzID0gdGhpcy5yZWFkQml0cy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgcmVhZFVFRyA9IHRoaXMucmVhZFVFRy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgcmVhZEJvb2xlYW4gPSB0aGlzLnJlYWRCb29sZWFuLmJpbmQodGhpcyksXG4gICAgICAgICAgICBza2lwQml0cyA9IHRoaXMuc2tpcEJpdHMuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHNraXBFRyA9IHRoaXMuc2tpcEVHLmJpbmQodGhpcyksXG4gICAgICAgICAgICBza2lwVUVHID0gdGhpcy5za2lwVUVHLmJpbmQodGhpcyksXG4gICAgICAgICAgICBza2lwU2NhbGluZ0xpc3QgPSB0aGlzLnNraXBTY2FsaW5nTGlzdC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHJlYWRVQnl0ZSgpO1xuICAgICAgICBwcm9maWxlSWRjID0gcmVhZFVCeXRlKCk7IC8vIHByb2ZpbGVfaWRjXG4gICAgICAgIHJlYWRCaXRzKDUpOyAvLyBwcm9maWxlQ29tcGF0IGNvbnN0cmFpbnRfc2V0WzAtNF1fZmxhZywgdSg1KVxuICAgICAgICBza2lwQml0cygzKTsgLy8gcmVzZXJ2ZWRfemVyb18zYml0cyB1KDMpLFxuICAgICAgICBsZXZlbElkYyA9IHJlYWRVQnl0ZSgpOyAvLyBsZXZlbF9pZGMgdSg4KVxuICAgICAgICBza2lwVUVHKCk7IC8vIHNlcV9wYXJhbWV0ZXJfc2V0X2lkXG4gICAgICAgIGxldCBjaHJvbWFGb3JtYXRJZGMgPSAxO1xuICAgICAgICBsZXQgY2hyb21hRm9ybWF0ID0gNDIwO1xuICAgICAgICBsZXQgY2hyb21hRm9ybWF0cyA9IFswLCA0MjAsIDQyMiwgNDQ0XTtcbiAgICAgICAgbGV0IGJpdERlcHRoTHVtYSA9IDg7XG4gICAgICAgIGNvbnN0IHByb2ZpbGVJZGNzID0gWzEwMCwgMTEwLCAxMjIsIDI0NCwgNDQsIDgzLCA4NiwgMTE4LCAxMjhdO1xuICAgICAgICAvLyBzb21lIHByb2ZpbGVzIGhhdmUgbW9yZSBvcHRpb25hbCBkYXRhIHdlIGRvbid0IG5lZWRcbiAgICAgICAgaWYgKHByb2ZpbGVJZGNzLmluY2x1ZGVzKHByb2ZpbGVJZGMpKSB7XG4gICAgICAgICAgICBjaHJvbWFGb3JtYXRJZGMgPSByZWFkVUVHKCk7XG4gICAgICAgICAgICBpZiAoY2hyb21hRm9ybWF0SWRjID09PSAzKSB7XG4gICAgICAgICAgICAgICAgc2tpcEJpdHMoMSk7IC8vIHNlcGFyYXRlX2NvbG91cl9wbGFuZV9mbGFnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hyb21hRm9ybWF0SWRjIDw9IDMpIHtcbiAgICAgICAgICAgICAgICBjaHJvbWFGb3JtYXQgPSBjaHJvbWFGb3JtYXRzW2Nocm9tYUZvcm1hdElkY107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiaXREZXB0aEx1bWEgPSByZWFkVUVHKCkgKyA4OyAvLyBiaXRfZGVwdGhfbHVtYV9taW51czhcbiAgICAgICAgICAgIHNraXBVRUcoKTsgLy8gYml0X2RlcHRoX2Nocm9tYV9taW51czhcbiAgICAgICAgICAgIHNraXBCaXRzKDEpOyAvLyBxcHByaW1lX3lfemVyb190cmFuc2Zvcm1fYnlwYXNzX2ZsYWdcbiAgICAgICAgICAgIGlmIChyZWFkQm9vbGVhbigpKSB7IC8vIHNlcV9zY2FsaW5nX21hdHJpeF9wcmVzZW50X2ZsYWdcbiAgICAgICAgICAgICAgICBzY2FsaW5nTGlzdENvdW50ID0gKGNocm9tYUZvcm1hdElkYyAhPT0gMylcbiAgICAgICAgICAgICAgICAgICAgPyA4XG4gICAgICAgICAgICAgICAgICAgIDogMTI7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNjYWxpbmdMaXN0Q291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVhZEJvb2xlYW4oKSkgeyAvLyBzZXFfc2NhbGluZ19saXN0X3ByZXNlbnRfZmxhZ1sgaSBdXG4gICAgICAgICAgICAgICAgICAgICAgICBpIDwgNiA/IHNraXBTY2FsaW5nTGlzdCgxNikgOiBza2lwU2NhbGluZ0xpc3QoNjQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNraXBVRUcoKTsgLy8gbG9nMl9tYXhfZnJhbWVfbnVtX21pbnVzNFxuICAgICAgICB2YXIgcGljT3JkZXJDbnRUeXBlID0gcmVhZFVFRygpO1xuICAgICAgICBpZiAocGljT3JkZXJDbnRUeXBlID09PSAwKSB7XG4gICAgICAgICAgICByZWFkVUVHKCk7IC8vIGxvZzJfbWF4X3BpY19vcmRlcl9jbnRfbHNiX21pbnVzNFxuICAgICAgICB9IGVsc2UgaWYgKHBpY09yZGVyQ250VHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgc2tpcEJpdHMoMSk7IC8vIGRlbHRhX3BpY19vcmRlcl9hbHdheXNfemVyb19mbGFnXG4gICAgICAgICAgICBza2lwRUcoKTsgLy8gb2Zmc2V0X2Zvcl9ub25fcmVmX3BpY1xuICAgICAgICAgICAgc2tpcEVHKCk7IC8vIG9mZnNldF9mb3JfdG9wX3RvX2JvdHRvbV9maWVsZFxuICAgICAgICAgICAgbnVtUmVmRnJhbWVzSW5QaWNPcmRlckNudEN5Y2xlID0gcmVhZFVFRygpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bVJlZkZyYW1lc0luUGljT3JkZXJDbnRDeWNsZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2tpcEVHKCk7IC8vIG9mZnNldF9mb3JfcmVmX2ZyYW1lWyBpIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVmRnJhbWVzID0gcmVhZFVFRygpOyAvLyBtYXhfbnVtX3JlZl9mcmFtZXNcbiAgICAgICAgc2tpcEJpdHMoMSk7IC8vIGdhcHNfaW5fZnJhbWVfbnVtX3ZhbHVlX2FsbG93ZWRfZmxhZ1xuICAgICAgICBwaWNXaWR0aEluTWJzTWludXMxID0gcmVhZFVFRygpO1xuICAgICAgICBwaWNIZWlnaHRJbk1hcFVuaXRzTWludXMxID0gcmVhZFVFRygpO1xuICAgICAgICBmcmFtZU1ic09ubHlGbGFnID0gcmVhZEJpdHMoMSk7XG4gICAgICAgIGlmIChmcmFtZU1ic09ubHlGbGFnID09PSAwKSB7XG4gICAgICAgICAgICBza2lwQml0cygxKTsgLy8gbWJfYWRhcHRpdmVfZnJhbWVfZmllbGRfZmxhZ1xuICAgICAgICB9XG4gICAgICAgIHNraXBCaXRzKDEpOyAvLyBkaXJlY3RfOHg4X2luZmVyZW5jZV9mbGFnXG4gICAgICAgIGlmIChyZWFkQm9vbGVhbigpKSB7IC8vIGZyYW1lX2Nyb3BwaW5nX2ZsYWdcbiAgICAgICAgICAgIGZyYW1lQ3JvcExlZnRPZmZzZXQgPSByZWFkVUVHKCk7XG4gICAgICAgICAgICBmcmFtZUNyb3BSaWdodE9mZnNldCA9IHJlYWRVRUcoKTtcbiAgICAgICAgICAgIGZyYW1lQ3JvcFRvcE9mZnNldCA9IHJlYWRVRUcoKTtcbiAgICAgICAgICAgIGZyYW1lQ3JvcEJvdHRvbU9mZnNldCA9IHJlYWRVRUcoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZnJhbWVSYXRlID0ge1xuICAgICAgICAgICAgZnBzOiAwLFxuICAgICAgICAgICAgZnBzRml4ZWQ6IHRydWUsXG4gICAgICAgICAgICBmcHNOdW06IDAsXG4gICAgICAgICAgICBmcHNEZW46IDAsXG4gICAgICAgIH07XG4gICAgICAgIGxldCBwaXhlbFJhdGlvID0gWzEsIDFdO1xuICAgICAgICBpZiAocmVhZEJvb2xlYW4oKSkge1xuICAgICAgICAgICAgLy8gdnVpX3BhcmFtZXRlcnNfcHJlc2VudF9mbGFnXG4gICAgICAgICAgICBpZiAocmVhZEJvb2xlYW4oKSkge1xuICAgICAgICAgICAgICAgIC8vIGFzcGVjdF9yYXRpb19pbmZvX3ByZXNlbnRfZmxhZ1xuICAgICAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvSWRjID0gcmVhZFVCeXRlKCk7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChhc3BlY3RSYXRpb0lkYykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbFJhdGlvID0gWzEsIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbMTIsIDExXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbFJhdGlvID0gWzEwLCAxMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IFsxNiwgMTFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbNDAsIDMzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbFJhdGlvID0gWzI0LCAxMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IFsyMCwgMTFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbMzIsIDExXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbFJhdGlvID0gWzgwLCAzM107XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbMTgsIDExXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IFsxNSwgMTFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbFJhdGlvID0gWzY0LCAzM107XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbMTYwLCA5OV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbNCwgM107XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbMywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbMiwgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyNTU6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZFVCeXRlKCkgPDwgOCB8IHJlYWRVQnl0ZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRVQnl0ZSgpIDw8IDggfCByZWFkVUJ5dGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZWFkQm9vbGVhbigpKSB7IC8vIG92ZXJzY2FuX2luZm9fcHJlc2VudF9mbGFnXG4gICAgICAgICAgICAgICAgcmVhZEJvb2xlYW4oKTsgLy8gb3ZlcnNjYW5fYXBwcm9wcmlhdGVfZmxhZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlYWRCb29sZWFuKCkpIHsgLy8gdmlkZW9fc2lnbmFsX3R5cGVfcHJlc2VudF9mbGFnXG4gICAgICAgICAgICAgICAgcmVhZEJpdHMoNCk7IC8vIHZpZGVvX2Zvcm1hdCAmIHZpZGVvX2Z1bGxfcmFuZ2VfZmxhZ1xuICAgICAgICAgICAgICAgIGlmIChyZWFkQm9vbGVhbigpKSB7IC8vIGNvbG91cl9kZXNjcmlwdGlvbl9wcmVzZW50X2ZsYWdcbiAgICAgICAgICAgICAgICAgICAgcmVhZEJpdHMoMjQpOyAvLyBjb2xvdXJfcHJpbWFyaWVzICYgdHJhbnNmZXJfY2hhcmFjdGVyaXN0aWNzICYgbWF0cml4X2NvZWZmaWNpZW50c1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZWFkQm9vbGVhbigpKSB7IC8vIGNocm9tYV9sb2NfaW5mb19wcmVzZW50X2ZsYWdcbiAgICAgICAgICAgICAgICByZWFkVUVHKCk7IC8vIGNocm9tYV9zYW1wbGVfbG9jX3R5cGVfdG9wX2ZpZWxkXG4gICAgICAgICAgICAgICAgcmVhZFVFRygpOyAvLyBjaHJvbWFfc2FtcGxlX2xvY190eXBlX2JvdHRvbV9maWVsZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVhZEJvb2xlYW4oKSkgeyAvLyB0aW1pbmdfaW5mb19wcmVzZW50X2ZsYWdcbiAgICAgICAgICAgICAgICBjb25zdCBudW1Vbml0SW5UaWNrID0gKHJlYWRCaXRzKDMyKSk7XG4gICAgICAgICAgICAgICAgZnJhbWVSYXRlLmZwc051bSA9IChyZWFkQml0cygzMikpO1xuICAgICAgICAgICAgICAgIGZyYW1lUmF0ZS5maXhlZCA9IHRoaXMucmVhZEJvb2xlYW4oKTtcbiAgICAgICAgICAgICAgICBmcmFtZVJhdGUuZnBzRGVuID0gbnVtVW5pdEluVGljayAqIDI7XG4gICAgICAgICAgICAgICAgZnJhbWVSYXRlLmZwcyA9IGZyYW1lUmF0ZS5mcHNOdW0gLyBmcmFtZVJhdGUuZnBzRGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGNyb3BVbml0WCA9IDAsIGNyb3BVbml0WSA9IDA7XG4gICAgICAgICAgICBpZiAoY2hyb21hRm9ybWF0SWRjID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY3JvcFVuaXRYID0gMTtcbiAgICAgICAgICAgICAgICBjcm9wVW5pdFggPSAyIC0gZnJhbWVNYnNPbmx5RmxhZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHN1YldjID0gY2hyb21hRm9ybWF0SWRjID09PSAzID8gMSA6IDI7XG4gICAgICAgICAgICAgICAgbGV0IHN1YkhjID0gY2hyb21hRm9ybWF0SWRjID09PSAxID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgY3JvcFVuaXRYID0gc3ViV2M7XG4gICAgICAgICAgICAgICAgY3JvcFVuaXRZID0gc3ViSGMgKiAoMiAtIGZyYW1lTWJzT25seUZsYWcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb2RlY1dpZHRoID0gKHBpY1dpZHRoSW5NYnNNaW51czEgKyAxKSAqIDE2O1xuICAgICAgICAgICAgY29kZWNIZWlnaHQgPSAoMiAtIGZyYW1lTWJzT25seUZsYWcpICogKChwaWNIZWlnaHRJbk1hcFVuaXRzTWludXMxICsgMSkgKiAxNik7XG5cbiAgICAgICAgICAgIGNvZGVjV2lkdGggLT0gKGZyYW1lQ3JvcExlZnRPZmZzZXQgKyBmcmFtZUNyb3BSaWdodE9mZnNldCkgKiBjcm9wVW5pdFg7XG4gICAgICAgICAgICBjb2RlY0hlaWdodCAtPSAoZnJhbWVDcm9wVG9wT2Zmc2V0ICsgZnJhbWVDcm9wQm90dG9tT2Zmc2V0KSAqIGNyb3BVbml0WTtcblxuICAgICAgICAgICAgY29uc3QgcGl4ZWxTY2FsZSA9IHBpeGVsUmF0aW9bMF0gPT09IDEgfHwgcGl4ZWxSYXRpb1sxXSA9PT0gMVxuICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgIDogcGl4ZWxSYXRpb1swXSAvIHBpeGVsUmF0aW9bMV07XG5cbiAgICAgICAgICAgIHByZXNlbnRXaWR0aCA9IHBpeGVsU2NhbGUgKiBjb2RlY1dpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9maWxlSWRjLFxuICAgICAgICAgICAgbGV2ZWxJZGMsXG4gICAgICAgICAgICByZWZGcmFtZXMsXG4gICAgICAgICAgICBjaHJvbWFGb3JtYXQsXG4gICAgICAgICAgICBiaXREZXB0aDogYml0RGVwdGhMdW1hLFxuICAgICAgICAgICAgZnJhbWVSYXRlLFxuICAgICAgICAgICAgY29kZWNTaXplOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNvZGVjV2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjb2RlY0hlaWdodCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmVzZW50U2l6ZToge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBwcmVzZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjb2RlY0hlaWdodCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aWR0aDogTWF0aC5jZWlsKCgoKHBpY1dpZHRoSW5NYnNNaW51czEgKyAxKSAqIDE2KSAtIGZyYW1lQ3JvcExlZnRPZmZzZXQgKiAyIC0gZnJhbWVDcm9wUmlnaHRPZmZzZXQgKiAyKSksXG4gICAgICAgICAgICBoZWlnaHQ6ICgoMiAtIGZyYW1lTWJzT25seUZsYWcpICogKHBpY0hlaWdodEluTWFwVW5pdHNNaW51czEgKyAxKSAqIDE2KSAtICgoXG4gICAgICAgICAgICAgICAgZnJhbWVNYnNPbmx5RmxhZ1xuICAgICAgICAgICAgICAgICAgICA/IDJcbiAgICAgICAgICAgICAgICAgICAgOiA0KSAqIChmcmFtZUNyb3BUb3BPZmZzZXQgKyBmcmFtZUNyb3BCb3R0b21PZmZzZXQpKSxcbiAgICAgICAgICAgIHBpeGVsUmF0aW86IHBpeGVsUmF0aW8sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVhZFNsaWNlVHlwZSAoKSB7XG4gICAgICAgIC8vIHNraXAgTkFMdSB0eXBlXG4gICAgICAgIHRoaXMucmVhZFVCeXRlKCk7XG4gICAgICAgIC8vIGRpc2NhcmQgZmlyc3RfbWJfaW5fc2xpY2VcbiAgICAgICAgdGhpcy5yZWFkVUVHKCk7XG4gICAgICAgIC8vIHJldHVybiBzbGljZV90eXBlXG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRVRUcoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuICAgIHN0YXRpYyBsb2cgKC4uLmFyZ3MpIHtcbiAgICAgICAgd2luZG93LmNvbnNvbGUubG9nLmFwcGx5KHdpbmRvdywgYXJncyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGluZm8gKC4uLmFyZ3MpIHtcbiAgICAgICAgd2luZG93LmNvbnNvbGUuaW5mby5hcHBseSh3aW5kb3csIGFyZ3MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBlcnJvciAoLi4uYXJncykge1xuICAgICAgICB3aW5kb3cuY29uc29sZS5lcnJvci5hcHBseSh3aW5kb3csIGFyZ3MpO1xuICAgIH1cblxuICAgIHN0YXRpYyB3YXJuICguLi5hcmdzKSB7XG4gICAgICAgIHdpbmRvdy5jb25zb2xlLndhcm4uYXBwbHkod2luZG93LCBhcmdzKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIEBhdXRob3IgZnV5dWhhb1xuICovXG5cbmNvbnN0IG5hdGl2ZVNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG5cbmNsYXNzIE9ic2VydmVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuZm5JZCA9IDFcbiAgICB0aGlzLl9saXN0ZW5lcklkTWFwID0ge31cbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fVxuICB9XG4gIG9uIChrZXksIGZuKSB7XG4gICAgY29uc3QgZm5JZCA9IHRoaXMuZm5JZCsrXG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fZ2V0TGlzdGVuZXJzQnlLZXkoa2V5KVxuICAgIHRoaXMuX2xpc3RlbmVySWRNYXBbZm5JZF0gPSBmblxuICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgIGxpc3RlbmVycy51bnNoaWZ0KGZuSWQpXG4gICAgICByZXR1cm4gZm5JZFxuICAgIH1cbiAgICB0aGlzLl9saXN0ZW5lcnNba2V5XSA9IFtmbklkXVxuICAgIHJldHVybiBmbklkXG4gIH1cbiAgZW1pdCAoa2V5KSB7XG4gICAgY29uc3QgYXJncyA9IG5hdGl2ZVNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2dldExpc3RlbmVyc0J5S2V5KGtleSkgfHwgW11cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBmbiA9IHRoaXMuX2dldExpc3RlbmVyQnlJZChsaXN0ZW5lcnNbaV0pXG4gICAgICBmbiAmJiBmbi5hcHBseShudWxsLCBhcmdzKVxuICAgIH1cbiAgfVxuICBvbmNlIChrZXksIGZuKSB7XG4gICAgY29uc3QgZm5JZCA9IHRoaXMuZm5JZCsrXG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fZ2V0TGlzdGVuZXJzQnlLZXkoa2V5KVxuICAgIGNvbnN0IF90aGlzID0gdGhpc1xuXG4gICAgZnVuY3Rpb24gb25jZUZ1bmMgKCkge1xuICAgICAgY29uc3QgYXJncyA9IG5hdGl2ZVNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICAgICAgZm4uYXBwbHkobnVsbCwgYXJncylcbiAgICAgIF90aGlzLm9mZihrZXksIGZuSWQpXG4gICAgfVxuICAgIHRoaXMuX2xpc3RlbmVySWRNYXBbZm5JZF0gPSBvbmNlRnVuY1xuICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgIGxpc3RlbmVycy51bnNoaWZ0KGZuSWQpXG4gICAgICByZXR1cm4gZm5JZFxuICAgIH1cbiAgICB0aGlzLl9saXN0ZW5lcnNba2V5XSA9IFtmbklkXVxuICAgIHJldHVybiBmbklkXG4gIH1cbiAgb2ZmIChrZXksIGZuSWQpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLl9nZXRMaXN0ZW5lcnNCeUtleShrZXkpXG4gICAgY29uc3QgZm4gPSB0aGlzLl9nZXRMaXN0ZW5lckJ5SWQoZm5JZClcbiAgICBpZiAoIWZuIHx8ICFsaXN0ZW5lcnMgfHwgbGlzdGVuZXJzLmluZGV4T2YoZm5JZCkgPCAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVySWRNYXBbZm5JZF1cbiAgICBpZiAobGlzdGVuZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyc1trZXldXG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3RlbmVyc1tsaXN0ZW5lcnMuaW5kZXhPZihmbklkKV0gPSB1bmRlZmluZWRcbiAgICB9XG4gIH1cbiAgX2dldExpc3RlbmVyc0J5S2V5IChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdGVuZXJzW2tleV1cbiAgfVxuICBfZ2V0TGlzdGVuZXJCeUlkIChmbklkKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3RlbmVySWRNYXBbZm5JZF1cbiAgfVxuICBmbHVzaCAoa2V5KSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fZ2V0TGlzdGVuZXJzQnlLZXkoa2V5KVxuICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGZuSWQgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJJZE1hcFtmbklkXVxuICAgICAgfSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcnNba2V5XVxuICAgIH1cbiAgfVxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSBudWxsXG4gICAgdGhpcy5fbGlzdGVuZXJJZE1hcCA9IG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgT2JzZXJ2ZXIoKVxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmNsYXNzIFVURjgge1xuICAgIHN0YXRpYyBkZWNvZGUodWludDhhcnJheSkge1xuICAgICAgICBjb25zdCBvdXQgPSBbXTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSB1aW50OGFycmF5O1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHVpbnQ4YXJyYXkubGVuZ3RoO1xuXG4gICAgICAgIHdoaWxlIChpIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaW5wdXRbaV0gPCAweDgwKSB7XG4gICAgICAgICAgICAgICAgb3V0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShpbnB1dFtpXSkpO1xuICAgICAgICAgICAgICAgICsraTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXRbaV0gPCAweEMwKSB7XG4gICAgICAgICAgICAgICAgLy8gZmFsbHRocm91Z2hcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXRbaV0gPCAweEUwKSB7XG4gICAgICAgICAgICAgICAgaWYgKFVURjguX2NoZWNrQ29udGludWF0aW9uKGlucHV0LCBpLCAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1Y3M0ID0gKGlucHV0W2ldICYgMHgxRikgPDwgNiB8IChpbnB1dFtpICsgMV0gJiAweDNGKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVjczQgPj0gMHg4MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSh1Y3M0ICYgMHhGRkZGKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpICs9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXRbaV0gPCAweEYwKSB7XG4gICAgICAgICAgICAgICAgaWYgKFVURjguX2NoZWNrQ29udGludWF0aW9uKGlucHV0LCBpLCAyKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1Y3M0ID0gKGlucHV0W2ldICYgMHhGKSA8PCAxMiB8IChpbnB1dFtpICsgMV0gJiAweDNGKSA8PCA2IHwgaW5wdXRbaSArIDJdICYgMHgzRjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVjczQgPj0gMHg4MDAgJiYgKHVjczQgJiAweEY4MDApICE9PSAweEQ4MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUodWNzNCAmIDB4RkZGRikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSArPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlucHV0W2ldIDwgMHhGOCkge1xuICAgICAgICAgICAgICAgIGlmIChVVEY4Ll9jaGVja0NvbnRpbnVhdGlvbihpbnB1dCwgaSwgMykpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVjczQgPSAoaW5wdXRbaV0gJiAweDcpIDw8IDE4IHwgKGlucHV0W2kgKyAxXSAmIDB4M0YpIDw8IDEyIHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChpbnB1dFtpICsgMl0gJiAweDNGKSA8PCA2IHwgKGlucHV0W2kgKyAzXSAmIDB4M0YpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodWNzNCA+IDB4MTAwMDAgJiYgdWNzNCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1Y3M0IC09IDB4MTAwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKCh1Y3M0ID4+PiAxMCkgfCAweEQ4MDApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoKHVjczQgJiAweDNGRikgfCAweERDMDApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgKz0gNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSgweEZGRkQpKTtcbiAgICAgICAgICAgICsraTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXQuam9pbignJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIF9jaGVja0NvbnRpbnVhdGlvbih1aW50OGFycmF5LCBzdGFydCwgY2hlY2tMZW5ndGgpIHtcbiAgICAgICAgbGV0IGFycmF5ID0gdWludDhhcnJheTtcbiAgICAgICAgaWYgKHN0YXJ0ICsgY2hlY2tMZW5ndGggPCBhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHdoaWxlIChjaGVja0xlbmd0aC0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKChhcnJheVsrK3N0YXJ0XSAmIDB4QzApICE9PSAweDgwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVVRGODsiLCJleHBvcnQgZnVuY3Rpb24gZGVib3VuY2UgKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgIHZhciB0aW1lb3V0LCByZXN1bHQ7XG5cblxuICAgIHZhciBkZWJvdW5jZWQgPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICBpZiAodGltZW91dCkgeyBjbGVhclRpbWVvdXQodGltZW91dCk7IH1cbiAgICAgICAgaWYgKGltbWVkaWF0ZSkge1xuICAgICAgICAgICAgdmFyIGNhbGxOb3cgPSAhdGltZW91dDtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmMsIHdhaXQpO1xuICAgICAgICAgICAgaWYgKGNhbGxOb3cpIHsgcmVzdWx0ID0gZnVuYygpOyB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jLCB3YWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIGRlYm91bmNlZC5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgfTtcblxuICAgIHJldHVybiBkZWJvdW5jZWQ7XG5cbn1cblxuZXhwb3J0IGNvbnN0IGNhY2hlV3JhcHBlciA9IChmbikgPT4ge1xuXG4gICAgY29uc3QgY2FjaGUgPSB7fTtcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gYXJncy5yZWR1Y2UoKHByZSwgY3VyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYCR7cHJlfV8ke2N1cn1gO1xuICAgICAgICB9LCAnJyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZuKC4uLmFyZ3MpO1xuICAgICAgICBpZiAoY2FjaGVba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlW2tleV0gPSByZXN1bHQ7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfTtcbn07IiwiLy8g5a2X6IqC5bqP5piv5ZCm5pivIOWwj+Wtl+iKguW6jyDmmK/lj43nmoRcbmNvbnN0IGxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBidWYgPSBuZXcgQXJyYXlCdWZmZXIoMik7XG4gICAgKG5ldyBEYXRhVmlldyhidWYpKS5zZXRJbnQxNigwLCAyNTYsIHRydWUpIC8vIGxpdHRsZS1lbmRpYW4gd3JpdGVcbiAgICByZXR1cm4gKG5ldyBJbnQxNkFycmF5KGJ1ZikpWzBdID09PSAyNTYgLy8gcGxhdGZvcm0tc3BlYyByZWFkLCBpZiBlcXVhbCB0aGVuIExFXG59KSgpXG5jb25zdCBzbmlmZmVyID0ge1xuICAgIGdldCBkZXZpY2UgKCkge1xuICAgICAgICBsZXQgciA9IHNuaWZmZXIub3M7XG4gICAgICAgIHJldHVybiByLmlzUGMgPyAncGMnIDogci5pc1RhYmxldCA/ICd0YWJsZXQnIDogJ21vYmlsZSc7XG4gICAgfSxcbiAgICBnZXQgYnJvd3NlciAoKSB7XG4gICAgICAgIGxldCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IHJlZyA9IHtcbiAgICAgICAgICAgIGllOiAvcnY6KFtcXGQuXSspXFwpIGxpa2UgZ2Vja28vLFxuICAgICAgICAgICAgZmlyZm94OiAvZmlyZWZveFxcLyhbXFxkLl0rKS8sXG4gICAgICAgICAgICBjaHJvbWU6IC9jaHJvbWVcXC8oW1xcZC5dKykvLFxuICAgICAgICAgICAgb3BlcmE6IC9vcGVyYS4oW1xcZC5dKykvLFxuICAgICAgICAgICAgc2FmYXJpOiAvdmVyc2lvblxcLyhbXFxkLl0rKS4qc2FmYXJpLyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFtdLmNvbmNhdChPYmplY3Qua2V5cyhyZWcpLmZpbHRlcihrZXkgPT4gcmVnW2tleV0udGVzdCh1YSkpKVswXTtcbiAgICB9LFxuICAgIGdldCBvcyAoKSB7XG4gICAgICAgIGxldCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAgICAgICBpc1dpbmRvd3NQaG9uZSA9IC8oPzpXaW5kb3dzIFBob25lKS8udGVzdCh1YSksXG4gICAgICAgICAgICBpc1N5bWJpYW4gPSAvKD86U3ltYmlhbk9TKS8udGVzdCh1YSkgfHwgaXNXaW5kb3dzUGhvbmUsXG4gICAgICAgICAgICBpc0FuZHJvaWQgPSAvKD86QW5kcm9pZCkvLnRlc3QodWEpLFxuICAgICAgICAgICAgaXNGaXJlRm94ID0gLyg/OkZpcmVmb3gpLy50ZXN0KHVhKSxcbiAgICAgICAgICAgIGlzVGFibGV0ID0gLyg/OmlQYWR8UGxheUJvb2spLy50ZXN0KHVhKSB8fCAoaXNBbmRyb2lkICYmICEvKD86TW9iaWxlKS8udGVzdCh1YSkpIHx8IChpc0ZpcmVGb3ggJiYgLyg/OlRhYmxldCkvLnRlc3QodWEpKSxcbiAgICAgICAgICAgIGlzUGhvbmUgPSAvKD86aVBob25lKS8udGVzdCh1YSkgJiYgIWlzVGFibGV0LFxuICAgICAgICAgICAgaXNQYyA9ICFpc1Bob25lICYmICFpc0FuZHJvaWQgJiYgIWlzU3ltYmlhbjtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzVGFibGV0LFxuICAgICAgICAgICAgaXNQaG9uZSxcbiAgICAgICAgICAgIGlzQW5kcm9pZCxcbiAgICAgICAgICAgIGlzUGMsXG4gICAgICAgICAgICBpc1N5bWJpYW4sXG4gICAgICAgICAgICBpc1dpbmRvd3NQaG9uZSxcbiAgICAgICAgICAgIGlzRmlyZUZveCxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGdldCBpc0xlKCkge1xuICAgICAgICByZXR1cm4gbGVcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzbmlmZmVyO1xuIiwiaW1wb3J0IENvbmNhdCBmcm9tICdjb25jYXQtdHlwZWQtYXJyYXknO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlscy9Mb2cnO1xuY2xhc3MgQnVmZmVyIHtcbiAgICBjb25zdHJ1Y3RvciAoYnVmZmVyKSB7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyIHx8IG5ldyBVaW50OEFycmF5KDApO1xuICAgIH1cbiAgICB3cml0ZSAoLi4uYnVmZmVyKSB7XG4gICAgICAgIGJ1ZmZlci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IENvbmNhdChVaW50OEFycmF5LCB0aGlzLmJ1ZmZlciwgaXRlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIExvZ2dlci5lcnJvcihpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyB3cml0ZVVpbnQzMiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFtcbiAgICAgICAgICAgIHZhbHVlID4+IDI0LFxuICAgICAgICAgICAgKHZhbHVlID4+IDE2KSAmIDB4ZmYsXG4gICAgICAgICAgICAodmFsdWUgPj4gOCkgJiAweGZmLFxuICAgICAgICAgICAgdmFsdWUgJiAweGZmLFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgc3RhdGljIHJlYWRBc0ludCAoYXJyKSB7XG4gICAgICAgIGxldCB0ZW1wID0gJyc7XG4gICAgICAgIGZ1bmN0aW9uIHBhZFN0YXJ0NEhleCAoaGV4TnVtKSB7XG4gICAgICAgICAgICBsZXQgaGV4U3RyID0gaGV4TnVtLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgIHJldHVybiBoZXhTdHIucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgfVxuICAgICAgICBhcnIuZm9yRWFjaChudW0gPT4ge1xuICAgICAgICAgICAgdGVtcCArPSBwYWRTdGFydDRIZXgobnVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh0ZW1wLCAxNik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdWZmZXI7XG4iLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUGxheWVyXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=