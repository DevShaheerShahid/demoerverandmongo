const express = require("express");
const {
  getGerne,
  putGerne,
  postGerne,
  patchGerne,
  deleteGerne,
} = require("../Controller/gerneController");
const router = express.Router();

router.get("/gerne", getGerne);

router.post("/gerne", postGerne);

router.put("/gerne", putGerne);

router.patch("/gerne", patchGerne);

router.delete("/gerne", deleteGerne);
module.exports = router;
