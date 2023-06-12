'use strict'
const rateLimit = require('express-rate-limit');

// Apply rate limiting middleware
const createRateLimiter = (numlimit) => {
    return rateLimit({
        windowMs: 60 * 1000, // 1 minute
        max: numlimit, // Maximum numlimit requests per minute
    });
};

module.exports = {
    createRateLimiter
}