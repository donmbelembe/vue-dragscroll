import { DirectiveOptions, VNodeDirective, VNode } from "vue";

function addEventListeners(el: any, events: string[], handler: any) {
  for (var i = 0, len = events.length; i < len; i++) {
    el.addEventListener(events[i], handler);
  }
}

function removeEventListeners(el: any, events: string[], handler: any) {
  for (var i = 0, len = events.length; i < len; i++) {
    el.removeEventListener(events[i], handler);
  }
}

const POINTER_START_EVENTS = ["mousedown", "touchstart"];
const POINTER_MOVE_EVENTS = ["mousemove", "touchmove"];
const POINTER_END_EVENTS = ["mouseup", "touchend"];

interface HTMLElementDragScroll extends HTMLElement {
  md: (e: DragEvent) => void;
  mu: (e: DragEvent) => void;
  mm: (e: DragEvent) => void;
}
interface iEventDetail {
  deltaX: number;
  deltaY: number;
}

let init = function(
  el: HTMLElementDragScroll,
  binding: VNodeDirective,
  vnode?: VNode
) {
  var reset = function() {
    let lastClientX: number, lastClientY: number, pushed: number;
    function newlastClientX(e: Event) {
      if (e instanceof DragEvent || e instanceof MouseEvent) {
        lastClientX = e.clientX;
      }
      if (e instanceof TouchEvent) {
        lastClientX = e.touches[0].clientX;
      }
      return lastClientX;
    }
    function newlastClientY(e: Event) {
      if (e instanceof DragEvent || e instanceof MouseEvent) {
        lastClientY = e.clientY;
      }
      if (e instanceof TouchEvent) {
        lastClientY = e.touches[0].clientY;
      }
      return lastClientY;
    }
    let isDragging = false;
    let element: Element = <Element>(<any>el);
    el.md = function(e: Event) {
      let pageX = 0;
      let pageY = 0;
      newlastClientX(e);
      newlastClientY(e);
      if (e instanceof DragEvent) {
        pageX = e.pageX;
        pageY = e.pageY;
      }
      if (e instanceof TouchEvent) {
        pageX = e.touches[0].pageX;
        pageY = e.touches[0].pageY;
      }

      let hasNoChildDrag = binding.arg === "nochilddrag";
      let hasFirstChildDrag = binding.arg === "firstchilddrag";
      let isEl =
        document.elementFromPoint(
          pageX - window.pageXOffset,
          pageY - window.pageYOffset
        ) === element;

      let isFirstChild =
        document.elementFromPoint(
          pageX - window.pageXOffset,
          pageY - window.pageYOffset
        ) === element.firstChild;

      let start = (e: Event) => {
        pushed = 1;
        e.preventDefault();
      };

      if (hasNoChildDrag) {
        if (isEl) {
          start(e);
        }
      } else if (hasFirstChildDrag) {
        if (isEl || isFirstChild) {
          start(e);
        }
      } else {
        start(e);
      }
    };

    el.mu = function() {
      pushed = 0;
      if (isDragging) {
        emitEvent(vnode, "dragscrollend");
      }
      isDragging = false;
    };

    el.mm = function(e: DragEvent) {
      let newScrollX, newScrollY;
      let eventDetail = {} as iEventDetail;
      if (pushed) {
        if (!isDragging) {
          emitEvent(vnode, "dragscrollstart");
        }
        isDragging = true;
        if (binding.modifiers.x) {
          newScrollX = -lastClientX + newlastClientX(e);
          element.scrollLeft -= newScrollX;
          if (element === <Element>(<any>document.body)) {
            element.scrollLeft -= newScrollX;
          }
          eventDetail.deltaX = -newScrollX;
        } else if (binding.modifiers.y) {
          newScrollY = -lastClientY + newlastClientY(e);
          element.scrollTop -= newScrollY;
          if (element === document.body) {
            element.scrollTop -= newScrollY;
          }
          eventDetail.deltaY = -newScrollY;
        } else {
          newScrollX = -lastClientX + newlastClientX(e);
          newScrollY = -lastClientY + newlastClientY(e);
          element.scrollLeft -= newScrollX;
          element.scrollTop -= newScrollY;
          if (element === document.body) {
            element.scrollLeft -= newScrollX;
            element.scrollTop -= newScrollY;
          }
          eventDetail.deltaX = -newScrollX;
          eventDetail.deltaY = -newScrollY;
        }
        emitEvent(vnode, "dragscrollmove", eventDetail);
      }
    };

    addEventListeners(el, POINTER_START_EVENTS, el.md);
    addEventListeners(window, POINTER_END_EVENTS, el.mu);
    addEventListeners(window, POINTER_MOVE_EVENTS, el.mm);
  };
  // if value is undefined or true we will init
  if (binding.value === undefined || binding.value === true) {
    if (document.readyState === "complete") {
      reset();
    } else {
      window.addEventListener("load", reset);
    }
  } else {
    // if value is false means we disable
    // if value is anything else log error
    if (binding.value) {
      console.error(
        "The passed value should be either 'undefined', 'true' or 'false'."
      );
    }

    // window.removeEventListener('load', reset)
    removeEventListeners(el, POINTER_START_EVENTS, el.md);
    removeEventListeners(window, POINTER_END_EVENTS, el.mu);
    removeEventListeners(window, POINTER_MOVE_EVENTS, el.mm);
  }
};

let emitEvent = function(vnode: any, eventName: any, eventDetail?: any) {
  // If vnode is a Vue component instance, use $emit. Otherwise use a native HTML event.
  if (vnode.componentInstance) {
    vnode.componentInstance.$emit(eventName, eventDetail);
  } else {
    let event;
    if (CustomEvent) {
      event = new CustomEvent(eventName, {
        detail: eventDetail
      });
    } else {
      // Deprecated fallback for IE
      event = document.createEvent("CustomEvent");
      event.initCustomEvent(eventName, true, true, eventDetail);
    }
    vnode.elm.dispatchEvent(event);
  }
};

const directive: DirectiveOptions = {
  bind: function(el, binding, vnode) {
    init(<HTMLElementDragScroll>(<any>el), binding, vnode);
  },
  update: function(el, binding, vnode, oldVnode) {
    if (binding.value !== binding.oldValue) {
      init(<HTMLElementDragScroll>(<any>el), binding, vnode);
    }
  },
  unbind: function(el, binding, vnode) {
    removeEventListeners(el, POINTER_START_EVENTS, <HTMLElementDragScroll>(
      (<any>el).md
    ));
    removeEventListeners(window, POINTER_END_EVENTS, <HTMLElementDragScroll>(
      (<any>el).mu
    ));
    removeEventListeners(window, POINTER_MOVE_EVENTS, <HTMLElementDragScroll>(
      (<any>el).mm
    ));
  }
};

export default directive;
