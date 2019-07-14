function getNumbers(string) {
    let array = new Array();
    value = +string;
    console.log(value);
    for (let i = 0; i < string.length; i++) {
        console.log(typeof string[i]);
        if (typeof string[i] === Number) {
            array.push(string[i]);
        }
    }
    return array;
}

console.log(getNumbers('n1um3ber95'));