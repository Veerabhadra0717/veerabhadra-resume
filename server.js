// Express server for running the portfolio on your computer
const express = require("express");
const compression = require("compression");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// SEO: compress files so the site loads faster
app.use(compression());

// Serve everything in the "public" folder
app.use(express.static(path.join(__dirname, "public"), { maxAge: "1d" }));

// SEO: wrong links get a proper 404 status
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}`);
});

module.exports = app;
