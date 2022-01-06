require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const taskRoute = require("./routes/tasks");
const connectDb = require("./dbconfig/dbConnect");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("tiny"));

app.use("/api/v1/tasks", taskRoute);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT;
const mongoUrl = process.env.MONGODB_URI;
const start = async () => {
  try {
    await connectDb(mongoUrl);
    app.listen(port, () => {
      console.log(`Db is up and Server is listening on Port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
