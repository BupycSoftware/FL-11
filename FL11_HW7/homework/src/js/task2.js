const attempts = 3;
const more_range = 4;
const coeff = 2;
let current_coeff = 2;
let current_attempt = 3;
let prize = 0;
let default_prize = 100;
let current_prize = 100;
let min = 0;
let default_max = 8;
let max = 8;
let conf = confirm('Do you want to play a game?');

while (conf) {
    const random_number = Math.floor(Math.random() * (max + 1 - min) + min);
    for (let i = 0; i < attempts; i++) {
        let user_number = +prompt('Choose a roulette pocket number from ' + min + ' to ' + max 
        + '\nAttempts left: ' + current_attempt 
        + '\nTotal prize: ' + prize 
        + '$ \nPossible prize on current attempt: ' + current_prize + '$');
        if (user_number === random_number) {
            prize += current_prize;
            conf = confirm('Congratulation, you won!   Your prize is: ' + prize + '$. Do you want to continue?');
            if (conf) {
                max += more_range;
                current_prize = default_prize * current_coeff;
                current_attempt = attempts;
                current_coeff *= coeff;
            } else {
                alert('Thank you for your participation. Your prize is: ' + prize + '$');
                current_coeff = coeff;
                current_attempt = attempts;
                prize = 0;
                current_prize = default_prize;
                max = default_max;
                conf = confirm('Do you want to play again?');
            }
            break;
        }
        current_prize = current_prize / coeff;
        current_attempt--;
    }
    if (current_attempt === 0) {
        alert('Thank you for your participation. Your prize is: ' + prize + '$');
        current_coeff = coeff;
        current_attempt = attempts;
        prize = 0;
        current_prize = default_prize;
        max = default_max;
        conf = confirm('Do you want to play again?');
    }
}
if (!conf) {
    alert('You did not become a billionaire, but can.');
}


alert("test");