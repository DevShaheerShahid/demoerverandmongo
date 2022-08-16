// GERNE CONTROLLER
const express = require("express");

const getGerne = (req, res) => {
  res.send("gerne Get");
};

const postGerne = (req, res) => {
  res.send("gerne POST");
};

const putGerne = (req, res) => {
  res.send("gerne PUT");
};

const patchGerne = (req, res) => {
  res.send("gerne PATCH");
};

const deleteGerne = (req, res) => {
  res.send("gerne DELETED");
};

module.exports = { getGerne, putGerne, postGerne, patchGerne, deleteGerne };
