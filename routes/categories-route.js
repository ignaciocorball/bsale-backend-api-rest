const express = require("express");
const router = express.Router();
const categories = require("../services/categories-service.js");

/* GET Categories */
router.get("/", async function (req, res, next) {
  try {
    res.json(await categories.getCategories(req.query.page));
  } catch (err) {
    console.error(`Error while getting products `, err.message);
    next(err);
  }
});

module.exports = router;