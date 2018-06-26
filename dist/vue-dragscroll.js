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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.dragscroll = undefined;\n\nvar _directive = __webpack_require__(1);\n\nvar _directive2 = _interopRequireDefault(_directive);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar VueDragscroll = {\n  install: function install(Vue, options) {\n    var major = Number(Vue.version.split('.')[0]);\n    var minor = Number(Vue.version.split('.')[1]);\n    if (major < 2 && minor < 1) {\n      throw new Error('v-dragscroll supports vue version 2.1 and above. You are using Vue@' + Vue.version + '. Please upgrade to the latest version of Vue.');\n    }\n    // registration\n    Vue.directive('dragscroll', _directive2.default);\n  }\n};\n\nif (typeof window !== 'undefined' && window.Vue) {\n  window.VueDragscroll = VueDragscroll;\n  window.Vue.use(VueDragscroll);\n}\n\nexports.dragscroll = _directive2.default;\nexports.default = VueDragscroll;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbWFpbi5qcz8xYzkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkaXJlY3RpdmUgZnJvbSAnLi9kaXJlY3RpdmUnXG5cbmNvbnN0IFZ1ZURyYWdzY3JvbGwgPSB7XG4gIGluc3RhbGwgKFZ1ZSwgb3B0aW9ucykge1xuICAgIGxldCBtYWpvciA9IE51bWJlcihWdWUudmVyc2lvbi5zcGxpdCgnLicpWzBdKVxuICAgIGxldCBtaW5vciA9IE51bWJlcihWdWUudmVyc2lvbi5zcGxpdCgnLicpWzFdKVxuICAgIGlmIChtYWpvciA8IDIgJiYgbWlub3IgPCAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHYtZHJhZ3Njcm9sbCBzdXBwb3J0cyB2dWUgdmVyc2lvbiAyLjEgYW5kIGFib3ZlLiBZb3UgYXJlIHVzaW5nIFZ1ZUAke1Z1ZS52ZXJzaW9ufS4gUGxlYXNlIHVwZ3JhZGUgdG8gdGhlIGxhdGVzdCB2ZXJzaW9uIG9mIFZ1ZS5gKVxuICAgIH1cbiAgICAvLyByZWdpc3RyYXRpb25cbiAgICBWdWUuZGlyZWN0aXZlKCdkcmFnc2Nyb2xsJywgZGlyZWN0aXZlKVxuICB9XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XG4gIHdpbmRvdy5WdWVEcmFnc2Nyb2xsID0gVnVlRHJhZ3Njcm9sbFxuICB3aW5kb3cuVnVlLnVzZShWdWVEcmFnc2Nyb2xsKVxufVxuXG5leHBvcnQgeyBkaXJlY3RpdmUgYXMgZHJhZ3Njcm9sbCB9XG5leHBvcnQgZGVmYXVsdCBWdWVEcmFnc2Nyb2xsXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL21haW4uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _utils = __webpack_require__(2);\n\nvar _utils2 = _interopRequireDefault(_utils);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar POINTER_START_EVENTS = ['mousedown', 'touchstart'];\nvar POINTER_MOVE_EVENTS = ['mousemove', 'touchmove'];\nvar POINTER_END_EVENTS = ['mouseup', 'touchend'];\n\nvar init = function init(el, binding, vnode) {\n  var newScrollX = void 0,\n      newScrollY = void 0;\n  var reset = function reset() {\n    var lastClientX = void 0,\n        lastClientY = void 0,\n        pushed = void 0;\n    var isDragging = false;\n\n    el.md = function (e) {\n      var pageX = e.pageX ? e.pageX : e.touches[0].pageX;\n      var pageY = e.pageY ? e.pageY : e.touches[0].pageY;\n\n      var hasNoChildDrag = binding.arg === 'nochilddrag';\n      var hasFirstChildDrag = binding.arg === 'firstchilddrag';\n      var isEl = document.elementFromPoint(pageX - window.pageXOffset, pageY - window.pageYOffset) === el;\n      var isFirstChild = document.elementFromPoint(pageX - window.pageXOffset, pageY - window.pageYOffset) === el.firstChild;\n\n      var start = function start(e) {\n        pushed = 1;\n        lastClientX = e.clientX;\n        lastClientY = e.clientY;\n        e.preventDefault();\n      };\n\n      if (hasNoChildDrag) {\n        if (isEl) {\n          start(e);\n        }\n      } else if (hasFirstChildDrag) {\n        if (isEl || isFirstChild) {\n          start(e);\n        }\n      } else {\n        start(e);\n      }\n    };\n\n    el.mu = function () {\n      pushed = 0;\n      if (isDragging) {\n        emitEvent(vnode, 'dragscrollend');\n      }\n      isDragging = false;\n    };\n\n    el.mm = function (e) {\n      if (pushed) {\n        if (!isDragging) {\n          emitEvent(vnode, 'dragscrollstart');\n        }\n        isDragging = true;\n        if (binding.modifiers.x) {\n          el.scrollLeft -= newScrollX = -lastClientX + (lastClientX = e.clientX);\n          if (el === document.body) {\n            el.scrollLeft -= newScrollX;\n          }\n        } else if (binding.modifiers.y) {\n          el.scrollTop -= newScrollY = -lastClientY + (lastClientY = e.clientY);\n          if (el === document.body) {\n            el.scrollTop -= newScrollY;\n          }\n        } else {\n          el.scrollLeft -= newScrollX = -lastClientX + (lastClientX = e.clientX);\n          el.scrollTop -= newScrollY = -lastClientY + (lastClientY = e.clientY);\n          if (el === document.body) {\n            el.scrollLeft -= newScrollX;\n            el.scrollTop -= newScrollY;\n          }\n        }\n\n        emitEvent(vnode, 'dragscrollmove');\n      }\n    };\n\n    _utils2.default.addEventListeners(el, POINTER_START_EVENTS, el.md);\n\n    _utils2.default.addEventListeners(window, POINTER_END_EVENTS, el.mu);\n\n    _utils2.default.addEventListeners(window, POINTER_MOVE_EVENTS, el.mm);\n  };\n  // if value is undefined or true we will init\n  if (binding.value === undefined || binding.value === true) {\n    if (document.readyState === 'complete') {\n      reset();\n    } else {\n      window.addEventListener('load', reset);\n    }\n  } else {\n    // if value is false means we disable\n    // if value is anything else log error\n    if (binding.value) {\n      console.error('The passed value should be either \\'undefined\\', \\'true\\' or \\'false\\'.');\n    }\n\n    // window.removeEventListener('load', reset)\n    _utils2.default.removeEventListeners(el, POINTER_START_EVENTS, el.md);\n    _utils2.default.removeEventListeners(window, POINTER_END_EVENTS, el.mu);\n    _utils2.default.removeEventListeners(window, POINTER_MOVE_EVENTS, el.mm);\n  }\n};\n\nvar emitEvent = function emitEvent(vnode, eventName) {\n  // If vnode is a Vue component instance, use $emit. Otherwise use a native HTML event.\n  if (vnode.componentInstance) {\n    vnode.componentInstance.$emit(eventName);\n  } else {\n    var event = document.createEvent('Event');\n    event.initEvent(eventName, true, true);\n    vnode.elm.dispatchEvent(event);\n  }\n};\n\nexports.default = {\n  bind: function bind(el, binding, vnode) {\n    init(el, binding, vnode);\n  },\n  update: function update(el, binding, vnode, oldVnode) {\n    if (binding.value !== binding.oldValue) {\n      init(el, binding, vnode);\n    }\n  },\n  unbind: function unbind(el, binding, vnode) {\n    _utils2.default.removeEventListeners(el, POINTER_START_EVENTS, el.md);\n    _utils2.default.removeEventListeners(window, POINTER_END_EVENTS, el.mu);\n    _utils2.default.removeEventListeners(window, POINTER_MOVE_EVENTS, el.mm);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZGlyZWN0aXZlLmpzP2M0NDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHUgZnJvbSAnLi91dGlscydcblxuY29uc3QgUE9JTlRFUl9TVEFSVF9FVkVOVFMgPSBbJ21vdXNlZG93bicsICd0b3VjaHN0YXJ0J11cbmNvbnN0IFBPSU5URVJfTU9WRV9FVkVOVFMgPSBbJ21vdXNlbW92ZScsICd0b3VjaG1vdmUnXVxuY29uc3QgUE9JTlRFUl9FTkRfRVZFTlRTID0gWydtb3VzZXVwJywgJ3RvdWNoZW5kJ11cblxubGV0IGluaXQgPSBmdW5jdGlvbiAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gIGxldCBuZXdTY3JvbGxYLCBuZXdTY3JvbGxZXG4gIHZhciByZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbGFzdENsaWVudFgsIGxhc3RDbGllbnRZLCBwdXNoZWRcbiAgICBsZXQgaXNEcmFnZ2luZyA9IGZhbHNlXG5cbiAgICBlbC5tZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBsZXQgcGFnZVggPSBlLnBhZ2VYID8gZS5wYWdlWCA6IGUudG91Y2hlc1swXS5wYWdlWFxuICAgICAgbGV0IHBhZ2VZID0gZS5wYWdlWSA/IGUucGFnZVkgOiBlLnRvdWNoZXNbMF0ucGFnZVlcblxuICAgICAgbGV0IGhhc05vQ2hpbGREcmFnID0gYmluZGluZy5hcmcgPT09ICdub2NoaWxkZHJhZydcbiAgICAgIGxldCBoYXNGaXJzdENoaWxkRHJhZyA9IGJpbmRpbmcuYXJnID09PSAnZmlyc3RjaGlsZGRyYWcnXG4gICAgICBsZXQgaXNFbCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQocGFnZVggLSB3aW5kb3cucGFnZVhPZmZzZXQsIHBhZ2VZIC0gd2luZG93LnBhZ2VZT2Zmc2V0KSA9PT0gZWxcbiAgICAgIGxldCBpc0ZpcnN0Q2hpbGQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHBhZ2VYIC0gd2luZG93LnBhZ2VYT2Zmc2V0LCBwYWdlWSAtIHdpbmRvdy5wYWdlWU9mZnNldCkgPT09IGVsLmZpcnN0Q2hpbGRcblxuICAgICAgbGV0IHN0YXJ0ID0gKGUpID0+IHtcbiAgICAgICAgcHVzaGVkID0gMVxuICAgICAgICBsYXN0Q2xpZW50WCA9IGUuY2xpZW50WFxuICAgICAgICBsYXN0Q2xpZW50WSA9IGUuY2xpZW50WVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cblxuICAgICAgaWYgKGhhc05vQ2hpbGREcmFnKSB7XG4gICAgICAgIGlmIChpc0VsKSB7XG4gICAgICAgICAgc3RhcnQoZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChoYXNGaXJzdENoaWxkRHJhZykge1xuICAgICAgICBpZiAoaXNFbCB8fCBpc0ZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICBzdGFydChlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFydChlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGVsLm11ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHVzaGVkID0gMFxuICAgICAgaWYgKGlzRHJhZ2dpbmcpIHtcbiAgICAgICAgZW1pdEV2ZW50KHZub2RlLCAnZHJhZ3Njcm9sbGVuZCcpXG4gICAgICB9XG4gICAgICBpc0RyYWdnaW5nID0gZmFsc2VcbiAgICB9XG5cbiAgICBlbC5tbSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAocHVzaGVkKSB7XG4gICAgICAgIGlmICghaXNEcmFnZ2luZykge1xuICAgICAgICAgIGVtaXRFdmVudCh2bm9kZSwgJ2RyYWdzY3JvbGxzdGFydCcpXG4gICAgICAgIH1cbiAgICAgICAgaXNEcmFnZ2luZyA9IHRydWVcbiAgICAgICAgaWYgKGJpbmRpbmcubW9kaWZpZXJzLngpIHtcbiAgICAgICAgICBlbC5zY3JvbGxMZWZ0IC09IG5ld1Njcm9sbFggPSAoLWxhc3RDbGllbnRYICsgKGxhc3RDbGllbnRYID0gZS5jbGllbnRYKSlcbiAgICAgICAgICBpZiAoZWwgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIGVsLnNjcm9sbExlZnQgLT0gbmV3U2Nyb2xsWFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChiaW5kaW5nLm1vZGlmaWVycy55KSB7XG4gICAgICAgICAgZWwuc2Nyb2xsVG9wIC09IG5ld1Njcm9sbFkgPSAoLWxhc3RDbGllbnRZICsgKGxhc3RDbGllbnRZID0gZS5jbGllbnRZKSlcbiAgICAgICAgICBpZiAoZWwgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIGVsLnNjcm9sbFRvcCAtPSBuZXdTY3JvbGxZXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsLnNjcm9sbExlZnQgLT0gbmV3U2Nyb2xsWCA9ICgtbGFzdENsaWVudFggKyAobGFzdENsaWVudFggPSBlLmNsaWVudFgpKVxuICAgICAgICAgIGVsLnNjcm9sbFRvcCAtPSBuZXdTY3JvbGxZID0gKC1sYXN0Q2xpZW50WSArIChsYXN0Q2xpZW50WSA9IGUuY2xpZW50WSkpXG4gICAgICAgICAgaWYgKGVsID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICBlbC5zY3JvbGxMZWZ0IC09IG5ld1Njcm9sbFhcbiAgICAgICAgICAgIGVsLnNjcm9sbFRvcCAtPSBuZXdTY3JvbGxZXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZW1pdEV2ZW50KHZub2RlLCAnZHJhZ3Njcm9sbG1vdmUnKVxuICAgICAgfVxuICAgIH1cblxuICAgIHUuYWRkRXZlbnRMaXN0ZW5lcnMoZWwsIFBPSU5URVJfU1RBUlRfRVZFTlRTLCBlbC5tZClcblxuICAgIHUuYWRkRXZlbnRMaXN0ZW5lcnMod2luZG93LCBQT0lOVEVSX0VORF9FVkVOVFMsIGVsLm11KVxuXG4gICAgdS5hZGRFdmVudExpc3RlbmVycyh3aW5kb3csIFBPSU5URVJfTU9WRV9FVkVOVFMsIGVsLm1tKVxuICB9XG4gIC8vIGlmIHZhbHVlIGlzIHVuZGVmaW5lZCBvciB0cnVlIHdlIHdpbGwgaW5pdFxuICBpZiAoYmluZGluZy52YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGJpbmRpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgcmVzZXQoKVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlc2V0KVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBpZiB2YWx1ZSBpcyBmYWxzZSBtZWFucyB3ZSBkaXNhYmxlXG4gICAgLy8gaWYgdmFsdWUgaXMgYW55dGhpbmcgZWxzZSBsb2cgZXJyb3JcbiAgICBpZiAoYmluZGluZy52YWx1ZSkge1xuICAgICAgY29uc29sZS5lcnJvcignVGhlIHBhc3NlZCB2YWx1ZSBzaG91bGQgYmUgZWl0aGVyIFxcJ3VuZGVmaW5lZFxcJywgXFwndHJ1ZVxcJyBvciBcXCdmYWxzZVxcJy4nKVxuICAgIH1cblxuICAgIC8vIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgcmVzZXQpXG4gICAgdS5yZW1vdmVFdmVudExpc3RlbmVycyhlbCwgUE9JTlRFUl9TVEFSVF9FVkVOVFMsIGVsLm1kKVxuICAgIHUucmVtb3ZlRXZlbnRMaXN0ZW5lcnMod2luZG93LCBQT0lOVEVSX0VORF9FVkVOVFMsIGVsLm11KVxuICAgIHUucmVtb3ZlRXZlbnRMaXN0ZW5lcnMod2luZG93LCBQT0lOVEVSX01PVkVfRVZFTlRTLCBlbC5tbSlcbiAgfVxufVxuXG5sZXQgZW1pdEV2ZW50ID0gZnVuY3Rpb24gKHZub2RlLCBldmVudE5hbWUpIHtcbiAgLy8gSWYgdm5vZGUgaXMgYSBWdWUgY29tcG9uZW50IGluc3RhbmNlLCB1c2UgJGVtaXQuIE90aGVyd2lzZSB1c2UgYSBuYXRpdmUgSFRNTCBldmVudC5cbiAgaWYgKHZub2RlLmNvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UuJGVtaXQoZXZlbnROYW1lKVxuICB9IGVsc2Uge1xuICAgIGxldCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpXG4gICAgZXZlbnQuaW5pdEV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSlcbiAgICB2bm9kZS5lbG0uZGlzcGF0Y2hFdmVudChldmVudClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJpbmQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICBpbml0KGVsLCBiaW5kaW5nLCB2bm9kZSlcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiAoZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSkge1xuICAgIGlmIChiaW5kaW5nLnZhbHVlICE9PSBiaW5kaW5nLm9sZFZhbHVlKSB7XG4gICAgICBpbml0KGVsLCBiaW5kaW5nLCB2bm9kZSlcbiAgICB9XG4gIH0sXG4gIHVuYmluZDogZnVuY3Rpb24gKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgIHUucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoZWwsIFBPSU5URVJfU1RBUlRfRVZFTlRTLCBlbC5tZClcbiAgICB1LnJlbW92ZUV2ZW50TGlzdGVuZXJzKHdpbmRvdywgUE9JTlRFUl9FTkRfRVZFTlRTLCBlbC5tdSlcbiAgICB1LnJlbW92ZUV2ZW50TGlzdGVuZXJzKHdpbmRvdywgUE9JTlRFUl9NT1ZFX0VWRU5UUywgZWwubW0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGlyZWN0aXZlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  addEventListeners: function addEventListeners(el, events, handler) {\n    for (var i = 0, len = events.length; i < len; i++) {\n      el.addEventListener(events[i], handler);\n    }\n  },\n  removeEventListeners: function removeEventListeners(el, events, handler) {\n    for (var i = 0, len = events.length; i < len; i++) {\n      el.removeEventListener(events[i], handler);\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbHMuanM/MmI0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGFkZEV2ZW50TGlzdGVuZXJzIChlbCwgZXZlbnRzLCBoYW5kbGVyKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2ZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudHNbaV0sIGhhbmRsZXIpXG4gICAgfVxuICB9LFxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzIChlbCwgZXZlbnRzLCBoYW5kbGVyKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2ZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHNbaV0sIGhhbmRsZXIpXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3V0aWxzLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);
});