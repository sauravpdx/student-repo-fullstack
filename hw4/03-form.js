const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

// Use middleware static() to serve all static files in the given folder
app.use(express.static("public"));

// Use middleware urlencoded() to parse an incoming request with a urlencoded payload and return an objectß
app.use(express.urlencoded({ extended: false }));

// POST request

app.post("/submit", (req, res) => {
  res.set("Content-Type", "text/html");

  var formres = req.body;
  var myHTML = ` <!DOCTYPE HTML>
        <html>
        <head>
        <title> Form Results </title>
        </head>
        <body>
        <h1> Form submited </h1>
        <p> Name: ${formres.name} </p>
        <p> Email: ${formres.email} </p>
        <p> Comments:  ${formres.message !== "" ? formres.message : "n/a"} </p>
        <p> Checkbox: ${
          formres.newsletter != undefined
            ? "Yes, I would like to join the newsletter"
            : "No, thank you."
        } </p>
        </body>
        </html>
        `;

  res.status(200).send(myHTML);
});
// Add your code here

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
