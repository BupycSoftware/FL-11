function isInteger(a) {
    return (a ^ 0) === a;
}

console.log(isInteger(5));
console.log(isInteger(5.1));