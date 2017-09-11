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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar dragscroll = exports.dragscroll = {\n  init: function init(el, binding) {\n    var newScrollX = void 0,\n        newScrollY = void 0;\n    var reset = function reset() {\n      var lastClientX = void 0,\n          lastClientY = void 0,\n          pushed = void 0;\n\n      el.addEventListener('mousedown', el.md = function (e) {\n        if (!(binding.arg === 'nochilddrag') || document.elementFromPoint(e.pageX, e.pageY) === el) {\n          pushed = 1;\n          lastClientX = e.clientX;\n          lastClientY = e.clientY;\n          e.preventDefault();\n        }\n      }, 0);\n\n      window.addEventListener('mouseup', el.mu = function () {\n        pushed = 0;\n      }, 0);\n\n      window.addEventListener('mousemove', el.mm = function (e) {\n        if (pushed) {\n          el.scrollLeft -= newScrollX = -lastClientX + (lastClientX = e.clientX);\n          el.scrollTop -= newScrollY = -lastClientY + (lastClientY = e.clientY);\n          if (el === document.body) {\n            el.scrollLeft -= newScrollX;\n            el.scrollTop -= newScrollY;\n          }\n        }\n      }, 0);\n    };\n    // if value is undefined or true we will init\n    if (binding.value === undefined || binding.value === true) {\n      if (document.readyState === 'complete') {\n        reset();\n      } else {\n        window.addEventListener('load', reset, 0);\n      }\n    } else {\n      // if value is false means we disable\n      // if value is anything else log error \n      if (binding.value) {\n        console.error('The passed value should be either \\'undefined\\', \\'true\\' or \\'false\\'.');\n      }\n\n      // window.removeEventListener('load', reset, 0)\n      el.removeEventListener('mousedown', el.md, 0);\n      window.removeEventListener('mouseup', el.mu, 0);\n      window.removeEventListener('mousemove', el.mm, 0);\n    }\n  },\n  bind: function bind(el, binding, vnode) {\n    binding.def.init(el, binding);\n  },\n  update: function update(el, binding, vnode, oldVnode) {\n    if (binding.value !== binding.oldValue) {\n      binding.def.init(el, binding);\n    }\n  },\n  unbind: function unbind(el, binding, vnode) {\n    el['removeEventListener']('mousedown', el.md, 0);\n    window['removeEventListener']('mouseup', el.mu, 0);\n    window['removeEventListener']('mousemove', el.mm, 0);\n  }\n};\n\nvar VueDragscroll = {\n  install: function install(Vue, options) {\n    Vue.directive('dragscroll', dragscroll);\n  }\n};\n\nif (typeof window !== 'undefined' && window.Vue) {\n  window.VueDragscroll = VueDragscroll;\n  window.Vue.use(VueDragscroll);\n}\n\nexports.default = VueDragscroll;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdnVlRHJhZ1Njcm9sbC5qcz81M2UwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBkcmFnc2Nyb2xsID0ge1xyXG4gIGluaXQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZykge1xyXG4gICAgbGV0IG5ld1Njcm9sbFgsIG5ld1Njcm9sbFlcclxuICAgIHZhciByZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IGxhc3RDbGllbnRYLCBsYXN0Q2xpZW50WSwgcHVzaGVkXHJcblxyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlbC5tZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKCEoYmluZGluZy5hcmcgPT09ICdub2NoaWxkZHJhZycpIHx8IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZS5wYWdlWCwgZS5wYWdlWSkgPT09IGVsKSB7XHJcbiAgICAgICAgICBwdXNoZWQgPSAxXHJcbiAgICAgICAgICBsYXN0Q2xpZW50WCA9IGUuY2xpZW50WFxyXG4gICAgICAgICAgbGFzdENsaWVudFkgPSBlLmNsaWVudFlcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgMClcclxuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZWwubXUgPSBmdW5jdGlvbiAoKSB7IHB1c2hlZCA9IDAgfSwgMClcclxuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlbC5tbSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKHB1c2hlZCkge1xyXG4gICAgICAgICAgZWwuc2Nyb2xsTGVmdCAtPSBuZXdTY3JvbGxYID0gKC1sYXN0Q2xpZW50WCArIChsYXN0Q2xpZW50WCA9IGUuY2xpZW50WCkpXHJcbiAgICAgICAgICBlbC5zY3JvbGxUb3AgLT0gbmV3U2Nyb2xsWSA9ICgtbGFzdENsaWVudFkgKyAobGFzdENsaWVudFkgPSBlLmNsaWVudFkpKVxyXG4gICAgICAgICAgaWYgKGVsID09PSBkb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgICAgICAgIGVsLnNjcm9sbExlZnQgLT0gbmV3U2Nyb2xsWFxyXG4gICAgICAgICAgICBlbC5zY3JvbGxUb3AgLT0gbmV3U2Nyb2xsWVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgMClcclxuICAgIH1cclxuICAgIC8vIGlmIHZhbHVlIGlzIHVuZGVmaW5lZCBvciB0cnVlIHdlIHdpbGwgaW5pdFxyXG4gICAgaWYgKGJpbmRpbmcudmFsdWUgPT09IHVuZGVmaW5lZCB8fCBiaW5kaW5nLnZhbHVlID09PSB0cnVlKSB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XHJcbiAgICAgICAgcmVzZXQoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgcmVzZXQsIDApXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGlmIHZhbHVlIGlzIGZhbHNlIG1lYW5zIHdlIGRpc2FibGVcclxuICAgICAgLy8gaWYgdmFsdWUgaXMgYW55dGhpbmcgZWxzZSBsb2cgZXJyb3IgXHJcbiAgICAgIGlmIChiaW5kaW5nLnZhbHVlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignVGhlIHBhc3NlZCB2YWx1ZSBzaG91bGQgYmUgZWl0aGVyIFxcJ3VuZGVmaW5lZFxcJywgXFwndHJ1ZVxcJyBvciBcXCdmYWxzZVxcJy4nKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlc2V0LCAwKVxyXG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlbC5tZCwgMClcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlbC5tdSwgMClcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGVsLm1tLCAwKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYmluZDogZnVuY3Rpb24gKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xyXG4gICAgYmluZGluZy5kZWYuaW5pdChlbCwgYmluZGluZylcclxuICB9LFxyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpIHtcclxuICAgIGlmIChiaW5kaW5nLnZhbHVlICE9PSBiaW5kaW5nLm9sZFZhbHVlKSB7XHJcbiAgICAgIGJpbmRpbmcuZGVmLmluaXQoZWwsIGJpbmRpbmcpXHJcbiAgICB9XHJcbiAgfSxcclxuICB1bmJpbmQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcclxuICAgIGVsWydyZW1vdmVFdmVudExpc3RlbmVyJ10oJ21vdXNlZG93bicsIGVsLm1kLCAwKVxyXG4gICAgd2luZG93WydyZW1vdmVFdmVudExpc3RlbmVyJ10oJ21vdXNldXAnLCBlbC5tdSwgMClcclxuICAgIHdpbmRvd1sncmVtb3ZlRXZlbnRMaXN0ZW5lciddKCdtb3VzZW1vdmUnLCBlbC5tbSwgMClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IFZ1ZURyYWdzY3JvbGwgPSB7XHJcbiAgaW5zdGFsbCAoVnVlLCBvcHRpb25zKSB7XHJcbiAgICBWdWUuZGlyZWN0aXZlKCdkcmFnc2Nyb2xsJywgZHJhZ3Njcm9sbClcclxuICB9XHJcbn1cclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XHJcbiAgd2luZG93LlZ1ZURyYWdzY3JvbGwgPSBWdWVEcmFnc2Nyb2xsXHJcbiAgd2luZG93LlZ1ZS51c2UoVnVlRHJhZ3Njcm9sbClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVnVlRHJhZ3Njcm9sbFxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3Z1ZURyYWdTY3JvbGwuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNURBO0FBQ0E7QUE4REE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);
});