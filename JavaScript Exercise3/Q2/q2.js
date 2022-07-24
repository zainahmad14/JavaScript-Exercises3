const reduction = (reduction, currentValue) => {
    return reduction -= currentValue;
}

const reduce = (...array) => array.reduce(reduction);

console.log('reduce() -> ' + reduce(1, 2, 3, 4));

console.log('reduce() -> ' + reduce(1, 2, -3));

console.log('reduce() -> ' + reduce(1, 2, 3, 4, 7, -11, 10));