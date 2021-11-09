const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');
/*
//about
exports.about = function(req, res){
    res.render('about', { title: 'About' });
    };
//signup
exports.signup = function(req, res){
    res.render('signup', { title: 'signup' });
    };
//login
exports.login = function(req, res){
    res.render('login', { title: 'login' });
    };
*/
//API
router.post('/api/users',controller.create);
router.get('/api/users',controller.find);
router.put('/api/users',controller.update);
router.delete('/api/users',controller.delete);


module.exports = router