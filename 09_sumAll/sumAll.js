const sumAll = function(numA, numB) 
{
     if(numA < 0 || numB < 0 || !Number.isInteger(numA) || !Number.isInteger(numB)){
        return "ERROR";
    }  
    
    const minNum = Math.min(numA, numB);
    const maxNum = Math.max(numA, numB);

    let result = 0;
    for(let i = minNum; i <= maxNum; i++){
        result += i;
    }
    return result; 
};

// Do not edit below this line
module.exports = sumAll;
