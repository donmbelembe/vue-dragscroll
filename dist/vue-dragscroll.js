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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar dragscroll = exports.dragscroll = {\n  init: function init(el, binding) {\n    var newScrollX = void 0,\n        newScrollY = void 0;\n    var reset = function reset() {\n      var lastClientX = void 0,\n          lastClientY = void 0,\n          pushed = void 0;\n\n      el.addEventListener('mousedown', el.md = function (e) {\n        var hasNoChildDrag = binding.arg === 'nochilddrag';\n        var hasFirstChildDrag = binding.arg === 'firstchilddrag';\n        var isEl = document.elementFromPoint(e.pageX - window.pageXOffset, e.pageY - window.pageYOffset) === el;\n        var isFirstChild = document.elementFromPoint(e.pageX - window.pageXOffset, e.pageY - window.pageYOffset) === el.firstChild;\n\n        var start = function start(e) {\n          pushed = 1;\n          lastClientX = e.clientX;\n          lastClientY = e.clientY;\n          e.preventDefault();\n        };\n\n        if (hasNoChildDrag) {\n          if (isEl) {\n            start(e);\n          }\n        } else if (hasFirstChildDrag) {\n          if (isEl || isFirstChild) {\n            start(e);\n          }\n        } else {\n          start(e);\n        }\n      }, 0);\n\n      window.addEventListener('mouseup', el.mu = function () {\n        pushed = 0;\n      }, 0);\n\n      window.addEventListener('mousemove', el.mm = function (e) {\n        if (pushed) {\n          if (binding.modifiers.x) {\n            el.scrollLeft -= newScrollX = -lastClientX + (lastClientX = e.clientX);\n            if (el === document.body) {\n              el.scrollLeft -= newScrollX;\n            }\n          } else if (binding.modifiers.y) {\n            el.scrollTop -= newScrollY = -lastClientY + (lastClientY = e.clientY);\n            if (el === document.body) {\n              el.scrollTop -= newScrollY;\n            }\n          } else {\n            el.scrollLeft -= newScrollX = -lastClientX + (lastClientX = e.clientX);\n            el.scrollTop -= newScrollY = -lastClientY + (lastClientY = e.clientY);\n            if (el === document.body) {\n              el.scrollLeft -= newScrollX;\n              el.scrollTop -= newScrollY;\n            }\n          }\n        }\n      }, 0);\n    };\n    // if value is undefined or true we will init\n    if (binding.value === undefined || binding.value === true) {\n      if (document.readyState === 'complete') {\n        reset();\n      } else {\n        window.addEventListener('load', reset, 0);\n      }\n    } else {\n      // if value is false means we disable\n      // if value is anything else log error \n      if (binding.value) {\n        console.error('The passed value should be either \\'undefined\\', \\'true\\' or \\'false\\'.');\n      }\n\n      // window.removeEventListener('load', reset, 0)\n      el.removeEventListener('mousedown', el.md, 0);\n      window.removeEventListener('mouseup', el.mu, 0);\n      window.removeEventListener('mousemove', el.mm, 0);\n    }\n  },\n  bind: function bind(el, binding, vnode) {\n    binding.def.init(el, binding);\n  },\n  update: function update(el, binding, vnode, oldVnode) {\n    if (binding.value !== binding.oldValue) {\n      binding.def.init(el, binding);\n    }\n  },\n  unbind: function unbind(el, binding, vnode) {\n    el['removeEventListener']('mousedown', el.md, 0);\n    window['removeEventListener']('mouseup', el.mu, 0);\n    window['removeEventListener']('mousemove', el.mm, 0);\n  }\n};\n\nvar VueDragscroll = {\n  install: function install(Vue, options) {\n    Vue.directive('dragscroll', dragscroll);\n  }\n};\n\nif (typeof window !== 'undefined' && window.Vue) {\n  window.VueDragscroll = VueDragscroll;\n  window.Vue.use(VueDragscroll);\n}\n\nexports.default = VueDragscroll;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdnVlRHJhZ1Njcm9sbC5qcz81M2UwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBkcmFnc2Nyb2xsID0ge1xyXG4gIGluaXQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZykge1xyXG4gICAgbGV0IG5ld1Njcm9sbFgsIG5ld1Njcm9sbFlcclxuICAgIHZhciByZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IGxhc3RDbGllbnRYLCBsYXN0Q2xpZW50WSwgcHVzaGVkXHJcblxyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlbC5tZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgbGV0IGhhc05vQ2hpbGREcmFnID0gYmluZGluZy5hcmcgPT09ICdub2NoaWxkZHJhZydcclxuICAgICAgICBsZXQgaGFzRmlyc3RDaGlsZERyYWcgPSBiaW5kaW5nLmFyZyA9PT0gJ2ZpcnN0Y2hpbGRkcmFnJ1xyXG4gICAgICAgIGxldCBpc0VsID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChlLnBhZ2VYIC0gd2luZG93LnBhZ2VYT2Zmc2V0LCBlLnBhZ2VZIC0gd2luZG93LnBhZ2VZT2Zmc2V0KSA9PT0gZWxcclxuICAgICAgICBsZXQgaXNGaXJzdENoaWxkID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChlLnBhZ2VYIC0gd2luZG93LnBhZ2VYT2Zmc2V0LCBlLnBhZ2VZIC0gd2luZG93LnBhZ2VZT2Zmc2V0KSA9PT0gZWwuZmlyc3RDaGlsZFxyXG5cclxuICAgICAgICBsZXQgc3RhcnQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgcHVzaGVkID0gMVxyXG4gICAgICAgICAgbGFzdENsaWVudFggPSBlLmNsaWVudFhcclxuICAgICAgICAgIGxhc3RDbGllbnRZID0gZS5jbGllbnRZXHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChoYXNOb0NoaWxkRHJhZykge1xyXG4gICAgICAgICAgaWYgKGlzRWwpIHtcclxuICAgICAgICAgICAgc3RhcnQoZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpcnN0Q2hpbGREcmFnKSB7XHJcbiAgICAgICAgICBpZiAoaXNFbCB8fCBpc0ZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgc3RhcnQoZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhcnQoZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDApXHJcblxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGVsLm11ID0gZnVuY3Rpb24gKCkgeyBwdXNoZWQgPSAwIH0sIDApXHJcblxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZWwubW0gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChwdXNoZWQpIHtcclxuICAgICAgICAgIGlmIChiaW5kaW5nLm1vZGlmaWVycy54KSB7XHJcbiAgICAgICAgICAgIGVsLnNjcm9sbExlZnQgLT0gbmV3U2Nyb2xsWCA9ICgtbGFzdENsaWVudFggKyAobGFzdENsaWVudFggPSBlLmNsaWVudFgpKVxyXG4gICAgICAgICAgICBpZiAoZWwgPT09IGRvY3VtZW50LmJvZHkpIHtcclxuICAgICAgICAgICAgICBlbC5zY3JvbGxMZWZ0IC09IG5ld1Njcm9sbFhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChiaW5kaW5nLm1vZGlmaWVycy55KSB7XHJcbiAgICAgICAgICAgIGVsLnNjcm9sbFRvcCAtPSBuZXdTY3JvbGxZID0gKC1sYXN0Q2xpZW50WSArIChsYXN0Q2xpZW50WSA9IGUuY2xpZW50WSkpXHJcbiAgICAgICAgICAgIGlmIChlbCA9PT0gZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgICAgICAgIGVsLnNjcm9sbFRvcCAtPSBuZXdTY3JvbGxZXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsLnNjcm9sbExlZnQgLT0gbmV3U2Nyb2xsWCA9ICgtbGFzdENsaWVudFggKyAobGFzdENsaWVudFggPSBlLmNsaWVudFgpKVxyXG4gICAgICAgICAgICBlbC5zY3JvbGxUb3AgLT0gbmV3U2Nyb2xsWSA9ICgtbGFzdENsaWVudFkgKyAobGFzdENsaWVudFkgPSBlLmNsaWVudFkpKVxyXG4gICAgICAgICAgICBpZiAoZWwgPT09IGRvY3VtZW50LmJvZHkpIHtcclxuICAgICAgICAgICAgICBlbC5zY3JvbGxMZWZ0IC09IG5ld1Njcm9sbFhcclxuICAgICAgICAgICAgICBlbC5zY3JvbGxUb3AgLT0gbmV3U2Nyb2xsWVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAwKVxyXG4gICAgfVxyXG4gICAgLy8gaWYgdmFsdWUgaXMgdW5kZWZpbmVkIG9yIHRydWUgd2Ugd2lsbCBpbml0XHJcbiAgICBpZiAoYmluZGluZy52YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGJpbmRpbmcudmFsdWUgPT09IHRydWUpIHtcclxuICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcclxuICAgICAgICByZXNldCgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZXNldCwgMClcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gaWYgdmFsdWUgaXMgZmFsc2UgbWVhbnMgd2UgZGlzYWJsZVxyXG4gICAgICAvLyBpZiB2YWx1ZSBpcyBhbnl0aGluZyBlbHNlIGxvZyBlcnJvciBcclxuICAgICAgaWYgKGJpbmRpbmcudmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgcGFzc2VkIHZhbHVlIHNob3VsZCBiZSBlaXRoZXIgXFwndW5kZWZpbmVkXFwnLCBcXCd0cnVlXFwnIG9yIFxcJ2ZhbHNlXFwnLicpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgcmVzZXQsIDApXHJcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGVsLm1kLCAwKVxyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGVsLm11LCAwKVxyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZWwubW0sIDApXHJcbiAgICB9XHJcbiAgfSxcclxuICBiaW5kOiBmdW5jdGlvbiAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XHJcbiAgICBiaW5kaW5nLmRlZi5pbml0KGVsLCBiaW5kaW5nKVxyXG4gIH0sXHJcbiAgdXBkYXRlOiBmdW5jdGlvbiAoZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSkge1xyXG4gICAgaWYgKGJpbmRpbmcudmFsdWUgIT09IGJpbmRpbmcub2xkVmFsdWUpIHtcclxuICAgICAgYmluZGluZy5kZWYuaW5pdChlbCwgYmluZGluZylcclxuICAgIH1cclxuICB9LFxyXG4gIHVuYmluZDogZnVuY3Rpb24gKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xyXG4gICAgZWxbJ3JlbW92ZUV2ZW50TGlzdGVuZXInXSgnbW91c2Vkb3duJywgZWwubWQsIDApXHJcbiAgICB3aW5kb3dbJ3JlbW92ZUV2ZW50TGlzdGVuZXInXSgnbW91c2V1cCcsIGVsLm11LCAwKVxyXG4gICAgd2luZG93WydyZW1vdmVFdmVudExpc3RlbmVyJ10oJ21vdXNlbW92ZScsIGVsLm1tLCAwKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgVnVlRHJhZ3Njcm9sbCA9IHtcclxuICBpbnN0YWxsIChWdWUsIG9wdGlvbnMpIHtcclxuICAgIFZ1ZS5kaXJlY3RpdmUoJ2RyYWdzY3JvbGwnLCBkcmFnc2Nyb2xsKVxyXG4gIH1cclxufVxyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcclxuICB3aW5kb3cuVnVlRHJhZ3Njcm9sbCA9IFZ1ZURyYWdzY3JvbGxcclxuICB3aW5kb3cuVnVlLnVzZShWdWVEcmFnc2Nyb2xsKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWdWVEcmFnc2Nyb2xsXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdnVlRHJhZ1Njcm9sbC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekZBO0FBQ0E7QUEyRkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);
});