var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//CONVERTING FIGURES INTO ORDINAL NUMBERS
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var eachNumber = numbers_1[_i];
    var ordinalnumber = void 0;
    if (eachNumber == 1) {
        ordinalnumber = "st";
    }
    else if (eachNumber == 2) {
        ordinalnumber = "nd";
    }
    else if (eachNumber == 3) {
        ordinalnumber = "rd";
    }
    else {
        ordinalnumber = "th";
    }
    console.log("".concat(eachNumber).concat(ordinalnumber));
}
;
