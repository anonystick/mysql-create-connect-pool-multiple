'use strict'

const express = require('express')
const responseTime = require('response-time')
// const { apiKey, permission } = require('../auth/checkAuth')
const { createRateLimiter } = require('../middlewares/ratelimit')
const router = express.Router()

// check apiKey
router.use(responseTime())
router.use(createRateLimiter(2))// // Default rate limit of 100 requests per minute
// check permission
// router.use(permission('0000'))


router.get('/checkstatus', (req, res, next) => {
    res.json({
        elements: 1,
        status: 'success'
    })
})


module.exports = router