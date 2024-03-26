function validateForm() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var uid = document.getElementById('uid').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;

    var fnameError = document.getElementById('fnameError');
    var lnameError = document.getElementById('lnameError');
    var uidError = document.getElementById('uidError');
    var emailError = document.getElementById('emailError');
    var mobileError = document.getElementById('mobileError');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');

    fnameError.textContent = "";
    lnameError.textContent = "";
    uidError.textContent = "";
    emailError.textContent = "";
    mobileError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    var isValid = true;

    if (fname.trim() === "") {
        fnameError.textContent = "First name is required";
        isValid = false;
    }

    if (uid.trim() === "") {
        uidError.textContent = "User ID is required";
        isValid = false;
    }else if(!isValidUserID(uid)){
    uidError.textContent = "Must contain only 5 alphabets and 5 numbers and 10 character long";
        isValid = false;
    }

    if (email.trim() === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Invalid email address";
        isValid = false;
    }

    if (mobile.trim() === "") {
        mobileError.textContent = "Mobile number is required";
        isValid = false;
    } else if (!isValidMobile(mobile)) {
        mobileError.textContent = "Invalid mobile number";
        isValid = false;
    }

    if (password.trim() === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
    }
else if(!isValidPassword(password)){
    passwordError.textContent = "Must contain at least 1 number,1 uppercase and 1 lowercase letter, and at least 8 character long";
        isValid = false;
}

    if (confirmPassword.trim() === "") {
        confirmPasswordError.textContent = "Confirm password is required";
        isValid = false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match";
        isValid = false;
    }

    return isValid;
}

function isValidUserID(uid) {
    var re =  /^[a-zA-Z]{5}[0-9]{5}$/;
    return re.test(uid);
}

function isValidEmail(email) {

    // var re =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.\.-]+\.[a-zA-Z]{2,4}$/;
    var re =  /^[a-zA-Z]{5}[0-9]{5}_[a-zA-Z]+@banasthali\.[a-zA-Z]{2,4}$/;
    return re.test(email);
}

function isValidMobile(mobile) {
 
    var re = /^[1-9][0-9]{9}$/;
    return re.test(mobile);
}
function isValidPassword(password) {
var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    return re.test(password);
}