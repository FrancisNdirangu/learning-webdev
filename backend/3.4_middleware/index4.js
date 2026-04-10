import express from "express";
import {dirname} from 'path';
import {fileURLToPath} from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

function logger(req,res,next) {
  console.log('Request method:',req.method);
  console.log('Response url: ',res.url);
  next();
};

app.use(logger);
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res) => {
  res.sendFile(__dirname+'/public/index.html');
});

app.post('/submit',(req,res)=> {
  console.log(req.body);
  res.send(`
    <h1>Your Band name is </h1>
    <h3>${req.body.street+req.body.pet}</h3>`)
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
