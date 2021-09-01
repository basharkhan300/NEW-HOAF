function reduce(items, cb) {
        let startingValue;
        let sum = 0;
    for (let index = 0; index < items.length; index++) {
        let element = items[index];
        startingValue = sum;
        sum = cb(startingValue , element)
    }

    console.log(sum);
    
}

module.exports = reduce;