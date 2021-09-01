const items = require('../arrayData');
const find = require('../find');

find(items, (element) => {
    if(element > 3 ){
        return true;
    }
    
})