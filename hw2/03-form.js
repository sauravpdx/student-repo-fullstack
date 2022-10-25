/** Exercise 03 - Form **/

const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");
const Newsletter = document.getElementById("newsletter");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("============Form Submission=============");
  console.log("Name: ", name.value);
  console.log("Email: ", email.value);
  console.log(
    "Feedback: ",
    message.value.length == 0 ? "No feedback was submitted" : message.value
  );
  console.log(
    "Newsletter: ",
    Newsletter.checked
      ? "Yes, I would like to join the newsletter"
      : "No, thank you"
  );
});

// Add your code here
