const repeatString = function(phrase, num) {

    if (num < 0) {
        return('ERROR');
    }
    let word = "";
    for (let i = 0; i < num; i++) {
        word += phrase;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
