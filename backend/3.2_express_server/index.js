import express from "express";


const app = express();
const port = 5000;

app.get('/',(req,res) => {
    res.send('<h1>Hello<h1>');
});

app.get('/contact',(req,res) => {
    res.send('<h2>My contact is tralalalala');
});

app.get('/about',(req,res) => {
    res.send('<h3>I am 6 foot tall</h3>')
})

app.listen(port, () => {
    console.log(`Port is running on port ${port}`);
});
