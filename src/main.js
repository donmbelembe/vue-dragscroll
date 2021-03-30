import directive from './directive'
import directiveNext from './directive-next'

// Vue 2
const VueDragscroll = {
  install (Vue, options) {
    const major = Number(Vue.version.split('.')[0])
    const minor = Number(Vue.version.split('.')[1])

    if (major < 2 && minor < 1) {
      throw new Error(`v-dragscroll supports vue version 2.1 and above. You are using Vue@${Vue.version}. Please upgrade to the latest version of Vue.`)
    }

    Vue.directive('dragscroll', directive)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  if (window.Vue.version.split('.')[0] <= 2) {
    window.VueDragscroll = VueDragscroll
    window.Vue.use(VueDragscroll)
  } else {
    window.VueDragscroll = directiveNext
  }
}

export { directive as dragscroll }
export { directiveNext as dragscrollNext }
export default VueDragscroll
