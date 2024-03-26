function validateForm() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
   
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var mss=document.getElementById('mss').value;
    var fnameError = document.getElementById('fnameError');
    var lnameError = document.getElementById('lnameError');
    var emailError = document.getElementById('emailError');  
    var subjectError=document.getElementById('subjectError');
    var messageError=document.getElementById('messageError')
    fnameError.textContent = "";
    lnameError.textContent = "";   
    emailError.textContent = ""; 
    subjectError.textContent="";
    messageError.textContent="";
    var isValid = true;        
    if (fname.trim() === "") {
        fnameError.textContent = "First name is required";
        isValid = false;
    }           

    if (email.trim() === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Invalid email address";
        isValid = false;
    }  
    if (subject.trim() === "") {
        subjectError.textContent = "Subject is required";
        isValid = false;
    }  
    if (mss.trim() === "") {
        messageError.textContent = "Message is required";
        isValid = false;
    }         
    return isValid;
}


function isValidEmail(email) {         
    var re =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.\.-]+\.[a-zA-Z]{2,4}$/;
    // var re =  /^[a-zA-Z]{5}[0-9]{5}_[a-zA-Z]+@banasthali\.[a-zA-Z]{2,4}$/;
    return re.test(email);
}
