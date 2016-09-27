/* Meri Wincheser */
/* 9/25/16 */

"use strict";
var $ = function(id){
    return document.getElementById(id);
};
var myError = document.getElementById("errorMsg");

function checkFirst(){
    var fname = $("first").value;
    var testName = new RegExp("^[a-zA-Z]+$");
    if(!testName.test(fname)){
        myError.innerHTML="Names should only include text characters and do spaces";
        $("first").value = "";
    }
    else{
        myError.innerHTML = "First name meets criteria";
    }
}

function checkLast(){
    var lname = $("last").value;
    var testName = new RegExp("^[a-zA-Z]+$");
    if(!testName.test(lname)){
        myError.innerHTML = "Names should only include text characters and do spaces";
        $("last").value = "";
    }else{
        myError.innerHTML = "Last name meets criteria";
    }

}
function checkEmail(){
    var myEmail = $("email").value;
    var testEmail = new RegExp(".+\@.+\..+");
    if(!testEmail.test(myEmail)){
        myError.innerHTML = "That is not a proper email, it needs an @ and a domain";
        $("email").value = "";
    }
    else{
        myError.innerHTML = "Email meets requirements";
    }
}


function checkPhone(){
    var phone = $("phone").value;
    var testPhone = new RegExp("^([\(]{1}[0-9]{3}[\)]{1}[ ]{1}[0-9]{3}[\-]{1}[0-9]{4})$");
    if(!testPhone.test(phone)){
        myError.innerHTML="Please use the format (555) 555-5555'";
        $("phone").value = "";
    }
    else{
        myError.innerHTML = "Phone number meets criteria";
    }

}

