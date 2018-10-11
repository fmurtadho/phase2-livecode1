const User = require('../models/users')
const jwt = require('jsonwebtoken')
// const Mongoose = require('mongoose');

class Middleware {
    static auth(req, res, next) {
        let token = req.headers.token
        if (token) {
            jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
                if (!err) {
                    User.findById(decoded.userId)
                        .then(function (user) {
                            if(user){
                                next()
                            }
                        })
                        .catch(function(err){
                            res.status(500).json({
                                message : 'user not found'
                            })
                        })
                } else {
                    res.status(403).json({
                        message: 'invalid token'
                    })
                }
            })
        } else {
            res.status(403).json({
                message: 'token not found'
            })
        }
    }
}

module.exports = Middleware;