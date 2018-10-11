const router = require('express').Router()
const userController = require('../controllers/userController')

//BASIC SIGNUP AND SIGNIN
router.post('/register',userController.signup)
router.post('/login',userController.signin)

module.exports = router