import 'dotenv/config';
import pg from 'pg';
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  //I will have to pass the variable with the key = countries
  //pass key called total that has the count of the number of countries len(array)
  //
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
