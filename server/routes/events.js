const router = require('express').Router()
const eventController = require('../controllers/eventController')
const middleware = require('../middleware/middleware')

router.post('/',middleware.auth,eventController.create)
router.get('/',eventController.read)
router.get('/search/:keyword',middleware.auth,eventController.search)

module.exports = router