var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

router.get('/all', function (req, res, next) {
  res.json({
    message: 'Thats All',
    env: process.env.NODE_ENV,
    good: process.env.GOOD,
    port: process.env.PORT
  })
})

module.exports = router
