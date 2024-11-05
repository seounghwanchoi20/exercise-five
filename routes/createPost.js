const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Create Post Route");
});

module.exports = router;
