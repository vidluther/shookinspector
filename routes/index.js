const express = require("express");
const router = express.Router();
const logger = require("morgan");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/webhooks", function (req, res, next) {
  res.send("THIS IS A Webhook");
});

/* POST to Integromat. */
router.post("/webhooks/departures", function (req, res, next) {
  console.log(req.body);
  // make it look like it's taking a while
  // cuz integromat takes it's time sometimes
  setTimeout(function () {
    res.send("Accepted");
  }, 500);
});

router.post("/webhooks/checkouts", function (req, res, next) {
  console.log(req.body);
  // make it look like it's taking a while
  // cuz integromat takes it's time sometimes
  setTimeout(function () {
    res.send("Accepted");
  }, 500);
});

function returnAccepted() {
  return "Accepted";
}

module.exports = router;
