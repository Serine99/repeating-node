const express = require("express");
const app = express();
const path = require("path");
const PORT = 3400;

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/new-page.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.listen(PORT, () => console.log(`Server is running on poprt ${PORT}`));
