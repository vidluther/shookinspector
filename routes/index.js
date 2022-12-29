const express = require('express')
const router = express.Router()
const logger = require('morgan')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/webhooks', function (req, res, next) {
  res.send('THIS IS A Webhook')
})

/* POST to Integromat. */
router.post('/webhooks/integromat', function (req, res, next) {
  console.log(req.body)

  res.send('Accepted')
})

function returnAccepted () {
  return 'Accepted'
}

module.exports = router
