//generate random password
function generate(){

    //set password length
    let complexity = document.getElementById("slider").value;

    //possible password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+{}[]:;/?<>";

    let password = "";

    //loop to choose password characters
    for(var i = 0 ; i < complexity ; i++){
        password = password + values.charAt(Math.floor(Math.random() * (values.length + 1)));
    }

    //display password
    document.getElementById("display").value = password;

}

//default length 8
document.getElementById("length").innerHTML = "8";

//function to set length based on slider position
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "1";
    }

}