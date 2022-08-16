const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://test:Khankhan..123@cluster0.jfhg5wh.mongodb.net/test?retryWrites=true&w=majority"
  );
  console.log("DataBase Started");
};

module.exports = connect;
