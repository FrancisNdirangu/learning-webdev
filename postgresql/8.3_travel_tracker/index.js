import 'dotenv/config';
import pg from 'pg';
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client(
  {   user:process.env.DB_USER,
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT 
  });

db.connect();

let countries_visited = [];

db.query("SELECT * FROM visited_countries", (err,res) => {
  if (err) {
    console.error("Not executed the query", err.stack);
  } else {
    countries_visited = res.rows;
  }
});

//let list_countries = []
// list_countries = countries_visited.forEach((element) => {
//   list_countries.push(element['countries_code']);
// });

app.get("/", async (req, res) => {
  //Write your code here.
  //I will have to pass the variable with the key = countries
  //pass key called total that has the count of the number of countries len(array)
  //
  //console.log(countries_visited);

  const list_countries = countries_visited.map((item) => item.countries_code);

  const total = countries_visited.length;
  console.log(list_countries);
  res.render("index.ejs",{countries:list_countries,total:total});

});

app.post("/add", (req,res) => {
  const input_country = req.body;
  console.log(input_country);
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
