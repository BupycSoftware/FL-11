let a = +prompt('Enter a= ');
let b = +prompt('Enter b= ');
let c = +prompt('Enter c= ');

if (a + b >= c && a + c >= b && b + c >= a) {
    if (a === b && a === c && b === c) {
        console.log('Eequivalent triangle');
    } else if (a === b || a === c || b === c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}