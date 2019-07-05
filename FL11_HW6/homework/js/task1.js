const two = 2;
let a1 = +prompt('Enter a1: ');
let a2 = +prompt('Enter a2: ');
let b1 = +prompt('Enter b1: ');
let b2 = +prompt('Enter b2: ');
let c1 = +prompt('Enter c1: ');
let c2 = +prompt('Enter c2: ');
let middle_x = (a1 + b1) / two;
let middle_y = (a2 + b2) / two;

if (middle_x === c1 && middle_y === c2) {
    console.log(true);
} else {
    console.log(false);
}