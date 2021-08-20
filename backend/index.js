// dependices
const express = require("Express");
const mongoose = require("mongoose");
const cors = require("cors");
var app = express();

app.use(cors());

// local dependices
const shortUrl = require("./routes/url.router");

//port
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/short-url", shortUrl);

//running server
app.listen(port, () => {
  console.log("Running on port " + port);
});

mongoose
  .connect("mongodb://localhost/shorternerUrl", { useNewUrlParser: true , useUnifiedTopology: true})
  .then((result) => {
    console.log("[ Mongoose Connected ]");
  });
