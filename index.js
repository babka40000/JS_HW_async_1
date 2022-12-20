function getPasswordChecker(correctPassword) {
    return function(pwd) {
        return pwd == correctPassword;
    }
}

check1 = getPasswordChecker('password1')
console.log(check1('password2'))

check1 = getPasswordChecker('password1')
console.log(check1('password1'))