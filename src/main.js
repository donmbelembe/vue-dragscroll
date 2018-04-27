import directive from './directive'

const VueDragscroll = {
  install (Vue, options) {
    let major = Number(Vue.version.split('.')[0])
    let minor = Number(Vue.version.split('.')[1])
    if (major < 2 && minor < 1) {
      throw new Error(`v-dragscroll supports vue version 2.1 and above. You are using Vue@${Vue.version}. Please upgrade to the latest version of Vue.`)
    }
    // registration
    Vue.directive('dragscroll', directive)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.VueDragscroll = VueDragscroll
  window.Vue.use(VueDragscroll)
}

export { directive as default }
