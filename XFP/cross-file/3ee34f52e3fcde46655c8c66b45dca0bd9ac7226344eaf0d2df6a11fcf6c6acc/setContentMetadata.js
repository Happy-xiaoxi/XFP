export function setContentMetadata(t) {
    this.contentMetadata = t;
    for (var e = 0; e < this.contentMetadataListeners.length; e++)
        this.contentMetadataListeners[e](this.contentMetadata);
}
