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
      let isMouseEvent = e instanceof window.MouseEvent
      // The coordinates of the mouse pointer compared to the page when the mouse button is clicked on an element
      let pageX = isMouseEvent ? e.pageX : e.touches[0].pageX
      let pageY = isMouseEvent ? e.pageY : e.touches[0].pageY
      let clickedElement = document.elementFromPoint(pageX - window.pageXOffset, pageY - window.pageYOffset)

      let hasNoChildDrag = binding.arg === 'nochilddrag'
      let hasFirstChildDrag = binding.arg === 'firstchilddrag'
      let isEl = clickedElement === el
      let isFirstChild = clickedElement === el.firstChild
      let isDataDraggable = hasNoChildDrag ? typeof clickedElement.dataset.dragscroll !== 'undefined' : typeof clickedElement.dataset.noDragscroll === 'undefined'

      if (!isEl && (!isDataDraggable || (hasFirstChildDrag && !isFirstChild))) {
        return
      }

      pushed = 1
      // The coordinates of the mouse pointer compared to the viewport when the mouse button is clicked on an element
      lastClientX = isMouseEvent ? e.clientX : e.touches[0].clientX
      lastClientY = isMouseEvent ? e.clientY : e.touches[0].clientY
      e.preventDefault()
      if (e.type === 'touchstart') {
        isClick = true
      }
    }

    el.mu = function (e) {
      pushed = 0
      if (isDragging) {
        u.emitEvent(vnode, 'dragscrollend')
      }
      isDragging = false
      if (e.type === 'touchend' && isClick === true) {
        // this workaround enable click will using touch
        e.target.click()
        isClick = false
      }
    }

    el.mm = function (e) {
      let isMouseEvent = e instanceof window.MouseEvent
      let newScrollX, newScrollY
      let eventDetail = {}
      if (pushed) {
        // pushed
        // Emit start event
        if (!isDragging) {
          u.emitEvent(vnode, 'dragscrollstart')
        }
        isDragging = true

        // when we reach the end or the begining of X or Y
        let isEndX = ((el.scrollLeft + el.clientWidth) >= el.scrollWidth) || el.scrollLeft === 0
        let isEndY = ((el.scrollTop + el.clientHeight) >= el.scrollHeight) || el.scrollTop === 0

        // get new scroll dimentions
        newScrollX = (-lastClientX + (lastClientX = isMouseEvent ? e.clientX : e.touches[0].clientX))
        newScrollY = (-lastClientY + (lastClientY = isMouseEvent ? e.clientY : e.touches[0].clientY))

        // disable one scroll direction in case x or y is specified
        if (binding.modifiers.x) newScrollY = -0
        if (binding.modifiers.y) newScrollX = -0

        // compute and scroll
        el.scrollLeft -= newScrollX
        el.scrollTop -= newScrollY
        if (el === document.body) {
          el.scrollLeft -= newScrollX
          el.scrollTop -= newScrollY
        }

        // pass scroll when max reached
        if (binding.modifiers.pass) {
          // if one side reach the end scroll window
          if (isEndX) {
            window.scrollBy(-newScrollX, 0)
          }
          if (isEndY) {
            window.scrollBy(0, -newScrollY)
          }
        }

        // Emit events
        eventDetail.deltaX = -newScrollX
        eventDetail.deltaY = -newScrollY
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
