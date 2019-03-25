const express = require('express')
const { catchErrors } = require('../lib/errorHandlers')
const controllers = require('../controllers/course')
const router = express.Router()

router.get('/detail/:id', catchErrors(controllers.getCourseDetail))
router.get('/curriculum/:id', catchErrors(controllers.getCourseCurriculum))

module.exports = router
