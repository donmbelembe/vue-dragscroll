const l = {
  addEventListeners(r, e, s) {
    for (let t = 0, a = e.length; t < a; t++)
      r.addEventListener(e[t], s, { passive: !1 });
  },
  removeEventListeners(r, e, s) {
    for (let t = 0, a = e.length; t < a; t++)
      r.removeEventListener(e[t], s, { passive: !1 });
  },
  emitEvent: function(r, e, s) {
    if (r.componentInstance)
      r.componentInstance.$emit(e, s);
    else {
      let t = new window.CustomEvent(e, { detail: s });
      r.el.dispatchEvent(t);
    }
  }
}, p = ["mousedown", "touchstart"], E = ["mousemove", "touchmove"], y = ["mouseup", "touchend"], T = function(r, e, s) {
  let t = r, a = !0, m = window;
  typeof e.value == "boolean" ? a = e.value : typeof e.value == "object" ? (typeof e.value.target == "string" ? (t = r.querySelector(e.value.target), t || console.error("There is no element with the current target value.")) : typeof e.value.target < "u" && console.error(`The parameter "target" should be either 'undefined' or 'string'.`), typeof e.value.container == "string" ? (m = document.querySelector(e.value.container), m || console.error("There is no element with the current container value.")) : typeof e.value.container < "u" && console.error(`The parameter "container" should be be either 'undefined' or 'string'.`), typeof e.value.active == "boolean" ? a = e.value.active : typeof e.value.active < "u" && console.error(`The parameter "active" value should be either 'undefined', 'true' or 'false'.`)) : typeof e.value < "u" && console.error("The passed value should be either 'undefined', 'true' or 'false' or 'object'.");
  const g = function(u, d) {
    m === window ? window.scrollBy(u, d) : (m.scrollLeft += u, m.scrollTop += d);
  }, L = function() {
    let u, d, h, v = !1;
    t.md = function(o) {
      const f = o instanceof window.MouseEvent, n = f ? o.pageX : o.touches[0].pageX, i = f ? o.pageY : o.touches[0].pageY, c = document.elementFromPoint(n - window.pageXOffset, i - window.pageYOffset), w = e.arg === "nochilddrag", Y = e.modifiers.noleft, S = e.modifiers.noright, D = e.modifiers.nomiddle, N = e.modifiers.noback, O = e.modifiers.noforward, V = e.arg === "firstchilddrag", C = c === t, M = c === t.firstChild, _ = w ? typeof (c == null ? void 0 : c.dataset.dragscroll) < "u" : typeof (c == null ? void 0 : c.dataset.noDragscroll) > "u";
      if (!(!C && (!_ || V && !M)) && !(o.button === 0 && Y)) {
        {
          if (o.button === 1 && D)
            return;
          if (o.button === 2 && S)
            return;
          if (o.button === 3 && N)
            return;
          if (o.button === 4 && O)
            return;
        }
        h = 1, u = f ? o.clientX : o.touches[0].clientX, d = f ? o.clientY : o.touches[0].clientY;
      }
    }, t.mu = function(o) {
      h = 0, v && l.emitEvent(s, "dragscrollend"), v = !1;
    }, t.mm = function(o) {
      const f = o instanceof window.MouseEvent;
      let n, i;
      if (h) {
        o.preventDefault(), v || l.emitEvent(s, "dragscrollstart"), v = !0;
        const c = t.scrollLeft + t.clientWidth >= t.scrollWidth || t.scrollLeft === 0, w = t.scrollTop + t.clientHeight >= t.scrollHeight || t.scrollTop === 0;
        n = -u + (u = f ? o.clientX : o.touches[0].clientX), i = -d + (d = f ? o.clientY : o.touches[0].clientY), e.modifiers.pass ? (t.scrollLeft -= e.modifiers.y ? -0 : n, t.scrollTop -= e.modifiers.x ? -0 : i, t === document.body && (t.scrollLeft -= e.modifiers.y ? -0 : n, t.scrollTop -= e.modifiers.x ? -0 : i), (c || e.modifiers.y) && g(-n, 0), (w || e.modifiers.x) && g(0, -i)) : (e.modifiers.x && (i = -0), e.modifiers.y && (n = -0), t.scrollLeft -= n, t.scrollTop -= i, t === document.body && (t.scrollLeft -= n, t.scrollTop -= i)), l.emitEvent(s, "dragscrollmove", {
          deltaX: -n,
          deltaY: -i
        });
      }
    }, l.addEventListeners(t, p, t.md), l.addEventListeners(window, y, t.mu), l.addEventListeners(window, E, t.mm);
  };
  a ? document.readyState === "complete" ? L() : window.addEventListener("load", L) : (l.removeEventListeners(t, p, t.md), l.removeEventListeners(window, y, t.mu), l.removeEventListeners(window, E, t.mm));
}, I = (r) => {
  const e = r;
  l.removeEventListeners(e, p, e.md), l.removeEventListeners(window, y, e.mu), l.removeEventListeners(window, E, e.mm);
}, X = {
  mounted: (r, e, s) => T(r, e, s),
  updated: (r, e, s) => {
    JSON.stringify(e.value) !== JSON.stringify(e.oldValue) && T(r, e, s);
  },
  unmounted: (r) => I(r)
}, R = {
  install(r) {
    r.directive("dragscroll", X);
  }
};
typeof window < "u" && window.Vue && (window.VueDragscroll = X);
export {
  R as default,
  X as dragscroll
};
