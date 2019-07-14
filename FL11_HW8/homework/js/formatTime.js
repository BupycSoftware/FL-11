function formatTime(received_number) {
    let days = 0;
    let hours = 0;
    let minutes = 0;
    while (received_number >= 60) {
        received_number -= 60;
        hours++;
    }
    while (hours >= 24) {
        hours -= 24;
        days++;
    }
    minutes = received_number;
    return days + ' day(s) ' + hours +' hour(s) ' + minutes + ' minute(s).'
}

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));