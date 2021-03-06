// dependencies
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/happyFamily";

mongoose.connect(MONGODB_URI);

require("./app/routes/apiRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}



app.listen(PORT);
