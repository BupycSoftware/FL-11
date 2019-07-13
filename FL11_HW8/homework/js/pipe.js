function addOne(x) {
    return x + 1;
}

function pipe(number) {
    for(let i = 1; i < arguments.length; i++) {
        let next = arguments[i];
        number = next(number)
    }
    return number;
}

console.log(pipe(1, addOne));