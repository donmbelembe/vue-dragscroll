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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _utils = __webpack_require__(2);\n\nvar _utils2 = _interopRequireDefault(_utils);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar POINTER_START_EVENTS = ['mousedown', 'touchstart'];\nvar POINTER_MOVE_EVENTS = ['mousemove', 'touchmove'];\nvar POINTER_END_EVENTS = ['mouseup', 'touchend'];\n\nvar init = function init(el, binding, vnode) {\n  var reset = function reset() {\n    var lastClientX = void 0,\n        lastClientY = void 0,\n        pushed = void 0;\n    var isDragging = false;\n\n    el.md = function (e) {\n      var pageX = e.pageX ? e.pageX : e.touches[0].pageX;\n      var pageY = e.pageY ? e.pageY : e.touches[0].pageY;\n\n      var hasNoChildDrag = binding.arg === 'nochilddrag';\n      var hasFirstChildDrag = binding.arg === 'firstchilddrag';\n      var isEl = document.elementFromPoint(pageX - window.pageXOffset, pageY - window.pageYOffset) === el;\n      var isFirstChild = document.elementFromPoint(pageX - window.pageXOffset, pageY - window.pageYOffset) === el.firstChild;\n\n      var start = function start(e) {\n        pushed = 1;\n        lastClientX = e.clientX ? e.clientX : e.touches[0].clientX;\n        lastClientY = e.clientY ? e.clientY : e.touches[0].clientY;\n        e.preventDefault();\n      };\n\n      if (hasNoChildDrag) {\n        if (isEl) {\n          start(e);\n        }\n      } else if (hasFirstChildDrag) {\n        if (isEl || isFirstChild) {\n          start(e);\n        }\n      } else {\n        start(e);\n      }\n    };\n\n    el.mu = function () {\n      pushed = 0;\n      if (isDragging) {\n        emitEvent(vnode, 'dragscrollend');\n      }\n      isDragging = false;\n    };\n\n    el.mm = function (e) {\n      var newScrollX = void 0,\n          newScrollY = void 0;\n      var eventDetail = {};\n      if (pushed) {\n        if (!isDragging) {\n          emitEvent(vnode, 'dragscrollstart');\n        }\n        isDragging = true;\n        if (binding.modifiers.x) {\n          newScrollX = -lastClientX + (lastClientX = e.clientX ? e.clientX : e.touches[0].clientX);\n          el.scrollLeft -= newScrollX;\n          if (el === document.body) {\n            el.scrollLeft -= newScrollX;\n          }\n          eventDetail.deltaX = -newScrollX;\n        } else if (binding.modifiers.y) {\n          newScrollY = -lastClientY + (lastClientY = e.clientY ? e.clientY : e.touches[0].clientY);\n          el.scrollTop -= newScrollY;\n          if (el === document.body) {\n            el.scrollTop -= newScrollY;\n          }\n          eventDetail.deltaY = -newScrollY;\n        } else {\n          newScrollX = -lastClientX + (lastClientX = e.clientX ? e.clientX : e.touches[0].clientX);\n          newScrollY = -lastClientY + (lastClientY = e.clientY ? e.clientY : e.touches[0].clientY);\n          el.scrollLeft -= newScrollX;\n          el.scrollTop -= newScrollY;\n          if (el === document.body) {\n            el.scrollLeft -= newScrollX;\n            el.scrollTop -= newScrollY;\n          }\n          eventDetail.deltaX = -newScrollX;\n          eventDetail.deltaY = -newScrollY;\n        }\n        emitEvent(vnode, 'dragscrollmove', eventDetail);\n      }\n    };\n\n    _utils2.default.addEventListeners(el, POINTER_START_EVENTS, el.md);\n\n    _utils2.default.addEventListeners(window, POINTER_END_EVENTS, el.mu);\n\n    _utils2.default.addEventListeners(window, POINTER_MOVE_EVENTS, el.mm);\n  };\n  // if value is undefined or true we will init\n  if (binding.value === undefined || binding.value === true) {\n    if (document.readyState === 'complete') {\n      reset();\n    } else {\n      window.addEventListener('load', reset);\n    }\n  } else {\n    // if value is false means we disable\n    // if value is anything else log error\n    if (binding.value) {\n      console.error('The passed value should be either \\'undefined\\', \\'true\\' or \\'false\\'.');\n    }\n\n    // window.removeEventListener('load', reset)\n    _utils2.default.removeEventListeners(el, POINTER_START_EVENTS, el.md);\n    _utils2.default.removeEventListeners(window, POINTER_END_EVENTS, el.mu);\n    _utils2.default.removeEventListeners(window, POINTER_MOVE_EVENTS, el.mm);\n  }\n};\n\nvar emitEvent = function emitEvent(vnode, eventName, eventDetail) {\n  // If vnode is a Vue component instance, use $emit. Otherwise use a native HTML event.\n  if (vnode.componentInstance) {\n    vnode.componentInstance.$emit(eventName, eventDetail);\n  } else {\n    var event = void 0;\n    if (window.CustomEvent) {\n      event = new window.CustomEvent(eventName, { detail: eventDetail });\n    } else {\n      // Deprecated fallback for IE\n      event = document.createEvent('CustomEvent');\n      event.initCustomEvent(eventName, true, true, eventDetail);\n    }\n    vnode.elm.dispatchEvent(event);\n  }\n};\n\nexports.default = {\n  bind: function bind(el, binding, vnode) {\n    init(el, binding, vnode);\n  },\n  update: function update(el, binding, vnode, oldVnode) {\n    if (binding.value !== binding.oldValue) {\n      init(el, binding, vnode);\n    }\n  },\n  unbind: function unbind(el, binding, vnode) {\n    _utils2.default.removeEventListeners(el, POINTER_START_EVENTS, el.md);\n    _utils2.default.removeEventListeners(window, POINTER_END_EVENTS, el.mu);\n    _utils2.default.removeEventListeners(window, POINTER_MOVE_EVENTS, el.mm);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZGlyZWN0aXZlLmpzP2M0NDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHUgZnJvbSAnLi91dGlscydcclxuXHJcbmNvbnN0IFBPSU5URVJfU1RBUlRfRVZFTlRTID0gWydtb3VzZWRvd24nLCAndG91Y2hzdGFydCddXHJcbmNvbnN0IFBPSU5URVJfTU9WRV9FVkVOVFMgPSBbJ21vdXNlbW92ZScsICd0b3VjaG1vdmUnXVxyXG5jb25zdCBQT0lOVEVSX0VORF9FVkVOVFMgPSBbJ21vdXNldXAnLCAndG91Y2hlbmQnXVxyXG5cclxubGV0IGluaXQgPSBmdW5jdGlvbiAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XHJcbiAgdmFyIHJlc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGxhc3RDbGllbnRYLCBsYXN0Q2xpZW50WSwgcHVzaGVkXHJcbiAgICBsZXQgaXNEcmFnZ2luZyA9IGZhbHNlXHJcblxyXG4gICAgZWwubWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBsZXQgcGFnZVggPSBlLnBhZ2VYID8gZS5wYWdlWCA6IGUudG91Y2hlc1swXS5wYWdlWFxyXG4gICAgICBsZXQgcGFnZVkgPSBlLnBhZ2VZID8gZS5wYWdlWSA6IGUudG91Y2hlc1swXS5wYWdlWVxyXG5cclxuICAgICAgbGV0IGhhc05vQ2hpbGREcmFnID0gYmluZGluZy5hcmcgPT09ICdub2NoaWxkZHJhZydcclxuICAgICAgbGV0IGhhc0ZpcnN0Q2hpbGREcmFnID0gYmluZGluZy5hcmcgPT09ICdmaXJzdGNoaWxkZHJhZydcclxuICAgICAgbGV0IGlzRWwgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHBhZ2VYIC0gd2luZG93LnBhZ2VYT2Zmc2V0LCBwYWdlWSAtIHdpbmRvdy5wYWdlWU9mZnNldCkgPT09IGVsXHJcbiAgICAgIGxldCBpc0ZpcnN0Q2hpbGQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHBhZ2VYIC0gd2luZG93LnBhZ2VYT2Zmc2V0LCBwYWdlWSAtIHdpbmRvdy5wYWdlWU9mZnNldCkgPT09IGVsLmZpcnN0Q2hpbGRcclxuXHJcbiAgICAgIGxldCBzdGFydCA9IChlKSA9PiB7XHJcbiAgICAgICAgcHVzaGVkID0gMVxyXG4gICAgICAgIGxhc3RDbGllbnRYID0gZS5jbGllbnRYID8gZS5jbGllbnRYIDogZS50b3VjaGVzWzBdLmNsaWVudFhcclxuICAgICAgICBsYXN0Q2xpZW50WSA9IGUuY2xpZW50WSA/IGUuY2xpZW50WSA6IGUudG91Y2hlc1swXS5jbGllbnRZXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChoYXNOb0NoaWxkRHJhZykge1xyXG4gICAgICAgIGlmIChpc0VsKSB7XHJcbiAgICAgICAgICBzdGFydChlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChoYXNGaXJzdENoaWxkRHJhZykge1xyXG4gICAgICAgIGlmIChpc0VsIHx8IGlzRmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgc3RhcnQoZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhcnQoZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVsLm11ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBwdXNoZWQgPSAwXHJcbiAgICAgIGlmIChpc0RyYWdnaW5nKSB7XHJcbiAgICAgICAgZW1pdEV2ZW50KHZub2RlLCAnZHJhZ3Njcm9sbGVuZCcpXHJcbiAgICAgIH1cclxuICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZWwubW0gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBsZXQgbmV3U2Nyb2xsWCwgbmV3U2Nyb2xsWVxyXG4gICAgICBsZXQgZXZlbnREZXRhaWwgPSB7fVxyXG4gICAgICBpZiAocHVzaGVkKSB7XHJcbiAgICAgICAgaWYgKCFpc0RyYWdnaW5nKSB7XHJcbiAgICAgICAgICBlbWl0RXZlbnQodm5vZGUsICdkcmFnc2Nyb2xsc3RhcnQnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpc0RyYWdnaW5nID0gdHJ1ZVxyXG4gICAgICAgIGlmIChiaW5kaW5nLm1vZGlmaWVycy54KSB7XHJcbiAgICAgICAgICBuZXdTY3JvbGxYID0gKC1sYXN0Q2xpZW50WCArIChsYXN0Q2xpZW50WCA9IGUuY2xpZW50WCA/IGUuY2xpZW50WCA6IGUudG91Y2hlc1swXS5jbGllbnRYKSlcclxuICAgICAgICAgIGVsLnNjcm9sbExlZnQgLT0gbmV3U2Nyb2xsWFxyXG4gICAgICAgICAgaWYgKGVsID09PSBkb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgICAgICAgIGVsLnNjcm9sbExlZnQgLT0gbmV3U2Nyb2xsWFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZXZlbnREZXRhaWwuZGVsdGFYID0gLW5ld1Njcm9sbFhcclxuICAgICAgICB9IGVsc2UgaWYgKGJpbmRpbmcubW9kaWZpZXJzLnkpIHtcclxuICAgICAgICAgIG5ld1Njcm9sbFkgPSAoLWxhc3RDbGllbnRZICsgKGxhc3RDbGllbnRZID0gZS5jbGllbnRZID8gZS5jbGllbnRZIDogZS50b3VjaGVzWzBdLmNsaWVudFkpKVxyXG4gICAgICAgICAgZWwuc2Nyb2xsVG9wIC09IG5ld1Njcm9sbFlcclxuICAgICAgICAgIGlmIChlbCA9PT0gZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgICAgICBlbC5zY3JvbGxUb3AgLT0gbmV3U2Nyb2xsWVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZXZlbnREZXRhaWwuZGVsdGFZID0gLW5ld1Njcm9sbFlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmV3U2Nyb2xsWCA9ICgtbGFzdENsaWVudFggKyAobGFzdENsaWVudFggPSBlLmNsaWVudFggPyBlLmNsaWVudFggOiBlLnRvdWNoZXNbMF0uY2xpZW50WCkpXHJcbiAgICAgICAgICBuZXdTY3JvbGxZID0gKC1sYXN0Q2xpZW50WSArIChsYXN0Q2xpZW50WSA9IGUuY2xpZW50WSA/IGUuY2xpZW50WSA6IGUudG91Y2hlc1swXS5jbGllbnRZKSlcclxuICAgICAgICAgIGVsLnNjcm9sbExlZnQgLT0gbmV3U2Nyb2xsWFxyXG4gICAgICAgICAgZWwuc2Nyb2xsVG9wIC09IG5ld1Njcm9sbFlcclxuICAgICAgICAgIGlmIChlbCA9PT0gZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgICAgICBlbC5zY3JvbGxMZWZ0IC09IG5ld1Njcm9sbFhcclxuICAgICAgICAgICAgZWwuc2Nyb2xsVG9wIC09IG5ld1Njcm9sbFlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGV2ZW50RGV0YWlsLmRlbHRhWCA9IC1uZXdTY3JvbGxYXHJcbiAgICAgICAgICBldmVudERldGFpbC5kZWx0YVkgPSAtbmV3U2Nyb2xsWVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbWl0RXZlbnQodm5vZGUsICdkcmFnc2Nyb2xsbW92ZScsIGV2ZW50RGV0YWlsKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdS5hZGRFdmVudExpc3RlbmVycyhlbCwgUE9JTlRFUl9TVEFSVF9FVkVOVFMsIGVsLm1kKVxyXG5cclxuICAgIHUuYWRkRXZlbnRMaXN0ZW5lcnMod2luZG93LCBQT0lOVEVSX0VORF9FVkVOVFMsIGVsLm11KVxyXG5cclxuICAgIHUuYWRkRXZlbnRMaXN0ZW5lcnMod2luZG93LCBQT0lOVEVSX01PVkVfRVZFTlRTLCBlbC5tbSlcclxuICB9XHJcbiAgLy8gaWYgdmFsdWUgaXMgdW5kZWZpbmVkIG9yIHRydWUgd2Ugd2lsbCBpbml0XHJcbiAgaWYgKGJpbmRpbmcudmFsdWUgPT09IHVuZGVmaW5lZCB8fCBiaW5kaW5nLnZhbHVlID09PSB0cnVlKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICByZXNldCgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlc2V0KVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBpZiB2YWx1ZSBpcyBmYWxzZSBtZWFucyB3ZSBkaXNhYmxlXHJcbiAgICAvLyBpZiB2YWx1ZSBpcyBhbnl0aGluZyBlbHNlIGxvZyBlcnJvclxyXG4gICAgaWYgKGJpbmRpbmcudmFsdWUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignVGhlIHBhc3NlZCB2YWx1ZSBzaG91bGQgYmUgZWl0aGVyIFxcJ3VuZGVmaW5lZFxcJywgXFwndHJ1ZVxcJyBvciBcXCdmYWxzZVxcJy4nKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgcmVzZXQpXHJcbiAgICB1LnJlbW92ZUV2ZW50TGlzdGVuZXJzKGVsLCBQT0lOVEVSX1NUQVJUX0VWRU5UUywgZWwubWQpXHJcbiAgICB1LnJlbW92ZUV2ZW50TGlzdGVuZXJzKHdpbmRvdywgUE9JTlRFUl9FTkRfRVZFTlRTLCBlbC5tdSlcclxuICAgIHUucmVtb3ZlRXZlbnRMaXN0ZW5lcnMod2luZG93LCBQT0lOVEVSX01PVkVfRVZFTlRTLCBlbC5tbSlcclxuICB9XHJcbn1cclxuXHJcbmxldCBlbWl0RXZlbnQgPSBmdW5jdGlvbiAodm5vZGUsIGV2ZW50TmFtZSwgZXZlbnREZXRhaWwpIHtcclxuICAvLyBJZiB2bm9kZSBpcyBhIFZ1ZSBjb21wb25lbnQgaW5zdGFuY2UsIHVzZSAkZW1pdC4gT3RoZXJ3aXNlIHVzZSBhIG5hdGl2ZSBIVE1MIGV2ZW50LlxyXG4gIGlmICh2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkge1xyXG4gICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UuJGVtaXQoZXZlbnROYW1lLCBldmVudERldGFpbClcclxuICB9IGVsc2Uge1xyXG4gICAgbGV0IGV2ZW50XHJcbiAgICBpZiAod2luZG93LkN1c3RvbUV2ZW50KSB7XHJcbiAgICAgIGV2ZW50ID0gbmV3IHdpbmRvdy5DdXN0b21FdmVudChldmVudE5hbWUsIHsgZGV0YWlsOiBldmVudERldGFpbCB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gRGVwcmVjYXRlZCBmYWxsYmFjayBmb3IgSUVcclxuICAgICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxyXG4gICAgICBldmVudC5pbml0Q3VzdG9tRXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlLCBldmVudERldGFpbClcclxuICAgIH1cclxuICAgIHZub2RlLmVsbS5kaXNwYXRjaEV2ZW50KGV2ZW50KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGJpbmQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcclxuICAgIGluaXQoZWwsIGJpbmRpbmcsIHZub2RlKVxyXG4gIH0sXHJcbiAgdXBkYXRlOiBmdW5jdGlvbiAoZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSkge1xyXG4gICAgaWYgKGJpbmRpbmcudmFsdWUgIT09IGJpbmRpbmcub2xkVmFsdWUpIHtcclxuICAgICAgaW5pdChlbCwgYmluZGluZywgdm5vZGUpXHJcbiAgICB9XHJcbiAgfSxcclxuICB1bmJpbmQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcclxuICAgIHUucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoZWwsIFBPSU5URVJfU1RBUlRfRVZFTlRTLCBlbC5tZClcclxuICAgIHUucmVtb3ZlRXZlbnRMaXN0ZW5lcnMod2luZG93LCBQT0lOVEVSX0VORF9FVkVOVFMsIGVsLm11KVxyXG4gICAgdS5yZW1vdmVFdmVudExpc3RlbmVycyh3aW5kb3csIFBPSU5URVJfTU9WRV9FVkVOVFMsIGVsLm1tKVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RpcmVjdGl2ZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  addEventListeners: function addEventListeners(el, events, handler) {\n    for (var i = 0, len = events.length; i < len; i++) {\n      el.addEventListener(events[i], handler);\n    }\n  },\n  removeEventListeners: function removeEventListeners(el, events, handler) {\n    for (var i = 0, len = events.length; i < len; i++) {\n      el.removeEventListener(events[i], handler);\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbHMuanM/MmI0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKGVsLCBldmVudHMsIGhhbmRsZXIpIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBldmVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudHNbaV0sIGhhbmRsZXIpXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMgKGVsLCBldmVudHMsIGhhbmRsZXIpIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBldmVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHNbaV0sIGhhbmRsZXIpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdXRpbHMuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);
});