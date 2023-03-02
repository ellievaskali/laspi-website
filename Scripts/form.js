// const form = document.getElementById("myForm");
// form.addEventListener("submit", validateForm);

// function validateForm(event) {
//   event.preventDefault();
  
//   const name = document.getElementById("name").value;
//   const age = document.getElementById("age").value;
//   const email = document.getElementById("email").value;

//   if (name === "") {
//     alert("Name field is required");
//   } else if (isNaN(age)) {
//     alert("Age field must be a number");
//   } else if (age < 0 || age > 120) {
//     alert("Age must be between 0 and 120");
//   } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1 || email.length < 5) {
//     alert("Please enter a valid email address");
//   } else {
//     alert("Form submitted successfully!");
//   }
// }

// function validateName() {
//     const name = document.getElementById("name").value;
//     const nameError = document.getElementById("nameError");
//     if (!isNaN(name)) {
//       nameError.innerHTML = "Name should be a text";
//     } else {
//       nameError.innerHTML = "";
//     }
//   }
  
//   function validateAge() {
//     const age = document.getElementById("age").value;
//     const ageError = document.getElementById("ageError");
//     if (isNaN(age) || age < 0) {
//       ageError.innerHTML = "Age should be a positive number";
//     } else {
//       ageError.innerHTML = "";
//     }
//   }
  
//   function validateEmail() {
//     const email = document.getElementById("email").value;
//     const emailError = document.getElementById("emailError");
//     if (email.indexOf("@") === -1 || email.indexOf(".") === -1 || email.length < 5) {
//       emailError.innerHTML = "Please enter a valid email address";
//     } else {
//       emailError.innerHTML = "";
//     }
//   }
  
//   function validateForm() {
//     const name = document.getElementById("name").value;
//     const age = document.getElementById("age").value;
//     const email = document.getElementById("email").value;
  
//     if (!isNaN(name)) {
//       alert("Name should be a text");
//       return false;
//     } else if (isNaN(age) || age < 0) {
//       alert("Age should be a positive number");
//       return false;
//     } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1 || email.length < 5) {
//       alert("Please enter a valid email address");
//       return false;
//     } else {
//       alert("Form submitted successfully!");
//       return true;
//     }
//   }





// var form = document.getElementById("myForm");

// form.addEventListener("submit", function(event) {
//   event.preventDefault();
  
//   // Age validation
//   var age = document.getElementById("age").value;
//   if (age <= 0) {
//     alert("Age must be a positive number.");
//     return false;
//   }
  
//   // Email validation
//   var email = document.getElementById("email").value;
//   var verifyEmail = document.getElementById("verify-email").value;
//   if (email !== verifyEmail) {
//     alert("Emails do not match.");
//     return false;
//   }
  
//   // Phone number validation
//   var phone = document.getElementById("phone").value;
//   if (phone.length !== 10) {
//     alert("Phone number must be 10 digits.");
//     return false;
//   }
  
//   // Form is valid
//   alert("Form submitted successfully!");
// });



// var form = document.getElementById("myForm");

// // Add oninput event listeners to the form inputs
// document.getElementById("name").oninput = function() {
//   checkName();
// }
// document.getElementById("age").oninput = function() {
//   checkAge();
// }
// document.getElementById("email").oninput = function() {
//   checkEmail();
// }
// document.getElementById("verify-email").oninput = function() {
//   checkVerifyEmail();
// }
// document.getElementById("phone").oninput = function() {
//   checkPhone();
// }

// form.addEventListener("submit", function(event) {
//   event.preventDefault();

//   // check if the inputs are valid
//   if(!checkName() || !checkAge() || !checkEmail() || !checkVerifyEmail() || !checkPhone()) {
//     return false;
//   }
//   // Form is valid
//   alert("Form submitted successfully!");
// });

// // Validation functions
// function checkName() {
//   var name = document.getElementById("name").value;
//   if(name.length < 3) {
//     document.getElementById("name").setCustomValidity("Name must have at least 3 characters.");
//     return false;
//   }
//   document.getElementById("name").setCustomValidity("");
//   return true;
// }

// function checkAge() {
//   var age = document.getElementById("age").value;
//   if (age <= 0) {
//     document.getElementById("age").setCustomValidity("Age must be a positive number.");
//     return false;
//   }
//   document.getElementById("age").setCustomValidity("");
//   return true;
// }

// function checkEmail() {
//   var email = document.getElementById("email").value;
//   if(email.length < 5) {
//     document.getElementById("email").setCustomValidity("Email must have at least 5 characters.");
//     return false;
//   }
//   document.getElementById("email").setCustomValidity("");
//   return true;
// }

// function checkVerifyEmail() {
//   var email = document.getElementById("email").value;
//   var verifyEmail = document.getElementById("verify-email").value;
//   if (email !== verifyEmail) {
//     document.getElementById("verify-email").setCustomValidity("Emails do not match.");
//     return false;
//   }
//   document.getElementById("verify-email").setCustomValidity("");
//   return true;
// }

// function checkPhone() {
//   var phone = document.getElementById("phone").value;
//   if (phone.length !== 10) {
//     document.getElementById("phone").setCustomValidity("Phone number must be 10 digits.");
//     return false;
//   }
//   document.getElementById("phone").setCustomValidity("");
//   return true;
// }


// const form = document.getElementById("myForm");
// form.addEventListener("submit", validateForm);

// function validateForm(event) {
//   event.preventDefault();

//   let isValid = true;

//   // Validate name
//   const name = document.getElementById("name").value;
//   if (name === "") {
//     document.getElementById("nameError").innerHTML = "Name is required";
//     document.getElementById("nameError").style.display = "block";
//     document.getElementById("name").classList.add("invalid");
//     isValid = false;
//   } else {
//     document.getElementById("nameError").style.display = "none";
//     document.getElementById("name").classList.add("valid");
//   }

