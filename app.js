const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config({path:'config.env'})

//parse requests with body-parser
app.use(bodyParser.urlencoded({ extended:true}));

//set view engine
app.set("view engine", "ejs")

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/login', (req, res) => {
  res.render('login', { title: 'Log In' });
});

app.get('/signup', (req, res) => {
  res.render('signup', { title: 'Sign Up' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

