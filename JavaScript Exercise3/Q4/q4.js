const arrayOfLines = (filename) => {
    var fs = require('fs');
    let fileData = '';
    fs.readFile('file.txt', function(err, data) {
        if (err) {
            throw  err;
        }
        fileData = data.toString();
        //console.log(fileData);
        const data2 = [];
        let arrayData = '';
        for (char of fileData) {
            if (char.toString() == '\n') {
                arrayData = '';
            } else if (char.toString() == '\r') {
                data2.push(arrayData);
                arrayData = '';
            } else {
                arrayData += char.toString();
            }
        }
        data2.push(arrayData);
        arrayData = char.toString();
        console.log(data2);
    }); 
    
}

console.log('arrayOfLines() -> ');
arrayOfLines('file.txt');
