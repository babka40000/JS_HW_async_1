function getPasswordChecker(password) {
    let correctPassword = 'correct_password'; 

    return function(pwd) {
        return password == correctPassword;
    }
}

check1 = getPasswordChecker('incorrect_password')
console.log(check1())

check1 = getPasswordChecker('correct_password')
console.log(check1())