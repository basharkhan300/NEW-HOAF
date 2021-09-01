const items = require('../arrayData');
const each = require('../each')

each(items, (elements, index) => console.log(`${elements} ${index}`))