const express = require("express");
const {
  getUser,
  postUser,
  putUser,
  patchUser,
  deleteUser,
} = require("../Controller/userController");
const router = express.Router();

router.get("/user", getUser);

router.post("/user", postUser);

router.put("/user", putUser);

router.patch("/user", patchUser);

router.delete("/user", deleteUser);
module.exports = router;
