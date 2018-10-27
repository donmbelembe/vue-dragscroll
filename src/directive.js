import u from './utils'

const POINTER_START_EVENTS = ['mousedown', 'touchstart']
const POINTER_MOVE_EVENTS = ['mousemove', 'touchmove']
const POINTER_END_EVENTS = ['mouseup', 'touchend']

let init = function (el, binding, vnode) {
  var reset = function () {
    let lastClientX, lastClientY, pushed
    let isDragging = false
    let isClick = false // workaround to handle click event from touch

    el.md = function (e) {
      // The coordinates of the mouse pointer compared to the page when the mouse button is clicked on an element
      let pageX = e.pageX ? e.pageX : e.touches[0].pageX
      let pageY = e.pageY ? e.pageY : e.touches[0].pageY

      let hasNoChildDrag = binding.arg === 'nochilddrag'
      let hasFirstChildDrag = binding.arg === 'firstchilddrag'
      let isEl = document.elementFromPoint(pageX - window.pageXOffset, pageY - window.pageYOffset) === el
      let isFirstChild = document.elementFromPoint(pageX - window.pageXOffset, pageY - window.pageYOffset) === el.firstChild

      let start = (e) => {
        pushed = 1
        // The coordinates of the mouse pointer compared to the viewport when the mouse button is clicked on an element
        lastClientX = e.clientX ? e.clientX : e.touches[0].clientX
        lastClientY = e.clientY ? e.clientY : e.touches[0].clientY
        e.preventDefault()
        if (e.type === 'touchstart') {
          isClick = true
        }
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
        u.emitEvent(vnode, 'dragscrollend')
      }
      isDragging = false
      if (e.type === 'touchend' && isClick === true) {
        e.target.click()
        isClick = false
      }
    }

    el.mm = function (e) {
      let newScrollX, newScrollY
      let eventDetail = {}
      if (pushed) {
        if (!isDragging) {
          u.emitEvent(vnode, 'dragscrollstart')
        }
        isDragging = true
        if (binding.modifiers.x) { // Scroll is enabled on axis only
          newScrollX = (-lastClientX + (lastClientX = e.clientX ? e.clientX : e.touches[0].clientX))
          el.scrollLeft -= newScrollX
          if (el === document.body) {
            el.scrollLeft -= newScrollX
          }
          eventDetail.deltaX = -newScrollX
        } else if (binding.modifiers.y) { // Scroll is enabled on ordinate only
          newScrollY = (-lastClientY + (lastClientY = e.clientY ? e.clientY : e.touches[0].clientY))
          el.scrollTop -= newScrollY
          if (el === document.body) {
            el.scrollTop -= newScrollY
          }
          eventDetail.deltaY = -newScrollY
        } else { // Scroll is enabled on both axis and ordinate
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
        u.emitEvent(vnode, 'dragscrollmove', eventDetail)
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
