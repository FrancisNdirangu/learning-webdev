import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('index.ejs');
  // console.log(req.body['First Name'])
});

app.post("/submit", (req, res) => {
  // console.log(req.body['fName']);
  // console.log(req.body['lName']);
  const firstName = req.body['fName'];
  const lastName = req.body['lName'];
  var lengthName= firstName.length + lastName.length;
  console.log(lengthName);
  res.locals = {lenName : lengthName}
  res.render('index.ejs')
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
