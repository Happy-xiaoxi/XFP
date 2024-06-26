
export function remove(t) {
    this.set(t, '', { expiryDate: '1970-01-01T00:00:01-00:00' });
}
