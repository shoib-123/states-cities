const express = require('express')
const router = express.Router()

const {getStates,getCities} = require('../controllers/tasks')

router.route('/states').get(getStates)
router.route('/cities/:id').get(getCities)


module.exports = router