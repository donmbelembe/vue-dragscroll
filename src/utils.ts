import type { VNode, VNodeRef } from 'vue'

export default {
  addEventListeners (el: any, events: Array<string>, handler: Function) {
    for (let i = 0, len = events.length; i < len; i++) {
      el.addEventListener(events[i], handler, { passive: false })
    }
  },

  removeEventListeners (el: any, events: Array<string>, handler: Function) {
    for (let i = 0, len = events.length; i < len; i++) {
      el.removeEventListener(events[i], handler, { passive: false })
    }
  },

  emitEvent: function (vnode: any, eventName: string, eventDetail?: any) {
    // Vue 3
    // If vnode is a Vue component instance, use $emit. Otherwise use a native HTML event.
    if (vnode.componentInstance) {
      vnode.componentInstance.$emit(eventName, eventDetail)
    } else {
      let event = new window.CustomEvent(eventName, { detail: eventDetail })
      vnode.el.dispatchEvent(event)
    }
  }
}
