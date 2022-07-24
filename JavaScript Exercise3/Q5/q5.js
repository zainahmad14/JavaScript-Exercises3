async function asyncFunction() {
    return 'asyncFunction()';
}
asyncFunction().then(
    function() {
        console.log('Producing Code');
    }, function() {
        console.log('Consuming code');
    }
);
console.log(asyncFunction());
