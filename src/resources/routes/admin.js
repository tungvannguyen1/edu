const express = require('express')
const router = express.Router()

const adminController = require('../../app/controllers/adminController')

router.delete('/:id/delete', adminController.destroy);
router.put('/:id/edit', adminController.updateCourse)
router.get('/:id/edit', adminController.editCourse)
router.post('/add', adminController.addSaveCourse)
router.get('/add', adminController.addCourse)
router.get('/', adminController.show)

module.exports = router