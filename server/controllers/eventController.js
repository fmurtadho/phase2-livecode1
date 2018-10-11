const myEvent = require('../models/event')
const User = require('../models/users')

class Controller {

    static create(req,res){
        let newEvent = new myEvent({
            name: req.body.name,
            location: req.body.location,
            address: req.body.address
        })
    
        newEvent.save()
        .then(function(event){
            res.status(201).json({
                event
            })
        })
        .catch(function(err){
            res.status(500).json({
                message : 'failed to create event'
            })
        })
    }

    static read(req,res){
        myEvent.find()
        .then(function(allEvent){
            res.status(201).json(allEvent)
        })
        .catch(function(err){
            res.status(500).json({
                err
            })
        })
    }

    static search(req,res){
        res.status(201).json(req.params.keyword)
    }
}

module.exports = Controller;