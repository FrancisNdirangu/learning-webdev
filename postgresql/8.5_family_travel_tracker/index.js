import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;

let users = [
  { id: 1, name: "Angela", color: "teal" },
  { id: 2, name: "Jack", color: "powderblue" },
];

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}
app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  users = await db.query("SELECT * FROM users");
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users.rows,
    color: "teal",
  });
});
app.post("/add", async (req, res) => {
  const input = req.body["country"];

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()],
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [countryCode],
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});
app.post("/user", async (req, res) => {
  users = await db.query("SELECT * FROM users");
  //console.log(users.rows);
  const clicked = req.body.user;
  console.log(clicked);

  const countries = await checkVisisted();
  //console.log(countries);
  const all_visited = await db.query("SELECT * FROM visited_countries");
  const all_visited_list = all_visited.rows;
  const user_countries = all_visited_list.filter(
    (element) => element.user_id == clicked,
  );
  console.log(user_countries);

  const user_countries_list = [];
  user_countries.forEach((element) =>
    user_countries_list.push(element.country_code),
  );
  console.log(user_countries_list);

  const user_color = await db.query("SELECT color FROM users WHERE id = $1", [
    clicked,
  ]);
  console.log(user_color.rows[0].color);

  res.render("index.ejs", {
    countries: user_countries_list,
    total: user_countries_list.length,
    users: users.rows,
    color: user_color.rows[0].color,
  });

  //res.render("new.ejs");
  //res.redirect("/");
});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
  res.render("new.ejs");
  const input = req.body;
  console.log(input);
  //const input_name = await req.body.name;
  //const input_color = await req.body.color;
  //await db.query(
  // "INSERT INTO USERS (name,color) VALUES ($1,$2)"[(input_name, input_color)],
  //);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
