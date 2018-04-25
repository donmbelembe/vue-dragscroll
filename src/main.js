import directive from './directive'

const VueDragscroll = {
  install (Vue, options) {
    Vue.directive('dragscroll', directive)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.VueDragscroll = VueDragscroll
  window.Vue.use(VueDragscroll)
}

export default VueDragscroll
