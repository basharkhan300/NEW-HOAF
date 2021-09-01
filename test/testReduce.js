const items = require('../arrayData');
const reduce = require('../reduce');

reduce(items, (startingValue, element) => {
 return startingValue += element;
})