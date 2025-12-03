const removeFromArray = function(arr, ...itemToDelete) {
    return arr.filter((item) => {
        let isDel = false;
        for(arg of itemToDelete){
            if (item === arg){
                isDel = true;
                break;
            }
        }
        if (isDel === false){
            return item;
        }

    })
};

// Do not edit below this line
module.exports = removeFromArray;
