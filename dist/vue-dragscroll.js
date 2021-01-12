(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueDragScroll"] = factory();
	else
		root["VueDragScroll"] = factory();
})(window, function() {
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/directive.js":
/*!**************************!*\
  !*** ./src/directive.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\nvar POINTER_START_EVENTS = ['mousedown', 'touchstart'];\nvar POINTER_MOVE_EVENTS = ['mousemove', 'touchmove'];\nvar POINTER_END_EVENTS = ['mouseup', 'touchend'];\n\nvar init = function init(el, binding, vnode) {\n  // Default parameters\n  var target = el; // the element to apply the dragscroll on\n\n  var active = true; // enable/disable dragscroll\n\n  var container = window; // config type: boolean\n  // Example: v-dragscroll=\"true\" or v-dragscroll=\"false\"\n\n  if (typeof binding.value === 'boolean') {\n    active = binding.value;\n  } else if (_typeof(binding.value) === 'object') {\n    // config type: object\n    // Example: v-dragscroll=\"{ active: true , target: \"child\" }\"\n    // parameter: target\n    if (typeof binding.value.target === 'string') {\n      target = el.querySelector(binding.value.target);\n\n      if (!target) {\n        console.error('There is no element with the current target value.');\n      }\n    } else if (typeof binding.value.target !== 'undefined') {\n      console.error('The parameter \"target\" should be either \\'undefined\\' or \\'string\\'.');\n    } // parameter: container\n\n\n    if (typeof binding.value.container === 'string') {\n      container = document.querySelector(binding.value.container);\n\n      if (!container) {\n        console.error('There is no element with the current container value.');\n      }\n    } else if (typeof binding.value.container !== 'undefined') {\n      console.error('The parameter \"container\" should be be either \\'undefined\\' or \\'string\\'.');\n    } // parameter: active\n\n\n    if (typeof binding.value.active === 'boolean') {\n      active = binding.value.active;\n    } else if (typeof binding.value.active !== 'undefined') {\n      console.error('The parameter \"active\" value should be either \\'undefined\\', \\'true\\' or \\'false\\'.');\n    }\n  } else if (typeof binding.value !== 'undefined') {\n    // Throw an error if invalid parameters\n    console.error('The passed value should be either \\'undefined\\', \\'true\\' or \\'false\\' or \\'object\\'.');\n  }\n\n  var scrollBy = function scrollBy(x, y) {\n    if (container === window) {\n      window.scrollBy(x, y);\n    } else {\n      container.scrollLeft += x;\n      container.scrollTop += y;\n    }\n  };\n\n  var reset = function reset() {\n    var lastClientX, lastClientY, pushed;\n    var isDragging = false; // let isClick = false // workaround to handle click event from touch\n\n    target.md = function (e) {\n      // e.preventDefault()\n      var isMouseEvent = e instanceof window.MouseEvent; // The coordinates of the mouse pointer compared to the page when the mouse button is clicked on an element\n\n      var pageX = isMouseEvent ? e.pageX : e.touches[0].pageX;\n      var pageY = isMouseEvent ? e.pageY : e.touches[0].pageY;\n      var clickedElement = document.elementFromPoint(pageX - window.pageXOffset, pageY - window.pageYOffset);\n      var hasNoChildDrag = binding.arg === 'nochilddrag';\n      var ignoreLeft = binding.modifiers.noleft;\n      var ignoreRight = binding.modifiers.noright;\n      var ignoreMiddle = binding.modifiers.nomiddle;\n      var ignoreBack = binding.modifiers.noback;\n      var ignoreForward = binding.modifiers.noforward;\n      var hasFirstChildDrag = binding.arg === 'firstchilddrag';\n      var isEl = clickedElement === target;\n      var isFirstChild = clickedElement === target.firstChild;\n      var isDataDraggable = false;\n\n      if (isEl) {\n        isDataDraggable = true;\n      } else if (hasFirstChildDrag && isFirstChild) {\n        isDataDraggable = true;\n      } else if (typeof clickedElement.dataset.dragscroll !== 'undefined') {\n        isDataDraggable = true;\n      } else if (typeof clickedElement.dataset.noDragscroll !== 'undefined') {\n        isDataDraggable = false;\n      } else {\n        isDataDraggable = !hasNoChildDrag;\n        var clickedElementOrParent = clickedElement;\n\n        while (clickedElementOrParent && clickedElementOrParent !== target) {\n          if (typeof clickedElementOrParent.dataset.dragscrollNested !== 'undefined') {\n            isDataDraggable = true;\n            break;\n          } else if (typeof clickedElementOrParent.dataset.noDragscrollNested !== 'undefined') {\n            isDataDraggable = false;\n            break;\n          }\n\n          clickedElementOrParent = clickedElementOrParent.parentElement;\n        }\n      }\n\n      if (!isDataDraggable) {\n        return;\n      }\n\n      if (e.which === 1 && ignoreLeft) {\n        return;\n      } else if (e.which === 2 && ignoreMiddle) {\n        return;\n      } else if (e.which === 3 && ignoreRight) {\n        return;\n      } else if (e.which === 4 && ignoreBack) {\n        return;\n      } else if (e.which === 5 && ignoreForward) {\n        return;\n      }\n\n      pushed = 1; // The coordinates of the mouse pointer compared to the viewport when the mouse button is clicked on an element\n\n      lastClientX = isMouseEvent ? e.clientX : e.touches[0].clientX;\n      lastClientY = isMouseEvent ? e.clientY : e.touches[0].clientY; // if (e.type === 'touchstart') {\n      //   isClick = true\n      // }\n    };\n\n    target.mu = function (e) {\n      pushed = 0;\n\n      if (isDragging) {\n        _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emitEvent(vnode, 'dragscrollend');\n      }\n\n      isDragging = false; // if (e.type === 'touchend' && isClick === true) {\n      //   // this workaround enable click will using touch\n      //   e.target.click()\n      //   isClick = false\n      // } else {\n      //   e.target.focus()\n      // }\n    };\n\n    target.mm = function (e) {\n      var isMouseEvent = e instanceof window.MouseEvent;\n      var newScrollX, newScrollY;\n      var eventDetail = {};\n\n      if (pushed) {\n        e.preventDefault(); // pushed\n        // Emit start event\n\n        if (!isDragging) {\n          _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emitEvent(vnode, 'dragscrollstart');\n        }\n\n        isDragging = true; // when we reach the end or the begining of X or Y\n\n        var isEndX = target.scrollLeft + target.clientWidth >= target.scrollWidth || target.scrollLeft === 0;\n        var isEndY = target.scrollTop + target.clientHeight >= target.scrollHeight || target.scrollTop === 0; // get new scroll dimentions\n\n        newScrollX = -lastClientX + (lastClientX = isMouseEvent ? e.clientX : e.touches[0].clientX);\n        newScrollY = -lastClientY + (lastClientY = isMouseEvent ? e.clientY : e.touches[0].clientY);\n\n        if (binding.modifiers.pass) {\n          // compute and scroll\n          target.scrollLeft -= binding.modifiers.y ? -0 : newScrollX;\n          target.scrollTop -= binding.modifiers.x ? -0 : newScrollY;\n\n          if (target === document.body) {\n            target.scrollLeft -= binding.modifiers.y ? -0 : newScrollX;\n            target.scrollTop -= binding.modifiers.x ? -0 : newScrollY;\n          } // if one side reach the end scroll container\n\n\n          if (isEndX || binding.modifiers.y) {\n            scrollBy(-newScrollX, 0);\n          }\n\n          if (isEndY || binding.modifiers.x) {\n            scrollBy(0, -newScrollY);\n          }\n        } else {\n          // disable one scroll direction in case x or y is specified\n          if (binding.modifiers.x) newScrollY = -0;\n          if (binding.modifiers.y) newScrollX = -0; // compute and scroll\n\n          target.scrollLeft -= newScrollX;\n          target.scrollTop -= newScrollY;\n\n          if (target === document.body) {\n            target.scrollLeft -= newScrollX;\n            target.scrollTop -= newScrollY;\n          }\n        } // Emit events\n\n\n        eventDetail.deltaX = -newScrollX;\n        eventDetail.deltaY = -newScrollY;\n        _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emitEvent(vnode, 'dragscrollmove', eventDetail);\n      }\n    };\n\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addEventListeners(target, POINTER_START_EVENTS, target.md);\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addEventListeners(window, POINTER_END_EVENTS, target.mu);\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addEventListeners(window, POINTER_MOVE_EVENTS, target.mm);\n  }; // if value is undefined or true we will init\n\n\n  if (active) {\n    if (document.readyState === 'complete') {\n      reset();\n    } else {\n      window.addEventListener('load', reset);\n    }\n  } else {\n    // if value is false means we disable\n    // window.removeEventListener('load', reset)\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeEventListeners(target, POINTER_START_EVENTS, target.md);\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeEventListeners(window, POINTER_END_EVENTS, target.mu);\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeEventListeners(window, POINTER_MOVE_EVENTS, target.mm);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  inserted: function inserted(el, binding, vnode) {\n    init(el, binding, vnode);\n  },\n  update: function update(el, binding, vnode, oldVnode) {\n    // update the component only if the parameters change\n    if (JSON.stringify(binding.value) !== JSON.stringify(binding.oldValue)) {\n      init(el, binding, vnode);\n    }\n  },\n  unbind: function unbind(el, binding, vnode) {\n    var target = el;\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeEventListeners(target, POINTER_START_EVENTS, target.md);\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeEventListeners(window, POINTER_END_EVENTS, target.mu);\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeEventListeners(window, POINTER_MOVE_EVENTS, target.mm);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGlyZWN0aXZlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVnVlRHJhZ1Njcm9sbC8uL3NyYy9kaXJlY3RpdmUuanM/OGI0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdSBmcm9tICcuL3V0aWxzJ1xuXG5jb25zdCBQT0lOVEVSX1NUQVJUX0VWRU5UUyA9IFsnbW91c2Vkb3duJywgJ3RvdWNoc3RhcnQnXVxuY29uc3QgUE9JTlRFUl9NT1ZFX0VWRU5UUyA9IFsnbW91c2Vtb3ZlJywgJ3RvdWNobW92ZSddXG5jb25zdCBQT0lOVEVSX0VORF9FVkVOVFMgPSBbJ21vdXNldXAnLCAndG91Y2hlbmQnXVxuXG5jb25zdCBpbml0ID0gZnVuY3Rpb24gKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAvLyBEZWZhdWx0IHBhcmFtZXRlcnNcbiAgbGV0IHRhcmdldCA9IGVsIC8vIHRoZSBlbGVtZW50IHRvIGFwcGx5IHRoZSBkcmFnc2Nyb2xsIG9uXG4gIGxldCBhY3RpdmUgPSB0cnVlIC8vIGVuYWJsZS9kaXNhYmxlIGRyYWdzY3JvbGxcbiAgbGV0IGNvbnRhaW5lciA9IHdpbmRvd1xuXG4gIC8vIGNvbmZpZyB0eXBlOiBib29sZWFuXG4gIC8vIEV4YW1wbGU6IHYtZHJhZ3Njcm9sbD1cInRydWVcIiBvciB2LWRyYWdzY3JvbGw9XCJmYWxzZVwiXG4gIGlmICh0eXBlb2YgYmluZGluZy52YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgYWN0aXZlID0gYmluZGluZy52YWx1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBiaW5kaW5nLnZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIC8vIGNvbmZpZyB0eXBlOiBvYmplY3RcbiAgICAvLyBFeGFtcGxlOiB2LWRyYWdzY3JvbGw9XCJ7IGFjdGl2ZTogdHJ1ZSAsIHRhcmdldDogXCJjaGlsZFwiIH1cIlxuXG4gICAgLy8gcGFyYW1ldGVyOiB0YXJnZXRcbiAgICBpZiAodHlwZW9mIGJpbmRpbmcudmFsdWUudGFyZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGFyZ2V0ID0gZWwucXVlcnlTZWxlY3RvcihiaW5kaW5nLnZhbHVlLnRhcmdldClcbiAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIGlzIG5vIGVsZW1lbnQgd2l0aCB0aGUgY3VycmVudCB0YXJnZXQgdmFsdWUuJylcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBiaW5kaW5nLnZhbHVlLnRhcmdldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBwYXJhbWV0ZXIgXCJ0YXJnZXRcIiBzaG91bGQgYmUgZWl0aGVyIFxcJ3VuZGVmaW5lZFxcJyBvciBcXCdzdHJpbmdcXCcuJylcbiAgICB9XG4gICAgLy8gcGFyYW1ldGVyOiBjb250YWluZXJcbiAgICBpZiAodHlwZW9mIGJpbmRpbmcudmFsdWUuY29udGFpbmVyID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihiaW5kaW5nLnZhbHVlLmNvbnRhaW5lcilcbiAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIGlzIG5vIGVsZW1lbnQgd2l0aCB0aGUgY3VycmVudCBjb250YWluZXIgdmFsdWUuJylcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBiaW5kaW5nLnZhbHVlLmNvbnRhaW5lciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBwYXJhbWV0ZXIgXCJjb250YWluZXJcIiBzaG91bGQgYmUgYmUgZWl0aGVyIFxcJ3VuZGVmaW5lZFxcJyBvciBcXCdzdHJpbmdcXCcuJylcbiAgICB9XG5cbiAgICAvLyBwYXJhbWV0ZXI6IGFjdGl2ZVxuICAgIGlmICh0eXBlb2YgYmluZGluZy52YWx1ZS5hY3RpdmUgPT09ICdib29sZWFuJykge1xuICAgICAgYWN0aXZlID0gYmluZGluZy52YWx1ZS5hY3RpdmVcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBiaW5kaW5nLnZhbHVlLmFjdGl2ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBwYXJhbWV0ZXIgXCJhY3RpdmVcIiB2YWx1ZSBzaG91bGQgYmUgZWl0aGVyIFxcJ3VuZGVmaW5lZFxcJywgXFwndHJ1ZVxcJyBvciBcXCdmYWxzZVxcJy4nKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgYmluZGluZy52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBUaHJvdyBhbiBlcnJvciBpZiBpbnZhbGlkIHBhcmFtZXRlcnNcbiAgICBjb25zb2xlLmVycm9yKCdUaGUgcGFzc2VkIHZhbHVlIHNob3VsZCBiZSBlaXRoZXIgXFwndW5kZWZpbmVkXFwnLCBcXCd0cnVlXFwnIG9yIFxcJ2ZhbHNlXFwnIG9yIFxcJ29iamVjdFxcJy4nKVxuICB9XG5cbiAgdmFyIHNjcm9sbEJ5ID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICBpZiAoY29udGFpbmVyID09PSB3aW5kb3cpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxCeSh4LCB5KVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuc2Nyb2xsTGVmdCArPSB4XG4gICAgICBjb250YWluZXIuc2Nyb2xsVG9wICs9IHlcbiAgICB9XG4gIH1cblxuICB2YXIgcmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGxhc3RDbGllbnRYLCBsYXN0Q2xpZW50WSwgcHVzaGVkXG4gICAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIC8vIGxldCBpc0NsaWNrID0gZmFsc2UgLy8gd29ya2Fyb3VuZCB0byBoYW5kbGUgY2xpY2sgZXZlbnQgZnJvbSB0b3VjaFxuXG4gICAgdGFyZ2V0Lm1kID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc3QgaXNNb3VzZUV2ZW50ID0gZSBpbnN0YW5jZW9mIHdpbmRvdy5Nb3VzZUV2ZW50XG4gICAgICAvLyBUaGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1vdXNlIHBvaW50ZXIgY29tcGFyZWQgdG8gdGhlIHBhZ2Ugd2hlbiB0aGUgbW91c2UgYnV0dG9uIGlzIGNsaWNrZWQgb24gYW4gZWxlbWVudFxuICAgICAgY29uc3QgcGFnZVggPSBpc01vdXNlRXZlbnQgPyBlLnBhZ2VYIDogZS50b3VjaGVzWzBdLnBhZ2VYXG4gICAgICBjb25zdCBwYWdlWSA9IGlzTW91c2VFdmVudCA/IGUucGFnZVkgOiBlLnRvdWNoZXNbMF0ucGFnZVlcbiAgICAgIGNvbnN0IGNsaWNrZWRFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChwYWdlWCAtIHdpbmRvdy5wYWdlWE9mZnNldCwgcGFnZVkgLSB3aW5kb3cucGFnZVlPZmZzZXQpXG5cbiAgICAgIGNvbnN0IGhhc05vQ2hpbGREcmFnID0gYmluZGluZy5hcmcgPT09ICdub2NoaWxkZHJhZydcbiAgICAgIGNvbnN0IGlnbm9yZUxlZnQgPSBiaW5kaW5nLm1vZGlmaWVycy5ub2xlZnRcbiAgICAgIGNvbnN0IGlnbm9yZVJpZ2h0ID0gYmluZGluZy5tb2RpZmllcnMubm9yaWdodFxuICAgICAgY29uc3QgaWdub3JlTWlkZGxlID0gYmluZGluZy5tb2RpZmllcnMubm9taWRkbGVcbiAgICAgIGNvbnN0IGlnbm9yZUJhY2sgPSBiaW5kaW5nLm1vZGlmaWVycy5ub2JhY2tcbiAgICAgIGNvbnN0IGlnbm9yZUZvcndhcmQgPSBiaW5kaW5nLm1vZGlmaWVycy5ub2ZvcndhcmRcbiAgICAgIGNvbnN0IGhhc0ZpcnN0Q2hpbGREcmFnID0gYmluZGluZy5hcmcgPT09ICdmaXJzdGNoaWxkZHJhZydcbiAgICAgIGNvbnN0IGlzRWwgPSBjbGlja2VkRWxlbWVudCA9PT0gdGFyZ2V0XG4gICAgICBjb25zdCBpc0ZpcnN0Q2hpbGQgPSBjbGlja2VkRWxlbWVudCA9PT0gdGFyZ2V0LmZpcnN0Q2hpbGRcblxuICAgICAgbGV0IGlzRGF0YURyYWdnYWJsZSA9IGZhbHNlXG4gICAgICBpZiAoaXNFbCkge1xuICAgICAgICBpc0RhdGFEcmFnZ2FibGUgPSB0cnVlXG4gICAgICB9IGVsc2UgaWYgKGhhc0ZpcnN0Q2hpbGREcmFnICYmIGlzRmlyc3RDaGlsZCkge1xuICAgICAgICBpc0RhdGFEcmFnZ2FibGUgPSB0cnVlXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjbGlja2VkRWxlbWVudC5kYXRhc2V0LmRyYWdzY3JvbGwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlzRGF0YURyYWdnYWJsZSA9IHRydWVcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNsaWNrZWRFbGVtZW50LmRhdGFzZXQubm9EcmFnc2Nyb2xsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpc0RhdGFEcmFnZ2FibGUgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNEYXRhRHJhZ2dhYmxlID0gIWhhc05vQ2hpbGREcmFnXG4gICAgICAgIGxldCBjbGlja2VkRWxlbWVudE9yUGFyZW50ID0gY2xpY2tlZEVsZW1lbnRcbiAgICAgICAgd2hpbGUgKGNsaWNrZWRFbGVtZW50T3JQYXJlbnQgJiYgY2xpY2tlZEVsZW1lbnRPclBhcmVudCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjbGlja2VkRWxlbWVudE9yUGFyZW50LmRhdGFzZXQuZHJhZ3Njcm9sbE5lc3RlZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlzRGF0YURyYWdnYWJsZSA9IHRydWVcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY2xpY2tlZEVsZW1lbnRPclBhcmVudC5kYXRhc2V0Lm5vRHJhZ3Njcm9sbE5lc3RlZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlzRGF0YURyYWdnYWJsZSA9IGZhbHNlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICBjbGlja2VkRWxlbWVudE9yUGFyZW50ID0gY2xpY2tlZEVsZW1lbnRPclBhcmVudC5wYXJlbnRFbGVtZW50XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc0RhdGFEcmFnZ2FibGUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChlLndoaWNoID09PSAxICYmIGlnbm9yZUxlZnQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2UgaWYgKGUud2hpY2ggPT09IDIgJiYgaWdub3JlTWlkZGxlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIGlmIChlLndoaWNoID09PSAzICYmIGlnbm9yZVJpZ2h0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIGlmIChlLndoaWNoID09PSA0ICYmIGlnbm9yZUJhY2spIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2UgaWYgKGUud2hpY2ggPT09IDUgJiYgaWdub3JlRm9yd2FyZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgcHVzaGVkID0gMVxuICAgICAgLy8gVGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBtb3VzZSBwb2ludGVyIGNvbXBhcmVkIHRvIHRoZSB2aWV3cG9ydCB3aGVuIHRoZSBtb3VzZSBidXR0b24gaXMgY2xpY2tlZCBvbiBhbiBlbGVtZW50XG4gICAgICBsYXN0Q2xpZW50WCA9IGlzTW91c2VFdmVudCA/IGUuY2xpZW50WCA6IGUudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICBsYXN0Q2xpZW50WSA9IGlzTW91c2VFdmVudCA/IGUuY2xpZW50WSA6IGUudG91Y2hlc1swXS5jbGllbnRZXG4gICAgICAvLyBpZiAoZS50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgIC8vICAgaXNDbGljayA9IHRydWVcbiAgICAgIC8vIH1cbiAgICB9XG5cbiAgICB0YXJnZXQubXUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgcHVzaGVkID0gMFxuICAgICAgaWYgKGlzRHJhZ2dpbmcpIHtcbiAgICAgICAgdS5lbWl0RXZlbnQodm5vZGUsICdkcmFnc2Nyb2xsZW5kJylcbiAgICAgIH1cbiAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgICAgLy8gaWYgKGUudHlwZSA9PT0gJ3RvdWNoZW5kJyAmJiBpc0NsaWNrID09PSB0cnVlKSB7XG4gICAgICAvLyAgIC8vIHRoaXMgd29ya2Fyb3VuZCBlbmFibGUgY2xpY2sgd2lsbCB1c2luZyB0b3VjaFxuICAgICAgLy8gICBlLnRhcmdldC5jbGljaygpXG4gICAgICAvLyAgIGlzQ2xpY2sgPSBmYWxzZVxuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICAgZS50YXJnZXQuZm9jdXMoKVxuICAgICAgLy8gfVxuICAgIH1cblxuICAgIHRhcmdldC5tbSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb25zdCBpc01vdXNlRXZlbnQgPSBlIGluc3RhbmNlb2Ygd2luZG93Lk1vdXNlRXZlbnRcbiAgICAgIGxldCBuZXdTY3JvbGxYLCBuZXdTY3JvbGxZXG4gICAgICBjb25zdCBldmVudERldGFpbCA9IHt9XG4gICAgICBpZiAocHVzaGVkKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAvLyBwdXNoZWRcbiAgICAgICAgLy8gRW1pdCBzdGFydCBldmVudFxuICAgICAgICBpZiAoIWlzRHJhZ2dpbmcpIHtcbiAgICAgICAgICB1LmVtaXRFdmVudCh2bm9kZSwgJ2RyYWdzY3JvbGxzdGFydCcpXG4gICAgICAgIH1cbiAgICAgICAgaXNEcmFnZ2luZyA9IHRydWVcblxuICAgICAgICAvLyB3aGVuIHdlIHJlYWNoIHRoZSBlbmQgb3IgdGhlIGJlZ2luaW5nIG9mIFggb3IgWVxuICAgICAgICBjb25zdCBpc0VuZFggPSAoKHRhcmdldC5zY3JvbGxMZWZ0ICsgdGFyZ2V0LmNsaWVudFdpZHRoKSA+PSB0YXJnZXQuc2Nyb2xsV2lkdGgpIHx8IHRhcmdldC5zY3JvbGxMZWZ0ID09PSAwXG4gICAgICAgIGNvbnN0IGlzRW5kWSA9ICgodGFyZ2V0LnNjcm9sbFRvcCArIHRhcmdldC5jbGllbnRIZWlnaHQpID49IHRhcmdldC5zY3JvbGxIZWlnaHQpIHx8IHRhcmdldC5zY3JvbGxUb3AgPT09IDBcblxuICAgICAgICAvLyBnZXQgbmV3IHNjcm9sbCBkaW1lbnRpb25zXG4gICAgICAgIG5ld1Njcm9sbFggPSAoLWxhc3RDbGllbnRYICsgKGxhc3RDbGllbnRYID0gaXNNb3VzZUV2ZW50ID8gZS5jbGllbnRYIDogZS50b3VjaGVzWzBdLmNsaWVudFgpKVxuICAgICAgICBuZXdTY3JvbGxZID0gKC1sYXN0Q2xpZW50WSArIChsYXN0Q2xpZW50WSA9IGlzTW91c2VFdmVudCA/IGUuY2xpZW50WSA6IGUudG91Y2hlc1swXS5jbGllbnRZKSlcblxuICAgICAgICBpZiAoYmluZGluZy5tb2RpZmllcnMucGFzcykge1xuICAgICAgICAgIC8vIGNvbXB1dGUgYW5kIHNjcm9sbFxuICAgICAgICAgIHRhcmdldC5zY3JvbGxMZWZ0IC09IGJpbmRpbmcubW9kaWZpZXJzLnkgPyAtMCA6IG5ld1Njcm9sbFhcbiAgICAgICAgICB0YXJnZXQuc2Nyb2xsVG9wIC09IGJpbmRpbmcubW9kaWZpZXJzLnggPyAtMCA6IG5ld1Njcm9sbFlcbiAgICAgICAgICBpZiAodGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICB0YXJnZXQuc2Nyb2xsTGVmdCAtPSBiaW5kaW5nLm1vZGlmaWVycy55ID8gLTAgOiBuZXdTY3JvbGxYXG4gICAgICAgICAgICB0YXJnZXQuc2Nyb2xsVG9wIC09IGJpbmRpbmcubW9kaWZpZXJzLnggPyAtMCA6IG5ld1Njcm9sbFlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBpZiBvbmUgc2lkZSByZWFjaCB0aGUgZW5kIHNjcm9sbCBjb250YWluZXJcbiAgICAgICAgICBpZiAoaXNFbmRYIHx8IGJpbmRpbmcubW9kaWZpZXJzLnkpIHtcbiAgICAgICAgICAgIHNjcm9sbEJ5KC1uZXdTY3JvbGxYLCAwKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNFbmRZIHx8IGJpbmRpbmcubW9kaWZpZXJzLngpIHtcbiAgICAgICAgICAgIHNjcm9sbEJ5KDAsIC1uZXdTY3JvbGxZKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBkaXNhYmxlIG9uZSBzY3JvbGwgZGlyZWN0aW9uIGluIGNhc2UgeCBvciB5IGlzIHNwZWNpZmllZFxuICAgICAgICAgIGlmIChiaW5kaW5nLm1vZGlmaWVycy54KSBuZXdTY3JvbGxZID0gLTBcbiAgICAgICAgICBpZiAoYmluZGluZy5tb2RpZmllcnMueSkgbmV3U2Nyb2xsWCA9IC0wXG5cbiAgICAgICAgICAvLyBjb21wdXRlIGFuZCBzY3JvbGxcbiAgICAgICAgICB0YXJnZXQuc2Nyb2xsTGVmdCAtPSBuZXdTY3JvbGxYXG4gICAgICAgICAgdGFyZ2V0LnNjcm9sbFRvcCAtPSBuZXdTY3JvbGxZXG4gICAgICAgICAgaWYgKHRhcmdldCA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgdGFyZ2V0LnNjcm9sbExlZnQgLT0gbmV3U2Nyb2xsWFxuICAgICAgICAgICAgdGFyZ2V0LnNjcm9sbFRvcCAtPSBuZXdTY3JvbGxZXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRW1pdCBldmVudHNcbiAgICAgICAgZXZlbnREZXRhaWwuZGVsdGFYID0gLW5ld1Njcm9sbFhcbiAgICAgICAgZXZlbnREZXRhaWwuZGVsdGFZID0gLW5ld1Njcm9sbFlcbiAgICAgICAgdS5lbWl0RXZlbnQodm5vZGUsICdkcmFnc2Nyb2xsbW92ZScsIGV2ZW50RGV0YWlsKVxuICAgICAgfVxuICAgIH1cblxuICAgIHUuYWRkRXZlbnRMaXN0ZW5lcnModGFyZ2V0LCBQT0lOVEVSX1NUQVJUX0VWRU5UUywgdGFyZ2V0Lm1kKVxuXG4gICAgdS5hZGRFdmVudExpc3RlbmVycyh3aW5kb3csIFBPSU5URVJfRU5EX0VWRU5UUywgdGFyZ2V0Lm11KVxuXG4gICAgdS5hZGRFdmVudExpc3RlbmVycyh3aW5kb3csIFBPSU5URVJfTU9WRV9FVkVOVFMsIHRhcmdldC5tbSlcbiAgfVxuICAvLyBpZiB2YWx1ZSBpcyB1bmRlZmluZWQgb3IgdHJ1ZSB3ZSB3aWxsIGluaXRcbiAgaWYgKGFjdGl2ZSkge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICByZXNldCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgcmVzZXQpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGlmIHZhbHVlIGlzIGZhbHNlIG1lYW5zIHdlIGRpc2FibGVcbiAgICAvLyB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlc2V0KVxuICAgIHUucmVtb3ZlRXZlbnRMaXN0ZW5lcnModGFyZ2V0LCBQT0lOVEVSX1NUQVJUX0VWRU5UUywgdGFyZ2V0Lm1kKVxuICAgIHUucmVtb3ZlRXZlbnRMaXN0ZW5lcnMod2luZG93LCBQT0lOVEVSX0VORF9FVkVOVFMsIHRhcmdldC5tdSlcbiAgICB1LnJlbW92ZUV2ZW50TGlzdGVuZXJzKHdpbmRvdywgUE9JTlRFUl9NT1ZFX0VWRU5UUywgdGFyZ2V0Lm1tKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5zZXJ0ZWQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICBpbml0KGVsLCBiaW5kaW5nLCB2bm9kZSlcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiAoZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSkge1xuICAgIC8vIHVwZGF0ZSB0aGUgY29tcG9uZW50IG9ubHkgaWYgdGhlIHBhcmFtZXRlcnMgY2hhbmdlXG4gICAgaWYgKEpTT04uc3RyaW5naWZ5KGJpbmRpbmcudmFsdWUpICE9PSBKU09OLnN0cmluZ2lmeShiaW5kaW5nLm9sZFZhbHVlKSkge1xuICAgICAgaW5pdChlbCwgYmluZGluZywgdm5vZGUpXG4gICAgfVxuICB9LFxuICB1bmJpbmQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBlbFxuICAgIHUucmVtb3ZlRXZlbnRMaXN0ZW5lcnModGFyZ2V0LCBQT0lOVEVSX1NUQVJUX0VWRU5UUywgdGFyZ2V0Lm1kKVxuICAgIHUucmVtb3ZlRXZlbnRMaXN0ZW5lcnMod2luZG93LCBQT0lOVEVSX0VORF9FVkVOVFMsIHRhcmdldC5tdSlcbiAgICB1LnJlbW92ZUV2ZW50TGlzdGVuZXJzKHdpbmRvdywgUE9JTlRFUl9NT1ZFX0VWRU5UUywgdGFyZ2V0Lm1tKVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/directive.js\n");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: dragscroll, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive */ \"./src/directive.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dragscroll\", function() { return _directive__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\nvar VueDragscroll = {\n  install: function install(Vue, options) {\n    var major = Number(Vue.version.split('.')[0]);\n    var minor = Number(Vue.version.split('.')[1]);\n\n    if (major < 2 && minor < 1) {\n      throw new Error(\"v-dragscroll supports vue version 2.1 and above. You are using Vue@\".concat(Vue.version, \". Please upgrade to the latest version of Vue.\"));\n    } // registration\n\n\n    Vue.directive('dragscroll', _directive__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  }\n};\n\nif (typeof window !== 'undefined' && window.Vue) {\n  window.VueDragscroll = VueDragscroll;\n  window.Vue.use(VueDragscroll);\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VueDragscroll);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1Z1ZURyYWdTY3JvbGwvLi9zcmMvbWFpbi5qcz81NmQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkaXJlY3RpdmUgZnJvbSAnLi9kaXJlY3RpdmUnXG5cbmNvbnN0IFZ1ZURyYWdzY3JvbGwgPSB7XG4gIGluc3RhbGwgKFZ1ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IG1ham9yID0gTnVtYmVyKFZ1ZS52ZXJzaW9uLnNwbGl0KCcuJylbMF0pXG4gICAgY29uc3QgbWlub3IgPSBOdW1iZXIoVnVlLnZlcnNpb24uc3BsaXQoJy4nKVsxXSlcbiAgICBpZiAobWFqb3IgPCAyICYmIG1pbm9yIDwgMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB2LWRyYWdzY3JvbGwgc3VwcG9ydHMgdnVlIHZlcnNpb24gMi4xIGFuZCBhYm92ZS4gWW91IGFyZSB1c2luZyBWdWVAJHtWdWUudmVyc2lvbn0uIFBsZWFzZSB1cGdyYWRlIHRvIHRoZSBsYXRlc3QgdmVyc2lvbiBvZiBWdWUuYClcbiAgICB9XG4gICAgLy8gcmVnaXN0cmF0aW9uXG4gICAgVnVlLmRpcmVjdGl2ZSgnZHJhZ3Njcm9sbCcsIGRpcmVjdGl2ZSlcbiAgfVxufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlZ1ZSkge1xuICB3aW5kb3cuVnVlRHJhZ3Njcm9sbCA9IFZ1ZURyYWdzY3JvbGxcbiAgd2luZG93LlZ1ZS51c2UoVnVlRHJhZ3Njcm9sbClcbn1cblxuZXhwb3J0IHsgZGlyZWN0aXZlIGFzIGRyYWdzY3JvbGwgfVxuZXhwb3J0IGRlZmF1bHQgVnVlRHJhZ3Njcm9sbFxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBVEE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  addEventListeners: function addEventListeners(el, events, handler) {\n    for (var i = 0, len = events.length; i < len; i++) {\n      el.addEventListener(events[i], handler, {\n        passive: false\n      });\n    }\n  },\n  removeEventListeners: function removeEventListeners(el, events, handler) {\n    for (var i = 0, len = events.length; i < len; i++) {\n      el.removeEventListener(events[i], handler, {\n        passive: false\n      });\n    }\n  },\n  emitEvent: function emitEvent(vnode, eventName, eventDetail) {\n    // If vnode is a Vue component instance, use $emit. Otherwise use a native HTML event.\n    if (vnode.componentInstance) {\n      vnode.componentInstance.$emit(eventName, eventDetail);\n    } else {\n      var event;\n\n      if (typeof window.CustomEvent === 'function') {\n        event = new window.CustomEvent(eventName, {\n          detail: eventDetail\n        });\n      } else {\n        // Deprecated fallback for IE\n        event = document.createEvent('CustomEvent');\n        event.initCustomEvent(eventName, true, true, eventDetail);\n      }\n\n      vnode.elm.dispatchEvent(event);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9WdWVEcmFnU2Nyb2xsLy4vc3JjL3V0aWxzLmpzPzAyNWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBhZGRFdmVudExpc3RlbmVycyAoZWwsIGV2ZW50cywgaGFuZGxlcikge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBldmVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzW2ldLCBoYW5kbGVyLCB7IHBhc3NpdmU6IGZhbHNlIH0pXG4gICAgfVxuICB9LFxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzIChlbCwgZXZlbnRzLCBoYW5kbGVyKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2ZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHNbaV0sIGhhbmRsZXIsIHsgcGFzc2l2ZTogZmFsc2UgfSlcbiAgICB9XG4gIH0sXG5cbiAgZW1pdEV2ZW50OiBmdW5jdGlvbiAodm5vZGUsIGV2ZW50TmFtZSwgZXZlbnREZXRhaWwpIHtcbiAgICAvLyBJZiB2bm9kZSBpcyBhIFZ1ZSBjb21wb25lbnQgaW5zdGFuY2UsIHVzZSAkZW1pdC4gT3RoZXJ3aXNlIHVzZSBhIG5hdGl2ZSBIVE1MIGV2ZW50LlxuICAgIGlmICh2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkge1xuICAgICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UuJGVtaXQoZXZlbnROYW1lLCBldmVudERldGFpbClcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGV2ZW50XG4gICAgICBpZiAodHlwZW9mICh3aW5kb3cuQ3VzdG9tRXZlbnQpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGV2ZW50ID0gbmV3IHdpbmRvdy5DdXN0b21FdmVudChldmVudE5hbWUsIHsgZGV0YWlsOiBldmVudERldGFpbCB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRGVwcmVjYXRlZCBmYWxsYmFjayBmb3IgSUVcbiAgICAgICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgICAgICBldmVudC5pbml0Q3VzdG9tRXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlLCBldmVudERldGFpbClcbiAgICAgIH1cbiAgICAgIHZub2RlLmVsbS5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgIH1cbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUE1QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils.js\n");

/***/ })

/******/ });
});