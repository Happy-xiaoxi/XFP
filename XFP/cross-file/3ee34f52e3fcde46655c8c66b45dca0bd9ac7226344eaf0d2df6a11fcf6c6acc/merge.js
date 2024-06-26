export function merge(t) {
    t.start && t.start < this.start && (this.start = t.start);
    t.viewCount && (this.viewCount += t.viewCount);
    return this;
}
