const items = require('../arrayData');
const filter = require('../filter');

const result = filter(items, (element) => {
    let newArr = [];

    for (let index = 0; index < items.length; index++) {
                
        if (items[index] === 2) {
            newArr.push(items[index]);
        }
        
    }
    
    return newArr;
    
    
})

console.log(result);