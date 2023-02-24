const express = require("express");
const router = express.Router();
router.get("/", async (req, res) => {
  res.json({
    msg: "Homepage. If you are lost, follow to https://toysrestapi.cyclic.app/",
  });
});

module.exports = router;
