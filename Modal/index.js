const mongoose = require("mongoose");

const movie = new mongoose.Schema({
  title: String,
  rate: Number,
});

module.exports = mongoose.model("movie", movie);
