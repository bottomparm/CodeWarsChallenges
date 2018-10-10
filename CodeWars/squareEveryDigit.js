// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    let digits = num.toString().split('');
    let Digits = digits.map(Number);
    let result = '';
    result += Math.pow(Digits[0], 2).toString();
    Digits.reduce((e, i) => result += Math.pow(i, 2).toString());
    return parseInt(result);
}

console.log(squareDigits(12345));