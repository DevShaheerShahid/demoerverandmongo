const express = require("express");
const gerneRoutes = require("./Routers/gerne");
const moviesRoutes = require("./Routers/movies");
const userRoutes = require("./Routers/user");
const stocksRoutes = require("./Routers/stocks");
const connect = require("./database");

const app = express(moviesRoutes);
app.use(express.json());
connect();
app.use("/", moviesRoutes);
app.use("/", gerneRoutes);
app.use("/", userRoutes);
app.use("/", stocksRoutes);

app.listen(8080, () => {
  console.log("server started 1");
});
