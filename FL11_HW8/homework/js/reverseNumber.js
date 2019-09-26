function reverseNumber(number) {
    let sign = Math.sign(number);
    let x = 0;
    if (sign === -1) {
        number = -number;
    }
    while (number > 0) {
        x = x * 10 + number % 10;
        number = ~~(number / 10);
    }
    return sign * x;
}

console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(10000));