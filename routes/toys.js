const express = require("express");
const router = express.Router();
router.get("/", async (req, res) => {
  res.json({ msg: "Toys route work" });
});

module.exports = router;
