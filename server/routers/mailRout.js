const express = require('express')
const router = express.Router()
const { getAllRequests, sendEmail } = require('../controllers/mailController');

router.get('/', getAllRequests)
router.post('/send-email', sendEmail);

module.exports = router
