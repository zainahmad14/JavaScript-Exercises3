const iteratePropertiesReversely = (object) => {
    Object.keys(object).reverse().forEach(element => {
        console.log(`Key is: ${element}, Value is: ${object[element]}`);
    });
}
const object = {
    'fname': 'Zain',
    'lname': 'Ahmad',
    'age': 20,
    'gender': 'Male'
}
console.log('iteratePropertiesReversely() -> ', iteratePropertiesReversely(object));