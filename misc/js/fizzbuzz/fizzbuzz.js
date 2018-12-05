function isDivisibleBy(number, divisor) {
    if (number % divisor === 0) {
        return true;
    }
}

function says(number) {
    if (isDivisibleBy(number, 15) === true) {
        return "fizzbuzz";
    }
    if (isDivisibleBy(number, 3) === true) {
        return "fizz";
    }
    if (isDivisibleBy(number, 5) === true) {
        return "buzz";
    }
    return number;
}

module.exports = {
    isDivisibleBy: isDivisibleBy,
    says: says
};
