function map(items, cb) {
    let newArr = [];
    for (let index = 0; index < items.length; index++) {
        let element = items[index];
        newArr.push(cb(element));

    }
    return newArr;
}


module.exports = map;