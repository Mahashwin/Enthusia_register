var mongoose = require("mongoose");
var connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://Mahashwin:Mahashwin5522@mahashwin.esqtx8s.mongodb.net/prelims",
    {
      useNewUrlParser: true,
    }
  );
  console.log("Connected to DB");
};

module.exports = connectDB;