//https://expressjs.com/en/guide/routing.html
//https://expressjs.com/en/4x/api.html
var express = require('express')
var router = express.Router()

// define routes
router.get('/', function (req, res) {
  // res.send('students home page')
  res.status(500).json('{students:{id: 1, name: "Mario"},{id: 2, name: "Luigi"}}')
})

router.get('/students', function (req, res) {
  res
    .status(200)
    .json('{students:{id: 1, name: "Mario"},{id: 2, name: "Luigi"}}')
})

router.get('/students/:id', function (req, res) {
  res
    .status(200)
    .json('{id: 1, name: "Mario"}')
})

router.delete('/students/:id', function (req, res) {
  res.send('Specific students has been deleted.')
})

router.post('/students', function (req, res) {
  res.send('A new student to the class!')
})

module.exports = router
