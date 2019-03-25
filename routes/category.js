const express = require('express')

const { catchErrors } = require('../lib/errorHandlers')
const controllers = require('../controllers/category')
const router = express.Router()

router.get('/', catchErrors(controllers.getCategory))

module.exports = router