//   // Validate age
//   const age = document.getElementById("age").value;
//   if (age === "" || age <= 0) {
//     document.getElementById("ageError").innerHTML = "Age must be a positive number";
//     document.getElementById("ageError").style.display = "block";
//     document.getElementById("age").classList.add("invalid");
//     isValid = false;
//   } else {
//     document.getElementById("ageError").style.display = "none";
//     document.getElementById("age").classList.add("valid");
//   }

//   // Validate email
//   const email = document.getElementById("email").value;
//   const verifyEmail = document.getElementById("verifyEmail").value;
//   if (email === "" || email !== verifyEmail) {
//     document.getElementById("emailError").innerHTML = "Emails do not match";
//     document.getElementById("verifyEmailError").innerHTML = "Emails do not match";
//     document.getElementById("emailError").style.display = "block";
//     document.getElementById("verifyEmailError").style.display = "block";
//     document.getElementById("email").classList.add("invalid");
//     document.getElementById("verifyEmail").classList.add("invalid");
//     isValid = false;
//   } else {
//     document.getElementById("emailError").style.display = "none";
//     document.getElementById("verifyEmailError").style.display = "none";
//     document.getElementById("email").classList.add("valid");
//     document.getElementById("verifyEmail").classList.add("valid");
//   }

//   // Validate city
//   const city = document.getElementById("city").value;
//   if (city === "") {
//     document.getElementById("cityError").innerHTML = "City is required";
//     document.getElementById("cityError").style.display = "block";
//     document.getElementById("city").classList.add("invalid");
//     isValid = false;
//   } else {
//     document.getElementById("cityError").style.display = "none";
//     document.getElementById("city").classList.add("valid");
//   }

//   // Validate phone number
//   const phoneNumber = document.getElementById("phoneNumber")
//   if (phoneNumber === "" || phoneNumber.length !== 10) {
//     document.getElementById("phoneNumberError").innerHTML = "Phone number must be 10 digits";
//     document.getElementById("phoneNumberError").style.display = "block";
//     document.getElementById("phoneNumber").classList.add("invalid");
//     isValid = false;
//   } else {
//     document.getElementById("phoneNumberError").style.display = "none";
//     document.getElementById("phoneNumber").classList.add("valid");
//   }

//   // Check if any areas of interest are selected
//   const areasOfInterest = document.getElementsByName("areaOfInterest");
//   let areasChecked = false;
//   for (let i = 0; i < areasOfInterest.length; i++) {
//     if (areasOfInterest[i].checked) {
//       areasChecked = true;
//       break;
//     }
//   }

//   if (!areasChecked) {
//     alert("Please select at least one area of interest");
//     isValid = false;
//   }

//   // If all validation checks pass, submit the form
//   if (isValid) {
//     form.submit();
//   }
// }



const form = document.getElementById("myForm");
form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
  
  // reset validation
  resetValidation();
  
  let isValid = true;

  // Validate name
  const name = document.getElementById("name").value;
  if (name === "" || name.length < 2 || !isNaN(name))  {
    document.getElementById("nameError").innerHTML = "Name is required";
    document.getElementById("nameError").style.display = "block";
    document.getElementById("name").classList.add("invalid");
    isValid = false;
  }


  // Validate age
  const age = document.getElementById("age").value;
  const ageError = document.getElementById("ageError");
  if (age === "" || age <= 0) {
    ageError.innerHTML = "Age must be a positive number";
    ageError.style.display = "block";
    age.classList.add("invalid");
    isValid = false;
  }

  // Validate email
  const email = document.getElementById("email").value;
  const verifyEmail = document.getElementById("verifyEmail").value;
  if (email === "" || email !== verifyEmail) {
    document.getElementById("emailError").innerHTML = "Emails do not match";
    document.getElementById("verifyEmailError").innerHTML = "Emails do not match";
    document.getElementById("emailError").style.display = "block";
    document.getElementById("verifyEmailError").style.display = "block";
    document.getElementById("email").classList.add("invalid");
    document.getElementById("verifyEmail").classList.add("invalid");
    isValid = false;
  }

  // Validate city
  const city = document.getElementById("city").value;
  if (city === "") {
    document.getElementById("cityError").innerHTML = "City is required";
    document.getElementById("cityError").style.display = "block";
    document.getElementById("city").classList.add("invalid");
    isValid = false;
  }

  // Validate phone number
  const phoneNumber = document.getElementById("phoneNumber").value;
  if (phoneNumber === "" || !/^\d{10}$/.test(phoneNumber)) {
    document.getElementById("phoneNumberError").innerHTML = "Phone number must be 10 digits";
    document.getElementById("phoneNumberError").style.display = "block";
    document.getElementById("phoneNumber").classList.add("invalid");
    isValid = false;
  }

  // Check if any areas of interest are selected
  const areasOfInterest = document.getElementsByName("areaOfInterest");
  let areasChecked = false;
  for (let i = 0; i < areasOfInterest.length; i++) {
    if (areasOfInterest[i].checked) {
      areasChecked = true;
      break;
    }
  }

  if (!areasChecked) {
    alert("Please select at least one area of interest");
    isValid = false;
  }
  
  // If all validation checks pass, submit the form
  if (isValid) {
    form.submit();
  }
}

// function to reset all validation
function resetValidation() {
  const inputs = document.querySelectorAll("#myForm input, #myForm select");
  for (const input of inputs) {
    input.classList.remove("valid");
    input.classList.remove("invalid");
  }
  const errors = document.querySelectorAll(".error");
  for (const error of errors) {
    error.innerHTML = "";
    error.style.display = "none";
  }
}