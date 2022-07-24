const dateFormat = (dateObject) => {
    return dateObject.getHours() + ':' + dateObject.getMonth() + ':' + dateObject.getSeconds();
}

console.log('dateFormat() -> ' + dateFormat(new Date()));