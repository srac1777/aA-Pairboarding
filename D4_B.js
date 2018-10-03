// Write a function that takes a year(four digit integer) and returns an array
//  with the 10 closest subsequent years that meet the following condition: 
// the first two digits summed with the last two digits
//  are equal to the middle two digits.E.g.,

// 1978 => 19 + 78 = 97
// 2307 => 23 + 07 = 30

const sillyYears = inputYr => {
    let res = [];
    let currentYr = inputYr + 1;

    while(res.length !== 10){
        if(yrChecker(currentYr)) res.push(currentYr);
        currentYr += 1;
    }
    return res;
}

const yrChecker = yrToBeChecked => {
    let firstTwo = Math.floor(yrToBeChecked / 100);
    let lastTwo = yrToBeChecked % 100;
    let middleTwo = Math.floor(yrToBeChecked / 10) % 100;

    if(firstTwo + lastTwo === middleTwo) return true;
    else return false;
}

console.log(sillyYears(1986));
