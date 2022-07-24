const copyObject = (originalObject) => {
    const copyObject = [];
    for (value of originalObject) {
        copyObject.push(value);
    } 
    return copyObject;
}
const compareObject = (object1, object2) => {
    if (object1.length == object2.length) {
        for (index in object1) {
            if (object1[index] != object2[index]) {
                return 0;
            }
        }
        return 1;
    }
    return 0;
}
const sorted = (string) => {
    const ascending = copyObject(string);
    ascending.sort();
    const descending = copyObject(string);
    descending.sort().reverse();
    if (compareObject(string, ascending) == 1) {
        return 1;
    }
    if (compareObject(string, descending) == 1) {
        return -1;
    }
    return 0;
}

console.log('sorted() -> ' + sorted([1, 2, 3, 4]));


console.log('sorted() -> ' + sorted([4, 3, 2, 1]));


console.log('sorted() -> ' + sorted([1, 3, 2, 4]));