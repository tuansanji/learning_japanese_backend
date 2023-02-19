const mongoose = require("mongoose");
require("dotenv").config();
const dungMoriConnect = mongoose.createConnection(
  process.env.MONGODB_URL_DUNGMORI
);
const courseSchema = new mongoose.Schema(
  {
    name: String,
    lesson: String,
    way: String,
    level: String,

    author: String,
    pathVideo: String,
    thumb: String,
  },
  {
    collection: "N1",
    timestamps: true,
  }
);

module.exports = dungMoriConnect.model("N1", courseSchema);
