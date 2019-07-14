function getMin() {
    let min_value = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (min_value > arguments[i]) {
            min_value = arguments[i];
        }
    }
    return min_value;
}

console.log(getMin(3, 0, -3));