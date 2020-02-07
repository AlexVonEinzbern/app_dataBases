var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next){
  res.send("La mejor web del universo mundial")
});

module.exports = router;
