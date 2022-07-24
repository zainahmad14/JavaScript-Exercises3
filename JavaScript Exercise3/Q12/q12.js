const obj1 = {
    'id': Math.floor(Math.random() * 10)
};
const obj2 = {
    'id': Math.floor(Math.random() * 10)
};
const obj3 = {
    'id': Math.floor(Math.random() * 10)
};
const obj4 = {
    'id': Math.floor(Math.random() * 10)
};
const obj5 = {
    'id': Math.floor(Math.random() * 10)
};
const removeElement = (...objArray) => {
    let index = 0;
    while (index < objArray.length) {
        if (objArray[index].id > 5) {
            let objArray2 = objArray.slice(0, index);
            let objArray3 = [];
            if (index + 1 < objArray.length) {
                objArray3 = objArray.slice(index + 1);
            }
            objArray = objArray2;
            if (objArray3.length > 0) {
                for (element of objArray3) {
                    objArray.push(element);
                }
            }
        } else {
            index++;
        }
    }
    return objArray;
}
console.log('Original object array: ', obj1, obj2, obj3, obj4, obj5);
console.log('Object array after removing elements: ', removeElement(obj1, obj2, obj3, obj4, obj5));

