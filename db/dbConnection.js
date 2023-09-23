const mongoose = require("mongoose");
const dbConnection = async () => {
  await mongoose
    .connect(process.env.DATA_STRING)
    .then(() => {
      console.log("mongodb Atlas connected");
    })
    .catch((err) => console.log(`your err is : ` + err.message));
};
module.exports = dbConnection;
