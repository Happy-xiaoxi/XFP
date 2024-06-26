export function print_perf_entry(pe) {
  console.log("name: "        + pe.name      +
              "; entryType: " + pe.entryType +
              "; startTime: " + pe.startTime +
              "; duration: "  + pe.duration);
}