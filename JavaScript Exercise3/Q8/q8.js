const checkPromise = (promiseObject) => {
    if (typeof promiseObject === 'object' && typeof promiseObject.then === 'function') {
        return 'is promise';
    }
    return 'is not promsie';
}

const promise = new Promise(resolve => {
    resolve();
})

console.log('checkPromise() -> ' + checkPromise(promise));

console.log('checkPromise() -> ' + checkPromise('abc'));
