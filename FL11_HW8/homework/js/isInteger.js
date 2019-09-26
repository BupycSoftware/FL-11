function isInteger(number) {
    return (number ^ 0) === number;
}

console.log(isInteger(5));
console.log(isInteger(5.1));