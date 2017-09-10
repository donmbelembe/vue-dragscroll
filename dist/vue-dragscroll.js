(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueDragScroll"] = factory();
	else
		root["VueDragScroll"] = factory();
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar dragscroll = exports.dragscroll = {\n  bind: function bind(el, binding, vnode) {\n    var newScrollX = void 0,\n        newScrollY = void 0;\n\n    var reset = function reset() {\n      var lastClientX = void 0,\n          lastClientY = void 0,\n          pushed = void 0;\n\n      el.addEventListener('mousedown', el.md = function (e) {\n        if (!(binding.arg === 'nochilddrag') || document.elementFromPoint(e.pageX, e.pageY) === el) {\n          pushed = 1;\n          lastClientX = e.clientX;\n          lastClientY = e.clientY;\n          e.preventDefault();\n        }\n      }, 0);\n\n      window.addEventListener('mouseup', el.mu = function () {\n        pushed = 0;\n      }, 0);\n\n      window.addEventListener('mousemove', el.mm = function (e) {\n        if (pushed) {\n          el.scrollLeft -= newScrollX = -lastClientX + (lastClientX = e.clientX);\n          el.scrollTop -= newScrollY = -lastClientY + (lastClientY = e.clientY);\n          if (el === document.body) {\n            el.scrollLeft -= newScrollX;\n            el.scrollTop -= newScrollY;\n          }\n        }\n      }, 0);\n    };\n\n    if (el.readyState === 'complete') {\n      reset();\n    } else {\n      window.addEventListener('load', reset, 0);\n    }\n  },\n  unbind: function unbind(el, binding, vnode) {\n    el['removeEventListener']('mousedown', el.md, 0);\n    window['removeEventListener']('mouseup', el.mu, 0);\n    window['removeEventListener']('mousemove', el.mm, 0);\n  }\n};\n\nvar VueDragscroll = {\n  install: function install(Vue, options) {\n    Vue.directive('dragscroll', dragscroll);\n  }\n};\n\nif (typeof window !== 'undefined' && window.Vue) {\n  window.VueDragscroll = VueDragscroll;\n  window.Vue.use(VueDragscroll);\n}\n\nexports.default = VueDragscroll;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdnVlRHJhZ1Njcm9sbC5qcz81M2UwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBkcmFnc2Nyb2xsID0ge1xyXG4gIGJpbmQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcclxuICAgIGxldCBuZXdTY3JvbGxYLCBuZXdTY3JvbGxZXHJcblxyXG4gICAgdmFyIHJlc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBsZXQgbGFzdENsaWVudFgsIGxhc3RDbGllbnRZLCBwdXNoZWRcclxuXHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGVsLm1kID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoIShiaW5kaW5nLmFyZyA9PT0gJ25vY2hpbGRkcmFnJykgfHwgZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChlLnBhZ2VYLCBlLnBhZ2VZKSA9PT0gZWwpIHtcclxuICAgICAgICAgIHB1c2hlZCA9IDFcclxuICAgICAgICAgIGxhc3RDbGllbnRYID0gZS5jbGllbnRYXHJcbiAgICAgICAgICBsYXN0Q2xpZW50WSA9IGUuY2xpZW50WVxyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAwKVxyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlbC5tdSA9IGZ1bmN0aW9uICgpIHsgcHVzaGVkID0gMCB9LCAwKVxyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGVsLm1tID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAocHVzaGVkKSB7XHJcbiAgICAgICAgICBlbC5zY3JvbGxMZWZ0IC09IG5ld1Njcm9sbFggPSAoLWxhc3RDbGllbnRYICsgKGxhc3RDbGllbnRYID0gZS5jbGllbnRYKSlcclxuICAgICAgICAgIGVsLnNjcm9sbFRvcCAtPSBuZXdTY3JvbGxZID0gKC1sYXN0Q2xpZW50WSArIChsYXN0Q2xpZW50WSA9IGUuY2xpZW50WSkpXHJcbiAgICAgICAgICBpZiAoZWwgPT09IGRvY3VtZW50LmJvZHkpIHtcclxuICAgICAgICAgICAgZWwuc2Nyb2xsTGVmdCAtPSBuZXdTY3JvbGxYXHJcbiAgICAgICAgICAgIGVsLnNjcm9sbFRvcCAtPSBuZXdTY3JvbGxZXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAwKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XHJcbiAgICAgIHJlc2V0KClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgcmVzZXQsIDApXHJcbiAgICB9XHJcbiAgfSxcclxuICB1bmJpbmQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcclxuICAgIGVsWydyZW1vdmVFdmVudExpc3RlbmVyJ10oJ21vdXNlZG93bicsIGVsLm1kLCAwKVxyXG4gICAgd2luZG93WydyZW1vdmVFdmVudExpc3RlbmVyJ10oJ21vdXNldXAnLCBlbC5tdSwgMClcclxuICAgIHdpbmRvd1sncmVtb3ZlRXZlbnRMaXN0ZW5lciddKCdtb3VzZW1vdmUnLCBlbC5tbSwgMClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IFZ1ZURyYWdzY3JvbGwgPSB7XHJcbiAgaW5zdGFsbCAoVnVlLCBvcHRpb25zKSB7XHJcbiAgICBWdWUuZGlyZWN0aXZlKCdkcmFnc2Nyb2xsJywgZHJhZ3Njcm9sbClcclxuICB9XHJcbn1cclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XHJcbiAgd2luZG93LlZ1ZURyYWdzY3JvbGwgPSBWdWVEcmFnc2Nyb2xsXHJcbiAgd2luZG93LlZ1ZS51c2UoVnVlRHJhZ3Njcm9sbClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVnVlRHJhZ3Njcm9sbFxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3Z1ZURyYWdTY3JvbGwuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4Q0E7QUFDQTtBQTBDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);
});