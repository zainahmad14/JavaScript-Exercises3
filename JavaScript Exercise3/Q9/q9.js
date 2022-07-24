const isObject = (value) => {
    if (typeof value === 'object') {
        return 'is object';
    }
    return 'is not object';
}
console.log('isObject() -> ' + isObject(Object.assign('123')));

console.log('isObject() -> ' + isObject('123'));