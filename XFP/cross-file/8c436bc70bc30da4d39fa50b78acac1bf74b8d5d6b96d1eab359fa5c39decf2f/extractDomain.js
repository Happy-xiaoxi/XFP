const SIMPLE_DOMAIN_MATCH_REGEX = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i;
const DOMAIN_MATCH_REGEX = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i;
export function extractDomain(hostname) {
  let domain_regex = DOMAIN_MATCH_REGEX;
  let parts = hostname.split(".");
  let tld = parts[parts.length - 1];
  if (tld.length > 4 || tld === "com" || tld === "org" || tld === "net") {
    domain_regex = SIMPLE_DOMAIN_MATCH_REGEX;
  }
  let matches = hostname.match(domain_regex);
  return matches ? matches[0] : hostname;
}