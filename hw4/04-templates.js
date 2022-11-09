const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 5001;

// Use Pug as the templating engine
app.set("views", __dirname + "/views");
app.set("view engine", "pug");

// REST Countries URL
const url = "https://restcountries.com/v3.1/all";

// Add your code here

app.get("/", (req, res) => {
  // render pug template for the index.html file

  res.render("index", {
    heading: "Countries of the World",
    main: "Welcome to this application. Using the REST Countries API, we will be showing the countries and capitals of the world, the most populous countries in the world, and the number of countries in each region of the world",
  });
});

app.get("/capitals", async (req, res) => {
  // map the output array to create an array with country names and capitals
  // check for empty data in the output array
  let countries = [];
  var apiresp = await axios.get(url);
  var sortedResp = apiresp.data.sort((a, b) =>
    a.name.official > b.name.official ? 1 : -1
  );

  sortedResp.forEach((country) => {
    let countryCapital =
      country.capital === undefined
        ? "Captial Doesn't Exists"
        : country.capital;
    countries.push(country.name.official + " - " + countryCapital);
  });

  res.render("page", {
    heading: "Countries and Capitals",
    results: countries,
  });
});

app.get("/populous", async (req, res) => {
  // filter the output array for the countries with population of 50 million or more
  // sort the resulting array to show the results in order of population
  // map the resulting array into a new array with the country name and formatted population

  let populous = [];
  var apiresp = await axios.get(url);

  var sortedResp = apiresp.data.sort((a, b) =>
    a.population < b.population ? 1 : -1
  );
  // const myJson = apiresp.data;
  sortedResp.forEach((country) => {
    if (country.population > 50000000) {
      populous.push(country.name.official + " - " + country.population);
    }
  });

  res.render("page", {
    heading: "Most Populous Countries",
    results: populous,
  });
});

app.get("/regions", async (req, res) => {
  // reduce the output array in a resulting object that will feature the numbers of countries in each region
  // disregard empty data from the output array

  let regions = [];

  var apiresp = await axios.get(url);
  const myJson = apiresp.data;
  var allRegions = [];

  //  push all the regions with duplicates
  myJson.forEach((country) => {
    allRegions.push(country.region);
  });

  // count the occurence of each region and store as key value pair
  var counts = {};
  for (var i = 0; i < allRegions.length; i++) {
    counts[allRegions[i]] = 1 + (counts[allRegions[i]] || 0);
  }

  // pushed in the regions array for the pub file
  for (var key in counts) {
    regions.push(key + " - " + counts[key]);
  }

  res.render("page", {
    heading: "Regions of the World",
    results: regions,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
