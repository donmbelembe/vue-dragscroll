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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar dragscroll = exports.dragscroll = {\n  init: function init(el, binding) {\n    var newScrollX = void 0,\n        newScrollY = void 0;\n    var reset = function reset() {\n      var lastClientX = void 0,\n          lastClientY = void 0,\n          pushed = void 0;\n\n      el.addEventListener('mousedown', el.md = function (e) {\n        if (!(binding.arg === 'nochilddrag') || document.elementFromPoint(e.pageX - window.pageXOffset, e.pageY - window.pageYOffset) === el) {\n          pushed = 1;\n          lastClientX = e.clientX;\n          lastClientY = e.clientY;\n          e.preventDefault();\n        }\n      }, 0);\n\n      window.addEventListener('mouseup', el.mu = function () {\n        pushed = 0;\n      }, 0);\n\n      window.addEventListener('mousemove', el.mm = function (e) {\n        if (pushed) {\n          if (binding.modifiers.x) {\n            el.scrollLeft -= newScrollX = -lastClientX + (lastClientX = e.clientX);\n            if (el === document.body) {\n              el.scrollLeft -= newScrollX;\n            }\n          } else if (binding.modifiers.y) {\n            el.scrollTop -= newScrollY = -lastClientY + (lastClientY = e.clientY);\n            if (el === document.body) {\n              el.scrollTop -= newScrollY;\n            }\n          } else {\n            el.scrollLeft -= newScrollX = -lastClientX + (lastClientX = e.clientX);\n            el.scrollTop -= newScrollY = -lastClientY + (lastClientY = e.clientY);\n            if (el === document.body) {\n              el.scrollLeft -= newScrollX;\n              el.scrollTop -= newScrollY;\n            }\n          }\n        }\n      }, 0);\n    };\n    // if value is undefined or true we will init\n    if (binding.value === undefined || binding.value === true) {\n      if (document.readyState === 'complete') {\n        reset();\n      } else {\n        window.addEventListener('load', reset, 0);\n      }\n    } else {\n      // if value is false means we disable\n      // if value is anything else log error \n      if (binding.value) {\n        console.error('The passed value should be either \\'undefined\\', \\'true\\' or \\'false\\'.');\n      }\n\n      // window.removeEventListener('load', reset, 0)\n      el.removeEventListener('mousedown', el.md, 0);\n      window.removeEventListener('mouseup', el.mu, 0);\n      window.removeEventListener('mousemove', el.mm, 0);\n    }\n  },\n  bind: function bind(el, binding, vnode) {\n    binding.def.init(el, binding);\n  },\n  update: function update(el, binding, vnode, oldVnode) {\n    if (binding.value !== binding.oldValue) {\n      binding.def.init(el, binding);\n    }\n  },\n  unbind: function unbind(el, binding, vnode) {\n    el['removeEventListener']('mousedown', el.md, 0);\n    window['removeEventListener']('mouseup', el.mu, 0);\n    window['removeEventListener']('mousemove', el.mm, 0);\n  }\n};\n\nvar VueDragscroll = {\n  install: function install(Vue, options) {\n    Vue.directive('dragscroll', dragscroll);\n  }\n};\n\nif (typeof window !== 'undefined' && window.Vue) {\n  window.VueDragscroll = VueDragscroll;\n  window.Vue.use(VueDragscroll);\n}\n\nexports.default = VueDragscroll;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdnVlRHJhZ1Njcm9sbC5qcz81M2UwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBkcmFnc2Nyb2xsID0ge1xyXG4gIGluaXQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZykge1xyXG4gICAgbGV0IG5ld1Njcm9sbFgsIG5ld1Njcm9sbFlcclxuICAgIHZhciByZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IGxhc3RDbGllbnRYLCBsYXN0Q2xpZW50WSwgcHVzaGVkXHJcblxyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlbC5tZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKCEoYmluZGluZy5hcmcgPT09ICdub2NoaWxkZHJhZycpIHx8IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZS5wYWdlWCAtIHdpbmRvdy5wYWdlWE9mZnNldCwgZS5wYWdlWSAtIHdpbmRvdy5wYWdlWU9mZnNldCkgPT09IGVsKSB7XHJcbiAgICAgICAgICBwdXNoZWQgPSAxXHJcbiAgICAgICAgICBsYXN0Q2xpZW50WCA9IGUuY2xpZW50WFxyXG4gICAgICAgICAgbGFzdENsaWVudFkgPSBlLmNsaWVudFlcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgMClcclxuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZWwubXUgPSBmdW5jdGlvbiAoKSB7IHB1c2hlZCA9IDAgfSwgMClcclxuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlbC5tbSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKHB1c2hlZCkge1xyXG4gICAgICAgICAgaWYgKGJpbmRpbmcubW9kaWZpZXJzLngpIHtcclxuICAgICAgICAgICAgZWwuc2Nyb2xsTGVmdCAtPSBuZXdTY3JvbGxYID0gKC1sYXN0Q2xpZW50WCArIChsYXN0Q2xpZW50WCA9IGUuY2xpZW50WCkpXHJcbiAgICAgICAgICAgIGlmIChlbCA9PT0gZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgICAgICAgIGVsLnNjcm9sbExlZnQgLT0gbmV3U2Nyb2xsWFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGJpbmRpbmcubW9kaWZpZXJzLnkpIHtcclxuICAgICAgICAgICAgZWwuc2Nyb2xsVG9wIC09IG5ld1Njcm9sbFkgPSAoLWxhc3RDbGllbnRZICsgKGxhc3RDbGllbnRZID0gZS5jbGllbnRZKSlcclxuICAgICAgICAgICAgaWYgKGVsID09PSBkb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgICAgICAgICAgZWwuc2Nyb2xsVG9wIC09IG5ld1Njcm9sbFlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWwuc2Nyb2xsTGVmdCAtPSBuZXdTY3JvbGxYID0gKC1sYXN0Q2xpZW50WCArIChsYXN0Q2xpZW50WCA9IGUuY2xpZW50WCkpXHJcbiAgICAgICAgICAgIGVsLnNjcm9sbFRvcCAtPSBuZXdTY3JvbGxZID0gKC1sYXN0Q2xpZW50WSArIChsYXN0Q2xpZW50WSA9IGUuY2xpZW50WSkpXHJcbiAgICAgICAgICAgIGlmIChlbCA9PT0gZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgICAgICAgIGVsLnNjcm9sbExlZnQgLT0gbmV3U2Nyb2xsWFxyXG4gICAgICAgICAgICAgIGVsLnNjcm9sbFRvcCAtPSBuZXdTY3JvbGxZXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sIDApXHJcbiAgICB9XHJcbiAgICAvLyBpZiB2YWx1ZSBpcyB1bmRlZmluZWQgb3IgdHJ1ZSB3ZSB3aWxsIGluaXRcclxuICAgIGlmIChiaW5kaW5nLnZhbHVlID09PSB1bmRlZmluZWQgfHwgYmluZGluZy52YWx1ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICAgIHJlc2V0KClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlc2V0LCAwKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBpZiB2YWx1ZSBpcyBmYWxzZSBtZWFucyB3ZSBkaXNhYmxlXHJcbiAgICAgIC8vIGlmIHZhbHVlIGlzIGFueXRoaW5nIGVsc2UgbG9nIGVycm9yIFxyXG4gICAgICBpZiAoYmluZGluZy52YWx1ZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBwYXNzZWQgdmFsdWUgc2hvdWxkIGJlIGVpdGhlciBcXCd1bmRlZmluZWRcXCcsIFxcJ3RydWVcXCcgb3IgXFwnZmFsc2VcXCcuJylcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZXNldCwgMClcclxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZWwubWQsIDApXHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZWwubXUsIDApXHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlbC5tbSwgMClcclxuICAgIH1cclxuICB9LFxyXG4gIGJpbmQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcclxuICAgIGJpbmRpbmcuZGVmLmluaXQoZWwsIGJpbmRpbmcpXHJcbiAgfSxcclxuICB1cGRhdGU6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKSB7XHJcbiAgICBpZiAoYmluZGluZy52YWx1ZSAhPT0gYmluZGluZy5vbGRWYWx1ZSkge1xyXG4gICAgICBiaW5kaW5nLmRlZi5pbml0KGVsLCBiaW5kaW5nKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdW5iaW5kOiBmdW5jdGlvbiAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XHJcbiAgICBlbFsncmVtb3ZlRXZlbnRMaXN0ZW5lciddKCdtb3VzZWRvd24nLCBlbC5tZCwgMClcclxuICAgIHdpbmRvd1sncmVtb3ZlRXZlbnRMaXN0ZW5lciddKCdtb3VzZXVwJywgZWwubXUsIDApXHJcbiAgICB3aW5kb3dbJ3JlbW92ZUV2ZW50TGlzdGVuZXInXSgnbW91c2Vtb3ZlJywgZWwubW0sIDApXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBWdWVEcmFnc2Nyb2xsID0ge1xyXG4gIGluc3RhbGwgKFZ1ZSwgb3B0aW9ucykge1xyXG4gICAgVnVlLmRpcmVjdGl2ZSgnZHJhZ3Njcm9sbCcsIGRyYWdzY3JvbGwpXHJcbiAgfVxyXG59XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlZ1ZSkge1xyXG4gIHdpbmRvdy5WdWVEcmFnc2Nyb2xsID0gVnVlRHJhZ3Njcm9sbFxyXG4gIHdpbmRvdy5WdWUudXNlKFZ1ZURyYWdzY3JvbGwpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZ1ZURyYWdzY3JvbGxcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy92dWVEcmFnU2Nyb2xsLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhFQTtBQUNBO0FBMEVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);
});