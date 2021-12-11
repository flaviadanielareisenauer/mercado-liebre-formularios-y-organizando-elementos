const express = require("express");
const app = express();
const port = 2409;
const path = require("path");

/* Middleware */
app.use(express.static("public"));

/* Routes */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.listen(port, () => {
  console.log(`Puerto corriendo en ${port}\n http://localhost:${port}`);
});
