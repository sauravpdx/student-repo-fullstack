const http = require("http");
const port = process.env.PORT || 5001;
let fs = require("fs");

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

const server = http.createServer((req, res) => {
  if (req.url === "/form") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream("./03-form.html", "UTF-8").pipe(res);
  } else if (req.method == "POST" && req.url === "/submit") {
    var body = "";
    req.on("data", function (chunk) {
      body += chunk;
      req.on("end", function () {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
        <!DOCTYPE HTML>
        <html>
        <head>
        <title> Form Results </title>
        </head>
        <body>
        <h1> Your Form Results </h1>
        <p> Name: ${body
          .toString()
          .split("&")[0]
          .split("=")[1]
          .replace(/[+]/g, " ")} </p>
        <p> Email: ${body
          .toString()
          .split("&")[1]
          .split("=")[1]
          .replace(/%40/g, "@")} </p>
        </body>
        </html>
        `);
      });
    });
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
