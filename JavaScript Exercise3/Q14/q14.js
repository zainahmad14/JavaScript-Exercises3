const fibonacciSeries = (nth) => {
    if (nth == 1) {
        return 0;
    } else if (nth == 2) {
        return 1;
    } else {
        const fibonacciSeriesArray = [0, 1];
        let index = 3;
        while (index <= nth) {
            fibonacciSeriesArray.push(fibonacciSeriesArray[index - 3] + fibonacciSeriesArray[index - 2]);
            index++;
        }
        return fibonacciSeriesArray;
    }
}

console.log('fibonacciSeries() -> ', fibonacciSeries(1));

console.log('fibonacciSeries() -> ', fibonacciSeries(2));

console.log('fibonacciSeries() -> ', fibonacciSeries(4));

console.log('fibonacciSeries() -> ', fibonacciSeries(11));