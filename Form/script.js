document.getElementById("myForm").addEventListener("submit", function(event) {   //Gets the element, form and gives action to the button by connectign it to a function
    event.preventDefault();
  
    var firstName = document.getElementById("firstName").value;                  //Gets all the values of the form and forms them into a variable
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var terms = document.getElementById("terms").checked;
    var mailList = document.getElementById("mailList").checked;
  
    if (firstName.match(/\d+/g)) {                                              //Checks if the first name has numbers in the field
        alert(" First Name should not contain numbers");                        //If First name has numbers it send a alert and pauses the whole program
    }else if (lastName.match(/\d+/g)) {                                         //Checks if the Last name has numbers in the field
        alert("Last Name should not contain numbers");                          //If Last name has numbers it send a alert and pauses the whole program
    }else if (!email.includes(".")){                                            //Checks if the email name includes a . to complete the email
        alert("Email should include .ending \nEX: .com .org .edu");             //If email does not have a . it will send the alert and stop the program
    }else if (password !== confirmPassword) {                                   //Checks if the password and the confirm password match
        alert("Password and Confirm Password do not match");                    //If password and confirm password don't have the same password it will send a alert to stop the whole program 
    } else if (terms==false) {                                                  //Checks if the terms are checked
        alert("Please agree to the terms and conditions");                      //if the terms aren't checked it will send a alert and stop the whole program
    } else {
        alert("Thank You For Signing Up");                                      //If all have been validated then it will send a alert and allow to passthrough
    }
  });