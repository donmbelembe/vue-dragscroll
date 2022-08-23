import u from './utils'
import type { DirectiveBinding, VNode } from 'vue'

const POINTER_START_EVENTS = ['mousedown', 'touchstart']
const POINTER_MOVE_EVENTS = ['mousemove', 'touchmove']
const POINTER_END_EVENTS = ['mouseup', 'touchend']

const init = function (el: Element, binding: DirectiveBinding, vnode: VNode) {
  // Default parameters
  let target = el as any // the element to apply the dragscroll on
  let active = true // enable/disable dragscroll
  let container = window as any

  // config type: boolean
  // Example: v-dragscroll="true" or v-dragscroll="false"
  if (typeof binding.value === 'boolean') {
    active = binding.value
  } else if (typeof binding.value === 'object') {
    // config type: object
    // Example: v-dragscroll="{ active: true , target: "child" }"

    // parameter: target
    if (typeof binding.value.target === 'string') {
      target = el.querySelector(binding.value.target)
      if (!target) {
        console.error('There is no element with the current target value.')
      }
    } else if (typeof binding.value.target !== 'undefined') {
      console.error('The parameter "target" should be either \'undefined\' or \'string\'.')
    }
    // parameter: container
    if (typeof binding.value.container === 'string') {
      container = document.querySelector(binding.value.container)
      if (!container) {
        console.error('There is no element with the current container value.')
      }
    } else if (typeof binding.value.container !== 'undefined') {
      console.error('The parameter "container" should be be either \'undefined\' or \'string\'.')
    }

    // parameter: active
    if (typeof binding.value.active === 'boolean') {
      active = binding.value.active
    } else if (typeof binding.value.active !== 'undefined') {
      console.error('The parameter "active" value should be either \'undefined\', \'true\' or \'false\'.')
    }
  } else if (typeof binding.value !== 'undefined') {
    // Throw an error if invalid parameters
    console.error('The passed value should be either \'undefined\', \'true\' or \'false\' or \'object\'.')
  }

  const scrollBy = function (x: number, y: number) {
    if (container === window) {
      window.scrollBy(x, y)
    } else {
      container.scrollLeft += x
      container.scrollTop += y
    }
  }

  const reset = function () {
    let lastClientX: number, lastClientY: number, pushed: number
    let isDragging = false
    // let isClick = false // workaround to handle click event from touch

    target.md = function (e: { pageX: any; touches: { clientX: any, clientY: any, pageX: any, pageY: any }[]; pageY: any; button: number; clientX: any; clientY: any }) {
      // e.preventDefault()
      const isMouseEvent = e instanceof window.MouseEvent
      // The coordinates of the mouse pointer compared to the page when the mouse button is clicked on an element
      const pageX = isMouseEvent ? e.pageX : e.touches[0].pageX
      const pageY = isMouseEvent ? e.pageY : e.touches[0].pageY
      const clickedElement = document.elementFromPoint(pageX - window.pageXOffset, pageY - window.pageYOffset) as HTMLElement | null

      const hasNoChildDrag = binding.arg === 'nochilddrag'
      const ignoreLeft = binding.modifiers.noleft
      const ignoreRight = binding.modifiers.noright
      const ignoreMiddle = binding.modifiers.nomiddle
      const ignoreBack = binding.modifiers.noback
      const ignoreForward = binding.modifiers.noforward
      const hasFirstChildDrag = binding.arg === 'firstchilddrag'
      const isEl = clickedElement === target
      const isFirstChild = clickedElement === target.firstChild
      const isDataDraggable = hasNoChildDrag ? typeof clickedElement?.dataset.dragscroll !== 'undefined' : typeof clickedElement?.dataset.noDragscroll === 'undefined'

      if (!isEl && (!isDataDraggable || (hasFirstChildDrag && !isFirstChild))) {
        return
      }

      if (e.button === 0 && ignoreLeft) {
        return
      } else if (e.button === 1 && ignoreMiddle) {
        return
      } else if (e.button === 2 && ignoreRight) {
        return
      } else if (e.button === 3 && ignoreBack) {
        return
      } else if (e.button === 4 && ignoreForward) {
        return
      } 

      pushed = 1
      // The coordinates of the mouse pointer compared to the viewport when the mouse button is clicked on an element
      lastClientX = isMouseEvent ? e.clientX : e.touches[0].clientX
      lastClientY = isMouseEvent ? e.clientY : e.touches[0].clientY
      // if (e.type === 'touchstart') {
      //   isClick = true
      // }
    }

    target.mu = function (e: any) {
      pushed = 0
      if (isDragging) {
        u.emitEvent(vnode, 'dragscrollend')
      }
      isDragging = false
      // if (e.type === 'touchend' && isClick === true) {
      //   // this workaround enable click will using touch
      //   e.target.click()
      //   isClick = false
      // } else {
      //   e.target.focus()
      // }
    }

    target.mm = function (e: { preventDefault: () => void; clientX: any; touches: { clientY: any, clientX: any }[]; clientY: any }) {
      const isMouseEvent = e instanceof window.MouseEvent
      let newScrollX, newScrollY
      if (pushed) {
        e.preventDefault()
        // pushed
        // Emit start event
        if (!isDragging) {
          u.emitEvent(vnode, 'dragscrollstart')
        }
        isDragging = true

        // when we reach the end or the begining of X or Y
        const isEndX = ((target.scrollLeft + target.clientWidth) >= target.scrollWidth) || target.scrollLeft === 0
        const isEndY = ((target.scrollTop + target.clientHeight) >= target.scrollHeight) || target.scrollTop === 0

        // get new scroll dimentions
        newScrollX = (-lastClientX + (lastClientX = isMouseEvent ? e.clientX : e.touches[0].clientX))
        newScrollY = (-lastClientY + (lastClientY = isMouseEvent ? e.clientY : e.touches[0].clientY))

        if (binding.modifiers.pass) {
          // compute and scroll
          target.scrollLeft -= binding.modifiers.y ? -0 : newScrollX
          target.scrollTop -= binding.modifiers.x ? -0 : newScrollY
          if (target === document.body) {
            target.scrollLeft -= binding.modifiers.y ? -0 : newScrollX
            target.scrollTop -= binding.modifiers.x ? -0 : newScrollY
          }

          // if one side reach the end scroll container
          if (isEndX || binding.modifiers.y) {
            scrollBy(-newScrollX, 0)
          }
          if (isEndY || binding.modifiers.x) {
            scrollBy(0, -newScrollY)
          }
        } else {
          // disable one scroll direction in case x or y is specified
          if (binding.modifiers.x) newScrollY = -0
          if (binding.modifiers.y) newScrollX = -0

          // compute and scroll
          target.scrollLeft -= newScrollX
          target.scrollTop -= newScrollY
          if (target === document.body) {
            target.scrollLeft -= newScrollX
            target.scrollTop -= newScrollY
          }
        }

        // Emit events
        u.emitEvent(vnode, 'dragscrollmove', {
          // eventDetail
          deltaX: -newScrollX,
          deltaY: -newScrollY
        })
      }
    }

    u.addEventListeners(target, POINTER_START_EVENTS, target.md)

    u.addEventListeners(window, POINTER_END_EVENTS, target.mu)

    u.addEventListeners(window, POINTER_MOVE_EVENTS, target.mm)
  }
  // if value is undefined or true we will init
  if (active) {
    if (document.readyState === 'complete') {
      reset()
    } else {
      window.addEventListener('load', reset)
    }
  } else {
    // if value is false means we disable
    // window.removeEventListener('load', reset)
    u.removeEventListeners(target, POINTER_START_EVENTS, target.md)
    u.removeEventListeners(window, POINTER_END_EVENTS, target.mu)
    u.removeEventListeners(window, POINTER_MOVE_EVENTS, target.mm)
  }
}

const destroy = (el: any) => {
  const target = el
  u.removeEventListeners(target, POINTER_START_EVENTS, target.md)
  u.removeEventListeners(window, POINTER_END_EVENTS, target.mu)
  u.removeEventListeners(window, POINTER_MOVE_EVENTS, target.mm)
}

export default {
  mounted: (el: Element, binding: DirectiveBinding, vnode: VNode) => init(el, binding, vnode),
  updated: (el: Element, binding: DirectiveBinding, vnode: VNode) => {
    // update the component only if the parameters change
    if (JSON.stringify(binding.value) !== JSON.stringify(binding.oldValue)) {
      init(el, binding, vnode)
    }
  },
  unmounted: (el: Element) => destroy(el),
}
