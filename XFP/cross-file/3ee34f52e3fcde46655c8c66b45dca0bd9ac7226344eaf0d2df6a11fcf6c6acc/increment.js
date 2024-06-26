export function increment() {
    try {
        this.viewCount = parseInt(this.viewCount || 1, 10) + 1;
    } catch (t) {
        this.viewCount = 1;
    }
}
