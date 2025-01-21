const removeFromArray = function(numArr, ...numToRemove) {

    for (let i = 0; i < numToRemove.length; i++){
        let targetNum = numArr.indexOf(numToRemove[i]);

        while (targetNum !== -1 ) {
            numArr.splice(targetNum, 1);
            targetNum = numArr.indexOf(numToRemove[i]);
        }
    }
    return numArr;
};

// Do not edit below this line
module.exports = removeFromArray;
