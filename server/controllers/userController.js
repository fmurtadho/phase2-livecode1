const User = require('../models/users')
const jwt  = require('jsonwebtoken')
require('dotenv').config()
const axios = require('axios')

class Controller {
    static signup(req,res){
            let newUser = new User({
                name:  req.body.name,
                email:   req.body.email,
                password: req.body.password,
            })

            newUser.save()

            res.status(200).json({
                message : 'Signup Success'
            })
    }

    static signin(req,res){
        User.findOne({
            email : req.body.email,
            password : req.body.password
        })
        .then(function(dataUser){
                if(dataUser){
                let token = jwt.sign({
                    userId : dataUser._id,
                    name : dataUser.name,
                    email : dataUser.email
                }, process.env.SECRET_KEY)

                res.status(201).json({
                    token : token
                }) 
            }
        })
        .catch(function(){
            res.status(500).json({
                message : `Invalid username / password`
            })
        })
    }
}

module.exports = Controller;