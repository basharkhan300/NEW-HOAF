function find(items, cb) {

    let isTrueFound = false;
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        
    if(cb(element)) {
        console.log(element);
        isTrueFound = true;
    }

    
    }
    if(isTrueFound === false){
        console.log(`Undefined`);
    }
    
}

module.exports = find;