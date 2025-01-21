const reverseString = function(phrase) {

    let newPhrase = "";

    for (let i = phrase.length-1; i >= 0; i--) {
        newPhrase += phrase[i];
    }

    return newPhrase;
};

// Do not edit below this line
module.exports = reverseString;
