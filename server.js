const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const app = express();

const connectDB = require('./server/database/connection');

dotenv.config({path:'config.env'})

//log requests
app.use(morgan('tiny'));

//mongodb connection
connectDB();

//parse requests with body-parser
app.use(bodyParser.urlencoded({ extended:true}));

//set view engine
app.set("view engine", "ejs")

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

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

var router = require('./server/routes/router');
//app.get('/about', router.about);

//app.get('/login', router.login);

//app.get('/signup', router.signup);

// Listen to the App Engine-specified port, or 8080 otherwise

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

