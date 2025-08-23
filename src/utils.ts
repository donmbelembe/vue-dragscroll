import type { VNode } from 'vue'

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

  emitEvent (vnode: VNode, eventName: string, eventDetail?: any) {
    // If vnode corresponds to a Vue component, emit the event on the component
    // instance. Otherwise, dispatch a native event on the underlying element.
    const component = (vnode as any).component
    if (component && typeof component.emit === 'function') {
      component.emit(eventName, eventDetail)
    } else {
      const event = new window.CustomEvent(eventName, { detail: eventDetail })
      vnode.el?.dispatchEvent(event)
    }
  }
}
