const express = require("express");
const app = express();
const port = 3000;
const db = require("./config/db");
const seed = require("./config/seed");
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const cors = require("cors");
app.use(cors());
const api = require("./routes/routes");
app.use("/api", api);


app.get("/", (req, res) => {
  res.send("expreess");
});

//geminai AI
// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({ apiKey: "AIzaSyDp3tqewwJ_-TwspkuLZ42D9eekDXifAQQ" });

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.0-flash",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }

// main();














app.listen(port, (error) => {
  if (!error) {
    console.log("server running on port" + port);
  } else {
    console.log("error:" + error);
  }
});
