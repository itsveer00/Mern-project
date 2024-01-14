const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_admin";
//  const URI = "mongodb+srv://itsveer00:test123@cluster0.rr5tahe.mongodb.net/Cluster0?retryWrites=true&w=majority";
const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successful to DB");
  } catch (error) {
    console.error("database connection fail");
    process.exit(0);
  }
};

module.exports = connectDb;