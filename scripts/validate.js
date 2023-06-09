// Function to validate the age
// function validateAge() {
//   var birthdayInput = document.getElementById("birthday");
//   var birthday = new Date(birthdayInput.value);
//   var today = new Date();

//   var age = today.getFullYear() - birthday.getFullYear();
//   var monthDiff = today.getMonth() - birthday.getMonth();
//   var dayDiff = today.getDate() - birthday.getDate();

//   if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
//     age--;
//   }

//   return age >= 15 && age <= 18;
// }

// Function to validate the date format
function validateDateFormat() {
  var birthdayInput = document.getElementById("birthday");
  var birthdayValue = birthdayInput.value;

  var dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

  return dateRegex.test(birthdayValue);
}

// Function to validate post codes
function validatePostCodes() {
  var postCodeInput = document.getElementById("post-code");
  var postCodeValue = postCodeInput.value;

  var postCodeRegex = /^\d{4}$/;

  return postCodeRegex.test(postCodeValue);
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // if (!validateAge()) {
  //   alert("Age should be between 15 and 18.");
  //   return;
  // }

  if (!validatePostCodes()) {
    alert("Invalid post code.");
    return;
  }

  // Form submission code
  var form = document.getElementById("form");
  form.submit();
}

// Event listener for form submission
var form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

function init() {}

const today = new Date();
const maxDate = new Date(
  today.getFullYear() - 15,
  today.getMonth(),
  today.getDate()
)
  .toISOString()
  .split("T")[0];
const minDate = new Date(
  today.getFullYear() - 18,
  today.getMonth(),
  today.getDate()
)
  .toISOString()
  .split("T")[0];

document.getElementById("birthday").setAttribute("max", maxDate);
document.getElementById("birthday").setAttribute("min", minDate);

window.onload = () => init();
