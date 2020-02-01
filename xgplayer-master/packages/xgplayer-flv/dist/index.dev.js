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
/*!***************************!*\
  !*** external "xgplayer" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_xgplayer__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3hncGxheWVyLWZsdi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9ub2RlX21vZHVsZXMvY29uY2F0LXR5cGVkLWFycmF5L2xpYi9jb25jYXQuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vbm9kZV9tb2R1bGVzL2NvbmNhdC10eXBlZC1hcnJheS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vbm9kZV9tb2R1bGVzL2QvaW5kZXguanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vbm9kZV9tb2R1bGVzL2VzNS1leHQvZnVuY3Rpb24vbm9vcC5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9hc3NpZ24vaXMtaW1wbGVtZW50ZWQuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L2Fzc2lnbi9zaGltLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9pcy12YWx1ZS5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3Qva2V5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3Qva2V5cy9pcy1pbXBsZW1lbnRlZC5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3Qva2V5cy9zaGltLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9ub3JtYWxpemUtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvdmFsaWQtY2FsbGFibGUuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L3ZhbGlkLXZhbHVlLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL25vZGVfbW9kdWxlcy9lczUtZXh0L3N0cmluZy8jL2NvbnRhaW5zL2luZGV4LmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL25vZGVfbW9kdWxlcy9lczUtZXh0L3N0cmluZy8jL2NvbnRhaW5zL2lzLWltcGxlbWVudGVkLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL25vZGVfbW9kdWxlcy9lczUtZXh0L3N0cmluZy8jL2NvbnRhaW5zL3NoaW0uanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vbm9kZV9tb2R1bGVzL2V2ZW50LWVtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vbm9kZV9tb2R1bGVzL3R5cGUvZnVuY3Rpb24vaXMuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vbm9kZV9tb2R1bGVzL3R5cGUvb2JqZWN0L2lzLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL25vZGVfbW9kdWxlcy90eXBlL3BsYWluLWZ1bmN0aW9uL2lzLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL25vZGVfbW9kdWxlcy90eXBlL3Byb3RvdHlwZS9pcy5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9ub2RlX21vZHVsZXMvdHlwZS92YWx1ZS9pcy5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9zcmMvRmx2LmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy9jb25zdGFudHMvY29uZmlnLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy9jb25zdGFudHMvbWV0YUZpZWxkcy5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9zcmMvY29uc3RhbnRzL3R5cGVzLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9zcmMvbW9kZWxzL01lZGlhSW5mby5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9zcmMvbW9kZWxzL01lZGlhU2FtcGxlLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy9tb2RlbHMvTWVkaWFTZWdtZW50LmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy9tb2RlbHMvTWVkaWFTZWdtZW50TGlzdC5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9zcmMvbW9kZWxzL1N0b3JlLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy9tb2RlbHMvVGFnLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy9tb2RlbHMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vc3JjL3BhcnNlL0ZsdlBhcnNlci5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9zcmMvcGFyc2UvTVNFLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy9wYXJzZS9NYWluUGFyc2VyLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy9wYXJzZS9TUFNQYXJzZXIuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vc3JjL3BhcnNlL1RyYW5zQ29kZXIuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vc3JjL3BhcnNlL2RlbXV4L0F1ZGlvRGVtdXhlci5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9zcmMvcGFyc2UvZGVtdXgvRGVtdXhlci5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9zcmMvcGFyc2UvZGVtdXgvTWV0YURlbXV4ZXIuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vc3JjL3BhcnNlL2RlbXV4L1RhZ0RlbXV4ZXIuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vc3JjL3BhcnNlL2RlbXV4L1ZpZGVvRGVtdXhlci5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9zcmMvcGFyc2UvcmVtdXgvRm1wNC5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9zcmMvcGFyc2UvcmVtdXgvTXA0cmVtdXguanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vc3JjL3BhcnNlL3JlbXV4L1JlbXV4ZXIuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vc3JjL3Rhc2tzL0xpdmVUYXNrLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy90YXNrcy9Wb2RUYXNrLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy90YXNrcy9sb2FkZXJzL0ZldGNoTG9hZGVyLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy90YXNrcy9sb2FkZXJzL1hIUkxvYWRlci5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9zcmMvdXRpbHMvRGF0YVZpZXc0UmVhZC5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvLi9zcmMvdXRpbHMvRXhwR29sb21iLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy91dGlscy9Mb2cuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vc3JjL3V0aWxzL09ic2VydmVyLmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy91dGlscy9VVEY4LmpzIiwid2VicGFjazovL3hncGxheWVyLWZsdi8uL3NyYy91dGlscy9mdW5jVXRpbHMuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vc3JjL3V0aWxzL3NuaWZmZXIuanMiLCJ3ZWJwYWNrOi8veGdwbGF5ZXItZmx2Ly4vc3JjL3dyaXRlL0J1ZmZlci5qcyIsIndlYnBhY2s6Ly94Z3BsYXllci1mbHYvZXh0ZXJuYWwgXCJ4Z3BsYXllclwiIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdCIsIlJlc3VsdENvbnN0cnVjdG9yIiwidG90YWxMZW5ndGgiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJyYXlzIiwiQXJyYXkiLCJfa2V5IiwiX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiIsIl9kaWRJdGVyYXRvckVycm9yIiwiX2l0ZXJhdG9yRXJyb3IiLCJ1bmRlZmluZWQiLCJfaXRlcmF0b3IiLCJTeW1ib2wiLCJpdGVyYXRvciIsIl9zdGVwIiwibmV4dCIsImRvbmUiLCJhcnIiLCJlcnIiLCJyZXR1cm4iLCJyZXN1bHQiLCJvZmZzZXQiLCJfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiIsIl9kaWRJdGVyYXRvckVycm9yMiIsIl9pdGVyYXRvckVycm9yMiIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJfYXJyIiwic2V0IiwiX2NvbmNhdCIsInJlcXVpcmUiLCJfY29uY2F0MiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJvYmoiLCJfX2VzTW9kdWxlIiwibW9kdWxlIiwiaXNWYWx1ZSIsImlzUGxhaW5GdW5jdGlvbiIsImFzc2lnbiIsIm5vcm1hbGl6ZU9wdHMiLCJjb250YWlucyIsImQiLCJkc2NyIiwiYyIsImUiLCJ3Iiwib3B0aW9ucyIsImRlc2MiLCJjYWxsIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiZ3MiLCJnZXQiLCJmb28iLCJiYXIiLCJ0cnp5Iiwia2V5cyIsIm1heCIsIk1hdGgiLCJkZXN0Iiwic3JjIiwiZXJyb3IiLCJpIiwia2V5IiwiZm9yRWFjaCIsIl91bmRlZmluZWQiLCJ2YWwiLCJvYmplY3QiLCJwcm90b3R5cGUiLCJjcmVhdGUiLCJwcm9jZXNzIiwib3B0czEiLCJmbiIsIlR5cGVFcnJvciIsIlN0cmluZyIsInN0ciIsImluZGV4T2YiLCJzZWFyY2hTdHJpbmciLCJjYWxsYWJsZSIsImFwcGx5IiwiRnVuY3Rpb24iLCJkZWZpbmVQcm9wZXJ0aWVzIiwiaGFzT3duUHJvcGVydHkiLCJkZXNjcmlwdG9yIiwib24iLCJvbmNlIiwib2ZmIiwiZW1pdCIsIm1ldGhvZHMiLCJkZXNjcmlwdG9ycyIsImJhc2UiLCJ0eXBlIiwibGlzdGVuZXIiLCJkYXRhIiwiX19lZV9fIiwicHVzaCIsInNlbGYiLCJfX2VlT25jZUxpc3RlbmVyX18iLCJsaXN0ZW5lcnMiLCJjYW5kaWRhdGUiLCJzcGxpY2UiLCJsIiwiYXJncyIsInNsaWNlIiwibyIsImlzUHJvdG90eXBlIiwicG9zc2libGVUeXBlcyIsImlzRnVuY3Rpb24iLCJjbGFzc1JlIiwiZnVuY3Rpb25Ub1N0cmluZyIsInRvU3RyaW5nIiwidGVzdCIsImlzT2JqZWN0IiwiY29uc3RydWN0b3IiLCJGbHYiLCJwbGF5ZXIiLCJfcGxheWVyIiwiX29wdGlvbnMiLCJmbHZQbGF5ZXIiLCJNYWluUGFyc2VyIiwibXNlIiwiTVNFIiwidmlkZW8iLCJpc1NlZWtpbmciLCJpc0RhdGFMb2FkaW5nIiwidGVtcEN1cnJlbnRUaW1lIiwidGVtcEZsdlBsYXllciIsImlzQ2hhbmdpbmdTcmMiLCJpbml0UGxheWVyRXZlbnRzIiwiaW5pdEZsdlBsYXllckV2ZW50cyIsImluaXRNc2VFdmVudHMiLCJzdGFydExvYWREYXRhIiwiaGFuZGxlU2Vla2luZyIsImJ1ZmZlcmVkIiwiY3VycmVudFRpbWUiLCJpc0J1ZmZlcmVkIiwibGVuIiwic3RhcnQiLCJlbmQiLCJWb2RUYXNrIiwiY2xlYXIiLCJpc1NlZWthYmxlIiwic2VlayIsImlzTGl2ZSIsImhhbmRsZVRpbWVVcGRhdGUiLCJpc01lZGlhSW5mb1JlYWR5IiwicHJvZ3Jlc3NDaGVja2VyIiwiaXNFbmRlZCIsIl9yZXBsYXkiLCJkZXN0cm95IiwiX21zZSIsInJlcGxheSIsImlzU291cmNlT3BlbiIsImFwcGVuZEJ1ZmZlciIsImZ0eXBfbW9vdiIsImJ1ZmZlciIsInNldFRpbWVvdXQiLCJwbGF5IiwicGVuZGluZ0ZyYWdtZW50cyIsImhhc1BlbmRpbmdGcmFnbWVudHMiLCJmcmFnbWVudCIsInNoaWZ0IiwidW5zaGlmdCIsInVybCIsInN3aXRjaFVSTCIsImNvbmZpZyIsImlzVGVtcFBsYXllciIsImhhbmRsZU1lZGlhRnJhZ21lbnQiLCJ1bmJpbmRGbHZQbGF5ZXJFdmVudHMiLCJoYW5kbGVTZWVrRW5kIiwiaGFuZGxlRXJyb3IiLCJoYW5kbGVGdHlwTW9vdiIsImZ0eXBNb292Iiwib25Tb3VyY2VPcGVuIiwibG9hZFNlZ21lbnRzIiwicHJlbG9hZFRpbWUiLCJtaW5DYWNoZWRUaW1lIiwicmFuZ2UiLCJnZXRCdWZmZXJlZFJhbmdlIiwidmlkZW9EdXJhdGlvbiIsInZpZGVvVGltZVNjYWxlIiwidGhlbiIsImZsdiIsImVuZE9mU3RyZWFtIiwicGF1c2UiLCJnZXREZWZhdWx0Q29uZiIsImF1dG9DbGVhblNvdXJjZUJ1ZmZlciIsImF1dG9DbGVhbk1heEJhY2tUaW1lIiwiY29ycyIsImZpZWxkcyIsIm5hbWUiLCJCb29sZWFuIiwicGFyc2VyIiwidGFyZ2V0Iiwib3JpZ2luIiwibWVkaWFJbmZvIiwiZHVyYXRpb24iLCJoYXNBdWRpbyIsImhhc1ZpZGVvIiwiTnVtYmVyIiwiYXVkaW9EYXRhUmF0ZSIsImF1ZGlvZGF0YXJhdGUiLCJ2aWRlb0RhdGFSYXRlIiwidmlkZW9kYXRhcmF0ZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3RhdGUiLCJmbG9vciIsInRpbWVTY2FsZSIsIm9uVHlwZUVyciIsImZwc051bSIsImZyYW1lcmF0ZSIsImZwcyIsInJlZmVyRnJhbWVSYXRlIiwiZml4ZWQiLCJmcHNEZW4iLCJrZXlmcmFtZXMiLCJoYXNLZXlmcmFtZXMiLCJfcGFyc2VLZXlmcmFtZXMiLCJNZXRhVHlwZXMiLCJOVU1CRVIiLCJCT09MRUFOIiwiU1RSSU5HIiwiT0JKRUNUIiwiTUlYX0FSUkFZIiwiT0JKRUNUX0VORCIsIlNUUklDVF9BUlJBWSIsIkRBVEUiLCJMT05FX1NUUklORyIsIkV2ZW50VHlwZXMiLCJEQVRBX1JFQURZIiwiTUVUQV9EQVRBX1JFQURZIiwiVFJBQ0tfTUVUQV9SRUFEWSIsIk1FRElBX0lORk9fUkVBRFkiLCJNRVRBX0VORF9QT1NJVElPTiIsIkVSUk9SIiwic291bmRSYXRlVHlwZXMiLCJBdWRpb09iamVjdFR5cGVzIiwic2FtcGxpbmdGcmVxdWVuY3lUeXBlcyIsImJyb3dzZXJUeXBlcyIsIklFIiwiRklSRV9GT1giLCJDSFJPTUUiLCJPUEVSQSIsIlNBRkFSSSIsIm1wM1ZlcnNpb25zIiwiVjI1IiwiUkVTRVJWRUQiLCJWMjAiLCJWMTAiLCJhdWRpb1NhbXBsZVJhdGUiLCJtcDNCaXRSYXRlIiwiTGF5ZXIxIiwiTGF5ZXIyIiwiTGF5ZXIzIiwiRmx2UGxheWVyIiwiX19mbHZfXyIsImluaXQiLCJzdGFydHNXaXRoIiwibG9hZCIsImF1dG9wbGF5IiwiY3JlYXRlSW5zdGFuY2UiLCJQbGF5ZXIiLCJ1dGlsIiwiYWRkQ2xhc3MiLCJyb290IiwibGl2ZSIsImNyZWF0ZURvbSIsImNvbnRyb2xzIiwiYXBwZW5kQ2hpbGQiLCJpbml0ZWQiLCJNZWRpYUluZm8iLCJfZGVmYXVsdCIsIm1pbWVUeXBlIiwiY29kZWMiLCJhdWRpb0NvZGVjIiwidmlkZW9Db2RlYyIsImF1ZGlvQ2hhbm5lbENvdW50IiwiYXVkaW9Db25maWciLCJwcm9maWxlIiwibGV2ZWwiLCJjaHJvbWFGb3JtYXQiLCJwaXhlbFJhdGlvIiwiX21ldGFEYXRhIiwic2VnbWVudHMiLCJpbml0RGF0YSIsImVudHJpZXMiLCJrIiwidiIsImlzVmlkZW9JbmZvRmlsbGVkIiwiaXNBdWRpb0luZm9GaWxsZWQiLCJub3ROdWxsRmllbGRzIiwiTWVkaWFTYW1wbGUiLCJpbmZvIiwiZ2V0RGVmYXVsdEluZiIsInNhbXBsZSIsImR0cyIsInB0cyIsInBvc2l0aW9uIiwiaXNSQVAiLCJvcmlnaW5EdHMiLCJNZWRpYVNlZ21lbnQiLCJzdGFydER0cyIsImVuZER0cyIsInN0YXJ0UHRzIiwiZW5kUHRzIiwib3JpZ2luU3RhcnREdHMiLCJvcmlnaW5FbmREdHMiLCJyYW5kb21BY2Nlc3NQb2ludHMiLCJmaXJzdFNhbXBsZSIsImxhc3RTYW1wbGUiLCJNZWRpYVNlZ21lbnRMaXN0IiwiX3R5cGUiLCJfbGlzdCIsIl9sYXN0QXBwZW5kTG9jYXRpb24iLCJiZWdpbkR0cyIsImxpc3QiLCJsYXN0IiwibWlkIiwibGJvdW5kIiwidWJvdW5kIiwiaWR4IiwiX3NlYXJjaE5lYXJlc3RTZWdtZW50QmVmb3JlIiwic2VnbWVudCIsImxhc3RBcHBlbmRJZHgiLCJpbnNlcnRJZHgiLCJnZXRMYXN0U2VnbWVudEJlZm9yZSIsInNlZ21lbnRJZHgiLCJTdG9yZSIsImlzTGUiLCJzbmlmZmVyIiwiX2hhc0F1ZGlvIiwiX2hhc1ZpZGVvIiwiX21lZGlhSW5mbyIsIl92aWRlb1RyYWNrIiwiaWQiLCJzYW1wbGVzIiwiX2F1ZGlvVHJhY2siLCJfdmlkZW9NZXRhRGF0YSIsIl9hdWRpb01ldGFEYXRhIiwiX2F1ZGlvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZCIsIl92aWRlb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWQiLCJ0YWdzIiwidGltZVN0YW1wQmFzZSIsImhhc1ZpZGVvRmxhZ092ZXJyaWRlZCIsImhhc0F1ZGlvRmxhZ092ZXJyaWRlZCIsImR1cmF0aW9uT3ZlcnJpZGVkIiwibmFsdUxlbmd0aFNpemUiLCJfcmVmZXJGcmFtZVJhdGUiLCJtZXRhRW5kUG9zaXRpb24iLCJfaXNJbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkIiwiYmluZCIsInBvcyIsIkZsdlRhZyIsInRhZ1R5cGUiLCJib2R5U2l6ZSIsInRhZ1NpemUiLCJUaW1lc3RhbXAiLCJTdHJlYW1JRCIsImJvZHkiLCJ0aW1lIiwicG9wIiwiam9pbiIsInBhcnNlSW50IiwiRXJyb3JUeXBlcyIsIm5ldHdvcmsiLCJjb2RlIiwibXNnIiwicmVtYXJrIiwicGFyc2UiLCJmb3JtYXQiLCJkZWNvZGVyIiwicnVudGltZSIsInRpbWVvdXQiLCJvdGhlciIsIkVycm9ycyIsIm5ldHdvcmtTdGF0ZSIsInJlYWR5U3RhdGUiLCJjdXJyZW50U3JjIiwiZW5kZWQiLCJlcnJkIiwibGluZSIsImhhbmRsZSIsInZlcnNpb24iLCJyIiwicGxheWVyVmVyc2lvbiIsImVycm9yVHlwZSIsImRvbWFpbiIsImRvY3VtZW50IiwiZXgiLCJGbHZQYXJzZXIiLCJzdG9yZSIsIkNMQVNTX05BTUUiLCJ0ZW1wX3U4YSIsImRhdGFMZW4iLCJzdG9wIiwiaW5kZXgiLCJmaWxlUG9zaXRpb24iLCJmaXJzdEZsYWciLCJmbHZVOGEiLCJ0ZW1wVThhIiwicGFyc2VEYXRhIiwiaXNGbHZIZWFkIiwicGFyc2VIZWFkIiwicmVhZERhdGEiLCJ1OGFMZW5ndGgiLCJ0YWciLCJUYWciLCJ1bnJlYWRMZW5ndGgiLCJTdHJhbUlkIiwiZ2V0Qm9keVNpemUiLCJfc3RvcmUiLCJzaXplQXJyIiwiQnVmZmVyIiwicmVhZEFzSW50IiwibWF0Y2giLCJmbGFnIiwiX2luZGV4IiwiZmlyc3RUaHJlZUNoYXJzIiwiZnJvbUNoYXJDb2RlIiwiRGVtdXhlciIsImNvdW50IiwibWVkaWFFbGVtZW50IiwiY29kZWNzIiwibWVkaWFTb3VyY2UiLCJ3aW5kb3ciLCJNZWRpYVNvdXJjZSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImhhbmRsZVNvdXJjZU9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic291cmNlQnVmZmVyIiwiYWRkU291cmNlQnVmZmVyIiwidXBkYXRpbmciLCJFcnJvciIsInJlbW92ZSIsImlzVHlwZVN1cHBvcnRlZCIsIk5PT1AiLCJfY29uZmlnIiwiX3RlbXBCYXNlVGltZSIsImZsdlBhcnNlciIsInRhZ0RlbXV4ZXIiLCJUYWdEZW11eGVyIiwibXA0cmVtdXhlciIsIk1wNFJlbXV4ZXIiLCJidWZmZXJLZXlmcmFtZXMiLCJTZXQiLCJNRVRBX0NIVU5LX1NJWkUiLCJwb3ciLCJDSFVOS19TSVpFIiwiX2lzTmV3U2VnbWVudHNBcnJpdmFsIiwibG9hZFRhc2siLCJfcGVuZGluZ0ZyYWdtZW50cyIsIl9wZW5kaW5nUmVtb3ZlUmFuZ2UiLCJlcnJfY250IiwicmVxdWVzdENvbmZpZyIsIm1vZGUiLCJpbml0RXZlbnRCaW5kIiwiaW5pdE1ldGEiLCJpbml0TGl2ZVN0cmVhbSIsIkxpdmVUYXNrIiwicnVuIiwibG9hZExpdmVEYXRhIiwid3JpdGUiLCJVaW50OEFycmF5Iiwic2V0Rmx2IiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJSZXNvbHZlciIsInJlc29sdmVDaHVuayIsInRpbWVTdGFtcCIsImxvYWREYXRhIiwibG9hZE1ldGFEYXRhIiwiY2F0Y2giLCJjaGFuZ2VSYW5nZSIsIl9yYW5nZSIsImdldE5leHRSYW5nZUVuZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiX2xvYWRTZWdtZW50c0RhdGEiLCJ0aW1lcyIsImZpbGVQb3NpdGlvbnMiLCJleHBlY3RFbmQiLCJsZWZ0IiwicmlnaHQiLCJwcm9taXNlIiwiYXJyYXlCdWZmIiwiYmFzZVRpbWUiLCJnZXRUaW1lIiwiX3RpbWVzdGFtcEJhc2UiLCJyZXNvbHZlVGFncyIsImlzUGFyc2luZyIsImF1ZGlvVHJhY2siLCJ2aWRlb1RyYWNrIiwicmVtdXgiLCJtZXRhIiwib25NZXRhRGF0YVJlYWR5IiwibmV3RnJhZyIsImFkZCIsInJhcCIsIkZUWVBfTU9PViIsIm9uTWVkaWFJbmZvUmVhZHkiLCJoYW5kbGVEYXRhUmVhZHkiLCJoYW5kbGVNZWRpYUluZm9SZWFkeSIsImhhbmRsZU1ldGFEYXRhUmVhZHkiLCJzZXRFdmVudEJpbmQiLCJoYW5kbGVOZXdNZWRpYUZyYWdtZW50IiwiY2xlYXJCdWZmZXIiLCJjYW5jZWwiLCJzZWVrU3RhcnQiLCJzdGFydEZpbGVQb3MiLCJlbmRGaWxlUG9zIiwibWluIiwiZ2V0RW5kRmlsZVBvcyIsImxvIiwiaGkiLCJuZXh0VGltZSIsIk1BWF9TQUZFX0lOVEVHRVIiLCJldmVyeSIsImNsZWFyVGFncyIsInNldEZsdkZpcnN0Iiwic2V0Rmx2VXN1YWxseSIsImlzQ29tcGxldGUiLCJUcmFuc0NvZGVyIiwiU1BTUGFyc2VyIiwicHJvZmlsZUlkYyIsImxldmVsSWRjIiwidG9GaXhlZCIsImNocm9tYSIsIm9yaWdpbkFyciIsInJic3AiLCJfZWJzcDJyYnNwIiwic3RyZWFtIiwiRXhwR29sb21iIiwic3BzQ29uZmlnIiwicmVhZFNQUyIsInByb2ZpbGVTdHJpbmciLCJnZXRQcm9maWxlU3RyIiwibGV2ZWxTdHJpbmciLCJnZXRMZXZlbFN0ciIsImNocm9tYUZvcm1hdFN0cmluZyIsImdldENocm9tYUZvcm1hdFN0ciIsIm9yaWdpbkxlbiIsImJ5dGVMZW5ndGgiLCJkaXN0IiwiZGlzdFNpemUiLCJfb2JzZXJ2ZXIiLCJvYnNlcnZlciIsImZsdXNoIiwiZXJyb3JEZXRhaWwiLCJlcnJvclRvRW1pdCIsIkF1ZGlvRGVtdXhlciIsImN1cnJlbnRUYWciLCJyZWFkT2Zmc2V0IiwiYXVkaW9NZXRhRGF0YSIsInRyYWNrIiwiaW5pdEF1ZGlvTWV0YSIsImR2IiwiRGF0YVZpZXc0UmVhZCIsInNvdW5kIiwiZ2V0VWludDgiLCJzb3VuZEZvcm1hdElkeCIsInNvdW5kUmF0ZSIsInNvdW5kVHlwZSIsImNoYW5uZWxDb3VudCIsImFhY0luZm8iLCJfcGFyc2VBQUNBdWRpbyIsImFhY0RhdGEiLCJzYW1wbGVGcmVxIiwicGFja2V0VHlwZSIsInNhbXBsZVJhdGUiLCJtYW5pZmVzdENvZGVjIiwicmVmU2FtcGxlRHVyYXRpb24iLCJoYXNJbml0aWFsTWV0YURpc3BhdGNoZWQiLCJtaSIsInJlcGxhY2UiLCJhYWNTYW1wbGUiLCJ1bml0IiwicmVzZXRTdGF0dXMiLCJhYWNBcnJheSIsIl9wYXJzZUFBQ0F1ZGlvU3BlY2lmaWNDb25maWciLCJnZXRBbmROdW0iLCJyZXN1bHRPYmoiLCJzYW1wbGluZ0ZyZXF1ZW5jeSIsImV4dEF1ZGlvT2JqZWN0VHlwZSIsImV4dEF1ZGlvU2FtcGxpbmdJZHgiLCJVSW50MCIsIlVJbnQxIiwidGVtcEF1ZGlvT2JqZWN0VHlwZSIsImF1ZGlvT2JqZWN0VHlwZSIsInNhbXBsaW5nSWR4IiwiZW1pdEVycm9yIiwiZGlzcGF0Y2giLCJVSW50MiIsImJyb3dzZXIiLCJvcyIsImlzQW5kcm9pZCIsImV4dGVuc2lvblNhbXBsaW5nSW5kZXgiLCJleHRlbnNpb25TYW1wbGluZ0lkeCIsImRhdGFTaXplIiwicHJlZml4IiwicGF5bG9hZCIsIkxvZyIsIndhcm4iLCJNZXRhRGVtdXhlciIsInNpemUiLCJtZXRhRGF0YSIsInBhcnNlVmFsdWUiLCJEYXRhVmlldyIsInN0ckxlbiIsImdldFVpbnQxNiIsIlVURjgiLCJkZWNvZGUiLCJ0cyIsImdldEZsb2F0NjQiLCJ0aW1lT2Zmc2V0IiwiZ2V0SW50MTYiLCJEYXRlIiwicGFyc2VTdHJpbmciLCJpc09iakVuZCIsImdldFVpbnQzMiIsIkFycmF5QnVmZmVyIiwiZGF0YVZpZXciLCJib29sTnVtIiwib2JqRW5kU2l6ZSIsImFtZk9iaiIsInBhcnNlT2JqZWN0IiwiaXNPYmplY3RFbmQiLCJtYXJrIiwiYW1mVmFyIiwibWFya2VyIiwiYXJyTGVuZ3RoIiwic2NyaXB0IiwiZGF0ZSIsInBhcnNlRGF0ZSIsImxvbmdTdHIiLCJwYXJzZUxvbmdTdHJpbmciLCJuYXRpdmVIYXNQcm9wIiwiVGFnZGVtdXgiLCJfbWV0YURlbXV4ZXIiLCJfdmlkZW9EZW11eGVyIiwiVmlkZW9EZW11eGVyIiwiX2F1ZGlvRGVtdXhlciIsIl9maXJzdFBhcnNlIiwiX2RhdGFPZmZzZXQiLCJyZXNvbHZlVGFnIiwiX3Jlc29sdmVBdWRpb1RhZyIsIl9yZXNvbHZlVmlkZW9UYWciLCJfcmVzb2x2ZU1ldGFUYWciLCJzIiwiaGFzTWV0YURhdGEiLCJMb2dnZXIiLCJvbk1ldGFEYXRhIiwibWV0YUZpZWxkcyIsImZpZWxkIiwibWV0YU9iaiIsIl9pbml0TWV0YURhdGEiLCJmaWxlcG9zaXRpb25zIiwidmlkZW9NZXRhRGF0YSIsImZpcnN0VUk4IiwiZnJhbWVUeXBlIiwiY29kZWNJZCIsIl9wYXJzZUFWQ1BhY2tldCIsInBhY2thZ2VUeXBlIiwiY3BzVGltZSIsIl9wYXJzZUFWQ0RlY29kZXJDb25maWd1cmF0aW9uUmVjb3JkIiwiX3BhcnNlQVZDVmlkZW9EYXRhIiwiYXZjYyIsInRpbWVzY2FsZSIsImF2Y1Byb2ZpbGUiLCJnZXRVaW50Iiwic3BzTGVuZ3RoIiwiaGFuZGxlciIsInNwcyIsInBhcnNlU1BTIiwiY29kZWNTaXplIiwicHJlc2VudFNpemUiLCJmcmFtZVJhdGUiLCJyZWZGcmFtZXMiLCJiaXREZXB0aCIsInByZXNlbnRXaWR0aCIsInByZXNlbnRIZWlnaHQiLCJjb2RlY0FyciIsInN1YmFycmF5IiwiY29kZWNTdHIiLCJqIiwiaGV4IiwicGFkU3RhcnQiLCJwcHMiLCJwcHNDb3VudCIsInBwc1NpemUiLCJuYWx1TGlzdCIsIm5hbHVMZW5TaXplIiwiaXNLZXlmcmFtZSIsInRlbXBSZWFkT2Zmc2V0IiwibmFsdVNpemUiLCJnZXRVaW50MjQiLCJ1bml0VHlwZSIsIm5hbHVVbml0IiwidmlkZW9TYW1wbGUiLCJ1bml0cyIsImNwcyIsIm51bSIsIkZNUDQiLCJ3cml0ZVVpbnQzMiIsImNvbnRlbnQiLCJpbml0Qm94IiwibXZoZCIsInRyYWsxIiwidmlkZW9UcmFrIiwidHJhazIiLCJhdWRpb1RyYWsiLCJtdmV4IiwiaXRlbSIsImJ5dGVzIiwidGtoZCIsIm1kaWEiLCJzYW1wbGVyYXRlIiwibWVkaWFUaW1lIiwibWRoZCIsImhkbHIiLCJtaW5mIiwiZXh0ZW5zaW9uIiwidm1oZCIsInNtaGQiLCJkaW5mIiwic3RibCIsImRyZWYiLCJzdHNkIiwic3R0cyIsInN0c2MiLCJzdHN6Iiwic3RjbyIsIm1wNGEiLCJhdmMxIiwiZXNkcyIsImNvbmZpZ2xlbiIsImNvbmNhdCIsImhTcGFjaW5nIiwidlNwYWNpbmciLCJhdmNjQnVmZmVyIiwiYnRydCIsInBhc3AiLCJtZWhkIiwidHJleCIsIm1maGQiLCJ0cmFmIiwic2VxdWVuY2UiLCJ0ZmhkIiwidGZkdCIsInNkdHAiLCJ0cnVuIiwic2R0cExlbmd0aCIsInNhbXBsZUNvdW50Iiwid3JpdGVPZmZzZXQiLCJ0cnVuQm94IiwibWRhdEJveCIsImNoYXJDb2RlQXQiLCJfZHRzQmFzZSIsIl9pc0R0c0Jhc2VJbml0ZWQiLCJfdmlkZW9NZXRhIiwiX2F1ZGlvTWV0YSIsIl9hdWRpb05leHREdHMiLCJfdmlkZW9OZXh0RHRzIiwiX3ZpZGVvU2VnbWVudExpc3QiLCJfYXVkaW9TZWdtZW50TGlzdCIsIl9maWxsU2lsZW5jZUZyYW1lIiwiX2R0c0Jhc2VJbml0ZWQiLCJjYWxjRHRzQmFzZSIsIl9yZW11eFZpZGVvIiwiX3JlbXV4QXVkaW8iLCJmdHlwIiwibW9vdiIsImF1ZGlvQmFzZSIsIkluZmluaXR5IiwidmlkZW9CYXNlIiwiZHRzQ29ycmVjdGlvbiIsImZpcnN0RHRzIiwibGFzdER0cyIsImZpcnN0UHRzIiwibGFzdFB0cyIsIm1wNFNhbXBsZXMiLCJ2aWRlb1NlZ21lbnQiLCJhdmNTYW1wbGUiLCJpc0VtcHR5IiwibGFzdFNlZ21lbnQiLCJnYXAiLCJsYXN0R2FwIiwiX3VuaXRzIiwibWRhdFNhbXBsZSIsInNhbXBsZUR1cmF0aW9uIiwibmV4dER0cyIsImFkZFJBUCIsImZpcnN0IiwibW9vZk1kYXQiLCJtb29mIiwibWRhdCIsImFwcGVuZCIsInNpbGVudER1cmF0aW9uIiwiaXNGaXJzdER0c0luaXRlZCIsIm5lZWRTaWxlbnRGcmFtZSIsImdldExhc3RTYW1wbGVCZWZvcmUiLCJzaWxlbnRGcmFtZSIsImluaXRTaWxlbnRBdWRpbyIsIm1wNFNhbXBsZSIsImN0cyIsImF1ZGlvU2VnbWVudCIsImdldFNpbGVudEZyYW1lIiwiUmVtdXhlciIsIl9oZWFkZXJzIiwiSGVhZGVycyIsImhlYWRlcnMiLCJtZXRob2QiLCJjYWNoZSIsIl9zdG9wIiwicmVxdWVzdCIsIlJlcXVlc3QiLCJjYWxsYmFjayIsInJlYWRlciIsInJlYWQiLCJwcm9tIiwicmVqZWN0IiwiaXNUaW1lb3V0IiwiZmV0Y2giLCJyZXMiLCJnZXRSZWFkZXIiLCJMb2FkQ2xzIiwiRmV0Y2hMb2FkZXIiLCJYSFJMb2FkZXIiLCJsb2FkZXIiLCJpc0NhbmNlbGVkIiwicXVldWUiLCJ1cGRhdGUiLCJmaWx0ZXIiLCJRdWV1ZSIsInNlbmRlZCIsIndhaXQiLCJsaW1pdCIsImNvbXBsZXRlIiwiaXNTdG9wcGVkIiwibm93IiwiUmFuZ2UiLCJzdGF0dXMiLCJvayIsInN0YXR1c1RleHQiLCJhcnJheUJ1ZmZlciIsIl9wcm9taXNlIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwic2V0UmVxdWVzdEhlYWRlciIsIm9uYWJvcnQiLCJvbmxvYWQiLCJyZXNwb25zZSIsIm9uZXJyb3IiLCJfeGhyIiwic2VuZCIsImFib3J0IiwiY29udGV4dCIsIl9kdiIsIl9jb250ZXh0IiwiaW5pdFByb3h5IiwiaXNIaWdoIiwicmVhZFNpemUiLCJudW1Ub0FuZCIsImJlZ2luIiwiYnl0ZXNBdmFpbGFibGUiLCJ3b3JkIiwiYml0c0F2YWlsYWJsZSIsIndvcmtpbmdCeXRlcyIsImF2YWlsYWJsZUJ5dGVzIiwic2tpcEJ5dGVzIiwibG9hZFdvcmQiLCJiaXRzIiwidmFsdSIsInJlYWRCaXRzIiwibGVhZGluZ1plcm9Db3VudCIsInNraXBMWiIsInNraXBCaXRzIiwiY2x6IiwicmVhZFVFRyIsImxhc3RTY2FsZSIsIm5leHRTY2FsZSIsImRlbHRhU2NhbGUiLCJyZWFkRUciLCJmcmFtZUNyb3BMZWZ0T2Zmc2V0IiwiZnJhbWVDcm9wUmlnaHRPZmZzZXQiLCJmcmFtZUNyb3BUb3BPZmZzZXQiLCJmcmFtZUNyb3BCb3R0b21PZmZzZXQiLCJjb2RlY1dpZHRoIiwiY29kZWNIZWlnaHQiLCJudW1SZWZGcmFtZXNJblBpY09yZGVyQ250Q3ljbGUiLCJwaWNXaWR0aEluTWJzTWludXMxIiwicGljSGVpZ2h0SW5NYXBVbml0c01pbnVzMSIsImZyYW1lTWJzT25seUZsYWciLCJzY2FsaW5nTGlzdENvdW50IiwicmVhZFVCeXRlIiwicmVhZEJvb2xlYW4iLCJza2lwRUciLCJza2lwVUVHIiwic2tpcFNjYWxpbmdMaXN0IiwiY2hyb21hRm9ybWF0SWRjIiwiY2hyb21hRm9ybWF0cyIsImJpdERlcHRoTHVtYSIsInByb2ZpbGVJZGNzIiwiaW5jbHVkZXMiLCJwaWNPcmRlckNudFR5cGUiLCJmcHNGaXhlZCIsImFzcGVjdFJhdGlvSWRjIiwibnVtVW5pdEluVGljayIsImNyb3BVbml0WCIsImNyb3BVbml0WSIsInN1YldjIiwic3ViSGMiLCJwaXhlbFNjYWxlIiwiY2VpbCIsIm5hdGl2ZVNsaWNlIiwiT2JzZXJ2ZXIiLCJmbklkIiwiX2xpc3RlbmVySWRNYXAiLCJfbGlzdGVuZXJzIiwiX2dldExpc3RlbmVyc0J5S2V5IiwiX2dldExpc3RlbmVyQnlJZCIsIl90aGlzIiwib25jZUZ1bmMiLCJ1aW50OGFycmF5Iiwib3V0IiwiaW5wdXQiLCJfY2hlY2tDb250aW51YXRpb24iLCJ1Y3M0IiwiY2hlY2tMZW5ndGgiLCJhcnJheSIsImRlYm91bmNlIiwiZnVuYyIsImltbWVkaWF0ZSIsImRlYm91bmNlZCIsImNsZWFyVGltZW91dCIsImNhbGxOb3ciLCJjYWNoZVdyYXBwZXIiLCJyZWR1Y2UiLCJwcmUiLCJjdXIiLCJsZSIsImJ1ZiIsInNldEludDE2IiwiSW50MTZBcnJheSIsImRldmljZSIsImlzUGMiLCJpc1RhYmxldCIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJyZWciLCJpZSIsImZpcmZveCIsImNocm9tZSIsIm9wZXJhIiwic2FmYXJpIiwiaXNXaW5kb3dzUGhvbmUiLCJpc1N5bWJpYW4iLCJpc0ZpcmVGb3giLCJpc1Bob25lIiwidGVtcCIsInBhZFN0YXJ0NEhleCIsImhleE51bSIsImhleFN0ciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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SyxDQUFMO0FBQ0lBLHlDQUFhLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBYjtBQUNBO0FBQ0osNkJBQUssQ0FBTDtBQUNJQSx5Q0FBYSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQWI7QUFDQTtBQUNKLDZCQUFLLENBQUw7QUFDSUEseUNBQWEsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFiO0FBQ0E7QUFDSiw2QkFBSyxDQUFMO0FBQ0lBLHlDQUFhLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBYjtBQUNBO0FBQ0osNkJBQUssQ0FBTDtBQUNJQSx5Q0FBYSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQWI7QUFDQTtBQUNKLDZCQUFLLENBQUw7QUFDSUEseUNBQWEsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFiO0FBQ0E7QUFDSiw2QkFBSyxDQUFMO0FBQ0lBLHlDQUFhLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBYjtBQUNBO0FBQ0osNkJBQUssQ0FBTDtBQUNJQSx5Q0FBYSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQWI7QUFDQTtBQUNKLDZCQUFLLEVBQUw7QUFDSUEseUNBQWEsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFiO0FBQ0E7QUFDSiw2QkFBSyxFQUFMO0FBQ0lBLHlDQUFhLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBYjtBQUNBO0FBQ0osNkJBQUssRUFBTDtBQUNJQSx5Q0FBYSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQWI7QUFDQTtBQUNKLDZCQUFLLEVBQUw7QUFDSUEseUNBQWEsQ0FBQyxHQUFELEVBQU0sRUFBTixDQUFiO0FBQ0E7QUFDSiw2QkFBSyxFQUFMO0FBQ0lBLHlDQUFhLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBYjtBQUNBO0FBQ0osNkJBQUssRUFBTDtBQUNJQSx5Q0FBYSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQWI7QUFDQTtBQUNKLDZCQUFLLEVBQUw7QUFDSUEseUNBQWEsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFiO0FBQ0E7QUFDSiw2QkFBSyxHQUFMO0FBQ0E7QUFDSUEsNkNBQWEsQ0FDVHdt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UyxFQURTLEVBRWpCQSxTQUFTLEVBQVYsR0FBZ0IsSUFGRSxFQUdqQkEsU0FBUyxDQUFWLEdBQWUsSUFIRyxFQUlsQkEsUUFBUSxJQUpVLENBQWYsQ0FBUDtBQU1IOzs7a0NBQ2lCb0IsRyxFQUFLO0FBQ25CLGdCQUFJcTdCLE9BQU8sRUFBWDtBQUNBLHFCQUFTQyxZQUFULENBQXVCQyxNQUF2QixFQUErQjtBQUMzQixvQkFBSUMsU0FBU0QsT0FBT3oxQixRQUFQLENBQWdCLEVBQWhCLENBQWI7QUFDQSx1QkFBTzAxQixPQUFPeFIsUUFBUCxDQUFnQixDQUFoQixFQUFtQixHQUFuQixDQUFQO0FBQ0g7QUFDRGhxQixnQkFBSWdELE9BQUosQ0FBWSxlQUFPO0FBQ2ZxNEIsd0JBQVFDLGFBQWF2USxHQUFiLENBQVI7QUFDSCxhQUZEO0FBR0EsbUJBQU9wVixTQUFTMGxCLElBQVQsRUFBZSxFQUFmLENBQVA7QUFDSDs7Ozs7O2tCQUdVeGlCLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENmLHNEIiwiZmlsZSI6ImluZGV4LmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInhncGxheWVyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInhncGxheWVyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInhncGxheWVyLWZsdlwiXSA9IGZhY3RvcnkocmVxdWlyZShcInhncGxheWVyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ4Z3BsYXllci1mbHZcIl0gPSBmYWN0b3J5KHJvb3RbXCJ4Z3BsYXllclwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfeGdwbGF5ZXJfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoUmVzdWx0Q29uc3RydWN0b3IpIHtcbiAgdmFyIHRvdGFsTGVuZ3RoID0gMDtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJyYXlzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFycmF5c1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBhcnJheXNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICB2YXIgYXJyID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgIHRvdGFsTGVuZ3RoICs9IGFyci5sZW5ndGg7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciByZXN1bHQgPSBuZXcgUmVzdWx0Q29uc3RydWN0b3IodG90YWxMZW5ndGgpO1xuICB2YXIgb2Zmc2V0ID0gMDtcbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IGFycmF5c1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgdmFyIF9hcnIgPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgIHJlc3VsdC5zZXQoX2Fyciwgb2Zmc2V0KTtcbiAgICAgIG9mZnNldCArPSBfYXJyLmxlbmd0aDtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuKSB7XG4gICAgICAgIF9pdGVyYXRvcjIucmV0dXJuKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjIpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jb25jYXQgPSByZXF1aXJlKCcuL2NvbmNhdCcpO1xuXG52YXIgX2NvbmNhdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb25jYXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jb25jYXQyLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc1ZhbHVlICAgICAgICAgPSByZXF1aXJlKFwidHlwZS92YWx1ZS9pc1wiKVxuICAsIGlzUGxhaW5GdW5jdGlvbiA9IHJlcXVpcmUoXCJ0eXBlL3BsYWluLWZ1bmN0aW9uL2lzXCIpXG4gICwgYXNzaWduICAgICAgICAgID0gcmVxdWlyZShcImVzNS1leHQvb2JqZWN0L2Fzc2lnblwiKVxuICAsIG5vcm1hbGl6ZU9wdHMgICA9IHJlcXVpcmUoXCJlczUtZXh0L29iamVjdC9ub3JtYWxpemUtb3B0aW9uc1wiKVxuICAsIGNvbnRhaW5zICAgICAgICA9IHJlcXVpcmUoXCJlczUtZXh0L3N0cmluZy8jL2NvbnRhaW5zXCIpO1xuXG52YXIgZCA9IChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkc2NyLCB2YWx1ZS8qLCBvcHRpb25zKi8pIHtcblx0dmFyIGMsIGUsIHcsIG9wdGlvbnMsIGRlc2M7XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMiB8fCB0eXBlb2YgZHNjciAhPT0gXCJzdHJpbmdcIikge1xuXHRcdG9wdGlvbnMgPSB2YWx1ZTtcblx0XHR2YWx1ZSA9IGRzY3I7XG5cdFx0ZHNjciA9IG51bGw7XG5cdH0gZWxzZSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1syXTtcblx0fVxuXHRpZiAoaXNWYWx1ZShkc2NyKSkge1xuXHRcdGMgPSBjb250YWlucy5jYWxsKGRzY3IsIFwiY1wiKTtcblx0XHRlID0gY29udGFpbnMuY2FsbChkc2NyLCBcImVcIik7XG5cdFx0dyA9IGNvbnRhaW5zLmNhbGwoZHNjciwgXCJ3XCIpO1xuXHR9IGVsc2Uge1xuXHRcdGMgPSB3ID0gdHJ1ZTtcblx0XHRlID0gZmFsc2U7XG5cdH1cblxuXHRkZXNjID0geyB2YWx1ZTogdmFsdWUsIGNvbmZpZ3VyYWJsZTogYywgZW51bWVyYWJsZTogZSwgd3JpdGFibGU6IHcgfTtcblx0cmV0dXJuICFvcHRpb25zID8gZGVzYyA6IGFzc2lnbihub3JtYWxpemVPcHRzKG9wdGlvbnMpLCBkZXNjKTtcbn0pO1xuXG5kLmdzID0gZnVuY3Rpb24gKGRzY3IsIGdldCwgc2V0LyosIG9wdGlvbnMqLykge1xuXHR2YXIgYywgZSwgb3B0aW9ucywgZGVzYztcblx0aWYgKHR5cGVvZiBkc2NyICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0b3B0aW9ucyA9IHNldDtcblx0XHRzZXQgPSBnZXQ7XG5cdFx0Z2V0ID0gZHNjcjtcblx0XHRkc2NyID0gbnVsbDtcblx0fSBlbHNlIHtcblx0XHRvcHRpb25zID0gYXJndW1lbnRzWzNdO1xuXHR9XG5cdGlmICghaXNWYWx1ZShnZXQpKSB7XG5cdFx0Z2V0ID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKCFpc1BsYWluRnVuY3Rpb24oZ2V0KSkge1xuXHRcdG9wdGlvbnMgPSBnZXQ7XG5cdFx0Z2V0ID0gc2V0ID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKCFpc1ZhbHVlKHNldCkpIHtcblx0XHRzZXQgPSB1bmRlZmluZWQ7XG5cdH0gZWxzZSBpZiAoIWlzUGxhaW5GdW5jdGlvbihzZXQpKSB7XG5cdFx0b3B0aW9ucyA9IHNldDtcblx0XHRzZXQgPSB1bmRlZmluZWQ7XG5cdH1cblx0aWYgKGlzVmFsdWUoZHNjcikpIHtcblx0XHRjID0gY29udGFpbnMuY2FsbChkc2NyLCBcImNcIik7XG5cdFx0ZSA9IGNvbnRhaW5zLmNhbGwoZHNjciwgXCJlXCIpO1xuXHR9IGVsc2Uge1xuXHRcdGMgPSB0cnVlO1xuXHRcdGUgPSBmYWxzZTtcblx0fVxuXG5cdGRlc2MgPSB7IGdldDogZ2V0LCBzZXQ6IHNldCwgY29uZmlndXJhYmxlOiBjLCBlbnVtZXJhYmxlOiBlIH07XG5cdHJldHVybiAhb3B0aW9ucyA/IGRlc2MgOiBhc3NpZ24obm9ybWFsaXplT3B0cyhvcHRpb25zKSwgZGVzYyk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eS1mdW5jdGlvblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7fTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2lzLWltcGxlbWVudGVkXCIpKCkgPyBPYmplY3QuYXNzaWduIDogcmVxdWlyZShcIi4vc2hpbVwiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ24sIG9iajtcblx0aWYgKHR5cGVvZiBhc3NpZ24gIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGZhbHNlO1xuXHRvYmogPSB7IGZvbzogXCJyYXpcIiB9O1xuXHRhc3NpZ24ob2JqLCB7IGJhcjogXCJkd2FcIiB9LCB7IHRyenk6IFwidHJ6eVwiIH0pO1xuXHRyZXR1cm4gb2JqLmZvbyArIG9iai5iYXIgKyBvYmoudHJ6eSA9PT0gXCJyYXpkd2F0cnp5XCI7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBrZXlzICA9IHJlcXVpcmUoXCIuLi9rZXlzXCIpXG4gICwgdmFsdWUgPSByZXF1aXJlKFwiLi4vdmFsaWQtdmFsdWVcIilcbiAgLCBtYXggICA9IE1hdGgubWF4O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkZXN0LCBzcmMvKiwg4oCmc3JjbiovKSB7XG5cdHZhciBlcnJvciwgaSwgbGVuZ3RoID0gbWF4KGFyZ3VtZW50cy5sZW5ndGgsIDIpLCBhc3NpZ247XG5cdGRlc3QgPSBPYmplY3QodmFsdWUoZGVzdCkpO1xuXHRhc3NpZ24gPSBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGRlc3Rba2V5XSA9IHNyY1trZXldO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZTtcblx0XHR9XG5cdH07XG5cdGZvciAoaSA9IDE7IGkgPCBsZW5ndGg7ICsraSkge1xuXHRcdHNyYyA9IGFyZ3VtZW50c1tpXTtcblx0XHRrZXlzKHNyYykuZm9yRWFjaChhc3NpZ24pO1xuXHR9XG5cdGlmIChlcnJvciAhPT0gdW5kZWZpbmVkKSB0aHJvdyBlcnJvcjtcblx0cmV0dXJuIGRlc3Q7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdW5kZWZpbmVkID0gcmVxdWlyZShcIi4uL2Z1bmN0aW9uL25vb3BcIikoKTsgLy8gU3VwcG9ydCBFUzMgZW5naW5lc1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbCAhPT0gX3VuZGVmaW5lZCAmJiB2YWwgIT09IG51bGw7IH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9pcy1pbXBsZW1lbnRlZFwiKSgpID8gT2JqZWN0LmtleXMgOiByZXF1aXJlKFwiLi9zaGltXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHR0cnkge1xuXHRcdE9iamVjdC5rZXlzKFwicHJpbWl0aXZlXCIpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc1ZhbHVlID0gcmVxdWlyZShcIi4uL2lzLXZhbHVlXCIpO1xuXG52YXIga2V5cyA9IE9iamVjdC5rZXlzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QpIHsgcmV0dXJuIGtleXMoaXNWYWx1ZShvYmplY3QpID8gT2JqZWN0KG9iamVjdCkgOiBvYmplY3QpOyB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc1ZhbHVlID0gcmVxdWlyZShcIi4vaXMtdmFsdWVcIik7XG5cbnZhciBmb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2gsIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG5cbnZhciBwcm9jZXNzID0gZnVuY3Rpb24gKHNyYywgb2JqKSB7XG5cdHZhciBrZXk7XG5cdGZvciAoa2V5IGluIHNyYykgb2JqW2tleV0gPSBzcmNba2V5XTtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0czEvKiwg4oCmb3B0aW9ucyovKSB7XG5cdHZhciByZXN1bHQgPSBjcmVhdGUobnVsbCk7XG5cdGZvckVhY2guY2FsbChhcmd1bWVudHMsIGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdFx0aWYgKCFpc1ZhbHVlKG9wdGlvbnMpKSByZXR1cm47XG5cdFx0cHJvY2VzcyhPYmplY3Qob3B0aW9ucyksIHJlc3VsdCk7XG5cdH0pO1xuXHRyZXR1cm4gcmVzdWx0O1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbikge1xuXHRpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoZm4gKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcblx0cmV0dXJuIGZuO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNWYWx1ZSA9IHJlcXVpcmUoXCIuL2lzLXZhbHVlXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRpZiAoIWlzVmFsdWUodmFsdWUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSBudWxsIG9yIHVuZGVmaW5lZFwiKTtcblx0cmV0dXJuIHZhbHVlO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2lzLWltcGxlbWVudGVkXCIpKCkgPyBTdHJpbmcucHJvdG90eXBlLmNvbnRhaW5zIDogcmVxdWlyZShcIi4vc2hpbVwiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3RyID0gXCJyYXpkd2F0cnp5XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRpZiAodHlwZW9mIHN0ci5jb250YWlucyAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiBzdHIuY29udGFpbnMoXCJkd2FcIikgPT09IHRydWUgJiYgc3RyLmNvbnRhaW5zKFwiZm9vXCIpID09PSBmYWxzZTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGluZGV4T2YgPSBTdHJpbmcucHJvdG90eXBlLmluZGV4T2Y7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlYXJjaFN0cmluZy8qLCBwb3NpdGlvbiovKSB7XG5cdHJldHVybiBpbmRleE9mLmNhbGwodGhpcywgc2VhcmNoU3RyaW5nLCBhcmd1bWVudHNbMV0pID4gLTE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZCAgICAgICAgPSByZXF1aXJlKCdkJylcbiAgLCBjYWxsYWJsZSA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L3ZhbGlkLWNhbGxhYmxlJylcblxuICAsIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LCBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGxcbiAgLCBjcmVhdGUgPSBPYmplY3QuY3JlYXRlLCBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eVxuICAsIGRlZmluZVByb3BlcnRpZXMgPSBPYmplY3QuZGVmaW5lUHJvcGVydGllc1xuICAsIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAsIGRlc2NyaXB0b3IgPSB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlIH1cblxuICAsIG9uLCBvbmNlLCBvZmYsIGVtaXQsIG1ldGhvZHMsIGRlc2NyaXB0b3JzLCBiYXNlO1xuXG5vbiA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xuXHR2YXIgZGF0YTtcblxuXHRjYWxsYWJsZShsaXN0ZW5lcik7XG5cblx0aWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsICdfX2VlX18nKSkge1xuXHRcdGRhdGEgPSBkZXNjcmlwdG9yLnZhbHVlID0gY3JlYXRlKG51bGwpO1xuXHRcdGRlZmluZVByb3BlcnR5KHRoaXMsICdfX2VlX18nLCBkZXNjcmlwdG9yKTtcblx0XHRkZXNjcmlwdG9yLnZhbHVlID0gbnVsbDtcblx0fSBlbHNlIHtcblx0XHRkYXRhID0gdGhpcy5fX2VlX187XG5cdH1cblx0aWYgKCFkYXRhW3R5cGVdKSBkYXRhW3R5cGVdID0gbGlzdGVuZXI7XG5cdGVsc2UgaWYgKHR5cGVvZiBkYXRhW3R5cGVdID09PSAnb2JqZWN0JykgZGF0YVt0eXBlXS5wdXNoKGxpc3RlbmVyKTtcblx0ZWxzZSBkYXRhW3R5cGVdID0gW2RhdGFbdHlwZV0sIGxpc3RlbmVyXTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbm9uY2UgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcblx0dmFyIG9uY2UsIHNlbGY7XG5cblx0Y2FsbGFibGUobGlzdGVuZXIpO1xuXHRzZWxmID0gdGhpcztcblx0b24uY2FsbCh0aGlzLCB0eXBlLCBvbmNlID0gZnVuY3Rpb24gKCkge1xuXHRcdG9mZi5jYWxsKHNlbGYsIHR5cGUsIG9uY2UpO1xuXHRcdGFwcGx5LmNhbGwobGlzdGVuZXIsIHRoaXMsIGFyZ3VtZW50cyk7XG5cdH0pO1xuXG5cdG9uY2UuX19lZU9uY2VMaXN0ZW5lcl9fID0gbGlzdGVuZXI7XG5cdHJldHVybiB0aGlzO1xufTtcblxub2ZmID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XG5cdHZhciBkYXRhLCBsaXN0ZW5lcnMsIGNhbmRpZGF0ZSwgaTtcblxuXHRjYWxsYWJsZShsaXN0ZW5lcik7XG5cblx0aWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsICdfX2VlX18nKSkgcmV0dXJuIHRoaXM7XG5cdGRhdGEgPSB0aGlzLl9fZWVfXztcblx0aWYgKCFkYXRhW3R5cGVdKSByZXR1cm4gdGhpcztcblx0bGlzdGVuZXJzID0gZGF0YVt0eXBlXTtcblxuXHRpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ29iamVjdCcpIHtcblx0XHRmb3IgKGkgPSAwOyAoY2FuZGlkYXRlID0gbGlzdGVuZXJzW2ldKTsgKytpKSB7XG5cdFx0XHRpZiAoKGNhbmRpZGF0ZSA9PT0gbGlzdGVuZXIpIHx8XG5cdFx0XHRcdFx0KGNhbmRpZGF0ZS5fX2VlT25jZUxpc3RlbmVyX18gPT09IGxpc3RlbmVyKSkge1xuXHRcdFx0XHRpZiAobGlzdGVuZXJzLmxlbmd0aCA9PT0gMikgZGF0YVt0eXBlXSA9IGxpc3RlbmVyc1tpID8gMCA6IDFdO1xuXHRcdFx0XHRlbHNlIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGlmICgobGlzdGVuZXJzID09PSBsaXN0ZW5lcikgfHxcblx0XHRcdFx0KGxpc3RlbmVycy5fX2VlT25jZUxpc3RlbmVyX18gPT09IGxpc3RlbmVyKSkge1xuXHRcdFx0ZGVsZXRlIGRhdGFbdHlwZV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5lbWl0ID0gZnVuY3Rpb24gKHR5cGUpIHtcblx0dmFyIGksIGwsIGxpc3RlbmVyLCBsaXN0ZW5lcnMsIGFyZ3M7XG5cblx0aWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsICdfX2VlX18nKSkgcmV0dXJuO1xuXHRsaXN0ZW5lcnMgPSB0aGlzLl9fZWVfX1t0eXBlXTtcblx0aWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcblxuXHRpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ29iamVjdCcpIHtcblx0XHRsID0gYXJndW1lbnRzLmxlbmd0aDtcblx0XHRhcmdzID0gbmV3IEFycmF5KGwgLSAxKTtcblx0XHRmb3IgKGkgPSAxOyBpIDwgbDsgKytpKSBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcblxuXHRcdGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgpO1xuXHRcdGZvciAoaSA9IDA7IChsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXSk7ICsraSkge1xuXHRcdFx0YXBwbHkuY2FsbChsaXN0ZW5lciwgdGhpcywgYXJncyk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdGNhc2UgMTpcblx0XHRcdGNhbGwuY2FsbChsaXN0ZW5lcnMsIHRoaXMpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0Y2FsbC5jYWxsKGxpc3RlbmVycywgdGhpcywgYXJndW1lbnRzWzFdKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdGNhbGwuY2FsbChsaXN0ZW5lcnMsIHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRsID0gYXJndW1lbnRzLmxlbmd0aDtcblx0XHRcdGFyZ3MgPSBuZXcgQXJyYXkobCAtIDEpO1xuXHRcdFx0Zm9yIChpID0gMTsgaSA8IGw7ICsraSkge1xuXHRcdFx0XHRhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdH1cblx0XHRcdGFwcGx5LmNhbGwobGlzdGVuZXJzLCB0aGlzLCBhcmdzKTtcblx0XHR9XG5cdH1cbn07XG5cbm1ldGhvZHMgPSB7XG5cdG9uOiBvbixcblx0b25jZTogb25jZSxcblx0b2ZmOiBvZmYsXG5cdGVtaXQ6IGVtaXRcbn07XG5cbmRlc2NyaXB0b3JzID0ge1xuXHRvbjogZChvbiksXG5cdG9uY2U6IGQob25jZSksXG5cdG9mZjogZChvZmYpLFxuXHRlbWl0OiBkKGVtaXQpXG59O1xuXG5iYXNlID0gZGVmaW5lUHJvcGVydGllcyh7fSwgZGVzY3JpcHRvcnMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbiAobykge1xuXHRyZXR1cm4gKG8gPT0gbnVsbCkgPyBjcmVhdGUoYmFzZSkgOiBkZWZpbmVQcm9wZXJ0aWVzKE9iamVjdChvKSwgZGVzY3JpcHRvcnMpO1xufTtcbmV4cG9ydHMubWV0aG9kcyA9IG1ldGhvZHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZShcIi4uL3Byb3RvdHlwZS9pc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG5cblx0aWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBcImxlbmd0aFwiKSkgcmV0dXJuIGZhbHNlO1xuXG5cdHRyeSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZS5sZW5ndGggIT09IFwibnVtYmVyXCIpIHJldHVybiBmYWxzZTtcblx0XHRpZiAodHlwZW9mIHZhbHVlLmNhbGwgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGZhbHNlO1xuXHRcdGlmICh0eXBlb2YgdmFsdWUuYXBwbHkgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGZhbHNlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiAhaXNQcm90b3R5cGUodmFsdWUpO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNWYWx1ZSA9IHJlcXVpcmUoXCIuLi92YWx1ZS9pc1wiKTtcblxuLy8gcHJldHRpZXItaWdub3JlXG52YXIgcG9zc2libGVUeXBlcyA9IHsgXCJvYmplY3RcIjogdHJ1ZSwgXCJmdW5jdGlvblwiOiB0cnVlLCBcInVuZGVmaW5lZFwiOiB0cnVlIC8qIGRvY3VtZW50LmFsbCAqLyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRpZiAoIWlzVmFsdWUodmFsdWUpKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHBvc3NpYmxlVHlwZXMsIHR5cGVvZiB2YWx1ZSk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZShcIi4uL2Z1bmN0aW9uL2lzXCIpO1xuXG52YXIgY2xhc3NSZSA9IC9eXFxzKmNsYXNzW1xcc3svfV0vLCBmdW5jdGlvblRvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRpZiAoIWlzRnVuY3Rpb24odmFsdWUpKSByZXR1cm4gZmFsc2U7XG5cdGlmIChjbGFzc1JlLnRlc3QoZnVuY3Rpb25Ub1N0cmluZy5jYWxsKHZhbHVlKSkpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIHRydWU7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoXCIuLi9vYmplY3QvaXNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdGlmICghaXNPYmplY3QodmFsdWUpKSByZXR1cm4gZmFsc2U7XG5cdHRyeSB7XG5cdFx0aWYgKCF2YWx1ZS5jb25zdHJ1Y3RvcikgcmV0dXJuIGZhbHNlO1xuXHRcdHJldHVybiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPT09IHZhbHVlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBFUzMgc2FmZVxudmFyIF91bmRlZmluZWQgPSB2b2lkIDA7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZSAhPT0gX3VuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbDsgfTtcbiIsIi8qKlxuICogQGF1dGhvciBmdXl1aGFvXG4gKi9cbmltcG9ydCBNYWluUGFyc2VyIGZyb20gJy4vcGFyc2UvTWFpblBhcnNlcidcbmltcG9ydCBNU0UgZnJvbSAnLi9wYXJzZS9NU0UnXG5pbXBvcnQgVm9kVGFzayBmcm9tICcuL3Rhc2tzL1ZvZFRhc2snXG5pbXBvcnQgZ2V0RGVmYXVsdENvbmYgZnJvbSAnLi9jb25zdGFudHMvY29uZmlnJ1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsdiB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zLCBwbGF5ZXIpIHtcbiAgICB0aGlzLl9wbGF5ZXIgPSBwbGF5ZXJcbiAgICB0aGlzLl9vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZ2V0RGVmYXVsdENvbmYoKSwgb3B0aW9ucylcbiAgICAvLyDnnJ/mraPnmoRmbHbmkq3mlL7lmahcbiAgICB0aGlzLmZsdlBsYXllciA9IG5ldyBNYWluUGFyc2VyKHRoaXMuX29wdGlvbnMsIHBsYXllcilcbiAgICB0aGlzLm1zZSA9IG5ldyBNU0UocGxheWVyLnZpZGVvKVxuICAgIHRoaXMuaXNTZWVraW5nID0gZmFsc2VcbiAgICB0aGlzLmlzRGF0YUxvYWRpbmcgPSBmYWxzZVxuICAgIHRoaXMudGVtcEN1cnJlbnRUaW1lID0gMFxuICAgIHRoaXMudGVtcEZsdlBsYXllciA9IG51bGxcbiAgICB0aGlzLmlzQ2hhbmdpbmdTcmMgPSBmYWxzZVxuICAgIHRoaXMuaW5pdFBsYXllckV2ZW50cyhwbGF5ZXIsIHRoaXMuX29wdGlvbnMpXG4gICAgdGhpcy5pbml0Rmx2UGxheWVyRXZlbnRzKHRoaXMuZmx2UGxheWVyLCB0aGlzLm1zZSlcbiAgICB0aGlzLmluaXRNc2VFdmVudHModGhpcy5tc2UsIHRoaXMuZmx2UGxheWVyKVxuICB9XG5cbiAgbG9hZCAoKSB7XG4gICAgdGhpcy5mbHZQbGF5ZXIuc3RhcnRMb2FkRGF0YSgpXG4gIH1cblxuICBpbml0UGxheWVyRXZlbnRzIChwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IG1zZSB9ID0gdGhpc1xuICAgIHBsYXllci5tc2UgPSBtc2VcbiAgICB0aGlzLmhhbmRsZVNlZWtpbmcgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0NoYW5naW5nU3JjKSB7XG4gICAgICAgIHRoaXMuaXNDaGFuZ2luZ1NyYyA9IGZhbHNlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3QgeyBidWZmZXJlZCwgY3VycmVudFRpbWUgfSA9IHBsYXllclxuICAgICAgbGV0IGlzQnVmZmVyZWQgPSBmYWxzZVxuICAgICAgaWYgKGJ1ZmZlcmVkLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYnVmZmVyZWQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBpZiAoY3VycmVudFRpbWUgPiBidWZmZXJlZC5zdGFydChpKSAmJiBjdXJyZW50VGltZSA8IGJ1ZmZlcmVkLmVuZChpKSkge1xuICAgICAgICAgICAgaXNCdWZmZXJlZCA9IHRydWVcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNCdWZmZXJlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIFZvZFRhc2suY2xlYXIoKVxuICAgICAgaWYgKCF0aGlzLmlzU2Vla2FibGUpIHtcbiAgICAgICAgdGhpcy5fcGxheWVyLmN1cnJlbnRUaW1lID0gdGhpcy50ZW1wQ3VycmVudFRpbWVcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLmZsdlBsYXllci5zZWVrKHBsYXllci5jdXJyZW50VGltZSlcbiAgICAgIHRoaXMuaXNTZWVraW5nID0gdHJ1ZVxuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMuaXNMaXZlKSB7XG4gICAgICBwbGF5ZXIub24oJ3NlZWtpbmcnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlU2Vla2luZygpXG4gICAgICB9KVxuICAgIH1cbiAgICB0aGlzLmhhbmRsZVRpbWVVcGRhdGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnRlbXBDdXJyZW50VGltZSA9IHBsYXllci5jdXJyZW50VGltZVxuICAgICAgaWYgKCF0aGlzLmlzU2Vla2luZyAmJiB0aGlzLmZsdlBsYXllci5pc01lZGlhSW5mb1JlYWR5ICYmICF0aGlzLnRlbXBGbHZQbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0NoZWNrZXIocGxheWVyKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuaXNMaXZlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdGhpcy5pc0VuZGVkKHBsYXllciwgdGhpcy5mbHZQbGF5ZXIpXG4gICAgfVxuICAgIHBsYXllci5vbigndGltZXVwZGF0ZScsICgpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlVGltZVVwZGF0ZSgpXG4gICAgfSlcbiAgICBwbGF5ZXIuX3JlcGxheSA9ICgpID0+IHtcbiAgICAgIHBsYXllci5tc2UuZGVzdHJveSgpXG4gICAgICBWb2RUYXNrLmNsZWFyKClcbiAgICAgIGNvbnN0IF9tc2UgPSBuZXcgTVNFKHBsYXllci52aWRlbylcbiAgICAgIHRoaXMuZmx2UGxheWVyLnJlcGxheSgpXG5cbiAgICAgIG1zZS5vbignc291cmNlb3BlbicsICgpID0+IHtcbiAgICAgICAgdGhpcy5mbHZQbGF5ZXIuaXNTb3VyY2VPcGVuID0gdHJ1ZVxuICAgICAgICBtc2UuYXBwZW5kQnVmZmVyKHRoaXMuZmx2UGxheWVyLmZ0eXBfbW9vdi5idWZmZXIpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHBsYXllci5wbGF5KClcbiAgICAgICAgfSwgMClcbiAgICAgICAgbXNlLm9uKCd1cGRhdGVlbmQnLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3Qge3BlbmRpbmdGcmFnbWVudHMsIGhhc1BlbmRpbmdGcmFnbWVudHN9ID0gdGhpcy5mbHZQbGF5ZXJcbiAgICAgICAgICB0aGlzLmlzU2Vla2luZyA9IGZhbHNlXG4gICAgICAgICAgaWYgKGhhc1BlbmRpbmdGcmFnbWVudHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gcGVuZGluZ0ZyYWdtZW50cy5zaGlmdCgpXG4gICAgICAgICAgICBpZiAoIW1zZS5hcHBlbmRCdWZmZXIoZnJhZ21lbnQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgcGVuZGluZ0ZyYWdtZW50cy51bnNoaWZ0KGZyYWdtZW50KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGxheWVyLmVtaXQoJ2NhY2hldXBkYXRlJywgcGxheWVyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICBtc2Uub24oJ2Vycm9yJywgKGUpID0+IHtcbiAgICAgICAgcGxheWVyLmVtaXQoJ2Vycm9yJywgZSlcbiAgICAgIH0pXG5cbiAgICAgIHBsYXllci5tc2UgPSBtc2VcbiAgICAgIHBsYXllci52aWRlby5zcmMgPSB0aGlzLm1zZS51cmxcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcGxheWVyLnN3aXRjaFVSTCA9ICh1cmwpID0+IHtcbiAgICAgIHRoaXMuX29wdGlvbnMudXJsID0gdXJsXG4gICAgICAvLyB0aGlzLmZsdlBsYXllci51bmJpbmRFdmVudHMoKVxuICAgICAgaWYgKCFwbGF5ZXIuY29uZmlnLmlzTGl2ZSkge1xuICAgICAgICBWb2RUYXNrLmNsZWFyKClcbiAgICAgICAgY29uc3QgdGVtcEZsdlBsYXllciA9IHRoaXMudGVtcEZsdlBsYXllciA9IG5ldyBNYWluUGFyc2VyKHRoaXMuX29wdGlvbnMsIHBsYXllcilcblxuICAgICAgICB0ZW1wRmx2UGxheWVyLmlzU291cmNlT3BlbiA9IHRydWVcbiAgICAgICAgdGVtcEZsdlBsYXllci5pc1RlbXBQbGF5ZXIgPSB0cnVlXG4gICAgICAgIHRoaXMuaW5pdEZsdlBsYXllckV2ZW50cyh0ZW1wRmx2UGxheWVyLCBtc2UpXG4gICAgICAgIHRlbXBGbHZQbGF5ZXIuaGFuZGxlTWVkaWFGcmFnbWVudCA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzU2Vla2luZyA9IGZhbHNlXG4gICAgICAgICAgdGhpcy51bmJpbmRGbHZQbGF5ZXJFdmVudHModGhpcy5mbHZQbGF5ZXIpXG4gICAgICAgICAgdGhpcy5mbHZQbGF5ZXIuZGVzdHJveSgpXG4gICAgICAgICAgdGhpcy5mbHZQbGF5ZXIgPSB0ZW1wRmx2UGxheWVyXG4gICAgICAgICAgdGhpcy50ZW1wRmx2UGxheWVyID0gbnVsbFxuXG4gICAgICAgICAgbXNlLmFwcGVuZEJ1ZmZlcih0ZW1wRmx2UGxheWVyLmZ0eXBfbW9vdilcbiAgICAgICAgICB0ZW1wRmx2UGxheWVyLmhhbmRsZU1lZGlhRnJhZ21lbnQgPSAoZnJhZ21lbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtc2UuYXBwZW5kQnVmZmVyKGZyYWdtZW50LmRhdGEpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHRlbXBGbHZQbGF5ZXIuc3RhcnRMb2FkRGF0YSgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHVuYmluZEZsdlBsYXllckV2ZW50cyAoZmx2UGxheWVyKSB7XG4gICAgZmx2UGxheWVyLmhhbmRsZVNlZWtFbmQgPSAoKSA9PiBudWxsXG4gICAgZmx2UGxheWVyLmhhbmRsZUVycm9yID0gKCkgPT4gbnVsbFxuICAgIGZsdlBsYXllci5oYW5kbGVNZWRpYUZyYWdtZW50ID0gKCkgPT4gbnVsbFxuICB9XG4gIGluaXRGbHZQbGF5ZXJFdmVudHMgKGZsdlBsYXllciwgbXNlKSB7XG4gICAgY29uc3QgaGFuZGxlRnR5cE1vb3YgPSAoZnR5cE1vb3YpID0+IHtcbiAgICAgIGlmIChmbHZQbGF5ZXIuaXNTb3VyY2VPcGVuICYmICF0aGlzLnRlbXBGbHZQbGF5ZXIpIHtcbiAgICAgICAgbXNlLmFwcGVuZEJ1ZmZlcihmdHlwTW9vdi5idWZmZXIpXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzQ2hhbmdpbmdTcmMgJiYgIXRoaXMuX29wdGlvbnMuaXNMaXZlKSB7XG4gICAgICAgIHRoaXMuaXNTZWVraW5nID0gdHJ1ZVxuICAgICAgICBmbHZQbGF5ZXIuc2Vlayh0aGlzLl9wbGF5ZXIuY3VycmVudFRpbWUpXG4gICAgICB9XG4gICAgfVxuICAgIGZsdlBsYXllci5vbmNlKCdyZWFkeScsIGhhbmRsZUZ0eXBNb292KVxuICAgIGZsdlBsYXllci5oYW5kbGVTZWVrRW5kID0gKCkgPT4ge1xuICAgICAgdGhpcy5pc1NlZWtpbmcgPSBmYWxzZVxuICAgIH1cbiAgICBmbHZQbGF5ZXIuaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdGhpcy5fcGxheWVyLmVtaXQoJ2Vycm9yJywgZSlcbiAgICB9XG4gICAgaWYgKCF0aGlzLnRlbXBGbHZQbGF5ZXIpIHtcbiAgICAgIGZsdlBsYXllci5oYW5kbGVNZWRpYUZyYWdtZW50ID0gKGZyYWdtZW50KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRlbXBGbHZQbGF5ZXIgPyBmYWxzZSA6IG1zZS5hcHBlbmRCdWZmZXIoZnJhZ21lbnQuZGF0YSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbml0TXNlRXZlbnRzIChtc2UpIHtcbiAgICBtc2Uub24oJ2Vycm9yJywgKGUpID0+IHtcbiAgICAgIHRoaXMuX3BsYXllci5lbWl0KCdlcnJvcicsIGUpXG4gICAgfSlcbiAgICBjb25zdCBvblNvdXJjZU9wZW4gPSAoKSA9PiB7XG4gICAgICB0aGlzLmZsdlBsYXllci5pc1NvdXJjZU9wZW4gPSB0cnVlXG4gICAgICBpZiAodGhpcy5mbHZQbGF5ZXIuZnR5cF9tb292ICE9PSBudWxsKSB7XG4gICAgICAgIG1zZS5hcHBlbmRCdWZmZXIodGhpcy5mbHZQbGF5ZXIuZnR5cF9tb292LmJ1ZmZlcilcbiAgICAgIH1cblxuICAgICAgbXNlLm9uKCd1cGRhdGVlbmQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcGVuZGluZ0ZyYWdtZW50cywgaGFzUGVuZGluZ0ZyYWdtZW50cyB9ID0gdGhpcy5mbHZQbGF5ZXJcblxuICAgICAgICBpZiAoaGFzUGVuZGluZ0ZyYWdtZW50cykge1xuICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gcGVuZGluZ0ZyYWdtZW50cy5zaGlmdCgpXG4gICAgICAgICAgaWYgKCFtc2UuYXBwZW5kQnVmZmVyKGZyYWdtZW50LmRhdGEpKSB7XG4gICAgICAgICAgICBwZW5kaW5nRnJhZ21lbnRzLnVuc2hpZnQoZnJhZ21lbnQpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllci5lbWl0KCdjYWNoZXVwZGF0ZScsIHRoaXMuX3BsYXllcilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIG1zZS5vbignc291cmNlb3BlbicsIG9uU291cmNlT3BlbilcbiAgfVxuXG4gIGxvYWREYXRhIChjdXJyZW50VGltZSkge1xuICAgIHJldHVybiB0aGlzLmZsdlBsYXllci5sb2FkU2VnbWVudHModHJ1ZSwgY3VycmVudFRpbWUsIHRoaXMuX29wdGlvbnMucHJlbG9hZFRpbWUpXG4gIH1cblxuICBwcm9ncmVzc0NoZWNrZXIgKHBsYXllcikge1xuICAgIGNvbnN0IHsgbWluQ2FjaGVkVGltZSwgcHJlbG9hZFRpbWUgfSA9IHRoaXMuX29wdGlvbnNcbiAgICBjb25zdCByYW5nZSA9IHBsYXllci5nZXRCdWZmZXJlZFJhbmdlKClcbiAgICBpZiAodGhpcy5mbHZQbGF5ZXIudmlkZW9EdXJhdGlvbiAtIHJhbmdlWzFdICogdGhpcy5mbHZQbGF5ZXIudmlkZW9UaW1lU2NhbGUgPCAwLjEgKiB0aGlzLmZsdlBsYXllci52aWRlb1RpbWVTY2FsZSkgeyByZXR1cm4gfVxuICAgIGlmIChyYW5nZVsxXSAtIHBsYXllci5jdXJyZW50VGltZSA8IG1pbkNhY2hlZFRpbWUgJiYgIXRoaXMuaXNEYXRhTG9hZGluZykge1xuICAgICAgdGhpcy5pc0RhdGFMb2FkaW5nID0gdHJ1ZVxuICAgICAgdGhpcy5mbHZQbGF5ZXIubG9hZFNlZ21lbnRzKHRydWUsIHBsYXllci5jdXJyZW50VGltZSwgcHJlbG9hZFRpbWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGF0YUxvYWRpbmcgPSBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgY2xlYXJQbGF5ZXJDYWNoZSAoKSB7XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLl9wbGF5ZXIuZ2V0QnVmZmVyZWRSYW5nZSgpXG4gICAgaWYgKHJhbmdlLmxlbmd0aCA9PT0gMikge1xuICAgICAgLy8gdGhpcy5tc2UucmVtb3ZlQnVmZmVyKHJhbmdlWzBdLCByYW5nZVsxXSlcbiAgICB9XG4gIH1cbiAgaXNFbmRlZCAocGxheWVyLCBmbHYpIHtcbiAgICBpZiAoZmx2LnZpZGVvRHVyYXRpb24gLSBwbGF5ZXIuY3VycmVudFRpbWUgKiBmbHYudmlkZW9UaW1lU2NhbGUgPCAyICogZmx2LnZpZGVvVGltZVNjYWxlKSB7XG4gICAgICBjb25zdCByYW5nZSA9IHBsYXllci5nZXRCdWZmZXJlZFJhbmdlKClcbiAgICAgIGlmIChwbGF5ZXIuY3VycmVudFRpbWUgLSByYW5nZVsxXSA8IDAuMSkge1xuICAgICAgICB0aGlzLm1zZS5lbmRPZlN0cmVhbSgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGRlc3Ryb3kgKCkge1xuICAgIFZvZFRhc2suY2xlYXIoKVxuICAgIHRoaXMuX29wdGlvbnMgPSB7fVxuICAgIHRoaXMubXNlID0gbnVsbFxuICAgIHRoaXMuaXNTZWVraW5nID0gZmFsc2VcbiAgICB0aGlzLmlzRGF0YUxvYWRpbmcgPSBmYWxzZVxuICAgIHRoaXMudGVtcEN1cnJlbnRUaW1lID0gMFxuICAgIHRoaXMudGVtcEZsdlBsYXllciA9IG51bGxcbiAgICB0aGlzLmlzQ2hhbmdpbmdTcmMgPSBmYWxzZVxuICAgIHRoaXMuaGFuZGxlVGltZVVwZGF0ZSA9ICgpID0+IHt9XG4gICAgdGhpcy5oYW5kbGVTZWVraW5nID0gKCkgPT4ge31cbiAgICB0aGlzLmZsdlBsYXllci5kZXN0cm95KClcbiAgICB0aGlzLl9wbGF5ZXIucGF1c2UoKVxuICB9XG4gIGdldCBpc1NlZWthYmxlICgpIHtcbiAgICByZXR1cm4gdGhpcy5mbHZQbGF5ZXIuaXNTZWVrYWJsZVxuICB9XG59XG4iLCJjb25zdCBnZXREZWZhdWx0Q29uZiA9ICgpID0+ICh7XG4gIHByZWxvYWRUaW1lOiAzMCxcbiAgbWluQ2FjaGVkVGltZTogNSxcbiAgYXV0b0NsZWFuU291cmNlQnVmZmVyOiB0cnVlLFxuICBhdXRvQ2xlYW5NYXhCYWNrVGltZTogMzAsXG4gIGlzTGl2ZTogZmFsc2UsXG4gIGNvcnM6IHRydWVcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGdldERlZmF1bHRDb25mXG4iLCJjb25zdCBmaWVsZHMgPSBbe1xuICBuYW1lOiAnZHVyYXRpb24nLFxuICB0eXBlOiBCb29sZWFuLFxuICBwYXJzZXIgKHRhcmdldCwgb3JpZ2luKSB7XG4gICAgdGFyZ2V0Lm1lZGlhSW5mby5kdXJhdGlvbiA9IG9yaWdpbi5kdXJhdGlvblxuICB9XG59LCB7XG4gIG5hbWU6ICdoYXNBdWRpbycsXG4gIHR5cGU6IEJvb2xlYW4sXG4gIHBhcnNlciAodGFyZ2V0LCBvcmlnaW4pIHtcbiAgICB0YXJnZXQubWVkaWFJbmZvLmhhc0F1ZGlvID0gb3JpZ2luLmhhc0F1ZGlvXG4gIH1cbn0sIHtcbiAgbmFtZTogJ2hhc1ZpZGVvJyxcbiAgdHlwZTogQm9vbGVhbixcbiAgcGFyc2VyICh0YXJnZXQsIG9yaWdpbikge1xuICAgIHRhcmdldC5tZWRpYUluZm8uaGFzVmlkZW8gPSBvcmlnaW4uaGFzVmlkZW9cbiAgfVxufSwge1xuICBuYW1lOiAnYXVkaW9kYXRhcmF0ZScsXG4gIHR5cGU6IE51bWJlcixcbiAgcGFyc2VyICh0YXJnZXQsIG9yaWdpbikge1xuICAgIHRhcmdldC5tZWRpYUluZm8uYXVkaW9EYXRhUmF0ZSA9IG9yaWdpbi5hdWRpb2RhdGFyYXRlXG4gIH1cbn0sIHtcbiAgbmFtZTogJ3ZpZGVvZGF0YXJhdGUnLFxuICB0eXBlOiBOdW1iZXIsXG4gIHBhcnNlciAodGFyZ2V0LCBvcmlnaW4pIHtcbiAgICB0YXJnZXQubWVkaWFJbmZvLnZpZGVvRGF0YVJhdGUgPSBvcmlnaW4udmlkZW9kYXRhcmF0ZVxuICB9XG59LCB7XG4gIG5hbWU6ICd3aWR0aCcsXG4gIHR5cGU6IE51bWJlcixcbiAgcGFyc2VyICh0YXJnZXQsIG9yaWdpbikge1xuICAgIHRhcmdldC5tZWRpYUluZm8ud2lkdGggPSBvcmlnaW4ud2lkdGhcbiAgfVxufSwge1xuICBuYW1lOiAnaGVpZ2h0JyxcbiAgdHlwZTogTnVtYmVyLFxuICBwYXJzZXIgKHRhcmdldCwgb3JpZ2luKSB7XG4gICAgdGFyZ2V0Lm1lZGlhSW5mby5oZWlnaHQgPSBvcmlnaW4uaGVpZ2h0XG4gIH1cbn0sIHtcbiAgbmFtZTogJ2R1cmF0aW9uJyxcbiAgdHlwZTogTnVtYmVyLFxuICBwYXJzZXIgKHRhcmdldCwgb3JpZ2luKSB7XG4gICAgaWYgKCF0YXJnZXQuc3RhdGUuZHVyYXRpb24pIHtcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gTWF0aC5mbG9vcihvcmlnaW4uZHVyYXRpb24gKiB0YXJnZXQuc3RhdGUudGltZVNjYWxlKVxuICAgICAgdGFyZ2V0LnN0YXRlLmR1cmF0aW9uID0gdGFyZ2V0Lm1lZGlhSW5mby5kdXJhdGlvbiA9IGR1cmF0aW9uXG4gICAgfVxuICB9LFxuICBvblR5cGVFcnIgKHRhcmdldCkge1xuICAgIHRhcmdldC5tZWRpYUluZm8uZHVyYXRpb24gPSAwXG4gIH1cbn0sIHtcbiAgbmFtZTogJ2ZyYW1lcmF0ZScsXG4gIHR5cGU6IE51bWJlcixcbiAgcGFyc2VyICh0YXJnZXQsIG9yaWdpbikge1xuICAgIGNvbnN0IGZwc051bSA9IE1hdGguZmxvb3Iob3JpZ2luLmZyYW1lcmF0ZSAqIDEwMDApXG4gICAgaWYgKGZwc051bSA+IDApIHtcbiAgICAgIGNvbnN0IGZwcyA9IGZwc051bSAvIDEwMDBcbiAgICAgIGNvbnN0IHsgcmVmZXJGcmFtZVJhdGUsIG1lZGlhSW5mbyB9ID0gdGFyZ2V0XG4gICAgICByZWZlckZyYW1lUmF0ZS5maXhlZCA9IHRydWVcbiAgICAgIHJlZmVyRnJhbWVSYXRlLmZwcyA9IGZwc1xuICAgICAgcmVmZXJGcmFtZVJhdGUuZnBzTnVtID0gZnBzTnVtXG4gICAgICByZWZlckZyYW1lUmF0ZS5mcHNEZW4gPSAxMDAwXG4gICAgICBtZWRpYUluZm8uZnBzID0gZnBzXG4gICAgfVxuICB9XG59LCB7XG4gIG5hbWU6ICdrZXlmcmFtZXMnLFxuICB0eXBlOiBPYmplY3QsXG4gIHBhcnNlciAodGFyZ2V0LCBvcmlnaW4pIHtcbiAgICBjb25zdCB7IGtleWZyYW1lcyB9ID0gb3JpZ2luXG4gICAgdGFyZ2V0Lm1lZGlhSW5mby5oYXNLZXlmcmFtZXMgPSAhIWtleWZyYW1lc1xuICAgIGlmIChrZXlmcmFtZXMpIHtcbiAgICAgIHRhcmdldC5tZWRpYUluZm8ua2V5ZnJhbWVzID0gdGhpcy5fcGFyc2VLZXlmcmFtZXMoa2V5ZnJhbWVzKVxuICAgIH1cbiAgICBvcmlnaW4ua2V5ZnJhbWVzID0gbnVsbFxuICB9LFxuICBvblR5cGVFcnIgKHRhcmdldCkge1xuICAgIHRhcmdldC5tZWRpYUluZm8uaGFzS2V5ZnJhbWVzID0gZmFsc2VcbiAgfVxufV1cbmV4cG9ydCBkZWZhdWx0IGZpZWxkc1xuIiwiZXhwb3J0IGNvbnN0IE1ldGFUeXBlcyA9IHtcbiAgTlVNQkVSOiAwLFxuICBCT09MRUFOOiAxLFxuICBTVFJJTkc6IDIsXG4gIE9CSkVDVDogMyxcbiAgTUlYX0FSUkFZOiA4LFxuICBPQkpFQ1RfRU5EOiA5LFxuICBTVFJJQ1RfQVJSQVk6IDEwLFxuICBEQVRFOiAxMSxcbiAgTE9ORV9TVFJJTkc6IDEyXG59XG5cbmV4cG9ydCBjb25zdCBFdmVudFR5cGVzID0ge1xuICBEQVRBX1JFQURZOiAnZGF0YV9yZWFkeScsXG4gIE1FVEFfREFUQV9SRUFEWTogJ21ldGFfZGF0YV9yZWFkeScsXG4gIFRSQUNLX01FVEFfUkVBRFk6ICd0cmFja19tZXRhX3JlYWR5JyxcbiAgTUVESUFfSU5GT19SRUFEWTogJ21lZGlhX2luZm9fcmVhZHknLFxuICBNRVRBX0VORF9QT1NJVElPTjogJ21ldGFfZW5kX3Bvc2l0aW9uJyxcbiAgRVJST1I6ICdlcnJvcidcbn1cblxuZXhwb3J0IGNvbnN0IHNvdW5kUmF0ZVR5cGVzID0gW1xuICA1NTAwLFxuICAxMTAwMCxcbiAgMjIwMDAsXG4gIDQ0MDAwXG5dXG5cbmV4cG9ydCBjb25zdCBBdWRpb09iamVjdFR5cGVzID0ge1xuICAwOiAnTnVsbCcsXG4gIDE6ICdBQUMgTWFpbicsXG4gIDI6ICdBQUMgTEMnLFxuICAzOiAnQUFDIFNTUihTY2FsYWJsZSBTYW1wbGUgUmF0ZSknLFxuICA0OiAnQUFDIExUUChMb25nIFRlcm0gUHJlZGljdGlvbiknLFxuICA1OiAnSEUtQUFDIC8gU0JSKFNwZWN0cmFsIEJhbmQgUmVwbGljYXRpb24pJyxcbiAgNjogJ0FBQyBTY2FsYWJsZSdcbn1cblxuZXhwb3J0IGNvbnN0IHNhbXBsaW5nRnJlcXVlbmN5VHlwZXMgPSBbXG4gIDk2MDAwLCA4ODIwMCxcbiAgNjQwMDAsIDQ4MDAwLFxuICA0NDEwMCwgMzIwMDAsXG4gIDI0MDAwLCAyMjA1MCxcbiAgMTYwMDAsIDEyMDAwLFxuICAxMTAyNSwgODAwMFxuXVxuXG5leHBvcnQgY29uc3QgYnJvd3NlclR5cGVzID0ge1xuICBJRTogJ2llJyxcbiAgRklSRV9GT1g6ICdmaXJlZm94JyxcbiAgQ0hST01FOiAnY2hyb21lJyxcbiAgT1BFUkE6ICdvcGVyYScsXG4gIFNBRkFSSTogJ3NhZmFyaSdcbn1cblxuZXhwb3J0IGNvbnN0IG1wM1ZlcnNpb25zID0ge1xuICBWMjU6IDAsXG4gIFJFU0VSVkVEOiAxLFxuICBWMjA6IDIsXG4gIFYxMDogM1xufVxuXG5leHBvcnQgY29uc3QgYXVkaW9TYW1wbGVSYXRlID0ge1xuICBWMTA6IFs0NDEwMCwgNDgwMDAsIDMyMDAwLCAwXSxcbiAgVjIwOiBbMjIwNTAsIDI0MDAwLCAxNjAwMCwgMF0sXG4gIFYyNTogWzExMDI1LCAxMjAwMCwgODAwMCwgMF1cbn1cblxuZXhwb3J0IGNvbnN0IG1wM0JpdFJhdGUgPSB7XG4gIExheWVyMTogWzAsIDMyLCA2NCwgOTYsIDEyOCwgMTYwLCAxOTIsIDIyNCwgMjU2LCAyODgsIDMyMCwgMzUyLCAzODQsIDQxNiwgNDQ4LCAtMV0sXG4gIExheWVyMjogWzAsIDMyLCA0OCwgNTYsIDY0LCA4MCwgOTYsIDExMiwgMTI4LCAxNjAsIDE5MiwgMjI0LCAyNTYsIDMyMCwgMzg0LCAtMV0sXG4gIExheWVyMzogWzAsIDMyLCA0MCwgNDgsIDU2LCA2NCwgODAsIDk2LCAxMTIsIDEyOCwgMTYwLCAxOTIsIDIyNCwgMjU2LCAzMjAsIC0xXVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICd4Z3BsYXllcidcbmltcG9ydCBWb2RUYXNrIGZyb20gJy4vdGFza3MvVm9kVGFzaydcbmltcG9ydCBGbHYgZnJvbSAnLi9GbHYnXG5cbmNsYXNzIEZsdlBsYXllciBleHRlbmRzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuX19mbHZfXyA9IG51bGxcbiAgICB0aGlzLmluaXQob3B0aW9ucylcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnc3JjJywge1xuICAgICAgc2V0OiAodmFsKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyAmJiB2YWwuc3RhcnRzV2l0aCgnYmxvYjonKSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29wdGlvbnMudXJsID0gdmFsXG4gICAgICAgIHRoaXMuX19mbHZfXy5kZXN0cm95KClcbiAgICAgICAgdGhpcy5fX2Zsdl9fID0gbmV3IEZsdih0aGlzLl9vcHRpb25zLCB0aGlzKVxuICAgICAgICB0aGlzLl9fZmx2X18ubG9hZCgpXG4gICAgICAgIC8vIGZsdiDkuZ/mmK92aWRlb+e7hOS7tuaSreaUviDlnLDlnYDmmK9tc2UudXJsXG4gICAgICAgIHRoaXMudmlkZW8uc3JjID0gdGhpcy5fX2Zsdl9fLm1zZS51cmxcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbGF5KClcbiAgICAgICAgfSwgMClcbiAgICAgIH0sXG4gICAgICBnZXQ6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnMudXJsXG4gICAgICB9LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgICBpZiAob3B0aW9ucy5hdXRvcGxheSkge1xuICAgICAgdGhpcy5zdGFydCgpXG4gICAgfVxuICB9XG5cbiAgaW5pdCAob3B0aW9ucykge1xuICAgIGNvbnN0IHBsYXllciA9IHRoaXNcbiAgICBjb25zdCB7IGlzTGl2ZSB9ID0gb3B0aW9uc1xuICAgIHBsYXllci5fX2Zsdl9fID0gbmV3IEZsdihvcHRpb25zLCBwbGF5ZXIpXG4gICAgcGxheWVyLm9uY2UoJ2NvbXBsZXRlJywgKCkgPT4ge1xuICAgICAgLy8gc3RhcnTmlrnms5XnmoTkuIvkuIDkuKrkuovku7blvqrnjq/op6blj5Fjb21wbGV0ZVxuICAgICAgcGxheWVyLmNyZWF0ZUluc3RhbmNlKHBsYXllci5fX2Zsdl9fKVxuICAgIH0pXG4gICAgcGxheWVyLm9uKCdwYXVzZScsICgpID0+IHtcbiAgICAgICFpc0xpdmUgJiYgVm9kVGFzay5jbGVhcigpXG4gICAgfSlcbiAgICB0aGlzLm9uY2UoJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgICBWb2RUYXNrLmNsZWFyKClcbiAgICAgIHBsYXllci5fX2Zsdl9fLmRlc3Ryb3koKVxuICAgICAgcGxheWVyLl9fZmx2X18ubXNlID0gbnVsbFxuICAgICAgcGxheWVyLnZpZGVvLnNyYyA9ICcnXG4gICAgICBwbGF5ZXIuX19mbHZfXyA9IG51bGxcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSW5zdGFuY2UgKGZsdikge1xuICAgIGNvbnN0IHBsYXllciA9IHRoaXNcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5pc0xpdmUpIHtcbiAgICAgIFBsYXllci51dGlsLmFkZENsYXNzKHBsYXllci5yb290LCAneGdwbGF5ZXItaXMtbGl2ZScpXG4gICAgICBjb25zdCBsaXZlID0gUGxheWVyLnV0aWwuY3JlYXRlRG9tKCd4Zy1saXZlJywgJ+ato+WcqOebtOaSrScsIHt9LCAneGdwbGF5ZXItbGl2ZScpXG4gICAgICBwbGF5ZXIuY29udHJvbHMuYXBwZW5kQ2hpbGQobGl2ZSlcbiAgICB9XG4gICAgZmx2LmxvYWQoKVxuICB9XG5cbiAgc3RhcnQgKCkge1xuICAgIGlmICghdGhpcy5pbml0ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBmbHZQbGF5ZXIgPSB0aGlzLl9fZmx2X19cbiAgICBzdXBlci5zdGFydChmbHZQbGF5ZXIubXNlLnVybClcbiAgICB0aGlzLnNyYyA9IGZsdlBsYXllci5tc2UudXJsXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGdldCBpbml0ZWQgKCkge1xuICAgIHJldHVybiB0aGlzLl9fZmx2X18gIT09IHVuZGVmaW5lZFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmx2UGxheWVyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYUluZm8ge1xuICAgIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgICAgIGNvbnN0IF9kZWZhdWx0ID0ge1xuICAgICAgICAgICAgbWltZVR5cGU6IG51bGwsXG4gICAgICAgICAgICBjb2RlYzogJycsXG4gICAgICAgICAgICBkdXJhdGlvbjogbnVsbCxcbiAgICAgICAgICAgIGhhc0F1ZGlvOiBmYWxzZSxcbiAgICAgICAgICAgIGhhc1ZpZGVvOiBmYWxzZSxcbiAgICAgICAgICAgIGF1ZGlvQ29kZWM6IG51bGwsXG4gICAgICAgICAgICB2aWRlb0NvZGVjOiBudWxsLFxuXG4gICAgICAgICAgICB2aWRlb0RhdGFSYXRlOiBudWxsLFxuICAgICAgICAgICAgYXVkaW9EYXRhUmF0ZTogbnVsbCxcbiAgICAgICAgICAgIGF1ZGlvU2FtcGxlUmF0ZTogbnVsbCxcbiAgICAgICAgICAgIGF1ZGlvQ2hhbm5lbENvdW50OiBudWxsLFxuICAgICAgICAgICAgYXVkaW9Db25maWc6IG51bGwsXG5cbiAgICAgICAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgICAgICAgaGVpZ2h0OiBudWxsLFxuICAgICAgICAgICAgZnBzOiBudWxsLFxuICAgICAgICAgICAgcHJvZmlsZTogbnVsbCxcbiAgICAgICAgICAgIGxldmVsOiBudWxsLFxuICAgICAgICAgICAgY2hyb21hRm9ybWF0OiBudWxsLFxuXG4gICAgICAgICAgICBwaXhlbFJhdGlvOiBbXSxcblxuICAgICAgICAgICAgX21ldGFEYXRhOiBudWxsLFxuICAgICAgICAgICAgc2VnbWVudHM6IFtdLFxuICAgICAgICAgICAgaGFzS2V5ZnJhbWVzOiBudWxsLFxuICAgICAgICAgICAga2V5ZnJhbWVzOiBbXSxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpbml0RGF0YSA9ICBPYmplY3QuYXNzaWduKHt9LCBfZGVmYXVsdCwgZGF0YSk7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGluaXREYXRhKS5mb3JFYWNoKChbaywgdl0pPT4ge1xuICAgICAgICAgICAgdGhpc1trXSA9IHY7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIGdldCBpc0NvbXBsZXRlICgpIHtcbiAgICAgICAgY29uc3QgeyBtaW1lVHlwZSwgZHVyYXRpb24sIGhhc0tleWZyYW1lcyB9ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG1pbWVUeXBlICE9PSBudWxsXG4gICAgICAgICAgICAmJiBkdXJhdGlvbiAhPT0gbnVsbFxuICAgICAgICAgICAgJiYgaGFzS2V5ZnJhbWVzICE9PSBudWxsXG4gICAgICAgICAgICAmJiB0aGlzLmlzVmlkZW9JbmZvRmlsbGVkXG4gICAgICAgICAgICAmJiB0aGlzLmlzQXVkaW9JbmZvRmlsbGVkO1xuICAgIH1cbiAgICBnZXQgaXNBdWRpb0luZm9GaWxsZWQgKCkge1xuICAgICAgICBjb25zdCB7IGhhc0F1ZGlvLFxuICAgICAgICAgICAgYXVkaW9Db2RlYyxcbiAgICAgICAgICAgIGF1ZGlvU2FtcGxlUmF0ZSxcbiAgICAgICAgICAgIGF1ZGlvQ2hhbm5lbENvdW50LFxuICAgICAgICB9ID0gdGhpcztcblxuICAgICAgICByZXR1cm4gISEoIWhhc0F1ZGlvIHx8IChoYXNBdWRpbyAmJiBhdWRpb0NvZGVjICYmIGF1ZGlvU2FtcGxlUmF0ZSAmJiBhdWRpb0NoYW5uZWxDb3VudCkpO1xuXG4gICAgfVxuXG4gICAgZ2V0IGlzVmlkZW9JbmZvRmlsbGVkICgpIHtcbiAgICAgICAgY29uc3Qgbm90TnVsbEZpZWxkcyA9IFtcbiAgICAgICAgICAgICd2aWRlb0NvZGVjJyxcbiAgICAgICAgICAgICd3aWR0aCcsXG4gICAgICAgICAgICAnaGVpZ2h0JyxcbiAgICAgICAgICAgICdmcHMnLFxuICAgICAgICAgICAgJ3Byb2ZpbGUnLFxuICAgICAgICAgICAgJ2xldmVsJyxcbiAgICAgICAgICAgICdjaHJvbWFGb3JtYXQnLFxuICAgICAgICBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbm90TnVsbEZpZWxkcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXNbbm90TnVsbEZpZWxkc1tpXV0gPT09IG51bGwpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5oYXNWaWRlbztcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYVNhbXBsZSB7XG4gICAgY29uc3RydWN0b3IgKGluZm8pIHtcbiAgICAgICAgbGV0IF9kZWZhdWx0ID0gTWVkaWFTYW1wbGUuZ2V0RGVmYXVsdEluZigpO1xuXG4gICAgICAgIGlmICghaW5mbyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5mbykgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICAgICAgICByZXR1cm4gX2RlZmF1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNhbXBsZSA9IE9iamVjdC5hc3NpZ24oe30sIF9kZWZhdWx0LCBpbmZvKTtcblxuICAgICAgICBPYmplY3QuZW50cmllcyhzYW1wbGUpLmZvckVhY2goKFtrLCB2XSkgPT4ge1xuICAgICAgICAgICAgdGhpc1trXSA9IHY7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgc3RhdGljIGdldERlZmF1bHRJbmYgKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZHRzOiBudWxsLFxuICAgICAgICAgICAgcHRzOiBudWxsLFxuICAgICAgICAgICAgZHVyYXRpb246IG51bGwsXG4gICAgICAgICAgICBwb3NpdGlvbjogbnVsbCxcbiAgICAgICAgICAgIGlzUkFQOiBmYWxzZSwgLy8gaXMgUmFuZG9tIGFjY2VzcyBwb2ludFxuICAgICAgICAgICAgb3JpZ2luRHRzOiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cblxufVxuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYVNlZ21lbnQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5zdGFydER0cyA9IC0xO1xuICAgICAgICB0aGlzLmVuZER0cyA9IC0xO1xuICAgICAgICB0aGlzLnN0YXJ0UHRzID0gLTE7XG4gICAgICAgIHRoaXMuZW5kUHRzID0gLTE7XG4gICAgICAgIHRoaXMub3JpZ2luU3RhcnREdHMgPSAtMTtcbiAgICAgICAgdGhpcy5vcmlnaW5FbmREdHMgPSAtMTtcbiAgICAgICAgdGhpcy5yYW5kb21BY2Nlc3NQb2ludHMgPSBbXTtcbiAgICAgICAgdGhpcy5maXJzdFNhbXBsZSA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdFNhbXBsZSA9IG51bGw7XG4gICAgfVxuXG4gICAgYWRkUkFQIChzYW1wbGUpIHtcbiAgICAgICAgc2FtcGxlLmlzUkFQID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yYW5kb21BY2Nlc3NQb2ludHMucHVzaChzYW1wbGUpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYVNlZ21lbnRMaXN0IHtcblxuICAgIGNvbnN0cnVjdG9yICh0eXBlKSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLl9saXN0ID0gW107XG4gICAgICAgIHRoaXMuX2xhc3RBcHBlbmRMb2NhdGlvbiA9IC0xOyAvLyBjYWNoZWQgbGFzdCBpbnNlcnQgbG9jYXRpb25cbiAgICB9XG5cbiAgICBnZXQgdHlwZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xuICAgIH1cblxuICAgIGdldCBsZW5ndGggKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGlzdC5sZW5ndGg7XG4gICAgfVxuXG4gICAgaXNFbXB0eSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saXN0Lmxlbmd0aCA9PT0gMDtcbiAgICB9XG5cbiAgICBjbGVhciAoKSB7XG4gICAgICAgIHRoaXMuX2xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5fbGFzdEFwcGVuZExvY2F0aW9uID0gLTE7XG4gICAgfVxuXG4gICAgX3NlYXJjaE5lYXJlc3RTZWdtZW50QmVmb3JlIChiZWdpbkR0cykge1xuICAgICAgICBsZXQgbGlzdCA9IHRoaXMuX2xpc3Q7XG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIC0yO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsYXN0ID0gbGlzdC5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgbWlkID0gMDtcbiAgICAgICAgbGV0IGxib3VuZCA9IDA7XG4gICAgICAgIGxldCB1Ym91bmQgPSBsYXN0O1xuXG4gICAgICAgIGxldCBpZHggPSAwO1xuXG4gICAgICAgIGlmIChiZWdpbkR0cyA8IGxpc3RbMF0ub3JpZ2luRHRzKSB7XG4gICAgICAgICAgICBpZHggPSAtMTtcbiAgICAgICAgICAgIHJldHVybiBpZHg7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAobGJvdW5kIDw9IHVib3VuZCkge1xuICAgICAgICAgICAgbWlkID0gbGJvdW5kICsgTWF0aC5mbG9vcigodWJvdW5kIC0gbGJvdW5kKSAvIDIpO1xuICAgICAgICAgICAgaWYgKG1pZCA9PT0gbGFzdCB8fCAoYmVnaW5EdHMgPiBsaXN0W21pZF0ubGFzdFNhbXBsZS5vcmlnaW5EdHNcbiAgICAgICAgICAgICAgICAgICAgJiYgKGJlZ2luRHRzIDwgbGlzdFttaWQgKyAxXS5vcmlnaW5EdHMpKSkge1xuICAgICAgICAgICAgICAgIGlkeCA9IG1pZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGlzdFttaWRdLm9yaWdpbkR0cyA8IGJlZ2luRHRzKSB7XG4gICAgICAgICAgICAgICAgbGJvdW5kID0gbWlkICsgMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdWJvdW5kID0gbWlkIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWR4O1xuICAgIH1cblxuICAgIF9zZWFyY2hOZWFyZXN0U2VnbWVudEFmdGVyIChiZWdpbkR0cykge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VhcmNoTmVhcmVzdFNlZ21lbnRCZWZvcmUoYmVnaW5EdHMpICsgMTtcbiAgICB9XG5cbiAgICBhcHBlbmQgKHNlZ21lbnQpIHtcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLl9saXN0O1xuICAgICAgICBsZXQgbGFzdEFwcGVuZElkeCA9IHRoaXMuX2xhc3RBcHBlbmRMb2NhdGlvbjtcbiAgICAgICAgbGV0IGluc2VydElkeCA9IDA7XG5cbiAgICAgICAgaWYgKGxhc3RBcHBlbmRJZHggIT09IC0xICYmIGxhc3RBcHBlbmRJZHggPCBsaXN0Lmxlbmd0aFxuICAgICAgICAgICAgJiYgc2VnbWVudC5vcmlnaW5TdGFydER0cyA+PSBsaXN0W2xhc3RBcHBlbmRJZHhdLmxhc3RTYW1wbGUub3JpZ2luRHRzXG4gICAgICAgICAgICAmJiAoKGxhc3RBcHBlbmRJZHggPT09IGxpc3QubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICB8fCAobGFzdEFwcGVuZElkeCA8IGxpc3QubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAmJiBzZWdtZW50Lm9yaWdpblN0YXJ0RHRzIDwgbGlzdFtsYXN0QXBwZW5kSWR4ICsgMV0ub3JpZ2luU3RhcnREdHMpKSkge1xuICAgICAgICAgICAgaW5zZXJ0SWR4ID0gbGFzdEFwcGVuZElkeCArIDE7IC8vIHVzZSBjYWNoZWQgbG9jYXRpb24gaWR4XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAobGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0SWR4ID0gdGhpcy5fc2VhcmNoTmVhcmVzdFNlZ21lbnRCZWZvcmUoc2VnbWVudC5vcmlnaW5TdGFydER0cykgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbGFzdEFwcGVuZExvY2F0aW9uID0gaW5zZXJ0SWR4O1xuICAgICAgICB0aGlzLl9saXN0LnNwbGljZShpbnNlcnRJZHgsIDAsIHNlZ21lbnQpO1xuICAgIH1cblxuICAgIGdldExhc3RTZWdtZW50QmVmb3JlIChiZWdpbkR0cykge1xuICAgICAgICBsZXQgaWR4ID0gdGhpcy5fc2VhcmNoTmVhcmVzdFNlZ21lbnRCZWZvcmUoYmVnaW5EdHMpO1xuICAgICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9saXN0W2lkeF07XG4gICAgICAgIH0gZWxzZSB7IC8vIC0xXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExhc3RTYW1wbGVCZWZvcmUgKGJlZ2luRHRzKSB7XG4gICAgICAgIGxldCBzZWdtZW50ID0gdGhpcy5nZXRMYXN0U2VnbWVudEJlZm9yZShiZWdpbkR0cyk7XG4gICAgICAgIGlmIChzZWdtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VnbWVudC5sYXN0U2FtcGxlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMYXN0UkFQQmVmb3JlIChiZWdpbkR0cykge1xuICAgICAgICBsZXQgc2VnbWVudElkeCA9IHRoaXMuX3NlYXJjaE5lYXJlc3RTZWdtZW50QmVmb3JlKGJlZ2luRHRzKTtcbiAgICAgICAgbGV0IHJhbmRvbUFjY2Vzc1BvaW50cyA9IHRoaXMuX2xpc3Rbc2VnbWVudElkeF0ucmFuZG9tQWNjZXNzUG9pbnRzO1xuICAgICAgICB3aGlsZSAocmFuZG9tQWNjZXNzUG9pbnRzLmxlbmd0aCA9PT0gMCAmJiBzZWdtZW50SWR4ID4gMCkge1xuICAgICAgICAgICAgc2VnbWVudElkeC0tO1xuICAgICAgICAgICAgcmFuZG9tQWNjZXNzUG9pbnRzID0gdGhpcy5fbGlzdFtzZWdtZW50SWR4XS5yYW5kb21BY2Nlc3NQb2ludHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJhbmRvbUFjY2Vzc1BvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmFuZG9tQWNjZXNzUG9pbnRzW3JhbmRvbUFjY2Vzc1BvaW50cy5sZW5ndGggLSAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0IE1lZGlhSW5mbyBmcm9tICcuL01lZGlhSW5mbydcbmltcG9ydCBzbmlmZmVyIGZyb20gJy4uL3V0aWxzL3NuaWZmZXInXG5jbGFzcyBTdG9yZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNMZTogc25pZmZlci5pc0xlLFxuICAgICAgX2hhc0F1ZGlvOiBmYWxzZSxcbiAgICAgIF9oYXNWaWRlbzogZmFsc2UsXG4gICAgICBfbWVkaWFJbmZvOiBuZXcgTWVkaWFJbmZvKCksXG4gICAgICBfbWV0YURhdGE6IG51bGwsXG4gICAgICBfdmlkZW9UcmFjazoge3R5cGU6ICd2aWRlbycsIGlkOiAxLCBzYW1wbGVzOiBbXSwgbGVuZ3RoOiAwfSxcbiAgICAgIF9hdWRpb1RyYWNrOiB7dHlwZTogJ2F1ZGlvJywgaWQ6IDIsIHNhbXBsZXM6IFtdLCBsZW5ndGg6IDB9LFxuICAgICAgX3ZpZGVvTWV0YURhdGE6IG51bGwsXG4gICAgICBfYXVkaW9NZXRhRGF0YTogbnVsbCxcbiAgICAgIF9hdWRpb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWQ6IGZhbHNlLFxuICAgICAgX3ZpZGVvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZDogZmFsc2UsXG4gICAgICB0YWdzOiBbXSxcbiAgICAgIHRpbWVTdGFtcEJhc2U6IDAsXG4gICAgICBoYXNWaWRlb0ZsYWdPdmVycmlkZWQ6IGZhbHNlLFxuICAgICAgaGFzQXVkaW9GbGFnT3ZlcnJpZGVkOiBmYWxzZSxcbiAgICAgIHRpbWVTY2FsZTogMTAwMCxcbiAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgaXNMaXZlOiBmYWxzZSxcbiAgICAgIGR1cmF0aW9uT3ZlcnJpZGVkOiBmYWxzZSxcbiAgICAgIG5hbHVMZW5ndGhTaXplOiA0LFxuICAgICAgX3JlZmVyRnJhbWVSYXRlOiB7XG4gICAgICAgIGZpeGVkOiB0cnVlLFxuICAgICAgICBmcHM6IDIzLjk3NixcbiAgICAgICAgZnBzTnVtOiAyMzk3NixcbiAgICAgICAgZnBzRGVuOiAxMDAwXG4gICAgICB9LFxuICAgICAgbWV0YUVuZFBvc2l0aW9uOiAtMVxuICAgIH1cblxuICAgIHRoaXMubWV0aG9kcyA9IHtcbiAgICAgIF9pc0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIF9oYXNBdWRpbyxcbiAgICAgICAgICBfaGFzVmlkZW8sXG4gICAgICAgICAgX2F1ZGlvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZCxcbiAgICAgICAgICBfdmlkZW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIGlmIChfaGFzQXVkaW8gJiYgX2hhc1ZpZGVvKSB7IC8vIGJvdGggYXVkaW8gJiB2aWRlb1xuICAgICAgICAgIHJldHVybiBfYXVkaW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkICYmIF92aWRlb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWRcbiAgICAgICAgfVxuICAgICAgICBpZiAoX2hhc0F1ZGlvICYmICFfaGFzVmlkZW8pIHsgLy8gYXVkaW8gb25seVxuICAgICAgICAgIHJldHVybiB0aGlzLl9hdWRpb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWRcbiAgICAgICAgfVxuICAgICAgICBpZiAoIV9oYXNBdWRpbyAmJiBfaGFzVmlkZW8pIHsgLy8gdmlkZW8gb25seVxuICAgICAgICAgIHJldHVybiBfdmlkZW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LmJpbmQodGhpcylcbiAgICB9XG4gIH1cblxuICBjbGVhclRhZ3MgKCkge1xuICAgIHRoaXMuc3RhdGUudGFncyA9IFtdXG4gIH1cbiAgZ2V0IHJlZmVyRnJhbWVSYXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5fcmVmZXJGcmFtZVJhdGVcbiAgfVxuXG4gIHNldCByZWZlckZyYW1lUmF0ZSAodmFsKSB7XG4gICAgdGhpcy5zdGF0ZS5fcmVmZXJGcmFtZVJhdGUgPSB2YWxcbiAgfVxuXG4gIHNldCBtZWRpYUluZm8gKG1lZGlhSW5mbykge1xuICAgIHRoaXMuc3RhdGUuX21lZGlhSW5mbyA9IG1lZGlhSW5mb1xuICB9XG5cbiAgZ2V0IG1lZGlhSW5mbyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuX21lZGlhSW5mb1xuICB9XG5cbiAgZ2V0IG1ldGFEYXRhICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5fbWV0YURhdGFcbiAgfVxuXG4gIGdldCBoYXNNZXRhRGF0YSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuX21ldGFEYXRhICE9PSBudWxsXG4gIH1cblxuICBzZXQgbWV0YURhdGEgKHYpIHtcbiAgICB0aGlzLnN0YXRlLl9tZXRhRGF0YSA9IHZcbiAgfVxuXG4gIHNldCBhdWRpb1RyYWNrICh2YWwpIHtcbiAgICB0aGlzLnN0YXRlLl9hdWRpb1RyYWNrID0gdmFsXG4gIH1cblxuICBnZXQgYXVkaW9UcmFjayAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuX2F1ZGlvVHJhY2tcbiAgfVxuXG4gIHNldCB2aWRlb1RyYWNrICh2YWwpIHtcbiAgICB0aGlzLnN0YXRlLl92aWRlb1RyYWNrID0gdmFsXG4gIH1cblxuICBnZXQgdmlkZW9UcmFjayAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuX3ZpZGVvVHJhY2tcbiAgfVxuXG4gIHNldCBoYXNBdWRpbyAodmFsKSB7XG4gICAgdGhpcy5zdGF0ZS5faGFzQXVkaW8gPSB2YWxcbiAgICB0aGlzLnN0YXRlLl9tZWRpYUluZm8uaGFzQXVkaW8gPSB2YWxcbiAgfVxuXG4gIGdldCBoYXNBdWRpbyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuX2hhc0F1ZGlvXG4gIH1cblxuICBzZXQgaGFzVmlkZW8gKHZhbCkge1xuICAgIHRoaXMuc3RhdGUuX2hhc1ZpZGVvID0gdmFsXG4gICAgdGhpcy5zdGF0ZS5fbWVkaWFJbmZvLmhhc1ZpZGVvID0gdmFsXG4gIH1cblxuICBnZXQgaGFzVmlkZW8gKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLl9oYXNWaWRlb1xuICB9XG5cbiAgc2V0IHZpZGVvTWV0YURhdGEgKHZhbCkge1xuICAgIHRoaXMuc3RhdGUuX3ZpZGVvTWV0YURhdGEgPSB2YWxcbiAgfVxuXG4gIGdldCB2aWRlb01ldGFEYXRhICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5fdmlkZW9NZXRhRGF0YVxuICB9XG5cbiAgc2V0IGF1ZGlvTWV0YURhdGEgKHZhbCkge1xuICAgIHRoaXMuc3RhdGUuX2F1ZGlvTWV0YURhdGEgPSB2YWxcbiAgfVxuXG4gIGdldCBhdWRpb01ldGFEYXRhICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5fYXVkaW9NZXRhRGF0YVxuICB9XG5cbiAgZ2V0IGtleWZyYW1lcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuX21lZGlhSW5mby5rZXlmcmFtZXNcbiAgfVxuICBnZXQgaXNTZWVrYWJsZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuX21lZGlhSW5mby5oYXNLZXlmcmFtZXNcbiAgfVxuXG4gIGdldCBpc0xlICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5pc0xlXG4gIH1cbiAgZ2V0IGhhc0luaXRpYWxNZXRhRGlzcGF0Y2hlZCAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgX2hhc0F1ZGlvLFxuICAgICAgX2hhc1ZpZGVvLFxuICAgICAgX2F1ZGlvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZCxcbiAgICAgIF92aWRlb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWRcbiAgICB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChfaGFzQXVkaW8gJiYgX2hhc1ZpZGVvKSB7XG4gICAgICByZXR1cm4gX2F1ZGlvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZCAmJiBfdmlkZW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkXG4gICAgfVxuICAgIGlmIChfaGFzQXVkaW8gJiYgIV9oYXNWaWRlbykge1xuICAgICAgcmV0dXJuIHRoaXMuX2F1ZGlvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZFxuICAgIH1cbiAgICBpZiAoIV9oYXNBdWRpbyAmJiBfaGFzVmlkZW8pIHtcbiAgICAgIHJldHVybiBfdmlkZW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZ2V0IHZpZGVvVGltZVNjYWxlICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS50aW1lU2NhbGVcbiAgfVxuXG4gIGdldCBtZXRhRW5kUG9zaXRpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLm1ldGFFbmRQb3NpdGlvblxuICB9XG5cbiAgc2V0IG1ldGFFbmRQb3NpdGlvbiAocG9zKSB7XG4gICAgdGhpcy5zdGF0ZS5tZXRhRW5kUG9zaXRpb24gPSBwb3NcbiAgfVxuXG4gIGdldCBpc0xpdmUgKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmlzTGl2ZVxuICB9XG5cbiAgc2V0IGlzTGl2ZSAodmFsKSB7XG4gICAgdGhpcy5zdGF0ZS5pc0xpdmUgPSB2YWxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yZVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmx2VGFnIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMudGFnVHlwZSA9IC0xO1xuICAgICAgICB0aGlzLmJvZHlTaXplID0gLTE7XG4gICAgICAgIHRoaXMudGFnU2l6ZSA9IC0xO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gLTE7XG4gICAgICAgIHRoaXMuVGltZXN0YW1wID0gLTE7XG4gICAgICAgIHRoaXMuU3RyZWFtSUQgPSAtMTtcbiAgICAgICAgdGhpcy5ib2R5ID0gLTE7XG4gICAgICAgIHRoaXMudGltZSA9IC0xO1xuICAgICAgICB0aGlzLmFyciA9IFtdO1xuICAgIH1cblxuICAgIGdldFRpbWUgKCkge1xuICAgICAgICB0aGlzLmFyciA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuVGltZXN0YW1wLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFyci5wdXNoKCh0aGlzLlRpbWVzdGFtcFtpXS50b1N0cmluZygxNikubGVuZ3RoID09PSAxID8gJzAnICsgdGhpcy5UaW1lc3RhbXBbaV0udG9TdHJpbmcoMTYpIDogdGhpcy5UaW1lc3RhbXBbaV0udG9TdHJpbmcoMTYpKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcnIucG9wKCk7XG4gICAgICAgIGNvbnN0IHRpbWUgPSB0aGlzLmFyci5qb2luKCcnKTtcbiAgICAgICAgdGhpcy50aW1lID0gcGFyc2VJbnQodGltZSwgMTYpO1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGltZSwgMTYpO1xuICAgIH1cblxufSIsImltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXG5jb25zdCBFcnJvclR5cGVzID0ge1xuICBuZXR3b3JrOiB7XG4gICAgY29kZTogMSxcbiAgICBtc2c6ICfop4bpopHkuIvovb3plJnor68nLFxuICAgIHJlbWFyazogJ+WPquimgeinhumikeS4i+i9vemUmeivr+WwseS9v+eUqOatpOexu+Wei++8jOaXoOiuuuaYr3ZpZGVv5pys6Lqr55qE6LaF5pe26L+Y5piveGhy55qE5YiG5q616K+35rGC6LaF5pe25oiW6ICF6LWE5rqQ5LiN5a2Y5ZyoJ1xuICB9LFxuICBtc2U6IHtcbiAgICBjb2RlOiAyLFxuICAgIG1zZzogJ+a1gei/veWKoOmUmeivrycsXG4gICAgcmVtYXJrOiAn6L+95Yqg5rWB55qE5pe25YCZ5aaC5p6c57G75Z6L5LiN5a+544CB5peg5rOV6KKr5q2j56Gu6Kej56CB5YiZ5Lya6Kem5Y+R5q2k57G76ZSZ6K+vJ1xuICB9LFxuICBwYXJzZToge1xuICAgIGNvZGU6IDMsXG4gICAgbXNnOiAn6Kej5p6Q6ZSZ6K+vJyxcbiAgICByZW1hcms6ICdtcDTjgIFobHPjgIFmbHbmiJHku6zpg73mmK/kvb/nlKhqc+i/m+ihjOagvOW8j+ino+aekO+8jOWmguaenOino+aekOWksei0peWImeS8muinpuWPkeatpOexu+mUmeivrydcbiAgfSxcbiAgZm9ybWF0OiB7XG4gICAgY29kZTogNCxcbiAgICBtc2c6ICfmoLzlvI/plJnor68nLFxuICAgIHJlbWFyazogJ+WmguaenOa1j+iniOWZqOS4jeaUr+aMgeeahOagvOW8j+WvvOiHtOaSreaUvumUmeivrydcbiAgfSxcbiAgZGVjb2Rlcjoge1xuICAgIGNvZGU6IDUsXG4gICAgbXNnOiAn6Kej56CB6ZSZ6K+vJyxcbiAgICByZW1hcms6ICfmtY/op4jlmajop6PnoIHlvILluLjkvJrmipvlh7rmraTnsbvlnovplJnor68nXG4gIH0sXG4gIHJ1bnRpbWU6IHtcbiAgICBjb2RlOiA2LFxuICAgIG1zZzogJ+ivreazlemUmeivrycsXG4gICAgcmVtYXJrOiAn5pKt5pS+5Zmo6K+t5rOV6ZSZ6K+vJ1xuICB9LFxuICB0aW1lb3V0OiB7XG4gICAgY29kZTogNyxcbiAgICBtc2c6ICfmkq3mlL7otoXml7YnLFxuICAgIHJlbWFyazogJ+aSreaUvui/h+eoi+S4reaXoOazleato+W4uOivt+axguS4i+S4gOS4quWIhuauteWvvOiHtOaSreaUvuS4reaWrSdcbiAgfSxcbiAgb3RoZXI6IHtcbiAgICBjb2RlOiA4LFxuICAgIG1zZzogJ+WFtuS7lumUmeivrycsXG4gICAgcmVtYXJrOiAn5LiN5Y+v55+l55qE6ZSZ6K+v5oiW6KKr5b+955Wl55qE6ZSZ6K+v57G75Z6LJ1xuICB9XG59XG5cbmNsYXNzIEVycm9ycyB7XG4gIGNvbnN0cnVjdG9yICh0eXBlLCBjdXJyZW50VGltZSwgZHVyYXRpb24sIG5ldHdvcmtTdGF0ZSwgcmVhZHlTdGF0ZSwgc3JjLCBjdXJyZW50U3JjLFxuICAgIGVuZGVkLCBlcnJkID0ge2xpbmU6ICcnLCBoYW5kbGU6ICcnLCBtc2c6ICcnLCB2ZXJzaW9uOiAnJ30pIHtcbiAgICBsZXQgciA9IHt9XG4gICAgci5wbGF5ZXJWZXJzaW9uID0gdmVyc2lvbiAvLyDmkq3mlL7lmajniYjmnKxcbiAgICByLmVycm9yVHlwZSA9IHR5cGVcbiAgICByLmRvbWFpbiA9IGRvY3VtZW50LmRvbWFpbiAvLyBkb21haW5cbiAgICByLmR1cmF0aW9uID0gZHVyYXRpb24gLy8g6KeG6aKR5pe26ZW/XG4gICAgci5jdXJyZW50VGltZSA9IGN1cnJlbnRUaW1lXG4gICAgci5uZXR3b3JrU3RhdGUgPSBuZXR3b3JrU3RhdGVcbiAgICByLnJlYWR5U3RhdGUgPSByZWFkeVN0YXRlXG4gICAgci5jdXJyZW50U3JjID0gY3VycmVudFNyY1xuICAgIHIuc3JjID0gc3JjXG4gICAgci5lbmRlZCA9IGVuZGVkXG4gICAgci5lcnJkID0gZXJyZCAvLyDplJnor6/or6bmg4VcbiAgICByLmV4ID0gKEVycm9yVHlwZXNbdHlwZV0gfHwge30pLm1zZyAvLyDooaXlhYXkv6Hmga9cbiAgICByZXR1cm4gclxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yc1xuIiwiLy/noLTor5HogIUgXG4vL3BhcnNlRGF0YSDmnIDlkI7mmK/liJvlu7p0YWcgdGhpcy5fc3RvcmUuc3RhdGUudGFnc+S4rVxuaW1wb3J0IERlbXV4ZXIgZnJvbSAnLi9kZW11eC9EZW11eGVyJ1xuaW1wb3J0IEJ1ZmZlciBmcm9tICcuLi93cml0ZS9CdWZmZXInXG5pbXBvcnQgVGFnIGZyb20gJy4uL21vZGVscy9UYWcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsdlBhcnNlciBleHRlbmRzIERlbXV4ZXIge1xuICBjb25zdHJ1Y3RvciAoc3RvcmUpIHtcbiAgICBzdXBlcihzdG9yZSlcbiAgICB0aGlzLkNMQVNTX05BTUUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWVcbiAgICB0aGlzLnRlbXBfdThhID0gbnVsbFxuICAgIHRoaXMuZGF0YUxlbiA9IDBcbiAgICB0aGlzLnN0b3AgPSBmYWxzZVxuICAgIHRoaXMuaW5kZXggPSAwIC8vIHJlY29yZCB0aGUgcG9zaXRpb24gaW4gc2luZ2xlIHJvdW5kXG4gICAgdGhpcy5vZmZzZXQgPSAwXG4gICAgdGhpcy5maWxlUG9zaXRpb24gPSAwIC8vIHJlY29yZCBjdXJyZW50IGZpbGUgcG9zaXRpb25cbiAgICB0aGlzLmZpcnN0RmxhZyA9IHRydWVcbiAgfVxuXG4gIHNlZWsgKCkge1xuICAgIHRoaXMub2Zmc2V0ID0gMFxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy50ZW1wX3U4YSA9IG51bGxcbiAgICB0aGlzLmRhdGFMZW4gPSAwXG4gICAgdGhpcy5zdG9wID0gZmFsc2VcbiAgICB0aGlzLmluZGV4ID0gMCAvLyByZWNvcmQgdGhlIHBvc2l0aW9uIGluIHNpbmdsZSByb3VuZFxuICAgIHRoaXMub2Zmc2V0ID0gMFxuICAgIHRoaXMuZmlsZVBvc2l0aW9uID0gMFxuICB9XG5cbiAgc2V0Rmx2IChmbHZVOGEpIHtcbiAgICAvLyDmr4/kuIDmrKFzZXRGbHbpg73lm57ph43nva5pbmRleOWSjG9mZnNldCDnhLblkI7ov5Tlm55vZmZzZXQg5aSW6Z2i5qC55o2ub2Zmc2V06L+b6KGM6KOB5Ymq5pWw5o2uXG4gICAgdGhpcy5zdG9wID0gZmFsc2VcbiAgICB0aGlzLmluZGV4ID0gMFxuICAgIHRoaXMub2Zmc2V0ID0gMFxuICAgIGNvbnN0IHRlbXBVOGEgPSB0aGlzLnRlbXBfdThhID0gZmx2VThhXG4gICAgdGhpcy5kYXRhTGVuID0gdGhpcy50ZW1wX3U4YS5sZW5ndGhcblxuICAgIGlmICghdGhpcy5maXJzdEZsYWcpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlRGF0YSgpXG4gICAgICAvLyDotoXov4cxM+S4quWtl+iKguaJjeW8gOWni+WkhOeQhlxuICAgIH0gZWxzZSBpZiAodGVtcFU4YS5sZW5ndGggPiAxMyAmJiBGbHZQYXJzZXIuaXNGbHZIZWFkKHRlbXBVOGEpKSB7XG4gICAgICAvLyDop6PmnpDmmK/lkKbmnInpn7Pop4bpopEgXG4gICAgICB0aGlzLnBhcnNlSGVhZCgpXG4gICAgICAvLyDmlLnlj5h0aGlzLmluZGV4XG4gICAgICB0aGlzLnJlYWREYXRhKDkpIC8vIOi3s+i/h+WktOmDqFxuICAgICAgdGhpcy5yZWFkRGF0YSg0KSAvLyDot7Pov4fkuIvkuIDkuKrorrDlvZXlpLTpg6hzaXpl55qEIGludDMyXG4gICAgICB0aGlzLnBhcnNlRGF0YSgpXG4gICAgICB0aGlzLmZpcnN0RmxhZyA9IGZhbHNlXG4gICAgICB0aGlzLmZpbGVQb3NpdGlvbiArPSB0aGlzLm9mZnNldFxuICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm9mZnNldFxuICAgIH1cbiAgfVxuXG4gIHBhcnNlRGF0YSAoKSB7XG4gICAgY29uc3Qge2xlbmd0aDogdThhTGVuZ3RofSA9IHRoaXMudGVtcF91OGFcbiAgICAvLyDov5nph4zmnInkuKrnlpHpl64g5aaC5p6caGVhZGVy5ZKMYm9keeS4jeaYr+S4gOasoeadpeeahCB0YWfkvJrkuI3kvJrorqHnrpfplJnor6/vvIzmsqHmnInkuKXmoLznmoR0YWfnmoTlvIDlp4vlkoznu5PmnZ/moIflv5cgXG4gICAgLy8g56ys5LiA5qyhYnVmZmVyIHRhZ+eahGJvZHnmsqHmnInlrozlhajliLDnu5PmnZ/kuoYg5L2G5pivb2Zmc2V05oqKMTHkuKpoZWFkZXLlrZfoioLliKDpmaTkuobvvIzkuIvmrKHmnaXlsLHmsqHmnIloZWFkZXLlrZfoioLkuobjgIJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHU4YUxlbmd0aCAmJiAhdGhpcy5zdG9wKSB7XG4gICAgICAvL29mZnNldOaYr+acgOWQjui/lOWbnueahOWkhOeQhuWIsOeahOS9jee9rlxuICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLmluZGV4XG4gICAgICBjb25zdCB0YWcgPSBuZXcgVGFnKClcbiAgICAgIGlmICh0aGlzLnVucmVhZExlbmd0aCA+PSAxMSkge1xuICAgICAgICAvLyDlj6/ku6Xor7vlh7rlpLTpg6jkv6Hmga9cbiAgICAgICAgdGFnLnBvc2l0aW9uID0gdGhpcy5maWxlUG9zaXRpb24gKyB0aGlzLm9mZnNldFxuICAgICAgICB0YWcudGFnVHlwZSA9IHRoaXMucmVhZERhdGEoMSlbMF1cbiAgICAgICAgdGFnLmJvZHlTaXplID0gdGhpcy5yZWFkRGF0YSgzKVxuICAgICAgICB0YWcuVGltZXN0YW1wID0gdGhpcy5yZWFkRGF0YSg0KVxuICAgICAgICB0YWcuU3RyYW1JZCA9IHRoaXMucmVhZERhdGEoMylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOWmguaenOaVsOaNruWwj+S6jjEx5Liq5a2X6IqCIOWImeebtOaOpXJldHVybiBvZmZzZXTlsLHmmK/lvZPliY3nmoRpbmRleFxuICAgICAgICB0aGlzLnN0b3AgPSB0cnVlXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBpZiAodGhpcy51bnJlYWRMZW5ndGggPj0gdGhpcy5nZXRCb2R5U2l6ZSh0YWcuYm9keVNpemUpICsgNCkge1xuICAgICAgICB0YWcuYm9keSA9IHRoaXMucmVhZERhdGEodGhpcy5nZXRCb2R5U2l6ZSh0YWcuYm9keVNpemUpKVxuICAgICAgICB0YWcudGFnU2l6ZSA9IHRoaXMucmVhZERhdGEoNClcbiAgICAgICAgLy8g5pyA5ZCO5piv5a2Y5pS+5Yiw5LqGc3RvcmXkuK3nmoR0YWdzXG4gICAgICAgIGNvbnN0IHt0YWdzLCBfaGFzVmlkZW8sIF9oYXNBdWRpb30gPSB0aGlzLl9zdG9yZS5zdGF0ZVxuICAgICAgICBzd2l0Y2ggKHRhZy50YWdUeXBlKSB7XG4gICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgX2hhc1ZpZGVvICYmIHRhZ3MucHVzaCh0YWcpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIF9oYXNBdWRpbyAmJiB0YWdzLnB1c2godGFnKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgdGFncy5wdXNoKHRhZylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RvcCA9IHRydWVcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLmluZGV4XG4gICAgfVxuICAgIHRoaXMuZmlsZVBvc2l0aW9uICs9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy50ZW1wX3U4YSA9IG51bGxcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gc2l6ZUFyclxuICAgKiBAcmV0dXJuXG4gICAqL1xuICBnZXRCb2R5U2l6ZSAoc2l6ZUFycikge1xuICAgIHJldHVybiBCdWZmZXIucmVhZEFzSW50KHNpemVBcnIpXG4gIH1cbiAgLy8gXG4gIHBhcnNlSGVhZCAoKSB7XG4gICAgY29uc3Qge3RlbXBfdThhOiB0ZW1wVThhLCBfc3RvcmV9ID0gdGhpc1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIG1hdGNoOiBmYWxzZVxuICAgIH1cbiAgICAvLyDnrKzlm5vkuKrlrZfoioLmmK8xXG4gICAgaWYgKHRlbXBVOGFbM10gIT09IDEpIHtcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gICAgLy8g56ys5LqU5Liq5a2X6IqCXG4gICAgY29uc3QgZmxhZyA9IHRlbXBVOGFbNF1cbiAgICAvLyAxMDAgIOesrOS4ieS9jeaYrzHku6PooajmnInpn7PpopFcbiAgICBjb25zdCBoYXNBdWRpbyA9ICgoZmxhZyAmIDQpID4+PiAyKSAhPT0gMFxuICAgIC8vIDAxIOesrOS4gOS9jeaYrzEg5Luj6KGo5pyJ6KeG6aKRXG4gICAgY29uc3QgaGFzVmlkZW8gPSAoZmxhZyAmIDEpICE9PSAwXG5cbiAgICBpZiAoIWhhc0F1ZGlvICYmICFoYXNWaWRlbykge1xuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIF9zdG9yZS5oYXNBdWRpbyA9IGhhc0F1ZGlvXG4gICAgX3N0b3JlLmhhc1ZpZGVvID0gaGFzVmlkZW9cbiAgfVxuXG4gIHJlYWREYXRhIChsZW5ndGgpIHtcbiAgICBjb25zdCBfaW5kZXggPSB0aGlzLmluZGV4XG4gICAgdGhpcy5pbmRleCArPSBsZW5ndGhcbiAgICByZXR1cm4gdGhpcy50ZW1wX3U4YS5zbGljZShfaW5kZXgsIF9pbmRleCArIGxlbmd0aClcbiAgfVxuXG4gIGdldCB1bnJlYWRMZW5ndGggKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFMZW4gLSB0aGlzLmluZGV4XG4gIH1cblxuICBzdGF0aWMgaXNGbHZIZWFkICh0ZW1wVThhKSB7XG4gICAgbGV0IGZpcnN0VGhyZWVDaGFycyA9IFt0ZW1wVThhWzBdLCB0ZW1wVThhWzFdLCB0ZW1wVThhWzJdXVxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgZmlyc3RUaHJlZUNoYXJzKSA9PT0gJ0ZMVidcbiAgfVxufVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudC1lbWl0dGVyJ1xubGV0IGNvdW50ID0gMFxuY2xhc3MgTVNFIHtcbiAgY29uc3RydWN0b3IgKG1lZGlhRWxlbWVudCkge1xuICAgIC8vY29kZWNzIOino+eggeWZqFxuICAgIHRoaXMuY29kZWNzID0gJ3ZpZGVvL21wNDsgY29kZWNzPVwiYXZjMS42NDAwMUUsIG1wNGEuNDAuNVwiJ1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIEV2ZW50RW1pdHRlcih0aGlzKVxuICAgIHRoaXMubWVkaWFTb3VyY2UgPSBuZXcgd2luZG93Lk1lZGlhU291cmNlKClcbiAgICBtZWRpYUVsZW1lbnQuc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5tZWRpYVNvdXJjZSlcbiAgICB0aGlzLnVybCA9IG1lZGlhRWxlbWVudC5zcmNcbiAgICB0aGlzLmhhbmRsZVNvdXJjZU9wZW4gPSB0aGlzLm9uU291cmNlT3Blbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5tZWRpYVNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdzb3VyY2VvcGVuJywgdGhpcy5oYW5kbGVTb3VyY2VPcGVuKVxuXG4gICAgdGhpcy5tZWRpYVNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdzb3VyY2VjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuZW1pdCgnc291cmNlY2xvc2UnKVxuICAgIH0pXG4gIH1cblxuICBvblNvdXJjZU9wZW4gKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5zb3VyY2VCdWZmZXIgPSBzZWxmLm1lZGlhU291cmNlLmFkZFNvdXJjZUJ1ZmZlcihzZWxmLmNvZGVjcylcbiAgICBzZWxmLnNvdXJjZUJ1ZmZlci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBzZWxmLmVtaXQoJ2Vycm9yJywge1xuICAgICAgICB0eXBlOiAnc291cmNlQnVmZmVyJyxcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH0pXG4gICAgfSlcbiAgICBzZWxmLnNvdXJjZUJ1ZmZlci5hZGRFdmVudExpc3RlbmVyKCd1cGRhdGVlbmQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgc2VsZi5lbWl0KCd1cGRhdGVlbmQnKVxuICAgIH0pXG4gICAgc2VsZi5lbWl0KCdzb3VyY2VvcGVuJylcbiAgICBzZWxmLnNvdXJjZUJ1ZmZlci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBzZWxmLmVtaXQoJ2Vycm9yJywge1xuICAgICAgICB0eXBlOiAnbWVkaWFTb3VyY2UnLFxuICAgICAgICBlcnJvcjogZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIGdldCBzdGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVkaWFTb3VyY2UucmVhZHlTdGF0ZVxuICB9XG5cbiAgZ2V0IGR1cmF0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5tZWRpYVNvdXJjZS5kdXJhdGlvblxuICB9XG5cbiAgc2V0IGR1cmF0aW9uICh2YWx1ZSkge1xuICAgIHRoaXMubWVkaWFTb3VyY2UuZHVyYXRpb24gPSB2YWx1ZVxuICB9XG5cbiAgYXBwZW5kQnVmZmVyIChidWZmZXIpIHtcbiAgICBsZXQgc291cmNlQnVmZmVyID0gdGhpcy5zb3VyY2VCdWZmZXJcbiAgICBpZiAoc291cmNlQnVmZmVyLnVwZGF0aW5nID09PSBmYWxzZSAmJiB0aGlzLnN0YXRlID09PSAnb3BlbicpIHtcbiAgICAgIHNvdXJjZUJ1ZmZlci5hcHBlbmRCdWZmZXIoYnVmZmVyKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICdjbG9zZWQnKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCB7XG4gICAgICAgICAgdHlwZTogJ3NvdXJjZUJ1ZmZlcicsXG4gICAgICAgICAgZXJyb3I6IG5ldyBFcnJvcignbWVkaWFTb3VyY2UgaXMgbm90IGF0dGFjaGVkIHRvIHZpZGVvIG9yIG1lZGlhU291cmNlIGlzIGNsb3NlZCcpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09ICdlbmRlZCcpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIHtcbiAgICAgICAgICB0eXBlOiAnc291cmNlQnVmZmVyJyxcbiAgICAgICAgICBlcnJvcjogbmV3IEVycm9yKCdtZWRpYVNvdXJjZSBpcyBjbG9zZWQnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNvdXJjZUJ1ZmZlci51cGRhdGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuZW1pdCgnd2FybicsIHtcbiAgICAgICAgICAgIHR5cGU6ICdzb3VyY2VCdWZmZXInLFxuICAgICAgICAgICAgZXJyb3I6IG5ldyBFcnJvcignbWVkaWFTb3VyY2UgaXMgYnVzeScpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICAvLyB0aGlzLm1lZGlhU291cmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NvdXJjZW9wZW4nLCB0aGlzLmhhbmRsZVNvdXJjZU9wZW4pXG4gICAgdGhpcy5fX2VlX18gPSB7fVxuICAgIC8vIHRoaXMubWVkaWFTb3VyY2UgPSBudWxsXG4gICAgLy8gdGhpcy5lbmRPZlN0cmVhbSgpXG4gIH1cbiAgcmVtb3ZlQnVmZmVyIChzdGFydCwgZW5kKSB7XG4gICAgdGhpcy5zb3VyY2VCdWZmZXIucmVtb3ZlKHN0YXJ0LCBlbmQpXG4gIH1cblxuICBlbmRPZlN0cmVhbSAoKSB7XG4gICAgaWYgKHRoaXMubWVkaWFTb3VyY2UucmVhZHlTdGF0ZSA9PT0gJ29wZW4nKSB7XG4gICAgICB0aGlzLm1lZGlhU291cmNlLmVuZE9mU3RyZWFtKClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaXNTdXBwb3J0ZWQgKGNvZGVjcykge1xuICAgIHJldHVybiB3aW5kb3cuTWVkaWFTb3VyY2UgJiYgd2luZG93Lk1lZGlhU291cmNlLmlzVHlwZVN1cHBvcnRlZChjb2RlY3MpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTVNFXG4iLCJpbXBvcnQgTXA0UmVtdXhlciBmcm9tICcuL3JlbXV4L01wNHJlbXV4J1xuaW1wb3J0IEZsdlBhcnNlciBmcm9tICcuL0ZsdlBhcnNlcidcbmltcG9ydCBUYWdEZW11eGVyIGZyb20gJy4vZGVtdXgvVGFnRGVtdXhlcidcbmltcG9ydCBTdG9yZSBmcm9tICcuLi9tb2RlbHMvU3RvcmUnXG5pbXBvcnQgVm9kVGFzayBmcm9tICcuLi90YXNrcy9Wb2RUYXNrJ1xuaW1wb3J0IExpdmVUYXNrIGZyb20gJy4uL3Rhc2tzL0xpdmVUYXNrJ1xuaW1wb3J0IEJ1ZmZlciBmcm9tICcuLi93cml0ZS9CdWZmZXInXG5pbXBvcnQgVHJhbnNDb2RlciBmcm9tICcuL1RyYW5zQ29kZXInXG5cbmNvbnN0IE5PT1AgPSAoKSA9PiB7fVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblBhcnNlciBleHRlbmRzIFRyYW5zQ29kZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnLCBwbGF5ZXIpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5DTEFTU19OQU1FID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnXG4gICAgdGhpcy5fcGxheWVyID0gcGxheWVyXG4gICAgdGhpcy5fdGVtcEJhc2VUaW1lID0gMFxuICAgIHRoaXMuZmlyc3RGbGFnID0gdHJ1ZVxuICAgIHRoaXMuX3N0b3JlID0gbmV3IFN0b3JlKClcbiAgICB0aGlzLl9zdG9yZS5pc0xpdmUgPSBjb25maWcuaXNMaXZlIHx8IGZhbHNlXG4gICAgdGhpcy5fc3RvcmUucGxheWVyID0gcGxheWVyXG4gICAgLy8g6Kej5p6Q5oiQdGFnIOWtmOWFpXN0b3JlXG4gICAgdGhpcy5mbHZQYXJzZXIgPSBuZXcgRmx2UGFyc2VyKHRoaXMuX3N0b3JlKVxuICAgIC8vIOagh+iusOino+aekOWZqFxuICAgIHRoaXMudGFnRGVtdXhlciA9IG5ldyBUYWdEZW11eGVyKHRoaXMuX3N0b3JlKVxuICAgIHRoaXMubXA0cmVtdXhlciA9IG5ldyBNcDRSZW11eGVyKHRoaXMuX3N0b3JlKVxuICAgIHRoaXMuYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgdGhpcy5idWZmZXJLZXlmcmFtZXMgPSBuZXcgU2V0KClcbiAgICB0aGlzLk1FVEFfQ0hVTktfU0laRSA9IE1hdGgucG93KDEwLCA2KVxuICAgIHRoaXMuQ0hVTktfU0laRSA9IE1hdGgucG93KDEwLCA2KVxuICAgIHRoaXMuZnR5cF9tb292ID0gbnVsbFxuICAgIHRoaXMuaXNTb3VyY2VPcGVuID0gZmFsc2VcbiAgICB0aGlzLl9pc05ld1NlZ21lbnRzQXJyaXZhbCA9IGZhbHNlXG4gICAgdGhpcy5pc1NlZWtpbmcgPSBmYWxzZVxuICAgIHRoaXMubG9hZFRhc2sgPSBudWxsXG4gICAgdGhpcy5yYW5nZSA9IHtcbiAgICAgIHN0YXJ0OiAtMSxcbiAgICAgIGVuZDogLTFcbiAgICB9XG4gICAgdGhpcy5fcGVuZGluZ0ZyYWdtZW50cyA9IFtdXG4gICAgdGhpcy5fcGVuZGluZ1JlbW92ZVJhbmdlID0gW11cbiAgICB0aGlzLmVycl9jbnQgPSAwXG4gICAgdGhpcy5yZXF1ZXN0Q29uZmlnID0ge1xuICAgICAgbW9kZTogdGhpcy5fY29uZmlnLmNvcnMgPyAnY29ycycgOiAnc2FtZS1vcmlnaW4nXG4gICAgfVxuICAgIHRoaXMuaW5pdEV2ZW50QmluZCgpXG4gIH1cbiAgLy8g5byA5aeL5Yqg6L295pWw5o2uXG4gIHN0YXJ0TG9hZERhdGEgKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmlzTGl2ZSkge1xuICAgICAgdGhpcy5pbml0TWV0YSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdExpdmVTdHJlYW0oKVxuICAgIH1cbiAgfVxuICAvLyDnm7Tmkq1cbiAgaW5pdExpdmVTdHJlYW0gKCkge1xuICAgIC8vIOWKoOi9veaVsOaNrlxuICAgIHRoaXMubG9hZFRhc2sgPSBuZXcgTGl2ZVRhc2sodGhpcy5fY29uZmlnLnVybCwgdGhpcy5yZXF1ZXN0Q29uZmlnKS5ydW4odGhpcy5sb2FkTGl2ZURhdGEuYmluZCh0aGlzKSlcbiAgfVxuXG4gIGxvYWRMaXZlRGF0YSAoYnVmZmVyKSB7XG4gICAgLy8g55u05pKt57uT5p2fXG4gICAgaWYgKGJ1ZmZlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmVtaXQoJ2xpdmUtZW5kJylcbiAgICAgIHRoaXMuX3BsYXllci5tc2UuZW5kT2ZTdHJlYW0oKVxuICAgICAgdGhpcy5kZXN0cm95KClcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvemgtQ04vZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvVWludDhBcnJheVxuICAgICAgLy8gVWludDhBcnJheSA45L2N5peg56ym5Y+35pW05Z6L5pWw57uEICDmr4/kuIDkuKrlhYPntKDmraPlpb3mmK/kuIDkuKrlrZfoioJcbiAgICAgIC8vIHRoaXMuYnVmZmVy5bCx5piv5LiA5Liq5pWw5o2u57yT5Yay5rGgIOW+gOmHjOWKoOaVsOaNriDmoLnmja7lpITnkIbnmoRvZmZzZXTov5vooYzliKDpmaRcbiAgICAgIHRoaXMuYnVmZmVyLndyaXRlKG5ldyBVaW50OEFycmF5KGJ1ZmZlcikpXG4gICAgICAvLyDop6PmnpB0YWdcbiAgICAgIGxldCBvZmZzZXQgPSB0aGlzLnNldEZsdih0aGlzLmJ1ZmZlci5idWZmZXIpXG4gICAgICB0aGlzLmJ1ZmZlci5idWZmZXIgPSB0aGlzLmJ1ZmZlci5idWZmZXIuc2xpY2Uob2Zmc2V0KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8g6Z2e55u05pKtXG4gIGluaXRNZXRhICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IFJlc29sdmVyID0ge1xuICAgICAgcmVzb2x2ZUNodW5rICh7dGltZVN0YW1wLCBidWZmZXJ9KSB7XG4gICAgICAgIGlmICh0aW1lU3RhbXAgIT09IHNlbGYubG9hZFRhc2sudGltZVN0YW1wKSByZXR1cm5cbiAgICAgICAgc2VsZi5lcnJfY250ID0gMFxuICAgICAgICBzZWxmLmJ1ZmZlci53cml0ZShuZXcgVWludDhBcnJheShidWZmZXIpKVxuICAgICAgICBsZXQgb2Zmc2V0ID0gc2VsZi5zZXRGbHYoc2VsZi5idWZmZXIuYnVmZmVyKVxuICAgICAgICBzZWxmLmJ1ZmZlci5idWZmZXIgPSBzZWxmLmJ1ZmZlci5idWZmZXIuc2xpY2Uob2Zmc2V0KVxuICAgICAgICBpZiAoIXNlbGYuaXNNZWRpYUluZm9SZWFkeSkge1xuICAgICAgICAgIHNlbGYuaW5pdE1ldGEoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmFuZ2UgPSB7XG4gICAgICBzdGFydDogdGhpcy5yYW5nZS5lbmQgKyAxLFxuICAgICAgZW5kOiB0aGlzLnJhbmdlLmVuZCArIHRoaXMuTUVUQV9DSFVOS19TSVpFXG4gICAgfVxuICAgIGNvbnN0IGxvYWREYXRhID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMubG9hZE1ldGFEYXRhKHRoaXMucmFuZ2Uuc3RhcnQsIHRoaXMucmFuZ2UuZW5kKS50aGVuKFJlc29sdmVyLnJlc29sdmVDaHVuaykuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgaWYgKHRoaXMuZXJyX2NudCA+PSAzKSB7XG4gICAgICAgICAgdGhpcy5fcGxheWVyLmVtaXQoJ2Vycm9yJywgZSlcbiAgICAgICAgICB0aGlzLmRlc3Ryb3koKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXJyX2NudCArPSAxXG4gICAgICAgIGxvYWREYXRhKClcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBsb2FkRGF0YSgpXG4gIH1cblxuICBsb2FkU2VnbWVudHMgKGNoYW5nZVJhbmdlLCBjdXJyZW50VGltZSA9IDAsIHByZWxvYWRUaW1lKSB7XG4gICAgdGhpcy5faXNOZXdTZWdtZW50c0Fycml2YWwgPSBmYWxzZVxuICAgIGNvbnN0IHJlc29sdmVDaHVuayA9ICh7dGltZVN0YW1wLCBidWZmZXJ9KSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1RlbXBQbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5pc1RlbXBQbGF5ZXIgPSBmYWxzZVxuICAgICAgfVxuICAgICAgaWYgKHRpbWVTdGFtcCAhPT0gdGhpcy5sb2FkVGFzay50aW1lU3RhbXApIHJldHVyblxuICAgICAgdGhpcy5lcnJfY250ID0gMFxuICAgICAgdGhpcy5idWZmZXIud3JpdGUobmV3IFVpbnQ4QXJyYXkoYnVmZmVyKSlcbiAgICAgIGlmICh0aGlzLmlzU2Vla2luZykge1xuICAgICAgICB0aGlzLl9wZW5kaW5nRnJhZ21lbnRzID0gW11cbiAgICAgIH1cbiAgICAgIGxldCBvZmZzZXQgPSB0aGlzLnNldEZsdih0aGlzLmJ1ZmZlci5idWZmZXIpXG4gICAgICB0aGlzLmJ1ZmZlci5idWZmZXIgPSB0aGlzLmJ1ZmZlci5idWZmZXIuc2xpY2Uob2Zmc2V0KVxuICAgICAgaWYgKCF0aGlzLl9pc05ld1NlZ21lbnRzQXJyaXZhbCkge1xuICAgICAgICB0aGlzLmxvYWRTZWdtZW50cyh0cnVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc1NlZWtpbmcgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2hhbmdlUmFuZ2UpIHtcbiAgICAgIGxldCBfcmFuZ2UgPSB0aGlzLnJhbmdlXG5cbiAgICAgIGlmICh0aGlzLmdldE5leHRSYW5nZUVuZChjdXJyZW50VGltZSwgcHJlbG9hZFRpbWUpIDw9IF9yYW5nZS5lbmQpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMucmFuZ2UgPSB7XG4gICAgICAgIHN0YXJ0OiB0aGlzLnJhbmdlLmVuZCArIDEsXG4gICAgICAgIGVuZDogY3VycmVudFRpbWUgPT09IHVuZGVmaW5lZCA/IHRoaXMucmFuZ2UuZW5kICsgdGhpcy5DSFVOS19TSVpFIC0gMSA6IHRoaXMuZ2V0TmV4dFJhbmdlRW5kKGN1cnJlbnRUaW1lLCBwcmVsb2FkVGltZSkgLSAxXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnJhbmdlLnN0YXJ0ID49IHRoaXMucmFuZ2UuZW5kIHx8ICF0aGlzLnJhbmdlLmVuZCkge1xuICAgICAgICB0aGlzLnJhbmdlID0gX3JhbmdlXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBsb2FkRGF0YSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0b3ApIHJldHVyblxuICAgICAgcmV0dXJuIHRoaXMuX2xvYWRTZWdtZW50c0RhdGEodGhpcy5yYW5nZS5zdGFydCwgdGhpcy5yYW5nZS5lbmQpLnRoZW4ocmVzb2x2ZUNodW5rKS5jYXRjaChlID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZXJyX2NudCA+PSAzKSB7XG4gICAgICAgICAgdGhpcy5fcGxheWVyLmVtaXQoJ2Vycm9yJywgJ+WKoOi9veinhumikeWksei0pScpXG4gICAgICAgICAgdGhpcy5kZXN0cm95KClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycl9jbnQgKz0gMVxuICAgICAgICBsb2FkRGF0YSgpXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gbG9hZERhdGEoKVxuICB9XG5cbiAgZ2V0TmV4dFJhbmdlRW5kIChzdGFydCwgcHJlbG9hZFRpbWUpIHtcbiAgICBjb25zdCB7a2V5ZnJhbWVzOiB7dGltZXMsIGZpbGVQb3NpdGlvbnN9LCB2aWRlb1RpbWVTY2FsZX0gPSB0aGlzLl9zdG9yZVxuICAgIGlmICghdGltZXMgfHwgIWZpbGVQb3NpdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLnJhbmdlLmVuZCArIHRoaXMuQ0hVTktfU0laRVxuICAgIH1cbiAgICBzdGFydCAqPSB2aWRlb1RpbWVTY2FsZVxuXG4gICAgbGV0IGV4cGVjdEVuZCA9IHN0YXJ0ICsgKHByZWxvYWRUaW1lICogdmlkZW9UaW1lU2NhbGUpXG4gICAgaWYgKGV4cGVjdEVuZCA+IHRpbWVzW3RpbWVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICByZXR1cm4gZmlsZVBvc2l0aW9uc1tmaWxlUG9zaXRpb25zLmxlbmd0aCAtIDFdXG4gICAgfVxuICAgIGxldCBsZWZ0ID0gMFxuICAgIGxldCByaWdodCA9IHRpbWVzLmxlbmd0aCAtIDFcbiAgICBsZXQgaW5kZXhcblxuICAgIHdoaWxlIChsZWZ0IDw9IHJpZ2h0KSB7XG4gICAgICBsZXQgbWlkID0gTWF0aC5mbG9vcigocmlnaHQgKyBsZWZ0KSAvIDIpXG4gICAgICBpZiAodGltZXNbbWlkXSA8PSBleHBlY3RFbmQgJiYgZXhwZWN0RW5kIDw9IHRpbWVzW21pZCArIDFdKSB7XG4gICAgICAgIGluZGV4ID0gbWlkICsgMVxuICAgICAgICBicmVha1xuICAgICAgfSBlbHNlIGlmIChsZWZ0ID09PSByaWdodCkge1xuICAgICAgICBpbmRleCA9IG1pZFxuICAgICAgICBicmVha1xuICAgICAgfSBlbHNlIGlmIChleHBlY3RFbmQgPCB0aW1lc1ttaWRdKSB7XG4gICAgICAgIHJpZ2h0ID0gbWlkIC0gMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVmdCA9IG1pZCArIDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXggPyBmaWxlUG9zaXRpb25zW2luZGV4XSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgX2xvYWRTZWdtZW50c0RhdGEgKHN0YXJ0ID0gMCwgZW5kID0gc3RhcnQgKyB0aGlzLkNIVU5LX1NJWkUpIHtcbiAgICB0aGlzLmxvYWRUYXNrID0gbmV3IFZvZFRhc2sodGhpcy5fY29uZmlnLnVybCwgW3N0YXJ0LCBlbmRdLCB0aGlzLnJlcXVlc3RDb25maWcpXG4gICAgcmV0dXJuIHRoaXMubG9hZFRhc2sucHJvbWlzZVxuICB9XG5cbiAgbG9hZE1ldGFEYXRhIChzdGFydCA9IDAsIGVuZCA9IHN0YXJ0ICsgdGhpcy5NRVRBX0NIVU5LX1NJWkUpIHtcbiAgICB0aGlzLmxvYWRUYXNrID0gbmV3IFZvZFRhc2sodGhpcy5fY29uZmlnLnVybCwgW3N0YXJ0LCBlbmRdLCB0aGlzLnJlcXVlc3RDb25maWcpXG4gICAgcmV0dXJuIHRoaXMubG9hZFRhc2sucHJvbWlzZVxuICB9XG5cbiAgc2V0Rmx2Rmlyc3QgKGFycmF5QnVmZiwgYmFzZVRpbWUpIHtcbiAgICAvLyDosIPnlKhmbHZQYXJzZXJcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmZsdlBhcnNlci5zZXRGbHYobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmKSlcbiAgICBjb25zdCB7dGFnc30gPSB0aGlzLl9zdG9yZS5zdGF0ZVxuXG4gICAgaWYgKHRhZ3MubGVuZ3RoKSB7XG4gICAgICBpZiAodGFnc1swXS50YWdUeXBlICE9PSAxOCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZsdiBmaWxlIHdpdGhvdXQgbWV0YWRhdGEgdGFnJylcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3RlbXBCYXNlVGltZSAhPT0gMCAmJiB0aGlzLl90ZW1wQmFzZVRpbWUgPT09IHRhZ3NbMF0uZ2V0VGltZSgpKSB7XG4gICAgICAgIHRoaXMuX3N0b3JlLnN0YXRlLl90aW1lc3RhbXBCYXNlID0gMFxuICAgICAgfVxuICAgICAgLy8g6Kej5p6Q5qCH6K6wXG4gICAgICB0aGlzLnRhZ0RlbXV4ZXIucmVzb2x2ZVRhZ3ModGFncylcbiAgICB9XG5cbiAgICB0aGlzLmZpcnN0RmxhZyA9IGZhbHNlXG4gICAgcmV0dXJuIG9mZnNldFxuICB9XG5cbiAgc2V0Rmx2VXN1YWxseSAoYXJyYXlCdWZmLCBiYXNlVGltZSkge1xuICAgIHRoaXMuaXNQYXJzaW5nID0gdHJ1ZVxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuZmx2UGFyc2VyLnNldEZsdihuZXcgVWludDhBcnJheShhcnJheUJ1ZmYpKVxuICAgIGNvbnN0IHt0YWdzfSA9IHRoaXMuX3N0b3JlLnN0YXRlXG4gICAgaWYgKHRhZ3MubGVuZ3RoKSB7XG4gICAgICAvLyDop6PmnpDmoIforrBcbiAgICAgIHRoaXMudGFnRGVtdXhlci5yZXNvbHZlVGFncyh0YWdzKVxuICAgIH1cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBoYW5kbGVEYXRhUmVhZHkgKGF1ZGlvVHJhY2ssIHZpZGVvVHJhY2spIHtcbiAgICB0aGlzLm1wNHJlbXV4ZXIucmVtdXgoYXVkaW9UcmFjaywgdmlkZW9UcmFjaylcbiAgfVxuXG4gIGhhbmRsZU1ldGFEYXRhUmVhZHkgKHR5cGUsIG1ldGEpIHtcbiAgICB0aGlzLm1wNHJlbXV4ZXIub25NZXRhRGF0YVJlYWR5KHR5cGUsIG1ldGEpXG4gIH1cblxuICBoYW5kbGVFcnJvciAoZSkge1xuICAgIHRoaXMuZXJyb3IoZSlcbiAgfVxuXG4gIGhhbmRsZU5ld01lZGlhRnJhZ21lbnQgKG5ld0ZyYWcpIHtcbiAgICB0aGlzLl9pc05ld1NlZ21lbnRzQXJyaXZhbCA9IHRydWVcbiAgICB0aGlzLl9wZW5kaW5nRnJhZ21lbnRzLnB1c2gobmV3RnJhZylcbiAgICBjb25zdCB7cmFuZG9tQWNjZXNzUG9pbnRzfSA9IG5ld0ZyYWcuZnJhZ21lbnRcbiAgICBpZiAocmFuZG9tQWNjZXNzUG9pbnRzICYmIHJhbmRvbUFjY2Vzc1BvaW50cy5sZW5ndGgpIHtcbiAgICAgIHJhbmRvbUFjY2Vzc1BvaW50cy5mb3JFYWNoKHJhcCA9PiB7XG4gICAgICAgIHRoaXMuYnVmZmVyS2V5ZnJhbWVzLmFkZChyYXAuZHRzKVxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzU291cmNlT3Blbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLl9wZW5kaW5nRnJhZ21lbnRzLmxlbmd0aCkge1xuICAgICAgY29uc3QgZnJhZ21lbnQgPSB0aGlzLl9wZW5kaW5nRnJhZ21lbnRzLnNoaWZ0KClcbiAgICAgIGlmICghdGhpcy5oYW5kbGVNZWRpYUZyYWdtZW50KGZyYWdtZW50KSkge1xuICAgICAgICB0aGlzLl9wZW5kaW5nRnJhZ21lbnRzLnVuc2hpZnQoZnJhZ21lbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhbmRsZVNlZWtFbmQoKVxuICAgICAgICB0aGlzLl9wbGF5ZXIuZW1pdCgnY2FjaGV1cGRhdGUnLCB0aGlzLl9wbGF5ZXIpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTWVkaWFJbmZvUmVhZHkgKG1lZGlhSW5mbykge1xuICAgIGNvbnN0IEZUWVBfTU9PViA9IHRoaXMubXA0cmVtdXhlci5vbk1lZGlhSW5mb1JlYWR5KG1lZGlhSW5mbylcbiAgICBpZiAoIXRoaXMuZnR5cF9tb292KSB7XG4gICAgICB0aGlzLmZ0eXBfbW9vdiA9IEZUWVBfTU9PVlxuICAgICAgdGhpcy5lbWl0KCdyZWFkeScsIEZUWVBfTU9PVilcbiAgICB9XG4gIH1cblxuICBpbml0RXZlbnRCaW5kICgpIHtcbiAgICB0aGlzLnRhZ0RlbXV4ZXIuaGFuZGxlRGF0YVJlYWR5ID0gdGhpcy5oYW5kbGVEYXRhUmVhZHkuYmluZCh0aGlzKVxuICAgIHRoaXMudGFnRGVtdXhlci5oYW5kbGVNZWRpYUluZm9SZWFkeSA9IHRoaXMuaGFuZGxlTWVkaWFJbmZvUmVhZHkuYmluZCh0aGlzKVxuICAgIHRoaXMudGFnRGVtdXhlci5oYW5kbGVNZXRhRGF0YVJlYWR5ID0gdGhpcy5oYW5kbGVNZXRhRGF0YVJlYWR5LmJpbmQodGhpcylcbiAgICB0aGlzLnRhZ0RlbXV4ZXIuc2V0RXZlbnRCaW5kKClcbiAgICB0aGlzLm1wNHJlbXV4ZXIuaGFuZGxlTWVkaWFGcmFnbWVudCA9IHRoaXMuaGFuZGxlTmV3TWVkaWFGcmFnbWVudC5iaW5kKHRoaXMpXG4gIH1cblxuICByZXBsYXkgKCkge1xuICAgIHRoaXMuaXNTb3VyY2VPcGVuID0gZmFsc2VcbiAgICB0aGlzLnJhbmdlID0ge1xuICAgICAgc3RhcnQ6IHRoaXMuX3N0b3JlLm1ldGFFbmRQb3NpdGlvbixcbiAgICAgIGVuZDogdGhpcy5nZXROZXh0UmFuZ2VFbmQoMCwgdGhpcy5fY29uZmlnLnByZWxvYWRUaW1lKSAtIDFcbiAgICB9XG4gICAgdGhpcy5tcDRyZW11eGVyLnNlZWsoKVxuICAgIHRoaXMuZmx2UGFyc2VyLnNlZWsoKVxuICAgIHRoaXMuY2xlYXJCdWZmZXIoKVxuICAgIHRoaXMubG9hZFNlZ21lbnRzKGZhbHNlKVxuICB9XG5cbiAgY2xlYXJCdWZmZXIgKCkge1xuICAgIHRoaXMuX3BlbmRpbmdGcmFnbWVudHMgPSBbXVxuICAgIHRoaXMuX3BlbmRpbmdSZW1vdmVSYW5nZSA9IFtdXG4gIH1cbiAgdW5iaW5kRXZlbnRzICgpIHtcbiAgICB0aGlzLnRhZ0RlbXV4ZXIuaGFuZGxlRGF0YVJlYWR5ID0gTk9PUFxuICAgIHRoaXMudGFnRGVtdXhlci5oYW5kbGVNZWRpYUluZm9SZWFkeSA9IE5PT1BcbiAgICB0aGlzLnRhZ0RlbXV4ZXIuaGFuZGxlTWV0YURhdGFSZWFkeSA9IE5PT1BcbiAgICB0aGlzLnRhZ0RlbXV4ZXIuc2V0RXZlbnRCaW5kKClcbiAgICB0aGlzLm1wNHJlbXV4ZXIuaGFuZGxlTWVkaWFGcmFnbWVudCA9IE5PT1BcbiAgfVxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLm1wNHJlbXV4ZXIuZGVzdHJveSgpXG4gICAgdGhpcy5mbHZQYXJzZXIuZGVzdHJveSgpXG4gICAgdGhpcy50YWdEZW11eGVyLmRlc3Ryb3koKVxuICAgIHRoaXMubXA0cmVtdXhlciA9IG51bGxcbiAgICB0aGlzLmZsdlBhcnNlciA9IG51bGxcbiAgICB0aGlzLnRhZ0RlbXV4ZXIgPSBudWxsXG4gICAgdGhpcy5sb2FkU2VnbWVudHMgPSAoKSA9PiBudWxsXG4gICAgdGhpcy5fc3RvcmUgPSBudWxsXG4gICAgdGhpcy5jbGVhckJ1ZmZlcigpXG4gICAgdGhpcy5zdG9wID0gdHJ1ZVxuICAgIHRoaXMubG9hZFRhc2sgJiYgdGhpcy5sb2FkVGFzay5jYW5jZWwoKVxuICB9XG5cbiAgc2VlayAodGFyZ2V0KSB7XG4gICAgdGhpcy5sb2FkVGFzay5jYW5jZWwoKVxuICAgIGNvbnN0IHtrZXlmcmFtZXMgPSB7fSwgdmlkZW9UaW1lU2NhbGV9ID0gdGhpcy5fc3RvcmVcbiAgICBsZXQgc2Vla1N0YXJ0ID0gdGFyZ2V0ICogdmlkZW9UaW1lU2NhbGVcbiAgICBsZXQgc3RhcnRGaWxlUG9zXG4gICAgbGV0IGVuZEZpbGVQb3NcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLm1pbihrZXlmcmFtZXMuZmlsZVBvc2l0aW9ucy5sZW5ndGgsIGtleWZyYW1lcy50aW1lcy5sZW5ndGgpXG4gICAgbGV0IHtwcmVsb2FkVGltZX0gPSB0aGlzLl9jb25maWdcblxuICAgIGZ1bmN0aW9uIGdldEVuZEZpbGVQb3MgKHRpbWUsIGlkeCkge1xuICAgICAgaWYgKGlkeCA9PT0ga2V5ZnJhbWVzLnRpbWVzLmxlbmd0aCkge1xuICAgICAgICBlbmRGaWxlUG9zID0gaWR4XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgaWYgKHRpbWUgPD0gcHJlbG9hZFRpbWUgJiYgcHJlbG9hZFRpbWUgPD0ga2V5ZnJhbWVzLnRpbWVzW2lkeCArIDFdKSB7XG4gICAgICAgIGVuZEZpbGVQb3MgPSBpZHhcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIC8vIOmcgOimgeWkhOeQhkVPRueahOaDheWGtVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgbG8gPSAwXG4gICAgbGV0IGhpID0gbGVuZ3RoIC0gMlxuICAgIHdoaWxlIChsbyA8PSBoaSkge1xuICAgICAgbGV0IG1pZCA9IE1hdGguZmxvb3IoKGxvICsgaGkpIC8gMilcbiAgICAgIGxldCBjdXJyZW50VGltZSA9IGtleWZyYW1lcy50aW1lc1ttaWRdXG4gICAgICBsZXQgbmV4dFRpbWUgPSBrZXlmcmFtZXMudGltZXNbbWlkICsgMV0gPyBrZXlmcmFtZXMudGltZXNbbWlkICsgMV0gOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxuICAgICAgaWYgKChjdXJyZW50VGltZSA8PSBzZWVrU3RhcnQgJiYgc2Vla1N0YXJ0IDw9IG5leHRUaW1lKSB8fCBsbyA9PT0gaGkpIHtcbiAgICAgICAgd2hpbGUgKGtleWZyYW1lcy50aW1lc1ttaWRdID49IHNlZWtTdGFydCkge1xuICAgICAgICAgIG1pZCAtPSAxXG4gICAgICAgIH1cbiAgICAgICAgc3RhcnRGaWxlUG9zID0gbWlkIC0gMVxuICAgICAgICBwcmVsb2FkVGltZSA9IHByZWxvYWRUaW1lICogdmlkZW9UaW1lU2NhbGUgKyBzZWVrU3RhcnRcbiAgICAgICAga2V5ZnJhbWVzLnRpbWVzLmV2ZXJ5KGdldEVuZEZpbGVQb3MpXG4gICAgICAgIGJyZWFrXG4gICAgICB9IGVsc2UgaWYgKHNlZWtTdGFydCA8IGN1cnJlbnRUaW1lKSB7XG4gICAgICAgIGhpID0gbWlkIC0gMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG8gPSBtaWQgKyAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzU2Vla2luZykge1xuICAgICAgdGhpcy5pc1NlZWtpbmcgPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0b3JlLmNsZWFyVGFncygpXG4gICAgfVxuICAgIHRoaXMuX3BlbmRpbmdGcmFnbWVudHMgPSBbXVxuICAgIHRoaXMubXA0cmVtdXhlci5zZWVrKClcbiAgICB0aGlzLmZsdlBhcnNlci5zZWVrKClcbiAgICBWb2RUYXNrLmNsZWFyKClcbiAgICBjb25zdCBfcmFuZ2UgPSB0aGlzLnJhbmdlXG4gICAgaWYgKGtleWZyYW1lcy5maWxlUG9zaXRpb25zW3N0YXJ0RmlsZVBvc10gPCBfcmFuZ2UuZW5kKSB7XG4gICAgICBzdGFydEZpbGVQb3MgKz0gMVxuICAgICAgZW5kRmlsZVBvcyArPSAxXG4gICAgfVxuICAgIHRoaXMucmFuZ2UgPSB7XG4gICAgICBzdGFydDoga2V5ZnJhbWVzLmZpbGVQb3NpdGlvbnNbc3RhcnRGaWxlUG9zXSxcbiAgICAgIGVuZDoga2V5ZnJhbWVzLmZpbGVQb3NpdGlvbnNbZW5kRmlsZVBvc10gLSAxIHx8ICcnXG4gICAgfVxuICAgIHRoaXMuYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgdGhpcy5sb2FkU2VnbWVudHMoZmFsc2UpXG4gIH1cblxuICBnZXQgc2V0Rmx2ICgpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdEZsYWcgPyB0aGlzLnNldEZsdkZpcnN0IDogdGhpcy5zZXRGbHZVc3VhbGx5XG4gIH1cblxuICBnZXQgaXNNZWRpYUluZm9SZWFkeSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JlLm1lZGlhSW5mby5pc0NvbXBsZXRlXG4gIH1cblxuICBnZXQgdmlkZW9EdXJhdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JlLm1lZGlhSW5mby5kdXJhdGlvblxuICB9XG5cbiAgZ2V0IGhhc1BlbmRpbmdGcmFnbWVudHMgKCkge1xuICAgIHJldHVybiAhIXRoaXMuX3BlbmRpbmdGcmFnbWVudHMubGVuZ3RoXG4gIH1cblxuICBnZXQgcGVuZGluZ0ZyYWdtZW50cyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlbmRpbmdGcmFnbWVudHNcbiAgfVxuXG4gIGdldCB2aWRlb1RpbWVTY2FsZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JlLnZpZGVvVGltZVNjYWxlXG4gIH1cblxuICBnZXQgaGFzUGVuZGluZ1JlbW92ZVJhbmdlcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlbmRpbmdSZW1vdmVSYW5nZS5sZW5ndGhcbiAgfVxuXG4gIGdldCBwZW5kaW5nUmVtb3ZlUmFuZ2VzICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGVuZGluZ1JlbW92ZVJhbmdlXG4gIH1cblxuICBnZXQgaXNTZWVrYWJsZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JlLmlzU2Vla2FibGVcbiAgfVxufVxuIiwiaW1wb3J0IEV4cEdvbG9tYiBmcm9tICAnLi4vdXRpbHMvRXhwR29sb21iJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNQU1BhcnNlciB7XG4gICAgc3RhdGljIGdldFByb2ZpbGVTdHIgKHByb2ZpbGVJZGMpIHtcbiAgICAgICAgc3dpdGNoIChwcm9maWxlSWRjKSB7XG4gICAgICAgICAgICBjYXNlIDY2OlxuICAgICAgICAgICAgICAgIHJldHVybiAnQmFzZWxpbmUnO1xuICAgICAgICAgICAgY2FzZSA3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ01haW4nO1xuICAgICAgICAgICAgY2FzZSA4ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0V4dGVuZGVkJztcbiAgICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgICAgIHJldHVybiAnSGlnaCc7XG4gICAgICAgICAgICBjYXNlIDExMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0hpZ2gxMCc7XG4gICAgICAgICAgICBjYXNlIDEyMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0hpZ2g0MjInO1xuICAgICAgICAgICAgY2FzZSAyNDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdIaWdoNDQ0JztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdVbmtub3duJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRMZXZlbFN0ciAobGV2ZWxJZGMpIHtcbiAgICAgICAgcmV0dXJuIChsZXZlbElkYyAvIDEwKS50b0ZpeGVkKDEpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRDaHJvbWFGb3JtYXRTdHIgKGNocm9tYSkge1xuICAgICAgICBzd2l0Y2ggKGNocm9tYSkge1xuICAgICAgICAgICAgY2FzZSA0MjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuICc0OjI6MCc7XG4gICAgICAgICAgICBjYXNlIDQyMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJzQ6MjoyJztcbiAgICAgICAgICAgIGNhc2UgNDQ0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnNDo0OjQnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1Vua25vd24nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVhZCBTUFNcbiAgICAgKiBAcGFyYW0gb3JpZ2luQXJyXG4gICAgICovXG4gICAgc3RhdGljIHBhcnNlU1BTIChvcmlnaW5BcnIpIHtcblxuICAgICAgICBsZXQgcmJzcCA9IFNQU1BhcnNlci5fZWJzcDJyYnNwKG9yaWdpbkFycik7XG5cbiAgICAgICAgY29uc3Qgc3RyZWFtID0gbmV3IEV4cEdvbG9tYihyYnNwKTtcbiAgICAgICAgY29uc3Qgc3BzQ29uZmlnID0gc3RyZWFtLnJlYWRTUFMoKTtcbiAgICAgICAgY29uc3QgeyBjaHJvbWFGb3JtYXQsIGxldmVsSWRjLCBwcm9maWxlSWRjIH0gPSBzcHNDb25maWc7XG4gICAgICAgIHNwc0NvbmZpZy5wcm9maWxlU3RyaW5nID0gU1BTUGFyc2VyLmdldFByb2ZpbGVTdHIocHJvZmlsZUlkYyk7XG4gICAgICAgIHNwc0NvbmZpZy5sZXZlbFN0cmluZyA9IFNQU1BhcnNlci5nZXRMZXZlbFN0cihsZXZlbElkYyk7XG4gICAgICAgIHNwc0NvbmZpZy5jaHJvbWFGb3JtYXRTdHJpbmcgPSBTUFNQYXJzZXIuZ2V0Q2hyb21hRm9ybWF0U3RyKGNocm9tYUZvcm1hdCk7XG5cbiAgICAgICAgcmV0dXJuIHNwc0NvbmZpZztcblxuICAgIH1cblxuICAgIC8vXG4gICAgc3RhdGljIF9lYnNwMnJic3AgKG9yaWdpbkFycikge1xuICAgICAgICBjb25zdCBvcmlnaW5MZW4gPSAgb3JpZ2luQXJyLmJ5dGVMZW5ndGg7XG4gICAgICAgIGNvbnN0IGRpc3QgPSBuZXcgVWludDhBcnJheShvcmlnaW5BcnIuYnl0ZUxlbmd0aCk7XG4gICAgICAgIGxldCBkaXN0U2l6ZSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG9yaWdpbkxlbjsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDIgJiYgb3JpZ2luQXJyW2ldID09PSAzICYmIG9yaWdpbkFycltpIC0gMV0gPT09IDAgJiYgb3JpZ2luQXJyW2kgLSAyXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlzdFtkaXN0U2l6ZSsrXSA9IG9yaWdpbkFycltpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShkaXN0LmJ1ZmZlciwgMCwgZGlzdFNpemUpO1xuICAgIH1cbn0iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSAnLi4vdXRpbHMvT2JzZXJ2ZXInXG5pbXBvcnQgRXJyb3JzIGZyb20gJy4uL21vZGVscy9lcnJvcidcblxuLyoqXG4gKiDovaznoIHlmajln7rnsbtcbiAqL1xuY2xhc3MgVHJhbnNDb2RlciB7XG4gIGNvbnN0cnVjdG9yIChzdG9yZSkge1xuICAgIGlmIChzdG9yZSkge1xuICAgICAgdGhpcy5fc3RvcmUgPSBzdG9yZVxuICAgIH1cbiAgICB0aGlzLl9vYnNlcnZlciA9IG9ic2VydmVyXG4gICAgdGhpcy5vbiA9IG9ic2VydmVyLm9uLmJpbmQob2JzZXJ2ZXIpXG4gICAgdGhpcy5lbWl0ID0gb2JzZXJ2ZXIuZW1pdC5iaW5kKG9ic2VydmVyKVxuICAgIHRoaXMub2ZmID0gb2JzZXJ2ZXIub2ZmLmJpbmQob2JzZXJ2ZXIpXG4gICAgdGhpcy5mbHVzaCA9IG9ic2VydmVyLmZsdXNoLmJpbmQob2JzZXJ2ZXIpXG4gICAgdGhpcy5vbmNlID0gb2JzZXJ2ZXIub25jZS5iaW5kKG9ic2VydmVyKVxuICB9XG4gIGVtaXRFcnJvciAodHlwZSwgZXJyb3JEZXRhaWwgPSB7bGluZTogJycsIGhhbmRsZTogJycsIG1zZzogJycsIHZlcnNpb246ICcnfSkge1xuICAgIGNvbnN0IHsgcGxheWVyLCBzdGF0ZSB9ID0gdGhpcy5fc3RvcmVcbiAgICBpZiAocGxheWVyKSB7XG4gICAgICBjb25zdCBlcnJvclRvRW1pdCA9IG5ldyBFcnJvcnModHlwZSwgcGxheWVyLmN1cnJlbnRUaW1lLCBzdGF0ZS5kdXJhdGlvbiwgJycsIHRydWUsIHBsYXllci5jb25maWcudXJsLCBwbGF5ZXIuY29uZmlnLnVybCwgcGxheWVyLmVuZGVkLCBlcnJvckRldGFpbClcbiAgICAgIHBsYXllci5lbWl0KCdlcnJvcicsIGVycm9yVG9FbWl0KVxuICAgIH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVHJhbnNDb2RlclxuIiwiLy8gcmVmcmVuY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS92aWRlby1kZXYvaGxzLmpzL2Jsb2IvbWFzdGVyL3NyYy9kZW11eC9hZHRzLmpzXG5pbXBvcnQgRGVtdXhlciBmcm9tICcuL0RlbXV4ZXInXG5pbXBvcnQgRGF0YVZpZXc0UmVhZCBmcm9tICcuLi8uLi91dGlscy9EYXRhVmlldzRSZWFkJ1xuLy8gaW1wb3J0IHsgbXAzVmVyc2lvbnMsIG1wM0JpdFJhdGUsIGF1ZGlvU2FtcGxlUmF0ZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy90eXBlcyc7XG4vLyByZXNvbHZlIOaWueazlSDop6PmnpB0YWcgIEFBQ+ino+egge+8jCDmm7TmlrBzdG9yZeS4reeahGF1ZGlvVHJhY2sgYXVkaW9NZXRhRGF0YVxuaW1wb3J0IHtcbiAgc291bmRSYXRlVHlwZXMsXG4gIHNhbXBsaW5nRnJlcXVlbmN5VHlwZXMsXG4gIEV2ZW50VHlwZXMsXG4gIGJyb3dzZXJUeXBlc1xufSBmcm9tICcuLi8uLi9jb25zdGFudHMvdHlwZXMnXG5pbXBvcnQgc25pZmZlciBmcm9tICcuLi8uLi91dGlscy9zbmlmZmVyJ1xuaW1wb3J0IEJ1ZmZlciBmcm9tICcuLi8uLi93cml0ZS9CdWZmZXInXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb0RlbXV4ZXIgZXh0ZW5kcyBEZW11eGVyIHtcbiAgY29uc3RydWN0b3IgKHN0b3JlKSB7XG4gICAgc3VwZXIoc3RvcmUpXG4gICAgdGhpcy5DTEFTU19OQU1FID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgdGhpcy5jdXJyZW50VGFnID0gbnVsbFxuICAgIHRoaXMuZGF0YSA9IG5ldyBVaW50OEFycmF5KDApXG4gICAgdGhpcy5yZWFkT2Zmc2V0ID0gMFxuICAgIHRoaXMuX3N0b3JlLmF1ZGlvTWV0YURhdGEgPSBudWxsXG4gICAgdGhpcy5oYW5kbGVEYXRhUmVhZHkgPSAoKSA9PiB7fVxuICAgIHRoaXMuaGFuZGxlTWV0YURhdGFSZWFkeSA9ICgpID0+IHt9XG4gICAgdGhpcy5oYW5kbGVNZWRpYUluZm9SZWFkeSA9ICgpID0+IHt9XG4gIH1cbiAgcmVzb2x2ZSAodGFnKSB7XG4gICAgdGhpcy5yZWFkT2Zmc2V0ID0gMFxuICAgIGNvbnN0IHsgX3N0b3JlOiBzdG9yZSB9ID0gdGhpc1xuICAgIC8vIOS/ruaUuXN0b3Jl5Lit55qEYXVkaW9UcmFjayBhdWRpb01ldGFEYXRhXG4gICAgY29uc3QgeyBhdWRpb1RyYWNrOiB0cmFjayB9ID0gc3RvcmVcbiAgICB0aGlzLmN1cnJlbnRUYWcgPSB0YWdcbiAgICB0aGlzLmRhdGEgPSB0YWcuYm9keVxuICAgIGxldCB7XG4gICAgICBhdWRpb01ldGFEYXRhOiBtZXRhXG4gICAgfSA9IHN0b3JlXG5cbiAgICBpZiAoIW1ldGEpIHtcbiAgICAgIG1ldGEgPSBzdG9yZS5hdWRpb01ldGFEYXRhID0ge31cbiAgICAgIHN0b3JlLmF1ZGlvTWV0YURhdGEgPSB0aGlzLmluaXRBdWRpb01ldGEobWV0YSlcbiAgICB9XG5cbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldzRSZWFkKHRhZy5ib2R5LmJ1ZmZlciwgdGhpcylcblxuICAgIGNvbnN0IHNvdW5kID0gZHYuZ2V0VWludDgoKVxuXG4gICAgY29uc3Qgc291bmRGb3JtYXRJZHggPSBzb3VuZCA+Pj4gNCAvLyAgVUludDRcbiAgICBjb25zdCBzb3VuZFJhdGUgPSAoc291bmQgJiAxMikgPj4+IDIgLy8gIFVJbnQyXG4gICAgLy8gY29uc3Qgc291bmRTaXplID0gKHNvdW5kICYgMikgPj4+IDEgLy8gICBVSW50MVxuICAgIGNvbnN0IHNvdW5kVHlwZSA9IChzb3VuZCAlIDEpIC8vIFVJbnQxXG5cbiAgICBtZXRhLmF1ZGlvU2FtcGxlUmF0ZSA9IHNvdW5kUmF0ZVR5cGVzW3NvdW5kUmF0ZV1cbiAgICBtZXRhLmNoYW5uZWxDb3VudCA9IHNvdW5kVHlwZSA9PT0gMCA/IDEgOiAyXG5cbiAgICBpZiAoc291bmRGb3JtYXRJZHggIT09IDEwICYmIHNvdW5kRm9ybWF0SWR4ICE9PSAyKSB7XG4gICAgICB0aGlzLmVycm9yKCdvbmx5IHN1cHBvcnQgQUFDIEF1ZGlvIGZvcm1hdCBzbyBmYXInKVxuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIGlmIChzb3VuZEZvcm1hdElkeCA9PT0gMTApIHsgLy8gQUFDXG4gICAgICBjb25zdCBhYWNJbmZvID0gdGhpcy5fcGFyc2VBQUNBdWRpbygpXG4gICAgICBpZiAoIWFhY0luZm8pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgZGF0YTogYWFjRGF0YSwgZGF0YTogeyBzYW1wbGVGcmVxIH0gfSA9IGFhY0luZm9cbiAgICAgIGlmIChhYWNJbmZvLnBhY2tldFR5cGUgPT09IDApIHsgLy8gQUFDIHNlcXVlbmNlIGhlYWRlclxuICAgICAgICBtZXRhLnNhbXBsZVJhdGUgPSBzYW1wbGVGcmVxXG4gICAgICAgIG1ldGEuY2hhbm5lbENvdW50ID0gYWFjRGF0YS5jaGFubmVsQ291bnRcbiAgICAgICAgbWV0YS5jb2RlYyA9IGFhY0RhdGEuY29kZWNcbiAgICAgICAgbWV0YS5tYW5pZmVzdENvZGVjID0gYWFjRGF0YS5tYW5pZmVzdENvZGVjXG4gICAgICAgIG1ldGEuY29uZmlnID0gYWFjRGF0YS5jb25maWdcbiAgICAgICAgbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiA9IDEwMjQgLyBzYW1wbGVGcmVxICogbWV0YS50aW1lU2NhbGVcbiAgICAgICAgaWYgKHN0b3JlLmhhc0luaXRpYWxNZXRhRGlzcGF0Y2hlZCkge1xuICAgICAgICAgIGlmIChzdG9yZS52aWRlb1RyYWNrLmxlbmd0aCB8fCBzdG9yZS5hdWRpb1RyYWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVEYXRhUmVhZHkoc3RvcmUudmlkZW9UcmFjaywgc3RvcmUuYXVkaW9UcmFjaylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RvcmUuc3RhdGUuX2F1ZGlvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGFuZGxlTWV0YURhdGFSZWFkeSgnYXVkaW8nLCBtZXRhKVxuXG4gICAgICAgIGNvbnN0IHsgbWVkaWFJbmZvOiBtaSB9ID0gc3RvcmVcbiAgICAgICAgbWkuYXVkaW9Db2RlYyA9IG1ldGEuY29kZWNcbiAgICAgICAgbWkuYXVkaW9TYW1wbGVSYXRlID0gbWV0YS5zYW1wbGVSYXRlXG4gICAgICAgIG1pLmF1ZGlvQ2hhbm5lbENvdW50ID0gbWV0YS5jaGFubmVsQ291bnRcbiAgICAgICAgbWkuYXVkaW9Db25maWcgPSBtZXRhLmNvbmZpZ1xuICAgICAgICBpZiAobWkuaGFzVmlkZW8pIHtcbiAgICAgICAgICBpZiAobWkudmlkZW9Db2RlYykge1xuICAgICAgICAgICAgbWkubWltZVR5cGUgPSBgdmlkZW8veC1mbHY7IGNvZGVjcz1cIiR7bWkudmlkZW9Db2RlY30sJHttaS5hdWRpb0NvZGVjfVwiYFxuICAgICAgICAgICAgbWkuY29kZWMgPSBtaS5taW1lVHlwZS5yZXBsYWNlKCd4LWZsdicsICdtcDQnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtaS5taW1lVHlwZSA9IGB2aWRlby94LWZsdjsgY29kZWNzPVwiJHttaS5hdWRpb0NvZGVjfVwiYFxuICAgICAgICAgIG1pLmNvZGVjID0gbWkubWltZVR5cGUucmVwbGFjZSgneC1mbHYnLCAnbXA0JylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtaS5pc0NvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVNZWRpYUluZm9SZWFkeShtaSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhYWNJbmZvLnBhY2tldFR5cGUgPT09IDEpIHsgLy8gQUFDIHJhdyBmcmFtZSBkYXRhXG4gICAgICAgIGxldCBkdHMgPSBzdG9yZS5zdGF0ZS50aW1lU3RhbXBCYXNlICsgdGhpcy5jdXJyZW50VGFnLmdldFRpbWUoKVxuICAgICAgICBsZXQgYWFjU2FtcGxlID0geyB1bml0OiBhYWNJbmZvLmRhdGEsIGxlbmd0aDogYWFjSW5mby5kYXRhLmJ5dGVMZW5ndGgsIGR0czogZHRzLCBwdHM6IGR0cyB9XG4gICAgICAgIHRyYWNrLnNhbXBsZXMucHVzaChhYWNTYW1wbGUpXG4gICAgICAgIHRyYWNrLmxlbmd0aCArPSBhYWNJbmZvLmRhdGEubGVuZ3RoXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5yZXNldFN0YXR1cygpXG4gIH1cblxuICBfcGFyc2VBQUNBdWRpbyAoKSB7XG4gICAgaWYgKHRoaXMudW5yZWFkTGVuZ3RoIDw9IDEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBhYWNEYXRhID0ge31cbiAgICBsZXQgYWFjQXJyYXkgPSBuZXcgVWludDhBcnJheSh0aGlzLmRhdGEuYnVmZmVyLCB0aGlzLnJlYWRPZmZzZXQsIHRoaXMudW5yZWFkTGVuZ3RoKVxuICAgIGNvbnN0IHBhY2tldFR5cGUgPSBhYWNBcnJheVswXVxuICAgIHRoaXMucmVhZE9mZnNldCArPSAxXG4gICAgYWFjRGF0YS5wYWNrZXRUeXBlID0gcGFja2V0VHlwZVxuICAgIGlmICghcGFja2V0VHlwZSkge1xuICAgICAgY29uc3QgeyBwb3NpdGlvbiwgdGFnU2l6ZSB9ID0gdGhpcy5jdXJyZW50VGFnXG4gICAgICB0aGlzLl9zdG9yZS5tZXRhRW5kUG9zaXRpb24gPSBwb3NpdGlvbiArIEJ1ZmZlci5yZWFkQXNJbnQodGFnU2l6ZSkgKyA0XG4gICAgICBhYWNEYXRhLmRhdGEgPSB0aGlzLl9wYXJzZUFBQ0F1ZGlvU3BlY2lmaWNDb25maWcoKSAvLyBBQUMgU2VxdWVuY2UgaGVhZGVyXG4gICAgfSBlbHNlIHtcbiAgICAgIGFhY0RhdGEuZGF0YSA9IGFhY0FycmF5LnNsaWNlKDEpXG4gICAgfVxuXG4gICAgcmV0dXJuIGFhY0RhdGFcbiAgfVxuICBfcGFyc2VBQUNBdWRpb1NwZWNpZmljQ29uZmlnICgpIHtcbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldzRSZWFkKHRoaXMuZGF0YS5idWZmZXIsIHRoaXMpXG4gICAgY29uc3QgeyBnZXRBbmROdW0gfSA9IERhdGFWaWV3NFJlYWRcblxuICAgIGxldCByZXN1bHRPYmogPSB7XG4gICAgICBzYW1wbGluZ0ZyZXF1ZW5jeTogbnVsbCxcbiAgICAgIGV4dEF1ZGlvT2JqZWN0VHlwZTogbnVsbCxcbiAgICAgIGV4dEF1ZGlvU2FtcGxpbmdJZHg6IG51bGxcbiAgICB9XG4gICAgbGV0IGNvbmZpZyA9IHt9XG4gICAgY29uc3QgVUludDAgPSBkdi5nZXRVaW50OCgpXG4gICAgY29uc3QgVUludDEgPSBkdi5nZXRVaW50OCgpXG5cbiAgICBsZXQgdGVtcEF1ZGlvT2JqZWN0VHlwZVxuICAgIGxldCBhdWRpb09iamVjdFR5cGUgPSB0ZW1wQXVkaW9PYmplY3RUeXBlID0gVUludDAgPj4+IDMgLy8gVUludDVcbiAgICBsZXQgc2FtcGxpbmdJZHggPSAoKFVJbnQwICYgZ2V0QW5kTnVtKDUsIDcpKSA8PCAxKSB8IChVSW50MSA+Pj4gNykgLy8gVUludDRcbiAgICBpZiAoc2FtcGxpbmdJZHggPCAwIHx8IHNhbXBsaW5nSWR4ID4gc2FtcGxpbmdGcmVxdWVuY3lUeXBlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZW1pdEVycm9yKCdkZWNvZGVyJywge1xuICAgICAgICBsaW5lOiAnMTQxJyxcbiAgICAgICAgaGFuZGxlOiAnX3BhcnNlQUFDQXVkaW9TcGVjaWZpY0NvbmZpZycsXG4gICAgICAgIG1zZzogYGludmFsaWQgc2FtcGxpbmdGcmVxdWVuY3lJbmRleCAke3NhbXBsaW5nSWR4fWBcbiAgICAgIH0pXG4gICAgICB0aGlzLmRpc3BhdGNoKEV2ZW50VHlwZXMuRVJST1IsIGBlcnJvciBzYW1wbGluZ0ZyZXF1ZW5jeUluZGV4OiAke3NhbXBsaW5nSWR4fWApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZXN1bHRPYmouc2FtcGxpbmdGcmVxdWVuY3kgPSBzYW1wbGluZ0ZyZXF1ZW5jeVR5cGVzW3NhbXBsaW5nSWR4XVxuXG4gICAgbGV0IGNoYW5uZWxDb3VudCA9IHJlc3VsdE9iai5jaGFubmVsQ291bnQgPSAoVUludDEgJiBnZXRBbmROdW0oMSwgNCkpID4+PiAzXG4gICAgaWYgKGNoYW5uZWxDb3VudCA8IDAgfHwgY2hhbm5lbENvdW50ID4gNykge1xuICAgICAgdGhpcy5lbWl0RXJyb3IoJ2RlY29kZXInLCB7XG4gICAgICAgIGxpbmU6ICcxNTQnLFxuICAgICAgICBoYW5kbGU6ICdfcGFyc2VBQUNBdWRpb1NwZWNpZmljQ29uZmlnJyxcbiAgICAgICAgbXNnOiBgaW52YWxpZCBBdWRpbyBDaGFubmVsIENvdW50OiAke2NoYW5uZWxDb3VudH1gXG4gICAgICB9KVxuICAgICAgdGhpcy5kaXNwYXRjaChFdmVudFR5cGVzLkVSUk9SLCBgZXJyb3IgQXVkaW8gQ2hhbm5lbCBDb3VudDogJHtjaGFubmVsQ291bnR9YClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChhdWRpb09iamVjdFR5cGUgPT09IDUpIHsgLy8gSEUtQUFDXG4gICAgICBjb25zdCBVSW50MiA9IGR2LmdldFVpbnQ4KClcbiAgICAgIHJlc3VsdE9iai5leHRBdWRpb1NhbXBsaW5nSWR4ID0gKChVSW50MSAmIGdldEFuZE51bSg1LCA3KSkgPDwgMSkgfCBVSW50MiA+Pj4gN1xuICAgICAgcmVzdWx0T2JqLmV4dEF1ZGlvT2JqZWN0VHlwZSA9IChVSW50MiAmIGdldEFuZE51bSgxLCA1KSkgPj4+IDJcbiAgICB9XG5cbiAgICBpZiAoc25pZmZlci5icm93c2VyID09PSBicm93c2VyVHlwZXMuRklSRV9GT1gpIHtcbiAgICAgIGlmIChzYW1wbGluZ0lkeCA+PSA2KSB7XG4gICAgICAgIC8vIEhFLUFBQyB1c2VzIFNCUiwgaGlnaCBmcmVxdWVuY2llcyBhcmUgY29uc3RydWN0ZWQgZnJvbSBsb3cgZnJlcXVlbmNpZXNcbiAgICAgICAgYXVkaW9PYmplY3RUeXBlID0gNVxuICAgICAgICBjb25maWcgPSBuZXcgQXJyYXkoNClcbiAgICAgICAgcmVzdWx0T2JqLmV4dEF1ZGlvU2FtcGxpbmdJZHggPSBzYW1wbGluZ0lkeCAtIDNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF1ZGlvT2JqZWN0VHlwZSA9IDJcbiAgICAgICAgY29uZmlnID0gbmV3IEFycmF5KDIpXG4gICAgICAgIHJlc3VsdE9iai5leHRBdWRpb1NhbXBsaW5nSWR4ID0gc2FtcGxpbmdJZHhcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNuaWZmZXIub3MuaXNBbmRyb2lkKSB7XG4gICAgICAvLyBBbmRyb2lkIDogYWx3YXlzIHVzZSBBQUNcbiAgICAgIGF1ZGlvT2JqZWN0VHlwZSA9IDJcbiAgICAgIGNvbmZpZyA9IG5ldyBBcnJheSgyKVxuICAgICAgcmVzdWx0T2JqLmV4dEF1ZGlvU2FtcGxpbmdJZHggPSBzYW1wbGluZ0lkeFxuICAgIH0gZWxzZSB7XG4gICAgICAvKiAgZm9yIG90aGVyIGJyb3dzZXJzIChDaHJvbWUvVml2YWxkaS9PcGVyYSAuLi4pXG4gICAgICAgICAgICAgICAgYWx3YXlzIGZvcmNlIGF1ZGlvIHR5cGUgdG8gYmUgSEUtQUFDIFNCUiwgYXMgc29tZSBicm93c2VycyBkbyBub3Qgc3VwcG9ydCBhdWRpbyBjb2RlYyBzd2l0Y2ggcHJvcGVybHkgKGxpa2UgQ2hyb21lIC4uLilcbiAgICAgICAgICAgICovXG4gICAgICBhdWRpb09iamVjdFR5cGUgPSA1XG4gICAgICByZXN1bHRPYmouZXh0ZW5zaW9uU2FtcGxpbmdJbmRleCA9IHNhbXBsaW5nSWR4XG4gICAgICBjb25maWcgPSBuZXcgQXJyYXkoNClcblxuICAgICAgaWYgKHNhbXBsaW5nSWR4ID49IDYpIHtcbiAgICAgICAgcmVzdWx0T2JqLmV4dGVuc2lvblNhbXBsaW5nSWR4ID0gc2FtcGxpbmdJZHggLSAzXG4gICAgICB9IGVsc2UgaWYgKGNoYW5uZWxDb3VudCA9PT0gMSkge1xuICAgICAgICBhdWRpb09iamVjdFR5cGUgPSAyXG4gICAgICAgIGNvbmZpZyA9IG5ldyBBcnJheSgyKVxuICAgICAgICByZXN1bHRPYmouZXh0ZW5zaW9uU2FtcGxpbmdJbmRleCA9IHNhbXBsaW5nSWR4XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uZmlnWzBdID0gYXVkaW9PYmplY3RUeXBlIDw8IDNcbiAgICBjb25maWdbMF0gfD0gKHNhbXBsaW5nSWR4ICYgMHgwRSkgPj4gMVxuICAgIGNvbmZpZ1sxXSB8PSAoc2FtcGxpbmdJZHggJiAweDAxKSA8PCA3XG4gICAgY29uZmlnWzFdIHw9IGNoYW5uZWxDb3VudCA8PCAzXG4gICAgaWYgKGF1ZGlvT2JqZWN0VHlwZSA9PT0gNSkge1xuICAgICAgY29uZmlnWzFdIHw9IChyZXN1bHRPYmouZXh0QXVkaW9TYW1wbGluZ0lkeCAmIDB4MEUpID4+IDFcbiAgICAgIGNvbmZpZ1syXSA9IChyZXN1bHRPYmouZXh0ZW5zaW9uU2FtcGxpbmdJZHggJiAweDAxKSA8PCA3XG4gICAgICAvLyBhZHRzT2JqZWN0VHlwZSAoZm9yY2UgdG8gMiwgY2hyb21lIGlzIGNoZWNraW5nIHRoYXQgb2JqZWN0IHR5cGUgaXMgbGVzcyB0aGFuIDUgPz8/XG4gICAgICAvLyAgICBodHRwczovL2Nocm9taXVtLmdvb2dsZXNvdXJjZS5jb20vY2hyb21pdW0vc3JjLmdpdC8rL21hc3Rlci9tZWRpYS9mb3JtYXRzL21wNC9hYWMuY2NcbiAgICAgIGNvbmZpZ1syXSB8PSAyIDw8IDJcbiAgICAgIGNvbmZpZ1szXSA9IDBcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnLFxuICAgICAgc2FtcGxlRnJlcTogcmVzdWx0T2JqLnNhbXBsaW5nRnJlcXVlbmN5LFxuICAgICAgY2hhbm5lbENvdW50LFxuICAgICAgY29kZWM6IGBtcDRhLjQwLiR7YXVkaW9PYmplY3RUeXBlfWAsXG4gICAgICBtYW5pZmVzdENvZGVjOiBgbXA0YS40MC4ke3RlbXBBdWRpb09iamVjdFR5cGV9YFxuICAgIH1cbiAgfVxuXG4gIGluaXRBdWRpb01ldGEgKG1ldGEpIHtcbiAgICBjb25zdCB7IHN0YXRlLCBhdWRpb1RyYWNrOiB0cmFjayB9ID0gdGhpcy5fc3RvcmVcblxuICAgIG1ldGEuZHVyYXRpb24gPSBzdGF0ZS5kdXJhdGlvblxuICAgIG1ldGEudGltZVNjYWxlID0gc3RhdGUudGltZVNjYWxlXG4gICAgbWV0YS50eXBlID0gJ2F1ZGlvJ1xuICAgIG1ldGEuaWQgPSB0cmFjay5pZFxuXG4gICAgcmV0dXJuIG1ldGFcbiAgfVxuXG4gIHJlc2V0U3RhdHVzICgpIHtcbiAgICB0aGlzLmN1cnJlbnRUYWcgPSBudWxsXG4gICAgdGhpcy5kYXRhID0gbmV3IFVpbnQ4QXJyYXkoMClcbiAgICB0aGlzLnJlYWRPZmZzZXQgPSAwXG4gIH1cbiAgZ2V0IGRhdGFTaXplICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aFxuICB9XG5cbiAgZ2V0IHVucmVhZExlbmd0aCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNpemUgLSB0aGlzLnJlYWRPZmZzZXRcbiAgfVxufVxuIiwiaW1wb3J0IExvZyBmcm9tICcuLi8uLi91dGlscy9Mb2cnXG5pbXBvcnQgVHJhbnNDb2RlciBmcm9tICcuLi9UcmFuc0NvZGVyJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVtdXhlciBleHRlbmRzIFRyYW5zQ29kZXIge1xuICBkaXNwYXRjaCAodHlwZSwgLi4ucGF5bG9hZCkge1xuICAgIGNvbnN0IHByZWZpeCA9ICdkZW11eGVyXydcbiAgICB0aGlzLl9vYnNlcnZlci5lbWl0KGAke3ByZWZpeH0ke3R5cGV9YCwgLi4ucGF5bG9hZClcbiAgfVxuICBlcnJvciAobWVzc2FnZSkge1xuICAgIGNvbnN0IHsgQ0xBU1NfTkFNRSA9ICdEZW11eGVyJyB9ID0gdGhpc1xuICAgIExvZy5lcnJvcihgWyR7Q0xBU1NfTkFNRX0gZXJyb3JdIGAsIG1lc3NhZ2UpXG4gIH1cblxuICBpbmZvIChtZXNzYWdlKSB7XG4gICAgY29uc3QgeyBDTEFTU19OQU1FID0gJ0RlbXV4ZXInIH0gPSB0aGlzXG4gICAgTG9nLmluZm8oYFske0NMQVNTX05BTUV9IGluZm9dIGAsIG1lc3NhZ2UpXG4gIH1cblxuICBsb2cgKG1lc3NhZ2UpIHtcbiAgICBjb25zdCB7IENMQVNTX05BTUUgPSAnRGVtdXhlcicgfSA9IHRoaXNcbiAgICBMb2cubG9nKGBbJHtDTEFTU19OQU1FfSBsb2ddIGAsIG1lc3NhZ2UpXG4gIH1cblxuICB3YXJuIChtZXNzYWdlKSB7XG4gICAgY29uc3QgeyBDTEFTU19OQU1FID0gJ0RlbXV4ZXInIH0gPSB0aGlzXG4gICAgTG9nLndhcm4oYFske0NMQVNTX05BTUV9IHdhcm5dIGAsIG1lc3NhZ2UpXG4gIH1cbn1cbiIsImltcG9ydCB7IE1ldGFUeXBlcyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy90eXBlcyc7XG5pbXBvcnQgVVRGOCBmcm9tICcuLi8uLi91dGlscy9VVEY4JztcbmltcG9ydCBEZW11eGVyIGZyb20gJy4vRGVtdXhlcic7XG5cbi8qKlxuICogbWV0YeS/oeaBr+ino+aekFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhRGVtdXhlciBleHRlbmRzIERlbXV4ZXIge1xuICAgIGNvbnN0cnVjdG9yIChzdG9yZSkge1xuICAgICAgICBzdXBlcihzdG9yZSk7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgfVxuICAgIGdldCBpc0xlICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3JlLmlzTGU7XG4gICAgfVxuICAgIHJlc29sdmUgKG1ldGEsIHNpemUpIHtcbiAgICAgICAgaWYgKHNpemUgPCAzKSB7XG4gICAgICAgICAgICB0aHJvdyAnbm90IGVub3VnaCBkYXRhIGZvciBtZXRhaW5mbyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWV0YURhdGEgPSB7fTtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMucGFyc2VWYWx1ZShtZXRhKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUobWV0YSwgc2l6ZSAtIG5hbWUuYm9keVNpemUpO1xuICAgICAgICBtZXRhRGF0YVtuYW1lLmRhdGFdID0gdmFsdWUuZGF0YTtcblxuICAgICAgICB0aGlzLnJlc2V0U3RhdHVzKCk7XG4gICAgICAgIHJldHVybiBtZXRhRGF0YTtcbiAgICB9XG5cbiAgICByZXNldFN0YXR1cyAoKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgfVxuXG4gICAgcGFyc2VTdHJpbmcgKGJ1ZmZlcikge1xuICAgICAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldyhidWZmZXIsIHRoaXMucmVhZE9mZnNldCk7XG4gICAgICAgIGNvbnN0IHN0ckxlbiA9IGR2LmdldFVpbnQxNigwLCAhdGhpcy5pc0xlKTtcbiAgICAgICAgbGV0IHN0ciA9ICcnO1xuICAgICAgICBpZiAoc3RyTGVuID4gMCkge1xuICAgICAgICAgICAgc3RyID0gVVRGOC5kZWNvZGUobmV3IFVpbnQ4QXJyYXkoYnVmZmVyLCB0aGlzLnJlYWRPZmZzZXQgKyAyLCBzdHJMZW4pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0ciA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzaXplID0gc3RyTGVuICsgMjtcbiAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IHNpemU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBzdHIsXG4gICAgICAgICAgICBib2R5U2l6ZTogc3RyTGVuICsgMixcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwYXJzZURhdGUgKGJ1ZmZlciwgc2l6ZSkge1xuICAgICAgICBjb25zdCB7IGlzTGUgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGR2ID0gbmV3IERhdGFWaWV3KGJ1ZmZlciwgdGhpcy5yZWFkT2Zmc2V0LCBzaXplKTtcbiAgICAgICAgbGV0IHRzID0gZHYuZ2V0RmxvYXQ2NCgwLCAhaXNMZSk7XG4gICAgICAgIGNvbnN0IHRpbWVPZmZzZXQgPSBkdi5nZXRJbnQxNig4LCAhaXNMZSk7XG4gICAgICAgIHRzICs9IHRpbWVPZmZzZXQgKiA2MCAqIDEwMDA7XG5cbiAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IDEwO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YTogbmV3IERhdGUodHMpLFxuICAgICAgICAgICAgYm9keVNpemU6IDEwLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHBhcnNlT2JqZWN0IChidWZmZXIsIHNpemUpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMucGFyc2VTdHJpbmcoYnVmZmVyLCBzaXplKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUoYnVmZmVyLCBzaXplIC0gbmFtZS5ib2R5U2l6ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZS5kYXRhLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZS5kYXRhLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHlTaXplOiBuYW1lLmJvZHlTaXplICsgdmFsdWUuYm9keVNpemUsXG4gICAgICAgICAgICBpc09iakVuZDogdmFsdWUuaXNPYmpFbmQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcGFyc2VMb25nU3RyaW5nIChidWZmZXIpIHtcbiAgICAgICAgY29uc3QgZHYgPSBuZXcgRGF0YVZpZXcoYnVmZmVyLCB0aGlzLnJlYWRPZmZzZXQpO1xuICAgICAgICBjb25zdCBzdHJMZW4gPSBkdi5nZXRVaW50MzIoMCwgIXRoaXMuaXNMZSk7XG4gICAgICAgIGxldCBzdHIgPSAnJztcbiAgICAgICAgaWYgKHN0ckxlbiA+IDApIHtcbiAgICAgICAgICAgIHN0ciA9IFVURjguZGVjb2RlKG5ldyBVaW50OEFycmF5KGJ1ZmZlciwgdGhpcy5yZWFkT2Zmc2V0ICsgMiwgc3RyTGVuKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHIgPSAnJztcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zdCBzaXplID0gc3RyTGVuICsgNDtcbiAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IHN0ckxlbiArIDQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBzdHIsXG4gICAgICAgICAgICBib2R5U2l6ZTogc3RyTGVuICsgNCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDop6PmnpBtZXRh5Lit55qE5Y+Y6YePXG4gICAgICovXG4gICAgcGFyc2VWYWx1ZSAoZGF0YSwgc2l6ZSkge1xuICAgICAgICBsZXQgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKCk7XG4gICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgIGJ1ZmZlciA9IGRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWZmZXIgPSBkYXRhLmJ1ZmZlcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGlzTGUgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIE5VTUJFUixcbiAgICAgICAgICAgIEJPT0xFQU4sXG4gICAgICAgICAgICBTVFJJTkcsXG4gICAgICAgICAgICBPQkpFQ1QsXG4gICAgICAgICAgICBNSVhfQVJSQVksXG4gICAgICAgICAgICBPQkpFQ1RfRU5ELFxuICAgICAgICAgICAgU1RSSUNUX0FSUkFZLFxuICAgICAgICAgICAgREFURSxcbiAgICAgICAgICAgIExPTkVfU1RSSU5HLFxuICAgICAgICB9ID0gTWV0YVR5cGVzO1xuICAgICAgICBjb25zdCBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIsIHRoaXMucmVhZE9mZnNldCwgc2l6ZSk7XG4gICAgICAgIGxldCBpc09iakVuZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCB0eXBlID0gZGF0YVZpZXcuZ2V0VWludDgoMCk7XG4gICAgICAgIGxldCBvZmZzZXQgPSAxO1xuICAgICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gMTtcbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgTlVNQkVSOiB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkYXRhVmlldy5nZXRGbG9hdDY0KDEsICFpc0xlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gODtcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gODtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgQk9PTEVBTjoge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvb2xOdW0gPSBkYXRhVmlldy5nZXRVaW50OCgxKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICEhYm9vbE51bTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gMTtcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgU1RSSU5HOiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyID0gdGhpcy5wYXJzZVN0cmluZyhidWZmZXIpO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gc3RyLmRhdGE7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IHN0ci5ib2R5U2l6ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgT0JKRUNUOiB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgb2JqRW5kU2l6ZSA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQzMihzaXplIC0gNCwgIWlzTGUpICYgMHgwMEZGRkZGRikge1xuICAgICAgICAgICAgICAgICAgICBvYmpFbmRTaXplID0gMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5yZWFkT2Zmc2V0ICs9IG9mZnNldCAtIDE7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG9mZnNldCA8IHNpemUgLSA0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1mT2JqID0gdGhpcy5wYXJzZU9iamVjdChidWZmZXIsIHNpemUgLSBvZmZzZXQgLSBvYmpFbmRTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFtZk9iai5pc09iamVjdEVuZCkgeyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVthbWZPYmouZGF0YS5uYW1lXSA9IGFtZk9iai5kYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgKz0gYW1mT2JqLmJvZHlTaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0IDw9IHNpemUgLSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmsgPSBkYXRhVmlldy5nZXRVaW50MzIob2Zmc2V0IC0gMSwgIWlzTGUpICYgMHgwMEZGRkZGRjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hcmsgPT09IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZE9mZnNldCArPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIE1JWF9BUlJBWToge1xuICAgICAgICAgICAgICAgIHZhbHVlID0ge307XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IDQ7XG4gICAgICAgICAgICAgICAgbGV0IG9iakVuZFNpemUgPSAwO1xuICAgICAgICAgICAgICAgIGlmICgoZGF0YVZpZXcuZ2V0VWludDMyKHNpemUgLSA0LCAhaXNMZSkgJiAweDAwRkZGRkZGKSA9PT0gOSkge1xuICAgICAgICAgICAgICAgICAgICBvYmpFbmRTaXplID0gMztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAob2Zmc2V0IDwgc2l6ZSAtIDgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1mVmFyID0gdGhpcy5wYXJzZU9iamVjdChidWZmZXIsIHNpemUgLSBvZmZzZXQgLSBvYmpFbmRTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFtZlZhci5pc09iamVjdEVuZCkgeyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVthbWZWYXIuZGF0YS5uYW1lXSA9IGFtZlZhci5kYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgKz0gYW1mVmFyLmJvZHlTaXplO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPD0gc2l6ZSAtIDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFya2VyID0gZGF0YVZpZXcuZ2V0VWludDMyKG9mZnNldCAtIDEsICFpc0xlKSAmIDB4MDBGRkZGRkY7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXJrZXIgPT09IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IDM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgT0JKRUNUX0VORDoge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpc09iakVuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgU1RSSUNUX0FSUkFZOiB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBhcnJMZW5ndGggPSBkYXRhVmlldy5nZXRVaW50MzIoMSwgIWlzTGUpO1xuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZE9mZnNldCArPSA0O1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzY3JpcHQgPSB0aGlzLnBhcnNlVmFsdWUoYnVmZmVyLCBzaXplIC0gb2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUucHVzaChzY3JpcHQuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSBzY3JpcHQuYm9keVNpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlIERBVEU6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gdGhpcy5wYXJzZURhdGUoYnVmZmVyLCBzaXplIC0gMSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkYXRlLmRhdGE7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IGRhdGUuYm9keVNpemU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgTE9ORV9TVFJJTkc6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb25nU3RyID0gdGhpcy5wYXJzZUxvbmdTdHJpbmcoYnVmZmVyLCBzaXplIC0gMSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBsb25nU3RyLmRhdGE7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IGxvbmdTdHIuYm9keVNpemU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBzaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlLFxuICAgICAgICAgICAgYm9keVNpemU6IG9mZnNldCxcbiAgICAgICAgICAgIGlzT2JqRW5kOiBpc09iakVuZCxcbiAgICAgICAgfTtcbiAgICB9XG5cbn1cblxuIiwiaW1wb3J0IERlbXV4ZXIgZnJvbSAnLi9EZW11eGVyJ1xuaW1wb3J0IE1ldGFEZW11eGVyIGZyb20gJy4vTWV0YURlbXV4ZXInXG5pbXBvcnQgVmlkZW9EZW11eGVyIGZyb20gJy4vVmlkZW9EZW11eGVyJ1xuaW1wb3J0IEF1ZGlvRGVtdXhlciBmcm9tICcuL0F1ZGlvRGVtdXhlcidcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vLi4vdXRpbHMvTG9nJ1xuaW1wb3J0IG1ldGFGaWVsZHMgZnJvbSAnLi4vLi4vY29uc3RhbnRzL21ldGFGaWVsZHMnXG5cbmNvbnN0IG5hdGl2ZUhhc1Byb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhZ2RlbXV4IGV4dGVuZHMgRGVtdXhlciB7XG4gIGNvbnN0cnVjdG9yIChzdG9yZSkge1xuICAgIHN1cGVyKHN0b3JlKVxuICAgIHRoaXMuQ0xBU1NfTkFNRSA9IHRoaXMuY29uc3RydWN0b3IubmFtZVxuICAgIHRoaXMuX21ldGFEZW11eGVyID0gbmV3IE1ldGFEZW11eGVyKHN0b3JlKVxuICAgIHRoaXMuX3ZpZGVvRGVtdXhlciA9IG5ldyBWaWRlb0RlbXV4ZXIoc3RvcmUpXG4gICAgdGhpcy5fYXVkaW9EZW11eGVyID0gbmV3IEF1ZGlvRGVtdXhlcihzdG9yZSlcbiAgICB0aGlzLl9maXJzdFBhcnNlID0gdHJ1ZVxuICAgIHRoaXMuX2RhdGFPZmZzZXQgPSAwXG4gICAgdGhpcy5oYW5kbGVNZWRpYUluZm9SZWFkeSA9ICgpID0+IHt9XG4gICAgdGhpcy5oYW5kbGVEYXRhUmVhZHkgPSAoKSA9PiB7fVxuICAgIHRoaXMuaGFuZGxlTWV0YURhdGFSZWFkeSA9ICgpID0+IHt9XG4gIH1cbiAgc2V0RXZlbnRCaW5kICgpIHtcbiAgICB0aGlzLl92aWRlb0RlbXV4ZXIuaGFuZGxlRGF0YVJlYWR5ID0gdGhpcy5oYW5kbGVEYXRhUmVhZHlcbiAgICB0aGlzLl92aWRlb0RlbXV4ZXIuaGFuZGxlTWV0YURhdGFSZWFkeSA9IHRoaXMuaGFuZGxlTWV0YURhdGFSZWFkeVxuICAgIHRoaXMuX3ZpZGVvRGVtdXhlci5oYW5kbGVNZWRpYUluZm9SZWFkeSA9IHRoaXMuaGFuZGxlTWVkaWFJbmZvUmVhZHlcbiAgICB0aGlzLl9hdWRpb0RlbXV4ZXIuaGFuZGxlRGF0YVJlYWR5ID0gdGhpcy5oYW5kbGVEYXRhUmVhZHlcbiAgICB0aGlzLl9hdWRpb0RlbXV4ZXIuaGFuZGxlTWV0YURhdGFSZWFkeSA9IHRoaXMuaGFuZGxlTWV0YURhdGFSZWFkeVxuICAgIHRoaXMuX2F1ZGlvRGVtdXhlci5oYW5kbGVNZWRpYUluZm9SZWFkeSA9IHRoaXMuaGFuZGxlTWVkaWFJbmZvUmVhZHlcbiAgfVxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl9tZXRhRGVtdXhlciA9IG51bGxcbiAgICB0aGlzLl92aWRlb0RlbXV4ZXIgPSBudWxsXG4gICAgdGhpcy5fYXVkaW9EZW11eGVyID0gbnVsbFxuICB9XG5cbiAgcmVzb2x2ZVRhZ3MgKCkge1xuICAgIGNvbnN0IHt0YWdzfSA9IHRoaXMuX3N0b3JlLnN0YXRlXG5cbiAgICBjb25zdCB7X3N0b3JlOiBzdG9yZX0gPSB0aGlzXG4gICAgY29uc3Qge3ZpZGVvVHJhY2ssIGF1ZGlvVHJhY2t9ID0gc3RvcmVcblxuICAgIHRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XG4gICAgICB0aGlzLnJlc29sdmVUYWcodGFnKVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5fc3RvcmUuaGFzSW5pdGlhbE1ldGFEaXNwYXRjaGVkKSB7XG4gICAgICBpZiAodmlkZW9UcmFjay5sZW5ndGggfHwgYXVkaW9UcmFjay5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVEYXRhUmVhZHkoYXVkaW9UcmFjaywgdmlkZW9UcmFjaylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9zdG9yZS5zdGF0ZS50YWdzID0gW11cbiAgfVxuXG4gIHJlc29sdmVUYWcgKHRhZykge1xuICAgIHN3aXRjaCAoU3RyaW5nKHRhZy50YWdUeXBlKSkge1xuICAgICAgY2FzZSAnOCc6IC8vIGF1ZGlvXG4gICAgICAgIHRoaXMuX3Jlc29sdmVBdWRpb1RhZyh0YWcpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICc5JzogLy8gdmlkZW9cbiAgICAgICAgdGhpcy5fcmVzb2x2ZVZpZGVvVGFnKHRhZylcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJzE4JzogLy8gbWV0YWRhdGFcbiAgICAgICAgdGhpcy5fcmVzb2x2ZU1ldGFUYWcodGFnKVxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIF9yZXNvbHZlQXVkaW9UYWcgKHRhZykge1xuICAgIGlmICh0YWcuYm9keVNpemUgPD0gMSkge1xuICAgICAgdGhpcy53YXJuKCdOb3QgZW5vdWdoIGRhdGEgZm9yIGF1ZGlvIHRhZyBib2R5JylcbiAgICB9XG4gICAgdGhpcy5fYXVkaW9EZW11eGVyLnJlc29sdmUodGFnKVxuICB9XG5cbiAgX3Jlc29sdmVWaWRlb1RhZyAodGFnKSB7XG4gICAgaWYgKHRhZy5ib2R5U2l6ZSA8PSAxKSB7XG4gICAgICB0aGlzLmVycm9yKCdOb3QgZW5vdWdoIGRhdGEgZm9yIHZpZGVvIHRhZyBib2R5JylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB7X2hhc1ZpZGVvLCBoYXNWaWRlb0ZsYWdPdmVycmlkZWR9ID0gdGhpc1xuICAgIGlmIChoYXNWaWRlb0ZsYWdPdmVycmlkZWQgJiYgIV9oYXNWaWRlbykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fdmlkZW9EZW11eGVyLnJlc29sdmUodGFnKVxuICB9XG5cbiAgX2luaXRNZXRhRGF0YSAobWV0YURhdGEpIHtcbiAgICBjb25zdCB7X3N0b3JlOiBzfSA9IHRoaXNcbiAgICBpZiAobmF0aXZlSGFzUHJvcC5jYWxsKG1ldGFEYXRhLCAnb25NZXRhRGF0YScpKSB7XG4gICAgICBpZiAocy5oYXNNZXRhRGF0YSkge1xuICAgICAgICBMb2dnZXIubG9nKGBbJHt0aGlzLkNMQVNTX05BTUV9XWAsICdmb3VuZCBhbm90aGVyIG1ldGEgdGFnJylcbiAgICAgIH1cbiAgICAgIHMubWV0YURhdGEgPSBtZXRhRGF0YVxuICAgICAgY29uc3Qgb25NZXRhRGF0YSA9IG1ldGFEYXRhLm9uTWV0YURhdGFcblxuICAgICAgbWV0YUZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgY29uc3Qge25hbWUsIHR5cGUsIHBhcnNlciwgb25UeXBlRXJyfSA9IGZpZWxkXG4gICAgICAgIGlmIChPYmplY3Qob25NZXRhRGF0YVtuYW1lXSkgaW5zdGFuY2VvZiB0eXBlKSB7XG4gICAgICAgICAgcGFyc2VyLmNhbGwodGhpcywgcywgb25NZXRhRGF0YSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAob25UeXBlRXJyICYmIG9uVHlwZUVyciBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBvblR5cGVFcnIocywgb25NZXRhRGF0YSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuX3N0b3JlLm1lZGlhSW5mby5fbWV0YURhdGEgPSBtZXRhRGF0YVxuICAgICAgLy8g5ZCM5q2l5Yiw5YWx5Lqrc3RvcmVcbiAgICAgIGlmICh0aGlzLl9zdG9yZS5tZWRpYUluZm8uaXNDb21wbGV0ZSkge1xuICAgICAgICB0aGlzLmhhbmRsZU1lZGlhSW5mb1JlYWR5KHRoaXMuX3N0b3JlLm1lZGlhSW5mbylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfcmVzb2x2ZU1ldGFUYWcgKHRhZykge1xuICAgIGNvbnN0IHtib2R5fSA9IHRhZ1xuICAgIGNvbnN0IG1ldGFPYmogPSB0aGlzLl9tZXRhRGVtdXhlci5yZXNvbHZlKGJvZHksIGJvZHkubGVuZ3RoKVxuICAgIHRoaXMuX2luaXRNZXRhRGF0YShtZXRhT2JqKVxuICB9XG5cbiAgX3BhcnNlS2V5ZnJhbWVzIChrZXlmcmFtZXMpIHtcbiAgICBsZXQgdGltZXMgPSBbXVxuICAgIGxldCBmaWxlUG9zaXRpb25zID0gW11cbiAgICBjb25zdCB7dmlkZW9UaW1lU2NhbGUsIHN0YXRlfSA9IHRoaXMuX3N0b3JlXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBrZXlmcmFtZXMudGltZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRpbWVzW3RpbWVzLmxlbmd0aF0gPSBzdGF0ZS50aW1lU3RhbXBCYXNlICsgTWF0aC5mbG9vcihrZXlmcmFtZXMudGltZXNbaV0gKiB2aWRlb1RpbWVTY2FsZSlcbiAgICAgIGZpbGVQb3NpdGlvbnNbZmlsZVBvc2l0aW9ucy5sZW5ndGhdID0ga2V5ZnJhbWVzLmZpbGVwb3NpdGlvbnNbaV1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGltZXMsXG4gICAgICBmaWxlUG9zaXRpb25zXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgRGVtdXhlciBmcm9tICcuL0RlbXV4ZXInXG5pbXBvcnQgU1BTUGFyc2VyIGZyb20gJy4uL1NQU1BhcnNlcidcbmltcG9ydCBEYXRhVmlldzRSZWFkIGZyb20gJy4uLy4uL3V0aWxzL0RhdGFWaWV3NFJlYWQnXG5pbXBvcnQgeyBFdmVudFR5cGVzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3R5cGVzJ1xuaW1wb3J0IEJ1ZmZlciBmcm9tICcuLi8uLi93cml0ZS9CdWZmZXInXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlb0RlbXV4ZXIgZXh0ZW5kcyBEZW11eGVyIHtcbiAgY29uc3RydWN0b3IgKHN0b3JlKSB7XG4gICAgc3VwZXIoc3RvcmUpXG4gICAgdGhpcy5DTEFTU19OQU1FID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgdGhpcy5yZWFkT2Zmc2V0ID0gMFxuICAgIHRoaXMuZGF0YSA9IG5ldyBVaW50OEFycmF5KDApXG4gICAgdGhpcy5jdXJyZW50VGFnID0gbnVsbFxuICAgIHRoaXMuX3N0b3JlLnZpZGVvTWV0YURhdGEgPSBudWxsXG4gIH1cblxuICByZXNldFN0YXR1cyAoKSB7XG4gICAgdGhpcy5yZWFkT2Zmc2V0ID0gMFxuICAgIHRoaXMuZGF0YSA9IG5ldyBVaW50OEFycmF5KDApXG4gICAgdGhpcy5jdXJyZW50VGFnID0gbnVsbFxuICB9XG5cbiAgcmVzb2x2ZSAodGFnKSB7XG4gICAgdGhpcy5kYXRhID0gdGFnLmJvZHlcbiAgICB0aGlzLmN1cnJlbnRUYWcgPSB0YWdcbiAgICBjb25zdCBmaXJzdFVJOCA9IHRoaXMucmVhZERhdGEoMSlbMF1cbiAgICBjb25zdCBmcmFtZVR5cGUgPSAoZmlyc3RVSTggJiAweEYwKSA+Pj4gNFxuICAgIGNvbnN0IGNvZGVjSWQgPSBmaXJzdFVJOCAmIDB4MEZcbiAgICBpZiAoY29kZWNJZCAhPT0gNykge1xuICAgICAgLyoqIDE6IEpQRUdcbiAgICAgICAgICAgICogMjogSDI2M1xuICAgICAgICAgICAgKiAzOiBTY3JlZW4gdmlkZW9cbiAgICAgICAgICAgICogNDogT24yIFZQNlxuICAgICAgICAgICAgKiA1OiBPbjIgVlA2XG4gICAgICAgICAgICAqIDY6IFNjcmVlbiB2aWRlb3ZlcnNpb24gMlxuICAgICAgICAgICAgKiA3OiBBVkNcbiAgICAgICAgICAgICovXG4gICAgICB0aGlzLmVycm9yKGB1bnN1cHBvcnRlZCBjb2RlY0lkOiAke2NvZGVjSWR9YClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLl9wYXJzZUFWQ1BhY2tldChmcmFtZVR5cGUpXG5cbiAgICB0aGlzLnJlc2V0U3RhdHVzKClcbiAgfVxuXG4gIF9wYXJzZUFWQ1BhY2tldCAoZnJhbWVUeXBlKSB7XG4gICAgaWYgKHRoaXMudW5yZWFkTGVuZ3RoIDwgNCkge1xuICAgICAgdGhpcy5lcnJvcignSW52YWxpZCBBdmMgVGFnJylcbiAgICB9XG4gICAgY29uc3QgaXNMZSA9IHRoaXMuX3N0b3JlLmlzTGVcbiAgICBjb25zdCB7IGJ1ZmZlciB9ID0gdGhpcy5kYXRhXG4gICAgY29uc3QgZHYgPSBuZXcgRGF0YVZpZXcoYnVmZmVyLCB0aGlzLnJlYWRPZmZzZXQsIHRoaXMudW5yZWFkTGVuZ3RoKVxuICAgIGNvbnN0IHBhY2thZ2VUeXBlID0gZHYuZ2V0VWludDgoMClcblxuICAgIGxldCBjcHNUaW1lID0gZHYuZ2V0VWludDMyKDAsICFpc0xlKSAmIDB4MDBGRkZGRkZcbiAgICBjcHNUaW1lID0gKGNwc1RpbWUgPDwgOCkgPj4gOFxuICAgIHRoaXMucmVhZE9mZnNldCArPSA0XG5cbiAgICBzd2l0Y2ggKHBhY2thZ2VUeXBlKSB7XG4gICAgICBjYXNlIDA6IHtcbiAgICAgICAgY29uc3QgeyBwb3NpdGlvbiwgdGFnU2l6ZSB9ID0gdGhpcy5jdXJyZW50VGFnXG5cbiAgICAgICAgdGhpcy5fc3RvcmUubWV0YUVuZFBvc2l0aW9uID0gcG9zaXRpb24gKyBCdWZmZXIucmVhZEFzSW50KHRhZ1NpemUpICsgNCAvLyDnvJPlrZhzY3JpcHRUYWfnu5PmnZ/nmoTkvY3nva7vvIxyZXBsYXnkvb/nlKhcbiAgICAgICAgdGhpcy5fcGFyc2VBVkNEZWNvZGVyQ29uZmlndXJhdGlvblJlY29yZCgpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlIDE6IHtcbiAgICAgICAgdGhpcy5fcGFyc2VBVkNWaWRlb0RhdGEoZnJhbWVUeXBlLCBjcHNUaW1lKVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY2FzZSAyOiB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIC8vIOaKpemUmVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9wYXJzZUFWQ0RlY29kZXJDb25maWd1cmF0aW9uUmVjb3JkICgpIHtcbiAgICBpZiAodGhpcy51bnJlYWRMZW5ndGggPCA3KSB7XG4gICAgICB0aGlzLmVycm9yKCdJbnZhbGlkIEFWQ0RlY29kZXJDb25maWd1cmF0aW9uUmVjb3JkLCBsYWNrIG9mIGRhdGEhJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgbWVkaWFJbmZvOiBtaSB9ID0gdGhpcy5fc3RvcmVcbiAgICAvLyBzdGFzaCBvZmZzZXQmdW5yZWFkU2l6ZSBiZWZvcmUgcGFyc2luZyBzcHMmcHBzXG4gICAgLy8gY29uc3QgdGVtcE9mZnNldCA9IHRoaXMucmVhZE9mZnNldFxuICAgIC8vIGNvbnN0IHRlbXBVbnJlYWRMZW5ndGggPSB0aGlzLnVucmVhZExlbmd0aFxuXG4gICAgY29uc3QgeyBfc3RvcmU6IHN0b3JlIH0gPSB0aGlzXG4gICAgbGV0IG1ldGEgPSB0aGlzLl9zdG9yZS52aWRlb01ldGFEYXRhXG4gICAgbGV0IHRyYWNrID0gdGhpcy5fc3RvcmUudmlkZW9UcmFja1xuICAgIGNvbnN0IGR2ID0gbmV3IERhdGFWaWV3NFJlYWQodGhpcy5kYXRhLmJ1ZmZlciwgdGhpcylcbiAgICBpZiAobWV0YSkge1xuICAgICAgaWYgKG1ldGEuYXZjYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuZXJyb3IoJ2ZvdW5kIGFub3RoZXIgQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQhJylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFzdG9yZS5zdGF0ZS5faGFzVmlkZW8gJiYgIXN0b3JlLnN0YXRlLmhhc1ZpZGVvRmxhZ092ZXJyaWRlZCkge1xuICAgICAgICBzdG9yZS5zdGF0ZS5faGFzVmlkZW8gPSB0cnVlXG4gICAgICAgIHN0b3JlLl9tZWRpYUluZm8uaGFzVmlkZW8gPSB0cnVlXG4gICAgICB9XG4gICAgICBtZXRhID0gc3RvcmUudmlkZW9NZXRhRGF0YSA9IHt9XG4gICAgICBtZXRhLnR5cGUgPSAndmlkZW8nXG4gICAgICBtZXRhLmlkID0gdHJhY2suaWRcbiAgICAgIG1ldGEudGltZVNjYWxlID0gc3RvcmUudmlkZW9UaW1lU2NhbGVcbiAgICAgIG1ldGEuZHVyYXRpb24gPSBzdG9yZS5zdGF0ZS5kdXJhdGlvblxuICAgICAgbWkudGltZXNjYWxlID0gc3RvcmUudmlkZW9UaW1lU2NhbGVcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJzaW9uID0gZHYuZ2V0VWludDgoKVxuICAgIGNvbnN0IGF2Y1Byb2ZpbGUgPSBkdi5nZXRVaW50OCgpXG4gICAgZHYuZ2V0VWludDgoKVxuICAgIGR2LmdldFVpbnQ4KClcbiAgICBpZiAodmVyc2lvbiAhPT0gMSB8fCBhdmNQcm9maWxlID09PSAwKSB7XG4gICAgICAvLyDlpITnkIbplJnor69cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG5hbHVMZW5ndGhTaXplID0gc3RvcmUuc3RhdGUubmFsdUxlbmd0aFNpemUgPSBkdi5nZXRVaW50KDIsIHRoaXMucmVhZE9mZnNldCwgZmFsc2UpICsgMVxuICAgIGlmIChuYWx1TGVuZ3RoU2l6ZSAhPT0gMyAmJiBuYWx1TGVuZ3RoU2l6ZSAhPT0gNCkge1xuICAgICAgLy8g5aSE55CG6ZSZ6K+vXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzcHNMZW5ndGggPSBkdi5nZXRVaW50KDUsIG51bGwsIGZhbHNlKVxuICAgIGlmIChzcHNMZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuZW1pdEVycm9yKCdkZWNvZGVyJywge1xuICAgICAgICBsaW5lOiAxMjgsXG4gICAgICAgIGhhbmRsZXI6ICdfcGFyc2VBVkNEZWNvZGVyQ29uZmlndXJhdGlvblJlY29yZCcsXG4gICAgICAgIG1zZzogJ25vIHNwcyBpbiB0aGlzIHZpZGVvJ1xuICAgICAgfSlcbiAgICAgIC8vIOWkhOeQhumUmeivr1xuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIGlmIChzcHNMZW5ndGggPiAxKSB7XG4gICAgICB0aGlzLmVtaXRFcnJvcignZGVjb2RlcicsIHtcbiAgICAgICAgbGluZTogMTMyLFxuICAgICAgICBoYW5kbGVyOiAnX3BhcnNlQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQnLFxuICAgICAgICBtc2c6ICdzcHNMZW5ndGggPiAxJ1xuICAgICAgfSlcbiAgICAgIHRoaXMud2FybignQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQ6IHNwc0xlbmd0aCA+IDEnKVxuICAgIH1cbiAgICBsZXQgc3BzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcHNMZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbGVuID0gZHYuZ2V0VWludDE2KClcblxuICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgc3BzID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5kYXRhLmJ1ZmZlciwgdGhpcy5yZWFkT2Zmc2V0LCBsZW4pXG4gICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gbGVuXG4gICAgICBjb25zdCBzcHNDb25maWcgPSBTUFNQYXJzZXIucGFyc2VTUFMoc3BzKVxuXG4gICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7XG4gICAgICAgIGNvZGVjU2l6ZSxcbiAgICAgICAgcHJlc2VudFNpemUsXG4gICAgICAgIHByb2ZpbGVTdHJpbmcsXG4gICAgICAgIGxldmVsU3RyaW5nLFxuICAgICAgICBjaHJvbWFGb3JtYXQsXG4gICAgICAgIHBpeGVsUmF0aW8sXG4gICAgICAgIGZyYW1lUmF0ZSxcbiAgICAgICAgcmVmRnJhbWVzLFxuICAgICAgICBiaXREZXB0aFxuICAgICAgfSA9IHNwc0NvbmZpZ1xuXG4gICAgICBtZXRhLndpZHRoID0gY29kZWNTaXplLndpZHRoXG4gICAgICBtZXRhLmhlaWdodCA9IGNvZGVjU2l6ZS5oZWlnaHRcbiAgICAgIG1ldGEucHJlc2VudFdpZHRoID0gcHJlc2VudFNpemUud2lkdGhcbiAgICAgIG1ldGEucHJlc2VudEhlaWdodCA9IHByZXNlbnRTaXplLmhlaWdodFxuXG4gICAgICBtZXRhLnByb2ZpbGUgPSBwcm9maWxlU3RyaW5nXG4gICAgICBtZXRhLmxldmVsID0gbGV2ZWxTdHJpbmdcbiAgICAgIC8vIG1ldGEucHJvZmlsZUNvbXBhdGliaWxpdHkgPSBwcm9maWxlQ29tcGF0aWJpbGl0eTtcbiAgICAgIC8vIG1ldGEubmFsdUxlbmd0aFNpemUgPSBuYWx1TGVuZ3RoU2l6ZTtcblxuICAgICAgbWV0YS5iaXREZXB0aCA9IGJpdERlcHRoXG4gICAgICBtZXRhLmNocm9tYUZvcm1hdCA9IGNocm9tYUZvcm1hdFxuICAgICAgbWV0YS5waXhlbFJhdGlvID0gcGl4ZWxSYXRpb1xuICAgICAgbWV0YS5mcmFtZVJhdGUgPSBmcmFtZVJhdGVcblxuICAgICAgaWYgKCFmcmFtZVJhdGUuZml4ZWQgfHxcbiAgICAgICAgICAgICAgICBmcmFtZVJhdGUuZnBzTnVtID09PSAwIHx8XG4gICAgICAgICAgICAgICAgZnJhbWVSYXRlLmZwc0RlbiA9PT0gMCkge1xuICAgICAgICBtZXRhLmZyYW1lUmF0ZSA9IHN0b3JlLnJlZmVyRnJhbWVSYXRlXG4gICAgICB9XG5cbiAgICAgIGxldCB7IGZwc0RlbiwgZnBzTnVtIH0gPSBtZXRhLmZyYW1lUmF0ZVxuICAgICAgbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiA9IG1ldGEudGltZVNjYWxlICogKGZwc0RlbiAvIGZwc051bSlcblxuICAgICAgbGV0IGNvZGVjQXJyID0gc3BzLnN1YmFycmF5KDEsIDQpXG4gICAgICBsZXQgY29kZWNTdHIgPSAnYXZjMS4nXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgICBsZXQgaGV4ID0gY29kZWNBcnJbal0udG9TdHJpbmcoMTYpXG4gICAgICAgIGhleCA9IGhleC5wYWRTdGFydCgyLCAnMCcpXG4gICAgICAgIGNvZGVjU3RyICs9IGhleFxuICAgICAgfVxuXG4gICAgICBtZXRhLmNvZGVjID0gY29kZWNTdHJcblxuICAgICAgY29uc3QgeyBtZWRpYUluZm86IG1pIH0gPSB0aGlzLl9zdG9yZVxuICAgICAgbWkud2lkdGggPSBtZXRhLndpZHRoXG4gICAgICBtaS5oZWlnaHQgPSBtZXRhLmhlaWdodFxuICAgICAgbWkuZnBzID0gbWV0YS5mcmFtZVJhdGUuZnBzXG4gICAgICBtaS5wcm9maWxlID0gbWV0YS5wcm9maWxlXG4gICAgICBtaS5sZXZlbCA9IG1ldGEubGV2ZWxcbiAgICAgIG1pLnJlZkZyYW1lcyA9IHJlZkZyYW1lc1xuICAgICAgbWkucGl4ZWxSYXRpbyA9IHBpeGVsUmF0aW9cbiAgICAgIG1pLnZpZGVvQ29kZWMgPSBjb2RlY1N0clxuICAgICAgbWkuY2hyb21hRm9ybWF0ID0gY2hyb21hRm9ybWF0XG4gICAgICBpZiAobWkuaGFzQXVkaW8pIHtcbiAgICAgICAgaWYgKG1pLmF1ZGlvQ29kZWMpIHtcbiAgICAgICAgICBtaS5taW1lVHlwZSA9IGB2aWRlby94LWZsdjsgY29kZWNzPVwiJHttaS52aWRlb0NvZGVjfSwke21pLmF1ZGlvQ29kZWN9XCJgXG4gICAgICAgICAgbWkuY29kZWMgPSBtaS5taW1lVHlwZS5yZXBsYWNlKCd4LWZsdicsICdtcDQnKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtaS5taW1lVHlwZSA9IGB2aWRlby94LWZsdjsgY29kZWNzPVwiJHttaS52aWRlb0NvZGVjfVwiYFxuICAgICAgICBtaS5jb2RlYyA9IG1pLm1pbWVUeXBlLnJlcGxhY2UoJ3gtZmx2JywgJ21wNCcpXG4gICAgICB9XG4gICAgfVxuICAgIGxldCBwcHNcbiAgICBjb25zdCBwcHNDb3VudCA9IGR2LmdldFVpbnQ4KClcbiAgICBpZiAoIXBwc0NvdW50KSB7XG4gICAgICB0aGlzLmVtaXRFcnJvcignZGVjb2RlcicsIHtcbiAgICAgICAgbGluZTogMjI3LFxuICAgICAgICBoYW5kbGVyOiAnX3BhcnNlQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQnLFxuICAgICAgICBtc2c6ICdubyBwcHMgaW4gdGhpcyB2aWRlbydcbiAgICAgIH0pXG4gICAgICB0aGlzLmRpc3BhdGNoKEV2ZW50VHlwZXMuRVJST1IsICdubyBwcHMgaW4gdGhpcyB2aWRlbycpXG4gICAgICByZXR1cm5cbiAgICB9IGVsc2UgaWYgKHBwc0NvdW50ID4gMSkge1xuICAgICAgdGhpcy53YXJuKGBBVkNEZWNvZGVyQ29uZmlndXJhdGlvblJlY29yZCBoYXMgcHBzQ291bnQ6ICR7cHBzQ291bnR9YClcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBwc0NvdW50OyBpKyspIHtcbiAgICAgIGxldCBwcHNTaXplID0gZHYuZ2V0VWludDE2KClcblxuICAgICAgaWYgKCFwcHNTaXplKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHBwcyA9IG5ldyBVaW50OEFycmF5KHRoaXMuZGF0YS5idWZmZXIsIHRoaXMucmVhZE9mZnNldCwgcHBzU2l6ZSlcbiAgICAgIHRoaXMucmVhZE9mZnNldCArPSBwcHNTaXplXG4gICAgfVxuXG4gICAgbWkuc3BzID0gbWV0YS5zcHMgPSBzcHNcbiAgICBtaS5wcHMgPSBtZXRhLnBwcyA9IHBwc1xuXG4gICAgaWYgKG1pLmlzQ29tcGxldGUpIHtcbiAgICAgIHRoaXMuaGFuZGxlTWVkaWFJbmZvUmVhZHkobWkpXG4gICAgfVxuICAgIGlmIChzdG9yZS5oYXNJbml0aWFsTWV0YURpc3BhdGNoZWQpIHtcbiAgICAgIGlmIChzdG9yZS52aWRlb1RyYWNrLmxlbmd0aCB8fCBzdG9yZS5hdWRpb1RyYWNrLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmhhbmRsZURhdGFSZWFkeShzdG9yZS52aWRlb1RyYWNrLCBzdG9yZS5hdWRpb1RyYWNrKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdG9yZS5zdGF0ZS5fdmlkZW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkID0gdHJ1ZVxuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlTWV0YURhdGFSZWFkeSgndmlkZW8nLCBtZXRhKVxuICB9XG5cbiAgX3BhcnNlQVZDVmlkZW9EYXRhIChmcmFtZVR5cGUsIGNwc1RpbWUpIHtcbiAgICBsZXQgZHYgPSBuZXcgRGF0YVZpZXc0UmVhZCh0aGlzLmRhdGEuYnVmZmVyLCB0aGlzKVxuXG4gICAgbGV0IG5hbHVMaXN0ID0gW11cbiAgICBsZXQgZGF0YUxlbiA9IDBcbiAgICBjb25zdCB7IG5hbHVMZW5ndGhTaXplOiBuYWx1TGVuU2l6ZSB9ID0gdGhpcy5fc3RvcmUuc3RhdGVcbiAgICBsZXQgdHMgPSB0aGlzLl9zdG9yZS5zdGF0ZS50aW1lU3RhbXBCYXNlICsgdGhpcy5jdXJyZW50VGFnLmdldFRpbWUoKVxuICAgIGxldCBpc0tleWZyYW1lID0gKGZyYW1lVHlwZSA9PT0gMSlcbiAgICB3aGlsZSAodGhpcy51bnJlYWRMZW5ndGggPiAwKSB7XG4gICAgICBpZiAodGhpcy51bnJlYWRMZW5ndGggPCA0KSB7XG4gICAgICAgIHRoaXMud2Fybignbm90IGVub3VnaCBkYXRhIGZvciBwYXJzaW5nIEFWQycpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjb25zdCB0ZW1wUmVhZE9mZnNldCA9IHRoaXMucmVhZE9mZnNldFxuICAgICAgbGV0IG5hbHVTaXplID0gbmFsdUxlblNpemUgPT09IDQgPyBkdi5nZXRVaW50MzIoKSA6IGR2LmdldFVpbnQyNCgpXG4gICAgICBpZiAobmFsdVNpemUgPiB0aGlzLnVucmVhZExlbmd0aCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IHVuaXRUeXBlID0gZHYuZ2V0VWludCg1LCB0aGlzLnJlYWRPZmZzZXQsIGZhbHNlKVxuXG4gICAgICBpZiAodW5pdFR5cGUgPT09IDUpIHtcbiAgICAgICAgaXNLZXlmcmFtZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGEgPSBuZXcgVWludDhBcnJheSh0aGlzLmRhdGEuYnVmZmVyLCB0ZW1wUmVhZE9mZnNldCwgbmFsdUxlblNpemUgKyBuYWx1U2l6ZSlcbiAgICAgIHRoaXMucmVhZE9mZnNldCA9IHRlbXBSZWFkT2Zmc2V0ICsgbmFsdUxlblNpemUgKyBuYWx1U2l6ZVxuICAgICAgY29uc3QgbmFsdVVuaXQgPSB7XG4gICAgICAgIHR5cGU6IHVuaXRUeXBlLFxuICAgICAgICBkYXRhXG4gICAgICB9XG4gICAgICBuYWx1TGlzdC5wdXNoKG5hbHVVbml0KVxuICAgICAgZGF0YUxlbiArPSBkYXRhLmJ5dGVMZW5ndGhcbiAgICB9XG4gICAgZHYgPSBudWxsXG4gICAgaWYgKG5hbHVMaXN0Lmxlbmd0aCkge1xuICAgICAgY29uc3QgeyB2aWRlb1RyYWNrIH0gPSB0aGlzLl9zdG9yZVxuICAgICAgY29uc3QgdmlkZW9TYW1wbGUgPSB7XG4gICAgICAgIHVuaXRzOiBuYWx1TGlzdCxcbiAgICAgICAgbGVuZ3RoOiBkYXRhTGVuLFxuICAgICAgICBkdHM6IHRzLFxuICAgICAgICBjcHM6IGNwc1RpbWUsXG4gICAgICAgIHB0czogKHRzICsgY3BzVGltZSksXG4gICAgICAgIGlzS2V5ZnJhbWUsXG4gICAgICAgIHBvc2l0aW9uOiBpc0tleWZyYW1lID8gdGhpcy5jdXJyZW50VGFnLnBvc2l0aW9uIDogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgICB2aWRlb1RyYWNrLnNhbXBsZXMucHVzaCh2aWRlb1NhbXBsZSlcbiAgICAgIHZpZGVvVHJhY2subGVuZ3RoICs9IGRhdGFMZW5cbiAgICB9XG4gIH1cblxuICByZWFkRGF0YSAobnVtKSB7XG4gICAgY29uc3QgeyBkYXRhLCByZWFkT2Zmc2V0IH0gPSB0aGlzXG4gICAgaWYgKHRoaXMuZGF0YVNpemUgPiByZWFkT2Zmc2V0ICsgbnVtKSB7XG4gICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gbnVtXG4gICAgICByZXR1cm4gZGF0YS5zbGljZShyZWFkT2Zmc2V0LCBudW0pXG4gICAgfVxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgZ2V0IGRhdGFTaXplICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aFxuICB9XG4gIGdldCB1bnJlYWRMZW5ndGggKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFTaXplIC0gdGhpcy5yZWFkT2Zmc2V0XG4gIH1cbn1cbiIsImltcG9ydCBCdWZmZXIgZnJvbSAnLi4vLi4vd3JpdGUvQnVmZmVyJ1xuLy8gY29uc3QgVUlOVDMyX01BWCA9IE1hdGgucG93KDIsIDMyKSAtIDE7XG5pbXBvcnQgeyBjYWNoZVdyYXBwZXIgfSBmcm9tICcuLi8uLi91dGlscy9mdW5jVXRpbHMnXG5jbGFzcyBGTVA0IHtcbiAgc3RhdGljIHNpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci53cml0ZVVpbnQzMih2YWx1ZSlcbiAgfVxuICBzdGF0aWMgaW5pdEJveCAoc2l6ZSwgbmFtZSwgLi4uY29udGVudCkge1xuICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGJ1ZmZlci53cml0ZShGTVA0LnNpemUoc2l6ZSksIEZNUDQudHlwZShuYW1lKSwgLi4uY29udGVudClcbiAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlclxuICB9XG4gIHN0YXRpYyBleHRlbnNpb24gKHZlcnNpb24sIGZsYWcpIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgdmVyc2lvbixcbiAgICAgIChmbGFnID4+IDE2KSAmIDB4ZmYsXG4gICAgICAoZmxhZyA+PiA4KSAmIDB4ZmYsXG4gICAgICBmbGFnICYgMHhmZlxuICAgIF0pXG4gIH1cbiAgc3RhdGljIGZ0eXAgKCkge1xuICAgIHJldHVybiBGTVA0LmluaXRCb3goMjQsICdmdHlwJywgbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHg2OSwgMHg3MywgMHg2RiwgMHg2RCwgLy8gaXNvbSxcbiAgICAgIDB4MCwgMHgwLCAweDAwLCAweDAxLCAvLyBtaW5vcl92ZXJzaW9uOiAweDAxXG4gICAgICAweDY5LCAweDczLCAweDZGLCAweDZELCAvLyBpc29tXG4gICAgICAweDYxLCAweDc2LCAweDYzLCAweDMxIC8vIGF2YzFcbiAgICBdKSlcbiAgfVxuICBzdGF0aWMgbW9vdiAoZGF0YSkge1xuICAgIGxldCBzaXplID0gOFxuICAgIGxldCBtdmhkID0gRk1QNC5tdmhkKGRhdGEuZHVyYXRpb24sIGRhdGEudGltZXNjYWxlKVxuICAgIGxldCB0cmFrMSA9IEZNUDQudmlkZW9UcmFrKGRhdGEpXG4gICAgbGV0IHRyYWsyID0gRk1QNC5hdWRpb1RyYWsoZGF0YSlcbiAgICBsZXQgbXZleCA9IEZNUDQubXZleChkYXRhLmR1cmF0aW9uLCBkYXRhLnRpbWVzY2FsZSk7XG4gICAgW212aGQsIHRyYWsxLCB0cmFrMiwgbXZleF0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5ieXRlTGVuZ3RoXG4gICAgfSlcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KHNpemUsICdtb292JywgbXZoZCwgdHJhazEsIHRyYWsyLCBtdmV4KVxuICB9XG4gIHN0YXRpYyBtdmhkIChkdXJhdGlvbiwgdGltZVNjYWxlKSB7XG4gICAgbGV0IHRpbWVzY2FsZSA9IHRpbWVTY2FsZSB8fCAxMDAwXG4gICAgLy8gZHVyYXRpb24gKj0gdGltZXNjYWxlO1xuICAgIGxldCBieXRlcyA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHZlcnNpb24oMCkgKyBmbGFncyAgICAgMeS9jeeahGJveOeJiOacrCsz5L2NZmxhZ3MgICBib3jniYjmnKzvvIww5oiWMe+8jOS4gOiIrOS4ujDjgILvvIjku6XkuIvlrZfoioLmlbDlnYfmjIl2ZXJzaW9uPTDvvIlcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGNyZWF0aW9uX3RpbWUgICAg5Yib5bu65pe26Ze0ICDvvIjnm7jlr7nkuo5VVEPml7bpl7QxOTA0LTAxLTAx6Zu254K555qE56eS5pWw77yJXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBtb2RpZmljYXRpb25fdGltZSAgIOS/ruaUueaXtumXtFxuXG4gICAgICAvKipcbiAgICAgICAgICAgICAqIHRpbWVzY2FsZTogNCBieXRlc+aWh+S7tuWqkuS9k+WcqDHnp5Lml7bpl7TlhoXnmoTliLvluqblgLzvvIzlj6/ku6XnkIbop6PkuLox56eS6ZW/5bqmXG4gICAgICAgICAgICAgKi9cbiAgICAgICh0aW1lc2NhbGUgPj4+IDI0KSAmIDB4RkYsXG4gICAgICAodGltZXNjYWxlID4+PiAxNikgJiAweEZGLFxuICAgICAgKHRpbWVzY2FsZSA+Pj4gOCkgJiAweEZGLFxuICAgICAgKHRpbWVzY2FsZSkgJiAweEZGLFxuXG4gICAgICAvKipcbiAgICAgICAgICAgICAqIGR1cmF0aW9uOiA0IGJ5dGVz6K+ldHJhY2vnmoTml7bpl7Tplb/luqbvvIznlKhkdXJhdGlvbuWSjHRpbWUgc2NhbGXlgLzlj6/ku6XorqHnrpd0cmFja+aXtumVv++8jOavlOWmgmF1ZGlvIHRyYWNr55qEdGltZSBzY2FsZSA9IDgwMDAsXG4gICAgICAgICAgICAgKiBkdXJhdGlvbiA9IDU2MDEyOO+8jOaXtumVv+S4ujcwLjAxNu+8jHZpZGVvIHRyYWNr55qEdGltZSBzY2FsZSA9IDYwMCwgZHVyYXRpb24gPSA0MjAwMO+8jOaXtumVv+S4ujcwXG4gICAgICAgICAgICAgKi9cbiAgICAgIChkdXJhdGlvbiA+Pj4gMjQpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbiA+Pj4gMTYpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbiA+Pj4gOCkgJiAweEZGLFxuICAgICAgKGR1cmF0aW9uKSAmIDB4RkYsXG4gICAgICAweDAwLCAweDAxLCAweDAwLCAweDAwLCAvLyBQcmVmZXJyZWQgcmF0ZTogMS4wICAg5o6o6I2Q5pKt5pS+6YCf546H77yM6auYMTbkvY3lkozkvY4xNuS9jeWIhuWIq+S4uuWwj+aVsOeCueaVtOaVsOmDqOWIhuWSjOWwj+aVsOmDqOWIhu+8jOWNs1sxNi4xNl0g5qC85byP77yM6K+l5YC85Li6MS4w77yIMHgwMDAxMDAwMO+8ieihqOekuuato+W4uOWJjeWQkeaSreaUvlxuICAgICAgLyoqXG4gICAgICAgICAgICAgKiBQcmVmZXJyZWRWb2x1bWUoMS4wLCAyYnl0ZXMpICsgcmVzZXJ2ZWQoMmJ5dGVzKVxuICAgICAgICAgICAgICog5LiOcmF0Zeexu+S8vO+8jFs4LjhdIOagvOW8j++8jDEuMO+8iDB4MDEwMO+8ieihqOekuuacgOWkp+mfs+mHj1xuICAgICAgICAgICAgICovXG4gICAgICAweDAxLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gIHJlc2VydmVkOiA0ICsgNCBieXRlc+S/neeVmeS9jVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDEsIDB4MDAsIDB4MDAsIC8vIC0tLS1iZWdpbiBjb21wb3NpdGlvbiBtYXRyaXgtLS0tXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8g6KeG6aKR5Y+Y5o2i55+p6Zi1ICAg57q/5oCn5Luj5pWwXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMSwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4NDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIC0tLS1lbmQgY29tcG9zaXRpb24gbWF0cml4LS0tLVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gLS0tLWJlZ2luIHByZV9kZWZpbmVkIDYgKiA0IGJ5dGVzLS0tLVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHByZS1kZWZpbmVkIOS/neeVmeS9jVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyAtLS0tZW5kIHByZV9kZWZpbmVkIDYgKiA0IGJ5dGVzLS0tLVxuICAgICAgMHhGRiwgMHhGRiwgMHhGRiwgMHhGRiAvLyBuZXh0X3RyYWNrX0lEIOS4i+S4gOS4qnRyYWNr5L2/55So55qEaWTlj7dcbiAgICBdKVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goOCArIGJ5dGVzLmxlbmd0aCwgJ212aGQnLCBuZXcgVWludDhBcnJheShieXRlcykpXG4gIH1cbiAgc3RhdGljIHZpZGVvVHJhayAoZGF0YSkge1xuICAgIGxldCBzaXplID0gOFxuICAgIGxldCB0a2hkID0gRk1QNC50a2hkKHtcbiAgICAgIGlkOiAxLFxuICAgICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb24sXG4gICAgICB0aW1lc2NhbGU6IGRhdGEudGltZXNjYWxlLFxuICAgICAgd2lkdGg6IGRhdGEud2lkdGgsXG4gICAgICBoZWlnaHQ6IGRhdGEuaGVpZ2h0LFxuICAgICAgdHlwZTogJ3ZpZGVvJ1xuICAgIH0pXG4gICAgbGV0IG1kaWEgPSBGTVA0Lm1kaWEoe1xuICAgICAgdHlwZTogJ3ZpZGVvJyxcbiAgICAgIHRpbWVzY2FsZTogZGF0YS50aW1lc2NhbGUsXG4gICAgICBkdXJhdGlvbjogZGF0YS5kdXJhdGlvbixcbiAgICAgIHNwczogZGF0YS5zcHMsXG4gICAgICBwcHM6IGRhdGEucHBzLFxuICAgICAgcGl4ZWxSYXRpbzogZGF0YS5waXhlbFJhdGlvLFxuICAgICAgd2lkdGg6IGRhdGEud2lkdGgsXG4gICAgICBoZWlnaHQ6IGRhdGEuaGVpZ2h0XG4gICAgfSk7XG4gICAgW3RraGQsIG1kaWFdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBzaXplICs9IGl0ZW0uYnl0ZUxlbmd0aFxuICAgIH0pXG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveChzaXplLCAndHJhaycsIHRraGQsIG1kaWEpXG4gIH1cbiAgc3RhdGljIGF1ZGlvVHJhayAoZGF0YSkge1xuICAgIGxldCBzaXplID0gOFxuICAgIGxldCB0a2hkID0gRk1QNC50a2hkKHtcbiAgICAgIGlkOiAyLFxuICAgICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb24sXG4gICAgICB0aW1lc2NhbGU6IGRhdGEudGltZXNjYWxlLFxuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICB0eXBlOiAnYXVkaW8nXG4gICAgfSlcbiAgICBsZXQgbWRpYSA9IEZNUDQubWRpYSh7XG4gICAgICB0eXBlOiAnYXVkaW8nLFxuICAgICAgdGltZXNjYWxlOiBkYXRhLnRpbWVzY2FsZSxcbiAgICAgIGR1cmF0aW9uOiBkYXRhLmR1cmF0aW9uLFxuICAgICAgY2hhbm5lbENvdW50OiBkYXRhLmF1ZGlvQ2hhbm5lbENvdW50LFxuICAgICAgc2FtcGxlcmF0ZTogZGF0YS5hdWRpb1NhbXBsZVJhdGUsXG4gICAgICBjb25maWc6IGRhdGEuYXVkaW9Db25maWdcbiAgICB9KTtcbiAgICBbdGtoZCwgbWRpYV0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5ieXRlTGVuZ3RoXG4gICAgfSlcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KHNpemUsICd0cmFrJywgdGtoZCwgbWRpYSlcbiAgfVxuICBzdGF0aWMgdGtoZCAoZGF0YSkge1xuICAgIGxldCBpZCA9IGRhdGEuaWRcbiAgICBsZXQgZHVyYXRpb24gPSBkYXRhLmR1cmF0aW9uXG4gICAgbGV0IHdpZHRoID0gZGF0YS53aWR0aFxuICAgIGxldCBoZWlnaHQgPSBkYXRhLmhlaWdodFxuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwNywgLy8gdmVyc2lvbigwKSArIGZsYWdzIDHkvY3niYjmnKwgYm9454mI5pys77yMMOaIljHvvIzkuIDoiKzkuLow44CC77yI5Lul5LiL5a2X6IqC5pWw5Z2H5oyJdmVyc2lvbj0w77yJ5oyJ5L2N5oiW5pON5L2c57uT5p6c5YC877yM6aKE5a6a5LmJ5aaC5LiL77yaXG4gICAgICAvLyAweDAwMDAwMSB0cmFja19lbmFibGVk77yM5ZCm5YiZ6K+ldHJhY2vkuI3ooqvmkq3mlL7vvJtcbiAgICAgIC8vIDB4MDAwMDAyIHRyYWNrX2luX21vdmll77yM6KGo56S66K+ldHJhY2vlnKjmkq3mlL7kuK3ooqvlvJXnlKjvvJtcbiAgICAgIC8vIDB4MDAwMDA0IHRyYWNrX2luX3ByZXZpZXfvvIzooajnpLror6V0cmFja+WcqOmihOiniOaXtuiiq+W8leeUqOOAglxuICAgICAgLy8g5LiA6Iis6K+l5YC85Li6N++8jDErMis0IOWmguaenOS4gOS4quWqkuS9k+aJgOaciXRyYWNr5Z2H5pyq6K6+572udHJhY2tfaW5fbW92aWXlkox0cmFja19pbl9wcmV2aWV377yM5bCG6KKr55CG6Kej5Li65omA5pyJdHJhY2vlnYforr7nva7kuobov5nkuKTpobnvvJvlr7nkuo5oaW50IHRyYWNr77yM6K+l5YC85Li6MFxuICAgICAgLy8gaGludCB0cmFjayDov5nkuKrnibnmrornmoR0cmFja+W5tuS4jeWMheWQq+WqkuS9k+aVsOaNru+8jOiAjOaYr+WMheWQq+S6huS4gOS6m+WwhuWFtuS7luaVsOaNrnRyYWNr5omT5YyF5oiQ5rWB5aqS5L2T55qE5oyH56S65L+h5oGv44CCXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBjcmVhdGlvbl90aW1l5Yib5bu65pe26Ze077yI55u45a+55LqOVVRD5pe26Ze0MTkwNC0wMS0wMembtueCueeahOenkuaVsO+8iVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gbW9kaWZpY2F0aW9uIHRpbWUg5L+u5pS55pe26Ze0XG4gICAgICAoaWQgPj4+IDI0KSAmIDB4RkYsIC8vIHRyYWNrX0lEOiA0IGJ5dGVzIGlk5Y+377yM5LiN6IO96YeN5aSN5LiU5LiN6IO95Li6MFxuICAgICAgKGlkID4+PiAxNikgJiAweEZGLFxuICAgICAgKGlkID4+PiA4KSAmIDB4RkYsXG4gICAgICAoaWQpICYgMHhGRixcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkOiA0IGJ5dGVzICAgIOS/neeVmeS9jVxuICAgICAgKGR1cmF0aW9uID4+PiAyNCkgJiAweEZGLCAvLyBkdXJhdGlvbjogNCBieXRlcyB0cmFja+eahOaXtumXtOmVv+W6plxuICAgICAgKGR1cmF0aW9uID4+PiAxNikgJiAweEZGLFxuICAgICAgKGR1cmF0aW9uID4+PiA4KSAmIDB4RkYsXG4gICAgICAoZHVyYXRpb24pICYgMHhGRixcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkOiAyICogNCBieXRlcyAgICDkv53nlZnkvY1cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBsYXllcigyYnl0ZXMpICsgYWx0ZXJuYXRlX2dyb3VwKDJieXRlcykgIOinhumikeWxgu+8jOm7mOiupOS4ujDvvIzlgLzlsI/nmoTlnKjkuIrlsYIudHJhY2vliIbnu4Tkv6Hmga/vvIzpu5jorqTkuLow6KGo56S66K+ldHJhY2vmnKrkuI7lhbbku5Z0cmFja+aciee+pOe7hOWFs+ezu1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gdm9sdW1lKDJieXRlcykgKyByZXNlcnZlZCgyYnl0ZXMpICAgIFs4LjhdIOagvOW8j++8jOWmguaenOS4uumfs+mikXRyYWNr77yMMS4w77yIMHgwMTAw77yJ6KGo56S65pyA5aSn6Z+z6YeP77yb5ZCm5YiZ5Li6MCAgICvkv53nlZnkvY1cbiAgICAgIDB4MDAsIDB4MDEsIDB4MDAsIDB4MDAsIC8vIC0tLS1iZWdpbiBjb21wb3NpdGlvbiBtYXRyaXgtLS0tXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAxLCAweDAwLCAweDAwLCAvLyDop4bpopHlj5jmjaLnn6npmLVcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4NDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIC0tLS1lbmQgY29tcG9zaXRpb24gbWF0cml4LS0tLVxuICAgICAgKHdpZHRoID4+PiA4KSAmIDB4RkYsIC8vIC8v5a695bqmXG4gICAgICAod2lkdGgpICYgMHhGRixcbiAgICAgIDB4MDAsIDB4MDAsXG4gICAgICAoaGVpZ2h0ID4+PiA4KSAmIDB4RkYsIC8vIOmrmOW6plxuICAgICAgKGhlaWdodCkgJiAweEZGLFxuICAgICAgMHgwMCwgMHgwMFxuICAgIF0pXG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveCg4ICsgY29udGVudC5ieXRlTGVuZ3RoLCAndGtoZCcsIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIGVkdHMgKGRhdGEpIHtcbiAgICBsZXQgYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgbGV0IGR1cmF0aW9uID0gZGF0YS5kdXJhdGlvblxuICAgIGxldCBtZWRpYVRpbWUgPSBkYXRhLm1lZGlhVGltZVxuICAgIGJ1ZmZlci53cml0ZShGTVA0LnNpemUoMzYpLCBGTVA0LnR5cGUoJ2VkdHMnKSlcbiAgICAvLyBlbHN0XG4gICAgYnVmZmVyLndyaXRlKEZNUDQuc2l6ZSgyOCksIEZNUDQudHlwZSgnZWxzdCcpKVxuICAgIGJ1ZmZlci53cml0ZShuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAxLCAvLyBlbnRyeSBjb3VudFxuICAgICAgKGR1cmF0aW9uID4+IDI0KSAmIDB4ZmYsIChkdXJhdGlvbiA+PiAxNikgJiAweGZmLCAoZHVyYXRpb24gPj4gOCkgJiAweGZmLCBkdXJhdGlvbiAmIDB4ZmYsXG4gICAgICAobWVkaWFUaW1lID4+IDI0KSAmIDB4ZmYsIChtZWRpYVRpbWUgPj4gMTYpICYgMHhmZiwgKG1lZGlhVGltZSA+PiA4KSAmIDB4ZmYsIG1lZGlhVGltZSAmIDB4ZmYsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAxIC8vIG1lZGlhIHJhdGVcbiAgICBdKSlcbiAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlclxuICB9XG4gIHN0YXRpYyBtZGlhIChkYXRhKSB7XG4gICAgbGV0IHNpemUgPSA4XG4gICAgbGV0IG1kaGQgPSBGTVA0Lm1kaGQoZGF0YS50aW1lc2NhbGUsIGRhdGEuZHVyYXRpb24pXG4gICAgbGV0IGhkbHIgPSBGTVA0LmhkbHIoZGF0YS50eXBlKVxuICAgIGxldCBtaW5mID0gRk1QNC5taW5mKGRhdGEpO1xuICAgIFttZGhkLCBoZGxyLCBtaW5mXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLmJ5dGVMZW5ndGhcbiAgICB9KVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goc2l6ZSwgJ21kaWEnLCBtZGhkLCBoZGxyLCBtaW5mKVxuICB9XG4gIHN0YXRpYyBtZGhkICh0aW1lc2NhbGUsIGR1cmF0aW9uKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBjcmVhdGlvbl90aW1lICAgIOWIm+W7uuaXtumXtFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gbW9kaWZpY2F0aW9uX3RpbWXkv67mlLnml7bpl7RcbiAgICAgICh0aW1lc2NhbGUgPj4+IDI0KSAmIDB4RkYsIC8vIHRpbWVzY2FsZTogNCBieXRlcyAgICDmlofku7blqpLkvZPlnKgx56eS5pe26Ze05YaF55qE5Yi75bqm5YC877yM5Y+v5Lul55CG6Kej5Li6MeenkumVv+W6plxuICAgICAgKHRpbWVzY2FsZSA+Pj4gMTYpICYgMHhGRixcbiAgICAgICh0aW1lc2NhbGUgPj4+IDgpICYgMHhGRixcbiAgICAgICh0aW1lc2NhbGUpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbiA+Pj4gMjQpICYgMHhGRiwgLy8gZHVyYXRpb246IDQgYnl0ZXMgIHRyYWNr55qE5pe26Ze06ZW/5bqmXG4gICAgICAoZHVyYXRpb24gPj4+IDE2KSAmIDB4RkYsXG4gICAgICAoZHVyYXRpb24gPj4+IDgpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbikgJiAweEZGLFxuICAgICAgMHg1NSwgMHhDNCwgLy8gbGFuZ3VhZ2U6IHVuZCAodW5kZXRlcm1pbmVkKSDlqpLkvZPor63oqIDnoIHjgILmnIDpq5jkvY3kuLow77yM5ZCO6Z2iMTXkvY3kuLoz5Liq5a2X56ym77yI6KeBSVNPIDYzOS0yL1TmoIflh4bkuK3lrprkuYnvvIlcbiAgICAgIDB4MDAsIDB4MDAgLy8gcHJlX2RlZmluZWQgPSAwXG4gICAgXSlcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDEyICsgY29udGVudC5ieXRlTGVuZ3RoLCAnbWRoZCcsIEZNUDQuZXh0ZW5zaW9uKDAsIDApLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyBoZGxyICh0eXBlKSB7XG4gICAgbGV0IHZhbHVlID0gWzB4MDAsIC8vIHZlcnNpb24gMFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHByZV9kZWZpbmVkXG4gICAgICAweDc2LCAweDY5LCAweDY0LCAweDY1LCAvLyBoYW5kbGVyX3R5cGU6ICd2aWRlJ1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZFxuICAgICAgMHg1NiwgMHg2OSwgMHg2NCwgMHg2NSxcbiAgICAgIDB4NmYsIDB4NDgsIDB4NjEsIDB4NmUsXG4gICAgICAweDY0LCAweDZjLCAweDY1LCAweDcyLCAweDAwIC8vIG5hbWU6ICdWaWRlb0hhbmRsZXInXG4gICAgXVxuICAgIGlmICh0eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICB2YWx1ZS5zcGxpY2UoOCwgNCwgLi4uWzB4NzMsIDB4NmYsIDB4NzUsIDB4NmVdKVxuICAgICAgdmFsdWUuc3BsaWNlKDI0LCAxMywgLi4uWzB4NTMsIDB4NmYsIDB4NzUsIDB4NmUsXG4gICAgICAgIDB4NjQsIDB4NDgsIDB4NjEsIDB4NmUsXG4gICAgICAgIDB4NjQsIDB4NmMsIDB4NjUsIDB4NzIsIDB4MDBdKVxuICAgIH1cbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDggKyB2YWx1ZS5sZW5ndGgsICdoZGxyJywgbmV3IFVpbnQ4QXJyYXkodmFsdWUpKVxuICB9XG4gIHN0YXRpYyBtaW5mIChkYXRhKSB7XG4gICAgbGV0IHNpemUgPSA4XG4gICAgbGV0IHZtaGQgPSBkYXRhLnR5cGUgPT09ICd2aWRlbycgPyBGTVA0LnZtaGQoKSA6IEZNUDQuc21oZCgpXG4gICAgbGV0IGRpbmYgPSBGTVA0LmRpbmYoKVxuICAgIGxldCBzdGJsID0gRk1QNC5zdGJsKGRhdGEpO1xuICAgIFt2bWhkLCBkaW5mLCBzdGJsXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLmJ5dGVMZW5ndGhcbiAgICB9KVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goc2l6ZSwgJ21pbmYnLCB2bWhkLCBkaW5mLCBzdGJsKVxuICB9XG4gIHN0YXRpYyB2bWhkICgpIHtcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDIwLCAndm1oZCcsIG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIC8vIHZlcnNpb25cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDEsIC8vIGZsYWdzXG4gICAgICAweDAwLCAweDAwLCAvLyBncmFwaGljc21vZGVcbiAgICAgIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCAvLyBvcGNvbG9yXG4gICAgXSkpXG4gIH1cbiAgc3RhdGljIHNtaGQgKCkge1xuICAgIHJldHVybiBGTVA0LmluaXRCb3goMTYsICdzbWhkJywgbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvblxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIC8vIGJhbGFuY2VcbiAgICAgIDB4MDAsIDB4MDAgLy8gcmVzZXJ2ZWRcbiAgICBdKSlcbiAgfVxuICBzdGF0aWMgZGluZiAoKSB7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGxldCBkcmVmID0gWzB4MDAsIC8vIHZlcnNpb24gMFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDEsIC8vIGVudHJ5X2NvdW50XG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDBjLCAvLyBlbnRyeV9zaXplXG4gICAgICAweDc1LCAweDcyLCAweDZjLCAweDIwLCAvLyAndXJsJyB0eXBlXG4gICAgICAweDAwLCAvLyB2ZXJzaW9uIDBcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDEgLy8gZW50cnlfZmxhZ3NcbiAgICBdXG4gICAgYnVmZmVyLndyaXRlKEZNUDQuc2l6ZSgzNiksIEZNUDQudHlwZSgnZGluZicpLCBGTVA0LnNpemUoMjgpLCBGTVA0LnR5cGUoJ2RyZWYnKSwgbmV3IFVpbnQ4QXJyYXkoZHJlZikpXG4gICAgcmV0dXJuIGJ1ZmZlci5idWZmZXJcbiAgfVxuICBzdGF0aWMgc3RibCAoZGF0YSkge1xuICAgIGxldCBzaXplID0gOFxuICAgIGxldCBzdHNkID0gRk1QNC5zdHNkKGRhdGEpXG4gICAgbGV0IHN0dHMgPSBGTVA0LnN0dHMoKVxuICAgIGxldCBzdHNjID0gRk1QNC5zdHNjKClcbiAgICBsZXQgc3RzeiA9IEZNUDQuc3RzeigpXG4gICAgbGV0IHN0Y28gPSBGTVA0LnN0Y28oKTtcbiAgICBbc3RzZCwgc3R0cywgc3RzYywgc3Rzeiwgc3Rjb10uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5ieXRlTGVuZ3RoXG4gICAgfSlcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KHNpemUsICdzdGJsJywgc3RzZCwgc3R0cywgc3RzYywgc3Rzeiwgc3RjbylcbiAgfVxuICBzdGF0aWMgc3RzZCAoZGF0YSkge1xuICAgIGxldCBjb250ZW50XG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ2F1ZGlvJykge1xuICAgICAgLy8gaWYgKCFkYXRhLmlzQUFDICYmIGRhdGEuY29kZWMgPT09ICdtcDQnKSB7XG4gICAgICAvLyAgICAgY29udGVudCA9IEZNUDQubXAzKGRhdGEpO1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vXG4gICAgICAvLyB9XG4gICAgICAvLyDmlK/mjIFtcDRhXG4gICAgICBjb250ZW50ID0gRk1QNC5tcDRhKGRhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgPSBGTVA0LmF2YzEoZGF0YSlcbiAgICB9XG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveCgxNiArIGNvbnRlbnQuYnl0ZUxlbmd0aCwgJ3N0c2QnLCBGTVA0LmV4dGVuc2lvbigwLCAwKSwgbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4MDAsIDB4MDAsIDB4MDFdKSwgY29udGVudClcbiAgfVxuICBzdGF0aWMgbXA0YSAoZGF0YSkge1xuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCAweDAxLCAvLyBkYXRhX3JlZmVyZW5jZV9pbmRleFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCBkYXRhLmNoYW5uZWxDb3VudCwgLy8gY2hhbm5lbGNvdW50XG4gICAgICAweDAwLCAweDEwLCAvLyBzYW1wbGVTaXplOjE2Yml0c1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWQyXG4gICAgICAoZGF0YS5zYW1wbGVyYXRlID4+IDgpICYgMHhmZixcbiAgICAgIGRhdGEuc2FtcGxlcmF0ZSAmIDB4ZmYsIC8vXG4gICAgICAweDAwLCAweDAwXG4gICAgXSlcbiAgICBsZXQgZXNkcyA9IEZNUDQuZXNkcyhkYXRhLmNvbmZpZylcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDggKyBjb250ZW50LmJ5dGVMZW5ndGggKyBlc2RzLmJ5dGVMZW5ndGgsICdtcDRhJywgY29udGVudCwgZXNkcylcbiAgfVxuICBzdGF0aWMgZXNkcyAoY29uZmlnID0gWzQzLCAxNDYsIDgsIDBdKSB7XG4gICAgY29uc3QgY29uZmlnbGVuID0gY29uZmlnLmxlbmd0aFxuICAgIGxldCBidWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICBsZXQgY29udGVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIC8vIHZlcnNpb24gMFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcblxuICAgICAgMHgwMywgLy8gZGVzY3JpcHRvcl90eXBlXG4gICAgICAweDE3ICsgY29uZmlnbGVuLCAvLyBsZW5ndGhcbiAgICAgIDB4MDAsIDB4MDEsIC8vIGVzX2lkXG4gICAgICAweDAwLCAvLyBzdHJlYW1fcHJpb3JpdHlcblxuICAgICAgMHgwNCwgLy8gZGVzY3JpcHRvcl90eXBlXG4gICAgICAweDBmICsgY29uZmlnbGVuLCAvLyBsZW5ndGhcbiAgICAgIDB4NDAsIC8vIGNvZGVjIDogbXBlZzRfYXVkaW9cbiAgICAgIDB4MTUsIC8vIHN0cmVhbV90eXBlXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBidWZmZXJfc2l6ZVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gbWF4Qml0cmF0ZVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gYXZnQml0cmF0ZVxuXG4gICAgICAweDA1IC8vIGRlc2NyaXB0b3JfdHlwZVxuICAgIF0uY29uY2F0KFtjb25maWdsZW5dKS5jb25jYXQoY29uZmlnKS5jb25jYXQoWzB4MDYsIDB4MDEsIDB4MDJdKSlcbiAgICBidWZmZXIud3JpdGUoRk1QNC5zaXplKDggKyBjb250ZW50LmJ5dGVMZW5ndGgpLCBGTVA0LnR5cGUoJ2VzZHMnKSwgY29udGVudClcbiAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlclxuICB9XG4gIHN0YXRpYyBhdmMxIChkYXRhKSB7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGxldCBzaXplID0gNDAvLyA4KGF2YzEpKzgoYXZjYykrOChidHJ0KSsxNihwYXNwKVxuICAgIGxldCBzcHMgPSBkYXRhLnNwc1xuICAgIGxldCBwcHMgPSBkYXRhLnBwc1xuICAgIGxldCB3aWR0aCA9IGRhdGEud2lkdGhcbiAgICBsZXQgaGVpZ2h0ID0gZGF0YS5oZWlnaHRcbiAgICBsZXQgaFNwYWNpbmcgPSBkYXRhLnBpeGVsUmF0aW9bMF1cbiAgICBsZXQgdlNwYWNpbmcgPSBkYXRhLnBpeGVsUmF0aW9bMV1cbiAgICBsZXQgYXZjY0J1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGF2Y2NCdWZmZXIud3JpdGUobmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMSwgLy8gdmVyc2lvblxuICAgICAgc3BzWzFdLCAvLyBwcm9maWxlXG4gICAgICBzcHNbMl0sIC8vIHByb2ZpbGUgY29tcGF0aWJsZVxuICAgICAgc3BzWzNdLCAvLyBsZXZlbFxuICAgICAgMHhmYyB8IDMsXG4gICAgICAweEUwIHwgMSAvLyDnm67liY3lj6rlpITnkIbkuIDkuKpzcHNcbiAgICBdLmNvbmNhdChbc3BzLmxlbmd0aCA+Pj4gOCAmIDB4ZmYsIHNwcy5sZW5ndGggJiAweGZmXSkpKVxuICAgIGF2Y2NCdWZmZXIud3JpdGUoc3BzLCBuZXcgVWludDhBcnJheShbMSwgcHBzLmxlbmd0aCA+Pj4gOCAmIDB4ZmYsIHBwcy5sZW5ndGggJiAweGZmXSksIHBwcylcblxuICAgIGxldCBhdmNjID0gYXZjY0J1ZmZlci5idWZmZXJcbiAgICBsZXQgYXZjMSA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZFxuICAgICAgMHgwMCwgMHgwMSwgLy8gZGF0YV9yZWZlcmVuY2VfaW5kZXhcbiAgICAgIDB4MDAsIDB4MDAsIC8vIHByZV9kZWZpbmVkXG4gICAgICAweDAwLCAweDAwLCAvLyByZXNlcnZlZFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBwcmVfZGVmaW5lZFxuICAgICAgKHdpZHRoID4+IDgpICYgMHhmZixcbiAgICAgIHdpZHRoICYgMHhmZiwgLy8gd2lkdGhcbiAgICAgIChoZWlnaHQgPj4gOCkgJiAweGZmLFxuICAgICAgaGVpZ2h0ICYgMHhmZiwgLy8gaGVpZ2h0XG4gICAgICAweDAwLCAweDQ4LCAweDAwLCAweDAwLCAvLyBob3JpenJlc29sdXRpb25cbiAgICAgIDB4MDAsIDB4NDgsIDB4MDAsIDB4MDAsIC8vIHZlcnRyZXNvbHV0aW9uXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZFxuICAgICAgMHgwMCwgMHgwMSwgLy8gZnJhbWVfY291bnRcbiAgICAgIDB4MTIsXG4gICAgICAweDY0LCAweDYxLCAweDY5LCAweDZDLCAvLyBkYWlseW1vdGlvbi9obHMuanNcbiAgICAgIDB4NzksIDB4NkQsIDB4NkYsIDB4NzQsXG4gICAgICAweDY5LCAweDZGLCAweDZFLCAweDJGLFxuICAgICAgMHg2OCwgMHg2QywgMHg3MywgMHgyRSxcbiAgICAgIDB4NkEsIDB4NzMsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGNvbXByZXNzb3JuYW1lXG4gICAgICAweDAwLCAweDE4LCAvLyBkZXB0aCA9IDI0XG4gICAgICAweDExLCAweDExXSkgLy8gcHJlX2RlZmluZWQgPSAtMVxuICAgIGxldCBidHJ0ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgMHgxYywgMHg5YywgMHg4MCwgLy8gYnVmZmVyU2l6ZURCXG4gICAgICAweDAwLCAweDJkLCAweGM2LCAweGMwLCAvLyBtYXhCaXRyYXRlXG4gICAgICAweDAwLCAweDJkLCAweGM2LCAweGMwIC8vIGF2Z0JpdHJhdGVcbiAgICBdKVxuICAgIGxldCBwYXNwID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgKGhTcGFjaW5nID4+IDI0KSwgLy8gaFNwYWNpbmdcbiAgICAgIChoU3BhY2luZyA+PiAxNikgJiAweGZmLFxuICAgICAgKGhTcGFjaW5nID4+IDgpICYgMHhmZixcbiAgICAgIGhTcGFjaW5nICYgMHhmZixcbiAgICAgICh2U3BhY2luZyA+PiAyNCksIC8vIHZTcGFjaW5nXG4gICAgICAodlNwYWNpbmcgPj4gMTYpICYgMHhmZixcbiAgICAgICh2U3BhY2luZyA+PiA4KSAmIDB4ZmYsXG4gICAgICB2U3BhY2luZyAmIDB4ZmZcbiAgICBdKVxuXG4gICAgYnVmZmVyLndyaXRlKFxuICAgICAgRk1QNC5zaXplKHNpemUgKyBhdmMxLmJ5dGVMZW5ndGggKyBhdmNjLmJ5dGVMZW5ndGggKyBidHJ0LmJ5dGVMZW5ndGgpLCBGTVA0LnR5cGUoJ2F2YzEnKSwgYXZjMSxcbiAgICAgIEZNUDQuc2l6ZSg4ICsgYXZjYy5ieXRlTGVuZ3RoKSwgRk1QNC50eXBlKCdhdmNDJyksIGF2Y2MsXG4gICAgICBGTVA0LnNpemUoMjApLCBGTVA0LnR5cGUoJ2J0cnQnKSwgYnRydCxcbiAgICAgIEZNUDQuc2l6ZSgxNiksIEZNUDQudHlwZSgncGFzcCcpLCBwYXNwXG4gICAgKVxuICAgIHJldHVybiBidWZmZXIuYnVmZmVyXG4gIH1cbiAgc3RhdGljIHN0dHMgKCkge1xuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvblxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAgLy8gZW50cnlfY291bnRcbiAgICBdKVxuICAgIHJldHVybiBGTVA0LmluaXRCb3goMTYsICdzdHRzJywgY29udGVudClcbiAgfVxuICBzdGF0aWMgc3RzYyAoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAvLyB2ZXJzaW9uXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCAvLyBlbnRyeV9jb3VudFxuICAgIF0pXG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveCgxNiwgJ3N0c2MnLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyBzdGNvICgpIHtcbiAgICBsZXQgY29udGVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIC8vIHZlcnNpb25cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGZsYWdzXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwIC8vIGVudHJ5X2NvdW50XG4gICAgXSlcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDE2LCAnc3RjbycsIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIHN0c3ogKCkge1xuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvblxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHNhbXBsZV9zaXplXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwIC8vIHNhbXBsZV9jb3VudFxuICAgIF0pXG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveCgyMCwgJ3N0c3onLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyBtdmV4IChkdXJhdGlvbikge1xuICAgIGxldCBidWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICBsZXQgbWVoZCA9IEJ1ZmZlci53cml0ZVVpbnQzMihkdXJhdGlvbilcbiAgICBidWZmZXIud3JpdGUoRk1QNC5zaXplKDg4KSwgRk1QNC50eXBlKCdtdmV4JyksIEZNUDQuc2l6ZSgxNiksIEZNUDQudHlwZSgnbWVoZCcpLCBGTVA0LmV4dGVuc2lvbigwLCAwKSwgbWVoZCwgRk1QNC50cmV4KDEpLCBGTVA0LnRyZXgoMikpXG4gICAgcmV0dXJuIGJ1ZmZlci5idWZmZXJcbiAgfVxuICBzdGF0aWMgdHJleCAoaWQpIHtcbiAgICBsZXQgY29udGVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIC8vIHZlcnNpb24gMFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIChpZCA+PiAyNCksXG4gICAgICAoaWQgPj4gMTYpICYgMHhmZixcbiAgICAgIChpZCA+PiA4KSAmIDB4ZmYsXG4gICAgICAoaWQgJiAweGZmKSwgLy8gdHJhY2tfSURcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDEsIC8vIGRlZmF1bHRfc2FtcGxlX2Rlc2NyaXB0aW9uX2luZGV4XG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBkZWZhdWx0X3NhbXBsZV9kdXJhdGlvblxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZGVmYXVsdF9zYW1wbGVfc2l6ZVxuICAgICAgMHgwMCwgMHgwMSwgMHgwMCwgMHgwMSAvLyBkZWZhdWx0X3NhbXBsZV9mbGFnc1xuICAgIF0pXG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveCg4ICsgY29udGVudC5ieXRlTGVuZ3RoLCAndHJleCcsIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIG1vb2YgKGRhdGEpIHtcbiAgICBsZXQgc2l6ZSA9IDhcbiAgICBsZXQgbWZoZCA9IEZNUDQubWZoZCgpXG4gICAgbGV0IHRyYWYgPSBGTVA0LnRyYWYoZGF0YSk7XG4gICAgW21maGQsIHRyYWZdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBzaXplICs9IGl0ZW0uYnl0ZUxlbmd0aFxuICAgIH0pXG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveChzaXplLCAnbW9vZicsIG1maGQsIHRyYWYpXG4gIH1cbiAgc3RhdGljIG1maGQgKCkge1xuICAgIGxldCBjb250ZW50ID0gQnVmZmVyLndyaXRlVWludDMyKEZNUDQuc2VxdWVuY2UpXG4gICAgRk1QNC5zZXF1ZW5jZSArPSAxXG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveCgxNiwgJ21maGQnLCBGTVA0LmV4dGVuc2lvbigwLCAwKSwgY29udGVudClcbiAgfVxuICBzdGF0aWMgdHJhZiAoZGF0YSkge1xuICAgIGxldCBzaXplID0gOFxuICAgIGxldCB0ZmhkID0gRk1QNC50ZmhkKGRhdGEuaWQpXG4gICAgbGV0IHRmZHQgPSBGTVA0LnRmZHQoZGF0YS50aW1lKVxuICAgIGxldCBzZHRwID0gRk1QNC5zZHRwKGRhdGEpXG4gICAgbGV0IHRydW4gPSBGTVA0LnRydW4oZGF0YSwgc2R0cC5ieXRlTGVuZ3RoKTtcbiAgICBbdGZoZCwgdGZkdCwgc2R0cCwgdHJ1bl0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5ieXRlTGVuZ3RoXG4gICAgfSlcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KHNpemUsICd0cmFmJywgdGZoZCwgdGZkdCwgc2R0cCwgdHJ1bilcbiAgfVxuICBzdGF0aWMgdGZoZCAoaWQpIHtcbiAgICBsZXQgY29udGVudCA9IEJ1ZmZlci53cml0ZVVpbnQzMihpZClcbiAgICByZXR1cm4gRk1QNC5pbml0Qm94KDE2LCAndGZoZCcsIEZNUDQuZXh0ZW5zaW9uKDAsIDApLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyB0ZmR0ICh0aW1lKSB7XG4gICAgLy8gbGV0IHVwcGVyID0gTWF0aC5mbG9vcih0aW1lIC8gKFVJTlQzMl9NQVggKyAxKSksXG4gICAgLy8gICAgIGxvd2VyID0gTWF0aC5mbG9vcih0aW1lICUgKFVJTlQzMl9NQVggKyAxKSk7XG4gICAgcmV0dXJuIEZNUDQuaW5pdEJveCgxNiwgJ3RmZHQnLCBGTVA0LmV4dGVuc2lvbigwLCAwKSwgQnVmZmVyLndyaXRlVWludDMyKHRpbWUpKVxuICB9XG4gIHN0YXRpYyB0cnVuIChkYXRhLCBzZHRwTGVuZ3RoKSB7XG4gICAgLy8gbGV0IGlkID0gZGF0YS5pZDtcbiAgICAvLyBsZXQgY2VpbCA9IGlkID09PSAxID8gMTYgOiAxMjtcbiAgICBsZXQgYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgbGV0IHNhbXBsZUNvdW50ID0gQnVmZmVyLndyaXRlVWludDMyKGRhdGEuc2FtcGxlcy5sZW5ndGgpXG4gICAgLy8gbWRhdC1oZWFkZXIgOFxuICAgIC8vIG1vb2YtaGVhZGVyIDhcbiAgICAvLyBtZmhkIDE2XG4gICAgLy8gdHJhZi1oZWFkZXIgOFxuICAgIC8vIHRoaGQgMTZcbiAgICAvLyB0ZmR0IDIwXG4gICAgLy8gdHJ1bi1oZWFkZXIgMTJcbiAgICAvLyBzYW1wbGVDb3VudCA0XG4gICAgLy8gZGF0YS1vZmZzZXQgNFxuICAgIC8vIHNhbXBsZXMubGVuZ3RoXG4gICAgbGV0IG9mZnNldCA9IEJ1ZmZlci53cml0ZVVpbnQzMig4ICsgOCArIDE2ICsgOCArIDE2ICsgMTYgKyAxMiArIDQgKyA0ICsgMTYgKiBkYXRhLnNhbXBsZXMubGVuZ3RoICsgc2R0cExlbmd0aClcbiAgICBidWZmZXIud3JpdGUoRk1QNC5zaXplKDIwICsgMTYgKiBkYXRhLnNhbXBsZXMubGVuZ3RoKSwgRk1QNC50eXBlKCd0cnVuJyksIG5ldyBVaW50OEFycmF5KFsweDAwLCAweDAwLCAweDBGLCAweDAxXSksIHNhbXBsZUNvdW50LCBvZmZzZXQpXG5cbiAgICBsZXQgc2l6ZSA9IGJ1ZmZlci5idWZmZXIuYnl0ZUxlbmd0aFxuICAgIGxldCB3cml0ZU9mZnNldCA9IDBcbiAgICBkYXRhLnNhbXBsZXMuZm9yRWFjaCgoKSA9PiB7XG4gICAgICBzaXplICs9IDE2XG4gICAgfSlcblxuICAgIGxldCB0cnVuQm94ID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSlcblxuICAgIHRydW5Cb3guc2V0KGJ1ZmZlci5idWZmZXIsIDApXG4gICAgd3JpdGVPZmZzZXQgKz0gYnVmZmVyLmJ1ZmZlci5ieXRlTGVuZ3RoXG4gICAgZGF0YS5zYW1wbGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIHRydW5Cb3guc2V0KEJ1ZmZlci53cml0ZVVpbnQzMihpdGVtLmR1cmF0aW9uKSwgd3JpdGVPZmZzZXQpXG4gICAgICB3cml0ZU9mZnNldCArPSA0XG4gICAgICB0cnVuQm94LnNldChCdWZmZXIud3JpdGVVaW50MzIoaXRlbS5zaXplKSwgd3JpdGVPZmZzZXQpXG4gICAgICB3cml0ZU9mZnNldCArPSA0XG5cbiAgICAgIGlmIChkYXRhLmlkID09PSAxKSB7XG4gICAgICAgIHRydW5Cb3guc2V0KEJ1ZmZlci53cml0ZVVpbnQzMihpdGVtLmlzS2V5ZnJhbWUgPyAweDAyMDAwMDAwIDogMHgwMTAxMDAwMCksIHdyaXRlT2Zmc2V0KVxuICAgICAgICB3cml0ZU9mZnNldCArPSA0XG4gICAgICAgIHRydW5Cb3guc2V0KEJ1ZmZlci53cml0ZVVpbnQzMihpdGVtLmNwcyksIHdyaXRlT2Zmc2V0KVxuICAgICAgICB3cml0ZU9mZnNldCArPSA0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnVuQm94LnNldChCdWZmZXIud3JpdGVVaW50MzIoMHgwMTAwMDAwMCksIHdyaXRlT2Zmc2V0KVxuICAgICAgICB3cml0ZU9mZnNldCArPSA0XG4gICAgICAgIHRydW5Cb3guc2V0KEJ1ZmZlci53cml0ZVVpbnQzMigwKSwgd3JpdGVPZmZzZXQpXG4gICAgICAgIHdyaXRlT2Zmc2V0ICs9IDRcbiAgICAgIH1cblxuICAgICAgLy8gYnVmZmVyLndyaXRlKEJ1ZmZlci53cml0ZVVpbnQzMigwKSk7XG4gICAgfSlcbiAgICByZXR1cm4gdHJ1bkJveFxuICB9XG4gIHN0YXRpYyBzZHRwIChkYXRhKSB7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGJ1ZmZlci53cml0ZShGTVA0LnNpemUoMTIgKyBkYXRhLnNhbXBsZXMubGVuZ3RoKSwgRk1QNC50eXBlKCdzZHRwJyksIEZNUDQuZXh0ZW5zaW9uKDAsIDApKVxuICAgIGRhdGEuc2FtcGxlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgYnVmZmVyLndyaXRlKG5ldyBVaW50OEFycmF5KGRhdGEuaWQgPT09IDEgPyBbaXRlbS5rZXkgPyAzMiA6IDE2XSA6IFsxNl0pKVxuICAgIH0pXG4gICAgcmV0dXJuIGJ1ZmZlci5idWZmZXJcbiAgfVxuICBzdGF0aWMgbWRhdCAoZGF0YSkge1xuICAgIGxldCBidWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICBsZXQgc2l6ZSA9IDhcbiAgICBkYXRhLnNhbXBsZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5zaXplXG4gICAgfSlcbiAgICBidWZmZXIud3JpdGUoRk1QNC5zaXplKHNpemUpLCBGTVA0LnR5cGUoJ21kYXQnKSlcbiAgICBsZXQgbWRhdEJveCA9IG5ldyBVaW50OEFycmF5KHNpemUpXG4gICAgbGV0IG9mZnNldCA9IDBcbiAgICBtZGF0Qm94LnNldChidWZmZXIuYnVmZmVyLCBvZmZzZXQpXG4gICAgb2Zmc2V0ICs9IDhcbiAgICBkYXRhLnNhbXBsZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0uYnVmZmVyLmZvckVhY2goKHVuaXQpID0+IHtcbiAgICAgICAgbWRhdEJveC5zZXQodW5pdC5kYXRhLCBvZmZzZXQpXG4gICAgICAgIG9mZnNldCArPSB1bml0LmRhdGEuYnl0ZUxlbmd0aFxuICAgICAgICAvLyBidWZmZXIud3JpdGUodW5pdC5kYXRhKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gbWRhdEJveFxuICB9XG59XG5GTVA0LnR5cGUgPSBjYWNoZVdyYXBwZXIoKG5hbWUpID0+IHtcbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFtuYW1lLmNoYXJDb2RlQXQoMCksIG5hbWUuY2hhckNvZGVBdCgxKSwgbmFtZS5jaGFyQ29kZUF0KDIpLCBuYW1lLmNoYXJDb2RlQXQoMyldKVxufSlcbkZNUDQuc2VxdWVuY2UgPSAxXG5cbmV4cG9ydCBkZWZhdWx0IEZNUDRcbiIsImltcG9ydCBNZWRpYVNlZ21lbnRMaXN0IGZyb20gJy4uLy4uL21vZGVscy9NZWRpYVNlZ21lbnRMaXN0J1xuaW1wb3J0IE1lZGlhU2VnbWVudCBmcm9tICcuLi8uLi9tb2RlbHMvTWVkaWFTZWdtZW50J1xuaW1wb3J0IE1lZGlhU2FtcGxlIGZyb20gJy4uLy4uL21vZGVscy9NZWRpYVNhbXBsZSdcbmltcG9ydCBzbmlmZmVyIGZyb20gJy4uLy4uL3V0aWxzL3NuaWZmZXInXG5pbXBvcnQgQnVmZmVyIGZyb20gJy4uLy4uL3dyaXRlL0J1ZmZlcidcbmltcG9ydCBGTVA0IGZyb20gJy4vRm1wNCdcbmltcG9ydCBSZW11eGVyIGZyb20gJy4vUmVtdXhlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXA0UmVtdXhlciBleHRlbmRzIFJlbXV4ZXIge1xuICBjb25zdHJ1Y3RvciAoc3RvcmUpIHtcbiAgICBzdXBlcihzdG9yZSlcbiAgICB0aGlzLl9kdHNCYXNlID0gMFxuICAgIHRoaXMuX2lzRHRzQmFzZUluaXRlZCA9IGZhbHNlXG4gICAgdGhpcy5fdmlkZW9NZXRhID0gbnVsbFxuICAgIHRoaXMuX2F1ZGlvTWV0YSA9IG51bGxcbiAgICB0aGlzLl9hdWRpb05leHREdHMgPSBudWxsXG4gICAgdGhpcy5fdmlkZW9OZXh0RHRzID0gbnVsbFxuICAgIHRoaXMuX3ZpZGVvU2VnbWVudExpc3QgPSBuZXcgTWVkaWFTZWdtZW50TGlzdCgndmlkZW8nKVxuICAgIHRoaXMuX2F1ZGlvU2VnbWVudExpc3QgPSBuZXcgTWVkaWFTZWdtZW50TGlzdCgnYXVkaW8nKVxuICAgIGNvbnN0IHticm93c2VyfSA9IHNuaWZmZXJcbiAgICB0aGlzLl9maWxsU2lsZW5jZUZyYW1lID0gYnJvd3NlciA9PT0gJ2llJ1xuICAgIHRoaXMuaGFuZGxlTWVkaWFGcmFnbWVudCA9ICgpID0+IHt9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl9kdHNCYXNlID0gLTFcbiAgICB0aGlzLl9kdHNCYXNlSW5pdGVkID0gZmFsc2VcbiAgICB0aGlzLl9hdWRpb01ldGEgPSBudWxsXG4gICAgdGhpcy5fdmlkZW9NZXRhID0gbnVsbFxuICAgIHRoaXMuX3ZpZGVvTmV4dER0cyA9IG51bGxcbiAgICB0aGlzLl9hdWRpb05leHREdHMgPSBudWxsXG4gICAgdGhpcy5fdmlkZW9TZWdtZW50TGlzdC5jbGVhcigpXG4gICAgdGhpcy5fYXVkaW9TZWdtZW50TGlzdC5jbGVhcigpXG4gICAgdGhpcy5fdmlkZW9TZWdtZW50TGlzdCA9IG51bGxcbiAgICB0aGlzLl9hdWRpb1NlZ21lbnRMaXN0ID0gbnVsbFxuICB9XG5cbiAgcmVtdXggKGF1ZGlvVHJhY2ssIHZpZGVvVHJhY2spIHtcbiAgICAhdGhpcy5faXNEdHNCYXNlSW5pdGVkICYmIHRoaXMuY2FsY0R0c0Jhc2UoYXVkaW9UcmFjaywgdmlkZW9UcmFjaylcblxuICAgIHRoaXMuX3JlbXV4VmlkZW8odmlkZW9UcmFjaylcbiAgICB0aGlzLl9yZW11eEF1ZGlvKGF1ZGlvVHJhY2spXG4gIH1cblxuICBzZWVrICgpIHtcbiAgICB0aGlzLl92aWRlb05leHREdHMgPSBudWxsXG4gICAgdGhpcy5fYXVkaW9OZXh0RHRzID0gbnVsbFxuICAgIHRoaXMuX3ZpZGVvU2VnbWVudExpc3QuY2xlYXIoKVxuICAgIHRoaXMuX2F1ZGlvU2VnbWVudExpc3QuY2xlYXIoKVxuICB9XG5cbiAgb25NZXRhRGF0YVJlYWR5ICh0eXBlLCBtZXRhKSB7XG4gICAgdGhpc1tgXyR7dHlwZX1NZXRhYF0gPSBtZXRhXG4gIH1cblxuICBvbk1lZGlhSW5mb1JlYWR5IChtZWRpYUluZm8pIHtcbiAgICBsZXQgZnR5cE1vb3YgPSBuZXcgQnVmZmVyKClcbiAgICBsZXQgZnR5cCA9IEZNUDQuZnR5cCgpXG4gICAgbGV0IG1vb3YgPSBGTVA0Lm1vb3YobWVkaWFJbmZvKVxuICAgIGZ0eXBNb292LndyaXRlKGZ0eXAsIG1vb3YpXG4gICAgcmV0dXJuIGZ0eXBNb292LmJ1ZmZlclxuICB9XG5cbiAgY2FsY0R0c0Jhc2UgKGF1ZGlvVHJhY2ssIHZpZGVvVHJhY2spIHtcbiAgICBsZXQgYXVkaW9CYXNlID0gSW5maW5pdHlcbiAgICBsZXQgdmlkZW9CYXNlID0gSW5maW5pdHlcbiAgICBpZiAoYXVkaW9UcmFjay5zYW1wbGVzICYmIGF1ZGlvVHJhY2suc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIGF1ZGlvQmFzZSA9IGF1ZGlvVHJhY2suc2FtcGxlc1swXS5kdHNcbiAgICB9XG4gICAgaWYgKHZpZGVvVHJhY2suc2FtcGxlcyAmJiB2aWRlb1RyYWNrLnNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICB2aWRlb0Jhc2UgPSB2aWRlb1RyYWNrLnNhbXBsZXNbMF0uZHRzXG4gICAgfVxuXG4gICAgdGhpcy5fZHRzQmFzZSA9IE1hdGgubWluKGF1ZGlvQmFzZSwgdmlkZW9CYXNlKVxuICAgIHRoaXMuX2lzRHRzQmFzZUluaXRlZCA9IHRydWVcbiAgfVxuXG4gIF9yZW11eFZpZGVvICh2aWRlb1RyYWNrKSB7XG4gICAgaWYgKCF0aGlzLl92aWRlb01ldGEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB0cmFjayA9IHZpZGVvVHJhY2tcbiAgICBpZiAoIXZpZGVvVHJhY2suc2FtcGxlcyB8fCAhdmlkZW9UcmFjay5zYW1wbGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGxldCB7c2FtcGxlc30gPSB0cmFja1xuICAgIGxldCBkdHNDb3JyZWN0aW9uXG4gICAgbGV0IGZpcnN0RHRzID0gLTFcbiAgICBsZXQgbGFzdER0cyA9IC0xXG4gICAgbGV0IGZpcnN0UHRzID0gLTFcbiAgICBsZXQgbGFzdFB0cyA9IC0xXG5cbiAgICBjb25zdCBtcDRTYW1wbGVzID0gW11cbiAgICBjb25zdCBtZGF0Qm94ID0ge1xuICAgICAgc2FtcGxlczogW11cbiAgICB9XG4gICAgY29uc3QgdmlkZW9TZWdtZW50ID0gbmV3IE1lZGlhU2VnbWVudCgpXG4gICAgd2hpbGUgKHNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBhdmNTYW1wbGUgPSBzYW1wbGVzLnNoaWZ0KClcbiAgICAgIGNvbnN0IHtpc0tleWZyYW1lLCBjcHN9ID0gYXZjU2FtcGxlXG4gICAgICBsZXQgZHRzID0gYXZjU2FtcGxlLmR0cyAtIHRoaXMuX2R0c0Jhc2VcblxuICAgICAgaWYgKGR0c0NvcnJlY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoIXRoaXMuX3ZpZGVvTmV4dER0cykge1xuICAgICAgICAgIGlmICh0aGlzLl92aWRlb1NlZ21lbnRMaXN0LmlzRW1wdHkoKSkge1xuICAgICAgICAgICAgZHRzQ29ycmVjdGlvbiA9IDBcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbGFzdFNlZ21lbnQgPSB0aGlzLl92aWRlb1NlZ21lbnRMaXN0LmdldExhc3RTZWdtZW50QmVmb3JlKGR0cylcbiAgICAgICAgICAgIGlmIChsYXN0U2VnbWVudCkge1xuICAgICAgICAgICAgICBsZXQgZ2FwXG4gICAgICAgICAgICAgIGNvbnN0IHtsYXN0RHRzLCBnYXA6IGxhc3RHYXB9ID0gbGFzdFNlZ21lbnRcbiAgICAgICAgICAgICAgZ2FwID0gZHRzIC0gKGxhc3REdHMgKyBsYXN0R2FwKSA+IDMgPyBkdHMgLSAobGFzdER0cyArIGxhc3RHYXApIDogMFxuICAgICAgICAgICAgICBkdHNDb3JyZWN0aW9uID0gZHRzIC0gKGxhc3REdHMgKyBnYXApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkdHNDb3JyZWN0aW9uID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkdHNDb3JyZWN0aW9uID0gZHRzIC0gdGhpcy5fdmlkZW9OZXh0RHRzID49IDEwMDAgPyAwIDogZHRzIC0gdGhpcy5fdmlkZW9OZXh0RHRzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IG9yaWdpbkR0cyA9IGR0c1xuICAgICAgZHRzIC09IGR0c0NvcnJlY3Rpb25cbiAgICAgIGNvbnN0IHB0cyA9IGR0cyArIGNwc1xuXG4gICAgICBpZiAoZmlyc3REdHMgPT09IC0xKSB7XG4gICAgICAgIGZpcnN0RHRzID0gZHRzXG4gICAgICAgIGZpcnN0UHRzID0gcHRzXG4gICAgICB9XG4gICAgICBsZXQgX3VuaXRzID0gW11cbiAgICAgIHdoaWxlIChhdmNTYW1wbGUudW5pdHMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBtZGF0U2FtcGxlID0ge1xuICAgICAgICAgIGJ1ZmZlcjogW10sXG4gICAgICAgICAgc2l6ZTogMFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVuaXQgPSBhdmNTYW1wbGUudW5pdHMuc2hpZnQoKVxuICAgICAgICBfdW5pdHMucHVzaCh1bml0KVxuICAgICAgICBtZGF0U2FtcGxlLmJ1ZmZlci5wdXNoKHVuaXQpXG4gICAgICAgIG1kYXRTYW1wbGUuc2l6ZSArPSB1bml0LmRhdGEuYnl0ZUxlbmd0aFxuXG4gICAgICAgIG1kYXRCb3guc2FtcGxlcy5wdXNoKG1kYXRTYW1wbGUpXG4gICAgICB9XG5cbiAgICAgIGxldCBzYW1wbGVEdXJhdGlvbiA9IDBcblxuICAgICAgaWYgKHNhbXBsZXMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgY29uc3QgbmV4dER0cyA9IHNhbXBsZXNbMF0uZHRzIC0gdGhpcy5fZHRzQmFzZSAtIGR0c0NvcnJlY3Rpb25cbiAgICAgICAgc2FtcGxlRHVyYXRpb24gPSBuZXh0RHRzIC0gZHRzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobXA0U2FtcGxlcy5sZW5ndGggPj0gMSkgeyAvLyBsYXN0ZXN0IHNhbXBsZSwgdXNlIHNlY29uZCBsYXN0IGR1cmF0aW9uXG4gICAgICAgICAgc2FtcGxlRHVyYXRpb24gPSBtcDRTYW1wbGVzW21wNFNhbXBsZXMubGVuZ3RoIC0gMV0uZHVyYXRpb25cbiAgICAgICAgfSBlbHNlIHsgLy8gdGhlIG9ubHkgb25lIHNhbXBsZSwgdXNlIHJlZmVyZW5jZSBkdXJhdGlvblxuICAgICAgICAgIHNhbXBsZUR1cmF0aW9uID0gdGhpcy5fdmlkZW9NZXRhLnJlZlNhbXBsZUR1cmF0aW9uXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzS2V5ZnJhbWUpIHtcbiAgICAgICAgY29uc3QgcmFwID0gbmV3IE1lZGlhU2FtcGxlKHtcbiAgICAgICAgICBkdHMsXG4gICAgICAgICAgcHRzLFxuICAgICAgICAgIGR1cmF0aW9uOiBzYW1wbGVEdXJhdGlvbixcbiAgICAgICAgICBvcmlnaW5EdHM6IGF2Y1NhbXBsZS5kdHMsXG4gICAgICAgICAgcG9zaXRpb246IGF2Y1NhbXBsZS5wb3NpdGlvbixcbiAgICAgICAgICBpc1JBUDogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICB2aWRlb1NlZ21lbnQuYWRkUkFQKHJhcClcbiAgICAgIH1cblxuICAgICAgbXA0U2FtcGxlcy5wdXNoKHtcbiAgICAgICAgZHRzLFxuICAgICAgICBjcHMsXG4gICAgICAgIHB0cyxcbiAgICAgICAgdW5pdHM6IF91bml0cyxcbiAgICAgICAgc2l6ZTogYXZjU2FtcGxlLmxlbmd0aCxcbiAgICAgICAgaXNLZXlmcmFtZSxcbiAgICAgICAgZHVyYXRpb246IHNhbXBsZUR1cmF0aW9uLFxuICAgICAgICBvcmlnaW5EdHNcbiAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGZpcnN0ID0gbXA0U2FtcGxlc1swXVxuICAgIGNvbnN0IGxhc3QgPSBtcDRTYW1wbGVzW21wNFNhbXBsZXMubGVuZ3RoIC0gMV1cbiAgICBsYXN0RHRzID0gbGFzdC5kdHMgKyBsYXN0LmR1cmF0aW9uXG4gICAgbGFzdFB0cyA9IGxhc3QucHRzICsgbGFzdC5kdXJhdGlvblxuXG4gICAgdGhpcy5fdmlkZW9OZXh0RHRzID0gbGFzdER0c1xuXG4gICAgdmlkZW9TZWdtZW50LnN0YXJ0RHRzID0gZmlyc3REdHNcbiAgICB2aWRlb1NlZ21lbnQuZW5kRHRzID0gbGFzdER0c1xuICAgIHZpZGVvU2VnbWVudC5zdGFydFB0cyA9IGZpcnN0UHRzXG4gICAgdmlkZW9TZWdtZW50LmVuZFB0cyA9IGxhc3RQdHNcbiAgICB2aWRlb1NlZ21lbnQub3JpZ2luU3RhcnREdHMgPSBmaXJzdC5vcmlnaW5EdHNcbiAgICB2aWRlb1NlZ21lbnQub3JpZ2luRW5kRHRzID0gbGFzdC5vcmlnaW5EdHMgKyBsYXN0LmR1cmF0aW9uXG4gICAgdmlkZW9TZWdtZW50LmdhcCA9IGR0c0NvcnJlY3Rpb25cbiAgICBjb25zdCBmaXJzdFNhbXBsZSA9IG5ldyBNZWRpYVNhbXBsZSh7XG4gICAgICBkdHM6IGZpcnN0LmR0cyxcbiAgICAgIHB0czogZmlyc3QucHRzLFxuICAgICAgZHVyYXRpb246IGZpcnN0LmR1cmF0aW9uLFxuICAgICAgaXNLZXlmcmFtZTogZmlyc3QuaXNLZXlmcmFtZSxcbiAgICAgIG9yaWdpbkR0czogZmlyc3Qub3JpZ2luRHRzXG4gICAgfSlcbiAgICBjb25zdCBsYXN0U2FtcGxlID0gbmV3IE1lZGlhU2FtcGxlKHtcbiAgICAgIGR0czogbGFzdC5kdHMsXG4gICAgICBwdHM6IGxhc3QucHRzLFxuICAgICAgZHVyYXRpb246IGxhc3QuZHVyYXRpb24sXG4gICAgICBpc0tleWZyYW1lOiBsYXN0LmlzS2V5ZnJhbWUsXG4gICAgICBvcmlnaW5EdHM6IGxhc3Qub3JpZ2luRHRzXG4gICAgfSlcbiAgICB2aWRlb1NlZ21lbnQuZmlyc3RTYW1wbGUgPSBmaXJzdFNhbXBsZVxuICAgIHZpZGVvU2VnbWVudC5sYXN0U2FtcGxlID0gbGFzdFNhbXBsZVxuICAgIGxldCBtb29mTWRhdCA9IG5ldyBCdWZmZXIoKVxuXG4gICAgdHJhY2suc2FtcGxlcyA9IG1wNFNhbXBsZXNcbiAgICB0cmFjay50aW1lID0gZmlyc3REdHNcbiAgICBjb25zdCBtb29mID0gRk1QNC5tb29mKHRyYWNrKVxuICAgIGNvbnN0IG1kYXQgPSBGTVA0Lm1kYXQobWRhdEJveClcbiAgICBtb29mTWRhdC53cml0ZShtb29mLCBtZGF0KVxuXG4gICAgaWYgKCF0aGlzLl9zdG9yZS5pc0xpdmUpIHtcbiAgICAgIHRoaXMuX3ZpZGVvU2VnbWVudExpc3QuYXBwZW5kKHZpZGVvU2VnbWVudClcbiAgICB9XG5cbiAgICB0cmFjay5zYW1wbGVzID0gW11cbiAgICB0cmFjay5sZW5ndGggPSAwXG5cbiAgICB0aGlzLmhhbmRsZU1lZGlhRnJhZ21lbnQoe1xuICAgICAgdHlwZTogJ3ZpZGVvJyxcbiAgICAgIGRhdGE6IG1vb2ZNZGF0LmJ1ZmZlci5idWZmZXIsXG4gICAgICBzYW1wbGVDb3VudDogbXA0U2FtcGxlcy5sZW5ndGgsXG4gICAgICBmcmFnbWVudDogdmlkZW9TZWdtZW50XG4gICAgfSlcbiAgfVxuXG4gIF9yZW11eEF1ZGlvICh0cmFjaykge1xuICAgIGlmICghdGhpcy5fYXVkaW9NZXRhKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3Qge3NhbXBsZXN9ID0gdHJhY2tcbiAgICBsZXQgZHRzQ29ycmVjdGlvblxuICAgIGxldCBmaXJzdER0cyA9IC0xXG4gICAgbGV0IGxhc3REdHMgPSAtMVxuICAgIC8vIGxldCBmaXJzdFB0cyA9IC0xXG4gICAgLy8gbGV0IGxhc3RQdHMgPSAtMVxuICAgIGxldCBzaWxlbnREdXJhdGlvblxuICAgIGxldCBtcDRTYW1wbGVzID0gW11cblxuICAgIGNvbnN0IG1kYXRCb3ggPSB7XG4gICAgICBzYW1wbGVzOiBbXVxuICAgIH1cbiAgICBpZiAoIXNhbXBsZXMgfHwgIXNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbGV0IGlzRmlyc3REdHNJbml0ZWQgPSBmYWxzZVxuICAgIHdoaWxlIChzYW1wbGVzLmxlbmd0aCkge1xuICAgICAgbGV0IHNhbXBsZSA9IHNhbXBsZXMuc2hpZnQoKVxuICAgICAgY29uc3Qge3VuaXR9ID0gc2FtcGxlXG4gICAgICBsZXQgZHRzID0gc2FtcGxlLmR0cyAtIHRoaXMuX2R0c0Jhc2VcblxuICAgICAgbGV0IG5lZWRTaWxlbnRGcmFtZSA9IGZhbHNlXG4gICAgICBpZiAoZHRzQ29ycmVjdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICghdGhpcy5fYXVkaW9OZXh0RHRzKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2F1ZGlvU2VnbWVudExpc3QuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICBkdHNDb3JyZWN0aW9uID0gMFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0U2VnbWVudCA9IHRoaXMuX2F1ZGlvU2VnbWVudExpc3QuZ2V0TGFzdFNlZ21lbnRCZWZvcmUoZHRzKVxuICAgICAgICAgICAgaWYgKGxhc3RTZWdtZW50KSB7XG4gICAgICAgICAgICAgIGxldCBnYXBcbiAgICAgICAgICAgICAgY29uc3Qge2xhc3REdHMsIGdhcDogbGFzdEdhcH0gPSBsYXN0U2VnbWVudFxuICAgICAgICAgICAgICBnYXAgPSBkdHMgLSAobGFzdER0cyArIGxhc3RHYXApID4gMyA/IGR0cyAtIChsYXN0RHRzICsgbGFzdEdhcCkgOiAwXG4gICAgICAgICAgICAgIGR0c0NvcnJlY3Rpb24gPSBkdHMgLSAobGFzdER0cyArIGdhcClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5lZWRTaWxlbnRGcmFtZSA9IHRoaXMuX2ZpbGxTaWxlbmNlRnJhbWUgJiYgIXRoaXMuX3ZpZGVvU2VnbWVudExpc3QuaXNFbXB0eSgpXG4gICAgICAgICAgICAgIGR0c0NvcnJlY3Rpb24gPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGR0c0NvcnJlY3Rpb24gPSBkdHMgLSB0aGlzLl9hdWRpb05leHREdHMgPj0gMTAwMCA/IDAgOiBkdHMgLSB0aGlzLl9hdWRpb05leHREdHNcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3Qgb3JpZ2luRHRzID0gZHRzXG4gICAgICBkdHMgLT0gZHRzQ29ycmVjdGlvblxuXG4gICAgICBpZiAobmVlZFNpbGVudEZyYW1lKSB7XG4gICAgICAgIGNvbnN0IHZpZGVvU2VnbWVudCA9IHRoaXMuX3ZpZGVvU2VnbWVudExpc3QuZ2V0TGFzdFNhbXBsZUJlZm9yZShvcmlnaW5EdHMpXG5cbiAgICAgICAgaWYgKHZpZGVvU2VnbWVudCAmJiB2aWRlb1NlZ21lbnQuc3RhcnREdHMgPCBkdHMpIHtcbiAgICAgICAgICBzaWxlbnREdXJhdGlvbiA9IGR0cyAtIHZpZGVvU2VnbWVudC5zdGFydER0c1xuICAgICAgICAgIGR0cyA9IHZpZGVvU2VnbWVudC5zdGFydER0c1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5lZWRTaWxlbnRGcmFtZSA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc0ZpcnN0RHRzSW5pdGVkKSB7XG4gICAgICAgIGZpcnN0RHRzID0gZHRzXG4gICAgICAgIGlzRmlyc3REdHNJbml0ZWQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkU2lsZW50RnJhbWUpIHtcbiAgICAgICAgc2FtcGxlcy51bnNoaWZ0KHNhbXBsZSlcbiAgICAgICAgY29uc3Qgc2lsZW50RnJhbWUgPSB0aGlzLmluaXRTaWxlbnRBdWRpbyhkdHMsIHNpbGVudER1cmF0aW9uKVxuICAgICAgICBtcDRTYW1wbGVzLnB1c2goc2lsZW50RnJhbWUpXG5cbiAgICAgICAgbGV0IG1kYXRTYW1wbGUgPSB7XG4gICAgICAgICAgYnVmZmVyOiBbXSxcbiAgICAgICAgICBzaXplOiAwXG4gICAgICAgIH1cbiAgICAgICAgbWRhdFNhbXBsZS5idWZmZXIucHVzaCh7XG4gICAgICAgICAgZGF0YTogc2lsZW50RnJhbWUudW5pdFxuICAgICAgICB9KVxuICAgICAgICBtZGF0U2FtcGxlLnNpemUgKz0gc2lsZW50RnJhbWUudW5pdC5ieXRlTGVuZ3RoXG5cbiAgICAgICAgbWRhdEJveC5zYW1wbGVzLnB1c2gobWRhdFNhbXBsZSlcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgbGV0IHNhbXBsZUR1cmF0aW9uID0gMFxuXG4gICAgICBpZiAoc2FtcGxlcy5sZW5ndGggPj0gMSkge1xuICAgICAgICBjb25zdCBuZXh0RHRzID0gc2FtcGxlc1swXS5kdHMgLSB0aGlzLl9kdHNCYXNlIC0gZHRzQ29ycmVjdGlvblxuICAgICAgICBzYW1wbGVEdXJhdGlvbiA9IG5leHREdHMgLSBkdHNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChtcDRTYW1wbGVzLmxlbmd0aCA+PSAxKSB7IC8vIHVzZSBzZWNvbmQgbGFzdCBzYW1wbGUgZHVyYXRpb25cbiAgICAgICAgICBzYW1wbGVEdXJhdGlvbiA9IG1wNFNhbXBsZXNbbXA0U2FtcGxlcy5sZW5ndGggLSAxXS5kdXJhdGlvblxuICAgICAgICB9IGVsc2UgeyAvLyB0aGUgb25seSBvbmUgc2FtcGxlLCB1c2UgcmVmZXJlbmNlIHNhbXBsZSBkdXJhdGlvblxuICAgICAgICAgIHNhbXBsZUR1cmF0aW9uID0gdGhpcy5fYXVkaW9NZXRhLnJlZlNhbXBsZUR1cmF0aW9uXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgbXA0U2FtcGxlID0ge1xuICAgICAgICBkdHMsXG4gICAgICAgIHB0czogZHRzLFxuICAgICAgICBjdHM6IDAsXG4gICAgICAgIHNpemU6IHVuaXQuYnl0ZUxlbmd0aCxcbiAgICAgICAgZHVyYXRpb246IHNhbXBsZUR1cmF0aW9uLFxuICAgICAgICBvcmlnaW5EdHNcbiAgICAgIH1cblxuICAgICAgbGV0IG1kYXRTYW1wbGUgPSB7XG4gICAgICAgIGJ1ZmZlcjogW10sXG4gICAgICAgIHNpemU6IDBcbiAgICAgIH1cbiAgICAgIG1kYXRTYW1wbGUuYnVmZmVyLnB1c2goe1xuICAgICAgICBkYXRhOiB1bml0XG4gICAgICB9KVxuICAgICAgbWRhdFNhbXBsZS5zaXplICs9IHVuaXQuYnl0ZUxlbmd0aFxuXG4gICAgICBtZGF0Qm94LnNhbXBsZXMucHVzaChtZGF0U2FtcGxlKVxuXG4gICAgICBtcDRTYW1wbGVzLnB1c2gobXA0U2FtcGxlKVxuICAgIH1cblxuICAgIGNvbnN0IGxhc3QgPSBtcDRTYW1wbGVzW21wNFNhbXBsZXMubGVuZ3RoIC0gMV1cbiAgICBsYXN0RHRzID0gbGFzdC5kdHMgKyBsYXN0LmR1cmF0aW9uXG5cbiAgICB0aGlzLl9hdWRpb05leHREdHMgPSBsYXN0RHRzXG5cbiAgICBjb25zdCBhdWRpb1NlZ21lbnQgPSBuZXcgTWVkaWFTZWdtZW50KClcbiAgICBhdWRpb1NlZ21lbnQuc3RhcnREdHMgPSBmaXJzdER0c1xuICAgIGF1ZGlvU2VnbWVudC5lbmREdHMgPSBsYXN0RHRzXG4gICAgYXVkaW9TZWdtZW50LnN0YXJ0UHRzID0gZmlyc3REdHNcbiAgICBhdWRpb1NlZ21lbnQuZW5kUHRzID0gbGFzdER0c1xuICAgIGF1ZGlvU2VnbWVudC5vcmlnaW5TdGFydER0cyA9IG1wNFNhbXBsZXNbMF0ub3JpZ2luRHRzXG4gICAgYXVkaW9TZWdtZW50Lm9yaWdpbkVuZER0cyA9IGxhc3Qub3JpZ2luRHRzICsgbGFzdC5kdXJhdGlvblxuICAgIGF1ZGlvU2VnbWVudC5nYXAgPSBkdHNDb3JyZWN0aW9uXG4gICAgYXVkaW9TZWdtZW50LmZpcnN0U2FtcGxlID0gbmV3IE1lZGlhU2FtcGxlKHtcbiAgICAgIGR0czogbXA0U2FtcGxlc1swXS5kdHMsXG4gICAgICBwdHM6IG1wNFNhbXBsZXNbMF0ucHRzLFxuICAgICAgZHVyYXRpb246IG1wNFNhbXBsZXNbMF0uZHVyYXRpb24sXG4gICAgICBvcmlnaW5EdHM6IG1wNFNhbXBsZXNbMF0ub3JpZ2luRHRzXG4gICAgfSlcbiAgICBhdWRpb1NlZ21lbnQubGFzdFNhbXBsZSA9IG5ldyBNZWRpYVNhbXBsZSh7XG4gICAgICBkdHM6IGxhc3QuZHRzLFxuICAgICAgcHRzOiBsYXN0LnB0cyxcbiAgICAgIGR1cmF0aW9uOiBsYXN0LmR1cmF0aW9uLFxuICAgICAgb3JpZ2luRHRzOiBsYXN0Lm9yaWdpbkR0c1xuICAgIH0pXG5cbiAgICB0cmFjay5zYW1wbGVzID0gbXA0U2FtcGxlc1xuICAgIGNvbnN0IG1vb2ZNZGF0ID0gbmV3IEJ1ZmZlcigpXG4gICAgdHJhY2sudGltZSA9IGZpcnN0RHRzXG4gICAgY29uc3QgbW9vZiA9IEZNUDQubW9vZih0cmFjaywgZmlyc3REdHMpXG4gICAgY29uc3QgbWRhdCA9IEZNUDQubWRhdChtZGF0Qm94KVxuICAgIG1vb2ZNZGF0LndyaXRlKG1vb2YsIG1kYXQpXG5cbiAgICBpZiAoIXRoaXMuX3N0b3JlLmlzTGl2ZSkge1xuICAgICAgdGhpcy5fYXVkaW9TZWdtZW50TGlzdC5hcHBlbmQoYXVkaW9TZWdtZW50KVxuICAgIH1cbiAgICB0cmFjay5zYW1wbGVzID0gW11cbiAgICB0cmFjay5sZW5ndGggPSAwXG4gICAgdGhpcy5oYW5kbGVNZWRpYUZyYWdtZW50KHtcbiAgICAgIHR5cGU6ICdhdWRpbycsXG4gICAgICBkYXRhOiBtb29mTWRhdC5idWZmZXIuYnVmZmVyLFxuICAgICAgc2FtcGxlQ291bnQ6IG1wNFNhbXBsZXMubGVuZ3RoLFxuICAgICAgZnJhZ21lbnQ6IGF1ZGlvU2VnbWVudFxuICAgIH0pXG4gIH1cblxuICBpbml0U2lsZW50QXVkaW8gKGR0cywgZHVyYXRpb24pIHtcbiAgICBjb25zdCB1bml0ID0gTXA0UmVtdXhlci5nZXRTaWxlbnRGcmFtZSh0aGlzLl9hdWRpb01ldGEuY2hhbm5lbENvdW50KVxuICAgIHJldHVybiB7XG4gICAgICBkdHMsXG4gICAgICBwdHM6IGR0cyxcbiAgICAgIGNwczogMCxcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgdW5pdCxcbiAgICAgIHNpemU6IHVuaXQuYnl0ZUxlbmd0aCxcbiAgICAgIG9yaWdpbkR0czogZHRzXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldFNpbGVudEZyYW1lIChjaGFubmVsQ291bnQpIHtcbiAgICBpZiAoY2hhbm5lbENvdW50ID09PSAxKSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4YzgsIDB4MDAsIDB4ODAsIDB4MjMsIDB4ODBdKVxuICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSAyKSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MjEsIDB4MDAsIDB4NDksIDB4OTAsIDB4MDIsIDB4MTksIDB4MDAsIDB4MjMsIDB4ODBdKVxuICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSAzKSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4YzgsIDB4MDAsIDB4ODAsIDB4MjAsIDB4ODQsIDB4MDEsIDB4MjYsIDB4NDAsIDB4MDgsIDB4NjQsIDB4MDAsIDB4OGVdKVxuICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSA0KSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4YzgsIDB4MDAsIDB4ODAsIDB4MjAsIDB4ODQsIDB4MDEsIDB4MjYsIDB4NDAsIDB4MDgsIDB4NjQsIDB4MDAsIDB4ODAsIDB4MmMsIDB4ODAsIDB4MDgsIDB4MDIsIDB4MzhdKVxuICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSA1KSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4YzgsIDB4MDAsIDB4ODAsIDB4MjAsIDB4ODQsIDB4MDEsIDB4MjYsIDB4NDAsIDB4MDgsIDB4NjQsIDB4MDAsIDB4ODIsIDB4MzAsIDB4MDQsIDB4OTksIDB4MDAsIDB4MjEsIDB4OTAsIDB4MDIsIDB4MzhdKVxuICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSA2KSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4YzgsIDB4MDAsIDB4ODAsIDB4MjAsIDB4ODQsIDB4MDEsIDB4MjYsIDB4NDAsIDB4MDgsIDB4NjQsIDB4MDAsIDB4ODIsIDB4MzAsIDB4MDQsIDB4OTksIDB4MDAsIDB4MjEsIDB4OTAsIDB4MDIsIDB4MDAsIDB4YjIsIDB4MDAsIDB4MjAsIDB4MDgsIDB4ZTBdKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iLCJpbXBvcnQgTG9nIGZyb20gJy4uLy4uL3V0aWxzL0xvZydcbmltcG9ydCBUcmFuc0NvZGVyIGZyb20gJy4uL1RyYW5zQ29kZXInXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW11eGVyIGV4dGVuZHMgVHJhbnNDb2RlciB7XG4gIGRpc3BhdGNoICh0eXBlLCAuLi5wYXlsb2FkKSB7XG4gICAgY29uc3QgcHJlZml4ID0gJ3JlbXV4ZXJfJ1xuICAgIHRoaXMuX29ic2VydmVyLmVtaXQoYCR7cHJlZml4fSR7dHlwZX1gLCAuLi5wYXlsb2FkKVxuICB9XG4gIGVycm9yIChtZXNzYWdlKSB7XG4gICAgY29uc3QgeyBDTEFTU19OQU1FID0gJ1JlbXV4ZXInIH0gPSB0aGlzXG4gICAgTG9nLmVycm9yKGBbJHtDTEFTU19OQU1FfSBlcnJvcl0gYCwgbWVzc2FnZSlcbiAgfVxuXG4gIGluZm8gKG1lc3NhZ2UpIHtcbiAgICBjb25zdCB7IENMQVNTX05BTUUgPSAnUmVtdXhlcicgfSA9IHRoaXNcbiAgICBMb2cuaW5mbyhgWyR7Q0xBU1NfTkFNRX0gaW5mb10gYCwgbWVzc2FnZSlcbiAgfVxuXG4gIGxvZyAobWVzc2FnZSkge1xuICAgIGNvbnN0IHsgQ0xBU1NfTkFNRSA9ICdSZW11eGVyJyB9ID0gdGhpc1xuICAgIExvZy5sb2coYFske0NMQVNTX05BTUV9IGxvZ10gYCwgbWVzc2FnZSlcbiAgfVxuXG4gIHdhcm4gKG1lc3NhZ2UpIHtcbiAgICBjb25zdCB7IENMQVNTX05BTUUgPSAnUmVtdXhlcicgfSA9IHRoaXNcbiAgICBMb2cud2FybihgWyR7Q0xBU1NfTkFNRX0gd2Fybl0gYCwgbWVzc2FnZSlcbiAgfVxufVxuIiwiLy8g55u05pKt5Lu75Yqh6I635Y+WIOebtOaSreaVsOaNrlxuY2xhc3MgTGl2ZVRhc2sge1xuICBjb25zdHJ1Y3RvciAodXJsLCBjb25maWcpIHtcbiAgICAvL2h0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL3poLUNOL2RvY3MvV2ViL0FQSS9IZWFkZXJzXG4gICAgY29uc3QgX2hlYWRlcnMgPSBuZXcgd2luZG93LkhlYWRlcnMoKVxuXG4gICAgY29uc3QgX2NvbmZpZyA9IHtcbiAgICAgIGhlYWRlcnM6IE9iamVjdC5hc3NpZ24oe30sIF9oZWFkZXJzKSxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBjYWNoZTogJ2RlZmF1bHQnLFxuICAgICAgbW9kZTogJ2NvcnMnXG4gICAgfVxuICAgIHRoaXMuX3N0b3AgPSBmYWxzZVxuICAgIC8vaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvemgtQ04vZG9jcy9XZWIvQVBJL1JlcXVlc3QvUmVxdWVzdFxuICAgIHRoaXMucmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCwgT2JqZWN0LmFzc2lnbih7fSwgX2NvbmZpZywgY29uZmlnKSkgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICB9XG5cbiAgcnVuIChjYWxsYmFjaykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgLy8g5Yip55SoZmV0Y2gg5ou/5YiwcmVzLmJvZHkuZ2V0UmVhZGVyKCkg54S25ZCO6YCS5b2S55qE6LCD55SocmVhZOaWueazlSDojrflj5ZyZXN1bHQudmFsdWUg5Lyg57uZY2FsbGJhY2tcbiAgICBmdW5jdGlvbiByZXNvbHZlIChyZWFkZXIpIHtcbiAgICAgIHJlYWRlci5yZWFkKCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBpZiAoc2VsZi5fc3RvcCkge1xuICAgICAgICAgIHJlYWRlci5jYW5jZWwoKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdC5kb25lID8gdW5kZWZpbmVkIDogcmVzdWx0LnZhbHVlKVxuICAgICAgICByZXNvbHZlKHJlYWRlcilcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBpc1RpbWVvdXQgPSB0cnVlXG5cbiAgICAgIGZldGNoKHRoaXMucmVxdWVzdCkudGhlbigocmVzKSA9PiB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgaXNUaW1lb3V0ID0gZmFsc2VcbiAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICB9KVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlzVGltZW91dCAmJiByZWplY3QoKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICB9LCA1MDAwKVxuICAgIH0pXG5cbiAgICBwcm9tXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSByZXMuYm9keS5nZXRSZWFkZXIoKVxuICAgICAgICByZXNvbHZlKHJlYWRlcilcbiAgICAgIH0pXG4gICAgICAuY2F0Y2gocmVzID0+IHtcbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgfSlcblxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgY2FuY2VsICgpIHtcbiAgICB0aGlzLl9zdG9wID0gdHJ1ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpdmVUYXNrXG4iLCJpbXBvcnQgWEhSTG9hZGVyIGZyb20gJy4vbG9hZGVycy9YSFJMb2FkZXInXG5pbXBvcnQgRmV0Y2hMb2FkZXIgZnJvbSAnLi9sb2FkZXJzL0ZldGNoTG9hZGVyJ1xuY29uc3QgTG9hZENscyA9IChmdW5jdGlvbiAod2luZG93KSB7XG4gIGlmICh3aW5kb3cuZmV0Y2gpIHtcbiAgICByZXR1cm4gRmV0Y2hMb2FkZXJcbiAgfVxuICByZXR1cm4gWEhSTG9hZGVyXG59KSh3aW5kb3cpXG4vLyDkv53or4Hlj6rmnIky5Liq5Lu75Yqh5aSE5LqO6K+35rGC54q25oCB77yMIOaWsOW7uuS7u+WKoeW+gOmYn+WIl+mHjOa3u+WKoO+8jOS7u+WKoeWujOaIkOS7jumYn+WIl+WIoOmZpCDmr4/mrKHlj5jljJbpg73kvJrmm7TmlrDpmJ/liJfov5vooYzor7fmsYLjgIJcbmNsYXNzIFZvZFRhc2sge1xuICBjb25zdHJ1Y3RvciAodXJsLCByYW5nZSwgaGVhZGVycykge1xuICAgIGNvbnNvbGUubG9nKHJhbmdlKVxuICAgIHRoaXMudXJsID0gdXJsXG4gICAgdGhpcy5yYW5nZSA9IHJhbmdlXG4gICAgdGhpcy5pZCA9IHJhbmdlLmpvaW4oJy0nKVxuICAgIHRoaXMub24gPSBmYWxzZVxuICAgIHRoaXMubG9hZGVyID0gbmV3IExvYWRDbHModXJsLCByYW5nZSwgaGVhZGVycylcbiAgICB0aGlzLmlzQ2FuY2VsZWQgPSBmYWxzZVxuICAgIFZvZFRhc2sucXVldWUucHVzaCh0aGlzKVxuICAgIFZvZFRhc2sudXBkYXRlKClcbiAgfVxuXG4gIGNhbmNlbCAoKSB7XG4gICAgdGhpcy5pc0NhbmNlbGVkID0gdHJ1ZVxuICAgIHRoaXMubG9hZGVyLmNhbmNlbCgpXG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlIChsb2FkZXIpIHtcbiAgICBWb2RUYXNrLnF1ZXVlLmZpbHRlcigoaXRlbSwgaWR4KSA9PiB7XG4gICAgICBpZiAoaXRlbS51cmwgPT09IGxvYWRlci51cmwgJiYgaXRlbS5pZCA9PT0gbG9hZGVyLmlkKSB7XG4gICAgICAgIFZvZFRhc2sucXVldWUuc3BsaWNlKGlkeCwgMSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pXG4gICAgVm9kVGFzay51cGRhdGUoKVxuICB9XG5cbiAgc3RhdGljIHVwZGF0ZSAoKSB7XG4gICAgbGV0IFF1ZXVlID0gVm9kVGFzay5xdWV1ZVxuICAgIGxldCBzZW5kZWQgPSBRdWV1ZS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ub24pXG4gICAgbGV0IHdhaXQgPSBRdWV1ZS5maWx0ZXIoaXRlbSA9PiAhaXRlbS5vbilcbiAgICBsZXQgbWF4ID0gVm9kVGFzay5saW1pdCAtIHNlbmRlZC5sZW5ndGhcbiAgICB3YWl0LmZvckVhY2goKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgaWYgKGlkeCA8IG1heCkge1xuICAgICAgICBpdGVtLnJ1bigpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJ1biAoKSB7XG4gICAgaWYgKHRoaXMubG9hZGVyLnJlYWR5U3RhdGUgPT09IDEpIHtcbiAgICAgIHRoaXMub24gPSB0cnVlXG4gICAgICB0aGlzLmxvYWRlci5ydW4oKVxuICAgIH0gZWxzZSB7XG4gICAgICBWb2RUYXNrLnJlbW92ZSgpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsZWFyICgpIHtcbiAgICBWb2RUYXNrLnF1ZXVlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoIWl0ZW0ubG9hZGVyLmNvbXBsZXRlKSB7XG4gICAgICAgIGl0ZW0uY2FuY2VsKClcbiAgICAgIH1cbiAgICB9KVxuICAgIFZvZFRhc2sucXVldWUubGVuZ3RoID0gMFxuICB9XG5cbiAgZ2V0IHByb21pc2UgKCkge1xuICAgIHJldHVybiB0aGlzLmxvYWRlci5wcm9taXNlXG4gIH1cbiAgZ2V0IHRpbWVTdGFtcCAoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZGVyLnRpbWVTdGFtcFxuICB9XG59XG5cblZvZFRhc2sucXVldWUgPSBbXVxuVm9kVGFzay5saW1pdCA9IDJcbndpbmRvdy5Wb2RUYXNrID0gVm9kVGFza1xuXG5leHBvcnQgZGVmYXVsdCBWb2RUYXNrXG4iLCJpbXBvcnQgVm9kVGFzayBmcm9tICcuLi9Wb2RUYXNrJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmV0Y2hMb2FkZXIge1xuICBjb25zdHJ1Y3RvciAodXJsLCByYW5nZSwgY29uZmlnID0ge30pIHtcbiAgICB0aGlzLnVybCA9IHVybFxuICAgIHRoaXMub24gPSBmYWxzZVxuICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZVxuICAgIHRoaXMuaXNTdG9wcGVkID0gZmFsc2VcbiAgICB0aGlzLnRpbWVTdGFtcCA9IERhdGUubm93KClcbiAgICBjb25zdCBfY29uZmlnID0ge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBSYW5nZTogYGJ5dGVzPSR7cmFuZ2VbMF19LSR7cmFuZ2VbMV19YFxuICAgICAgfSxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBjYWNoZTogJ2RlZmF1bHQnLFxuICAgICAgbW9kZTogJ2NvcnMnXG4gICAgfVxuXG4gICAgdGhpcy5yZXF1ZXN0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5vbiA9IHRydWVcbiAgICAgIHJldHVybiB3aW5kb3cuZmV0Y2godXJsLCBPYmplY3QuYXNzaWduKHt9LCBfY29uZmlnLCBjb25maWcpKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzID4gMjk5IHx8IHJlcy5zdGF0dXMgPCAyMDAgfHwgIXJlcy5vaykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlXG4gICAgICAgICAgVm9kVGFzay5yZW1vdmUodGhpcylcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGB1cmwgJHtyZXMuc3RhdHVzfSAke3Jlcy5zdGF0dXNUZXh0fWApKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzKVxuICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmFycmF5QnVmZmVyKCkpLnRoZW4oYnVmZmVyID0+IHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IHRydWVcbiAgICAgICAgdGhpcy5ieXRlTGVuZ3RoID0gYnVmZmVyLmJ5dGVMZW5ndGhcbiAgICAgICAgVm9kVGFzay5yZW1vdmUodGhpcylcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSByZXR1cm4ge31cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBidWZmZXIsXG4gICAgICAgICAgdGltZVN0YW1wOiB0aGlzLnRpbWVTdGFtcFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJ1biAoKSB7XG4gICAgdGhpcy5fcHJvbWlzZSA9IHRoaXMucmVxdWVzdCgpXG4gIH1cblxuICBnZXQgcmVhZHlTdGF0ZSAoKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIGNhbmNlbCAoKSB7XG4gICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlXG4gIH1cblxuICBnZXQgcHJvbWlzZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMub24gPyB0aGlzLl9wcm9taXNlIDogdGhpcy5yZXF1ZXN0KClcbiAgfVxufVxuIiwiaW1wb3J0IFZvZFRhc2sgZnJvbSAnLi4vVm9kVGFzayc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYSFJMb2FkZXIge1xuICAgIGNvbnN0cnVjdG9yICh1cmwsIHJhbmdlKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9wZW4oJ2dldCcsIHVybCk7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignUmFuZ2UnLCBgYnl0ZXM9JHtyYW5nZVswXX0tJHtyYW5nZVsxXX1gKTtcbiAgICAgICAgeGhyLm9uYWJvcnQgPSAoKSA9PiB7XG4gICAgICAgICAgICBWb2RUYXNrLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCB8fCB4aHIuc3RhdHVzID09PSAyMDYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh4aHIucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBWb2RUYXNrLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB4aHIub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIFZvZFRhc2sucmVtb3ZlKHRoaXMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5feGhyID0geGhyO1xuICAgIH1cblxuICAgIGdldCBwcm9taXNlICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb21pc2U7XG4gICAgfVxuXG4gICAgZ2V0IHJlYWR5U3RhdGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5feGhyLnJlYWR5U3RhdGU7XG4gICAgfVxuXG4gICAgcnVuICgpIHtcbiAgICAgICAgdGhpcy5feGhyLnNlbmQoKTtcbiAgICB9XG5cbiAgICBjYW5jZWwgKCkge1xuICAgICAgICB0aGlzLl94aHIuYWJvcnQoKTtcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhVmlldzRSZWFkIHtcbiAgICBjb25zdHJ1Y3RvciAoYnVmZmVyLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuX2R2ID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmluaXRQcm94eSgpO1xuICAgIH1cblxuICAgIGluaXRQcm94eSAoKSB7XG4gICAgICAgIGNvbnN0IHNpemVBcnIgPSBbOCwgMTYsIDMyXTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHsgX3N0b3JlIH0gPSB0aGlzLl9jb250ZXh0O1xuICAgICAgICBzaXplQXJyLmZvckVhY2goc2l6ZSA9PiB7XG4gICAgICAgICAgICB0aGlzW2BnZXRVaW50JHtzaXplfWBdID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICAgICAgICAgICAgICAgIGlmICghb2Zmc2V0KSB7IG9mZnNldCA9IHNlbGYuX2NvbnRleHQucmVhZE9mZnNldDsgfVxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPT09IHNlbGYuX2NvbnRleHQucmVhZE9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl9jb250ZXh0LnJlYWRPZmZzZXQgKz0gc2l6ZSAvIDg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOi/memHjOivu+WPluWtl+iKguW6jyDkuLrku4DkuYjmmK/lj43nmoQgIOWmguaenGlzTGXmmK/kvY7kvY3lrZfoioIg5bCx5pivZmFsc2Ug5oyJ54Wn55qE5piv6auY5L2N5a2X6IqCXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2R2W2BnZXRVaW50JHtzaXplfWBdKG9mZnNldCwgIV9zdG9yZS5pc0xlKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYvuW8j+WjsOaYjuS4gOS4quavlOWFtuWug+S9jeaVsOabtOW4uOeUqOivu+WPljI05L2N5pW05pWw5pa55rOVXG4gICAgICAgICAqIEBwYXJhbSBvZmZzZXRcbiAgICAgICAgICogQHBhcmFtIGlzSGlnaFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5nZXRVaW50MjQgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldFVpbnQoMjQsIG9mZnNldCwgZmFsc2UpOyAvLyDkvJror7vlj5ZVaW50MzIs5YGaIGFuZCDmk43kvZzkuYvlkI7lm57pgIDkuIDkvY3jgIJcbiAgICAgICAgICAgIHNlbGYuX2NvbnRleHQucmVhZE9mZnNldCAtPSAxO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmdldFVpbnQgPSBmdW5jdGlvbiAoc2l6ZSwgb2Zmc2V0LCBpc0hpZ2ggPSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoc2l6ZSA+IDMyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ25vdCBzdXBwb3J0ZWQgcmVhZCBzaXplJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZWFkU2l6ZSA9IDMyO1xuICAgICAgICAgICAgaWYgKCF0aGlzW2BnZXRVaW50JHtzaXplfWBdKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHNpemVBcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpemUgPCBzaXplQXJyW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkU2l6ZSA9IHNpemVBcnJbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbnVtVG9BbmQgPSBpc0hpZ2ggPyBEYXRhVmlldzRSZWFkLmdldEFuZE51bSgwLCBzaXplIC0gMSwgcmVhZFNpemUpIDogRGF0YVZpZXc0UmVhZC5nZXRBbmROdW0ocmVhZFNpemUgLSBzaXplLCByZWFkU2l6ZSAtIDEsIHJlYWRTaXplKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZltgZ2V0VWludCR7cmVhZFNpemV9YF0ob2Zmc2V0LCAhX3N0b3JlLmlzTGUpICYgbnVtVG9BbmQ7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGZbYGdldFVpbnQke3JlYWRTaXplfWBdKG9mZnNldCwgIV9zdG9yZS5pc0xlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QW5kTnVtIChiZWdpbiwgZW5kLCBzaXplID0gOCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICAgICAgbGV0IGluZGV4ID0gLS1zaXplO1xuICAgICAgICB3aGlsZSAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiBlbmQgfHwgaW5kZXggPCBiZWdpbikge1xuICAgICAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBNYXRoLnBvdygyLCBzaXplIC0gaW5kZXgpO1xuICAgICAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn0iLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4vTG9nJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cEdvbG9tYiB7XG4gICAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgLy8gdGhlIG51bWJlciBvZiBieXRlcyBsZWZ0IHRvIGV4YW1pbmUgaW4gdGhpcy5kYXRhXG4gICAgICAgIHRoaXMuYnl0ZXNBdmFpbGFibGUgPSBkYXRhLmJ5dGVMZW5ndGg7XG4gICAgICAgIC8vIHRoZSBjdXJyZW50IHdvcmQgYmVpbmcgZXhhbWluZWRcbiAgICAgICAgdGhpcy53b3JkID0gMDsgLy8gOnVpbnRcbiAgICAgICAgLy8gdGhlIG51bWJlciBvZiBiaXRzIGxlZnQgdG8gZXhhbWluZSBpbiB0aGUgY3VycmVudCB3b3JkXG4gICAgICAgIHRoaXMuYml0c0F2YWlsYWJsZSA9IDA7IC8vIDp1aW50XG4gICAgfVxuICAgIC8vICgpOnZvaWRcbiAgICBsb2FkV29yZCAoKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5kYXRhLFxuICAgICAgICAgICAgYnl0ZXNBdmFpbGFibGUgPSB0aGlzLmJ5dGVzQXZhaWxhYmxlLFxuICAgICAgICAgICAgcG9zaXRpb24gPSBkYXRhLmJ5dGVMZW5ndGggLSBieXRlc0F2YWlsYWJsZSxcbiAgICAgICAgICAgIHdvcmtpbmdCeXRlcyA9IG5ldyBVaW50OEFycmF5KDQpLFxuICAgICAgICAgICAgYXZhaWxhYmxlQnl0ZXMgPSBNYXRoLm1pbig0LCBieXRlc0F2YWlsYWJsZSk7XG4gICAgICAgIGlmIChhdmFpbGFibGVCeXRlcyA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBieXRlcyBhdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgICAgICB3b3JraW5nQnl0ZXMuc2V0KGRhdGEuc3ViYXJyYXkocG9zaXRpb24sIHBvc2l0aW9uICsgYXZhaWxhYmxlQnl0ZXMpKTtcbiAgICAgICAgdGhpcy53b3JkID0gbmV3IERhdGFWaWV3KHdvcmtpbmdCeXRlcy5idWZmZXIpLmdldFVpbnQzMigwKTtcbiAgICAgICAgLy8gdHJhY2sgdGhlIGFtb3VudCBvZiB0aGlzLmRhdGEgdGhhdCBoYXMgYmVlbiBwcm9jZXNzZWRcbiAgICAgICAgdGhpcy5iaXRzQXZhaWxhYmxlID0gYXZhaWxhYmxlQnl0ZXMgKiA4O1xuICAgICAgICB0aGlzLmJ5dGVzQXZhaWxhYmxlIC09IGF2YWlsYWJsZUJ5dGVzO1xuICAgIH1cblxuICAgIC8vIChjb3VudDppbnQpOnZvaWRcbiAgICBza2lwQml0cyAoY291bnQpIHtcbiAgICAgICAgdmFyIHNraXBCeXRlczsgLy8gOmludFxuICAgICAgICBpZiAodGhpcy5iaXRzQXZhaWxhYmxlID4gY291bnQpIHtcbiAgICAgICAgICAgIHRoaXMud29yZCA8PD0gY291bnQ7XG4gICAgICAgICAgICB0aGlzLmJpdHNBdmFpbGFibGUgLT0gY291bnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb3VudCAtPSB0aGlzLmJpdHNBdmFpbGFibGU7XG4gICAgICAgICAgICBza2lwQnl0ZXMgPSBjb3VudCA+PiAzO1xuICAgICAgICAgICAgY291bnQgLT0gKHNraXBCeXRlcyA+PiAzKTtcbiAgICAgICAgICAgIHRoaXMuYnl0ZXNBdmFpbGFibGUgLT0gc2tpcEJ5dGVzO1xuICAgICAgICAgICAgdGhpcy5sb2FkV29yZCgpO1xuICAgICAgICAgICAgdGhpcy53b3JkIDw8PSBjb3VudDtcbiAgICAgICAgICAgIHRoaXMuYml0c0F2YWlsYWJsZSAtPSBjb3VudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2tpcEJ5dGVzO1xuICAgIH1cblxuICAgIC8vIChzaXplOmludCk6dWludFxuICAgIHJlYWRCaXRzIChzaXplKSB7XG4gICAgICAgIGxldCBiaXRzID0gTWF0aC5taW4odGhpcy5iaXRzQXZhaWxhYmxlLCBzaXplKSwgLy8gOnVpbnRcbiAgICAgICAgICAgIHZhbHUgPSB0aGlzLndvcmQgPj4+ICgzMiAtIGJpdHMpOyAvLyA6dWludFxuICAgICAgICBpZiAoc2l6ZSA+IDMyKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoJ0Nhbm5vdCByZWFkIG1vcmUgdGhhbiAzMiBiaXRzIGF0IGEgdGltZScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYml0c0F2YWlsYWJsZSAtPSBiaXRzO1xuICAgICAgICBpZiAodGhpcy5iaXRzQXZhaWxhYmxlID4gMCkge1xuICAgICAgICAgICAgdGhpcy53b3JkIDw8PSBiaXRzO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYnl0ZXNBdmFpbGFibGUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRXb3JkKCk7XG4gICAgICAgIH1cbiAgICAgICAgYml0cyA9IHNpemUgLSBiaXRzO1xuICAgICAgICBpZiAoYml0cyA+IDAgJiYgdGhpcy5iaXRzQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdSA8PCBiaXRzIHwgdGhpcy5yZWFkQml0cyhiaXRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gKCk6dWludFxuICAgIHNraXBMWiAoKSB7XG4gICAgICAgIHZhciBsZWFkaW5nWmVyb0NvdW50OyAvLyA6dWludFxuICAgICAgICBmb3IgKGxlYWRpbmdaZXJvQ291bnQgPSAwOyBsZWFkaW5nWmVyb0NvdW50IDwgdGhpcy5iaXRzQXZhaWxhYmxlOyArK2xlYWRpbmdaZXJvQ291bnQpIHtcbiAgICAgICAgICAgIGlmICgwICE9PSAodGhpcy53b3JkICYgKDB4ODAwMDAwMDAgPj4+IGxlYWRpbmdaZXJvQ291bnQpKSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBmaXJzdCBiaXQgb2Ygd29ya2luZyB3b3JkIGlzIDFcbiAgICAgICAgICAgICAgICB0aGlzLndvcmQgPDw9IGxlYWRpbmdaZXJvQ291bnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5iaXRzQXZhaWxhYmxlIC09IGxlYWRpbmdaZXJvQ291bnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlYWRpbmdaZXJvQ291bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UgZXhoYXVzdGVkIHdvcmQgYW5kIHN0aWxsIGhhdmUgbm90IGZvdW5kIGEgMVxuICAgICAgICB0aGlzLmxvYWRXb3JkKCk7XG4gICAgICAgIHJldHVybiBsZWFkaW5nWmVyb0NvdW50ICsgdGhpcy5za2lwTFooKTtcbiAgICB9XG5cbiAgICAvLyAoKTp2b2lkXG4gICAgc2tpcFVFRyAoKSB7XG4gICAgICAgIHRoaXMuc2tpcEJpdHMoMSArIHRoaXMuc2tpcExaKCkpO1xuICAgIH1cblxuICAgIC8vICgpOnZvaWRcbiAgICBza2lwRUcgKCkge1xuICAgICAgICB0aGlzLnNraXBCaXRzKDEgKyB0aGlzLnNraXBMWigpKTtcbiAgICB9XG5cbiAgICAvLyAoKTp1aW50XG4gICAgcmVhZFVFRyAoKSB7XG4gICAgICAgIHZhciBjbHogPSB0aGlzLnNraXBMWigpOyAvLyA6dWludFxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkQml0cyhjbHogKyAxKSAtIDE7XG4gICAgfVxuXG4gICAgLy8gKCk6aW50XG4gICAgcmVhZEVHICgpIHtcbiAgICAgICAgdmFyIHZhbHUgPSB0aGlzLnJlYWRVRUcoKTsgLy8gOmludFxuICAgICAgICBpZiAoMHgwMSAmIHZhbHUpIHtcbiAgICAgICAgICAgIC8vIHRoZSBudW1iZXIgaXMgb2RkIGlmIHRoZSBsb3cgb3JkZXIgYml0IGlzIHNldFxuICAgICAgICAgICAgcmV0dXJuICgxICsgdmFsdSkgPj4+IDE7IC8vIGFkZCAxIHRvIG1ha2UgaXQgZXZlbiwgYW5kIGRpdmlkZSBieSAyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLTEgKiAodmFsdSA+Pj4gMSk7IC8vIGRpdmlkZSBieSB0d28gdGhlbiBtYWtlIGl0IG5lZ2F0aXZlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTb21lIGNvbnZlbmllbmNlIGZ1bmN0aW9uc1xuICAgIC8vIDpCb29sZWFuXG4gICAgcmVhZEJvb2xlYW4gKCkge1xuICAgICAgICByZXR1cm4gMSA9PT0gdGhpcy5yZWFkQml0cygxKTtcbiAgICB9XG5cbiAgICAvLyAoKTppbnRcbiAgICByZWFkVUJ5dGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkQml0cyg4KTtcbiAgICB9XG5cbiAgICAvLyAoKTppbnRcbiAgICByZWFkVVNob3J0ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZEJpdHMoMTYpO1xuICAgIH1cbiAgICAvLyAoKTppbnRcbiAgICByZWFkVUludCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRCaXRzKDMyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZHZhbmNlIHRoZSBFeHBHb2xvbWIgZGVjb2RlciBwYXN0IGEgc2NhbGluZyBsaXN0LiBUaGUgc2NhbGluZ1xuICAgICAqIGxpc3QgaXMgb3B0aW9uYWxseSB0cmFuc21pdHRlZCBhcyBwYXJ0IG9mIGEgc2VxdWVuY2UgcGFyYW1ldGVyXG4gICAgICogc2V0IGFuZCBpcyBub3QgcmVsZXZhbnQgdG8gdHJhbnNtdXhpbmcuXG4gICAgICogQHBhcmFtIGNvdW50IHtudW1iZXJ9IHRoZSBudW1iZXIgb2YgZW50cmllcyBpbiB0aGlzIHNjYWxpbmcgbGlzdFxuICAgICAqIEBzZWUgUmVjb21tZW5kYXRpb24gSVRVLVQgSC4yNjQsIFNlY3Rpb24gNy4zLjIuMS4xLjFcbiAgICAgKi9cbiAgICBza2lwU2NhbGluZ0xpc3QgKGNvdW50KSB7XG4gICAgICAgIHZhciBsYXN0U2NhbGUgPSA4LFxuICAgICAgICAgICAgbmV4dFNjYWxlID0gOCxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBkZWx0YVNjYWxlO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAgICAgaWYgKG5leHRTY2FsZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGRlbHRhU2NhbGUgPSB0aGlzLnJlYWRFRygpO1xuICAgICAgICAgICAgICAgIG5leHRTY2FsZSA9IChsYXN0U2NhbGUgKyBkZWx0YVNjYWxlICsgMjU2KSAlIDI1NjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhc3RTY2FsZSA9IChuZXh0U2NhbGUgPT09IDApXG4gICAgICAgICAgICAgICAgPyBsYXN0U2NhbGVcbiAgICAgICAgICAgICAgICA6IG5leHRTY2FsZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWQgYSBzZXF1ZW5jZSBwYXJhbWV0ZXIgc2V0IGFuZCByZXR1cm4gc29tZSBpbnRlcmVzdGluZyB2aWRlb1xuICAgICAqIHByb3BlcnRpZXMuIEEgc2VxdWVuY2UgcGFyYW1ldGVyIHNldCBpcyB0aGUgSDI2NCBtZXRhZGF0YSB0aGF0XG4gICAgICogZGVzY3JpYmVzIHRoZSBwcm9wZXJ0aWVzIG9mIHVwY29taW5nIHZpZGVvIGZyYW1lcy5cbiAgICAgKiBAcGFyYW0gZGF0YSB7VWludDhBcnJheX0gdGhlIGJ5dGVzIG9mIGEgc2VxdWVuY2UgcGFyYW1ldGVyIHNldFxuICAgICAqIEByZXR1cm4ge29iamVjdH0gYW4gb2JqZWN0IHdpdGggY29uZmlndXJhdGlvbiBwYXJzZWQgZnJvbSB0aGVcbiAgICAgKiBzZXF1ZW5jZSBwYXJhbWV0ZXIgc2V0LCBpbmNsdWRpbmcgdGhlIGRpbWVuc2lvbnMgb2YgdGhlXG4gICAgICogYXNzb2NpYXRlZCB2aWRlbyBmcmFtZXMuXG4gICAgICovXG4gICAgcmVhZFNQUyAoKSB7XG4gICAgICAgIHZhciBmcmFtZUNyb3BMZWZ0T2Zmc2V0ID0gMCxcbiAgICAgICAgICAgIGZyYW1lQ3JvcFJpZ2h0T2Zmc2V0ID0gMCxcbiAgICAgICAgICAgIGZyYW1lQ3JvcFRvcE9mZnNldCA9IDAsXG4gICAgICAgICAgICBmcmFtZUNyb3BCb3R0b21PZmZzZXQgPSAwLFxuICAgICAgICAgICAgcHJvZmlsZUlkYyxcbiAgICAgICAgICAgIC8vIHByb2ZpbGVDb21wYXQsXG4gICAgICAgICAgICBsZXZlbElkYyxcbiAgICAgICAgICAgIGNvZGVjV2lkdGgsXG4gICAgICAgICAgICBjb2RlY0hlaWdodCxcbiAgICAgICAgICAgIHByZXNlbnRXaWR0aCxcbiAgICAgICAgICAgIG51bVJlZkZyYW1lc0luUGljT3JkZXJDbnRDeWNsZSxcbiAgICAgICAgICAgIHBpY1dpZHRoSW5NYnNNaW51czEsXG4gICAgICAgICAgICBwaWNIZWlnaHRJbk1hcFVuaXRzTWludXMxLFxuICAgICAgICAgICAgZnJhbWVNYnNPbmx5RmxhZyxcbiAgICAgICAgICAgIHNjYWxpbmdMaXN0Q291bnQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgcmVhZFVCeXRlID0gdGhpcy5yZWFkVUJ5dGUuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHJlYWRCaXRzID0gdGhpcy5yZWFkQml0cy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgcmVhZFVFRyA9IHRoaXMucmVhZFVFRy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgcmVhZEJvb2xlYW4gPSB0aGlzLnJlYWRCb29sZWFuLmJpbmQodGhpcyksXG4gICAgICAgICAgICBza2lwQml0cyA9IHRoaXMuc2tpcEJpdHMuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHNraXBFRyA9IHRoaXMuc2tpcEVHLmJpbmQodGhpcyksXG4gICAgICAgICAgICBza2lwVUVHID0gdGhpcy5za2lwVUVHLmJpbmQodGhpcyksXG4gICAgICAgICAgICBza2lwU2NhbGluZ0xpc3QgPSB0aGlzLnNraXBTY2FsaW5nTGlzdC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHJlYWRVQnl0ZSgpO1xuICAgICAgICBwcm9maWxlSWRjID0gcmVhZFVCeXRlKCk7IC8vIHByb2ZpbGVfaWRjXG4gICAgICAgIHJlYWRCaXRzKDUpOyAvLyBwcm9maWxlQ29tcGF0IGNvbnN0cmFpbnRfc2V0WzAtNF1fZmxhZywgdSg1KVxuICAgICAgICBza2lwQml0cygzKTsgLy8gcmVzZXJ2ZWRfemVyb18zYml0cyB1KDMpLFxuICAgICAgICBsZXZlbElkYyA9IHJlYWRVQnl0ZSgpOyAvLyBsZXZlbF9pZGMgdSg4KVxuICAgICAgICBza2lwVUVHKCk7IC8vIHNlcV9wYXJhbWV0ZXJfc2V0X2lkXG4gICAgICAgIGxldCBjaHJvbWFGb3JtYXRJZGMgPSAxO1xuICAgICAgICBsZXQgY2hyb21hRm9ybWF0ID0gNDIwO1xuICAgICAgICBsZXQgY2hyb21hRm9ybWF0cyA9IFswLCA0MjAsIDQyMiwgNDQ0XTtcbiAgICAgICAgbGV0IGJpdERlcHRoTHVtYSA9IDg7XG4gICAgICAgIGNvbnN0IHByb2ZpbGVJZGNzID0gWzEwMCwgMTEwLCAxMjIsIDI0NCwgNDQsIDgzLCA4NiwgMTE4LCAxMjhdO1xuICAgICAgICAvLyBzb21lIHByb2ZpbGVzIGhhdmUgbW9yZSBvcHRpb25hbCBkYXRhIHdlIGRvbid0IG5lZWRcbiAgICAgICAgaWYgKHByb2ZpbGVJZGNzLmluY2x1ZGVzKHByb2ZpbGVJZGMpKSB7XG4gICAgICAgICAgICBjaHJvbWFGb3JtYXRJZGMgPSByZWFkVUVHKCk7XG4gICAgICAgICAgICBpZiAoY2hyb21hRm9ybWF0SWRjID09PSAzKSB7XG4gICAgICAgICAgICAgICAgc2tpcEJpdHMoMSk7IC8vIHNlcGFyYXRlX2NvbG91cl9wbGFuZV9mbGFnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hyb21hRm9ybWF0SWRjIDw9IDMpIHtcbiAgICAgICAgICAgICAgICBjaHJvbWFGb3JtYXQgPSBjaHJvbWFGb3JtYXRzW2Nocm9tYUZvcm1hdElkY107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiaXREZXB0aEx1bWEgPSByZWFkVUVHKCkgKyA4OyAvLyBiaXRfZGVwdGhfbHVtYV9taW51czhcbiAgICAgICAgICAgIHNraXBVRUcoKTsgLy8gYml0X2RlcHRoX2Nocm9tYV9taW51czhcbiAgICAgICAgICAgIHNraXBCaXRzKDEpOyAvLyBxcHByaW1lX3lfemVyb190cmFuc2Zvcm1fYnlwYXNzX2ZsYWdcbiAgICAgICAgICAgIGlmIChyZWFkQm9vbGVhbigpKSB7IC8vIHNlcV9zY2FsaW5nX21hdHJpeF9wcmVzZW50X2ZsYWdcbiAgICAgICAgICAgICAgICBzY2FsaW5nTGlzdENvdW50ID0gKGNocm9tYUZvcm1hdElkYyAhPT0gMylcbiAgICAgICAgICAgICAgICAgICAgPyA4XG4gICAgICAgICAgICAgICAgICAgIDogMTI7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNjYWxpbmdMaXN0Q291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVhZEJvb2xlYW4oKSkgeyAvLyBzZXFfc2NhbGluZ19saXN0X3ByZXNlbnRfZmxhZ1sgaSBdXG4gICAgICAgICAgICAgICAgICAgICAgICBpIDwgNiA/IHNraXBTY2FsaW5nTGlzdCgxNikgOiBza2lwU2NhbGluZ0xpc3QoNjQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNraXBVRUcoKTsgLy8gbG9nMl9tYXhfZnJhbWVfbnVtX21pbnVzNFxuICAgICAgICB2YXIgcGljT3JkZXJDbnRUeXBlID0gcmVhZFVFRygpO1xuICAgICAgICBpZiAocGljT3JkZXJDbnRUeXBlID09PSAwKSB7XG4gICAgICAgICAgICByZWFkVUVHKCk7IC8vIGxvZzJfbWF4X3BpY19vcmRlcl9jbnRfbHNiX21pbnVzNFxuICAgICAgICB9IGVsc2UgaWYgKHBpY09yZGVyQ250VHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgc2tpcEJpdHMoMSk7IC8vIGRlbHRhX3BpY19vcmRlcl9hbHdheXNfemVyb19mbGFnXG4gICAgICAgICAgICBza2lwRUcoKTsgLy8gb2Zmc2V0X2Zvcl9ub25fcmVmX3BpY1xuICAgICAgICAgICAgc2tpcEVHKCk7IC8vIG9mZnNldF9mb3JfdG9wX3RvX2JvdHRvbV9maWVsZFxuICAgICAgICAgICAgbnVtUmVmRnJhbWVzSW5QaWNPcmRlckNudEN5Y2xlID0gcmVhZFVFRygpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bVJlZkZyYW1lc0luUGljT3JkZXJDbnRDeWNsZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2tpcEVHKCk7IC8vIG9mZnNldF9mb3JfcmVmX2ZyYW1lWyBpIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVmRnJhbWVzID0gcmVhZFVFRygpOyAvLyBtYXhfbnVtX3JlZl9mcmFtZXNcbiAgICAgICAgc2tpcEJpdHMoMSk7IC8vIGdhcHNfaW5fZnJhbWVfbnVtX3ZhbHVlX2FsbG93ZWRfZmxhZ1xuICAgICAgICBwaWNXaWR0aEluTWJzTWludXMxID0gcmVhZFVFRygpO1xuICAgICAgICBwaWNIZWlnaHRJbk1hcFVuaXRzTWludXMxID0gcmVhZFVFRygpO1xuICAgICAgICBmcmFtZU1ic09ubHlGbGFnID0gcmVhZEJpdHMoMSk7XG4gICAgICAgIGlmIChmcmFtZU1ic09ubHlGbGFnID09PSAwKSB7XG4gICAgICAgICAgICBza2lwQml0cygxKTsgLy8gbWJfYWRhcHRpdmVfZnJhbWVfZmllbGRfZmxhZ1xuICAgICAgICB9XG4gICAgICAgIHNraXBCaXRzKDEpOyAvLyBkaXJlY3RfOHg4X2luZmVyZW5jZV9mbGFnXG4gICAgICAgIGlmIChyZWFkQm9vbGVhbigpKSB7IC8vIGZyYW1lX2Nyb3BwaW5nX2ZsYWdcbiAgICAgICAgICAgIGZyYW1lQ3JvcExlZnRPZmZzZXQgPSByZWFkVUVHKCk7XG4gICAgICAgICAgICBmcmFtZUNyb3BSaWdodE9mZnNldCA9IHJlYWRVRUcoKTtcbiAgICAgICAgICAgIGZyYW1lQ3JvcFRvcE9mZnNldCA9IHJlYWRVRUcoKTtcbiAgICAgICAgICAgIGZyYW1lQ3JvcEJvdHRvbU9mZnNldCA9IHJlYWRVRUcoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZnJhbWVSYXRlID0ge1xuICAgICAgICAgICAgZnBzOiAwLFxuICAgICAgICAgICAgZnBzRml4ZWQ6IHRydWUsXG4gICAgICAgICAgICBmcHNOdW06IDAsXG4gICAgICAgICAgICBmcHNEZW46IDAsXG4gICAgICAgIH07XG4gICAgICAgIGxldCBwaXhlbFJhdGlvID0gWzEsIDFdO1xuICAgICAgICBpZiAocmVhZEJvb2xlYW4oKSkge1xuICAgICAgICAgICAgLy8gdnVpX3BhcmFtZXRlcnNfcHJlc2VudF9mbGFnXG4gICAgICAgICAgICBpZiAocmVhZEJvb2xlYW4oKSkge1xuICAgICAgICAgICAgICAgIC8vIGFzcGVjdF9yYXRpb19pbmZvX3ByZXNlbnRfZmxhZ1xuICAgICAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvSWRjID0gcmVhZFVCeXRlKCk7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChhc3BlY3RSYXRpb0lkYykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbFJhdGlvID0gWzEsIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbMTIsIDExXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbFJhdGlvID0gWzEwLCAxMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IFsxNiwgMTFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbNDAsIDMzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbFJhdGlvID0gWzI0LCAxMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IFsyMCwgMTFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbMzIsIDExXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbFJhdGlvID0gWzgwLCAzM107XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbMTgsIDExXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IFsxNSwgMTFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbFJhdGlvID0gWzY0LCAzM107XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbMTYwLCA5OV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbNCwgM107XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbMywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbMiwgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyNTU6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZFVCeXRlKCkgPDwgOCB8IHJlYWRVQnl0ZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRVQnl0ZSgpIDw8IDggfCByZWFkVUJ5dGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZWFkQm9vbGVhbigpKSB7IC8vIG92ZXJzY2FuX2luZm9fcHJlc2VudF9mbGFnXG4gICAgICAgICAgICAgICAgcmVhZEJvb2xlYW4oKTsgLy8gb3ZlcnNjYW5fYXBwcm9wcmlhdGVfZmxhZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlYWRCb29sZWFuKCkpIHsgLy8gdmlkZW9fc2lnbmFsX3R5cGVfcHJlc2VudF9mbGFnXG4gICAgICAgICAgICAgICAgcmVhZEJpdHMoNCk7IC8vIHZpZGVvX2Zvcm1hdCAmIHZpZGVvX2Z1bGxfcmFuZ2VfZmxhZ1xuICAgICAgICAgICAgICAgIGlmIChyZWFkQm9vbGVhbigpKSB7IC8vIGNvbG91cl9kZXNjcmlwdGlvbl9wcmVzZW50X2ZsYWdcbiAgICAgICAgICAgICAgICAgICAgcmVhZEJpdHMoMjQpOyAvLyBjb2xvdXJfcHJpbWFyaWVzICYgdHJhbnNmZXJfY2hhcmFjdGVyaXN0aWNzICYgbWF0cml4X2NvZWZmaWNpZW50c1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZWFkQm9vbGVhbigpKSB7IC8vIGNocm9tYV9sb2NfaW5mb19wcmVzZW50X2ZsYWdcbiAgICAgICAgICAgICAgICByZWFkVUVHKCk7IC8vIGNocm9tYV9zYW1wbGVfbG9jX3R5cGVfdG9wX2ZpZWxkXG4gICAgICAgICAgICAgICAgcmVhZFVFRygpOyAvLyBjaHJvbWFfc2FtcGxlX2xvY190eXBlX2JvdHRvbV9maWVsZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVhZEJvb2xlYW4oKSkgeyAvLyB0aW1pbmdfaW5mb19wcmVzZW50X2ZsYWdcbiAgICAgICAgICAgICAgICBjb25zdCBudW1Vbml0SW5UaWNrID0gKHJlYWRCaXRzKDMyKSk7XG4gICAgICAgICAgICAgICAgZnJhbWVSYXRlLmZwc051bSA9IChyZWFkQml0cygzMikpO1xuICAgICAgICAgICAgICAgIGZyYW1lUmF0ZS5maXhlZCA9IHRoaXMucmVhZEJvb2xlYW4oKTtcbiAgICAgICAgICAgICAgICBmcmFtZVJhdGUuZnBzRGVuID0gbnVtVW5pdEluVGljayAqIDI7XG4gICAgICAgICAgICAgICAgZnJhbWVSYXRlLmZwcyA9IGZyYW1lUmF0ZS5mcHNOdW0gLyBmcmFtZVJhdGUuZnBzRGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGNyb3BVbml0WCA9IDAsIGNyb3BVbml0WSA9IDA7XG4gICAgICAgICAgICBpZiAoY2hyb21hRm9ybWF0SWRjID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY3JvcFVuaXRYID0gMTtcbiAgICAgICAgICAgICAgICBjcm9wVW5pdFggPSAyIC0gZnJhbWVNYnNPbmx5RmxhZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHN1YldjID0gY2hyb21hRm9ybWF0SWRjID09PSAzID8gMSA6IDI7XG4gICAgICAgICAgICAgICAgbGV0IHN1YkhjID0gY2hyb21hRm9ybWF0SWRjID09PSAxID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgY3JvcFVuaXRYID0gc3ViV2M7XG4gICAgICAgICAgICAgICAgY3JvcFVuaXRZID0gc3ViSGMgKiAoMiAtIGZyYW1lTWJzT25seUZsYWcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb2RlY1dpZHRoID0gKHBpY1dpZHRoSW5NYnNNaW51czEgKyAxKSAqIDE2O1xuICAgICAgICAgICAgY29kZWNIZWlnaHQgPSAoMiAtIGZyYW1lTWJzT25seUZsYWcpICogKChwaWNIZWlnaHRJbk1hcFVuaXRzTWludXMxICsgMSkgKiAxNik7XG5cbiAgICAgICAgICAgIGNvZGVjV2lkdGggLT0gKGZyYW1lQ3JvcExlZnRPZmZzZXQgKyBmcmFtZUNyb3BSaWdodE9mZnNldCkgKiBjcm9wVW5pdFg7XG4gICAgICAgICAgICBjb2RlY0hlaWdodCAtPSAoZnJhbWVDcm9wVG9wT2Zmc2V0ICsgZnJhbWVDcm9wQm90dG9tT2Zmc2V0KSAqIGNyb3BVbml0WTtcblxuICAgICAgICAgICAgY29uc3QgcGl4ZWxTY2FsZSA9IHBpeGVsUmF0aW9bMF0gPT09IDEgfHwgcGl4ZWxSYXRpb1sxXSA9PT0gMVxuICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgIDogcGl4ZWxSYXRpb1swXSAvIHBpeGVsUmF0aW9bMV07XG5cbiAgICAgICAgICAgIHByZXNlbnRXaWR0aCA9IHBpeGVsU2NhbGUgKiBjb2RlY1dpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9maWxlSWRjLFxuICAgICAgICAgICAgbGV2ZWxJZGMsXG4gICAgICAgICAgICByZWZGcmFtZXMsXG4gICAgICAgICAgICBjaHJvbWFGb3JtYXQsXG4gICAgICAgICAgICBiaXREZXB0aDogYml0RGVwdGhMdW1hLFxuICAgICAgICAgICAgZnJhbWVSYXRlLFxuICAgICAgICAgICAgY29kZWNTaXplOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNvZGVjV2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjb2RlY0hlaWdodCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmVzZW50U2l6ZToge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBwcmVzZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjb2RlY0hlaWdodCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aWR0aDogTWF0aC5jZWlsKCgoKHBpY1dpZHRoSW5NYnNNaW51czEgKyAxKSAqIDE2KSAtIGZyYW1lQ3JvcExlZnRPZmZzZXQgKiAyIC0gZnJhbWVDcm9wUmlnaHRPZmZzZXQgKiAyKSksXG4gICAgICAgICAgICBoZWlnaHQ6ICgoMiAtIGZyYW1lTWJzT25seUZsYWcpICogKHBpY0hlaWdodEluTWFwVW5pdHNNaW51czEgKyAxKSAqIDE2KSAtICgoXG4gICAgICAgICAgICAgICAgZnJhbWVNYnNPbmx5RmxhZ1xuICAgICAgICAgICAgICAgICAgICA/IDJcbiAgICAgICAgICAgICAgICAgICAgOiA0KSAqIChmcmFtZUNyb3BUb3BPZmZzZXQgKyBmcmFtZUNyb3BCb3R0b21PZmZzZXQpKSxcbiAgICAgICAgICAgIHBpeGVsUmF0aW86IHBpeGVsUmF0aW8sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVhZFNsaWNlVHlwZSAoKSB7XG4gICAgICAgIC8vIHNraXAgTkFMdSB0eXBlXG4gICAgICAgIHRoaXMucmVhZFVCeXRlKCk7XG4gICAgICAgIC8vIGRpc2NhcmQgZmlyc3RfbWJfaW5fc2xpY2VcbiAgICAgICAgdGhpcy5yZWFkVUVHKCk7XG4gICAgICAgIC8vIHJldHVybiBzbGljZV90eXBlXG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRVRUcoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuICAgIHN0YXRpYyBsb2cgKC4uLmFyZ3MpIHtcbiAgICAgICAgd2luZG93LmNvbnNvbGUubG9nLmFwcGx5KHdpbmRvdywgYXJncyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGluZm8gKC4uLmFyZ3MpIHtcbiAgICAgICAgd2luZG93LmNvbnNvbGUuaW5mby5hcHBseSh3aW5kb3csIGFyZ3MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBlcnJvciAoLi4uYXJncykge1xuICAgICAgICB3aW5kb3cuY29uc29sZS5lcnJvci5hcHBseSh3aW5kb3csIGFyZ3MpO1xuICAgIH1cblxuICAgIHN0YXRpYyB3YXJuICguLi5hcmdzKSB7XG4gICAgICAgIHdpbmRvdy5jb25zb2xlLndhcm4uYXBwbHkod2luZG93LCBhcmdzKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIEBhdXRob3IgZnV5dWhhb1xuICovXG5cbmNvbnN0IG5hdGl2ZVNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG5cbmNsYXNzIE9ic2VydmVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuZm5JZCA9IDFcbiAgICB0aGlzLl9saXN0ZW5lcklkTWFwID0ge31cbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fVxuICB9XG4gIG9uIChrZXksIGZuKSB7XG4gICAgY29uc3QgZm5JZCA9IHRoaXMuZm5JZCsrXG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fZ2V0TGlzdGVuZXJzQnlLZXkoa2V5KVxuICAgIHRoaXMuX2xpc3RlbmVySWRNYXBbZm5JZF0gPSBmblxuICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgIGxpc3RlbmVycy51bnNoaWZ0KGZuSWQpXG4gICAgICByZXR1cm4gZm5JZFxuICAgIH1cbiAgICB0aGlzLl9saXN0ZW5lcnNba2V5XSA9IFtmbklkXVxuICAgIHJldHVybiBmbklkXG4gIH1cbiAgZW1pdCAoa2V5KSB7XG4gICAgY29uc3QgYXJncyA9IG5hdGl2ZVNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2dldExpc3RlbmVyc0J5S2V5KGtleSkgfHwgW11cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBmbiA9IHRoaXMuX2dldExpc3RlbmVyQnlJZChsaXN0ZW5lcnNbaV0pXG4gICAgICBmbiAmJiBmbi5hcHBseShudWxsLCBhcmdzKVxuICAgIH1cbiAgfVxuICBvbmNlIChrZXksIGZuKSB7XG4gICAgY29uc3QgZm5JZCA9IHRoaXMuZm5JZCsrXG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fZ2V0TGlzdGVuZXJzQnlLZXkoa2V5KVxuICAgIGNvbnN0IF90aGlzID0gdGhpc1xuXG4gICAgZnVuY3Rpb24gb25jZUZ1bmMgKCkge1xuICAgICAgY29uc3QgYXJncyA9IG5hdGl2ZVNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICAgICAgZm4uYXBwbHkobnVsbCwgYXJncylcbiAgICAgIF90aGlzLm9mZihrZXksIGZuSWQpXG4gICAgfVxuICAgIHRoaXMuX2xpc3RlbmVySWRNYXBbZm5JZF0gPSBvbmNlRnVuY1xuICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgIGxpc3RlbmVycy51bnNoaWZ0KGZuSWQpXG4gICAgICByZXR1cm4gZm5JZFxuICAgIH1cbiAgICB0aGlzLl9saXN0ZW5lcnNba2V5XSA9IFtmbklkXVxuICAgIHJldHVybiBmbklkXG4gIH1cbiAgb2ZmIChrZXksIGZuSWQpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLl9nZXRMaXN0ZW5lcnNCeUtleShrZXkpXG4gICAgY29uc3QgZm4gPSB0aGlzLl9nZXRMaXN0ZW5lckJ5SWQoZm5JZClcbiAgICBpZiAoIWZuIHx8ICFsaXN0ZW5lcnMgfHwgbGlzdGVuZXJzLmluZGV4T2YoZm5JZCkgPCAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVySWRNYXBbZm5JZF1cbiAgICBpZiAobGlzdGVuZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyc1trZXldXG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3RlbmVyc1tsaXN0ZW5lcnMuaW5kZXhPZihmbklkKV0gPSB1bmRlZmluZWRcbiAgICB9XG4gIH1cbiAgX2dldExpc3RlbmVyc0J5S2V5IChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdGVuZXJzW2tleV1cbiAgfVxuICBfZ2V0TGlzdGVuZXJCeUlkIChmbklkKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3RlbmVySWRNYXBbZm5JZF1cbiAgfVxuICBmbHVzaCAoa2V5KSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fZ2V0TGlzdGVuZXJzQnlLZXkoa2V5KVxuICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGZuSWQgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJJZE1hcFtmbklkXVxuICAgICAgfSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcnNba2V5XVxuICAgIH1cbiAgfVxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSBudWxsXG4gICAgdGhpcy5fbGlzdGVuZXJJZE1hcCA9IG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgT2JzZXJ2ZXIoKVxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmNsYXNzIFVURjgge1xuICAgIHN0YXRpYyBkZWNvZGUodWludDhhcnJheSkge1xuICAgICAgICBjb25zdCBvdXQgPSBbXTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSB1aW50OGFycmF5O1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHVpbnQ4YXJyYXkubGVuZ3RoO1xuXG4gICAgICAgIHdoaWxlIChpIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaW5wdXRbaV0gPCAweDgwKSB7XG4gICAgICAgICAgICAgICAgb3V0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShpbnB1dFtpXSkpO1xuICAgICAgICAgICAgICAgICsraTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXRbaV0gPCAweEMwKSB7XG4gICAgICAgICAgICAgICAgLy8gZmFsbHRocm91Z2hcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXRbaV0gPCAweEUwKSB7XG4gICAgICAgICAgICAgICAgaWYgKFVURjguX2NoZWNrQ29udGludWF0aW9uKGlucHV0LCBpLCAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1Y3M0ID0gKGlucHV0W2ldICYgMHgxRikgPDwgNiB8IChpbnB1dFtpICsgMV0gJiAweDNGKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVjczQgPj0gMHg4MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSh1Y3M0ICYgMHhGRkZGKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpICs9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXRbaV0gPCAweEYwKSB7XG4gICAgICAgICAgICAgICAgaWYgKFVURjguX2NoZWNrQ29udGludWF0aW9uKGlucHV0LCBpLCAyKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1Y3M0ID0gKGlucHV0W2ldICYgMHhGKSA8PCAxMiB8IChpbnB1dFtpICsgMV0gJiAweDNGKSA8PCA2IHwgaW5wdXRbaSArIDJdICYgMHgzRjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVjczQgPj0gMHg4MDAgJiYgKHVjczQgJiAweEY4MDApICE9PSAweEQ4MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUodWNzNCAmIDB4RkZGRikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSArPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlucHV0W2ldIDwgMHhGOCkge1xuICAgICAgICAgICAgICAgIGlmIChVVEY4Ll9jaGVja0NvbnRpbnVhdGlvbihpbnB1dCwgaSwgMykpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVjczQgPSAoaW5wdXRbaV0gJiAweDcpIDw8IDE4IHwgKGlucHV0W2kgKyAxXSAmIDB4M0YpIDw8IDEyIHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChpbnB1dFtpICsgMl0gJiAweDNGKSA8PCA2IHwgKGlucHV0W2kgKyAzXSAmIDB4M0YpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodWNzNCA+IDB4MTAwMDAgJiYgdWNzNCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1Y3M0IC09IDB4MTAwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKCh1Y3M0ID4+PiAxMCkgfCAweEQ4MDApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoKHVjczQgJiAweDNGRikgfCAweERDMDApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgKz0gNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSgweEZGRkQpKTtcbiAgICAgICAgICAgICsraTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXQuam9pbignJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIF9jaGVja0NvbnRpbnVhdGlvbih1aW50OGFycmF5LCBzdGFydCwgY2hlY2tMZW5ndGgpIHtcbiAgICAgICAgbGV0IGFycmF5ID0gdWludDhhcnJheTtcbiAgICAgICAgaWYgKHN0YXJ0ICsgY2hlY2tMZW5ndGggPCBhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHdoaWxlIChjaGVja0xlbmd0aC0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKChhcnJheVsrK3N0YXJ0XSAmIDB4QzApICE9PSAweDgwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVVRGODsiLCJleHBvcnQgZnVuY3Rpb24gZGVib3VuY2UgKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgIHZhciB0aW1lb3V0LCByZXN1bHQ7XG5cblxuICAgIHZhciBkZWJvdW5jZWQgPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICBpZiAodGltZW91dCkgeyBjbGVhclRpbWVvdXQodGltZW91dCk7IH1cbiAgICAgICAgaWYgKGltbWVkaWF0ZSkge1xuICAgICAgICAgICAgdmFyIGNhbGxOb3cgPSAhdGltZW91dDtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmMsIHdhaXQpO1xuICAgICAgICAgICAgaWYgKGNhbGxOb3cpIHsgcmVzdWx0ID0gZnVuYygpOyB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jLCB3YWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIGRlYm91bmNlZC5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgfTtcblxuICAgIHJldHVybiBkZWJvdW5jZWQ7XG5cbn1cblxuZXhwb3J0IGNvbnN0IGNhY2hlV3JhcHBlciA9IChmbikgPT4ge1xuXG4gICAgY29uc3QgY2FjaGUgPSB7fTtcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gYXJncy5yZWR1Y2UoKHByZSwgY3VyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYCR7cHJlfV8ke2N1cn1gO1xuICAgICAgICB9LCAnJyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZuKC4uLmFyZ3MpO1xuICAgICAgICBpZiAoY2FjaGVba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlW2tleV0gPSByZXN1bHQ7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfTtcbn07IiwiLy8g5a2X6IqC5bqP5piv5ZCm5pivIOWwj+Wtl+iKguW6jyDmmK/lj43nmoRcbmNvbnN0IGxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBidWYgPSBuZXcgQXJyYXlCdWZmZXIoMik7XG4gICAgKG5ldyBEYXRhVmlldyhidWYpKS5zZXRJbnQxNigwLCAyNTYsIHRydWUpIC8vIGxpdHRsZS1lbmRpYW4gd3JpdGVcbiAgICByZXR1cm4gKG5ldyBJbnQxNkFycmF5KGJ1ZikpWzBdID09PSAyNTYgLy8gcGxhdGZvcm0tc3BlYyByZWFkLCBpZiBlcXVhbCB0aGVuIExFXG59KSgpXG5jb25zdCBzbmlmZmVyID0ge1xuICAgIGdldCBkZXZpY2UgKCkge1xuICAgICAgICBsZXQgciA9IHNuaWZmZXIub3M7XG4gICAgICAgIHJldHVybiByLmlzUGMgPyAncGMnIDogci5pc1RhYmxldCA/ICd0YWJsZXQnIDogJ21vYmlsZSc7XG4gICAgfSxcbiAgICBnZXQgYnJvd3NlciAoKSB7XG4gICAgICAgIGxldCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IHJlZyA9IHtcbiAgICAgICAgICAgIGllOiAvcnY6KFtcXGQuXSspXFwpIGxpa2UgZ2Vja28vLFxuICAgICAgICAgICAgZmlyZm94OiAvZmlyZWZveFxcLyhbXFxkLl0rKS8sXG4gICAgICAgICAgICBjaHJvbWU6IC9jaHJvbWVcXC8oW1xcZC5dKykvLFxuICAgICAgICAgICAgb3BlcmE6IC9vcGVyYS4oW1xcZC5dKykvLFxuICAgICAgICAgICAgc2FmYXJpOiAvdmVyc2lvblxcLyhbXFxkLl0rKS4qc2FmYXJpLyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFtdLmNvbmNhdChPYmplY3Qua2V5cyhyZWcpLmZpbHRlcihrZXkgPT4gcmVnW2tleV0udGVzdCh1YSkpKVswXTtcbiAgICB9LFxuICAgIGdldCBvcyAoKSB7XG4gICAgICAgIGxldCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAgICAgICBpc1dpbmRvd3NQaG9uZSA9IC8oPzpXaW5kb3dzIFBob25lKS8udGVzdCh1YSksXG4gICAgICAgICAgICBpc1N5bWJpYW4gPSAvKD86U3ltYmlhbk9TKS8udGVzdCh1YSkgfHwgaXNXaW5kb3dzUGhvbmUsXG4gICAgICAgICAgICBpc0FuZHJvaWQgPSAvKD86QW5kcm9pZCkvLnRlc3QodWEpLFxuICAgICAgICAgICAgaXNGaXJlRm94ID0gLyg/OkZpcmVmb3gpLy50ZXN0KHVhKSxcbiAgICAgICAgICAgIGlzVGFibGV0ID0gLyg/OmlQYWR8UGxheUJvb2spLy50ZXN0KHVhKSB8fCAoaXNBbmRyb2lkICYmICEvKD86TW9iaWxlKS8udGVzdCh1YSkpIHx8IChpc0ZpcmVGb3ggJiYgLyg/OlRhYmxldCkvLnRlc3QodWEpKSxcbiAgICAgICAgICAgIGlzUGhvbmUgPSAvKD86aVBob25lKS8udGVzdCh1YSkgJiYgIWlzVGFibGV0LFxuICAgICAgICAgICAgaXNQYyA9ICFpc1Bob25lICYmICFpc0FuZHJvaWQgJiYgIWlzU3ltYmlhbjtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzVGFibGV0LFxuICAgICAgICAgICAgaXNQaG9uZSxcbiAgICAgICAgICAgIGlzQW5kcm9pZCxcbiAgICAgICAgICAgIGlzUGMsXG4gICAgICAgICAgICBpc1N5bWJpYW4sXG4gICAgICAgICAgICBpc1dpbmRvd3NQaG9uZSxcbiAgICAgICAgICAgIGlzRmlyZUZveCxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGdldCBpc0xlKCkge1xuICAgICAgICByZXR1cm4gbGVcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzbmlmZmVyO1xuIiwiaW1wb3J0IENvbmNhdCBmcm9tICdjb25jYXQtdHlwZWQtYXJyYXknO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlscy9Mb2cnO1xuY2xhc3MgQnVmZmVyIHtcbiAgICBjb25zdHJ1Y3RvciAoYnVmZmVyKSB7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyIHx8IG5ldyBVaW50OEFycmF5KDApO1xuICAgIH1cbiAgICB3cml0ZSAoLi4uYnVmZmVyKSB7XG4gICAgICAgIGJ1ZmZlci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IENvbmNhdChVaW50OEFycmF5LCB0aGlzLmJ1ZmZlciwgaXRlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIExvZ2dlci5lcnJvcihpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyB3cml0ZVVpbnQzMiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFtcbiAgICAgICAgICAgIHZhbHVlID4+IDI0LFxuICAgICAgICAgICAgKHZhbHVlID4+IDE2KSAmIDB4ZmYsXG4gICAgICAgICAgICAodmFsdWUgPj4gOCkgJiAweGZmLFxuICAgICAgICAgICAgdmFsdWUgJiAweGZmLFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgc3RhdGljIHJlYWRBc0ludCAoYXJyKSB7XG4gICAgICAgIGxldCB0ZW1wID0gJyc7XG4gICAgICAgIGZ1bmN0aW9uIHBhZFN0YXJ0NEhleCAoaGV4TnVtKSB7XG4gICAgICAgICAgICBsZXQgaGV4U3RyID0gaGV4TnVtLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgIHJldHVybiBoZXhTdHIucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgfVxuICAgICAgICBhcnIuZm9yRWFjaChudW0gPT4ge1xuICAgICAgICAgICAgdGVtcCArPSBwYWRTdGFydDRIZXgobnVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh0ZW1wLCAxNik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdWZmZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfeGdwbGF5ZXJfXzsiXSwic291cmNlUm9vdCI6IiJ9