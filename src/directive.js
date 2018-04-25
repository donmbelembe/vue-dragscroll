export default {
  init: function (el, binding) {
    let newScrollX, newScrollY
    var reset = function () {
      let lastClientX, lastClientY, pushed

      el.addEventListener('mousedown', el.md = function (e) {
        let hasNoChildDrag = binding.arg === 'nochilddrag'
        let hasFirstChildDrag = binding.arg === 'firstchilddrag'
        let isEl = document.elementFromPoint(e.pageX - window.pageXOffset, e.pageY - window.pageYOffset) === el
        let isFirstChild = document.elementFromPoint(e.pageX - window.pageXOffset, e.pageY - window.pageYOffset) === el.firstChild

        let start = (e) => {
          pushed = 1
          lastClientX = e.clientX
          lastClientY = e.clientY
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
      }, 0)

      window.addEventListener('mouseup', el.mu = function () { pushed = 0 }, 0)

      window.addEventListener('mousemove', el.mm = function (e) {
        if (pushed) {
          if (binding.modifiers.x) {
            el.scrollLeft -= newScrollX = (-lastClientX + (lastClientX = e.clientX))
            if (el === document.body) {
              el.scrollLeft -= newScrollX
            }
          } else if (binding.modifiers.y) {
            el.scrollTop -= newScrollY = (-lastClientY + (lastClientY = e.clientY))
            if (el === document.body) {
              el.scrollTop -= newScrollY
            }
          } else {
            el.scrollLeft -= newScrollX = (-lastClientX + (lastClientX = e.clientX))
            el.scrollTop -= newScrollY = (-lastClientY + (lastClientY = e.clientY))
            if (el === document.body) {
              el.scrollLeft -= newScrollX
              el.scrollTop -= newScrollY
            }
          }
        }
      }, 0)
    }
    // if value is undefined or true we will init
    if (binding.value === undefined || binding.value === true) {
      if (document.readyState === 'complete') {
        reset()
      } else {
        window.addEventListener('load', reset, 0)
      }
    } else {
      // if value is false means we disable
      // if value is anything else log error 
      if (binding.value) {
        console.error('The passed value should be either \'undefined\', \'true\' or \'false\'.')
      }

      // window.removeEventListener('load', reset, 0)
      el.removeEventListener('mousedown', el.md, 0)
      window.removeEventListener('mouseup', el.mu, 0)
      window.removeEventListener('mousemove', el.mm, 0)
    }
  },
  bind: function (el, binding, vnode) {
    binding.def.init(el, binding)
  },
  update: function (el, binding, vnode, oldVnode) {
    if (binding.value !== binding.oldValue) {
      binding.def.init(el, binding)
    }
  },
  unbind: function (el, binding, vnode) {
    el.removeEventListener('mousedown', el.md, 0)
    window.removeEventListener('mouseup', el.mu, 0)
    window.removeEventListener('mousemove', el.mm, 0)
  }
}
