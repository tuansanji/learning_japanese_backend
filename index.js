const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const app = express();
const port = 5001;

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGODB TO CONNECTED");
  })
  .catch((err) => {
    console.error(`connection error: ${err}`);
  });

app.use("/auth", authRoutes);
app.use("/user", userRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));
