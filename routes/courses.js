const express = require('express')
const { catchErrors } = require('../lib/errorHandlers')
const controllers = require('../controllers/courses')
const router = express.Router()

router.get('/', catchErrors(controllers.getCourses))

module.exports = router
