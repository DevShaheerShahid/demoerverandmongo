// USER CONTROLLER
const express = require("express");

const getUser = (req, res) => {
  res.send("user Get");
};

const postUser = (req, res) => {
  res.send("user POST");
};

const putUser = (req, res) => {
  res.send("user PUT");
};

const patchUser = (req, res) => {
  res.send("user PATCH");
};

const deleteUser = (req, res) => {
  res.send("user DELETED");
};

module.exports = { getUser, postUser, putUser, patchUser, deleteUser };
