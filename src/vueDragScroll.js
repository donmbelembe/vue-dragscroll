export const dragscroll = {
  inserted: function (el, binding, vnode) {

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
