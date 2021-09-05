(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueDragScroll"] = factory();
	else
		root["VueDragScroll"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/directive-next.js":
/*!*******************************!*\
  !*** ./src/directive-next.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var POINTER_START_EVENTS = ['mousedown', 'touchstart'];
var POINTER_MOVE_EVENTS = ['mousemove', 'touchmove'];
var POINTER_END_EVENTS = ['mouseup', 'touchend'];

var init = function init(el, binding, vnode) {
  // Default parameters
  var target = el; // the element to apply the dragscroll on

  var active = true; // enable/disable dragscroll

  var container = window; // config type: boolean
  // Example: v-dragscroll="true" or v-dragscroll="false"

  if (typeof binding.value === 'boolean') {
    active = binding.value;
  } else if (_typeof(binding.value) === 'object') {
    // config type: object
    // Example: v-dragscroll="{ active: true , target: "child" }"
    // parameter: target
    if (typeof binding.value.target === 'string') {
      target = el.querySelector(binding.value.target);

      if (!target) {
        console.error('There is no element with the current target value.');
      }
    } else if (typeof binding.value.target !== 'undefined') {
      console.error('The parameter "target" should be either \'undefined\' or \'string\'.');
    } // parameter: container


    if (typeof binding.value.container === 'string') {
      container = document.querySelector(binding.value.container);

      if (!container) {
        console.error('There is no element with the current container value.');
      }
    } else if (typeof binding.value.container !== 'undefined') {
      console.error('The parameter "container" should be be either \'undefined\' or \'string\'.');
    } // parameter: active


    if (typeof binding.value.active === 'boolean') {
      active = binding.value.active;
    } else if (typeof binding.value.active !== 'undefined') {
      console.error('The parameter "active" value should be either \'undefined\', \'true\' or \'false\'.');
    }
  } else if (typeof binding.value !== 'undefined') {
    // Throw an error if invalid parameters
    console.error('The passed value should be either \'undefined\', \'true\' or \'false\' or \'object\'.');
  }

  var scrollBy = function scrollBy(x, y) {
    if (container === window) {
      window.scrollBy(x, y);
    } else {
      container.scrollLeft += x;
      container.scrollTop += y;
    }
  };

  var reset = function reset() {
    var lastClientX, lastClientY, pushed;
    var isDragging = false; // let isClick = false // workaround to handle click event from touch

    target.md = function (e) {
      // e.preventDefault()
      var isMouseEvent = e instanceof window.MouseEvent; // The coordinates of the mouse pointer compared to the page when the mouse button is clicked on an element

      var pageX = isMouseEvent ? e.pageX : e.touches[0].pageX;
      var pageY = isMouseEvent ? e.pageY : e.touches[0].pageY;
      var clickedElement = document.elementFromPoint(pageX - window.pageXOffset, pageY - window.pageYOffset);
      var hasNoChildDrag = binding.arg === 'nochilddrag';
      var ignoreLeft = binding.modifiers.noleft;
      var ignoreRight = binding.modifiers.noright;
      var ignoreMiddle = binding.modifiers.nomiddle;
      var ignoreBack = binding.modifiers.noback;
      var ignoreForward = binding.modifiers.noforward;
      var hasFirstChildDrag = binding.arg === 'firstchilddrag';
      var isEl = clickedElement === target;
      var isFirstChild = clickedElement === target.firstChild;
      var isDataDraggable = hasNoChildDrag ? typeof clickedElement.dataset.dragscroll !== 'undefined' : typeof clickedElement.dataset.noDragscroll === 'undefined';

      if (!isEl && (!isDataDraggable || hasFirstChildDrag && !isFirstChild)) {
        return;
      }

      if (e.which === 1 && ignoreLeft) {
        return;
      } else if (e.which === 2 && ignoreMiddle) {
        return;
      } else if (e.which === 3 && ignoreRight) {
        return;
      } else if (e.which === 4 && ignoreBack) {
        return;
      } else if (e.which === 5 && ignoreForward) {
        return;
      }

      pushed = 1; // The coordinates of the mouse pointer compared to the viewport when the mouse button is clicked on an element

      lastClientX = isMouseEvent ? e.clientX : e.touches[0].clientX;
      lastClientY = isMouseEvent ? e.clientY : e.touches[0].clientY; // if (e.type === 'touchstart') {
      //   isClick = true
      // }
    };

    target.mu = function (e) {
      pushed = 0;

      if (isDragging) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["default"].emitEvent2(vnode, 'dragscrollend');
      }

      isDragging = false; // if (e.type === 'touchend' && isClick === true) {
      //   // this workaround enable click will using touch
      //   e.target.click()
      //   isClick = false
      // } else {
      //   e.target.focus()
      // }
    };

    target.mm = function (e) {
      var isMouseEvent = e instanceof window.MouseEvent;
      var newScrollX, newScrollY;
      var eventDetail = {};

      if (pushed) {
        e.preventDefault(); // pushed
        // Emit start event

        if (!isDragging) {
          _utils__WEBPACK_IMPORTED_MODULE_0__["default"].emitEvent2(vnode, 'dragscrollstart');
        }

        isDragging = true; // when we reach the end or the begining of X or Y

        var isEndX = target.scrollLeft + target.clientWidth >= target.scrollWidth || target.scrollLeft === 0;
        var isEndY = target.scrollTop + target.clientHeight >= target.scrollHeight || target.scrollTop === 0; // get new scroll dimentions

        newScrollX = -lastClientX + (lastClientX = isMouseEvent ? e.clientX : e.touches[0].clientX);
        newScrollY = -lastClientY + (lastClientY = isMouseEvent ? e.clientY : e.touches[0].clientY);

        if (binding.modifiers.pass) {
          // compute and scroll
          target.scrollLeft -= binding.modifiers.y ? -0 : newScrollX;
          target.scrollTop -= binding.modifiers.x ? -0 : newScrollY;

          if (target === document.body) {
            target.scrollLeft -= binding.modifiers.y ? -0 : newScrollX;
            target.scrollTop -= binding.modifiers.x ? -0 : newScrollY;
          } // if one side reach the end scroll container


          if (isEndX || binding.modifiers.y) {
            scrollBy(-newScrollX, 0);
          }

          if (isEndY || binding.modifiers.x) {
            scrollBy(0, -newScrollY);
          }
        } else {
          // disable one scroll direction in case x or y is specified
          if (binding.modifiers.x) newScrollY = -0;
          if (binding.modifiers.y) newScrollX = -0; // compute and scroll

          target.scrollLeft -= newScrollX;
          target.scrollTop -= newScrollY;

          if (target === document.body) {
            target.scrollLeft -= newScrollX;
            target.scrollTop -= newScrollY;
          }
        } // Emit events


        eventDetail.deltaX = -newScrollX;
        eventDetail.deltaY = -newScrollY;
        _utils__WEBPACK_IMPORTED_MODULE_0__["default"].emitEvent2(vnode, 'dragscrollmove', eventDetail);
      }
    };

    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListeners(target, POINTER_START_EVENTS, target.md);
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListeners(window, POINTER_END_EVENTS, target.mu);
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListeners(window, POINTER_MOVE_EVENTS, target.mm);
  }; // if value is undefined or true we will init


  if (active) {
    if (document.readyState === 'complete') {
      reset();
    } else {
      window.addEventListener('load', reset);
    }
  } else {
    // if value is false means we disable
    // window.removeEventListener('load', reset)
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].removeEventListeners(target, POINTER_START_EVENTS, target.md);
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].removeEventListeners(window, POINTER_END_EVENTS, target.mu);
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].removeEventListeners(window, POINTER_MOVE_EVENTS, target.mm);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted(el, binding, vnode) {
    init(el, binding, vnode);
  },
  updated: function updated(el, binding, vnode, oldVnode) {
    // update the component only if the parameters change
    if (JSON.stringify(binding.value) !== JSON.stringify(binding.oldValue)) {
      init(el, binding, vnode);
    }
  },
  unmounted: function unmounted(el, binding, vnode) {
    var target = el;
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].removeEventListeners(target, POINTER_START_EVENTS, target.md);
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].removeEventListeners(window, POINTER_END_EVENTS, target.mu);
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].removeEventListeners(window, POINTER_MOVE_EVENTS, target.mm);
  }
});

/***/ }),

