const leapYears = function(year) {

    divBy4 = year % 4;
    divBy100 = year % 100;
    divBy400 = year % 400;

    if (divBy400 === 0) { 
        return true;
    }
    else if (divBy100 === 0 && divBy400 === 0) { 
        return true;
    }
    else if (divBy100 === 0) {
        return false;
    }
    else if (divBy4 === 0) {
        return true;
    }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
