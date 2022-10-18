/** Exercise 02 - Reverse **/
// Add your code here
const reverse = () => {
  var forminput = document.getElementById("input").value;
  var wrapper = document.getElementById("response");
  var resp = "";
  if (forminput.length == 0 || forminput.length > 8) {
    resp = "Error : Please enter a 8 digit number";
    wrapper.style.color = "red";
  } else {
    var result = forminput.toString().split("").reverse().join("");
    resp = forminput + " --> " + result;
    wrapper.style.color = "green";
  }

  wrapper.innerHTML = resp;
};
