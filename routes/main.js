const express = require('express')
const mainController = require('../controllers/mainController')
const router = express.Router()

router.get('/', mainController.ping)
router.get('/params/:id/:name', mainController.getParams)
router.get('/query?', mainController.getQuery)

router.post('/body', mainController.getBody)



module.exports = router