
export function openDatabaseKey(done) {
    done(!!window.openDatabase);
}
