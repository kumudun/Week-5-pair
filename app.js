const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const morgan = require("morgan");

const tourRouter = require("./routes/tourRouter");
const userRouter = require("./routes/userRouter");
const {
  unknownEndpoint,
  errorHandler,
} = require("./middleware/customMiddleware");
const connectDB = require("./config/db");

connectDB();

// Middleware
app.use(morgan("dev"));
app.use(express.json());

// Routers
app.use("/api/tours", tourRouter);
app.use("/api/users", userRouter);

// Example route that throws an error
app.get("/error", (req, res, next) => {
  // Trigger an error
  const error = new Error("Network problem");
  next(error);
});

// Unknown route handler
app.use(unknownEndpoint);
app.use(errorHandler);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
