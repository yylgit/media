(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("xgplayer"));
	else if(typeof define === 'function' && define.amd)
		define(["xgplayer"], factory);
	else if(typeof exports === 'object')
		exports["xgplayer-flv"] = factory(require("xgplayer"));
	else
		root["xgplayer-flv"] = factory(root["xgplayer"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_xgplayer__) {
return /******/ (function(modules) { // webpackBootstrap
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

    debugger;
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
      // 点播正常播放更新进度
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
      // range是当前缓存的范围

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
        debugger;
        // 点播的时候 直接return了 blob:http://192.168.2.105:5000/ece1d4d5-7e37-4517-acf5-692673f1a93d
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
      debugger;
      // start之后执行的方法
      var player = this;
      if (this._options.isLive) {
        _xgplayer2.default.util.addClass(player.root, 'xgplayer-is-live');
        var live = _xgplayer2.default.util.createDom('xg-live', '正在直播', {}, 'xgplayer-live');
        player.controls.appendChild(live);
      }
      //开始load
      flv.load();
    }
  }, {
    key: 'start',
    value: function start() {
      // 开始播放
      debugger;
      if (!this.inited) {
        return;
      }
      var flvPlayer = this.__flv__;
      // 触发父类的start 父类里触发complete事件
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
      // 记录当前的这次数据所在的总数据的位置 
      this.filePosition = 0;
    }
  }, {
    key: 'setFlv',
    value: function setFlv(flvU8a) {
      // debugger
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
        this.filePosition += this.offset; // 这里好像是bug parseData里面已经进行计算了
        return this.offset;
      } else {
        return this.offset;
      }
    }
  }, {
    key: 'parseData',
    value: function parseData() {
      // debugger
      var u8aLength = this.temp_u8a.length;
      // 这里有个疑问 如果header和body不是一次来的 tag会不会计算错误，没有严格的tag的开始和结束标志 
      // 第一次buffer tag的body没有完全到结束了 但是offset把11个header字节删除了，下次来就没有header字节了。

      while (this.index < u8aLength && !this.stop) {
        //offset是最后返回的处理到的位置
        this.offset = this.index;
        var tag = new _Tag2.default();
        if (this.unreadLength >= 11) {
          // 可以读出tag的信息 11个字节
          tag.position = this.filePosition + this.offset;
          tag.tagType = this.readData(1)[0];
          tag.bodySize = this.readData(3);
          tag.Timestamp = this.readData(4);
          tag.StramId = this.readData(3);
        } else {
          // 如果数据小于11个字节  当前tag信息不完整 则直接return offset就是当前的index
          this.stop = true;
          //不改变offset 拼接下次的数据继续处理
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
          //不改变offset 拼接下次的数据继续处理
          this.stop = true;
          continue;
        }

        this.offset = this.index;
      }
      // 改变filePosition
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
      // this.index永远在未读数据的第一个
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

      debugger;
      var self = this;
      var Resolver = {
        resolveChunk: function resolveChunk(_ref) {
          var timeStamp = _ref.timeStamp,
              buffer = _ref.buffer;

          debugger;
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
      //初始值 start: 0  end: 999999
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

      debugger;
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
      debugger;
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
      debugger;
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
      debugger;
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
/*!***************************!*\
  !*** external "xgplayer" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_xgplayer__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3hncGxheWVyLWZsdi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9ub2RlX21vZHVsZXMvY29uY2F0LXR5cGVkLWFycmF5L2xpYi9jb25jYXQuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vbm9kZV9tb2R1bGVzL2NvbmNhdC10eXBlZC1hcnJheS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vbm9kZV9tb2R1bGVzL2QvaW5kZXguanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vbm9kZV9tb2R1bGVzL2VzNS1leHQvZnVuY3Rpb24vbm9vcC5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9hc3NpZ24vaXMtaW1wbGVtZW50ZWQuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L2Fzc2lnbi9zaGltLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9pcy12YWx1ZS5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3Qva2V5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3Qva2V5cy9pcy1pbXBsZW1lbnRlZC5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3Qva2V5cy9zaGltLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9ub3JtYWxpemUtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvdmFsaWQtY2FsbGFibGUuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L3ZhbGlkLXZhbHVlLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL25vZGVfbW9kdWxlcy9lczUtZXh0L3N0cmluZy8jL2NvbnRhaW5zL2luZGV4LmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL25vZGVfbW9kdWxlcy9lczUtZXh0L3N0cmluZy8jL2NvbnRhaW5zL2lzLWltcGxlbWVudGVkLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL25vZGVfbW9kdWxlcy9lczUtZXh0L3N0cmluZy8jL2NvbnRhaW5zL3NoaW0uanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vbm9kZV9tb2R1bGVzL2V2ZW50LWVtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vbm9kZV9tb2R1bGVzL3R5cGUvZnVuY3Rpb24vaXMuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vbm9kZV9tb2R1bGVzL3R5cGUvb2JqZWN0L2lzLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL25vZGVfbW9kdWxlcy90eXBlL3BsYWluLWZ1bmN0aW9uL2lzLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL25vZGVfbW9kdWxlcy90eXBlL3Byb3RvdHlwZS9pcy5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9ub2RlX21vZHVsZXMvdHlwZS92YWx1ZS9pcy5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9zcmMvRmx2LmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy9jb25zdGFudHMvY29uZmlnLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy9jb25zdGFudHMvbWV0YUZpZWxkcy5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9zcmMvY29uc3RhbnRzL3R5cGVzLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9zcmMvbW9kZWxzL01lZGlhSW5mby5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9zcmMvbW9kZWxzL01lZGlhU2FtcGxlLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy9tb2RlbHMvTWVkaWFTZWdtZW50LmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy9tb2RlbHMvTWVkaWFTZWdtZW50TGlzdC5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9zcmMvbW9kZWxzL1N0b3JlLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy9tb2RlbHMvVGFnLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy9tb2RlbHMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vc3JjL3BhcnNlL0ZsdlBhcnNlci5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9zcmMvcGFyc2UvTVNFLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy9wYXJzZS9NYWluUGFyc2VyLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy9wYXJzZS9TUFNQYXJzZXIuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vc3JjL3BhcnNlL1RyYW5zQ29kZXIuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vc3JjL3BhcnNlL2RlbXV4L0F1ZGlvRGVtdXhlci5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9zcmMvcGFyc2UvZGVtdXgvRGVtdXhlci5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9zcmMvcGFyc2UvZGVtdXgvTWV0YURlbXV4ZXIuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vc3JjL3BhcnNlL2RlbXV4L1RhZ0RlbXV4ZXIuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vc3JjL3BhcnNlL2RlbXV4L1ZpZGVvRGVtdXhlci5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9zcmMvcGFyc2UvcmVtdXgvRm1wNC5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9zcmMvcGFyc2UvcmVtdXgvTXA0cmVtdXguanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vc3JjL3BhcnNlL3JlbXV4L1JlbXV4ZXIuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vc3JjL3Rhc2tzL0xpdmVUYXNrLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy90YXNrcy9Wb2RUYXNrLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy90YXNrcy9sb2FkZXJzL0ZldGNoTG9hZGVyLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy90YXNrcy9sb2FkZXJzL1hIUkxvYWRlci5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9zcmMvdXRpbHMvRGF0YVZpZXc0UmVhZC5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9zcmMvdXRpbHMvRXhwR29sb21iLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy91dGlscy9Mb2cuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vc3JjL3V0aWxzL09ic2VydmVyLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy91dGlscy9VVEY4LmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy91dGlscy9mdW5jVXRpbHMuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vc3JjL3V0aWxzL3NuaWZmZXIuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vc3JjL3dyaXRlL0J1ZmZlci5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvZXh0ZXJuYWwgXCJ4Z3BsYXllclwiIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdCIsIlJlc3VsdENvbnN0cnVjdG9yIiwidG90YWxMZW5ndGgiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJyYXlzIiwiQXJyYXkiLCJfa2V5IiwiX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiIsIl9kaWRJdGVyYXRvckVycm9yIiwiX2l0ZXJhdG9yRXJyb3IiLCJ1bmRlZmluZWQiLCJfaXRlcmF0b3IiLCJTeW1ib2wiLCJpdGVyYXRvciIsIl9zdGVwIiwibmV4dCIsImRvbmUiLCJhcnIiLCJlcnIiLCJyZXR1cm4iLCJyZXN1bHQiLCJvZmZzZXQiLCJfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiIsIl9kaWRJdGVyYXRvckVycm9yMiIsIl9pdGVyYXRvckVycm9yMiIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJfYXJyIiwic2V0IiwiX2NvbmNhdCIsInJlcXVpcmUiLCJfY29uY2F0MiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJvYmoiLCJfX2VzTW9kdWxlIiwibW9kdWxlIiwiaXNWYWx1ZSIsImlzUGxhaW5GdW5jdGlvbiIsImFzc2lnbiIsIm5vcm1hbGl6ZU9wdHMiLCJjb250YWlucyIsImQiLCJkc2NyIiwiYyIsImUiLCJ3Iiwib3B0aW9ucyIsImRlc2MiLCJjYWxsIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiZ3MiLCJnZXQiLCJmb28iLCJiYXIiLCJ0cnp5Iiwia2V5cyIsIm1heCIsIk1hdGgiLCJkZXN0Iiwic3JjIiwiZXJyb3IiLCJpIiwia2V5IiwiZm9yRWFjaCIsIl91bmRlZmluZWQiLCJ2YWwiLCJvYmplY3QiLCJwcm90b3R5cGUiLCJjcmVhdGUiLCJwcm9jZXNzIiwib3B0czEiLCJmbiIsIlR5cGVFcnJvciIsIlN0cmluZyIsInN0ciIsImluZGV4T2YiLCJzZWFyY2hTdHJpbmciLCJjYWxsYWJsZSIsImFwcGx5IiwiRnVuY3Rpb24iLCJkZWZpbmVQcm9wZXJ0aWVzIiwiaGFzT3duUHJvcGVydHkiLCJkZXNjcmlwdG9yIiwib24iLCJvbmNlIiwib2ZmIiwiZW1pdCIsIm1ldGhvZHMiLCJkZXNjcmlwdG9ycyIsImJhc2UiLCJ0eXBlIiwibGlzdGVuZXIiLCJkYXRhIiwiX19lZV9fIiwicHVzaCIsInNlbGYiLCJfX2VlT25jZUxpc3RlbmVyX18iLCJsaXN0ZW5lcnMiLCJjYW5kaWRhdGUiLCJzcGxpY2UiLCJsIiwiYXJncyIsInNsaWNlIiwibyIsImlzUHJvdG90eXBlIiwicG9zc2libGVUeXBlcyIsImlzRnVuY3Rpb24iLCJjbGFzc1JlIiwiZnVuY3Rpb25Ub1N0cmluZyIsInRvU3RyaW5nIiwidGVzdCIsImlzT2JqZWN0IiwiY29uc3RydWN0b3IiLCJGbHYiLCJwbGF5ZXIiLCJfcGxheWVyIiwiX29wdGlvbnMiLCJmbHZQbGF5ZXIiLCJNYWluUGFyc2VyIiwibXNlIiwiTVNFIiwidmlkZW8iLCJpc1NlZWtpbmciLCJpc0RhdGFMb2FkaW5nIiwidGVtcEN1cnJlbnRUaW1lIiwidGVtcEZsdlBsYXllciIsImlzQ2hhbmdpbmdTcmMiLCJpbml0UGxheWVyRXZlbnRzIiwiaW5pdEZsdlBsYXllckV2ZW50cyIsImluaXRNc2VFdmVudHMiLCJzdGFydExvYWREYXRhIiwiaGFuZGxlU2Vla2luZyIsImJ1ZmZlcmVkIiwiY3VycmVudFRpbWUiLCJpc0J1ZmZlcmVkIiwibGVuIiwic3RhcnQiLCJlbmQiLCJWb2RUYXNrIiwiY2xlYXIiLCJpc1NlZWthYmxlIiwic2VlayIsImlzTGl2ZSIsImhhbmRsZVRpbWVVcGRhdGUiLCJpc01lZGlhSW5mb1JlYWR5IiwicHJvZ3Jlc3NDaGVja2VyIiwiaXNFbmRlZCIsIl9yZXBsYXkiLCJkZXN0cm95IiwiX21zZSIsInJlcGxheSIsImlzU291cmNlT3BlbiIsImFwcGVuZEJ1ZmZlciIsImZ0eXBfbW9vdiIsImJ1ZmZlciIsInNldFRpbWVvdXQiLCJwbGF5IiwicGVuZGluZ0ZyYWdtZW50cyIsImhhc1BlbmRpbmdGcmFnbWVudHMiLCJmcmFnbWVudCIsInNoaWZ0IiwidW5zaGlmdCIsInVybCIsInN3aXRjaFVSTCIsImNvbmZpZyIsImlzVGVtcFBsYXllciIsImhhbmRsZU1lZGlhRnJhZ21lbnQiLCJ1bmJpbmRGbHZQbGF5ZXJFdmVudHMiLCJoYW5kbGVTZWVrRW5kIiwiaGFuZGxlRXJyb3IiLCJoYW5kbGVGdHlwTW9vdiIsImZ0eXBNb292Iiwib25Tb3VyY2VPcGVuIiwibG9hZFNlZ21lbnRzIiwicHJlbG9hZFRpbWUiLCJtaW5DYWNoZWRUaW1lIiwicmFuZ2UiLCJnZXRCdWZmZXJlZFJhbmdlIiwidmlkZW9EdXJhdGlvbiIsInZpZGVvVGltZVNjYWxlIiwidGhlbiIsImZsdiIsImVuZE9mU3RyZWFtIiwicGF1c2UiLCJnZXREZWZhdWx0Q29uZiIsImF1dG9DbGVhblNvdXJjZUJ1ZmZlciIsImF1dG9DbGVhbk1heEJhY2tUaW1lIiwiY29ycyIsImZpZWxkcyIsIm5hbWUiLCJCb29sZWFuIiwicGFyc2VyIiwidGFyZ2V0Iiwib3JpZ2luIiwibWVkaWFJbmZvIiwiZHVyYXRpb24iLCJoYXNBdWRpbyIsImhhc1ZpZGVvIiwiTnVtYmVyIiwiYXVkaW9EYXRhUmF0ZSIsImF1ZGlvZGF0YXJhdGUiLCJ2aWRlb0RhdGFSYXRlIiwidmlkZW9kYXRhcmF0ZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3RhdGUiLCJmbG9vciIsInRpbWVTY2FsZSIsIm9uVHlwZUVyciIsImZwc051bSIsImZyYW1lcmF0ZSIsImZwcyIsInJlZmVyRnJhbWVSYXRlIiwiZml4ZWQiLCJmcHNEZW4iLCJrZXlmcmFtZXMiLCJoYXNLZXlmcmFtZXMiLCJfcGFyc2VLZXlmcmFtZXMiLCJNZXRhVHlwZXMiLCJOVU1CRVIiLCJCT09MRUFOIiwiU1RSSU5HIiwiT0JKRUNUIiwiTUlYX0FSUkFZIiwiT0JKRUNUX0VORCIsIlNUUklDVF9BUlJBWSIsIkRBVEUiLCJMT05FX1NUUklORyIsIkV2ZW50VHlwZXMiLCJEQVRBX1JFQURZIiwiTUVUQV9EQVRBX1JFQURZIiwiVFJBQ0tfTUVUQV9SRUFEWSIsIk1FRElBX0lORk9fUkVBRFkiLCJNRVRBX0VORF9QT1NJVElPTiIsIkVSUk9SIiwic291bmRSYXRlVHlwZXMiLCJBdWRpb09iamVjdFR5cGVzIiwic2FtcGxpbmdGcmVxdWVuY3lUeXBlcyIsImJyb3dzZXJUeXBlcyIsIklFIiwiRklSRV9GT1giLCJDSFJPTUUiLCJPUEVSQSIsIlNBRkFSSSIsIm1wM1ZlcnNpb25zIiwiVjI1IiwiUkVTRVJWRUQiLCJWMjAiLCJWMTAiLCJhdWRpb1NhbXBsZVJhdGUiLCJtcDNCaXRSYXRlIiwiTGF5ZXIxIiwiTGF5ZXIyIiwiTGF5ZXIzIiwiRmx2UGxheWVyIiwiX19mbHZfXyIsImluaXQiLCJzdGFydHNXaXRoIiwibG9hZCIsImF1dG9wbGF5IiwiY3JlYXRlSW5zdGFuY2UiLCJQbGF5ZXIiLCJ1dGlsIiwiYWRkQ2xhc3MiLCJyb290IiwibGl2ZSIsImNyZWF0ZURvbSIsImNvbnRyb2xzIiwiYXBwZW5kQ2hpbGQiLCJpbml0ZWQiLCJNZWRpYUluZm8iLCJfZGVmYXVsdCIsIm1pbWVUeXBlIiwiY29kZWMiLCJhdWRpb0NvZGVjIiwidmlkZW9Db2RlYyIsImF1ZGlvQ2hhbm5lbENvdW50IiwiYXVkaW9Db25maWciLCJwcm9maWxlIiwibGV2ZWwiLCJjaHJvbWFGb3JtYXQiLCJwaXhlbFJhdGlvIiwiX21ldGFEYXRhIiwic2VnbWVudHMiLCJpbml0RGF0YSIsImVudHJpZXMiLCJrIiwidiIsImlzVmlkZW9JbmZvRmlsbGVkIiwiaXNBdWRpb0luZm9GaWxsZWQiLCJub3ROdWxsRmllbGRzIiwiTWVkaWFTYW1wbGUiLCJpbmZvIiwiZ2V0RGVmYXVsdEluZiIsInNhbXBsZSIsImR0cyIsInB0cyIsInBvc2l0aW9uIiwiaXNSQVAiLCJvcmlnaW5EdHMiLCJNZWRpYVNlZ21lbnQiLCJzdGFydER0cyIsImVuZER0cyIsInN0YXJ0UHRzIiwiZW5kUHRzIiwib3JpZ2luU3RhcnREdHMiLCJvcmlnaW5FbmREdHMiLCJyYW5kb21BY2Nlc3NQb2ludHMiLCJmaXJzdFNhbXBsZSIsImxhc3RTYW1wbGUiLCJNZWRpYVNlZ21lbnRMaXN0IiwiX3R5cGUiLCJfbGlzdCIsIl9sYXN0QXBwZW5kTG9jYXRpb24iLCJiZWdpbkR0cyIsImxpc3QiLCJsYXN0IiwibWlkIiwibGJvdW5kIiwidWJvdW5kIiwiaWR4IiwiX3NlYXJjaE5lYXJlc3RTZWdtZW50QmVmb3JlIiwic2VnbWVudCIsImxhc3RBcHBlbmRJZHgiLCJpbnNlcnRJZHgiLCJnZXRMYXN0U2VnbWVudEJlZm9yZSIsInNlZ21lbnRJZHgiLCJTdG9yZSIsImlzTGUiLCJzbmlmZmVyIiwiX2hhc0F1ZGlvIiwiX2hhc1ZpZGVvIiwiX21lZGlhSW5mbyIsIl92aWRlb1RyYWNrIiwiaWQiLCJzYW1wbGVzIiwiX2F1ZGlvVHJhY2siLCJfdmlkZW9NZXRhRGF0YSIsIl9hdWRpb01ldGFEYXRhIiwiX2F1ZGlvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZCIsIl92aWRlb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWQiLCJ0YWdzIiwidGltZVN0YW1wQmFzZSIsImhhc1ZpZGVvRmxhZ092ZXJyaWRlZCIsImhhc0F1ZGlvRmxhZ092ZXJyaWRlZCIsImR1cmF0aW9uT3ZlcnJpZGVkIiwibmFsdUxlbmd0aFNpemUiLCJfcmVmZXJGcmFtZVJhdGUiLCJtZXRhRW5kUG9zaXRpb24iLCJfaXNJbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkIiwiYmluZCIsInBvcyIsIkZsdlRhZyIsInRhZ1R5cGUiLCJib2R5U2l6ZSIsInRhZ1NpemUiLCJUaW1lc3RhbXAiLCJTdHJlYW1JRCIsImJvZHkiLCJ0aW1lIiwicG9wIiwiam9pbiIsInBhcnNlSW50IiwiRXJyb3JUeXBlcyIsIm5ldHdvcmsiLCJjb2RlIiwibXNnIiwicmVtYXJrIiwicGFyc2UiLCJmb3JtYXQiLCJkZWNvZGVyIiwicnVudGltZSIsInRpbWVvdXQiLCJvdGhlciIsIkVycm9ycyIsIm5ldHdvcmtTdGF0ZSIsInJlYWR5U3RhdGUiLCJjdXJyZW50U3JjIiwiZW5kZWQiLCJlcnJkIiwibGluZSIsImhhbmRsZSIsInZlcnNpb24iLCJyIiwicGxheWVyVmVyc2lvbiIsImVycm9yVHlwZSIsImRvbWFpbiIsImRvY3VtZW50IiwiZXgiLCJGbHZQYXJzZXIiLCJzdG9yZSIsIkNMQVNTX05BTUUiLCJ0ZW1wX3U4YSIsImRhdGFMZW4iLCJzdG9wIiwiaW5kZXgiLCJmaWxlUG9zaXRpb24iLCJmaXJzdEZsYWciLCJmbHZVOGEiLCJ0ZW1wVThhIiwicGFyc2VEYXRhIiwiaXNGbHZIZWFkIiwicGFyc2VIZWFkIiwicmVhZERhdGEiLCJ1OGFMZW5ndGgiLCJ0YWciLCJUYWciLCJ1bnJlYWRMZW5ndGgiLCJTdHJhbUlkIiwiZ2V0Qm9keVNpemUiLCJfc3RvcmUiLCJzaXplQXJyIiwiQnVmZmVyIiwicmVhZEFzSW50IiwibWF0Y2giLCJmbGFnIiwiX2luZGV4IiwiZmlyc3RUaHJlZUNoYXJzIiwiZnJvbUNoYXJDb2RlIiwiRGVtdXhlciIsImNvdW50IiwibWVkaWFFbGVtZW50IiwiY29kZWNzIiwibWVkaWFTb3VyY2UiLCJ3aW5kb3ciLCJNZWRpYVNvdXJjZSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImhhbmRsZVNvdXJjZU9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic291cmNlQnVmZmVyIiwiYWRkU291cmNlQnVmZmVyIiwidXBkYXRpbmciLCJFcnJvciIsInJlbW92ZSIsImlzVHlwZVN1cHBvcnRlZCIsIk5PT1AiLCJfY29uZmlnIiwiX3RlbXBCYXNlVGltZSIsImZsdlBhcnNlciIsInRhZ0RlbXV4ZXIiLCJUYWdEZW11eGVyIiwibXA0cmVtdXhlciIsIk1wNFJlbXV4ZXIiLCJidWZmZXJLZXlmcmFtZXMiLCJTZXQiLCJNRVRBX0NIVU5LX1NJWkUiLCJwb3ciLCJDSFVOS19TSVpFIiwiX2lzTmV3U2VnbWVudHNBcnJpdmFsIiwibG9hZFRhc2siLCJfcGVuZGluZ0ZyYWdtZW50cyIsIl9wZW5kaW5nUmVtb3ZlUmFuZ2UiLCJlcnJfY250IiwicmVxdWVzdENvbmZpZyIsIm1vZGUiLCJpbml0RXZlbnRCaW5kIiwiaW5pdE1ldGEiLCJpbml0TGl2ZVN0cmVhbSIsIkxpdmVUYXNrIiwicnVuIiwibG9hZExpdmVEYXRhIiwid3JpdGUiLCJVaW50OEFycmF5Iiwic2V0Rmx2IiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJSZXNvbHZlciIsInJlc29sdmVDaHVuayIsInRpbWVTdGFtcCIsImxvYWREYXRhIiwibG9hZE1ldGFEYXRhIiwiY2F0Y2giLCJjaGFuZ2VSYW5nZSIsIl9yYW5nZSIsImdldE5leHRSYW5nZUVuZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiX2xvYWRTZWdtZW50c0RhdGEiLCJ0aW1lcyIsImZpbGVQb3NpdGlvbnMiLCJleHBlY3RFbmQiLCJsZWZ0IiwicmlnaHQiLCJwcm9taXNlIiwiYXJyYXlCdWZmIiwiYmFzZVRpbWUiLCJnZXRUaW1lIiwiX3RpbWVzdGFtcEJhc2UiLCJyZXNvbHZlVGFncyIsImlzUGFyc2luZyIsImF1ZGlvVHJhY2siLCJ2aWRlb1RyYWNrIiwicmVtdXgiLCJtZXRhIiwib25NZXRhRGF0YVJlYWR5IiwibmV3RnJhZyIsImFkZCIsInJhcCIsIkZUWVBfTU9PViIsIm9uTWVkaWFJbmZvUmVhZHkiLCJoYW5kbGVEYXRhUmVhZHkiLCJoYW5kbGVNZWRpYUluZm9SZWFkeSIsImhhbmRsZU1ldGFEYXRhUmVhZHkiLCJzZXRFdmVudEJpbmQiLCJoYW5kbGVOZXdNZWRpYUZyYWdtZW50IiwiY2xlYXJCdWZmZXIiLCJjYW5jZWwiLCJzZWVrU3RhcnQiLCJzdGFydEZpbGVQb3MiLCJlbmRGaWxlUG9zIiwibWluIiwiZ2V0RW5kRmlsZVBvcyIsImxvIiwiaGkiLCJuZXh0VGltZSIsIk1BWF9TQUZFX0lOVEVHRVIiLCJldmVyeSIsImNsZWFyVGFncyIsInNldEZsdkZpcnN0Iiwic2V0Rmx2VXN1YWxseSIsImlzQ29tcGxldGUiLCJUcmFuc0NvZGVyIiwiU1BTUGFyc2VyIiwicHJvZmlsZUlkYyIsImxldmVsSWRjIiwidG9GaXhlZCIsImNocm9tYSIsIm9yaWdpbkFyciIsInJic3AiLCJfZWJzcDJyYnNwIiwic3RyZWFtIiwiRXhwR29sb21iIiwic3BzQ29uZmlnIiwicmVhZFNQUyIsInByb2ZpbGVTdHJpbmciLCJnZXRQcm9maWxlU3RyIiwibGV2ZWxTdHJpbmciLCJnZXRMZXZlbFN0ciIsImNocm9tYUZvcm1hdFN0cmluZyIsImdldENocm9tYUZvcm1hdFN0ciIsIm9yaWdpbkxlbiIsImJ5dGVMZW5ndGgiLCJkaXN0IiwiZGlzdFNpemUiLCJfb2JzZXJ2ZXIiLCJvYnNlcnZlciIsImZsdXNoIiwiZXJyb3JEZXRhaWwiLCJlcnJvclRvRW1pdCIsIkF1ZGlvRGVtdXhlciIsImN1cnJlbnRUYWciLCJyZWFkT2Zmc2V0IiwiYXVkaW9NZXRhRGF0YSIsInRyYWNrIiwiaW5pdEF1ZGlvTWV0YSIsImR2IiwiRGF0YVZpZXc0UmVhZCIsInNvdW5kIiwiZ2V0VWludDgiLCJzb3VuZEZvcm1hdElkeCIsInNvdW5kUmF0ZSIsInNvdW5kVHlwZSIsImNoYW5uZWxDb3VudCIsImFhY0luZm8iLCJfcGFyc2VBQUNBdWRpbyIsImFhY0RhdGEiLCJzYW1wbGVGcmVxIiwicGFja2V0VHlwZSIsInNhbXBsZVJhdGUiLCJtYW5pZmVzdENvZGVjIiwicmVmU2FtcGxlRHVyYXRpb24iLCJoYXNJbml0aWFsTWV0YURpc3BhdGNoZWQiLCJtaSIsInJlcGxhY2UiLCJhYWNTYW1wbGUiLCJ1bml0IiwicmVzZXRTdGF0dXMiLCJhYWNBcnJheSIsIl9wYXJzZUFBQ0F1ZGlvU3BlY2lmaWNDb25maWciLCJnZXRBbmROdW0iLCJyZXN1bHRPYmoiLCJzYW1wbGluZ0ZyZXF1ZW5jeSIsImV4dEF1ZGlvT2JqZWN0VHlwZSIsImV4dEF1ZGlvU2FtcGxpbmdJZHgiLCJVSW50MCIsIlVJbnQxIiwidGVtcEF1ZGlvT2JqZWN0VHlwZSIsImF1ZGlvT2JqZWN0VHlwZSIsInNhbXBsaW5nSWR4IiwiZW1pdEVycm9yIiwiZGlzcGF0Y2giLCJVSW50MiIsImJyb3dzZXIiLCJvcyIsImlzQW5kcm9pZCIsImV4dGVuc2lvblNhbXBsaW5nSW5kZXgiLCJleHRlbnNpb25TYW1wbGluZ0lkeCIsImRhdGFTaXplIiwicHJlZml4IiwicGF5bG9hZCIsIkxvZyIsIndhcm4iLCJNZXRhRGVtdXhlciIsInNpemUiLCJtZXRhRGF0YSIsInBhcnNlVmFsdWUiLCJEYXRhVmlldyIsInN0ckxlbiIsImdldFVpbnQxNiIsIlVURjgiLCJkZWNvZGUiLCJ0cyIsImdldEZsb2F0NjQiLCJ0aW1lT2Zmc2V0IiwiZ2V0SW50MTYiLCJEYXRlIiwicGFyc2VTdHJpbmciLCJpc09iakVuZCIsImdldFVpbnQzMiIsIkFycmF5QnVmZmVyIiwiZGF0YVZpZXciLCJib29sTnVtIiwib2JqRW5kU2l6ZSIsImFtZk9iaiIsInBhcnNlT2JqZWN0IiwiaXNPYmplY3RFbmQiLCJtYXJrIiwiYW1mVmFyIiwibWFya2VyIiwiYXJyTGVuZ3RoIiwic2NyaXB0IiwiZGF0ZSIsInBhcnNlRGF0ZSIsImxvbmdTdHIiLCJwYXJzZUxvbmdTdHJpbmciLCJuYXRpdmVIYXNQcm9wIiwiVGFnZGVtdXgiLCJfbWV0YURlbXV4ZXIiLCJfdmlkZW9EZW11eGVyIiwiVmlkZW9EZW11eGVyIiwiX2F1ZGlvRGVtdXhlciIsIl9maXJzdFBhcnNlIiwiX2RhdGFPZmZzZXQiLCJyZXNvbHZlVGFnIiwiX3Jlc29sdmVBdWRpb1RhZyIsIl9yZXNvbHZlVmlkZW9UYWciLCJfcmVzb2x2ZU1ldGFUYWciLCJzIiwiaGFzTWV0YURhdGEiLCJMb2dnZXIiLCJvbk1ldGFEYXRhIiwibWV0YUZpZWxkcyIsImZpZWxkIiwibWV0YU9iaiIsIl9pbml0TWV0YURhdGEiLCJmaWxlcG9zaXRpb25zIiwidmlkZW9NZXRhRGF0YSIsImZpcnN0VUk4IiwiZnJhbWVUeXBlIiwiY29kZWNJZCIsIl9wYXJzZUFWQ1BhY2tldCIsInBhY2thZ2VUeXBlIiwiY3BzVGltZSIsIl9wYXJzZUFWQ0RlY29kZXJDb25maWd1cmF0aW9uUmVjb3JkIiwiX3BhcnNlQVZDVmlkZW9EYXRhIiwiYXZjYyIsInRpbWVzY2FsZSIsImF2Y1Byb2ZpbGUiLCJnZXRVaW50Iiwic3BzTGVuZ3RoIiwiaGFuZGxlciIsInNwcyIsInBhcnNlU1BTIiwiY29kZWNTaXplIiwicHJlc2VudFNpemUiLCJmcmFtZVJhdGUiLCJyZWZGcmFtZXMiLCJiaXREZXB0aCIsInByZXNlbnRXaWR0aCIsInByZXNlbnRIZWlnaHQiLCJjb2RlY0FyciIsInN1YmFycmF5IiwiY29kZWNTdHIiLCJqIiwiaGV4IiwicGFkU3RhcnQiLCJwcHMiLCJwcHNDb3VudCIsInBwc1NpemUiLCJuYWx1TGlzdCIsIm5hbHVMZW5TaXplIiwiaXNLZXlmcmFtZSIsInRlbXBSZWFkT2Zmc2V0IiwibmFsdVNpemUiLCJnZXRVaW50MjQiLCJ1bml0VHlwZSIsIm5hbHVVbml0IiwidmlkZW9TYW1wbGUiLCJ1bml0cyIsImNwcyIsIm51bSIsIkZNUDQiLCJ3cml0ZVVpbnQzMiIsImNvbnRlbnQiLCJpbml0Qm94IiwibXZoZCIsInRyYWsxIiwidmlkZW9UcmFrIiwidHJhazIiLCJhdWRpb1RyYWsiLCJtdmV4IiwiaXRlbSIsImJ5dGVzIiwidGtoZCIsIm1kaWEiLCJzYW1wbGVyYXRlIiwibWVkaWFUaW1lIiwibWRoZCIsImhkbHIiLCJtaW5mIiwiZXh0ZW5zaW9uIiwidm1oZCIsInNtaGQiLCJkaW5mIiwic3RibCIsImRyZWYiLCJzdHNkIiwic3R0cyIsInN0c2MiLCJzdHN6Iiwic3RjbyIsIm1wNGEiLCJhdmMxIiwiZXNkcyIsImNvbmZpZ2xlbiIsImNvbmNhdCIsImhTcGFjaW5nIiwidlNwYWNpbmciLCJhdmNjQnVmZmVyIiwiYnRydCIsInBhc3AiLCJtZWhkIiwidHJleCIsIm1maGQiLCJ0cmFmIiwic2VxdWVuY2UiLCJ0ZmhkIiwidGZkdCIsInNkdHAiLCJ0cnVuIiwic2R0cExlbmd0aCIsInNhbXBsZUNvdW50Iiwid3JpdGVPZmZzZXQiLCJ0cnVuQm94IiwibWRhdEJveCIsImNoYXJDb2RlQXQiLCJfZHRzQmFzZSIsIl9pc0R0c0Jhc2VJbml0ZWQiLCJfdmlkZW9NZXRhIiwiX2F1ZGlvTWV0YSIsIl9hdWRpb05leHREdHMiLCJfdmlkZW9OZXh0RHRzIiwiX3ZpZGVvU2VnbWVudExpc3QiLCJfYXVkaW9TZWdtZW50TGlzdCIsIl9maWxsU2lsZW5jZUZyYW1lIiwiX2R0c0Jhc2VJbml0ZWQiLCJjYWxjRHRzQmFzZSIsIl9yZW11eFZpZGVvIiwiX3JlbXV4QXVkaW8iLCJmdHlwIiwibW9vdiIsImF1ZGlvQmFzZSIsIkluZmluaXR5IiwidmlkZW9CYXNlIiwiZHRzQ29ycmVjdGlvbiIsImZpcnN0RHRzIiwibGFzdER0cyIsImZpcnN0UHRzIiwibGFzdFB0cyIsIm1wNFNhbXBsZXMiLCJ2aWRlb1NlZ21lbnQiLCJhdmNTYW1wbGUiLCJpc0VtcHR5IiwibGFzdFNlZ21lbnQiLCJnYXAiLCJsYXN0R2FwIiwiX3VuaXRzIiwibWRhdFNhbXBsZSIsInNhbXBsZUR1cmF0aW9uIiwibmV4dER0cyIsImFkZFJBUCIsImZpcnN0IiwibW9vZk1kYXQiLCJtb29mIiwibWRhdCIsImFwcGVuZCIsInNpbGVudER1cmF0aW9uIiwiaXNGaXJzdER0c0luaXRlZCIsIm5lZWRTaWxlbnRGcmFtZSIsImdldExhc3RTYW1wbGVCZWZvcmUiLCJzaWxlbnRGcmFtZSIsImluaXRTaWxlbnRBdWRpbyIsIm1wNFNhbXBsZSIsImN0cyIsImF1ZGlvU2VnbWVudCIsImdldFNpbGVudEZyYW1lIiwiUmVtdXhlciIsIl9oZWFkZXJzIiwiSGVhZGVycyIsImhlYWRlcnMiLCJtZXRob2QiLCJjYWNoZSIsIl9zdG9wIiwicmVxdWVzdCIsIlJlcXVlc3QiLCJjYWxsYmFjayIsInJlYWRlciIsInJlYWQiLCJwcm9tIiwicmVqZWN0IiwiaXNUaW1lb3V0IiwiZmV0Y2giLCJyZXMiLCJnZXRSZWFkZXIiLCJMb2FkQ2xzIiwiRmV0Y2hMb2FkZXIiLCJYSFJMb2FkZXIiLCJsb2FkZXIiLCJpc0NhbmNlbGVkIiwicXVldWUiLCJ1cGRhdGUiLCJmaWx0ZXIiLCJRdWV1ZSIsInNlbmRlZCIsIndhaXQiLCJsaW1pdCIsImNvbXBsZXRlIiwiaXNTdG9wcGVkIiwibm93IiwiUmFuZ2UiLCJzdGF0dXMiLCJvayIsInN0YXR1c1RleHQiLCJhcnJheUJ1ZmZlciIsIl9wcm9taXNlIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwic2V0UmVxdWVzdEhlYWRlciIsIm9uYWJvcnQiLCJvbmxvYWQiLCJyZXNwb25zZSIsIm9uZXJyb3IiLCJfeGhyIiwic2VuZCIsImFib3J0IiwiY29udGV4dCIsIl9kdiIsIl9jb250ZXh0IiwiaW5pdFByb3h5IiwiaXNIaWdoIiwicmVhZFNpemUiLCJudW1Ub0FuZCIsImJlZ2luIiwiYnl0ZXNBdmFpbGFibGUiLCJ3b3JkIiwiYml0c0F2YWlsYWJsZSIsIndvcmtpbmdCeXRlcyIsImF2YWlsYWJsZUJ5dGVzIiwic2tpcEJ5dGVzIiwibG9hZFdvcmQiLCJiaXRzIiwidmFsdSIsInJlYWRCaXRzIiwibGVhZGluZ1plcm9Db3VudCIsInNraXBMWiIsInNraXBCaXRzIiwiY2x6IiwicmVhZFVFRyIsImxhc3RTY2FsZSIsIm5leHRTY2FsZSIsImRlbHRhU2NhbGUiLCJyZWFkRUciLCJmcmFtZUNyb3BMZWZ0T2Zmc2V0IiwiZnJhbWVDcm9wUmlnaHRPZmZzZXQiLCJmcmFtZUNyb3BUb3BPZmZzZXQiLCJmcmFtZUNyb3BCb3R0b21PZmZzZXQiLCJjb2RlY1dpZHRoIiwiY29kZWNIZWlnaHQiLCJudW1SZWZGcmFtZXNJblBpY09yZGVyQ250Q3ljbGUiLCJwaWNXaWR0aEluTWJzTWludXMxIiwicGljSGVpZ2h0SW5NYXBVbml0c01pbnVzMSIsImZyYW1lTWJzT25seUZsYWciLCJzY2FsaW5nTGlzdENvdW50IiwicmVhZFVCeXRlIiwicmVhZEJvb2xlYW4iLCJza2lwRUciLCJza2lwVUVHIiwic2tpcFNjYWxpbmdMaXN0IiwiY2hyb21hRm9ybWF0SWRjIiwiY2hyb21hRm9ybWF0cyIsImJpdERlcHRoTHVtYSIsInByb2ZpbGVJZGNzIiwiaW5jbHVkZXMiLCJwaWNPcmRlckNudFR5cGUiLCJmcHNGaXhlZCIsImFzcGVjdFJhdGlvSWRjIiwibnVtVW5pdEluVGljayIsImNyb3BVbml0WCIsImNyb3BVbml0WSIsInN1YldjIiwic3ViSGMiLCJwaXhlbFNjYWxlIiwiY2VpbCIsIm5hdGl2ZVNsaWNlIiwiT2JzZXJ2ZXIiLCJmbklkIiwiX2xpc3RlbmVySWRNYXAiLCJfbGlzdGVuZXJzIiwiX2dldExpc3RlbmVyc0J5S2V5IiwiX2dldExpc3RlbmVyQnlJZCIsIl90aGlzIiwib25jZUZ1bmMiLCJ1aW50OGFycmF5Iiwib3V0IiwiaW5wdXQiLCJfY2hlY2tDb250aW51YXRpb24iLCJ1Y3M0IiwiY2hlY2tMZW5ndGgiLCJhcnJheSIsImRlYm91bmNlIiwiZnVuYyIsImltbWVkaWF0ZSIsImRlYm91bmNlZCIsImNsZWFyVGltZW91dCIsImNhbGxOb3ciLCJjYWNoZVdyYXBwZXIiLCJyZWR1Y2UiLCJwcmUiLCJjdXIiLCJsZSIsImJ1ZiIsInNldEludDE2IiwiSW50MTZBcnJheSIsImRldmljZSIsImlzUGMiLCJpc1RhYmxldCIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJyZWciLCJpZSIsImZpcmZveCIsImNocm9tZSIsIm9wZXJhIiwic2FmYXJpIiwiaXNXaW5kb3dzUGhvbmUiLCJpc1N5bWJpYW4iLCJpc0ZpcmVGb3giLCJpc1Bob25lIiwidGVtcCIsInBhZFN0YXJ0NEhleCIsImhleE51bSIsImhleFN0ciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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QWhDLENBQWQ7QUFDSCxpQkFGRCxNQUVPO0FBQ0g5RCxrQ0FBTy9rQixLQUFQLENBQWE2b0IsSUFBYjtBQUNIO0FBQ0osYUFORDtBQU9IOzs7b0NBQ21COXNCLEssRUFBTztBQUN2QixtQkFBTyxJQUFJb2QsVUFBSixDQUFlLENBQ2xCcGQsU0FBUyxFQURTLEVBRWpCQSxTQUFTLEVBQVYsR0FBZ0IsSUFGRSxFQUdqQkEsU0FBUyxDQUFWLEdBQWUsSUFIRyxFQUlsQkEsUUFBUSxJQUpVLENBQWYsQ0FBUDtBQU1IOzs7a0NBQ2lCb0IsRyxFQUFLO0FBQ25CLGdCQUFJcTdCLE9BQU8sRUFBWDtBQUNBLHFCQUFTQyxZQUFULENBQXVCQyxNQUF2QixFQUErQjtBQUMzQixvQkFBSUMsU0FBU0QsT0FBT3oxQixRQUFQLENBQWdCLEVBQWhCLENBQWI7QUFDQSx1QkFBTzAxQixPQUFPeFIsUUFBUCxDQUFnQixDQUFoQixFQUFtQixHQUFuQixDQUFQO0FBQ0g7QUFDRGhxQixnQkFBSWdELE9BQUosQ0FBWSxlQUFPO0FBQ2ZxNEIsd0JBQVFDLGFBQWF2USxHQUFiLENBQVI7QUFDSCxhQUZEO0FBR0EsbUJBQU9wVixTQUFTMGxCLElBQVQsRUFBZSxFQUFmLENBQVA7QUFDSDs7Ozs7O2tCQUdVeGlCLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENmLHNEIiwiZmlsZSI6ImluZGV4LmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInhncGxheWVyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInhncGxheWVyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInhncGxheWVyLWZsdlwiXSA9IGZhY3RvcnkocmVxdWlyZShcInhncGxheWVyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ4Z3BsYXllci1mbHZcIl0gPSBmYWN0b3J5KHJvb3RbXCJ4Z3BsYXllclwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfeGdwbGF5ZXJfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoUmVzdWx0Q29uc3RydWN0b3IpIHtcbiAgdmFyIHRvdGFsTGVuZ3RoID0gMDtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJyYXlzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFycmF5c1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBhcnJheXNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICB2YXIgYXJyID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgIHRvdGFsTGVuZ3RoICs9IGFyci5sZW5ndGg7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciByZXN1bHQgPSBuZXcgUmVzdWx0Q29uc3RydWN0b3IodG90YWxMZW5ndGgpO1xuICB2YXIgb2Zmc2V0ID0gMDtcbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IGFycmF5c1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgdmFyIF9hcnIgPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgIHJlc3VsdC5zZXQoX2Fyciwgb2Zmc2V0KTtcbiAgICAgIG9mZnNldCArPSBfYXJyLmxlbmd0aDtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuKSB7XG4gICAgICAgIF9pdGVyYXRvcjIucmV0dXJuKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjIpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jb25jYXQgPSByZXF1aXJlKCcuL2NvbmNhdCcpO1xuXG52YXIgX2NvbmNhdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb25jYXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jb25jYXQyLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc1ZhbHVlICAgICAgICAgPSByZXF1aXJlKFwidHlwZS92YWx1ZS9pc1wiKVxuICAsIGlzUGxhaW5GdW5jdGlvbiA9IHJlcXVpcmUoXCJ0eXBlL3BsYWluLWZ1bmN0aW9uL2lzXCIpXG4gICwgYXNzaWduICAgICAgICAgID0gcmVxdWlyZShcImVzNS1leHQvb2JqZWN0L2Fzc2lnblwiKVxuICAsIG5vcm1hbGl6ZU9wdHMgICA9IHJlcXVpcmUoXCJlczUtZXh0L29iamVjdC9ub3JtYWxpemUtb3B0aW9uc1wiKVxuICAsIGNvbnRhaW5zICAgICAgICA9IHJlcXVpcmUoXCJlczUtZXh0L3N0cmluZy8jL2NvbnRhaW5zXCIpO1xuXG52YXIgZCA9IChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkc2NyLCB2YWx1ZS8qLCBvcHRpb25zKi8pIHtcblx0dmFyIGMsIGUsIHcsIG9wdGlvbnMsIGRlc2M7XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMiB8fCB0eXBlb2YgZHNjciAhPT0gXCJzdHJpbmdcIikge1xuXHRcdG9wdGlvbnMgPSB2YWx1ZTtcblx0XHR2YWx1ZSA9IGRzY3I7XG5cdFx0ZHNjciA9IG51bGw7XG5cdH0gZWxzZSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1syXTtcblx0fVxuXHRpZiAoaXNWYWx1ZShkc2NyKSkge1xuXHRcdGMgPSBjb250YWlucy5jYWxsKGRzY3IsIFwiY1wiKTtcblx0XHRlID0gY29udGFpbnMuY2FsbChkc2NyLCBcImVcIik7XG5cdFx0dyA9IGNvbnRhaW5zLmNhbGwoZHNjciwgXCJ3XCIpO1xuXHR9IGVsc2Uge1xuXHRcdGMgPSB3ID0gdHJ1ZTtcblx0XHRlID0gZmFsc2U7XG5cdH1cblxuXHRkZXNjID0geyB2YWx1ZTogdmFsdWUsIGNvbmZpZ3VyYWJsZTogYywgZW51bWVyYWJsZTogZSwgd3JpdGFibGU6IHcgfTtcblx0cmV0dXJuICFvcHRpb25zID8gZGVzYyA6IGFzc2lnbihub3JtYWxpemVPcHRzKG9wdGlvbnMpLCBkZXNjKTtcbn0pO1xuXG5kLmdzID0gZnVuY3Rpb24gKGRzY3IsIGdldCwgc2V0LyosIG9wdGlvbnMqLykge1xuXHR2YXIgYywgZSwgb3B0aW9ucywgZGVzYztcblx0aWYgKHR5cGVvZiBkc2NyICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0b3B0aW9ucyA9IHNldDtcblx0XHRzZXQgPSBnZXQ7XG5cdFx0Z2V0ID0gZHNjcjtcblx0XHRkc2NyID0gbnVsbDtcblx0fSBlbHNlIHtcblx0XHRvcHRpb25zID0gYXJndW1lbnRzWzNdO1xuXHR9XG5cdGlmICghaXNWYWx1ZShnZXQpKSB7XG5cdFx0Z2V0ID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKCFpc1BsYWluRnVuY3Rpb24oZ2V0KSkge1xuXHRcdG9wdGlvbnMgPSBnZXQ7XG5cdFx0Z2V0ID0gc2V0ID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKCFpc1ZhbHVlKHNldCkpIHtcblx0XHRzZXQgPSB1bmRlZmluZWQ7XG5cdH0gZWxzZSBpZiAoIWlzUGxhaW5GdW5jdGlvbihzZXQpKSB7XG5cdFx0b3B0aW9ucyA9IHNldDtcblx0XHRzZXQgPSB1bmRlZmluZWQ7XG5cdH1cblx0aWYgKGlzVmFsdWUoZHNjcikpIHtcblx0XHRjID0gY29udGFpbnMuY2FsbChkc2NyLCBcImNcIik7XG5cdFx0ZSA9IGNvbnRhaW5zLmNhbGwoZHNjciwgXCJlXCIpO1xuXHR9IGVsc2Uge1xuXHRcdGMgPSB0cnVlO1xuXHRcdGUgPSBmYWxzZTtcblx0fVxuXG5cdGRlc2MgPSB7IGdldDogZ2V0LCBzZXQ6IHNldCwgY29uZmlndXJhYmxlOiBjLCBlbnVtZXJhYmxlOiBlIH07XG5cdHJldHVybiAhb3B0aW9ucyA/IGRlc2MgOiBhc3NpZ24obm9ybWFsaXplT3B0cyhvcHRpb25zKSwgZGVzYyk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eS1mdW5jdGlvblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7fTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2lzLWltcGxlbWVudGVkXCIpKCkgPyBPYmplY3QuYXNzaWduIDogcmVxdWlyZShcIi4vc2hpbVwiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ24sIG9iajtcblx0aWYgKHR5cGVvZiBhc3NpZ24gIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGZhbHNlO1xuXHRvYmogPSB7IGZvbzogXCJyYXpcIiB9O1xuXHRhc3NpZ24ob2JqLCB7IGJhcjogXCJkd2FcIiB9LCB7IHRyenk6IFwidHJ6eVwiIH0pO1xuXHRyZXR1cm4gb2JqLmZvbyArIG9iai5iYXIgKyBvYmoudHJ6eSA9PT0gXCJyYXpkd2F0cnp5XCI7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBrZXlzICA9IHJlcXVpcmUoXCIuLi9rZXlzXCIpXG4gICwgdmFsdWUgPSByZXF1aXJlKFwiLi4vdmFsaWQtdmFsdWVcIilcbiAgLCBtYXggICA9IE1hdGgubWF4O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkZXN0LCBzcmMvKiwg4oCmc3JjbiovKSB7XG5cdHZhciBlcnJvciwgaSwgbGVuZ3RoID0gbWF4KGFyZ3VtZW50cy5sZW5ndGgsIDIpLCBhc3NpZ247XG5cdGRlc3QgPSBPYmplY3QodmFsdWUoZGVzdCkpO1xuXHRhc3NpZ24gPSBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGRlc3Rba2V5XSA9IHNyY1trZXldO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZTtcblx0XHR9XG5cdH07XG5cdGZvciAoaSA9IDE7IGkgPCBsZW5ndGg7ICsraSkge1xuXHRcdHNyYyA9IGFyZ3VtZW50c1tpXTtcblx0XHRrZXlzKHNyYykuZm9yRWFjaChhc3NpZ24pO1xuXHR9XG5cdGlmIChlcnJvciAhPT0gdW5kZWZpbmVkKSB0aHJvdyBlcnJvcjtcblx0cmV0dXJuIGRlc3Q7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdW5kZWZpbmVkID0gcmVxdWlyZShcIi4uL2Z1bmN0aW9uL25vb3BcIikoKTsgLy8gU3VwcG9ydCBFUzMgZW5naW5lc1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbCAhPT0gX3VuZGVmaW5lZCAmJiB2YWwgIT09IG51bGw7IH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9pcy1pbXBsZW1lbnRlZFwiKSgpID8gT2JqZWN0LmtleXMgOiByZXF1aXJlKFwiLi9zaGltXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHR0cnkge1xuXHRcdE9iamVjdC5rZXlzKFwicHJpbWl0aXZlXCIpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc1ZhbHVlID0gcmVxdWlyZShcIi4uL2lzLXZhbHVlXCIpO1xuXG52YXIga2V5cyA9IE9iamVjdC5rZXlzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QpIHsgcmV0dXJuIGtleXMoaXNWYWx1ZShvYmplY3QpID8gT2JqZWN0KG9iamVjdCkgOiBvYmplY3QpOyB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc1ZhbHVlID0gcmVxdWlyZShcIi4vaXMtdmFsdWVcIik7XG5cbnZhciBmb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2gsIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG5cbnZhciBwcm9jZXNzID0gZnVuY3Rpb24gKHNyYywgb2JqKSB7XG5cdHZhciBrZXk7XG5cdGZvciAoa2V5IGluIHNyYykgb2JqW2tleV0gPSBzcmNba2V5XTtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0czEvKiwg4oCmb3B0aW9ucyovKSB7XG5cdHZhciByZXN1bHQgPSBjcmVhdGUobnVsbCk7XG5cdGZvckVhY2guY2FsbChhcmd1bWVudHMsIGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdFx0aWYgKCFpc1ZhbHVlKG9wdGlvbnMpKSByZXR1cm47XG5cdFx0cHJvY2VzcyhPYmplY3Qob3B0aW9ucyksIHJlc3VsdCk7XG5cdH0pO1xuXHRyZXR1cm4gcmVzdWx0O1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbikge1xuXHRpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoZm4gKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcblx0cmV0dXJuIGZuO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNWYWx1ZSA9IHJlcXVpcmUoXCIuL2lzLXZhbHVlXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRpZiAoIWlzVmFsdWUodmFsdWUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSBudWxsIG9yIHVuZGVmaW5lZFwiKTtcblx0cmV0dXJuIHZhbHVlO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2lzLWltcGxlbWVudGVkXCIpKCkgPyBTdHJpbmcucHJvdG90eXBlLmNvbnRhaW5zIDogcmVxdWlyZShcIi4vc2hpbVwiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3RyID0gXCJyYXpkd2F0cnp5XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRpZiAodHlwZW9mIHN0ci5jb250YWlucyAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiBzdHIuY29udGFpbnMoXCJkd2FcIikgPT09IHRydWUgJiYgc3RyLmNvbnRhaW5zKFwiZm9vXCIpID09PSBmYWxzZTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGluZGV4T2YgPSBTdHJpbmcucHJvdG90eXBlLmluZGV4T2Y7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlYXJjaFN0cmluZy8qLCBwb3NpdGlvbiovKSB7XG5cdHJldHVybiBpbmRleE9mLmNhbGwodGhpcywgc2VhcmNoU3RyaW5nLCBhcmd1bWVudHNbMV0pID4gLTE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZCAgICAgICAgPSByZXF1aXJlKCdkJylcbiAgLCBjYWxsYWJsZSA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L3ZhbGlkLWNhbGxhYmxlJylcblxuICAsIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LCBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGxcbiAgLCBjcmVhdGUgPSBPYmplY3QuY3JlYXRlLCBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eVxuICAsIGRlZmluZVByb3BlcnRpZXMgPSBPYmplY3QuZGVmaW5lUHJvcGVydGllc1xuICAsIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAsIGRlc2NyaXB0b3IgPSB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlIH1cblxuICAsIG9uLCBvbmNlLCBvZmYsIGVtaXQsIG1ldGhvZHMsIGRlc2NyaXB0b3JzLCBiYXNlO1xuXG5vbiA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xuXHR2YXIgZGF0YTtcblxuXHRjYWxsYWJsZShsaXN0ZW5lcik7XG5cblx0aWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsICdfX2VlX18nKSkge1xuXHRcdGRhdGEgPSBkZXNjcmlwdG9yLnZhbHVlID0gY3JlYXRlKG51bGwpO1xuXHRcdGRlZmluZVByb3BlcnR5KHRoaXMsICdfX2VlX18nLCBkZXNjcmlwdG9yKTtcblx0XHRkZXNjcmlwdG9yLnZhbHVlID0gbnVsbDtcblx0fSBlbHNlIHtcblx0XHRkYXRhID0gdGhpcy5fX2VlX187XG5cdH1cblx0aWYgKCFkYXRhW3R5cGVdKSBkYXRhW3R5cGVdID0gbGlzdGVuZXI7XG5cdGVsc2UgaWYgKHR5cGVvZiBkYXRhW3R5cGVdID09PSAnb2JqZWN0JykgZGF0YVt0eXBlXS5wdXNoKGxpc3RlbmVyKTtcblx0ZWxzZSBkYXRhW3R5cGVdID0gW2RhdGFbdHlwZV0sIGxpc3RlbmVyXTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbm9uY2UgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcblx0dmFyIG9uY2UsIHNlbGY7XG5cblx0Y2FsbGFibGUobGlzdGVuZXIpO1xuXHRzZWxmID0gdGhpcztcblx0b24uY2FsbCh0aGlzLCB0eXBlLCBvbmNlID0gZnVuY3Rpb24gKCkge1xuXHRcdG9mZi5jYWxsKHNlbGYsIHR5cGUsIG9uY2UpO1xuXHRcdGFwcGx5LmNhbGwobGlzdGVuZXIsIHRoaXMsIGFyZ3VtZW50cyk7XG5cdH0pO1xuXG5cdG9uY2UuX19lZU9uY2VMaXN0ZW5lcl9fID0gbGlzdGVuZXI7XG5cdHJldHVybiB0aGlzO1xufTtcblxub2ZmID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XG5cdHZhciBkYXRhLCBsaXN0ZW5lcnMsIGNhbmRpZGF0ZSwgaTtcblxuXHRjYWxsYWJsZShsaXN0ZW5lcik7XG5cblx0aWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsICdfX2VlX18nKSkgcmV0dXJuIHRoaXM7XG5cdGRhdGEgPSB0aGlzLl9fZWVfXztcblx0aWYgKCFkYXRhW3R5cGVdKSByZXR1cm4gdGhpcztcblx0bGlzdGVuZXJzID0gZGF0YVt0eXBlXTtcblxuXHRpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ29iamVjdCcpIHtcblx0XHRmb3IgKGkgPSAwOyAoY2FuZGlkYXRlID0gbGlzdGVuZXJzW2ldKTsgKytpKSB7XG5cdFx0XHRpZiAoKGNhbmRpZGF0ZSA9PT0gbGlzdGVuZXIpIHx8XG5cdFx0XHRcdFx0KGNhbmRpZGF0ZS5fX2VlT25jZUxpc3RlbmVyX18gPT09IGxpc3RlbmVyKSkge1xuXHRcdFx0XHRpZiAobGlzdGVuZXJzLmxlbmd0aCA9PT0gMikgZGF0YVt0eXBlXSA9IGxpc3RlbmVyc1tpID8gMCA6IDFdO1xuXHRcdFx0XHRlbHNlIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGlmICgobGlzdGVuZXJzID09PSBsaXN0ZW5lcikgfHxcblx0XHRcdFx0KGxpc3RlbmVycy5fX2VlT25jZUxpc3RlbmVyX18gPT09IGxpc3RlbmVyKSkge1xuXHRcdFx0ZGVsZXRlIGRhdGFbdHlwZV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5lbWl0ID0gZnVuY3Rpb24gKHR5cGUpIHtcblx0dmFyIGksIGwsIGxpc3RlbmVyLCBsaXN0ZW5lcnMsIGFyZ3M7XG5cblx0aWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsICdfX2VlX18nKSkgcmV0dXJuO1xuXHRsaXN0ZW5lcnMgPSB0aGlzLl9fZWVfX1t0eXBlXTtcblx0aWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcblxuXHRpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ29iamVjdCcpIHtcblx0XHRsID0gYXJndW1lbnRzLmxlbmd0aDtcblx0XHRhcmdzID0gbmV3IEFycmF5KGwgLSAxKTtcblx0XHRmb3IgKGkgPSAxOyBpIDwgbDsgKytpKSBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcblxuXHRcdGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgpO1xuXHRcdGZvciAoaSA9IDA7IChsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXSk7ICsraSkge1xuXHRcdFx0YXBwbHkuY2FsbChsaXN0ZW5lciwgdGhpcywgYXJncyk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdGNhc2UgMTpcblx0XHRcdGNhbGwuY2FsbChsaXN0ZW5lcnMsIHRoaXMpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0Y2FsbC5jYWxsKGxpc3RlbmVycywgdGhpcywgYXJndW1lbnRzWzFdKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdGNhbGwuY2FsbChsaXN0ZW5lcnMsIHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRsID0gYXJndW1lbnRzLmxlbmd0aDtcblx0XHRcdGFyZ3MgPSBuZXcgQXJyYXkobCAtIDEpO1xuXHRcdFx0Zm9yIChpID0gMTsgaSA8IGw7ICsraSkge1xuXHRcdFx0XHRhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdH1cblx0XHRcdGFwcGx5LmNhbGwobGlzdGVuZXJzLCB0aGlzLCBhcmdzKTtcblx0XHR9XG5cdH1cbn07XG5cbm1ldGhvZHMgPSB7XG5cdG9uOiBvbixcblx0b25jZTogb25jZSxcblx0b2ZmOiBvZmYsXG5cdGVtaXQ6IGVtaXRcbn07XG5cbmRlc2NyaXB0b3JzID0ge1xuXHRvbjogZChvbiksXG5cdG9uY2U6IGQob25jZSksXG5cdG9mZjogZChvZmYpLFxuXHRlbWl0OiBkKGVtaXQpXG59O1xuXG5iYXNlID0gZGVmaW5lUHJvcGVydGllcyh7fSwgZGVzY3JpcHRvcnMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbiAobykge1xuXHRyZXR1cm4gKG8gPT0gbnVsbCkgPyBjcmVhdGUoYmFzZSkgOiBkZWZpbmVQcm9wZXJ0aWVzKE9iamVjdChvKSwgZGVzY3JpcHRvcnMpO1xufTtcbmV4cG9ydHMubWV0aG9kcyA9IG1ldGhvZHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZShcIi4uL3Byb3RvdHlwZS9pc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG5cblx0aWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBcImxlbmd0aFwiKSkgcmV0dXJuIGZhbHNlO1xuXG5cdHRyeSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZS5sZW5ndGggIT09IFwibnVtYmVyXCIpIHJldHVybiBmYWxzZTtcblx0XHRpZiAodHlwZW9mIHZhbHVlLmNhbGwgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGZhbHNlO1xuXHRcdGlmICh0eXBlb2YgdmFsdWUuYXBwbHkgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGZhbHNlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiAhaXNQcm90b3R5cGUodmFsdWUpO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNWYWx1ZSA9IHJlcXVpcmUoXCIuLi92YWx1ZS9pc1wiKTtcblxuLy8gcHJldHRpZXItaWdub3JlXG52YXIgcG9zc2libGVUeXBlcyA9IHsgXCJvYmplY3RcIjogdHJ1ZSwgXCJmdW5jdGlvblwiOiB0cnVlLCBcInVuZGVmaW5lZFwiOiB0cnVlIC8qIGRvY3VtZW50LmFsbCAqLyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRpZiAoIWlzVmFsdWUodmFsdWUpKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHBvc3NpYmxlVHlwZXMsIHR5cGVvZiB2YWx1ZSk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZShcIi4uL2Z1bmN0aW9uL2lzXCIpO1xuXG52YXIgY2xhc3NSZSA9IC9eXFxzKmNsYXNzW1xcc3svfV0vLCBmdW5jdGlvblRvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRpZiAoIWlzRnVuY3Rpb24odmFsdWUpKSByZXR1cm4gZmFsc2U7XG5cdGlmIChjbGFzc1JlLnRlc3QoZnVuY3Rpb25Ub1N0cmluZy5jYWxsKHZhbHVlKSkpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIHRydWU7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoXCIuLi9vYmplY3QvaXNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdGlmICghaXNPYmplY3QodmFsdWUpKSByZXR1cm4gZmFsc2U7XG5cdHRyeSB7XG5cdFx0aWYgKCF2YWx1ZS5jb25zdHJ1Y3RvcikgcmV0dXJuIGZhbHNlO1xuXHRcdHJldHVybiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPT09IHZhbHVlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBFUzMgc2FmZVxudmFyIF91bmRlZmluZWQgPSB2b2lkIDA7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZSAhPT0gX3VuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbDsgfTtcbiIsIi8qKlxuICogQGF1dGhvciBmdXl1aGFvXG4gKi9cbmltcG9ydCBNYWluUGFyc2VyIGZyb20gJy4vcGFyc2UvTWFpblBhcnNlcidcbmltcG9ydCBNU0UgZnJvbSAnLi9wYXJzZS9NU0UnXG5pbXBvcnQgVm9kVGFzayBmcm9tICcuL3Rhc2tzL1ZvZFRhc2snXG5pbXBvcnQgZ2V0RGVmYXVsdENvbmYgZnJvbSAnLi9jb25zdGFudHMvY29uZmlnJ1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsdiB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zLCBwbGF5ZXIpIHtcbiAgICBkZWJ1Z2dlclxuICAgIHRoaXMuX3BsYXllciA9IHBsYXllclxuICAgIHRoaXMuX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBnZXREZWZhdWx0Q29uZigpLCBvcHRpb25zKVxuICAgIC8vIOecn+ato+eahGZsduaSreaUvuWZqFxuICAgIHRoaXMuZmx2UGxheWVyID0gbmV3IE1haW5QYXJzZXIodGhpcy5fb3B0aW9ucywgcGxheWVyKVxuICAgIHRoaXMubXNlID0gbmV3IE1TRShwbGF5ZXIudmlkZW8pXG4gICAgdGhpcy5pc1NlZWtpbmcgPSBmYWxzZVxuICAgIHRoaXMuaXNEYXRhTG9hZGluZyA9IGZhbHNlXG4gICAgdGhpcy50ZW1wQ3VycmVudFRpbWUgPSAwXG4gICAgdGhpcy50ZW1wRmx2UGxheWVyID0gbnVsbFxuICAgIHRoaXMuaXNDaGFuZ2luZ1NyYyA9IGZhbHNlXG4gICAgdGhpcy5pbml0UGxheWVyRXZlbnRzKHBsYXllciwgdGhpcy5fb3B0aW9ucylcbiAgICB0aGlzLmluaXRGbHZQbGF5ZXJFdmVudHModGhpcy5mbHZQbGF5ZXIsIHRoaXMubXNlKVxuICAgIHRoaXMuaW5pdE1zZUV2ZW50cyh0aGlzLm1zZSwgdGhpcy5mbHZQbGF5ZXIpXG4gIH1cblxuICBsb2FkICgpIHtcbiAgICB0aGlzLmZsdlBsYXllci5zdGFydExvYWREYXRhKClcbiAgfVxuXG4gIGluaXRQbGF5ZXJFdmVudHMgKHBsYXllciwgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgbXNlIH0gPSB0aGlzXG4gICAgcGxheWVyLm1zZSA9IG1zZVxuICAgIHRoaXMuaGFuZGxlU2Vla2luZyA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzQ2hhbmdpbmdTcmMpIHtcbiAgICAgICAgdGhpcy5pc0NoYW5naW5nU3JjID0gZmFsc2VcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCB7IGJ1ZmZlcmVkLCBjdXJyZW50VGltZSB9ID0gcGxheWVyXG4gICAgICBsZXQgaXNCdWZmZXJlZCA9IGZhbHNlXG4gICAgICBpZiAoYnVmZmVyZWQubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBidWZmZXJlZC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGlmIChjdXJyZW50VGltZSA+IGJ1ZmZlcmVkLnN0YXJ0KGkpICYmIGN1cnJlbnRUaW1lIDwgYnVmZmVyZWQuZW5kKGkpKSB7XG4gICAgICAgICAgICBpc0J1ZmZlcmVkID0gdHJ1ZVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpc0J1ZmZlcmVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgVm9kVGFzay5jbGVhcigpXG4gICAgICBpZiAoIXRoaXMuaXNTZWVrYWJsZSkge1xuICAgICAgICB0aGlzLl9wbGF5ZXIuY3VycmVudFRpbWUgPSB0aGlzLnRlbXBDdXJyZW50VGltZVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMuZmx2UGxheWVyLnNlZWsocGxheWVyLmN1cnJlbnRUaW1lKVxuICAgICAgdGhpcy5pc1NlZWtpbmcgPSB0cnVlXG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5pc0xpdmUpIHtcbiAgICAgIHBsYXllci5vbignc2Vla2luZycsICgpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVTZWVraW5nKClcbiAgICAgIH0pXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlVGltZVVwZGF0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMudGVtcEN1cnJlbnRUaW1lID0gcGxheWVyLmN1cnJlbnRUaW1lXG4gICAgICBpZiAoIXRoaXMuaXNTZWVraW5nICYmIHRoaXMuZmx2UGxheWVyLmlzTWVkaWFJbmZvUmVhZHkgJiYgIXRoaXMudGVtcEZsdlBsYXllcikge1xuICAgICAgICB0aGlzLnByb2dyZXNzQ2hlY2tlcihwbGF5ZXIpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5pc0xpdmUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLmlzRW5kZWQocGxheWVyLCB0aGlzLmZsdlBsYXllcilcbiAgICB9XG4gICAgLy8g54K55pKt5q2j5bi45pKt5pS+5pu05paw6L+b5bqmXG4gICAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgKCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVUaW1lVXBkYXRlKClcbiAgICB9KVxuICAgIHBsYXllci5fcmVwbGF5ID0gKCkgPT4ge1xuICAgICAgcGxheWVyLm1zZS5kZXN0cm95KClcbiAgICAgIFZvZFRhc2suY2xlYXIoKVxuICAgICAgY29uc3QgX21zZSA9IG5ldyBNU0UocGxheWVyLnZpZGVvKVxuICAgICAgdGhpcy5mbHZQbGF5ZXIucmVwbGF5KClcblxuICAgICAgbXNlLm9uKCdzb3VyY2VvcGVuJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmZsdlBsYXllci5pc1NvdXJjZU9wZW4gPSB0cnVlXG4gICAgICAgIG1zZS5hcHBlbmRCdWZmZXIodGhpcy5mbHZQbGF5ZXIuZnR5cF9tb292LmJ1ZmZlcilcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcGxheWVyLnBsYXkoKVxuICAgICAgICB9LCAwKVxuICAgICAgICBtc2Uub24oJ3VwZGF0ZWVuZCcsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB7cGVuZGluZ0ZyYWdtZW50cywgaGFzUGVuZGluZ0ZyYWdtZW50c30gPSB0aGlzLmZsdlBsYXllclxuICAgICAgICAgIHRoaXMuaXNTZWVraW5nID0gZmFsc2VcbiAgICAgICAgICBpZiAoaGFzUGVuZGluZ0ZyYWdtZW50cykge1xuICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBwZW5kaW5nRnJhZ21lbnRzLnNoaWZ0KClcbiAgICAgICAgICAgIGlmICghbXNlLmFwcGVuZEJ1ZmZlcihmcmFnbWVudC5kYXRhKSkge1xuICAgICAgICAgICAgICBwZW5kaW5nRnJhZ21lbnRzLnVuc2hpZnQoZnJhZ21lbnQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwbGF5ZXIuZW1pdCgnY2FjaGV1cGRhdGUnLCBwbGF5ZXIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIG1zZS5vbignZXJyb3InLCAoZSkgPT4ge1xuICAgICAgICBwbGF5ZXIuZW1pdCgnZXJyb3InLCBlKVxuICAgICAgfSlcblxuICAgICAgcGxheWVyLm1zZSA9IG1zZVxuICAgICAgcGxheWVyLnZpZGVvLnNyYyA9IHRoaXMubXNlLnVybFxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBwbGF5ZXIuc3dpdGNoVVJMID0gKHVybCkgPT4ge1xuICAgICAgdGhpcy5fb3B0aW9ucy51cmwgPSB1cmxcbiAgICAgIC8vIHRoaXMuZmx2UGxheWVyLnVuYmluZEV2ZW50cygpXG4gICAgICBpZiAoIXBsYXllci5jb25maWcuaXNMaXZlKSB7XG4gICAgICAgIFZvZFRhc2suY2xlYXIoKVxuICAgICAgICBjb25zdCB0ZW1wRmx2UGxheWVyID0gdGhpcy50ZW1wRmx2UGxheWVyID0gbmV3IE1haW5QYXJzZXIodGhpcy5fb3B0aW9ucywgcGxheWVyKVxuXG4gICAgICAgIHRlbXBGbHZQbGF5ZXIuaXNTb3VyY2VPcGVuID0gdHJ1ZVxuICAgICAgICB0ZW1wRmx2UGxheWVyLmlzVGVtcFBsYXllciA9IHRydWVcbiAgICAgICAgdGhpcy5pbml0Rmx2UGxheWVyRXZlbnRzKHRlbXBGbHZQbGF5ZXIsIG1zZSlcbiAgICAgICAgdGVtcEZsdlBsYXllci5oYW5kbGVNZWRpYUZyYWdtZW50ID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNTZWVraW5nID0gZmFsc2VcbiAgICAgICAgICB0aGlzLnVuYmluZEZsdlBsYXllckV2ZW50cyh0aGlzLmZsdlBsYXllcilcbiAgICAgICAgICB0aGlzLmZsdlBsYXllci5kZXN0cm95KClcbiAgICAgICAgICB0aGlzLmZsdlBsYXllciA9IHRlbXBGbHZQbGF5ZXJcbiAgICAgICAgICB0aGlzLnRlbXBGbHZQbGF5ZXIgPSBudWxsXG5cbiAgICAgICAgICBtc2UuYXBwZW5kQnVmZmVyKHRlbXBGbHZQbGF5ZXIuZnR5cF9tb292KVxuICAgICAgICAgIHRlbXBGbHZQbGF5ZXIuaGFuZGxlTWVkaWFGcmFnbWVudCA9IChmcmFnbWVudCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1zZS5hcHBlbmRCdWZmZXIoZnJhZ21lbnQuZGF0YSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgdGVtcEZsdlBsYXllci5zdGFydExvYWREYXRhKClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdW5iaW5kRmx2UGxheWVyRXZlbnRzIChmbHZQbGF5ZXIpIHtcbiAgICBmbHZQbGF5ZXIuaGFuZGxlU2Vla0VuZCA9ICgpID0+IG51bGxcbiAgICBmbHZQbGF5ZXIuaGFuZGxlRXJyb3IgPSAoKSA9PiBudWxsXG4gICAgZmx2UGxheWVyLmhhbmRsZU1lZGlhRnJhZ21lbnQgPSAoKSA9PiBudWxsXG4gIH1cbiAgaW5pdEZsdlBsYXllckV2ZW50cyAoZmx2UGxheWVyLCBtc2UpIHtcbiAgICBjb25zdCBoYW5kbGVGdHlwTW9vdiA9IChmdHlwTW9vdikgPT4ge1xuICAgICAgaWYgKGZsdlBsYXllci5pc1NvdXJjZU9wZW4gJiYgIXRoaXMudGVtcEZsdlBsYXllcikge1xuICAgICAgICBtc2UuYXBwZW5kQnVmZmVyKGZ0eXBNb292LmJ1ZmZlcilcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNDaGFuZ2luZ1NyYyAmJiAhdGhpcy5fb3B0aW9ucy5pc0xpdmUpIHtcbiAgICAgICAgdGhpcy5pc1NlZWtpbmcgPSB0cnVlXG4gICAgICAgIGZsdlBsYXllci5zZWVrKHRoaXMuX3BsYXllci5jdXJyZW50VGltZSlcbiAgICAgIH1cbiAgICB9XG4gICAgZmx2UGxheWVyLm9uY2UoJ3JlYWR5JywgaGFuZGxlRnR5cE1vb3YpXG4gICAgZmx2UGxheWVyLmhhbmRsZVNlZWtFbmQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmlzU2Vla2luZyA9IGZhbHNlXG4gICAgfVxuICAgIGZsdlBsYXllci5oYW5kbGVFcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB0aGlzLl9wbGF5ZXIuZW1pdCgnZXJyb3InLCBlKVxuICAgIH1cbiAgICBpZiAoIXRoaXMudGVtcEZsdlBsYXllcikge1xuICAgICAgZmx2UGxheWVyLmhhbmRsZU1lZGlhRnJhZ21lbnQgPSAoZnJhZ21lbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVtcEZsdlBsYXllciA/IGZhbHNlIDogbXNlLmFwcGVuZEJ1ZmZlcihmcmFnbWVudC5kYXRhKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGluaXRNc2VFdmVudHMgKG1zZSkge1xuICAgIG1zZS5vbignZXJyb3InLCAoZSkgPT4ge1xuICAgICAgdGhpcy5fcGxheWVyLmVtaXQoJ2Vycm9yJywgZSlcbiAgICB9KVxuICAgIGNvbnN0IG9uU291cmNlT3BlbiA9ICgpID0+IHtcbiAgICAgIHRoaXMuZmx2UGxheWVyLmlzU291cmNlT3BlbiA9IHRydWVcbiAgICAgIGlmICh0aGlzLmZsdlBsYXllci5mdHlwX21vb3YgIT09IG51bGwpIHtcbiAgICAgICAgbXNlLmFwcGVuZEJ1ZmZlcih0aGlzLmZsdlBsYXllci5mdHlwX21vb3YuYnVmZmVyKVxuICAgICAgfVxuXG4gICAgICBtc2Uub24oJ3VwZGF0ZWVuZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBwZW5kaW5nRnJhZ21lbnRzLCBoYXNQZW5kaW5nRnJhZ21lbnRzIH0gPSB0aGlzLmZsdlBsYXllclxuXG4gICAgICAgIGlmIChoYXNQZW5kaW5nRnJhZ21lbnRzKSB7XG4gICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBwZW5kaW5nRnJhZ21lbnRzLnNoaWZ0KClcbiAgICAgICAgICBpZiAoIW1zZS5hcHBlbmRCdWZmZXIoZnJhZ21lbnQuZGF0YSkpIHtcbiAgICAgICAgICAgIHBlbmRpbmdGcmFnbWVudHMudW5zaGlmdChmcmFnbWVudClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcGxheWVyLmVtaXQoJ2NhY2hldXBkYXRlJywgdGhpcy5fcGxheWVyKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgbXNlLm9uKCdzb3VyY2VvcGVuJywgb25Tb3VyY2VPcGVuKVxuICB9XG5cbiAgbG9hZERhdGEgKGN1cnJlbnRUaW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZmx2UGxheWVyLmxvYWRTZWdtZW50cyh0cnVlLCBjdXJyZW50VGltZSwgdGhpcy5fb3B0aW9ucy5wcmVsb2FkVGltZSlcbiAgfVxuXG4gIHByb2dyZXNzQ2hlY2tlciAocGxheWVyKSB7XG4gICAgY29uc3QgeyBtaW5DYWNoZWRUaW1lLCBwcmVsb2FkVGltZSB9ID0gdGhpcy5fb3B0aW9uc1xuICAgIC8vIHJhbmdl5piv5b2T5YmN57yT5a2Y55qE6IyD5Zu0XG4gICAgY29uc3QgcmFuZ2UgPSBwbGF5ZXIuZ2V0QnVmZmVyZWRSYW5nZSgpXG4gICAgaWYgKHRoaXMuZmx2UGxheWVyLnZpZGVvRHVyYXRpb24gLSByYW5nZVsxXSAqIHRoaXMuZmx2UGxheWVyLnZpZGVvVGltZVNjYWxlIDwgMC4xICogdGhpcy5mbHZQbGF5ZXIudmlkZW9UaW1lU2NhbGUpIHsgcmV0dXJuIH1cbiAgICBpZiAocmFuZ2VbMV0gLSBwbGF5ZXIuY3VycmVudFRpbWUgPCBtaW5DYWNoZWRUaW1lICYmICF0aGlzLmlzRGF0YUxvYWRpbmcpIHtcbiAgICAgIHRoaXMuaXNEYXRhTG9hZGluZyA9IHRydWVcbiAgICAgIHRoaXMuZmx2UGxheWVyLmxvYWRTZWdtZW50cyh0cnVlLCBwbGF5ZXIuY3VycmVudFRpbWUsIHByZWxvYWRUaW1lKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RhdGFMb2FkaW5nID0gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIGNsZWFyUGxheWVyQ2FjaGUgKCkge1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5fcGxheWVyLmdldEJ1ZmZlcmVkUmFuZ2UoKVxuICAgIGlmIChyYW5nZS5sZW5ndGggPT09IDIpIHtcbiAgICAgIC8vIHRoaXMubXNlLnJlbW92ZUJ1ZmZlcihyYW5nZVswXSwgcmFuZ2VbMV0pXG4gICAgfVxuICB9XG4gIGlzRW5kZWQgKHBsYXllciwgZmx2KSB7XG4gICAgaWYgKGZsdi52aWRlb0R1cmF0aW9uIC0gcGxheWVyLmN1cnJlbnRUaW1lICogZmx2LnZpZGVvVGltZVNjYWxlIDwgMiAqIGZsdi52aWRlb1RpbWVTY2FsZSkge1xuICAgICAgY29uc3QgcmFuZ2UgPSBwbGF5ZXIuZ2V0QnVmZmVyZWRSYW5nZSgpXG4gICAgICBpZiAocGxheWVyLmN1cnJlbnRUaW1lIC0gcmFuZ2VbMV0gPCAwLjEpIHtcbiAgICAgICAgdGhpcy5tc2UuZW5kT2ZTdHJlYW0oKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBkZXN0cm95ICgpIHtcbiAgICBWb2RUYXNrLmNsZWFyKClcbiAgICB0aGlzLl9vcHRpb25zID0ge31cbiAgICB0aGlzLm1zZSA9IG51bGxcbiAgICB0aGlzLmlzU2Vla2luZyA9IGZhbHNlXG4gICAgdGhpcy5pc0RhdGFMb2FkaW5nID0gZmFsc2VcbiAgICB0aGlzLnRlbXBDdXJyZW50VGltZSA9IDBcbiAgICB0aGlzLnRlbXBGbHZQbGF5ZXIgPSBudWxsXG4gICAgdGhpcy5pc0NoYW5naW5nU3JjID0gZmFsc2VcbiAgICB0aGlzLmhhbmRsZVRpbWVVcGRhdGUgPSAoKSA9PiB7fVxuICAgIHRoaXMuaGFuZGxlU2Vla2luZyA9ICgpID0+IHt9XG4gICAgdGhpcy5mbHZQbGF5ZXIuZGVzdHJveSgpXG4gICAgdGhpcy5fcGxheWVyLnBhdXNlKClcbiAgfVxuICBnZXQgaXNTZWVrYWJsZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmx2UGxheWVyLmlzU2Vla2FibGVcbiAgfVxufVxuIiwiY29uc3QgZ2V0RGVmYXVsdENvbmYgPSAoKSA9PiAoe1xuICBwcmVsb2FkVGltZTogMzAsXG4gIG1pbkNhY2hlZFRpbWU6IDUsXG4gIGF1dG9DbGVhblNvdXJjZUJ1ZmZlcjogdHJ1ZSxcbiAgYXV0b0NsZWFuTWF4QmFja1RpbWU6IDMwLFxuICBpc0xpdmU6IGZhbHNlLFxuICBjb3JzOiB0cnVlXG59KVxuXG5leHBvcnQgZGVmYXVsdCBnZXREZWZhdWx0Q29uZlxuIiwiY29uc3QgZmllbGRzID0gW3tcbiAgbmFtZTogJ2R1cmF0aW9uJyxcbiAgdHlwZTogQm9vbGVhbixcbiAgcGFyc2VyICh0YXJnZXQsIG9yaWdpbikge1xuICAgIHRhcmdldC5tZWRpYUluZm8uZHVyYXRpb24gPSBvcmlnaW4uZHVyYXRpb25cbiAgfVxufSwge1xuICBuYW1lOiAnaGFzQXVkaW8nLFxuICB0eXBlOiBCb29sZWFuLFxuICBwYXJzZXIgKHRhcmdldCwgb3JpZ2luKSB7XG4gICAgdGFyZ2V0Lm1lZGlhSW5mby5oYXNBdWRpbyA9IG9yaWdpbi5oYXNBdWRpb1xuICB9XG59LCB7XG4gIG5hbWU6ICdoYXNWaWRlbycsXG4gIHR5cGU6IEJvb2xlYW4sXG4gIHBhcnNlciAodGFyZ2V0LCBvcmlnaW4pIHtcbiAgICB0YXJnZXQubWVkaWFJbmZvLmhhc1ZpZGVvID0gb3JpZ2luLmhhc1ZpZGVvXG4gIH1cbn0sIHtcbiAgbmFtZTogJ2F1ZGlvZGF0YXJhdGUnLFxuICB0eXBlOiBOdW1iZXIsXG4gIHBhcnNlciAodGFyZ2V0LCBvcmlnaW4pIHtcbiAgICB0YXJnZXQubWVkaWFJbmZvLmF1ZGlvRGF0YVJhdGUgPSBvcmlnaW4uYXVkaW9kYXRhcmF0ZVxuICB9XG59LCB7XG4gIG5hbWU6ICd2aWRlb2RhdGFyYXRlJyxcbiAgdHlwZTogTnVtYmVyLFxuICBwYXJzZXIgKHRhcmdldCwgb3JpZ2luKSB7XG4gICAgdGFyZ2V0Lm1lZGlhSW5mby52aWRlb0RhdGFSYXRlID0gb3JpZ2luLnZpZGVvZGF0YXJhdGVcbiAgfVxufSwge1xuICBuYW1lOiAnd2lkdGgnLFxuICB0eXBlOiBOdW1iZXIsXG4gIHBhcnNlciAodGFyZ2V0LCBvcmlnaW4pIHtcbiAgICB0YXJnZXQubWVkaWFJbmZvLndpZHRoID0gb3JpZ2luLndpZHRoXG4gIH1cbn0sIHtcbiAgbmFtZTogJ2hlaWdodCcsXG4gIHR5cGU6IE51bWJlcixcbiAgcGFyc2VyICh0YXJnZXQsIG9yaWdpbikge1xuICAgIHRhcmdldC5tZWRpYUluZm8uaGVpZ2h0ID0gb3JpZ2luLmhlaWdodFxuICB9XG59LCB7XG4gIG5hbWU6ICdkdXJhdGlvbicsXG4gIHR5cGU6IE51bWJlcixcbiAgcGFyc2VyICh0YXJnZXQsIG9yaWdpbikge1xuICAgIGlmICghdGFyZ2V0LnN0YXRlLmR1cmF0aW9uKSB7XG4gICAgICBjb25zdCBkdXJhdGlvbiA9IE1hdGguZmxvb3Iob3JpZ2luLmR1cmF0aW9uICogdGFyZ2V0LnN0YXRlLnRpbWVTY2FsZSlcbiAgICAgIHRhcmdldC5zdGF0ZS5kdXJhdGlvbiA9IHRhcmdldC5tZWRpYUluZm8uZHVyYXRpb24gPSBkdXJhdGlvblxuICAgIH1cbiAgfSxcbiAgb25UeXBlRXJyICh0YXJnZXQpIHtcbiAgICB0YXJnZXQubWVkaWFJbmZvLmR1cmF0aW9uID0gMFxuICB9XG59LCB7XG4gIG5hbWU6ICdmcmFtZXJhdGUnLFxuICB0eXBlOiBOdW1iZXIsXG4gIHBhcnNlciAodGFyZ2V0LCBvcmlnaW4pIHtcbiAgICBjb25zdCBmcHNOdW0gPSBNYXRoLmZsb29yKG9yaWdpbi5mcmFtZXJhdGUgKiAxMDAwKVxuICAgIGlmIChmcHNOdW0gPiAwKSB7XG4gICAgICBjb25zdCBmcHMgPSBmcHNOdW0gLyAxMDAwXG4gICAgICBjb25zdCB7IHJlZmVyRnJhbWVSYXRlLCBtZWRpYUluZm8gfSA9IHRhcmdldFxuICAgICAgcmVmZXJGcmFtZVJhdGUuZml4ZWQgPSB0cnVlXG4gICAgICByZWZlckZyYW1lUmF0ZS5mcHMgPSBmcHNcbiAgICAgIHJlZmVyRnJhbWVSYXRlLmZwc051bSA9IGZwc051bVxuICAgICAgcmVmZXJGcmFtZVJhdGUuZnBzRGVuID0gMTAwMFxuICAgICAgbWVkaWFJbmZvLmZwcyA9IGZwc1xuICAgIH1cbiAgfVxufSwge1xuICBuYW1lOiAna2V5ZnJhbWVzJyxcbiAgdHlwZTogT2JqZWN0LFxuICBwYXJzZXIgKHRhcmdldCwgb3JpZ2luKSB7XG4gICAgY29uc3QgeyBrZXlmcmFtZXMgfSA9IG9yaWdpblxuICAgIHRhcmdldC5tZWRpYUluZm8uaGFzS2V5ZnJhbWVzID0gISFrZXlmcmFtZXNcbiAgICBpZiAoa2V5ZnJhbWVzKSB7XG4gICAgICB0YXJnZXQubWVkaWFJbmZvLmtleWZyYW1lcyA9IHRoaXMuX3BhcnNlS2V5ZnJhbWVzKGtleWZyYW1lcylcbiAgICB9XG4gICAgb3JpZ2luLmtleWZyYW1lcyA9IG51bGxcbiAgfSxcbiAgb25UeXBlRXJyICh0YXJnZXQpIHtcbiAgICB0YXJnZXQubWVkaWFJbmZvLmhhc0tleWZyYW1lcyA9IGZhbHNlXG4gIH1cbn1dXG5leHBvcnQgZGVmYXVsdCBmaWVsZHNcbiIsImV4cG9ydCBjb25zdCBNZXRhVHlwZXMgPSB7XG4gIE5VTUJFUjogMCxcbiAgQk9PTEVBTjogMSxcbiAgU1RSSU5HOiAyLFxuICBPQkpFQ1Q6IDMsXG4gIE1JWF9BUlJBWTogOCxcbiAgT0JKRUNUX0VORDogOSxcbiAgU1RSSUNUX0FSUkFZOiAxMCxcbiAgREFURTogMTEsXG4gIExPTkVfU1RSSU5HOiAxMlxufVxuXG5leHBvcnQgY29uc3QgRXZlbnRUeXBlcyA9IHtcbiAgREFUQV9SRUFEWTogJ2RhdGFfcmVhZHknLFxuICBNRVRBX0RBVEFfUkVBRFk6ICdtZXRhX2RhdGFfcmVhZHknLFxuICBUUkFDS19NRVRBX1JFQURZOiAndHJhY2tfbWV0YV9yZWFkeScsXG4gIE1FRElBX0lORk9fUkVBRFk6ICdtZWRpYV9pbmZvX3JlYWR5JyxcbiAgTUVUQV9FTkRfUE9TSVRJT046ICdtZXRhX2VuZF9wb3NpdGlvbicsXG4gIEVSUk9SOiAnZXJyb3InXG59XG5cbmV4cG9ydCBjb25zdCBzb3VuZFJhdGVUeXBlcyA9IFtcbiAgNTUwMCxcbiAgMTEwMDAsXG4gIDIyMDAwLFxuICA0NDAwMFxuXVxuXG5leHBvcnQgY29uc3QgQXVkaW9PYmplY3RUeXBlcyA9IHtcbiAgMDogJ051bGwnLFxuICAxOiAnQUFDIE1haW4nLFxuICAyOiAnQUFDIExDJyxcbiAgMzogJ0FBQyBTU1IoU2NhbGFibGUgU2FtcGxlIFJhdGUpJyxcbiAgNDogJ0FBQyBMVFAoTG9uZyBUZXJtIFByZWRpY3Rpb24pJyxcbiAgNTogJ0hFLUFBQyAvIFNCUihTcGVjdHJhbCBCYW5kIFJlcGxpY2F0aW9uKScsXG4gIDY6ICdBQUMgU2NhbGFibGUnXG59XG5cbmV4cG9ydCBjb25zdCBzYW1wbGluZ0ZyZXF1ZW5jeVR5cGVzID0gW1xuICA5NjAwMCwgODgyMDAsXG4gIDY0MDAwLCA0ODAwMCxcbiAgNDQxMDAsIDMyMDAwLFxuICAyNDAwMCwgMjIwNTAsXG4gIDE2MDAwLCAxMjAwMCxcbiAgMTEwMjUsIDgwMDBcbl1cblxuZXhwb3J0IGNvbnN0IGJyb3dzZXJUeXBlcyA9IHtcbiAgSUU6ICdpZScsXG4gIEZJUkVfRk9YOiAnZmlyZWZveCcsXG4gIENIUk9NRTogJ2Nocm9tZScsXG4gIE9QRVJBOiAnb3BlcmEnLFxuICBTQUZBUkk6ICdzYWZhcmknXG59XG5cbmV4cG9ydCBjb25zdCBtcDNWZXJzaW9ucyA9IHtcbiAgVjI1OiAwLFxuICBSRVNFUlZFRDogMSxcbiAgVjIwOiAyLFxuICBWMTA6IDNcbn1cblxuZXhwb3J0IGNvbnN0IGF1ZGlvU2FtcGxlUmF0ZSA9IHtcbiAgVjEwOiBbNDQxMDAsIDQ4MDAwLCAzMjAwMCwgMF0sXG4gIFYyMDogWzIyMDUwLCAyNDAwMCwgMTYwMDAsIDBdLFxuICBWMjU6IFsxMTAyNSwgMTIwMDAsIDgwMDAsIDBdXG59XG5cbmV4cG9ydCBjb25zdCBtcDNCaXRSYXRlID0ge1xuICBMYXllcjE6IFswLCAzMiwgNjQsIDk2LCAxMjgsIDE2MCwgMTkyLCAyMjQsIDI1NiwgMjg4LCAzMjAsIDM1MiwgMzg0LCA0MTYsIDQ0OCwgLTFdLFxuICBMYXllcjI6IFswLCAzMiwgNDgsIDU2LCA2NCwgODAsIDk2LCAxMTIsIDEyOCwgMTYwLCAxOTIsIDIyNCwgMjU2LCAzMjAsIDM4NCwgLTFdLFxuICBMYXllcjM6IFswLCAzMiwgNDAsIDQ4LCA1NiwgNjQsIDgwLCA5NiwgMTEyLCAxMjgsIDE2MCwgMTkyLCAyMjQsIDI1NiwgMzIwLCAtMV1cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAneGdwbGF5ZXInXG5pbXBvcnQgVm9kVGFzayBmcm9tICcuL3Rhc2tzL1ZvZFRhc2snXG5pbXBvcnQgRmx2IGZyb20gJy4vRmx2J1xuXG5jbGFzcyBGbHZQbGF5ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLl9fZmx2X18gPSBudWxsXG4gICAgdGhpcy5pbml0KG9wdGlvbnMpXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdzcmMnLCB7XG4gICAgICBcbiAgICAgIHNldDogKHZhbCkgPT4ge1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAvLyDngrnmkq3nmoTml7blgJkg55u05o6lcmV0dXJu5LqGIGJsb2I6aHR0cDovLzE5Mi4xNjguMi4xMDU6NTAwMC9lY2UxZDRkNS03ZTM3LTQ1MTctYWNmNS02OTI2NzNmMWE5M2RcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnICYmIHZhbC5zdGFydHNXaXRoKCdibG9iOicpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb3B0aW9ucy51cmwgPSB2YWxcbiAgICAgICAgdGhpcy5fX2Zsdl9fLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLl9fZmx2X18gPSBuZXcgRmx2KHRoaXMuX29wdGlvbnMsIHRoaXMpXG4gICAgICAgIHRoaXMuX19mbHZfXy5sb2FkKClcbiAgICAgICAgLy8gZmx2IOS5n+aYr3ZpZGVv57uE5Lu25pKt5pS+IOWcsOWdgOaYr21zZS51cmxcbiAgICAgICAgdGhpcy52aWRlby5zcmMgPSB0aGlzLl9fZmx2X18ubXNlLnVybFxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnBsYXkoKVxuICAgICAgICB9LCAwKVxuICAgICAgfSxcbiAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy51cmxcbiAgICAgIH0sXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KVxuICAgIGlmIChvcHRpb25zLmF1dG9wbGF5KSB7XG4gICAgICB0aGlzLnN0YXJ0KClcbiAgICB9XG4gIH1cblxuICBpbml0IChvcHRpb25zKSB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpc1xuICAgIGNvbnN0IHsgaXNMaXZlIH0gPSBvcHRpb25zXG4gICAgcGxheWVyLl9fZmx2X18gPSBuZXcgRmx2KG9wdGlvbnMsIHBsYXllcilcbiAgICBwbGF5ZXIub25jZSgnY29tcGxldGUnLCAoKSA9PiB7XG4gICAgICAvLyBzdGFydOaWueazleeahOS4i+S4gOS4quS6i+S7tuW+queOr+inpuWPkWNvbXBsZXRlIFxuICAgICAgcGxheWVyLmNyZWF0ZUluc3RhbmNlKHBsYXllci5fX2Zsdl9fKVxuICAgIH0pXG4gICAgcGxheWVyLm9uKCdwYXVzZScsICgpID0+IHtcbiAgICAgICFpc0xpdmUgJiYgVm9kVGFzay5jbGVhcigpXG4gICAgfSlcbiAgICB0aGlzLm9uY2UoJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgICBWb2RUYXNrLmNsZWFyKClcbiAgICAgIHBsYXllci5fX2Zsdl9fLmRlc3Ryb3koKVxuICAgICAgcGxheWVyLl9fZmx2X18ubXNlID0gbnVsbFxuICAgICAgcGxheWVyLnZpZGVvLnNyYyA9ICcnXG4gICAgICBwbGF5ZXIuX19mbHZfXyA9IG51bGxcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSW5zdGFuY2UgKGZsdikge1xuICAgIGRlYnVnZ2VyXG4gICAgLy8gc3RhcnTkuYvlkI7miafooYznmoTmlrnms5VcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuaXNMaXZlKSB7XG4gICAgICBQbGF5ZXIudXRpbC5hZGRDbGFzcyhwbGF5ZXIucm9vdCwgJ3hncGxheWVyLWlzLWxpdmUnKVxuICAgICAgY29uc3QgbGl2ZSA9IFBsYXllci51dGlsLmNyZWF0ZURvbSgneGctbGl2ZScsICfmraPlnKjnm7Tmkq0nLCB7fSwgJ3hncGxheWVyLWxpdmUnKVxuICAgICAgcGxheWVyLmNvbnRyb2xzLmFwcGVuZENoaWxkKGxpdmUpXG4gICAgfVxuICAgIC8v5byA5aeLbG9hZFxuICAgIGZsdi5sb2FkKClcbiAgfVxuXG4gIHN0YXJ0ICgpIHtcbiAgICAvLyDlvIDlp4vmkq3mlL5cbiAgICBkZWJ1Z2dlclxuICAgIGlmICghdGhpcy5pbml0ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBmbHZQbGF5ZXIgPSB0aGlzLl9fZmx2X19cbiAgICAvLyDop6blj5HniLbnsbvnmoRzdGFydCDniLbnsbvph4zop6blj5Fjb21wbGV0ZeS6i+S7tlxuICAgIHN1cGVyLnN0YXJ0KGZsdlBsYXllci5tc2UudXJsKVxuICAgIHRoaXMuc3JjID0gZmx2UGxheWVyLm1zZS51cmxcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZ2V0IGluaXRlZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19mbHZfXyAhPT0gdW5kZWZpbmVkXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbHZQbGF5ZXJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhSW5mbyB7XG4gICAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICAgICAgY29uc3QgX2RlZmF1bHQgPSB7XG4gICAgICAgICAgICBtaW1lVHlwZTogbnVsbCxcbiAgICAgICAgICAgIGNvZGVjOiAnJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBudWxsLFxuICAgICAgICAgICAgaGFzQXVkaW86IGZhbHNlLFxuICAgICAgICAgICAgaGFzVmlkZW86IGZhbHNlLFxuICAgICAgICAgICAgYXVkaW9Db2RlYzogbnVsbCxcbiAgICAgICAgICAgIHZpZGVvQ29kZWM6IG51bGwsXG5cbiAgICAgICAgICAgIHZpZGVvRGF0YVJhdGU6IG51bGwsXG4gICAgICAgICAgICBhdWRpb0RhdGFSYXRlOiBudWxsLFxuICAgICAgICAgICAgYXVkaW9TYW1wbGVSYXRlOiBudWxsLFxuICAgICAgICAgICAgYXVkaW9DaGFubmVsQ291bnQ6IG51bGwsXG4gICAgICAgICAgICBhdWRpb0NvbmZpZzogbnVsbCxcblxuICAgICAgICAgICAgd2lkdGg6IG51bGwsXG4gICAgICAgICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICAgICAgICBmcHM6IG51bGwsXG4gICAgICAgICAgICBwcm9maWxlOiBudWxsLFxuICAgICAgICAgICAgbGV2ZWw6IG51bGwsXG4gICAgICAgICAgICBjaHJvbWFGb3JtYXQ6IG51bGwsXG5cbiAgICAgICAgICAgIHBpeGVsUmF0aW86IFtdLFxuXG4gICAgICAgICAgICBfbWV0YURhdGE6IG51bGwsXG4gICAgICAgICAgICBzZWdtZW50czogW10sXG4gICAgICAgICAgICBoYXNLZXlmcmFtZXM6IG51bGwsXG4gICAgICAgICAgICBrZXlmcmFtZXM6IFtdLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGluaXREYXRhID0gIE9iamVjdC5hc3NpZ24oe30sIF9kZWZhdWx0LCBkYXRhKTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoaW5pdERhdGEpLmZvckVhY2goKFtrLCB2XSk9PiB7XG4gICAgICAgICAgICB0aGlzW2tdID0gdjtcbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgZ2V0IGlzQ29tcGxldGUgKCkge1xuICAgICAgICBjb25zdCB7IG1pbWVUeXBlLCBkdXJhdGlvbiwgaGFzS2V5ZnJhbWVzIH0gPSB0aGlzO1xuICAgICAgICByZXR1cm4gbWltZVR5cGUgIT09IG51bGxcbiAgICAgICAgICAgICYmIGR1cmF0aW9uICE9PSBudWxsXG4gICAgICAgICAgICAmJiBoYXNLZXlmcmFtZXMgIT09IG51bGxcbiAgICAgICAgICAgICYmIHRoaXMuaXNWaWRlb0luZm9GaWxsZWRcbiAgICAgICAgICAgICYmIHRoaXMuaXNBdWRpb0luZm9GaWxsZWQ7XG4gICAgfVxuICAgIGdldCBpc0F1ZGlvSW5mb0ZpbGxlZCAoKSB7XG4gICAgICAgIGNvbnN0IHsgaGFzQXVkaW8sXG4gICAgICAgICAgICBhdWRpb0NvZGVjLFxuICAgICAgICAgICAgYXVkaW9TYW1wbGVSYXRlLFxuICAgICAgICAgICAgYXVkaW9DaGFubmVsQ291bnQsXG4gICAgICAgIH0gPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiAhISghaGFzQXVkaW8gfHwgKGhhc0F1ZGlvICYmIGF1ZGlvQ29kZWMgJiYgYXVkaW9TYW1wbGVSYXRlICYmIGF1ZGlvQ2hhbm5lbENvdW50KSk7XG5cbiAgICB9XG5cbiAgICBnZXQgaXNWaWRlb0luZm9GaWxsZWQgKCkge1xuICAgICAgICBjb25zdCBub3ROdWxsRmllbGRzID0gW1xuICAgICAgICAgICAgJ3ZpZGVvQ29kZWMnLFxuICAgICAgICAgICAgJ3dpZHRoJyxcbiAgICAgICAgICAgICdoZWlnaHQnLFxuICAgICAgICAgICAgJ2ZwcycsXG4gICAgICAgICAgICAncHJvZmlsZScsXG4gICAgICAgICAgICAnbGV2ZWwnLFxuICAgICAgICAgICAgJ2Nocm9tYUZvcm1hdCcsXG4gICAgICAgIF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBub3ROdWxsRmllbGRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpc1tub3ROdWxsRmllbGRzW2ldXSA9PT0gbnVsbCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmhhc1ZpZGVvO1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhU2FtcGxlIHtcbiAgICBjb25zdHJ1Y3RvciAoaW5mbykge1xuICAgICAgICBsZXQgX2RlZmF1bHQgPSBNZWRpYVNhbXBsZS5nZXREZWZhdWx0SW5mKCk7XG5cbiAgICAgICAgaWYgKCFpbmZvIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbmZvKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICAgICAgICAgIHJldHVybiBfZGVmYXVsdDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2FtcGxlID0gT2JqZWN0LmFzc2lnbih7fSwgX2RlZmF1bHQsIGluZm8pO1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHNhbXBsZSkuZm9yRWFjaCgoW2ssIHZdKSA9PiB7XG4gICAgICAgICAgICB0aGlzW2tdID0gdjtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RGVmYXVsdEluZiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkdHM6IG51bGwsXG4gICAgICAgICAgICBwdHM6IG51bGwsXG4gICAgICAgICAgICBkdXJhdGlvbjogbnVsbCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBudWxsLFxuICAgICAgICAgICAgaXNSQVA6IGZhbHNlLCAvLyBpcyBSYW5kb20gYWNjZXNzIHBvaW50XG4gICAgICAgICAgICBvcmlnaW5EdHM6IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuXG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhU2VnbWVudCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnN0YXJ0RHRzID0gLTE7XG4gICAgICAgIHRoaXMuZW5kRHRzID0gLTE7XG4gICAgICAgIHRoaXMuc3RhcnRQdHMgPSAtMTtcbiAgICAgICAgdGhpcy5lbmRQdHMgPSAtMTtcbiAgICAgICAgdGhpcy5vcmlnaW5TdGFydER0cyA9IC0xO1xuICAgICAgICB0aGlzLm9yaWdpbkVuZER0cyA9IC0xO1xuICAgICAgICB0aGlzLnJhbmRvbUFjY2Vzc1BvaW50cyA9IFtdO1xuICAgICAgICB0aGlzLmZpcnN0U2FtcGxlID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0U2FtcGxlID0gbnVsbDtcbiAgICB9XG5cbiAgICBhZGRSQVAgKHNhbXBsZSkge1xuICAgICAgICBzYW1wbGUuaXNSQVAgPSB0cnVlO1xuICAgICAgICB0aGlzLnJhbmRvbUFjY2Vzc1BvaW50cy5wdXNoKHNhbXBsZSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhU2VnbWVudExpc3Qge1xuXG4gICAgY29uc3RydWN0b3IgKHR5cGUpIHtcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuX2xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5fbGFzdEFwcGVuZExvY2F0aW9uID0gLTE7IC8vIGNhY2hlZCBsYXN0IGluc2VydCBsb2NhdGlvblxuICAgIH1cblxuICAgIGdldCB0eXBlICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gICAgfVxuXG4gICAgZ2V0IGxlbmd0aCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saXN0Lmxlbmd0aDtcbiAgICB9XG5cbiAgICBpc0VtcHR5ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3QubGVuZ3RoID09PSAwO1xuICAgIH1cblxuICAgIGNsZWFyICgpIHtcbiAgICAgICAgdGhpcy5fbGlzdCA9IFtdO1xuICAgICAgICB0aGlzLl9sYXN0QXBwZW5kTG9jYXRpb24gPSAtMTtcbiAgICB9XG5cbiAgICBfc2VhcmNoTmVhcmVzdFNlZ21lbnRCZWZvcmUgKGJlZ2luRHRzKSB7XG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5fbGlzdDtcbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gLTI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxhc3QgPSBsaXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBtaWQgPSAwO1xuICAgICAgICBsZXQgbGJvdW5kID0gMDtcbiAgICAgICAgbGV0IHVib3VuZCA9IGxhc3Q7XG5cbiAgICAgICAgbGV0IGlkeCA9IDA7XG5cbiAgICAgICAgaWYgKGJlZ2luRHRzIDwgbGlzdFswXS5vcmlnaW5EdHMpIHtcbiAgICAgICAgICAgIGlkeCA9IC0xO1xuICAgICAgICAgICAgcmV0dXJuIGlkeDtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChsYm91bmQgPD0gdWJvdW5kKSB7XG4gICAgICAgICAgICBtaWQgPSBsYm91bmQgKyBNYXRoLmZsb29yKCh1Ym91bmQgLSBsYm91bmQpIC8gMik7XG4gICAgICAgICAgICBpZiAobWlkID09PSBsYXN0IHx8IChiZWdpbkR0cyA+IGxpc3RbbWlkXS5sYXN0U2FtcGxlLm9yaWdpbkR0c1xuICAgICAgICAgICAgICAgICAgICAmJiAoYmVnaW5EdHMgPCBsaXN0W21pZCArIDFdLm9yaWdpbkR0cykpKSB7XG4gICAgICAgICAgICAgICAgaWR4ID0gbWlkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsaXN0W21pZF0ub3JpZ2luRHRzIDwgYmVnaW5EdHMpIHtcbiAgICAgICAgICAgICAgICBsYm91bmQgPSBtaWQgKyAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1Ym91bmQgPSBtaWQgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZHg7XG4gICAgfVxuXG4gICAgX3NlYXJjaE5lYXJlc3RTZWdtZW50QWZ0ZXIgKGJlZ2luRHRzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWFyY2hOZWFyZXN0U2VnbWVudEJlZm9yZShiZWdpbkR0cykgKyAxO1xuICAgIH1cblxuICAgIGFwcGVuZCAoc2VnbWVudCkge1xuICAgICAgICBsZXQgbGlzdCA9IHRoaXMuX2xpc3Q7XG4gICAgICAgIGxldCBsYXN0QXBwZW5kSWR4ID0gdGhpcy5fbGFzdEFwcGVuZExvY2F0aW9uO1xuICAgICAgICBsZXQgaW5zZXJ0SWR4ID0gMDtcblxuICAgICAgICBpZiAobGFzdEFwcGVuZElkeCAhPT0gLTEgJiYgbGFzdEFwcGVuZElkeCA8IGxpc3QubGVuZ3RoXG4gICAgICAgICAgICAmJiBzZWdtZW50Lm9yaWdpblN0YXJ0RHRzID49IGxpc3RbbGFzdEFwcGVuZElkeF0ubGFzdFNhbXBsZS5vcmlnaW5EdHNcbiAgICAgICAgICAgICYmICgobGFzdEFwcGVuZElkeCA9PT0gbGlzdC5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgIHx8IChsYXN0QXBwZW5kSWR4IDwgbGlzdC5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgICYmIHNlZ21lbnQub3JpZ2luU3RhcnREdHMgPCBsaXN0W2xhc3RBcHBlbmRJZHggKyAxXS5vcmlnaW5TdGFydER0cykpKSB7XG4gICAgICAgICAgICBpbnNlcnRJZHggPSBsYXN0QXBwZW5kSWR4ICsgMTsgLy8gdXNlIGNhY2hlZCBsb2NhdGlvbiBpZHhcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpbnNlcnRJZHggPSB0aGlzLl9zZWFyY2hOZWFyZXN0U2VnbWVudEJlZm9yZShzZWdtZW50Lm9yaWdpblN0YXJ0RHRzKSArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sYXN0QXBwZW5kTG9jYXRpb24gPSBpbnNlcnRJZHg7XG4gICAgICAgIHRoaXMuX2xpc3Quc3BsaWNlKGluc2VydElkeCwgMCwgc2VnbWVudCk7XG4gICAgfVxuXG4gICAgZ2V0TGFzdFNlZ21lbnRCZWZvcmUgKGJlZ2luRHRzKSB7XG4gICAgICAgIGxldCBpZHggPSB0aGlzLl9zZWFyY2hOZWFyZXN0U2VnbWVudEJlZm9yZShiZWdpbkR0cyk7XG4gICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3RbaWR4XTtcbiAgICAgICAgfSBlbHNlIHsgLy8gLTFcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TGFzdFNhbXBsZUJlZm9yZSAoYmVnaW5EdHMpIHtcbiAgICAgICAgbGV0IHNlZ21lbnQgPSB0aGlzLmdldExhc3RTZWdtZW50QmVmb3JlKGJlZ2luRHRzKTtcbiAgICAgICAgaWYgKHNlZ21lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWdtZW50Lmxhc3RTYW1wbGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExhc3RSQVBCZWZvcmUgKGJlZ2luRHRzKSB7XG4gICAgICAgIGxldCBzZWdtZW50SWR4ID0gdGhpcy5fc2VhcmNoTmVhcmVzdFNlZ21lbnRCZWZvcmUoYmVnaW5EdHMpO1xuICAgICAgICBsZXQgcmFuZG9tQWNjZXNzUG9pbnRzID0gdGhpcy5fbGlzdFtzZWdtZW50SWR4XS5yYW5kb21BY2Nlc3NQb2ludHM7XG4gICAgICAgIHdoaWxlIChyYW5kb21BY2Nlc3NQb2ludHMubGVuZ3RoID09PSAwICYmIHNlZ21lbnRJZHggPiAwKSB7XG4gICAgICAgICAgICBzZWdtZW50SWR4LS07XG4gICAgICAgICAgICByYW5kb21BY2Nlc3NQb2ludHMgPSB0aGlzLl9saXN0W3NlZ21lbnRJZHhdLnJhbmRvbUFjY2Vzc1BvaW50cztcbiAgICAgICAgfVxuICAgICAgICBpZiAocmFuZG9tQWNjZXNzUG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiByYW5kb21BY2Nlc3NQb2ludHNbcmFuZG9tQWNjZXNzUG9pbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgTWVkaWFJbmZvIGZyb20gJy4vTWVkaWFJbmZvJ1xuaW1wb3J0IHNuaWZmZXIgZnJvbSAnLi4vdXRpbHMvc25pZmZlcidcbmNsYXNzIFN0b3JlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0xlOiBzbmlmZmVyLmlzTGUsXG4gICAgICBfaGFzQXVkaW86IGZhbHNlLFxuICAgICAgX2hhc1ZpZGVvOiBmYWxzZSxcbiAgICAgIF9tZWRpYUluZm86IG5ldyBNZWRpYUluZm8oKSxcbiAgICAgIF9tZXRhRGF0YTogbnVsbCxcbiAgICAgIF92aWRlb1RyYWNrOiB7dHlwZTogJ3ZpZGVvJywgaWQ6IDEsIHNhbXBsZXM6IFtdLCBsZW5ndGg6IDB9LFxuICAgICAgX2F1ZGlvVHJhY2s6IHt0eXBlOiAnYXVkaW8nLCBpZDogMiwgc2FtcGxlczogW10sIGxlbmd0aDogMH0sXG4gICAgICBfdmlkZW9NZXRhRGF0YTogbnVsbCxcbiAgICAgIF9hdWRpb01ldGFEYXRhOiBudWxsLFxuICAgICAgX2F1ZGlvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZDogZmFsc2UsXG4gICAgICBfdmlkZW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkOiBmYWxzZSxcbiAgICAgIHRhZ3M6IFtdLFxuICAgICAgdGltZVN0YW1wQmFzZTogMCxcbiAgICAgIGhhc1ZpZGVvRmxhZ092ZXJyaWRlZDogZmFsc2UsXG4gICAgICBoYXNBdWRpb0ZsYWdPdmVycmlkZWQ6IGZhbHNlLFxuICAgICAgdGltZVNjYWxlOiAxMDAwLFxuICAgICAgZHVyYXRpb246IDAsXG4gICAgICBpc0xpdmU6IGZhbHNlLFxuICAgICAgZHVyYXRpb25PdmVycmlkZWQ6IGZhbHNlLFxuICAgICAgbmFsdUxlbmd0aFNpemU6IDQsXG4gICAgICBfcmVmZXJGcmFtZVJhdGU6IHtcbiAgICAgICAgZml4ZWQ6IHRydWUsXG4gICAgICAgIGZwczogMjMuOTc2LFxuICAgICAgICBmcHNOdW06IDIzOTc2LFxuICAgICAgICBmcHNEZW46IDEwMDBcbiAgICAgIH0sXG4gICAgICBtZXRhRW5kUG9zaXRpb246IC0xXG4gICAgfVxuXG4gICAgdGhpcy5tZXRob2RzID0ge1xuICAgICAgX2lzSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgX2hhc0F1ZGlvLFxuICAgICAgICAgIF9oYXNWaWRlbyxcbiAgICAgICAgICBfYXVkaW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkLFxuICAgICAgICAgIF92aWRlb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWRcbiAgICAgICAgfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgaWYgKF9oYXNBdWRpbyAmJiBfaGFzVmlkZW8pIHsgLy8gYm90aCBhdWRpbyAmIHZpZGVvXG4gICAgICAgICAgcmV0dXJuIF9hdWRpb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWQgJiYgX3ZpZGVvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZFxuICAgICAgICB9XG4gICAgICAgIGlmIChfaGFzQXVkaW8gJiYgIV9oYXNWaWRlbykgeyAvLyBhdWRpbyBvbmx5XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2F1ZGlvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZFxuICAgICAgICB9XG4gICAgICAgIGlmICghX2hhc0F1ZGlvICYmIF9oYXNWaWRlbykgeyAvLyB2aWRlbyBvbmx5XG4gICAgICAgICAgcmV0dXJuIF92aWRlb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyVGFncyAoKSB7XG4gICAgdGhpcy5zdGF0ZS50YWdzID0gW11cbiAgfVxuICBnZXQgcmVmZXJGcmFtZVJhdGUgKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLl9yZWZlckZyYW1lUmF0ZVxuICB9XG5cbiAgc2V0IHJlZmVyRnJhbWVSYXRlICh2YWwpIHtcbiAgICB0aGlzLnN0YXRlLl9yZWZlckZyYW1lUmF0ZSA9IHZhbFxuICB9XG5cbiAgc2V0IG1lZGlhSW5mbyAobWVkaWFJbmZvKSB7XG4gICAgdGhpcy5zdGF0ZS5fbWVkaWFJbmZvID0gbWVkaWFJbmZvXG4gIH1cblxuICBnZXQgbWVkaWFJbmZvICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5fbWVkaWFJbmZvXG4gIH1cblxuICBnZXQgbWV0YURhdGEgKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLl9tZXRhRGF0YVxuICB9XG5cbiAgZ2V0IGhhc01ldGFEYXRhICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5fbWV0YURhdGEgIT09IG51bGxcbiAgfVxuXG4gIHNldCBtZXRhRGF0YSAodikge1xuICAgIHRoaXMuc3RhdGUuX21ldGFEYXRhID0gdlxuICB9XG5cbiAgc2V0IGF1ZGlvVHJhY2sgKHZhbCkge1xuICAgIHRoaXMuc3RhdGUuX2F1ZGlvVHJhY2sgPSB2YWxcbiAgfVxuXG4gIGdldCBhdWRpb1RyYWNrICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5fYXVkaW9UcmFja1xuICB9XG5cbiAgc2V0IHZpZGVvVHJhY2sgKHZhbCkge1xuICAgIHRoaXMuc3RhdGUuX3ZpZGVvVHJhY2sgPSB2YWxcbiAgfVxuXG4gIGdldCB2aWRlb1RyYWNrICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5fdmlkZW9UcmFja1xuICB9XG5cbiAgc2V0IGhhc0F1ZGlvICh2YWwpIHtcbiAgICB0aGlzLnN0YXRlLl9oYXNBdWRpbyA9IHZhbFxuICAgIHRoaXMuc3RhdGUuX21lZGlhSW5mby5oYXNBdWRpbyA9IHZhbFxuICB9XG5cbiAgZ2V0IGhhc0F1ZGlvICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5faGFzQXVkaW9cbiAgfVxuXG4gIHNldCBoYXNWaWRlbyAodmFsKSB7XG4gICAgdGhpcy5zdGF0ZS5faGFzVmlkZW8gPSB2YWxcbiAgICB0aGlzLnN0YXRlLl9tZWRpYUluZm8uaGFzVmlkZW8gPSB2YWxcbiAgfVxuXG4gIGdldCBoYXNWaWRlbyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuX2hhc1ZpZGVvXG4gIH1cblxuICBzZXQgdmlkZW9NZXRhRGF0YSAodmFsKSB7XG4gICAgdGhpcy5zdGF0ZS5fdmlkZW9NZXRhRGF0YSA9IHZhbFxuICB9XG5cbiAgZ2V0IHZpZGVvTWV0YURhdGEgKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLl92aWRlb01ldGFEYXRhXG4gIH1cblxuICBzZXQgYXVkaW9NZXRhRGF0YSAodmFsKSB7XG4gICAgdGhpcy5zdGF0ZS5fYXVkaW9NZXRhRGF0YSA9IHZhbFxuICB9XG5cbiAgZ2V0IGF1ZGlvTWV0YURhdGEgKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLl9hdWRpb01ldGFEYXRhXG4gIH1cblxuICBnZXQga2V5ZnJhbWVzICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5fbWVkaWFJbmZvLmtleWZyYW1lc1xuICB9XG4gIGdldCBpc1NlZWthYmxlICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5fbWVkaWFJbmZvLmhhc0tleWZyYW1lc1xuICB9XG5cbiAgZ2V0IGlzTGUgKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmlzTGVcbiAgfVxuICBnZXQgaGFzSW5pdGlhbE1ldGFEaXNwYXRjaGVkICgpIHtcbiAgICBjb25zdCB7XG4gICAgICBfaGFzQXVkaW8sXG4gICAgICBfaGFzVmlkZW8sXG4gICAgICBfYXVkaW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkLFxuICAgICAgX3ZpZGVvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZFxuICAgIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKF9oYXNBdWRpbyAmJiBfaGFzVmlkZW8pIHtcbiAgICAgIHJldHVybiBfYXVkaW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkICYmIF92aWRlb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWRcbiAgICB9XG4gICAgaWYgKF9oYXNBdWRpbyAmJiAhX2hhc1ZpZGVvKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYXVkaW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkXG4gICAgfVxuICAgIGlmICghX2hhc0F1ZGlvICYmIF9oYXNWaWRlbykge1xuICAgICAgcmV0dXJuIF92aWRlb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWRcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBnZXQgdmlkZW9UaW1lU2NhbGUgKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnRpbWVTY2FsZVxuICB9XG5cbiAgZ2V0IG1ldGFFbmRQb3NpdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUubWV0YUVuZFBvc2l0aW9uXG4gIH1cblxuICBzZXQgbWV0YUVuZFBvc2l0aW9uIChwb3MpIHtcbiAgICB0aGlzLnN0YXRlLm1ldGFFbmRQb3NpdGlvbiA9IHBvc1xuICB9XG5cbiAgZ2V0IGlzTGl2ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNMaXZlXG4gIH1cblxuICBzZXQgaXNMaXZlICh2YWwpIHtcbiAgICB0aGlzLnN0YXRlLmlzTGl2ZSA9IHZhbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGbHZUYWcge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy50YWdUeXBlID0gLTE7XG4gICAgICAgIHRoaXMuYm9keVNpemUgPSAtMTtcbiAgICAgICAgdGhpcy50YWdTaXplID0gLTE7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSAtMTtcbiAgICAgICAgdGhpcy5UaW1lc3RhbXAgPSAtMTtcbiAgICAgICAgdGhpcy5TdHJlYW1JRCA9IC0xO1xuICAgICAgICB0aGlzLmJvZHkgPSAtMTtcbiAgICAgICAgdGhpcy50aW1lID0gLTE7XG4gICAgICAgIHRoaXMuYXJyID0gW107XG4gICAgfVxuXG4gICAgZ2V0VGltZSAoKSB7XG4gICAgICAgIHRoaXMuYXJyID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5UaW1lc3RhbXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYXJyLnB1c2goKHRoaXMuVGltZXN0YW1wW2ldLnRvU3RyaW5nKDE2KS5sZW5ndGggPT09IDEgPyAnMCcgKyB0aGlzLlRpbWVzdGFtcFtpXS50b1N0cmluZygxNikgOiB0aGlzLlRpbWVzdGFtcFtpXS50b1N0cmluZygxNikpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFyci5wb3AoKTtcbiAgICAgICAgY29uc3QgdGltZSA9IHRoaXMuYXJyLmpvaW4oJycpO1xuICAgICAgICB0aGlzLnRpbWUgPSBwYXJzZUludCh0aW1lLCAxNik7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh0aW1lLCAxNik7XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbidcbmNvbnN0IEVycm9yVHlwZXMgPSB7XG4gIG5ldHdvcms6IHtcbiAgICBjb2RlOiAxLFxuICAgIG1zZzogJ+inhumikeS4i+i9vemUmeivrycsXG4gICAgcmVtYXJrOiAn5Y+q6KaB6KeG6aKR5LiL6L296ZSZ6K+v5bCx5L2/55So5q2k57G75Z6L77yM5peg6K665pivdmlkZW/mnKzouqvnmoTotoXml7bov5jmmK94aHLnmoTliIbmrrXor7fmsYLotoXml7bmiJbogIXotYTmupDkuI3lrZjlnKgnXG4gIH0sXG4gIG1zZToge1xuICAgIGNvZGU6IDIsXG4gICAgbXNnOiAn5rWB6L+95Yqg6ZSZ6K+vJyxcbiAgICByZW1hcms6ICfov73liqDmtYHnmoTml7blgJnlpoLmnpznsbvlnovkuI3lr7njgIHml6Dms5XooqvmraPnoa7op6PnoIHliJnkvJrop6blj5HmraTnsbvplJnor68nXG4gIH0sXG4gIHBhcnNlOiB7XG4gICAgY29kZTogMyxcbiAgICBtc2c6ICfop6PmnpDplJnor68nLFxuICAgIHJlbWFyazogJ21wNOOAgWhsc+OAgWZsduaIkeS7rOmDveaYr+S9v+eUqGpz6L+b6KGM5qC85byP6Kej5p6Q77yM5aaC5p6c6Kej5p6Q5aSx6LSl5YiZ5Lya6Kem5Y+R5q2k57G76ZSZ6K+vJ1xuICB9LFxuICBmb3JtYXQ6IHtcbiAgICBjb2RlOiA0LFxuICAgIG1zZzogJ+agvOW8j+mUmeivrycsXG4gICAgcmVtYXJrOiAn5aaC5p6c5rWP6KeI5Zmo5LiN5pSv5oyB55qE5qC85byP5a+86Ie05pKt5pS+6ZSZ6K+vJ1xuICB9LFxuICBkZWNvZGVyOiB7XG4gICAgY29kZTogNSxcbiAgICBtc2c6ICfop6PnoIHplJnor68nLFxuICAgIHJlbWFyazogJ+a1j+iniOWZqOino+eggeW8guW4uOS8muaKm+WHuuatpOexu+Wei+mUmeivrydcbiAgfSxcbiAgcnVudGltZToge1xuICAgIGNvZGU6IDYsXG4gICAgbXNnOiAn6K+t5rOV6ZSZ6K+vJyxcbiAgICByZW1hcms6ICfmkq3mlL7lmajor63ms5XplJnor68nXG4gIH0sXG4gIHRpbWVvdXQ6IHtcbiAgICBjb2RlOiA3LFxuICAgIG1zZzogJ+aSreaUvui2heaXticsXG4gICAgcmVtYXJrOiAn5pKt5pS+6L+H56iL5Lit5peg5rOV5q2j5bi46K+35rGC5LiL5LiA5Liq5YiG5q615a+86Ie05pKt5pS+5Lit5patJ1xuICB9LFxuICBvdGhlcjoge1xuICAgIGNvZGU6IDgsXG4gICAgbXNnOiAn5YW25LuW6ZSZ6K+vJyxcbiAgICByZW1hcms6ICfkuI3lj6/nn6XnmoTplJnor6/miJbooqvlv73nlaXnmoTplJnor6/nsbvlnosnXG4gIH1cbn1cblxuY2xhc3MgRXJyb3JzIHtcbiAgY29uc3RydWN0b3IgKHR5cGUsIGN1cnJlbnRUaW1lLCBkdXJhdGlvbiwgbmV0d29ya1N0YXRlLCByZWFkeVN0YXRlLCBzcmMsIGN1cnJlbnRTcmMsXG4gICAgZW5kZWQsIGVycmQgPSB7bGluZTogJycsIGhhbmRsZTogJycsIG1zZzogJycsIHZlcnNpb246ICcnfSkge1xuICAgIGxldCByID0ge31cbiAgICByLnBsYXllclZlcnNpb24gPSB2ZXJzaW9uIC8vIOaSreaUvuWZqOeJiOacrFxuICAgIHIuZXJyb3JUeXBlID0gdHlwZVxuICAgIHIuZG9tYWluID0gZG9jdW1lbnQuZG9tYWluIC8vIGRvbWFpblxuICAgIHIuZHVyYXRpb24gPSBkdXJhdGlvbiAvLyDop4bpopHml7bplb9cbiAgICByLmN1cnJlbnRUaW1lID0gY3VycmVudFRpbWVcbiAgICByLm5ldHdvcmtTdGF0ZSA9IG5ldHdvcmtTdGF0ZVxuICAgIHIucmVhZHlTdGF0ZSA9IHJlYWR5U3RhdGVcbiAgICByLmN1cnJlbnRTcmMgPSBjdXJyZW50U3JjXG4gICAgci5zcmMgPSBzcmNcbiAgICByLmVuZGVkID0gZW5kZWRcbiAgICByLmVycmQgPSBlcnJkIC8vIOmUmeivr+ivpuaDhVxuICAgIHIuZXggPSAoRXJyb3JUeXBlc1t0eXBlXSB8fCB7fSkubXNnIC8vIOihpeWFheS/oeaBr1xuICAgIHJldHVybiByXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JzXG4iLCIvL+egtOivkeiAhSBcbi8vcGFyc2VEYXRhIOacgOWQjuaYr+WIm+W7unRhZyB0aGlzLl9zdG9yZS5zdGF0ZS50YWdz5LitXG5pbXBvcnQgRGVtdXhlciBmcm9tICcuL2RlbXV4L0RlbXV4ZXInXG5pbXBvcnQgQnVmZmVyIGZyb20gJy4uL3dyaXRlL0J1ZmZlcidcbmltcG9ydCBUYWcgZnJvbSAnLi4vbW9kZWxzL1RhZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmx2UGFyc2VyIGV4dGVuZHMgRGVtdXhlciB7XG4gIGNvbnN0cnVjdG9yIChzdG9yZSkge1xuICAgIHN1cGVyKHN0b3JlKVxuICAgIHRoaXMuQ0xBU1NfTkFNRSA9IHRoaXMuY29uc3RydWN0b3IubmFtZVxuICAgIHRoaXMudGVtcF91OGEgPSBudWxsXG4gICAgdGhpcy5kYXRhTGVuID0gMFxuICAgIHRoaXMuc3RvcCA9IGZhbHNlXG4gICAgdGhpcy5pbmRleCA9IDAgLy8gcmVjb3JkIHRoZSBwb3NpdGlvbiBpbiBzaW5nbGUgcm91bmRcbiAgICB0aGlzLm9mZnNldCA9IDBcbiAgICB0aGlzLmZpbGVQb3NpdGlvbiA9IDAgLy8gcmVjb3JkIGN1cnJlbnQgZmlsZSBwb3NpdGlvblxuICAgIHRoaXMuZmlyc3RGbGFnID0gdHJ1ZVxuICB9XG5cbiAgc2VlayAoKSB7XG4gICAgdGhpcy5vZmZzZXQgPSAwXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnRlbXBfdThhID0gbnVsbFxuICAgIHRoaXMuZGF0YUxlbiA9IDBcbiAgICB0aGlzLnN0b3AgPSBmYWxzZVxuICAgIHRoaXMuaW5kZXggPSAwIC8vIHJlY29yZCB0aGUgcG9zaXRpb24gaW4gc2luZ2xlIHJvdW5kXG4gICAgdGhpcy5vZmZzZXQgPSAwXG4gICAgLy8g6K6w5b2V5b2T5YmN55qE6L+Z5qyh5pWw5o2u5omA5Zyo55qE5oC75pWw5o2u55qE5L2N572uIFxuICAgIHRoaXMuZmlsZVBvc2l0aW9uID0gMFxuICB9XG5cbiAgc2V0Rmx2IChmbHZVOGEpIHtcbiAgICAvLyBkZWJ1Z2dlclxuICAgIC8vIOavj+S4gOasoXNldEZsdumDveWbnumHjee9rmluZGV45ZKMb2Zmc2V0IOeEtuWQjui/lOWbnm9mZnNldCDlpJbpnaLmoLnmja5vZmZzZXTov5vooYzoo4HliarmlbDmja5cbiAgICB0aGlzLnN0b3AgPSBmYWxzZVxuICAgIHRoaXMuaW5kZXggPSAwXG4gICAgdGhpcy5vZmZzZXQgPSAwXG4gICAgY29uc3QgdGVtcFU4YSA9IHRoaXMudGVtcF91OGEgPSBmbHZVOGFcbiAgICB0aGlzLmRhdGFMZW4gPSB0aGlzLnRlbXBfdThhLmxlbmd0aFxuXG4gICAgaWYgKCF0aGlzLmZpcnN0RmxhZykge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VEYXRhKClcbiAgICAgIC8vIOi2hei/hzEz5Liq5a2X6IqC5omN5byA5aeL5aSE55CGXG4gICAgfSBlbHNlIGlmICh0ZW1wVThhLmxlbmd0aCA+IDEzICYmIEZsdlBhcnNlci5pc0ZsdkhlYWQodGVtcFU4YSkpIHtcbiAgICAgIC8vIOino+aekOaYr+WQpuaciemfs+inhumikSAgIFxuICAgICAgdGhpcy5wYXJzZUhlYWQoKVxuICAgICAgLy8g5pS55Y+YdGhpcy5pbmRleFxuICAgICAgdGhpcy5yZWFkRGF0YSg5KSAvLyDot7Pov4flpLTpg6ggIFxuICAgICAgdGhpcy5yZWFkRGF0YSg0KSAvLyDot7Pov4fkuIvkuIDkuKrorrDlvZXlpLTpg6hzaXpl55qEIGludDMyXG4gICAgICB0aGlzLnBhcnNlRGF0YSgpXG4gICAgICB0aGlzLmZpcnN0RmxhZyA9IGZhbHNlXG4gICAgICB0aGlzLmZpbGVQb3NpdGlvbiArPSB0aGlzLm9mZnNldCAvLyDov5nph4zlpb3lg4/mmK9idWcgcGFyc2VEYXRh6YeM6Z2i5bey57uP6L+b6KGM6K6h566X5LqGXG4gICAgICByZXR1cm4gdGhpcy5vZmZzZXRcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0XG4gICAgfVxuICB9XG5cbiAgcGFyc2VEYXRhICgpIHtcbiAgICAvLyBkZWJ1Z2dlclxuICAgIGNvbnN0IHtsZW5ndGg6IHU4YUxlbmd0aH0gPSB0aGlzLnRlbXBfdThhXG4gICAgLy8g6L+Z6YeM5pyJ5Liq55aR6ZeuIOWmguaenGhlYWRlcuWSjGJvZHnkuI3mmK/kuIDmrKHmnaXnmoQgdGFn5Lya5LiN5Lya6K6h566X6ZSZ6K+v77yM5rKh5pyJ5Lil5qC855qEdGFn55qE5byA5aeL5ZKM57uT5p2f5qCH5b+XIFxuICAgIC8vIOesrOS4gOasoWJ1ZmZlciB0YWfnmoRib2R55rKh5pyJ5a6M5YWo5Yiw57uT5p2f5LqGIOS9huaYr29mZnNldOaKijEx5LiqaGVhZGVy5a2X6IqC5Yig6Zmk5LqG77yM5LiL5qyh5p2l5bCx5rKh5pyJaGVhZGVy5a2X6IqC5LqG44CCXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB1OGFMZW5ndGggJiYgIXRoaXMuc3RvcCkge1xuICAgICAgLy9vZmZzZXTmmK/mnIDlkI7ov5Tlm57nmoTlpITnkIbliLDnmoTkvY3nva5cbiAgICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5pbmRleFxuICAgICAgY29uc3QgdGFnID0gbmV3IFRhZygpXG4gICAgICBpZiAodGhpcy51bnJlYWRMZW5ndGggPj0gMTEpIHtcbiAgICAgICAgLy8g5Y+v5Lul6K+75Ye6dGFn55qE5L+h5oGvIDEx5Liq5a2X6IqCXG4gICAgICAgIHRhZy5wb3NpdGlvbiA9IHRoaXMuZmlsZVBvc2l0aW9uICsgdGhpcy5vZmZzZXRcbiAgICAgICAgdGFnLnRhZ1R5cGUgPSB0aGlzLnJlYWREYXRhKDEpWzBdXG4gICAgICAgIHRhZy5ib2R5U2l6ZSA9IHRoaXMucmVhZERhdGEoMylcbiAgICAgICAgdGFnLlRpbWVzdGFtcCA9IHRoaXMucmVhZERhdGEoNClcbiAgICAgICAgdGFnLlN0cmFtSWQgPSB0aGlzLnJlYWREYXRhKDMpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDlpoLmnpzmlbDmja7lsI/kuo4xMeS4quWtl+iKgiAg5b2T5YmNdGFn5L+h5oGv5LiN5a6M5pW0IOWImeebtOaOpXJldHVybiBvZmZzZXTlsLHmmK/lvZPliY3nmoRpbmRleFxuICAgICAgICB0aGlzLnN0b3AgPSB0cnVlXG4gICAgICAgIC8v5LiN5pS55Y+Yb2Zmc2V0IOaLvOaOpeS4i+asoeeahOaVsOaNrue7p+e7reWkhOeQhlxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMudW5yZWFkTGVuZ3RoID49IHRoaXMuZ2V0Qm9keVNpemUodGFnLmJvZHlTaXplKSArIDQpIHtcbiAgICAgICAgdGFnLmJvZHkgPSB0aGlzLnJlYWREYXRhKHRoaXMuZ2V0Qm9keVNpemUodGFnLmJvZHlTaXplKSlcbiAgICAgICAgdGFnLnRhZ1NpemUgPSB0aGlzLnJlYWREYXRhKDQpXG4gICAgICAgIC8vIOacgOWQjuaYr+WtmOaUvuWIsOS6hnN0b3Jl5Lit55qEdGFnc1xuICAgICAgICBjb25zdCB7dGFncywgX2hhc1ZpZGVvLCBfaGFzQXVkaW99ID0gdGhpcy5fc3RvcmUuc3RhdGVcbiAgICAgICAgc3dpdGNoICh0YWcudGFnVHlwZSkge1xuICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIF9oYXNWaWRlbyAmJiB0YWdzLnB1c2godGFnKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICBfaGFzQXVkaW8gJiYgdGFncy5wdXNoKHRhZylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgIHRhZ3MucHVzaCh0YWcpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL+S4jeaUueWPmG9mZnNldCDmi7zmjqXkuIvmrKHnmoTmlbDmja7nu6fnu63lpITnkIZcbiAgICAgICAgdGhpcy5zdG9wID0gdHJ1ZVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICB0aGlzLm9mZnNldCA9IHRoaXMuaW5kZXhcbiAgICB9XG4gICAgLy8g5pS55Y+YZmlsZVBvc2l0aW9uXG4gICAgdGhpcy5maWxlUG9zaXRpb24gKz0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnRlbXBfdThhID0gbnVsbFxuICAgIHJldHVybiB0aGlzLm9mZnNldFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBzaXplQXJyXG4gICAqIEByZXR1cm5cbiAgICovXG4gIGdldEJvZHlTaXplIChzaXplQXJyKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5yZWFkQXNJbnQoc2l6ZUFycilcbiAgfVxuICAvLyBcbiAgcGFyc2VIZWFkICgpIHtcbiAgICBjb25zdCB7dGVtcF91OGE6IHRlbXBVOGEsIF9zdG9yZX0gPSB0aGlzXG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgbWF0Y2g6IGZhbHNlXG4gICAgfVxuICAgIC8vIOesrOWbm+S4quWtl+iKguaYrzFcbiAgICBpZiAodGVtcFU4YVszXSAhPT0gMSkge1xuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgICAvLyDnrKzkupTkuKrlrZfoioJcbiAgICBjb25zdCBmbGFnID0gdGVtcFU4YVs0XVxuICAgIC8vIDEwMCAg56ys5LiJ5L2N5pivMeS7o+ihqOaciemfs+mikVxuICAgIGNvbnN0IGhhc0F1ZGlvID0gKChmbGFnICYgNCkgPj4+IDIpICE9PSAwXG4gICAgLy8gMDEg56ys5LiA5L2N5pivMSDku6PooajmnInop4bpopFcbiAgICBjb25zdCBoYXNWaWRlbyA9IChmbGFnICYgMSkgIT09IDBcblxuICAgIGlmICghaGFzQXVkaW8gJiYgIWhhc1ZpZGVvKSB7XG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgX3N0b3JlLmhhc0F1ZGlvID0gaGFzQXVkaW9cbiAgICBfc3RvcmUuaGFzVmlkZW8gPSBoYXNWaWRlb1xuICB9XG5cbiAgcmVhZERhdGEgKGxlbmd0aCkge1xuICAgIC8vIHRoaXMuaW5kZXjmsLjov5zlnKjmnKror7vmlbDmja7nmoTnrKzkuIDkuKpcbiAgICBjb25zdCBfaW5kZXggPSB0aGlzLmluZGV4XG4gICAgdGhpcy5pbmRleCArPSBsZW5ndGhcbiAgICByZXR1cm4gdGhpcy50ZW1wX3U4YS5zbGljZShfaW5kZXgsIF9pbmRleCArIGxlbmd0aClcbiAgfVxuXG4gIGdldCB1bnJlYWRMZW5ndGggKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFMZW4gLSB0aGlzLmluZGV4XG4gIH1cblxuICBzdGF0aWMgaXNGbHZIZWFkICh0ZW1wVThhKSB7XG4gICAgbGV0IGZpcnN0VGhyZWVDaGFycyA9IFt0ZW1wVThhWzBdLCB0ZW1wVThhWzFdLCB0ZW1wVThhWzJdXVxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgZmlyc3RUaHJlZUNoYXJzKSA9PT0gJ0ZMVidcbiAgfVxufVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudC1lbWl0dGVyJ1xubGV0IGNvdW50ID0gMFxuY2xhc3MgTVNFIHtcbiAgY29uc3RydWN0b3IgKG1lZGlhRWxlbWVudCkge1xuICAgIC8vY29kZWNzIOino+eggeWZqFxuICAgIHRoaXMuY29kZWNzID0gJ3ZpZGVvL21wNDsgY29kZWNzPVwiYXZjMS42NDAwMUUsIG1wNGEuNDAuNVwiJ1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIEV2ZW50RW1pdHRlcih0aGlzKVxuICAgIHRoaXMubWVkaWFTb3VyY2UgPSBuZXcgd2luZG93Lk1lZGlhU291cmNlKClcbiAgICBtZWRpYUVsZW1lbnQuc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5tZWRpYVNvdXJjZSlcbiAgICB0aGlzLnVybCA9IG1lZGlhRWxlbWVudC5zcmNcbiAgICB0aGlzLmhhbmRsZVNvdXJjZU9wZW4gPSB0aGlzLm9uU291cmNlT3Blbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5tZWRpYVNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdzb3VyY2VvcGVuJywgdGhpcy5oYW5kbGVTb3VyY2VPcGVuKVxuXG4gICAgdGhpcy5tZWRpYVNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdzb3VyY2VjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuZW1pdCgnc291cmNlY2xvc2UnKVxuICAgIH0pXG4gIH1cblxuICBvblNvdXJjZU9wZW4gKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5zb3VyY2VCdWZmZXIgPSBzZWxmLm1lZGlhU291cmNlLmFkZFNvdXJjZUJ1ZmZlcihzZWxmLmNvZGVjcylcbiAgICBzZWxmLnNvdXJjZUJ1ZmZlci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBzZWxmLmVtaXQoJ2Vycm9yJywge1xuICAgICAgICB0eXBlOiAnc291cmNlQnVmZmVyJyxcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH0pXG4gICAgfSlcbiAgICBzZWxmLnNvdXJjZUJ1ZmZlci5hZGRFdmVudExpc3RlbmVyKCd1cGRhdGVlbmQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgc2VsZi5lbWl0KCd1cGRhdGVlbmQnKVxuICAgIH0pXG4gICAgc2VsZi5lbWl0KCdzb3VyY2VvcGVuJylcbiAgICBzZWxmLnNvdXJjZUJ1ZmZlci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBzZWxmLmVtaXQoJ2Vycm9yJywge1xuICAgICAgICB0eXBlOiAnbWVkaWFTb3VyY2UnLFxuICAgICAgICBlcnJvcjogZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIGdldCBzdGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVkaWFTb3VyY2UucmVhZHlTdGF0ZVxuICB9XG5cbiAgZ2V0IGR1cmF0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5tZWRpYVNvdXJjZS5kdXJhdGlvblxuICB9XG5cbiAgc2V0IGR1cmF0aW9uICh2YWx1ZSkge1xuICAgIHRoaXMubWVkaWFTb3VyY2UuZHVyYXRpb24gPSB2YWx1ZVxuICB9XG5cbiAgYXBwZW5kQnVmZmVyIChidWZmZXIpIHtcbiAgICBsZXQgc291cmNlQnVmZmVyID0gdGhpcy5zb3VyY2VCdWZmZXJcbiAgICBpZiAoc291cmNlQnVmZmVyLnVwZGF0aW5nID09PSBmYWxzZSAmJiB0aGlzLnN0YXRlID09PSAnb3BlbicpIHtcbiAgICAgIHNvdXJjZUJ1ZmZlci5hcHBlbmRCdWZmZXIoYnVmZmVyKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICdjbG9zZWQnKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCB7XG4gICAgICAgICAgdHlwZTogJ3NvdXJjZUJ1ZmZlcicsXG4gICAgICAgICAgZXJyb3I6IG5ldyBFcnJvcignbWVkaWFTb3VyY2UgaXMgbm90IGF0dGFjaGVkIHRvIHZpZGVvIG9yIG1lZGlhU291cmNlIGlzIGNsb3NlZCcpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09ICdlbmRlZCcpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIHtcbiAgICAgICAgICB0eXBlOiAnc291cmNlQnVmZmVyJyxcbiAgICAgICAgICBlcnJvcjogbmV3IEVycm9yKCdtZWRpYVNvdXJjZSBpcyBjbG9zZWQnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNvdXJjZUJ1ZmZlci51cGRhdGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuZW1pdCgnd2FybicsIHtcbiAgICAgICAgICAgIHR5cGU6ICdzb3VyY2VCdWZmZXInLFxuICAgICAgICAgICAgZXJyb3I6IG5ldyBFcnJvcignbWVkaWFTb3VyY2UgaXMgYnVzeScpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICAvLyB0aGlzLm1lZGlhU291cmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NvdXJjZW9wZW4nLCB0aGlzLmhhbmRsZVNvdXJjZU9wZW4pXG4gICAgdGhpcy5fX2VlX18gPSB7fVxuICAgIC8vIHRoaXMubWVkaWFTb3VyY2UgPSBudWxsXG4gICAgLy8gdGhpcy5lbmRPZlN0cmVhbSgpXG4gIH1cbiAgcmVtb3ZlQnVmZmVyIChzdGFydCwgZW5kKSB7XG4gICAgdGhpcy5zb3VyY2VCdWZmZXIucmVtb3ZlKHN0YXJ0LCBlbmQpXG4gIH1cblxuICBlbmRPZlN0cmVhbSAoKSB7XG4gICAgaWYgKHRoaXMubWVkaWFTb3VyY2UucmVhZHlTdGF0ZSA9PT0gJ29wZW4nKSB7XG4gICAgICB0aGlzLm1lZGlhU291cmNlLmVuZE9mU3RyZWFtKClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaXNTdXBwb3J0ZWQgKGNvZGVjcykge1xuICAgIHJldHVybiB3aW5kb3cuTWVkaWFTb3VyY2UgJiYgd2luZG93Lk1lZGlhU291cmNlLmlzVHlwZVN1cHBvcnRlZChjb2RlY3MpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTVNFXG4iLCJpbXBvcnQgTXA0UmVtdXhlciBmcm9tICcuL3JlbXV4L01wNHJlbXV4J1xuaW1wb3J0IEZsdlBhcnNlciBmcm9tICcuL0ZsdlBhcnNlcidcbmltcG9ydCBUYWdEZW11eGVyIGZyb20gJy4vZGVtdXgvVGFnRGVtdXhlcidcbmltcG9ydCBTdG9yZSBmcm9tICcuLi9tb2RlbHMvU3RvcmUnXG5pbXBvcnQgVm9kVGFzayBmcm9tICcuLi90YXNrcy9Wb2RUYXNrJ1xuaW1wb3J0IExpdmVUYXNrIGZyb20gJy4uL3Rhc2tzL0xpdmVUYXNrJ1xuaW1wb3J0IEJ1ZmZlciBmcm9tICcuLi93cml0ZS9CdWZmZXInXG5pbXBvcnQgVHJhbnNDb2RlciBmcm9tICcuL1RyYW5zQ29kZXInXG5cbmNvbnN0IE5PT1AgPSAoKSA9PiB7fVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblBhcnNlciBleHRlbmRzIFRyYW5zQ29kZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnLCBwbGF5ZXIpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5DTEFTU19OQU1FID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnXG4gICAgdGhpcy5fcGxheWVyID0gcGxheWVyXG4gICAgdGhpcy5fdGVtcEJhc2VUaW1lID0gMFxuICAgIHRoaXMuZmlyc3RGbGFnID0gdHJ1ZVxuICAgIHRoaXMuX3N0b3JlID0gbmV3IFN0b3JlKClcbiAgICB0aGlzLl9zdG9yZS5pc0xpdmUgPSBjb25maWcuaXNMaXZlIHx8IGZhbHNlXG4gICAgdGhpcy5fc3RvcmUucGxheWVyID0gcGxheWVyXG4gICAgLy8g6Kej5p6Q5oiQdGFnIOWtmOWFpXN0b3JlXG4gICAgdGhpcy5mbHZQYXJzZXIgPSBuZXcgRmx2UGFyc2VyKHRoaXMuX3N0b3JlKVxuICAgIC8vIOagh+iusOino+aekOWZqFxuICAgIHRoaXMudGFnRGVtdXhlciA9IG5ldyBUYWdEZW11eGVyKHRoaXMuX3N0b3JlKVxuICAgIHRoaXMubXA0cmVtdXhlciA9IG5ldyBNcDRSZW11eGVyKHRoaXMuX3N0b3JlKVxuICAgIHRoaXMuYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgdGhpcy5idWZmZXJLZXlmcmFtZXMgPSBuZXcgU2V0KClcbiAgICB0aGlzLk1FVEFfQ0hVTktfU0laRSA9IE1hdGgucG93KDEwLCA2KVxuICAgIHRoaXMuQ0hVTktfU0laRSA9IE1hdGgucG93KDEwLCA2KVxuICAgIHRoaXMuZnR5cF9tb292ID0gbnVsbFxuICAgIHRoaXMuaXNTb3VyY2VPcGVuID0gZmFsc2VcbiAgICB0aGlzLl9pc05ld1NlZ21lbnRzQXJyaXZhbCA9IGZhbHNlXG4gICAgdGhpcy5pc1NlZWtpbmcgPSBmYWxzZVxuICAgIHRoaXMubG9hZFRhc2sgPSBudWxsXG4gICAgdGhpcy5yYW5nZSA9IHtcbiAgICAgIHN0YXJ0OiAtMSxcbiAgICAgIGVuZDogLTFcbiAgICB9XG4gICAgdGhpcy5fcGVuZGluZ0ZyYWdtZW50cyA9IFtdXG4gICAgdGhpcy5fcGVuZGluZ1JlbW92ZVJhbmdlID0gW11cbiAgICB0aGlzLmVycl9jbnQgPSAwXG4gICAgdGhpcy5yZXF1ZXN0Q29uZmlnID0ge1xuICAgICAgbW9kZTogdGhpcy5fY29uZmlnLmNvcnMgPyAnY29ycycgOiAnc2FtZS1vcmlnaW4nXG4gICAgfVxuICAgIHRoaXMuaW5pdEV2ZW50QmluZCgpXG4gIH1cbiAgLy8g5byA5aeL5Yqg6L295pWw5o2uXG4gIHN0YXJ0TG9hZERhdGEgKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmlzTGl2ZSkge1xuICAgICAgdGhpcy5pbml0TWV0YSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdExpdmVTdHJlYW0oKVxuICAgIH1cbiAgfVxuICAvLyDnm7Tmkq1cbiAgaW5pdExpdmVTdHJlYW0gKCkge1xuICAgIC8vIOWKoOi9veaVsOaNrlxuICAgIHRoaXMubG9hZFRhc2sgPSBuZXcgTGl2ZVRhc2sodGhpcy5fY29uZmlnLnVybCwgdGhpcy5yZXF1ZXN0Q29uZmlnKS5ydW4odGhpcy5sb2FkTGl2ZURhdGEuYmluZCh0aGlzKSlcbiAgfVxuXG4gIGxvYWRMaXZlRGF0YSAoYnVmZmVyKSB7XG4gICAgLy8g55u05pKt57uT5p2fXG4gICAgaWYgKGJ1ZmZlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmVtaXQoJ2xpdmUtZW5kJylcbiAgICAgIHRoaXMuX3BsYXllci5tc2UuZW5kT2ZTdHJlYW0oKVxuICAgICAgdGhpcy5kZXN0cm95KClcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvemgtQ04vZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvVWludDhBcnJheVxuICAgICAgLy8gVWludDhBcnJheSA45L2N5peg56ym5Y+35pW05Z6L5pWw57uEICDmr4/kuIDkuKrlhYPntKDmraPlpb3mmK/kuIDkuKrlrZfoioJcbiAgICAgIC8vIHRoaXMuYnVmZmVy5bCx5piv5LiA5Liq5pWw5o2u57yT5Yay5rGgIOW+gOmHjOWKoOaVsOaNriDmoLnmja7lpITnkIbnmoRvZmZzZXTov5vooYzliKDpmaRcbiAgICAgIHRoaXMuYnVmZmVyLndyaXRlKG5ldyBVaW50OEFycmF5KGJ1ZmZlcikpXG4gICAgICAvLyDop6PmnpB0YWdcbiAgICAgIGxldCBvZmZzZXQgPSB0aGlzLnNldEZsdih0aGlzLmJ1ZmZlci5idWZmZXIpXG4gICAgICB0aGlzLmJ1ZmZlci5idWZmZXIgPSB0aGlzLmJ1ZmZlci5idWZmZXIuc2xpY2Uob2Zmc2V0KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8g6Z2e55u05pKtXG4gIGluaXRNZXRhICgpIHtcbiAgICBkZWJ1Z2dlclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgUmVzb2x2ZXIgPSB7XG4gICAgICByZXNvbHZlQ2h1bmsgKHt0aW1lU3RhbXAsIGJ1ZmZlcn0pIHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgaWYgKHRpbWVTdGFtcCAhPT0gc2VsZi5sb2FkVGFzay50aW1lU3RhbXApIHJldHVyblxuICAgICAgICBzZWxmLmVycl9jbnQgPSAwXG4gICAgICAgIHNlbGYuYnVmZmVyLndyaXRlKG5ldyBVaW50OEFycmF5KGJ1ZmZlcikpXG4gICAgICAgIGxldCBvZmZzZXQgPSBzZWxmLnNldEZsdihzZWxmLmJ1ZmZlci5idWZmZXIpXG4gICAgICAgIHNlbGYuYnVmZmVyLmJ1ZmZlciA9IHNlbGYuYnVmZmVyLmJ1ZmZlci5zbGljZShvZmZzZXQpXG4gICAgICAgIGlmICghc2VsZi5pc01lZGlhSW5mb1JlYWR5KSB7XG4gICAgICAgICAgc2VsZi5pbml0TWV0YSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy/liJ3lp4vlgLwgc3RhcnQ6IDAgIGVuZDogOTk5OTk5XG4gICAgdGhpcy5yYW5nZSA9IHtcbiAgICAgIHN0YXJ0OiB0aGlzLnJhbmdlLmVuZCArIDEsXG4gICAgICBlbmQ6IHRoaXMucmFuZ2UuZW5kICsgdGhpcy5NRVRBX0NIVU5LX1NJWkVcbiAgICB9XG4gICAgY29uc3QgbG9hZERhdGEgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkTWV0YURhdGEodGhpcy5yYW5nZS5zdGFydCwgdGhpcy5yYW5nZS5lbmQpLnRoZW4oUmVzb2x2ZXIucmVzb2x2ZUNodW5rKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICBpZiAodGhpcy5lcnJfY250ID49IDMpIHtcbiAgICAgICAgICB0aGlzLl9wbGF5ZXIuZW1pdCgnZXJyb3InLCBlKVxuICAgICAgICAgIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lcnJfY250ICs9IDFcbiAgICAgICAgbG9hZERhdGEoKVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGxvYWREYXRhKClcbiAgfVxuXG4gIGxvYWRTZWdtZW50cyAoY2hhbmdlUmFuZ2UsIGN1cnJlbnRUaW1lID0gMCwgcHJlbG9hZFRpbWUpIHtcbiAgICBkZWJ1Z2dlclxuICAgIHRoaXMuX2lzTmV3U2VnbWVudHNBcnJpdmFsID0gZmFsc2VcbiAgICBjb25zdCByZXNvbHZlQ2h1bmsgPSAoe3RpbWVTdGFtcCwgYnVmZmVyfSkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNUZW1wUGxheWVyKSB7XG4gICAgICAgIHRoaXMuaXNUZW1wUGxheWVyID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIGlmICh0aW1lU3RhbXAgIT09IHRoaXMubG9hZFRhc2sudGltZVN0YW1wKSByZXR1cm5cbiAgICAgIHRoaXMuZXJyX2NudCA9IDBcbiAgICAgIHRoaXMuYnVmZmVyLndyaXRlKG5ldyBVaW50OEFycmF5KGJ1ZmZlcikpXG4gICAgICBpZiAodGhpcy5pc1NlZWtpbmcpIHtcbiAgICAgICAgdGhpcy5fcGVuZGluZ0ZyYWdtZW50cyA9IFtdXG4gICAgICB9XG4gICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5zZXRGbHYodGhpcy5idWZmZXIuYnVmZmVyKVxuICAgICAgdGhpcy5idWZmZXIuYnVmZmVyID0gdGhpcy5idWZmZXIuYnVmZmVyLnNsaWNlKG9mZnNldClcbiAgICAgIGlmICghdGhpcy5faXNOZXdTZWdtZW50c0Fycml2YWwpIHtcbiAgICAgICAgdGhpcy5sb2FkU2VnbWVudHModHJ1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNTZWVraW5nID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoYW5nZVJhbmdlKSB7XG4gICAgICBsZXQgX3JhbmdlID0gdGhpcy5yYW5nZVxuXG4gICAgICBpZiAodGhpcy5nZXROZXh0UmFuZ2VFbmQoY3VycmVudFRpbWUsIHByZWxvYWRUaW1lKSA8PSBfcmFuZ2UuZW5kKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLnJhbmdlID0ge1xuICAgICAgICBzdGFydDogdGhpcy5yYW5nZS5lbmQgKyAxLFxuICAgICAgICBlbmQ6IGN1cnJlbnRUaW1lID09PSB1bmRlZmluZWQgPyB0aGlzLnJhbmdlLmVuZCArIHRoaXMuQ0hVTktfU0laRSAtIDEgOiB0aGlzLmdldE5leHRSYW5nZUVuZChjdXJyZW50VGltZSwgcHJlbG9hZFRpbWUpIC0gMVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5yYW5nZS5zdGFydCA+PSB0aGlzLnJhbmdlLmVuZCB8fCAhdGhpcy5yYW5nZS5lbmQpIHtcbiAgICAgICAgdGhpcy5yYW5nZSA9IF9yYW5nZVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbG9hZERhdGEgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdG9wKSByZXR1cm5cbiAgICAgIHJldHVybiB0aGlzLl9sb2FkU2VnbWVudHNEYXRhKHRoaXMucmFuZ2Uuc3RhcnQsIHRoaXMucmFuZ2UuZW5kKS50aGVuKHJlc29sdmVDaHVuaykuY2F0Y2goZSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmVycl9jbnQgPj0gMykge1xuICAgICAgICAgIHRoaXMuX3BsYXllci5lbWl0KCdlcnJvcicsICfliqDovb3op4bpopHlpLHotKUnKVxuICAgICAgICAgIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lcnJfY250ICs9IDFcbiAgICAgICAgbG9hZERhdGEoKVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGxvYWREYXRhKClcbiAgfVxuXG4gIGdldE5leHRSYW5nZUVuZCAoc3RhcnQsIHByZWxvYWRUaW1lKSB7XG4gICAgY29uc3Qge2tleWZyYW1lczoge3RpbWVzLCBmaWxlUG9zaXRpb25zfSwgdmlkZW9UaW1lU2NhbGV9ID0gdGhpcy5fc3RvcmVcbiAgICBpZiAoIXRpbWVzIHx8ICFmaWxlUG9zaXRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5yYW5nZS5lbmQgKyB0aGlzLkNIVU5LX1NJWkVcbiAgICB9XG4gICAgc3RhcnQgKj0gdmlkZW9UaW1lU2NhbGVcblxuICAgIGxldCBleHBlY3RFbmQgPSBzdGFydCArIChwcmVsb2FkVGltZSAqIHZpZGVvVGltZVNjYWxlKVxuICAgIGlmIChleHBlY3RFbmQgPiB0aW1lc1t0aW1lcy5sZW5ndGggLSAxXSkge1xuICAgICAgcmV0dXJuIGZpbGVQb3NpdGlvbnNbZmlsZVBvc2l0aW9ucy5sZW5ndGggLSAxXVxuICAgIH1cbiAgICBsZXQgbGVmdCA9IDBcbiAgICBsZXQgcmlnaHQgPSB0aW1lcy5sZW5ndGggLSAxXG4gICAgbGV0IGluZGV4XG5cbiAgICB3aGlsZSAobGVmdCA8PSByaWdodCkge1xuICAgICAgbGV0IG1pZCA9IE1hdGguZmxvb3IoKHJpZ2h0ICsgbGVmdCkgLyAyKVxuICAgICAgaWYgKHRpbWVzW21pZF0gPD0gZXhwZWN0RW5kICYmIGV4cGVjdEVuZCA8PSB0aW1lc1ttaWQgKyAxXSkge1xuICAgICAgICBpbmRleCA9IG1pZCArIDFcbiAgICAgICAgYnJlYWtcbiAgICAgIH0gZWxzZSBpZiAobGVmdCA9PT0gcmlnaHQpIHtcbiAgICAgICAgaW5kZXggPSBtaWRcbiAgICAgICAgYnJlYWtcbiAgICAgIH0gZWxzZSBpZiAoZXhwZWN0RW5kIDwgdGltZXNbbWlkXSkge1xuICAgICAgICByaWdodCA9IG1pZCAtIDFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlZnQgPSBtaWQgKyAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4ID8gZmlsZVBvc2l0aW9uc1tpbmRleF0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIF9sb2FkU2VnbWVudHNEYXRhIChzdGFydCA9IDAsIGVuZCA9IHN0YXJ0ICsgdGhpcy5DSFVOS19TSVpFKSB7XG4gICAgdGhpcy5sb2FkVGFzayA9IG5ldyBWb2RUYXNrKHRoaXMuX2NvbmZpZy51cmwsIFtzdGFydCwgZW5kXSwgdGhpcy5yZXF1ZXN0Q29uZmlnKVxuICAgIHJldHVybiB0aGlzLmxvYWRUYXNrLnByb21pc2VcbiAgfVxuXG4gIGxvYWRNZXRhRGF0YSAoc3RhcnQgPSAwLCBlbmQgPSBzdGFydCArIHRoaXMuTUVUQV9DSFVOS19TSVpFKSB7XG4gICAgdGhpcy5sb2FkVGFzayA9IG5ldyBWb2RUYXNrKHRoaXMuX2NvbmZpZy51cmwsIFtzdGFydCwgZW5kXSwgdGhpcy5yZXF1ZXN0Q29uZmlnKVxuICAgIHJldHVybiB0aGlzLmxvYWRUYXNrLnByb21pc2VcbiAgfVxuXG4gIHNldEZsdkZpcnN0IChhcnJheUJ1ZmYsIGJhc2VUaW1lKSB7XG4gICAgLy8g6LCD55SoZmx2UGFyc2VyXG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5mbHZQYXJzZXIuc2V0Rmx2KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZikpXG4gICAgY29uc3Qge3RhZ3N9ID0gdGhpcy5fc3RvcmUuc3RhdGVcblxuICAgIGlmICh0YWdzLmxlbmd0aCkge1xuICAgICAgaWYgKHRhZ3NbMF0udGFnVHlwZSAhPT0gMTgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmbHYgZmlsZSB3aXRob3V0IG1ldGFkYXRhIHRhZycpXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl90ZW1wQmFzZVRpbWUgIT09IDAgJiYgdGhpcy5fdGVtcEJhc2VUaW1lID09PSB0YWdzWzBdLmdldFRpbWUoKSkge1xuICAgICAgICB0aGlzLl9zdG9yZS5zdGF0ZS5fdGltZXN0YW1wQmFzZSA9IDBcbiAgICAgIH1cbiAgICAgIC8vIOino+aekOagh+iusFxuICAgICAgdGhpcy50YWdEZW11eGVyLnJlc29sdmVUYWdzKHRhZ3MpXG4gICAgfVxuXG4gICAgdGhpcy5maXJzdEZsYWcgPSBmYWxzZVxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIHNldEZsdlVzdWFsbHkgKGFycmF5QnVmZiwgYmFzZVRpbWUpIHtcbiAgICB0aGlzLmlzUGFyc2luZyA9IHRydWVcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmZsdlBhcnNlci5zZXRGbHYobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmKSlcbiAgICBjb25zdCB7dGFnc30gPSB0aGlzLl9zdG9yZS5zdGF0ZVxuICAgIGlmICh0YWdzLmxlbmd0aCkge1xuICAgICAgLy8g6Kej5p6Q5qCH6K6wXG4gICAgICB0aGlzLnRhZ0RlbXV4ZXIucmVzb2x2ZVRhZ3ModGFncylcbiAgICB9XG4gICAgcmV0dXJuIG9mZnNldFxuICB9XG5cbiAgaGFuZGxlRGF0YVJlYWR5IChhdWRpb1RyYWNrLCB2aWRlb1RyYWNrKSB7XG4gICAgdGhpcy5tcDRyZW11eGVyLnJlbXV4KGF1ZGlvVHJhY2ssIHZpZGVvVHJhY2spXG4gIH1cblxuICBoYW5kbGVNZXRhRGF0YVJlYWR5ICh0eXBlLCBtZXRhKSB7XG4gICAgdGhpcy5tcDRyZW11eGVyLm9uTWV0YURhdGFSZWFkeSh0eXBlLCBtZXRhKVxuICB9XG5cbiAgaGFuZGxlRXJyb3IgKGUpIHtcbiAgICB0aGlzLmVycm9yKGUpXG4gIH1cblxuICBoYW5kbGVOZXdNZWRpYUZyYWdtZW50IChuZXdGcmFnKSB7XG4gICAgdGhpcy5faXNOZXdTZWdtZW50c0Fycml2YWwgPSB0cnVlXG4gICAgdGhpcy5fcGVuZGluZ0ZyYWdtZW50cy5wdXNoKG5ld0ZyYWcpXG4gICAgY29uc3Qge3JhbmRvbUFjY2Vzc1BvaW50c30gPSBuZXdGcmFnLmZyYWdtZW50XG4gICAgaWYgKHJhbmRvbUFjY2Vzc1BvaW50cyAmJiByYW5kb21BY2Nlc3NQb2ludHMubGVuZ3RoKSB7XG4gICAgICByYW5kb21BY2Nlc3NQb2ludHMuZm9yRWFjaChyYXAgPT4ge1xuICAgICAgICB0aGlzLmJ1ZmZlcktleWZyYW1lcy5hZGQocmFwLmR0cylcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmICghdGhpcy5pc1NvdXJjZU9wZW4pIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodGhpcy5fcGVuZGluZ0ZyYWdtZW50cy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGZyYWdtZW50ID0gdGhpcy5fcGVuZGluZ0ZyYWdtZW50cy5zaGlmdCgpXG4gICAgICBpZiAoIXRoaXMuaGFuZGxlTWVkaWFGcmFnbWVudChmcmFnbWVudCkpIHtcbiAgICAgICAgdGhpcy5fcGVuZGluZ0ZyYWdtZW50cy51bnNoaWZ0KGZyYWdtZW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTZWVrRW5kKClcbiAgICAgICAgdGhpcy5fcGxheWVyLmVtaXQoJ2NhY2hldXBkYXRlJywgdGhpcy5fcGxheWVyKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU1lZGlhSW5mb1JlYWR5IChtZWRpYUluZm8pIHtcbiAgICBjb25zdCBGVFlQX01PT1YgPSB0aGlzLm1wNHJlbXV4ZXIub25NZWRpYUluZm9SZWFkeShtZWRpYUluZm8pXG4gICAgaWYgKCF0aGlzLmZ0eXBfbW9vdikge1xuICAgICAgdGhpcy5mdHlwX21vb3YgPSBGVFlQX01PT1ZcbiAgICAgIHRoaXMuZW1pdCgncmVhZHknLCBGVFlQX01PT1YpXG4gICAgfVxuICB9XG5cbiAgaW5pdEV2ZW50QmluZCAoKSB7XG4gICAgdGhpcy50YWdEZW11eGVyLmhhbmRsZURhdGFSZWFkeSA9IHRoaXMuaGFuZGxlRGF0YVJlYWR5LmJpbmQodGhpcylcbiAgICB0aGlzLnRhZ0RlbXV4ZXIuaGFuZGxlTWVkaWFJbmZvUmVhZHkgPSB0aGlzLmhhbmRsZU1lZGlhSW5mb1JlYWR5LmJpbmQodGhpcylcbiAgICB0aGlzLnRhZ0RlbXV4ZXIuaGFuZGxlTWV0YURhdGFSZWFkeSA9IHRoaXMuaGFuZGxlTWV0YURhdGFSZWFkeS5iaW5kKHRoaXMpXG4gICAgdGhpcy50YWdEZW11eGVyLnNldEV2ZW50QmluZCgpXG4gICAgdGhpcy5tcDRyZW11eGVyLmhhbmRsZU1lZGlhRnJhZ21lbnQgPSB0aGlzLmhhbmRsZU5ld01lZGlhRnJhZ21lbnQuYmluZCh0aGlzKVxuICB9XG5cbiAgcmVwbGF5ICgpIHtcbiAgICB0aGlzLmlzU291cmNlT3BlbiA9IGZhbHNlXG4gICAgdGhpcy5yYW5nZSA9IHtcbiAgICAgIHN0YXJ0OiB0aGlzLl9zdG9yZS5tZXRhRW5kUG9zaXRpb24sXG4gICAgICBlbmQ6IHRoaXMuZ2V0TmV4dFJhbmdlRW5kKDAsIHRoaXMuX2NvbmZpZy5wcmVsb2FkVGltZSkgLSAxXG4gICAgfVxuICAgIHRoaXMubXA0cmVtdXhlci5zZWVrKClcbiAgICB0aGlzLmZsdlBhcnNlci5zZWVrKClcbiAgICB0aGlzLmNsZWFyQnVmZmVyKClcbiAgICB0aGlzLmxvYWRTZWdtZW50cyhmYWxzZSlcbiAgfVxuXG4gIGNsZWFyQnVmZmVyICgpIHtcbiAgICB0aGlzLl9wZW5kaW5nRnJhZ21lbnRzID0gW11cbiAgICB0aGlzLl9wZW5kaW5nUmVtb3ZlUmFuZ2UgPSBbXVxuICB9XG4gIHVuYmluZEV2ZW50cyAoKSB7XG4gICAgdGhpcy50YWdEZW11eGVyLmhhbmRsZURhdGFSZWFkeSA9IE5PT1BcbiAgICB0aGlzLnRhZ0RlbXV4ZXIuaGFuZGxlTWVkaWFJbmZvUmVhZHkgPSBOT09QXG4gICAgdGhpcy50YWdEZW11eGVyLmhhbmRsZU1ldGFEYXRhUmVhZHkgPSBOT09QXG4gICAgdGhpcy50YWdEZW11eGVyLnNldEV2ZW50QmluZCgpXG4gICAgdGhpcy5tcDRyZW11eGVyLmhhbmRsZU1lZGlhRnJhZ21lbnQgPSBOT09QXG4gIH1cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5tcDRyZW11eGVyLmRlc3Ryb3koKVxuICAgIHRoaXMuZmx2UGFyc2VyLmRlc3Ryb3koKVxuICAgIHRoaXMudGFnRGVtdXhlci5kZXN0cm95KClcbiAgICB0aGlzLm1wNHJlbXV4ZXIgPSBudWxsXG4gICAgdGhpcy5mbHZQYXJzZXIgPSBudWxsXG4gICAgdGhpcy50YWdEZW11eGVyID0gbnVsbFxuICAgIHRoaXMubG9hZFNlZ21lbnRzID0gKCkgPT4gbnVsbFxuICAgIHRoaXMuX3N0b3JlID0gbnVsbFxuICAgIHRoaXMuY2xlYXJCdWZmZXIoKVxuICAgIHRoaXMuc3RvcCA9IHRydWVcbiAgICB0aGlzLmxvYWRUYXNrICYmIHRoaXMubG9hZFRhc2suY2FuY2VsKClcbiAgfVxuXG4gIHNlZWsgKHRhcmdldCkge1xuICAgIHRoaXMubG9hZFRhc2suY2FuY2VsKClcbiAgICBjb25zdCB7a2V5ZnJhbWVzID0ge30sIHZpZGVvVGltZVNjYWxlfSA9IHRoaXMuX3N0b3JlXG4gICAgbGV0IHNlZWtTdGFydCA9IHRhcmdldCAqIHZpZGVvVGltZVNjYWxlXG4gICAgbGV0IHN0YXJ0RmlsZVBvc1xuICAgIGxldCBlbmRGaWxlUG9zXG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5taW4oa2V5ZnJhbWVzLmZpbGVQb3NpdGlvbnMubGVuZ3RoLCBrZXlmcmFtZXMudGltZXMubGVuZ3RoKVxuICAgIGxldCB7cHJlbG9hZFRpbWV9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBmdW5jdGlvbiBnZXRFbmRGaWxlUG9zICh0aW1lLCBpZHgpIHtcbiAgICAgIGlmIChpZHggPT09IGtleWZyYW1lcy50aW1lcy5sZW5ndGgpIHtcbiAgICAgICAgZW5kRmlsZVBvcyA9IGlkeFxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIGlmICh0aW1lIDw9IHByZWxvYWRUaW1lICYmIHByZWxvYWRUaW1lIDw9IGtleWZyYW1lcy50aW1lc1tpZHggKyAxXSkge1xuICAgICAgICBlbmRGaWxlUG9zID0gaWR4XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAvLyDpnIDopoHlpITnkIZFT0bnmoTmg4XlhrVcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IGxvID0gMFxuICAgIGxldCBoaSA9IGxlbmd0aCAtIDJcbiAgICB3aGlsZSAobG8gPD0gaGkpIHtcbiAgICAgIGxldCBtaWQgPSBNYXRoLmZsb29yKChsbyArIGhpKSAvIDIpXG4gICAgICBsZXQgY3VycmVudFRpbWUgPSBrZXlmcmFtZXMudGltZXNbbWlkXVxuICAgICAgbGV0IG5leHRUaW1lID0ga2V5ZnJhbWVzLnRpbWVzW21pZCArIDFdID8ga2V5ZnJhbWVzLnRpbWVzW21pZCArIDFdIDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgICAgIGlmICgoY3VycmVudFRpbWUgPD0gc2Vla1N0YXJ0ICYmIHNlZWtTdGFydCA8PSBuZXh0VGltZSkgfHwgbG8gPT09IGhpKSB7XG4gICAgICAgIHdoaWxlIChrZXlmcmFtZXMudGltZXNbbWlkXSA+PSBzZWVrU3RhcnQpIHtcbiAgICAgICAgICBtaWQgLT0gMVxuICAgICAgICB9XG4gICAgICAgIHN0YXJ0RmlsZVBvcyA9IG1pZCAtIDFcbiAgICAgICAgcHJlbG9hZFRpbWUgPSBwcmVsb2FkVGltZSAqIHZpZGVvVGltZVNjYWxlICsgc2Vla1N0YXJ0XG4gICAgICAgIGtleWZyYW1lcy50aW1lcy5ldmVyeShnZXRFbmRGaWxlUG9zKVxuICAgICAgICBicmVha1xuICAgICAgfSBlbHNlIGlmIChzZWVrU3RhcnQgPCBjdXJyZW50VGltZSkge1xuICAgICAgICBoaSA9IG1pZCAtIDFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvID0gbWlkICsgMVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy5pc1NlZWtpbmcpIHtcbiAgICAgIHRoaXMuaXNTZWVraW5nID0gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zdG9yZS5jbGVhclRhZ3MoKVxuICAgIH1cbiAgICB0aGlzLl9wZW5kaW5nRnJhZ21lbnRzID0gW11cbiAgICB0aGlzLm1wNHJlbXV4ZXIuc2VlaygpXG4gICAgdGhpcy5mbHZQYXJzZXIuc2VlaygpXG4gICAgVm9kVGFzay5jbGVhcigpXG4gICAgY29uc3QgX3JhbmdlID0gdGhpcy5yYW5nZVxuICAgIGlmIChrZXlmcmFtZXMuZmlsZVBvc2l0aW9uc1tzdGFydEZpbGVQb3NdIDwgX3JhbmdlLmVuZCkge1xuICAgICAgc3RhcnRGaWxlUG9zICs9IDFcbiAgICAgIGVuZEZpbGVQb3MgKz0gMVxuICAgIH1cbiAgICB0aGlzLnJhbmdlID0ge1xuICAgICAgc3RhcnQ6IGtleWZyYW1lcy5maWxlUG9zaXRpb25zW3N0YXJ0RmlsZVBvc10sXG4gICAgICBlbmQ6IGtleWZyYW1lcy5maWxlUG9zaXRpb25zW2VuZEZpbGVQb3NdIC0gMSB8fCAnJ1xuICAgIH1cbiAgICB0aGlzLmJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIHRoaXMubG9hZFNlZ21lbnRzKGZhbHNlKVxuICB9XG5cbiAgZ2V0IHNldEZsdiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RGbGFnID8gdGhpcy5zZXRGbHZGaXJzdCA6IHRoaXMuc2V0Rmx2VXN1YWxseVxuICB9XG5cbiAgZ2V0IGlzTWVkaWFJbmZvUmVhZHkgKCkge1xuICAgIHJldHVybiB0aGlzLl9zdG9yZS5tZWRpYUluZm8uaXNDb21wbGV0ZVxuICB9XG5cbiAgZ2V0IHZpZGVvRHVyYXRpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9zdG9yZS5tZWRpYUluZm8uZHVyYXRpb25cbiAgfVxuXG4gIGdldCBoYXNQZW5kaW5nRnJhZ21lbnRzICgpIHtcbiAgICByZXR1cm4gISF0aGlzLl9wZW5kaW5nRnJhZ21lbnRzLmxlbmd0aFxuICB9XG5cbiAgZ2V0IHBlbmRpbmdGcmFnbWVudHMgKCkge1xuICAgIHJldHVybiB0aGlzLl9wZW5kaW5nRnJhZ21lbnRzXG4gIH1cblxuICBnZXQgdmlkZW9UaW1lU2NhbGUgKCkge1xuICAgIHJldHVybiB0aGlzLl9zdG9yZS52aWRlb1RpbWVTY2FsZVxuICB9XG5cbiAgZ2V0IGhhc1BlbmRpbmdSZW1vdmVSYW5nZXMgKCkge1xuICAgIHJldHVybiB0aGlzLl9wZW5kaW5nUmVtb3ZlUmFuZ2UubGVuZ3RoXG4gIH1cblxuICBnZXQgcGVuZGluZ1JlbW92ZVJhbmdlcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlbmRpbmdSZW1vdmVSYW5nZVxuICB9XG5cbiAgZ2V0IGlzU2Vla2FibGUgKCkge1xuICAgIHJldHVybiB0aGlzLl9zdG9yZS5pc1NlZWthYmxlXG4gIH1cbn1cbiIsImltcG9ydCBFeHBHb2xvbWIgZnJvbSAgJy4uL3V0aWxzL0V4cEdvbG9tYic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTUFNQYXJzZXIge1xuICAgIHN0YXRpYyBnZXRQcm9maWxlU3RyIChwcm9maWxlSWRjKSB7XG4gICAgICAgIHN3aXRjaCAocHJvZmlsZUlkYykge1xuICAgICAgICAgICAgY2FzZSA2NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0Jhc2VsaW5lJztcbiAgICAgICAgICAgIGNhc2UgNzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdNYWluJztcbiAgICAgICAgICAgIGNhc2UgODg6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdFeHRlbmRlZCc7XG4gICAgICAgICAgICBjYXNlIDEwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0hpZ2gnO1xuICAgICAgICAgICAgY2FzZSAxMTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdIaWdoMTAnO1xuICAgICAgICAgICAgY2FzZSAxMjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdIaWdoNDIyJztcbiAgICAgICAgICAgIGNhc2UgMjQ0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnSGlnaDQ0NCc7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnVW5rbm93bic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0TGV2ZWxTdHIgKGxldmVsSWRjKSB7XG4gICAgICAgIHJldHVybiAobGV2ZWxJZGMgLyAxMCkudG9GaXhlZCgxKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q2hyb21hRm9ybWF0U3RyIChjaHJvbWEpIHtcbiAgICAgICAgc3dpdGNoIChjaHJvbWEpIHtcbiAgICAgICAgICAgIGNhc2UgNDIwOlxuICAgICAgICAgICAgICAgIHJldHVybiAnNDoyOjAnO1xuICAgICAgICAgICAgY2FzZSA0MjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuICc0OjI6Mic7XG4gICAgICAgICAgICBjYXNlIDQ0NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJzQ6NDo0JztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdVbmtub3duJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJlYWQgU1BTXG4gICAgICogQHBhcmFtIG9yaWdpbkFyclxuICAgICAqL1xuICAgIHN0YXRpYyBwYXJzZVNQUyAob3JpZ2luQXJyKSB7XG5cbiAgICAgICAgbGV0IHJic3AgPSBTUFNQYXJzZXIuX2Vic3AycmJzcChvcmlnaW5BcnIpO1xuXG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IG5ldyBFeHBHb2xvbWIocmJzcCk7XG4gICAgICAgIGNvbnN0IHNwc0NvbmZpZyA9IHN0cmVhbS5yZWFkU1BTKCk7XG4gICAgICAgIGNvbnN0IHsgY2hyb21hRm9ybWF0LCBsZXZlbElkYywgcHJvZmlsZUlkYyB9ID0gc3BzQ29uZmlnO1xuICAgICAgICBzcHNDb25maWcucHJvZmlsZVN0cmluZyA9IFNQU1BhcnNlci5nZXRQcm9maWxlU3RyKHByb2ZpbGVJZGMpO1xuICAgICAgICBzcHNDb25maWcubGV2ZWxTdHJpbmcgPSBTUFNQYXJzZXIuZ2V0TGV2ZWxTdHIobGV2ZWxJZGMpO1xuICAgICAgICBzcHNDb25maWcuY2hyb21hRm9ybWF0U3RyaW5nID0gU1BTUGFyc2VyLmdldENocm9tYUZvcm1hdFN0cihjaHJvbWFGb3JtYXQpO1xuXG4gICAgICAgIHJldHVybiBzcHNDb25maWc7XG5cbiAgICB9XG5cbiAgICAvL1xuICAgIHN0YXRpYyBfZWJzcDJyYnNwIChvcmlnaW5BcnIpIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luTGVuID0gIG9yaWdpbkFyci5ieXRlTGVuZ3RoO1xuICAgICAgICBjb25zdCBkaXN0ID0gbmV3IFVpbnQ4QXJyYXkob3JpZ2luQXJyLmJ5dGVMZW5ndGgpO1xuICAgICAgICBsZXQgZGlzdFNpemUgPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBvcmlnaW5MZW47IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPiAyICYmIG9yaWdpbkFycltpXSA9PT0gMyAmJiBvcmlnaW5BcnJbaSAtIDFdID09PSAwICYmIG9yaWdpbkFycltpIC0gMl0gPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc3RbZGlzdFNpemUrK10gPSBvcmlnaW5BcnJbaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGlzdC5idWZmZXIsIDAsIGRpc3RTaXplKTtcbiAgICB9XG59IiwiaW1wb3J0IG9ic2VydmVyIGZyb20gJy4uL3V0aWxzL09ic2VydmVyJ1xuaW1wb3J0IEVycm9ycyBmcm9tICcuLi9tb2RlbHMvZXJyb3InXG5cbi8qKlxuICog6L2s56CB5Zmo5Z+657G7XG4gKi9cbmNsYXNzIFRyYW5zQ29kZXIge1xuICBjb25zdHJ1Y3RvciAoc3RvcmUpIHtcbiAgICBpZiAoc3RvcmUpIHtcbiAgICAgIHRoaXMuX3N0b3JlID0gc3RvcmVcbiAgICB9XG4gICAgdGhpcy5fb2JzZXJ2ZXIgPSBvYnNlcnZlclxuICAgIHRoaXMub24gPSBvYnNlcnZlci5vbi5iaW5kKG9ic2VydmVyKVxuICAgIHRoaXMuZW1pdCA9IG9ic2VydmVyLmVtaXQuYmluZChvYnNlcnZlcilcbiAgICB0aGlzLm9mZiA9IG9ic2VydmVyLm9mZi5iaW5kKG9ic2VydmVyKVxuICAgIHRoaXMuZmx1c2ggPSBvYnNlcnZlci5mbHVzaC5iaW5kKG9ic2VydmVyKVxuICAgIHRoaXMub25jZSA9IG9ic2VydmVyLm9uY2UuYmluZChvYnNlcnZlcilcbiAgfVxuICBlbWl0RXJyb3IgKHR5cGUsIGVycm9yRGV0YWlsID0ge2xpbmU6ICcnLCBoYW5kbGU6ICcnLCBtc2c6ICcnLCB2ZXJzaW9uOiAnJ30pIHtcbiAgICBjb25zdCB7IHBsYXllciwgc3RhdGUgfSA9IHRoaXMuX3N0b3JlXG4gICAgaWYgKHBsYXllcikge1xuICAgICAgY29uc3QgZXJyb3JUb0VtaXQgPSBuZXcgRXJyb3JzKHR5cGUsIHBsYXllci5jdXJyZW50VGltZSwgc3RhdGUuZHVyYXRpb24sICcnLCB0cnVlLCBwbGF5ZXIuY29uZmlnLnVybCwgcGxheWVyLmNvbmZpZy51cmwsIHBsYXllci5lbmRlZCwgZXJyb3JEZXRhaWwpXG4gICAgICBwbGF5ZXIuZW1pdCgnZXJyb3InLCBlcnJvclRvRW1pdClcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRyYW5zQ29kZXJcbiIsIi8vIHJlZnJlbmNlOiBodHRwczovL2dpdGh1Yi5jb20vdmlkZW8tZGV2L2hscy5qcy9ibG9iL21hc3Rlci9zcmMvZGVtdXgvYWR0cy5qc1xuaW1wb3J0IERlbXV4ZXIgZnJvbSAnLi9EZW11eGVyJ1xuaW1wb3J0IERhdGFWaWV3NFJlYWQgZnJvbSAnLi4vLi4vdXRpbHMvRGF0YVZpZXc0UmVhZCdcbi8vIGltcG9ydCB7IG1wM1ZlcnNpb25zLCBtcDNCaXRSYXRlLCBhdWRpb1NhbXBsZVJhdGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvdHlwZXMnO1xuLy8gcmVzb2x2ZSDmlrnms5Ug6Kej5p6QdGFnICBBQUPop6PnoIHvvIwg5pu05pawc3RvcmXkuK3nmoRhdWRpb1RyYWNrIGF1ZGlvTWV0YURhdGFcbmltcG9ydCB7XG4gIHNvdW5kUmF0ZVR5cGVzLFxuICBzYW1wbGluZ0ZyZXF1ZW5jeVR5cGVzLFxuICBFdmVudFR5cGVzLFxuICBicm93c2VyVHlwZXNcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3R5cGVzJ1xuaW1wb3J0IHNuaWZmZXIgZnJvbSAnLi4vLi4vdXRpbHMvc25pZmZlcidcbmltcG9ydCBCdWZmZXIgZnJvbSAnLi4vLi4vd3JpdGUvQnVmZmVyJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9EZW11eGVyIGV4dGVuZHMgRGVtdXhlciB7XG4gIGNvbnN0cnVjdG9yIChzdG9yZSkge1xuICAgIHN1cGVyKHN0b3JlKVxuICAgIHRoaXMuQ0xBU1NfTkFNRSA9IHRoaXMuY29uc3RydWN0b3IubmFtZVxuICAgIHRoaXMuY3VycmVudFRhZyA9IG51bGxcbiAgICB0aGlzLmRhdGEgPSBuZXcgVWludDhBcnJheSgwKVxuICAgIHRoaXMucmVhZE9mZnNldCA9IDBcbiAgICB0aGlzLl9zdG9yZS5hdWRpb01ldGFEYXRhID0gbnVsbFxuICAgIHRoaXMuaGFuZGxlRGF0YVJlYWR5ID0gKCkgPT4ge31cbiAgICB0aGlzLmhhbmRsZU1ldGFEYXRhUmVhZHkgPSAoKSA9PiB7fVxuICAgIHRoaXMuaGFuZGxlTWVkaWFJbmZvUmVhZHkgPSAoKSA9PiB7fVxuICB9XG4gIHJlc29sdmUgKHRhZykge1xuICAgIGRlYnVnZ2VyXG4gICAgdGhpcy5yZWFkT2Zmc2V0ID0gMFxuICAgIGNvbnN0IHsgX3N0b3JlOiBzdG9yZSB9ID0gdGhpc1xuICAgIC8vIOS/ruaUuXN0b3Jl5Lit55qEYXVkaW9UcmFjayBhdWRpb01ldGFEYXRhXG4gICAgY29uc3QgeyBhdWRpb1RyYWNrOiB0cmFjayB9ID0gc3RvcmVcbiAgICB0aGlzLmN1cnJlbnRUYWcgPSB0YWdcbiAgICB0aGlzLmRhdGEgPSB0YWcuYm9keVxuICAgIGxldCB7XG4gICAgICBhdWRpb01ldGFEYXRhOiBtZXRhXG4gICAgfSA9IHN0b3JlXG5cbiAgICBpZiAoIW1ldGEpIHtcbiAgICAgIG1ldGEgPSBzdG9yZS5hdWRpb01ldGFEYXRhID0ge31cbiAgICAgIHN0b3JlLmF1ZGlvTWV0YURhdGEgPSB0aGlzLmluaXRBdWRpb01ldGEobWV0YSlcbiAgICB9XG5cbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldzRSZWFkKHRhZy5ib2R5LmJ1ZmZlciwgdGhpcylcblxuICAgIGNvbnN0IHNvdW5kID0gZHYuZ2V0VWludDgoKVxuXG4gICAgY29uc3Qgc291bmRGb3JtYXRJZHggPSBzb3VuZCA+Pj4gNCAvLyAgVUludDRcbiAgICBjb25zdCBzb3VuZFJhdGUgPSAoc291bmQgJiAxMikgPj4+IDIgLy8gIFVJbnQyXG4gICAgLy8gY29uc3Qgc291bmRTaXplID0gKHNvdW5kICYgMikgPj4+IDEgLy8gICBVSW50MVxuICAgIGNvbnN0IHNvdW5kVHlwZSA9IChzb3VuZCAlIDEpIC8vIFVJbnQxXG5cbiAgICBtZXRhLmF1ZGlvU2FtcGxlUmF0ZSA9IHNvdW5kUmF0ZVR5cGVzW3NvdW5kUmF0ZV1cbiAgICBtZXRhLmNoYW5uZWxDb3VudCA9IHNvdW5kVHlwZSA9PT0gMCA/IDEgOiAyXG5cbiAgICBpZiAoc291bmRGb3JtYXRJZHggIT09IDEwICYmIHNvdW5kRm9ybWF0SWR4ICE9PSAyKSB7XG4gICAgICB0aGlzLmVycm9yKCdvbmx5IHN1cHBvcnQgQUFDIEF1ZGlvIGZvcm1hdCBzbyBmYXInKVxuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIGlmIChzb3VuZEZvcm1hdElkeCA9PT0gMTApIHsgLy8gQUFDXG4gICAgICBjb25zdCBhYWNJbmZvID0gdGhpcy5fcGFyc2VBQUNBdWRpbygpXG4gICAgICBpZiAoIWFhY0luZm8pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgZGF0YTogYWFjRGF0YSwgZGF0YTogeyBzYW1wbGVGcmVxIH0gfSA9IGFhY0luZm9cbiAgICAgIGlmIChhYWNJbmZvLnBhY2tldFR5cGUgPT09IDApIHsgLy8gQUFDIHNlcXVlbmNlIGhlYWRlclxuICAgICAgICBtZXRhLnNhbXBsZVJhdGUgPSBzYW1wbGVGcmVxXG4gICAgICAgIG1ldGEuY2hhbm5lbENvdW50ID0gYWFjRGF0YS5jaGFubmVsQ291bnRcbiAgICAgICAgbWV0YS5jb2RlYyA9IGFhY0RhdGEuY29kZWNcbiAgICAgICAgbWV0YS5tYW5pZmVzdENvZGVjID0gYWFjRGF0YS5tYW5pZmVzdENvZGVjXG4gICAgICAgIG1ldGEuY29uZmlnID0gYWFjRGF0YS5jb25maWdcbiAgICAgICAgbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiA9IDEwMjQgLyBzYW1wbGVGcmVxICogbWV0YS50aW1lU2NhbGVcbiAgICAgICAgaWYgKHN0b3JlLmhhc0luaXRpYWxNZXRhRGlzcGF0Y2hlZCkge1xuICAgICAgICAgIGlmIChzdG9yZS52aWRlb1RyYWNrLmxlbmd0aCB8fCBzdG9yZS5hdWRpb1RyYWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVEYXRhUmVhZHkoc3RvcmUudmlkZW9UcmFjaywgc3RvcmUuYXVkaW9UcmFjaylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RvcmUuc3RhdGUuX2F1ZGlvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGFuZGxlTWV0YURhdGFSZWFkeSgnYXVkaW8nLCBtZXRhKVxuXG4gICAgICAgIGNvbnN0IHsgbWVkaWFJbmZvOiBtaSB9ID0gc3RvcmVcbiAgICAgICAgbWkuYXVkaW9Db2RlYyA9IG1ldGEuY29kZWNcbiAgICAgICAgbWkuYXVkaW9TYW1wbGVSYXRlID0gbWV0YS5zYW1wbGVSYXRlXG4gICAgICAgIG1pLmF1ZGlvQ2hhbm5lbENvdW50ID0gbWV0YS5jaGFubmVsQ291bnRcbiAgICAgICAgbWkuYXVkaW9Db25maWcgPSBtZXRhLmNvbmZpZ1xuICAgICAgICBpZiAobWkuaGFzVmlkZW8pIHtcbiAgICAgICAgICBpZiAobWkudmlkZW9Db2RlYykge1xuICAgICAgICAgICAgbWkubWltZVR5cGUgPSBgdmlkZW8veC1mbHY7IGNvZGVjcz1cIiR7bWkudmlkZW9Db2RlY30sJHttaS5hdWRpb0NvZGVjfVwiYFxuICAgICAgICAgICAgbWkuY29kZWMgPSBtaS5taW1lVHlwZS5yZXBsYWNlKCd4LWZsdicsICdtcDQnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtaS5taW1lVHlwZSA9IGB2aWRlby94LWZsdjsgY29kZWNzPVwiJHttaS5hdWRpb0NvZGVjfVwiYFxuICAgICAgICAgIG1pLmNvZGVjID0gbWkubWltZVR5cGUucmVwbGFjZSgneC1mbHYnLCAnbXA0JylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtaS5pc0NvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVNZWRpYUluZm9SZWFkeShtaSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhYWNJbmZvLnBhY2tldFR5cGUgPT09IDEpIHsgLy8gQUFDIHJhdyBmcmFtZSBkYXRhXG4gICAgICAgIGxldCBkdHMgPSBzdG9yZS5zdGF0ZS50aW1lU3RhbXBCYXNlICsgdGhpcy5jdXJyZW50VGFnLmdldFRpbWUoKVxuICAgICAgICBsZXQgYWFjU2FtcGxlID0geyB1bml0OiBhYWNJbmZvLmRhdGEsIGxlbmd0aDogYWFjSW5mby5kYXRhLmJ5dGVMZW5ndGgsIGR0czogZHRzLCBwdHM6IGR0cyB9XG4gICAgICAgIHRyYWNrLnNhbXBsZXMucHVzaChhYWNTYW1wbGUpXG4gICAgICAgIHRyYWNrLmxlbmd0aCArPSBhYWNJbmZvLmRhdGEubGVuZ3RoXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5yZXNldFN0YXR1cygpXG4gIH1cblxuICBfcGFyc2VBQUNBdWRpbyAoKSB7XG4gICAgaWYgKHRoaXMudW5yZWFkTGVuZ3RoIDw9IDEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBhYWNEYXRhID0ge31cbiAgICBsZXQgYWFjQXJyYXkgPSBuZXcgVWludDhBcnJheSh0aGlzLmRhdGEuYnVmZmVyLCB0aGlzLnJlYWRPZmZzZXQsIHRoaXMudW5yZWFkTGVuZ3RoKVxuICAgIGNvbnN0IHBhY2tldFR5cGUgPSBhYWNBcnJheVswXVxuICAgIHRoaXMucmVhZE9mZnNldCArPSAxXG4gICAgYWFjRGF0YS5wYWNrZXRUeXBlID0gcGFja2V0VHlwZVxuICAgIGlmICghcGFja2V0VHlwZSkge1xuICAgICAgY29uc3QgeyBwb3NpdGlvbiwgdGFnU2l6ZSB9ID0gdGhpcy5jdXJyZW50VGFnXG4gICAgICB0aGlzLl9zdG9yZS5tZXRhRW5kUG9zaXRpb24gPSBwb3NpdGlvbiArIEJ1ZmZlci5yZWFkQXNJbnQodGFnU2l6ZSkgKyA0XG4gICAgICBhYWNEYXRhLmRhdGEgPSB0aGlzLl9wYXJzZUFBQ0F1ZGlvU3BlY2lmaWNDb25maWcoKSAvLyBBQUMgU2VxdWVuY2UgaGVhZGVyXG4gICAgfSBlbHNlIHtcbiAgICAgIGFhY0RhdGEuZGF0YSA9IGFhY0FycmF5LnNsaWNlKDEpXG4gICAgfVxuXG4gICAgcmV0dXJuIGFhY0RhdGFcbiAgfVxuICBfcGFyc2VBQUNBdWRpb1NwZWNpZmljQ29uZmlnICgpIHtcbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldzRSZWFkKHRoaXMuZGF0YS5idWZmZXIsIHRoaXMpXG4gICAgY29uc3QgeyBnZXRBbmROdW0gfSA9IERhdGFWaWV3NFJlYWRcblxuICAgIGxldCByZXN1bHRPYmogPSB7XG4gICAgICBzYW1wbGluZ0ZyZXF1ZW5jeTogbnVsbCxcbiAgICAgIGV4dEF1ZGlvT2JqZWN0VHlwZTogbnVsbCxcbiAgICAgIGV4dEF1ZGlvU2FtcGxpbmdJZHg6IG51bGxcbiAgICB9XG4gICAgbGV0IGNvbmZpZyA9IHt9XG4gICAgY29uc3QgVUludDAgPSBkdi5nZXRVaW50OCgpXG4gICAgY29uc3QgVUludDEgPSBkdi5nZXRVaW50OCgpXG5cbiAgICBsZXQgdGVtcEF1ZGlvT2JqZWN0VHlwZVxuICAgIGxldCBhdWRpb09iamVjdFR5cGUgPSB0ZW1wQXVkaW9PYmplY3RUeXBlID0gVUludDAgPj4+IDMgLy8gVUludDVcbiAgICBsZXQgc2FtcGxpbmdJZHggPSAoKFVJbnQwICYgZ2V0QW5kTnVtKDUsIDcpKSA8PCAxKSB8IChVSW50MSA+Pj4gNykgLy8gVUludDRcbiAgICBpZiAoc2FtcGxpbmdJZHggPCAwIHx8IHNhbXBsaW5nSWR4ID4gc2FtcGxpbmdGcmVxdWVuY3lUeXBlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZW1pdEVycm9yKCdkZWNvZGVyJywge1xuICAgICAgICBsaW5lOiAnMTQxJyxcbiAgICAgICAgaGFuZGxlOiAnX3BhcnNlQUFDQXVkaW9TcGVjaWZpY0NvbmZpZycsXG4gICAgICAgIG1zZzogYGludmFsaWQgc2FtcGxpbmdGcmVxdWVuY3lJbmRleCAke3NhbXBsaW5nSWR4fWBcbiAgICAgIH0pXG4gICAgICB0aGlzLmRpc3BhdGNoKEV2ZW50VHlwZXMuRVJST1IsIGBlcnJvciBzYW1wbGluZ0ZyZXF1ZW5jeUluZGV4OiAke3NhbXBsaW5nSWR4fWApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZXN1bHRPYmouc2FtcGxpbmdGcmVxdWVuY3kgPSBzYW1wbGluZ0ZyZXF1ZW5jeVR5cGVzW3NhbXBsaW5nSWR4XVxuXG4gICAgbGV0IGNoYW5uZWxDb3VudCA9IHJlc3VsdE9iai5jaGFubmVsQ291bnQgPSAoVUludDEgJiBnZXRBbmROdW0oMSwgNCkpID4+PiAzXG4gICAgaWYgKGNoYW5uZWxDb3VudCA8IDAgfHwgY2hhbm5lbENvdW50ID4gNykge1xuICAgICAgdGhpcy5lbWl0RXJyb3IoJ2RlY29kZXInLCB7XG4gICAgICAgIGxpbmU6ICcxNTQnLFxuICAgICAgICBoYW5kbGU6ICdfcGFyc2VBQUNBdWRpb1NwZWNpZmljQ29uZmlnJyxcbiAgICAgICAgbXNnOiBgaW52YWxpZCBBdWRpbyBDaGFubmVsIENvdW50OiAke2NoYW5uZWxDb3VudH1gXG4gICAgICB9KVxuICAgICAgdGhpcy5kaXNwYXRjaChFdmVudFR5cGVzLkVSUk9SLCBgZXJyb3IgQXVkaW8gQ2hhbm5lbCBDb3VudDogJHtjaGFubmVsQ291bnR9YClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChhdWRpb09iamVjdFR5cGUgPT09IDUpIHsgLy8gSEUtQUFDXG4gICAgICBjb25zdCBVSW50MiA9IGR2LmdldFVpbnQ4KClcbiAgICAgIHJlc3VsdE9iai5leHRBdWRpb1NhbXBsaW5nSWR4ID0gKChVSW50MSAmIGdldEFuZE51bSg1LCA3KSkgPDwgMSkgfCBVSW50MiA+Pj4gN1xuICAgICAgcmVzdWx0T2JqLmV4dEF1ZGlvT2JqZWN0VHlwZSA9IChVSW50MiAmIGdldEFuZE51bSgxLCA1KSkgPj4+IDJcbiAgICB9XG5cbiAgICBpZiAoc25pZmZlci5icm93c2VyID09PSBicm93c2VyVHlwZXMuRklSRV9GT1gpIHtcbiAgICAgIGlmIChzYW1wbGluZ0lkeCA+PSA2KSB7XG4gICAgICAgIC8vIEhFLUFBQyB1c2VzIFNCUiwgaGlnaCBmcmVxdWVuY2llcyBhcmUgY29uc3RydWN0ZWQgZnJvbSBsb3cgZnJlcXVlbmNpZXNcbiAgICAgICAgYXVkaW9PYmplY3RUeXBlID0gNVxuICAgICAgICBjb25maWcgPSBuZXcgQXJyYXkoNClcbiAgICAgICAgcmVzdWx0T2JqLmV4dEF1ZGlvU2FtcGxpbmdJZHggPSBzYW1wbGluZ0lkeCAtIDNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF1ZGlvT2JqZWN0VHlwZSA9IDJcbiAgICAgICAgY29uZmlnID0gbmV3IEFycmF5KDIpXG4gICAgICAgIHJlc3VsdE9iai5leHRBdWRpb1NhbXBsaW5nSWR4ID0gc2FtcGxpbmdJZHhcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNuaWZmZXIub3MuaXNBbmRyb2lkKSB7XG4gICAgICAvLyBBbmRyb2lkIDogYWx3YXlzIHVzZSBBQUNcbiAgICAgIGF1ZGlvT2JqZWN0VHlwZSA9IDJcbiAgICAgIGNvbmZpZyA9IG5ldyBBcnJheSgyKVxuICAgICAgcmVzdWx0T2JqLmV4dEF1ZGlvU2FtcGxpbmdJZHggPSBzYW1wbGluZ0lkeFxuICAgIH0gZWxzZSB7XG4gICAgICAvKiAgZm9yIG90aGVyIGJyb3dzZXJzIChDaHJvbWUvVml2YWxkaS9PcGVyYSAuLi4pXG4gICAgICAgICAgICAgICAgYWx3YXlzIGZvcmNlIGF1ZGlvIHR5cGUgdG8gYmUgSEUtQUFDIFNCUiwgYXMgc29tZSBicm93c2VycyBkbyBub3Qgc3VwcG9ydCBhdWRpbyBjb2RlYyBzd2l0Y2ggcHJvcGVybHkgKGxpa2UgQ2hyb21lIC4uLilcbiAgICAgICAgICAgICovXG4gICAgICBhdWRpb09iamVjdFR5cGUgPSA1XG4gICAgICByZXN1bHRPYmouZXh0ZW5zaW9uU2FtcGxpbmdJbmRleCA9IHNhbXBsaW5nSWR4XG4gICAgICBjb25maWcgPSBuZXcgQXJyYXkoNClcblxuICAgICAgaWYgKHNhbXBsaW5nSWR4ID49IDYpIHtcbiAgICAgICAgcmVzdWx0T2JqLmV4dGVuc2lvblNhbXBsaW5nSWR4ID0gc2FtcGxpbmdJZHggLSAzXG4gICAgICB9IGVsc2UgaWYgKGNoYW5uZWxDb3VudCA9PT0gMSkge1xuICAgICAgICBhdWRpb09iamVjdFR5cGUgPSAyXG4gICAgICAgIGNvbmZpZyA9IG5ldyBBcnJheSgyKVxuICAgICAgICByZXN1bHRPYmouZXh0ZW5zaW9uU2FtcGxpbmdJbmRleCA9IHNhbXBsaW5nSWR4XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uZmlnWzBdID0gYXVkaW9PYmplY3RUeXBlIDw8IDNcbiAgICBjb25maWdbMF0gfD0gKHNhbXBsaW5nSWR4ICYgMHgwRSkgPj4gMVxuICAgIGNvbmZpZ1sxXSB8PSAoc2FtcGxpbmdJZHggJiAweDAxKSA8PCA3XG4gICAgY29uZmlnWzFdIHw9IGNoYW5uZWxDb3VudCA8PCAzXG4gICAgaWYgKGF1ZGlvT2JqZWN0VHlwZSA9PT0gNSkge1xuICAgICAgY29uZmlnWzFdIHw9IChyZXN1bHRPYmouZXh0QXVkaW9TYW1wbGluZ0lkeCAmIDB4MEUpID4+IDFcbiAgICAgIGNvbmZpZ1syXSA9IChyZXN1bHRPYmouZXh0ZW5zaW9uU2FtcGxpbmdJZHggJiAweDAxKSA8PCA3XG4gICAgICAvLyBhZHRzT2JqZWN0VHlwZSAoZm9yY2UgdG8gMiwgY2hyb21lIGlzIGNoZWNraW5nIHRoYXQgb2JqZWN0IHR5cGUgaXMgbGVzcyB0aGFuIDUgPz8/XG4gICAgICAvLyAgICBodHRwczovL2Nocm9taXVtLmdvb2dsZXNvdXJjZS5jb20vY2hyb21pdW0vc3JjLmdpdC8rL21hc3Rlci9tZWRpYS9mb3JtYXRzL21wNC9hYWMuY2NcbiAgICAgIGNvbmZpZ1syXSB8PSAyIDw8IDJcbiAgICAgIGNvbmZpZ1szXSA9IDBcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnLFxuICAgICAgc2FtcGxlRnJlcTogcmVzdWx0T2JqLnNhbXBsaW5nRnJlcXVlbmN5LFxuICAgICAgY2hhbm5lbENvdW50LFxuICAgICAgY29kZWM6IGBtcDRhLjQwLiR7YXVkaW9PYmplY3RUeXBlfWAsXG4gICAgICBtYW5pZmVzdENvZGVjOiBgbXA0YS40MC4ke3RlbXBBdWRpb09iamVjdFR5cGV9YFxuICAgIH1cbiAgfVxuXG4gIGluaXRBdWRpb01ldGEgKG1ldGEpIHtcbiAgICBjb25zdCB7IHN0YXRlLCBhdWRpb1RyYWNrOiB0cmFjayB9ID0gdGhpcy5fc3RvcmVcblxuICAgIG1ldGEuZHVyYXRpb24gPSBzdGF0ZS5kdXJhdGlvblxuICAgIG1ldGEudGltZVNjYWxlID0gc3RhdGUudGltZVNjYWxlXG4gICAgbWV0YS50eXBlID0gJ2F1ZGlvJ1xuICAgIG1ldGEuaWQgPSB0cmFjay5pZFxuXG4gICAgcmV0dXJuIG1ldGFcbiAgfVxuXG4gIHJlc2V0U3RhdHVzICgpIHtcbiAgICB0aGlzLmN1cnJlbnRUYWcgPSBudWxsXG4gICAgdGhpcy5kYXRhID0gbmV3IFVpbnQ4QXJyYXkoMClcbiAgICB0aGlzLnJlYWRPZmZzZXQgPSAwXG4gIH1cbiAgZ2V0IGRhdGFTaXplICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aFxuICB9XG5cbiAgZ2V0IHVucmVhZExlbmd0aCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNpemUgLSB0aGlzLnJlYWRPZmZzZXRcbiAgfVxufVxuIiwiaW1wb3J0IExvZyBmcm9tICcuLi8uLi91dGlscy9Mb2cnXG5pbXBvcnQgVHJhbnNDb2RlciBmcm9tICcuLi9UcmFuc0NvZGVyJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVtdXhlciBleHRlbmRzIFRyYW5zQ29kZXIge1xuICBkaXNwYXRjaCAodHlwZSwgLi4ucGF5bG9hZCkge1xuICAgIGNvbnN0IHByZWZpeCA9ICdkZW11eGVyXydcbiAgICB0aGlzLl9vYnNlcnZlci5lbWl0KGAke3ByZWZpeH0ke3R5cGV9YCwgLi4ucGF5bG9hZClcbiAgfVxuICBlcnJvciAobWVzc2FnZSkge1xuICAgIGNvbnN0IHsgQ0xBU1NfTkFNRSA9ICdEZW11eGVyJyB9ID0gdGhpc1xuICAgIExvZy5lcnJvcihgWyR7Q0xBU1NfTkFNRX0gZXJyb3JdIGAsIG1lc3NhZ2UpXG4gIH1cblxuICBpbmZvIChtZXNzYWdlKSB7XG4gICAgY29uc3QgeyBDTEFTU19OQU1FID0gJ0RlbXV4ZXInIH0gPSB0aGlzXG4gICAgTG9nLmluZm8oYFske0NMQVNTX05BTUV9IGluZm9dIGAsIG1lc3NhZ2UpXG4gIH1cblxuICBsb2cgKG1lc3NhZ2UpIHtcbiAgICBjb25zdCB7IENMQVNTX05BTUUgPSAnRGVtdXhlcicgfSA9IHRoaXNcbiAgICBMb2cubG9nKGBbJHtDTEFTU19OQU1FfSBsb2ddIGAsIG1lc3NhZ2UpXG4gIH1cblxuICB3YXJuIChtZXNzYWdlKSB7XG4gICAgY29uc3QgeyBDTEFTU19OQU1FID0gJ0RlbXV4ZXInIH0gPSB0aGlzXG4gICAgTG9nLndhcm4oYFske0NMQVNTX05BTUV9IHdhcm5dIGAsIG1lc3NhZ2UpXG4gIH1cbn1cbiIsImltcG9ydCB7IE1ldGFUeXBlcyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy90eXBlcyc7XG5pbXBvcnQgVVRGOCBmcm9tICcuLi8uLi91dGlscy9VVEY4JztcbmltcG9ydCBEZW11eGVyIGZyb20gJy4vRGVtdXhlcic7XG5cbi8qKlxuICogbWV0YeS/oeaBr+ino+aekFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhRGVtdXhlciBleHRlbmRzIERlbXV4ZXIge1xuICAgIGNvbnN0cnVjdG9yIChzdG9yZSkge1xuICAgICAgICBzdXBlcihzdG9yZSk7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgfVxuICAgIGdldCBpc0xlICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3JlLmlzTGU7XG4gICAgfVxuICAgIHJlc29sdmUgKG1ldGEsIHNpemUpIHtcbiAgICAgICAgaWYgKHNpemUgPCAzKSB7XG4gICAgICAgICAgICB0aHJvdyAnbm90IGVub3VnaCBkYXRhIGZvciBtZXRhaW5mbyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWV0YURhdGEgPSB7fTtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMucGFyc2VWYWx1ZShtZXRhKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUobWV0YSwgc2l6ZSAtIG5hbWUuYm9keVNpemUpO1xuICAgICAgICBtZXRhRGF0YVtuYW1lLmRhdGFdID0gdmFsdWUuZGF0YTtcblxuICAgICAgICB0aGlzLnJlc2V0U3RhdHVzKCk7XG4gICAgICAgIHJldHVybiBtZXRhRGF0YTtcbiAgICB9XG5cbiAgICByZXNldFN0YXR1cyAoKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgfVxuXG4gICAgcGFyc2VTdHJpbmcgKGJ1ZmZlcikge1xuICAgICAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldyhidWZmZXIsIHRoaXMucmVhZE9mZnNldCk7XG4gICAgICAgIGNvbnN0IHN0ckxlbiA9IGR2LmdldFVpbnQxNigwLCAhdGhpcy5pc0xlKTtcbiAgICAgICAgbGV0IHN0ciA9ICcnO1xuICAgICAgICBpZiAoc3RyTGVuID4gMCkge1xuICAgICAgICAgICAgc3RyID0gVVRGOC5kZWNvZGUobmV3IFVpbnQ4QXJyYXkoYnVmZmVyLCB0aGlzLnJlYWRPZmZzZXQgKyAyLCBzdHJMZW4pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0ciA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzaXplID0gc3RyTGVuICsgMjtcbiAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IHNpemU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBzdHIsXG4gICAgICAgICAgICBib2R5U2l6ZTogc3RyTGVuICsgMixcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwYXJzZURhdGUgKGJ1ZmZlciwgc2l6ZSkge1xuICAgICAgICBjb25zdCB7IGlzTGUgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGR2ID0gbmV3IERhdGFWaWV3KGJ1ZmZlciwgdGhpcy5yZWFkT2Zmc2V0LCBzaXplKTtcbiAgICAgICAgbGV0IHRzID0gZHYuZ2V0RmxvYXQ2NCgwLCAhaXNMZSk7XG4gICAgICAgIGNvbnN0IHRpbWVPZmZzZXQgPSBkdi5nZXRJbnQxNig4LCAhaXNMZSk7XG4gICAgICAgIHRzICs9IHRpbWVPZmZzZXQgKiA2MCAqIDEwMDA7XG5cbiAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IDEwO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YTogbmV3IERhdGUodHMpLFxuICAgICAgICAgICAgYm9keVNpemU6IDEwLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHBhcnNlT2JqZWN0IChidWZmZXIsIHNpemUpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMucGFyc2VTdHJpbmcoYnVmZmVyLCBzaXplKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUoYnVmZmVyLCBzaXplIC0gbmFtZS5ib2R5U2l6ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZS5kYXRhLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZS5kYXRhLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHlTaXplOiBuYW1lLmJvZHlTaXplICsgdmFsdWUuYm9keVNpemUsXG4gICAgICAgICAgICBpc09iakVuZDogdmFsdWUuaXNPYmpFbmQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcGFyc2VMb25nU3RyaW5nIChidWZmZXIpIHtcbiAgICAgICAgY29uc3QgZHYgPSBuZXcgRGF0YVZpZXcoYnVmZmVyLCB0aGlzLnJlYWRPZmZzZXQpO1xuICAgICAgICBjb25zdCBzdHJMZW4gPSBkdi5nZXRVaW50MzIoMCwgIXRoaXMuaXNMZSk7XG4gICAgICAgIGxldCBzdHIgPSAnJztcbiAgICAgICAgaWYgKHN0ckxlbiA+IDApIHtcbiAgICAgICAgICAgIHN0ciA9IFVURjguZGVjb2RlKG5ldyBVaW50OEFycmF5KGJ1ZmZlciwgdGhpcy5yZWFkT2Zmc2V0ICsgMiwgc3RyTGVuKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHIgPSAnJztcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zdCBzaXplID0gc3RyTGVuICsgNDtcbiAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IHN0ckxlbiArIDQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBzdHIsXG4gICAgICAgICAgICBib2R5U2l6ZTogc3RyTGVuICsgNCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDop6PmnpBtZXRh5Lit55qE5Y+Y6YePXG4gICAgICovXG4gICAgcGFyc2VWYWx1ZSAoZGF0YSwgc2l6ZSkge1xuICAgICAgICBsZXQgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKCk7XG4gICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgIGJ1ZmZlciA9IGRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWZmZXIgPSBkYXRhLmJ1ZmZlcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGlzTGUgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIE5VTUJFUixcbiAgICAgICAgICAgIEJPT0xFQU4sXG4gICAgICAgICAgICBTVFJJTkcsXG4gICAgICAgICAgICBPQkpFQ1QsXG4gICAgICAgICAgICBNSVhfQVJSQVksXG4gICAgICAgICAgICBPQkpFQ1RfRU5ELFxuICAgICAgICAgICAgU1RSSUNUX0FSUkFZLFxuICAgICAgICAgICAgREFURSxcbiAgICAgICAgICAgIExPTkVfU1RSSU5HLFxuICAgICAgICB9ID0gTWV0YVR5cGVzO1xuICAgICAgICBjb25zdCBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIsIHRoaXMucmVhZE9mZnNldCwgc2l6ZSk7XG4gICAgICAgIGxldCBpc09iakVuZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCB0eXBlID0gZGF0YVZpZXcuZ2V0VWludDgoMCk7XG4gICAgICAgIGxldCBvZmZzZXQgPSAxO1xuICAgICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gMTtcbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgTlVNQkVSOiB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkYXRhVmlldy5nZXRGbG9hdDY0KDEsICFpc0xlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gODtcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gODtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgQk9PTEVBTjoge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvb2xOdW0gPSBkYXRhVmlldy5nZXRVaW50OCgxKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICEhYm9vbE51bTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gMTtcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgU1RSSU5HOiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyID0gdGhpcy5wYXJzZVN0cmluZyhidWZmZXIpO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gc3RyLmRhdGE7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IHN0ci5ib2R5U2l6ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgT0JKRUNUOiB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgb2JqRW5kU2l6ZSA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQzMihzaXplIC0gNCwgIWlzTGUpICYgMHgwMEZGRkZGRikge1xuICAgICAgICAgICAgICAgICAgICBvYmpFbmRTaXplID0gMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5yZWFkT2Zmc2V0ICs9IG9mZnNldCAtIDE7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG9mZnNldCA8IHNpemUgLSA0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1mT2JqID0gdGhpcy5wYXJzZU9iamVjdChidWZmZXIsIHNpemUgLSBvZmZzZXQgLSBvYmpFbmRTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFtZk9iai5pc09iamVjdEVuZCkgeyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVthbWZPYmouZGF0YS5uYW1lXSA9IGFtZk9iai5kYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgKz0gYW1mT2JqLmJvZHlTaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0IDw9IHNpemUgLSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmsgPSBkYXRhVmlldy5nZXRVaW50MzIob2Zmc2V0IC0gMSwgIWlzTGUpICYgMHgwMEZGRkZGRjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hcmsgPT09IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZE9mZnNldCArPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIE1JWF9BUlJBWToge1xuICAgICAgICAgICAgICAgIHZhbHVlID0ge307XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IDQ7XG4gICAgICAgICAgICAgICAgbGV0IG9iakVuZFNpemUgPSAwO1xuICAgICAgICAgICAgICAgIGlmICgoZGF0YVZpZXcuZ2V0VWludDMyKHNpemUgLSA0LCAhaXNMZSkgJiAweDAwRkZGRkZGKSA9PT0gOSkge1xuICAgICAgICAgICAgICAgICAgICBvYmpFbmRTaXplID0gMztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAob2Zmc2V0IDwgc2l6ZSAtIDgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1mVmFyID0gdGhpcy5wYXJzZU9iamVjdChidWZmZXIsIHNpemUgLSBvZmZzZXQgLSBvYmpFbmRTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFtZlZhci5pc09iamVjdEVuZCkgeyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVthbWZWYXIuZGF0YS5uYW1lXSA9IGFtZlZhci5kYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgKz0gYW1mVmFyLmJvZHlTaXplO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPD0gc2l6ZSAtIDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFya2VyID0gZGF0YVZpZXcuZ2V0VWludDMyKG9mZnNldCAtIDEsICFpc0xlKSAmIDB4MDBGRkZGRkY7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXJrZXIgPT09IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IDM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgT0JKRUNUX0VORDoge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpc09iakVuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgU1RSSUNUX0FSUkFZOiB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBhcnJMZW5ndGggPSBkYXRhVmlldy5nZXRVaW50MzIoMSwgIWlzTGUpO1xuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZE9mZnNldCArPSA0O1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzY3JpcHQgPSB0aGlzLnBhcnNlVmFsdWUoYnVmZmVyLCBzaXplIC0gb2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUucHVzaChzY3JpcHQuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSBzY3JpcHQuYm9keVNpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlIERBVEU6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gdGhpcy5wYXJzZURhdGUoYnVmZmVyLCBzaXplIC0gMSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkYXRlLmRhdGE7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IGRhdGUuYm9keVNpemU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgTE9ORV9TVFJJTkc6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb25nU3RyID0gdGhpcy5wYXJzZUxvbmdTdHJpbmcoYnVmZmVyLCBzaXplIC0gMSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBsb25nU3RyLmRhdGE7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IGxvbmdTdHIuYm9keVNpemU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBzaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlLFxuICAgICAgICAgICAgYm9keVNpemU6IG9mZnNldCxcbiAgICAgICAgICAgIGlzT2JqRW5kOiBpc09iakVuZCxcbiAgICAgICAgfTtcbiAgICB9XG5cbn1cblxuIiwiaW1wb3J0IERlbXV4ZXIgZnJvbSAnLi9EZW11eGVyJ1xuaW1wb3J0IE1ldGFEZW11eGVyIGZyb20gJy4vTWV0YURlbXV4ZXInXG5pbXBvcnQgVmlkZW9EZW11eGVyIGZyb20gJy4vVmlkZW9EZW11eGVyJ1xuaW1wb3J0IEF1ZGlvRGVtdXhlciBmcm9tICcuL0F1ZGlvRGVtdXhlcidcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vLi4vdXRpbHMvTG9nJ1xuaW1wb3J0IG1ldGFGaWVsZHMgZnJvbSAnLi4vLi4vY29uc3RhbnRzL21ldGFGaWVsZHMnXG5cbmNvbnN0IG5hdGl2ZUhhc1Byb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhZ2RlbXV4IGV4dGVuZHMgRGVtdXhlciB7XG4gIGNvbnN0cnVjdG9yIChzdG9yZSkge1xuICAgIHN1cGVyKHN0b3JlKVxuICAgIHRoaXMuQ0xBU1NfTkFNRSA9IHRoaXMuY29uc3RydWN0b3IubmFtZVxuICAgIHRoaXMuX21ldGFEZW11eGVyID0gbmV3IE1ldGFEZW11eGVyKHN0b3JlKVxuICAgIHRoaXMuX3ZpZGVvRGVtdXhlciA9IG5ldyBWaWRlb0RlbXV4ZXIoc3RvcmUpXG4gICAgdGhpcy5fYXVkaW9EZW11eGVyID0gbmV3IEF1ZGlvRGVtdXhlcihzdG9yZSlcbiAgICB0aGlzLl9maXJzdFBhcnNlID0gdHJ1ZVxuICAgIHRoaXMuX2RhdGFPZmZzZXQgPSAwXG4gICAgdGhpcy5oYW5kbGVNZWRpYUluZm9SZWFkeSA9ICgpID0+IHt9XG4gICAgdGhpcy5oYW5kbGVEYXRhUmVhZHkgPSAoKSA9PiB7fVxuICAgIHRoaXMuaGFuZGxlTWV0YURhdGFSZWFkeSA9ICgpID0+IHt9XG4gIH1cbiAgc2V0RXZlbnRCaW5kICgpIHtcbiAgICB0aGlzLl92aWRlb0RlbXV4ZXIuaGFuZGxlRGF0YVJlYWR5ID0gdGhpcy5oYW5kbGVEYXRhUmVhZHlcbiAgICB0aGlzLl92aWRlb0RlbXV4ZXIuaGFuZGxlTWV0YURhdGFSZWFkeSA9IHRoaXMuaGFuZGxlTWV0YURhdGFSZWFkeVxuICAgIHRoaXMuX3ZpZGVvRGVtdXhlci5oYW5kbGVNZWRpYUluZm9SZWFkeSA9IHRoaXMuaGFuZGxlTWVkaWFJbmZvUmVhZHlcbiAgICB0aGlzLl9hdWRpb0RlbXV4ZXIuaGFuZGxlRGF0YVJlYWR5ID0gdGhpcy5oYW5kbGVEYXRhUmVhZHlcbiAgICB0aGlzLl9hdWRpb0RlbXV4ZXIuaGFuZGxlTWV0YURhdGFSZWFkeSA9IHRoaXMuaGFuZGxlTWV0YURhdGFSZWFkeVxuICAgIHRoaXMuX2F1ZGlvRGVtdXhlci5oYW5kbGVNZWRpYUluZm9SZWFkeSA9IHRoaXMuaGFuZGxlTWVkaWFJbmZvUmVhZHlcbiAgfVxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl9tZXRhRGVtdXhlciA9IG51bGxcbiAgICB0aGlzLl92aWRlb0RlbXV4ZXIgPSBudWxsXG4gICAgdGhpcy5fYXVkaW9EZW11eGVyID0gbnVsbFxuICB9XG5cbiAgcmVzb2x2ZVRhZ3MgKCkge1xuICAgIGNvbnN0IHt0YWdzfSA9IHRoaXMuX3N0b3JlLnN0YXRlXG5cbiAgICBjb25zdCB7X3N0b3JlOiBzdG9yZX0gPSB0aGlzXG4gICAgY29uc3Qge3ZpZGVvVHJhY2ssIGF1ZGlvVHJhY2t9ID0gc3RvcmVcblxuICAgIHRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XG4gICAgICB0aGlzLnJlc29sdmVUYWcodGFnKVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5fc3RvcmUuaGFzSW5pdGlhbE1ldGFEaXNwYXRjaGVkKSB7XG4gICAgICBpZiAodmlkZW9UcmFjay5sZW5ndGggfHwgYXVkaW9UcmFjay5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVEYXRhUmVhZHkoYXVkaW9UcmFjaywgdmlkZW9UcmFjaylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9zdG9yZS5zdGF0ZS50YWdzID0gW11cbiAgfVxuXG4gIHJlc29sdmVUYWcgKHRhZykge1xuICAgIHN3aXRjaCAoU3RyaW5nKHRhZy50YWdUeXBlKSkge1xuICAgICAgY2FzZSAnOCc6IC8vIGF1ZGlvXG4gICAgICAgIHRoaXMuX3Jlc29sdmVBdWRpb1RhZyh0YWcpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICc5JzogLy8gdmlkZW9cbiAgICAgICAgdGhpcy5fcmVzb2x2ZVZpZGVvVGFnKHRhZylcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJzE4JzogLy8gbWV0YWRhdGFcbiAgICAgICAgdGhpcy5fcmVzb2x2ZU1ldGFUYWcodGFnKVxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIF9yZXNvbHZlQXVkaW9UYWcgKHRhZykge1xuICAgIGlmICh0YWcuYm9keVNpemUgPD0gMSkge1xuICAgICAgdGhpcy53YXJuKCdOb3QgZW5vdWdoIGRhdGEgZm9yIGF1ZGlvIHRhZyBib2R5JylcbiAgICB9XG4gICAgdGhpcy5fYXVkaW9EZW11eGVyLnJlc29sdmUodGFnKVxuICB9XG5cbiAgX3Jlc29sdmVWaWRlb1RhZyAodGFnKSB7XG4gICAgaWYgKHRhZy5ib2R5U2l6ZSA8PSAxKSB7XG4gICAgICB0aGlzLmVycm9yKCdOb3QgZW5vdWdoIGRhdGEgZm9yIHZpZGVvIHRhZyBib2R5JylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB7X2hhc1ZpZGVvLCBoYXNWaWRlb0ZsYWdPdmVycmlkZWR9ID0gdGhpc1xuICAgIGlmIChoYXNWaWRlb0ZsYWdPdmVycmlkZWQgJiYgIV9oYXNWaWRlbykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fdmlkZW9EZW11eGVyLnJlc29sdmUodGFnKVxuICB9XG5cbiAgX2luaXRNZXRhRGF0YSAobWV0YURhdGEpIHtcbiAgICBjb25zdCB7X3N0b3JlOiBzfSA9IHRoaXNcbiAgICBpZiAobmF0aXZlSGFzUHJvcC5jYWxsKG1ldGFEYXRhLCAnb25NZXRhRGF0YScpKSB7XG4gICAgICBpZiAocy5oYXNNZXRhRGF0YSkge1xuICAgICAgICBMb2dnZXIubG9nKGBbJHt0aGlzLkNMQVNTX05BTUV9XWAsICdmb3VuZCBhbm90aGVyIG1ldGEgdGFnJylcbiAgICAgIH1cbiAgICAgIHMubWV0YURhdGEgPSBtZXRhRGF0YVxuICAgICAgY29uc3Qgb25NZXRhRGF0YSA9IG1ldGFEYXRhLm9uTWV0YURhdGFcblxuICAgICAgbWV0YUZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgY29uc3Qge25hbWUsIHR5cGUsIHBhcnNlciwgb25UeXBlRXJyfSA9IGZpZWxkXG4gICAgICAgIGlmIChPYmplY3Qob25NZXRhRGF0YVtuYW1lXSkgaW5zdGFuY2VvZiB0eXBlKSB7XG4gICAgICAgICAgcGFyc2VyLmNhbGwodGhpcywgcywgb25NZXRhRGF0YSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAob25UeXBlRXJyICYmIG9uVHlwZUVyciBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBvblR5cGVFcnIocywgb25NZXRhRGF0YSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuX3N0b3JlLm1lZGlhSW5mby5fbWV0YURhdGEgPSBtZXRhRGF0YVxuICAgICAgLy8g5ZCM5q2l5Yiw5YWx5Lqrc3RvcmVcbiAgICAgIGlmICh0aGlzLl9zdG9yZS5tZWRpYUluZm8uaXNDb21wbGV0ZSkge1xuICAgICAgICB0aGlzLmhhbmRsZU1lZGlhSW5mb1JlYWR5KHRoaXMuX3N0b3JlLm1lZGlhSW5mbylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfcmVzb2x2ZU1ldGFUYWcgKHRhZykge1xuICAgIGNvbnN0IHtib2R5fSA9IHRhZ1xuICAgIGNvbnN0IG1ldGFPYmogPSB0aGlzLl9tZXRhRGVtdXhlci5yZXNvbHZlKGJvZHksIGJvZHkubGVuZ3RoKVxuICAgIHRoaXMuX2luaXRNZXRhRGF0YShtZXRhT2JqKVxuICB9XG5cbiAgX3BhcnNlS2V5ZnJhbWVzIChrZXlmcmFtZXMpIHtcbiAgICBsZXQgdGltZXMgPSBbXVxuICAgIGxldCBmaWxlUG9zaXRpb25zID0gW11cbiAgICBjb25zdCB7dmlkZW9UaW1lU2NhbGUsIHN0YXRlfSA9IHRoaXMuX3N0b3JlXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBrZXlmcmFtZXMudGltZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRpbWVzW3RpbWVzLmxlbmd0aF0gPSBzdGF0ZS50aW1lU3RhbXBCYXNlICsgTWF0aC5mbG9vcihrZXlmcmFtZXMudGltZXNbaV0gKiB2aWRlb1RpbWVTY2FsZSlcbiAgICAgIGZpbGVQb3NpdGlvbnNbZmlsZVBvc2l0aW9ucy5sZW5ndGhdID0ga2V5ZnJhbWVzLmZpbGVwb3NpdGlvbnNbaV1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGltZXMsXG4gICAgICBmaWxlUG9zaXRpb25zXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgRGVtdXhlciBmcm9tICcuL0RlbXV4ZXInXG5pbXBvcnQgU1BTUGFyc2VyIGZyb20gJy4uL1NQU1BhcnNlcidcbmltcG9ydCBEYXRhVmlldzRSZWFkIGZyb20gJy4uLy4uL3V0aWxzL0RhdGFWaWV3NFJlYWQnXG5pbXBvcnQgeyBFdmVudFR5cGVzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3R5cGVzJ1xuaW1wb3J0IEJ1ZmZlciBmcm9tICcuLi8uLi93cml0ZS9CdWZmZXInXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlb0RlbXV4ZXIgZXh0ZW5kcyBEZW11eGVyIHtcbiAgY29uc3RydWN0b3IgKHN0b3JlKSB7XG4gICAgc3VwZXIoc3RvcmUpXG4gICAgdGhpcy5DTEFTU19OQU1FID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgdGhpcy5yZWFkT2Zmc2V0ID0gMFxuICAgIHRoaXMuZGF0YSA9IG5ldyBVaW50OEFycmF5KDApXG4gICAgdGhpcy5jdXJyZW50VGFnID0gbnVsbFxuICAgIHRoaXMuX3N0b3JlLnZpZGVvTWV0YURhdGEgPSBudWxsXG4gIH1cblxuICByZXNldFN0YXR1cyAoKSB7XG4gICAgdGhpcy5yZWFkT2Zmc2V0ID0gMFxuICAgIHRoaXMuZGF0YSA9IG5ldyBVaW50OEFycmF5KDApXG4gICAgdGhpcy5jdXJyZW50VGFnID0gbnVsbFxuICB9XG5cbiAgcmVzb2x2ZSAodGFnKSB7XG4gICAgZGVidWdnZXJcbiAgICB0aGlzLmRhdGEgPSB0YWcuYm9keVxuICAgIHRoaXMuY3VycmVudFRhZyA9IHRhZ1xuICAgIGNvbnN0IGZpcnN0VUk4ID0gdGhpcy5yZWFkRGF0YSgxKVswXVxuICAgIGNvbnN0IGZyYW1lVHlwZSA9IChmaXJzdFVJOCAmIDB4RjApID4+PiA0XG4gICAgY29uc3QgY29kZWNJZCA9IGZpcnN0VUk4ICYgMHgwRlxuICAgIGlmIChjb2RlY0lkICE9PSA3KSB7XG4gICAgICAvKiogMTogSlBFR1xuICAgICAgICAgICAgKiAyOiBIMjYzXG4gICAgICAgICAgICAqIDM6IFNjcmVlbiB2aWRlb1xuICAgICAgICAgICAgKiA0OiBPbjIgVlA2XG4gICAgICAgICAgICAqIDU6IE9uMiBWUDZcbiAgICAgICAgICAgICogNjogU2NyZWVuIHZpZGVvdmVyc2lvbiAyXG4gICAgICAgICAgICAqIDc6IEFWQ1xuICAgICAgICAgICAgKi9cbiAgICAgIHRoaXMuZXJyb3IoYHVuc3VwcG9ydGVkIGNvZGVjSWQ6ICR7Y29kZWNJZH1gKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuX3BhcnNlQVZDUGFja2V0KGZyYW1lVHlwZSlcblxuICAgIHRoaXMucmVzZXRTdGF0dXMoKVxuICB9XG5cbiAgX3BhcnNlQVZDUGFja2V0IChmcmFtZVR5cGUpIHtcbiAgICBpZiAodGhpcy51bnJlYWRMZW5ndGggPCA0KSB7XG4gICAgICB0aGlzLmVycm9yKCdJbnZhbGlkIEF2YyBUYWcnKVxuICAgIH1cbiAgICBjb25zdCBpc0xlID0gdGhpcy5fc3RvcmUuaXNMZVxuICAgIGNvbnN0IHsgYnVmZmVyIH0gPSB0aGlzLmRhdGFcbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldyhidWZmZXIsIHRoaXMucmVhZE9mZnNldCwgdGhpcy51bnJlYWRMZW5ndGgpXG4gICAgY29uc3QgcGFja2FnZVR5cGUgPSBkdi5nZXRVaW50OCgwKVxuXG4gICAgbGV0IGNwc1RpbWUgPSBkdi5nZXRVaW50MzIoMCwgIWlzTGUpICYgMHgwMEZGRkZGRlxuICAgIGNwc1RpbWUgPSAoY3BzVGltZSA8PCA4KSA+PiA4XG4gICAgdGhpcy5yZWFkT2Zmc2V0ICs9IDRcblxuICAgIHN3aXRjaCAocGFja2FnZVR5cGUpIHtcbiAgICAgIGNhc2UgMDoge1xuICAgICAgICBjb25zdCB7IHBvc2l0aW9uLCB0YWdTaXplIH0gPSB0aGlzLmN1cnJlbnRUYWdcblxuICAgICAgICB0aGlzLl9zdG9yZS5tZXRhRW5kUG9zaXRpb24gPSBwb3NpdGlvbiArIEJ1ZmZlci5yZWFkQXNJbnQodGFnU2l6ZSkgKyA0IC8vIOe8k+WtmHNjcmlwdFRhZ+e7k+adn+eahOS9jee9ru+8jHJlcGxheeS9v+eUqFxuICAgICAgICB0aGlzLl9wYXJzZUFWQ0RlY29kZXJDb25maWd1cmF0aW9uUmVjb3JkKClcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgMToge1xuICAgICAgICB0aGlzLl9wYXJzZUFWQ1ZpZGVvRGF0YShmcmFtZVR5cGUsIGNwc1RpbWUpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlIDI6IHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgLy8g5oql6ZSZXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3BhcnNlQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQgKCkge1xuICAgIGlmICh0aGlzLnVucmVhZExlbmd0aCA8IDcpIHtcbiAgICAgIHRoaXMuZXJyb3IoJ0ludmFsaWQgQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQsIGxhY2sgb2YgZGF0YSEnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBtZWRpYUluZm86IG1pIH0gPSB0aGlzLl9zdG9yZVxuICAgIC8vIHN0YXNoIG9mZnNldCZ1bnJlYWRTaXplIGJlZm9yZSBwYXJzaW5nIHNwcyZwcHNcbiAgICAvLyBjb25zdCB0ZW1wT2Zmc2V0ID0gdGhpcy5yZWFkT2Zmc2V0XG4gICAgLy8gY29uc3QgdGVtcFVucmVhZExlbmd0aCA9IHRoaXMudW5yZWFkTGVuZ3RoXG5cbiAgICBjb25zdCB7IF9zdG9yZTogc3RvcmUgfSA9IHRoaXNcbiAgICBsZXQgbWV0YSA9IHRoaXMuX3N0b3JlLnZpZGVvTWV0YURhdGFcbiAgICBsZXQgdHJhY2sgPSB0aGlzLl9zdG9yZS52aWRlb1RyYWNrXG4gICAgY29uc3QgZHYgPSBuZXcgRGF0YVZpZXc0UmVhZCh0aGlzLmRhdGEuYnVmZmVyLCB0aGlzKVxuICAgIGlmIChtZXRhKSB7XG4gICAgICBpZiAobWV0YS5hdmNjICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5lcnJvcignZm91bmQgYW5vdGhlciBBVkNEZWNvZGVyQ29uZmlndXJhdGlvblJlY29yZCEnKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXN0b3JlLnN0YXRlLl9oYXNWaWRlbyAmJiAhc3RvcmUuc3RhdGUuaGFzVmlkZW9GbGFnT3ZlcnJpZGVkKSB7XG4gICAgICAgIHN0b3JlLnN0YXRlLl9oYXNWaWRlbyA9IHRydWVcbiAgICAgICAgc3RvcmUuX21lZGlhSW5mby5oYXNWaWRlbyA9IHRydWVcbiAgICAgIH1cbiAgICAgIG1ldGEgPSBzdG9yZS52aWRlb01ldGFEYXRhID0ge31cbiAgICAgIG1ldGEudHlwZSA9ICd2aWRlbydcbiAgICAgIG1ldGEuaWQgPSB0cmFjay5pZFxuICAgICAgbWV0YS50aW1lU2NhbGUgPSBzdG9yZS52aWRlb1RpbWVTY2FsZVxuICAgICAgbWV0YS5kdXJhdGlvbiA9IHN0b3JlLnN0YXRlLmR1cmF0aW9uXG4gICAgICBtaS50aW1lc2NhbGUgPSBzdG9yZS52aWRlb1RpbWVTY2FsZVxuICAgIH1cblxuICAgIGNvbnN0IHZlcnNpb24gPSBkdi5nZXRVaW50OCgpXG4gICAgY29uc3QgYXZjUHJvZmlsZSA9IGR2LmdldFVpbnQ4KClcbiAgICBkdi5nZXRVaW50OCgpXG4gICAgZHYuZ2V0VWludDgoKVxuICAgIGlmICh2ZXJzaW9uICE9PSAxIHx8IGF2Y1Byb2ZpbGUgPT09IDApIHtcbiAgICAgIC8vIOWkhOeQhumUmeivr1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbmFsdUxlbmd0aFNpemUgPSBzdG9yZS5zdGF0ZS5uYWx1TGVuZ3RoU2l6ZSA9IGR2LmdldFVpbnQoMiwgdGhpcy5yZWFkT2Zmc2V0LCBmYWxzZSkgKyAxXG4gICAgaWYgKG5hbHVMZW5ndGhTaXplICE9PSAzICYmIG5hbHVMZW5ndGhTaXplICE9PSA0KSB7XG4gICAgICAvLyDlpITnkIbplJnor69cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNwc0xlbmd0aCA9IGR2LmdldFVpbnQoNSwgbnVsbCwgZmFsc2UpXG4gICAgaWYgKHNwc0xlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5lbWl0RXJyb3IoJ2RlY29kZXInLCB7XG4gICAgICAgIGxpbmU6IDEyOCxcbiAgICAgICAgaGFuZGxlcjogJ19wYXJzZUFWQ0RlY29kZXJDb25maWd1cmF0aW9uUmVjb3JkJyxcbiAgICAgICAgbXNnOiAnbm8gc3BzIGluIHRoaXMgdmlkZW8nXG4gICAgICB9KVxuICAgICAgLy8g5aSE55CG6ZSZ6K+vXG4gICAgICByZXR1cm5cbiAgICB9IGVsc2UgaWYgKHNwc0xlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMuZW1pdEVycm9yKCdkZWNvZGVyJywge1xuICAgICAgICBsaW5lOiAxMzIsXG4gICAgICAgIGhhbmRsZXI6ICdfcGFyc2VBVkNEZWNvZGVyQ29uZmlndXJhdGlvblJlY29yZCcsXG4gICAgICAgIG1zZzogJ3Nwc0xlbmd0aCA+IDEnXG4gICAgICB9KVxuICAgICAgdGhpcy53YXJuKCdBVkNEZWNvZGVyQ29uZmlndXJhdGlvblJlY29yZDogc3BzTGVuZ3RoID4gMScpXG4gICAgfVxuICAgIGxldCBzcHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwc0xlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBsZW4gPSBkdi5nZXRVaW50MTYoKVxuXG4gICAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBzcHMgPSBuZXcgVWludDhBcnJheSh0aGlzLmRhdGEuYnVmZmVyLCB0aGlzLnJlYWRPZmZzZXQsIGxlbilcbiAgICAgIHRoaXMucmVhZE9mZnNldCArPSBsZW5cbiAgICAgIGNvbnN0IHNwc0NvbmZpZyA9IFNQU1BhcnNlci5wYXJzZVNQUyhzcHMpXG5cbiAgICAgIGlmIChpICE9PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY29kZWNTaXplLFxuICAgICAgICBwcmVzZW50U2l6ZSxcbiAgICAgICAgcHJvZmlsZVN0cmluZyxcbiAgICAgICAgbGV2ZWxTdHJpbmcsXG4gICAgICAgIGNocm9tYUZvcm1hdCxcbiAgICAgICAgcGl4ZWxSYXRpbyxcbiAgICAgICAgZnJhbWVSYXRlLFxuICAgICAgICByZWZGcmFtZXMsXG4gICAgICAgIGJpdERlcHRoXG4gICAgICB9ID0gc3BzQ29uZmlnXG5cbiAgICAgIG1ldGEud2lkdGggPSBjb2RlY1NpemUud2lkdGhcbiAgICAgIG1ldGEuaGVpZ2h0ID0gY29kZWNTaXplLmhlaWdodFxuICAgICAgbWV0YS5wcmVzZW50V2lkdGggPSBwcmVzZW50U2l6ZS53aWR0aFxuICAgICAgbWV0YS5wcmVzZW50SGVpZ2h0ID0gcHJlc2VudFNpemUuaGVpZ2h0XG5cbiAgICAgIG1ldGEucHJvZmlsZSA9IHByb2ZpbGVTdHJpbmdcbiAgICAgIG1ldGEubGV2ZWwgPSBsZXZlbFN0cmluZ1xuICAgICAgLy8gbWV0YS5wcm9maWxlQ29tcGF0aWJpbGl0eSA9IHByb2ZpbGVDb21wYXRpYmlsaXR5O1xuICAgICAgLy8gbWV0YS5uYWx1TGVuZ3RoU2l6ZSA9IG5hbHVMZW5ndGhTaXplO1xuXG4gICAgICBtZXRhLmJpdERlcHRoID0gYml0RGVwdGhcbiAgICAgIG1ldGEuY2hyb21hRm9ybWF0ID0gY2hyb21hRm9ybWF0XG4gICAgICBtZXRhLnBpeGVsUmF0aW8gPSBwaXhlbFJhdGlvXG4gICAgICBtZXRhLmZyYW1lUmF0ZSA9IGZyYW1lUmF0ZVxuXG4gICAgICBpZiAoIWZyYW1lUmF0ZS5maXhlZCB8fFxuICAgICAgICAgICAgICAgIGZyYW1lUmF0ZS5mcHNOdW0gPT09IDAgfHxcbiAgICAgICAgICAgICAgICBmcmFtZVJhdGUuZnBzRGVuID09PSAwKSB7XG4gICAgICAgIG1ldGEuZnJhbWVSYXRlID0gc3RvcmUucmVmZXJGcmFtZVJhdGVcbiAgICAgIH1cblxuICAgICAgbGV0IHsgZnBzRGVuLCBmcHNOdW0gfSA9IG1ldGEuZnJhbWVSYXRlXG4gICAgICBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uID0gbWV0YS50aW1lU2NhbGUgKiAoZnBzRGVuIC8gZnBzTnVtKVxuXG4gICAgICBsZXQgY29kZWNBcnIgPSBzcHMuc3ViYXJyYXkoMSwgNClcbiAgICAgIGxldCBjb2RlY1N0ciA9ICdhdmMxLidcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICAgIGxldCBoZXggPSBjb2RlY0FycltqXS50b1N0cmluZygxNilcbiAgICAgICAgaGV4ID0gaGV4LnBhZFN0YXJ0KDIsICcwJylcbiAgICAgICAgY29kZWNTdHIgKz0gaGV4XG4gICAgICB9XG5cbiAgICAgIG1ldGEuY29kZWMgPSBjb2RlY1N0clxuXG4gICAgICBjb25zdCB7IG1lZGlhSW5mbzogbWkgfSA9IHRoaXMuX3N0b3JlXG4gICAgICBtaS53aWR0aCA9IG1ldGEud2lkdGhcbiAgICAgIG1pLmhlaWdodCA9IG1ldGEuaGVpZ2h0XG4gICAgICBtaS5mcHMgPSBtZXRhLmZyYW1lUmF0ZS5mcHNcbiAgICAgIG1pLnByb2ZpbGUgPSBtZXRhLnByb2ZpbGVcbiAgICAgIG1pLmxldmVsID0gbWV0YS5sZXZlbFxuICAgICAgbWkucmVmRnJhbWVzID0gcmVmRnJhbWVzXG4gICAgICBtaS5waXhlbFJhdGlvID0gcGl4ZWxSYXRpb1xuICAgICAgbWkudmlkZW9Db2RlYyA9IGNvZGVjU3RyXG4gICAgICBtaS5jaHJvbWFGb3JtYXQgPSBjaHJvbWFGb3JtYXRcbiAgICAgIGlmIChtaS5oYXNBdWRpbykge1xuICAgICAgICBpZiAobWkuYXVkaW9Db2RlYykge1xuICAgICAgICAgIG1pLm1pbWVUeXBlID0gYHZpZGVvL3gtZmx2OyBjb2RlY3M9XCIke21pLnZpZGVvQ29kZWN9LCR7bWkuYXVkaW9Db2RlY31cImBcbiAgICAgICAgICBtaS5jb2RlYyA9IG1pLm1pbWVUeXBlLnJlcGxhY2UoJ3gtZmx2JywgJ21wNCcpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1pLm1pbWVUeXBlID0gYHZpZGVvL3gtZmx2OyBjb2RlY3M9XCIke21pLnZpZGVvQ29kZWN9XCJgXG4gICAgICAgIG1pLmNvZGVjID0gbWkubWltZVR5cGUucmVwbGFjZSgneC1mbHYnLCAnbXA0JylcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHBwc1xuICAgIGNvbnN0IHBwc0NvdW50ID0gZHYuZ2V0VWludDgoKVxuICAgIGlmICghcHBzQ291bnQpIHtcbiAgICAgIHRoaXMuZW1pdEVycm9yKCdkZWNvZGVyJywge1xuICAgICAgICBsaW5lOiAyMjcsXG4gICAgICAgIGhhbmRsZXI6ICdfcGFyc2VBVkNEZWNvZGVyQ29uZmlndXJhdGlvblJlY29yZCcsXG4gICAgICAgIG1zZzogJ25vIHBwcyBpbiB0aGlzIHZpZGVvJ1xuICAgICAgfSlcbiAgICAgIHRoaXMuZGlzcGF0Y2goRXZlbnRUeXBlcy5FUlJPUiwgJ25vIHBwcyBpbiB0aGlzIHZpZGVvJylcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSBpZiAocHBzQ291bnQgPiAxKSB7XG4gICAgICB0aGlzLndhcm4oYEFWQ0RlY29kZXJDb25maWd1cmF0aW9uUmVjb3JkIGhhcyBwcHNDb3VudDogJHtwcHNDb3VudH1gKVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHBzQ291bnQ7IGkrKykge1xuICAgICAgbGV0IHBwc1NpemUgPSBkdi5nZXRVaW50MTYoKVxuXG4gICAgICBpZiAoIXBwc1NpemUpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgcHBzID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5kYXRhLmJ1ZmZlciwgdGhpcy5yZWFkT2Zmc2V0LCBwcHNTaXplKVxuICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IHBwc1NpemVcbiAgICB9XG5cbiAgICBtaS5zcHMgPSBtZXRhLnNwcyA9IHNwc1xuICAgIG1pLnBwcyA9IG1ldGEucHBzID0gcHBzXG5cbiAgICBpZiAobWkuaXNDb21wbGV0ZSkge1xuICAgICAgdGhpcy5oYW5kbGVNZWRpYUluZm9SZWFkeShtaSlcbiAgICB9XG4gICAgaWYgKHN0b3JlLmhhc0luaXRpYWxNZXRhRGlzcGF0Y2hlZCkge1xuICAgICAgaWYgKHN0b3JlLnZpZGVvVHJhY2subGVuZ3RoIHx8IHN0b3JlLmF1ZGlvVHJhY2subGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRGF0YVJlYWR5KHN0b3JlLnZpZGVvVHJhY2ssIHN0b3JlLmF1ZGlvVHJhY2spXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0b3JlLnN0YXRlLl92aWRlb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVNZXRhRGF0YVJlYWR5KCd2aWRlbycsIG1ldGEpXG4gIH1cblxuICBfcGFyc2VBVkNWaWRlb0RhdGEgKGZyYW1lVHlwZSwgY3BzVGltZSkge1xuICAgIGxldCBkdiA9IG5ldyBEYXRhVmlldzRSZWFkKHRoaXMuZGF0YS5idWZmZXIsIHRoaXMpXG5cbiAgICBsZXQgbmFsdUxpc3QgPSBbXVxuICAgIGxldCBkYXRhTGVuID0gMFxuICAgIGNvbnN0IHsgbmFsdUxlbmd0aFNpemU6IG5hbHVMZW5TaXplIH0gPSB0aGlzLl9zdG9yZS5zdGF0ZVxuICAgIGxldCB0cyA9IHRoaXMuX3N0b3JlLnN0YXRlLnRpbWVTdGFtcEJhc2UgKyB0aGlzLmN1cnJlbnRUYWcuZ2V0VGltZSgpXG4gICAgbGV0IGlzS2V5ZnJhbWUgPSAoZnJhbWVUeXBlID09PSAxKVxuICAgIHdoaWxlICh0aGlzLnVucmVhZExlbmd0aCA+IDApIHtcbiAgICAgIGlmICh0aGlzLnVucmVhZExlbmd0aCA8IDQpIHtcbiAgICAgICAgdGhpcy53YXJuKCdub3QgZW5vdWdoIGRhdGEgZm9yIHBhcnNpbmcgQVZDJylcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRlbXBSZWFkT2Zmc2V0ID0gdGhpcy5yZWFkT2Zmc2V0XG4gICAgICBsZXQgbmFsdVNpemUgPSBuYWx1TGVuU2l6ZSA9PT0gNCA/IGR2LmdldFVpbnQzMigpIDogZHYuZ2V0VWludDI0KClcbiAgICAgIGlmIChuYWx1U2l6ZSA+IHRoaXMudW5yZWFkTGVuZ3RoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgdW5pdFR5cGUgPSBkdi5nZXRVaW50KDUsIHRoaXMucmVhZE9mZnNldCwgZmFsc2UpXG5cbiAgICAgIGlmICh1bml0VHlwZSA9PT0gNSkge1xuICAgICAgICBpc0tleWZyYW1lID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YSA9IG5ldyBVaW50OEFycmF5KHRoaXMuZGF0YS5idWZmZXIsIHRlbXBSZWFkT2Zmc2V0LCBuYWx1TGVuU2l6ZSArIG5hbHVTaXplKVxuICAgICAgdGhpcy5yZWFkT2Zmc2V0ID0gdGVtcFJlYWRPZmZzZXQgKyBuYWx1TGVuU2l6ZSArIG5hbHVTaXplXG4gICAgICBjb25zdCBuYWx1VW5pdCA9IHtcbiAgICAgICAgdHlwZTogdW5pdFR5cGUsXG4gICAgICAgIGRhdGFcbiAgICAgIH1cbiAgICAgIG5hbHVMaXN0LnB1c2gobmFsdVVuaXQpXG4gICAgICBkYXRhTGVuICs9IGRhdGEuYnl0ZUxlbmd0aFxuICAgIH1cbiAgICBkdiA9IG51bGxcbiAgICBpZiAobmFsdUxpc3QubGVuZ3RoKSB7XG4gICAgICBjb25zdCB7IHZpZGVvVHJhY2sgfSA9IHRoaXMuX3N0b3JlXG4gICAgICBjb25zdCB2aWRlb1NhbXBsZSA9IHtcbiAgICAgICAgdW5pdHM6IG5hbHVMaXN0LFxuICAgICAgICBsZW5ndGg6IGRhdGFMZW4sXG4gICAgICAgIGR0czogdHMsXG4gICAgICAgIGNwczogY3BzVGltZSxcbiAgICAgICAgcHRzOiAodHMgKyBjcHNUaW1lKSxcbiAgICAgICAgaXNLZXlmcmFtZSxcbiAgICAgICAgcG9zaXRpb246IGlzS2V5ZnJhbWUgPyB0aGlzLmN1cnJlbnRUYWcucG9zaXRpb24gOiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICAgIHZpZGVvVHJhY2suc2FtcGxlcy5wdXNoKHZpZGVvU2FtcGxlKVxuICAgICAgdmlkZW9UcmFjay5sZW5ndGggKz0gZGF0YUxlblxuICAgIH1cbiAgfVxuXG4gIHJlYWREYXRhIChudW0pIHtcbiAgICBjb25zdCB7IGRhdGEsIHJlYWRPZmZzZXQgfSA9IHRoaXNcbiAgICBpZiAodGhpcy5kYXRhU2l6ZSA+IHJlYWRPZmZzZXQgKyBudW0pIHtcbiAgICAgIHRoaXMucmVhZE9mZnNldCArPSBudW1cbiAgICAgIHJldHVybiBkYXRhLnNsaWNlKHJlYWRPZmZzZXQsIG51bSlcbiAgICB9XG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICBnZXQgZGF0YVNpemUgKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubGVuZ3RoXG4gIH1cbiAgZ2V0IHVucmVhZExlbmd0aCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNpemUgLSB0aGlzLnJlYWRPZmZzZXRcbiAgfVxufVxuIiwiaW1wb3J0IEJ1ZmZlciBmcm9tICcuLi8uLi93cml0ZS9CdWZmZXInXG4vLyBjb25zdCBVSU5UMzJfTUFYID0gTWF0aC5wb3coMiwgMzIpIC0gMTtcbmltcG9ydCB7IGNhY2hlV3JhcHBlciB9IGZyb20gJy4uLy4uL3V0aWxzL2Z1bmNVdGlscydcbmNsYXNzIEZNUDQge1xuICBzdGF0aWMgc2l6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQnVmZmVyLndyaXRlVWludDMyKHZhbHVlKVxuICB9XG4gIHN0YXRpYyBpbml0Qm94IChzaXplLCBuYW1lLCAuLi5jb250ZW50KSB7XG4gICAgY29uc3QgYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgYnVmZmVyLndyaXRlKEZNUDQuc2l6ZShzaXplKSwgRk1QNC50eXBlKG5hbWUpLCAuLi5jb250ZW50KVxuICAgIHJldHVybiBidWZmZXIuYnVmZmVyXG4gIH1cbiAgc3RhdGljIGV4dGVuc2lvbiAodmVyc2lvbiwgZmxhZykge1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShbXG4gICAgICB2ZXJzaW9uLFxuICAgICAgKGZsYWcgPj4gMTYpICYgMHhmZixcbiAgICAgIChmbGFnID4+IDgpICYgMHhmZixcbiAgICAgIGZsYWcgJiAweGZmXG4gICAgXSlcbiAgfVxuICBzdGF0aWMgZnR5cCAoKSB7XG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveCgyNCwgJ2Z0eXAnLCBuZXcgVWludDhBcnJheShbXG4gICAgICAweDY5LCAweDczLCAweDZGLCAweDZELCAvLyBpc29tLFxuICAgICAgMHgwLCAweDAsIDB4MDAsIDB4MDEsIC8vIG1pbm9yX3ZlcnNpb246IDB4MDFcbiAgICAgIDB4NjksIDB4NzMsIDB4NkYsIDB4NkQsIC8vIGlzb21cbiAgICAgIDB4NjEsIDB4NzYsIDB4NjMsIDB4MzEgLy8gYXZjMVxuICAgIF0pKVxuICB9XG4gIHN0YXRpYyBtb292IChkYXRhKSB7XG4gICAgbGV0IHNpemUgPSA4XG4gICAgbGV0IG12aGQgPSBGTVA0Lm12aGQoZGF0YS5kdXJhdGlvbiwgZGF0YS50aW1lc2NhbGUpXG4gICAgbGV0IHRyYWsxID0gRk1QNC52aWRlb1RyYWsoZGF0YSlcbiAgICBsZXQgdHJhazIgPSBGTVA0LmF1ZGlvVHJhayhkYXRhKVxuICAgIGxldCBtdmV4ID0gRk1QNC5tdmV4KGRhdGEuZHVyYXRpb24sIGRhdGEudGltZXNjYWxlKTtcbiAgICBbbXZoZCwgdHJhazEsIHRyYWsyLCBtdmV4XS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLmJ5dGVMZW5ndGhcbiAgICB9KVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goc2l6ZSwgJ21vb3YnLCBtdmhkLCB0cmFrMSwgdHJhazIsIG12ZXgpXG4gIH1cbiAgc3RhdGljIG12aGQgKGR1cmF0aW9uLCB0aW1lU2NhbGUpIHtcbiAgICBsZXQgdGltZXNjYWxlID0gdGltZVNjYWxlIHx8IDEwMDBcbiAgICAvLyBkdXJhdGlvbiAqPSB0aW1lc2NhbGU7XG4gICAgbGV0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gdmVyc2lvbigwKSArIGZsYWdzICAgICAx5L2N55qEYm9454mI5pysKzPkvY1mbGFncyAgIGJveOeJiOacrO+8jDDmiJYx77yM5LiA6Iis5Li6MOOAgu+8iOS7peS4i+Wtl+iKguaVsOWdh+aMiXZlcnNpb249MO+8iVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gY3JlYXRpb25fdGltZSAgICDliJvlu7rml7bpl7QgIO+8iOebuOWvueS6jlVUQ+aXtumXtDE5MDQtMDEtMDHpm7bngrnnmoTnp5LmlbDvvIlcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIG1vZGlmaWNhdGlvbl90aW1lICAg5L+u5pS55pe26Ze0XG5cbiAgICAgIC8qKlxuICAgICAgICAgICAgICogdGltZXNjYWxlOiA0IGJ5dGVz5paH5Lu25aqS5L2T5ZyoMeenkuaXtumXtOWGheeahOWIu+W6puWAvO+8jOWPr+S7peeQhuino+S4ujHnp5Lplb/luqZcbiAgICAgICAgICAgICAqL1xuICAgICAgKHRpbWVzY2FsZSA+Pj4gMjQpICYgMHhGRixcbiAgICAgICh0aW1lc2NhbGUgPj4+IDE2KSAmIDB4RkYsXG4gICAgICAodGltZXNjYWxlID4+PiA4KSAmIDB4RkYsXG4gICAgICAodGltZXNjYWxlKSAmIDB4RkYsXG5cbiAgICAgIC8qKlxuICAgICAgICAgICAgICogZHVyYXRpb246IDQgYnl0ZXPor6V0cmFja+eahOaXtumXtOmVv+W6pu+8jOeUqGR1cmF0aW9u5ZKMdGltZSBzY2FsZeWAvOWPr+S7peiuoeeul3RyYWNr5pe26ZW/77yM5q+U5aaCYXVkaW8gdHJhY2vnmoR0aW1lIHNjYWxlID0gODAwMCxcbiAgICAgICAgICAgICAqIGR1cmF0aW9uID0gNTYwMTI477yM5pe26ZW/5Li6NzAuMDE277yMdmlkZW8gdHJhY2vnmoR0aW1lIHNjYWxlID0gNjAwLCBkdXJhdGlvbiA9IDQyMDAw77yM5pe26ZW/5Li6NzBcbiAgICAgICAgICAgICAqL1xuICAgICAgKGR1cmF0aW9uID4+PiAyNCkgJiAweEZGLFxuICAgICAgKGR1cmF0aW9uID4+PiAxNikgJiAweEZGLFxuICAgICAgKGR1cmF0aW9uID4+PiA4KSAmIDB4RkYsXG4gICAgICAoZHVyYXRpb24pICYgMHhGRixcbiAgICAgIDB4MDAsIDB4MDEsIDB4MDAsIDB4MDAsIC8vIFByZWZlcnJlZCByYXRlOiAxLjAgICDmjqjojZDmkq3mlL7pgJ/njofvvIzpq5gxNuS9jeWSjOS9jjE25L2N5YiG5Yir5Li65bCP5pWw54K55pW05pWw6YOo5YiG5ZKM5bCP5pWw6YOo5YiG77yM5Y2zWzE2LjE2XSDmoLzlvI/vvIzor6XlgLzkuLoxLjDvvIgweDAwMDEwMDAw77yJ6KGo56S65q2j5bi45YmN5ZCR5pKt5pS+XG4gICAgICAvKipcbiAgICAgICAgICAgICAqIFByZWZlcnJlZFZvbHVtZSgxLjAsIDJieXRlcykgKyByZXNlcnZlZCgyYnl0ZXMpXG4gICAgICAgICAgICAgKiDkuI5yYXRl57G75Ly877yMWzguOF0g5qC85byP77yMMS4w77yIMHgwMTAw77yJ6KGo56S65pyA5aSn6Z+z6YePXG4gICAgICAgICAgICAgKi9cbiAgICAgIDB4MDEsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyAgcmVzZXJ2ZWQ6IDQgKyA0IGJ5dGVz5L+d55WZ5L2NXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMSwgMHgwMCwgMHgwMCwgLy8gLS0tLWJlZ2luIGNvbXBvc2l0aW9uIG1hdHJpeC0tLS1cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyDop4bpopHlj5jmjaLnn6npmLUgICDnur/mgKfku6PmlbBcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAxLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHg0MCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gLS0tLWVuZCBjb21wb3NpdGlvbiBtYXRyaXgtLS0tXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyAtLS0tYmVnaW4gcHJlX2RlZmluZWQgNiAqIDQgYnl0ZXMtLS0tXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcHJlLWRlZmluZWQg5L+d55WZ5L2NXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIC0tLS1lbmQgcHJlX2RlZmluZWQgNiAqIDQgYnl0ZXMtLS0tXG4gICAgICAweEZGLCAweEZGLCAweEZGLCAweEZGIC8vIG5leHRfdHJhY2tfSUQg5LiL5LiA5LiqdHJhY2vkvb/nlKjnmoRpZOWPt1xuICAgIF0pXG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveCg4ICsgYnl0ZXMubGVuZ3RoLCAnbXZoZCcsIG5ldyBVaW50OEFycmF5KGJ5dGVzKSlcbiAgfVxuICBzdGF0aWMgdmlkZW9UcmFrIChkYXRhKSB7XG4gICAgbGV0IHNpemUgPSA4XG4gICAgbGV0IHRraGQgPSBGTVA0LnRraGQoe1xuICAgICAgaWQ6IDEsXG4gICAgICBkdXJhdGlvbjogZGF0YS5kdXJhdGlvbixcbiAgICAgIHRpbWVzY2FsZTogZGF0YS50aW1lc2NhbGUsXG4gICAgICB3aWR0aDogZGF0YS53aWR0aCxcbiAgICAgIGhlaWdodDogZGF0YS5oZWlnaHQsXG4gICAgICB0eXBlOiAndmlkZW8nXG4gICAgfSlcbiAgICBsZXQgbWRpYSA9IEZNUDQubWRpYSh7XG4gICAgICB0eXBlOiAndmlkZW8nLFxuICAgICAgdGltZXNjYWxlOiBkYXRhLnRpbWVzY2FsZSxcbiAgICAgIGR1cmF0aW9uOiBkYXRhLmR1cmF0aW9uLFxuICAgICAgc3BzOiBkYXRhLnNwcyxcbiAgICAgIHBwczogZGF0YS5wcHMsXG4gICAgICBwaXhlbFJhdGlvOiBkYXRhLnBpeGVsUmF0aW8sXG4gICAgICB3aWR0aDogZGF0YS53aWR0aCxcbiAgICAgIGhlaWdodDogZGF0YS5oZWlnaHRcbiAgICB9KTtcbiAgICBbdGtoZCwgbWRpYV0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5ieXRlTGVuZ3RoXG4gICAgfSlcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KHNpemUsICd0cmFrJywgdGtoZCwgbWRpYSlcbiAgfVxuICBzdGF0aWMgYXVkaW9UcmFrIChkYXRhKSB7XG4gICAgbGV0IHNpemUgPSA4XG4gICAgbGV0IHRraGQgPSBGTVA0LnRraGQoe1xuICAgICAgaWQ6IDIsXG4gICAgICBkdXJhdGlvbjogZGF0YS5kdXJhdGlvbixcbiAgICAgIHRpbWVzY2FsZTogZGF0YS50aW1lc2NhbGUsXG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIHR5cGU6ICdhdWRpbydcbiAgICB9KVxuICAgIGxldCBtZGlhID0gRk1QNC5tZGlhKHtcbiAgICAgIHR5cGU6ICdhdWRpbycsXG4gICAgICB0aW1lc2NhbGU6IGRhdGEudGltZXNjYWxlLFxuICAgICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb24sXG4gICAgICBjaGFubmVsQ291bnQ6IGRhdGEuYXVkaW9DaGFubmVsQ291bnQsXG4gICAgICBzYW1wbGVyYXRlOiBkYXRhLmF1ZGlvU2FtcGxlUmF0ZSxcbiAgICAgIGNvbmZpZzogZGF0YS5hdWRpb0NvbmZpZ1xuICAgIH0pO1xuICAgIFt0a2hkLCBtZGlhXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLmJ5dGVMZW5ndGhcbiAgICB9KVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goc2l6ZSwgJ3RyYWsnLCB0a2hkLCBtZGlhKVxuICB9XG4gIHN0YXRpYyB0a2hkIChkYXRhKSB7XG4gICAgbGV0IGlkID0gZGF0YS5pZFxuICAgIGxldCBkdXJhdGlvbiA9IGRhdGEuZHVyYXRpb25cbiAgICBsZXQgd2lkdGggPSBkYXRhLndpZHRoXG4gICAgbGV0IGhlaWdodCA9IGRhdGEuaGVpZ2h0XG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDA3LCAvLyB2ZXJzaW9uKDApICsgZmxhZ3MgMeS9jeeJiOacrCBib3jniYjmnKzvvIww5oiWMe+8jOS4gOiIrOS4ujDjgILvvIjku6XkuIvlrZfoioLmlbDlnYfmjIl2ZXJzaW9uPTDvvInmjInkvY3miJbmk43kvZznu5PmnpzlgLzvvIzpooTlrprkuYnlpoLkuIvvvJpcbiAgICAgIC8vIDB4MDAwMDAxIHRyYWNrX2VuYWJsZWTvvIzlkKbliJnor6V0cmFja+S4jeiiq+aSreaUvu+8m1xuICAgICAgLy8gMHgwMDAwMDIgdHJhY2tfaW5fbW92aWXvvIzooajnpLror6V0cmFja+WcqOaSreaUvuS4reiiq+W8leeUqO+8m1xuICAgICAgLy8gMHgwMDAwMDQgdHJhY2tfaW5fcHJldmlld++8jOihqOekuuivpXRyYWNr5Zyo6aKE6KeI5pe26KKr5byV55So44CCXG4gICAgICAvLyDkuIDoiKzor6XlgLzkuLo377yMMSsyKzQg5aaC5p6c5LiA5Liq5aqS5L2T5omA5pyJdHJhY2vlnYfmnKrorr7nva50cmFja19pbl9tb3ZpZeWSjHRyYWNrX2luX3ByZXZpZXfvvIzlsIbooqvnkIbop6PkuLrmiYDmnIl0cmFja+Wdh+iuvue9ruS6hui/meS4pOmhue+8m+WvueS6jmhpbnQgdHJhY2vvvIzor6XlgLzkuLowXG4gICAgICAvLyBoaW50IHRyYWNrIOi/meS4queJueauiueahHRyYWNr5bm25LiN5YyF5ZCr5aqS5L2T5pWw5o2u77yM6ICM5piv5YyF5ZCr5LqG5LiA5Lqb5bCG5YW25LuW5pWw5o2udHJhY2vmiZPljIXmiJDmtYHlqpLkvZPnmoTmjIfnpLrkv6Hmga/jgIJcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGNyZWF0aW9uX3RpbWXliJvlu7rml7bpl7TvvIjnm7jlr7nkuo5VVEPml7bpl7QxOTA0LTAxLTAx6Zu254K555qE56eS5pWw77yJXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBtb2RpZmljYXRpb24gdGltZSDkv67mlLnml7bpl7RcbiAgICAgIChpZCA+Pj4gMjQpICYgMHhGRiwgLy8gdHJhY2tfSUQ6IDQgYnl0ZXMgaWTlj7fvvIzkuI3og73ph43lpI3kuJTkuI3og73kuLowXG4gICAgICAoaWQgPj4+IDE2KSAmIDB4RkYsXG4gICAgICAoaWQgPj4+IDgpICYgMHhGRixcbiAgICAgIChpZCkgJiAweEZGLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWQ6IDQgYnl0ZXMgICAg5L+d55WZ5L2NXG4gICAgICAoZHVyYXRpb24gPj4+IDI0KSAmIDB4RkYsIC8vIGR1cmF0aW9uOiA0IGJ5dGVzIHRyYWNr55qE5pe26Ze06ZW/5bqmXG4gICAgICAoZHVyYXRpb24gPj4+IDE2KSAmIDB4RkYsXG4gICAgICAoZHVyYXRpb24gPj4+IDgpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbikgJiAweEZGLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWQ6IDIgKiA0IGJ5dGVzICAgIOS/neeVmeS9jVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGxheWVyKDJieXRlcykgKyBhbHRlcm5hdGVfZ3JvdXAoMmJ5dGVzKSAg6KeG6aKR5bGC77yM6buY6K6k5Li6MO+8jOWAvOWwj+eahOWcqOS4iuWxgi50cmFja+WIhue7hOS/oeaBr++8jOm7mOiupOS4ujDooajnpLror6V0cmFja+acquS4juWFtuS7lnRyYWNr5pyJ576k57uE5YWz57O7XG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyB2b2x1bWUoMmJ5dGVzKSArIHJlc2VydmVkKDJieXRlcykgICAgWzguOF0g5qC85byP77yM5aaC5p6c5Li66Z+z6aKRdHJhY2vvvIwxLjDvvIgweDAxMDDvvInooajnpLrmnIDlpKfpn7Pph4/vvJvlkKbliJnkuLowICAgK+S/neeVmeS9jVxuICAgICAgMHgwMCwgMHgwMSwgMHgwMCwgMHgwMCwgLy8gLS0tLWJlZ2luIGNvbXBvc2l0aW9uIG1hdHJpeC0tLS1cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDEsIDB4MDAsIDB4MDAsIC8vIOinhumikeWPmOaNouefqemYtVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHg0MCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gLS0tLWVuZCBjb21wb3NpdGlvbiBtYXRyaXgtLS0tXG4gICAgICAod2lkdGggPj4+IDgpICYgMHhGRiwgLy8gLy/lrr3luqZcbiAgICAgICh3aWR0aCkgJiAweEZGLFxuICAgICAgMHgwMCwgMHgwMCxcbiAgICAgIChoZWlnaHQgPj4+IDgpICYgMHhGRiwgLy8g6auY5bqmXG4gICAgICAoaGVpZ2h0KSAmIDB4RkYsXG4gICAgICAweDAwLCAweDAwXG4gICAgXSlcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDggKyBjb250ZW50LmJ5dGVMZW5ndGgsICd0a2hkJywgY29udGVudClcbiAgfVxuICBzdGF0aWMgZWR0cyAoZGF0YSkge1xuICAgIGxldCBidWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICBsZXQgZHVyYXRpb24gPSBkYXRhLmR1cmF0aW9uXG4gICAgbGV0IG1lZGlhVGltZSA9IGRhdGEubWVkaWFUaW1lXG4gICAgYnVmZmVyLndyaXRlKEZNUDQuc2l6ZSgzNiksIEZNUDQudHlwZSgnZWR0cycpKVxuICAgIC8vIGVsc3RcbiAgICBidWZmZXIud3JpdGUoRk1QNC5zaXplKDI4KSwgRk1QNC50eXBlKCdlbHN0JykpXG4gICAgYnVmZmVyLndyaXRlKG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDEsIC8vIGVudHJ5IGNvdW50XG4gICAgICAoZHVyYXRpb24gPj4gMjQpICYgMHhmZiwgKGR1cmF0aW9uID4+IDE2KSAmIDB4ZmYsIChkdXJhdGlvbiA+PiA4KSAmIDB4ZmYsIGR1cmF0aW9uICYgMHhmZixcbiAgICAgIChtZWRpYVRpbWUgPj4gMjQpICYgMHhmZiwgKG1lZGlhVGltZSA+PiAxNikgJiAweGZmLCAobWVkaWFUaW1lID4+IDgpICYgMHhmZiwgbWVkaWFUaW1lICYgMHhmZixcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDEgLy8gbWVkaWEgcmF0ZVxuICAgIF0pKVxuICAgIHJldHVybiBidWZmZXIuYnVmZmVyXG4gIH1cbiAgc3RhdGljIG1kaWEgKGRhdGEpIHtcbiAgICBsZXQgc2l6ZSA9IDhcbiAgICBsZXQgbWRoZCA9IEZNUDQubWRoZChkYXRhLnRpbWVzY2FsZSwgZGF0YS5kdXJhdGlvbilcbiAgICBsZXQgaGRsciA9IEZNUDQuaGRscihkYXRhLnR5cGUpXG4gICAgbGV0IG1pbmYgPSBGTVA0Lm1pbmYoZGF0YSk7XG4gICAgW21kaGQsIGhkbHIsIG1pbmZdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBzaXplICs9IGl0ZW0uYnl0ZUxlbmd0aFxuICAgIH0pXG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveChzaXplLCAnbWRpYScsIG1kaGQsIGhkbHIsIG1pbmYpXG4gIH1cbiAgc3RhdGljIG1kaGQgKHRpbWVzY2FsZSwgZHVyYXRpb24pIHtcbiAgICBsZXQgY29udGVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGNyZWF0aW9uX3RpbWUgICAg5Yib5bu65pe26Ze0XG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBtb2RpZmljYXRpb25fdGltZeS/ruaUueaXtumXtFxuICAgICAgKHRpbWVzY2FsZSA+Pj4gMjQpICYgMHhGRiwgLy8gdGltZXNjYWxlOiA0IGJ5dGVzICAgIOaWh+S7tuWqkuS9k+WcqDHnp5Lml7bpl7TlhoXnmoTliLvluqblgLzvvIzlj6/ku6XnkIbop6PkuLox56eS6ZW/5bqmXG4gICAgICAodGltZXNjYWxlID4+PiAxNikgJiAweEZGLFxuICAgICAgKHRpbWVzY2FsZSA+Pj4gOCkgJiAweEZGLFxuICAgICAgKHRpbWVzY2FsZSkgJiAweEZGLFxuICAgICAgKGR1cmF0aW9uID4+PiAyNCkgJiAweEZGLCAvLyBkdXJhdGlvbjogNCBieXRlcyAgdHJhY2vnmoTml7bpl7Tplb/luqZcbiAgICAgIChkdXJhdGlvbiA+Pj4gMTYpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbiA+Pj4gOCkgJiAweEZGLFxuICAgICAgKGR1cmF0aW9uKSAmIDB4RkYsXG4gICAgICAweDU1LCAweEM0LCAvLyBsYW5ndWFnZTogdW5kICh1bmRldGVybWluZWQpIOWqkuS9k+ivreiogOeggeOAguacgOmrmOS9jeS4ujDvvIzlkI7pnaIxNeS9jeS4ujPkuKrlrZfnrKbvvIjop4FJU08gNjM5LTIvVOagh+WHhuS4reWumuS5ie+8iVxuICAgICAgMHgwMCwgMHgwMCAvLyBwcmVfZGVmaW5lZCA9IDBcbiAgICBdKVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goMTIgKyBjb250ZW50LmJ5dGVMZW5ndGgsICdtZGhkJywgRk1QNC5leHRlbnNpb24oMCwgMCksIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIGhkbHIgKHR5cGUpIHtcbiAgICBsZXQgdmFsdWUgPSBbMHgwMCwgLy8gdmVyc2lvbiAwXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcHJlX2RlZmluZWRcbiAgICAgIDB4NzYsIDB4NjksIDB4NjQsIDB4NjUsIC8vIGhhbmRsZXJfdHlwZTogJ3ZpZGUnXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDU2LCAweDY5LCAweDY0LCAweDY1LFxuICAgICAgMHg2ZiwgMHg0OCwgMHg2MSwgMHg2ZSxcbiAgICAgIDB4NjQsIDB4NmMsIDB4NjUsIDB4NzIsIDB4MDAgLy8gbmFtZTogJ1ZpZGVvSGFuZGxlcidcbiAgICBdXG4gICAgaWYgKHR5cGUgPT09ICdhdWRpbycpIHtcbiAgICAgIHZhbHVlLnNwbGljZSg4LCA0LCAuLi5bMHg3MywgMHg2ZiwgMHg3NSwgMHg2ZV0pXG4gICAgICB2YWx1ZS5zcGxpY2UoMjQsIDEzLCAuLi5bMHg1MywgMHg2ZiwgMHg3NSwgMHg2ZSxcbiAgICAgICAgMHg2NCwgMHg0OCwgMHg2MSwgMHg2ZSxcbiAgICAgICAgMHg2NCwgMHg2YywgMHg2NSwgMHg3MiwgMHgwMF0pXG4gICAgfVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goOCArIHZhbHVlLmxlbmd0aCwgJ2hkbHInLCBuZXcgVWludDhBcnJheSh2YWx1ZSkpXG4gIH1cbiAgc3RhdGljIG1pbmYgKGRhdGEpIHtcbiAgICBsZXQgc2l6ZSA9IDhcbiAgICBsZXQgdm1oZCA9IGRhdGEudHlwZSA9PT0gJ3ZpZGVvJyA/IEZNUDQudm1oZCgpIDogRk1QNC5zbWhkKClcbiAgICBsZXQgZGluZiA9IEZNUDQuZGluZigpXG4gICAgbGV0IHN0YmwgPSBGTVA0LnN0YmwoZGF0YSk7XG4gICAgW3ZtaGQsIGRpbmYsIHN0YmxdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBzaXplICs9IGl0ZW0uYnl0ZUxlbmd0aFxuICAgIH0pXG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveChzaXplLCAnbWluZicsIHZtaGQsIGRpbmYsIHN0YmwpXG4gIH1cbiAgc3RhdGljIHZtaGQgKCkge1xuICAgIHJldHVybiBGTVA0LmluaXRCb3goMjAsICd2bWhkJywgbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvblxuICAgICAgMHgwMCwgMHgwMCwgMHgwMSwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIC8vIGdyYXBoaWNzbW9kZVxuICAgICAgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwIC8vIG9wY29sb3JcbiAgICBdKSlcbiAgfVxuICBzdGF0aWMgc21oZCAoKSB7XG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveCgxNiwgJ3NtaGQnLCBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAvLyB2ZXJzaW9uXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuICAgICAgMHgwMCwgMHgwMCwgLy8gYmFsYW5jZVxuICAgICAgMHgwMCwgMHgwMCAvLyByZXNlcnZlZFxuICAgIF0pKVxuICB9XG4gIHN0YXRpYyBkaW5mICgpIHtcbiAgICBsZXQgYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgbGV0IGRyZWYgPSBbMHgwMCwgLy8gdmVyc2lvbiAwXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMSwgLy8gZW50cnlfY291bnRcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MGMsIC8vIGVudHJ5X3NpemVcbiAgICAgIDB4NzUsIDB4NzIsIDB4NmMsIDB4MjAsIC8vICd1cmwnIHR5cGVcbiAgICAgIDB4MDAsIC8vIHZlcnNpb24gMFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMSAvLyBlbnRyeV9mbGFnc1xuICAgIF1cbiAgICBidWZmZXIud3JpdGUoRk1QNC5zaXplKDM2KSwgRk1QNC50eXBlKCdkaW5mJyksIEZNUDQuc2l6ZSgyOCksIEZNUDQudHlwZSgnZHJlZicpLCBuZXcgVWludDhBcnJheShkcmVmKSlcbiAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlclxuICB9XG4gIHN0YXRpYyBzdGJsIChkYXRhKSB7XG4gICAgbGV0IHNpemUgPSA4XG4gICAgbGV0IHN0c2QgPSBGTVA0LnN0c2QoZGF0YSlcbiAgICBsZXQgc3R0cyA9IEZNUDQuc3R0cygpXG4gICAgbGV0IHN0c2MgPSBGTVA0LnN0c2MoKVxuICAgIGxldCBzdHN6ID0gRk1QNC5zdHN6KClcbiAgICBsZXQgc3RjbyA9IEZNUDQuc3RjbygpO1xuICAgIFtzdHNkLCBzdHRzLCBzdHNjLCBzdHN6LCBzdGNvXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLmJ5dGVMZW5ndGhcbiAgICB9KVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goc2l6ZSwgJ3N0YmwnLCBzdHNkLCBzdHRzLCBzdHNjLCBzdHN6LCBzdGNvKVxuICB9XG4gIHN0YXRpYyBzdHNkIChkYXRhKSB7XG4gICAgbGV0IGNvbnRlbnRcbiAgICBpZiAoZGF0YS50eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICAvLyBpZiAoIWRhdGEuaXNBQUMgJiYgZGF0YS5jb2RlYyA9PT0gJ21wNCcpIHtcbiAgICAgIC8vICAgICBjb250ZW50ID0gRk1QNC5tcDMoZGF0YSk7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy9cbiAgICAgIC8vIH1cbiAgICAgIC8vIOaUr+aMgW1wNGFcbiAgICAgIGNvbnRlbnQgPSBGTVA0Lm1wNGEoZGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCA9IEZNUDQuYXZjMShkYXRhKVxuICAgIH1cbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDE2ICsgY29udGVudC5ieXRlTGVuZ3RoLCAnc3RzZCcsIEZNUDQuZXh0ZW5zaW9uKDAsIDApLCBuZXcgVWludDhBcnJheShbMHgwMCwgMHgwMCwgMHgwMCwgMHgwMV0pLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyBtcDRhIChkYXRhKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIDB4MDEsIC8vIGRhdGFfcmVmZXJlbmNlX2luZGV4XG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIGRhdGEuY2hhbm5lbENvdW50LCAvLyBjaGFubmVsY291bnRcbiAgICAgIDB4MDAsIDB4MTAsIC8vIHNhbXBsZVNpemU6MTZiaXRzXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZDJcbiAgICAgIChkYXRhLnNhbXBsZXJhdGUgPj4gOCkgJiAweGZmLFxuICAgICAgZGF0YS5zYW1wbGVyYXRlICYgMHhmZiwgLy9cbiAgICAgIDB4MDAsIDB4MDBcbiAgICBdKVxuICAgIGxldCBlc2RzID0gRk1QNC5lc2RzKGRhdGEuY29uZmlnKVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goOCArIGNvbnRlbnQuYnl0ZUxlbmd0aCArIGVzZHMuYnl0ZUxlbmd0aCwgJ21wNGEnLCBjb250ZW50LCBlc2RzKVxuICB9XG4gIHN0YXRpYyBlc2RzIChjb25maWcgPSBbNDMsIDE0NiwgOCwgMF0pIHtcbiAgICBjb25zdCBjb25maWdsZW4gPSBjb25maWcubGVuZ3RoXG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvbiAwXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuXG4gICAgICAweDAzLCAvLyBkZXNjcmlwdG9yX3R5cGVcbiAgICAgIDB4MTcgKyBjb25maWdsZW4sIC8vIGxlbmd0aFxuICAgICAgMHgwMCwgMHgwMSwgLy8gZXNfaWRcbiAgICAgIDB4MDAsIC8vIHN0cmVhbV9wcmlvcml0eVxuXG4gICAgICAweDA0LCAvLyBkZXNjcmlwdG9yX3R5cGVcbiAgICAgIDB4MGYgKyBjb25maWdsZW4sIC8vIGxlbmd0aFxuICAgICAgMHg0MCwgLy8gY29kZWMgOiBtcGVnNF9hdWRpb1xuICAgICAgMHgxNSwgLy8gc3RyZWFtX3R5cGVcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGJ1ZmZlcl9zaXplXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBtYXhCaXRyYXRlXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBhdmdCaXRyYXRlXG5cbiAgICAgIDB4MDUgLy8gZGVzY3JpcHRvcl90eXBlXG4gICAgXS5jb25jYXQoW2NvbmZpZ2xlbl0pLmNvbmNhdChjb25maWcpLmNvbmNhdChbMHgwNiwgMHgwMSwgMHgwMl0pKVxuICAgIGJ1ZmZlci53cml0ZShGTVA0LnNpemUoOCArIGNvbnRlbnQuYnl0ZUxlbmd0aCksIEZNUDQudHlwZSgnZXNkcycpLCBjb250ZW50KVxuICAgIHJldHVybiBidWZmZXIuYnVmZmVyXG4gIH1cbiAgc3RhdGljIGF2YzEgKGRhdGEpIHtcbiAgICBsZXQgYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgbGV0IHNpemUgPSA0MC8vIDgoYXZjMSkrOChhdmNjKSs4KGJ0cnQpKzE2KHBhc3ApXG4gICAgbGV0IHNwcyA9IGRhdGEuc3BzXG4gICAgbGV0IHBwcyA9IGRhdGEucHBzXG4gICAgbGV0IHdpZHRoID0gZGF0YS53aWR0aFxuICAgIGxldCBoZWlnaHQgPSBkYXRhLmhlaWdodFxuICAgIGxldCBoU3BhY2luZyA9IGRhdGEucGl4ZWxSYXRpb1swXVxuICAgIGxldCB2U3BhY2luZyA9IGRhdGEucGl4ZWxSYXRpb1sxXVxuICAgIGxldCBhdmNjQnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgYXZjY0J1ZmZlci53cml0ZShuZXcgVWludDhBcnJheShbXG4gICAgICAweDAxLCAvLyB2ZXJzaW9uXG4gICAgICBzcHNbMV0sIC8vIHByb2ZpbGVcbiAgICAgIHNwc1syXSwgLy8gcHJvZmlsZSBjb21wYXRpYmxlXG4gICAgICBzcHNbM10sIC8vIGxldmVsXG4gICAgICAweGZjIHwgMyxcbiAgICAgIDB4RTAgfCAxIC8vIOebruWJjeWPquWkhOeQhuS4gOS4qnNwc1xuICAgIF0uY29uY2F0KFtzcHMubGVuZ3RoID4+PiA4ICYgMHhmZiwgc3BzLmxlbmd0aCAmIDB4ZmZdKSkpXG4gICAgYXZjY0J1ZmZlci53cml0ZShzcHMsIG5ldyBVaW50OEFycmF5KFsxLCBwcHMubGVuZ3RoID4+PiA4ICYgMHhmZiwgcHBzLmxlbmd0aCAmIDB4ZmZdKSwgcHBzKVxuXG4gICAgbGV0IGF2Y2MgPSBhdmNjQnVmZmVyLmJ1ZmZlclxuICAgIGxldCBhdmMxID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCAweDAxLCAvLyBkYXRhX3JlZmVyZW5jZV9pbmRleFxuICAgICAgMHgwMCwgMHgwMCwgLy8gcHJlX2RlZmluZWRcbiAgICAgIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHByZV9kZWZpbmVkXG4gICAgICAod2lkdGggPj4gOCkgJiAweGZmLFxuICAgICAgd2lkdGggJiAweGZmLCAvLyB3aWR0aFxuICAgICAgKGhlaWdodCA+PiA4KSAmIDB4ZmYsXG4gICAgICBoZWlnaHQgJiAweGZmLCAvLyBoZWlnaHRcbiAgICAgIDB4MDAsIDB4NDgsIDB4MDAsIDB4MDAsIC8vIGhvcml6cmVzb2x1dGlvblxuICAgICAgMHgwMCwgMHg0OCwgMHgwMCwgMHgwMCwgLy8gdmVydHJlc29sdXRpb25cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCAweDAxLCAvLyBmcmFtZV9jb3VudFxuICAgICAgMHgxMixcbiAgICAgIDB4NjQsIDB4NjEsIDB4NjksIDB4NkMsIC8vIGRhaWx5bW90aW9uL2hscy5qc1xuICAgICAgMHg3OSwgMHg2RCwgMHg2RiwgMHg3NCxcbiAgICAgIDB4NjksIDB4NkYsIDB4NkUsIDB4MkYsXG4gICAgICAweDY4LCAweDZDLCAweDczLCAweDJFLFxuICAgICAgMHg2QSwgMHg3MywgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gY29tcHJlc3Nvcm5hbWVcbiAgICAgIDB4MDAsIDB4MTgsIC8vIGRlcHRoID0gMjRcbiAgICAgIDB4MTEsIDB4MTFdKSAvLyBwcmVfZGVmaW5lZCA9IC0xXG4gICAgbGV0IGJ0cnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAweDFjLCAweDljLCAweDgwLCAvLyBidWZmZXJTaXplREJcbiAgICAgIDB4MDAsIDB4MmQsIDB4YzYsIDB4YzAsIC8vIG1heEJpdHJhdGVcbiAgICAgIDB4MDAsIDB4MmQsIDB4YzYsIDB4YzAgLy8gYXZnQml0cmF0ZVxuICAgIF0pXG4gICAgbGV0IHBhc3AgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAoaFNwYWNpbmcgPj4gMjQpLCAvLyBoU3BhY2luZ1xuICAgICAgKGhTcGFjaW5nID4+IDE2KSAmIDB4ZmYsXG4gICAgICAoaFNwYWNpbmcgPj4gOCkgJiAweGZmLFxuICAgICAgaFNwYWNpbmcgJiAweGZmLFxuICAgICAgKHZTcGFjaW5nID4+IDI0KSwgLy8gdlNwYWNpbmdcbiAgICAgICh2U3BhY2luZyA+PiAxNikgJiAweGZmLFxuICAgICAgKHZTcGFjaW5nID4+IDgpICYgMHhmZixcbiAgICAgIHZTcGFjaW5nICYgMHhmZlxuICAgIF0pXG5cbiAgICBidWZmZXIud3JpdGUoXG4gICAgICBGTVA0LnNpemUoc2l6ZSArIGF2YzEuYnl0ZUxlbmd0aCArIGF2Y2MuYnl0ZUxlbmd0aCArIGJ0cnQuYnl0ZUxlbmd0aCksIEZNUDQudHlwZSgnYXZjMScpLCBhdmMxLFxuICAgICAgRk1QNC5zaXplKDggKyBhdmNjLmJ5dGVMZW5ndGgpLCBGTVA0LnR5cGUoJ2F2Y0MnKSwgYXZjYyxcbiAgICAgIEZNUDQuc2l6ZSgyMCksIEZNUDQudHlwZSgnYnRydCcpLCBidHJ0LFxuICAgICAgRk1QNC5zaXplKDE2KSwgRk1QNC50eXBlKCdwYXNwJyksIHBhc3BcbiAgICApXG4gICAgcmV0dXJuIGJ1ZmZlci5idWZmZXJcbiAgfVxuICBzdGF0aWMgc3R0cyAoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAvLyB2ZXJzaW9uXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCAvLyBlbnRyeV9jb3VudFxuICAgIF0pXG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveCgxNiwgJ3N0dHMnLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyBzdHNjICgpIHtcbiAgICBsZXQgY29udGVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIC8vIHZlcnNpb25cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGZsYWdzXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwIC8vIGVudHJ5X2NvdW50XG4gICAgXSlcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDE2LCAnc3RzYycsIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIHN0Y28gKCkge1xuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvblxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAgLy8gZW50cnlfY291bnRcbiAgICBdKVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goMTYsICdzdGNvJywgY29udGVudClcbiAgfVxuICBzdGF0aWMgc3RzeiAoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAvLyB2ZXJzaW9uXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gc2FtcGxlX3NpemVcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAgLy8gc2FtcGxlX2NvdW50XG4gICAgXSlcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDIwLCAnc3RzeicsIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIG12ZXggKGR1cmF0aW9uKSB7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGxldCBtZWhkID0gQnVmZmVyLndyaXRlVWludDMyKGR1cmF0aW9uKVxuICAgIGJ1ZmZlci53cml0ZShGTVA0LnNpemUoODgpLCBGTVA0LnR5cGUoJ212ZXgnKSwgRk1QNC5zaXplKDE2KSwgRk1QNC50eXBlKCdtZWhkJyksIEZNUDQuZXh0ZW5zaW9uKDAsIDApLCBtZWhkLCBGTVA0LnRyZXgoMSksIEZNUDQudHJleCgyKSlcbiAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlclxuICB9XG4gIHN0YXRpYyB0cmV4IChpZCkge1xuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvbiAwXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuICAgICAgKGlkID4+IDI0KSxcbiAgICAgIChpZCA+PiAxNikgJiAweGZmLFxuICAgICAgKGlkID4+IDgpICYgMHhmZixcbiAgICAgIChpZCAmIDB4ZmYpLCAvLyB0cmFja19JRFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMSwgLy8gZGVmYXVsdF9zYW1wbGVfZGVzY3JpcHRpb25faW5kZXhcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGRlZmF1bHRfc2FtcGxlX2R1cmF0aW9uXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBkZWZhdWx0X3NhbXBsZV9zaXplXG4gICAgICAweDAwLCAweDAxLCAweDAwLCAweDAxIC8vIGRlZmF1bHRfc2FtcGxlX2ZsYWdzXG4gICAgXSlcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDggKyBjb250ZW50LmJ5dGVMZW5ndGgsICd0cmV4JywgY29udGVudClcbiAgfVxuICBzdGF0aWMgbW9vZiAoZGF0YSkge1xuICAgIGxldCBzaXplID0gOFxuICAgIGxldCBtZmhkID0gRk1QNC5tZmhkKClcbiAgICBsZXQgdHJhZiA9IEZNUDQudHJhZihkYXRhKTtcbiAgICBbbWZoZCwgdHJhZl0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5ieXRlTGVuZ3RoXG4gICAgfSlcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KHNpemUsICdtb29mJywgbWZoZCwgdHJhZilcbiAgfVxuICBzdGF0aWMgbWZoZCAoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBCdWZmZXIud3JpdGVVaW50MzIoRk1QNC5zZXF1ZW5jZSlcbiAgICBGTVA0LnNlcXVlbmNlICs9IDFcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDE2LCAnbWZoZCcsIEZNUDQuZXh0ZW5zaW9uKDAsIDApLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyB0cmFmIChkYXRhKSB7XG4gICAgbGV0IHNpemUgPSA4XG4gICAgbGV0IHRmaGQgPSBGTVA0LnRmaGQoZGF0YS5pZClcbiAgICBsZXQgdGZkdCA9IEZNUDQudGZkdChkYXRhLnRpbWUpXG4gICAgbGV0IHNkdHAgPSBGTVA0LnNkdHAoZGF0YSlcbiAgICBsZXQgdHJ1biA9IEZNUDQudHJ1bihkYXRhLCBzZHRwLmJ5dGVMZW5ndGgpO1xuICAgIFt0ZmhkLCB0ZmR0LCBzZHRwLCB0cnVuXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLmJ5dGVMZW5ndGhcbiAgICB9KVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goc2l6ZSwgJ3RyYWYnLCB0ZmhkLCB0ZmR0LCBzZHRwLCB0cnVuKVxuICB9XG4gIHN0YXRpYyB0ZmhkIChpZCkge1xuICAgIGxldCBjb250ZW50ID0gQnVmZmVyLndyaXRlVWludDMyKGlkKVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goMTYsICd0ZmhkJywgRk1QNC5leHRlbnNpb24oMCwgMCksIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIHRmZHQgKHRpbWUpIHtcbiAgICAvLyBsZXQgdXBwZXIgPSBNYXRoLmZsb29yKHRpbWUgLyAoVUlOVDMyX01BWCArIDEpKSxcbiAgICAvLyAgICAgbG93ZXIgPSBNYXRoLmZsb29yKHRpbWUgJSAoVUlOVDMyX01BWCArIDEpKTtcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDE2LCAndGZkdCcsIEZNUDQuZXh0ZW5zaW9uKDAsIDApLCBCdWZmZXIud3JpdGVVaW50MzIodGltZSkpXG4gIH1cbiAgc3RhdGljIHRydW4gKGRhdGEsIHNkdHBMZW5ndGgpIHtcbiAgICAvLyBsZXQgaWQgPSBkYXRhLmlkO1xuICAgIC8vIGxldCBjZWlsID0gaWQgPT09IDEgPyAxNiA6IDEyO1xuICAgIGxldCBidWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICBsZXQgc2FtcGxlQ291bnQgPSBCdWZmZXIud3JpdGVVaW50MzIoZGF0YS5zYW1wbGVzLmxlbmd0aClcbiAgICAvLyBtZGF0LWhlYWRlciA4XG4gICAgLy8gbW9vZi1oZWFkZXIgOFxuICAgIC8vIG1maGQgMTZcbiAgICAvLyB0cmFmLWhlYWRlciA4XG4gICAgLy8gdGhoZCAxNlxuICAgIC8vIHRmZHQgMjBcbiAgICAvLyB0cnVuLWhlYWRlciAxMlxuICAgIC8vIHNhbXBsZUNvdW50IDRcbiAgICAvLyBkYXRhLW9mZnNldCA0XG4gICAgLy8gc2FtcGxlcy5sZW5ndGhcbiAgICBsZXQgb2Zmc2V0ID0gQnVmZmVyLndyaXRlVWludDMyKDggKyA4ICsgMTYgKyA4ICsgMTYgKyAxNiArIDEyICsgNCArIDQgKyAxNiAqIGRhdGEuc2FtcGxlcy5sZW5ndGggKyBzZHRwTGVuZ3RoKVxuICAgIGJ1ZmZlci53cml0ZShGTVA0LnNpemUoMjAgKyAxNiAqIGRhdGEuc2FtcGxlcy5sZW5ndGgpLCBGTVA0LnR5cGUoJ3RydW4nKSwgbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4MDAsIDB4MEYsIDB4MDFdKSwgc2FtcGxlQ291bnQsIG9mZnNldClcblxuICAgIGxldCBzaXplID0gYnVmZmVyLmJ1ZmZlci5ieXRlTGVuZ3RoXG4gICAgbGV0IHdyaXRlT2Zmc2V0ID0gMFxuICAgIGRhdGEuc2FtcGxlcy5mb3JFYWNoKCgpID0+IHtcbiAgICAgIHNpemUgKz0gMTZcbiAgICB9KVxuXG4gICAgbGV0IHRydW5Cb3ggPSBuZXcgVWludDhBcnJheShzaXplKVxuXG4gICAgdHJ1bkJveC5zZXQoYnVmZmVyLmJ1ZmZlciwgMClcbiAgICB3cml0ZU9mZnNldCArPSBidWZmZXIuYnVmZmVyLmJ5dGVMZW5ndGhcbiAgICBkYXRhLnNhbXBsZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgdHJ1bkJveC5zZXQoQnVmZmVyLndyaXRlVWludDMyKGl0ZW0uZHVyYXRpb24pLCB3cml0ZU9mZnNldClcbiAgICAgIHdyaXRlT2Zmc2V0ICs9IDRcbiAgICAgIHRydW5Cb3guc2V0KEJ1ZmZlci53cml0ZVVpbnQzMihpdGVtLnNpemUpLCB3cml0ZU9mZnNldClcbiAgICAgIHdyaXRlT2Zmc2V0ICs9IDRcblxuICAgICAgaWYgKGRhdGEuaWQgPT09IDEpIHtcbiAgICAgICAgdHJ1bkJveC5zZXQoQnVmZmVyLndyaXRlVWludDMyKGl0ZW0uaXNLZXlmcmFtZSA/IDB4MDIwMDAwMDAgOiAweDAxMDEwMDAwKSwgd3JpdGVPZmZzZXQpXG4gICAgICAgIHdyaXRlT2Zmc2V0ICs9IDRcbiAgICAgICAgdHJ1bkJveC5zZXQoQnVmZmVyLndyaXRlVWludDMyKGl0ZW0uY3BzKSwgd3JpdGVPZmZzZXQpXG4gICAgICAgIHdyaXRlT2Zmc2V0ICs9IDRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRydW5Cb3guc2V0KEJ1ZmZlci53cml0ZVVpbnQzMigweDAxMDAwMDAwKSwgd3JpdGVPZmZzZXQpXG4gICAgICAgIHdyaXRlT2Zmc2V0ICs9IDRcbiAgICAgICAgdHJ1bkJveC5zZXQoQnVmZmVyLndyaXRlVWludDMyKDApLCB3cml0ZU9mZnNldClcbiAgICAgICAgd3JpdGVPZmZzZXQgKz0gNFxuICAgICAgfVxuXG4gICAgICAvLyBidWZmZXIud3JpdGUoQnVmZmVyLndyaXRlVWludDMyKDApKTtcbiAgICB9KVxuICAgIHJldHVybiB0cnVuQm94XG4gIH1cbiAgc3RhdGljIHNkdHAgKGRhdGEpIHtcbiAgICBsZXQgYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgYnVmZmVyLndyaXRlKEZNUDQuc2l6ZSgxMiArIGRhdGEuc2FtcGxlcy5sZW5ndGgpLCBGTVA0LnR5cGUoJ3NkdHAnKSwgRk1QNC5leHRlbnNpb24oMCwgMCkpXG4gICAgZGF0YS5zYW1wbGVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBidWZmZXIud3JpdGUobmV3IFVpbnQ4QXJyYXkoZGF0YS5pZCA9PT0gMSA/IFtpdGVtLmtleSA/IDMyIDogMTZdIDogWzE2XSkpXG4gICAgfSlcbiAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlclxuICB9XG4gIHN0YXRpYyBtZGF0IChkYXRhKSB7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGxldCBzaXplID0gOFxuICAgIGRhdGEuc2FtcGxlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLnNpemVcbiAgICB9KVxuICAgIGJ1ZmZlci53cml0ZShGTVA0LnNpemUoc2l6ZSksIEZNUDQudHlwZSgnbWRhdCcpKVxuICAgIGxldCBtZGF0Qm94ID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSlcbiAgICBsZXQgb2Zmc2V0ID0gMFxuICAgIG1kYXRCb3guc2V0KGJ1ZmZlci5idWZmZXIsIG9mZnNldClcbiAgICBvZmZzZXQgKz0gOFxuICAgIGRhdGEuc2FtcGxlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5idWZmZXIuZm9yRWFjaCgodW5pdCkgPT4ge1xuICAgICAgICBtZGF0Qm94LnNldCh1bml0LmRhdGEsIG9mZnNldClcbiAgICAgICAgb2Zmc2V0ICs9IHVuaXQuZGF0YS5ieXRlTGVuZ3RoXG4gICAgICAgIC8vIGJ1ZmZlci53cml0ZSh1bml0LmRhdGEpO1xuICAgICAgfSlcbiAgICB9KVxuICAgIHJldHVybiBtZGF0Qm94XG4gIH1cbn1cbkZNUDQudHlwZSA9IGNhY2hlV3JhcHBlcigobmFtZSkgPT4ge1xuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoW25hbWUuY2hhckNvZGVBdCgwKSwgbmFtZS5jaGFyQ29kZUF0KDEpLCBuYW1lLmNoYXJDb2RlQXQoMiksIG5hbWUuY2hhckNvZGVBdCgzKV0pXG59KVxuRk1QNC5zZXF1ZW5jZSA9IDFcblxuZXhwb3J0IGRlZmF1bHQgRk1QNFxuIiwiaW1wb3J0IE1lZGlhU2VnbWVudExpc3QgZnJvbSAnLi4vLi4vbW9kZWxzL01lZGlhU2VnbWVudExpc3QnXG5pbXBvcnQgTWVkaWFTZWdtZW50IGZyb20gJy4uLy4uL21vZGVscy9NZWRpYVNlZ21lbnQnXG5pbXBvcnQgTWVkaWFTYW1wbGUgZnJvbSAnLi4vLi4vbW9kZWxzL01lZGlhU2FtcGxlJ1xuaW1wb3J0IHNuaWZmZXIgZnJvbSAnLi4vLi4vdXRpbHMvc25pZmZlcidcbmltcG9ydCBCdWZmZXIgZnJvbSAnLi4vLi4vd3JpdGUvQnVmZmVyJ1xuaW1wb3J0IEZNUDQgZnJvbSAnLi9GbXA0J1xuaW1wb3J0IFJlbXV4ZXIgZnJvbSAnLi9SZW11eGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNcDRSZW11eGVyIGV4dGVuZHMgUmVtdXhlciB7XG4gIGNvbnN0cnVjdG9yIChzdG9yZSkge1xuICAgIHN1cGVyKHN0b3JlKVxuICAgIHRoaXMuX2R0c0Jhc2UgPSAwXG4gICAgdGhpcy5faXNEdHNCYXNlSW5pdGVkID0gZmFsc2VcbiAgICB0aGlzLl92aWRlb01ldGEgPSBudWxsXG4gICAgdGhpcy5fYXVkaW9NZXRhID0gbnVsbFxuICAgIHRoaXMuX2F1ZGlvTmV4dER0cyA9IG51bGxcbiAgICB0aGlzLl92aWRlb05leHREdHMgPSBudWxsXG4gICAgdGhpcy5fdmlkZW9TZWdtZW50TGlzdCA9IG5ldyBNZWRpYVNlZ21lbnRMaXN0KCd2aWRlbycpXG4gICAgdGhpcy5fYXVkaW9TZWdtZW50TGlzdCA9IG5ldyBNZWRpYVNlZ21lbnRMaXN0KCdhdWRpbycpXG4gICAgY29uc3Qge2Jyb3dzZXJ9ID0gc25pZmZlclxuICAgIHRoaXMuX2ZpbGxTaWxlbmNlRnJhbWUgPSBicm93c2VyID09PSAnaWUnXG4gICAgdGhpcy5oYW5kbGVNZWRpYUZyYWdtZW50ID0gKCkgPT4ge31cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuX2R0c0Jhc2UgPSAtMVxuICAgIHRoaXMuX2R0c0Jhc2VJbml0ZWQgPSBmYWxzZVxuICAgIHRoaXMuX2F1ZGlvTWV0YSA9IG51bGxcbiAgICB0aGlzLl92aWRlb01ldGEgPSBudWxsXG4gICAgdGhpcy5fdmlkZW9OZXh0RHRzID0gbnVsbFxuICAgIHRoaXMuX2F1ZGlvTmV4dER0cyA9IG51bGxcbiAgICB0aGlzLl92aWRlb1NlZ21lbnRMaXN0LmNsZWFyKClcbiAgICB0aGlzLl9hdWRpb1NlZ21lbnRMaXN0LmNsZWFyKClcbiAgICB0aGlzLl92aWRlb1NlZ21lbnRMaXN0ID0gbnVsbFxuICAgIHRoaXMuX2F1ZGlvU2VnbWVudExpc3QgPSBudWxsXG4gIH1cblxuICByZW11eCAoYXVkaW9UcmFjaywgdmlkZW9UcmFjaykge1xuICAgICF0aGlzLl9pc0R0c0Jhc2VJbml0ZWQgJiYgdGhpcy5jYWxjRHRzQmFzZShhdWRpb1RyYWNrLCB2aWRlb1RyYWNrKVxuXG4gICAgdGhpcy5fcmVtdXhWaWRlbyh2aWRlb1RyYWNrKVxuICAgIHRoaXMuX3JlbXV4QXVkaW8oYXVkaW9UcmFjaylcbiAgfVxuXG4gIHNlZWsgKCkge1xuICAgIHRoaXMuX3ZpZGVvTmV4dER0cyA9IG51bGxcbiAgICB0aGlzLl9hdWRpb05leHREdHMgPSBudWxsXG4gICAgdGhpcy5fdmlkZW9TZWdtZW50TGlzdC5jbGVhcigpXG4gICAgdGhpcy5fYXVkaW9TZWdtZW50TGlzdC5jbGVhcigpXG4gIH1cblxuICBvbk1ldGFEYXRhUmVhZHkgKHR5cGUsIG1ldGEpIHtcbiAgICB0aGlzW2BfJHt0eXBlfU1ldGFgXSA9IG1ldGFcbiAgfVxuXG4gIG9uTWVkaWFJbmZvUmVhZHkgKG1lZGlhSW5mbykge1xuICAgIGxldCBmdHlwTW9vdiA9IG5ldyBCdWZmZXIoKVxuICAgIGxldCBmdHlwID0gRk1QNC5mdHlwKClcbiAgICBsZXQgbW9vdiA9IEZNUDQubW9vdihtZWRpYUluZm8pXG4gICAgZnR5cE1vb3Yud3JpdGUoZnR5cCwgbW9vdilcbiAgICByZXR1cm4gZnR5cE1vb3YuYnVmZmVyXG4gIH1cblxuICBjYWxjRHRzQmFzZSAoYXVkaW9UcmFjaywgdmlkZW9UcmFjaykge1xuICAgIGxldCBhdWRpb0Jhc2UgPSBJbmZpbml0eVxuICAgIGxldCB2aWRlb0Jhc2UgPSBJbmZpbml0eVxuICAgIGlmIChhdWRpb1RyYWNrLnNhbXBsZXMgJiYgYXVkaW9UcmFjay5zYW1wbGVzLmxlbmd0aCkge1xuICAgICAgYXVkaW9CYXNlID0gYXVkaW9UcmFjay5zYW1wbGVzWzBdLmR0c1xuICAgIH1cbiAgICBpZiAodmlkZW9UcmFjay5zYW1wbGVzICYmIHZpZGVvVHJhY2suc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIHZpZGVvQmFzZSA9IHZpZGVvVHJhY2suc2FtcGxlc1swXS5kdHNcbiAgICB9XG5cbiAgICB0aGlzLl9kdHNCYXNlID0gTWF0aC5taW4oYXVkaW9CYXNlLCB2aWRlb0Jhc2UpXG4gICAgdGhpcy5faXNEdHNCYXNlSW5pdGVkID0gdHJ1ZVxuICB9XG5cbiAgX3JlbXV4VmlkZW8gKHZpZGVvVHJhY2spIHtcbiAgICBpZiAoIXRoaXMuX3ZpZGVvTWV0YSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHRyYWNrID0gdmlkZW9UcmFja1xuICAgIGlmICghdmlkZW9UcmFjay5zYW1wbGVzIHx8ICF2aWRlb1RyYWNrLnNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbGV0IHtzYW1wbGVzfSA9IHRyYWNrXG4gICAgbGV0IGR0c0NvcnJlY3Rpb25cbiAgICBsZXQgZmlyc3REdHMgPSAtMVxuICAgIGxldCBsYXN0RHRzID0gLTFcbiAgICBsZXQgZmlyc3RQdHMgPSAtMVxuICAgIGxldCBsYXN0UHRzID0gLTFcblxuICAgIGNvbnN0IG1wNFNhbXBsZXMgPSBbXVxuICAgIGNvbnN0IG1kYXRCb3ggPSB7XG4gICAgICBzYW1wbGVzOiBbXVxuICAgIH1cbiAgICBjb25zdCB2aWRlb1NlZ21lbnQgPSBuZXcgTWVkaWFTZWdtZW50KClcbiAgICB3aGlsZSAoc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGF2Y1NhbXBsZSA9IHNhbXBsZXMuc2hpZnQoKVxuICAgICAgY29uc3Qge2lzS2V5ZnJhbWUsIGNwc30gPSBhdmNTYW1wbGVcbiAgICAgIGxldCBkdHMgPSBhdmNTYW1wbGUuZHRzIC0gdGhpcy5fZHRzQmFzZVxuXG4gICAgICBpZiAoZHRzQ29ycmVjdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICghdGhpcy5fdmlkZW9OZXh0RHRzKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX3ZpZGVvU2VnbWVudExpc3QuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICBkdHNDb3JyZWN0aW9uID0gMFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0U2VnbWVudCA9IHRoaXMuX3ZpZGVvU2VnbWVudExpc3QuZ2V0TGFzdFNlZ21lbnRCZWZvcmUoZHRzKVxuICAgICAgICAgICAgaWYgKGxhc3RTZWdtZW50KSB7XG4gICAgICAgICAgICAgIGxldCBnYXBcbiAgICAgICAgICAgICAgY29uc3Qge2xhc3REdHMsIGdhcDogbGFzdEdhcH0gPSBsYXN0U2VnbWVudFxuICAgICAgICAgICAgICBnYXAgPSBkdHMgLSAobGFzdER0cyArIGxhc3RHYXApID4gMyA/IGR0cyAtIChsYXN0RHRzICsgbGFzdEdhcCkgOiAwXG4gICAgICAgICAgICAgIGR0c0NvcnJlY3Rpb24gPSBkdHMgLSAobGFzdER0cyArIGdhcClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGR0c0NvcnJlY3Rpb24gPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGR0c0NvcnJlY3Rpb24gPSBkdHMgLSB0aGlzLl92aWRlb05leHREdHMgPj0gMTAwMCA/IDAgOiBkdHMgLSB0aGlzLl92aWRlb05leHREdHNcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3Qgb3JpZ2luRHRzID0gZHRzXG4gICAgICBkdHMgLT0gZHRzQ29ycmVjdGlvblxuICAgICAgY29uc3QgcHRzID0gZHRzICsgY3BzXG5cbiAgICAgIGlmIChmaXJzdER0cyA9PT0gLTEpIHtcbiAgICAgICAgZmlyc3REdHMgPSBkdHNcbiAgICAgICAgZmlyc3RQdHMgPSBwdHNcbiAgICAgIH1cbiAgICAgIGxldCBfdW5pdHMgPSBbXVxuICAgICAgd2hpbGUgKGF2Y1NhbXBsZS51bml0cy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IG1kYXRTYW1wbGUgPSB7XG4gICAgICAgICAgYnVmZmVyOiBbXSxcbiAgICAgICAgICBzaXplOiAwXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdW5pdCA9IGF2Y1NhbXBsZS51bml0cy5zaGlmdCgpXG4gICAgICAgIF91bml0cy5wdXNoKHVuaXQpXG4gICAgICAgIG1kYXRTYW1wbGUuYnVmZmVyLnB1c2godW5pdClcbiAgICAgICAgbWRhdFNhbXBsZS5zaXplICs9IHVuaXQuZGF0YS5ieXRlTGVuZ3RoXG5cbiAgICAgICAgbWRhdEJveC5zYW1wbGVzLnB1c2gobWRhdFNhbXBsZSlcbiAgICAgIH1cblxuICAgICAgbGV0IHNhbXBsZUR1cmF0aW9uID0gMFxuXG4gICAgICBpZiAoc2FtcGxlcy5sZW5ndGggPj0gMSkge1xuICAgICAgICBjb25zdCBuZXh0RHRzID0gc2FtcGxlc1swXS5kdHMgLSB0aGlzLl9kdHNCYXNlIC0gZHRzQ29ycmVjdGlvblxuICAgICAgICBzYW1wbGVEdXJhdGlvbiA9IG5leHREdHMgLSBkdHNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChtcDRTYW1wbGVzLmxlbmd0aCA+PSAxKSB7IC8vIGxhc3Rlc3Qgc2FtcGxlLCB1c2Ugc2Vjb25kIGxhc3QgZHVyYXRpb25cbiAgICAgICAgICBzYW1wbGVEdXJhdGlvbiA9IG1wNFNhbXBsZXNbbXA0U2FtcGxlcy5sZW5ndGggLSAxXS5kdXJhdGlvblxuICAgICAgICB9IGVsc2UgeyAvLyB0aGUgb25seSBvbmUgc2FtcGxlLCB1c2UgcmVmZXJlbmNlIGR1cmF0aW9uXG4gICAgICAgICAgc2FtcGxlRHVyYXRpb24gPSB0aGlzLl92aWRlb01ldGEucmVmU2FtcGxlRHVyYXRpb25cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNLZXlmcmFtZSkge1xuICAgICAgICBjb25zdCByYXAgPSBuZXcgTWVkaWFTYW1wbGUoe1xuICAgICAgICAgIGR0cyxcbiAgICAgICAgICBwdHMsXG4gICAgICAgICAgZHVyYXRpb246IHNhbXBsZUR1cmF0aW9uLFxuICAgICAgICAgIG9yaWdpbkR0czogYXZjU2FtcGxlLmR0cyxcbiAgICAgICAgICBwb3NpdGlvbjogYXZjU2FtcGxlLnBvc2l0aW9uLFxuICAgICAgICAgIGlzUkFQOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIHZpZGVvU2VnbWVudC5hZGRSQVAocmFwKVxuICAgICAgfVxuXG4gICAgICBtcDRTYW1wbGVzLnB1c2goe1xuICAgICAgICBkdHMsXG4gICAgICAgIGNwcyxcbiAgICAgICAgcHRzLFxuICAgICAgICB1bml0czogX3VuaXRzLFxuICAgICAgICBzaXplOiBhdmNTYW1wbGUubGVuZ3RoLFxuICAgICAgICBpc0tleWZyYW1lLFxuICAgICAgICBkdXJhdGlvbjogc2FtcGxlRHVyYXRpb24sXG4gICAgICAgIG9yaWdpbkR0c1xuICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgZmlyc3QgPSBtcDRTYW1wbGVzWzBdXG4gICAgY29uc3QgbGFzdCA9IG1wNFNhbXBsZXNbbXA0U2FtcGxlcy5sZW5ndGggLSAxXVxuICAgIGxhc3REdHMgPSBsYXN0LmR0cyArIGxhc3QuZHVyYXRpb25cbiAgICBsYXN0UHRzID0gbGFzdC5wdHMgKyBsYXN0LmR1cmF0aW9uXG5cbiAgICB0aGlzLl92aWRlb05leHREdHMgPSBsYXN0RHRzXG5cbiAgICB2aWRlb1NlZ21lbnQuc3RhcnREdHMgPSBmaXJzdER0c1xuICAgIHZpZGVvU2VnbWVudC5lbmREdHMgPSBsYXN0RHRzXG4gICAgdmlkZW9TZWdtZW50LnN0YXJ0UHRzID0gZmlyc3RQdHNcbiAgICB2aWRlb1NlZ21lbnQuZW5kUHRzID0gbGFzdFB0c1xuICAgIHZpZGVvU2VnbWVudC5vcmlnaW5TdGFydER0cyA9IGZpcnN0Lm9yaWdpbkR0c1xuICAgIHZpZGVvU2VnbWVudC5vcmlnaW5FbmREdHMgPSBsYXN0Lm9yaWdpbkR0cyArIGxhc3QuZHVyYXRpb25cbiAgICB2aWRlb1NlZ21lbnQuZ2FwID0gZHRzQ29ycmVjdGlvblxuICAgIGNvbnN0IGZpcnN0U2FtcGxlID0gbmV3IE1lZGlhU2FtcGxlKHtcbiAgICAgIGR0czogZmlyc3QuZHRzLFxuICAgICAgcHRzOiBmaXJzdC5wdHMsXG4gICAgICBkdXJhdGlvbjogZmlyc3QuZHVyYXRpb24sXG4gICAgICBpc0tleWZyYW1lOiBmaXJzdC5pc0tleWZyYW1lLFxuICAgICAgb3JpZ2luRHRzOiBmaXJzdC5vcmlnaW5EdHNcbiAgICB9KVxuICAgIGNvbnN0IGxhc3RTYW1wbGUgPSBuZXcgTWVkaWFTYW1wbGUoe1xuICAgICAgZHRzOiBsYXN0LmR0cyxcbiAgICAgIHB0czogbGFzdC5wdHMsXG4gICAgICBkdXJhdGlvbjogbGFzdC5kdXJhdGlvbixcbiAgICAgIGlzS2V5ZnJhbWU6IGxhc3QuaXNLZXlmcmFtZSxcbiAgICAgIG9yaWdpbkR0czogbGFzdC5vcmlnaW5EdHNcbiAgICB9KVxuICAgIHZpZGVvU2VnbWVudC5maXJzdFNhbXBsZSA9IGZpcnN0U2FtcGxlXG4gICAgdmlkZW9TZWdtZW50Lmxhc3RTYW1wbGUgPSBsYXN0U2FtcGxlXG4gICAgbGV0IG1vb2ZNZGF0ID0gbmV3IEJ1ZmZlcigpXG5cbiAgICB0cmFjay5zYW1wbGVzID0gbXA0U2FtcGxlc1xuICAgIHRyYWNrLnRpbWUgPSBmaXJzdER0c1xuICAgIGNvbnN0IG1vb2YgPSBGTVA0Lm1vb2YodHJhY2spXG4gICAgY29uc3QgbWRhdCA9IEZNUDQubWRhdChtZGF0Qm94KVxuICAgIG1vb2ZNZGF0LndyaXRlKG1vb2YsIG1kYXQpXG5cbiAgICBpZiAoIXRoaXMuX3N0b3JlLmlzTGl2ZSkge1xuICAgICAgdGhpcy5fdmlkZW9TZWdtZW50TGlzdC5hcHBlbmQodmlkZW9TZWdtZW50KVxuICAgIH1cblxuICAgIHRyYWNrLnNhbXBsZXMgPSBbXVxuICAgIHRyYWNrLmxlbmd0aCA9IDBcbiAgICBkZWJ1Z2dlclxuICAgIHRoaXMuaGFuZGxlTWVkaWFGcmFnbWVudCh7XG4gICAgICB0eXBlOiAndmlkZW8nLFxuICAgICAgZGF0YTogbW9vZk1kYXQuYnVmZmVyLmJ1ZmZlcixcbiAgICAgIHNhbXBsZUNvdW50OiBtcDRTYW1wbGVzLmxlbmd0aCxcbiAgICAgIGZyYWdtZW50OiB2aWRlb1NlZ21lbnRcbiAgICB9KVxuICB9XG5cbiAgX3JlbXV4QXVkaW8gKHRyYWNrKSB7XG4gICAgaWYgKCF0aGlzLl9hdWRpb01ldGEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB7c2FtcGxlc30gPSB0cmFja1xuICAgIGxldCBkdHNDb3JyZWN0aW9uXG4gICAgbGV0IGZpcnN0RHRzID0gLTFcbiAgICBsZXQgbGFzdER0cyA9IC0xXG4gICAgLy8gbGV0IGZpcnN0UHRzID0gLTFcbiAgICAvLyBsZXQgbGFzdFB0cyA9IC0xXG4gICAgbGV0IHNpbGVudER1cmF0aW9uXG4gICAgbGV0IG1wNFNhbXBsZXMgPSBbXVxuXG4gICAgY29uc3QgbWRhdEJveCA9IHtcbiAgICAgIHNhbXBsZXM6IFtdXG4gICAgfVxuICAgIGlmICghc2FtcGxlcyB8fCAhc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgaXNGaXJzdER0c0luaXRlZCA9IGZhbHNlXG4gICAgd2hpbGUgKHNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICBsZXQgc2FtcGxlID0gc2FtcGxlcy5zaGlmdCgpXG4gICAgICBjb25zdCB7dW5pdH0gPSBzYW1wbGVcbiAgICAgIGxldCBkdHMgPSBzYW1wbGUuZHRzIC0gdGhpcy5fZHRzQmFzZVxuXG4gICAgICBsZXQgbmVlZFNpbGVudEZyYW1lID0gZmFsc2VcbiAgICAgIGlmIChkdHNDb3JyZWN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9hdWRpb05leHREdHMpIHtcbiAgICAgICAgICBpZiAodGhpcy5fYXVkaW9TZWdtZW50TGlzdC5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIGR0c0NvcnJlY3Rpb24gPSAwXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RTZWdtZW50ID0gdGhpcy5fYXVkaW9TZWdtZW50TGlzdC5nZXRMYXN0U2VnbWVudEJlZm9yZShkdHMpXG4gICAgICAgICAgICBpZiAobGFzdFNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgbGV0IGdhcFxuICAgICAgICAgICAgICBjb25zdCB7bGFzdER0cywgZ2FwOiBsYXN0R2FwfSA9IGxhc3RTZWdtZW50XG4gICAgICAgICAgICAgIGdhcCA9IGR0cyAtIChsYXN0RHRzICsgbGFzdEdhcCkgPiAzID8gZHRzIC0gKGxhc3REdHMgKyBsYXN0R2FwKSA6IDBcbiAgICAgICAgICAgICAgZHRzQ29ycmVjdGlvbiA9IGR0cyAtIChsYXN0RHRzICsgZ2FwKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmVlZFNpbGVudEZyYW1lID0gdGhpcy5fZmlsbFNpbGVuY2VGcmFtZSAmJiAhdGhpcy5fdmlkZW9TZWdtZW50TGlzdC5pc0VtcHR5KClcbiAgICAgICAgICAgICAgZHRzQ29ycmVjdGlvbiA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHRzQ29ycmVjdGlvbiA9IGR0cyAtIHRoaXMuX2F1ZGlvTmV4dER0cyA+PSAxMDAwID8gMCA6IGR0cyAtIHRoaXMuX2F1ZGlvTmV4dER0c1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBvcmlnaW5EdHMgPSBkdHNcbiAgICAgIGR0cyAtPSBkdHNDb3JyZWN0aW9uXG5cbiAgICAgIGlmIChuZWVkU2lsZW50RnJhbWUpIHtcbiAgICAgICAgY29uc3QgdmlkZW9TZWdtZW50ID0gdGhpcy5fdmlkZW9TZWdtZW50TGlzdC5nZXRMYXN0U2FtcGxlQmVmb3JlKG9yaWdpbkR0cylcblxuICAgICAgICBpZiAodmlkZW9TZWdtZW50ICYmIHZpZGVvU2VnbWVudC5zdGFydER0cyA8IGR0cykge1xuICAgICAgICAgIHNpbGVudER1cmF0aW9uID0gZHRzIC0gdmlkZW9TZWdtZW50LnN0YXJ0RHRzXG4gICAgICAgICAgZHRzID0gdmlkZW9TZWdtZW50LnN0YXJ0RHRzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmVlZFNpbGVudEZyYW1lID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzRmlyc3REdHNJbml0ZWQpIHtcbiAgICAgICAgZmlyc3REdHMgPSBkdHNcbiAgICAgICAgaXNGaXJzdER0c0luaXRlZCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRTaWxlbnRGcmFtZSkge1xuICAgICAgICBzYW1wbGVzLnVuc2hpZnQoc2FtcGxlKVxuICAgICAgICBjb25zdCBzaWxlbnRGcmFtZSA9IHRoaXMuaW5pdFNpbGVudEF1ZGlvKGR0cywgc2lsZW50RHVyYXRpb24pXG4gICAgICAgIG1wNFNhbXBsZXMucHVzaChzaWxlbnRGcmFtZSlcblxuICAgICAgICBsZXQgbWRhdFNhbXBsZSA9IHtcbiAgICAgICAgICBidWZmZXI6IFtdLFxuICAgICAgICAgIHNpemU6IDBcbiAgICAgICAgfVxuICAgICAgICBtZGF0U2FtcGxlLmJ1ZmZlci5wdXNoKHtcbiAgICAgICAgICBkYXRhOiBzaWxlbnRGcmFtZS51bml0XG4gICAgICAgIH0pXG4gICAgICAgIG1kYXRTYW1wbGUuc2l6ZSArPSBzaWxlbnRGcmFtZS51bml0LmJ5dGVMZW5ndGhcblxuICAgICAgICBtZGF0Qm94LnNhbXBsZXMucHVzaChtZGF0U2FtcGxlKVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBsZXQgc2FtcGxlRHVyYXRpb24gPSAwXG5cbiAgICAgIGlmIChzYW1wbGVzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgIGNvbnN0IG5leHREdHMgPSBzYW1wbGVzWzBdLmR0cyAtIHRoaXMuX2R0c0Jhc2UgLSBkdHNDb3JyZWN0aW9uXG4gICAgICAgIHNhbXBsZUR1cmF0aW9uID0gbmV4dER0cyAtIGR0c1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG1wNFNhbXBsZXMubGVuZ3RoID49IDEpIHsgLy8gdXNlIHNlY29uZCBsYXN0IHNhbXBsZSBkdXJhdGlvblxuICAgICAgICAgIHNhbXBsZUR1cmF0aW9uID0gbXA0U2FtcGxlc1ttcDRTYW1wbGVzLmxlbmd0aCAtIDFdLmR1cmF0aW9uXG4gICAgICAgIH0gZWxzZSB7IC8vIHRoZSBvbmx5IG9uZSBzYW1wbGUsIHVzZSByZWZlcmVuY2Ugc2FtcGxlIGR1cmF0aW9uXG4gICAgICAgICAgc2FtcGxlRHVyYXRpb24gPSB0aGlzLl9hdWRpb01ldGEucmVmU2FtcGxlRHVyYXRpb25cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtcDRTYW1wbGUgPSB7XG4gICAgICAgIGR0cyxcbiAgICAgICAgcHRzOiBkdHMsXG4gICAgICAgIGN0czogMCxcbiAgICAgICAgc2l6ZTogdW5pdC5ieXRlTGVuZ3RoLFxuICAgICAgICBkdXJhdGlvbjogc2FtcGxlRHVyYXRpb24sXG4gICAgICAgIG9yaWdpbkR0c1xuICAgICAgfVxuXG4gICAgICBsZXQgbWRhdFNhbXBsZSA9IHtcbiAgICAgICAgYnVmZmVyOiBbXSxcbiAgICAgICAgc2l6ZTogMFxuICAgICAgfVxuICAgICAgbWRhdFNhbXBsZS5idWZmZXIucHVzaCh7XG4gICAgICAgIGRhdGE6IHVuaXRcbiAgICAgIH0pXG4gICAgICBtZGF0U2FtcGxlLnNpemUgKz0gdW5pdC5ieXRlTGVuZ3RoXG5cbiAgICAgIG1kYXRCb3guc2FtcGxlcy5wdXNoKG1kYXRTYW1wbGUpXG5cbiAgICAgIG1wNFNhbXBsZXMucHVzaChtcDRTYW1wbGUpXG4gICAgfVxuXG4gICAgY29uc3QgbGFzdCA9IG1wNFNhbXBsZXNbbXA0U2FtcGxlcy5sZW5ndGggLSAxXVxuICAgIGxhc3REdHMgPSBsYXN0LmR0cyArIGxhc3QuZHVyYXRpb25cblxuICAgIHRoaXMuX2F1ZGlvTmV4dER0cyA9IGxhc3REdHNcblxuICAgIGNvbnN0IGF1ZGlvU2VnbWVudCA9IG5ldyBNZWRpYVNlZ21lbnQoKVxuICAgIGF1ZGlvU2VnbWVudC5zdGFydER0cyA9IGZpcnN0RHRzXG4gICAgYXVkaW9TZWdtZW50LmVuZER0cyA9IGxhc3REdHNcbiAgICBhdWRpb1NlZ21lbnQuc3RhcnRQdHMgPSBmaXJzdER0c1xuICAgIGF1ZGlvU2VnbWVudC5lbmRQdHMgPSBsYXN0RHRzXG4gICAgYXVkaW9TZWdtZW50Lm9yaWdpblN0YXJ0RHRzID0gbXA0U2FtcGxlc1swXS5vcmlnaW5EdHNcbiAgICBhdWRpb1NlZ21lbnQub3JpZ2luRW5kRHRzID0gbGFzdC5vcmlnaW5EdHMgKyBsYXN0LmR1cmF0aW9uXG4gICAgYXVkaW9TZWdtZW50LmdhcCA9IGR0c0NvcnJlY3Rpb25cbiAgICBhdWRpb1NlZ21lbnQuZmlyc3RTYW1wbGUgPSBuZXcgTWVkaWFTYW1wbGUoe1xuICAgICAgZHRzOiBtcDRTYW1wbGVzWzBdLmR0cyxcbiAgICAgIHB0czogbXA0U2FtcGxlc1swXS5wdHMsXG4gICAgICBkdXJhdGlvbjogbXA0U2FtcGxlc1swXS5kdXJhdGlvbixcbiAgICAgIG9yaWdpbkR0czogbXA0U2FtcGxlc1swXS5vcmlnaW5EdHNcbiAgICB9KVxuICAgIGF1ZGlvU2VnbWVudC5sYXN0U2FtcGxlID0gbmV3IE1lZGlhU2FtcGxlKHtcbiAgICAgIGR0czogbGFzdC5kdHMsXG4gICAgICBwdHM6IGxhc3QucHRzLFxuICAgICAgZHVyYXRpb246IGxhc3QuZHVyYXRpb24sXG4gICAgICBvcmlnaW5EdHM6IGxhc3Qub3JpZ2luRHRzXG4gICAgfSlcblxuICAgIHRyYWNrLnNhbXBsZXMgPSBtcDRTYW1wbGVzXG4gICAgY29uc3QgbW9vZk1kYXQgPSBuZXcgQnVmZmVyKClcbiAgICB0cmFjay50aW1lID0gZmlyc3REdHNcbiAgICBjb25zdCBtb29mID0gRk1QNC5tb29mKHRyYWNrLCBmaXJzdER0cylcbiAgICBjb25zdCBtZGF0ID0gRk1QNC5tZGF0KG1kYXRCb3gpXG4gICAgbW9vZk1kYXQud3JpdGUobW9vZiwgbWRhdClcblxuICAgIGlmICghdGhpcy5fc3RvcmUuaXNMaXZlKSB7XG4gICAgICB0aGlzLl9hdWRpb1NlZ21lbnRMaXN0LmFwcGVuZChhdWRpb1NlZ21lbnQpXG4gICAgfVxuICAgIHRyYWNrLnNhbXBsZXMgPSBbXVxuICAgIHRyYWNrLmxlbmd0aCA9IDBcbiAgICB0aGlzLmhhbmRsZU1lZGlhRnJhZ21lbnQoe1xuICAgICAgdHlwZTogJ2F1ZGlvJyxcbiAgICAgIGRhdGE6IG1vb2ZNZGF0LmJ1ZmZlci5idWZmZXIsXG4gICAgICBzYW1wbGVDb3VudDogbXA0U2FtcGxlcy5sZW5ndGgsXG4gICAgICBmcmFnbWVudDogYXVkaW9TZWdtZW50XG4gICAgfSlcbiAgfVxuXG4gIGluaXRTaWxlbnRBdWRpbyAoZHRzLCBkdXJhdGlvbikge1xuICAgIGNvbnN0IHVuaXQgPSBNcDRSZW11eGVyLmdldFNpbGVudEZyYW1lKHRoaXMuX2F1ZGlvTWV0YS5jaGFubmVsQ291bnQpXG4gICAgcmV0dXJuIHtcbiAgICAgIGR0cyxcbiAgICAgIHB0czogZHRzLFxuICAgICAgY3BzOiAwLFxuICAgICAgZHVyYXRpb24sXG4gICAgICB1bml0LFxuICAgICAgc2l6ZTogdW5pdC5ieXRlTGVuZ3RoLFxuICAgICAgb3JpZ2luRHRzOiBkdHNcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0U2lsZW50RnJhbWUgKGNoYW5uZWxDb3VudCkge1xuICAgIGlmIChjaGFubmVsQ291bnQgPT09IDEpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMywgMHg4MF0pXG4gICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDIpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgyMSwgMHgwMCwgMHg0OSwgMHg5MCwgMHgwMiwgMHgxOSwgMHgwMCwgMHgyMywgMHg4MF0pXG4gICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDMpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMCwgMHg4NCwgMHgwMSwgMHgyNiwgMHg0MCwgMHgwOCwgMHg2NCwgMHgwMCwgMHg4ZV0pXG4gICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDQpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMCwgMHg4NCwgMHgwMSwgMHgyNiwgMHg0MCwgMHgwOCwgMHg2NCwgMHgwMCwgMHg4MCwgMHgyYywgMHg4MCwgMHgwOCwgMHgwMiwgMHgzOF0pXG4gICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDUpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMCwgMHg4NCwgMHgwMSwgMHgyNiwgMHg0MCwgMHgwOCwgMHg2NCwgMHgwMCwgMHg4MiwgMHgzMCwgMHgwNCwgMHg5OSwgMHgwMCwgMHgyMSwgMHg5MCwgMHgwMiwgMHgzOF0pXG4gICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDYpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMCwgMHg4NCwgMHgwMSwgMHgyNiwgMHg0MCwgMHgwOCwgMHg2NCwgMHgwMCwgMHg4MiwgMHgzMCwgMHgwNCwgMHg5OSwgMHgwMCwgMHgyMSwgMHg5MCwgMHgwMiwgMHgwMCwgMHhiMiwgMHgwMCwgMHgyMCwgMHgwOCwgMHhlMF0pXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiIsImltcG9ydCBMb2cgZnJvbSAnLi4vLi4vdXRpbHMvTG9nJ1xuaW1wb3J0IFRyYW5zQ29kZXIgZnJvbSAnLi4vVHJhbnNDb2RlcidcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbXV4ZXIgZXh0ZW5kcyBUcmFuc0NvZGVyIHtcbiAgZGlzcGF0Y2ggKHR5cGUsIC4uLnBheWxvYWQpIHtcbiAgICBjb25zdCBwcmVmaXggPSAncmVtdXhlcl8nXG4gICAgdGhpcy5fb2JzZXJ2ZXIuZW1pdChgJHtwcmVmaXh9JHt0eXBlfWAsIC4uLnBheWxvYWQpXG4gIH1cbiAgZXJyb3IgKG1lc3NhZ2UpIHtcbiAgICBjb25zdCB7IENMQVNTX05BTUUgPSAnUmVtdXhlcicgfSA9IHRoaXNcbiAgICBMb2cuZXJyb3IoYFske0NMQVNTX05BTUV9IGVycm9yXSBgLCBtZXNzYWdlKVxuICB9XG5cbiAgaW5mbyAobWVzc2FnZSkge1xuICAgIGNvbnN0IHsgQ0xBU1NfTkFNRSA9ICdSZW11eGVyJyB9ID0gdGhpc1xuICAgIExvZy5pbmZvKGBbJHtDTEFTU19OQU1FfSBpbmZvXSBgLCBtZXNzYWdlKVxuICB9XG5cbiAgbG9nIChtZXNzYWdlKSB7XG4gICAgY29uc3QgeyBDTEFTU19OQU1FID0gJ1JlbXV4ZXInIH0gPSB0aGlzXG4gICAgTG9nLmxvZyhgWyR7Q0xBU1NfTkFNRX0gbG9nXSBgLCBtZXNzYWdlKVxuICB9XG5cbiAgd2FybiAobWVzc2FnZSkge1xuICAgIGNvbnN0IHsgQ0xBU1NfTkFNRSA9ICdSZW11eGVyJyB9ID0gdGhpc1xuICAgIExvZy53YXJuKGBbJHtDTEFTU19OQU1FfSB3YXJuXSBgLCBtZXNzYWdlKVxuICB9XG59XG4iLCIvLyDnm7Tmkq3ku7vliqHojrflj5Yg55u05pKt5pWw5o2uXG5jbGFzcyBMaXZlVGFzayB7XG4gIGNvbnN0cnVjdG9yICh1cmwsIGNvbmZpZykge1xuICAgIC8vaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvemgtQ04vZG9jcy9XZWIvQVBJL0hlYWRlcnNcbiAgICBjb25zdCBfaGVhZGVycyA9IG5ldyB3aW5kb3cuSGVhZGVycygpXG5cbiAgICBjb25zdCBfY29uZmlnID0ge1xuICAgICAgaGVhZGVyczogT2JqZWN0LmFzc2lnbih7fSwgX2hlYWRlcnMpLFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGNhY2hlOiAnZGVmYXVsdCcsXG4gICAgICBtb2RlOiAnY29ycydcbiAgICB9XG4gICAgdGhpcy5fc3RvcCA9IGZhbHNlXG4gICAgLy9odHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy96aC1DTi9kb2NzL1dlYi9BUEkvUmVxdWVzdC9SZXF1ZXN0XG4gICAgdGhpcy5yZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsLCBPYmplY3QuYXNzaWduKHt9LCBfY29uZmlnLCBjb25maWcpKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIH1cblxuICBydW4gKGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAvLyDliKnnlKhmZXRjaCDmi7/liLByZXMuYm9keS5nZXRSZWFkZXIoKSDnhLblkI7pgJLlvZLnmoTosIPnlKhyZWFk5pa55rOVIOiOt+WPlnJlc3VsdC52YWx1ZSDkvKDnu5ljYWxsYmFja1xuICAgIGZ1bmN0aW9uIHJlc29sdmUgKHJlYWRlcikge1xuICAgICAgcmVhZGVyLnJlYWQoKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGlmIChzZWxmLl9zdG9wKSB7XG4gICAgICAgICAgcmVhZGVyLmNhbmNlbCgpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2socmVzdWx0LmRvbmUgPyB1bmRlZmluZWQgOiByZXN1bHQudmFsdWUpXG4gICAgICAgIHJlc29sdmUocmVhZGVyKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGlzVGltZW91dCA9IHRydWVcblxuICAgICAgZmV0Y2godGhpcy5yZXF1ZXN0KS50aGVuKChyZXMpID0+IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICBpc1RpbWVvdXQgPSBmYWxzZVxuICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgIH0pXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaXNUaW1lb3V0ICYmIHJlamVjdCgpIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIH0sIDUwMDApXG4gICAgfSlcblxuICAgIHByb21cbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IHJlcy5ib2R5LmdldFJlYWRlcigpXG4gICAgICAgIHJlc29sdmUocmVhZGVyKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChyZXMgPT4ge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBjYW5jZWwgKCkge1xuICAgIHRoaXMuX3N0b3AgPSB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGl2ZVRhc2tcbiIsImltcG9ydCBYSFJMb2FkZXIgZnJvbSAnLi9sb2FkZXJzL1hIUkxvYWRlcidcbmltcG9ydCBGZXRjaExvYWRlciBmcm9tICcuL2xvYWRlcnMvRmV0Y2hMb2FkZXInXG5jb25zdCBMb2FkQ2xzID0gKGZ1bmN0aW9uICh3aW5kb3cpIHtcbiAgaWYgKHdpbmRvdy5mZXRjaCkge1xuICAgIHJldHVybiBGZXRjaExvYWRlclxuICB9XG4gIHJldHVybiBYSFJMb2FkZXJcbn0pKHdpbmRvdylcbi8vIOS/neivgeWPquaciTLkuKrku7vliqHlpITkuo7or7fmsYLnirbmgIHvvIwg5paw5bu65Lu75Yqh5b6A6Zif5YiX6YeM5re75Yqg77yM5Lu75Yqh5a6M5oiQ5LuO6Zif5YiX5Yig6ZmkIOavj+asoeWPmOWMlumDveS8muabtOaWsOmYn+WIl+i/m+ihjOivt+axguOAglxuY2xhc3MgVm9kVGFzayB7XG4gIGNvbnN0cnVjdG9yICh1cmwsIHJhbmdlLCBoZWFkZXJzKSB7XG4gICAgY29uc29sZS5sb2cocmFuZ2UpXG4gICAgdGhpcy51cmwgPSB1cmxcbiAgICB0aGlzLnJhbmdlID0gcmFuZ2VcbiAgICB0aGlzLmlkID0gcmFuZ2Uuam9pbignLScpXG4gICAgdGhpcy5vbiA9IGZhbHNlXG4gICAgdGhpcy5sb2FkZXIgPSBuZXcgTG9hZENscyh1cmwsIHJhbmdlLCBoZWFkZXJzKVxuICAgIHRoaXMuaXNDYW5jZWxlZCA9IGZhbHNlXG4gICAgVm9kVGFzay5xdWV1ZS5wdXNoKHRoaXMpXG4gICAgVm9kVGFzay51cGRhdGUoKVxuICB9XG5cbiAgY2FuY2VsICgpIHtcbiAgICB0aGlzLmlzQ2FuY2VsZWQgPSB0cnVlXG4gICAgdGhpcy5sb2FkZXIuY2FuY2VsKClcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmUgKGxvYWRlcikge1xuICAgIFZvZFRhc2sucXVldWUuZmlsdGVyKChpdGVtLCBpZHgpID0+IHtcbiAgICAgIGlmIChpdGVtLnVybCA9PT0gbG9hZGVyLnVybCAmJiBpdGVtLmlkID09PSBsb2FkZXIuaWQpIHtcbiAgICAgICAgVm9kVGFzay5xdWV1ZS5zcGxpY2UoaWR4LCAxKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSlcbiAgICBWb2RUYXNrLnVwZGF0ZSgpXG4gIH1cblxuICBzdGF0aWMgdXBkYXRlICgpIHtcbiAgICBsZXQgUXVldWUgPSBWb2RUYXNrLnF1ZXVlXG4gICAgbGV0IHNlbmRlZCA9IFF1ZXVlLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5vbilcbiAgICBsZXQgd2FpdCA9IFF1ZXVlLmZpbHRlcihpdGVtID0+ICFpdGVtLm9uKVxuICAgIGxldCBtYXggPSBWb2RUYXNrLmxpbWl0IC0gc2VuZGVkLmxlbmd0aFxuICAgIHdhaXQuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICBpZiAoaWR4IDwgbWF4KSB7XG4gICAgICAgIGl0ZW0ucnVuKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcnVuICgpIHtcbiAgICBpZiAodGhpcy5sb2FkZXIucmVhZHlTdGF0ZSA9PT0gMSkge1xuICAgICAgdGhpcy5vbiA9IHRydWVcbiAgICAgIHRoaXMubG9hZGVyLnJ1bigpXG4gICAgfSBlbHNlIHtcbiAgICAgIFZvZFRhc2sucmVtb3ZlKClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY2xlYXIgKCkge1xuICAgIFZvZFRhc2sucXVldWUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmICghaXRlbS5sb2FkZXIuY29tcGxldGUpIHtcbiAgICAgICAgaXRlbS5jYW5jZWwoKVxuICAgICAgfVxuICAgIH0pXG4gICAgVm9kVGFzay5xdWV1ZS5sZW5ndGggPSAwXG4gIH1cblxuICBnZXQgcHJvbWlzZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZGVyLnByb21pc2VcbiAgfVxuICBnZXQgdGltZVN0YW1wICgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkZXIudGltZVN0YW1wXG4gIH1cbn1cblxuVm9kVGFzay5xdWV1ZSA9IFtdXG5Wb2RUYXNrLmxpbWl0ID0gMlxud2luZG93LlZvZFRhc2sgPSBWb2RUYXNrXG5cbmV4cG9ydCBkZWZhdWx0IFZvZFRhc2tcbiIsImltcG9ydCBWb2RUYXNrIGZyb20gJy4uL1ZvZFRhc2snXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZXRjaExvYWRlciB7XG4gIGNvbnN0cnVjdG9yICh1cmwsIHJhbmdlLCBjb25maWcgPSB7fSkge1xuICAgIHRoaXMudXJsID0gdXJsXG4gICAgdGhpcy5vbiA9IGZhbHNlXG4gICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlXG4gICAgdGhpcy5pc1N0b3BwZWQgPSBmYWxzZVxuICAgIHRoaXMudGltZVN0YW1wID0gRGF0ZS5ub3coKVxuICAgIGNvbnN0IF9jb25maWcgPSB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFJhbmdlOiBgYnl0ZXM9JHtyYW5nZVswXX0tJHtyYW5nZVsxXX1gXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGNhY2hlOiAnZGVmYXVsdCcsXG4gICAgICBtb2RlOiAnY29ycydcbiAgICB9XG5cbiAgICB0aGlzLnJlcXVlc3QgPSAoKSA9PiB7XG4gICAgICB0aGlzLm9uID0gdHJ1ZVxuICAgICAgcmV0dXJuIHdpbmRvdy5mZXRjaCh1cmwsIE9iamVjdC5hc3NpZ24oe30sIF9jb25maWcsIGNvbmZpZykpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPiAyOTkgfHwgcmVzLnN0YXR1cyA8IDIwMCB8fCAhcmVzLm9rKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZSA9IHRydWVcbiAgICAgICAgICBWb2RUYXNrLnJlbW92ZSh0aGlzKVxuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoYHVybCAke3Jlcy5zdGF0dXN9ICR7cmVzLnN0YXR1c1RleHR9YCkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpXG4gICAgICB9KS50aGVuKHJlcyA9PiByZXMuYXJyYXlCdWZmZXIoKSkudGhlbihidWZmZXIgPT4ge1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gdHJ1ZVxuICAgICAgICB0aGlzLmJ5dGVMZW5ndGggPSBidWZmZXIuYnl0ZUxlbmd0aFxuICAgICAgICBWb2RUYXNrLnJlbW92ZSh0aGlzKVxuICAgICAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHJldHVybiB7fVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGJ1ZmZlcixcbiAgICAgICAgICB0aW1lU3RhbXA6IHRoaXMudGltZVN0YW1wXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcnVuICgpIHtcbiAgICB0aGlzLl9wcm9taXNlID0gdGhpcy5yZXF1ZXN0KClcbiAgfVxuXG4gIGdldCByZWFkeVN0YXRlICgpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgY2FuY2VsICgpIHtcbiAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWVcbiAgfVxuXG4gIGdldCBwcm9taXNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5vbiA/IHRoaXMuX3Byb21pc2UgOiB0aGlzLnJlcXVlc3QoKVxuICB9XG59XG4iLCJpbXBvcnQgVm9kVGFzayBmcm9tICcuLi9Wb2RUYXNrJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhIUkxvYWRlciB7XG4gICAgY29uc3RydWN0b3IgKHVybCwgcmFuZ2UpIHtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbignZ2V0JywgdXJsKTtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdSYW5nZScsIGBieXRlcz0ke3JhbmdlWzBdfS0ke3JhbmdlWzFdfWApO1xuICAgICAgICB4aHIub25hYm9ydCA9ICgpID0+IHtcbiAgICAgICAgICAgIFZvZFRhc2sucmVtb3ZlKHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwIHx8IHhoci5zdGF0dXMgPT09IDIwNikge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFZvZFRhc2sucmVtb3ZlKHRoaXMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHhoci5vbmVycm9yID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgVm9kVGFzay5yZW1vdmUodGhpcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl94aHIgPSB4aHI7XG4gICAgfVxuXG4gICAgZ2V0IHByb21pc2UgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcbiAgICB9XG5cbiAgICBnZXQgcmVhZHlTdGF0ZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl94aHIucmVhZHlTdGF0ZTtcbiAgICB9XG5cbiAgICBydW4gKCkge1xuICAgICAgICB0aGlzLl94aHIuc2VuZCgpO1xuICAgIH1cblxuICAgIGNhbmNlbCAoKSB7XG4gICAgICAgIHRoaXMuX3hoci5hYm9ydCgpO1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFWaWV3NFJlYWQge1xuICAgIGNvbnN0cnVjdG9yIChidWZmZXIsIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5fZHYgPSBuZXcgRGF0YVZpZXcoYnVmZmVyKTtcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuaW5pdFByb3h5KCk7XG4gICAgfVxuXG4gICAgaW5pdFByb3h5ICgpIHtcbiAgICAgICAgY29uc3Qgc2l6ZUFyciA9IFs4LCAxNiwgMzJdO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgeyBfc3RvcmUgfSA9IHRoaXMuX2NvbnRleHQ7XG4gICAgICAgIHNpemVBcnIuZm9yRWFjaChzaXplID0+IHtcbiAgICAgICAgICAgIHRoaXNbYGdldFVpbnQke3NpemV9YF0gPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvZmZzZXQpIHsgb2Zmc2V0ID0gc2VsZi5fY29udGV4dC5yZWFkT2Zmc2V0OyB9XG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCA9PT0gc2VsZi5fY29udGV4dC5yZWFkT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2NvbnRleHQucmVhZE9mZnNldCArPSBzaXplIC8gODtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g6L+Z6YeM6K+75Y+W5a2X6IqC5bqPIOS4uuS7gOS5iOaYr+WPjeeahCAg5aaC5p6caXNMZeaYr+S9juS9jeWtl+iKgiDlsLHmmK9mYWxzZSDmjInnhafnmoTmmK/pq5jkvY3lrZfoioJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fZHZbYGdldFVpbnQke3NpemV9YF0ob2Zmc2V0LCAhX3N0b3JlLmlzTGUpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICB9KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICog5pi+5byP5aOw5piO5LiA5Liq5q+U5YW25a6D5L2N5pWw5pu05bi455So6K+75Y+WMjTkvY3mlbTmlbDmlrnms5VcbiAgICAgICAgICogQHBhcmFtIG9mZnNldFxuICAgICAgICAgKiBAcGFyYW0gaXNIaWdoXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmdldFVpbnQyNCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2V0VWludCgyNCwgb2Zmc2V0LCBmYWxzZSk7IC8vIOS8muivu+WPllVpbnQzMizlgZogYW5kIOaTjeS9nOS5i+WQjuWbnumAgOS4gOS9jeOAglxuICAgICAgICAgICAgc2VsZi5fY29udGV4dC5yZWFkT2Zmc2V0IC09IDE7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZ2V0VWludCA9IGZ1bmN0aW9uIChzaXplLCBvZmZzZXQsIGlzSGlnaCA9IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChzaXplID4gMzIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnbm90IHN1cHBvcnRlZCByZWFkIHNpemUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlYWRTaXplID0gMzI7XG4gICAgICAgICAgICBpZiAoIXRoaXNbYGdldFVpbnQke3NpemV9YF0pIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gc2l6ZUFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2l6ZSA8IHNpemVBcnJbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRTaXplID0gc2l6ZUFycltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBudW1Ub0FuZCA9IGlzSGlnaCA/IERhdGFWaWV3NFJlYWQuZ2V0QW5kTnVtKDAsIHNpemUgLSAxLCByZWFkU2l6ZSkgOiBEYXRhVmlldzRSZWFkLmdldEFuZE51bShyZWFkU2l6ZSAtIHNpemUsIHJlYWRTaXplIC0gMSwgcmVhZFNpemUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmW2BnZXRVaW50JHtyZWFkU2l6ZX1gXShvZmZzZXQsICFfc3RvcmUuaXNMZSkgJiBudW1Ub0FuZDtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZltgZ2V0VWludCR7cmVhZFNpemV9YF0ob2Zmc2V0LCAhX3N0b3JlLmlzTGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRBbmROdW0gKGJlZ2luLCBlbmQsIHNpemUgPSA4KSB7XG4gICAgICAgIGxldCByZXN1bHQgPSAwO1xuICAgICAgICBsZXQgaW5kZXggPSAtLXNpemU7XG4gICAgICAgIHdoaWxlIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IGVuZCB8fCBpbmRleCA8IGJlZ2luKSB7XG4gICAgICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IE1hdGgucG93KDIsIHNpemUgLSBpbmRleCk7XG4gICAgICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufSIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi9Mb2cnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwR29sb21iIHtcbiAgICBjb25zdHJ1Y3RvciAoZGF0YSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICAvLyB0aGUgbnVtYmVyIG9mIGJ5dGVzIGxlZnQgdG8gZXhhbWluZSBpbiB0aGlzLmRhdGFcbiAgICAgICAgdGhpcy5ieXRlc0F2YWlsYWJsZSA9IGRhdGEuYnl0ZUxlbmd0aDtcbiAgICAgICAgLy8gdGhlIGN1cnJlbnQgd29yZCBiZWluZyBleGFtaW5lZFxuICAgICAgICB0aGlzLndvcmQgPSAwOyAvLyA6dWludFxuICAgICAgICAvLyB0aGUgbnVtYmVyIG9mIGJpdHMgbGVmdCB0byBleGFtaW5lIGluIHRoZSBjdXJyZW50IHdvcmRcbiAgICAgICAgdGhpcy5iaXRzQXZhaWxhYmxlID0gMDsgLy8gOnVpbnRcbiAgICB9XG4gICAgLy8gKCk6dm9pZFxuICAgIGxvYWRXb3JkICgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmRhdGEsXG4gICAgICAgICAgICBieXRlc0F2YWlsYWJsZSA9IHRoaXMuYnl0ZXNBdmFpbGFibGUsXG4gICAgICAgICAgICBwb3NpdGlvbiA9IGRhdGEuYnl0ZUxlbmd0aCAtIGJ5dGVzQXZhaWxhYmxlLFxuICAgICAgICAgICAgd29ya2luZ0J5dGVzID0gbmV3IFVpbnQ4QXJyYXkoNCksXG4gICAgICAgICAgICBhdmFpbGFibGVCeXRlcyA9IE1hdGgubWluKDQsIGJ5dGVzQXZhaWxhYmxlKTtcbiAgICAgICAgaWYgKGF2YWlsYWJsZUJ5dGVzID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGJ5dGVzIGF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgICAgIHdvcmtpbmdCeXRlcy5zZXQoZGF0YS5zdWJhcnJheShwb3NpdGlvbiwgcG9zaXRpb24gKyBhdmFpbGFibGVCeXRlcykpO1xuICAgICAgICB0aGlzLndvcmQgPSBuZXcgRGF0YVZpZXcod29ya2luZ0J5dGVzLmJ1ZmZlcikuZ2V0VWludDMyKDApO1xuICAgICAgICAvLyB0cmFjayB0aGUgYW1vdW50IG9mIHRoaXMuZGF0YSB0aGF0IGhhcyBiZWVuIHByb2Nlc3NlZFxuICAgICAgICB0aGlzLmJpdHNBdmFpbGFibGUgPSBhdmFpbGFibGVCeXRlcyAqIDg7XG4gICAgICAgIHRoaXMuYnl0ZXNBdmFpbGFibGUgLT0gYXZhaWxhYmxlQnl0ZXM7XG4gICAgfVxuXG4gICAgLy8gKGNvdW50OmludCk6dm9pZFxuICAgIHNraXBCaXRzIChjb3VudCkge1xuICAgICAgICB2YXIgc2tpcEJ5dGVzOyAvLyA6aW50XG4gICAgICAgIGlmICh0aGlzLmJpdHNBdmFpbGFibGUgPiBjb3VudCkge1xuICAgICAgICAgICAgdGhpcy53b3JkIDw8PSBjb3VudDtcbiAgICAgICAgICAgIHRoaXMuYml0c0F2YWlsYWJsZSAtPSBjb3VudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvdW50IC09IHRoaXMuYml0c0F2YWlsYWJsZTtcbiAgICAgICAgICAgIHNraXBCeXRlcyA9IGNvdW50ID4+IDM7XG4gICAgICAgICAgICBjb3VudCAtPSAoc2tpcEJ5dGVzID4+IDMpO1xuICAgICAgICAgICAgdGhpcy5ieXRlc0F2YWlsYWJsZSAtPSBza2lwQnl0ZXM7XG4gICAgICAgICAgICB0aGlzLmxvYWRXb3JkKCk7XG4gICAgICAgICAgICB0aGlzLndvcmQgPDw9IGNvdW50O1xuICAgICAgICAgICAgdGhpcy5iaXRzQXZhaWxhYmxlIC09IGNvdW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBza2lwQnl0ZXM7XG4gICAgfVxuXG4gICAgLy8gKHNpemU6aW50KTp1aW50XG4gICAgcmVhZEJpdHMgKHNpemUpIHtcbiAgICAgICAgbGV0IGJpdHMgPSBNYXRoLm1pbih0aGlzLmJpdHNBdmFpbGFibGUsIHNpemUpLCAvLyA6dWludFxuICAgICAgICAgICAgdmFsdSA9IHRoaXMud29yZCA+Pj4gKDMyIC0gYml0cyk7IC8vIDp1aW50XG4gICAgICAgIGlmIChzaXplID4gMzIpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcignQ2Fubm90IHJlYWQgbW9yZSB0aGFuIDMyIGJpdHMgYXQgYSB0aW1lJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iaXRzQXZhaWxhYmxlIC09IGJpdHM7XG4gICAgICAgIGlmICh0aGlzLmJpdHNBdmFpbGFibGUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLndvcmQgPDw9IGJpdHM7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5ieXRlc0F2YWlsYWJsZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFdvcmQoKTtcbiAgICAgICAgfVxuICAgICAgICBiaXRzID0gc2l6ZSAtIGJpdHM7XG4gICAgICAgIGlmIChiaXRzID4gMCAmJiB0aGlzLmJpdHNBdmFpbGFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1IDw8IGJpdHMgfCB0aGlzLnJlYWRCaXRzKGJpdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAoKTp1aW50XG4gICAgc2tpcExaICgpIHtcbiAgICAgICAgdmFyIGxlYWRpbmdaZXJvQ291bnQ7IC8vIDp1aW50XG4gICAgICAgIGZvciAobGVhZGluZ1plcm9Db3VudCA9IDA7IGxlYWRpbmdaZXJvQ291bnQgPCB0aGlzLmJpdHNBdmFpbGFibGU7ICsrbGVhZGluZ1plcm9Db3VudCkge1xuICAgICAgICAgICAgaWYgKDAgIT09ICh0aGlzLndvcmQgJiAoMHg4MDAwMDAwMCA+Pj4gbGVhZGluZ1plcm9Db3VudCkpKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIGZpcnN0IGJpdCBvZiB3b3JraW5nIHdvcmQgaXMgMVxuICAgICAgICAgICAgICAgIHRoaXMud29yZCA8PD0gbGVhZGluZ1plcm9Db3VudDtcbiAgICAgICAgICAgICAgICB0aGlzLmJpdHNBdmFpbGFibGUgLT0gbGVhZGluZ1plcm9Db3VudDtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVhZGluZ1plcm9Db3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBleGhhdXN0ZWQgd29yZCBhbmQgc3RpbGwgaGF2ZSBub3QgZm91bmQgYSAxXG4gICAgICAgIHRoaXMubG9hZFdvcmQoKTtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdaZXJvQ291bnQgKyB0aGlzLnNraXBMWigpO1xuICAgIH1cblxuICAgIC8vICgpOnZvaWRcbiAgICBza2lwVUVHICgpIHtcbiAgICAgICAgdGhpcy5za2lwQml0cygxICsgdGhpcy5za2lwTFooKSk7XG4gICAgfVxuXG4gICAgLy8gKCk6dm9pZFxuICAgIHNraXBFRyAoKSB7XG4gICAgICAgIHRoaXMuc2tpcEJpdHMoMSArIHRoaXMuc2tpcExaKCkpO1xuICAgIH1cblxuICAgIC8vICgpOnVpbnRcbiAgICByZWFkVUVHICgpIHtcbiAgICAgICAgdmFyIGNseiA9IHRoaXMuc2tpcExaKCk7IC8vIDp1aW50XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRCaXRzKGNseiArIDEpIC0gMTtcbiAgICB9XG5cbiAgICAvLyAoKTppbnRcbiAgICByZWFkRUcgKCkge1xuICAgICAgICB2YXIgdmFsdSA9IHRoaXMucmVhZFVFRygpOyAvLyA6aW50XG4gICAgICAgIGlmICgweDAxICYgdmFsdSkge1xuICAgICAgICAgICAgLy8gdGhlIG51bWJlciBpcyBvZGQgaWYgdGhlIGxvdyBvcmRlciBiaXQgaXMgc2V0XG4gICAgICAgICAgICByZXR1cm4gKDEgKyB2YWx1KSA+Pj4gMTsgLy8gYWRkIDEgdG8gbWFrZSBpdCBldmVuLCBhbmQgZGl2aWRlIGJ5IDJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtMSAqICh2YWx1ID4+PiAxKTsgLy8gZGl2aWRlIGJ5IHR3byB0aGVuIG1ha2UgaXQgbmVnYXRpdmVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNvbWUgY29udmVuaWVuY2UgZnVuY3Rpb25zXG4gICAgLy8gOkJvb2xlYW5cbiAgICByZWFkQm9vbGVhbiAoKSB7XG4gICAgICAgIHJldHVybiAxID09PSB0aGlzLnJlYWRCaXRzKDEpO1xuICAgIH1cblxuICAgIC8vICgpOmludFxuICAgIHJlYWRVQnl0ZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRCaXRzKDgpO1xuICAgIH1cblxuICAgIC8vICgpOmludFxuICAgIHJlYWRVU2hvcnQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkQml0cygxNik7XG4gICAgfVxuICAgIC8vICgpOmludFxuICAgIHJlYWRVSW50ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZEJpdHMoMzIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkdmFuY2UgdGhlIEV4cEdvbG9tYiBkZWNvZGVyIHBhc3QgYSBzY2FsaW5nIGxpc3QuIFRoZSBzY2FsaW5nXG4gICAgICogbGlzdCBpcyBvcHRpb25hbGx5IHRyYW5zbWl0dGVkIGFzIHBhcnQgb2YgYSBzZXF1ZW5jZSBwYXJhbWV0ZXJcbiAgICAgKiBzZXQgYW5kIGlzIG5vdCByZWxldmFudCB0byB0cmFuc211eGluZy5cbiAgICAgKiBAcGFyYW0gY291bnQge251bWJlcn0gdGhlIG51bWJlciBvZiBlbnRyaWVzIGluIHRoaXMgc2NhbGluZyBsaXN0XG4gICAgICogQHNlZSBSZWNvbW1lbmRhdGlvbiBJVFUtVCBILjI2NCwgU2VjdGlvbiA3LjMuMi4xLjEuMVxuICAgICAqL1xuICAgIHNraXBTY2FsaW5nTGlzdCAoY291bnQpIHtcbiAgICAgICAgdmFyIGxhc3RTY2FsZSA9IDgsXG4gICAgICAgICAgICBuZXh0U2NhbGUgPSA4LFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIGRlbHRhU2NhbGU7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XG4gICAgICAgICAgICBpZiAobmV4dFNjYWxlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgZGVsdGFTY2FsZSA9IHRoaXMucmVhZEVHKCk7XG4gICAgICAgICAgICAgICAgbmV4dFNjYWxlID0gKGxhc3RTY2FsZSArIGRlbHRhU2NhbGUgKyAyNTYpICUgMjU2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFzdFNjYWxlID0gKG5leHRTY2FsZSA9PT0gMClcbiAgICAgICAgICAgICAgICA/IGxhc3RTY2FsZVxuICAgICAgICAgICAgICAgIDogbmV4dFNjYWxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVhZCBhIHNlcXVlbmNlIHBhcmFtZXRlciBzZXQgYW5kIHJldHVybiBzb21lIGludGVyZXN0aW5nIHZpZGVvXG4gICAgICogcHJvcGVydGllcy4gQSBzZXF1ZW5jZSBwYXJhbWV0ZXIgc2V0IGlzIHRoZSBIMjY0IG1ldGFkYXRhIHRoYXRcbiAgICAgKiBkZXNjcmliZXMgdGhlIHByb3BlcnRpZXMgb2YgdXBjb21pbmcgdmlkZW8gZnJhbWVzLlxuICAgICAqIEBwYXJhbSBkYXRhIHtVaW50OEFycmF5fSB0aGUgYnl0ZXMgb2YgYSBzZXF1ZW5jZSBwYXJhbWV0ZXIgc2V0XG4gICAgICogQHJldHVybiB7b2JqZWN0fSBhbiBvYmplY3Qgd2l0aCBjb25maWd1cmF0aW9uIHBhcnNlZCBmcm9tIHRoZVxuICAgICAqIHNlcXVlbmNlIHBhcmFtZXRlciBzZXQsIGluY2x1ZGluZyB0aGUgZGltZW5zaW9ucyBvZiB0aGVcbiAgICAgKiBhc3NvY2lhdGVkIHZpZGVvIGZyYW1lcy5cbiAgICAgKi9cbiAgICByZWFkU1BTICgpIHtcbiAgICAgICAgdmFyIGZyYW1lQ3JvcExlZnRPZmZzZXQgPSAwLFxuICAgICAgICAgICAgZnJhbWVDcm9wUmlnaHRPZmZzZXQgPSAwLFxuICAgICAgICAgICAgZnJhbWVDcm9wVG9wT2Zmc2V0ID0gMCxcbiAgICAgICAgICAgIGZyYW1lQ3JvcEJvdHRvbU9mZnNldCA9IDAsXG4gICAgICAgICAgICBwcm9maWxlSWRjLFxuICAgICAgICAgICAgLy8gcHJvZmlsZUNvbXBhdCxcbiAgICAgICAgICAgIGxldmVsSWRjLFxuICAgICAgICAgICAgY29kZWNXaWR0aCxcbiAgICAgICAgICAgIGNvZGVjSGVpZ2h0LFxuICAgICAgICAgICAgcHJlc2VudFdpZHRoLFxuICAgICAgICAgICAgbnVtUmVmRnJhbWVzSW5QaWNPcmRlckNudEN5Y2xlLFxuICAgICAgICAgICAgcGljV2lkdGhJbk1ic01pbnVzMSxcbiAgICAgICAgICAgIHBpY0hlaWdodEluTWFwVW5pdHNNaW51czEsXG4gICAgICAgICAgICBmcmFtZU1ic09ubHlGbGFnLFxuICAgICAgICAgICAgc2NhbGluZ0xpc3RDb3VudCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICByZWFkVUJ5dGUgPSB0aGlzLnJlYWRVQnl0ZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgcmVhZEJpdHMgPSB0aGlzLnJlYWRCaXRzLmJpbmQodGhpcyksXG4gICAgICAgICAgICByZWFkVUVHID0gdGhpcy5yZWFkVUVHLmJpbmQodGhpcyksXG4gICAgICAgICAgICByZWFkQm9vbGVhbiA9IHRoaXMucmVhZEJvb2xlYW4uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHNraXBCaXRzID0gdGhpcy5za2lwQml0cy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgc2tpcEVHID0gdGhpcy5za2lwRUcuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHNraXBVRUcgPSB0aGlzLnNraXBVRUcuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHNraXBTY2FsaW5nTGlzdCA9IHRoaXMuc2tpcFNjYWxpbmdMaXN0LmJpbmQodGhpcyk7XG5cbiAgICAgICAgcmVhZFVCeXRlKCk7XG4gICAgICAgIHByb2ZpbGVJZGMgPSByZWFkVUJ5dGUoKTsgLy8gcHJvZmlsZV9pZGNcbiAgICAgICAgcmVhZEJpdHMoNSk7IC8vIHByb2ZpbGVDb21wYXQgY29uc3RyYWludF9zZXRbMC00XV9mbGFnLCB1KDUpXG4gICAgICAgIHNraXBCaXRzKDMpOyAvLyByZXNlcnZlZF96ZXJvXzNiaXRzIHUoMyksXG4gICAgICAgIGxldmVsSWRjID0gcmVhZFVCeXRlKCk7IC8vIGxldmVsX2lkYyB1KDgpXG4gICAgICAgIHNraXBVRUcoKTsgLy8gc2VxX3BhcmFtZXRlcl9zZXRfaWRcbiAgICAgICAgbGV0IGNocm9tYUZvcm1hdElkYyA9IDE7XG4gICAgICAgIGxldCBjaHJvbWFGb3JtYXQgPSA0MjA7XG4gICAgICAgIGxldCBjaHJvbWFGb3JtYXRzID0gWzAsIDQyMCwgNDIyLCA0NDRdO1xuICAgICAgICBsZXQgYml0RGVwdGhMdW1hID0gODtcbiAgICAgICAgY29uc3QgcHJvZmlsZUlkY3MgPSBbMTAwLCAxMTAsIDEyMiwgMjQ0LCA0NCwgODMsIDg2LCAxMTgsIDEyOF07XG4gICAgICAgIC8vIHNvbWUgcHJvZmlsZXMgaGF2ZSBtb3JlIG9wdGlvbmFsIGRhdGEgd2UgZG9uJ3QgbmVlZFxuICAgICAgICBpZiAocHJvZmlsZUlkY3MuaW5jbHVkZXMocHJvZmlsZUlkYykpIHtcbiAgICAgICAgICAgIGNocm9tYUZvcm1hdElkYyA9IHJlYWRVRUcoKTtcbiAgICAgICAgICAgIGlmIChjaHJvbWFGb3JtYXRJZGMgPT09IDMpIHtcbiAgICAgICAgICAgICAgICBza2lwQml0cygxKTsgLy8gc2VwYXJhdGVfY29sb3VyX3BsYW5lX2ZsYWdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaHJvbWFGb3JtYXRJZGMgPD0gMykge1xuICAgICAgICAgICAgICAgIGNocm9tYUZvcm1hdCA9IGNocm9tYUZvcm1hdHNbY2hyb21hRm9ybWF0SWRjXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJpdERlcHRoTHVtYSA9IHJlYWRVRUcoKSArIDg7IC8vIGJpdF9kZXB0aF9sdW1hX21pbnVzOFxuICAgICAgICAgICAgc2tpcFVFRygpOyAvLyBiaXRfZGVwdGhfY2hyb21hX21pbnVzOFxuICAgICAgICAgICAgc2tpcEJpdHMoMSk7IC8vIHFwcHJpbWVfeV96ZXJvX3RyYW5zZm9ybV9ieXBhc3NfZmxhZ1xuICAgICAgICAgICAgaWYgKHJlYWRCb29sZWFuKCkpIHsgLy8gc2VxX3NjYWxpbmdfbWF0cml4X3ByZXNlbnRfZmxhZ1xuICAgICAgICAgICAgICAgIHNjYWxpbmdMaXN0Q291bnQgPSAoY2hyb21hRm9ybWF0SWRjICE9PSAzKVxuICAgICAgICAgICAgICAgICAgICA/IDhcbiAgICAgICAgICAgICAgICAgICAgOiAxMjtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2NhbGluZ0xpc3RDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWFkQm9vbGVhbigpKSB7IC8vIHNlcV9zY2FsaW5nX2xpc3RfcHJlc2VudF9mbGFnWyBpIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPCA2ID8gc2tpcFNjYWxpbmdMaXN0KDE2KSA6IHNraXBTY2FsaW5nTGlzdCg2NCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2tpcFVFRygpOyAvLyBsb2cyX21heF9mcmFtZV9udW1fbWludXM0XG4gICAgICAgIHZhciBwaWNPcmRlckNudFR5cGUgPSByZWFkVUVHKCk7XG4gICAgICAgIGlmIChwaWNPcmRlckNudFR5cGUgPT09IDApIHtcbiAgICAgICAgICAgIHJlYWRVRUcoKTsgLy8gbG9nMl9tYXhfcGljX29yZGVyX2NudF9sc2JfbWludXM0XG4gICAgICAgIH0gZWxzZSBpZiAocGljT3JkZXJDbnRUeXBlID09PSAxKSB7XG4gICAgICAgICAgICBza2lwQml0cygxKTsgLy8gZGVsdGFfcGljX29yZGVyX2Fsd2F5c196ZXJvX2ZsYWdcbiAgICAgICAgICAgIHNraXBFRygpOyAvLyBvZmZzZXRfZm9yX25vbl9yZWZfcGljXG4gICAgICAgICAgICBza2lwRUcoKTsgLy8gb2Zmc2V0X2Zvcl90b3BfdG9fYm90dG9tX2ZpZWxkXG4gICAgICAgICAgICBudW1SZWZGcmFtZXNJblBpY09yZGVyQ250Q3ljbGUgPSByZWFkVUVHKCk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbnVtUmVmRnJhbWVzSW5QaWNPcmRlckNudEN5Y2xlOyBpKyspIHtcbiAgICAgICAgICAgICAgICBza2lwRUcoKTsgLy8gb2Zmc2V0X2Zvcl9yZWZfZnJhbWVbIGkgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCByZWZGcmFtZXMgPSByZWFkVUVHKCk7IC8vIG1heF9udW1fcmVmX2ZyYW1lc1xuICAgICAgICBza2lwQml0cygxKTsgLy8gZ2Fwc19pbl9mcmFtZV9udW1fdmFsdWVfYWxsb3dlZF9mbGFnXG4gICAgICAgIHBpY1dpZHRoSW5NYnNNaW51czEgPSByZWFkVUVHKCk7XG4gICAgICAgIHBpY0hlaWdodEluTWFwVW5pdHNNaW51czEgPSByZWFkVUVHKCk7XG4gICAgICAgIGZyYW1lTWJzT25seUZsYWcgPSByZWFkQml0cygxKTtcbiAgICAgICAgaWYgKGZyYW1lTWJzT25seUZsYWcgPT09IDApIHtcbiAgICAgICAgICAgIHNraXBCaXRzKDEpOyAvLyBtYl9hZGFwdGl2ZV9mcmFtZV9maWVsZF9mbGFnXG4gICAgICAgIH1cbiAgICAgICAgc2tpcEJpdHMoMSk7IC8vIGRpcmVjdF84eDhfaW5mZXJlbmNlX2ZsYWdcbiAgICAgICAgaWYgKHJlYWRCb29sZWFuKCkpIHsgLy8gZnJhbWVfY3JvcHBpbmdfZmxhZ1xuICAgICAgICAgICAgZnJhbWVDcm9wTGVmdE9mZnNldCA9IHJlYWRVRUcoKTtcbiAgICAgICAgICAgIGZyYW1lQ3JvcFJpZ2h0T2Zmc2V0ID0gcmVhZFVFRygpO1xuICAgICAgICAgICAgZnJhbWVDcm9wVG9wT2Zmc2V0ID0gcmVhZFVFRygpO1xuICAgICAgICAgICAgZnJhbWVDcm9wQm90dG9tT2Zmc2V0ID0gcmVhZFVFRygpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmcmFtZVJhdGUgPSB7XG4gICAgICAgICAgICBmcHM6IDAsXG4gICAgICAgICAgICBmcHNGaXhlZDogdHJ1ZSxcbiAgICAgICAgICAgIGZwc051bTogMCxcbiAgICAgICAgICAgIGZwc0RlbjogMCxcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHBpeGVsUmF0aW8gPSBbMSwgMV07XG4gICAgICAgIGlmIChyZWFkQm9vbGVhbigpKSB7XG4gICAgICAgICAgICAvLyB2dWlfcGFyYW1ldGVyc19wcmVzZW50X2ZsYWdcbiAgICAgICAgICAgIGlmIChyZWFkQm9vbGVhbigpKSB7XG4gICAgICAgICAgICAgICAgLy8gYXNwZWN0X3JhdGlvX2luZm9fcHJlc2VudF9mbGFnXG4gICAgICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW9JZGMgPSByZWFkVUJ5dGUoKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFzcGVjdFJhdGlvSWRjKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbMSwgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IFsxMiwgMTFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbMTAsIDExXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbFJhdGlvID0gWzE2LCAxMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IFs0MCwgMzNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbMjQsIDExXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbFJhdGlvID0gWzIwLCAxMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IFszMiwgMTFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbODAsIDMzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IFsxOCwgMTFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbFJhdGlvID0gWzE1LCAxMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbNjQsIDMzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IFsxNjAsIDk5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IFs0LCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IFsyLCAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI1NTpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkVUJ5dGUoKSA8PCA4IHwgcmVhZFVCeXRlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZFVCeXRlKCkgPDwgOCB8IHJlYWRVQnl0ZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlYWRCb29sZWFuKCkpIHsgLy8gb3ZlcnNjYW5faW5mb19wcmVzZW50X2ZsYWdcbiAgICAgICAgICAgICAgICByZWFkQm9vbGVhbigpOyAvLyBvdmVyc2Nhbl9hcHByb3ByaWF0ZV9mbGFnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVhZEJvb2xlYW4oKSkgeyAvLyB2aWRlb19zaWduYWxfdHlwZV9wcmVzZW50X2ZsYWdcbiAgICAgICAgICAgICAgICByZWFkQml0cyg0KTsgLy8gdmlkZW9fZm9ybWF0ICYgdmlkZW9fZnVsbF9yYW5nZV9mbGFnXG4gICAgICAgICAgICAgICAgaWYgKHJlYWRCb29sZWFuKCkpIHsgLy8gY29sb3VyX2Rlc2NyaXB0aW9uX3ByZXNlbnRfZmxhZ1xuICAgICAgICAgICAgICAgICAgICByZWFkQml0cygyNCk7IC8vIGNvbG91cl9wcmltYXJpZXMgJiB0cmFuc2Zlcl9jaGFyYWN0ZXJpc3RpY3MgJiBtYXRyaXhfY29lZmZpY2llbnRzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlYWRCb29sZWFuKCkpIHsgLy8gY2hyb21hX2xvY19pbmZvX3ByZXNlbnRfZmxhZ1xuICAgICAgICAgICAgICAgIHJlYWRVRUcoKTsgLy8gY2hyb21hX3NhbXBsZV9sb2NfdHlwZV90b3BfZmllbGRcbiAgICAgICAgICAgICAgICByZWFkVUVHKCk7IC8vIGNocm9tYV9zYW1wbGVfbG9jX3R5cGVfYm90dG9tX2ZpZWxkXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZWFkQm9vbGVhbigpKSB7IC8vIHRpbWluZ19pbmZvX3ByZXNlbnRfZmxhZ1xuICAgICAgICAgICAgICAgIGNvbnN0IG51bVVuaXRJblRpY2sgPSAocmVhZEJpdHMoMzIpKTtcbiAgICAgICAgICAgICAgICBmcmFtZVJhdGUuZnBzTnVtID0gKHJlYWRCaXRzKDMyKSk7XG4gICAgICAgICAgICAgICAgZnJhbWVSYXRlLmZpeGVkID0gdGhpcy5yZWFkQm9vbGVhbigpO1xuICAgICAgICAgICAgICAgIGZyYW1lUmF0ZS5mcHNEZW4gPSBudW1Vbml0SW5UaWNrICogMjtcbiAgICAgICAgICAgICAgICBmcmFtZVJhdGUuZnBzID0gZnJhbWVSYXRlLmZwc051bSAvIGZyYW1lUmF0ZS5mcHNEZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY3JvcFVuaXRYID0gMCwgY3JvcFVuaXRZID0gMDtcbiAgICAgICAgICAgIGlmIChjaHJvbWFGb3JtYXRJZGMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBjcm9wVW5pdFggPSAxO1xuICAgICAgICAgICAgICAgIGNyb3BVbml0WCA9IDIgLSBmcmFtZU1ic09ubHlGbGFnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgc3ViV2MgPSBjaHJvbWFGb3JtYXRJZGMgPT09IDMgPyAxIDogMjtcbiAgICAgICAgICAgICAgICBsZXQgc3ViSGMgPSBjaHJvbWFGb3JtYXRJZGMgPT09IDEgPyAyIDogMTtcbiAgICAgICAgICAgICAgICBjcm9wVW5pdFggPSBzdWJXYztcbiAgICAgICAgICAgICAgICBjcm9wVW5pdFkgPSBzdWJIYyAqICgyIC0gZnJhbWVNYnNPbmx5RmxhZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvZGVjV2lkdGggPSAocGljV2lkdGhJbk1ic01pbnVzMSArIDEpICogMTY7XG4gICAgICAgICAgICBjb2RlY0hlaWdodCA9ICgyIC0gZnJhbWVNYnNPbmx5RmxhZykgKiAoKHBpY0hlaWdodEluTWFwVW5pdHNNaW51czEgKyAxKSAqIDE2KTtcblxuICAgICAgICAgICAgY29kZWNXaWR0aCAtPSAoZnJhbWVDcm9wTGVmdE9mZnNldCArIGZyYW1lQ3JvcFJpZ2h0T2Zmc2V0KSAqIGNyb3BVbml0WDtcbiAgICAgICAgICAgIGNvZGVjSGVpZ2h0IC09IChmcmFtZUNyb3BUb3BPZmZzZXQgKyBmcmFtZUNyb3BCb3R0b21PZmZzZXQpICogY3JvcFVuaXRZO1xuXG4gICAgICAgICAgICBjb25zdCBwaXhlbFNjYWxlID0gcGl4ZWxSYXRpb1swXSA9PT0gMSB8fCBwaXhlbFJhdGlvWzFdID09PSAxXG4gICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgOiBwaXhlbFJhdGlvWzBdIC8gcGl4ZWxSYXRpb1sxXTtcblxuICAgICAgICAgICAgcHJlc2VudFdpZHRoID0gcGl4ZWxTY2FsZSAqIGNvZGVjV2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb2ZpbGVJZGMsXG4gICAgICAgICAgICBsZXZlbElkYyxcbiAgICAgICAgICAgIHJlZkZyYW1lcyxcbiAgICAgICAgICAgIGNocm9tYUZvcm1hdCxcbiAgICAgICAgICAgIGJpdERlcHRoOiBiaXREZXB0aEx1bWEsXG4gICAgICAgICAgICBmcmFtZVJhdGUsXG4gICAgICAgICAgICBjb2RlY1NpemU6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogY29kZWNXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNvZGVjSGVpZ2h0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXNlbnRTaXplOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHByZXNlbnRXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNvZGVjSGVpZ2h0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdpZHRoOiBNYXRoLmNlaWwoKCgocGljV2lkdGhJbk1ic01pbnVzMSArIDEpICogMTYpIC0gZnJhbWVDcm9wTGVmdE9mZnNldCAqIDIgLSBmcmFtZUNyb3BSaWdodE9mZnNldCAqIDIpKSxcbiAgICAgICAgICAgIGhlaWdodDogKCgyIC0gZnJhbWVNYnNPbmx5RmxhZykgKiAocGljSGVpZ2h0SW5NYXBVbml0c01pbnVzMSArIDEpICogMTYpIC0gKChcbiAgICAgICAgICAgICAgICBmcmFtZU1ic09ubHlGbGFnXG4gICAgICAgICAgICAgICAgICAgID8gMlxuICAgICAgICAgICAgICAgICAgICA6IDQpICogKGZyYW1lQ3JvcFRvcE9mZnNldCArIGZyYW1lQ3JvcEJvdHRvbU9mZnNldCkpLFxuICAgICAgICAgICAgcGl4ZWxSYXRpbzogcGl4ZWxSYXRpbyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZWFkU2xpY2VUeXBlICgpIHtcbiAgICAgICAgLy8gc2tpcCBOQUx1IHR5cGVcbiAgICAgICAgdGhpcy5yZWFkVUJ5dGUoKTtcbiAgICAgICAgLy8gZGlzY2FyZCBmaXJzdF9tYl9pbl9zbGljZVxuICAgICAgICB0aGlzLnJlYWRVRUcoKTtcbiAgICAgICAgLy8gcmV0dXJuIHNsaWNlX3R5cGVcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZFVFRygpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG4gICAgc3RhdGljIGxvZyAoLi4uYXJncykge1xuICAgICAgICB3aW5kb3cuY29uc29sZS5sb2cuYXBwbHkod2luZG93LCBhcmdzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5mbyAoLi4uYXJncykge1xuICAgICAgICB3aW5kb3cuY29uc29sZS5pbmZvLmFwcGx5KHdpbmRvdywgYXJncyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGVycm9yICguLi5hcmdzKSB7XG4gICAgICAgIHdpbmRvdy5jb25zb2xlLmVycm9yLmFwcGx5KHdpbmRvdywgYXJncyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHdhcm4gKC4uLmFyZ3MpIHtcbiAgICAgICAgd2luZG93LmNvbnNvbGUud2Fybi5hcHBseSh3aW5kb3csIGFyZ3MpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQGF1dGhvciBmdXl1aGFvXG4gKi9cblxuY29uc3QgbmF0aXZlU2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcblxuY2xhc3MgT2JzZXJ2ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5mbklkID0gMVxuICAgIHRoaXMuX2xpc3RlbmVySWRNYXAgPSB7fVxuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9XG4gIH1cbiAgb24gKGtleSwgZm4pIHtcbiAgICBjb25zdCBmbklkID0gdGhpcy5mbklkKytcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLl9nZXRMaXN0ZW5lcnNCeUtleShrZXkpXG4gICAgdGhpcy5fbGlzdGVuZXJJZE1hcFtmbklkXSA9IGZuXG4gICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgbGlzdGVuZXJzLnVuc2hpZnQoZm5JZClcbiAgICAgIHJldHVybiBmbklkXG4gICAgfVxuICAgIHRoaXMuX2xpc3RlbmVyc1trZXldID0gW2ZuSWRdXG4gICAgcmV0dXJuIGZuSWRcbiAgfVxuICBlbWl0IChrZXkpIHtcbiAgICBjb25zdCBhcmdzID0gbmF0aXZlU2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fZ2V0TGlzdGVuZXJzQnlLZXkoa2V5KSB8fCBbXVxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IGZuID0gdGhpcy5fZ2V0TGlzdGVuZXJCeUlkKGxpc3RlbmVyc1tpXSlcbiAgICAgIGZuICYmIGZuLmFwcGx5KG51bGwsIGFyZ3MpXG4gICAgfVxuICB9XG4gIG9uY2UgKGtleSwgZm4pIHtcbiAgICBjb25zdCBmbklkID0gdGhpcy5mbklkKytcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLl9nZXRMaXN0ZW5lcnNCeUtleShrZXkpXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzXG5cbiAgICBmdW5jdGlvbiBvbmNlRnVuYyAoKSB7XG4gICAgICBjb25zdCBhcmdzID0gbmF0aXZlU2xpY2UuY2FsbChhcmd1bWVudHMpXG4gICAgICBmbi5hcHBseShudWxsLCBhcmdzKVxuICAgICAgX3RoaXMub2ZmKGtleSwgZm5JZClcbiAgICB9XG4gICAgdGhpcy5fbGlzdGVuZXJJZE1hcFtmbklkXSA9IG9uY2VGdW5jXG4gICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgbGlzdGVuZXJzLnVuc2hpZnQoZm5JZClcbiAgICAgIHJldHVybiBmbklkXG4gICAgfVxuICAgIHRoaXMuX2xpc3RlbmVyc1trZXldID0gW2ZuSWRdXG4gICAgcmV0dXJuIGZuSWRcbiAgfVxuICBvZmYgKGtleSwgZm5JZCkge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2dldExpc3RlbmVyc0J5S2V5KGtleSlcbiAgICBjb25zdCBmbiA9IHRoaXMuX2dldExpc3RlbmVyQnlJZChmbklkKVxuICAgIGlmICghZm4gfHwgIWxpc3RlbmVycyB8fCBsaXN0ZW5lcnMuaW5kZXhPZihmbklkKSA8IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJJZE1hcFtmbklkXVxuICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW2tleV1cbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdGVuZXJzW2xpc3RlbmVycy5pbmRleE9mKGZuSWQpXSA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfVxuICBfZ2V0TGlzdGVuZXJzQnlLZXkgKGtleSkge1xuICAgIHJldHVybiB0aGlzLl9saXN0ZW5lcnNba2V5XVxuICB9XG4gIF9nZXRMaXN0ZW5lckJ5SWQgKGZuSWQpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdGVuZXJJZE1hcFtmbklkXVxuICB9XG4gIGZsdXNoIChrZXkpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLl9nZXRMaXN0ZW5lcnNCeUtleShrZXkpXG4gICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2goZm5JZCA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcklkTWFwW2ZuSWRdXG4gICAgICB9KVxuICAgICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyc1trZXldXG4gICAgfVxuICB9XG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IG51bGxcbiAgICB0aGlzLl9saXN0ZW5lcklkTWFwID0gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBPYnNlcnZlcigpXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuY2xhc3MgVVRGOCB7XG4gICAgc3RhdGljIGRlY29kZSh1aW50OGFycmF5KSB7XG4gICAgICAgIGNvbnN0IG91dCA9IFtdO1xuICAgICAgICBjb25zdCBpbnB1dCA9IHVpbnQ4YXJyYXk7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdWludDhhcnJheS5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChpbnB1dFtpXSA8IDB4ODApIHtcbiAgICAgICAgICAgICAgICBvdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGlucHV0W2ldKSk7XG4gICAgICAgICAgICAgICAgKytpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dFtpXSA8IDB4QzApIHtcbiAgICAgICAgICAgICAgICAvLyBmYWxsdGhyb3VnaFxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dFtpXSA8IDB4RTApIHtcbiAgICAgICAgICAgICAgICBpZiAoVVRGOC5fY2hlY2tDb250aW51YXRpb24oaW5wdXQsIGksIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVjczQgPSAoaW5wdXRbaV0gJiAweDFGKSA8PCA2IHwgKGlucHV0W2kgKyAxXSAmIDB4M0YpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodWNzNCA+PSAweDgwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKHVjczQgJiAweEZGRkYpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dFtpXSA8IDB4RjApIHtcbiAgICAgICAgICAgICAgICBpZiAoVVRGOC5fY2hlY2tDb250aW51YXRpb24oaW5wdXQsIGksIDIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVjczQgPSAoaW5wdXRbaV0gJiAweEYpIDw8IDEyIHwgKGlucHV0W2kgKyAxXSAmIDB4M0YpIDw8IDYgfCBpbnB1dFtpICsgMl0gJiAweDNGO1xuICAgICAgICAgICAgICAgICAgICBpZiAodWNzNCA+PSAweDgwMCAmJiAodWNzNCAmIDB4RjgwMCkgIT09IDB4RDgwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSh1Y3M0ICYgMHhGRkZGKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpICs9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXRbaV0gPCAweEY4KSB7XG4gICAgICAgICAgICAgICAgaWYgKFVURjguX2NoZWNrQ29udGludWF0aW9uKGlucHV0LCBpLCAzKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdWNzNCA9IChpbnB1dFtpXSAmIDB4NykgPDwgMTggfCAoaW5wdXRbaSArIDFdICYgMHgzRikgPDwgMTIgfFxuICAgICAgICAgICAgICAgICAgICAgICAgKGlucHV0W2kgKyAyXSAmIDB4M0YpIDw8IDYgfCAoaW5wdXRbaSArIDNdICYgMHgzRik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1Y3M0ID4gMHgxMDAwMCAmJiB1Y3M0IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVjczQgLT0gMHgxMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoKHVjczQgPj4+IDEwKSB8IDB4RDgwMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSgodWNzNCAmIDB4M0ZGKSB8IDB4REMwMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSArPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkZGRCkpO1xuICAgICAgICAgICAgKytpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dC5qb2luKCcnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2NoZWNrQ29udGludWF0aW9uKHVpbnQ4YXJyYXksIHN0YXJ0LCBjaGVja0xlbmd0aCkge1xuICAgICAgICBsZXQgYXJyYXkgPSB1aW50OGFycmF5O1xuICAgICAgICBpZiAoc3RhcnQgKyBjaGVja0xlbmd0aCA8IGFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgd2hpbGUgKGNoZWNrTGVuZ3RoLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoKGFycmF5Wysrc3RhcnRdICYgMHhDMCkgIT09IDB4ODApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVVEY4OyIsImV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZSAoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gICAgdmFyIHRpbWVvdXQsIHJlc3VsdDtcblxuXG4gICAgdmFyIGRlYm91bmNlZCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgIGlmICh0aW1lb3V0KSB7IGNsZWFyVGltZW91dCh0aW1lb3V0KTsgfVxuICAgICAgICBpZiAoaW1tZWRpYXRlKSB7XG4gICAgICAgICAgICB2YXIgY2FsbE5vdyA9ICF0aW1lb3V0O1xuICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuYywgd2FpdCk7XG4gICAgICAgICAgICBpZiAoY2FsbE5vdykgeyByZXN1bHQgPSBmdW5jKCk7IH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmMsIHdhaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgZGVib3VuY2VkLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRlYm91bmNlZDtcblxufVxuXG5leHBvcnQgY29uc3QgY2FjaGVXcmFwcGVyID0gKGZuKSA9PiB7XG5cbiAgICBjb25zdCBjYWNoZSA9IHt9O1xuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBhcmdzLnJlZHVjZSgocHJlLCBjdXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgJHtwcmV9XyR7Y3VyfWA7XG4gICAgICAgIH0sICcnKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgIGlmIChjYWNoZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZVtrZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVba2V5XSA9IHJlc3VsdDtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9O1xufTsiLCIvLyDlrZfoioLluo/mmK/lkKbmmK8g5bCP5a2X6IqC5bqPIOaYr+WPjeeahFxuY29uc3QgbGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcigyKTtcbiAgICAobmV3IERhdGFWaWV3KGJ1ZikpLnNldEludDE2KDAsIDI1NiwgdHJ1ZSkgLy8gbGl0dGxlLWVuZGlhbiB3cml0ZVxuICAgIHJldHVybiAobmV3IEludDE2QXJyYXkoYnVmKSlbMF0gPT09IDI1NiAvLyBwbGF0Zm9ybS1zcGVjIHJlYWQsIGlmIGVxdWFsIHRoZW4gTEVcbn0pKClcbmNvbnN0IHNuaWZmZXIgPSB7XG4gICAgZ2V0IGRldmljZSAoKSB7XG4gICAgICAgIGxldCByID0gc25pZmZlci5vcztcbiAgICAgICAgcmV0dXJuIHIuaXNQYyA/ICdwYycgOiByLmlzVGFibGV0ID8gJ3RhYmxldCcgOiAnbW9iaWxlJztcbiAgICB9LFxuICAgIGdldCBicm93c2VyICgpIHtcbiAgICAgICAgbGV0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsZXQgcmVnID0ge1xuICAgICAgICAgICAgaWU6IC9ydjooW1xcZC5dKylcXCkgbGlrZSBnZWNrby8sXG4gICAgICAgICAgICBmaXJmb3g6IC9maXJlZm94XFwvKFtcXGQuXSspLyxcbiAgICAgICAgICAgIGNocm9tZTogL2Nocm9tZVxcLyhbXFxkLl0rKS8sXG4gICAgICAgICAgICBvcGVyYTogL29wZXJhLihbXFxkLl0rKS8sXG4gICAgICAgICAgICBzYWZhcmk6IC92ZXJzaW9uXFwvKFtcXGQuXSspLipzYWZhcmkvLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gW10uY29uY2F0KE9iamVjdC5rZXlzKHJlZykuZmlsdGVyKGtleSA9PiByZWdba2V5XS50ZXN0KHVhKSkpWzBdO1xuICAgIH0sXG4gICAgZ2V0IG9zICgpIHtcbiAgICAgICAgbGV0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgICAgIGlzV2luZG93c1Bob25lID0gLyg/OldpbmRvd3MgUGhvbmUpLy50ZXN0KHVhKSxcbiAgICAgICAgICAgIGlzU3ltYmlhbiA9IC8oPzpTeW1iaWFuT1MpLy50ZXN0KHVhKSB8fCBpc1dpbmRvd3NQaG9uZSxcbiAgICAgICAgICAgIGlzQW5kcm9pZCA9IC8oPzpBbmRyb2lkKS8udGVzdCh1YSksXG4gICAgICAgICAgICBpc0ZpcmVGb3ggPSAvKD86RmlyZWZveCkvLnRlc3QodWEpLFxuICAgICAgICAgICAgaXNUYWJsZXQgPSAvKD86aVBhZHxQbGF5Qm9vaykvLnRlc3QodWEpIHx8IChpc0FuZHJvaWQgJiYgIS8oPzpNb2JpbGUpLy50ZXN0KHVhKSkgfHwgKGlzRmlyZUZveCAmJiAvKD86VGFibGV0KS8udGVzdCh1YSkpLFxuICAgICAgICAgICAgaXNQaG9uZSA9IC8oPzppUGhvbmUpLy50ZXN0KHVhKSAmJiAhaXNUYWJsZXQsXG4gICAgICAgICAgICBpc1BjID0gIWlzUGhvbmUgJiYgIWlzQW5kcm9pZCAmJiAhaXNTeW1iaWFuO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNUYWJsZXQsXG4gICAgICAgICAgICBpc1Bob25lLFxuICAgICAgICAgICAgaXNBbmRyb2lkLFxuICAgICAgICAgICAgaXNQYyxcbiAgICAgICAgICAgIGlzU3ltYmlhbixcbiAgICAgICAgICAgIGlzV2luZG93c1Bob25lLFxuICAgICAgICAgICAgaXNGaXJlRm94LFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgZ2V0IGlzTGUoKSB7XG4gICAgICAgIHJldHVybiBsZVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNuaWZmZXI7XG4iLCJpbXBvcnQgQ29uY2F0IGZyb20gJ2NvbmNhdC10eXBlZC1hcnJheSc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWxzL0xvZyc7XG5jbGFzcyBCdWZmZXIge1xuICAgIGNvbnN0cnVjdG9yIChidWZmZXIpIHtcbiAgICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXIgfHwgbmV3IFVpbnQ4QXJyYXkoMCk7XG4gICAgfVxuICAgIHdyaXRlICguLi5idWZmZXIpIHtcbiAgICAgICAgYnVmZmVyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gQ29uY2F0KFVpbnQ4QXJyYXksIHRoaXMuYnVmZmVyLCBpdGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmVycm9yKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIHdyaXRlVWludDMyICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgICAgICAgdmFsdWUgPj4gMjQsXG4gICAgICAgICAgICAodmFsdWUgPj4gMTYpICYgMHhmZixcbiAgICAgICAgICAgICh2YWx1ZSA+PiA4KSAmIDB4ZmYsXG4gICAgICAgICAgICB2YWx1ZSAmIDB4ZmYsXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBzdGF0aWMgcmVhZEFzSW50IChhcnIpIHtcbiAgICAgICAgbGV0IHRlbXAgPSAnJztcbiAgICAgICAgZnVuY3Rpb24gcGFkU3RhcnQ0SGV4IChoZXhOdW0pIHtcbiAgICAgICAgICAgIGxldCBoZXhTdHIgPSBoZXhOdW0udG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgcmV0dXJuIGhleFN0ci5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICB9XG4gICAgICAgIGFyci5mb3JFYWNoKG51bSA9PiB7XG4gICAgICAgICAgICB0ZW1wICs9IHBhZFN0YXJ0NEhleChudW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRlbXAsIDE2KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1ZmZlcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV94Z3BsYXllcl9fOyJdLCJzb3VyY2VSb290IjoiIn0=