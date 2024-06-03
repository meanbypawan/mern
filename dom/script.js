function validateProfile(){
    var status = true;
    var profile = document.getElementById("profile");
    var profileError = document.getElementById("profileError");
    if(!profile.files[0]){
        status = false;
        profileError.innerHTML = "Please upload pic";
    }
    else{
        var picName = profile.files[0].name; // "pickachoo.png"
        var lastDotIndex = picName.lastIndexOf(".");
        var fileExtension = picName.substring(lastDotIndex);
        if(fileExtension!=".png"){
            status = false;
            profileError.innerHTML = "Only png allowed";
        }
        else
         profileError.innerHTML = "";
    }
    return status;
}
function validateGender(){
    var status = true;
    var rdMale = document.querySelector("#rdMale").checked;
    var rdFemale = document.querySelector("#rdFemale").checked;
    var genderError = document.querySelector("#genderError");
    if(rdMale == false && rdFemale == false){
        status = false;
        genderError.innerHTML = "Please select gender";
    }
    else
     genderError.innerHTML = "";
    return status;
}
function validateQualification(){
    var status = true;
    var qualification = document.querySelector("#qualification").value;
    var qualificationError = document.querySelector("#qualificationError");
    if(qualification == "0"){
        status = false;
        qualificationError.innerHTML = "Please select qualification";
    }
    else
     qualificationError.innerHTML = "";
    return status;
}
function validateContact(){
    var status = true;
    var contact = document.querySelector("#contact").value;
    var contactError = document.querySelector("#contactError");
    if(contact.length == 0){
        status = false;
        contactError.innerHTML = "contact is required";
    }
    else if(isNaN(contact)){
        status = false;
        contactError.innerHTML = "Only digit allowed";
    }
    else if(contact.length != 10){
        status = false;
        contactError.innerHTML = "Invalid contact number";
    }
    else
     contactError.innerHTML = "";
    return status;
}
function togglePassword(){
    var toggleButton = document.querySelector("#toggle-button");
    var passwordInput = document.querySelector("#password");
    var buttonText = toggleButton.innerText;
    if(buttonText == "Show"){
       passwordInput.type="text";
       toggleButton.innerText = "Hide";
    }
    else{
        passwordInput.type ="password";
        toggleButton.innerText = "Show";
    }
}
function validatePassword(){
    var status = true;
    var password = document.querySelector("#password").value;
    var passwordError = document.querySelector("#passwordError");
    if(password.length == 0){
        status = false;
        passwordError.innerHTML = "password is required.";
    }
    else if(password.length < 6 || password.length > 10){
       status = false;
       passwordError.innerHTML = "password length must be b/w (6 to 10)";
    }
    else
      passwordError.innerHTML = "";
    return status;
}
function validateUsername(){
    var status = true;
    var username = document.querySelector("#username").value;
    var usernameError = document.querySelector("#usernameError");
    if(username.length == 0){
      status = false;
      usernameError.innerHTML = "Username is required..";
    }
    else if(!isSpecialLetterExist(username)){
        status = false;
        usernameError.innerHTML = "Special letter missing";
    }
    else
      usernameError.innerHTML = "";
    return status;
}
function isSpecialLetterExist(data){
    var status = false;
    for(var index = 0; index<data.length; index++){
        var ch = data.charAt(index);
        if(!(ch>='A' && ch <='Z'))
          if(!(ch>='a' && ch <= 'z'))
           if(!(ch>='0' && ch<='9')){
            status = true;
            break;
           }

    }
    return status;
}
function validateData(){
   var usernameStatus = validateUsername();
   var passwordStatus = validatePassword();
   var contactStatus = validateContact();
   var qualificationStatus = validateQualification();
   var genderStatus = validateGender();
   var profileStatus = validateProfile();
   if(usernameStatus && passwordStatus && contactStatus && qualificationStatus && genderStatus && profileStatus)
     return true;
   return false; 
}
