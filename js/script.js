let name = "";
let email = "";
let message = "";

const submitForm = () => {
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  message = document.getElementById("message").value;
  //   fetchting validation div's to display messages
  const nameValidationMessageDiv = document.getElementById(
    "nameValidationMessage"
  );
  const emailValidationMessageDiv = document.getElementById(
    "emailValidationMessage"
  );
  const messageValidationMessageDiv = document.getElementById(
    "messageValidationMessage"
  );

  let isValid = true;

  //   clearing previous messages

  nameValidationMessageDiv.innerHTML = "";
  emailValidationMessageDiv.innerHTML = "";
  messageValidationMessageDiv.innerHTML = "";

  //   validating form fields and displaying messages

  if (name === "") {
    nameValidationMessageDiv.innerHTML = "Please enter your name.";
    isValid = false;
  }
  if (email === "") {
    emailValidationMessageDiv.innerHTML = "Please enter your email.";
    isValid = false;
  }
  if (message === "") {
    messageValidationMessageDiv.innerHTML = "Please enter your message.";
    isValid = false;
  }
  if (!isValid) {
    alert("Please fill all the fields");
  } else {
    alert(
      `Form submitted successfully \n name: ${name} \n email: ${email} \n message: ${message}`
    );
  }
};

// adding event listener to submit button

document.getElementById("submit").addEventListener("click", submitForm);
