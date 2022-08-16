const express = require("express");
const {
  getMovie,
  putMovie,
  postMovie,
  patchMovie,
  deleteMovie,
} = require("../Controller/movieController");

const router = express.Router();

router.get("/movies", getMovie);

router.post("/movies", postMovie);

router.put("/movies", putMovie);

router.patch("/movies", patchMovie);

router.delete("/movies", deleteMovie);

module.exports = router;
