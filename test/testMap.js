const items = require('../arrayData');
const map = require('../map');

const res =  map(items, (elements) => {
    return elements * 10;
})

console.log(res);