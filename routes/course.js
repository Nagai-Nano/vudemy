const express = require('express')
const { catchErrors } = require('../lib/errorHandlers')
const controllers = require('../controllers/course')
const router = express.Router()

router.get('/detail/:id', catchErrors(controllers.getCourseDetail))
router.get('/curriculum/:id', catchErrors(controllers.getCourseCurriculum))
router.get('/title/:id', catchErrors(controllers.getCourseTitle))
router.get('/source/:idCourse/:idLecture', catchErrors(controllers.getSource))

module.exports = router
