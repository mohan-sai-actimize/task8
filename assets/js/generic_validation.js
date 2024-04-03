function validateForm(){
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let dob = document.getElementById('dob');
    let country = document.getElementById('country');
    let male = document.getElementById('male').checked;
    let female = document.getElementById('female').checked;
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let password = document.getElementById('password');
    let reenterPassword = document.getElementById('reenterPassword');
    let agree = document.getElementById('agree').checked;

    let isValid = true;

    // First Name Validation
    let firstName = fname.value.trim();
    let namePattern = /^[a-zA-Z\s'-]+$/;
    if (firstName === '' || !(firstName.at(0) >= 'A' && firstName.at(0)<='Z') || firstName.length < 3 || !namePattern.test(firstName)) {
        console.log('invalid');
        fname.classList.add('invalid-input');
        document.getElementById('fnameError').style.display = 'block';
        isValid = false;
            lname.classList.remove('invalid-input');
            document.getElementById('lnameError').style.display = 'none';
            dob.classList.remove('invalid-input');
            document.getElementById('dobError').style.display = 'none';
            document.getElementById('genderError').style.display = 'none';
            country.classList.remove('invalid-input');
            document.getElementById('countryError').style.display = 'none';
            email.classList.remove('invalid-input');
            document.getElementById('emailError').style.display = 'none';
            phone.classList.remove('invalid-input');
            document.getElementById('phoneError').style.display = 'none';
            password.classList.remove('invalid-input');
            document.getElementById('passwordError').style.display = 'none';
            reenterPassword.classList.remove('invalid-input');
            document.getElementById('reenterError').style.display = 'none';
            document.getElementById('agreeError').style.display = 'none';
        return false;
    }
    else {
        fname.classList.remove('invalid-input');
        document.getElementById('fnameError').style.display = 'none';
    }
    //Last Name Validation
    let lastName = lname.value.trim();
    if (lastName === '' || !(lastName.at(0) >= 'A' && lastName.at(0) <='Z') || lastName.length < 3 || !namePattern.test(lastName)){
        lname.classList.add('invalid-input');
        document.getElementById('lnameError').style.display = 'block';
        isValid = false;
            dob.classList.remove('invalid-input');
            document.getElementById('dobError').style.display = 'none';
            document.getElementById('genderError').style.display = 'none';
            country.classList.remove('invalid-input');
            document.getElementById('countryError').style.display = 'none';
            email.classList.remove('invalid-input');
            document.getElementById('emailError').style.display = 'none';
            phone.classList.remove('invalid-input');
            document.getElementById('phoneError').style.display = 'none';
            password.classList.remove('invalid-input');
            document.getElementById('passwordError').style.display = 'none';
            reenterPassword.classList.remove('invalid-input');
            document.getElementById('reenterError').style.display = 'none';
            document.getElementById('agreeError').style.display = 'none';
        return false;
    } 
    else {
        lname.classList.remove('invalid-input');
        document.getElementById('lnameError').style.display = 'none';
    }
    //Date of Birth Validation
    let date = dob.value.trim();
    let birth = new Date(dob.value.trim());
    let present = new Date();
    let ageDifferenceInMilliseconds = present.getTime() - birth.getTime();
    let ageDifferenceInYears = ageDifferenceInMilliseconds / (1000 * 60 * 60 * 24 * 365);
    if (date === '' || ageDifferenceInYears < 18 ) {
        dob.classList.add('invalid-input');
        document.getElementById('dobError').style.display = 'block';
        isValid = false;
            document.getElementById('genderError').style.display = 'none';
            country.classList.remove('invalid-input');
            document.getElementById('countryError').style.display = 'none';
            email.classList.remove('invalid-input');
            document.getElementById('emailError').style.display = 'none';
            phone.classList.remove('invalid-input');
            document.getElementById('phoneError').style.display = 'none';
            password.classList.remove('invalid-input');
            document.getElementById('passwordError').style.display = 'none';
            reenterPassword.classList.remove('invalid-input');
            document.getElementById('reenterError').style.display = 'none';
            document.getElementById('agreeError').style.display = 'none';
        return false;
    }
    else {
        dob.classList.remove('invalid-input');
        document.getElementById('dobError').style.display = 'none';
    }
    //Gender Validation
    if (!male && !female) {
        document.getElementById('genderError').style.display = 'block';
        isValid = false;
            country.classList.remove('invalid-input');
            document.getElementById('countryError').style.display = 'none';
            email.classList.remove('invalid-input');
            document.getElementById('emailError').style.display = 'none';
            phone.classList.remove('invalid-input');
            document.getElementById('phoneError').style.display = 'none';
            password.classList.remove('invalid-input');
            document.getElementById('passwordError').style.display = 'none';
            reenterPassword.classList.remove('invalid-input');
            document.getElementById('reenterError').style.display = 'none';
            document.getElementById('agreeError').style.display = 'none';
        return false;
    } 
    else {
        document.getElementById('genderError').style.display = 'none';
    }
    //Country Validation
    if(country.value.trim() === ''){
        country.classList.add('invalid-input');
        document.getElementById('countryError').style.display = 'block';
        isValid = false;
            email.classList.remove('invalid-input');
            document.getElementById('emailError').style.display = 'none';
            phone.classList.remove('invalid-input');
            document.getElementById('phoneError').style.display = 'none';
            password.classList.remove('invalid-input');
            document.getElementById('passwordError').style.display = 'none';
            reenterPassword.classList.remove('invalid-input');
            document.getElementById('reenterError').style.display = 'none';
            document.getElementById('agreeError').style.display = 'none';
        return false;
    }
    else{
        country.classList.remove('invalid-input');
        document.getElementById('countryError').style.display = 'none';
    }
    //E-mail validation
    let emailInput = email.value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput)) {
        email.classList.add('invalid-input');
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
            phone.classList.remove('invalid-input');
            document.getElementById('phoneError').style.display = 'none';
            password.classList.remove('invalid-input');
            document.getElementById('passwordError').style.display = 'none';
            reenterPassword.classList.remove('invalid-input');
            document.getElementById('reenterError').style.display = 'none';
            document.getElementById('agreeError').style.display = 'none';
        return false;
    } 
    else {
        email.classList.remove('invalid-input');
        document.getElementById('emailError').style.display = 'none';
    }
    //Phone Number Validation
    let phoneInput = phone.value.trim();
    let phonePattern = /^\+\d{1,3}[6-9]\d{9}$/;
    if (!phonePattern.test(phoneInput) ) {
        phone.classList.add('invalid-input');
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
            password.classList.remove('invalid-input');
            document.getElementById('passwordError').style.display = 'none';
            reenterPassword.classList.remove('invalid-input');
            document.getElementById('reenterError').style.display = 'none';
            document.getElementById('agreeError').style.display = 'none';
        return false;
    } 
    else {
        phone.classList.remove('invalid-input');
        document.getElementById('phoneError').style.display = 'none';
    }
    //Password Validation
    let passwordInput = password.value.trim();
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    if(!passwordPattern.test(passwordInput)){
        password.classList.add('invalid-input');
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
            reenterPassword.classList.remove('invalid-input');
            document.getElementById('reenterError').style.display = 'none';
            document.getElementById('agreeError').style.display = 'none';
        return false;
    }
    else{
        password.classList.remove('invalid-input');
        document.getElementById('passwordError').style.display = 'none';
    }
    //Re-enter Password Validation
    let reenterInput = reenterPassword.value.trim();
    if(!(reenterInput === passwordInput) || reenterInput === ''){
        reenterPassword.classList.add('invalid-input');
        document.getElementById('reenterError').style.display = 'block';
        isValid = false;
            document.getElementById('agreeError').style.display = 'none';
        return false;
    }
    else{
        reenterPassword.classList.remove('invalid-input');
        document.getElementById('reenterError').style.display = 'none';
    }
    //Privacy Policy agreement Validation
    if(!agree){
        document.getElementById('agreeError').style.display = 'block';
        isValid = false;
        return false;
    }
    else{
        document.getElementById('agreeError').style.display = 'none';
    }
    //Form-submit, Form-reset and Display ThankYOu Modal
    if(isValid){
        let thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
        thankYouModal.show();
        document.getElementById('basicForm').reset();
    }
}

//Show Password Button Functionality 
function showPassword(element){
    if(element.type === 'password'){
        element.type = 'text';
    }
    else
    {
        element.type = 'password';
    }
}