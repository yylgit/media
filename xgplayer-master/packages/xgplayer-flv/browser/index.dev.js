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

module.exports = JSON.parse("{\"name\":\"xgplayer-flv\",\"version\":\"1.1.5\",\"description\":\"flv demuxer for xgplayer\",\"main\":\"./dist/index.js\",\"scripts\":{\"test\":\"echo \\\"Error: no test specified\\\" && exit 1\",\"prepare\":\"npm run build\",\"dev\":\"webpack --progress --display-chunks --watch --config ./webpack.config.dev.js\",\"build\":\"webpack --progress --display-chunks -p\",\"watch\":\"webpack --progress --display-chunks -p --watch\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/bytedance/xgplayer.git\"},\"keywords\":[],\"author\":\"leo\",\"license\":\"MIT\",\"devDependencies\":{\"babel\":\"^6.23.0\",\"babel-env\":\"^2.4.1\",\"babel-eslint\":\"^8.2.2\",\"babel-loader\":\"^7.1.2\",\"babel-plugin-transform-class-properties\":\"^6.24.1\",\"babel-plugin-transform-decorators\":\"^6.24.1\",\"babel-plugin-transform-react-constant-elements\":\"^6.23.0\",\"babel-plugin-transform-react-inline-elements\":\"^6.22.0\",\"babel-preset-es2015\":\"^6.24.1\",\"clean-webpack-plugin\":\"^0.1.17\",\"css-loader\":\"^0.28.10\",\"extract-text-webpack-plugin\":\"^3.0.2\",\"html-loader\":\"^0.5.5\",\"html-webpack-plugin\":\"^2.30.1\",\"style-loader\":\"^0.20.2\",\"webpack\":\"^4.12.0\",\"webpack-cli\":\"^3.1.2\",\"webpack-dev-server\":\"^2.11.1\"},\"peerDependency\":{\"xgplayer\":\"^0.1.0\"},\"dependencies\":{\"concat-typed-array\":\"^1.0.2\",\"event-emitter\":\"^0.3.5\"}}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GbHZQbGF5ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vbm9kZV9tb2R1bGVzL2NvbmNhdC10eXBlZC1hcnJheS9saWIvY29uY2F0LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL25vZGVfbW9kdWxlcy9jb25jYXQtdHlwZWQtYXJyYXkvbGliL2luZGV4LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL25vZGVfbW9kdWxlcy9kL2luZGV4LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL25vZGVfbW9kdWxlcy9lczUtZXh0L2Z1bmN0aW9uL25vb3AuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L2Fzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvYXNzaWduL2lzLWltcGxlbWVudGVkLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9hc3NpZ24vc2hpbS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvaXMtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L2tleXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L2tleXMvaXMtaW1wbGVtZW50ZWQuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L2tleXMvc2hpbS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3Qvbm9ybWFsaXplLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L3ZhbGlkLWNhbGxhYmxlLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC92YWxpZC12YWx1ZS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9zdHJpbmcvIy9jb250YWlucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9zdHJpbmcvIy9jb250YWlucy9pcy1pbXBsZW1lbnRlZC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9zdHJpbmcvIy9jb250YWlucy9zaGltLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL25vZGVfbW9kdWxlcy9ldmVudC1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL25vZGVfbW9kdWxlcy90eXBlL2Z1bmN0aW9uL2lzLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL25vZGVfbW9kdWxlcy90eXBlL29iamVjdC9pcy5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9ub2RlX21vZHVsZXMvdHlwZS9wbGFpbi1mdW5jdGlvbi9pcy5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9ub2RlX21vZHVsZXMvdHlwZS9wcm90b3R5cGUvaXMuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vbm9kZV9tb2R1bGVzL3R5cGUvdmFsdWUvaXMuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL0Zsdi5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvY29uc3RhbnRzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvY29uc3RhbnRzL21ldGFGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL2NvbnN0YW50cy90eXBlcy5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL21vZGVscy9NZWRpYUluZm8uanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL21vZGVscy9NZWRpYVNhbXBsZS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvbW9kZWxzL01lZGlhU2VnbWVudC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvbW9kZWxzL01lZGlhU2VnbWVudExpc3QuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL21vZGVscy9TdG9yZS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvbW9kZWxzL1RhZy5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvbW9kZWxzL2Vycm9yLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL3NyYy9wYXJzZS9GbHZQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL3BhcnNlL01TRS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvcGFyc2UvTWFpblBhcnNlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvcGFyc2UvU1BTUGFyc2VyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL3NyYy9wYXJzZS9UcmFuc0NvZGVyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL3NyYy9wYXJzZS9kZW11eC9BdWRpb0RlbXV4ZXIuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL3BhcnNlL2RlbXV4L0RlbXV4ZXIuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL3BhcnNlL2RlbXV4L01ldGFEZW11eGVyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL3NyYy9wYXJzZS9kZW11eC9UYWdEZW11eGVyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL3NyYy9wYXJzZS9kZW11eC9WaWRlb0RlbXV4ZXIuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL3BhcnNlL3JlbXV4L0ZtcDQuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL3BhcnNlL3JlbXV4L01wNHJlbXV4LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL3NyYy9wYXJzZS9yZW11eC9SZW11eGVyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL3NyYy90YXNrcy9MaXZlVGFzay5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvdGFza3MvVm9kVGFzay5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvdGFza3MvbG9hZGVycy9GZXRjaExvYWRlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvdGFza3MvbG9hZGVycy9YSFJMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL3V0aWxzL0RhdGFWaWV3NFJlYWQuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL3V0aWxzL0V4cEdvbG9tYi5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvdXRpbHMvTG9nLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL3NyYy91dGlscy9PYnNlcnZlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvdXRpbHMvVVRGOC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvdXRpbHMvZnVuY1V0aWxzLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL3NyYy91dGlscy9zbmlmZmVyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL3NyYy93cml0ZS9CdWZmZXIuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyL2V4dGVybmFsIFwiUGxheWVyXCIiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiUmVzdWx0Q29uc3RydWN0b3IiLCJ0b3RhbExlbmd0aCIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcnJheXMiLCJBcnJheSIsIl9rZXkiLCJfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uIiwiX2RpZEl0ZXJhdG9yRXJyb3IiLCJfaXRlcmF0b3JFcnJvciIsInVuZGVmaW5lZCIsIl9pdGVyYXRvciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiX3N0ZXAiLCJuZXh0IiwiZG9uZSIsImFyciIsImVyciIsInJldHVybiIsInJlc3VsdCIsIm9mZnNldCIsIl9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yIiwiX2RpZEl0ZXJhdG9yRXJyb3IyIiwiX2l0ZXJhdG9yRXJyb3IyIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9hcnIiLCJzZXQiLCJfY29uY2F0IiwicmVxdWlyZSIsIl9jb25jYXQyIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJtb2R1bGUiLCJpc1ZhbHVlIiwiaXNQbGFpbkZ1bmN0aW9uIiwiYXNzaWduIiwibm9ybWFsaXplT3B0cyIsImNvbnRhaW5zIiwiZCIsImRzY3IiLCJjIiwiZSIsInciLCJvcHRpb25zIiwiZGVzYyIsImNhbGwiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJncyIsImdldCIsImZvbyIsImJhciIsInRyenkiLCJrZXlzIiwibWF4IiwiTWF0aCIsImRlc3QiLCJzcmMiLCJlcnJvciIsImkiLCJrZXkiLCJmb3JFYWNoIiwiX3VuZGVmaW5lZCIsInZhbCIsIm9iamVjdCIsInByb3RvdHlwZSIsImNyZWF0ZSIsInByb2Nlc3MiLCJvcHRzMSIsImZuIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwic3RyIiwiaW5kZXhPZiIsInNlYXJjaFN0cmluZyIsImNhbGxhYmxlIiwiYXBwbHkiLCJGdW5jdGlvbiIsImRlZmluZVByb3BlcnRpZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImRlc2NyaXB0b3IiLCJvbiIsIm9uY2UiLCJvZmYiLCJlbWl0IiwibWV0aG9kcyIsImRlc2NyaXB0b3JzIiwiYmFzZSIsInR5cGUiLCJsaXN0ZW5lciIsImRhdGEiLCJfX2VlX18iLCJwdXNoIiwic2VsZiIsIl9fZWVPbmNlTGlzdGVuZXJfXyIsImxpc3RlbmVycyIsImNhbmRpZGF0ZSIsInNwbGljZSIsImwiLCJhcmdzIiwic2xpY2UiLCJvIiwiaXNQcm90b3R5cGUiLCJwb3NzaWJsZVR5cGVzIiwiaXNGdW5jdGlvbiIsImNsYXNzUmUiLCJmdW5jdGlvblRvU3RyaW5nIiwidG9TdHJpbmciLCJ0ZXN0IiwiaXNPYmplY3QiLCJjb25zdHJ1Y3RvciIsIkZsdiIsInBsYXllciIsIl9wbGF5ZXIiLCJfb3B0aW9ucyIsImZsdlBsYXllciIsIk1haW5QYXJzZXIiLCJtc2UiLCJNU0UiLCJ2aWRlbyIsImlzU2Vla2luZyIsImlzRGF0YUxvYWRpbmciLCJ0ZW1wQ3VycmVudFRpbWUiLCJ0ZW1wRmx2UGxheWVyIiwiaXNDaGFuZ2luZ1NyYyIsImluaXRQbGF5ZXJFdmVudHMiLCJpbml0Rmx2UGxheWVyRXZlbnRzIiwiaW5pdE1zZUV2ZW50cyIsInN0YXJ0TG9hZERhdGEiLCJoYW5kbGVTZWVraW5nIiwiYnVmZmVyZWQiLCJjdXJyZW50VGltZSIsImlzQnVmZmVyZWQiLCJsZW4iLCJzdGFydCIsImVuZCIsIlZvZFRhc2siLCJjbGVhciIsImlzU2Vla2FibGUiLCJzZWVrIiwiaXNMaXZlIiwiaGFuZGxlVGltZVVwZGF0ZSIsImlzTWVkaWFJbmZvUmVhZHkiLCJwcm9ncmVzc0NoZWNrZXIiLCJpc0VuZGVkIiwiX3JlcGxheSIsImRlc3Ryb3kiLCJfbXNlIiwicmVwbGF5IiwiaXNTb3VyY2VPcGVuIiwiYXBwZW5kQnVmZmVyIiwiZnR5cF9tb292IiwiYnVmZmVyIiwic2V0VGltZW91dCIsInBsYXkiLCJwZW5kaW5nRnJhZ21lbnRzIiwiaGFzUGVuZGluZ0ZyYWdtZW50cyIsImZyYWdtZW50Iiwic2hpZnQiLCJ1bnNoaWZ0IiwidXJsIiwic3dpdGNoVVJMIiwiY29uZmlnIiwiaXNUZW1wUGxheWVyIiwiaGFuZGxlTWVkaWFGcmFnbWVudCIsInVuYmluZEZsdlBsYXllckV2ZW50cyIsImhhbmRsZVNlZWtFbmQiLCJoYW5kbGVFcnJvciIsImhhbmRsZUZ0eXBNb292IiwiZnR5cE1vb3YiLCJvblNvdXJjZU9wZW4iLCJsb2FkU2VnbWVudHMiLCJwcmVsb2FkVGltZSIsIm1pbkNhY2hlZFRpbWUiLCJyYW5nZSIsImdldEJ1ZmZlcmVkUmFuZ2UiLCJ2aWRlb0R1cmF0aW9uIiwidmlkZW9UaW1lU2NhbGUiLCJ0aGVuIiwiZmx2IiwiZW5kT2ZTdHJlYW0iLCJwYXVzZSIsImdldERlZmF1bHRDb25mIiwiYXV0b0NsZWFuU291cmNlQnVmZmVyIiwiYXV0b0NsZWFuTWF4QmFja1RpbWUiLCJjb3JzIiwiZmllbGRzIiwibmFtZSIsIkJvb2xlYW4iLCJwYXJzZXIiLCJ0YXJnZXQiLCJvcmlnaW4iLCJtZWRpYUluZm8iLCJkdXJhdGlvbiIsImhhc0F1ZGlvIiwiaGFzVmlkZW8iLCJOdW1iZXIiLCJhdWRpb0RhdGFSYXRlIiwiYXVkaW9kYXRhcmF0ZSIsInZpZGVvRGF0YVJhdGUiLCJ2aWRlb2RhdGFyYXRlIiwid2lkdGgiLCJoZWlnaHQiLCJzdGF0ZSIsImZsb29yIiwidGltZVNjYWxlIiwib25UeXBlRXJyIiwiZnBzTnVtIiwiZnJhbWVyYXRlIiwiZnBzIiwicmVmZXJGcmFtZVJhdGUiLCJmaXhlZCIsImZwc0RlbiIsImtleWZyYW1lcyIsImhhc0tleWZyYW1lcyIsIl9wYXJzZUtleWZyYW1lcyIsIk1ldGFUeXBlcyIsIk5VTUJFUiIsIkJPT0xFQU4iLCJTVFJJTkciLCJPQkpFQ1QiLCJNSVhfQVJSQVkiLCJPQkpFQ1RfRU5EIiwiU1RSSUNUX0FSUkFZIiwiREFURSIsIkxPTkVfU1RSSU5HIiwiRXZlbnRUeXBlcyIsIkRBVEFfUkVBRFkiLCJNRVRBX0RBVEFfUkVBRFkiLCJUUkFDS19NRVRBX1JFQURZIiwiTUVESUFfSU5GT19SRUFEWSIsIk1FVEFfRU5EX1BPU0lUSU9OIiwiRVJST1IiLCJzb3VuZFJhdGVUeXBlcyIsIkF1ZGlvT2JqZWN0VHlwZXMiLCJzYW1wbGluZ0ZyZXF1ZW5jeVR5cGVzIiwiYnJvd3NlclR5cGVzIiwiSUUiLCJGSVJFX0ZPWCIsIkNIUk9NRSIsIk9QRVJBIiwiU0FGQVJJIiwibXAzVmVyc2lvbnMiLCJWMjUiLCJSRVNFUlZFRCIsIlYyMCIsIlYxMCIsImF1ZGlvU2FtcGxlUmF0ZSIsIm1wM0JpdFJhdGUiLCJMYXllcjEiLCJMYXllcjIiLCJMYXllcjMiLCJGbHZQbGF5ZXIiLCJfX2Zsdl9fIiwiaW5pdCIsInN0YXJ0c1dpdGgiLCJsb2FkIiwiYXV0b3BsYXkiLCJjcmVhdGVJbnN0YW5jZSIsIlBsYXllciIsInV0aWwiLCJhZGRDbGFzcyIsInJvb3QiLCJsaXZlIiwiY3JlYXRlRG9tIiwiY29udHJvbHMiLCJhcHBlbmRDaGlsZCIsImluaXRlZCIsIk1lZGlhSW5mbyIsIl9kZWZhdWx0IiwibWltZVR5cGUiLCJjb2RlYyIsImF1ZGlvQ29kZWMiLCJ2aWRlb0NvZGVjIiwiYXVkaW9DaGFubmVsQ291bnQiLCJhdWRpb0NvbmZpZyIsInByb2ZpbGUiLCJsZXZlbCIsImNocm9tYUZvcm1hdCIsInBpeGVsUmF0aW8iLCJfbWV0YURhdGEiLCJzZWdtZW50cyIsImluaXREYXRhIiwiZW50cmllcyIsImsiLCJ2IiwiaXNWaWRlb0luZm9GaWxsZWQiLCJpc0F1ZGlvSW5mb0ZpbGxlZCIsIm5vdE51bGxGaWVsZHMiLCJNZWRpYVNhbXBsZSIsImluZm8iLCJnZXREZWZhdWx0SW5mIiwic2FtcGxlIiwiZHRzIiwicHRzIiwicG9zaXRpb24iLCJpc1JBUCIsIm9yaWdpbkR0cyIsIk1lZGlhU2VnbWVudCIsInN0YXJ0RHRzIiwiZW5kRHRzIiwic3RhcnRQdHMiLCJlbmRQdHMiLCJvcmlnaW5TdGFydER0cyIsIm9yaWdpbkVuZER0cyIsInJhbmRvbUFjY2Vzc1BvaW50cyIsImZpcnN0U2FtcGxlIiwibGFzdFNhbXBsZSIsIk1lZGlhU2VnbWVudExpc3QiLCJfdHlwZSIsIl9saXN0IiwiX2xhc3RBcHBlbmRMb2NhdGlvbiIsImJlZ2luRHRzIiwibGlzdCIsImxhc3QiLCJtaWQiLCJsYm91bmQiLCJ1Ym91bmQiLCJpZHgiLCJfc2VhcmNoTmVhcmVzdFNlZ21lbnRCZWZvcmUiLCJzZWdtZW50IiwibGFzdEFwcGVuZElkeCIsImluc2VydElkeCIsImdldExhc3RTZWdtZW50QmVmb3JlIiwic2VnbWVudElkeCIsIlN0b3JlIiwiaXNMZSIsInNuaWZmZXIiLCJfaGFzQXVkaW8iLCJfaGFzVmlkZW8iLCJfbWVkaWFJbmZvIiwiX3ZpZGVvVHJhY2siLCJpZCIsInNhbXBsZXMiLCJfYXVkaW9UcmFjayIsIl92aWRlb01ldGFEYXRhIiwiX2F1ZGlvTWV0YURhdGEiLCJfYXVkaW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkIiwiX3ZpZGVvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZCIsInRhZ3MiLCJ0aW1lU3RhbXBCYXNlIiwiaGFzVmlkZW9GbGFnT3ZlcnJpZGVkIiwiaGFzQXVkaW9GbGFnT3ZlcnJpZGVkIiwiZHVyYXRpb25PdmVycmlkZWQiLCJuYWx1TGVuZ3RoU2l6ZSIsIl9yZWZlckZyYW1lUmF0ZSIsIm1ldGFFbmRQb3NpdGlvbiIsIl9pc0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWQiLCJiaW5kIiwicG9zIiwiRmx2VGFnIiwidGFnVHlwZSIsImJvZHlTaXplIiwidGFnU2l6ZSIsIlRpbWVzdGFtcCIsIlN0cmVhbUlEIiwiYm9keSIsInRpbWUiLCJwb3AiLCJqb2luIiwicGFyc2VJbnQiLCJFcnJvclR5cGVzIiwibmV0d29yayIsImNvZGUiLCJtc2ciLCJyZW1hcmsiLCJwYXJzZSIsImZvcm1hdCIsImRlY29kZXIiLCJydW50aW1lIiwidGltZW91dCIsIm90aGVyIiwiRXJyb3JzIiwibmV0d29ya1N0YXRlIiwicmVhZHlTdGF0ZSIsImN1cnJlbnRTcmMiLCJlbmRlZCIsImVycmQiLCJsaW5lIiwiaGFuZGxlIiwidmVyc2lvbiIsInIiLCJwbGF5ZXJWZXJzaW9uIiwiZXJyb3JUeXBlIiwiZG9tYWluIiwiZG9jdW1lbnQiLCJleCIsIkZsdlBhcnNlciIsInN0b3JlIiwiQ0xBU1NfTkFNRSIsInRlbXBfdThhIiwiZGF0YUxlbiIsInN0b3AiLCJpbmRleCIsImZpbGVQb3NpdGlvbiIsImZpcnN0RmxhZyIsImZsdlU4YSIsInRlbXBVOGEiLCJwYXJzZURhdGEiLCJpc0ZsdkhlYWQiLCJwYXJzZUhlYWQiLCJyZWFkRGF0YSIsInU4YUxlbmd0aCIsInRhZyIsIlRhZyIsInVucmVhZExlbmd0aCIsIlN0cmFtSWQiLCJnZXRCb2R5U2l6ZSIsIl9zdG9yZSIsInNpemVBcnIiLCJCdWZmZXIiLCJyZWFkQXNJbnQiLCJtYXRjaCIsImZsYWciLCJfaW5kZXgiLCJmaXJzdFRocmVlQ2hhcnMiLCJmcm9tQ2hhckNvZGUiLCJEZW11eGVyIiwiY291bnQiLCJtZWRpYUVsZW1lbnQiLCJjb2RlY3MiLCJtZWRpYVNvdXJjZSIsIndpbmRvdyIsIk1lZGlhU291cmNlIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaGFuZGxlU291cmNlT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzb3VyY2VCdWZmZXIiLCJhZGRTb3VyY2VCdWZmZXIiLCJ1cGRhdGluZyIsIkVycm9yIiwicmVtb3ZlIiwiaXNUeXBlU3VwcG9ydGVkIiwiTk9PUCIsIl9jb25maWciLCJfdGVtcEJhc2VUaW1lIiwiZmx2UGFyc2VyIiwidGFnRGVtdXhlciIsIlRhZ0RlbXV4ZXIiLCJtcDRyZW11eGVyIiwiTXA0UmVtdXhlciIsImJ1ZmZlcktleWZyYW1lcyIsIlNldCIsIk1FVEFfQ0hVTktfU0laRSIsInBvdyIsIkNIVU5LX1NJWkUiLCJfaXNOZXdTZWdtZW50c0Fycml2YWwiLCJsb2FkVGFzayIsIl9wZW5kaW5nRnJhZ21lbnRzIiwiX3BlbmRpbmdSZW1vdmVSYW5nZSIsImVycl9jbnQiLCJyZXF1ZXN0Q29uZmlnIiwibW9kZSIsImluaXRFdmVudEJpbmQiLCJpbml0TWV0YSIsImluaXRMaXZlU3RyZWFtIiwiTGl2ZVRhc2siLCJydW4iLCJsb2FkTGl2ZURhdGEiLCJ3cml0ZSIsIlVpbnQ4QXJyYXkiLCJzZXRGbHYiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIlJlc29sdmVyIiwicmVzb2x2ZUNodW5rIiwidGltZVN0YW1wIiwibG9hZERhdGEiLCJsb2FkTWV0YURhdGEiLCJjYXRjaCIsImNoYW5nZVJhbmdlIiwiX3JhbmdlIiwiZ2V0TmV4dFJhbmdlRW5kIiwiUHJvbWlzZSIsInJlc29sdmUiLCJfbG9hZFNlZ21lbnRzRGF0YSIsInRpbWVzIiwiZmlsZVBvc2l0aW9ucyIsImV4cGVjdEVuZCIsImxlZnQiLCJyaWdodCIsInByb21pc2UiLCJhcnJheUJ1ZmYiLCJiYXNlVGltZSIsImdldFRpbWUiLCJfdGltZXN0YW1wQmFzZSIsInJlc29sdmVUYWdzIiwiaXNQYXJzaW5nIiwiYXVkaW9UcmFjayIsInZpZGVvVHJhY2siLCJyZW11eCIsIm1ldGEiLCJvbk1ldGFEYXRhUmVhZHkiLCJuZXdGcmFnIiwiYWRkIiwicmFwIiwiRlRZUF9NT09WIiwib25NZWRpYUluZm9SZWFkeSIsImhhbmRsZURhdGFSZWFkeSIsImhhbmRsZU1lZGlhSW5mb1JlYWR5IiwiaGFuZGxlTWV0YURhdGFSZWFkeSIsInNldEV2ZW50QmluZCIsImhhbmRsZU5ld01lZGlhRnJhZ21lbnQiLCJjbGVhckJ1ZmZlciIsImNhbmNlbCIsInNlZWtTdGFydCIsInN0YXJ0RmlsZVBvcyIsImVuZEZpbGVQb3MiLCJtaW4iLCJnZXRFbmRGaWxlUG9zIiwibG8iLCJoaSIsIm5leHRUaW1lIiwiTUFYX1NBRkVfSU5URUdFUiIsImV2ZXJ5IiwiY2xlYXJUYWdzIiwic2V0Rmx2Rmlyc3QiLCJzZXRGbHZVc3VhbGx5IiwiaXNDb21wbGV0ZSIsIlRyYW5zQ29kZXIiLCJTUFNQYXJzZXIiLCJwcm9maWxlSWRjIiwibGV2ZWxJZGMiLCJ0b0ZpeGVkIiwiY2hyb21hIiwib3JpZ2luQXJyIiwicmJzcCIsIl9lYnNwMnJic3AiLCJzdHJlYW0iLCJFeHBHb2xvbWIiLCJzcHNDb25maWciLCJyZWFkU1BTIiwicHJvZmlsZVN0cmluZyIsImdldFByb2ZpbGVTdHIiLCJsZXZlbFN0cmluZyIsImdldExldmVsU3RyIiwiY2hyb21hRm9ybWF0U3RyaW5nIiwiZ2V0Q2hyb21hRm9ybWF0U3RyIiwib3JpZ2luTGVuIiwiYnl0ZUxlbmd0aCIsImRpc3QiLCJkaXN0U2l6ZSIsIl9vYnNlcnZlciIsIm9ic2VydmVyIiwiZmx1c2giLCJlcnJvckRldGFpbCIsImVycm9yVG9FbWl0IiwiQXVkaW9EZW11eGVyIiwiY3VycmVudFRhZyIsInJlYWRPZmZzZXQiLCJhdWRpb01ldGFEYXRhIiwidHJhY2siLCJpbml0QXVkaW9NZXRhIiwiZHYiLCJEYXRhVmlldzRSZWFkIiwic291bmQiLCJnZXRVaW50OCIsInNvdW5kRm9ybWF0SWR4Iiwic291bmRSYXRlIiwic291bmRUeXBlIiwiY2hhbm5lbENvdW50IiwiYWFjSW5mbyIsIl9wYXJzZUFBQ0F1ZGlvIiwiYWFjRGF0YSIsInNhbXBsZUZyZXEiLCJwYWNrZXRUeXBlIiwic2FtcGxlUmF0ZSIsIm1hbmlmZXN0Q29kZWMiLCJyZWZTYW1wbGVEdXJhdGlvbiIsImhhc0luaXRpYWxNZXRhRGlzcGF0Y2hlZCIsIm1pIiwicmVwbGFjZSIsImFhY1NhbXBsZSIsInVuaXQiLCJyZXNldFN0YXR1cyIsImFhY0FycmF5IiwiX3BhcnNlQUFDQXVkaW9TcGVjaWZpY0NvbmZpZyIsImdldEFuZE51bSIsInJlc3VsdE9iaiIsInNhbXBsaW5nRnJlcXVlbmN5IiwiZXh0QXVkaW9PYmplY3RUeXBlIiwiZXh0QXVkaW9TYW1wbGluZ0lkeCIsIlVJbnQwIiwiVUludDEiLCJ0ZW1wQXVkaW9PYmplY3RUeXBlIiwiYXVkaW9PYmplY3RUeXBlIiwic2FtcGxpbmdJZHgiLCJlbWl0RXJyb3IiLCJkaXNwYXRjaCIsIlVJbnQyIiwiYnJvd3NlciIsIm9zIiwiaXNBbmRyb2lkIiwiZXh0ZW5zaW9uU2FtcGxpbmdJbmRleCIsImV4dGVuc2lvblNhbXBsaW5nSWR4IiwiZGF0YVNpemUiLCJwcmVmaXgiLCJwYXlsb2FkIiwiTG9nIiwid2FybiIsIk1ldGFEZW11eGVyIiwic2l6ZSIsIm1ldGFEYXRhIiwicGFyc2VWYWx1ZSIsIkRhdGFWaWV3Iiwic3RyTGVuIiwiZ2V0VWludDE2IiwiVVRGOCIsImRlY29kZSIsInRzIiwiZ2V0RmxvYXQ2NCIsInRpbWVPZmZzZXQiLCJnZXRJbnQxNiIsIkRhdGUiLCJwYXJzZVN0cmluZyIsImlzT2JqRW5kIiwiZ2V0VWludDMyIiwiQXJyYXlCdWZmZXIiLCJkYXRhVmlldyIsImJvb2xOdW0iLCJvYmpFbmRTaXplIiwiYW1mT2JqIiwicGFyc2VPYmplY3QiLCJpc09iamVjdEVuZCIsIm1hcmsiLCJhbWZWYXIiLCJtYXJrZXIiLCJhcnJMZW5ndGgiLCJzY3JpcHQiLCJkYXRlIiwicGFyc2VEYXRlIiwibG9uZ1N0ciIsInBhcnNlTG9uZ1N0cmluZyIsIm5hdGl2ZUhhc1Byb3AiLCJUYWdkZW11eCIsIl9tZXRhRGVtdXhlciIsIl92aWRlb0RlbXV4ZXIiLCJWaWRlb0RlbXV4ZXIiLCJfYXVkaW9EZW11eGVyIiwiX2ZpcnN0UGFyc2UiLCJfZGF0YU9mZnNldCIsInJlc29sdmVUYWciLCJfcmVzb2x2ZUF1ZGlvVGFnIiwiX3Jlc29sdmVWaWRlb1RhZyIsIl9yZXNvbHZlTWV0YVRhZyIsInMiLCJoYXNNZXRhRGF0YSIsIkxvZ2dlciIsIm9uTWV0YURhdGEiLCJtZXRhRmllbGRzIiwiZmllbGQiLCJtZXRhT2JqIiwiX2luaXRNZXRhRGF0YSIsImZpbGVwb3NpdGlvbnMiLCJ2aWRlb01ldGFEYXRhIiwiZmlyc3RVSTgiLCJmcmFtZVR5cGUiLCJjb2RlY0lkIiwiX3BhcnNlQVZDUGFja2V0IiwicGFja2FnZVR5cGUiLCJjcHNUaW1lIiwiX3BhcnNlQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQiLCJfcGFyc2VBVkNWaWRlb0RhdGEiLCJhdmNjIiwidGltZXNjYWxlIiwiYXZjUHJvZmlsZSIsImdldFVpbnQiLCJzcHNMZW5ndGgiLCJoYW5kbGVyIiwic3BzIiwicGFyc2VTUFMiLCJjb2RlY1NpemUiLCJwcmVzZW50U2l6ZSIsImZyYW1lUmF0ZSIsInJlZkZyYW1lcyIsImJpdERlcHRoIiwicHJlc2VudFdpZHRoIiwicHJlc2VudEhlaWdodCIsImNvZGVjQXJyIiwic3ViYXJyYXkiLCJjb2RlY1N0ciIsImoiLCJoZXgiLCJwYWRTdGFydCIsInBwcyIsInBwc0NvdW50IiwicHBzU2l6ZSIsIm5hbHVMaXN0IiwibmFsdUxlblNpemUiLCJpc0tleWZyYW1lIiwidGVtcFJlYWRPZmZzZXQiLCJuYWx1U2l6ZSIsImdldFVpbnQyNCIsInVuaXRUeXBlIiwibmFsdVVuaXQiLCJ2aWRlb1NhbXBsZSIsInVuaXRzIiwiY3BzIiwibnVtIiwiRk1QNCIsIndyaXRlVWludDMyIiwiY29udGVudCIsImluaXRCb3giLCJtdmhkIiwidHJhazEiLCJ2aWRlb1RyYWsiLCJ0cmFrMiIsImF1ZGlvVHJhayIsIm12ZXgiLCJpdGVtIiwiYnl0ZXMiLCJ0a2hkIiwibWRpYSIsInNhbXBsZXJhdGUiLCJtZWRpYVRpbWUiLCJtZGhkIiwiaGRsciIsIm1pbmYiLCJleHRlbnNpb24iLCJ2bWhkIiwic21oZCIsImRpbmYiLCJzdGJsIiwiZHJlZiIsInN0c2QiLCJzdHRzIiwic3RzYyIsInN0c3oiLCJzdGNvIiwibXA0YSIsImF2YzEiLCJlc2RzIiwiY29uZmlnbGVuIiwiY29uY2F0IiwiaFNwYWNpbmciLCJ2U3BhY2luZyIsImF2Y2NCdWZmZXIiLCJidHJ0IiwicGFzcCIsIm1laGQiLCJ0cmV4IiwibWZoZCIsInRyYWYiLCJzZXF1ZW5jZSIsInRmaGQiLCJ0ZmR0Iiwic2R0cCIsInRydW4iLCJzZHRwTGVuZ3RoIiwic2FtcGxlQ291bnQiLCJ3cml0ZU9mZnNldCIsInRydW5Cb3giLCJtZGF0Qm94IiwiY2hhckNvZGVBdCIsIl9kdHNCYXNlIiwiX2lzRHRzQmFzZUluaXRlZCIsIl92aWRlb01ldGEiLCJfYXVkaW9NZXRhIiwiX2F1ZGlvTmV4dER0cyIsIl92aWRlb05leHREdHMiLCJfdmlkZW9TZWdtZW50TGlzdCIsIl9hdWRpb1NlZ21lbnRMaXN0IiwiX2ZpbGxTaWxlbmNlRnJhbWUiLCJfZHRzQmFzZUluaXRlZCIsImNhbGNEdHNCYXNlIiwiX3JlbXV4VmlkZW8iLCJfcmVtdXhBdWRpbyIsImZ0eXAiLCJtb292IiwiYXVkaW9CYXNlIiwiSW5maW5pdHkiLCJ2aWRlb0Jhc2UiLCJkdHNDb3JyZWN0aW9uIiwiZmlyc3REdHMiLCJsYXN0RHRzIiwiZmlyc3RQdHMiLCJsYXN0UHRzIiwibXA0U2FtcGxlcyIsInZpZGVvU2VnbWVudCIsImF2Y1NhbXBsZSIsImlzRW1wdHkiLCJsYXN0U2VnbWVudCIsImdhcCIsImxhc3RHYXAiLCJfdW5pdHMiLCJtZGF0U2FtcGxlIiwic2FtcGxlRHVyYXRpb24iLCJuZXh0RHRzIiwiYWRkUkFQIiwiZmlyc3QiLCJtb29mTWRhdCIsIm1vb2YiLCJtZGF0IiwiYXBwZW5kIiwic2lsZW50RHVyYXRpb24iLCJpc0ZpcnN0RHRzSW5pdGVkIiwibmVlZFNpbGVudEZyYW1lIiwiZ2V0TGFzdFNhbXBsZUJlZm9yZSIsInNpbGVudEZyYW1lIiwiaW5pdFNpbGVudEF1ZGlvIiwibXA0U2FtcGxlIiwiY3RzIiwiYXVkaW9TZWdtZW50IiwiZ2V0U2lsZW50RnJhbWUiLCJSZW11eGVyIiwiX2hlYWRlcnMiLCJIZWFkZXJzIiwiaGVhZGVycyIsIm1ldGhvZCIsImNhY2hlIiwiX3N0b3AiLCJyZXF1ZXN0IiwiUmVxdWVzdCIsImNhbGxiYWNrIiwicmVhZGVyIiwicmVhZCIsInByb20iLCJyZWplY3QiLCJpc1RpbWVvdXQiLCJmZXRjaCIsInJlcyIsImdldFJlYWRlciIsIkxvYWRDbHMiLCJGZXRjaExvYWRlciIsIlhIUkxvYWRlciIsImxvYWRlciIsImlzQ2FuY2VsZWQiLCJxdWV1ZSIsInVwZGF0ZSIsImZpbHRlciIsIlF1ZXVlIiwic2VuZGVkIiwid2FpdCIsImxpbWl0IiwiY29tcGxldGUiLCJpc1N0b3BwZWQiLCJub3ciLCJSYW5nZSIsInN0YXR1cyIsIm9rIiwic3RhdHVzVGV4dCIsImFycmF5QnVmZmVyIiwiX3Byb21pc2UiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25hYm9ydCIsIm9ubG9hZCIsInJlc3BvbnNlIiwib25lcnJvciIsIl94aHIiLCJzZW5kIiwiYWJvcnQiLCJjb250ZXh0IiwiX2R2IiwiX2NvbnRleHQiLCJpbml0UHJveHkiLCJpc0hpZ2giLCJyZWFkU2l6ZSIsIm51bVRvQW5kIiwiYmVnaW4iLCJieXRlc0F2YWlsYWJsZSIsIndvcmQiLCJiaXRzQXZhaWxhYmxlIiwid29ya2luZ0J5dGVzIiwiYXZhaWxhYmxlQnl0ZXMiLCJza2lwQnl0ZXMiLCJsb2FkV29yZCIsImJpdHMiLCJ2YWx1IiwicmVhZEJpdHMiLCJsZWFkaW5nWmVyb0NvdW50Iiwic2tpcExaIiwic2tpcEJpdHMiLCJjbHoiLCJyZWFkVUVHIiwibGFzdFNjYWxlIiwibmV4dFNjYWxlIiwiZGVsdGFTY2FsZSIsInJlYWRFRyIsImZyYW1lQ3JvcExlZnRPZmZzZXQiLCJmcmFtZUNyb3BSaWdodE9mZnNldCIsImZyYW1lQ3JvcFRvcE9mZnNldCIsImZyYW1lQ3JvcEJvdHRvbU9mZnNldCIsImNvZGVjV2lkdGgiLCJjb2RlY0hlaWdodCIsIm51bVJlZkZyYW1lc0luUGljT3JkZXJDbnRDeWNsZSIsInBpY1dpZHRoSW5NYnNNaW51czEiLCJwaWNIZWlnaHRJbk1hcFVuaXRzTWludXMxIiwiZnJhbWVNYnNPbmx5RmxhZyIsInNjYWxpbmdMaXN0Q291bnQiLCJyZWFkVUJ5dGUiLCJyZWFkQm9vbGVhbiIsInNraXBFRyIsInNraXBVRUciLCJza2lwU2NhbGluZ0xpc3QiLCJjaHJvbWFGb3JtYXRJZGMiLCJjaHJvbWFGb3JtYXRzIiwiYml0RGVwdGhMdW1hIiwicHJvZmlsZUlkY3MiLCJpbmNsdWRlcyIsInBpY09yZGVyQ250VHlwZSIsImZwc0ZpeGVkIiwiYXNwZWN0UmF0aW9JZGMiLCJudW1Vbml0SW5UaWNrIiwiY3JvcFVuaXRYIiwiY3JvcFVuaXRZIiwic3ViV2MiLCJzdWJIYyIsInBpeGVsU2NhbGUiLCJjZWlsIiwibmF0aXZlU2xpY2UiLCJPYnNlcnZlciIsImZuSWQiLCJfbGlzdGVuZXJJZE1hcCIsIl9saXN0ZW5lcnMiLCJfZ2V0TGlzdGVuZXJzQnlLZXkiLCJfZ2V0TGlzdGVuZXJCeUlkIiwiX3RoaXMiLCJvbmNlRnVuYyIsInVpbnQ4YXJyYXkiLCJvdXQiLCJpbnB1dCIsIl9jaGVja0NvbnRpbnVhdGlvbiIsInVjczQiLCJjaGVja0xlbmd0aCIsImFycmF5IiwiZGVib3VuY2UiLCJmdW5jIiwiaW1tZWRpYXRlIiwiZGVib3VuY2VkIiwiY2xlYXJUaW1lb3V0IiwiY2FsbE5vdyIsImNhY2hlV3JhcHBlciIsInJlZHVjZSIsInByZSIsImN1ciIsImxlIiwiYnVmIiwic2V0SW50MTYiLCJJbnQxNkFycmF5IiwiZGV2aWNlIiwiaXNQYyIsImlzVGFibGV0IiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsInJlZyIsImllIiwiZmlyZm94IiwiY2hyb21lIiwib3BlcmEiLCJzYWZhcmkiLCJpc1dpbmRvd3NQaG9uZSIsImlzU3ltYmlhbiIsImlzRmlyZUZveCIsImlzUGhvbmUiLCJ0ZW1wIiwicGFkU3RhcnQ0SGV4IiwiaGV4TnVtIiwiaGV4U3RyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUEr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R0FBYixDQUFSO0FBQ0gsYUFGRDtBQUdBLG1CQUFPcFYsU0FBUzBsQixJQUFULEVBQWUsRUFBZixDQUFQO0FBQ0g7Ozs7OztrQkFHVXhpQixNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDZixhQUFhLG1DQUFtQyxFQUFFLEkiLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChSZXN1bHRDb25zdHJ1Y3Rvcikge1xuICB2YXIgdG90YWxMZW5ndGggPSAwO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcnJheXMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJyYXlzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGFycmF5c1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgIHZhciBhcnIgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgdG90YWxMZW5ndGggKz0gYXJyLmxlbmd0aDtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIHJlc3VsdCA9IG5ldyBSZXN1bHRDb25zdHJ1Y3Rvcih0b3RhbExlbmd0aCk7XG4gIHZhciBvZmZzZXQgPSAwO1xuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gYXJyYXlzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAyOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gKF9zdGVwMiA9IF9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlKSB7XG4gICAgICB2YXIgX2FyciA9IF9zdGVwMi52YWx1ZTtcblxuICAgICAgcmVzdWx0LnNldChfYXJyLCBvZmZzZXQpO1xuICAgICAgb2Zmc2V0ICs9IF9hcnIubGVuZ3RoO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcbiAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4pIHtcbiAgICAgICAgX2l0ZXJhdG9yMi5yZXR1cm4oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NvbmNhdCA9IHJlcXVpcmUoJy4vY29uY2F0Jyk7XG5cbnZhciBfY29uY2F0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbmNhdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0gX2NvbmNhdDIuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzVmFsdWUgICAgICAgICA9IHJlcXVpcmUoXCJ0eXBlL3ZhbHVlL2lzXCIpXG4gICwgaXNQbGFpbkZ1bmN0aW9uID0gcmVxdWlyZShcInR5cGUvcGxhaW4tZnVuY3Rpb24vaXNcIilcbiAgLCBhc3NpZ24gICAgICAgICAgPSByZXF1aXJlKFwiZXM1LWV4dC9vYmplY3QvYXNzaWduXCIpXG4gICwgbm9ybWFsaXplT3B0cyAgID0gcmVxdWlyZShcImVzNS1leHQvb2JqZWN0L25vcm1hbGl6ZS1vcHRpb25zXCIpXG4gICwgY29udGFpbnMgICAgICAgID0gcmVxdWlyZShcImVzNS1leHQvc3RyaW5nLyMvY29udGFpbnNcIik7XG5cbnZhciBkID0gKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRzY3IsIHZhbHVlLyosIG9wdGlvbnMqLykge1xuXHR2YXIgYywgZSwgdywgb3B0aW9ucywgZGVzYztcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyIHx8IHR5cGVvZiBkc2NyICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0b3B0aW9ucyA9IHZhbHVlO1xuXHRcdHZhbHVlID0gZHNjcjtcblx0XHRkc2NyID0gbnVsbDtcblx0fSBlbHNlIHtcblx0XHRvcHRpb25zID0gYXJndW1lbnRzWzJdO1xuXHR9XG5cdGlmIChpc1ZhbHVlKGRzY3IpKSB7XG5cdFx0YyA9IGNvbnRhaW5zLmNhbGwoZHNjciwgXCJjXCIpO1xuXHRcdGUgPSBjb250YWlucy5jYWxsKGRzY3IsIFwiZVwiKTtcblx0XHR3ID0gY29udGFpbnMuY2FsbChkc2NyLCBcIndcIik7XG5cdH0gZWxzZSB7XG5cdFx0YyA9IHcgPSB0cnVlO1xuXHRcdGUgPSBmYWxzZTtcblx0fVxuXG5cdGRlc2MgPSB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiBjLCBlbnVtZXJhYmxlOiBlLCB3cml0YWJsZTogdyB9O1xuXHRyZXR1cm4gIW9wdGlvbnMgPyBkZXNjIDogYXNzaWduKG5vcm1hbGl6ZU9wdHMob3B0aW9ucyksIGRlc2MpO1xufSk7XG5cbmQuZ3MgPSBmdW5jdGlvbiAoZHNjciwgZ2V0LCBzZXQvKiwgb3B0aW9ucyovKSB7XG5cdHZhciBjLCBlLCBvcHRpb25zLCBkZXNjO1xuXHRpZiAodHlwZW9mIGRzY3IgIT09IFwic3RyaW5nXCIpIHtcblx0XHRvcHRpb25zID0gc2V0O1xuXHRcdHNldCA9IGdldDtcblx0XHRnZXQgPSBkc2NyO1xuXHRcdGRzY3IgPSBudWxsO1xuXHR9IGVsc2Uge1xuXHRcdG9wdGlvbnMgPSBhcmd1bWVudHNbM107XG5cdH1cblx0aWYgKCFpc1ZhbHVlKGdldCkpIHtcblx0XHRnZXQgPSB1bmRlZmluZWQ7XG5cdH0gZWxzZSBpZiAoIWlzUGxhaW5GdW5jdGlvbihnZXQpKSB7XG5cdFx0b3B0aW9ucyA9IGdldDtcblx0XHRnZXQgPSBzZXQgPSB1bmRlZmluZWQ7XG5cdH0gZWxzZSBpZiAoIWlzVmFsdWUoc2V0KSkge1xuXHRcdHNldCA9IHVuZGVmaW5lZDtcblx0fSBlbHNlIGlmICghaXNQbGFpbkZ1bmN0aW9uKHNldCkpIHtcblx0XHRvcHRpb25zID0gc2V0O1xuXHRcdHNldCA9IHVuZGVmaW5lZDtcblx0fVxuXHRpZiAoaXNWYWx1ZShkc2NyKSkge1xuXHRcdGMgPSBjb250YWlucy5jYWxsKGRzY3IsIFwiY1wiKTtcblx0XHRlID0gY29udGFpbnMuY2FsbChkc2NyLCBcImVcIik7XG5cdH0gZWxzZSB7XG5cdFx0YyA9IHRydWU7XG5cdFx0ZSA9IGZhbHNlO1xuXHR9XG5cblx0ZGVzYyA9IHsgZ2V0OiBnZXQsIHNldDogc2V0LCBjb25maWd1cmFibGU6IGMsIGVudW1lcmFibGU6IGUgfTtcblx0cmV0dXJuICFvcHRpb25zID8gZGVzYyA6IGFzc2lnbihub3JtYWxpemVPcHRzKG9wdGlvbnMpLCBkZXNjKTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5LWZ1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHt9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vaXMtaW1wbGVtZW50ZWRcIikoKSA/IE9iamVjdC5hc3NpZ24gOiByZXF1aXJlKFwiLi9zaGltXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbiwgb2JqO1xuXHRpZiAodHlwZW9mIGFzc2lnbiAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG5cdG9iaiA9IHsgZm9vOiBcInJhelwiIH07XG5cdGFzc2lnbihvYmosIHsgYmFyOiBcImR3YVwiIH0sIHsgdHJ6eTogXCJ0cnp5XCIgfSk7XG5cdHJldHVybiBvYmouZm9vICsgb2JqLmJhciArIG9iai50cnp5ID09PSBcInJhemR3YXRyenlcIjtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGtleXMgID0gcmVxdWlyZShcIi4uL2tleXNcIilcbiAgLCB2YWx1ZSA9IHJlcXVpcmUoXCIuLi92YWxpZC12YWx1ZVwiKVxuICAsIG1heCAgID0gTWF0aC5tYXg7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRlc3QsIHNyYy8qLCDigKZzcmNuKi8pIHtcblx0dmFyIGVycm9yLCBpLCBsZW5ndGggPSBtYXgoYXJndW1lbnRzLmxlbmd0aCwgMiksIGFzc2lnbjtcblx0ZGVzdCA9IE9iamVjdCh2YWx1ZShkZXN0KSk7XG5cdGFzc2lnbiA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHR0cnkge1xuXHRcdFx0ZGVzdFtrZXldID0gc3JjW2tleV07XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlO1xuXHRcdH1cblx0fTtcblx0Zm9yIChpID0gMTsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0c3JjID0gYXJndW1lbnRzW2ldO1xuXHRcdGtleXMoc3JjKS5mb3JFYWNoKGFzc2lnbik7XG5cdH1cblx0aWYgKGVycm9yICE9PSB1bmRlZmluZWQpIHRocm93IGVycm9yO1xuXHRyZXR1cm4gZGVzdDtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF91bmRlZmluZWQgPSByZXF1aXJlKFwiLi4vZnVuY3Rpb24vbm9vcFwiKSgpOyAvLyBTdXBwb3J0IEVTMyBlbmdpbmVzXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdmFsICE9PSBfdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbDsgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2lzLWltcGxlbWVudGVkXCIpKCkgPyBPYmplY3Qua2V5cyA6IHJlcXVpcmUoXCIuL3NoaW1cIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHRyeSB7XG5cdFx0T2JqZWN0LmtleXMoXCJwcmltaXRpdmVcIik7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzVmFsdWUgPSByZXF1aXJlKFwiLi4vaXMtdmFsdWVcIik7XG5cbnZhciBrZXlzID0gT2JqZWN0LmtleXM7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCkgeyByZXR1cm4ga2V5cyhpc1ZhbHVlKG9iamVjdCkgPyBPYmplY3Qob2JqZWN0KSA6IG9iamVjdCk7IH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzVmFsdWUgPSByZXF1aXJlKFwiLi9pcy12YWx1ZVwiKTtcblxudmFyIGZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCwgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcblxudmFyIHByb2Nlc3MgPSBmdW5jdGlvbiAoc3JjLCBvYmopIHtcblx0dmFyIGtleTtcblx0Zm9yIChrZXkgaW4gc3JjKSBvYmpba2V5XSA9IHNyY1trZXldO1xufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRzMS8qLCDigKZvcHRpb25zKi8pIHtcblx0dmFyIHJlc3VsdCA9IGNyZWF0ZShudWxsKTtcblx0Zm9yRWFjaC5jYWxsKGFyZ3VtZW50cywgZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0XHRpZiAoIWlzVmFsdWUob3B0aW9ucykpIHJldHVybjtcblx0XHRwcm9jZXNzKE9iamVjdChvcHRpb25zKSwgcmVzdWx0KTtcblx0fSk7XG5cdHJldHVybiByZXN1bHQ7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuKSB7XG5cdGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihmbiArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuXHRyZXR1cm4gZm47XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc1ZhbHVlID0gcmVxdWlyZShcIi4vaXMtdmFsdWVcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdGlmICghaXNWYWx1ZSh2YWx1ZSkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlIG51bGwgb3IgdW5kZWZpbmVkXCIpO1xuXHRyZXR1cm4gdmFsdWU7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vaXMtaW1wbGVtZW50ZWRcIikoKSA/IFN0cmluZy5wcm90b3R5cGUuY29udGFpbnMgOiByZXF1aXJlKFwiLi9zaGltXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHIgPSBcInJhemR3YXRyenlcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh0eXBlb2Ygc3RyLmNvbnRhaW5zICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIHN0ci5jb250YWlucyhcImR3YVwiKSA9PT0gdHJ1ZSAmJiBzdHIuY29udGFpbnMoXCJmb29cIikgPT09IGZhbHNlO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaW5kZXhPZiA9IFN0cmluZy5wcm90b3R5cGUuaW5kZXhPZjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2VhcmNoU3RyaW5nLyosIHBvc2l0aW9uKi8pIHtcblx0cmV0dXJuIGluZGV4T2YuY2FsbCh0aGlzLCBzZWFyY2hTdHJpbmcsIGFyZ3VtZW50c1sxXSkgPiAtMTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkICAgICAgICA9IHJlcXVpcmUoJ2QnKVxuICAsIGNhbGxhYmxlID0gcmVxdWlyZSgnZXM1LWV4dC9vYmplY3QvdmFsaWQtY2FsbGFibGUnKVxuXG4gICwgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHksIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbFxuICAsIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGUsIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5XG4gICwgZGVmaW5lUHJvcGVydGllcyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzXG4gICwgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICwgZGVzY3JpcHRvciA9IHsgY29uZmlndXJhYmxlOiB0cnVlLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUgfVxuXG4gICwgb24sIG9uY2UsIG9mZiwgZW1pdCwgbWV0aG9kcywgZGVzY3JpcHRvcnMsIGJhc2U7XG5cbm9uID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XG5cdHZhciBkYXRhO1xuXG5cdGNhbGxhYmxlKGxpc3RlbmVyKTtcblxuXHRpZiAoIWhhc093blByb3BlcnR5LmNhbGwodGhpcywgJ19fZWVfXycpKSB7XG5cdFx0ZGF0YSA9IGRlc2NyaXB0b3IudmFsdWUgPSBjcmVhdGUobnVsbCk7XG5cdFx0ZGVmaW5lUHJvcGVydHkodGhpcywgJ19fZWVfXycsIGRlc2NyaXB0b3IpO1xuXHRcdGRlc2NyaXB0b3IudmFsdWUgPSBudWxsO1xuXHR9IGVsc2Uge1xuXHRcdGRhdGEgPSB0aGlzLl9fZWVfXztcblx0fVxuXHRpZiAoIWRhdGFbdHlwZV0pIGRhdGFbdHlwZV0gPSBsaXN0ZW5lcjtcblx0ZWxzZSBpZiAodHlwZW9mIGRhdGFbdHlwZV0gPT09ICdvYmplY3QnKSBkYXRhW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuXHRlbHNlIGRhdGFbdHlwZV0gPSBbZGF0YVt0eXBlXSwgbGlzdGVuZXJdO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxub25jZSA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xuXHR2YXIgb25jZSwgc2VsZjtcblxuXHRjYWxsYWJsZShsaXN0ZW5lcik7XG5cdHNlbGYgPSB0aGlzO1xuXHRvbi5jYWxsKHRoaXMsIHR5cGUsIG9uY2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0b2ZmLmNhbGwoc2VsZiwgdHlwZSwgb25jZSk7XG5cdFx0YXBwbHkuY2FsbChsaXN0ZW5lciwgdGhpcywgYXJndW1lbnRzKTtcblx0fSk7XG5cblx0b25jZS5fX2VlT25jZUxpc3RlbmVyX18gPSBsaXN0ZW5lcjtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5vZmYgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcblx0dmFyIGRhdGEsIGxpc3RlbmVycywgY2FuZGlkYXRlLCBpO1xuXG5cdGNhbGxhYmxlKGxpc3RlbmVyKTtcblxuXHRpZiAoIWhhc093blByb3BlcnR5LmNhbGwodGhpcywgJ19fZWVfXycpKSByZXR1cm4gdGhpcztcblx0ZGF0YSA9IHRoaXMuX19lZV9fO1xuXHRpZiAoIWRhdGFbdHlwZV0pIHJldHVybiB0aGlzO1xuXHRsaXN0ZW5lcnMgPSBkYXRhW3R5cGVdO1xuXG5cdGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnb2JqZWN0Jykge1xuXHRcdGZvciAoaSA9IDA7IChjYW5kaWRhdGUgPSBsaXN0ZW5lcnNbaV0pOyArK2kpIHtcblx0XHRcdGlmICgoY2FuZGlkYXRlID09PSBsaXN0ZW5lcikgfHxcblx0XHRcdFx0XHQoY2FuZGlkYXRlLl9fZWVPbmNlTGlzdGVuZXJfXyA9PT0gbGlzdGVuZXIpKSB7XG5cdFx0XHRcdGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSAyKSBkYXRhW3R5cGVdID0gbGlzdGVuZXJzW2kgPyAwIDogMV07XG5cdFx0XHRcdGVsc2UgbGlzdGVuZXJzLnNwbGljZShpLCAxKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0aWYgKChsaXN0ZW5lcnMgPT09IGxpc3RlbmVyKSB8fFxuXHRcdFx0XHQobGlzdGVuZXJzLl9fZWVPbmNlTGlzdGVuZXJfXyA9PT0gbGlzdGVuZXIpKSB7XG5cdFx0XHRkZWxldGUgZGF0YVt0eXBlXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbmVtaXQgPSBmdW5jdGlvbiAodHlwZSkge1xuXHR2YXIgaSwgbCwgbGlzdGVuZXIsIGxpc3RlbmVycywgYXJncztcblxuXHRpZiAoIWhhc093blByb3BlcnR5LmNhbGwodGhpcywgJ19fZWVfXycpKSByZXR1cm47XG5cdGxpc3RlbmVycyA9IHRoaXMuX19lZV9fW3R5cGVdO1xuXHRpZiAoIWxpc3RlbmVycykgcmV0dXJuO1xuXG5cdGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnb2JqZWN0Jykge1xuXHRcdGwgPSBhcmd1bWVudHMubGVuZ3RoO1xuXHRcdGFyZ3MgPSBuZXcgQXJyYXkobCAtIDEpO1xuXHRcdGZvciAoaSA9IDE7IGkgPCBsOyArK2kpIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuXG5cdFx0bGlzdGVuZXJzID0gbGlzdGVuZXJzLnNsaWNlKCk7XG5cdFx0Zm9yIChpID0gMDsgKGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldKTsgKytpKSB7XG5cdFx0XHRhcHBseS5jYWxsKGxpc3RlbmVyLCB0aGlzLCBhcmdzKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0c3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0Y2FsbC5jYWxsKGxpc3RlbmVycywgdGhpcyk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRjYWxsLmNhbGwobGlzdGVuZXJzLCB0aGlzLCBhcmd1bWVudHNbMV0pO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0Y2FsbC5jYWxsKGxpc3RlbmVycywgdGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdGwgPSBhcmd1bWVudHMubGVuZ3RoO1xuXHRcdFx0YXJncyA9IG5ldyBBcnJheShsIC0gMSk7XG5cdFx0XHRmb3IgKGkgPSAxOyBpIDwgbDsgKytpKSB7XG5cdFx0XHRcdGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0fVxuXHRcdFx0YXBwbHkuY2FsbChsaXN0ZW5lcnMsIHRoaXMsIGFyZ3MpO1xuXHRcdH1cblx0fVxufTtcblxubWV0aG9kcyA9IHtcblx0b246IG9uLFxuXHRvbmNlOiBvbmNlLFxuXHRvZmY6IG9mZixcblx0ZW1pdDogZW1pdFxufTtcblxuZGVzY3JpcHRvcnMgPSB7XG5cdG9uOiBkKG9uKSxcblx0b25jZTogZChvbmNlKSxcblx0b2ZmOiBkKG9mZiksXG5cdGVtaXQ6IGQoZW1pdClcbn07XG5cbmJhc2UgPSBkZWZpbmVQcm9wZXJ0aWVzKHt9LCBkZXNjcmlwdG9ycyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uIChvKSB7XG5cdHJldHVybiAobyA9PSBudWxsKSA/IGNyZWF0ZShiYXNlKSA6IGRlZmluZVByb3BlcnRpZXMoT2JqZWN0KG8pLCBkZXNjcmlwdG9ycyk7XG59O1xuZXhwb3J0cy5tZXRob2RzID0gbWV0aG9kcztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNQcm90b3R5cGUgPSByZXF1aXJlKFwiLi4vcHJvdG90eXBlL2lzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBmYWxzZTtcblxuXHRpZiAoIWhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIFwibGVuZ3RoXCIpKSByZXR1cm4gZmFsc2U7XG5cblx0dHJ5IHtcblx0XHRpZiAodHlwZW9mIHZhbHVlLmxlbmd0aCAhPT0gXCJudW1iZXJcIikgcmV0dXJuIGZhbHNlO1xuXHRcdGlmICh0eXBlb2YgdmFsdWUuY2FsbCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZS5hcHBseSAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuICFpc1Byb3RvdHlwZSh2YWx1ZSk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc1ZhbHVlID0gcmVxdWlyZShcIi4uL3ZhbHVlL2lzXCIpO1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbnZhciBwb3NzaWJsZVR5cGVzID0geyBcIm9iamVjdFwiOiB0cnVlLCBcImZ1bmN0aW9uXCI6IHRydWUsIFwidW5kZWZpbmVkXCI6IHRydWUgLyogZG9jdW1lbnQuYWxsICovIH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdGlmICghaXNWYWx1ZSh2YWx1ZSkpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwocG9zc2libGVUeXBlcywgdHlwZW9mIHZhbHVlKTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKFwiLi4vZnVuY3Rpb24vaXNcIik7XG5cbnZhciBjbGFzc1JlID0gL15cXHMqY2xhc3NbXFxzey99XS8sIGZ1bmN0aW9uVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdGlmICghaXNGdW5jdGlvbih2YWx1ZSkpIHJldHVybiBmYWxzZTtcblx0aWYgKGNsYXNzUmUudGVzdChmdW5jdGlvblRvU3RyaW5nLmNhbGwodmFsdWUpKSkgcmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gdHJ1ZTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZShcIi4uL29iamVjdC9pc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0aWYgKCFpc09iamVjdCh2YWx1ZSkpIHJldHVybiBmYWxzZTtcblx0dHJ5IHtcblx0XHRpZiAoIXZhbHVlLmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2U7XG5cdFx0cmV0dXJuIHZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSA9PT0gdmFsdWU7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIEVTMyBzYWZlXG52YXIgX3VuZGVmaW5lZCA9IHZvaWQgMDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHZhbHVlICE9PSBfdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsOyB9O1xuIiwiLyoqXG4gKiBAYXV0aG9yIGZ1eXVoYW9cbiAqL1xuaW1wb3J0IE1haW5QYXJzZXIgZnJvbSAnLi9wYXJzZS9NYWluUGFyc2VyJ1xuaW1wb3J0IE1TRSBmcm9tICcuL3BhcnNlL01TRSdcbmltcG9ydCBWb2RUYXNrIGZyb20gJy4vdGFza3MvVm9kVGFzaydcbmltcG9ydCBnZXREZWZhdWx0Q29uZiBmcm9tICcuL2NvbnN0YW50cy9jb25maWcnXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmx2IHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMsIHBsYXllcikge1xuICAgIHRoaXMuX3BsYXllciA9IHBsYXllclxuICAgIHRoaXMuX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBnZXREZWZhdWx0Q29uZigpLCBvcHRpb25zKVxuICAgIC8vIOecn+ato+eahGZsduaSreaUvuWZqFxuICAgIHRoaXMuZmx2UGxheWVyID0gbmV3IE1haW5QYXJzZXIodGhpcy5fb3B0aW9ucywgcGxheWVyKVxuICAgIHRoaXMubXNlID0gbmV3IE1TRShwbGF5ZXIudmlkZW8pXG4gICAgdGhpcy5pc1NlZWtpbmcgPSBmYWxzZVxuICAgIHRoaXMuaXNEYXRhTG9hZGluZyA9IGZhbHNlXG4gICAgdGhpcy50ZW1wQ3VycmVudFRpbWUgPSAwXG4gICAgdGhpcy50ZW1wRmx2UGxheWVyID0gbnVsbFxuICAgIHRoaXMuaXNDaGFuZ2luZ1NyYyA9IGZhbHNlXG4gICAgdGhpcy5pbml0UGxheWVyRXZlbnRzKHBsYXllciwgdGhpcy5fb3B0aW9ucylcbiAgICB0aGlzLmluaXRGbHZQbGF5ZXJFdmVudHModGhpcy5mbHZQbGF5ZXIsIHRoaXMubXNlKVxuICAgIHRoaXMuaW5pdE1zZUV2ZW50cyh0aGlzLm1zZSwgdGhpcy5mbHZQbGF5ZXIpXG4gIH1cblxuICBsb2FkICgpIHtcbiAgICB0aGlzLmZsdlBsYXllci5zdGFydExvYWREYXRhKClcbiAgfVxuXG4gIGluaXRQbGF5ZXJFdmVudHMgKHBsYXllciwgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgbXNlIH0gPSB0aGlzXG4gICAgcGxheWVyLm1zZSA9IG1zZVxuICAgIHRoaXMuaGFuZGxlU2Vla2luZyA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzQ2hhbmdpbmdTcmMpIHtcbiAgICAgICAgdGhpcy5pc0NoYW5naW5nU3JjID0gZmFsc2VcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCB7IGJ1ZmZlcmVkLCBjdXJyZW50VGltZSB9ID0gcGxheWVyXG4gICAgICBsZXQgaXNCdWZmZXJlZCA9IGZhbHNlXG4gICAgICBpZiAoYnVmZmVyZWQubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBidWZmZXJlZC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGlmIChjdXJyZW50VGltZSA+IGJ1ZmZlcmVkLnN0YXJ0KGkpICYmIGN1cnJlbnRUaW1lIDwgYnVmZmVyZWQuZW5kKGkpKSB7XG4gICAgICAgICAgICBpc0J1ZmZlcmVkID0gdHJ1ZVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpc0J1ZmZlcmVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgVm9kVGFzay5jbGVhcigpXG4gICAgICBpZiAoIXRoaXMuaXNTZWVrYWJsZSkge1xuICAgICAgICB0aGlzLl9wbGF5ZXIuY3VycmVudFRpbWUgPSB0aGlzLnRlbXBDdXJyZW50VGltZVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMuZmx2UGxheWVyLnNlZWsocGxheWVyLmN1cnJlbnRUaW1lKVxuICAgICAgdGhpcy5pc1NlZWtpbmcgPSB0cnVlXG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5pc0xpdmUpIHtcbiAgICAgIHBsYXllci5vbignc2Vla2luZycsICgpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVTZWVraW5nKClcbiAgICAgIH0pXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlVGltZVVwZGF0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMudGVtcEN1cnJlbnRUaW1lID0gcGxheWVyLmN1cnJlbnRUaW1lXG4gICAgICBpZiAoIXRoaXMuaXNTZWVraW5nICYmIHRoaXMuZmx2UGxheWVyLmlzTWVkaWFJbmZvUmVhZHkgJiYgIXRoaXMudGVtcEZsdlBsYXllcikge1xuICAgICAgICB0aGlzLnByb2dyZXNzQ2hlY2tlcihwbGF5ZXIpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5pc0xpdmUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLmlzRW5kZWQocGxheWVyLCB0aGlzLmZsdlBsYXllcilcbiAgICB9XG4gICAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgKCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVUaW1lVXBkYXRlKClcbiAgICB9KVxuICAgIHBsYXllci5fcmVwbGF5ID0gKCkgPT4ge1xuICAgICAgcGxheWVyLm1zZS5kZXN0cm95KClcbiAgICAgIFZvZFRhc2suY2xlYXIoKVxuICAgICAgY29uc3QgX21zZSA9IG5ldyBNU0UocGxheWVyLnZpZGVvKVxuICAgICAgdGhpcy5mbHZQbGF5ZXIucmVwbGF5KClcblxuICAgICAgbXNlLm9uKCdzb3VyY2VvcGVuJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmZsdlBsYXllci5pc1NvdXJjZU9wZW4gPSB0cnVlXG4gICAgICAgIG1zZS5hcHBlbmRCdWZmZXIodGhpcy5mbHZQbGF5ZXIuZnR5cF9tb292LmJ1ZmZlcilcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcGxheWVyLnBsYXkoKVxuICAgICAgICB9LCAwKVxuICAgICAgICBtc2Uub24oJ3VwZGF0ZWVuZCcsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB7cGVuZGluZ0ZyYWdtZW50cywgaGFzUGVuZGluZ0ZyYWdtZW50c30gPSB0aGlzLmZsdlBsYXllclxuICAgICAgICAgIHRoaXMuaXNTZWVraW5nID0gZmFsc2VcbiAgICAgICAgICBpZiAoaGFzUGVuZGluZ0ZyYWdtZW50cykge1xuICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBwZW5kaW5nRnJhZ21lbnRzLnNoaWZ0KClcbiAgICAgICAgICAgIGlmICghbXNlLmFwcGVuZEJ1ZmZlcihmcmFnbWVudC5kYXRhKSkge1xuICAgICAgICAgICAgICBwZW5kaW5nRnJhZ21lbnRzLnVuc2hpZnQoZnJhZ21lbnQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwbGF5ZXIuZW1pdCgnY2FjaGV1cGRhdGUnLCBwbGF5ZXIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIG1zZS5vbignZXJyb3InLCAoZSkgPT4ge1xuICAgICAgICBwbGF5ZXIuZW1pdCgnZXJyb3InLCBlKVxuICAgICAgfSlcblxuICAgICAgcGxheWVyLm1zZSA9IG1zZVxuICAgICAgcGxheWVyLnZpZGVvLnNyYyA9IHRoaXMubXNlLnVybFxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBwbGF5ZXIuc3dpdGNoVVJMID0gKHVybCkgPT4ge1xuICAgICAgdGhpcy5fb3B0aW9ucy51cmwgPSB1cmxcbiAgICAgIC8vIHRoaXMuZmx2UGxheWVyLnVuYmluZEV2ZW50cygpXG4gICAgICBpZiAoIXBsYXllci5jb25maWcuaXNMaXZlKSB7XG4gICAgICAgIFZvZFRhc2suY2xlYXIoKVxuICAgICAgICBjb25zdCB0ZW1wRmx2UGxheWVyID0gdGhpcy50ZW1wRmx2UGxheWVyID0gbmV3IE1haW5QYXJzZXIodGhpcy5fb3B0aW9ucywgcGxheWVyKVxuXG4gICAgICAgIHRlbXBGbHZQbGF5ZXIuaXNTb3VyY2VPcGVuID0gdHJ1ZVxuICAgICAgICB0ZW1wRmx2UGxheWVyLmlzVGVtcFBsYXllciA9IHRydWVcbiAgICAgICAgdGhpcy5pbml0Rmx2UGxheWVyRXZlbnRzKHRlbXBGbHZQbGF5ZXIsIG1zZSlcbiAgICAgICAgdGVtcEZsdlBsYXllci5oYW5kbGVNZWRpYUZyYWdtZW50ID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNTZWVraW5nID0gZmFsc2VcbiAgICAgICAgICB0aGlzLnVuYmluZEZsdlBsYXllckV2ZW50cyh0aGlzLmZsdlBsYXllcilcbiAgICAgICAgICB0aGlzLmZsdlBsYXllci5kZXN0cm95KClcbiAgICAgICAgICB0aGlzLmZsdlBsYXllciA9IHRlbXBGbHZQbGF5ZXJcbiAgICAgICAgICB0aGlzLnRlbXBGbHZQbGF5ZXIgPSBudWxsXG5cbiAgICAgICAgICBtc2UuYXBwZW5kQnVmZmVyKHRlbXBGbHZQbGF5ZXIuZnR5cF9tb292KVxuICAgICAgICAgIHRlbXBGbHZQbGF5ZXIuaGFuZGxlTWVkaWFGcmFnbWVudCA9IChmcmFnbWVudCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1zZS5hcHBlbmRCdWZmZXIoZnJhZ21lbnQuZGF0YSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgdGVtcEZsdlBsYXllci5zdGFydExvYWREYXRhKClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdW5iaW5kRmx2UGxheWVyRXZlbnRzIChmbHZQbGF5ZXIpIHtcbiAgICBmbHZQbGF5ZXIuaGFuZGxlU2Vla0VuZCA9ICgpID0+IG51bGxcbiAgICBmbHZQbGF5ZXIuaGFuZGxlRXJyb3IgPSAoKSA9PiBudWxsXG4gICAgZmx2UGxheWVyLmhhbmRsZU1lZGlhRnJhZ21lbnQgPSAoKSA9PiBudWxsXG4gIH1cbiAgaW5pdEZsdlBsYXllckV2ZW50cyAoZmx2UGxheWVyLCBtc2UpIHtcbiAgICBjb25zdCBoYW5kbGVGdHlwTW9vdiA9IChmdHlwTW9vdikgPT4ge1xuICAgICAgaWYgKGZsdlBsYXllci5pc1NvdXJjZU9wZW4gJiYgIXRoaXMudGVtcEZsdlBsYXllcikge1xuICAgICAgICBtc2UuYXBwZW5kQnVmZmVyKGZ0eXBNb292LmJ1ZmZlcilcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNDaGFuZ2luZ1NyYyAmJiAhdGhpcy5fb3B0aW9ucy5pc0xpdmUpIHtcbiAgICAgICAgdGhpcy5pc1NlZWtpbmcgPSB0cnVlXG4gICAgICAgIGZsdlBsYXllci5zZWVrKHRoaXMuX3BsYXllci5jdXJyZW50VGltZSlcbiAgICAgIH1cbiAgICB9XG4gICAgZmx2UGxheWVyLm9uY2UoJ3JlYWR5JywgaGFuZGxlRnR5cE1vb3YpXG4gICAgZmx2UGxheWVyLmhhbmRsZVNlZWtFbmQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmlzU2Vla2luZyA9IGZhbHNlXG4gICAgfVxuICAgIGZsdlBsYXllci5oYW5kbGVFcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB0aGlzLl9wbGF5ZXIuZW1pdCgnZXJyb3InLCBlKVxuICAgIH1cbiAgICBpZiAoIXRoaXMudGVtcEZsdlBsYXllcikge1xuICAgICAgZmx2UGxheWVyLmhhbmRsZU1lZGlhRnJhZ21lbnQgPSAoZnJhZ21lbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVtcEZsdlBsYXllciA/IGZhbHNlIDogbXNlLmFwcGVuZEJ1ZmZlcihmcmFnbWVudC5kYXRhKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGluaXRNc2VFdmVudHMgKG1zZSkge1xuICAgIG1zZS5vbignZXJyb3InLCAoZSkgPT4ge1xuICAgICAgdGhpcy5fcGxheWVyLmVtaXQoJ2Vycm9yJywgZSlcbiAgICB9KVxuICAgIGNvbnN0IG9uU291cmNlT3BlbiA9ICgpID0+IHtcbiAgICAgIHRoaXMuZmx2UGxheWVyLmlzU291cmNlT3BlbiA9IHRydWVcbiAgICAgIGlmICh0aGlzLmZsdlBsYXllci5mdHlwX21vb3YgIT09IG51bGwpIHtcbiAgICAgICAgbXNlLmFwcGVuZEJ1ZmZlcih0aGlzLmZsdlBsYXllci5mdHlwX21vb3YuYnVmZmVyKVxuICAgICAgfVxuXG4gICAgICBtc2Uub24oJ3VwZGF0ZWVuZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBwZW5kaW5nRnJhZ21lbnRzLCBoYXNQZW5kaW5nRnJhZ21lbnRzIH0gPSB0aGlzLmZsdlBsYXllclxuXG4gICAgICAgIGlmIChoYXNQZW5kaW5nRnJhZ21lbnRzKSB7XG4gICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBwZW5kaW5nRnJhZ21lbnRzLnNoaWZ0KClcbiAgICAgICAgICBpZiAoIW1zZS5hcHBlbmRCdWZmZXIoZnJhZ21lbnQuZGF0YSkpIHtcbiAgICAgICAgICAgIHBlbmRpbmdGcmFnbWVudHMudW5zaGlmdChmcmFnbWVudClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcGxheWVyLmVtaXQoJ2NhY2hldXBkYXRlJywgdGhpcy5fcGxheWVyKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgbXNlLm9uKCdzb3VyY2VvcGVuJywgb25Tb3VyY2VPcGVuKVxuICB9XG5cbiAgbG9hZERhdGEgKGN1cnJlbnRUaW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZmx2UGxheWVyLmxvYWRTZWdtZW50cyh0cnVlLCBjdXJyZW50VGltZSwgdGhpcy5fb3B0aW9ucy5wcmVsb2FkVGltZSlcbiAgfVxuXG4gIHByb2dyZXNzQ2hlY2tlciAocGxheWVyKSB7XG4gICAgY29uc3QgeyBtaW5DYWNoZWRUaW1lLCBwcmVsb2FkVGltZSB9ID0gdGhpcy5fb3B0aW9uc1xuICAgIGNvbnN0IHJhbmdlID0gcGxheWVyLmdldEJ1ZmZlcmVkUmFuZ2UoKVxuICAgIGlmICh0aGlzLmZsdlBsYXllci52aWRlb0R1cmF0aW9uIC0gcmFuZ2VbMV0gKiB0aGlzLmZsdlBsYXllci52aWRlb1RpbWVTY2FsZSA8IDAuMSAqIHRoaXMuZmx2UGxheWVyLnZpZGVvVGltZVNjYWxlKSB7IHJldHVybiB9XG4gICAgaWYgKHJhbmdlWzFdIC0gcGxheWVyLmN1cnJlbnRUaW1lIDwgbWluQ2FjaGVkVGltZSAmJiAhdGhpcy5pc0RhdGFMb2FkaW5nKSB7XG4gICAgICB0aGlzLmlzRGF0YUxvYWRpbmcgPSB0cnVlXG4gICAgICB0aGlzLmZsdlBsYXllci5sb2FkU2VnbWVudHModHJ1ZSwgcGxheWVyLmN1cnJlbnRUaW1lLCBwcmVsb2FkVGltZSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEYXRhTG9hZGluZyA9IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBjbGVhclBsYXllckNhY2hlICgpIHtcbiAgICBjb25zdCByYW5nZSA9IHRoaXMuX3BsYXllci5nZXRCdWZmZXJlZFJhbmdlKClcbiAgICBpZiAocmFuZ2UubGVuZ3RoID09PSAyKSB7XG4gICAgICAvLyB0aGlzLm1zZS5yZW1vdmVCdWZmZXIocmFuZ2VbMF0sIHJhbmdlWzFdKVxuICAgIH1cbiAgfVxuICBpc0VuZGVkIChwbGF5ZXIsIGZsdikge1xuICAgIGlmIChmbHYudmlkZW9EdXJhdGlvbiAtIHBsYXllci5jdXJyZW50VGltZSAqIGZsdi52aWRlb1RpbWVTY2FsZSA8IDIgKiBmbHYudmlkZW9UaW1lU2NhbGUpIHtcbiAgICAgIGNvbnN0IHJhbmdlID0gcGxheWVyLmdldEJ1ZmZlcmVkUmFuZ2UoKVxuICAgICAgaWYgKHBsYXllci5jdXJyZW50VGltZSAtIHJhbmdlWzFdIDwgMC4xKSB7XG4gICAgICAgIHRoaXMubXNlLmVuZE9mU3RyZWFtKClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZGVzdHJveSAoKSB7XG4gICAgVm9kVGFzay5jbGVhcigpXG4gICAgdGhpcy5fb3B0aW9ucyA9IHt9XG4gICAgdGhpcy5tc2UgPSBudWxsXG4gICAgdGhpcy5pc1NlZWtpbmcgPSBmYWxzZVxuICAgIHRoaXMuaXNEYXRhTG9hZGluZyA9IGZhbHNlXG4gICAgdGhpcy50ZW1wQ3VycmVudFRpbWUgPSAwXG4gICAgdGhpcy50ZW1wRmx2UGxheWVyID0gbnVsbFxuICAgIHRoaXMuaXNDaGFuZ2luZ1NyYyA9IGZhbHNlXG4gICAgdGhpcy5oYW5kbGVUaW1lVXBkYXRlID0gKCkgPT4ge31cbiAgICB0aGlzLmhhbmRsZVNlZWtpbmcgPSAoKSA9PiB7fVxuICAgIHRoaXMuZmx2UGxheWVyLmRlc3Ryb3koKVxuICAgIHRoaXMuX3BsYXllci5wYXVzZSgpXG4gIH1cbiAgZ2V0IGlzU2Vla2FibGUgKCkge1xuICAgIHJldHVybiB0aGlzLmZsdlBsYXllci5pc1NlZWthYmxlXG4gIH1cbn1cbiIsImNvbnN0IGdldERlZmF1bHRDb25mID0gKCkgPT4gKHtcbiAgcHJlbG9hZFRpbWU6IDMwLFxuICBtaW5DYWNoZWRUaW1lOiA1LFxuICBhdXRvQ2xlYW5Tb3VyY2VCdWZmZXI6IHRydWUsXG4gIGF1dG9DbGVhbk1heEJhY2tUaW1lOiAzMCxcbiAgaXNMaXZlOiBmYWxzZSxcbiAgY29yczogdHJ1ZVxufSlcblxuZXhwb3J0IGRlZmF1bHQgZ2V0RGVmYXVsdENvbmZcbiIsImNvbnN0IGZpZWxkcyA9IFt7XG4gIG5hbWU6ICdkdXJhdGlvbicsXG4gIHR5cGU6IEJvb2xlYW4sXG4gIHBhcnNlciAodGFyZ2V0LCBvcmlnaW4pIHtcbiAgICB0YXJnZXQubWVkaWFJbmZvLmR1cmF0aW9uID0gb3JpZ2luLmR1cmF0aW9uXG4gIH1cbn0sIHtcbiAgbmFtZTogJ2hhc0F1ZGlvJyxcbiAgdHlwZTogQm9vbGVhbixcbiAgcGFyc2VyICh0YXJnZXQsIG9yaWdpbikge1xuICAgIHRhcmdldC5tZWRpYUluZm8uaGFzQXVkaW8gPSBvcmlnaW4uaGFzQXVkaW9cbiAgfVxufSwge1xuICBuYW1lOiAnaGFzVmlkZW8nLFxuICB0eXBlOiBCb29sZWFuLFxuICBwYXJzZXIgKHRhcmdldCwgb3JpZ2luKSB7XG4gICAgdGFyZ2V0Lm1lZGlhSW5mby5oYXNWaWRlbyA9IG9yaWdpbi5oYXNWaWRlb1xuICB9XG59LCB7XG4gIG5hbWU6ICdhdWRpb2RhdGFyYXRlJyxcbiAgdHlwZTogTnVtYmVyLFxuICBwYXJzZXIgKHRhcmdldCwgb3JpZ2luKSB7XG4gICAgdGFyZ2V0Lm1lZGlhSW5mby5hdWRpb0RhdGFSYXRlID0gb3JpZ2luLmF1ZGlvZGF0YXJhdGVcbiAgfVxufSwge1xuICBuYW1lOiAndmlkZW9kYXRhcmF0ZScsXG4gIHR5cGU6IE51bWJlcixcbiAgcGFyc2VyICh0YXJnZXQsIG9yaWdpbikge1xuICAgIHRhcmdldC5tZWRpYUluZm8udmlkZW9EYXRhUmF0ZSA9IG9yaWdpbi52aWRlb2RhdGFyYXRlXG4gIH1cbn0sIHtcbiAgbmFtZTogJ3dpZHRoJyxcbiAgdHlwZTogTnVtYmVyLFxuICBwYXJzZXIgKHRhcmdldCwgb3JpZ2luKSB7XG4gICAgdGFyZ2V0Lm1lZGlhSW5mby53aWR0aCA9IG9yaWdpbi53aWR0aFxuICB9XG59LCB7XG4gIG5hbWU6ICdoZWlnaHQnLFxuICB0eXBlOiBOdW1iZXIsXG4gIHBhcnNlciAodGFyZ2V0LCBvcmlnaW4pIHtcbiAgICB0YXJnZXQubWVkaWFJbmZvLmhlaWdodCA9IG9yaWdpbi5oZWlnaHRcbiAgfVxufSwge1xuICBuYW1lOiAnZHVyYXRpb24nLFxuICB0eXBlOiBOdW1iZXIsXG4gIHBhcnNlciAodGFyZ2V0LCBvcmlnaW4pIHtcbiAgICBpZiAoIXRhcmdldC5zdGF0ZS5kdXJhdGlvbikge1xuICAgICAgY29uc3QgZHVyYXRpb24gPSBNYXRoLmZsb29yKG9yaWdpbi5kdXJhdGlvbiAqIHRhcmdldC5zdGF0ZS50aW1lU2NhbGUpXG4gICAgICB0YXJnZXQuc3RhdGUuZHVyYXRpb24gPSB0YXJnZXQubWVkaWFJbmZvLmR1cmF0aW9uID0gZHVyYXRpb25cbiAgICB9XG4gIH0sXG4gIG9uVHlwZUVyciAodGFyZ2V0KSB7XG4gICAgdGFyZ2V0Lm1lZGlhSW5mby5kdXJhdGlvbiA9IDBcbiAgfVxufSwge1xuICBuYW1lOiAnZnJhbWVyYXRlJyxcbiAgdHlwZTogTnVtYmVyLFxuICBwYXJzZXIgKHRhcmdldCwgb3JpZ2luKSB7XG4gICAgY29uc3QgZnBzTnVtID0gTWF0aC5mbG9vcihvcmlnaW4uZnJhbWVyYXRlICogMTAwMClcbiAgICBpZiAoZnBzTnVtID4gMCkge1xuICAgICAgY29uc3QgZnBzID0gZnBzTnVtIC8gMTAwMFxuICAgICAgY29uc3QgeyByZWZlckZyYW1lUmF0ZSwgbWVkaWFJbmZvIH0gPSB0YXJnZXRcbiAgICAgIHJlZmVyRnJhbWVSYXRlLmZpeGVkID0gdHJ1ZVxuICAgICAgcmVmZXJGcmFtZVJhdGUuZnBzID0gZnBzXG4gICAgICByZWZlckZyYW1lUmF0ZS5mcHNOdW0gPSBmcHNOdW1cbiAgICAgIHJlZmVyRnJhbWVSYXRlLmZwc0RlbiA9IDEwMDBcbiAgICAgIG1lZGlhSW5mby5mcHMgPSBmcHNcbiAgICB9XG4gIH1cbn0sIHtcbiAgbmFtZTogJ2tleWZyYW1lcycsXG4gIHR5cGU6IE9iamVjdCxcbiAgcGFyc2VyICh0YXJnZXQsIG9yaWdpbikge1xuICAgIGNvbnN0IHsga2V5ZnJhbWVzIH0gPSBvcmlnaW5cbiAgICB0YXJnZXQubWVkaWFJbmZvLmhhc0tleWZyYW1lcyA9ICEha2V5ZnJhbWVzXG4gICAgaWYgKGtleWZyYW1lcykge1xuICAgICAgdGFyZ2V0Lm1lZGlhSW5mby5rZXlmcmFtZXMgPSB0aGlzLl9wYXJzZUtleWZyYW1lcyhrZXlmcmFtZXMpXG4gICAgfVxuICAgIG9yaWdpbi5rZXlmcmFtZXMgPSBudWxsXG4gIH0sXG4gIG9uVHlwZUVyciAodGFyZ2V0KSB7XG4gICAgdGFyZ2V0Lm1lZGlhSW5mby5oYXNLZXlmcmFtZXMgPSBmYWxzZVxuICB9XG59XVxuZXhwb3J0IGRlZmF1bHQgZmllbGRzXG4iLCJleHBvcnQgY29uc3QgTWV0YVR5cGVzID0ge1xuICBOVU1CRVI6IDAsXG4gIEJPT0xFQU46IDEsXG4gIFNUUklORzogMixcbiAgT0JKRUNUOiAzLFxuICBNSVhfQVJSQVk6IDgsXG4gIE9CSkVDVF9FTkQ6IDksXG4gIFNUUklDVF9BUlJBWTogMTAsXG4gIERBVEU6IDExLFxuICBMT05FX1NUUklORzogMTJcbn1cblxuZXhwb3J0IGNvbnN0IEV2ZW50VHlwZXMgPSB7XG4gIERBVEFfUkVBRFk6ICdkYXRhX3JlYWR5JyxcbiAgTUVUQV9EQVRBX1JFQURZOiAnbWV0YV9kYXRhX3JlYWR5JyxcbiAgVFJBQ0tfTUVUQV9SRUFEWTogJ3RyYWNrX21ldGFfcmVhZHknLFxuICBNRURJQV9JTkZPX1JFQURZOiAnbWVkaWFfaW5mb19yZWFkeScsXG4gIE1FVEFfRU5EX1BPU0lUSU9OOiAnbWV0YV9lbmRfcG9zaXRpb24nLFxuICBFUlJPUjogJ2Vycm9yJ1xufVxuXG5leHBvcnQgY29uc3Qgc291bmRSYXRlVHlwZXMgPSBbXG4gIDU1MDAsXG4gIDExMDAwLFxuICAyMjAwMCxcbiAgNDQwMDBcbl1cblxuZXhwb3J0IGNvbnN0IEF1ZGlvT2JqZWN0VHlwZXMgPSB7XG4gIDA6ICdOdWxsJyxcbiAgMTogJ0FBQyBNYWluJyxcbiAgMjogJ0FBQyBMQycsXG4gIDM6ICdBQUMgU1NSKFNjYWxhYmxlIFNhbXBsZSBSYXRlKScsXG4gIDQ6ICdBQUMgTFRQKExvbmcgVGVybSBQcmVkaWN0aW9uKScsXG4gIDU6ICdIRS1BQUMgLyBTQlIoU3BlY3RyYWwgQmFuZCBSZXBsaWNhdGlvbiknLFxuICA2OiAnQUFDIFNjYWxhYmxlJ1xufVxuXG5leHBvcnQgY29uc3Qgc2FtcGxpbmdGcmVxdWVuY3lUeXBlcyA9IFtcbiAgOTYwMDAsIDg4MjAwLFxuICA2NDAwMCwgNDgwMDAsXG4gIDQ0MTAwLCAzMjAwMCxcbiAgMjQwMDAsIDIyMDUwLFxuICAxNjAwMCwgMTIwMDAsXG4gIDExMDI1LCA4MDAwXG5dXG5cbmV4cG9ydCBjb25zdCBicm93c2VyVHlwZXMgPSB7XG4gIElFOiAnaWUnLFxuICBGSVJFX0ZPWDogJ2ZpcmVmb3gnLFxuICBDSFJPTUU6ICdjaHJvbWUnLFxuICBPUEVSQTogJ29wZXJhJyxcbiAgU0FGQVJJOiAnc2FmYXJpJ1xufVxuXG5leHBvcnQgY29uc3QgbXAzVmVyc2lvbnMgPSB7XG4gIFYyNTogMCxcbiAgUkVTRVJWRUQ6IDEsXG4gIFYyMDogMixcbiAgVjEwOiAzXG59XG5cbmV4cG9ydCBjb25zdCBhdWRpb1NhbXBsZVJhdGUgPSB7XG4gIFYxMDogWzQ0MTAwLCA0ODAwMCwgMzIwMDAsIDBdLFxuICBWMjA6IFsyMjA1MCwgMjQwMDAsIDE2MDAwLCAwXSxcbiAgVjI1OiBbMTEwMjUsIDEyMDAwLCA4MDAwLCAwXVxufVxuXG5leHBvcnQgY29uc3QgbXAzQml0UmF0ZSA9IHtcbiAgTGF5ZXIxOiBbMCwgMzIsIDY0LCA5NiwgMTI4LCAxNjAsIDE5MiwgMjI0LCAyNTYsIDI4OCwgMzIwLCAzNTIsIDM4NCwgNDE2LCA0NDgsIC0xXSxcbiAgTGF5ZXIyOiBbMCwgMzIsIDQ4LCA1NiwgNjQsIDgwLCA5NiwgMTEyLCAxMjgsIDE2MCwgMTkyLCAyMjQsIDI1NiwgMzIwLCAzODQsIC0xXSxcbiAgTGF5ZXIzOiBbMCwgMzIsIDQwLCA0OCwgNTYsIDY0LCA4MCwgOTYsIDExMiwgMTI4LCAxNjAsIDE5MiwgMjI0LCAyNTYsIDMyMCwgLTFdXG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJ3hncGxheWVyJ1xuaW1wb3J0IFZvZFRhc2sgZnJvbSAnLi90YXNrcy9Wb2RUYXNrJ1xuaW1wb3J0IEZsdiBmcm9tICcuL0ZsdidcblxuY2xhc3MgRmx2UGxheWVyIGV4dGVuZHMgUGxheWVyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5fX2Zsdl9fID0gbnVsbFxuICAgIHRoaXMuaW5pdChvcHRpb25zKVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdzcmMnLCB7XG4gICAgICBzZXQ6ICh2YWwpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnICYmIHZhbC5zdGFydHNXaXRoKCdibG9iOicpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb3B0aW9ucy51cmwgPSB2YWxcbiAgICAgICAgdGhpcy5fX2Zsdl9fLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLl9fZmx2X18gPSBuZXcgRmx2KHRoaXMuX29wdGlvbnMsIHRoaXMpXG4gICAgICAgIHRoaXMuX19mbHZfXy5sb2FkKClcbiAgICAgICAgLy8gZmx2IOS5n+aYr3ZpZGVv57uE5Lu25pKt5pS+IOWcsOWdgOaYr21zZS51cmxcbiAgICAgICAgdGhpcy52aWRlby5zcmMgPSB0aGlzLl9fZmx2X18ubXNlLnVybFxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnBsYXkoKVxuICAgICAgICB9LCAwKVxuICAgICAgfSxcbiAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy51cmxcbiAgICAgIH0sXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KVxuICAgIGlmIChvcHRpb25zLmF1dG9wbGF5KSB7XG4gICAgICB0aGlzLnN0YXJ0KClcbiAgICB9XG4gIH1cblxuICBpbml0IChvcHRpb25zKSB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpc1xuICAgIGNvbnN0IHsgaXNMaXZlIH0gPSBvcHRpb25zXG4gICAgcGxheWVyLl9fZmx2X18gPSBuZXcgRmx2KG9wdGlvbnMsIHBsYXllcilcbiAgICBwbGF5ZXIub25jZSgnY29tcGxldGUnLCAoKSA9PiB7XG4gICAgICAvLyBzdGFydOaWueazleeahOS4i+S4gOS4quS6i+S7tuW+queOr+inpuWPkWNvbXBsZXRlXG4gICAgICBwbGF5ZXIuY3JlYXRlSW5zdGFuY2UocGxheWVyLl9fZmx2X18pXG4gICAgfSlcbiAgICBwbGF5ZXIub24oJ3BhdXNlJywgKCkgPT4ge1xuICAgICAgIWlzTGl2ZSAmJiBWb2RUYXNrLmNsZWFyKClcbiAgICB9KVxuICAgIHRoaXMub25jZSgnZGVzdHJveScsICgpID0+IHtcbiAgICAgIFZvZFRhc2suY2xlYXIoKVxuICAgICAgcGxheWVyLl9fZmx2X18uZGVzdHJveSgpXG4gICAgICBwbGF5ZXIuX19mbHZfXy5tc2UgPSBudWxsXG4gICAgICBwbGF5ZXIudmlkZW8uc3JjID0gJydcbiAgICAgIHBsYXllci5fX2Zsdl9fID0gbnVsbFxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVJbnN0YW5jZSAoZmx2KSB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpc1xuICAgIGlmICh0aGlzLl9vcHRpb25zLmlzTGl2ZSkge1xuICAgICAgUGxheWVyLnV0aWwuYWRkQ2xhc3MocGxheWVyLnJvb3QsICd4Z3BsYXllci1pcy1saXZlJylcbiAgICAgIGNvbnN0IGxpdmUgPSBQbGF5ZXIudXRpbC5jcmVhdGVEb20oJ3hnLWxpdmUnLCAn5q2j5Zyo55u05pKtJywge30sICd4Z3BsYXllci1saXZlJylcbiAgICAgIHBsYXllci5jb250cm9scy5hcHBlbmRDaGlsZChsaXZlKVxuICAgIH1cbiAgICBmbHYubG9hZCgpXG4gIH1cblxuICBzdGFydCAoKSB7XG4gICAgaWYgKCF0aGlzLmluaXRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGZsdlBsYXllciA9IHRoaXMuX19mbHZfX1xuICAgIHN1cGVyLnN0YXJ0KGZsdlBsYXllci5tc2UudXJsKVxuICAgIHRoaXMuc3JjID0gZmx2UGxheWVyLm1zZS51cmxcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZ2V0IGluaXRlZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19mbHZfXyAhPT0gdW5kZWZpbmVkXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbHZQbGF5ZXJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhSW5mbyB7XG4gICAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICAgICAgY29uc3QgX2RlZmF1bHQgPSB7XG4gICAgICAgICAgICBtaW1lVHlwZTogbnVsbCxcbiAgICAgICAgICAgIGNvZGVjOiAnJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBudWxsLFxuICAgICAgICAgICAgaGFzQXVkaW86IGZhbHNlLFxuICAgICAgICAgICAgaGFzVmlkZW86IGZhbHNlLFxuICAgICAgICAgICAgYXVkaW9Db2RlYzogbnVsbCxcbiAgICAgICAgICAgIHZpZGVvQ29kZWM6IG51bGwsXG5cbiAgICAgICAgICAgIHZpZGVvRGF0YVJhdGU6IG51bGwsXG4gICAgICAgICAgICBhdWRpb0RhdGFSYXRlOiBudWxsLFxuICAgICAgICAgICAgYXVkaW9TYW1wbGVSYXRlOiBudWxsLFxuICAgICAgICAgICAgYXVkaW9DaGFubmVsQ291bnQ6IG51bGwsXG4gICAgICAgICAgICBhdWRpb0NvbmZpZzogbnVsbCxcblxuICAgICAgICAgICAgd2lkdGg6IG51bGwsXG4gICAgICAgICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICAgICAgICBmcHM6IG51bGwsXG4gICAgICAgICAgICBwcm9maWxlOiBudWxsLFxuICAgICAgICAgICAgbGV2ZWw6IG51bGwsXG4gICAgICAgICAgICBjaHJvbWFGb3JtYXQ6IG51bGwsXG5cbiAgICAgICAgICAgIHBpeGVsUmF0aW86IFtdLFxuXG4gICAgICAgICAgICBfbWV0YURhdGE6IG51bGwsXG4gICAgICAgICAgICBzZWdtZW50czogW10sXG4gICAgICAgICAgICBoYXNLZXlmcmFtZXM6IG51bGwsXG4gICAgICAgICAgICBrZXlmcmFtZXM6IFtdLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGluaXREYXRhID0gIE9iamVjdC5hc3NpZ24oe30sIF9kZWZhdWx0LCBkYXRhKTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoaW5pdERhdGEpLmZvckVhY2goKFtrLCB2XSk9PiB7XG4gICAgICAgICAgICB0aGlzW2tdID0gdjtcbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgZ2V0IGlzQ29tcGxldGUgKCkge1xuICAgICAgICBjb25zdCB7IG1pbWVUeXBlLCBkdXJhdGlvbiwgaGFzS2V5ZnJhbWVzIH0gPSB0aGlzO1xuICAgICAgICByZXR1cm4gbWltZVR5cGUgIT09IG51bGxcbiAgICAgICAgICAgICYmIGR1cmF0aW9uICE9PSBudWxsXG4gICAgICAgICAgICAmJiBoYXNLZXlmcmFtZXMgIT09IG51bGxcbiAgICAgICAgICAgICYmIHRoaXMuaXNWaWRlb0luZm9GaWxsZWRcbiAgICAgICAgICAgICYmIHRoaXMuaXNBdWRpb0luZm9GaWxsZWQ7XG4gICAgfVxuICAgIGdldCBpc0F1ZGlvSW5mb0ZpbGxlZCAoKSB7XG4gICAgICAgIGNvbnN0IHsgaGFzQXVkaW8sXG4gICAgICAgICAgICBhdWRpb0NvZGVjLFxuICAgICAgICAgICAgYXVkaW9TYW1wbGVSYXRlLFxuICAgICAgICAgICAgYXVkaW9DaGFubmVsQ291bnQsXG4gICAgICAgIH0gPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiAhISghaGFzQXVkaW8gfHwgKGhhc0F1ZGlvICYmIGF1ZGlvQ29kZWMgJiYgYXVkaW9TYW1wbGVSYXRlICYmIGF1ZGlvQ2hhbm5lbENvdW50KSk7XG5cbiAgICB9XG5cbiAgICBnZXQgaXNWaWRlb0luZm9GaWxsZWQgKCkge1xuICAgICAgICBjb25zdCBub3ROdWxsRmllbGRzID0gW1xuICAgICAgICAgICAgJ3ZpZGVvQ29kZWMnLFxuICAgICAgICAgICAgJ3dpZHRoJyxcbiAgICAgICAgICAgICdoZWlnaHQnLFxuICAgICAgICAgICAgJ2ZwcycsXG4gICAgICAgICAgICAncHJvZmlsZScsXG4gICAgICAgICAgICAnbGV2ZWwnLFxuICAgICAgICAgICAgJ2Nocm9tYUZvcm1hdCcsXG4gICAgICAgIF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBub3ROdWxsRmllbGRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpc1tub3ROdWxsRmllbGRzW2ldXSA9PT0gbnVsbCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmhhc1ZpZGVvO1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhU2FtcGxlIHtcbiAgICBjb25zdHJ1Y3RvciAoaW5mbykge1xuICAgICAgICBsZXQgX2RlZmF1bHQgPSBNZWRpYVNhbXBsZS5nZXREZWZhdWx0SW5mKCk7XG5cbiAgICAgICAgaWYgKCFpbmZvIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbmZvKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICAgICAgICAgIHJldHVybiBfZGVmYXVsdDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2FtcGxlID0gT2JqZWN0LmFzc2lnbih7fSwgX2RlZmF1bHQsIGluZm8pO1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHNhbXBsZSkuZm9yRWFjaCgoW2ssIHZdKSA9PiB7XG4gICAgICAgICAgICB0aGlzW2tdID0gdjtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RGVmYXVsdEluZiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkdHM6IG51bGwsXG4gICAgICAgICAgICBwdHM6IG51bGwsXG4gICAgICAgICAgICBkdXJhdGlvbjogbnVsbCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBudWxsLFxuICAgICAgICAgICAgaXNSQVA6IGZhbHNlLCAvLyBpcyBSYW5kb20gYWNjZXNzIHBvaW50XG4gICAgICAgICAgICBvcmlnaW5EdHM6IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuXG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhU2VnbWVudCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnN0YXJ0RHRzID0gLTE7XG4gICAgICAgIHRoaXMuZW5kRHRzID0gLTE7XG4gICAgICAgIHRoaXMuc3RhcnRQdHMgPSAtMTtcbiAgICAgICAgdGhpcy5lbmRQdHMgPSAtMTtcbiAgICAgICAgdGhpcy5vcmlnaW5TdGFydER0cyA9IC0xO1xuICAgICAgICB0aGlzLm9yaWdpbkVuZER0cyA9IC0xO1xuICAgICAgICB0aGlzLnJhbmRvbUFjY2Vzc1BvaW50cyA9IFtdO1xuICAgICAgICB0aGlzLmZpcnN0U2FtcGxlID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0U2FtcGxlID0gbnVsbDtcbiAgICB9XG5cbiAgICBhZGRSQVAgKHNhbXBsZSkge1xuICAgICAgICBzYW1wbGUuaXNSQVAgPSB0cnVlO1xuICAgICAgICB0aGlzLnJhbmRvbUFjY2Vzc1BvaW50cy5wdXNoKHNhbXBsZSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhU2VnbWVudExpc3Qge1xuXG4gICAgY29uc3RydWN0b3IgKHR5cGUpIHtcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuX2xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5fbGFzdEFwcGVuZExvY2F0aW9uID0gLTE7IC8vIGNhY2hlZCBsYXN0IGluc2VydCBsb2NhdGlvblxuICAgIH1cblxuICAgIGdldCB0eXBlICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gICAgfVxuXG4gICAgZ2V0IGxlbmd0aCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saXN0Lmxlbmd0aDtcbiAgICB9XG5cbiAgICBpc0VtcHR5ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3QubGVuZ3RoID09PSAwO1xuICAgIH1cblxuICAgIGNsZWFyICgpIHtcbiAgICAgICAgdGhpcy5fbGlzdCA9IFtdO1xuICAgICAgICB0aGlzLl9sYXN0QXBwZW5kTG9jYXRpb24gPSAtMTtcbiAgICB9XG5cbiAgICBfc2VhcmNoTmVhcmVzdFNlZ21lbnRCZWZvcmUgKGJlZ2luRHRzKSB7XG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5fbGlzdDtcbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gLTI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxhc3QgPSBsaXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBtaWQgPSAwO1xuICAgICAgICBsZXQgbGJvdW5kID0gMDtcbiAgICAgICAgbGV0IHVib3VuZCA9IGxhc3Q7XG5cbiAgICAgICAgbGV0IGlkeCA9IDA7XG5cbiAgICAgICAgaWYgKGJlZ2luRHRzIDwgbGlzdFswXS5vcmlnaW5EdHMpIHtcbiAgICAgICAgICAgIGlkeCA9IC0xO1xuICAgICAgICAgICAgcmV0dXJuIGlkeDtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChsYm91bmQgPD0gdWJvdW5kKSB7XG4gICAgICAgICAgICBtaWQgPSBsYm91bmQgKyBNYXRoLmZsb29yKCh1Ym91bmQgLSBsYm91bmQpIC8gMik7XG4gICAgICAgICAgICBpZiAobWlkID09PSBsYXN0IHx8IChiZWdpbkR0cyA+IGxpc3RbbWlkXS5sYXN0U2FtcGxlLm9yaWdpbkR0c1xuICAgICAgICAgICAgICAgICAgICAmJiAoYmVnaW5EdHMgPCBsaXN0W21pZCArIDFdLm9yaWdpbkR0cykpKSB7XG4gICAgICAgICAgICAgICAgaWR4ID0gbWlkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsaXN0W21pZF0ub3JpZ2luRHRzIDwgYmVnaW5EdHMpIHtcbiAgICAgICAgICAgICAgICBsYm91bmQgPSBtaWQgKyAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1Ym91bmQgPSBtaWQgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZHg7XG4gICAgfVxuXG4gICAgX3NlYXJjaE5lYXJlc3RTZWdtZW50QWZ0ZXIgKGJlZ2luRHRzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWFyY2hOZWFyZXN0U2VnbWVudEJlZm9yZShiZWdpbkR0cykgKyAxO1xuICAgIH1cblxuICAgIGFwcGVuZCAoc2VnbWVudCkge1xuICAgICAgICBsZXQgbGlzdCA9IHRoaXMuX2xpc3Q7XG4gICAgICAgIGxldCBsYXN0QXBwZW5kSWR4ID0gdGhpcy5fbGFzdEFwcGVuZExvY2F0aW9uO1xuICAgICAgICBsZXQgaW5zZXJ0SWR4ID0gMDtcblxuICAgICAgICBpZiAobGFzdEFwcGVuZElkeCAhPT0gLTEgJiYgbGFzdEFwcGVuZElkeCA8IGxpc3QubGVuZ3RoXG4gICAgICAgICAgICAmJiBzZWdtZW50Lm9yaWdpblN0YXJ0RHRzID49IGxpc3RbbGFzdEFwcGVuZElkeF0ubGFzdFNhbXBsZS5vcmlnaW5EdHNcbiAgICAgICAgICAgICYmICgobGFzdEFwcGVuZElkeCA9PT0gbGlzdC5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgIHx8IChsYXN0QXBwZW5kSWR4IDwgbGlzdC5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgICYmIHNlZ21lbnQub3JpZ2luU3RhcnREdHMgPCBsaXN0W2xhc3RBcHBlbmRJZHggKyAxXS5vcmlnaW5TdGFydER0cykpKSB7XG4gICAgICAgICAgICBpbnNlcnRJZHggPSBsYXN0QXBwZW5kSWR4ICsgMTsgLy8gdXNlIGNhY2hlZCBsb2NhdGlvbiBpZHhcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpbnNlcnRJZHggPSB0aGlzLl9zZWFyY2hOZWFyZXN0U2VnbWVudEJlZm9yZShzZWdtZW50Lm9yaWdpblN0YXJ0RHRzKSArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sYXN0QXBwZW5kTG9jYXRpb24gPSBpbnNlcnRJZHg7XG4gICAgICAgIHRoaXMuX2xpc3Quc3BsaWNlKGluc2VydElkeCwgMCwgc2VnbWVudCk7XG4gICAgfVxuXG4gICAgZ2V0TGFzdFNlZ21lbnRCZWZvcmUgKGJlZ2luRHRzKSB7XG4gICAgICAgIGxldCBpZHggPSB0aGlzLl9zZWFyY2hOZWFyZXN0U2VnbWVudEJlZm9yZShiZWdpbkR0cyk7XG4gICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3RbaWR4XTtcbiAgICAgICAgfSBlbHNlIHsgLy8gLTFcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TGFzdFNhbXBsZUJlZm9yZSAoYmVnaW5EdHMpIHtcbiAgICAgICAgbGV0IHNlZ21lbnQgPSB0aGlzLmdldExhc3RTZWdtZW50QmVmb3JlKGJlZ2luRHRzKTtcbiAgICAgICAgaWYgKHNlZ21lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWdtZW50Lmxhc3RTYW1wbGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExhc3RSQVBCZWZvcmUgKGJlZ2luRHRzKSB7XG4gICAgICAgIGxldCBzZWdtZW50SWR4ID0gdGhpcy5fc2VhcmNoTmVhcmVzdFNlZ21lbnRCZWZvcmUoYmVnaW5EdHMpO1xuICAgICAgICBsZXQgcmFuZG9tQWNjZXNzUG9pbnRzID0gdGhpcy5fbGlzdFtzZWdtZW50SWR4XS5yYW5kb21BY2Nlc3NQb2ludHM7XG4gICAgICAgIHdoaWxlIChyYW5kb21BY2Nlc3NQb2ludHMubGVuZ3RoID09PSAwICYmIHNlZ21lbnRJZHggPiAwKSB7XG4gICAgICAgICAgICBzZWdtZW50SWR4LS07XG4gICAgICAgICAgICByYW5kb21BY2Nlc3NQb2ludHMgPSB0aGlzLl9saXN0W3NlZ21lbnRJZHhdLnJhbmRvbUFjY2Vzc1BvaW50cztcbiAgICAgICAgfVxuICAgICAgICBpZiAocmFuZG9tQWNjZXNzUG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiByYW5kb21BY2Nlc3NQb2ludHNbcmFuZG9tQWNjZXNzUG9pbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgTWVkaWFJbmZvIGZyb20gJy4vTWVkaWFJbmZvJ1xuaW1wb3J0IHNuaWZmZXIgZnJvbSAnLi4vdXRpbHMvc25pZmZlcidcbmNsYXNzIFN0b3JlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0xlOiBzbmlmZmVyLmlzTGUsXG4gICAgICBfaGFzQXVkaW86IGZhbHNlLFxuICAgICAgX2hhc1ZpZGVvOiBmYWxzZSxcbiAgICAgIF9tZWRpYUluZm86IG5ldyBNZWRpYUluZm8oKSxcbiAgICAgIF9tZXRhRGF0YTogbnVsbCxcbiAgICAgIF92aWRlb1RyYWNrOiB7dHlwZTogJ3ZpZGVvJywgaWQ6IDEsIHNhbXBsZXM6IFtdLCBsZW5ndGg6IDB9LFxuICAgICAgX2F1ZGlvVHJhY2s6IHt0eXBlOiAnYXVkaW8nLCBpZDogMiwgc2FtcGxlczogW10sIGxlbmd0aDogMH0sXG4gICAgICBfdmlkZW9NZXRhRGF0YTogbnVsbCxcbiAgICAgIF9hdWRpb01ldGFEYXRhOiBudWxsLFxuICAgICAgX2F1ZGlvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZDogZmFsc2UsXG4gICAgICBfdmlkZW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkOiBmYWxzZSxcbiAgICAgIHRhZ3M6IFtdLFxuICAgICAgdGltZVN0YW1wQmFzZTogMCxcbiAgICAgIGhhc1ZpZGVvRmxhZ092ZXJyaWRlZDogZmFsc2UsXG4gICAgICBoYXNBdWRpb0ZsYWdPdmVycmlkZWQ6IGZhbHNlLFxuICAgICAgdGltZVNjYWxlOiAxMDAwLFxuICAgICAgZHVyYXRpb246IDAsXG4gICAgICBpc0xpdmU6IGZhbHNlLFxuICAgICAgZHVyYXRpb25PdmVycmlkZWQ6IGZhbHNlLFxuICAgICAgbmFsdUxlbmd0aFNpemU6IDQsXG4gICAgICBfcmVmZXJGcmFtZVJhdGU6IHtcbiAgICAgICAgZml4ZWQ6IHRydWUsXG4gICAgICAgIGZwczogMjMuOTc2LFxuICAgICAgICBmcHNOdW06IDIzOTc2LFxuICAgICAgICBmcHNEZW46IDEwMDBcbiAgICAgIH0sXG4gICAgICBtZXRhRW5kUG9zaXRpb246IC0xXG4gICAgfVxuXG4gICAgdGhpcy5tZXRob2RzID0ge1xuICAgICAgX2lzSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgX2hhc0F1ZGlvLFxuICAgICAgICAgIF9oYXNWaWRlbyxcbiAgICAgICAgICBfYXVkaW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkLFxuICAgICAgICAgIF92aWRlb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWRcbiAgICAgICAgfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgaWYgKF9oYXNBdWRpbyAmJiBfaGFzVmlkZW8pIHsgLy8gYm90aCBhdWRpbyAmIHZpZGVvXG4gICAgICAgICAgcmV0dXJuIF9hdWRpb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWQgJiYgX3ZpZGVvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZFxuICAgICAgICB9XG4gICAgICAgIGlmIChfaGFzQXVkaW8gJiYgIV9oYXNWaWRlbykgeyAvLyBhdWRpbyBvbmx5XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2F1ZGlvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZFxuICAgICAgICB9XG4gICAgICAgIGlmICghX2hhc0F1ZGlvICYmIF9oYXNWaWRlbykgeyAvLyB2aWRlbyBvbmx5XG4gICAgICAgICAgcmV0dXJuIF92aWRlb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyVGFncyAoKSB7XG4gICAgdGhpcy5zdGF0ZS50YWdzID0gW11cbiAgfVxuICBnZXQgcmVmZXJGcmFtZVJhdGUgKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLl9yZWZlckZyYW1lUmF0ZVxuICB9XG5cbiAgc2V0IHJlZmVyRnJhbWVSYXRlICh2YWwpIHtcbiAgICB0aGlzLnN0YXRlLl9yZWZlckZyYW1lUmF0ZSA9IHZhbFxuICB9XG5cbiAgc2V0IG1lZGlhSW5mbyAobWVkaWFJbmZvKSB7XG4gICAgdGhpcy5zdGF0ZS5fbWVkaWFJbmZvID0gbWVkaWFJbmZvXG4gIH1cblxuICBnZXQgbWVkaWFJbmZvICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5fbWVkaWFJbmZvXG4gIH1cblxuICBnZXQgbWV0YURhdGEgKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLl9tZXRhRGF0YVxuICB9XG5cbiAgZ2V0IGhhc01ldGFEYXRhICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5fbWV0YURhdGEgIT09IG51bGxcbiAgfVxuXG4gIHNldCBtZXRhRGF0YSAodikge1xuICAgIHRoaXMuc3RhdGUuX21ldGFEYXRhID0gdlxuICB9XG5cbiAgc2V0IGF1ZGlvVHJhY2sgKHZhbCkge1xuICAgIHRoaXMuc3RhdGUuX2F1ZGlvVHJhY2sgPSB2YWxcbiAgfVxuXG4gIGdldCBhdWRpb1RyYWNrICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5fYXVkaW9UcmFja1xuICB9XG5cbiAgc2V0IHZpZGVvVHJhY2sgKHZhbCkge1xuICAgIHRoaXMuc3RhdGUuX3ZpZGVvVHJhY2sgPSB2YWxcbiAgfVxuXG4gIGdldCB2aWRlb1RyYWNrICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5fdmlkZW9UcmFja1xuICB9XG5cbiAgc2V0IGhhc0F1ZGlvICh2YWwpIHtcbiAgICB0aGlzLnN0YXRlLl9oYXNBdWRpbyA9IHZhbFxuICAgIHRoaXMuc3RhdGUuX21lZGlhSW5mby5oYXNBdWRpbyA9IHZhbFxuICB9XG5cbiAgZ2V0IGhhc0F1ZGlvICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5faGFzQXVkaW9cbiAgfVxuXG4gIHNldCBoYXNWaWRlbyAodmFsKSB7XG4gICAgdGhpcy5zdGF0ZS5faGFzVmlkZW8gPSB2YWxcbiAgICB0aGlzLnN0YXRlLl9tZWRpYUluZm8uaGFzVmlkZW8gPSB2YWxcbiAgfVxuXG4gIGdldCBoYXNWaWRlbyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuX2hhc1ZpZGVvXG4gIH1cblxuICBzZXQgdmlkZW9NZXRhRGF0YSAodmFsKSB7XG4gICAgdGhpcy5zdGF0ZS5fdmlkZW9NZXRhRGF0YSA9IHZhbFxuICB9XG5cbiAgZ2V0IHZpZGVvTWV0YURhdGEgKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLl92aWRlb01ldGFEYXRhXG4gIH1cblxuICBzZXQgYXVkaW9NZXRhRGF0YSAodmFsKSB7XG4gICAgdGhpcy5zdGF0ZS5fYXVkaW9NZXRhRGF0YSA9IHZhbFxuICB9XG5cbiAgZ2V0IGF1ZGlvTWV0YURhdGEgKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLl9hdWRpb01ldGFEYXRhXG4gIH1cblxuICBnZXQga2V5ZnJhbWVzICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5fbWVkaWFJbmZvLmtleWZyYW1lc1xuICB9XG4gIGdldCBpc1NlZWthYmxlICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5fbWVkaWFJbmZvLmhhc0tleWZyYW1lc1xuICB9XG5cbiAgZ2V0IGlzTGUgKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmlzTGVcbiAgfVxuICBnZXQgaGFzSW5pdGlhbE1ldGFEaXNwYXRjaGVkICgpIHtcbiAgICBjb25zdCB7XG4gICAgICBfaGFzQXVkaW8sXG4gICAgICBfaGFzVmlkZW8sXG4gICAgICBfYXVkaW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkLFxuICAgICAgX3ZpZGVvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZFxuICAgIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKF9oYXNBdWRpbyAmJiBfaGFzVmlkZW8pIHtcbiAgICAgIHJldHVybiBfYXVkaW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkICYmIF92aWRlb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWRcbiAgICB9XG4gICAgaWYgKF9oYXNBdWRpbyAmJiAhX2hhc1ZpZGVvKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYXVkaW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkXG4gICAgfVxuICAgIGlmICghX2hhc0F1ZGlvICYmIF9oYXNWaWRlbykge1xuICAgICAgcmV0dXJuIF92aWRlb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWRcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBnZXQgdmlkZW9UaW1lU2NhbGUgKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnRpbWVTY2FsZVxuICB9XG5cbiAgZ2V0IG1ldGFFbmRQb3NpdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUubWV0YUVuZFBvc2l0aW9uXG4gIH1cblxuICBzZXQgbWV0YUVuZFBvc2l0aW9uIChwb3MpIHtcbiAgICB0aGlzLnN0YXRlLm1ldGFFbmRQb3NpdGlvbiA9IHBvc1xuICB9XG5cbiAgZ2V0IGlzTGl2ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNMaXZlXG4gIH1cblxuICBzZXQgaXNMaXZlICh2YWwpIHtcbiAgICB0aGlzLnN0YXRlLmlzTGl2ZSA9IHZhbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGbHZUYWcge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy50YWdUeXBlID0gLTE7XG4gICAgICAgIHRoaXMuYm9keVNpemUgPSAtMTtcbiAgICAgICAgdGhpcy50YWdTaXplID0gLTE7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSAtMTtcbiAgICAgICAgdGhpcy5UaW1lc3RhbXAgPSAtMTtcbiAgICAgICAgdGhpcy5TdHJlYW1JRCA9IC0xO1xuICAgICAgICB0aGlzLmJvZHkgPSAtMTtcbiAgICAgICAgdGhpcy50aW1lID0gLTE7XG4gICAgICAgIHRoaXMuYXJyID0gW107XG4gICAgfVxuXG4gICAgZ2V0VGltZSAoKSB7XG4gICAgICAgIHRoaXMuYXJyID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5UaW1lc3RhbXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYXJyLnB1c2goKHRoaXMuVGltZXN0YW1wW2ldLnRvU3RyaW5nKDE2KS5sZW5ndGggPT09IDEgPyAnMCcgKyB0aGlzLlRpbWVzdGFtcFtpXS50b1N0cmluZygxNikgOiB0aGlzLlRpbWVzdGFtcFtpXS50b1N0cmluZygxNikpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFyci5wb3AoKTtcbiAgICAgICAgY29uc3QgdGltZSA9IHRoaXMuYXJyLmpvaW4oJycpO1xuICAgICAgICB0aGlzLnRpbWUgPSBwYXJzZUludCh0aW1lLCAxNik7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh0aW1lLCAxNik7XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbidcbmNvbnN0IEVycm9yVHlwZXMgPSB7XG4gIG5ldHdvcms6IHtcbiAgICBjb2RlOiAxLFxuICAgIG1zZzogJ+inhumikeS4i+i9vemUmeivrycsXG4gICAgcmVtYXJrOiAn5Y+q6KaB6KeG6aKR5LiL6L296ZSZ6K+v5bCx5L2/55So5q2k57G75Z6L77yM5peg6K665pivdmlkZW/mnKzouqvnmoTotoXml7bov5jmmK94aHLnmoTliIbmrrXor7fmsYLotoXml7bmiJbogIXotYTmupDkuI3lrZjlnKgnXG4gIH0sXG4gIG1zZToge1xuICAgIGNvZGU6IDIsXG4gICAgbXNnOiAn5rWB6L+95Yqg6ZSZ6K+vJyxcbiAgICByZW1hcms6ICfov73liqDmtYHnmoTml7blgJnlpoLmnpznsbvlnovkuI3lr7njgIHml6Dms5XooqvmraPnoa7op6PnoIHliJnkvJrop6blj5HmraTnsbvplJnor68nXG4gIH0sXG4gIHBhcnNlOiB7XG4gICAgY29kZTogMyxcbiAgICBtc2c6ICfop6PmnpDplJnor68nLFxuICAgIHJlbWFyazogJ21wNOOAgWhsc+OAgWZsduaIkeS7rOmDveaYr+S9v+eUqGpz6L+b6KGM5qC85byP6Kej5p6Q77yM5aaC5p6c6Kej5p6Q5aSx6LSl5YiZ5Lya6Kem5Y+R5q2k57G76ZSZ6K+vJ1xuICB9LFxuICBmb3JtYXQ6IHtcbiAgICBjb2RlOiA0LFxuICAgIG1zZzogJ+agvOW8j+mUmeivrycsXG4gICAgcmVtYXJrOiAn5aaC5p6c5rWP6KeI5Zmo5LiN5pSv5oyB55qE5qC85byP5a+86Ie05pKt5pS+6ZSZ6K+vJ1xuICB9LFxuICBkZWNvZGVyOiB7XG4gICAgY29kZTogNSxcbiAgICBtc2c6ICfop6PnoIHplJnor68nLFxuICAgIHJlbWFyazogJ+a1j+iniOWZqOino+eggeW8guW4uOS8muaKm+WHuuatpOexu+Wei+mUmeivrydcbiAgfSxcbiAgcnVudGltZToge1xuICAgIGNvZGU6IDYsXG4gICAgbXNnOiAn6K+t5rOV6ZSZ6K+vJyxcbiAgICByZW1hcms6ICfmkq3mlL7lmajor63ms5XplJnor68nXG4gIH0sXG4gIHRpbWVvdXQ6IHtcbiAgICBjb2RlOiA3LFxuICAgIG1zZzogJ+aSreaUvui2heaXticsXG4gICAgcmVtYXJrOiAn5pKt5pS+6L+H56iL5Lit5peg5rOV5q2j5bi46K+35rGC5LiL5LiA5Liq5YiG5q615a+86Ie05pKt5pS+5Lit5patJ1xuICB9LFxuICBvdGhlcjoge1xuICAgIGNvZGU6IDgsXG4gICAgbXNnOiAn5YW25LuW6ZSZ6K+vJyxcbiAgICByZW1hcms6ICfkuI3lj6/nn6XnmoTplJnor6/miJbooqvlv73nlaXnmoTplJnor6/nsbvlnosnXG4gIH1cbn1cblxuY2xhc3MgRXJyb3JzIHtcbiAgY29uc3RydWN0b3IgKHR5cGUsIGN1cnJlbnRUaW1lLCBkdXJhdGlvbiwgbmV0d29ya1N0YXRlLCByZWFkeVN0YXRlLCBzcmMsIGN1cnJlbnRTcmMsXG4gICAgZW5kZWQsIGVycmQgPSB7bGluZTogJycsIGhhbmRsZTogJycsIG1zZzogJycsIHZlcnNpb246ICcnfSkge1xuICAgIGxldCByID0ge31cbiAgICByLnBsYXllclZlcnNpb24gPSB2ZXJzaW9uIC8vIOaSreaUvuWZqOeJiOacrFxuICAgIHIuZXJyb3JUeXBlID0gdHlwZVxuICAgIHIuZG9tYWluID0gZG9jdW1lbnQuZG9tYWluIC8vIGRvbWFpblxuICAgIHIuZHVyYXRpb24gPSBkdXJhdGlvbiAvLyDop4bpopHml7bplb9cbiAgICByLmN1cnJlbnRUaW1lID0gY3VycmVudFRpbWVcbiAgICByLm5ldHdvcmtTdGF0ZSA9IG5ldHdvcmtTdGF0ZVxuICAgIHIucmVhZHlTdGF0ZSA9IHJlYWR5U3RhdGVcbiAgICByLmN1cnJlbnRTcmMgPSBjdXJyZW50U3JjXG4gICAgci5zcmMgPSBzcmNcbiAgICByLmVuZGVkID0gZW5kZWRcbiAgICByLmVycmQgPSBlcnJkIC8vIOmUmeivr+ivpuaDhVxuICAgIHIuZXggPSAoRXJyb3JUeXBlc1t0eXBlXSB8fCB7fSkubXNnIC8vIOihpeWFheS/oeaBr1xuICAgIHJldHVybiByXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JzXG4iLCIvL+egtOivkeiAhSBcbi8vcGFyc2VEYXRhIOacgOWQjuaYr+WIm+W7unRhZyB0aGlzLl9zdG9yZS5zdGF0ZS50YWdz5LitXG5pbXBvcnQgRGVtdXhlciBmcm9tICcuL2RlbXV4L0RlbXV4ZXInXG5pbXBvcnQgQnVmZmVyIGZyb20gJy4uL3dyaXRlL0J1ZmZlcidcbmltcG9ydCBUYWcgZnJvbSAnLi4vbW9kZWxzL1RhZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmx2UGFyc2VyIGV4dGVuZHMgRGVtdXhlciB7XG4gIGNvbnN0cnVjdG9yIChzdG9yZSkge1xuICAgIHN1cGVyKHN0b3JlKVxuICAgIHRoaXMuQ0xBU1NfTkFNRSA9IHRoaXMuY29uc3RydWN0b3IubmFtZVxuICAgIHRoaXMudGVtcF91OGEgPSBudWxsXG4gICAgdGhpcy5kYXRhTGVuID0gMFxuICAgIHRoaXMuc3RvcCA9IGZhbHNlXG4gICAgdGhpcy5pbmRleCA9IDAgLy8gcmVjb3JkIHRoZSBwb3NpdGlvbiBpbiBzaW5nbGUgcm91bmRcbiAgICB0aGlzLm9mZnNldCA9IDBcbiAgICB0aGlzLmZpbGVQb3NpdGlvbiA9IDAgLy8gcmVjb3JkIGN1cnJlbnQgZmlsZSBwb3NpdGlvblxuICAgIHRoaXMuZmlyc3RGbGFnID0gdHJ1ZVxuICB9XG5cbiAgc2VlayAoKSB7XG4gICAgdGhpcy5vZmZzZXQgPSAwXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnRlbXBfdThhID0gbnVsbFxuICAgIHRoaXMuZGF0YUxlbiA9IDBcbiAgICB0aGlzLnN0b3AgPSBmYWxzZVxuICAgIHRoaXMuaW5kZXggPSAwIC8vIHJlY29yZCB0aGUgcG9zaXRpb24gaW4gc2luZ2xlIHJvdW5kXG4gICAgdGhpcy5vZmZzZXQgPSAwXG4gICAgdGhpcy5maWxlUG9zaXRpb24gPSAwXG4gIH1cblxuICBzZXRGbHYgKGZsdlU4YSkge1xuICAgIC8vIOavj+S4gOasoXNldEZsdumDveWbnumHjee9rmluZGV45ZKMb2Zmc2V0IOeEtuWQjui/lOWbnm9mZnNldCDlpJbpnaLmoLnmja5vZmZzZXTov5vooYzoo4HliarmlbDmja5cbiAgICB0aGlzLnN0b3AgPSBmYWxzZVxuICAgIHRoaXMuaW5kZXggPSAwXG4gICAgdGhpcy5vZmZzZXQgPSAwXG4gICAgY29uc3QgdGVtcFU4YSA9IHRoaXMudGVtcF91OGEgPSBmbHZVOGFcbiAgICB0aGlzLmRhdGFMZW4gPSB0aGlzLnRlbXBfdThhLmxlbmd0aFxuXG4gICAgaWYgKCF0aGlzLmZpcnN0RmxhZykge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VEYXRhKClcbiAgICAgIC8vIOi2hei/hzEz5Liq5a2X6IqC5omN5byA5aeL5aSE55CGXG4gICAgfSBlbHNlIGlmICh0ZW1wVThhLmxlbmd0aCA+IDEzICYmIEZsdlBhcnNlci5pc0ZsdkhlYWQodGVtcFU4YSkpIHtcbiAgICAgIC8vIOino+aekOaYr+WQpuaciemfs+inhumikSBcbiAgICAgIHRoaXMucGFyc2VIZWFkKClcbiAgICAgIC8vIOaUueWPmHRoaXMuaW5kZXhcbiAgICAgIHRoaXMucmVhZERhdGEoOSkgLy8g6Lez6L+H5aS06YOoXG4gICAgICB0aGlzLnJlYWREYXRhKDQpIC8vIOi3s+i/h+S4i+S4gOS4quiusOW9leWktOmDqHNpemXnmoQgaW50MzJcbiAgICAgIHRoaXMucGFyc2VEYXRhKClcbiAgICAgIHRoaXMuZmlyc3RGbGFnID0gZmFsc2VcbiAgICAgIHRoaXMuZmlsZVBvc2l0aW9uICs9IHRoaXMub2Zmc2V0XG4gICAgICByZXR1cm4gdGhpcy5vZmZzZXRcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0XG4gICAgfVxuICB9XG5cbiAgcGFyc2VEYXRhICgpIHtcbiAgICBjb25zdCB7bGVuZ3RoOiB1OGFMZW5ndGh9ID0gdGhpcy50ZW1wX3U4YVxuICAgIC8vIOi/memHjOacieS4queWkemXriDlpoLmnpxoZWFkZXLlkoxib2R55LiN5piv5LiA5qyh5p2l55qEIHRhZ+S8muS4jeS8muiuoeeul+mUmeivr++8jOayoeacieS4peagvOeahHRhZ+eahOW8gOWni+WSjOe7k+adn+agh+W/lyBcbiAgICAvLyDnrKzkuIDmrKFidWZmZXIgdGFn55qEYm9keeayoeacieWujOWFqOWIsOe7k+adn+S6hiDkvYbmmK9vZmZzZXTmiooxMeS4qmhlYWRlcuWtl+iKguWIoOmZpOS6hu+8jOS4i+asoeadpeWwseayoeaciWhlYWRlcuWtl+iKguS6huOAglxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdThhTGVuZ3RoICYmICF0aGlzLnN0b3ApIHtcbiAgICAgIC8vb2Zmc2V05piv5pyA5ZCO6L+U5Zue55qE5aSE55CG5Yiw55qE5L2N572uXG4gICAgICB0aGlzLm9mZnNldCA9IHRoaXMuaW5kZXhcbiAgICAgIGNvbnN0IHRhZyA9IG5ldyBUYWcoKVxuICAgICAgaWYgKHRoaXMudW5yZWFkTGVuZ3RoID49IDExKSB7XG4gICAgICAgIC8vIOWPr+S7peivu+WHuuWktOmDqOS/oeaBr1xuICAgICAgICB0YWcucG9zaXRpb24gPSB0aGlzLmZpbGVQb3NpdGlvbiArIHRoaXMub2Zmc2V0XG4gICAgICAgIHRhZy50YWdUeXBlID0gdGhpcy5yZWFkRGF0YSgxKVswXVxuICAgICAgICB0YWcuYm9keVNpemUgPSB0aGlzLnJlYWREYXRhKDMpXG4gICAgICAgIHRhZy5UaW1lc3RhbXAgPSB0aGlzLnJlYWREYXRhKDQpXG4gICAgICAgIHRhZy5TdHJhbUlkID0gdGhpcy5yZWFkRGF0YSgzKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g5aaC5p6c5pWw5o2u5bCP5LqOMTHkuKrlrZfoioIg5YiZ55u05o6lcmV0dXJuIG9mZnNldOWwseaYr+W9k+WJjeeahGluZGV4XG4gICAgICAgIHRoaXMuc3RvcCA9IHRydWVcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnVucmVhZExlbmd0aCA+PSB0aGlzLmdldEJvZHlTaXplKHRhZy5ib2R5U2l6ZSkgKyA0KSB7XG4gICAgICAgIHRhZy5ib2R5ID0gdGhpcy5yZWFkRGF0YSh0aGlzLmdldEJvZHlTaXplKHRhZy5ib2R5U2l6ZSkpXG4gICAgICAgIHRhZy50YWdTaXplID0gdGhpcy5yZWFkRGF0YSg0KVxuICAgICAgICAvLyDmnIDlkI7mmK/lrZjmlL7liLDkuoZzdG9yZeS4reeahHRhZ3NcbiAgICAgICAgY29uc3Qge3RhZ3MsIF9oYXNWaWRlbywgX2hhc0F1ZGlvfSA9IHRoaXMuX3N0b3JlLnN0YXRlXG4gICAgICAgIHN3aXRjaCAodGFnLnRhZ1R5cGUpIHtcbiAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBfaGFzVmlkZW8gJiYgdGFncy5wdXNoKHRhZylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgX2hhc0F1ZGlvICYmIHRhZ3MucHVzaCh0YWcpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICB0YWdzLnB1c2godGFnKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdG9wID0gdHJ1ZVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICB0aGlzLm9mZnNldCA9IHRoaXMuaW5kZXhcbiAgICB9XG4gICAgdGhpcy5maWxlUG9zaXRpb24gKz0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnRlbXBfdThhID0gbnVsbFxuICAgIHJldHVybiB0aGlzLm9mZnNldFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBzaXplQXJyXG4gICAqIEByZXR1cm5cbiAgICovXG4gIGdldEJvZHlTaXplIChzaXplQXJyKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5yZWFkQXNJbnQoc2l6ZUFycilcbiAgfVxuICAvLyBcbiAgcGFyc2VIZWFkICgpIHtcbiAgICBjb25zdCB7dGVtcF91OGE6IHRlbXBVOGEsIF9zdG9yZX0gPSB0aGlzXG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgbWF0Y2g6IGZhbHNlXG4gICAgfVxuICAgIC8vIOesrOWbm+S4quWtl+iKguaYrzFcbiAgICBpZiAodGVtcFU4YVszXSAhPT0gMSkge1xuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgICAvLyDnrKzkupTkuKrlrZfoioJcbiAgICBjb25zdCBmbGFnID0gdGVtcFU4YVs0XVxuICAgIC8vIDEwMCAg56ys5LiJ5L2N5pivMeS7o+ihqOaciemfs+mikVxuICAgIGNvbnN0IGhhc0F1ZGlvID0gKChmbGFnICYgNCkgPj4+IDIpICE9PSAwXG4gICAgLy8gMDEg56ys5LiA5L2N5pivMSDku6PooajmnInop4bpopFcbiAgICBjb25zdCBoYXNWaWRlbyA9IChmbGFnICYgMSkgIT09IDBcblxuICAgIGlmICghaGFzQXVkaW8gJiYgIWhhc1ZpZGVvKSB7XG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgX3N0b3JlLmhhc0F1ZGlvID0gaGFzQXVkaW9cbiAgICBfc3RvcmUuaGFzVmlkZW8gPSBoYXNWaWRlb1xuICB9XG5cbiAgcmVhZERhdGEgKGxlbmd0aCkge1xuICAgIGNvbnN0IF9pbmRleCA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLmluZGV4ICs9IGxlbmd0aFxuICAgIHJldHVybiB0aGlzLnRlbXBfdThhLnNsaWNlKF9pbmRleCwgX2luZGV4ICsgbGVuZ3RoKVxuICB9XG5cbiAgZ2V0IHVucmVhZExlbmd0aCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YUxlbiAtIHRoaXMuaW5kZXhcbiAgfVxuXG4gIHN0YXRpYyBpc0ZsdkhlYWQgKHRlbXBVOGEpIHtcbiAgICBsZXQgZmlyc3RUaHJlZUNoYXJzID0gW3RlbXBVOGFbMF0sIHRlbXBVOGFbMV0sIHRlbXBVOGFbMl1dXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBmaXJzdFRocmVlQ2hhcnMpID09PSAnRkxWJ1xuICB9XG59XG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50LWVtaXR0ZXInXG5sZXQgY291bnQgPSAwXG5jbGFzcyBNU0Uge1xuICBjb25zdHJ1Y3RvciAobWVkaWFFbGVtZW50KSB7XG4gICAgLy9jb2RlY3Mg6Kej56CB5ZmoXG4gICAgdGhpcy5jb2RlY3MgPSAndmlkZW8vbXA0OyBjb2RlY3M9XCJhdmMxLjY0MDAxRSwgbXA0YS40MC41XCInXG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgRXZlbnRFbWl0dGVyKHRoaXMpXG4gICAgdGhpcy5tZWRpYVNvdXJjZSA9IG5ldyB3aW5kb3cuTWVkaWFTb3VyY2UoKVxuICAgIG1lZGlhRWxlbWVudC5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLm1lZGlhU291cmNlKVxuICAgIHRoaXMudXJsID0gbWVkaWFFbGVtZW50LnNyY1xuICAgIHRoaXMuaGFuZGxlU291cmNlT3BlbiA9IHRoaXMub25Tb3VyY2VPcGVuLmJpbmQodGhpcylcbiAgICB0aGlzLm1lZGlhU291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ3NvdXJjZW9wZW4nLCB0aGlzLmhhbmRsZVNvdXJjZU9wZW4pXG5cbiAgICB0aGlzLm1lZGlhU291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ3NvdXJjZWNsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5lbWl0KCdzb3VyY2VjbG9zZScpXG4gICAgfSlcbiAgfVxuXG4gIG9uU291cmNlT3BlbiAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnNvdXJjZUJ1ZmZlciA9IHNlbGYubWVkaWFTb3VyY2UuYWRkU291cmNlQnVmZmVyKHNlbGYuY29kZWNzKVxuICAgIHNlbGYuc291cmNlQnVmZmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHNlbGYuZW1pdCgnZXJyb3InLCB7XG4gICAgICAgIHR5cGU6ICdzb3VyY2VCdWZmZXInLFxuICAgICAgICBlcnJvcjogZVxuICAgICAgfSlcbiAgICB9KVxuICAgIHNlbGYuc291cmNlQnVmZmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3VwZGF0ZWVuZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBzZWxmLmVtaXQoJ3VwZGF0ZWVuZCcpXG4gICAgfSlcbiAgICBzZWxmLmVtaXQoJ3NvdXJjZW9wZW4nKVxuICAgIHNlbGYuc291cmNlQnVmZmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHNlbGYuZW1pdCgnZXJyb3InLCB7XG4gICAgICAgIHR5cGU6ICdtZWRpYVNvdXJjZScsXG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgZ2V0IHN0YXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5tZWRpYVNvdXJjZS5yZWFkeVN0YXRlXG4gIH1cblxuICBnZXQgZHVyYXRpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm1lZGlhU291cmNlLmR1cmF0aW9uXG4gIH1cblxuICBzZXQgZHVyYXRpb24gKHZhbHVlKSB7XG4gICAgdGhpcy5tZWRpYVNvdXJjZS5kdXJhdGlvbiA9IHZhbHVlXG4gIH1cblxuICBhcHBlbmRCdWZmZXIgKGJ1ZmZlcikge1xuICAgIGxldCBzb3VyY2VCdWZmZXIgPSB0aGlzLnNvdXJjZUJ1ZmZlclxuICAgIGlmIChzb3VyY2VCdWZmZXIudXBkYXRpbmcgPT09IGZhbHNlICYmIHRoaXMuc3RhdGUgPT09ICdvcGVuJykge1xuICAgICAgc291cmNlQnVmZmVyLmFwcGVuZEJ1ZmZlcihidWZmZXIpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ2Nsb3NlZCcpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIHtcbiAgICAgICAgICB0eXBlOiAnc291cmNlQnVmZmVyJyxcbiAgICAgICAgICBlcnJvcjogbmV3IEVycm9yKCdtZWRpYVNvdXJjZSBpcyBub3QgYXR0YWNoZWQgdG8gdmlkZW8gb3IgbWVkaWFTb3VyY2UgaXMgY2xvc2VkJylcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gJ2VuZGVkJykge1xuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywge1xuICAgICAgICAgIHR5cGU6ICdzb3VyY2VCdWZmZXInLFxuICAgICAgICAgIGVycm9yOiBuZXcgRXJyb3IoJ21lZGlhU291cmNlIGlzIGNsb3NlZCcpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc291cmNlQnVmZmVyLnVwZGF0aW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5lbWl0KCd3YXJuJywge1xuICAgICAgICAgICAgdHlwZTogJ3NvdXJjZUJ1ZmZlcicsXG4gICAgICAgICAgICBlcnJvcjogbmV3IEVycm9yKCdtZWRpYVNvdXJjZSBpcyBidXN5JylcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIC8vIHRoaXMubWVkaWFTb3VyY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignc291cmNlb3BlbicsIHRoaXMuaGFuZGxlU291cmNlT3BlbilcbiAgICB0aGlzLl9fZWVfXyA9IHt9XG4gICAgLy8gdGhpcy5tZWRpYVNvdXJjZSA9IG51bGxcbiAgICAvLyB0aGlzLmVuZE9mU3RyZWFtKClcbiAgfVxuICByZW1vdmVCdWZmZXIgKHN0YXJ0LCBlbmQpIHtcbiAgICB0aGlzLnNvdXJjZUJ1ZmZlci5yZW1vdmUoc3RhcnQsIGVuZClcbiAgfVxuXG4gIGVuZE9mU3RyZWFtICgpIHtcbiAgICBpZiAodGhpcy5tZWRpYVNvdXJjZS5yZWFkeVN0YXRlID09PSAnb3BlbicpIHtcbiAgICAgIHRoaXMubWVkaWFTb3VyY2UuZW5kT2ZTdHJlYW0oKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBpc1N1cHBvcnRlZCAoY29kZWNzKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5NZWRpYVNvdXJjZSAmJiB3aW5kb3cuTWVkaWFTb3VyY2UuaXNUeXBlU3VwcG9ydGVkKGNvZGVjcylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNU0VcbiIsImltcG9ydCBNcDRSZW11eGVyIGZyb20gJy4vcmVtdXgvTXA0cmVtdXgnXG5pbXBvcnQgRmx2UGFyc2VyIGZyb20gJy4vRmx2UGFyc2VyJ1xuaW1wb3J0IFRhZ0RlbXV4ZXIgZnJvbSAnLi9kZW11eC9UYWdEZW11eGVyJ1xuaW1wb3J0IFN0b3JlIGZyb20gJy4uL21vZGVscy9TdG9yZSdcbmltcG9ydCBWb2RUYXNrIGZyb20gJy4uL3Rhc2tzL1ZvZFRhc2snXG5pbXBvcnQgTGl2ZVRhc2sgZnJvbSAnLi4vdGFza3MvTGl2ZVRhc2snXG5pbXBvcnQgQnVmZmVyIGZyb20gJy4uL3dyaXRlL0J1ZmZlcidcbmltcG9ydCBUcmFuc0NvZGVyIGZyb20gJy4vVHJhbnNDb2RlcidcblxuY29uc3QgTk9PUCA9ICgpID0+IHt9XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluUGFyc2VyIGV4dGVuZHMgVHJhbnNDb2RlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcsIHBsYXllcikge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLkNMQVNTX05BTUUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWVcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWdcbiAgICB0aGlzLl9wbGF5ZXIgPSBwbGF5ZXJcbiAgICB0aGlzLl90ZW1wQmFzZVRpbWUgPSAwXG4gICAgdGhpcy5maXJzdEZsYWcgPSB0cnVlXG4gICAgdGhpcy5fc3RvcmUgPSBuZXcgU3RvcmUoKVxuICAgIHRoaXMuX3N0b3JlLmlzTGl2ZSA9IGNvbmZpZy5pc0xpdmUgfHwgZmFsc2VcbiAgICB0aGlzLl9zdG9yZS5wbGF5ZXIgPSBwbGF5ZXJcbiAgICAvLyDop6PmnpDmiJB0YWcg5a2Y5YWlc3RvcmVcbiAgICB0aGlzLmZsdlBhcnNlciA9IG5ldyBGbHZQYXJzZXIodGhpcy5fc3RvcmUpXG4gICAgLy8g5qCH6K6w6Kej5p6Q5ZmoXG4gICAgdGhpcy50YWdEZW11eGVyID0gbmV3IFRhZ0RlbXV4ZXIodGhpcy5fc3RvcmUpXG4gICAgdGhpcy5tcDRyZW11eGVyID0gbmV3IE1wNFJlbXV4ZXIodGhpcy5fc3RvcmUpXG4gICAgdGhpcy5idWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICB0aGlzLmJ1ZmZlcktleWZyYW1lcyA9IG5ldyBTZXQoKVxuICAgIHRoaXMuTUVUQV9DSFVOS19TSVpFID0gTWF0aC5wb3coMTAsIDYpXG4gICAgdGhpcy5DSFVOS19TSVpFID0gTWF0aC5wb3coMTAsIDYpXG4gICAgdGhpcy5mdHlwX21vb3YgPSBudWxsXG4gICAgdGhpcy5pc1NvdXJjZU9wZW4gPSBmYWxzZVxuICAgIHRoaXMuX2lzTmV3U2VnbWVudHNBcnJpdmFsID0gZmFsc2VcbiAgICB0aGlzLmlzU2Vla2luZyA9IGZhbHNlXG4gICAgdGhpcy5sb2FkVGFzayA9IG51bGxcbiAgICB0aGlzLnJhbmdlID0ge1xuICAgICAgc3RhcnQ6IC0xLFxuICAgICAgZW5kOiAtMVxuICAgIH1cbiAgICB0aGlzLl9wZW5kaW5nRnJhZ21lbnRzID0gW11cbiAgICB0aGlzLl9wZW5kaW5nUmVtb3ZlUmFuZ2UgPSBbXVxuICAgIHRoaXMuZXJyX2NudCA9IDBcbiAgICB0aGlzLnJlcXVlc3RDb25maWcgPSB7XG4gICAgICBtb2RlOiB0aGlzLl9jb25maWcuY29ycyA/ICdjb3JzJyA6ICdzYW1lLW9yaWdpbidcbiAgICB9XG4gICAgdGhpcy5pbml0RXZlbnRCaW5kKClcbiAgfVxuICAvLyDlvIDlp4vliqDovb3mlbDmja5cbiAgc3RhcnRMb2FkRGF0YSAoKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuaXNMaXZlKSB7XG4gICAgICB0aGlzLmluaXRNZXRhKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0TGl2ZVN0cmVhbSgpXG4gICAgfVxuICB9XG4gIC8vIOebtOaSrVxuICBpbml0TGl2ZVN0cmVhbSAoKSB7XG4gICAgLy8g5Yqg6L295pWw5o2uXG4gICAgdGhpcy5sb2FkVGFzayA9IG5ldyBMaXZlVGFzayh0aGlzLl9jb25maWcudXJsLCB0aGlzLnJlcXVlc3RDb25maWcpLnJ1bih0aGlzLmxvYWRMaXZlRGF0YS5iaW5kKHRoaXMpKVxuICB9XG5cbiAgbG9hZExpdmVEYXRhIChidWZmZXIpIHtcbiAgICAvLyDnm7Tmkq3nu5PmnZ9cbiAgICBpZiAoYnVmZmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZW1pdCgnbGl2ZS1lbmQnKVxuICAgICAgdGhpcy5fcGxheWVyLm1zZS5lbmRPZlN0cmVhbSgpXG4gICAgICB0aGlzLmRlc3Ryb3koKVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy9odHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy96aC1DTi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9VaW50OEFycmF5XG4gICAgICAvLyBVaW50OEFycmF5IDjkvY3ml6DnrKblj7fmlbTlnovmlbDnu4QgIOavj+S4gOS4quWFg+e0oOato+WlveaYr+S4gOS4quWtl+iKglxuICAgICAgLy8gdGhpcy5idWZmZXLlsLHmmK/kuIDkuKrmlbDmja7nvJPlhrLmsaAg5b6A6YeM5Yqg5pWw5o2uIOagueaNruWkhOeQhueahG9mZnNldOi/m+ihjOWIoOmZpFxuICAgICAgdGhpcy5idWZmZXIud3JpdGUobmV3IFVpbnQ4QXJyYXkoYnVmZmVyKSlcbiAgICAgIC8vIOino+aekHRhZ1xuICAgICAgbGV0IG9mZnNldCA9IHRoaXMuc2V0Rmx2KHRoaXMuYnVmZmVyLmJ1ZmZlcilcbiAgICAgIHRoaXMuYnVmZmVyLmJ1ZmZlciA9IHRoaXMuYnVmZmVyLmJ1ZmZlci5zbGljZShvZmZzZXQpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyDpnZ7nm7Tmkq1cbiAgaW5pdE1ldGEgKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgUmVzb2x2ZXIgPSB7XG4gICAgICByZXNvbHZlQ2h1bmsgKHt0aW1lU3RhbXAsIGJ1ZmZlcn0pIHtcbiAgICAgICAgaWYgKHRpbWVTdGFtcCAhPT0gc2VsZi5sb2FkVGFzay50aW1lU3RhbXApIHJldHVyblxuICAgICAgICBzZWxmLmVycl9jbnQgPSAwXG4gICAgICAgIHNlbGYuYnVmZmVyLndyaXRlKG5ldyBVaW50OEFycmF5KGJ1ZmZlcikpXG4gICAgICAgIGxldCBvZmZzZXQgPSBzZWxmLnNldEZsdihzZWxmLmJ1ZmZlci5idWZmZXIpXG4gICAgICAgIHNlbGYuYnVmZmVyLmJ1ZmZlciA9IHNlbGYuYnVmZmVyLmJ1ZmZlci5zbGljZShvZmZzZXQpXG4gICAgICAgIGlmICghc2VsZi5pc01lZGlhSW5mb1JlYWR5KSB7XG4gICAgICAgICAgc2VsZi5pbml0TWV0YSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yYW5nZSA9IHtcbiAgICAgIHN0YXJ0OiB0aGlzLnJhbmdlLmVuZCArIDEsXG4gICAgICBlbmQ6IHRoaXMucmFuZ2UuZW5kICsgdGhpcy5NRVRBX0NIVU5LX1NJWkVcbiAgICB9XG4gICAgY29uc3QgbG9hZERhdGEgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkTWV0YURhdGEodGhpcy5yYW5nZS5zdGFydCwgdGhpcy5yYW5nZS5lbmQpLnRoZW4oUmVzb2x2ZXIucmVzb2x2ZUNodW5rKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICBpZiAodGhpcy5lcnJfY250ID49IDMpIHtcbiAgICAgICAgICB0aGlzLl9wbGF5ZXIuZW1pdCgnZXJyb3InLCBlKVxuICAgICAgICAgIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lcnJfY250ICs9IDFcbiAgICAgICAgbG9hZERhdGEoKVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGxvYWREYXRhKClcbiAgfVxuXG4gIGxvYWRTZWdtZW50cyAoY2hhbmdlUmFuZ2UsIGN1cnJlbnRUaW1lID0gMCwgcHJlbG9hZFRpbWUpIHtcbiAgICB0aGlzLl9pc05ld1NlZ21lbnRzQXJyaXZhbCA9IGZhbHNlXG4gICAgY29uc3QgcmVzb2x2ZUNodW5rID0gKHt0aW1lU3RhbXAsIGJ1ZmZlcn0pID0+IHtcbiAgICAgIGlmICh0aGlzLmlzVGVtcFBsYXllcikge1xuICAgICAgICB0aGlzLmlzVGVtcFBsYXllciA9IGZhbHNlXG4gICAgICB9XG4gICAgICBpZiAodGltZVN0YW1wICE9PSB0aGlzLmxvYWRUYXNrLnRpbWVTdGFtcCkgcmV0dXJuXG4gICAgICB0aGlzLmVycl9jbnQgPSAwXG4gICAgICB0aGlzLmJ1ZmZlci53cml0ZShuZXcgVWludDhBcnJheShidWZmZXIpKVxuICAgICAgaWYgKHRoaXMuaXNTZWVraW5nKSB7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdGcmFnbWVudHMgPSBbXVxuICAgICAgfVxuICAgICAgbGV0IG9mZnNldCA9IHRoaXMuc2V0Rmx2KHRoaXMuYnVmZmVyLmJ1ZmZlcilcbiAgICAgIHRoaXMuYnVmZmVyLmJ1ZmZlciA9IHRoaXMuYnVmZmVyLmJ1ZmZlci5zbGljZShvZmZzZXQpXG4gICAgICBpZiAoIXRoaXMuX2lzTmV3U2VnbWVudHNBcnJpdmFsKSB7XG4gICAgICAgIHRoaXMubG9hZFNlZ21lbnRzKHRydWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzU2Vla2luZyA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGFuZ2VSYW5nZSkge1xuICAgICAgbGV0IF9yYW5nZSA9IHRoaXMucmFuZ2VcblxuICAgICAgaWYgKHRoaXMuZ2V0TmV4dFJhbmdlRW5kKGN1cnJlbnRUaW1lLCBwcmVsb2FkVGltZSkgPD0gX3JhbmdlLmVuZCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5yYW5nZSA9IHtcbiAgICAgICAgc3RhcnQ6IHRoaXMucmFuZ2UuZW5kICsgMSxcbiAgICAgICAgZW5kOiBjdXJyZW50VGltZSA9PT0gdW5kZWZpbmVkID8gdGhpcy5yYW5nZS5lbmQgKyB0aGlzLkNIVU5LX1NJWkUgLSAxIDogdGhpcy5nZXROZXh0UmFuZ2VFbmQoY3VycmVudFRpbWUsIHByZWxvYWRUaW1lKSAtIDFcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucmFuZ2Uuc3RhcnQgPj0gdGhpcy5yYW5nZS5lbmQgfHwgIXRoaXMucmFuZ2UuZW5kKSB7XG4gICAgICAgIHRoaXMucmFuZ2UgPSBfcmFuZ2VcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGxvYWREYXRhID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RvcCkgcmV0dXJuXG4gICAgICByZXR1cm4gdGhpcy5fbG9hZFNlZ21lbnRzRGF0YSh0aGlzLnJhbmdlLnN0YXJ0LCB0aGlzLnJhbmdlLmVuZCkudGhlbihyZXNvbHZlQ2h1bmspLmNhdGNoKGUgPT4ge1xuICAgICAgICBpZiAodGhpcy5lcnJfY250ID49IDMpIHtcbiAgICAgICAgICB0aGlzLl9wbGF5ZXIuZW1pdCgnZXJyb3InLCAn5Yqg6L296KeG6aKR5aSx6LSlJylcbiAgICAgICAgICB0aGlzLmRlc3Ryb3koKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXJyX2NudCArPSAxXG4gICAgICAgIGxvYWREYXRhKClcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBsb2FkRGF0YSgpXG4gIH1cblxuICBnZXROZXh0UmFuZ2VFbmQgKHN0YXJ0LCBwcmVsb2FkVGltZSkge1xuICAgIGNvbnN0IHtrZXlmcmFtZXM6IHt0aW1lcywgZmlsZVBvc2l0aW9uc30sIHZpZGVvVGltZVNjYWxlfSA9IHRoaXMuX3N0b3JlXG4gICAgaWYgKCF0aW1lcyB8fCAhZmlsZVBvc2l0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMucmFuZ2UuZW5kICsgdGhpcy5DSFVOS19TSVpFXG4gICAgfVxuICAgIHN0YXJ0ICo9IHZpZGVvVGltZVNjYWxlXG5cbiAgICBsZXQgZXhwZWN0RW5kID0gc3RhcnQgKyAocHJlbG9hZFRpbWUgKiB2aWRlb1RpbWVTY2FsZSlcbiAgICBpZiAoZXhwZWN0RW5kID4gdGltZXNbdGltZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgIHJldHVybiBmaWxlUG9zaXRpb25zW2ZpbGVQb3NpdGlvbnMubGVuZ3RoIC0gMV1cbiAgICB9XG4gICAgbGV0IGxlZnQgPSAwXG4gICAgbGV0IHJpZ2h0ID0gdGltZXMubGVuZ3RoIC0gMVxuICAgIGxldCBpbmRleFxuXG4gICAgd2hpbGUgKGxlZnQgPD0gcmlnaHQpIHtcbiAgICAgIGxldCBtaWQgPSBNYXRoLmZsb29yKChyaWdodCArIGxlZnQpIC8gMilcbiAgICAgIGlmICh0aW1lc1ttaWRdIDw9IGV4cGVjdEVuZCAmJiBleHBlY3RFbmQgPD0gdGltZXNbbWlkICsgMV0pIHtcbiAgICAgICAgaW5kZXggPSBtaWQgKyAxXG4gICAgICAgIGJyZWFrXG4gICAgICB9IGVsc2UgaWYgKGxlZnQgPT09IHJpZ2h0KSB7XG4gICAgICAgIGluZGV4ID0gbWlkXG4gICAgICAgIGJyZWFrXG4gICAgICB9IGVsc2UgaWYgKGV4cGVjdEVuZCA8IHRpbWVzW21pZF0pIHtcbiAgICAgICAgcmlnaHQgPSBtaWQgLSAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWZ0ID0gbWlkICsgMVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmRleCA/IGZpbGVQb3NpdGlvbnNbaW5kZXhdIDogdW5kZWZpbmVkXG4gIH1cblxuICBfbG9hZFNlZ21lbnRzRGF0YSAoc3RhcnQgPSAwLCBlbmQgPSBzdGFydCArIHRoaXMuQ0hVTktfU0laRSkge1xuICAgIHRoaXMubG9hZFRhc2sgPSBuZXcgVm9kVGFzayh0aGlzLl9jb25maWcudXJsLCBbc3RhcnQsIGVuZF0sIHRoaXMucmVxdWVzdENvbmZpZylcbiAgICByZXR1cm4gdGhpcy5sb2FkVGFzay5wcm9taXNlXG4gIH1cblxuICBsb2FkTWV0YURhdGEgKHN0YXJ0ID0gMCwgZW5kID0gc3RhcnQgKyB0aGlzLk1FVEFfQ0hVTktfU0laRSkge1xuICAgIHRoaXMubG9hZFRhc2sgPSBuZXcgVm9kVGFzayh0aGlzLl9jb25maWcudXJsLCBbc3RhcnQsIGVuZF0sIHRoaXMucmVxdWVzdENvbmZpZylcbiAgICByZXR1cm4gdGhpcy5sb2FkVGFzay5wcm9taXNlXG4gIH1cblxuICBzZXRGbHZGaXJzdCAoYXJyYXlCdWZmLCBiYXNlVGltZSkge1xuICAgIC8vIOiwg+eUqGZsdlBhcnNlclxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuZmx2UGFyc2VyLnNldEZsdihuZXcgVWludDhBcnJheShhcnJheUJ1ZmYpKVxuICAgIGNvbnN0IHt0YWdzfSA9IHRoaXMuX3N0b3JlLnN0YXRlXG5cbiAgICBpZiAodGFncy5sZW5ndGgpIHtcbiAgICAgIGlmICh0YWdzWzBdLnRhZ1R5cGUgIT09IDE4KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZmx2IGZpbGUgd2l0aG91dCBtZXRhZGF0YSB0YWcnKVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fdGVtcEJhc2VUaW1lICE9PSAwICYmIHRoaXMuX3RlbXBCYXNlVGltZSA9PT0gdGFnc1swXS5nZXRUaW1lKCkpIHtcbiAgICAgICAgdGhpcy5fc3RvcmUuc3RhdGUuX3RpbWVzdGFtcEJhc2UgPSAwXG4gICAgICB9XG4gICAgICAvLyDop6PmnpDmoIforrBcbiAgICAgIHRoaXMudGFnRGVtdXhlci5yZXNvbHZlVGFncyh0YWdzKVxuICAgIH1cblxuICAgIHRoaXMuZmlyc3RGbGFnID0gZmFsc2VcbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBzZXRGbHZVc3VhbGx5IChhcnJheUJ1ZmYsIGJhc2VUaW1lKSB7XG4gICAgdGhpcy5pc1BhcnNpbmcgPSB0cnVlXG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5mbHZQYXJzZXIuc2V0Rmx2KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZikpXG4gICAgY29uc3Qge3RhZ3N9ID0gdGhpcy5fc3RvcmUuc3RhdGVcbiAgICBpZiAodGFncy5sZW5ndGgpIHtcbiAgICAgIC8vIOino+aekOagh+iusFxuICAgICAgdGhpcy50YWdEZW11eGVyLnJlc29sdmVUYWdzKHRhZ3MpXG4gICAgfVxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIGhhbmRsZURhdGFSZWFkeSAoYXVkaW9UcmFjaywgdmlkZW9UcmFjaykge1xuICAgIHRoaXMubXA0cmVtdXhlci5yZW11eChhdWRpb1RyYWNrLCB2aWRlb1RyYWNrKVxuICB9XG5cbiAgaGFuZGxlTWV0YURhdGFSZWFkeSAodHlwZSwgbWV0YSkge1xuICAgIHRoaXMubXA0cmVtdXhlci5vbk1ldGFEYXRhUmVhZHkodHlwZSwgbWV0YSlcbiAgfVxuXG4gIGhhbmRsZUVycm9yIChlKSB7XG4gICAgdGhpcy5lcnJvcihlKVxuICB9XG5cbiAgaGFuZGxlTmV3TWVkaWFGcmFnbWVudCAobmV3RnJhZykge1xuICAgIHRoaXMuX2lzTmV3U2VnbWVudHNBcnJpdmFsID0gdHJ1ZVxuICAgIHRoaXMuX3BlbmRpbmdGcmFnbWVudHMucHVzaChuZXdGcmFnKVxuICAgIGNvbnN0IHtyYW5kb21BY2Nlc3NQb2ludHN9ID0gbmV3RnJhZy5mcmFnbWVudFxuICAgIGlmIChyYW5kb21BY2Nlc3NQb2ludHMgJiYgcmFuZG9tQWNjZXNzUG9pbnRzLmxlbmd0aCkge1xuICAgICAgcmFuZG9tQWNjZXNzUG9pbnRzLmZvckVhY2gocmFwID0+IHtcbiAgICAgICAgdGhpcy5idWZmZXJLZXlmcmFtZXMuYWRkKHJhcC5kdHMpXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNTb3VyY2VPcGVuKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMuX3BlbmRpbmdGcmFnbWVudHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBmcmFnbWVudCA9IHRoaXMuX3BlbmRpbmdGcmFnbWVudHMuc2hpZnQoKVxuICAgICAgaWYgKCF0aGlzLmhhbmRsZU1lZGlhRnJhZ21lbnQoZnJhZ21lbnQpKSB7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdGcmFnbWVudHMudW5zaGlmdChmcmFnbWVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU2Vla0VuZCgpXG4gICAgICAgIHRoaXMuX3BsYXllci5lbWl0KCdjYWNoZXVwZGF0ZScsIHRoaXMuX3BsYXllcilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVNZWRpYUluZm9SZWFkeSAobWVkaWFJbmZvKSB7XG4gICAgY29uc3QgRlRZUF9NT09WID0gdGhpcy5tcDRyZW11eGVyLm9uTWVkaWFJbmZvUmVhZHkobWVkaWFJbmZvKVxuICAgIGlmICghdGhpcy5mdHlwX21vb3YpIHtcbiAgICAgIHRoaXMuZnR5cF9tb292ID0gRlRZUF9NT09WXG4gICAgICB0aGlzLmVtaXQoJ3JlYWR5JywgRlRZUF9NT09WKVxuICAgIH1cbiAgfVxuXG4gIGluaXRFdmVudEJpbmQgKCkge1xuICAgIHRoaXMudGFnRGVtdXhlci5oYW5kbGVEYXRhUmVhZHkgPSB0aGlzLmhhbmRsZURhdGFSZWFkeS5iaW5kKHRoaXMpXG4gICAgdGhpcy50YWdEZW11eGVyLmhhbmRsZU1lZGlhSW5mb1JlYWR5ID0gdGhpcy5oYW5kbGVNZWRpYUluZm9SZWFkeS5iaW5kKHRoaXMpXG4gICAgdGhpcy50YWdEZW11eGVyLmhhbmRsZU1ldGFEYXRhUmVhZHkgPSB0aGlzLmhhbmRsZU1ldGFEYXRhUmVhZHkuYmluZCh0aGlzKVxuICAgIHRoaXMudGFnRGVtdXhlci5zZXRFdmVudEJpbmQoKVxuICAgIHRoaXMubXA0cmVtdXhlci5oYW5kbGVNZWRpYUZyYWdtZW50ID0gdGhpcy5oYW5kbGVOZXdNZWRpYUZyYWdtZW50LmJpbmQodGhpcylcbiAgfVxuXG4gIHJlcGxheSAoKSB7XG4gICAgdGhpcy5pc1NvdXJjZU9wZW4gPSBmYWxzZVxuICAgIHRoaXMucmFuZ2UgPSB7XG4gICAgICBzdGFydDogdGhpcy5fc3RvcmUubWV0YUVuZFBvc2l0aW9uLFxuICAgICAgZW5kOiB0aGlzLmdldE5leHRSYW5nZUVuZCgwLCB0aGlzLl9jb25maWcucHJlbG9hZFRpbWUpIC0gMVxuICAgIH1cbiAgICB0aGlzLm1wNHJlbXV4ZXIuc2VlaygpXG4gICAgdGhpcy5mbHZQYXJzZXIuc2VlaygpXG4gICAgdGhpcy5jbGVhckJ1ZmZlcigpXG4gICAgdGhpcy5sb2FkU2VnbWVudHMoZmFsc2UpXG4gIH1cblxuICBjbGVhckJ1ZmZlciAoKSB7XG4gICAgdGhpcy5fcGVuZGluZ0ZyYWdtZW50cyA9IFtdXG4gICAgdGhpcy5fcGVuZGluZ1JlbW92ZVJhbmdlID0gW11cbiAgfVxuICB1bmJpbmRFdmVudHMgKCkge1xuICAgIHRoaXMudGFnRGVtdXhlci5oYW5kbGVEYXRhUmVhZHkgPSBOT09QXG4gICAgdGhpcy50YWdEZW11eGVyLmhhbmRsZU1lZGlhSW5mb1JlYWR5ID0gTk9PUFxuICAgIHRoaXMudGFnRGVtdXhlci5oYW5kbGVNZXRhRGF0YVJlYWR5ID0gTk9PUFxuICAgIHRoaXMudGFnRGVtdXhlci5zZXRFdmVudEJpbmQoKVxuICAgIHRoaXMubXA0cmVtdXhlci5oYW5kbGVNZWRpYUZyYWdtZW50ID0gTk9PUFxuICB9XG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMubXA0cmVtdXhlci5kZXN0cm95KClcbiAgICB0aGlzLmZsdlBhcnNlci5kZXN0cm95KClcbiAgICB0aGlzLnRhZ0RlbXV4ZXIuZGVzdHJveSgpXG4gICAgdGhpcy5tcDRyZW11eGVyID0gbnVsbFxuICAgIHRoaXMuZmx2UGFyc2VyID0gbnVsbFxuICAgIHRoaXMudGFnRGVtdXhlciA9IG51bGxcbiAgICB0aGlzLmxvYWRTZWdtZW50cyA9ICgpID0+IG51bGxcbiAgICB0aGlzLl9zdG9yZSA9IG51bGxcbiAgICB0aGlzLmNsZWFyQnVmZmVyKClcbiAgICB0aGlzLnN0b3AgPSB0cnVlXG4gICAgdGhpcy5sb2FkVGFzayAmJiB0aGlzLmxvYWRUYXNrLmNhbmNlbCgpXG4gIH1cblxuICBzZWVrICh0YXJnZXQpIHtcbiAgICB0aGlzLmxvYWRUYXNrLmNhbmNlbCgpXG4gICAgY29uc3Qge2tleWZyYW1lcyA9IHt9LCB2aWRlb1RpbWVTY2FsZX0gPSB0aGlzLl9zdG9yZVxuICAgIGxldCBzZWVrU3RhcnQgPSB0YXJnZXQgKiB2aWRlb1RpbWVTY2FsZVxuICAgIGxldCBzdGFydEZpbGVQb3NcbiAgICBsZXQgZW5kRmlsZVBvc1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGgubWluKGtleWZyYW1lcy5maWxlUG9zaXRpb25zLmxlbmd0aCwga2V5ZnJhbWVzLnRpbWVzLmxlbmd0aClcbiAgICBsZXQge3ByZWxvYWRUaW1lfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgZnVuY3Rpb24gZ2V0RW5kRmlsZVBvcyAodGltZSwgaWR4KSB7XG4gICAgICBpZiAoaWR4ID09PSBrZXlmcmFtZXMudGltZXMubGVuZ3RoKSB7XG4gICAgICAgIGVuZEZpbGVQb3MgPSBpZHhcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICBpZiAodGltZSA8PSBwcmVsb2FkVGltZSAmJiBwcmVsb2FkVGltZSA8PSBrZXlmcmFtZXMudGltZXNbaWR4ICsgMV0pIHtcbiAgICAgICAgZW5kRmlsZVBvcyA9IGlkeFxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgLy8g6ZyA6KaB5aSE55CGRU9G55qE5oOF5Ya1XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBsbyA9IDBcbiAgICBsZXQgaGkgPSBsZW5ndGggLSAyXG4gICAgd2hpbGUgKGxvIDw9IGhpKSB7XG4gICAgICBsZXQgbWlkID0gTWF0aC5mbG9vcigobG8gKyBoaSkgLyAyKVxuICAgICAgbGV0IGN1cnJlbnRUaW1lID0ga2V5ZnJhbWVzLnRpbWVzW21pZF1cbiAgICAgIGxldCBuZXh0VGltZSA9IGtleWZyYW1lcy50aW1lc1ttaWQgKyAxXSA/IGtleWZyYW1lcy50aW1lc1ttaWQgKyAxXSA6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gICAgICBpZiAoKGN1cnJlbnRUaW1lIDw9IHNlZWtTdGFydCAmJiBzZWVrU3RhcnQgPD0gbmV4dFRpbWUpIHx8IGxvID09PSBoaSkge1xuICAgICAgICB3aGlsZSAoa2V5ZnJhbWVzLnRpbWVzW21pZF0gPj0gc2Vla1N0YXJ0KSB7XG4gICAgICAgICAgbWlkIC09IDFcbiAgICAgICAgfVxuICAgICAgICBzdGFydEZpbGVQb3MgPSBtaWQgLSAxXG4gICAgICAgIHByZWxvYWRUaW1lID0gcHJlbG9hZFRpbWUgKiB2aWRlb1RpbWVTY2FsZSArIHNlZWtTdGFydFxuICAgICAgICBrZXlmcmFtZXMudGltZXMuZXZlcnkoZ2V0RW5kRmlsZVBvcylcbiAgICAgICAgYnJlYWtcbiAgICAgIH0gZWxzZSBpZiAoc2Vla1N0YXJ0IDwgY3VycmVudFRpbWUpIHtcbiAgICAgICAgaGkgPSBtaWQgLSAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsbyA9IG1pZCArIDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNTZWVraW5nKSB7XG4gICAgICB0aGlzLmlzU2Vla2luZyA9IHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3RvcmUuY2xlYXJUYWdzKClcbiAgICB9XG4gICAgdGhpcy5fcGVuZGluZ0ZyYWdtZW50cyA9IFtdXG4gICAgdGhpcy5tcDRyZW11eGVyLnNlZWsoKVxuICAgIHRoaXMuZmx2UGFyc2VyLnNlZWsoKVxuICAgIFZvZFRhc2suY2xlYXIoKVxuICAgIGNvbnN0IF9yYW5nZSA9IHRoaXMucmFuZ2VcbiAgICBpZiAoa2V5ZnJhbWVzLmZpbGVQb3NpdGlvbnNbc3RhcnRGaWxlUG9zXSA8IF9yYW5nZS5lbmQpIHtcbiAgICAgIHN0YXJ0RmlsZVBvcyArPSAxXG4gICAgICBlbmRGaWxlUG9zICs9IDFcbiAgICB9XG4gICAgdGhpcy5yYW5nZSA9IHtcbiAgICAgIHN0YXJ0OiBrZXlmcmFtZXMuZmlsZVBvc2l0aW9uc1tzdGFydEZpbGVQb3NdLFxuICAgICAgZW5kOiBrZXlmcmFtZXMuZmlsZVBvc2l0aW9uc1tlbmRGaWxlUG9zXSAtIDEgfHwgJydcbiAgICB9XG4gICAgdGhpcy5idWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICB0aGlzLmxvYWRTZWdtZW50cyhmYWxzZSlcbiAgfVxuXG4gIGdldCBzZXRGbHYgKCkge1xuICAgIHJldHVybiB0aGlzLmZpcnN0RmxhZyA/IHRoaXMuc2V0Rmx2Rmlyc3QgOiB0aGlzLnNldEZsdlVzdWFsbHlcbiAgfVxuXG4gIGdldCBpc01lZGlhSW5mb1JlYWR5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RvcmUubWVkaWFJbmZvLmlzQ29tcGxldGVcbiAgfVxuXG4gIGdldCB2aWRlb0R1cmF0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RvcmUubWVkaWFJbmZvLmR1cmF0aW9uXG4gIH1cblxuICBnZXQgaGFzUGVuZGluZ0ZyYWdtZW50cyAoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5fcGVuZGluZ0ZyYWdtZW50cy5sZW5ndGhcbiAgfVxuXG4gIGdldCBwZW5kaW5nRnJhZ21lbnRzICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGVuZGluZ0ZyYWdtZW50c1xuICB9XG5cbiAgZ2V0IHZpZGVvVGltZVNjYWxlICgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RvcmUudmlkZW9UaW1lU2NhbGVcbiAgfVxuXG4gIGdldCBoYXNQZW5kaW5nUmVtb3ZlUmFuZ2VzICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGVuZGluZ1JlbW92ZVJhbmdlLmxlbmd0aFxuICB9XG5cbiAgZ2V0IHBlbmRpbmdSZW1vdmVSYW5nZXMgKCkge1xuICAgIHJldHVybiB0aGlzLl9wZW5kaW5nUmVtb3ZlUmFuZ2VcbiAgfVxuXG4gIGdldCBpc1NlZWthYmxlICgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RvcmUuaXNTZWVrYWJsZVxuICB9XG59XG4iLCJpbXBvcnQgRXhwR29sb21iIGZyb20gICcuLi91dGlscy9FeHBHb2xvbWInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1BTUGFyc2VyIHtcbiAgICBzdGF0aWMgZ2V0UHJvZmlsZVN0ciAocHJvZmlsZUlkYykge1xuICAgICAgICBzd2l0Y2ggKHByb2ZpbGVJZGMpIHtcbiAgICAgICAgICAgIGNhc2UgNjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdCYXNlbGluZSc7XG4gICAgICAgICAgICBjYXNlIDc3OlxuICAgICAgICAgICAgICAgIHJldHVybiAnTWFpbic7XG4gICAgICAgICAgICBjYXNlIDg4OlxuICAgICAgICAgICAgICAgIHJldHVybiAnRXh0ZW5kZWQnO1xuICAgICAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdIaWdoJztcbiAgICAgICAgICAgIGNhc2UgMTEwOlxuICAgICAgICAgICAgICAgIHJldHVybiAnSGlnaDEwJztcbiAgICAgICAgICAgIGNhc2UgMTIyOlxuICAgICAgICAgICAgICAgIHJldHVybiAnSGlnaDQyMic7XG4gICAgICAgICAgICBjYXNlIDI0NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0hpZ2g0NDQnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1Vua25vd24nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldExldmVsU3RyIChsZXZlbElkYykge1xuICAgICAgICByZXR1cm4gKGxldmVsSWRjIC8gMTApLnRvRml4ZWQoMSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldENocm9tYUZvcm1hdFN0ciAoY2hyb21hKSB7XG4gICAgICAgIHN3aXRjaCAoY2hyb21hKSB7XG4gICAgICAgICAgICBjYXNlIDQyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJzQ6MjowJztcbiAgICAgICAgICAgIGNhc2UgNDIyOlxuICAgICAgICAgICAgICAgIHJldHVybiAnNDoyOjInO1xuICAgICAgICAgICAgY2FzZSA0NDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICc0OjQ6NCc7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnVW5rbm93bic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZWFkIFNQU1xuICAgICAqIEBwYXJhbSBvcmlnaW5BcnJcbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2VTUFMgKG9yaWdpbkFycikge1xuXG4gICAgICAgIGxldCByYnNwID0gU1BTUGFyc2VyLl9lYnNwMnJic3Aob3JpZ2luQXJyKTtcblxuICAgICAgICBjb25zdCBzdHJlYW0gPSBuZXcgRXhwR29sb21iKHJic3ApO1xuICAgICAgICBjb25zdCBzcHNDb25maWcgPSBzdHJlYW0ucmVhZFNQUygpO1xuICAgICAgICBjb25zdCB7IGNocm9tYUZvcm1hdCwgbGV2ZWxJZGMsIHByb2ZpbGVJZGMgfSA9IHNwc0NvbmZpZztcbiAgICAgICAgc3BzQ29uZmlnLnByb2ZpbGVTdHJpbmcgPSBTUFNQYXJzZXIuZ2V0UHJvZmlsZVN0cihwcm9maWxlSWRjKTtcbiAgICAgICAgc3BzQ29uZmlnLmxldmVsU3RyaW5nID0gU1BTUGFyc2VyLmdldExldmVsU3RyKGxldmVsSWRjKTtcbiAgICAgICAgc3BzQ29uZmlnLmNocm9tYUZvcm1hdFN0cmluZyA9IFNQU1BhcnNlci5nZXRDaHJvbWFGb3JtYXRTdHIoY2hyb21hRm9ybWF0KTtcblxuICAgICAgICByZXR1cm4gc3BzQ29uZmlnO1xuXG4gICAgfVxuXG4gICAgLy9cbiAgICBzdGF0aWMgX2Vic3AycmJzcCAob3JpZ2luQXJyKSB7XG4gICAgICAgIGNvbnN0IG9yaWdpbkxlbiA9ICBvcmlnaW5BcnIuYnl0ZUxlbmd0aDtcbiAgICAgICAgY29uc3QgZGlzdCA9IG5ldyBVaW50OEFycmF5KG9yaWdpbkFyci5ieXRlTGVuZ3RoKTtcbiAgICAgICAgbGV0IGRpc3RTaXplID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gb3JpZ2luTGVuOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID4gMiAmJiBvcmlnaW5BcnJbaV0gPT09IDMgJiYgb3JpZ2luQXJyW2kgLSAxXSA9PT0gMCAmJiBvcmlnaW5BcnJbaSAtIDJdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXN0W2Rpc3RTaXplKytdID0gb3JpZ2luQXJyW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRpc3QuYnVmZmVyLCAwLCBkaXN0U2l6ZSk7XG4gICAgfVxufSIsImltcG9ydCBvYnNlcnZlciBmcm9tICcuLi91dGlscy9PYnNlcnZlcidcbmltcG9ydCBFcnJvcnMgZnJvbSAnLi4vbW9kZWxzL2Vycm9yJ1xuXG4vKipcbiAqIOi9rOeggeWZqOWfuuexu1xuICovXG5jbGFzcyBUcmFuc0NvZGVyIHtcbiAgY29uc3RydWN0b3IgKHN0b3JlKSB7XG4gICAgaWYgKHN0b3JlKSB7XG4gICAgICB0aGlzLl9zdG9yZSA9IHN0b3JlXG4gICAgfVxuICAgIHRoaXMuX29ic2VydmVyID0gb2JzZXJ2ZXJcbiAgICB0aGlzLm9uID0gb2JzZXJ2ZXIub24uYmluZChvYnNlcnZlcilcbiAgICB0aGlzLmVtaXQgPSBvYnNlcnZlci5lbWl0LmJpbmQob2JzZXJ2ZXIpXG4gICAgdGhpcy5vZmYgPSBvYnNlcnZlci5vZmYuYmluZChvYnNlcnZlcilcbiAgICB0aGlzLmZsdXNoID0gb2JzZXJ2ZXIuZmx1c2guYmluZChvYnNlcnZlcilcbiAgICB0aGlzLm9uY2UgPSBvYnNlcnZlci5vbmNlLmJpbmQob2JzZXJ2ZXIpXG4gIH1cbiAgZW1pdEVycm9yICh0eXBlLCBlcnJvckRldGFpbCA9IHtsaW5lOiAnJywgaGFuZGxlOiAnJywgbXNnOiAnJywgdmVyc2lvbjogJyd9KSB7XG4gICAgY29uc3QgeyBwbGF5ZXIsIHN0YXRlIH0gPSB0aGlzLl9zdG9yZVxuICAgIGlmIChwbGF5ZXIpIHtcbiAgICAgIGNvbnN0IGVycm9yVG9FbWl0ID0gbmV3IEVycm9ycyh0eXBlLCBwbGF5ZXIuY3VycmVudFRpbWUsIHN0YXRlLmR1cmF0aW9uLCAnJywgdHJ1ZSwgcGxheWVyLmNvbmZpZy51cmwsIHBsYXllci5jb25maWcudXJsLCBwbGF5ZXIuZW5kZWQsIGVycm9yRGV0YWlsKVxuICAgICAgcGxheWVyLmVtaXQoJ2Vycm9yJywgZXJyb3JUb0VtaXQpXG4gICAgfVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBUcmFuc0NvZGVyXG4iLCIvLyByZWZyZW5jZTogaHR0cHM6Ly9naXRodWIuY29tL3ZpZGVvLWRldi9obHMuanMvYmxvYi9tYXN0ZXIvc3JjL2RlbXV4L2FkdHMuanNcbmltcG9ydCBEZW11eGVyIGZyb20gJy4vRGVtdXhlcidcbmltcG9ydCBEYXRhVmlldzRSZWFkIGZyb20gJy4uLy4uL3V0aWxzL0RhdGFWaWV3NFJlYWQnXG4vLyBpbXBvcnQgeyBtcDNWZXJzaW9ucywgbXAzQml0UmF0ZSwgYXVkaW9TYW1wbGVSYXRlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3R5cGVzJztcbi8vIHJlc29sdmUg5pa55rOVIOino+aekHRhZyAgQUFD6Kej56CB77yMIOabtOaWsHN0b3Jl5Lit55qEYXVkaW9UcmFjayBhdWRpb01ldGFEYXRhXG5pbXBvcnQge1xuICBzb3VuZFJhdGVUeXBlcyxcbiAgc2FtcGxpbmdGcmVxdWVuY3lUeXBlcyxcbiAgRXZlbnRUeXBlcyxcbiAgYnJvd3NlclR5cGVzXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cy90eXBlcydcbmltcG9ydCBzbmlmZmVyIGZyb20gJy4uLy4uL3V0aWxzL3NuaWZmZXInXG5pbXBvcnQgQnVmZmVyIGZyb20gJy4uLy4uL3dyaXRlL0J1ZmZlcidcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvRGVtdXhlciBleHRlbmRzIERlbXV4ZXIge1xuICBjb25zdHJ1Y3RvciAoc3RvcmUpIHtcbiAgICBzdXBlcihzdG9yZSlcbiAgICB0aGlzLkNMQVNTX05BTUUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWVcbiAgICB0aGlzLmN1cnJlbnRUYWcgPSBudWxsXG4gICAgdGhpcy5kYXRhID0gbmV3IFVpbnQ4QXJyYXkoMClcbiAgICB0aGlzLnJlYWRPZmZzZXQgPSAwXG4gICAgdGhpcy5fc3RvcmUuYXVkaW9NZXRhRGF0YSA9IG51bGxcbiAgICB0aGlzLmhhbmRsZURhdGFSZWFkeSA9ICgpID0+IHt9XG4gICAgdGhpcy5oYW5kbGVNZXRhRGF0YVJlYWR5ID0gKCkgPT4ge31cbiAgICB0aGlzLmhhbmRsZU1lZGlhSW5mb1JlYWR5ID0gKCkgPT4ge31cbiAgfVxuICByZXNvbHZlICh0YWcpIHtcbiAgICB0aGlzLnJlYWRPZmZzZXQgPSAwXG4gICAgY29uc3QgeyBfc3RvcmU6IHN0b3JlIH0gPSB0aGlzXG4gICAgLy8g5L+u5pS5c3RvcmXkuK3nmoRhdWRpb1RyYWNrIGF1ZGlvTWV0YURhdGFcbiAgICBjb25zdCB7IGF1ZGlvVHJhY2s6IHRyYWNrIH0gPSBzdG9yZVxuICAgIHRoaXMuY3VycmVudFRhZyA9IHRhZ1xuICAgIHRoaXMuZGF0YSA9IHRhZy5ib2R5XG4gICAgbGV0IHtcbiAgICAgIGF1ZGlvTWV0YURhdGE6IG1ldGFcbiAgICB9ID0gc3RvcmVcblxuICAgIGlmICghbWV0YSkge1xuICAgICAgbWV0YSA9IHN0b3JlLmF1ZGlvTWV0YURhdGEgPSB7fVxuICAgICAgc3RvcmUuYXVkaW9NZXRhRGF0YSA9IHRoaXMuaW5pdEF1ZGlvTWV0YShtZXRhKVxuICAgIH1cblxuICAgIGNvbnN0IGR2ID0gbmV3IERhdGFWaWV3NFJlYWQodGFnLmJvZHkuYnVmZmVyLCB0aGlzKVxuXG4gICAgY29uc3Qgc291bmQgPSBkdi5nZXRVaW50OCgpXG5cbiAgICBjb25zdCBzb3VuZEZvcm1hdElkeCA9IHNvdW5kID4+PiA0IC8vICBVSW50NFxuICAgIGNvbnN0IHNvdW5kUmF0ZSA9IChzb3VuZCAmIDEyKSA+Pj4gMiAvLyAgVUludDJcbiAgICAvLyBjb25zdCBzb3VuZFNpemUgPSAoc291bmQgJiAyKSA+Pj4gMSAvLyAgIFVJbnQxXG4gICAgY29uc3Qgc291bmRUeXBlID0gKHNvdW5kICUgMSkgLy8gVUludDFcblxuICAgIG1ldGEuYXVkaW9TYW1wbGVSYXRlID0gc291bmRSYXRlVHlwZXNbc291bmRSYXRlXVxuICAgIG1ldGEuY2hhbm5lbENvdW50ID0gc291bmRUeXBlID09PSAwID8gMSA6IDJcblxuICAgIGlmIChzb3VuZEZvcm1hdElkeCAhPT0gMTAgJiYgc291bmRGb3JtYXRJZHggIT09IDIpIHtcbiAgICAgIHRoaXMuZXJyb3IoJ29ubHkgc3VwcG9ydCBBQUMgQXVkaW8gZm9ybWF0IHNvIGZhcicpXG4gICAgICByZXR1cm5cbiAgICB9IGVsc2UgaWYgKHNvdW5kRm9ybWF0SWR4ID09PSAxMCkgeyAvLyBBQUNcbiAgICAgIGNvbnN0IGFhY0luZm8gPSB0aGlzLl9wYXJzZUFBQ0F1ZGlvKClcbiAgICAgIGlmICghYWFjSW5mbykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBkYXRhOiBhYWNEYXRhLCBkYXRhOiB7IHNhbXBsZUZyZXEgfSB9ID0gYWFjSW5mb1xuICAgICAgaWYgKGFhY0luZm8ucGFja2V0VHlwZSA9PT0gMCkgeyAvLyBBQUMgc2VxdWVuY2UgaGVhZGVyXG4gICAgICAgIG1ldGEuc2FtcGxlUmF0ZSA9IHNhbXBsZUZyZXFcbiAgICAgICAgbWV0YS5jaGFubmVsQ291bnQgPSBhYWNEYXRhLmNoYW5uZWxDb3VudFxuICAgICAgICBtZXRhLmNvZGVjID0gYWFjRGF0YS5jb2RlY1xuICAgICAgICBtZXRhLm1hbmlmZXN0Q29kZWMgPSBhYWNEYXRhLm1hbmlmZXN0Q29kZWNcbiAgICAgICAgbWV0YS5jb25maWcgPSBhYWNEYXRhLmNvbmZpZ1xuICAgICAgICBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uID0gMTAyNCAvIHNhbXBsZUZyZXEgKiBtZXRhLnRpbWVTY2FsZVxuICAgICAgICBpZiAoc3RvcmUuaGFzSW5pdGlhbE1ldGFEaXNwYXRjaGVkKSB7XG4gICAgICAgICAgaWYgKHN0b3JlLnZpZGVvVHJhY2subGVuZ3RoIHx8IHN0b3JlLmF1ZGlvVHJhY2subGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZURhdGFSZWFkeShzdG9yZS52aWRlb1RyYWNrLCBzdG9yZS5hdWRpb1RyYWNrKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdG9yZS5zdGF0ZS5fYXVkaW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVNZXRhRGF0YVJlYWR5KCdhdWRpbycsIG1ldGEpXG5cbiAgICAgICAgY29uc3QgeyBtZWRpYUluZm86IG1pIH0gPSBzdG9yZVxuICAgICAgICBtaS5hdWRpb0NvZGVjID0gbWV0YS5jb2RlY1xuICAgICAgICBtaS5hdWRpb1NhbXBsZVJhdGUgPSBtZXRhLnNhbXBsZVJhdGVcbiAgICAgICAgbWkuYXVkaW9DaGFubmVsQ291bnQgPSBtZXRhLmNoYW5uZWxDb3VudFxuICAgICAgICBtaS5hdWRpb0NvbmZpZyA9IG1ldGEuY29uZmlnXG4gICAgICAgIGlmIChtaS5oYXNWaWRlbykge1xuICAgICAgICAgIGlmIChtaS52aWRlb0NvZGVjKSB7XG4gICAgICAgICAgICBtaS5taW1lVHlwZSA9IGB2aWRlby94LWZsdjsgY29kZWNzPVwiJHttaS52aWRlb0NvZGVjfSwke21pLmF1ZGlvQ29kZWN9XCJgXG4gICAgICAgICAgICBtaS5jb2RlYyA9IG1pLm1pbWVUeXBlLnJlcGxhY2UoJ3gtZmx2JywgJ21wNCcpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1pLm1pbWVUeXBlID0gYHZpZGVvL3gtZmx2OyBjb2RlY3M9XCIke21pLmF1ZGlvQ29kZWN9XCJgXG4gICAgICAgICAgbWkuY29kZWMgPSBtaS5taW1lVHlwZS5yZXBsYWNlKCd4LWZsdicsICdtcDQnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1pLmlzQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZU1lZGlhSW5mb1JlYWR5KG1pKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGFhY0luZm8ucGFja2V0VHlwZSA9PT0gMSkgeyAvLyBBQUMgcmF3IGZyYW1lIGRhdGFcbiAgICAgICAgbGV0IGR0cyA9IHN0b3JlLnN0YXRlLnRpbWVTdGFtcEJhc2UgKyB0aGlzLmN1cnJlbnRUYWcuZ2V0VGltZSgpXG4gICAgICAgIGxldCBhYWNTYW1wbGUgPSB7IHVuaXQ6IGFhY0luZm8uZGF0YSwgbGVuZ3RoOiBhYWNJbmZvLmRhdGEuYnl0ZUxlbmd0aCwgZHRzOiBkdHMsIHB0czogZHRzIH1cbiAgICAgICAgdHJhY2suc2FtcGxlcy5wdXNoKGFhY1NhbXBsZSlcbiAgICAgICAgdHJhY2subGVuZ3RoICs9IGFhY0luZm8uZGF0YS5sZW5ndGhcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnJlc2V0U3RhdHVzKClcbiAgfVxuXG4gIF9wYXJzZUFBQ0F1ZGlvICgpIHtcbiAgICBpZiAodGhpcy51bnJlYWRMZW5ndGggPD0gMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGFhY0RhdGEgPSB7fVxuICAgIGxldCBhYWNBcnJheSA9IG5ldyBVaW50OEFycmF5KHRoaXMuZGF0YS5idWZmZXIsIHRoaXMucmVhZE9mZnNldCwgdGhpcy51bnJlYWRMZW5ndGgpXG4gICAgY29uc3QgcGFja2V0VHlwZSA9IGFhY0FycmF5WzBdXG4gICAgdGhpcy5yZWFkT2Zmc2V0ICs9IDFcbiAgICBhYWNEYXRhLnBhY2tldFR5cGUgPSBwYWNrZXRUeXBlXG4gICAgaWYgKCFwYWNrZXRUeXBlKSB7XG4gICAgICBjb25zdCB7IHBvc2l0aW9uLCB0YWdTaXplIH0gPSB0aGlzLmN1cnJlbnRUYWdcbiAgICAgIHRoaXMuX3N0b3JlLm1ldGFFbmRQb3NpdGlvbiA9IHBvc2l0aW9uICsgQnVmZmVyLnJlYWRBc0ludCh0YWdTaXplKSArIDRcbiAgICAgIGFhY0RhdGEuZGF0YSA9IHRoaXMuX3BhcnNlQUFDQXVkaW9TcGVjaWZpY0NvbmZpZygpIC8vIEFBQyBTZXF1ZW5jZSBoZWFkZXJcbiAgICB9IGVsc2Uge1xuICAgICAgYWFjRGF0YS5kYXRhID0gYWFjQXJyYXkuc2xpY2UoMSlcbiAgICB9XG5cbiAgICByZXR1cm4gYWFjRGF0YVxuICB9XG4gIF9wYXJzZUFBQ0F1ZGlvU3BlY2lmaWNDb25maWcgKCkge1xuICAgIGNvbnN0IGR2ID0gbmV3IERhdGFWaWV3NFJlYWQodGhpcy5kYXRhLmJ1ZmZlciwgdGhpcylcbiAgICBjb25zdCB7IGdldEFuZE51bSB9ID0gRGF0YVZpZXc0UmVhZFxuXG4gICAgbGV0IHJlc3VsdE9iaiA9IHtcbiAgICAgIHNhbXBsaW5nRnJlcXVlbmN5OiBudWxsLFxuICAgICAgZXh0QXVkaW9PYmplY3RUeXBlOiBudWxsLFxuICAgICAgZXh0QXVkaW9TYW1wbGluZ0lkeDogbnVsbFxuICAgIH1cbiAgICBsZXQgY29uZmlnID0ge31cbiAgICBjb25zdCBVSW50MCA9IGR2LmdldFVpbnQ4KClcbiAgICBjb25zdCBVSW50MSA9IGR2LmdldFVpbnQ4KClcblxuICAgIGxldCB0ZW1wQXVkaW9PYmplY3RUeXBlXG4gICAgbGV0IGF1ZGlvT2JqZWN0VHlwZSA9IHRlbXBBdWRpb09iamVjdFR5cGUgPSBVSW50MCA+Pj4gMyAvLyBVSW50NVxuICAgIGxldCBzYW1wbGluZ0lkeCA9ICgoVUludDAgJiBnZXRBbmROdW0oNSwgNykpIDw8IDEpIHwgKFVJbnQxID4+PiA3KSAvLyBVSW50NFxuICAgIGlmIChzYW1wbGluZ0lkeCA8IDAgfHwgc2FtcGxpbmdJZHggPiBzYW1wbGluZ0ZyZXF1ZW5jeVR5cGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5lbWl0RXJyb3IoJ2RlY29kZXInLCB7XG4gICAgICAgIGxpbmU6ICcxNDEnLFxuICAgICAgICBoYW5kbGU6ICdfcGFyc2VBQUNBdWRpb1NwZWNpZmljQ29uZmlnJyxcbiAgICAgICAgbXNnOiBgaW52YWxpZCBzYW1wbGluZ0ZyZXF1ZW5jeUluZGV4ICR7c2FtcGxpbmdJZHh9YFxuICAgICAgfSlcbiAgICAgIHRoaXMuZGlzcGF0Y2goRXZlbnRUeXBlcy5FUlJPUiwgYGVycm9yIHNhbXBsaW5nRnJlcXVlbmN5SW5kZXg6ICR7c2FtcGxpbmdJZHh9YClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHJlc3VsdE9iai5zYW1wbGluZ0ZyZXF1ZW5jeSA9IHNhbXBsaW5nRnJlcXVlbmN5VHlwZXNbc2FtcGxpbmdJZHhdXG5cbiAgICBsZXQgY2hhbm5lbENvdW50ID0gcmVzdWx0T2JqLmNoYW5uZWxDb3VudCA9IChVSW50MSAmIGdldEFuZE51bSgxLCA0KSkgPj4+IDNcbiAgICBpZiAoY2hhbm5lbENvdW50IDwgMCB8fCBjaGFubmVsQ291bnQgPiA3KSB7XG4gICAgICB0aGlzLmVtaXRFcnJvcignZGVjb2RlcicsIHtcbiAgICAgICAgbGluZTogJzE1NCcsXG4gICAgICAgIGhhbmRsZTogJ19wYXJzZUFBQ0F1ZGlvU3BlY2lmaWNDb25maWcnLFxuICAgICAgICBtc2c6IGBpbnZhbGlkIEF1ZGlvIENoYW5uZWwgQ291bnQ6ICR7Y2hhbm5lbENvdW50fWBcbiAgICAgIH0pXG4gICAgICB0aGlzLmRpc3BhdGNoKEV2ZW50VHlwZXMuRVJST1IsIGBlcnJvciBBdWRpbyBDaGFubmVsIENvdW50OiAke2NoYW5uZWxDb3VudH1gKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGF1ZGlvT2JqZWN0VHlwZSA9PT0gNSkgeyAvLyBIRS1BQUNcbiAgICAgIGNvbnN0IFVJbnQyID0gZHYuZ2V0VWludDgoKVxuICAgICAgcmVzdWx0T2JqLmV4dEF1ZGlvU2FtcGxpbmdJZHggPSAoKFVJbnQxICYgZ2V0QW5kTnVtKDUsIDcpKSA8PCAxKSB8IFVJbnQyID4+PiA3XG4gICAgICByZXN1bHRPYmouZXh0QXVkaW9PYmplY3RUeXBlID0gKFVJbnQyICYgZ2V0QW5kTnVtKDEsIDUpKSA+Pj4gMlxuICAgIH1cblxuICAgIGlmIChzbmlmZmVyLmJyb3dzZXIgPT09IGJyb3dzZXJUeXBlcy5GSVJFX0ZPWCkge1xuICAgICAgaWYgKHNhbXBsaW5nSWR4ID49IDYpIHtcbiAgICAgICAgLy8gSEUtQUFDIHVzZXMgU0JSLCBoaWdoIGZyZXF1ZW5jaWVzIGFyZSBjb25zdHJ1Y3RlZCBmcm9tIGxvdyBmcmVxdWVuY2llc1xuICAgICAgICBhdWRpb09iamVjdFR5cGUgPSA1XG4gICAgICAgIGNvbmZpZyA9IG5ldyBBcnJheSg0KVxuICAgICAgICByZXN1bHRPYmouZXh0QXVkaW9TYW1wbGluZ0lkeCA9IHNhbXBsaW5nSWR4IC0gM1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXVkaW9PYmplY3RUeXBlID0gMlxuICAgICAgICBjb25maWcgPSBuZXcgQXJyYXkoMilcbiAgICAgICAgcmVzdWx0T2JqLmV4dEF1ZGlvU2FtcGxpbmdJZHggPSBzYW1wbGluZ0lkeFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc25pZmZlci5vcy5pc0FuZHJvaWQpIHtcbiAgICAgIC8vIEFuZHJvaWQgOiBhbHdheXMgdXNlIEFBQ1xuICAgICAgYXVkaW9PYmplY3RUeXBlID0gMlxuICAgICAgY29uZmlnID0gbmV3IEFycmF5KDIpXG4gICAgICByZXN1bHRPYmouZXh0QXVkaW9TYW1wbGluZ0lkeCA9IHNhbXBsaW5nSWR4XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qICBmb3Igb3RoZXIgYnJvd3NlcnMgKENocm9tZS9WaXZhbGRpL09wZXJhIC4uLilcbiAgICAgICAgICAgICAgICBhbHdheXMgZm9yY2UgYXVkaW8gdHlwZSB0byBiZSBIRS1BQUMgU0JSLCBhcyBzb21lIGJyb3dzZXJzIGRvIG5vdCBzdXBwb3J0IGF1ZGlvIGNvZGVjIHN3aXRjaCBwcm9wZXJseSAobGlrZSBDaHJvbWUgLi4uKVxuICAgICAgICAgICAgKi9cbiAgICAgIGF1ZGlvT2JqZWN0VHlwZSA9IDVcbiAgICAgIHJlc3VsdE9iai5leHRlbnNpb25TYW1wbGluZ0luZGV4ID0gc2FtcGxpbmdJZHhcbiAgICAgIGNvbmZpZyA9IG5ldyBBcnJheSg0KVxuXG4gICAgICBpZiAoc2FtcGxpbmdJZHggPj0gNikge1xuICAgICAgICByZXN1bHRPYmouZXh0ZW5zaW9uU2FtcGxpbmdJZHggPSBzYW1wbGluZ0lkeCAtIDNcbiAgICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSAxKSB7XG4gICAgICAgIGF1ZGlvT2JqZWN0VHlwZSA9IDJcbiAgICAgICAgY29uZmlnID0gbmV3IEFycmF5KDIpXG4gICAgICAgIHJlc3VsdE9iai5leHRlbnNpb25TYW1wbGluZ0luZGV4ID0gc2FtcGxpbmdJZHhcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25maWdbMF0gPSBhdWRpb09iamVjdFR5cGUgPDwgM1xuICAgIGNvbmZpZ1swXSB8PSAoc2FtcGxpbmdJZHggJiAweDBFKSA+PiAxXG4gICAgY29uZmlnWzFdIHw9IChzYW1wbGluZ0lkeCAmIDB4MDEpIDw8IDdcbiAgICBjb25maWdbMV0gfD0gY2hhbm5lbENvdW50IDw8IDNcbiAgICBpZiAoYXVkaW9PYmplY3RUeXBlID09PSA1KSB7XG4gICAgICBjb25maWdbMV0gfD0gKHJlc3VsdE9iai5leHRBdWRpb1NhbXBsaW5nSWR4ICYgMHgwRSkgPj4gMVxuICAgICAgY29uZmlnWzJdID0gKHJlc3VsdE9iai5leHRlbnNpb25TYW1wbGluZ0lkeCAmIDB4MDEpIDw8IDdcbiAgICAgIC8vIGFkdHNPYmplY3RUeXBlIChmb3JjZSB0byAyLCBjaHJvbWUgaXMgY2hlY2tpbmcgdGhhdCBvYmplY3QgdHlwZSBpcyBsZXNzIHRoYW4gNSA/Pz9cbiAgICAgIC8vICAgIGh0dHBzOi8vY2hyb21pdW0uZ29vZ2xlc291cmNlLmNvbS9jaHJvbWl1bS9zcmMuZ2l0LysvbWFzdGVyL21lZGlhL2Zvcm1hdHMvbXA0L2FhYy5jY1xuICAgICAgY29uZmlnWzJdIHw9IDIgPDwgMlxuICAgICAgY29uZmlnWzNdID0gMFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjb25maWcsXG4gICAgICBzYW1wbGVGcmVxOiByZXN1bHRPYmouc2FtcGxpbmdGcmVxdWVuY3ksXG4gICAgICBjaGFubmVsQ291bnQsXG4gICAgICBjb2RlYzogYG1wNGEuNDAuJHthdWRpb09iamVjdFR5cGV9YCxcbiAgICAgIG1hbmlmZXN0Q29kZWM6IGBtcDRhLjQwLiR7dGVtcEF1ZGlvT2JqZWN0VHlwZX1gXG4gICAgfVxuICB9XG5cbiAgaW5pdEF1ZGlvTWV0YSAobWV0YSkge1xuICAgIGNvbnN0IHsgc3RhdGUsIGF1ZGlvVHJhY2s6IHRyYWNrIH0gPSB0aGlzLl9zdG9yZVxuXG4gICAgbWV0YS5kdXJhdGlvbiA9IHN0YXRlLmR1cmF0aW9uXG4gICAgbWV0YS50aW1lU2NhbGUgPSBzdGF0ZS50aW1lU2NhbGVcbiAgICBtZXRhLnR5cGUgPSAnYXVkaW8nXG4gICAgbWV0YS5pZCA9IHRyYWNrLmlkXG5cbiAgICByZXR1cm4gbWV0YVxuICB9XG5cbiAgcmVzZXRTdGF0dXMgKCkge1xuICAgIHRoaXMuY3VycmVudFRhZyA9IG51bGxcbiAgICB0aGlzLmRhdGEgPSBuZXcgVWludDhBcnJheSgwKVxuICAgIHRoaXMucmVhZE9mZnNldCA9IDBcbiAgfVxuICBnZXQgZGF0YVNpemUgKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubGVuZ3RoXG4gIH1cblxuICBnZXQgdW5yZWFkTGVuZ3RoICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU2l6ZSAtIHRoaXMucmVhZE9mZnNldFxuICB9XG59XG4iLCJpbXBvcnQgTG9nIGZyb20gJy4uLy4uL3V0aWxzL0xvZydcbmltcG9ydCBUcmFuc0NvZGVyIGZyb20gJy4uL1RyYW5zQ29kZXInXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZW11eGVyIGV4dGVuZHMgVHJhbnNDb2RlciB7XG4gIGRpc3BhdGNoICh0eXBlLCAuLi5wYXlsb2FkKSB7XG4gICAgY29uc3QgcHJlZml4ID0gJ2RlbXV4ZXJfJ1xuICAgIHRoaXMuX29ic2VydmVyLmVtaXQoYCR7cHJlZml4fSR7dHlwZX1gLCAuLi5wYXlsb2FkKVxuICB9XG4gIGVycm9yIChtZXNzYWdlKSB7XG4gICAgY29uc3QgeyBDTEFTU19OQU1FID0gJ0RlbXV4ZXInIH0gPSB0aGlzXG4gICAgTG9nLmVycm9yKGBbJHtDTEFTU19OQU1FfSBlcnJvcl0gYCwgbWVzc2FnZSlcbiAgfVxuXG4gIGluZm8gKG1lc3NhZ2UpIHtcbiAgICBjb25zdCB7IENMQVNTX05BTUUgPSAnRGVtdXhlcicgfSA9IHRoaXNcbiAgICBMb2cuaW5mbyhgWyR7Q0xBU1NfTkFNRX0gaW5mb10gYCwgbWVzc2FnZSlcbiAgfVxuXG4gIGxvZyAobWVzc2FnZSkge1xuICAgIGNvbnN0IHsgQ0xBU1NfTkFNRSA9ICdEZW11eGVyJyB9ID0gdGhpc1xuICAgIExvZy5sb2coYFske0NMQVNTX05BTUV9IGxvZ10gYCwgbWVzc2FnZSlcbiAgfVxuXG4gIHdhcm4gKG1lc3NhZ2UpIHtcbiAgICBjb25zdCB7IENMQVNTX05BTUUgPSAnRGVtdXhlcicgfSA9IHRoaXNcbiAgICBMb2cud2FybihgWyR7Q0xBU1NfTkFNRX0gd2Fybl0gYCwgbWVzc2FnZSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgTWV0YVR5cGVzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3R5cGVzJztcbmltcG9ydCBVVEY4IGZyb20gJy4uLy4uL3V0aWxzL1VURjgnO1xuaW1wb3J0IERlbXV4ZXIgZnJvbSAnLi9EZW11eGVyJztcblxuLyoqXG4gKiBtZXRh5L+h5oGv6Kej5p6QXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFEZW11eGVyIGV4dGVuZHMgRGVtdXhlciB7XG4gICAgY29uc3RydWN0b3IgKHN0b3JlKSB7XG4gICAgICAgIHN1cGVyKHN0b3JlKTtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgICAgICB0aGlzLnJlYWRPZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICB9XG4gICAgZ2V0IGlzTGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcmUuaXNMZTtcbiAgICB9XG4gICAgcmVzb2x2ZSAobWV0YSwgc2l6ZSkge1xuICAgICAgICBpZiAoc2l6ZSA8IDMpIHtcbiAgICAgICAgICAgIHRocm93ICdub3QgZW5vdWdoIGRhdGEgZm9yIG1ldGFpbmZvJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtZXRhRGF0YSA9IHt9O1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5wYXJzZVZhbHVlKG1ldGEpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucGFyc2VWYWx1ZShtZXRhLCBzaXplIC0gbmFtZS5ib2R5U2l6ZSk7XG4gICAgICAgIG1ldGFEYXRhW25hbWUuZGF0YV0gPSB2YWx1ZS5kYXRhO1xuXG4gICAgICAgIHRoaXMucmVzZXRTdGF0dXMoKTtcbiAgICAgICAgcmV0dXJuIG1ldGFEYXRhO1xuICAgIH1cblxuICAgIHJlc2V0U3RhdHVzICgpIHtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgICAgICB0aGlzLnJlYWRPZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICB9XG5cbiAgICBwYXJzZVN0cmluZyAoYnVmZmVyKSB7XG4gICAgICAgIGNvbnN0IGR2ID0gbmV3IERhdGFWaWV3KGJ1ZmZlciwgdGhpcy5yZWFkT2Zmc2V0KTtcbiAgICAgICAgY29uc3Qgc3RyTGVuID0gZHYuZ2V0VWludDE2KDAsICF0aGlzLmlzTGUpO1xuICAgICAgICBsZXQgc3RyID0gJyc7XG4gICAgICAgIGlmIChzdHJMZW4gPiAwKSB7XG4gICAgICAgICAgICBzdHIgPSBVVEY4LmRlY29kZShuZXcgVWludDhBcnJheShidWZmZXIsIHRoaXMucmVhZE9mZnNldCArIDIsIHN0ckxlbikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RyID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNpemUgPSBzdHJMZW4gKyAyO1xuICAgICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gc2l6ZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IHN0cixcbiAgICAgICAgICAgIGJvZHlTaXplOiBzdHJMZW4gKyAyLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHBhcnNlRGF0ZSAoYnVmZmVyLCBzaXplKSB7XG4gICAgICAgIGNvbnN0IHsgaXNMZSB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgZHYgPSBuZXcgRGF0YVZpZXcoYnVmZmVyLCB0aGlzLnJlYWRPZmZzZXQsIHNpemUpO1xuICAgICAgICBsZXQgdHMgPSBkdi5nZXRGbG9hdDY0KDAsICFpc0xlKTtcbiAgICAgICAgY29uc3QgdGltZU9mZnNldCA9IGR2LmdldEludDE2KDgsICFpc0xlKTtcbiAgICAgICAgdHMgKz0gdGltZU9mZnNldCAqIDYwICogMTAwMDtcblxuICAgICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gMTA7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBuZXcgRGF0ZSh0cyksXG4gICAgICAgICAgICBib2R5U2l6ZTogMTAsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcGFyc2VPYmplY3QgKGJ1ZmZlciwgc2l6ZSkge1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5wYXJzZVN0cmluZyhidWZmZXIsIHNpemUpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucGFyc2VWYWx1ZShidWZmZXIsIHNpemUgLSBuYW1lLmJvZHlTaXplKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLmRhdGEsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLmRhdGEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keVNpemU6IG5hbWUuYm9keVNpemUgKyB2YWx1ZS5ib2R5U2l6ZSxcbiAgICAgICAgICAgIGlzT2JqRW5kOiB2YWx1ZS5pc09iakVuZCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwYXJzZUxvbmdTdHJpbmcgKGJ1ZmZlcikge1xuICAgICAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldyhidWZmZXIsIHRoaXMucmVhZE9mZnNldCk7XG4gICAgICAgIGNvbnN0IHN0ckxlbiA9IGR2LmdldFVpbnQzMigwLCAhdGhpcy5pc0xlKTtcbiAgICAgICAgbGV0IHN0ciA9ICcnO1xuICAgICAgICBpZiAoc3RyTGVuID4gMCkge1xuICAgICAgICAgICAgc3RyID0gVVRGOC5kZWNvZGUobmV3IFVpbnQ4QXJyYXkoYnVmZmVyLCB0aGlzLnJlYWRPZmZzZXQgKyAyLCBzdHJMZW4pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0ciA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnN0IHNpemUgPSBzdHJMZW4gKyA0O1xuICAgICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gc3RyTGVuICsgNDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IHN0cixcbiAgICAgICAgICAgIGJvZHlTaXplOiBzdHJMZW4gKyA0LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOino+aekG1ldGHkuK3nmoTlj5jph49cbiAgICAgKi9cbiAgICBwYXJzZVZhbHVlIChkYXRhLCBzaXplKSB7XG4gICAgICAgIGxldCBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoKTtcbiAgICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgYnVmZmVyID0gZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZmZlciA9IGRhdGEuYnVmZmVyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgaXNMZSB9ID0gdGhpcztcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgTlVNQkVSLFxuICAgICAgICAgICAgQk9PTEVBTixcbiAgICAgICAgICAgIFNUUklORyxcbiAgICAgICAgICAgIE9CSkVDVCxcbiAgICAgICAgICAgIE1JWF9BUlJBWSxcbiAgICAgICAgICAgIE9CSkVDVF9FTkQsXG4gICAgICAgICAgICBTVFJJQ1RfQVJSQVksXG4gICAgICAgICAgICBEQVRFLFxuICAgICAgICAgICAgTE9ORV9TVFJJTkcsXG4gICAgICAgIH0gPSBNZXRhVHlwZXM7XG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlciwgdGhpcy5yZWFkT2Zmc2V0LCBzaXplKTtcbiAgICAgICAgbGV0IGlzT2JqRW5kID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBkYXRhVmlldy5nZXRVaW50OCgwKTtcbiAgICAgICAgbGV0IG9mZnNldCA9IDE7XG4gICAgICAgIHRoaXMucmVhZE9mZnNldCArPSAxO1xuICAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBOVU1CRVI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGRhdGFWaWV3LmdldEZsb2F0NjQoMSwgIWlzTGUpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZE9mZnNldCArPSA4O1xuICAgICAgICAgICAgICAgIG9mZnNldCArPSA4O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBCT09MRUFOOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9vbE51bSA9IGRhdGFWaWV3LmdldFVpbnQ4KDEpO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gISFib29sTnVtO1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZE9mZnNldCArPSAxO1xuICAgICAgICAgICAgICAgIG9mZnNldCArPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBTVFJJTkc6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHIgPSB0aGlzLnBhcnNlU3RyaW5nKGJ1ZmZlcik7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBzdHIuZGF0YTtcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gc3RyLmJvZHlTaXplO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBPQkpFQ1Q6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHt9O1xuICAgICAgICAgICAgICAgIGxldCBvYmpFbmRTaXplID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDMyKHNpemUgLSA0LCAhaXNMZSkgJiAweDAwRkZGRkZGKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iakVuZFNpemUgPSAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB0aGlzLnJlYWRPZmZzZXQgKz0gb2Zmc2V0IC0gMTtcbiAgICAgICAgICAgICAgICB3aGlsZSAob2Zmc2V0IDwgc2l6ZSAtIDQpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbWZPYmogPSB0aGlzLnBhcnNlT2JqZWN0KGJ1ZmZlciwgc2l6ZSAtIG9mZnNldCAtIG9iakVuZFNpemUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW1mT2JqLmlzT2JqZWN0RW5kKSB7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlW2FtZk9iai5kYXRhLm5hbWVdID0gYW1mT2JqLmRhdGEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSBhbWZPYmouYm9keVNpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPD0gc2l6ZSAtIDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFyayA9IGRhdGFWaWV3LmdldFVpbnQzMihvZmZzZXQgLSAxLCAhaXNMZSkgJiAweDAwRkZGRkZGO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWFyayA9PT0gOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgKz0gMztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgTUlYX0FSUkFZOiB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gNDtcbiAgICAgICAgICAgICAgICBsZXQgb2JqRW5kU2l6ZSA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKChkYXRhVmlldy5nZXRVaW50MzIoc2l6ZSAtIDQsICFpc0xlKSAmIDB4MDBGRkZGRkYpID09PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgIG9iakVuZFNpemUgPSAzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdoaWxlIChvZmZzZXQgPCBzaXplIC0gOCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbWZWYXIgPSB0aGlzLnBhcnNlT2JqZWN0KGJ1ZmZlciwgc2l6ZSAtIG9mZnNldCAtIG9iakVuZFNpemUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW1mVmFyLmlzT2JqZWN0RW5kKSB7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlW2FtZlZhci5kYXRhLm5hbWVdID0gYW1mVmFyLmRhdGEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSBhbWZWYXIuYm9keVNpemU7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCA8PSBzaXplIC0gMykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXIgPSBkYXRhVmlldy5nZXRVaW50MzIob2Zmc2V0IC0gMSwgIWlzTGUpICYgMHgwMEZGRkZGRjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hcmtlciA9PT0gOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gMztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSBPQkpFQ1RfRU5EOiB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlzT2JqRW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSBTVFJJQ1RfQVJSQVk6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFyckxlbmd0aCA9IGRhdGFWaWV3LmdldFVpbnQzMigxLCAhaXNMZSk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IDQ7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMucGFyc2VWYWx1ZShidWZmZXIsIHNpemUgLSBvZmZzZXQpO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5wdXNoKHNjcmlwdC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ICs9IHNjcmlwdC5ib2R5U2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgREFURToge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLnBhcnNlRGF0ZShidWZmZXIsIHNpemUgLSAxKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGRhdGUuZGF0YTtcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gZGF0ZS5ib2R5U2l6ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSBMT05FX1NUUklORzoge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvbmdTdHIgPSB0aGlzLnBhcnNlTG9uZ1N0cmluZyhidWZmZXIsIHNpemUgLSAxKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGxvbmdTdHIuZGF0YTtcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gbG9uZ1N0ci5ib2R5U2l6ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IHNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YTogdmFsdWUsXG4gICAgICAgICAgICBib2R5U2l6ZTogb2Zmc2V0LFxuICAgICAgICAgICAgaXNPYmpFbmQ6IGlzT2JqRW5kLFxuICAgICAgICB9O1xuICAgIH1cblxufVxuXG4iLCJpbXBvcnQgRGVtdXhlciBmcm9tICcuL0RlbXV4ZXInXG5pbXBvcnQgTWV0YURlbXV4ZXIgZnJvbSAnLi9NZXRhRGVtdXhlcidcbmltcG9ydCBWaWRlb0RlbXV4ZXIgZnJvbSAnLi9WaWRlb0RlbXV4ZXInXG5pbXBvcnQgQXVkaW9EZW11eGVyIGZyb20gJy4vQXVkaW9EZW11eGVyJ1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi8uLi91dGlscy9Mb2cnXG5pbXBvcnQgbWV0YUZpZWxkcyBmcm9tICcuLi8uLi9jb25zdGFudHMvbWV0YUZpZWxkcydcblxuY29uc3QgbmF0aXZlSGFzUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFnZGVtdXggZXh0ZW5kcyBEZW11eGVyIHtcbiAgY29uc3RydWN0b3IgKHN0b3JlKSB7XG4gICAgc3VwZXIoc3RvcmUpXG4gICAgdGhpcy5DTEFTU19OQU1FID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgdGhpcy5fbWV0YURlbXV4ZXIgPSBuZXcgTWV0YURlbXV4ZXIoc3RvcmUpXG4gICAgdGhpcy5fdmlkZW9EZW11eGVyID0gbmV3IFZpZGVvRGVtdXhlcihzdG9yZSlcbiAgICB0aGlzLl9hdWRpb0RlbXV4ZXIgPSBuZXcgQXVkaW9EZW11eGVyKHN0b3JlKVxuICAgIHRoaXMuX2ZpcnN0UGFyc2UgPSB0cnVlXG4gICAgdGhpcy5fZGF0YU9mZnNldCA9IDBcbiAgICB0aGlzLmhhbmRsZU1lZGlhSW5mb1JlYWR5ID0gKCkgPT4ge31cbiAgICB0aGlzLmhhbmRsZURhdGFSZWFkeSA9ICgpID0+IHt9XG4gICAgdGhpcy5oYW5kbGVNZXRhRGF0YVJlYWR5ID0gKCkgPT4ge31cbiAgfVxuICBzZXRFdmVudEJpbmQgKCkge1xuICAgIHRoaXMuX3ZpZGVvRGVtdXhlci5oYW5kbGVEYXRhUmVhZHkgPSB0aGlzLmhhbmRsZURhdGFSZWFkeVxuICAgIHRoaXMuX3ZpZGVvRGVtdXhlci5oYW5kbGVNZXRhRGF0YVJlYWR5ID0gdGhpcy5oYW5kbGVNZXRhRGF0YVJlYWR5XG4gICAgdGhpcy5fdmlkZW9EZW11eGVyLmhhbmRsZU1lZGlhSW5mb1JlYWR5ID0gdGhpcy5oYW5kbGVNZWRpYUluZm9SZWFkeVxuICAgIHRoaXMuX2F1ZGlvRGVtdXhlci5oYW5kbGVEYXRhUmVhZHkgPSB0aGlzLmhhbmRsZURhdGFSZWFkeVxuICAgIHRoaXMuX2F1ZGlvRGVtdXhlci5oYW5kbGVNZXRhRGF0YVJlYWR5ID0gdGhpcy5oYW5kbGVNZXRhRGF0YVJlYWR5XG4gICAgdGhpcy5fYXVkaW9EZW11eGVyLmhhbmRsZU1lZGlhSW5mb1JlYWR5ID0gdGhpcy5oYW5kbGVNZWRpYUluZm9SZWFkeVxuICB9XG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuX21ldGFEZW11eGVyID0gbnVsbFxuICAgIHRoaXMuX3ZpZGVvRGVtdXhlciA9IG51bGxcbiAgICB0aGlzLl9hdWRpb0RlbXV4ZXIgPSBudWxsXG4gIH1cblxuICByZXNvbHZlVGFncyAoKSB7XG4gICAgY29uc3Qge3RhZ3N9ID0gdGhpcy5fc3RvcmUuc3RhdGVcblxuICAgIGNvbnN0IHtfc3RvcmU6IHN0b3JlfSA9IHRoaXNcbiAgICBjb25zdCB7dmlkZW9UcmFjaywgYXVkaW9UcmFja30gPSBzdG9yZVxuXG4gICAgdGFncy5mb3JFYWNoKCh0YWcpID0+IHtcbiAgICAgIHRoaXMucmVzb2x2ZVRhZyh0YWcpXG4gICAgfSlcblxuICAgIGlmICh0aGlzLl9zdG9yZS5oYXNJbml0aWFsTWV0YURpc3BhdGNoZWQpIHtcbiAgICAgIGlmICh2aWRlb1RyYWNrLmxlbmd0aCB8fCBhdWRpb1RyYWNrLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmhhbmRsZURhdGFSZWFkeShhdWRpb1RyYWNrLCB2aWRlb1RyYWNrKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3N0b3JlLnN0YXRlLnRhZ3MgPSBbXVxuICB9XG5cbiAgcmVzb2x2ZVRhZyAodGFnKSB7XG4gICAgc3dpdGNoIChTdHJpbmcodGFnLnRhZ1R5cGUpKSB7XG4gICAgICBjYXNlICc4JzogLy8gYXVkaW9cbiAgICAgICAgdGhpcy5fcmVzb2x2ZUF1ZGlvVGFnKHRhZylcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJzknOiAvLyB2aWRlb1xuICAgICAgICB0aGlzLl9yZXNvbHZlVmlkZW9UYWcodGFnKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnMTgnOiAvLyBtZXRhZGF0YVxuICAgICAgICB0aGlzLl9yZXNvbHZlTWV0YVRhZyh0YWcpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgX3Jlc29sdmVBdWRpb1RhZyAodGFnKSB7XG4gICAgaWYgKHRhZy5ib2R5U2l6ZSA8PSAxKSB7XG4gICAgICB0aGlzLndhcm4oJ05vdCBlbm91Z2ggZGF0YSBmb3IgYXVkaW8gdGFnIGJvZHknKVxuICAgIH1cbiAgICB0aGlzLl9hdWRpb0RlbXV4ZXIucmVzb2x2ZSh0YWcpXG4gIH1cblxuICBfcmVzb2x2ZVZpZGVvVGFnICh0YWcpIHtcbiAgICBpZiAodGFnLmJvZHlTaXplIDw9IDEpIHtcbiAgICAgIHRoaXMuZXJyb3IoJ05vdCBlbm91Z2ggZGF0YSBmb3IgdmlkZW8gdGFnIGJvZHknKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHtfaGFzVmlkZW8sIGhhc1ZpZGVvRmxhZ092ZXJyaWRlZH0gPSB0aGlzXG4gICAgaWYgKGhhc1ZpZGVvRmxhZ092ZXJyaWRlZCAmJiAhX2hhc1ZpZGVvKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl92aWRlb0RlbXV4ZXIucmVzb2x2ZSh0YWcpXG4gIH1cblxuICBfaW5pdE1ldGFEYXRhIChtZXRhRGF0YSkge1xuICAgIGNvbnN0IHtfc3RvcmU6IHN9ID0gdGhpc1xuICAgIGlmIChuYXRpdmVIYXNQcm9wLmNhbGwobWV0YURhdGEsICdvbk1ldGFEYXRhJykpIHtcbiAgICAgIGlmIChzLmhhc01ldGFEYXRhKSB7XG4gICAgICAgIExvZ2dlci5sb2coYFske3RoaXMuQ0xBU1NfTkFNRX1dYCwgJ2ZvdW5kIGFub3RoZXIgbWV0YSB0YWcnKVxuICAgICAgfVxuICAgICAgcy5tZXRhRGF0YSA9IG1ldGFEYXRhXG4gICAgICBjb25zdCBvbk1ldGFEYXRhID0gbWV0YURhdGEub25NZXRhRGF0YVxuXG4gICAgICBtZXRhRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICBjb25zdCB7bmFtZSwgdHlwZSwgcGFyc2VyLCBvblR5cGVFcnJ9ID0gZmllbGRcbiAgICAgICAgaWYgKE9iamVjdChvbk1ldGFEYXRhW25hbWVdKSBpbnN0YW5jZW9mIHR5cGUpIHtcbiAgICAgICAgICBwYXJzZXIuY2FsbCh0aGlzLCBzLCBvbk1ldGFEYXRhKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChvblR5cGVFcnIgJiYgb25UeXBlRXJyIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIG9uVHlwZUVycihzLCBvbk1ldGFEYXRhKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgdGhpcy5fc3RvcmUubWVkaWFJbmZvLl9tZXRhRGF0YSA9IG1ldGFEYXRhXG4gICAgICAvLyDlkIzmraXliLDlhbHkuqtzdG9yZVxuICAgICAgaWYgKHRoaXMuX3N0b3JlLm1lZGlhSW5mby5pc0NvbXBsZXRlKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlTWVkaWFJbmZvUmVhZHkodGhpcy5fc3RvcmUubWVkaWFJbmZvKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9yZXNvbHZlTWV0YVRhZyAodGFnKSB7XG4gICAgY29uc3Qge2JvZHl9ID0gdGFnXG4gICAgY29uc3QgbWV0YU9iaiA9IHRoaXMuX21ldGFEZW11eGVyLnJlc29sdmUoYm9keSwgYm9keS5sZW5ndGgpXG4gICAgdGhpcy5faW5pdE1ldGFEYXRhKG1ldGFPYmopXG4gIH1cblxuICBfcGFyc2VLZXlmcmFtZXMgKGtleWZyYW1lcykge1xuICAgIGxldCB0aW1lcyA9IFtdXG4gICAgbGV0IGZpbGVQb3NpdGlvbnMgPSBbXVxuICAgIGNvbnN0IHt2aWRlb1RpbWVTY2FsZSwgc3RhdGV9ID0gdGhpcy5fc3RvcmVcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGtleWZyYW1lcy50aW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGltZXNbdGltZXMubGVuZ3RoXSA9IHN0YXRlLnRpbWVTdGFtcEJhc2UgKyBNYXRoLmZsb29yKGtleWZyYW1lcy50aW1lc1tpXSAqIHZpZGVvVGltZVNjYWxlKVxuICAgICAgZmlsZVBvc2l0aW9uc1tmaWxlUG9zaXRpb25zLmxlbmd0aF0gPSBrZXlmcmFtZXMuZmlsZXBvc2l0aW9uc1tpXVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0aW1lcyxcbiAgICAgIGZpbGVQb3NpdGlvbnNcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBEZW11eGVyIGZyb20gJy4vRGVtdXhlcidcbmltcG9ydCBTUFNQYXJzZXIgZnJvbSAnLi4vU1BTUGFyc2VyJ1xuaW1wb3J0IERhdGFWaWV3NFJlYWQgZnJvbSAnLi4vLi4vdXRpbHMvRGF0YVZpZXc0UmVhZCdcbmltcG9ydCB7IEV2ZW50VHlwZXMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvdHlwZXMnXG5pbXBvcnQgQnVmZmVyIGZyb20gJy4uLy4uL3dyaXRlL0J1ZmZlcidcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvRGVtdXhlciBleHRlbmRzIERlbXV4ZXIge1xuICBjb25zdHJ1Y3RvciAoc3RvcmUpIHtcbiAgICBzdXBlcihzdG9yZSlcbiAgICB0aGlzLkNMQVNTX05BTUUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWVcbiAgICB0aGlzLnJlYWRPZmZzZXQgPSAwXG4gICAgdGhpcy5kYXRhID0gbmV3IFVpbnQ4QXJyYXkoMClcbiAgICB0aGlzLmN1cnJlbnRUYWcgPSBudWxsXG4gICAgdGhpcy5fc3RvcmUudmlkZW9NZXRhRGF0YSA9IG51bGxcbiAgfVxuXG4gIHJlc2V0U3RhdHVzICgpIHtcbiAgICB0aGlzLnJlYWRPZmZzZXQgPSAwXG4gICAgdGhpcy5kYXRhID0gbmV3IFVpbnQ4QXJyYXkoMClcbiAgICB0aGlzLmN1cnJlbnRUYWcgPSBudWxsXG4gIH1cblxuICByZXNvbHZlICh0YWcpIHtcbiAgICB0aGlzLmRhdGEgPSB0YWcuYm9keVxuICAgIHRoaXMuY3VycmVudFRhZyA9IHRhZ1xuICAgIGNvbnN0IGZpcnN0VUk4ID0gdGhpcy5yZWFkRGF0YSgxKVswXVxuICAgIGNvbnN0IGZyYW1lVHlwZSA9IChmaXJzdFVJOCAmIDB4RjApID4+PiA0XG4gICAgY29uc3QgY29kZWNJZCA9IGZpcnN0VUk4ICYgMHgwRlxuICAgIGlmIChjb2RlY0lkICE9PSA3KSB7XG4gICAgICAvKiogMTogSlBFR1xuICAgICAgICAgICAgKiAyOiBIMjYzXG4gICAgICAgICAgICAqIDM6IFNjcmVlbiB2aWRlb1xuICAgICAgICAgICAgKiA0OiBPbjIgVlA2XG4gICAgICAgICAgICAqIDU6IE9uMiBWUDZcbiAgICAgICAgICAgICogNjogU2NyZWVuIHZpZGVvdmVyc2lvbiAyXG4gICAgICAgICAgICAqIDc6IEFWQ1xuICAgICAgICAgICAgKi9cbiAgICAgIHRoaXMuZXJyb3IoYHVuc3VwcG9ydGVkIGNvZGVjSWQ6ICR7Y29kZWNJZH1gKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuX3BhcnNlQVZDUGFja2V0KGZyYW1lVHlwZSlcblxuICAgIHRoaXMucmVzZXRTdGF0dXMoKVxuICB9XG5cbiAgX3BhcnNlQVZDUGFja2V0IChmcmFtZVR5cGUpIHtcbiAgICBpZiAodGhpcy51bnJlYWRMZW5ndGggPCA0KSB7XG4gICAgICB0aGlzLmVycm9yKCdJbnZhbGlkIEF2YyBUYWcnKVxuICAgIH1cbiAgICBjb25zdCBpc0xlID0gdGhpcy5fc3RvcmUuaXNMZVxuICAgIGNvbnN0IHsgYnVmZmVyIH0gPSB0aGlzLmRhdGFcbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldyhidWZmZXIsIHRoaXMucmVhZE9mZnNldCwgdGhpcy51bnJlYWRMZW5ndGgpXG4gICAgY29uc3QgcGFja2FnZVR5cGUgPSBkdi5nZXRVaW50OCgwKVxuXG4gICAgbGV0IGNwc1RpbWUgPSBkdi5nZXRVaW50MzIoMCwgIWlzTGUpICYgMHgwMEZGRkZGRlxuICAgIGNwc1RpbWUgPSAoY3BzVGltZSA8PCA4KSA+PiA4XG4gICAgdGhpcy5yZWFkT2Zmc2V0ICs9IDRcblxuICAgIHN3aXRjaCAocGFja2FnZVR5cGUpIHtcbiAgICAgIGNhc2UgMDoge1xuICAgICAgICBjb25zdCB7IHBvc2l0aW9uLCB0YWdTaXplIH0gPSB0aGlzLmN1cnJlbnRUYWdcblxuICAgICAgICB0aGlzLl9zdG9yZS5tZXRhRW5kUG9zaXRpb24gPSBwb3NpdGlvbiArIEJ1ZmZlci5yZWFkQXNJbnQodGFnU2l6ZSkgKyA0IC8vIOe8k+WtmHNjcmlwdFRhZ+e7k+adn+eahOS9jee9ru+8jHJlcGxheeS9v+eUqFxuICAgICAgICB0aGlzLl9wYXJzZUFWQ0RlY29kZXJDb25maWd1cmF0aW9uUmVjb3JkKClcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgMToge1xuICAgICAgICB0aGlzLl9wYXJzZUFWQ1ZpZGVvRGF0YShmcmFtZVR5cGUsIGNwc1RpbWUpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlIDI6IHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgLy8g5oql6ZSZXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3BhcnNlQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQgKCkge1xuICAgIGlmICh0aGlzLnVucmVhZExlbmd0aCA8IDcpIHtcbiAgICAgIHRoaXMuZXJyb3IoJ0ludmFsaWQgQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQsIGxhY2sgb2YgZGF0YSEnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBtZWRpYUluZm86IG1pIH0gPSB0aGlzLl9zdG9yZVxuICAgIC8vIHN0YXNoIG9mZnNldCZ1bnJlYWRTaXplIGJlZm9yZSBwYXJzaW5nIHNwcyZwcHNcbiAgICAvLyBjb25zdCB0ZW1wT2Zmc2V0ID0gdGhpcy5yZWFkT2Zmc2V0XG4gICAgLy8gY29uc3QgdGVtcFVucmVhZExlbmd0aCA9IHRoaXMudW5yZWFkTGVuZ3RoXG5cbiAgICBjb25zdCB7IF9zdG9yZTogc3RvcmUgfSA9IHRoaXNcbiAgICBsZXQgbWV0YSA9IHRoaXMuX3N0b3JlLnZpZGVvTWV0YURhdGFcbiAgICBsZXQgdHJhY2sgPSB0aGlzLl9zdG9yZS52aWRlb1RyYWNrXG4gICAgY29uc3QgZHYgPSBuZXcgRGF0YVZpZXc0UmVhZCh0aGlzLmRhdGEuYnVmZmVyLCB0aGlzKVxuICAgIGlmIChtZXRhKSB7XG4gICAgICBpZiAobWV0YS5hdmNjICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5lcnJvcignZm91bmQgYW5vdGhlciBBVkNEZWNvZGVyQ29uZmlndXJhdGlvblJlY29yZCEnKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXN0b3JlLnN0YXRlLl9oYXNWaWRlbyAmJiAhc3RvcmUuc3RhdGUuaGFzVmlkZW9GbGFnT3ZlcnJpZGVkKSB7XG4gICAgICAgIHN0b3JlLnN0YXRlLl9oYXNWaWRlbyA9IHRydWVcbiAgICAgICAgc3RvcmUuX21lZGlhSW5mby5oYXNWaWRlbyA9IHRydWVcbiAgICAgIH1cbiAgICAgIG1ldGEgPSBzdG9yZS52aWRlb01ldGFEYXRhID0ge31cbiAgICAgIG1ldGEudHlwZSA9ICd2aWRlbydcbiAgICAgIG1ldGEuaWQgPSB0cmFjay5pZFxuICAgICAgbWV0YS50aW1lU2NhbGUgPSBzdG9yZS52aWRlb1RpbWVTY2FsZVxuICAgICAgbWV0YS5kdXJhdGlvbiA9IHN0b3JlLnN0YXRlLmR1cmF0aW9uXG4gICAgICBtaS50aW1lc2NhbGUgPSBzdG9yZS52aWRlb1RpbWVTY2FsZVxuICAgIH1cblxuICAgIGNvbnN0IHZlcnNpb24gPSBkdi5nZXRVaW50OCgpXG4gICAgY29uc3QgYXZjUHJvZmlsZSA9IGR2LmdldFVpbnQ4KClcbiAgICBkdi5nZXRVaW50OCgpXG4gICAgZHYuZ2V0VWludDgoKVxuICAgIGlmICh2ZXJzaW9uICE9PSAxIHx8IGF2Y1Byb2ZpbGUgPT09IDApIHtcbiAgICAgIC8vIOWkhOeQhumUmeivr1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbmFsdUxlbmd0aFNpemUgPSBzdG9yZS5zdGF0ZS5uYWx1TGVuZ3RoU2l6ZSA9IGR2LmdldFVpbnQoMiwgdGhpcy5yZWFkT2Zmc2V0LCBmYWxzZSkgKyAxXG4gICAgaWYgKG5hbHVMZW5ndGhTaXplICE9PSAzICYmIG5hbHVMZW5ndGhTaXplICE9PSA0KSB7XG4gICAgICAvLyDlpITnkIbplJnor69cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNwc0xlbmd0aCA9IGR2LmdldFVpbnQoNSwgbnVsbCwgZmFsc2UpXG4gICAgaWYgKHNwc0xlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5lbWl0RXJyb3IoJ2RlY29kZXInLCB7XG4gICAgICAgIGxpbmU6IDEyOCxcbiAgICAgICAgaGFuZGxlcjogJ19wYXJzZUFWQ0RlY29kZXJDb25maWd1cmF0aW9uUmVjb3JkJyxcbiAgICAgICAgbXNnOiAnbm8gc3BzIGluIHRoaXMgdmlkZW8nXG4gICAgICB9KVxuICAgICAgLy8g5aSE55CG6ZSZ6K+vXG4gICAgICByZXR1cm5cbiAgICB9IGVsc2UgaWYgKHNwc0xlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMuZW1pdEVycm9yKCdkZWNvZGVyJywge1xuICAgICAgICBsaW5lOiAxMzIsXG4gICAgICAgIGhhbmRsZXI6ICdfcGFyc2VBVkNEZWNvZGVyQ29uZmlndXJhdGlvblJlY29yZCcsXG4gICAgICAgIG1zZzogJ3Nwc0xlbmd0aCA+IDEnXG4gICAgICB9KVxuICAgICAgdGhpcy53YXJuKCdBVkNEZWNvZGVyQ29uZmlndXJhdGlvblJlY29yZDogc3BzTGVuZ3RoID4gMScpXG4gICAgfVxuICAgIGxldCBzcHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwc0xlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBsZW4gPSBkdi5nZXRVaW50MTYoKVxuXG4gICAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBzcHMgPSBuZXcgVWludDhBcnJheSh0aGlzLmRhdGEuYnVmZmVyLCB0aGlzLnJlYWRPZmZzZXQsIGxlbilcbiAgICAgIHRoaXMucmVhZE9mZnNldCArPSBsZW5cbiAgICAgIGNvbnN0IHNwc0NvbmZpZyA9IFNQU1BhcnNlci5wYXJzZVNQUyhzcHMpXG5cbiAgICAgIGlmIChpICE9PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY29kZWNTaXplLFxuICAgICAgICBwcmVzZW50U2l6ZSxcbiAgICAgICAgcHJvZmlsZVN0cmluZyxcbiAgICAgICAgbGV2ZWxTdHJpbmcsXG4gICAgICAgIGNocm9tYUZvcm1hdCxcbiAgICAgICAgcGl4ZWxSYXRpbyxcbiAgICAgICAgZnJhbWVSYXRlLFxuICAgICAgICByZWZGcmFtZXMsXG4gICAgICAgIGJpdERlcHRoXG4gICAgICB9ID0gc3BzQ29uZmlnXG5cbiAgICAgIG1ldGEud2lkdGggPSBjb2RlY1NpemUud2lkdGhcbiAgICAgIG1ldGEuaGVpZ2h0ID0gY29kZWNTaXplLmhlaWdodFxuICAgICAgbWV0YS5wcmVzZW50V2lkdGggPSBwcmVzZW50U2l6ZS53aWR0aFxuICAgICAgbWV0YS5wcmVzZW50SGVpZ2h0ID0gcHJlc2VudFNpemUuaGVpZ2h0XG5cbiAgICAgIG1ldGEucHJvZmlsZSA9IHByb2ZpbGVTdHJpbmdcbiAgICAgIG1ldGEubGV2ZWwgPSBsZXZlbFN0cmluZ1xuICAgICAgLy8gbWV0YS5wcm9maWxlQ29tcGF0aWJpbGl0eSA9IHByb2ZpbGVDb21wYXRpYmlsaXR5O1xuICAgICAgLy8gbWV0YS5uYWx1TGVuZ3RoU2l6ZSA9IG5hbHVMZW5ndGhTaXplO1xuXG4gICAgICBtZXRhLmJpdERlcHRoID0gYml0RGVwdGhcbiAgICAgIG1ldGEuY2hyb21hRm9ybWF0ID0gY2hyb21hRm9ybWF0XG4gICAgICBtZXRhLnBpeGVsUmF0aW8gPSBwaXhlbFJhdGlvXG4gICAgICBtZXRhLmZyYW1lUmF0ZSA9IGZyYW1lUmF0ZVxuXG4gICAgICBpZiAoIWZyYW1lUmF0ZS5maXhlZCB8fFxuICAgICAgICAgICAgICAgIGZyYW1lUmF0ZS5mcHNOdW0gPT09IDAgfHxcbiAgICAgICAgICAgICAgICBmcmFtZVJhdGUuZnBzRGVuID09PSAwKSB7XG4gICAgICAgIG1ldGEuZnJhbWVSYXRlID0gc3RvcmUucmVmZXJGcmFtZVJhdGVcbiAgICAgIH1cblxuICAgICAgbGV0IHsgZnBzRGVuLCBmcHNOdW0gfSA9IG1ldGEuZnJhbWVSYXRlXG4gICAgICBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uID0gbWV0YS50aW1lU2NhbGUgKiAoZnBzRGVuIC8gZnBzTnVtKVxuXG4gICAgICBsZXQgY29kZWNBcnIgPSBzcHMuc3ViYXJyYXkoMSwgNClcbiAgICAgIGxldCBjb2RlY1N0ciA9ICdhdmMxLidcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICAgIGxldCBoZXggPSBjb2RlY0FycltqXS50b1N0cmluZygxNilcbiAgICAgICAgaGV4ID0gaGV4LnBhZFN0YXJ0KDIsICcwJylcbiAgICAgICAgY29kZWNTdHIgKz0gaGV4XG4gICAgICB9XG5cbiAgICAgIG1ldGEuY29kZWMgPSBjb2RlY1N0clxuXG4gICAgICBjb25zdCB7IG1lZGlhSW5mbzogbWkgfSA9IHRoaXMuX3N0b3JlXG4gICAgICBtaS53aWR0aCA9IG1ldGEud2lkdGhcbiAgICAgIG1pLmhlaWdodCA9IG1ldGEuaGVpZ2h0XG4gICAgICBtaS5mcHMgPSBtZXRhLmZyYW1lUmF0ZS5mcHNcbiAgICAgIG1pLnByb2ZpbGUgPSBtZXRhLnByb2ZpbGVcbiAgICAgIG1pLmxldmVsID0gbWV0YS5sZXZlbFxuICAgICAgbWkucmVmRnJhbWVzID0gcmVmRnJhbWVzXG4gICAgICBtaS5waXhlbFJhdGlvID0gcGl4ZWxSYXRpb1xuICAgICAgbWkudmlkZW9Db2RlYyA9IGNvZGVjU3RyXG4gICAgICBtaS5jaHJvbWFGb3JtYXQgPSBjaHJvbWFGb3JtYXRcbiAgICAgIGlmIChtaS5oYXNBdWRpbykge1xuICAgICAgICBpZiAobWkuYXVkaW9Db2RlYykge1xuICAgICAgICAgIG1pLm1pbWVUeXBlID0gYHZpZGVvL3gtZmx2OyBjb2RlY3M9XCIke21pLnZpZGVvQ29kZWN9LCR7bWkuYXVkaW9Db2RlY31cImBcbiAgICAgICAgICBtaS5jb2RlYyA9IG1pLm1pbWVUeXBlLnJlcGxhY2UoJ3gtZmx2JywgJ21wNCcpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1pLm1pbWVUeXBlID0gYHZpZGVvL3gtZmx2OyBjb2RlY3M9XCIke21pLnZpZGVvQ29kZWN9XCJgXG4gICAgICAgIG1pLmNvZGVjID0gbWkubWltZVR5cGUucmVwbGFjZSgneC1mbHYnLCAnbXA0JylcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHBwc1xuICAgIGNvbnN0IHBwc0NvdW50ID0gZHYuZ2V0VWludDgoKVxuICAgIGlmICghcHBzQ291bnQpIHtcbiAgICAgIHRoaXMuZW1pdEVycm9yKCdkZWNvZGVyJywge1xuICAgICAgICBsaW5lOiAyMjcsXG4gICAgICAgIGhhbmRsZXI6ICdfcGFyc2VBVkNEZWNvZGVyQ29uZmlndXJhdGlvblJlY29yZCcsXG4gICAgICAgIG1zZzogJ25vIHBwcyBpbiB0aGlzIHZpZGVvJ1xuICAgICAgfSlcbiAgICAgIHRoaXMuZGlzcGF0Y2goRXZlbnRUeXBlcy5FUlJPUiwgJ25vIHBwcyBpbiB0aGlzIHZpZGVvJylcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSBpZiAocHBzQ291bnQgPiAxKSB7XG4gICAgICB0aGlzLndhcm4oYEFWQ0RlY29kZXJDb25maWd1cmF0aW9uUmVjb3JkIGhhcyBwcHNDb3VudDogJHtwcHNDb3VudH1gKVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHBzQ291bnQ7IGkrKykge1xuICAgICAgbGV0IHBwc1NpemUgPSBkdi5nZXRVaW50MTYoKVxuXG4gICAgICBpZiAoIXBwc1NpemUpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgcHBzID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5kYXRhLmJ1ZmZlciwgdGhpcy5yZWFkT2Zmc2V0LCBwcHNTaXplKVxuICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IHBwc1NpemVcbiAgICB9XG5cbiAgICBtaS5zcHMgPSBtZXRhLnNwcyA9IHNwc1xuICAgIG1pLnBwcyA9IG1ldGEucHBzID0gcHBzXG5cbiAgICBpZiAobWkuaXNDb21wbGV0ZSkge1xuICAgICAgdGhpcy5oYW5kbGVNZWRpYUluZm9SZWFkeShtaSlcbiAgICB9XG4gICAgaWYgKHN0b3JlLmhhc0luaXRpYWxNZXRhRGlzcGF0Y2hlZCkge1xuICAgICAgaWYgKHN0b3JlLnZpZGVvVHJhY2subGVuZ3RoIHx8IHN0b3JlLmF1ZGlvVHJhY2subGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRGF0YVJlYWR5KHN0b3JlLnZpZGVvVHJhY2ssIHN0b3JlLmF1ZGlvVHJhY2spXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0b3JlLnN0YXRlLl92aWRlb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVNZXRhRGF0YVJlYWR5KCd2aWRlbycsIG1ldGEpXG4gIH1cblxuICBfcGFyc2VBVkNWaWRlb0RhdGEgKGZyYW1lVHlwZSwgY3BzVGltZSkge1xuICAgIGxldCBkdiA9IG5ldyBEYXRhVmlldzRSZWFkKHRoaXMuZGF0YS5idWZmZXIsIHRoaXMpXG5cbiAgICBsZXQgbmFsdUxpc3QgPSBbXVxuICAgIGxldCBkYXRhTGVuID0gMFxuICAgIGNvbnN0IHsgbmFsdUxlbmd0aFNpemU6IG5hbHVMZW5TaXplIH0gPSB0aGlzLl9zdG9yZS5zdGF0ZVxuICAgIGxldCB0cyA9IHRoaXMuX3N0b3JlLnN0YXRlLnRpbWVTdGFtcEJhc2UgKyB0aGlzLmN1cnJlbnRUYWcuZ2V0VGltZSgpXG4gICAgbGV0IGlzS2V5ZnJhbWUgPSAoZnJhbWVUeXBlID09PSAxKVxuICAgIHdoaWxlICh0aGlzLnVucmVhZExlbmd0aCA+IDApIHtcbiAgICAgIGlmICh0aGlzLnVucmVhZExlbmd0aCA8IDQpIHtcbiAgICAgICAgdGhpcy53YXJuKCdub3QgZW5vdWdoIGRhdGEgZm9yIHBhcnNpbmcgQVZDJylcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRlbXBSZWFkT2Zmc2V0ID0gdGhpcy5yZWFkT2Zmc2V0XG4gICAgICBsZXQgbmFsdVNpemUgPSBuYWx1TGVuU2l6ZSA9PT0gNCA/IGR2LmdldFVpbnQzMigpIDogZHYuZ2V0VWludDI0KClcbiAgICAgIGlmIChuYWx1U2l6ZSA+IHRoaXMudW5yZWFkTGVuZ3RoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgdW5pdFR5cGUgPSBkdi5nZXRVaW50KDUsIHRoaXMucmVhZE9mZnNldCwgZmFsc2UpXG5cbiAgICAgIGlmICh1bml0VHlwZSA9PT0gNSkge1xuICAgICAgICBpc0tleWZyYW1lID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YSA9IG5ldyBVaW50OEFycmF5KHRoaXMuZGF0YS5idWZmZXIsIHRlbXBSZWFkT2Zmc2V0LCBuYWx1TGVuU2l6ZSArIG5hbHVTaXplKVxuICAgICAgdGhpcy5yZWFkT2Zmc2V0ID0gdGVtcFJlYWRPZmZzZXQgKyBuYWx1TGVuU2l6ZSArIG5hbHVTaXplXG4gICAgICBjb25zdCBuYWx1VW5pdCA9IHtcbiAgICAgICAgdHlwZTogdW5pdFR5cGUsXG4gICAgICAgIGRhdGFcbiAgICAgIH1cbiAgICAgIG5hbHVMaXN0LnB1c2gobmFsdVVuaXQpXG4gICAgICBkYXRhTGVuICs9IGRhdGEuYnl0ZUxlbmd0aFxuICAgIH1cbiAgICBkdiA9IG51bGxcbiAgICBpZiAobmFsdUxpc3QubGVuZ3RoKSB7XG4gICAgICBjb25zdCB7IHZpZGVvVHJhY2sgfSA9IHRoaXMuX3N0b3JlXG4gICAgICBjb25zdCB2aWRlb1NhbXBsZSA9IHtcbiAgICAgICAgdW5pdHM6IG5hbHVMaXN0LFxuICAgICAgICBsZW5ndGg6IGRhdGFMZW4sXG4gICAgICAgIGR0czogdHMsXG4gICAgICAgIGNwczogY3BzVGltZSxcbiAgICAgICAgcHRzOiAodHMgKyBjcHNUaW1lKSxcbiAgICAgICAgaXNLZXlmcmFtZSxcbiAgICAgICAgcG9zaXRpb246IGlzS2V5ZnJhbWUgPyB0aGlzLmN1cnJlbnRUYWcucG9zaXRpb24gOiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICAgIHZpZGVvVHJhY2suc2FtcGxlcy5wdXNoKHZpZGVvU2FtcGxlKVxuICAgICAgdmlkZW9UcmFjay5sZW5ndGggKz0gZGF0YUxlblxuICAgIH1cbiAgfVxuXG4gIHJlYWREYXRhIChudW0pIHtcbiAgICBjb25zdCB7IGRhdGEsIHJlYWRPZmZzZXQgfSA9IHRoaXNcbiAgICBpZiAodGhpcy5kYXRhU2l6ZSA+IHJlYWRPZmZzZXQgKyBudW0pIHtcbiAgICAgIHRoaXMucmVhZE9mZnNldCArPSBudW1cbiAgICAgIHJldHVybiBkYXRhLnNsaWNlKHJlYWRPZmZzZXQsIG51bSlcbiAgICB9XG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICBnZXQgZGF0YVNpemUgKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubGVuZ3RoXG4gIH1cbiAgZ2V0IHVucmVhZExlbmd0aCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNpemUgLSB0aGlzLnJlYWRPZmZzZXRcbiAgfVxufVxuIiwiaW1wb3J0IEJ1ZmZlciBmcm9tICcuLi8uLi93cml0ZS9CdWZmZXInXG4vLyBjb25zdCBVSU5UMzJfTUFYID0gTWF0aC5wb3coMiwgMzIpIC0gMTtcbmltcG9ydCB7IGNhY2hlV3JhcHBlciB9IGZyb20gJy4uLy4uL3V0aWxzL2Z1bmNVdGlscydcbmNsYXNzIEZNUDQge1xuICBzdGF0aWMgc2l6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQnVmZmVyLndyaXRlVWludDMyKHZhbHVlKVxuICB9XG4gIHN0YXRpYyBpbml0Qm94IChzaXplLCBuYW1lLCAuLi5jb250ZW50KSB7XG4gICAgY29uc3QgYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgYnVmZmVyLndyaXRlKEZNUDQuc2l6ZShzaXplKSwgRk1QNC50eXBlKG5hbWUpLCAuLi5jb250ZW50KVxuICAgIHJldHVybiBidWZmZXIuYnVmZmVyXG4gIH1cbiAgc3RhdGljIGV4dGVuc2lvbiAodmVyc2lvbiwgZmxhZykge1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShbXG4gICAgICB2ZXJzaW9uLFxuICAgICAgKGZsYWcgPj4gMTYpICYgMHhmZixcbiAgICAgIChmbGFnID4+IDgpICYgMHhmZixcbiAgICAgIGZsYWcgJiAweGZmXG4gICAgXSlcbiAgfVxuICBzdGF0aWMgZnR5cCAoKSB7XG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveCgyNCwgJ2Z0eXAnLCBuZXcgVWludDhBcnJheShbXG4gICAgICAweDY5LCAweDczLCAweDZGLCAweDZELCAvLyBpc29tLFxuICAgICAgMHgwLCAweDAsIDB4MDAsIDB4MDEsIC8vIG1pbm9yX3ZlcnNpb246IDB4MDFcbiAgICAgIDB4NjksIDB4NzMsIDB4NkYsIDB4NkQsIC8vIGlzb21cbiAgICAgIDB4NjEsIDB4NzYsIDB4NjMsIDB4MzEgLy8gYXZjMVxuICAgIF0pKVxuICB9XG4gIHN0YXRpYyBtb292IChkYXRhKSB7XG4gICAgbGV0IHNpemUgPSA4XG4gICAgbGV0IG12aGQgPSBGTVA0Lm12aGQoZGF0YS5kdXJhdGlvbiwgZGF0YS50aW1lc2NhbGUpXG4gICAgbGV0IHRyYWsxID0gRk1QNC52aWRlb1RyYWsoZGF0YSlcbiAgICBsZXQgdHJhazIgPSBGTVA0LmF1ZGlvVHJhayhkYXRhKVxuICAgIGxldCBtdmV4ID0gRk1QNC5tdmV4KGRhdGEuZHVyYXRpb24sIGRhdGEudGltZXNjYWxlKTtcbiAgICBbbXZoZCwgdHJhazEsIHRyYWsyLCBtdmV4XS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLmJ5dGVMZW5ndGhcbiAgICB9KVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goc2l6ZSwgJ21vb3YnLCBtdmhkLCB0cmFrMSwgdHJhazIsIG12ZXgpXG4gIH1cbiAgc3RhdGljIG12aGQgKGR1cmF0aW9uLCB0aW1lU2NhbGUpIHtcbiAgICBsZXQgdGltZXNjYWxlID0gdGltZVNjYWxlIHx8IDEwMDBcbiAgICAvLyBkdXJhdGlvbiAqPSB0aW1lc2NhbGU7XG4gICAgbGV0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gdmVyc2lvbigwKSArIGZsYWdzICAgICAx5L2N55qEYm9454mI5pysKzPkvY1mbGFncyAgIGJveOeJiOacrO+8jDDmiJYx77yM5LiA6Iis5Li6MOOAgu+8iOS7peS4i+Wtl+iKguaVsOWdh+aMiXZlcnNpb249MO+8iVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gY3JlYXRpb25fdGltZSAgICDliJvlu7rml7bpl7QgIO+8iOebuOWvueS6jlVUQ+aXtumXtDE5MDQtMDEtMDHpm7bngrnnmoTnp5LmlbDvvIlcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIG1vZGlmaWNhdGlvbl90aW1lICAg5L+u5pS55pe26Ze0XG5cbiAgICAgIC8qKlxuICAgICAgICAgICAgICogdGltZXNjYWxlOiA0IGJ5dGVz5paH5Lu25aqS5L2T5ZyoMeenkuaXtumXtOWGheeahOWIu+W6puWAvO+8jOWPr+S7peeQhuino+S4ujHnp5Lplb/luqZcbiAgICAgICAgICAgICAqL1xuICAgICAgKHRpbWVzY2FsZSA+Pj4gMjQpICYgMHhGRixcbiAgICAgICh0aW1lc2NhbGUgPj4+IDE2KSAmIDB4RkYsXG4gICAgICAodGltZXNjYWxlID4+PiA4KSAmIDB4RkYsXG4gICAgICAodGltZXNjYWxlKSAmIDB4RkYsXG5cbiAgICAgIC8qKlxuICAgICAgICAgICAgICogZHVyYXRpb246IDQgYnl0ZXPor6V0cmFja+eahOaXtumXtOmVv+W6pu+8jOeUqGR1cmF0aW9u5ZKMdGltZSBzY2FsZeWAvOWPr+S7peiuoeeul3RyYWNr5pe26ZW/77yM5q+U5aaCYXVkaW8gdHJhY2vnmoR0aW1lIHNjYWxlID0gODAwMCxcbiAgICAgICAgICAgICAqIGR1cmF0aW9uID0gNTYwMTI477yM5pe26ZW/5Li6NzAuMDE277yMdmlkZW8gdHJhY2vnmoR0aW1lIHNjYWxlID0gNjAwLCBkdXJhdGlvbiA9IDQyMDAw77yM5pe26ZW/5Li6NzBcbiAgICAgICAgICAgICAqL1xuICAgICAgKGR1cmF0aW9uID4+PiAyNCkgJiAweEZGLFxuICAgICAgKGR1cmF0aW9uID4+PiAxNikgJiAweEZGLFxuICAgICAgKGR1cmF0aW9uID4+PiA4KSAmIDB4RkYsXG4gICAgICAoZHVyYXRpb24pICYgMHhGRixcbiAgICAgIDB4MDAsIDB4MDEsIDB4MDAsIDB4MDAsIC8vIFByZWZlcnJlZCByYXRlOiAxLjAgICDmjqjojZDmkq3mlL7pgJ/njofvvIzpq5gxNuS9jeWSjOS9jjE25L2N5YiG5Yir5Li65bCP5pWw54K55pW05pWw6YOo5YiG5ZKM5bCP5pWw6YOo5YiG77yM5Y2zWzE2LjE2XSDmoLzlvI/vvIzor6XlgLzkuLoxLjDvvIgweDAwMDEwMDAw77yJ6KGo56S65q2j5bi45YmN5ZCR5pKt5pS+XG4gICAgICAvKipcbiAgICAgICAgICAgICAqIFByZWZlcnJlZFZvbHVtZSgxLjAsIDJieXRlcykgKyByZXNlcnZlZCgyYnl0ZXMpXG4gICAgICAgICAgICAgKiDkuI5yYXRl57G75Ly877yMWzguOF0g5qC85byP77yMMS4w77yIMHgwMTAw77yJ6KGo56S65pyA5aSn6Z+z6YePXG4gICAgICAgICAgICAgKi9cbiAgICAgIDB4MDEsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyAgcmVzZXJ2ZWQ6IDQgKyA0IGJ5dGVz5L+d55WZ5L2NXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMSwgMHgwMCwgMHgwMCwgLy8gLS0tLWJlZ2luIGNvbXBvc2l0aW9uIG1hdHJpeC0tLS1cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyDop4bpopHlj5jmjaLnn6npmLUgICDnur/mgKfku6PmlbBcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAxLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHg0MCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gLS0tLWVuZCBjb21wb3NpdGlvbiBtYXRyaXgtLS0tXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyAtLS0tYmVnaW4gcHJlX2RlZmluZWQgNiAqIDQgYnl0ZXMtLS0tXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcHJlLWRlZmluZWQg5L+d55WZ5L2NXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIC0tLS1lbmQgcHJlX2RlZmluZWQgNiAqIDQgYnl0ZXMtLS0tXG4gICAgICAweEZGLCAweEZGLCAweEZGLCAweEZGIC8vIG5leHRfdHJhY2tfSUQg5LiL5LiA5LiqdHJhY2vkvb/nlKjnmoRpZOWPt1xuICAgIF0pXG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveCg4ICsgYnl0ZXMubGVuZ3RoLCAnbXZoZCcsIG5ldyBVaW50OEFycmF5KGJ5dGVzKSlcbiAgfVxuICBzdGF0aWMgdmlkZW9UcmFrIChkYXRhKSB7XG4gICAgbGV0IHNpemUgPSA4XG4gICAgbGV0IHRraGQgPSBGTVA0LnRraGQoe1xuICAgICAgaWQ6IDEsXG4gICAgICBkdXJhdGlvbjogZGF0YS5kdXJhdGlvbixcbiAgICAgIHRpbWVzY2FsZTogZGF0YS50aW1lc2NhbGUsXG4gICAgICB3aWR0aDogZGF0YS53aWR0aCxcbiAgICAgIGhlaWdodDogZGF0YS5oZWlnaHQsXG4gICAgICB0eXBlOiAndmlkZW8nXG4gICAgfSlcbiAgICBsZXQgbWRpYSA9IEZNUDQubWRpYSh7XG4gICAgICB0eXBlOiAndmlkZW8nLFxuICAgICAgdGltZXNjYWxlOiBkYXRhLnRpbWVzY2FsZSxcbiAgICAgIGR1cmF0aW9uOiBkYXRhLmR1cmF0aW9uLFxuICAgICAgc3BzOiBkYXRhLnNwcyxcbiAgICAgIHBwczogZGF0YS5wcHMsXG4gICAgICBwaXhlbFJhdGlvOiBkYXRhLnBpeGVsUmF0aW8sXG4gICAgICB3aWR0aDogZGF0YS53aWR0aCxcbiAgICAgIGhlaWdodDogZGF0YS5oZWlnaHRcbiAgICB9KTtcbiAgICBbdGtoZCwgbWRpYV0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5ieXRlTGVuZ3RoXG4gICAgfSlcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KHNpemUsICd0cmFrJywgdGtoZCwgbWRpYSlcbiAgfVxuICBzdGF0aWMgYXVkaW9UcmFrIChkYXRhKSB7XG4gICAgbGV0IHNpemUgPSA4XG4gICAgbGV0IHRraGQgPSBGTVA0LnRraGQoe1xuICAgICAgaWQ6IDIsXG4gICAgICBkdXJhdGlvbjogZGF0YS5kdXJhdGlvbixcbiAgICAgIHRpbWVzY2FsZTogZGF0YS50aW1lc2NhbGUsXG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIHR5cGU6ICdhdWRpbydcbiAgICB9KVxuICAgIGxldCBtZGlhID0gRk1QNC5tZGlhKHtcbiAgICAgIHR5cGU6ICdhdWRpbycsXG4gICAgICB0aW1lc2NhbGU6IGRhdGEudGltZXNjYWxlLFxuICAgICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb24sXG4gICAgICBjaGFubmVsQ291bnQ6IGRhdGEuYXVkaW9DaGFubmVsQ291bnQsXG4gICAgICBzYW1wbGVyYXRlOiBkYXRhLmF1ZGlvU2FtcGxlUmF0ZSxcbiAgICAgIGNvbmZpZzogZGF0YS5hdWRpb0NvbmZpZ1xuICAgIH0pO1xuICAgIFt0a2hkLCBtZGlhXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLmJ5dGVMZW5ndGhcbiAgICB9KVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goc2l6ZSwgJ3RyYWsnLCB0a2hkLCBtZGlhKVxuICB9XG4gIHN0YXRpYyB0a2hkIChkYXRhKSB7XG4gICAgbGV0IGlkID0gZGF0YS5pZFxuICAgIGxldCBkdXJhdGlvbiA9IGRhdGEuZHVyYXRpb25cbiAgICBsZXQgd2lkdGggPSBkYXRhLndpZHRoXG4gICAgbGV0IGhlaWdodCA9IGRhdGEuaGVpZ2h0XG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDA3LCAvLyB2ZXJzaW9uKDApICsgZmxhZ3MgMeS9jeeJiOacrCBib3jniYjmnKzvvIww5oiWMe+8jOS4gOiIrOS4ujDjgILvvIjku6XkuIvlrZfoioLmlbDlnYfmjIl2ZXJzaW9uPTDvvInmjInkvY3miJbmk43kvZznu5PmnpzlgLzvvIzpooTlrprkuYnlpoLkuIvvvJpcbiAgICAgIC8vIDB4MDAwMDAxIHRyYWNrX2VuYWJsZWTvvIzlkKbliJnor6V0cmFja+S4jeiiq+aSreaUvu+8m1xuICAgICAgLy8gMHgwMDAwMDIgdHJhY2tfaW5fbW92aWXvvIzooajnpLror6V0cmFja+WcqOaSreaUvuS4reiiq+W8leeUqO+8m1xuICAgICAgLy8gMHgwMDAwMDQgdHJhY2tfaW5fcHJldmlld++8jOihqOekuuivpXRyYWNr5Zyo6aKE6KeI5pe26KKr5byV55So44CCXG4gICAgICAvLyDkuIDoiKzor6XlgLzkuLo377yMMSsyKzQg5aaC5p6c5LiA5Liq5aqS5L2T5omA5pyJdHJhY2vlnYfmnKrorr7nva50cmFja19pbl9tb3ZpZeWSjHRyYWNrX2luX3ByZXZpZXfvvIzlsIbooqvnkIbop6PkuLrmiYDmnIl0cmFja+Wdh+iuvue9ruS6hui/meS4pOmhue+8m+WvueS6jmhpbnQgdHJhY2vvvIzor6XlgLzkuLowXG4gICAgICAvLyBoaW50IHRyYWNrIOi/meS4queJueauiueahHRyYWNr5bm25LiN5YyF5ZCr5aqS5L2T5pWw5o2u77yM6ICM5piv5YyF5ZCr5LqG5LiA5Lqb5bCG5YW25LuW5pWw5o2udHJhY2vmiZPljIXmiJDmtYHlqpLkvZPnmoTmjIfnpLrkv6Hmga/jgIJcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGNyZWF0aW9uX3RpbWXliJvlu7rml7bpl7TvvIjnm7jlr7nkuo5VVEPml7bpl7QxOTA0LTAxLTAx6Zu254K555qE56eS5pWw77yJXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBtb2RpZmljYXRpb24gdGltZSDkv67mlLnml7bpl7RcbiAgICAgIChpZCA+Pj4gMjQpICYgMHhGRiwgLy8gdHJhY2tfSUQ6IDQgYnl0ZXMgaWTlj7fvvIzkuI3og73ph43lpI3kuJTkuI3og73kuLowXG4gICAgICAoaWQgPj4+IDE2KSAmIDB4RkYsXG4gICAgICAoaWQgPj4+IDgpICYgMHhGRixcbiAgICAgIChpZCkgJiAweEZGLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWQ6IDQgYnl0ZXMgICAg5L+d55WZ5L2NXG4gICAgICAoZHVyYXRpb24gPj4+IDI0KSAmIDB4RkYsIC8vIGR1cmF0aW9uOiA0IGJ5dGVzIHRyYWNr55qE5pe26Ze06ZW/5bqmXG4gICAgICAoZHVyYXRpb24gPj4+IDE2KSAmIDB4RkYsXG4gICAgICAoZHVyYXRpb24gPj4+IDgpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbikgJiAweEZGLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWQ6IDIgKiA0IGJ5dGVzICAgIOS/neeVmeS9jVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGxheWVyKDJieXRlcykgKyBhbHRlcm5hdGVfZ3JvdXAoMmJ5dGVzKSAg6KeG6aKR5bGC77yM6buY6K6k5Li6MO+8jOWAvOWwj+eahOWcqOS4iuWxgi50cmFja+WIhue7hOS/oeaBr++8jOm7mOiupOS4ujDooajnpLror6V0cmFja+acquS4juWFtuS7lnRyYWNr5pyJ576k57uE5YWz57O7XG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyB2b2x1bWUoMmJ5dGVzKSArIHJlc2VydmVkKDJieXRlcykgICAgWzguOF0g5qC85byP77yM5aaC5p6c5Li66Z+z6aKRdHJhY2vvvIwxLjDvvIgweDAxMDDvvInooajnpLrmnIDlpKfpn7Pph4/vvJvlkKbliJnkuLowICAgK+S/neeVmeS9jVxuICAgICAgMHgwMCwgMHgwMSwgMHgwMCwgMHgwMCwgLy8gLS0tLWJlZ2luIGNvbXBvc2l0aW9uIG1hdHJpeC0tLS1cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDEsIDB4MDAsIDB4MDAsIC8vIOinhumikeWPmOaNouefqemYtVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHg0MCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gLS0tLWVuZCBjb21wb3NpdGlvbiBtYXRyaXgtLS0tXG4gICAgICAod2lkdGggPj4+IDgpICYgMHhGRiwgLy8gLy/lrr3luqZcbiAgICAgICh3aWR0aCkgJiAweEZGLFxuICAgICAgMHgwMCwgMHgwMCxcbiAgICAgIChoZWlnaHQgPj4+IDgpICYgMHhGRiwgLy8g6auY5bqmXG4gICAgICAoaGVpZ2h0KSAmIDB4RkYsXG4gICAgICAweDAwLCAweDAwXG4gICAgXSlcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDggKyBjb250ZW50LmJ5dGVMZW5ndGgsICd0a2hkJywgY29udGVudClcbiAgfVxuICBzdGF0aWMgZWR0cyAoZGF0YSkge1xuICAgIGxldCBidWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICBsZXQgZHVyYXRpb24gPSBkYXRhLmR1cmF0aW9uXG4gICAgbGV0IG1lZGlhVGltZSA9IGRhdGEubWVkaWFUaW1lXG4gICAgYnVmZmVyLndyaXRlKEZNUDQuc2l6ZSgzNiksIEZNUDQudHlwZSgnZWR0cycpKVxuICAgIC8vIGVsc3RcbiAgICBidWZmZXIud3JpdGUoRk1QNC5zaXplKDI4KSwgRk1QNC50eXBlKCdlbHN0JykpXG4gICAgYnVmZmVyLndyaXRlKG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDEsIC8vIGVudHJ5IGNvdW50XG4gICAgICAoZHVyYXRpb24gPj4gMjQpICYgMHhmZiwgKGR1cmF0aW9uID4+IDE2KSAmIDB4ZmYsIChkdXJhdGlvbiA+PiA4KSAmIDB4ZmYsIGR1cmF0aW9uICYgMHhmZixcbiAgICAgIChtZWRpYVRpbWUgPj4gMjQpICYgMHhmZiwgKG1lZGlhVGltZSA+PiAxNikgJiAweGZmLCAobWVkaWFUaW1lID4+IDgpICYgMHhmZiwgbWVkaWFUaW1lICYgMHhmZixcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDEgLy8gbWVkaWEgcmF0ZVxuICAgIF0pKVxuICAgIHJldHVybiBidWZmZXIuYnVmZmVyXG4gIH1cbiAgc3RhdGljIG1kaWEgKGRhdGEpIHtcbiAgICBsZXQgc2l6ZSA9IDhcbiAgICBsZXQgbWRoZCA9IEZNUDQubWRoZChkYXRhLnRpbWVzY2FsZSwgZGF0YS5kdXJhdGlvbilcbiAgICBsZXQgaGRsciA9IEZNUDQuaGRscihkYXRhLnR5cGUpXG4gICAgbGV0IG1pbmYgPSBGTVA0Lm1pbmYoZGF0YSk7XG4gICAgW21kaGQsIGhkbHIsIG1pbmZdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBzaXplICs9IGl0ZW0uYnl0ZUxlbmd0aFxuICAgIH0pXG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveChzaXplLCAnbWRpYScsIG1kaGQsIGhkbHIsIG1pbmYpXG4gIH1cbiAgc3RhdGljIG1kaGQgKHRpbWVzY2FsZSwgZHVyYXRpb24pIHtcbiAgICBsZXQgY29udGVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGNyZWF0aW9uX3RpbWUgICAg5Yib5bu65pe26Ze0XG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBtb2RpZmljYXRpb25fdGltZeS/ruaUueaXtumXtFxuICAgICAgKHRpbWVzY2FsZSA+Pj4gMjQpICYgMHhGRiwgLy8gdGltZXNjYWxlOiA0IGJ5dGVzICAgIOaWh+S7tuWqkuS9k+WcqDHnp5Lml7bpl7TlhoXnmoTliLvluqblgLzvvIzlj6/ku6XnkIbop6PkuLox56eS6ZW/5bqmXG4gICAgICAodGltZXNjYWxlID4+PiAxNikgJiAweEZGLFxuICAgICAgKHRpbWVzY2FsZSA+Pj4gOCkgJiAweEZGLFxuICAgICAgKHRpbWVzY2FsZSkgJiAweEZGLFxuICAgICAgKGR1cmF0aW9uID4+PiAyNCkgJiAweEZGLCAvLyBkdXJhdGlvbjogNCBieXRlcyAgdHJhY2vnmoTml7bpl7Tplb/luqZcbiAgICAgIChkdXJhdGlvbiA+Pj4gMTYpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbiA+Pj4gOCkgJiAweEZGLFxuICAgICAgKGR1cmF0aW9uKSAmIDB4RkYsXG4gICAgICAweDU1LCAweEM0LCAvLyBsYW5ndWFnZTogdW5kICh1bmRldGVybWluZWQpIOWqkuS9k+ivreiogOeggeOAguacgOmrmOS9jeS4ujDvvIzlkI7pnaIxNeS9jeS4ujPkuKrlrZfnrKbvvIjop4FJU08gNjM5LTIvVOagh+WHhuS4reWumuS5ie+8iVxuICAgICAgMHgwMCwgMHgwMCAvLyBwcmVfZGVmaW5lZCA9IDBcbiAgICBdKVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goMTIgKyBjb250ZW50LmJ5dGVMZW5ndGgsICdtZGhkJywgRk1QNC5leHRlbnNpb24oMCwgMCksIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIGhkbHIgKHR5cGUpIHtcbiAgICBsZXQgdmFsdWUgPSBbMHgwMCwgLy8gdmVyc2lvbiAwXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcHJlX2RlZmluZWRcbiAgICAgIDB4NzYsIDB4NjksIDB4NjQsIDB4NjUsIC8vIGhhbmRsZXJfdHlwZTogJ3ZpZGUnXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDU2LCAweDY5LCAweDY0LCAweDY1LFxuICAgICAgMHg2ZiwgMHg0OCwgMHg2MSwgMHg2ZSxcbiAgICAgIDB4NjQsIDB4NmMsIDB4NjUsIDB4NzIsIDB4MDAgLy8gbmFtZTogJ1ZpZGVvSGFuZGxlcidcbiAgICBdXG4gICAgaWYgKHR5cGUgPT09ICdhdWRpbycpIHtcbiAgICAgIHZhbHVlLnNwbGljZSg4LCA0LCAuLi5bMHg3MywgMHg2ZiwgMHg3NSwgMHg2ZV0pXG4gICAgICB2YWx1ZS5zcGxpY2UoMjQsIDEzLCAuLi5bMHg1MywgMHg2ZiwgMHg3NSwgMHg2ZSxcbiAgICAgICAgMHg2NCwgMHg0OCwgMHg2MSwgMHg2ZSxcbiAgICAgICAgMHg2NCwgMHg2YywgMHg2NSwgMHg3MiwgMHgwMF0pXG4gICAgfVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goOCArIHZhbHVlLmxlbmd0aCwgJ2hkbHInLCBuZXcgVWludDhBcnJheSh2YWx1ZSkpXG4gIH1cbiAgc3RhdGljIG1pbmYgKGRhdGEpIHtcbiAgICBsZXQgc2l6ZSA9IDhcbiAgICBsZXQgdm1oZCA9IGRhdGEudHlwZSA9PT0gJ3ZpZGVvJyA/IEZNUDQudm1oZCgpIDogRk1QNC5zbWhkKClcbiAgICBsZXQgZGluZiA9IEZNUDQuZGluZigpXG4gICAgbGV0IHN0YmwgPSBGTVA0LnN0YmwoZGF0YSk7XG4gICAgW3ZtaGQsIGRpbmYsIHN0YmxdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBzaXplICs9IGl0ZW0uYnl0ZUxlbmd0aFxuICAgIH0pXG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveChzaXplLCAnbWluZicsIHZtaGQsIGRpbmYsIHN0YmwpXG4gIH1cbiAgc3RhdGljIHZtaGQgKCkge1xuICAgIHJldHVybiBGTVA0LmluaXRCb3goMjAsICd2bWhkJywgbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvblxuICAgICAgMHgwMCwgMHgwMCwgMHgwMSwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIC8vIGdyYXBoaWNzbW9kZVxuICAgICAgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwIC8vIG9wY29sb3JcbiAgICBdKSlcbiAgfVxuICBzdGF0aWMgc21oZCAoKSB7XG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveCgxNiwgJ3NtaGQnLCBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAvLyB2ZXJzaW9uXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuICAgICAgMHgwMCwgMHgwMCwgLy8gYmFsYW5jZVxuICAgICAgMHgwMCwgMHgwMCAvLyByZXNlcnZlZFxuICAgIF0pKVxuICB9XG4gIHN0YXRpYyBkaW5mICgpIHtcbiAgICBsZXQgYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgbGV0IGRyZWYgPSBbMHgwMCwgLy8gdmVyc2lvbiAwXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMSwgLy8gZW50cnlfY291bnRcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MGMsIC8vIGVudHJ5X3NpemVcbiAgICAgIDB4NzUsIDB4NzIsIDB4NmMsIDB4MjAsIC8vICd1cmwnIHR5cGVcbiAgICAgIDB4MDAsIC8vIHZlcnNpb24gMFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMSAvLyBlbnRyeV9mbGFnc1xuICAgIF1cbiAgICBidWZmZXIud3JpdGUoRk1QNC5zaXplKDM2KSwgRk1QNC50eXBlKCdkaW5mJyksIEZNUDQuc2l6ZSgyOCksIEZNUDQudHlwZSgnZHJlZicpLCBuZXcgVWludDhBcnJheShkcmVmKSlcbiAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlclxuICB9XG4gIHN0YXRpYyBzdGJsIChkYXRhKSB7XG4gICAgbGV0IHNpemUgPSA4XG4gICAgbGV0IHN0c2QgPSBGTVA0LnN0c2QoZGF0YSlcbiAgICBsZXQgc3R0cyA9IEZNUDQuc3R0cygpXG4gICAgbGV0IHN0c2MgPSBGTVA0LnN0c2MoKVxuICAgIGxldCBzdHN6ID0gRk1QNC5zdHN6KClcbiAgICBsZXQgc3RjbyA9IEZNUDQuc3RjbygpO1xuICAgIFtzdHNkLCBzdHRzLCBzdHNjLCBzdHN6LCBzdGNvXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLmJ5dGVMZW5ndGhcbiAgICB9KVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goc2l6ZSwgJ3N0YmwnLCBzdHNkLCBzdHRzLCBzdHNjLCBzdHN6LCBzdGNvKVxuICB9XG4gIHN0YXRpYyBzdHNkIChkYXRhKSB7XG4gICAgbGV0IGNvbnRlbnRcbiAgICBpZiAoZGF0YS50eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICAvLyBpZiAoIWRhdGEuaXNBQUMgJiYgZGF0YS5jb2RlYyA9PT0gJ21wNCcpIHtcbiAgICAgIC8vICAgICBjb250ZW50ID0gRk1QNC5tcDMoZGF0YSk7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy9cbiAgICAgIC8vIH1cbiAgICAgIC8vIOaUr+aMgW1wNGFcbiAgICAgIGNvbnRlbnQgPSBGTVA0Lm1wNGEoZGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCA9IEZNUDQuYXZjMShkYXRhKVxuICAgIH1cbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDE2ICsgY29udGVudC5ieXRlTGVuZ3RoLCAnc3RzZCcsIEZNUDQuZXh0ZW5zaW9uKDAsIDApLCBuZXcgVWludDhBcnJheShbMHgwMCwgMHgwMCwgMHgwMCwgMHgwMV0pLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyBtcDRhIChkYXRhKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIDB4MDEsIC8vIGRhdGFfcmVmZXJlbmNlX2luZGV4XG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIGRhdGEuY2hhbm5lbENvdW50LCAvLyBjaGFubmVsY291bnRcbiAgICAgIDB4MDAsIDB4MTAsIC8vIHNhbXBsZVNpemU6MTZiaXRzXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZDJcbiAgICAgIChkYXRhLnNhbXBsZXJhdGUgPj4gOCkgJiAweGZmLFxuICAgICAgZGF0YS5zYW1wbGVyYXRlICYgMHhmZiwgLy9cbiAgICAgIDB4MDAsIDB4MDBcbiAgICBdKVxuICAgIGxldCBlc2RzID0gRk1QNC5lc2RzKGRhdGEuY29uZmlnKVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goOCArIGNvbnRlbnQuYnl0ZUxlbmd0aCArIGVzZHMuYnl0ZUxlbmd0aCwgJ21wNGEnLCBjb250ZW50LCBlc2RzKVxuICB9XG4gIHN0YXRpYyBlc2RzIChjb25maWcgPSBbNDMsIDE0NiwgOCwgMF0pIHtcbiAgICBjb25zdCBjb25maWdsZW4gPSBjb25maWcubGVuZ3RoXG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvbiAwXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuXG4gICAgICAweDAzLCAvLyBkZXNjcmlwdG9yX3R5cGVcbiAgICAgIDB4MTcgKyBjb25maWdsZW4sIC8vIGxlbmd0aFxuICAgICAgMHgwMCwgMHgwMSwgLy8gZXNfaWRcbiAgICAgIDB4MDAsIC8vIHN0cmVhbV9wcmlvcml0eVxuXG4gICAgICAweDA0LCAvLyBkZXNjcmlwdG9yX3R5cGVcbiAgICAgIDB4MGYgKyBjb25maWdsZW4sIC8vIGxlbmd0aFxuICAgICAgMHg0MCwgLy8gY29kZWMgOiBtcGVnNF9hdWRpb1xuICAgICAgMHgxNSwgLy8gc3RyZWFtX3R5cGVcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGJ1ZmZlcl9zaXplXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBtYXhCaXRyYXRlXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBhdmdCaXRyYXRlXG5cbiAgICAgIDB4MDUgLy8gZGVzY3JpcHRvcl90eXBlXG4gICAgXS5jb25jYXQoW2NvbmZpZ2xlbl0pLmNvbmNhdChjb25maWcpLmNvbmNhdChbMHgwNiwgMHgwMSwgMHgwMl0pKVxuICAgIGJ1ZmZlci53cml0ZShGTVA0LnNpemUoOCArIGNvbnRlbnQuYnl0ZUxlbmd0aCksIEZNUDQudHlwZSgnZXNkcycpLCBjb250ZW50KVxuICAgIHJldHVybiBidWZmZXIuYnVmZmVyXG4gIH1cbiAgc3RhdGljIGF2YzEgKGRhdGEpIHtcbiAgICBsZXQgYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgbGV0IHNpemUgPSA0MC8vIDgoYXZjMSkrOChhdmNjKSs4KGJ0cnQpKzE2KHBhc3ApXG4gICAgbGV0IHNwcyA9IGRhdGEuc3BzXG4gICAgbGV0IHBwcyA9IGRhdGEucHBzXG4gICAgbGV0IHdpZHRoID0gZGF0YS53aWR0aFxuICAgIGxldCBoZWlnaHQgPSBkYXRhLmhlaWdodFxuICAgIGxldCBoU3BhY2luZyA9IGRhdGEucGl4ZWxSYXRpb1swXVxuICAgIGxldCB2U3BhY2luZyA9IGRhdGEucGl4ZWxSYXRpb1sxXVxuICAgIGxldCBhdmNjQnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgYXZjY0J1ZmZlci53cml0ZShuZXcgVWludDhBcnJheShbXG4gICAgICAweDAxLCAvLyB2ZXJzaW9uXG4gICAgICBzcHNbMV0sIC8vIHByb2ZpbGVcbiAgICAgIHNwc1syXSwgLy8gcHJvZmlsZSBjb21wYXRpYmxlXG4gICAgICBzcHNbM10sIC8vIGxldmVsXG4gICAgICAweGZjIHwgMyxcbiAgICAgIDB4RTAgfCAxIC8vIOebruWJjeWPquWkhOeQhuS4gOS4qnNwc1xuICAgIF0uY29uY2F0KFtzcHMubGVuZ3RoID4+PiA4ICYgMHhmZiwgc3BzLmxlbmd0aCAmIDB4ZmZdKSkpXG4gICAgYXZjY0J1ZmZlci53cml0ZShzcHMsIG5ldyBVaW50OEFycmF5KFsxLCBwcHMubGVuZ3RoID4+PiA4ICYgMHhmZiwgcHBzLmxlbmd0aCAmIDB4ZmZdKSwgcHBzKVxuXG4gICAgbGV0IGF2Y2MgPSBhdmNjQnVmZmVyLmJ1ZmZlclxuICAgIGxldCBhdmMxID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCAweDAxLCAvLyBkYXRhX3JlZmVyZW5jZV9pbmRleFxuICAgICAgMHgwMCwgMHgwMCwgLy8gcHJlX2RlZmluZWRcbiAgICAgIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHByZV9kZWZpbmVkXG4gICAgICAod2lkdGggPj4gOCkgJiAweGZmLFxuICAgICAgd2lkdGggJiAweGZmLCAvLyB3aWR0aFxuICAgICAgKGhlaWdodCA+PiA4KSAmIDB4ZmYsXG4gICAgICBoZWlnaHQgJiAweGZmLCAvLyBoZWlnaHRcbiAgICAgIDB4MDAsIDB4NDgsIDB4MDAsIDB4MDAsIC8vIGhvcml6cmVzb2x1dGlvblxuICAgICAgMHgwMCwgMHg0OCwgMHgwMCwgMHgwMCwgLy8gdmVydHJlc29sdXRpb25cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCAweDAxLCAvLyBmcmFtZV9jb3VudFxuICAgICAgMHgxMixcbiAgICAgIDB4NjQsIDB4NjEsIDB4NjksIDB4NkMsIC8vIGRhaWx5bW90aW9uL2hscy5qc1xuICAgICAgMHg3OSwgMHg2RCwgMHg2RiwgMHg3NCxcbiAgICAgIDB4NjksIDB4NkYsIDB4NkUsIDB4MkYsXG4gICAgICAweDY4LCAweDZDLCAweDczLCAweDJFLFxuICAgICAgMHg2QSwgMHg3MywgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gY29tcHJlc3Nvcm5hbWVcbiAgICAgIDB4MDAsIDB4MTgsIC8vIGRlcHRoID0gMjRcbiAgICAgIDB4MTEsIDB4MTFdKSAvLyBwcmVfZGVmaW5lZCA9IC0xXG4gICAgbGV0IGJ0cnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAweDFjLCAweDljLCAweDgwLCAvLyBidWZmZXJTaXplREJcbiAgICAgIDB4MDAsIDB4MmQsIDB4YzYsIDB4YzAsIC8vIG1heEJpdHJhdGVcbiAgICAgIDB4MDAsIDB4MmQsIDB4YzYsIDB4YzAgLy8gYXZnQml0cmF0ZVxuICAgIF0pXG4gICAgbGV0IHBhc3AgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAoaFNwYWNpbmcgPj4gMjQpLCAvLyBoU3BhY2luZ1xuICAgICAgKGhTcGFjaW5nID4+IDE2KSAmIDB4ZmYsXG4gICAgICAoaFNwYWNpbmcgPj4gOCkgJiAweGZmLFxuICAgICAgaFNwYWNpbmcgJiAweGZmLFxuICAgICAgKHZTcGFjaW5nID4+IDI0KSwgLy8gdlNwYWNpbmdcbiAgICAgICh2U3BhY2luZyA+PiAxNikgJiAweGZmLFxuICAgICAgKHZTcGFjaW5nID4+IDgpICYgMHhmZixcbiAgICAgIHZTcGFjaW5nICYgMHhmZlxuICAgIF0pXG5cbiAgICBidWZmZXIud3JpdGUoXG4gICAgICBGTVA0LnNpemUoc2l6ZSArIGF2YzEuYnl0ZUxlbmd0aCArIGF2Y2MuYnl0ZUxlbmd0aCArIGJ0cnQuYnl0ZUxlbmd0aCksIEZNUDQudHlwZSgnYXZjMScpLCBhdmMxLFxuICAgICAgRk1QNC5zaXplKDggKyBhdmNjLmJ5dGVMZW5ndGgpLCBGTVA0LnR5cGUoJ2F2Y0MnKSwgYXZjYyxcbiAgICAgIEZNUDQuc2l6ZSgyMCksIEZNUDQudHlwZSgnYnRydCcpLCBidHJ0LFxuICAgICAgRk1QNC5zaXplKDE2KSwgRk1QNC50eXBlKCdwYXNwJyksIHBhc3BcbiAgICApXG4gICAgcmV0dXJuIGJ1ZmZlci5idWZmZXJcbiAgfVxuICBzdGF0aWMgc3R0cyAoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAvLyB2ZXJzaW9uXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCAvLyBlbnRyeV9jb3VudFxuICAgIF0pXG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveCgxNiwgJ3N0dHMnLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyBzdHNjICgpIHtcbiAgICBsZXQgY29udGVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIC8vIHZlcnNpb25cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGZsYWdzXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwIC8vIGVudHJ5X2NvdW50XG4gICAgXSlcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDE2LCAnc3RzYycsIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIHN0Y28gKCkge1xuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvblxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAgLy8gZW50cnlfY291bnRcbiAgICBdKVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goMTYsICdzdGNvJywgY29udGVudClcbiAgfVxuICBzdGF0aWMgc3RzeiAoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAvLyB2ZXJzaW9uXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gc2FtcGxlX3NpemVcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAgLy8gc2FtcGxlX2NvdW50XG4gICAgXSlcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDIwLCAnc3RzeicsIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIG12ZXggKGR1cmF0aW9uKSB7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGxldCBtZWhkID0gQnVmZmVyLndyaXRlVWludDMyKGR1cmF0aW9uKVxuICAgIGJ1ZmZlci53cml0ZShGTVA0LnNpemUoODgpLCBGTVA0LnR5cGUoJ212ZXgnKSwgRk1QNC5zaXplKDE2KSwgRk1QNC50eXBlKCdtZWhkJyksIEZNUDQuZXh0ZW5zaW9uKDAsIDApLCBtZWhkLCBGTVA0LnRyZXgoMSksIEZNUDQudHJleCgyKSlcbiAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlclxuICB9XG4gIHN0YXRpYyB0cmV4IChpZCkge1xuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvbiAwXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuICAgICAgKGlkID4+IDI0KSxcbiAgICAgIChpZCA+PiAxNikgJiAweGZmLFxuICAgICAgKGlkID4+IDgpICYgMHhmZixcbiAgICAgIChpZCAmIDB4ZmYpLCAvLyB0cmFja19JRFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMSwgLy8gZGVmYXVsdF9zYW1wbGVfZGVzY3JpcHRpb25faW5kZXhcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGRlZmF1bHRfc2FtcGxlX2R1cmF0aW9uXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBkZWZhdWx0X3NhbXBsZV9zaXplXG4gICAgICAweDAwLCAweDAxLCAweDAwLCAweDAxIC8vIGRlZmF1bHRfc2FtcGxlX2ZsYWdzXG4gICAgXSlcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDggKyBjb250ZW50LmJ5dGVMZW5ndGgsICd0cmV4JywgY29udGVudClcbiAgfVxuICBzdGF0aWMgbW9vZiAoZGF0YSkge1xuICAgIGxldCBzaXplID0gOFxuICAgIGxldCBtZmhkID0gRk1QNC5tZmhkKClcbiAgICBsZXQgdHJhZiA9IEZNUDQudHJhZihkYXRhKTtcbiAgICBbbWZoZCwgdHJhZl0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5ieXRlTGVuZ3RoXG4gICAgfSlcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KHNpemUsICdtb29mJywgbWZoZCwgdHJhZilcbiAgfVxuICBzdGF0aWMgbWZoZCAoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBCdWZmZXIud3JpdGVVaW50MzIoRk1QNC5zZXF1ZW5jZSlcbiAgICBGTVA0LnNlcXVlbmNlICs9IDFcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDE2LCAnbWZoZCcsIEZNUDQuZXh0ZW5zaW9uKDAsIDApLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyB0cmFmIChkYXRhKSB7XG4gICAgbGV0IHNpemUgPSA4XG4gICAgbGV0IHRmaGQgPSBGTVA0LnRmaGQoZGF0YS5pZClcbiAgICBsZXQgdGZkdCA9IEZNUDQudGZkdChkYXRhLnRpbWUpXG4gICAgbGV0IHNkdHAgPSBGTVA0LnNkdHAoZGF0YSlcbiAgICBsZXQgdHJ1biA9IEZNUDQudHJ1bihkYXRhLCBzZHRwLmJ5dGVMZW5ndGgpO1xuICAgIFt0ZmhkLCB0ZmR0LCBzZHRwLCB0cnVuXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLmJ5dGVMZW5ndGhcbiAgICB9KVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goc2l6ZSwgJ3RyYWYnLCB0ZmhkLCB0ZmR0LCBzZHRwLCB0cnVuKVxuICB9XG4gIHN0YXRpYyB0ZmhkIChpZCkge1xuICAgIGxldCBjb250ZW50ID0gQnVmZmVyLndyaXRlVWludDMyKGlkKVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goMTYsICd0ZmhkJywgRk1QNC5leHRlbnNpb24oMCwgMCksIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIHRmZHQgKHRpbWUpIHtcbiAgICAvLyBsZXQgdXBwZXIgPSBNYXRoLmZsb29yKHRpbWUgLyAoVUlOVDMyX01BWCArIDEpKSxcbiAgICAvLyAgICAgbG93ZXIgPSBNYXRoLmZsb29yKHRpbWUgJSAoVUlOVDMyX01BWCArIDEpKTtcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDE2LCAndGZkdCcsIEZNUDQuZXh0ZW5zaW9uKDAsIDApLCBCdWZmZXIud3JpdGVVaW50MzIodGltZSkpXG4gIH1cbiAgc3RhdGljIHRydW4gKGRhdGEsIHNkdHBMZW5ndGgpIHtcbiAgICAvLyBsZXQgaWQgPSBkYXRhLmlkO1xuICAgIC8vIGxldCBjZWlsID0gaWQgPT09IDEgPyAxNiA6IDEyO1xuICAgIGxldCBidWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICBsZXQgc2FtcGxlQ291bnQgPSBCdWZmZXIud3JpdGVVaW50MzIoZGF0YS5zYW1wbGVzLmxlbmd0aClcbiAgICAvLyBtZGF0LWhlYWRlciA4XG4gICAgLy8gbW9vZi1oZWFkZXIgOFxuICAgIC8vIG1maGQgMTZcbiAgICAvLyB0cmFmLWhlYWRlciA4XG4gICAgLy8gdGhoZCAxNlxuICAgIC8vIHRmZHQgMjBcbiAgICAvLyB0cnVuLWhlYWRlciAxMlxuICAgIC8vIHNhbXBsZUNvdW50IDRcbiAgICAvLyBkYXRhLW9mZnNldCA0XG4gICAgLy8gc2FtcGxlcy5sZW5ndGhcbiAgICBsZXQgb2Zmc2V0ID0gQnVmZmVyLndyaXRlVWludDMyKDggKyA4ICsgMTYgKyA4ICsgMTYgKyAxNiArIDEyICsgNCArIDQgKyAxNiAqIGRhdGEuc2FtcGxlcy5sZW5ndGggKyBzZHRwTGVuZ3RoKVxuICAgIGJ1ZmZlci53cml0ZShGTVA0LnNpemUoMjAgKyAxNiAqIGRhdGEuc2FtcGxlcy5sZW5ndGgpLCBGTVA0LnR5cGUoJ3RydW4nKSwgbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4MDAsIDB4MEYsIDB4MDFdKSwgc2FtcGxlQ291bnQsIG9mZnNldClcblxuICAgIGxldCBzaXplID0gYnVmZmVyLmJ1ZmZlci5ieXRlTGVuZ3RoXG4gICAgbGV0IHdyaXRlT2Zmc2V0ID0gMFxuICAgIGRhdGEuc2FtcGxlcy5mb3JFYWNoKCgpID0+IHtcbiAgICAgIHNpemUgKz0gMTZcbiAgICB9KVxuXG4gICAgbGV0IHRydW5Cb3ggPSBuZXcgVWludDhBcnJheShzaXplKVxuXG4gICAgdHJ1bkJveC5zZXQoYnVmZmVyLmJ1ZmZlciwgMClcbiAgICB3cml0ZU9mZnNldCArPSBidWZmZXIuYnVmZmVyLmJ5dGVMZW5ndGhcbiAgICBkYXRhLnNhbXBsZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgdHJ1bkJveC5zZXQoQnVmZmVyLndyaXRlVWludDMyKGl0ZW0uZHVyYXRpb24pLCB3cml0ZU9mZnNldClcbiAgICAgIHdyaXRlT2Zmc2V0ICs9IDRcbiAgICAgIHRydW5Cb3guc2V0KEJ1ZmZlci53cml0ZVVpbnQzMihpdGVtLnNpemUpLCB3cml0ZU9mZnNldClcbiAgICAgIHdyaXRlT2Zmc2V0ICs9IDRcblxuICAgICAgaWYgKGRhdGEuaWQgPT09IDEpIHtcbiAgICAgICAgdHJ1bkJveC5zZXQoQnVmZmVyLndyaXRlVWludDMyKGl0ZW0uaXNLZXlmcmFtZSA/IDB4MDIwMDAwMDAgOiAweDAxMDEwMDAwKSwgd3JpdGVPZmZzZXQpXG4gICAgICAgIHdyaXRlT2Zmc2V0ICs9IDRcbiAgICAgICAgdHJ1bkJveC5zZXQoQnVmZmVyLndyaXRlVWludDMyKGl0ZW0uY3BzKSwgd3JpdGVPZmZzZXQpXG4gICAgICAgIHdyaXRlT2Zmc2V0ICs9IDRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRydW5Cb3guc2V0KEJ1ZmZlci53cml0ZVVpbnQzMigweDAxMDAwMDAwKSwgd3JpdGVPZmZzZXQpXG4gICAgICAgIHdyaXRlT2Zmc2V0ICs9IDRcbiAgICAgICAgdHJ1bkJveC5zZXQoQnVmZmVyLndyaXRlVWludDMyKDApLCB3cml0ZU9mZnNldClcbiAgICAgICAgd3JpdGVPZmZzZXQgKz0gNFxuICAgICAgfVxuXG4gICAgICAvLyBidWZmZXIud3JpdGUoQnVmZmVyLndyaXRlVWludDMyKDApKTtcbiAgICB9KVxuICAgIHJldHVybiB0cnVuQm94XG4gIH1cbiAgc3RhdGljIHNkdHAgKGRhdGEpIHtcbiAgICBsZXQgYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgYnVmZmVyLndyaXRlKEZNUDQuc2l6ZSgxMiArIGRhdGEuc2FtcGxlcy5sZW5ndGgpLCBGTVA0LnR5cGUoJ3NkdHAnKSwgRk1QNC5leHRlbnNpb24oMCwgMCkpXG4gICAgZGF0YS5zYW1wbGVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBidWZmZXIud3JpdGUobmV3IFVpbnQ4QXJyYXkoZGF0YS5pZCA9PT0gMSA/IFtpdGVtLmtleSA/IDMyIDogMTZdIDogWzE2XSkpXG4gICAgfSlcbiAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlclxuICB9XG4gIHN0YXRpYyBtZGF0IChkYXRhKSB7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGxldCBzaXplID0gOFxuICAgIGRhdGEuc2FtcGxlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLnNpemVcbiAgICB9KVxuICAgIGJ1ZmZlci53cml0ZShGTVA0LnNpemUoc2l6ZSksIEZNUDQudHlwZSgnbWRhdCcpKVxuICAgIGxldCBtZGF0Qm94ID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSlcbiAgICBsZXQgb2Zmc2V0ID0gMFxuICAgIG1kYXRCb3guc2V0KGJ1ZmZlci5idWZmZXIsIG9mZnNldClcbiAgICBvZmZzZXQgKz0gOFxuICAgIGRhdGEuc2FtcGxlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5idWZmZXIuZm9yRWFjaCgodW5pdCkgPT4ge1xuICAgICAgICBtZGF0Qm94LnNldCh1bml0LmRhdGEsIG9mZnNldClcbiAgICAgICAgb2Zmc2V0ICs9IHVuaXQuZGF0YS5ieXRlTGVuZ3RoXG4gICAgICAgIC8vIGJ1ZmZlci53cml0ZSh1bml0LmRhdGEpO1xuICAgICAgfSlcbiAgICB9KVxuICAgIHJldHVybiBtZGF0Qm94XG4gIH1cbn1cbkZNUDQudHlwZSA9IGNhY2hlV3JhcHBlcigobmFtZSkgPT4ge1xuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoW25hbWUuY2hhckNvZGVBdCgwKSwgbmFtZS5jaGFyQ29kZUF0KDEpLCBuYW1lLmNoYXJDb2RlQXQoMiksIG5hbWUuY2hhckNvZGVBdCgzKV0pXG59KVxuRk1QNC5zZXF1ZW5jZSA9IDFcblxuZXhwb3J0IGRlZmF1bHQgRk1QNFxuIiwiaW1wb3J0IE1lZGlhU2VnbWVudExpc3QgZnJvbSAnLi4vLi4vbW9kZWxzL01lZGlhU2VnbWVudExpc3QnXG5pbXBvcnQgTWVkaWFTZWdtZW50IGZyb20gJy4uLy4uL21vZGVscy9NZWRpYVNlZ21lbnQnXG5pbXBvcnQgTWVkaWFTYW1wbGUgZnJvbSAnLi4vLi4vbW9kZWxzL01lZGlhU2FtcGxlJ1xuaW1wb3J0IHNuaWZmZXIgZnJvbSAnLi4vLi4vdXRpbHMvc25pZmZlcidcbmltcG9ydCBCdWZmZXIgZnJvbSAnLi4vLi4vd3JpdGUvQnVmZmVyJ1xuaW1wb3J0IEZNUDQgZnJvbSAnLi9GbXA0J1xuaW1wb3J0IFJlbXV4ZXIgZnJvbSAnLi9SZW11eGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNcDRSZW11eGVyIGV4dGVuZHMgUmVtdXhlciB7XG4gIGNvbnN0cnVjdG9yIChzdG9yZSkge1xuICAgIHN1cGVyKHN0b3JlKVxuICAgIHRoaXMuX2R0c0Jhc2UgPSAwXG4gICAgdGhpcy5faXNEdHNCYXNlSW5pdGVkID0gZmFsc2VcbiAgICB0aGlzLl92aWRlb01ldGEgPSBudWxsXG4gICAgdGhpcy5fYXVkaW9NZXRhID0gbnVsbFxuICAgIHRoaXMuX2F1ZGlvTmV4dER0cyA9IG51bGxcbiAgICB0aGlzLl92aWRlb05leHREdHMgPSBudWxsXG4gICAgdGhpcy5fdmlkZW9TZWdtZW50TGlzdCA9IG5ldyBNZWRpYVNlZ21lbnRMaXN0KCd2aWRlbycpXG4gICAgdGhpcy5fYXVkaW9TZWdtZW50TGlzdCA9IG5ldyBNZWRpYVNlZ21lbnRMaXN0KCdhdWRpbycpXG4gICAgY29uc3Qge2Jyb3dzZXJ9ID0gc25pZmZlclxuICAgIHRoaXMuX2ZpbGxTaWxlbmNlRnJhbWUgPSBicm93c2VyID09PSAnaWUnXG4gICAgdGhpcy5oYW5kbGVNZWRpYUZyYWdtZW50ID0gKCkgPT4ge31cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuX2R0c0Jhc2UgPSAtMVxuICAgIHRoaXMuX2R0c0Jhc2VJbml0ZWQgPSBmYWxzZVxuICAgIHRoaXMuX2F1ZGlvTWV0YSA9IG51bGxcbiAgICB0aGlzLl92aWRlb01ldGEgPSBudWxsXG4gICAgdGhpcy5fdmlkZW9OZXh0RHRzID0gbnVsbFxuICAgIHRoaXMuX2F1ZGlvTmV4dER0cyA9IG51bGxcbiAgICB0aGlzLl92aWRlb1NlZ21lbnRMaXN0LmNsZWFyKClcbiAgICB0aGlzLl9hdWRpb1NlZ21lbnRMaXN0LmNsZWFyKClcbiAgICB0aGlzLl92aWRlb1NlZ21lbnRMaXN0ID0gbnVsbFxuICAgIHRoaXMuX2F1ZGlvU2VnbWVudExpc3QgPSBudWxsXG4gIH1cblxuICByZW11eCAoYXVkaW9UcmFjaywgdmlkZW9UcmFjaykge1xuICAgICF0aGlzLl9pc0R0c0Jhc2VJbml0ZWQgJiYgdGhpcy5jYWxjRHRzQmFzZShhdWRpb1RyYWNrLCB2aWRlb1RyYWNrKVxuXG4gICAgdGhpcy5fcmVtdXhWaWRlbyh2aWRlb1RyYWNrKVxuICAgIHRoaXMuX3JlbXV4QXVkaW8oYXVkaW9UcmFjaylcbiAgfVxuXG4gIHNlZWsgKCkge1xuICAgIHRoaXMuX3ZpZGVvTmV4dER0cyA9IG51bGxcbiAgICB0aGlzLl9hdWRpb05leHREdHMgPSBudWxsXG4gICAgdGhpcy5fdmlkZW9TZWdtZW50TGlzdC5jbGVhcigpXG4gICAgdGhpcy5fYXVkaW9TZWdtZW50TGlzdC5jbGVhcigpXG4gIH1cblxuICBvbk1ldGFEYXRhUmVhZHkgKHR5cGUsIG1ldGEpIHtcbiAgICB0aGlzW2BfJHt0eXBlfU1ldGFgXSA9IG1ldGFcbiAgfVxuXG4gIG9uTWVkaWFJbmZvUmVhZHkgKG1lZGlhSW5mbykge1xuICAgIGxldCBmdHlwTW9vdiA9IG5ldyBCdWZmZXIoKVxuICAgIGxldCBmdHlwID0gRk1QNC5mdHlwKClcbiAgICBsZXQgbW9vdiA9IEZNUDQubW9vdihtZWRpYUluZm8pXG4gICAgZnR5cE1vb3Yud3JpdGUoZnR5cCwgbW9vdilcbiAgICByZXR1cm4gZnR5cE1vb3YuYnVmZmVyXG4gIH1cblxuICBjYWxjRHRzQmFzZSAoYXVkaW9UcmFjaywgdmlkZW9UcmFjaykge1xuICAgIGxldCBhdWRpb0Jhc2UgPSBJbmZpbml0eVxuICAgIGxldCB2aWRlb0Jhc2UgPSBJbmZpbml0eVxuICAgIGlmIChhdWRpb1RyYWNrLnNhbXBsZXMgJiYgYXVkaW9UcmFjay5zYW1wbGVzLmxlbmd0aCkge1xuICAgICAgYXVkaW9CYXNlID0gYXVkaW9UcmFjay5zYW1wbGVzWzBdLmR0c1xuICAgIH1cbiAgICBpZiAodmlkZW9UcmFjay5zYW1wbGVzICYmIHZpZGVvVHJhY2suc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIHZpZGVvQmFzZSA9IHZpZGVvVHJhY2suc2FtcGxlc1swXS5kdHNcbiAgICB9XG5cbiAgICB0aGlzLl9kdHNCYXNlID0gTWF0aC5taW4oYXVkaW9CYXNlLCB2aWRlb0Jhc2UpXG4gICAgdGhpcy5faXNEdHNCYXNlSW5pdGVkID0gdHJ1ZVxuICB9XG5cbiAgX3JlbXV4VmlkZW8gKHZpZGVvVHJhY2spIHtcbiAgICBpZiAoIXRoaXMuX3ZpZGVvTWV0YSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHRyYWNrID0gdmlkZW9UcmFja1xuICAgIGlmICghdmlkZW9UcmFjay5zYW1wbGVzIHx8ICF2aWRlb1RyYWNrLnNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbGV0IHtzYW1wbGVzfSA9IHRyYWNrXG4gICAgbGV0IGR0c0NvcnJlY3Rpb25cbiAgICBsZXQgZmlyc3REdHMgPSAtMVxuICAgIGxldCBsYXN0RHRzID0gLTFcbiAgICBsZXQgZmlyc3RQdHMgPSAtMVxuICAgIGxldCBsYXN0UHRzID0gLTFcblxuICAgIGNvbnN0IG1wNFNhbXBsZXMgPSBbXVxuICAgIGNvbnN0IG1kYXRCb3ggPSB7XG4gICAgICBzYW1wbGVzOiBbXVxuICAgIH1cbiAgICBjb25zdCB2aWRlb1NlZ21lbnQgPSBuZXcgTWVkaWFTZWdtZW50KClcbiAgICB3aGlsZSAoc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGF2Y1NhbXBsZSA9IHNhbXBsZXMuc2hpZnQoKVxuICAgICAgY29uc3Qge2lzS2V5ZnJhbWUsIGNwc30gPSBhdmNTYW1wbGVcbiAgICAgIGxldCBkdHMgPSBhdmNTYW1wbGUuZHRzIC0gdGhpcy5fZHRzQmFzZVxuXG4gICAgICBpZiAoZHRzQ29ycmVjdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICghdGhpcy5fdmlkZW9OZXh0RHRzKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX3ZpZGVvU2VnbWVudExpc3QuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICBkdHNDb3JyZWN0aW9uID0gMFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0U2VnbWVudCA9IHRoaXMuX3ZpZGVvU2VnbWVudExpc3QuZ2V0TGFzdFNlZ21lbnRCZWZvcmUoZHRzKVxuICAgICAgICAgICAgaWYgKGxhc3RTZWdtZW50KSB7XG4gICAgICAgICAgICAgIGxldCBnYXBcbiAgICAgICAgICAgICAgY29uc3Qge2xhc3REdHMsIGdhcDogbGFzdEdhcH0gPSBsYXN0U2VnbWVudFxuICAgICAgICAgICAgICBnYXAgPSBkdHMgLSAobGFzdER0cyArIGxhc3RHYXApID4gMyA/IGR0cyAtIChsYXN0RHRzICsgbGFzdEdhcCkgOiAwXG4gICAgICAgICAgICAgIGR0c0NvcnJlY3Rpb24gPSBkdHMgLSAobGFzdER0cyArIGdhcClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGR0c0NvcnJlY3Rpb24gPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGR0c0NvcnJlY3Rpb24gPSBkdHMgLSB0aGlzLl92aWRlb05leHREdHMgPj0gMTAwMCA/IDAgOiBkdHMgLSB0aGlzLl92aWRlb05leHREdHNcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3Qgb3JpZ2luRHRzID0gZHRzXG4gICAgICBkdHMgLT0gZHRzQ29ycmVjdGlvblxuICAgICAgY29uc3QgcHRzID0gZHRzICsgY3BzXG5cbiAgICAgIGlmIChmaXJzdER0cyA9PT0gLTEpIHtcbiAgICAgICAgZmlyc3REdHMgPSBkdHNcbiAgICAgICAgZmlyc3RQdHMgPSBwdHNcbiAgICAgIH1cbiAgICAgIGxldCBfdW5pdHMgPSBbXVxuICAgICAgd2hpbGUgKGF2Y1NhbXBsZS51bml0cy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IG1kYXRTYW1wbGUgPSB7XG4gICAgICAgICAgYnVmZmVyOiBbXSxcbiAgICAgICAgICBzaXplOiAwXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdW5pdCA9IGF2Y1NhbXBsZS51bml0cy5zaGlmdCgpXG4gICAgICAgIF91bml0cy5wdXNoKHVuaXQpXG4gICAgICAgIG1kYXRTYW1wbGUuYnVmZmVyLnB1c2godW5pdClcbiAgICAgICAgbWRhdFNhbXBsZS5zaXplICs9IHVuaXQuZGF0YS5ieXRlTGVuZ3RoXG5cbiAgICAgICAgbWRhdEJveC5zYW1wbGVzLnB1c2gobWRhdFNhbXBsZSlcbiAgICAgIH1cblxuICAgICAgbGV0IHNhbXBsZUR1cmF0aW9uID0gMFxuXG4gICAgICBpZiAoc2FtcGxlcy5sZW5ndGggPj0gMSkge1xuICAgICAgICBjb25zdCBuZXh0RHRzID0gc2FtcGxlc1swXS5kdHMgLSB0aGlzLl9kdHNCYXNlIC0gZHRzQ29ycmVjdGlvblxuICAgICAgICBzYW1wbGVEdXJhdGlvbiA9IG5leHREdHMgLSBkdHNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChtcDRTYW1wbGVzLmxlbmd0aCA+PSAxKSB7IC8vIGxhc3Rlc3Qgc2FtcGxlLCB1c2Ugc2Vjb25kIGxhc3QgZHVyYXRpb25cbiAgICAgICAgICBzYW1wbGVEdXJhdGlvbiA9IG1wNFNhbXBsZXNbbXA0U2FtcGxlcy5sZW5ndGggLSAxXS5kdXJhdGlvblxuICAgICAgICB9IGVsc2UgeyAvLyB0aGUgb25seSBvbmUgc2FtcGxlLCB1c2UgcmVmZXJlbmNlIGR1cmF0aW9uXG4gICAgICAgICAgc2FtcGxlRHVyYXRpb24gPSB0aGlzLl92aWRlb01ldGEucmVmU2FtcGxlRHVyYXRpb25cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNLZXlmcmFtZSkge1xuICAgICAgICBjb25zdCByYXAgPSBuZXcgTWVkaWFTYW1wbGUoe1xuICAgICAgICAgIGR0cyxcbiAgICAgICAgICBwdHMsXG4gICAgICAgICAgZHVyYXRpb246IHNhbXBsZUR1cmF0aW9uLFxuICAgICAgICAgIG9yaWdpbkR0czogYXZjU2FtcGxlLmR0cyxcbiAgICAgICAgICBwb3NpdGlvbjogYXZjU2FtcGxlLnBvc2l0aW9uLFxuICAgICAgICAgIGlzUkFQOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIHZpZGVvU2VnbWVudC5hZGRSQVAocmFwKVxuICAgICAgfVxuXG4gICAgICBtcDRTYW1wbGVzLnB1c2goe1xuICAgICAgICBkdHMsXG4gICAgICAgIGNwcyxcbiAgICAgICAgcHRzLFxuICAgICAgICB1bml0czogX3VuaXRzLFxuICAgICAgICBzaXplOiBhdmNTYW1wbGUubGVuZ3RoLFxuICAgICAgICBpc0tleWZyYW1lLFxuICAgICAgICBkdXJhdGlvbjogc2FtcGxlRHVyYXRpb24sXG4gICAgICAgIG9yaWdpbkR0c1xuICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgZmlyc3QgPSBtcDRTYW1wbGVzWzBdXG4gICAgY29uc3QgbGFzdCA9IG1wNFNhbXBsZXNbbXA0U2FtcGxlcy5sZW5ndGggLSAxXVxuICAgIGxhc3REdHMgPSBsYXN0LmR0cyArIGxhc3QuZHVyYXRpb25cbiAgICBsYXN0UHRzID0gbGFzdC5wdHMgKyBsYXN0LmR1cmF0aW9uXG5cbiAgICB0aGlzLl92aWRlb05leHREdHMgPSBsYXN0RHRzXG5cbiAgICB2aWRlb1NlZ21lbnQuc3RhcnREdHMgPSBmaXJzdER0c1xuICAgIHZpZGVvU2VnbWVudC5lbmREdHMgPSBsYXN0RHRzXG4gICAgdmlkZW9TZWdtZW50LnN0YXJ0UHRzID0gZmlyc3RQdHNcbiAgICB2aWRlb1NlZ21lbnQuZW5kUHRzID0gbGFzdFB0c1xuICAgIHZpZGVvU2VnbWVudC5vcmlnaW5TdGFydER0cyA9IGZpcnN0Lm9yaWdpbkR0c1xuICAgIHZpZGVvU2VnbWVudC5vcmlnaW5FbmREdHMgPSBsYXN0Lm9yaWdpbkR0cyArIGxhc3QuZHVyYXRpb25cbiAgICB2aWRlb1NlZ21lbnQuZ2FwID0gZHRzQ29ycmVjdGlvblxuICAgIGNvbnN0IGZpcnN0U2FtcGxlID0gbmV3IE1lZGlhU2FtcGxlKHtcbiAgICAgIGR0czogZmlyc3QuZHRzLFxuICAgICAgcHRzOiBmaXJzdC5wdHMsXG4gICAgICBkdXJhdGlvbjogZmlyc3QuZHVyYXRpb24sXG4gICAgICBpc0tleWZyYW1lOiBmaXJzdC5pc0tleWZyYW1lLFxuICAgICAgb3JpZ2luRHRzOiBmaXJzdC5vcmlnaW5EdHNcbiAgICB9KVxuICAgIGNvbnN0IGxhc3RTYW1wbGUgPSBuZXcgTWVkaWFTYW1wbGUoe1xuICAgICAgZHRzOiBsYXN0LmR0cyxcbiAgICAgIHB0czogbGFzdC5wdHMsXG4gICAgICBkdXJhdGlvbjogbGFzdC5kdXJhdGlvbixcbiAgICAgIGlzS2V5ZnJhbWU6IGxhc3QuaXNLZXlmcmFtZSxcbiAgICAgIG9yaWdpbkR0czogbGFzdC5vcmlnaW5EdHNcbiAgICB9KVxuICAgIHZpZGVvU2VnbWVudC5maXJzdFNhbXBsZSA9IGZpcnN0U2FtcGxlXG4gICAgdmlkZW9TZWdtZW50Lmxhc3RTYW1wbGUgPSBsYXN0U2FtcGxlXG4gICAgbGV0IG1vb2ZNZGF0ID0gbmV3IEJ1ZmZlcigpXG5cbiAgICB0cmFjay5zYW1wbGVzID0gbXA0U2FtcGxlc1xuICAgIHRyYWNrLnRpbWUgPSBmaXJzdER0c1xuICAgIGNvbnN0IG1vb2YgPSBGTVA0Lm1vb2YodHJhY2spXG4gICAgY29uc3QgbWRhdCA9IEZNUDQubWRhdChtZGF0Qm94KVxuICAgIG1vb2ZNZGF0LndyaXRlKG1vb2YsIG1kYXQpXG5cbiAgICBpZiAoIXRoaXMuX3N0b3JlLmlzTGl2ZSkge1xuICAgICAgdGhpcy5fdmlkZW9TZWdtZW50TGlzdC5hcHBlbmQodmlkZW9TZWdtZW50KVxuICAgIH1cblxuICAgIHRyYWNrLnNhbXBsZXMgPSBbXVxuICAgIHRyYWNrLmxlbmd0aCA9IDBcblxuICAgIHRoaXMuaGFuZGxlTWVkaWFGcmFnbWVudCh7XG4gICAgICB0eXBlOiAndmlkZW8nLFxuICAgICAgZGF0YTogbW9vZk1kYXQuYnVmZmVyLmJ1ZmZlcixcbiAgICAgIHNhbXBsZUNvdW50OiBtcDRTYW1wbGVzLmxlbmd0aCxcbiAgICAgIGZyYWdtZW50OiB2aWRlb1NlZ21lbnRcbiAgICB9KVxuICB9XG5cbiAgX3JlbXV4QXVkaW8gKHRyYWNrKSB7XG4gICAgaWYgKCF0aGlzLl9hdWRpb01ldGEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB7c2FtcGxlc30gPSB0cmFja1xuICAgIGxldCBkdHNDb3JyZWN0aW9uXG4gICAgbGV0IGZpcnN0RHRzID0gLTFcbiAgICBsZXQgbGFzdER0cyA9IC0xXG4gICAgLy8gbGV0IGZpcnN0UHRzID0gLTFcbiAgICAvLyBsZXQgbGFzdFB0cyA9IC0xXG4gICAgbGV0IHNpbGVudER1cmF0aW9uXG4gICAgbGV0IG1wNFNhbXBsZXMgPSBbXVxuXG4gICAgY29uc3QgbWRhdEJveCA9IHtcbiAgICAgIHNhbXBsZXM6IFtdXG4gICAgfVxuICAgIGlmICghc2FtcGxlcyB8fCAhc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgaXNGaXJzdER0c0luaXRlZCA9IGZhbHNlXG4gICAgd2hpbGUgKHNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICBsZXQgc2FtcGxlID0gc2FtcGxlcy5zaGlmdCgpXG4gICAgICBjb25zdCB7dW5pdH0gPSBzYW1wbGVcbiAgICAgIGxldCBkdHMgPSBzYW1wbGUuZHRzIC0gdGhpcy5fZHRzQmFzZVxuXG4gICAgICBsZXQgbmVlZFNpbGVudEZyYW1lID0gZmFsc2VcbiAgICAgIGlmIChkdHNDb3JyZWN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9hdWRpb05leHREdHMpIHtcbiAgICAgICAgICBpZiAodGhpcy5fYXVkaW9TZWdtZW50TGlzdC5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIGR0c0NvcnJlY3Rpb24gPSAwXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RTZWdtZW50ID0gdGhpcy5fYXVkaW9TZWdtZW50TGlzdC5nZXRMYXN0U2VnbWVudEJlZm9yZShkdHMpXG4gICAgICAgICAgICBpZiAobGFzdFNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgbGV0IGdhcFxuICAgICAgICAgICAgICBjb25zdCB7bGFzdER0cywgZ2FwOiBsYXN0R2FwfSA9IGxhc3RTZWdtZW50XG4gICAgICAgICAgICAgIGdhcCA9IGR0cyAtIChsYXN0RHRzICsgbGFzdEdhcCkgPiAzID8gZHRzIC0gKGxhc3REdHMgKyBsYXN0R2FwKSA6IDBcbiAgICAgICAgICAgICAgZHRzQ29ycmVjdGlvbiA9IGR0cyAtIChsYXN0RHRzICsgZ2FwKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmVlZFNpbGVudEZyYW1lID0gdGhpcy5fZmlsbFNpbGVuY2VGcmFtZSAmJiAhdGhpcy5fdmlkZW9TZWdtZW50TGlzdC5pc0VtcHR5KClcbiAgICAgICAgICAgICAgZHRzQ29ycmVjdGlvbiA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHRzQ29ycmVjdGlvbiA9IGR0cyAtIHRoaXMuX2F1ZGlvTmV4dER0cyA+PSAxMDAwID8gMCA6IGR0cyAtIHRoaXMuX2F1ZGlvTmV4dER0c1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBvcmlnaW5EdHMgPSBkdHNcbiAgICAgIGR0cyAtPSBkdHNDb3JyZWN0aW9uXG5cbiAgICAgIGlmIChuZWVkU2lsZW50RnJhbWUpIHtcbiAgICAgICAgY29uc3QgdmlkZW9TZWdtZW50ID0gdGhpcy5fdmlkZW9TZWdtZW50TGlzdC5nZXRMYXN0U2FtcGxlQmVmb3JlKG9yaWdpbkR0cylcblxuICAgICAgICBpZiAodmlkZW9TZWdtZW50ICYmIHZpZGVvU2VnbWVudC5zdGFydER0cyA8IGR0cykge1xuICAgICAgICAgIHNpbGVudER1cmF0aW9uID0gZHRzIC0gdmlkZW9TZWdtZW50LnN0YXJ0RHRzXG4gICAgICAgICAgZHRzID0gdmlkZW9TZWdtZW50LnN0YXJ0RHRzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmVlZFNpbGVudEZyYW1lID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzRmlyc3REdHNJbml0ZWQpIHtcbiAgICAgICAgZmlyc3REdHMgPSBkdHNcbiAgICAgICAgaXNGaXJzdER0c0luaXRlZCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRTaWxlbnRGcmFtZSkge1xuICAgICAgICBzYW1wbGVzLnVuc2hpZnQoc2FtcGxlKVxuICAgICAgICBjb25zdCBzaWxlbnRGcmFtZSA9IHRoaXMuaW5pdFNpbGVudEF1ZGlvKGR0cywgc2lsZW50RHVyYXRpb24pXG4gICAgICAgIG1wNFNhbXBsZXMucHVzaChzaWxlbnRGcmFtZSlcblxuICAgICAgICBsZXQgbWRhdFNhbXBsZSA9IHtcbiAgICAgICAgICBidWZmZXI6IFtdLFxuICAgICAgICAgIHNpemU6IDBcbiAgICAgICAgfVxuICAgICAgICBtZGF0U2FtcGxlLmJ1ZmZlci5wdXNoKHtcbiAgICAgICAgICBkYXRhOiBzaWxlbnRGcmFtZS51bml0XG4gICAgICAgIH0pXG4gICAgICAgIG1kYXRTYW1wbGUuc2l6ZSArPSBzaWxlbnRGcmFtZS51bml0LmJ5dGVMZW5ndGhcblxuICAgICAgICBtZGF0Qm94LnNhbXBsZXMucHVzaChtZGF0U2FtcGxlKVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBsZXQgc2FtcGxlRHVyYXRpb24gPSAwXG5cbiAgICAgIGlmIChzYW1wbGVzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgIGNvbnN0IG5leHREdHMgPSBzYW1wbGVzWzBdLmR0cyAtIHRoaXMuX2R0c0Jhc2UgLSBkdHNDb3JyZWN0aW9uXG4gICAgICAgIHNhbXBsZUR1cmF0aW9uID0gbmV4dER0cyAtIGR0c1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG1wNFNhbXBsZXMubGVuZ3RoID49IDEpIHsgLy8gdXNlIHNlY29uZCBsYXN0IHNhbXBsZSBkdXJhdGlvblxuICAgICAgICAgIHNhbXBsZUR1cmF0aW9uID0gbXA0U2FtcGxlc1ttcDRTYW1wbGVzLmxlbmd0aCAtIDFdLmR1cmF0aW9uXG4gICAgICAgIH0gZWxzZSB7IC8vIHRoZSBvbmx5IG9uZSBzYW1wbGUsIHVzZSByZWZlcmVuY2Ugc2FtcGxlIGR1cmF0aW9uXG4gICAgICAgICAgc2FtcGxlRHVyYXRpb24gPSB0aGlzLl9hdWRpb01ldGEucmVmU2FtcGxlRHVyYXRpb25cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtcDRTYW1wbGUgPSB7XG4gICAgICAgIGR0cyxcbiAgICAgICAgcHRzOiBkdHMsXG4gICAgICAgIGN0czogMCxcbiAgICAgICAgc2l6ZTogdW5pdC5ieXRlTGVuZ3RoLFxuICAgICAgICBkdXJhdGlvbjogc2FtcGxlRHVyYXRpb24sXG4gICAgICAgIG9yaWdpbkR0c1xuICAgICAgfVxuXG4gICAgICBsZXQgbWRhdFNhbXBsZSA9IHtcbiAgICAgICAgYnVmZmVyOiBbXSxcbiAgICAgICAgc2l6ZTogMFxuICAgICAgfVxuICAgICAgbWRhdFNhbXBsZS5idWZmZXIucHVzaCh7XG4gICAgICAgIGRhdGE6IHVuaXRcbiAgICAgIH0pXG4gICAgICBtZGF0U2FtcGxlLnNpemUgKz0gdW5pdC5ieXRlTGVuZ3RoXG5cbiAgICAgIG1kYXRCb3guc2FtcGxlcy5wdXNoKG1kYXRTYW1wbGUpXG5cbiAgICAgIG1wNFNhbXBsZXMucHVzaChtcDRTYW1wbGUpXG4gICAgfVxuXG4gICAgY29uc3QgbGFzdCA9IG1wNFNhbXBsZXNbbXA0U2FtcGxlcy5sZW5ndGggLSAxXVxuICAgIGxhc3REdHMgPSBsYXN0LmR0cyArIGxhc3QuZHVyYXRpb25cblxuICAgIHRoaXMuX2F1ZGlvTmV4dER0cyA9IGxhc3REdHNcblxuICAgIGNvbnN0IGF1ZGlvU2VnbWVudCA9IG5ldyBNZWRpYVNlZ21lbnQoKVxuICAgIGF1ZGlvU2VnbWVudC5zdGFydER0cyA9IGZpcnN0RHRzXG4gICAgYXVkaW9TZWdtZW50LmVuZER0cyA9IGxhc3REdHNcbiAgICBhdWRpb1NlZ21lbnQuc3RhcnRQdHMgPSBmaXJzdER0c1xuICAgIGF1ZGlvU2VnbWVudC5lbmRQdHMgPSBsYXN0RHRzXG4gICAgYXVkaW9TZWdtZW50Lm9yaWdpblN0YXJ0RHRzID0gbXA0U2FtcGxlc1swXS5vcmlnaW5EdHNcbiAgICBhdWRpb1NlZ21lbnQub3JpZ2luRW5kRHRzID0gbGFzdC5vcmlnaW5EdHMgKyBsYXN0LmR1cmF0aW9uXG4gICAgYXVkaW9TZWdtZW50LmdhcCA9IGR0c0NvcnJlY3Rpb25cbiAgICBhdWRpb1NlZ21lbnQuZmlyc3RTYW1wbGUgPSBuZXcgTWVkaWFTYW1wbGUoe1xuICAgICAgZHRzOiBtcDRTYW1wbGVzWzBdLmR0cyxcbiAgICAgIHB0czogbXA0U2FtcGxlc1swXS5wdHMsXG4gICAgICBkdXJhdGlvbjogbXA0U2FtcGxlc1swXS5kdXJhdGlvbixcbiAgICAgIG9yaWdpbkR0czogbXA0U2FtcGxlc1swXS5vcmlnaW5EdHNcbiAgICB9KVxuICAgIGF1ZGlvU2VnbWVudC5sYXN0U2FtcGxlID0gbmV3IE1lZGlhU2FtcGxlKHtcbiAgICAgIGR0czogbGFzdC5kdHMsXG4gICAgICBwdHM6IGxhc3QucHRzLFxuICAgICAgZHVyYXRpb246IGxhc3QuZHVyYXRpb24sXG4gICAgICBvcmlnaW5EdHM6IGxhc3Qub3JpZ2luRHRzXG4gICAgfSlcblxuICAgIHRyYWNrLnNhbXBsZXMgPSBtcDRTYW1wbGVzXG4gICAgY29uc3QgbW9vZk1kYXQgPSBuZXcgQnVmZmVyKClcbiAgICB0cmFjay50aW1lID0gZmlyc3REdHNcbiAgICBjb25zdCBtb29mID0gRk1QNC5tb29mKHRyYWNrLCBmaXJzdER0cylcbiAgICBjb25zdCBtZGF0ID0gRk1QNC5tZGF0KG1kYXRCb3gpXG4gICAgbW9vZk1kYXQud3JpdGUobW9vZiwgbWRhdClcblxuICAgIGlmICghdGhpcy5fc3RvcmUuaXNMaXZlKSB7XG4gICAgICB0aGlzLl9hdWRpb1NlZ21lbnRMaXN0LmFwcGVuZChhdWRpb1NlZ21lbnQpXG4gICAgfVxuICAgIHRyYWNrLnNhbXBsZXMgPSBbXVxuICAgIHRyYWNrLmxlbmd0aCA9IDBcbiAgICB0aGlzLmhhbmRsZU1lZGlhRnJhZ21lbnQoe1xuICAgICAgdHlwZTogJ2F1ZGlvJyxcbiAgICAgIGRhdGE6IG1vb2ZNZGF0LmJ1ZmZlci5idWZmZXIsXG4gICAgICBzYW1wbGVDb3VudDogbXA0U2FtcGxlcy5sZW5ndGgsXG4gICAgICBmcmFnbWVudDogYXVkaW9TZWdtZW50XG4gICAgfSlcbiAgfVxuXG4gIGluaXRTaWxlbnRBdWRpbyAoZHRzLCBkdXJhdGlvbikge1xuICAgIGNvbnN0IHVuaXQgPSBNcDRSZW11eGVyLmdldFNpbGVudEZyYW1lKHRoaXMuX2F1ZGlvTWV0YS5jaGFubmVsQ291bnQpXG4gICAgcmV0dXJuIHtcbiAgICAgIGR0cyxcbiAgICAgIHB0czogZHRzLFxuICAgICAgY3BzOiAwLFxuICAgICAgZHVyYXRpb24sXG4gICAgICB1bml0LFxuICAgICAgc2l6ZTogdW5pdC5ieXRlTGVuZ3RoLFxuICAgICAgb3JpZ2luRHRzOiBkdHNcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0U2lsZW50RnJhbWUgKGNoYW5uZWxDb3VudCkge1xuICAgIGlmIChjaGFubmVsQ291bnQgPT09IDEpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMywgMHg4MF0pXG4gICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDIpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgyMSwgMHgwMCwgMHg0OSwgMHg5MCwgMHgwMiwgMHgxOSwgMHgwMCwgMHgyMywgMHg4MF0pXG4gICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDMpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMCwgMHg4NCwgMHgwMSwgMHgyNiwgMHg0MCwgMHgwOCwgMHg2NCwgMHgwMCwgMHg4ZV0pXG4gICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDQpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMCwgMHg4NCwgMHgwMSwgMHgyNiwgMHg0MCwgMHgwOCwgMHg2NCwgMHgwMCwgMHg4MCwgMHgyYywgMHg4MCwgMHgwOCwgMHgwMiwgMHgzOF0pXG4gICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDUpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMCwgMHg4NCwgMHgwMSwgMHgyNiwgMHg0MCwgMHgwOCwgMHg2NCwgMHgwMCwgMHg4MiwgMHgzMCwgMHgwNCwgMHg5OSwgMHgwMCwgMHgyMSwgMHg5MCwgMHgwMiwgMHgzOF0pXG4gICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDYpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMCwgMHg4NCwgMHgwMSwgMHgyNiwgMHg0MCwgMHgwOCwgMHg2NCwgMHgwMCwgMHg4MiwgMHgzMCwgMHgwNCwgMHg5OSwgMHgwMCwgMHgyMSwgMHg5MCwgMHgwMiwgMHgwMCwgMHhiMiwgMHgwMCwgMHgyMCwgMHgwOCwgMHhlMF0pXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiIsImltcG9ydCBMb2cgZnJvbSAnLi4vLi4vdXRpbHMvTG9nJ1xuaW1wb3J0IFRyYW5zQ29kZXIgZnJvbSAnLi4vVHJhbnNDb2RlcidcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbXV4ZXIgZXh0ZW5kcyBUcmFuc0NvZGVyIHtcbiAgZGlzcGF0Y2ggKHR5cGUsIC4uLnBheWxvYWQpIHtcbiAgICBjb25zdCBwcmVmaXggPSAncmVtdXhlcl8nXG4gICAgdGhpcy5fb2JzZXJ2ZXIuZW1pdChgJHtwcmVmaXh9JHt0eXBlfWAsIC4uLnBheWxvYWQpXG4gIH1cbiAgZXJyb3IgKG1lc3NhZ2UpIHtcbiAgICBjb25zdCB7IENMQVNTX05BTUUgPSAnUmVtdXhlcicgfSA9IHRoaXNcbiAgICBMb2cuZXJyb3IoYFske0NMQVNTX05BTUV9IGVycm9yXSBgLCBtZXNzYWdlKVxuICB9XG5cbiAgaW5mbyAobWVzc2FnZSkge1xuICAgIGNvbnN0IHsgQ0xBU1NfTkFNRSA9ICdSZW11eGVyJyB9ID0gdGhpc1xuICAgIExvZy5pbmZvKGBbJHtDTEFTU19OQU1FfSBpbmZvXSBgLCBtZXNzYWdlKVxuICB9XG5cbiAgbG9nIChtZXNzYWdlKSB7XG4gICAgY29uc3QgeyBDTEFTU19OQU1FID0gJ1JlbXV4ZXInIH0gPSB0aGlzXG4gICAgTG9nLmxvZyhgWyR7Q0xBU1NfTkFNRX0gbG9nXSBgLCBtZXNzYWdlKVxuICB9XG5cbiAgd2FybiAobWVzc2FnZSkge1xuICAgIGNvbnN0IHsgQ0xBU1NfTkFNRSA9ICdSZW11eGVyJyB9ID0gdGhpc1xuICAgIExvZy53YXJuKGBbJHtDTEFTU19OQU1FfSB3YXJuXSBgLCBtZXNzYWdlKVxuICB9XG59XG4iLCIvLyDnm7Tmkq3ku7vliqHojrflj5Yg55u05pKt5pWw5o2uXG5jbGFzcyBMaXZlVGFzayB7XG4gIGNvbnN0cnVjdG9yICh1cmwsIGNvbmZpZykge1xuICAgIC8vaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvemgtQ04vZG9jcy9XZWIvQVBJL0hlYWRlcnNcbiAgICBjb25zdCBfaGVhZGVycyA9IG5ldyB3aW5kb3cuSGVhZGVycygpXG5cbiAgICBjb25zdCBfY29uZmlnID0ge1xuICAgICAgaGVhZGVyczogT2JqZWN0LmFzc2lnbih7fSwgX2hlYWRlcnMpLFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGNhY2hlOiAnZGVmYXVsdCcsXG4gICAgICBtb2RlOiAnY29ycydcbiAgICB9XG4gICAgdGhpcy5fc3RvcCA9IGZhbHNlXG4gICAgLy9odHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy96aC1DTi9kb2NzL1dlYi9BUEkvUmVxdWVzdC9SZXF1ZXN0XG4gICAgdGhpcy5yZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsLCBPYmplY3QuYXNzaWduKHt9LCBfY29uZmlnLCBjb25maWcpKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIH1cblxuICBydW4gKGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAvLyDliKnnlKhmZXRjaCDmi7/liLByZXMuYm9keS5nZXRSZWFkZXIoKSDnhLblkI7pgJLlvZLnmoTosIPnlKhyZWFk5pa55rOVIOiOt+WPlnJlc3VsdC52YWx1ZSDkvKDnu5ljYWxsYmFja1xuICAgIGZ1bmN0aW9uIHJlc29sdmUgKHJlYWRlcikge1xuICAgICAgcmVhZGVyLnJlYWQoKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGlmIChzZWxmLl9zdG9wKSB7XG4gICAgICAgICAgcmVhZGVyLmNhbmNlbCgpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2socmVzdWx0LmRvbmUgPyB1bmRlZmluZWQgOiByZXN1bHQudmFsdWUpXG4gICAgICAgIHJlc29sdmUocmVhZGVyKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGlzVGltZW91dCA9IHRydWVcblxuICAgICAgZmV0Y2godGhpcy5yZXF1ZXN0KS50aGVuKChyZXMpID0+IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICBpc1RpbWVvdXQgPSBmYWxzZVxuICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgIH0pXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaXNUaW1lb3V0ICYmIHJlamVjdCgpIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIH0sIDUwMDApXG4gICAgfSlcblxuICAgIHByb21cbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IHJlcy5ib2R5LmdldFJlYWRlcigpXG4gICAgICAgIHJlc29sdmUocmVhZGVyKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChyZXMgPT4ge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBjYW5jZWwgKCkge1xuICAgIHRoaXMuX3N0b3AgPSB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGl2ZVRhc2tcbiIsImltcG9ydCBYSFJMb2FkZXIgZnJvbSAnLi9sb2FkZXJzL1hIUkxvYWRlcidcbmltcG9ydCBGZXRjaExvYWRlciBmcm9tICcuL2xvYWRlcnMvRmV0Y2hMb2FkZXInXG5jb25zdCBMb2FkQ2xzID0gKGZ1bmN0aW9uICh3aW5kb3cpIHtcbiAgaWYgKHdpbmRvdy5mZXRjaCkge1xuICAgIHJldHVybiBGZXRjaExvYWRlclxuICB9XG4gIHJldHVybiBYSFJMb2FkZXJcbn0pKHdpbmRvdylcbi8vIOS/neivgeWPquaciTLkuKrku7vliqHlpITkuo7or7fmsYLnirbmgIHvvIwg5paw5bu65Lu75Yqh5b6A6Zif5YiX6YeM5re75Yqg77yM5Lu75Yqh5a6M5oiQ5LuO6Zif5YiX5Yig6ZmkIOavj+asoeWPmOWMlumDveS8muabtOaWsOmYn+WIl+i/m+ihjOivt+axguOAglxuY2xhc3MgVm9kVGFzayB7XG4gIGNvbnN0cnVjdG9yICh1cmwsIHJhbmdlLCBoZWFkZXJzKSB7XG4gICAgdGhpcy51cmwgPSB1cmxcbiAgICB0aGlzLnJhbmdlID0gcmFuZ2VcbiAgICB0aGlzLmlkID0gcmFuZ2Uuam9pbignLScpXG4gICAgdGhpcy5vbiA9IGZhbHNlXG4gICAgdGhpcy5sb2FkZXIgPSBuZXcgTG9hZENscyh1cmwsIHJhbmdlLCBoZWFkZXJzKVxuICAgIHRoaXMuaXNDYW5jZWxlZCA9IGZhbHNlXG4gICAgVm9kVGFzay5xdWV1ZS5wdXNoKHRoaXMpXG4gICAgVm9kVGFzay51cGRhdGUoKVxuICB9XG5cbiAgY2FuY2VsICgpIHtcbiAgICB0aGlzLmlzQ2FuY2VsZWQgPSB0cnVlXG4gICAgdGhpcy5sb2FkZXIuY2FuY2VsKClcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmUgKGxvYWRlcikge1xuICAgIFZvZFRhc2sucXVldWUuZmlsdGVyKChpdGVtLCBpZHgpID0+IHtcbiAgICAgIGlmIChpdGVtLnVybCA9PT0gbG9hZGVyLnVybCAmJiBpdGVtLmlkID09PSBsb2FkZXIuaWQpIHtcbiAgICAgICAgVm9kVGFzay5xdWV1ZS5zcGxpY2UoaWR4LCAxKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSlcbiAgICBWb2RUYXNrLnVwZGF0ZSgpXG4gIH1cblxuICBzdGF0aWMgdXBkYXRlICgpIHtcbiAgICBsZXQgUXVldWUgPSBWb2RUYXNrLnF1ZXVlXG4gICAgbGV0IHNlbmRlZCA9IFF1ZXVlLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5vbilcbiAgICBsZXQgd2FpdCA9IFF1ZXVlLmZpbHRlcihpdGVtID0+ICFpdGVtLm9uKVxuICAgIGxldCBtYXggPSBWb2RUYXNrLmxpbWl0IC0gc2VuZGVkLmxlbmd0aFxuICAgIHdhaXQuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICBpZiAoaWR4IDwgbWF4KSB7XG4gICAgICAgIGl0ZW0ucnVuKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcnVuICgpIHtcbiAgICBpZiAodGhpcy5sb2FkZXIucmVhZHlTdGF0ZSA9PT0gMSkge1xuICAgICAgdGhpcy5vbiA9IHRydWVcbiAgICAgIHRoaXMubG9hZGVyLnJ1bigpXG4gICAgfSBlbHNlIHtcbiAgICAgIFZvZFRhc2sucmVtb3ZlKClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY2xlYXIgKCkge1xuICAgIFZvZFRhc2sucXVldWUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmICghaXRlbS5sb2FkZXIuY29tcGxldGUpIHtcbiAgICAgICAgaXRlbS5jYW5jZWwoKVxuICAgICAgfVxuICAgIH0pXG4gICAgVm9kVGFzay5xdWV1ZS5sZW5ndGggPSAwXG4gIH1cblxuICBnZXQgcHJvbWlzZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZGVyLnByb21pc2VcbiAgfVxuICBnZXQgdGltZVN0YW1wICgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkZXIudGltZVN0YW1wXG4gIH1cbn1cblxuVm9kVGFzay5xdWV1ZSA9IFtdXG5Wb2RUYXNrLmxpbWl0ID0gMlxud2luZG93LlZvZFRhc2sgPSBWb2RUYXNrXG5cbmV4cG9ydCBkZWZhdWx0IFZvZFRhc2tcbiIsImltcG9ydCBWb2RUYXNrIGZyb20gJy4uL1ZvZFRhc2snXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZXRjaExvYWRlciB7XG4gIGNvbnN0cnVjdG9yICh1cmwsIHJhbmdlLCBjb25maWcgPSB7fSkge1xuICAgIHRoaXMudXJsID0gdXJsXG4gICAgdGhpcy5vbiA9IGZhbHNlXG4gICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlXG4gICAgdGhpcy5pc1N0b3BwZWQgPSBmYWxzZVxuICAgIHRoaXMudGltZVN0YW1wID0gRGF0ZS5ub3coKVxuICAgIGNvbnN0IF9jb25maWcgPSB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFJhbmdlOiBgYnl0ZXM9JHtyYW5nZVswXX0tJHtyYW5nZVsxXX1gXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGNhY2hlOiAnZGVmYXVsdCcsXG4gICAgICBtb2RlOiAnY29ycydcbiAgICB9XG5cbiAgICB0aGlzLnJlcXVlc3QgPSAoKSA9PiB7XG4gICAgICB0aGlzLm9uID0gdHJ1ZVxuICAgICAgcmV0dXJuIHdpbmRvdy5mZXRjaCh1cmwsIE9iamVjdC5hc3NpZ24oe30sIF9jb25maWcsIGNvbmZpZykpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPiAyOTkgfHwgcmVzLnN0YXR1cyA8IDIwMCB8fCAhcmVzLm9rKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZSA9IHRydWVcbiAgICAgICAgICBWb2RUYXNrLnJlbW92ZSh0aGlzKVxuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoYHVybCAke3Jlcy5zdGF0dXN9ICR7cmVzLnN0YXR1c1RleHR9YCkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpXG4gICAgICB9KS50aGVuKHJlcyA9PiByZXMuYXJyYXlCdWZmZXIoKSkudGhlbihidWZmZXIgPT4ge1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gdHJ1ZVxuICAgICAgICB0aGlzLmJ5dGVMZW5ndGggPSBidWZmZXIuYnl0ZUxlbmd0aFxuICAgICAgICBWb2RUYXNrLnJlbW92ZSh0aGlzKVxuICAgICAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHJldHVybiB7fVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGJ1ZmZlcixcbiAgICAgICAgICB0aW1lU3RhbXA6IHRoaXMudGltZVN0YW1wXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcnVuICgpIHtcbiAgICB0aGlzLl9wcm9taXNlID0gdGhpcy5yZXF1ZXN0KClcbiAgfVxuXG4gIGdldCByZWFkeVN0YXRlICgpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgY2FuY2VsICgpIHtcbiAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWVcbiAgfVxuXG4gIGdldCBwcm9taXNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5vbiA/IHRoaXMuX3Byb21pc2UgOiB0aGlzLnJlcXVlc3QoKVxuICB9XG59XG4iLCJpbXBvcnQgVm9kVGFzayBmcm9tICcuLi9Wb2RUYXNrJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhIUkxvYWRlciB7XG4gICAgY29uc3RydWN0b3IgKHVybCwgcmFuZ2UpIHtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbignZ2V0JywgdXJsKTtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdSYW5nZScsIGBieXRlcz0ke3JhbmdlWzBdfS0ke3JhbmdlWzFdfWApO1xuICAgICAgICB4aHIub25hYm9ydCA9ICgpID0+IHtcbiAgICAgICAgICAgIFZvZFRhc2sucmVtb3ZlKHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwIHx8IHhoci5zdGF0dXMgPT09IDIwNikge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFZvZFRhc2sucmVtb3ZlKHRoaXMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHhoci5vbmVycm9yID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgVm9kVGFzay5yZW1vdmUodGhpcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl94aHIgPSB4aHI7XG4gICAgfVxuXG4gICAgZ2V0IHByb21pc2UgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcbiAgICB9XG5cbiAgICBnZXQgcmVhZHlTdGF0ZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl94aHIucmVhZHlTdGF0ZTtcbiAgICB9XG5cbiAgICBydW4gKCkge1xuICAgICAgICB0aGlzLl94aHIuc2VuZCgpO1xuICAgIH1cblxuICAgIGNhbmNlbCAoKSB7XG4gICAgICAgIHRoaXMuX3hoci5hYm9ydCgpO1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFWaWV3NFJlYWQge1xuICAgIGNvbnN0cnVjdG9yIChidWZmZXIsIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5fZHYgPSBuZXcgRGF0YVZpZXcoYnVmZmVyKTtcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuaW5pdFByb3h5KCk7XG4gICAgfVxuXG4gICAgaW5pdFByb3h5ICgpIHtcbiAgICAgICAgY29uc3Qgc2l6ZUFyciA9IFs4LCAxNiwgMzJdO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgeyBfc3RvcmUgfSA9IHRoaXMuX2NvbnRleHQ7XG4gICAgICAgIHNpemVBcnIuZm9yRWFjaChzaXplID0+IHtcbiAgICAgICAgICAgIHRoaXNbYGdldFVpbnQke3NpemV9YF0gPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvZmZzZXQpIHsgb2Zmc2V0ID0gc2VsZi5fY29udGV4dC5yZWFkT2Zmc2V0OyB9XG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCA9PT0gc2VsZi5fY29udGV4dC5yZWFkT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2NvbnRleHQucmVhZE9mZnNldCArPSBzaXplIC8gODtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g6L+Z6YeM6K+75Y+W5a2X6IqC5bqPIOS4uuS7gOS5iOaYr+WPjeeahCAg5aaC5p6caXNMZeaYr+S9juS9jeWtl+iKgiDlsLHmmK9mYWxzZSDmjInnhafnmoTmmK/pq5jkvY3lrZfoioJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fZHZbYGdldFVpbnQke3NpemV9YF0ob2Zmc2V0LCAhX3N0b3JlLmlzTGUpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICB9KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICog5pi+5byP5aOw5piO5LiA5Liq5q+U5YW25a6D5L2N5pWw5pu05bi455So6K+75Y+WMjTkvY3mlbTmlbDmlrnms5VcbiAgICAgICAgICogQHBhcmFtIG9mZnNldFxuICAgICAgICAgKiBAcGFyYW0gaXNIaWdoXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmdldFVpbnQyNCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2V0VWludCgyNCwgb2Zmc2V0LCBmYWxzZSk7IC8vIOS8muivu+WPllVpbnQzMizlgZogYW5kIOaTjeS9nOS5i+WQjuWbnumAgOS4gOS9jeOAglxuICAgICAgICAgICAgc2VsZi5fY29udGV4dC5yZWFkT2Zmc2V0IC09IDE7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZ2V0VWludCA9IGZ1bmN0aW9uIChzaXplLCBvZmZzZXQsIGlzSGlnaCA9IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChzaXplID4gMzIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnbm90IHN1cHBvcnRlZCByZWFkIHNpemUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlYWRTaXplID0gMzI7XG4gICAgICAgICAgICBpZiAoIXRoaXNbYGdldFVpbnQke3NpemV9YF0pIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gc2l6ZUFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2l6ZSA8IHNpemVBcnJbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRTaXplID0gc2l6ZUFycltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBudW1Ub0FuZCA9IGlzSGlnaCA/IERhdGFWaWV3NFJlYWQuZ2V0QW5kTnVtKDAsIHNpemUgLSAxLCByZWFkU2l6ZSkgOiBEYXRhVmlldzRSZWFkLmdldEFuZE51bShyZWFkU2l6ZSAtIHNpemUsIHJlYWRTaXplIC0gMSwgcmVhZFNpemUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmW2BnZXRVaW50JHtyZWFkU2l6ZX1gXShvZmZzZXQsICFfc3RvcmUuaXNMZSkgJiBudW1Ub0FuZDtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZltgZ2V0VWludCR7cmVhZFNpemV9YF0ob2Zmc2V0LCAhX3N0b3JlLmlzTGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRBbmROdW0gKGJlZ2luLCBlbmQsIHNpemUgPSA4KSB7XG4gICAgICAgIGxldCByZXN1bHQgPSAwO1xuICAgICAgICBsZXQgaW5kZXggPSAtLXNpemU7XG4gICAgICAgIHdoaWxlIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IGVuZCB8fCBpbmRleCA8IGJlZ2luKSB7XG4gICAgICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IE1hdGgucG93KDIsIHNpemUgLSBpbmRleCk7XG4gICAgICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufSIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi9Mb2cnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwR29sb21iIHtcbiAgICBjb25zdHJ1Y3RvciAoZGF0YSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICAvLyB0aGUgbnVtYmVyIG9mIGJ5dGVzIGxlZnQgdG8gZXhhbWluZSBpbiB0aGlzLmRhdGFcbiAgICAgICAgdGhpcy5ieXRlc0F2YWlsYWJsZSA9IGRhdGEuYnl0ZUxlbmd0aDtcbiAgICAgICAgLy8gdGhlIGN1cnJlbnQgd29yZCBiZWluZyBleGFtaW5lZFxuICAgICAgICB0aGlzLndvcmQgPSAwOyAvLyA6dWludFxuICAgICAgICAvLyB0aGUgbnVtYmVyIG9mIGJpdHMgbGVmdCB0byBleGFtaW5lIGluIHRoZSBjdXJyZW50IHdvcmRcbiAgICAgICAgdGhpcy5iaXRzQXZhaWxhYmxlID0gMDsgLy8gOnVpbnRcbiAgICB9XG4gICAgLy8gKCk6dm9pZFxuICAgIGxvYWRXb3JkICgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmRhdGEsXG4gICAgICAgICAgICBieXRlc0F2YWlsYWJsZSA9IHRoaXMuYnl0ZXNBdmFpbGFibGUsXG4gICAgICAgICAgICBwb3NpdGlvbiA9IGRhdGEuYnl0ZUxlbmd0aCAtIGJ5dGVzQXZhaWxhYmxlLFxuICAgICAgICAgICAgd29ya2luZ0J5dGVzID0gbmV3IFVpbnQ4QXJyYXkoNCksXG4gICAgICAgICAgICBhdmFpbGFibGVCeXRlcyA9IE1hdGgubWluKDQsIGJ5dGVzQXZhaWxhYmxlKTtcbiAgICAgICAgaWYgKGF2YWlsYWJsZUJ5dGVzID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGJ5dGVzIGF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgICAgIHdvcmtpbmdCeXRlcy5zZXQoZGF0YS5zdWJhcnJheShwb3NpdGlvbiwgcG9zaXRpb24gKyBhdmFpbGFibGVCeXRlcykpO1xuICAgICAgICB0aGlzLndvcmQgPSBuZXcgRGF0YVZpZXcod29ya2luZ0J5dGVzLmJ1ZmZlcikuZ2V0VWludDMyKDApO1xuICAgICAgICAvLyB0cmFjayB0aGUgYW1vdW50IG9mIHRoaXMuZGF0YSB0aGF0IGhhcyBiZWVuIHByb2Nlc3NlZFxuICAgICAgICB0aGlzLmJpdHNBdmFpbGFibGUgPSBhdmFpbGFibGVCeXRlcyAqIDg7XG4gICAgICAgIHRoaXMuYnl0ZXNBdmFpbGFibGUgLT0gYXZhaWxhYmxlQnl0ZXM7XG4gICAgfVxuXG4gICAgLy8gKGNvdW50OmludCk6dm9pZFxuICAgIHNraXBCaXRzIChjb3VudCkge1xuICAgICAgICB2YXIgc2tpcEJ5dGVzOyAvLyA6aW50XG4gICAgICAgIGlmICh0aGlzLmJpdHNBdmFpbGFibGUgPiBjb3VudCkge1xuICAgICAgICAgICAgdGhpcy53b3JkIDw8PSBjb3VudDtcbiAgICAgICAgICAgIHRoaXMuYml0c0F2YWlsYWJsZSAtPSBjb3VudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvdW50IC09IHRoaXMuYml0c0F2YWlsYWJsZTtcbiAgICAgICAgICAgIHNraXBCeXRlcyA9IGNvdW50ID4+IDM7XG4gICAgICAgICAgICBjb3VudCAtPSAoc2tpcEJ5dGVzID4+IDMpO1xuICAgICAgICAgICAgdGhpcy5ieXRlc0F2YWlsYWJsZSAtPSBza2lwQnl0ZXM7XG4gICAgICAgICAgICB0aGlzLmxvYWRXb3JkKCk7XG4gICAgICAgICAgICB0aGlzLndvcmQgPDw9IGNvdW50O1xuICAgICAgICAgICAgdGhpcy5iaXRzQXZhaWxhYmxlIC09IGNvdW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBza2lwQnl0ZXM7XG4gICAgfVxuXG4gICAgLy8gKHNpemU6aW50KTp1aW50XG4gICAgcmVhZEJpdHMgKHNpemUpIHtcbiAgICAgICAgbGV0IGJpdHMgPSBNYXRoLm1pbih0aGlzLmJpdHNBdmFpbGFibGUsIHNpemUpLCAvLyA6dWludFxuICAgICAgICAgICAgdmFsdSA9IHRoaXMud29yZCA+Pj4gKDMyIC0gYml0cyk7IC8vIDp1aW50XG4gICAgICAgIGlmIChzaXplID4gMzIpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcignQ2Fubm90IHJlYWQgbW9yZSB0aGFuIDMyIGJpdHMgYXQgYSB0aW1lJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iaXRzQXZhaWxhYmxlIC09IGJpdHM7XG4gICAgICAgIGlmICh0aGlzLmJpdHNBdmFpbGFibGUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLndvcmQgPDw9IGJpdHM7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5ieXRlc0F2YWlsYWJsZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFdvcmQoKTtcbiAgICAgICAgfVxuICAgICAgICBiaXRzID0gc2l6ZSAtIGJpdHM7XG4gICAgICAgIGlmIChiaXRzID4gMCAmJiB0aGlzLmJpdHNBdmFpbGFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1IDw8IGJpdHMgfCB0aGlzLnJlYWRCaXRzKGJpdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAoKTp1aW50XG4gICAgc2tpcExaICgpIHtcbiAgICAgICAgdmFyIGxlYWRpbmdaZXJvQ291bnQ7IC8vIDp1aW50XG4gICAgICAgIGZvciAobGVhZGluZ1plcm9Db3VudCA9IDA7IGxlYWRpbmdaZXJvQ291bnQgPCB0aGlzLmJpdHNBdmFpbGFibGU7ICsrbGVhZGluZ1plcm9Db3VudCkge1xuICAgICAgICAgICAgaWYgKDAgIT09ICh0aGlzLndvcmQgJiAoMHg4MDAwMDAwMCA+Pj4gbGVhZGluZ1plcm9Db3VudCkpKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIGZpcnN0IGJpdCBvZiB3b3JraW5nIHdvcmQgaXMgMVxuICAgICAgICAgICAgICAgIHRoaXMud29yZCA8PD0gbGVhZGluZ1plcm9Db3VudDtcbiAgICAgICAgICAgICAgICB0aGlzLmJpdHNBdmFpbGFibGUgLT0gbGVhZGluZ1plcm9Db3VudDtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVhZGluZ1plcm9Db3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBleGhhdXN0ZWQgd29yZCBhbmQgc3RpbGwgaGF2ZSBub3QgZm91bmQgYSAxXG4gICAgICAgIHRoaXMubG9hZFdvcmQoKTtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdaZXJvQ291bnQgKyB0aGlzLnNraXBMWigpO1xuICAgIH1cblxuICAgIC8vICgpOnZvaWRcbiAgICBza2lwVUVHICgpIHtcbiAgICAgICAgdGhpcy5za2lwQml0cygxICsgdGhpcy5za2lwTFooKSk7XG4gICAgfVxuXG4gICAgLy8gKCk6dm9pZFxuICAgIHNraXBFRyAoKSB7XG4gICAgICAgIHRoaXMuc2tpcEJpdHMoMSArIHRoaXMuc2tpcExaKCkpO1xuICAgIH1cblxuICAgIC8vICgpOnVpbnRcbiAgICByZWFkVUVHICgpIHtcbiAgICAgICAgdmFyIGNseiA9IHRoaXMuc2tpcExaKCk7IC8vIDp1aW50XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRCaXRzKGNseiArIDEpIC0gMTtcbiAgICB9XG5cbiAgICAvLyAoKTppbnRcbiAgICByZWFkRUcgKCkge1xuICAgICAgICB2YXIgdmFsdSA9IHRoaXMucmVhZFVFRygpOyAvLyA6aW50XG4gICAgICAgIGlmICgweDAxICYgdmFsdSkge1xuICAgICAgICAgICAgLy8gdGhlIG51bWJlciBpcyBvZGQgaWYgdGhlIGxvdyBvcmRlciBiaXQgaXMgc2V0XG4gICAgICAgICAgICByZXR1cm4gKDEgKyB2YWx1KSA+Pj4gMTsgLy8gYWRkIDEgdG8gbWFrZSBpdCBldmVuLCBhbmQgZGl2aWRlIGJ5IDJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtMSAqICh2YWx1ID4+PiAxKTsgLy8gZGl2aWRlIGJ5IHR3byB0aGVuIG1ha2UgaXQgbmVnYXRpdmVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNvbWUgY29udmVuaWVuY2UgZnVuY3Rpb25zXG4gICAgLy8gOkJvb2xlYW5cbiAgICByZWFkQm9vbGVhbiAoKSB7XG4gICAgICAgIHJldHVybiAxID09PSB0aGlzLnJlYWRCaXRzKDEpO1xuICAgIH1cblxuICAgIC8vICgpOmludFxuICAgIHJlYWRVQnl0ZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRCaXRzKDgpO1xuICAgIH1cblxuICAgIC8vICgpOmludFxuICAgIHJlYWRVU2hvcnQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkQml0cygxNik7XG4gICAgfVxuICAgIC8vICgpOmludFxuICAgIHJlYWRVSW50ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZEJpdHMoMzIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkdmFuY2UgdGhlIEV4cEdvbG9tYiBkZWNvZGVyIHBhc3QgYSBzY2FsaW5nIGxpc3QuIFRoZSBzY2FsaW5nXG4gICAgICogbGlzdCBpcyBvcHRpb25hbGx5IHRyYW5zbWl0dGVkIGFzIHBhcnQgb2YgYSBzZXF1ZW5jZSBwYXJhbWV0ZXJcbiAgICAgKiBzZXQgYW5kIGlzIG5vdCByZWxldmFudCB0byB0cmFuc211eGluZy5cbiAgICAgKiBAcGFyYW0gY291bnQge251bWJlcn0gdGhlIG51bWJlciBvZiBlbnRyaWVzIGluIHRoaXMgc2NhbGluZyBsaXN0XG4gICAgICogQHNlZSBSZWNvbW1lbmRhdGlvbiBJVFUtVCBILjI2NCwgU2VjdGlvbiA3LjMuMi4xLjEuMVxuICAgICAqL1xuICAgIHNraXBTY2FsaW5nTGlzdCAoY291bnQpIHtcbiAgICAgICAgdmFyIGxhc3RTY2FsZSA9IDgsXG4gICAgICAgICAgICBuZXh0U2NhbGUgPSA4LFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIGRlbHRhU2NhbGU7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XG4gICAgICAgICAgICBpZiAobmV4dFNjYWxlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgZGVsdGFTY2FsZSA9IHRoaXMucmVhZEVHKCk7XG4gICAgICAgICAgICAgICAgbmV4dFNjYWxlID0gKGxhc3RTY2FsZSArIGRlbHRhU2NhbGUgKyAyNTYpICUgMjU2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFzdFNjYWxlID0gKG5leHRTY2FsZSA9PT0gMClcbiAgICAgICAgICAgICAgICA/IGxhc3RTY2FsZVxuICAgICAgICAgICAgICAgIDogbmV4dFNjYWxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVhZCBhIHNlcXVlbmNlIHBhcmFtZXRlciBzZXQgYW5kIHJldHVybiBzb21lIGludGVyZXN0aW5nIHZpZGVvXG4gICAgICogcHJvcGVydGllcy4gQSBzZXF1ZW5jZSBwYXJhbWV0ZXIgc2V0IGlzIHRoZSBIMjY0IG1ldGFkYXRhIHRoYXRcbiAgICAgKiBkZXNjcmliZXMgdGhlIHByb3BlcnRpZXMgb2YgdXBjb21pbmcgdmlkZW8gZnJhbWVzLlxuICAgICAqIEBwYXJhbSBkYXRhIHtVaW50OEFycmF5fSB0aGUgYnl0ZXMgb2YgYSBzZXF1ZW5jZSBwYXJhbWV0ZXIgc2V0XG4gICAgICogQHJldHVybiB7b2JqZWN0fSBhbiBvYmplY3Qgd2l0aCBjb25maWd1cmF0aW9uIHBhcnNlZCBmcm9tIHRoZVxuICAgICAqIHNlcXVlbmNlIHBhcmFtZXRlciBzZXQsIGluY2x1ZGluZyB0aGUgZGltZW5zaW9ucyBvZiB0aGVcbiAgICAgKiBhc3NvY2lhdGVkIHZpZGVvIGZyYW1lcy5cbiAgICAgKi9cbiAgICByZWFkU1BTICgpIHtcbiAgICAgICAgdmFyIGZyYW1lQ3JvcExlZnRPZmZzZXQgPSAwLFxuICAgICAgICAgICAgZnJhbWVDcm9wUmlnaHRPZmZzZXQgPSAwLFxuICAgICAgICAgICAgZnJhbWVDcm9wVG9wT2Zmc2V0ID0gMCxcbiAgICAgICAgICAgIGZyYW1lQ3JvcEJvdHRvbU9mZnNldCA9IDAsXG4gICAgICAgICAgICBwcm9maWxlSWRjLFxuICAgICAgICAgICAgLy8gcHJvZmlsZUNvbXBhdCxcbiAgICAgICAgICAgIGxldmVsSWRjLFxuICAgICAgICAgICAgY29kZWNXaWR0aCxcbiAgICAgICAgICAgIGNvZGVjSGVpZ2h0LFxuICAgICAgICAgICAgcHJlc2VudFdpZHRoLFxuICAgICAgICAgICAgbnVtUmVmRnJhbWVzSW5QaWNPcmRlckNudEN5Y2xlLFxuICAgICAgICAgICAgcGljV2lkdGhJbk1ic01pbnVzMSxcbiAgICAgICAgICAgIHBpY0hlaWdodEluTWFwVW5pdHNNaW51czEsXG4gICAgICAgICAgICBmcmFtZU1ic09ubHlGbGFnLFxuICAgICAgICAgICAgc2NhbGluZ0xpc3RDb3VudCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICByZWFkVUJ5dGUgPSB0aGlzLnJlYWRVQnl0ZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgcmVhZEJpdHMgPSB0aGlzLnJlYWRCaXRzLmJpbmQodGhpcyksXG4gICAgICAgICAgICByZWFkVUVHID0gdGhpcy5yZWFkVUVHLmJpbmQodGhpcyksXG4gICAgICAgICAgICByZWFkQm9vbGVhbiA9IHRoaXMucmVhZEJvb2xlYW4uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHNraXBCaXRzID0gdGhpcy5za2lwQml0cy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgc2tpcEVHID0gdGhpcy5za2lwRUcuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHNraXBVRUcgPSB0aGlzLnNraXBVRUcuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHNraXBTY2FsaW5nTGlzdCA9IHRoaXMuc2tpcFNjYWxpbmdMaXN0LmJpbmQodGhpcyk7XG5cbiAgICAgICAgcmVhZFVCeXRlKCk7XG4gICAgICAgIHByb2ZpbGVJZGMgPSByZWFkVUJ5dGUoKTsgLy8gcHJvZmlsZV9pZGNcbiAgICAgICAgcmVhZEJpdHMoNSk7IC8vIHByb2ZpbGVDb21wYXQgY29uc3RyYWludF9zZXRbMC00XV9mbGFnLCB1KDUpXG4gICAgICAgIHNraXBCaXRzKDMpOyAvLyByZXNlcnZlZF96ZXJvXzNiaXRzIHUoMyksXG4gICAgICAgIGxldmVsSWRjID0gcmVhZFVCeXRlKCk7IC8vIGxldmVsX2lkYyB1KDgpXG4gICAgICAgIHNraXBVRUcoKTsgLy8gc2VxX3BhcmFtZXRlcl9zZXRfaWRcbiAgICAgICAgbGV0IGNocm9tYUZvcm1hdElkYyA9IDE7XG4gICAgICAgIGxldCBjaHJvbWFGb3JtYXQgPSA0MjA7XG4gICAgICAgIGxldCBjaHJvbWFGb3JtYXRzID0gWzAsIDQyMCwgNDIyLCA0NDRdO1xuICAgICAgICBsZXQgYml0RGVwdGhMdW1hID0gODtcbiAgICAgICAgY29uc3QgcHJvZmlsZUlkY3MgPSBbMTAwLCAxMTAsIDEyMiwgMjQ0LCA0NCwgODMsIDg2LCAxMTgsIDEyOF07XG4gICAgICAgIC8vIHNvbWUgcHJvZmlsZXMgaGF2ZSBtb3JlIG9wdGlvbmFsIGRhdGEgd2UgZG9uJ3QgbmVlZFxuICAgICAgICBpZiAocHJvZmlsZUlkY3MuaW5jbHVkZXMocHJvZmlsZUlkYykpIHtcbiAgICAgICAgICAgIGNocm9tYUZvcm1hdElkYyA9IHJlYWRVRUcoKTtcbiAgICAgICAgICAgIGlmIChjaHJvbWFGb3JtYXRJZGMgPT09IDMpIHtcbiAgICAgICAgICAgICAgICBza2lwQml0cygxKTsgLy8gc2VwYXJhdGVfY29sb3VyX3BsYW5lX2ZsYWdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaHJvbWFGb3JtYXRJZGMgPD0gMykge1xuICAgICAgICAgICAgICAgIGNocm9tYUZvcm1hdCA9IGNocm9tYUZvcm1hdHNbY2hyb21hRm9ybWF0SWRjXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJpdERlcHRoTHVtYSA9IHJlYWRVRUcoKSArIDg7IC8vIGJpdF9kZXB0aF9sdW1hX21pbnVzOFxuICAgICAgICAgICAgc2tpcFVFRygpOyAvLyBiaXRfZGVwdGhfY2hyb21hX21pbnVzOFxuICAgICAgICAgICAgc2tpcEJpdHMoMSk7IC8vIHFwcHJpbWVfeV96ZXJvX3RyYW5zZm9ybV9ieXBhc3NfZmxhZ1xuICAgICAgICAgICAgaWYgKHJlYWRCb29sZWFuKCkpIHsgLy8gc2VxX3NjYWxpbmdfbWF0cml4X3ByZXNlbnRfZmxhZ1xuICAgICAgICAgICAgICAgIHNjYWxpbmdMaXN0Q291bnQgPSAoY2hyb21hRm9ybWF0SWRjICE9PSAzKVxuICAgICAgICAgICAgICAgICAgICA/IDhcbiAgICAgICAgICAgICAgICAgICAgOiAxMjtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2NhbGluZ0xpc3RDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWFkQm9vbGVhbigpKSB7IC8vIHNlcV9zY2FsaW5nX2xpc3RfcHJlc2VudF9mbGFnWyBpIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPCA2ID8gc2tpcFNjYWxpbmdMaXN0KDE2KSA6IHNraXBTY2FsaW5nTGlzdCg2NCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2tpcFVFRygpOyAvLyBsb2cyX21heF9mcmFtZV9udW1fbWludXM0XG4gICAgICAgIHZhciBwaWNPcmRlckNudFR5cGUgPSByZWFkVUVHKCk7XG4gICAgICAgIGlmIChwaWNPcmRlckNudFR5cGUgPT09IDApIHtcbiAgICAgICAgICAgIHJlYWRVRUcoKTsgLy8gbG9nMl9tYXhfcGljX29yZGVyX2NudF9sc2JfbWludXM0XG4gICAgICAgIH0gZWxzZSBpZiAocGljT3JkZXJDbnRUeXBlID09PSAxKSB7XG4gICAgICAgICAgICBza2lwQml0cygxKTsgLy8gZGVsdGFfcGljX29yZGVyX2Fsd2F5c196ZXJvX2ZsYWdcbiAgICAgICAgICAgIHNraXBFRygpOyAvLyBvZmZzZXRfZm9yX25vbl9yZWZfcGljXG4gICAgICAgICAgICBza2lwRUcoKTsgLy8gb2Zmc2V0X2Zvcl90b3BfdG9fYm90dG9tX2ZpZWxkXG4gICAgICAgICAgICBudW1SZWZGcmFtZXNJblBpY09yZGVyQ250Q3ljbGUgPSByZWFkVUVHKCk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbnVtUmVmRnJhbWVzSW5QaWNPcmRlckNudEN5Y2xlOyBpKyspIHtcbiAgICAgICAgICAgICAgICBza2lwRUcoKTsgLy8gb2Zmc2V0X2Zvcl9yZWZfZnJhbWVbIGkgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCByZWZGcmFtZXMgPSByZWFkVUVHKCk7IC8vIG1heF9udW1fcmVmX2ZyYW1lc1xuICAgICAgICBza2lwQml0cygxKTsgLy8gZ2Fwc19pbl9mcmFtZV9udW1fdmFsdWVfYWxsb3dlZF9mbGFnXG4gICAgICAgIHBpY1dpZHRoSW5NYnNNaW51czEgPSByZWFkVUVHKCk7XG4gICAgICAgIHBpY0hlaWdodEluTWFwVW5pdHNNaW51czEgPSByZWFkVUVHKCk7XG4gICAgICAgIGZyYW1lTWJzT25seUZsYWcgPSByZWFkQml0cygxKTtcbiAgICAgICAgaWYgKGZyYW1lTWJzT25seUZsYWcgPT09IDApIHtcbiAgICAgICAgICAgIHNraXBCaXRzKDEpOyAvLyBtYl9hZGFwdGl2ZV9mcmFtZV9maWVsZF9mbGFnXG4gICAgICAgIH1cbiAgICAgICAgc2tpcEJpdHMoMSk7IC8vIGRpcmVjdF84eDhfaW5mZXJlbmNlX2ZsYWdcbiAgICAgICAgaWYgKHJlYWRCb29sZWFuKCkpIHsgLy8gZnJhbWVfY3JvcHBpbmdfZmxhZ1xuICAgICAgICAgICAgZnJhbWVDcm9wTGVmdE9mZnNldCA9IHJlYWRVRUcoKTtcbiAgICAgICAgICAgIGZyYW1lQ3JvcFJpZ2h0T2Zmc2V0ID0gcmVhZFVFRygpO1xuICAgICAgICAgICAgZnJhbWVDcm9wVG9wT2Zmc2V0ID0gcmVhZFVFRygpO1xuICAgICAgICAgICAgZnJhbWVDcm9wQm90dG9tT2Zmc2V0ID0gcmVhZFVFRygpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmcmFtZVJhdGUgPSB7XG4gICAgICAgICAgICBmcHM6IDAsXG4gICAgICAgICAgICBmcHNGaXhlZDogdHJ1ZSxcbiAgICAgICAgICAgIGZwc051bTogMCxcbiAgICAgICAgICAgIGZwc0RlbjogMCxcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHBpeGVsUmF0aW8gPSBbMSwgMV07XG4gICAgICAgIGlmIChyZWFkQm9vbGVhbigpKSB7XG4gICAgICAgICAgICAvLyB2dWlfcGFyYW1ldGVyc19wcmVzZW50X2ZsYWdcbiAgICAgICAgICAgIGlmIChyZWFkQm9vbGVhbigpKSB7XG4gICAgICAgICAgICAgICAgLy8gYXNwZWN0X3JhdGlvX2luZm9fcHJlc2VudF9mbGFnXG4gICAgICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW9JZGMgPSByZWFkVUJ5dGUoKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFzcGVjdFJhdGlvSWRjKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbMSwgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IFsxMiwgMTFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbMTAsIDExXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbFJhdGlvID0gWzE2LCAxMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IFs0MCwgMzNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbMjQsIDExXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbFJhdGlvID0gWzIwLCAxMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IFszMiwgMTFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbODAsIDMzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IFsxOCwgMTFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbFJhdGlvID0gWzE1LCAxMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbNjQsIDMzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IFsxNjAsIDk5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IFs0LCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IFsyLCAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI1NTpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkVUJ5dGUoKSA8PCA4IHwgcmVhZFVCeXRlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZFVCeXRlKCkgPDwgOCB8IHJlYWRVQnl0ZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlYWRCb29sZWFuKCkpIHsgLy8gb3ZlcnNjYW5faW5mb19wcmVzZW50X2ZsYWdcbiAgICAgICAgICAgICAgICByZWFkQm9vbGVhbigpOyAvLyBvdmVyc2Nhbl9hcHByb3ByaWF0ZV9mbGFnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVhZEJvb2xlYW4oKSkgeyAvLyB2aWRlb19zaWduYWxfdHlwZV9wcmVzZW50X2ZsYWdcbiAgICAgICAgICAgICAgICByZWFkQml0cyg0KTsgLy8gdmlkZW9fZm9ybWF0ICYgdmlkZW9fZnVsbF9yYW5nZV9mbGFnXG4gICAgICAgICAgICAgICAgaWYgKHJlYWRCb29sZWFuKCkpIHsgLy8gY29sb3VyX2Rlc2NyaXB0aW9uX3ByZXNlbnRfZmxhZ1xuICAgICAgICAgICAgICAgICAgICByZWFkQml0cygyNCk7IC8vIGNvbG91cl9wcmltYXJpZXMgJiB0cmFuc2Zlcl9jaGFyYWN0ZXJpc3RpY3MgJiBtYXRyaXhfY29lZmZpY2llbnRzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlYWRCb29sZWFuKCkpIHsgLy8gY2hyb21hX2xvY19pbmZvX3ByZXNlbnRfZmxhZ1xuICAgICAgICAgICAgICAgIHJlYWRVRUcoKTsgLy8gY2hyb21hX3NhbXBsZV9sb2NfdHlwZV90b3BfZmllbGRcbiAgICAgICAgICAgICAgICByZWFkVUVHKCk7IC8vIGNocm9tYV9zYW1wbGVfbG9jX3R5cGVfYm90dG9tX2ZpZWxkXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZWFkQm9vbGVhbigpKSB7IC8vIHRpbWluZ19pbmZvX3ByZXNlbnRfZmxhZ1xuICAgICAgICAgICAgICAgIGNvbnN0IG51bVVuaXRJblRpY2sgPSAocmVhZEJpdHMoMzIpKTtcbiAgICAgICAgICAgICAgICBmcmFtZVJhdGUuZnBzTnVtID0gKHJlYWRCaXRzKDMyKSk7XG4gICAgICAgICAgICAgICAgZnJhbWVSYXRlLmZpeGVkID0gdGhpcy5yZWFkQm9vbGVhbigpO1xuICAgICAgICAgICAgICAgIGZyYW1lUmF0ZS5mcHNEZW4gPSBudW1Vbml0SW5UaWNrICogMjtcbiAgICAgICAgICAgICAgICBmcmFtZVJhdGUuZnBzID0gZnJhbWVSYXRlLmZwc051bSAvIGZyYW1lUmF0ZS5mcHNEZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY3JvcFVuaXRYID0gMCwgY3JvcFVuaXRZID0gMDtcbiAgICAgICAgICAgIGlmIChjaHJvbWFGb3JtYXRJZGMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBjcm9wVW5pdFggPSAxO1xuICAgICAgICAgICAgICAgIGNyb3BVbml0WCA9IDIgLSBmcmFtZU1ic09ubHlGbGFnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgc3ViV2MgPSBjaHJvbWFGb3JtYXRJZGMgPT09IDMgPyAxIDogMjtcbiAgICAgICAgICAgICAgICBsZXQgc3ViSGMgPSBjaHJvbWFGb3JtYXRJZGMgPT09IDEgPyAyIDogMTtcbiAgICAgICAgICAgICAgICBjcm9wVW5pdFggPSBzdWJXYztcbiAgICAgICAgICAgICAgICBjcm9wVW5pdFkgPSBzdWJIYyAqICgyIC0gZnJhbWVNYnNPbmx5RmxhZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvZGVjV2lkdGggPSAocGljV2lkdGhJbk1ic01pbnVzMSArIDEpICogMTY7XG4gICAgICAgICAgICBjb2RlY0hlaWdodCA9ICgyIC0gZnJhbWVNYnNPbmx5RmxhZykgKiAoKHBpY0hlaWdodEluTWFwVW5pdHNNaW51czEgKyAxKSAqIDE2KTtcblxuICAgICAgICAgICAgY29kZWNXaWR0aCAtPSAoZnJhbWVDcm9wTGVmdE9mZnNldCArIGZyYW1lQ3JvcFJpZ2h0T2Zmc2V0KSAqIGNyb3BVbml0WDtcbiAgICAgICAgICAgIGNvZGVjSGVpZ2h0IC09IChmcmFtZUNyb3BUb3BPZmZzZXQgKyBmcmFtZUNyb3BCb3R0b21PZmZzZXQpICogY3JvcFVuaXRZO1xuXG4gICAgICAgICAgICBjb25zdCBwaXhlbFNjYWxlID0gcGl4ZWxSYXRpb1swXSA9PT0gMSB8fCBwaXhlbFJhdGlvWzFdID09PSAxXG4gICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgOiBwaXhlbFJhdGlvWzBdIC8gcGl4ZWxSYXRpb1sxXTtcblxuICAgICAgICAgICAgcHJlc2VudFdpZHRoID0gcGl4ZWxTY2FsZSAqIGNvZGVjV2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb2ZpbGVJZGMsXG4gICAgICAgICAgICBsZXZlbElkYyxcbiAgICAgICAgICAgIHJlZkZyYW1lcyxcbiAgICAgICAgICAgIGNocm9tYUZvcm1hdCxcbiAgICAgICAgICAgIGJpdERlcHRoOiBiaXREZXB0aEx1bWEsXG4gICAgICAgICAgICBmcmFtZVJhdGUsXG4gICAgICAgICAgICBjb2RlY1NpemU6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogY29kZWNXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNvZGVjSGVpZ2h0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXNlbnRTaXplOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHByZXNlbnRXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNvZGVjSGVpZ2h0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdpZHRoOiBNYXRoLmNlaWwoKCgocGljV2lkdGhJbk1ic01pbnVzMSArIDEpICogMTYpIC0gZnJhbWVDcm9wTGVmdE9mZnNldCAqIDIgLSBmcmFtZUNyb3BSaWdodE9mZnNldCAqIDIpKSxcbiAgICAgICAgICAgIGhlaWdodDogKCgyIC0gZnJhbWVNYnNPbmx5RmxhZykgKiAocGljSGVpZ2h0SW5NYXBVbml0c01pbnVzMSArIDEpICogMTYpIC0gKChcbiAgICAgICAgICAgICAgICBmcmFtZU1ic09ubHlGbGFnXG4gICAgICAgICAgICAgICAgICAgID8gMlxuICAgICAgICAgICAgICAgICAgICA6IDQpICogKGZyYW1lQ3JvcFRvcE9mZnNldCArIGZyYW1lQ3JvcEJvdHRvbU9mZnNldCkpLFxuICAgICAgICAgICAgcGl4ZWxSYXRpbzogcGl4ZWxSYXRpbyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZWFkU2xpY2VUeXBlICgpIHtcbiAgICAgICAgLy8gc2tpcCBOQUx1IHR5cGVcbiAgICAgICAgdGhpcy5yZWFkVUJ5dGUoKTtcbiAgICAgICAgLy8gZGlzY2FyZCBmaXJzdF9tYl9pbl9zbGljZVxuICAgICAgICB0aGlzLnJlYWRVRUcoKTtcbiAgICAgICAgLy8gcmV0dXJuIHNsaWNlX3R5cGVcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZFVFRygpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG4gICAgc3RhdGljIGxvZyAoLi4uYXJncykge1xuICAgICAgICB3aW5kb3cuY29uc29sZS5sb2cuYXBwbHkod2luZG93LCBhcmdzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5mbyAoLi4uYXJncykge1xuICAgICAgICB3aW5kb3cuY29uc29sZS5pbmZvLmFwcGx5KHdpbmRvdywgYXJncyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGVycm9yICguLi5hcmdzKSB7XG4gICAgICAgIHdpbmRvdy5jb25zb2xlLmVycm9yLmFwcGx5KHdpbmRvdywgYXJncyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHdhcm4gKC4uLmFyZ3MpIHtcbiAgICAgICAgd2luZG93LmNvbnNvbGUud2Fybi5hcHBseSh3aW5kb3csIGFyZ3MpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQGF1dGhvciBmdXl1aGFvXG4gKi9cblxuY29uc3QgbmF0aXZlU2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcblxuY2xhc3MgT2JzZXJ2ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5mbklkID0gMVxuICAgIHRoaXMuX2xpc3RlbmVySWRNYXAgPSB7fVxuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9XG4gIH1cbiAgb24gKGtleSwgZm4pIHtcbiAgICBjb25zdCBmbklkID0gdGhpcy5mbklkKytcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLl9nZXRMaXN0ZW5lcnNCeUtleShrZXkpXG4gICAgdGhpcy5fbGlzdGVuZXJJZE1hcFtmbklkXSA9IGZuXG4gICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgbGlzdGVuZXJzLnVuc2hpZnQoZm5JZClcbiAgICAgIHJldHVybiBmbklkXG4gICAgfVxuICAgIHRoaXMuX2xpc3RlbmVyc1trZXldID0gW2ZuSWRdXG4gICAgcmV0dXJuIGZuSWRcbiAgfVxuICBlbWl0IChrZXkpIHtcbiAgICBjb25zdCBhcmdzID0gbmF0aXZlU2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fZ2V0TGlzdGVuZXJzQnlLZXkoa2V5KSB8fCBbXVxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IGZuID0gdGhpcy5fZ2V0TGlzdGVuZXJCeUlkKGxpc3RlbmVyc1tpXSlcbiAgICAgIGZuICYmIGZuLmFwcGx5KG51bGwsIGFyZ3MpXG4gICAgfVxuICB9XG4gIG9uY2UgKGtleSwgZm4pIHtcbiAgICBjb25zdCBmbklkID0gdGhpcy5mbklkKytcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLl9nZXRMaXN0ZW5lcnNCeUtleShrZXkpXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzXG5cbiAgICBmdW5jdGlvbiBvbmNlRnVuYyAoKSB7XG4gICAgICBjb25zdCBhcmdzID0gbmF0aXZlU2xpY2UuY2FsbChhcmd1bWVudHMpXG4gICAgICBmbi5hcHBseShudWxsLCBhcmdzKVxuICAgICAgX3RoaXMub2ZmKGtleSwgZm5JZClcbiAgICB9XG4gICAgdGhpcy5fbGlzdGVuZXJJZE1hcFtmbklkXSA9IG9uY2VGdW5jXG4gICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgbGlzdGVuZXJzLnVuc2hpZnQoZm5JZClcbiAgICAgIHJldHVybiBmbklkXG4gICAgfVxuICAgIHRoaXMuX2xpc3RlbmVyc1trZXldID0gW2ZuSWRdXG4gICAgcmV0dXJuIGZuSWRcbiAgfVxuICBvZmYgKGtleSwgZm5JZCkge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2dldExpc3RlbmVyc0J5S2V5KGtleSlcbiAgICBjb25zdCBmbiA9IHRoaXMuX2dldExpc3RlbmVyQnlJZChmbklkKVxuICAgIGlmICghZm4gfHwgIWxpc3RlbmVycyB8fCBsaXN0ZW5lcnMuaW5kZXhPZihmbklkKSA8IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJJZE1hcFtmbklkXVxuICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW2tleV1cbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdGVuZXJzW2xpc3RlbmVycy5pbmRleE9mKGZuSWQpXSA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfVxuICBfZ2V0TGlzdGVuZXJzQnlLZXkgKGtleSkge1xuICAgIHJldHVybiB0aGlzLl9saXN0ZW5lcnNba2V5XVxuICB9XG4gIF9nZXRMaXN0ZW5lckJ5SWQgKGZuSWQpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdGVuZXJJZE1hcFtmbklkXVxuICB9XG4gIGZsdXNoIChrZXkpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLl9nZXRMaXN0ZW5lcnNCeUtleShrZXkpXG4gICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2goZm5JZCA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcklkTWFwW2ZuSWRdXG4gICAgICB9KVxuICAgICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyc1trZXldXG4gICAgfVxuICB9XG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IG51bGxcbiAgICB0aGlzLl9saXN0ZW5lcklkTWFwID0gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBPYnNlcnZlcigpXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuY2xhc3MgVVRGOCB7XG4gICAgc3RhdGljIGRlY29kZSh1aW50OGFycmF5KSB7XG4gICAgICAgIGNvbnN0IG91dCA9IFtdO1xuICAgICAgICBjb25zdCBpbnB1dCA9IHVpbnQ4YXJyYXk7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdWludDhhcnJheS5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChpbnB1dFtpXSA8IDB4ODApIHtcbiAgICAgICAgICAgICAgICBvdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGlucHV0W2ldKSk7XG4gICAgICAgICAgICAgICAgKytpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dFtpXSA8IDB4QzApIHtcbiAgICAgICAgICAgICAgICAvLyBmYWxsdGhyb3VnaFxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dFtpXSA8IDB4RTApIHtcbiAgICAgICAgICAgICAgICBpZiAoVVRGOC5fY2hlY2tDb250aW51YXRpb24oaW5wdXQsIGksIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVjczQgPSAoaW5wdXRbaV0gJiAweDFGKSA8PCA2IHwgKGlucHV0W2kgKyAxXSAmIDB4M0YpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodWNzNCA+PSAweDgwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKHVjczQgJiAweEZGRkYpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dFtpXSA8IDB4RjApIHtcbiAgICAgICAgICAgICAgICBpZiAoVVRGOC5fY2hlY2tDb250aW51YXRpb24oaW5wdXQsIGksIDIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVjczQgPSAoaW5wdXRbaV0gJiAweEYpIDw8IDEyIHwgKGlucHV0W2kgKyAxXSAmIDB4M0YpIDw8IDYgfCBpbnB1dFtpICsgMl0gJiAweDNGO1xuICAgICAgICAgICAgICAgICAgICBpZiAodWNzNCA+PSAweDgwMCAmJiAodWNzNCAmIDB4RjgwMCkgIT09IDB4RDgwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSh1Y3M0ICYgMHhGRkZGKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpICs9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXRbaV0gPCAweEY4KSB7XG4gICAgICAgICAgICAgICAgaWYgKFVURjguX2NoZWNrQ29udGludWF0aW9uKGlucHV0LCBpLCAzKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdWNzNCA9IChpbnB1dFtpXSAmIDB4NykgPDwgMTggfCAoaW5wdXRbaSArIDFdICYgMHgzRikgPDwgMTIgfFxuICAgICAgICAgICAgICAgICAgICAgICAgKGlucHV0W2kgKyAyXSAmIDB4M0YpIDw8IDYgfCAoaW5wdXRbaSArIDNdICYgMHgzRik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1Y3M0ID4gMHgxMDAwMCAmJiB1Y3M0IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVjczQgLT0gMHgxMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoKHVjczQgPj4+IDEwKSB8IDB4RDgwMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSgodWNzNCAmIDB4M0ZGKSB8IDB4REMwMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSArPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkZGRCkpO1xuICAgICAgICAgICAgKytpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dC5qb2luKCcnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2NoZWNrQ29udGludWF0aW9uKHVpbnQ4YXJyYXksIHN0YXJ0LCBjaGVja0xlbmd0aCkge1xuICAgICAgICBsZXQgYXJyYXkgPSB1aW50OGFycmF5O1xuICAgICAgICBpZiAoc3RhcnQgKyBjaGVja0xlbmd0aCA8IGFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgd2hpbGUgKGNoZWNrTGVuZ3RoLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoKGFycmF5Wysrc3RhcnRdICYgMHhDMCkgIT09IDB4ODApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVVEY4OyIsImV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZSAoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gICAgdmFyIHRpbWVvdXQsIHJlc3VsdDtcblxuXG4gICAgdmFyIGRlYm91bmNlZCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgIGlmICh0aW1lb3V0KSB7IGNsZWFyVGltZW91dCh0aW1lb3V0KTsgfVxuICAgICAgICBpZiAoaW1tZWRpYXRlKSB7XG4gICAgICAgICAgICB2YXIgY2FsbE5vdyA9ICF0aW1lb3V0O1xuICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuYywgd2FpdCk7XG4gICAgICAgICAgICBpZiAoY2FsbE5vdykgeyByZXN1bHQgPSBmdW5jKCk7IH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmMsIHdhaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgZGVib3VuY2VkLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRlYm91bmNlZDtcblxufVxuXG5leHBvcnQgY29uc3QgY2FjaGVXcmFwcGVyID0gKGZuKSA9PiB7XG5cbiAgICBjb25zdCBjYWNoZSA9IHt9O1xuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBhcmdzLnJlZHVjZSgocHJlLCBjdXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgJHtwcmV9XyR7Y3VyfWA7XG4gICAgICAgIH0sICcnKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgIGlmIChjYWNoZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZVtrZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVba2V5XSA9IHJlc3VsdDtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9O1xufTsiLCIvLyDlrZfoioLluo/mmK/lkKbmmK8g5bCP5a2X6IqC5bqPIOaYr+WPjeeahFxuY29uc3QgbGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcigyKTtcbiAgICAobmV3IERhdGFWaWV3KGJ1ZikpLnNldEludDE2KDAsIDI1NiwgdHJ1ZSkgLy8gbGl0dGxlLWVuZGlhbiB3cml0ZVxuICAgIHJldHVybiAobmV3IEludDE2QXJyYXkoYnVmKSlbMF0gPT09IDI1NiAvLyBwbGF0Zm9ybS1zcGVjIHJlYWQsIGlmIGVxdWFsIHRoZW4gTEVcbn0pKClcbmNvbnN0IHNuaWZmZXIgPSB7XG4gICAgZ2V0IGRldmljZSAoKSB7XG4gICAgICAgIGxldCByID0gc25pZmZlci5vcztcbiAgICAgICAgcmV0dXJuIHIuaXNQYyA/ICdwYycgOiByLmlzVGFibGV0ID8gJ3RhYmxldCcgOiAnbW9iaWxlJztcbiAgICB9LFxuICAgIGdldCBicm93c2VyICgpIHtcbiAgICAgICAgbGV0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsZXQgcmVnID0ge1xuICAgICAgICAgICAgaWU6IC9ydjooW1xcZC5dKylcXCkgbGlrZSBnZWNrby8sXG4gICAgICAgICAgICBmaXJmb3g6IC9maXJlZm94XFwvKFtcXGQuXSspLyxcbiAgICAgICAgICAgIGNocm9tZTogL2Nocm9tZVxcLyhbXFxkLl0rKS8sXG4gICAgICAgICAgICBvcGVyYTogL29wZXJhLihbXFxkLl0rKS8sXG4gICAgICAgICAgICBzYWZhcmk6IC92ZXJzaW9uXFwvKFtcXGQuXSspLipzYWZhcmkvLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gW10uY29uY2F0KE9iamVjdC5rZXlzKHJlZykuZmlsdGVyKGtleSA9PiByZWdba2V5XS50ZXN0KHVhKSkpWzBdO1xuICAgIH0sXG4gICAgZ2V0IG9zICgpIHtcbiAgICAgICAgbGV0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgICAgIGlzV2luZG93c1Bob25lID0gLyg/OldpbmRvd3MgUGhvbmUpLy50ZXN0KHVhKSxcbiAgICAgICAgICAgIGlzU3ltYmlhbiA9IC8oPzpTeW1iaWFuT1MpLy50ZXN0KHVhKSB8fCBpc1dpbmRvd3NQaG9uZSxcbiAgICAgICAgICAgIGlzQW5kcm9pZCA9IC8oPzpBbmRyb2lkKS8udGVzdCh1YSksXG4gICAgICAgICAgICBpc0ZpcmVGb3ggPSAvKD86RmlyZWZveCkvLnRlc3QodWEpLFxuICAgICAgICAgICAgaXNUYWJsZXQgPSAvKD86aVBhZHxQbGF5Qm9vaykvLnRlc3QodWEpIHx8IChpc0FuZHJvaWQgJiYgIS8oPzpNb2JpbGUpLy50ZXN0KHVhKSkgfHwgKGlzRmlyZUZveCAmJiAvKD86VGFibGV0KS8udGVzdCh1YSkpLFxuICAgICAgICAgICAgaXNQaG9uZSA9IC8oPzppUGhvbmUpLy50ZXN0KHVhKSAmJiAhaXNUYWJsZXQsXG4gICAgICAgICAgICBpc1BjID0gIWlzUGhvbmUgJiYgIWlzQW5kcm9pZCAmJiAhaXNTeW1iaWFuO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNUYWJsZXQsXG4gICAgICAgICAgICBpc1Bob25lLFxuICAgICAgICAgICAgaXNBbmRyb2lkLFxuICAgICAgICAgICAgaXNQYyxcbiAgICAgICAgICAgIGlzU3ltYmlhbixcbiAgICAgICAgICAgIGlzV2luZG93c1Bob25lLFxuICAgICAgICAgICAgaXNGaXJlRm94LFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgZ2V0IGlzTGUoKSB7XG4gICAgICAgIHJldHVybiBsZVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNuaWZmZXI7XG4iLCJpbXBvcnQgQ29uY2F0IGZyb20gJ2NvbmNhdC10eXBlZC1hcnJheSc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWxzL0xvZyc7XG5jbGFzcyBCdWZmZXIge1xuICAgIGNvbnN0cnVjdG9yIChidWZmZXIpIHtcbiAgICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXIgfHwgbmV3IFVpbnQ4QXJyYXkoMCk7XG4gICAgfVxuICAgIHdyaXRlICguLi5idWZmZXIpIHtcbiAgICAgICAgYnVmZmVyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gQ29uY2F0KFVpbnQ4QXJyYXksIHRoaXMuYnVmZmVyLCBpdGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmVycm9yKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIHdyaXRlVWludDMyICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgICAgICAgdmFsdWUgPj4gMjQsXG4gICAgICAgICAgICAodmFsdWUgPj4gMTYpICYgMHhmZixcbiAgICAgICAgICAgICh2YWx1ZSA+PiA4KSAmIDB4ZmYsXG4gICAgICAgICAgICB2YWx1ZSAmIDB4ZmYsXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBzdGF0aWMgcmVhZEFzSW50IChhcnIpIHtcbiAgICAgICAgbGV0IHRlbXAgPSAnJztcbiAgICAgICAgZnVuY3Rpb24gcGFkU3RhcnQ0SGV4IChoZXhOdW0pIHtcbiAgICAgICAgICAgIGxldCBoZXhTdHIgPSBoZXhOdW0udG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgcmV0dXJuIGhleFN0ci5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICB9XG4gICAgICAgIGFyci5mb3JFYWNoKG51bSA9PiB7XG4gICAgICAgICAgICB0ZW1wICs9IHBhZFN0YXJ0NEhleChudW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRlbXAsIDE2KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1ZmZlcjtcbiIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJQbGF5ZXJcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==