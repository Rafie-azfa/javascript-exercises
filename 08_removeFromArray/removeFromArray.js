const removeFromArray = function(arr) {
    const args = Array.prototype.slice.call(arguments, 1);
    return arr.filter( (item) => {
        for(arg of args){
            return item !== arg;
        }
    })
};

// Do not edit below this line
module.exports = removeFromArray;
