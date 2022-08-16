const express = require("express");

// STOCKS CONTROLLER

const getStocks = (req, res) => {
  res.send("stocks Get");
};

const postStocks = (req, res) => {
  res.send("stocks POST");
};

const putStocks = (req, res) => {
  res.send("stocks PUT");
};

const patchStocks = (req, res) => {
  res.send("stocks PATCH");
};

const deleteStocks = (req, res) => {
  res.send("stocks DELETED");
};

module.exports = {
  getStocks,
  postStocks,
  putStocks,
  patchStocks,
  deleteStocks,
};
