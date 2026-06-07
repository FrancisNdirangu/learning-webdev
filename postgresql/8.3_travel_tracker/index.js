import "dotenv/config";
import pg from "pg";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect();

//let countries_visited = [];

// db.query("SELECT * FROM visited_countries", (err,res) => {
//   if (err) {
//     console.error("Not executed the query", err.stack);
//   } else {
//     countries_visited = res.rows;
//   }
// });

//let list_countries = []
// list_countries = countries_visited.forEach((element) => {
//   list_countries.push(element['countries_code']);
// });
let error_message = [];

app.get("/", async (req, res) => {
  //Write your code here.
  //I will have to pass the variable with the key = countries
  //pass key called total that has the count of the number of countries len(array)
  //
  //console.log(countries_visited);

  const all_visited_countries = await db.query(
    "SELECT * FROM visited_countries",
    (err, result) => {
      if (err) {
        console.error(
          "Failed to execute the query in visited countries table",
          err.stack,
        );
      } else {
        const countries_visited = result.rows;
        const list_countries = countries_visited.map(
          (item) => item.countries_code,
        );

        const total = countries_visited.length;
        //console.log(list_countries);
        res.render("index.ejs", {
          countries: list_countries,
          total: total,
          error: error_message,
        });
      }
    },
  );
  //console.log(countries_visited);
});

let countries_and_codes_db = [];
db.query("SELECT * FROM countries", (err, res) => {
  if (err) {
    console.error("Failed to make query to countries table", err.stack);
  } else {
    countries_and_codes_db = res.rows;
  }
});

app.post("/add", async (req, res) => {
  const input_country = req.body.country;
  // console.log(input_country);
  // console.log(countries_and_codes_db);
  try {
    const input_country_code = countries_and_codes_db.find(
      (element) =>
        element.country_name.trim().toLowerCase() ==
        input_country.trim().toLowerCase(),
    );
    //console.log(input_country_code);
    const countries_and_codes_list = countries_and_codes_db.map(
      (item) => item.country_code,
    );
    const is_unique = await db.query(
      "SELECT * FROM visited_countries WHERE countries_code = $1",
      [input_country_code.country_code],
    );
    console.log(is_unique.rows);
    db.query("INSERT INTO visited_countries (countries_code) VALUES ($1)", [
      input_country_code.country_code,
    ]);
    res.redirect("/");
  } catch (error) {
    console.error(`Country may not exist error: ${error.message}`);
    error_message = "The input typed is not a country. Try again";
    res.redirect("/");
  }
  // console.log(countries_and_codes_list);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
