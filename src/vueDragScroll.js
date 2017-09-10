export const dragscroll = {
  bind: function (el, binding, vnode) {
    let newScrollX, newScrollY

    var reset = function () {
      let lastClientX, lastClientY, pushed

      el.addEventListener('mousedown', el.md = function (e) {
        if (!(binding.arg === 'nochilddrag') || document.elementFromPoint(e.pageX, e.pageY) === el) {
          pushed = 1
          lastClientX = e.clientX
          lastClientY = e.clientY
          e.preventDefault()
        }
      }, 0)

      window.addEventListener('mouseup', el.mu = function () { pushed = 0 }, 0)

      window.addEventListener('mousemove', el.mm = function (e) {
        if (pushed) {
          el.scrollLeft -= newScrollX = (-lastClientX + (lastClientX = e.clientX))
          el.scrollTop -= newScrollY = (-lastClientY + (lastClientY = e.clientY))
          if (el === document.body) {
            el.scrollLeft -= newScrollX
            el.scrollTop -= newScrollY
          }
        }
      }, 0)
    }

    if (el.readyState === 'complete') {
      reset()
    } else {
      window.addEventListener('load', reset, 0)
    }
  },
  unbind: function (el, binding, vnode) {
    el['removeEventListener']('mousedown', el.md, 0)
    window['removeEventListener']('mouseup', el.mu, 0)
    window['removeEventListener']('mousemove', el.mm, 0)
  }
}

const VueDragscroll = {
  install (Vue, options) {
    Vue.directive('dragscroll', dragscroll)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.VueDragscroll = VueDragscroll
  window.Vue.use(VueDragscroll)
}

export default VueDragscroll
