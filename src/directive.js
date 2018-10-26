import u from './utils'

const POINTER_START_EVENTS = ['mousedown', 'touchstart']
const POINTER_MOVE_EVENTS = ['mousemove', 'touchmove']
const POINTER_END_EVENTS = ['mouseup', 'touchend']
// const POINTER_START_EVENTS = ['mousedown']
// const POINTER_MOVE_EVENTS = ['mousemove']
// const POINTER_END_EVENTS = ['mouseup']

// [Polyfill] Adding CustomEvent to IE
// (function () {
//   if (typeof window.CustomEvent === 'function') return false

//   function CustomEvent (event, params) {
//     params = params || { bubbles: false, cancelable: false, detail: undefined }
//     var evt = document.createEvent('CustomEvent')
//     evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail)
//     return evt
//   }

//   CustomEvent.prototype = window.Event.prototype

//   window.CustomEvent = CustomEvent
// })()
// [Polyfill] End Adding CustomEvent to IE

let init = function (el, binding, vnode) {
  var reset = function () {
    let lastClientX, lastClientY, pushed
    let isDragging = false
    // let isTouchDevice = ('ontouchstart' in window) || false

    el.md = function (e) {
      let pageX = e.pageX ? e.pageX : e.touches[0].pageX
      let pageY = e.pageY ? e.pageY : e.touches[0].pageY

      let hasNoChildDrag = binding.arg === 'nochilddrag'
      let hasFirstChildDrag = binding.arg === 'firstchilddrag'
      let isEl = document.elementFromPoint(pageX - window.pageXOffset, pageY - window.pageYOffset) === el
      let isFirstChild = document.elementFromPoint(pageX - window.pageXOffset, pageY - window.pageYOffset) === el.firstChild

      let start = (e) => {
        pushed = 1
        lastClientX = e.clientX ? e.clientX : e.touches[0].clientX
        lastClientY = e.clientY ? e.clientY : e.touches[0].clientY
        e.preventDefault()
      }

      if (hasNoChildDrag) {
        if (isEl) {
          start(e)
        }
      } else if (hasFirstChildDrag) {
        if (isEl || isFirstChild) {
          start(e)
        }
      } else {
        start(e)
      }
    }

    el.mu = function (e) {
      pushed = 0
      if (isDragging) {
        emitEvent(vnode, 'dragscrollend')
      }
      isDragging = false
    }

    el.mm = function (e) {
      let newScrollX, newScrollY
      let eventDetail = {}
      if (pushed) {
        if (!isDragging) {
          emitEvent(vnode, 'dragscrollstart')
        }
        isDragging = true
        if (binding.modifiers.x) {
          newScrollX = (-lastClientX + (lastClientX = e.clientX ? e.clientX : e.touches[0].clientX))
          el.scrollLeft -= newScrollX
          if (el === document.body) {
            el.scrollLeft -= newScrollX
          }
          eventDetail.deltaX = -newScrollX
        } else if (binding.modifiers.y) {
          newScrollY = (-lastClientY + (lastClientY = e.clientY ? e.clientY : e.touches[0].clientY))
          el.scrollTop -= newScrollY
          if (el === document.body) {
            el.scrollTop -= newScrollY
          }
          eventDetail.deltaY = -newScrollY
        } else {
          newScrollX = (-lastClientX + (lastClientX = e.clientX ? e.clientX : e.touches[0].clientX))
          newScrollY = (-lastClientY + (lastClientY = e.clientY ? e.clientY : e.touches[0].clientY))
          el.scrollLeft -= newScrollX
          el.scrollTop -= newScrollY
          if (el === document.body) {
            el.scrollLeft -= newScrollX
            el.scrollTop -= newScrollY
          }
          eventDetail.deltaX = -newScrollX
          eventDetail.deltaY = -newScrollY
        }
        emitEvent(vnode, 'dragscrollmove', eventDetail)
      }
    }

    u.addEventListeners(el, POINTER_START_EVENTS, el.md)

    u.addEventListeners(window, POINTER_END_EVENTS, el.mu)

    u.addEventListeners(window, POINTER_MOVE_EVENTS, el.mm)
  }
  // if value is undefined or true we will init
  if (binding.value === undefined || binding.value === true) {
    if (document.readyState === 'complete') {
      reset()
    } else {
      window.addEventListener('load', reset)
    }
  } else {
    // if value is false means we disable
    // if value is anything else log error
    if (binding.value) {
      console.error('The passed value should be either \'undefined\', \'true\' or \'false\'.')
    }

    // window.removeEventListener('load', reset)
    u.removeEventListeners(el, POINTER_START_EVENTS, el.md)
    u.removeEventListeners(window, POINTER_END_EVENTS, el.mu)
    u.removeEventListeners(window, POINTER_MOVE_EVENTS, el.mm)
  }
}

let emitEvent = function (vnode, eventName, eventDetail) {
  // If vnode is a Vue component instance, use $emit. Otherwise use a native HTML event.
  if (vnode.componentInstance) {
    vnode.componentInstance.$emit(eventName, eventDetail)
  } else {
    let event
    if (typeof (window.CustomEvent) === 'function') {
      event = new window.CustomEvent(eventName, { detail: eventDetail })
    } else {
      // Deprecated fallback for IE
      event = document.createEvent('CustomEvent')
      event.initCustomEvent(eventName, true, true, eventDetail)
    }
    vnode.elm.dispatchEvent(event)
  }
}

export default {
  bind: function (el, binding, vnode) {
    init(el, binding, vnode)
  },
  update: function (el, binding, vnode, oldVnode) {
    if (binding.value !== binding.oldValue) {
      init(el, binding, vnode)
    }
  },
  unbind: function (el, binding, vnode) {
    u.removeEventListeners(el, POINTER_START_EVENTS, el.md)
    u.removeEventListeners(window, POINTER_END_EVENTS, el.mu)
    u.removeEventListeners(window, POINTER_MOVE_EVENTS, el.mm)
  }
}
