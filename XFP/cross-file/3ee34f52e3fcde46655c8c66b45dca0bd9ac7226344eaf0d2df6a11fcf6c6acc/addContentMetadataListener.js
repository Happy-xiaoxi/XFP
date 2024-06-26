export function addContentMetadataListener(t) {
    this.contentMetadata && t(this.contentMetadata);
    this.contentMetadataListeners.push(t);
}
