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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _directive = __webpack_require__(1);\n\nvar _directive2 = _interopRequireDefault(_directive);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar VueDragscroll = {\n  install: function install(Vue, options) {\n    var major = Number(Vue.version.split('.')[0]);\n    var minor = Number(Vue.version.split('.')[1]);\n    if (major < 2 && minor < 1) {\n      throw new Error('v-dragscroll supports vue version 2.1 and above. You are using Vue@' + Vue.version + '. Please upgrade to the latest version of Vue.');\n    }\n    // registration\n    Vue.directive('dragscroll', _directive2.default);\n  }\n};\n\nif (typeof window !== 'undefined' && window.Vue) {\n  window.VueDragscroll = VueDragscroll;\n  window.Vue.use(VueDragscroll);\n}\n\nexports.default = _directive2.default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbWFpbi5qcz8xYzkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkaXJlY3RpdmUgZnJvbSAnLi9kaXJlY3RpdmUnXG5cbmNvbnN0IFZ1ZURyYWdzY3JvbGwgPSB7XG4gIGluc3RhbGwgKFZ1ZSwgb3B0aW9ucykge1xuICAgIGxldCBtYWpvciA9IE51bWJlcihWdWUudmVyc2lvbi5zcGxpdCgnLicpWzBdKVxuICAgIGxldCBtaW5vciA9IE51bWJlcihWdWUudmVyc2lvbi5zcGxpdCgnLicpWzFdKVxuICAgIGlmIChtYWpvciA8IDIgJiYgbWlub3IgPCAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHYtZHJhZ3Njcm9sbCBzdXBwb3J0cyB2dWUgdmVyc2lvbiAyLjEgYW5kIGFib3ZlLiBZb3UgYXJlIHVzaW5nIFZ1ZUAke1Z1ZS52ZXJzaW9ufS4gUGxlYXNlIHVwZ3JhZGUgdG8gdGhlIGxhdGVzdCB2ZXJzaW9uIG9mIFZ1ZS5gKVxuICAgIH1cbiAgICAvLyByZWdpc3RyYXRpb25cbiAgICBWdWUuZGlyZWN0aXZlKCdkcmFnc2Nyb2xsJywgZGlyZWN0aXZlKVxuICB9XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XG4gIHdpbmRvdy5WdWVEcmFnc2Nyb2xsID0gVnVlRHJhZ3Njcm9sbFxuICB3aW5kb3cuVnVlLnVzZShWdWVEcmFnc2Nyb2xsKVxufVxuXG5leHBvcnQgeyBkaXJlY3RpdmUgYXMgZGVmYXVsdCB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL21haW4uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _utils = __webpack_require__(2);\n\nvar _utils2 = _interopRequireDefault(_utils);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar POINTER_START_EVENTS = ['mousedown', 'touchstart'];\nvar POINTER_MOVE_EVENTS = ['mousemove', 'touchmove'];\nvar POINTER_END_EVENTS = ['mouseup', 'touchend'];\n\nvar init = function init(el, binding, vnode) {\n  var newScrollX = void 0,\n      newScrollY = void 0;\n  var reset = function reset() {\n    var lastClientX = void 0,\n        lastClientY = void 0,\n        pushed = void 0;\n    var isDragging = false;\n\n    el.md = function (e) {\n      var hasNoChildDrag = binding.arg === 'nochilddrag';\n      var hasFirstChildDrag = binding.arg === 'firstchilddrag';\n      var isEl = document.elementFromPoint(e.pageX - window.pageXOffset, e.pageY - window.pageYOffset) === el;\n      var isFirstChild = document.elementFromPoint(e.pageX - window.pageXOffset, e.pageY - window.pageYOffset) === el.firstChild;\n\n      var start = function start(e) {\n        pushed = 1;\n        lastClientX = e.clientX;\n        lastClientY = e.clientY;\n        e.preventDefault();\n      };\n\n      if (hasNoChildDrag) {\n        if (isEl) {\n          start(e);\n        }\n      } else if (hasFirstChildDrag) {\n        if (isEl || isFirstChild) {\n          start(e);\n        }\n      } else {\n        start(e);\n      }\n    };\n\n    el.mu = function () {\n      pushed = 0;\n      if (isDragging) {\n        emitEvent(vnode, 'dragscrollend');\n      }\n      isDragging = false;\n    };\n\n    el.mm = function (e) {\n      if (pushed) {\n        if (!isDragging) {\n          emitEvent(vnode, 'dragscrollstart');\n        }\n        isDragging = true;\n        if (binding.modifiers.x) {\n          el.scrollLeft -= newScrollX = -lastClientX + (lastClientX = e.clientX);\n          if (el === document.body) {\n            el.scrollLeft -= newScrollX;\n          }\n        } else if (binding.modifiers.y) {\n          el.scrollTop -= newScrollY = -lastClientY + (lastClientY = e.clientY);\n          if (el === document.body) {\n            el.scrollTop -= newScrollY;\n          }\n        } else {\n          el.scrollLeft -= newScrollX = -lastClientX + (lastClientX = e.clientX);\n          el.scrollTop -= newScrollY = -lastClientY + (lastClientY = e.clientY);\n          if (el === document.body) {\n            el.scrollLeft -= newScrollX;\n            el.scrollTop -= newScrollY;\n          }\n        }\n\n        emitEvent(vnode, 'dragscrollmove');\n      }\n    };\n\n    _utils2.default.addEventListeners(el, POINTER_START_EVENTS, el.md);\n\n    _utils2.default.addEventListeners(window, POINTER_END_EVENTS, el.mu);\n\n    _utils2.default.addEventListeners(window, POINTER_MOVE_EVENTS, el.mm);\n  };\n  // if value is undefined or true we will init\n  if (binding.value === undefined || binding.value === true) {\n    if (document.readyState === 'complete') {\n      reset();\n    } else {\n      window.addEventListener('load', reset);\n    }\n  } else {\n    // if value is false means we disable\n    // if value is anything else log error\n    if (binding.value) {\n      console.error('The passed value should be either \\'undefined\\', \\'true\\' or \\'false\\'.');\n    }\n\n    // window.removeEventListener('load', reset)\n    _utils2.default.removeEventListeners(el, POINTER_START_EVENTS, el.md);\n    _utils2.default.removeEventListeners(window, POINTER_END_EVENTS, el.mu);\n    _utils2.default.removeEventListeners(window, POINTER_MOVE_EVENTS, el.mm);\n  }\n};\n\nvar emitEvent = function emitEvent(vnode, eventName) {\n  // If vnode is a Vue component instance, use $emit. Otherwise use a native HTML event.\n  if (vnode.componentInstance) {\n    vnode.componentInstance.$emit(eventName);\n  } else {\n    var event = document.createEvent('Event');\n    event.initEvent(eventName, true, true);\n    vnode.elm.dispatchEvent(event);\n  }\n};\n\nexports.default = {\n  bind: function bind(el, binding, vnode) {\n    init(el, binding, vnode);\n  },\n  update: function update(el, binding, vnode, oldVnode) {\n    if (binding.value !== binding.oldValue) {\n      init(el, binding, vnode);\n    }\n  },\n  unbind: function unbind(el, binding, vnode) {\n    _utils2.default.removeEventListeners(el, POINTER_START_EVENTS, el.md);\n    _utils2.default.removeEventListeners(window, POINTER_END_EVENTS, el.mu);\n    _utils2.default.removeEventListeners(window, POINTER_MOVE_EVENTS, el.mm);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZGlyZWN0aXZlLmpzP2M0NDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHUgZnJvbSAnLi91dGlscydcblxuY29uc3QgUE9JTlRFUl9TVEFSVF9FVkVOVFMgPSBbJ21vdXNlZG93bicsICd0b3VjaHN0YXJ0J11cbmNvbnN0IFBPSU5URVJfTU9WRV9FVkVOVFMgPSBbJ21vdXNlbW92ZScsICd0b3VjaG1vdmUnXVxuY29uc3QgUE9JTlRFUl9FTkRfRVZFTlRTID0gWydtb3VzZXVwJywgJ3RvdWNoZW5kJ11cblxubGV0IGluaXQgPSBmdW5jdGlvbiAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gIGxldCBuZXdTY3JvbGxYLCBuZXdTY3JvbGxZXG4gIHZhciByZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbGFzdENsaWVudFgsIGxhc3RDbGllbnRZLCBwdXNoZWRcbiAgICBsZXQgaXNEcmFnZ2luZyA9IGZhbHNlXG5cbiAgICBlbC5tZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBsZXQgaGFzTm9DaGlsZERyYWcgPSBiaW5kaW5nLmFyZyA9PT0gJ25vY2hpbGRkcmFnJ1xuICAgICAgbGV0IGhhc0ZpcnN0Q2hpbGREcmFnID0gYmluZGluZy5hcmcgPT09ICdmaXJzdGNoaWxkZHJhZydcbiAgICAgIGxldCBpc0VsID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChlLnBhZ2VYIC0gd2luZG93LnBhZ2VYT2Zmc2V0LCBlLnBhZ2VZIC0gd2luZG93LnBhZ2VZT2Zmc2V0KSA9PT0gZWxcbiAgICAgIGxldCBpc0ZpcnN0Q2hpbGQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGUucGFnZVggLSB3aW5kb3cucGFnZVhPZmZzZXQsIGUucGFnZVkgLSB3aW5kb3cucGFnZVlPZmZzZXQpID09PSBlbC5maXJzdENoaWxkXG5cbiAgICAgIGxldCBzdGFydCA9IChlKSA9PiB7XG4gICAgICAgIHB1c2hlZCA9IDFcbiAgICAgICAgbGFzdENsaWVudFggPSBlLmNsaWVudFhcbiAgICAgICAgbGFzdENsaWVudFkgPSBlLmNsaWVudFlcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG5cbiAgICAgIGlmIChoYXNOb0NoaWxkRHJhZykge1xuICAgICAgICBpZiAoaXNFbCkge1xuICAgICAgICAgIHN0YXJ0KGUpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaGFzRmlyc3RDaGlsZERyYWcpIHtcbiAgICAgICAgaWYgKGlzRWwgfHwgaXNGaXJzdENoaWxkKSB7XG4gICAgICAgICAgc3RhcnQoZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhcnQoZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbC5tdSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHB1c2hlZCA9IDBcbiAgICAgIGlmIChpc0RyYWdnaW5nKSB7XG4gICAgICAgIGVtaXRFdmVudCh2bm9kZSwgJ2RyYWdzY3JvbGxlbmQnKVxuICAgICAgfVxuICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgfVxuXG4gICAgZWwubW0gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKHB1c2hlZCkge1xuICAgICAgICBpZiAoIWlzRHJhZ2dpbmcpIHtcbiAgICAgICAgICBlbWl0RXZlbnQodm5vZGUsICdkcmFnc2Nyb2xsc3RhcnQnKVxuICAgICAgICB9XG4gICAgICAgIGlzRHJhZ2dpbmcgPSB0cnVlXG4gICAgICAgIGlmIChiaW5kaW5nLm1vZGlmaWVycy54KSB7XG4gICAgICAgICAgZWwuc2Nyb2xsTGVmdCAtPSBuZXdTY3JvbGxYID0gKC1sYXN0Q2xpZW50WCArIChsYXN0Q2xpZW50WCA9IGUuY2xpZW50WCkpXG4gICAgICAgICAgaWYgKGVsID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICBlbC5zY3JvbGxMZWZ0IC09IG5ld1Njcm9sbFhcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoYmluZGluZy5tb2RpZmllcnMueSkge1xuICAgICAgICAgIGVsLnNjcm9sbFRvcCAtPSBuZXdTY3JvbGxZID0gKC1sYXN0Q2xpZW50WSArIChsYXN0Q2xpZW50WSA9IGUuY2xpZW50WSkpXG4gICAgICAgICAgaWYgKGVsID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICBlbC5zY3JvbGxUb3AgLT0gbmV3U2Nyb2xsWVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbC5zY3JvbGxMZWZ0IC09IG5ld1Njcm9sbFggPSAoLWxhc3RDbGllbnRYICsgKGxhc3RDbGllbnRYID0gZS5jbGllbnRYKSlcbiAgICAgICAgICBlbC5zY3JvbGxUb3AgLT0gbmV3U2Nyb2xsWSA9ICgtbGFzdENsaWVudFkgKyAobGFzdENsaWVudFkgPSBlLmNsaWVudFkpKVxuICAgICAgICAgIGlmIChlbCA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgZWwuc2Nyb2xsTGVmdCAtPSBuZXdTY3JvbGxYXG4gICAgICAgICAgICBlbC5zY3JvbGxUb3AgLT0gbmV3U2Nyb2xsWVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGVtaXRFdmVudCh2bm9kZSwgJ2RyYWdzY3JvbGxtb3ZlJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1LmFkZEV2ZW50TGlzdGVuZXJzKGVsLCBQT0lOVEVSX1NUQVJUX0VWRU5UUywgZWwubWQpXG5cbiAgICB1LmFkZEV2ZW50TGlzdGVuZXJzKHdpbmRvdywgUE9JTlRFUl9FTkRfRVZFTlRTLCBlbC5tdSlcblxuICAgIHUuYWRkRXZlbnRMaXN0ZW5lcnMod2luZG93LCBQT0lOVEVSX01PVkVfRVZFTlRTLCBlbC5tbSlcbiAgfVxuICAvLyBpZiB2YWx1ZSBpcyB1bmRlZmluZWQgb3IgdHJ1ZSB3ZSB3aWxsIGluaXRcbiAgaWYgKGJpbmRpbmcudmFsdWUgPT09IHVuZGVmaW5lZCB8fCBiaW5kaW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgIHJlc2V0KClcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZXNldClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgdmFsdWUgaXMgZmFsc2UgbWVhbnMgd2UgZGlzYWJsZVxuICAgIC8vIGlmIHZhbHVlIGlzIGFueXRoaW5nIGVsc2UgbG9nIGVycm9yXG4gICAgaWYgKGJpbmRpbmcudmFsdWUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBwYXNzZWQgdmFsdWUgc2hvdWxkIGJlIGVpdGhlciBcXCd1bmRlZmluZWRcXCcsIFxcJ3RydWVcXCcgb3IgXFwnZmFsc2VcXCcuJylcbiAgICB9XG5cbiAgICAvLyB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlc2V0KVxuICAgIHUucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoZWwsIFBPSU5URVJfU1RBUlRfRVZFTlRTLCBlbC5tZClcbiAgICB1LnJlbW92ZUV2ZW50TGlzdGVuZXJzKHdpbmRvdywgUE9JTlRFUl9FTkRfRVZFTlRTLCBlbC5tdSlcbiAgICB1LnJlbW92ZUV2ZW50TGlzdGVuZXJzKHdpbmRvdywgUE9JTlRFUl9NT1ZFX0VWRU5UUywgZWwubW0pXG4gIH1cbn1cblxubGV0IGVtaXRFdmVudCA9IGZ1bmN0aW9uICh2bm9kZSwgZXZlbnROYW1lKSB7XG4gIC8vIElmIHZub2RlIGlzIGEgVnVlIGNvbXBvbmVudCBpbnN0YW5jZSwgdXNlICRlbWl0LiBPdGhlcndpc2UgdXNlIGEgbmF0aXZlIEhUTUwgZXZlbnQuXG4gIGlmICh2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkge1xuICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlLiRlbWl0KGV2ZW50TmFtZSlcbiAgfSBlbHNlIHtcbiAgICBsZXQgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKVxuICAgIGV2ZW50LmluaXRFdmVudChldmVudE5hbWUsIHRydWUsIHRydWUpXG4gICAgdm5vZGUuZWxtLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBiaW5kOiBmdW5jdGlvbiAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgaW5pdChlbCwgYmluZGluZywgdm5vZGUpXG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24gKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpIHtcbiAgICBpZiAoYmluZGluZy52YWx1ZSAhPT0gYmluZGluZy5vbGRWYWx1ZSkge1xuICAgICAgaW5pdChlbCwgYmluZGluZywgdm5vZGUpXG4gICAgfVxuICB9LFxuICB1bmJpbmQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICB1LnJlbW92ZUV2ZW50TGlzdGVuZXJzKGVsLCBQT0lOVEVSX1NUQVJUX0VWRU5UUywgZWwubWQpXG4gICAgdS5yZW1vdmVFdmVudExpc3RlbmVycyh3aW5kb3csIFBPSU5URVJfRU5EX0VWRU5UUywgZWwubXUpXG4gICAgdS5yZW1vdmVFdmVudExpc3RlbmVycyh3aW5kb3csIFBPSU5URVJfTU9WRV9FVkVOVFMsIGVsLm1tKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RpcmVjdGl2ZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  addEventListeners: function addEventListeners(el, events, handler) {\n    for (var i = 0, len = events.length; i < len; i++) {\n      el.addEventListener(events[i], handler);\n    }\n  },\n  removeEventListeners: function removeEventListeners(el, events, handler) {\n    for (var i = 0, len = events.length; i < len; i++) {\n      el.removeEventListener(events[i], handler);\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbHMuanM/MmI0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGFkZEV2ZW50TGlzdGVuZXJzIChlbCwgZXZlbnRzLCBoYW5kbGVyKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2ZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudHNbaV0sIGhhbmRsZXIpXG4gICAgfVxuICB9LFxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzIChlbCwgZXZlbnRzLCBoYW5kbGVyKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2ZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHNbaV0sIGhhbmRsZXIpXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3V0aWxzLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);
});