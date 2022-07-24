const initializeArray = (start, end, step) => {
    if (step == 1) {
        console.log('Error: Step is 1');
        return;
    } else {
        const array = [];
        let value = start + step;
        array.push(start);
        while (value <= end) {
            array.push(value);
            value += step;
        }
        if (array[array.length - 1] != end) {
            array.push(end);
        }
        return array;
    }
}

console.log('initializeArray() -> ', initializeArray(1, 4, 1));

console.log('initializeArray() -> ', initializeArray(1, 4, 4));

console.log('initializeArray() -> ', initializeArray(1, 25, 3));