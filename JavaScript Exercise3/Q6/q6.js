const isJSON = (string) => {
    try {
        JSON.parse(string);
    } catch(err) {
        return 'This is not JSON Object';
    }
    return 'This is JSON Object'
}


console.log('isJSON() -> ' + isJSON('{"name": "Zain Ahmad", "age": 30}'));

console.log('isJSON() -> ' + isJSON('{\'name\': \'Zain Ahmad\', \'age\': 30}'));