const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();

dotenv.config({path:'config.env'})

app.use(express.json());

//set view engine
app.set("view engine", "ejs")

//Routes for web pages

//home page
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// about page
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

//login page
app.get('/login', (req, res) => {
  res.render('login', { title: 'Log In' });
});

//signup page
app.get('/signup', (req, res) => {
  res.render('signup', { title: 'Sign Up' });
});

//Routes for user API

//create user
app.post('/user', async (req, res) => {
  const user = await prisma.user.create({ data: req.body});
  res.json(user);
});

//get all users
app.get('/users', async (req, res) => {
  const user = await prisma.user.findMany();
  res.json(user);
});

//get user by id
app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });
  res.json(user);
});

//Update user by id
/*
app.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findOne({
    where: { id: Number(id) },
  });
  res.json(user);
});
*/

//delete user by id
app.delete('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.delete({
    where: { id: Number(id) },
  })
  res.json(user);
});



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

