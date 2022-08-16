const express = require("express");
const {
  getStocks,
  postStocks,
  putStocks,
  patchStocks,
  deleteStocks,
} = require("../Controller/stocksController");

const router = express.Router();

router.get("/stocks", getStocks);

router.post("/stocks", postStocks);

router.put("/stocks", putStocks);

router.patch("/stocks", patchStocks);

router.delete("/stocks", deleteStocks);
module.exports = router;
