const express = require("express");
const app = express();
const path = require("path");
const logEvents = require("./middleware/logEvents");
const cors = require("cors");
const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));
console.log(__dirname);

app.use((req, res, next) => {
  logEvents(`${req.method}\t ${req.headers.origin}\t ${req.url}`, "reqLog.txt");
  console.log(`${req.method}\t ${req.path}`);
  next();
});

app.use(cors());
app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/new-page.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
