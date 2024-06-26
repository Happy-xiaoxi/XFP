export function st(e, t, n, i) {
  return {
    utils: i,
    fields: {
      bf: [
        {
          d: e,
          corrId: i.configuration.correlationId,
          sourceId: i.configuration.appId,
          slt: n,
          clt: t,
        },
      ],
    },
    bf: !0,
  };
}