/***/ "./src/directive.js":
/*!**************************!*\
  !*** ./src/directive.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var POINTER_START_EVENTS = ['mousedown', 'touchstart'];
var POINTER_MOVE_EVENTS = ['mousemove', 'touchmove'];
var POINTER_END_EVENTS = ['mouseup', 'touchend'];

var init = function init(el, binding, vnode) {
  // Default parameters
  var target = el; // the element to apply the dragscroll on

  var active = true; // enable/disable dragscroll

  var container = window; // config type: boolean
  // Example: v-dragscroll="true" or v-dragscroll="false"

  if (typeof binding.value === 'boolean') {
    active = binding.value;
  } else if (_typeof(binding.value) === 'object') {
    // config type: object
    // Example: v-dragscroll="{ active: true , target: "child" }"
    // parameter: target
    if (typeof binding.value.target === 'string') {
      target = el.querySelector(binding.value.target);

      if (!target) {
        console.error('There is no element with the current target value.');
      }
    } else if (typeof binding.value.target !== 'undefined') {
      console.error('The parameter "target" should be either \'undefined\' or \'string\'.');
    } // parameter: container


    if (typeof binding.value.container === 'string') {
      container = document.querySelector(binding.value.container);

      if (!container) {
        console.error('There is no element with the current container value.');
      }
    } else if (typeof binding.value.container !== 'undefined') {
      console.error('The parameter "container" should be be either \'undefined\' or \'string\'.');
    } // parameter: active


    if (typeof binding.value.active === 'boolean') {
      active = binding.value.active;
    } else if (typeof binding.value.active !== 'undefined') {
      console.error('The parameter "active" value should be either \'undefined\', \'true\' or \'false\'.');
    }
  } else if (typeof binding.value !== 'undefined') {
    // Throw an error if invalid parameters
    console.error('The passed value should be either \'undefined\', \'true\' or \'false\' or \'object\'.');
  }

  var scrollBy = function scrollBy(x, y) {
    if (container === window) {
      window.scrollBy(x, y);
    } else {
      container.scrollLeft += x;
      container.scrollTop += y;
    }
  };

  var reset = function reset() {
    var lastClientX, lastClientY, pushed;
    var isDragging = false; // let isClick = false // workaround to handle click event from touch

    target.md = function (e) {
      // e.preventDefault()
      var isMouseEvent = e instanceof window.MouseEvent; // The coordinates of the mouse pointer compared to the page when the mouse button is clicked on an element

      var pageX = isMouseEvent ? e.pageX : e.touches[0].pageX;
      var pageY = isMouseEvent ? e.pageY : e.touches[0].pageY;
      var clickedElement = document.elementFromPoint(pageX - window.pageXOffset, pageY - window.pageYOffset);
      var hasNoChildDrag = binding.arg === 'nochilddrag';
      var ignoreLeft = binding.modifiers.noleft;
      var ignoreRight = binding.modifiers.noright;
      var ignoreMiddle = binding.modifiers.nomiddle;
      var ignoreBack = binding.modifiers.noback;
      var ignoreForward = binding.modifiers.noforward;
      var hasFirstChildDrag = binding.arg === 'firstchilddrag';
      var isEl = clickedElement === target;
      var isFirstChild = clickedElement === target.firstChild;
      var isDataDraggable = hasNoChildDrag ? typeof clickedElement.dataset.dragscroll !== 'undefined' : typeof clickedElement.dataset.noDragscroll === 'undefined';

      if (!isEl && (!isDataDraggable || hasFirstChildDrag && !isFirstChild)) {
        return;
      }

      if (e.which === 1 && ignoreLeft) {
        return;
      } else if (e.which === 2 && ignoreMiddle) {
        return;
      } else if (e.which === 3 && ignoreRight) {
        return;
      } else if (e.which === 4 && ignoreBack) {
        return;
      } else if (e.which === 5 && ignoreForward) {
        return;
      }

      pushed = 1; // The coordinates of the mouse pointer compared to the viewport when the mouse button is clicked on an element

      lastClientX = isMouseEvent ? e.clientX : e.touches[0].clientX;
      lastClientY = isMouseEvent ? e.clientY : e.touches[0].clientY; // if (e.type === 'touchstart') {
      //   isClick = true
      // }
    };

    target.mu = function (e) {
      pushed = 0;

      if (isDragging) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["default"].emitEvent(vnode, 'dragscrollend');
      }

      isDragging = false; // if (e.type === 'touchend' && isClick === true) {
      //   // this workaround enable click will using touch
      //   e.target.click()
      //   isClick = false
      // } else {
      //   e.target.focus()
      // }
    };

    target.mm = function (e) {
      var isMouseEvent = e instanceof window.MouseEvent;
      var newScrollX, newScrollY;
      var eventDetail = {};

      if (pushed) {
        e.preventDefault(); // pushed
        // Emit start event

        if (!isDragging) {
          _utils__WEBPACK_IMPORTED_MODULE_0__["default"].emitEvent(vnode, 'dragscrollstart');
        }

        isDragging = true; // when we reach the end or the begining of X or Y

        var isEndX = target.scrollLeft + target.clientWidth >= target.scrollWidth || target.scrollLeft === 0;
        var isEndY = target.scrollTop + target.clientHeight >= target.scrollHeight || target.scrollTop === 0; // get new scroll dimentions

        newScrollX = -lastClientX + (lastClientX = isMouseEvent ? e.clientX : e.touches[0].clientX);
        newScrollY = -lastClientY + (lastClientY = isMouseEvent ? e.clientY : e.touches[0].clientY);

        if (binding.modifiers.pass) {
          // compute and scroll
          target.scrollLeft -= binding.modifiers.y ? -0 : newScrollX;
          target.scrollTop -= binding.modifiers.x ? -0 : newScrollY;

          if (target === document.body) {
            target.scrollLeft -= binding.modifiers.y ? -0 : newScrollX;
            target.scrollTop -= binding.modifiers.x ? -0 : newScrollY;
          } // if one side reach the end scroll container


          if (isEndX || binding.modifiers.y) {
            scrollBy(-newScrollX, 0);
          }

          if (isEndY || binding.modifiers.x) {
            scrollBy(0, -newScrollY);
          }
        } else {
          // disable one scroll direction in case x or y is specified
          if (binding.modifiers.x) newScrollY = -0;
          if (binding.modifiers.y) newScrollX = -0; // compute and scroll

          target.scrollLeft -= newScrollX;
          target.scrollTop -= newScrollY;

          if (target === document.body) {
            target.scrollLeft -= newScrollX;
            target.scrollTop -= newScrollY;
          }
        } // Emit events


        eventDetail.deltaX = -newScrollX;
        eventDetail.deltaY = -newScrollY;
        _utils__WEBPACK_IMPORTED_MODULE_0__["default"].emitEvent(vnode, 'dragscrollmove', eventDetail);
      }
    };

    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListeners(target, POINTER_START_EVENTS, target.md);
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListeners(window, POINTER_END_EVENTS, target.mu);
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListeners(window, POINTER_MOVE_EVENTS, target.mm);
  }; // if value is undefined or true we will init


  if (active) {
    if (document.readyState === 'complete') {
      reset();
    } else {
      window.addEventListener('load', reset);
    }
  } else {
    // if value is false means we disable
    // window.removeEventListener('load', reset)
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].removeEventListeners(target, POINTER_START_EVENTS, target.md);
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].removeEventListeners(window, POINTER_END_EVENTS, target.mu);
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].removeEventListeners(window, POINTER_MOVE_EVENTS, target.mm);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  inserted: function inserted(el, binding, vnode) {
    init(el, binding, vnode);
  },
  update: function update(el, binding, vnode, oldVnode) {
    // update the component only if the parameters change
    if (JSON.stringify(binding.value) !== JSON.stringify(binding.oldValue)) {
      init(el, binding, vnode);
    }
  },
  unbind: function unbind(el, binding, vnode) {
    var target = el;
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].removeEventListeners(target, POINTER_START_EVENTS, target.md);
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].removeEventListeners(window, POINTER_END_EVENTS, target.mu);
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].removeEventListeners(window, POINTER_MOVE_EVENTS, target.mm);
  }
});

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  addEventListeners: function addEventListeners(el, events, handler) {
    for (var i = 0, len = events.length; i < len; i++) {
      el.addEventListener(events[i], handler, {
        passive: false
      });
    }
  },
  removeEventListeners: function removeEventListeners(el, events, handler) {
    for (var i = 0, len = events.length; i < len; i++) {
      el.removeEventListener(events[i], handler, {
        passive: false
      });
    }
  },
  emitEvent: function emitEvent(vnode, eventName, eventDetail) {
    // Vue 2
    // If vnode is a Vue component instance, use $emit. Otherwise use a native HTML event.
    if (vnode.componentInstance) {
      vnode.componentInstance.$emit(eventName, eventDetail);
    } else {
      var event;

      if (typeof window.CustomEvent === 'function') {
        event = new window.CustomEvent(eventName, {
          detail: eventDetail
        });
      } else {
        // Deprecated fallback for IE
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true, eventDetail);
      }

      vnode.elm.dispatchEvent(event);
    }
  },
  emitEvent2: function emitEvent2(vnode, eventName, eventDetail) {
    // Vue 3
    // If vnode is a Vue component instance, use $emit. Otherwise use a native HTML event.
    if (vnode.componentInstance) {
      vnode.componentInstance.$emit(eventName, eventDetail);
    } else {
      var event;

      if (typeof window.CustomEvent === 'function') {
        event = new window.CustomEvent(eventName, {
          detail: eventDetail
        });
      } else {
        // Deprecated fallback for IE
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true, eventDetail);
      }

      vnode.el.dispatchEvent(event);
    }
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dragscroll": () => (/* reexport safe */ _directive__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "dragscrollNext": () => (/* reexport safe */ _directive_next__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive */ "./src/directive.js");
/* harmony import */ var _directive_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directive-next */ "./src/directive-next.js");

 // Vue 2

var VueDragscroll = {
  install: function install(Vue, options) {
    var major = Number(Vue.version.split('.')[0]);
    var minor = Number(Vue.version.split('.')[1]);

    if (major < 2 && minor < 1) {
      throw new Error("v-dragscroll supports vue version 2.1 and above. You are using Vue@".concat(Vue.version, ". Please upgrade to the latest version of Vue."));
    }

    Vue.directive('dragscroll', _directive__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  if (window.Vue.version.split('.')[0] <= 2) {
    window.VueDragscroll = VueDragscroll;
    window.Vue.use(VueDragscroll);
  } else {
    window.VueDragscroll = _directive_next__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VueDragscroll);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=vue-dragscroll.js.map