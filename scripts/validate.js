// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Get the form and error container
    var form = document.getElementById("apply");
    var errorContainer = document.getElementById("error-container");
  
    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
      // Clear previous error messages
      while (errorContainer.firstChild) {
        errorContainer.removeChild(errorContainer.firstChild);
      }
  
      // Validate date of birth, state, postcode, and other skills
      var dobInput = document.getElementById("birthday");
      var dobValue = dobInput.value;
      var stateInput = document.getElementById("state");
      var stateValue = stateInput.value;
      var postcodeInput = document.getElementById("post-code");
      var postcodeValue = postcodeInput.value;
      var skillsCheckbox = document.getElementById("other_skills_checkbox");
      var otherskillsTextarea = document.getElementById("other");
      var otherskillsValue = otherskillsTextarea.value;
  
      var isValid = true;
  
      if (!validateDateOfBirth(dobValue)) {
        displayError("Please enter a valid date of birth in dd/mm/yyyy format.", dobInput);
        isValid = false;
      }
  
      if (!validateAge(dobValue)) {
        displayError("Applicants must be between 15 and 80 years old.", dobInput);
        isValid = false;
      }
  
      if (!validatePostcode(stateValue, postcodeValue)) {
        displayError("The selected state does not match the first digit of the postcode.", stateInput);
        isValid = false;
      }
  
      if (skillsCheckbox.checked && otherskillsValue.trim() === "") {
        displayError("If 'Other skills' is selected, the 'Other skills' field cannot be blank.", otherskillsTextarea);
        isValid = false;
      }
  
      if (!isValid) {
        event.preventDefault();
      }
  
      // Display error messages
      function displayError(message, field) {
        var errorElement = document.createElement("p");
        errorElement.textContent = message;
        errorElement.classList.add("error-message");
  
        // Insert the error message after the field
        field.parentNode.insertBefore(errorElement, field.nextSibling);
  
        // Add error class to the field
        field.classList.add("error-field");
      }
  
      // Function to validate date of birth
      function validateDateOfBirth(date) {
        var dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        return dateRegex.test(date);
      }
  
      // Function to validate age
      function validateAge(date) {
        var currentDate = new Date();
        var dobParts = date.split("/");
        var dob = new Date(dobParts[2], dobParts[1] - 1, dobParts[0]);
        var age = currentDate.getFullYear() - dob.getFullYear();
        var monthDiff = currentDate.getMonth() - dob.getMonth();
  
        if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < dob.getDate())) {
          age--;
        }
  
        return age >= 15 && age <= 80;
      }
  
      // Function to validate state and postcode
      function validatePostcode(state, postcode) {
        switch (state) {
          case "VIC":
            return /^(3|8)/.test(postcode);
          case "NSW":
            return /^(1|2)/.test(postcode);
          case "QLD":
            return /^(4|9)/.test(postcode);
          case "NT":
            return /^0/.test(postcode);
          case "WA":
            return /^6/.test(postcode);
          case "SA":
            return /^5/.test(postcode);
          case "TAS":
            return /^7/.test(postcode);
          case "ACT":
            return /^0/.test(postcode);
          default:
            return true;
        }
        }
    });
  });