
export function webdriver(done, options) {
    done(navigator.webdriver == null ? options.NOT_AVAILABLE : navigator.webdriver);
}
