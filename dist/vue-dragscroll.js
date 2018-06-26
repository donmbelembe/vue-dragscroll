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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.dragscroll = undefined;\n\nvar _directive = __webpack_require__(1);\n\nvar _directive2 = _interopRequireDefault(_directive);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar VueDragscroll = {\n  install: function install(Vue, options) {\n    var major = Number(Vue.version.split('.')[0]);\n    var minor = Number(Vue.version.split('.')[1]);\n    if (major < 2 && minor < 1) {\n      throw new Error('v-dragscroll supports vue version 2.1 and above. You are using Vue@' + Vue.version + '. Please upgrade to the latest version of Vue.');\n    }\n    // registration\n    Vue.directive('dragscroll', _directive2.default);\n  }\n};\n\nif (typeof window !== 'undefined' && window.Vue) {\n  window.VueDragscroll = VueDragscroll;\n  window.Vue.use(VueDragscroll);\n}\n\nexports.dragscroll = _directive2.default;\nexports.default = VueDragscroll;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbWFpbi5qcz8xYzkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkaXJlY3RpdmUgZnJvbSAnLi9kaXJlY3RpdmUnXHJcblxyXG5jb25zdCBWdWVEcmFnc2Nyb2xsID0ge1xyXG4gIGluc3RhbGwgKFZ1ZSwgb3B0aW9ucykge1xyXG4gICAgbGV0IG1ham9yID0gTnVtYmVyKFZ1ZS52ZXJzaW9uLnNwbGl0KCcuJylbMF0pXHJcbiAgICBsZXQgbWlub3IgPSBOdW1iZXIoVnVlLnZlcnNpb24uc3BsaXQoJy4nKVsxXSlcclxuICAgIGlmIChtYWpvciA8IDIgJiYgbWlub3IgPCAxKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdi1kcmFnc2Nyb2xsIHN1cHBvcnRzIHZ1ZSB2ZXJzaW9uIDIuMSBhbmQgYWJvdmUuIFlvdSBhcmUgdXNpbmcgVnVlQCR7VnVlLnZlcnNpb259LiBQbGVhc2UgdXBncmFkZSB0byB0aGUgbGF0ZXN0IHZlcnNpb24gb2YgVnVlLmApXHJcbiAgICB9XHJcbiAgICAvLyByZWdpc3RyYXRpb25cclxuICAgIFZ1ZS5kaXJlY3RpdmUoJ2RyYWdzY3JvbGwnLCBkaXJlY3RpdmUpXHJcbiAgfVxyXG59XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlZ1ZSkge1xyXG4gIHdpbmRvdy5WdWVEcmFnc2Nyb2xsID0gVnVlRHJhZ3Njcm9sbFxyXG4gIHdpbmRvdy5WdWUudXNlKFZ1ZURyYWdzY3JvbGwpXHJcbn1cclxuXHJcbmV4cG9ydCB7IGRpcmVjdGl2ZSBhcyBkcmFnc2Nyb2xsIH1cclxuZXhwb3J0IGRlZmF1bHQgVnVlRHJhZ3Njcm9sbFxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL21haW4uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _utils = __webpack_require__(2);\n\nvar _utils2 = _interopRequireDefault(_utils);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar POINTER_START_EVENTS = ['mousedown', 'touchstart'];\nvar POINTER_MOVE_EVENTS = ['mousemove', 'touchmove'];\nvar POINTER_END_EVENTS = ['mouseup', 'touchend'];\n\nvar init = function init(el, binding, vnode) {\n  var newScrollX = void 0,\n      newScrollY = void 0;\n  var reset = function reset() {\n    var lastClientX = void 0,\n        lastClientY = void 0,\n        pushed = void 0;\n    var isDragging = false;\n\n    el.md = function (e) {\n      var pageX = e.pageX ? e.pageX : e.touches[0].pageX;\n      var pageY = e.pageY ? e.pageY : e.touches[0].pageY;\n\n      var hasNoChildDrag = binding.arg === 'nochilddrag';\n      var hasFirstChildDrag = binding.arg === 'firstchilddrag';\n      var isEl = document.elementFromPoint(pageX - window.pageXOffset, pageY - window.pageYOffset) === el;\n      var isFirstChild = document.elementFromPoint(pageX - window.pageXOffset, pageY - window.pageYOffset) === el.firstChild;\n\n      var start = function start(e) {\n        pushed = 1;\n        lastClientX = e.clientX ? e.clientX : e.touches[0].clientX;\n        lastClientY = e.clientY ? e.clientY : e.touches[0].clientY;\n        e.preventDefault();\n      };\n\n      if (hasNoChildDrag) {\n        if (isEl) {\n          start(e);\n        }\n      } else if (hasFirstChildDrag) {\n        if (isEl || isFirstChild) {\n          start(e);\n        }\n      } else {\n        start(e);\n      }\n    };\n\n    el.mu = function () {\n      pushed = 0;\n      if (isDragging) {\n        emitEvent(vnode, 'dragscrollend');\n      }\n      isDragging = false;\n    };\n\n    el.mm = function (e) {\n      if (pushed) {\n        if (!isDragging) {\n          emitEvent(vnode, 'dragscrollstart');\n        }\n        isDragging = true;\n        if (binding.modifiers.x) {\n          newScrollX = -lastClientX + (lastClientX = e.clientX ? e.clientX : e.touches[0].clientX);\n          el.scrollLeft -= newScrollX;\n          if (el === document.body) {\n            el.scrollLeft -= newScrollX;\n          }\n        } else if (binding.modifiers.y) {\n          newScrollY = -lastClientY + (lastClientY = e.clientY ? e.clientY : e.touches[0].clientY);\n          el.scrollTop -= newScrollY;\n          if (el === document.body) {\n            el.scrollTop -= newScrollY;\n          }\n        } else {\n          newScrollX = -lastClientX + (lastClientX = e.clientX ? e.clientX : e.touches[0].clientX);\n          newScrollY = -lastClientY + (lastClientY = e.clientY ? e.clientY : e.touches[0].clientY);\n          el.scrollLeft -= newScrollX;\n          el.scrollTop -= newScrollY;\n          if (el === document.body) {\n            el.scrollLeft -= newScrollX;\n            el.scrollTop -= newScrollY;\n          }\n        }\n\n        emitEvent(vnode, 'dragscrollmove');\n      }\n    };\n\n    _utils2.default.addEventListeners(el, POINTER_START_EVENTS, el.md);\n\n    _utils2.default.addEventListeners(window, POINTER_END_EVENTS, el.mu);\n\n    _utils2.default.addEventListeners(window, POINTER_MOVE_EVENTS, el.mm);\n  };\n  // if value is undefined or true we will init\n  if (binding.value === undefined || binding.value === true) {\n    if (document.readyState === 'complete') {\n      reset();\n    } else {\n      window.addEventListener('load', reset);\n    }\n  } else {\n    // if value is false means we disable\n    // if value is anything else log error\n    if (binding.value) {\n      console.error('The passed value should be either \\'undefined\\', \\'true\\' or \\'false\\'.');\n    }\n\n    // window.removeEventListener('load', reset)\n    _utils2.default.removeEventListeners(el, POINTER_START_EVENTS, el.md);\n    _utils2.default.removeEventListeners(window, POINTER_END_EVENTS, el.mu);\n    _utils2.default.removeEventListeners(window, POINTER_MOVE_EVENTS, el.mm);\n  }\n};\n\nvar emitEvent = function emitEvent(vnode, eventName) {\n  // If vnode is a Vue component instance, use $emit. Otherwise use a native HTML event.\n  if (vnode.componentInstance) {\n    vnode.componentInstance.$emit(eventName);\n  } else {\n    var event = document.createEvent('Event');\n    event.initEvent(eventName, true, true);\n    vnode.elm.dispatchEvent(event);\n  }\n};\n\nexports.default = {\n  bind: function bind(el, binding, vnode) {\n    init(el, binding, vnode);\n  },\n  update: function update(el, binding, vnode, oldVnode) {\n    if (binding.value !== binding.oldValue) {\n      init(el, binding, vnode);\n    }\n  },\n  unbind: function unbind(el, binding, vnode) {\n    _utils2.default.removeEventListeners(el, POINTER_START_EVENTS, el.md);\n    _utils2.default.removeEventListeners(window, POINTER_END_EVENTS, el.mu);\n    _utils2.default.removeEventListeners(window, POINTER_MOVE_EVENTS, el.mm);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZGlyZWN0aXZlLmpzP2M0NDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHUgZnJvbSAnLi91dGlscydcclxuXHJcbmNvbnN0IFBPSU5URVJfU1RBUlRfRVZFTlRTID0gWydtb3VzZWRvd24nLCAndG91Y2hzdGFydCddXHJcbmNvbnN0IFBPSU5URVJfTU9WRV9FVkVOVFMgPSBbJ21vdXNlbW92ZScsICd0b3VjaG1vdmUnXVxyXG5jb25zdCBQT0lOVEVSX0VORF9FVkVOVFMgPSBbJ21vdXNldXAnLCAndG91Y2hlbmQnXVxyXG5cclxubGV0IGluaXQgPSBmdW5jdGlvbiAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XHJcbiAgbGV0IG5ld1Njcm9sbFgsIG5ld1Njcm9sbFlcclxuICB2YXIgcmVzZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbGFzdENsaWVudFgsIGxhc3RDbGllbnRZLCBwdXNoZWRcclxuICAgIGxldCBpc0RyYWdnaW5nID0gZmFsc2VcclxuXHJcbiAgICBlbC5tZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGxldCBwYWdlWCA9IGUucGFnZVggPyBlLnBhZ2VYIDogZS50b3VjaGVzWzBdLnBhZ2VYXHJcbiAgICAgIGxldCBwYWdlWSA9IGUucGFnZVkgPyBlLnBhZ2VZIDogZS50b3VjaGVzWzBdLnBhZ2VZXHJcblxyXG4gICAgICBsZXQgaGFzTm9DaGlsZERyYWcgPSBiaW5kaW5nLmFyZyA9PT0gJ25vY2hpbGRkcmFnJ1xyXG4gICAgICBsZXQgaGFzRmlyc3RDaGlsZERyYWcgPSBiaW5kaW5nLmFyZyA9PT0gJ2ZpcnN0Y2hpbGRkcmFnJ1xyXG4gICAgICBsZXQgaXNFbCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQocGFnZVggLSB3aW5kb3cucGFnZVhPZmZzZXQsIHBhZ2VZIC0gd2luZG93LnBhZ2VZT2Zmc2V0KSA9PT0gZWxcclxuICAgICAgbGV0IGlzRmlyc3RDaGlsZCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQocGFnZVggLSB3aW5kb3cucGFnZVhPZmZzZXQsIHBhZ2VZIC0gd2luZG93LnBhZ2VZT2Zmc2V0KSA9PT0gZWwuZmlyc3RDaGlsZFxyXG5cclxuICAgICAgbGV0IHN0YXJ0ID0gKGUpID0+IHtcclxuICAgICAgICBwdXNoZWQgPSAxXHJcbiAgICAgICAgbGFzdENsaWVudFggPSBlLmNsaWVudFggPyBlLmNsaWVudFggOiBlLnRvdWNoZXNbMF0uY2xpZW50WFxyXG4gICAgICAgIGxhc3RDbGllbnRZID0gZS5jbGllbnRZID8gZS5jbGllbnRZIDogZS50b3VjaGVzWzBdLmNsaWVudFlcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGhhc05vQ2hpbGREcmFnKSB7XHJcbiAgICAgICAgaWYgKGlzRWwpIHtcclxuICAgICAgICAgIHN0YXJ0KGUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKGhhc0ZpcnN0Q2hpbGREcmFnKSB7XHJcbiAgICAgICAgaWYgKGlzRWwgfHwgaXNGaXJzdENoaWxkKSB7XHJcbiAgICAgICAgICBzdGFydChlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGFydChlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWwubXUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHB1c2hlZCA9IDBcclxuICAgICAgaWYgKGlzRHJhZ2dpbmcpIHtcclxuICAgICAgICBlbWl0RXZlbnQodm5vZGUsICdkcmFnc2Nyb2xsZW5kJylcclxuICAgICAgfVxyXG4gICAgICBpc0RyYWdnaW5nID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBlbC5tbSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGlmIChwdXNoZWQpIHtcclxuICAgICAgICBpZiAoIWlzRHJhZ2dpbmcpIHtcclxuICAgICAgICAgIGVtaXRFdmVudCh2bm9kZSwgJ2RyYWdzY3JvbGxzdGFydCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzRHJhZ2dpbmcgPSB0cnVlXHJcbiAgICAgICAgaWYgKGJpbmRpbmcubW9kaWZpZXJzLngpIHtcclxuICAgICAgICAgIG5ld1Njcm9sbFggPSAoLWxhc3RDbGllbnRYICsgKGxhc3RDbGllbnRYID0gZS5jbGllbnRYID8gZS5jbGllbnRYIDogZS50b3VjaGVzWzBdLmNsaWVudFgpKVxyXG4gICAgICAgICAgZWwuc2Nyb2xsTGVmdCAtPSBuZXdTY3JvbGxYXHJcbiAgICAgICAgICBpZiAoZWwgPT09IGRvY3VtZW50LmJvZHkpIHtcclxuICAgICAgICAgICAgZWwuc2Nyb2xsTGVmdCAtPSBuZXdTY3JvbGxYXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChiaW5kaW5nLm1vZGlmaWVycy55KSB7XHJcbiAgICAgICAgICBuZXdTY3JvbGxZID0gKC1sYXN0Q2xpZW50WSArIChsYXN0Q2xpZW50WSA9IGUuY2xpZW50WSA/IGUuY2xpZW50WSA6IGUudG91Y2hlc1swXS5jbGllbnRZKSlcclxuICAgICAgICAgIGVsLnNjcm9sbFRvcCAtPSBuZXdTY3JvbGxZXHJcbiAgICAgICAgICBpZiAoZWwgPT09IGRvY3VtZW50LmJvZHkpIHtcclxuICAgICAgICAgICAgZWwuc2Nyb2xsVG9wIC09IG5ld1Njcm9sbFlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmV3U2Nyb2xsWCA9ICgtbGFzdENsaWVudFggKyAobGFzdENsaWVudFggPSBlLmNsaWVudFggPyBlLmNsaWVudFggOiBlLnRvdWNoZXNbMF0uY2xpZW50WCkpXHJcbiAgICAgICAgICBuZXdTY3JvbGxZID0gKC1sYXN0Q2xpZW50WSArIChsYXN0Q2xpZW50WSA9IGUuY2xpZW50WSA/IGUuY2xpZW50WSA6IGUudG91Y2hlc1swXS5jbGllbnRZKSlcclxuICAgICAgICAgIGVsLnNjcm9sbExlZnQgLT0gbmV3U2Nyb2xsWFxyXG4gICAgICAgICAgZWwuc2Nyb2xsVG9wIC09IG5ld1Njcm9sbFlcclxuICAgICAgICAgIGlmIChlbCA9PT0gZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgICAgICBlbC5zY3JvbGxMZWZ0IC09IG5ld1Njcm9sbFhcclxuICAgICAgICAgICAgZWwuc2Nyb2xsVG9wIC09IG5ld1Njcm9sbFlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVtaXRFdmVudCh2bm9kZSwgJ2RyYWdzY3JvbGxtb3ZlJylcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHUuYWRkRXZlbnRMaXN0ZW5lcnMoZWwsIFBPSU5URVJfU1RBUlRfRVZFTlRTLCBlbC5tZClcclxuXHJcbiAgICB1LmFkZEV2ZW50TGlzdGVuZXJzKHdpbmRvdywgUE9JTlRFUl9FTkRfRVZFTlRTLCBlbC5tdSlcclxuXHJcbiAgICB1LmFkZEV2ZW50TGlzdGVuZXJzKHdpbmRvdywgUE9JTlRFUl9NT1ZFX0VWRU5UUywgZWwubW0pXHJcbiAgfVxyXG4gIC8vIGlmIHZhbHVlIGlzIHVuZGVmaW5lZCBvciB0cnVlIHdlIHdpbGwgaW5pdFxyXG4gIGlmIChiaW5kaW5nLnZhbHVlID09PSB1bmRlZmluZWQgfHwgYmluZGluZy52YWx1ZSA9PT0gdHJ1ZSkge1xyXG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcclxuICAgICAgcmVzZXQoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZXNldClcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgLy8gaWYgdmFsdWUgaXMgZmFsc2UgbWVhbnMgd2UgZGlzYWJsZVxyXG4gICAgLy8gaWYgdmFsdWUgaXMgYW55dGhpbmcgZWxzZSBsb2cgZXJyb3JcclxuICAgIGlmIChiaW5kaW5nLnZhbHVlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBwYXNzZWQgdmFsdWUgc2hvdWxkIGJlIGVpdGhlciBcXCd1bmRlZmluZWRcXCcsIFxcJ3RydWVcXCcgb3IgXFwnZmFsc2VcXCcuJylcclxuICAgIH1cclxuXHJcbiAgICAvLyB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlc2V0KVxyXG4gICAgdS5yZW1vdmVFdmVudExpc3RlbmVycyhlbCwgUE9JTlRFUl9TVEFSVF9FVkVOVFMsIGVsLm1kKVxyXG4gICAgdS5yZW1vdmVFdmVudExpc3RlbmVycyh3aW5kb3csIFBPSU5URVJfRU5EX0VWRU5UUywgZWwubXUpXHJcbiAgICB1LnJlbW92ZUV2ZW50TGlzdGVuZXJzKHdpbmRvdywgUE9JTlRFUl9NT1ZFX0VWRU5UUywgZWwubW0pXHJcbiAgfVxyXG59XHJcblxyXG5sZXQgZW1pdEV2ZW50ID0gZnVuY3Rpb24gKHZub2RlLCBldmVudE5hbWUpIHtcclxuICAvLyBJZiB2bm9kZSBpcyBhIFZ1ZSBjb21wb25lbnQgaW5zdGFuY2UsIHVzZSAkZW1pdC4gT3RoZXJ3aXNlIHVzZSBhIG5hdGl2ZSBIVE1MIGV2ZW50LlxyXG4gIGlmICh2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkge1xyXG4gICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UuJGVtaXQoZXZlbnROYW1lKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBsZXQgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKVxyXG4gICAgZXZlbnQuaW5pdEV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSlcclxuICAgIHZub2RlLmVsbS5kaXNwYXRjaEV2ZW50KGV2ZW50KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGJpbmQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcclxuICAgIGluaXQoZWwsIGJpbmRpbmcsIHZub2RlKVxyXG4gIH0sXHJcbiAgdXBkYXRlOiBmdW5jdGlvbiAoZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSkge1xyXG4gICAgaWYgKGJpbmRpbmcudmFsdWUgIT09IGJpbmRpbmcub2xkVmFsdWUpIHtcclxuICAgICAgaW5pdChlbCwgYmluZGluZywgdm5vZGUpXHJcbiAgICB9XHJcbiAgfSxcclxuICB1bmJpbmQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcclxuICAgIHUucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoZWwsIFBPSU5URVJfU1RBUlRfRVZFTlRTLCBlbC5tZClcclxuICAgIHUucmVtb3ZlRXZlbnRMaXN0ZW5lcnMod2luZG93LCBQT0lOVEVSX0VORF9FVkVOVFMsIGVsLm11KVxyXG4gICAgdS5yZW1vdmVFdmVudExpc3RlbmVycyh3aW5kb3csIFBPSU5URVJfTU9WRV9FVkVOVFMsIGVsLm1tKVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RpcmVjdGl2ZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  addEventListeners: function addEventListeners(el, events, handler) {\n    for (var i = 0, len = events.length; i < len; i++) {\n      el.addEventListener(events[i], handler);\n    }\n  },\n  removeEventListeners: function removeEventListeners(el, events, handler) {\n    for (var i = 0, len = events.length; i < len; i++) {\n      el.removeEventListener(events[i], handler);\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbHMuanM/MmI0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKGVsLCBldmVudHMsIGhhbmRsZXIpIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBldmVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudHNbaV0sIGhhbmRsZXIpXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMgKGVsLCBldmVudHMsIGhhbmRsZXIpIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBldmVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHNbaV0sIGhhbmRsZXIpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdXRpbHMuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);
});