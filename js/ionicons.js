!(function (e, t, n, i, r, o, s, c, a, u, l, d, p, h) {
  for (
    l = e.ionicons = e.ionicons || {},
      (d = t.createElement("style")).innerHTML =
        "ion-icon{visibility:hidden}.hydrated{visibility:inherit}",
      d.setAttribute("data-styles", ""),
      p = t.head.querySelector("meta[charset]"),
      t.head.insertBefore(d, p ? p.nextSibling : t.head.firstChild),
      (function (e, t, n) {
        (e["s-apps"] = e["s-apps"] || []).push("ionicons"),
          n.componentOnReady ||
            (n.componentOnReady = function () {
              var t = this;
              function n(n) {
                if (t.nodeName.indexOf("-") > 0) {
                  for (var i = e["s-apps"], r = 0, o = 0; o < i.length; o++)
                    if (e[i[o]].componentOnReady) {
                      if (e[i[o]].componentOnReady(t, n)) return;
                      r++;
                    }
                  if (r < i.length)
                    return void (e["s-cr"] = e["s-cr"] || []).push([t, n]);
                }
                n(null);
              }
              return e.Promise ? new e.Promise(n) : { then: n };
            });
      })(e, 0, u),
      r = r || l.resourcesUrl,
      d = (p = t.querySelectorAll("script")).length - 1;
    d >= 0 && !(h = p[d]).src && !h.hasAttribute("data-resources-url");
    d--
  );
  (p = h.getAttribute("data-resources-url")),
    !r && p && (r = p),
    !r &&
      h.src &&
      (r =
        (p = h.src.split("/").slice(0, -1)).join("/") +
        (p.length ? "/" : "") +
        "ionicons/"),
    (d = t.createElement("script")),
    (function (e, t, n, i) {
      return (
        !(t.search.indexOf("core=esm") > 0) &&
        (!(
          !(t.search.indexOf("core=es5") > 0 || "file:" === t.protocol) &&
          e.customElements &&
          e.customElements.define &&
          e.fetch &&
          e.CSS &&
          e.CSS.supports &&
          e.CSS.supports("color", "var(--c)") &&
          "noModule" in n
        ) ||
          (function (e) {
            try {
              return new Function('import("")'), !1;
            } catch (e) {}
            return !0;
          })())
      );
    })(e, e.location, d)
      ? (d.src = r + "ionicons.dy5iahpg.js")
      : ((d.src = r + "ionicons.dkb1z4hj.js"),
        d.setAttribute("type", "module"),
        d.setAttribute("crossorigin", !0)),
    d.setAttribute("data-resources-url", r),
    d.setAttribute("data-namespace", "ionicons"),
    t.head.appendChild(d);
})(window, document, 0, 0, 0, 0, 0, 0, 0, HTMLElement.prototype);
