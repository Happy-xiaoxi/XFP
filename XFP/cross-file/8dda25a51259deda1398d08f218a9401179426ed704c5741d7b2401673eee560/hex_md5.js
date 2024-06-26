export function hex_md5(e) {
  return this.binl2hex(this.core_md5(this.str2binl(e), e.length * this.chrsz));
}