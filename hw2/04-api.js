/** Exercise 04 - API **/

const url = "https://restcountries.com/v3.1/all";

// Add your code here

var wrapper = document.getElementById("results");

var myHTML = "";

const userAction = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const myJson = await response.json();
    myJson.forEach((country) => {
      myHTML +=
        " <li>" + country.name.official + " - " + country.population + "</li>";
    });
    wrapper.innerHTML = myHTML;
  } catch (error) {
    wrapper.innerHTML = "<p>Something went wrong in calling the API </p> ";
  }
};
userAction(url);
