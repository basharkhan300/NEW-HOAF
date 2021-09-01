function each(items, cb) {
    for (let index = 0; index < items.length; index++) {
        let elements = items[index];
        cb(elements, index);
    }
}

module.exports = each;