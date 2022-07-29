import directive from './directive'

const VueDragscroll = {
  install (app: any) {
    app.directive('dragscroll', directive)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.VueDragscroll = directive
}

export { directive as dragscroll }
export default VueDragscroll
