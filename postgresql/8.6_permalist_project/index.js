import "dotenv/config";
import pg from "pg";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];
const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
});

db.connect();

app.get("/", async (req, res) => {
  items = await db.query("SELECT * FROM items");
  console.log(items.rows);
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items.rows,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  //items.push({ title: item });
  await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const row_edited = req.body;
  console.log(row_edited);
  //it seems we get back the updatedItemIf and updatedItemTitle which
  await db.query("UPDATE items SET title = $1 WHERE id = $2", [
    row_edited.updatedItemTitle,
    parseInt(row_edited.updatedItemId),
  ]);
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  const row_deleted = req.body;
  console.log(row_deleted);
  // we get back deleteItemId
  await db.query("DELETE FROM items WHERE id = $1", [row_deleted.deleteItemId]);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
