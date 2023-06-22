const express = require('express')
const router = express.Router()

const {
  createjob,
  getAlljob,
  getSingleJob,
  updateJob,
  deleteJob,
} = require('../controller/job')

router.get('/', getAlljob)
router.get('/:id', getSingleJob)
router.delete('/:id', deleteJob)
router.patch('/:id', updateJob)
router.post('/', createjob)

module.exports = router
