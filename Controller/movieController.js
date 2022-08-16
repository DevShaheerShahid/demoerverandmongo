const express = require("express");
const movieModel = require("../Modal");

// MOVIES CONTROLLER
const getMovie = (req, res) => {
  //   console.log(movieList);
  res.send(MyModel.movie);
};

const putMovie = (req, res) => {
  res.send("PUT");
};

const postMovie = async (req, res) => {
  //   res.sendStatus(201);
  // console.log(MyModel.movie);
  // MyModel.movie.push(req.body);

  // console.log(req.body.title);
  const movieCreated = new movieModel({
    title: req.body.title,
    rate: req.body.rate,
  });
  const newMovie = await movieCreated.save();
  res.send(newMovie);
};

const patchMovie = (req, res) => {
  res.send("PATCH");
};

const deleteMovie = (req, res) => {
  res.send("DELETED");
};

module.exports = { getMovie, putMovie, patchMovie, deleteMovie, postMovie };
