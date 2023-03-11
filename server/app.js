const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const app = express();
const cors = require("cors");

//Middleware
app.use(express.json());
app.use(cors());
app.use("/books", router);
app.use("/", (req, res, next) => {
  res.send("This is starting app");
});
mongoose
  .connect(
    "mongodb+srv://admin:i0e7JIAJ5rTnMuft@cluster0.bncwsoy.mongodb.net/storeDB?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

//kRFDeWX6i3U0efGr mongodb+srv://admin:kRFDeWX6i3U0efGr@cluster0.dynxap6.mongodb.net/?retryWrites=true&w=majority
// aC9MBjt43NsdXfaa
// cbkv14KNUmVgNrBE
// i0e7JIAJ5rTnMuft
