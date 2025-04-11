const mongoose = require("mongoose")
mongoose
  .connect(
    "mongodb://localhost:27017/charn"
)
  .then(() => {
    console.log("DB is connected"); 
  })
  .catch((err) => {
    console.log("connection failed!");
  });