export function setPageHash(advcake_int, advcake_helper) {
    advcake_int.vars.page_hash = advcake_helper.uid();
    console.log("setPageHash")
}
