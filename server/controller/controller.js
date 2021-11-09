var Userdb = require('../model/model');

//create and save new user
exports.create = (req,res) => {
    //validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    // new user
    const user = new Userdb({
        companyName:req.body.name,
        email:req.body.email,
        password:req.body.password,
    })

    //save user in the database
    user
        .save(user)
        .then(data=>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
               message:err.message || "Some error occurred while creating a new user"
            });
        });

}

//get all users/ get a single user
exports.find = (req,res) =>{

}

//update and save existing user
exports.update = (req,res) => {

}

//delete user with specified user id
exports.delete = (req,res) => {

}