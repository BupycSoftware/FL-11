const max_length_email = 6;
const max_length_password = 5;
let email = prompt('Enter your email: ');

if (email === '' || email === null) {
    alert('Canceled');
} else if (email.length < max_length_email) {
    alert('I don’t know any emails having name length less than 6 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    let password = prompt('Enter your password: ');
    if (password === '' || password === null) {
        alert('Canceled');
    } else if (email === 'user@gmail.com' && password === 'UserPass' 
        || email === 'admin@gmail.com' && password === 'AdminPass') {
        let conf = confirm('Do you want to change your password?');
        if (conf) {
            let old_password = prompt('Your old password: ');
            if (old_password === '' || old_password === null) {
                alert('Canceled');
            } else if (old_password === password) {
                let new_password1 = prompt('Enter new password: ');
                if (new_password1.length < max_length_password) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let new_password2 = prompt('Enter news password again: ');
                    if (new_password2 === new_password1) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password');
                    }
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('You have failed the change.');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}