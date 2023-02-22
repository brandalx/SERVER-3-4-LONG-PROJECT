const express = require("express");
const router = express.Router();
router.get("/", async (req, res) => {
  res.json({ msg: "Homepage. If you are lost, follow to index.html" });
});

module.exports = router;
