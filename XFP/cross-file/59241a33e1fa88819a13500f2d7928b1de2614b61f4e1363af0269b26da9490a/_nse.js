export function se(t, o) {
  const n = o.document;
  let s,
    i = 0;
  return {
    detect(t, o) {
      const i = e("domChangesDelay") || 0;
      let r,
        a = [];
      i > 0 &&
        (r = setInterval(() => {
          a.length > 0 && (o(a), (a = []));
        }, i)),
        (s = new MutationObserver(0 === i ? o : (e) => a.push(...e))),
        s.observe(n, {
          attributes: !0,
          childList: !0,
          characterData: !0,
          subtree: !0,
          attributeOldValue: !0,
        });
      for (const e of G(n))
        e.shadowRoot &&
          s.observe(e.shadowRoot, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0,
            attributeOldValue: !0,
          });
      var c;
      t(
        ((c = s),
        function () {
          r && clearInterval(r), c.disconnect();
        })
      );
    },
    async encode(e) {
      i++;
      const r = String(i),
        a = [],
        c = [],
        l = [],
        u = [],
        d = [],
        p = [],
        h = [],
        g = [],
        m = [];
      for (const s of e) {
        let e = s.target;
        if (e === n) return { pageLoad: await t.getSnapshot(o) };
        for (; e; )
          delete e.__upscopeScrollable,
            m.push(e),
            (e = e.parentNode || e.host);
        switch (s.type) {
          case "childList":
            for (const e of s.addedNodes) c.push(e);
            if (s.previousSibling) {
              let e = s.previousSibling;
              for (; e; ) {
                if (T(e) || L(e)) {
                  l.push(e);
                  break;
                }
                e = e.previousSibling;
              }
            }
            if (s.nextSibling) {
              let e = s.nextSibling;
              for (; e; ) {
                if (T(e) || L(e)) {
                  u.push(e);
                  break;
                }
                e = e.nextSibling;
              }
            }
            s.removedNodes.length > 0 &&
              0 ===
                [...s.target.childNodes].filter((e) => T(e) || L(e)).length &&
              d.push(s.target);
            break;
          case "attributes":
            p.push(s.target);
            break;
          default:
            h.push(s.target);
        }
      }
      if (h.length + d.length + c.length + l.length + u.length > 0) {
        for (const e of c) T(e) && t.removeIdsFromElement(e, !0);
        t.ensureHasIds(r, n, n.__upscopeRootId, (e) => {
          const t = e.shadowRoot;
          t &&
            s.observe(t, {
              attributes: !0,
              childList: !0,
              characterData: !0,
              subtree: !0,
              attributeOldValue: !0,
            });
        });
      }
      const f = async function (e) {
        let o,
          n,
          s = [];
        const i = e.shadowRoot;
        i && f(i);
        for (const i of e.childNodes)
          if ((T(i) || L(i) || D(i)) && !i.parentNode?.__upscopeMasked) {
            if (n) {
              if (c.includes(i) || !T(i)) {
                const e = await t.encodeNode(i);
                e && n.newNodes.push(e);
                continue;
              }
              (n.after = N(i)), a.push(n), (n = void 0);
            } else {
              if (c.includes(i)) {
                const s = await t.encodeNode(i);
                n = {
                  batch: r,
                  elementId: N(e),
                  type: "children",
                  newNodes: s ? [s] : [],
                  before: o ? N(o) : void 0,
                };
                continue;
              }
              if (l.includes(i) && u.includes(i))
                return void a.push({
                  batch: r,
                  elementId: N(e),
                  type: "children",
                  newNodes: await t.encodeNode(e).then((e) => e.c),
                });
              l.includes(i)
                ? (n = T(i)
                    ? {
                        batch: r,
                        elementId: N(e),
                        type: "children",
                        newNodes: [],
                        before: N(i),
                      }
                    : {
                        batch: r,
                        elementId: N(e),
                        type: "children",
                        newNodes: [await t.encodeNode(i)],
                        before: o ? N(o) : void 0,
                      })
                : u.includes(i)
                ? T(i)
                  ? a.push({
                      batch: r,
                      elementId: N(e),
                      type: "children",
                      newNodes: s,
                      before: o ? N(o) : void 0,
                      after: N(i),
                    })
                  : (n = {
                      batch: r,
                      elementId: N(e),
                      type: "children",
                      newNodes: s,
                      before: o ? N(o) : void 0,
                    })
                : h.includes(i) &&
                  (T(i)
                    ? a.push({
                        batch: r,
                        elementId: N(i),
                        type: "html",
                        html: await t.encodeNode(i),
                      })
                    : g.includes(N(i)) ||
                      (g.push(N(i)),
                      a.push({
                        batch: r,
                        elementId: N(i),
                        type: "text",
                        text: B(i),
                      })));
            }
            d.includes(i) &&
              a.push({
                batch: r,
                elementId: N(i),
                type: "children",
                newNodes: [],
              }),
              p.includes(i) &&
                a.push({
                  batch: r,
                  elementId: N(i),
                  type: "attributes",
                  attributes: F(i),
                }),
              T(i) || D(i)
                ? ((o = i),
                  (s = []),
                  !R("script", i) && m.includes(i) && (await f(i)))
                : s.push(await t.encodeNode(i));
          }
        n && a.push(n);
      };
      await f(n);
      const _ = await t.collectNewAssets(n);
      return t.activateForWindow(), { domChange: { changes: a, assets: _ } };
    },
  };
}