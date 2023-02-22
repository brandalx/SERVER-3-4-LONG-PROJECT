const express = require("express");
const router = express.Router();
const { ToysModel, validateJoi } = require("../models/toysModel");
router.get("/", async (req, res) => {
  res.json({ msg: "Toys route work" });
});

module.exports = router;
