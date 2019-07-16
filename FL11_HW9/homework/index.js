function getNumbers(string) {
    let array = new Array();
    for (let i = 0; i < string.length; i++) {
        if (parseFloat(string[i])) {
            let test = parseFloat(string[i]);
            array.push(test);
        }
    }
    return array;
}

function findTypes() {
    const obj = new Object();
    for (let i = 0; i < arguments.length; i++) {
        let type = typeof arguments[i];
        obj[type] ? obj[type]++ : obj[type] = 1;
    }
    return obj;
}

function executeforEach(received_array, received_function) {
    for (let i = 0; i < received_array.length; i++) {
        received_function(received_array[i]);
    }
}

function mapArray(received_array, received_function) {
    let array = [];
    executeforEach(received_array, function(el) {
        array.push(received_function(el));
    });
    return array;
}

function filterArray(received_array, received_function) {
    let array = [];
    executeforEach(received_array, function(el) {
        const status = received_function(el);
        if (status) {
            array.push(el);
        }
    });
    return array;
}

function showFormattedDate(received_date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let month_index = received_date.getMonth();
    let result = 'Date: ' + months[month_index] + ' ' + received_date.getDate() + ' ' + received_date.getFullYear();
    return result;
}

function canConvertToDate(string) {
    let received_date = new Date(string);
    if (Date.parse(received_date)) {
        return true;
    }
    return false;
}

function daysBetween(first_date, second_date) {
    const thousand = 1000;
    const sixty = 60;
    const twenty_four = 24;
    let daysInFirst = Math.floor(Date.parse(first_date) / (thousand * sixty * sixty * twenty_four));
    let daysInSecond = Math.floor(Date.parse(second_date) / (thousand * sixty * sixty * twenty_four));
    return daysInSecond - daysInFirst;
}

function getAmountOfAdultPeople(data) {
    const oneYear = 365;
    const adult = 18;
    let array = [];
    for (let i = 0; i < data.length; i++) {
        const user_birthday = data[i].birthday;
        const years = daysBetween(user_birthday, new Date()) / oneYear;
        array.push(years);
    }
    const fullYears = filterArray(array, function(el) {
        return el >= adult;
    });
    return fullYears.length;
}

function keys(received_object) {
    let array = [];
    for (let prop in received_object) {
        if ({}.hasOwnProperty.call(received_object, prop)) {
            array.push(prop);
        }
    }
    return array;
}

function values(received_object) {
    let array = [];
    for (let prop in received_object) {
        if ({}.hasOwnProperty.call(received_object, prop)) {
            array.push(received_object[prop]);
        }
    }
    return array;
}