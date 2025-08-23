const l = {
  addEventListeners(r, e, s) {
    for (let t = 0, n = e.length; t < n; t++)
      r.addEventListener(e[t], s, { passive: !1 });
  },
  removeEventListeners(r, e, s) {
    for (let t = 0, n = e.length; t < n; t++)
      r.removeEventListener(e[t], s, { passive: !1 });
  },
  emitEvent(r, e, s) {
    var n;
    const t = r.component;
    if (t && typeof t.emit == "function")
      t.emit(e, s);
    else {
      const f = new window.CustomEvent(e, { detail: s });
      (n = r.el) == null || n.dispatchEvent(f);
    }
  }
}, w = ["mousedown", "touchstart"], E = ["mousemove", "touchmove"], y = ["mouseup", "touchend"], T = function(r, e, s) {
  let t = r, n = !0, f = window;
  typeof e.value == "boolean" ? n = e.value : typeof e.value == "object" ? (typeof e.value.target == "string" ? (t = r.querySelector(e.value.target), t || console.error("There is no element with the current target value.")) : typeof e.value.target < "u" && console.error(`The parameter "target" should be either 'undefined' or 'string'.`), typeof e.value.container == "string" ? (f = document.querySelector(e.value.container), f || console.error("There is no element with the current container value.")) : typeof e.value.container < "u" && console.error(`The parameter "container" should be be either 'undefined' or 'string'.`), typeof e.value.active == "boolean" ? n = e.value.active : typeof e.value.active < "u" && console.error(`The parameter "active" value should be either 'undefined', 'true' or 'false'.`)) : typeof e.value < "u" && console.error("The passed value should be either 'undefined', 'true' or 'false' or 'object'.");
  const g = function(d, m) {
    f === window ? window.scrollBy(d, m) : (f.scrollLeft += d, f.scrollTop += m);
  }, L = function() {
    let d, m, h, v = !1;
    t.md = function(o) {
      const u = o instanceof window.MouseEvent, i = u ? o.pageX : o.touches[0].pageX, c = u ? o.pageY : o.touches[0].pageY, a = document.elementFromPoint(i - window.pageXOffset, c - window.pageYOffset), p = e.arg === "nochilddrag", Y = e.modifiers.noleft, S = e.modifiers.noright, D = e.modifiers.nomiddle, N = e.modifiers.noback, O = e.modifiers.noforward, V = e.arg === "firstchilddrag", C = a === t, M = a === t.firstChild, _ = p ? typeof (a == null ? void 0 : a.dataset.dragscroll) < "u" : typeof (a == null ? void 0 : a.dataset.noDragscroll) > "u";
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
        h = 1, d = u ? o.clientX : o.touches[0].clientX, m = u ? o.clientY : o.touches[0].clientY;
      }
    }, t.mu = function(o) {
      h = 0, v && l.emitEvent(s, "dragscrollend"), v = !1;
    }, t.mm = function(o) {
      const u = o instanceof window.MouseEvent;
      let i, c;
      if (h) {
        o.preventDefault(), v || l.emitEvent(s, "dragscrollstart"), v = !0;
        const a = t.scrollLeft + t.clientWidth >= t.scrollWidth || t.scrollLeft === 0, p = t.scrollTop + t.clientHeight >= t.scrollHeight || t.scrollTop === 0;
        i = -d + (d = u ? o.clientX : o.touches[0].clientX), c = -m + (m = u ? o.clientY : o.touches[0].clientY), e.modifiers.pass ? (t.scrollLeft -= e.modifiers.y ? -0 : i, t.scrollTop -= e.modifiers.x ? -0 : c, t === document.body && (t.scrollLeft -= e.modifiers.y ? -0 : i, t.scrollTop -= e.modifiers.x ? -0 : c), (a || e.modifiers.y) && g(-i, 0), (p || e.modifiers.x) && g(0, -c)) : (e.modifiers.x && (c = -0), e.modifiers.y && (i = -0), t.scrollLeft -= i, t.scrollTop -= c, t === document.body && (t.scrollLeft -= i, t.scrollTop -= c)), l.emitEvent(s, "dragscrollmove", {
          deltaX: -i,
          deltaY: -c
        });
      }
    }, l.addEventListeners(t, w, t.md), l.addEventListeners(window, y, t.mu), l.addEventListeners(window, E, t.mm);
  };
  n ? document.readyState === "complete" ? L() : window.addEventListener("load", L) : (l.removeEventListeners(t, w, t.md), l.removeEventListeners(window, y, t.mu), l.removeEventListeners(window, E, t.mm));
}, R = (r) => {
  const e = r;
  l.removeEventListeners(e, w, e.md), l.removeEventListeners(window, y, e.mu), l.removeEventListeners(window, E, e.mm);
}, X = {
  mounted: (r, e, s) => T(r, e, s),
  updated: (r, e, s) => {
    JSON.stringify(e.value) !== JSON.stringify(e.oldValue) && T(r, e, s);
  },
  unmounted: (r) => R(r)
}, x = {
  install(r) {
    r.directive("dragscroll", X);
  }
};
typeof window < "u" && window.Vue && (window.VueDragscroll = X);
export {
  x as default,
  X as dragscroll
};
