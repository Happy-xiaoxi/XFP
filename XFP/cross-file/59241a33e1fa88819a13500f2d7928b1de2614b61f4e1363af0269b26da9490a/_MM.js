export function M(e) {
  return e && void 0 !== e.__upscopeID
    ? e.__upscopeID
    : D(e) && void 0 !== e.__upscopeRootId
    ? e.__upscopeRootId + "-sr"
    : null;
}