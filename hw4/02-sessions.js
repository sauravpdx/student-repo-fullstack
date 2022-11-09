const express = require("express");
const session = require("express-session");
const app = express();
const port = process.env.PORT || 5001;

// Add your code here

// Use the express-session module
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.get("*", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`<h2>Currently on route : ${req.url}</h2>`);
  if (req.url !== "/favicon.ico")
    if (req.session.lastVisit) {
      res.write(`Previouls Visited`);
      req.session.lastVisit.push(`${req.url}`);
      req.session.lastVisit.forEach((obj) => {
        res.write(`<br>${obj}`);
      });
    } else {
      req.session.lastVisit = [];
      req.session.lastVisit.push(`${req.url}`);
      res.write(`Welcome to ${req.get("host")}`);
    }

  res.end();
  // Add your code here
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
