// app.js
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const connectDB = require("./config/db");
const tourRouter = require("./routes/tourRouter");
const userRouter = require("./routes/userRouter");
const {
  requestLogger,
  unknownEndpoint,
  errorHandler,
} = require("./middleware/customMiddleware");

dotenv.config();
connectDB();

const app = express();

// General middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(requestLogger); // optional but useful

// Routers
app.use("/api/tours", tourRouter);
app.use("/api/users", userRouter);

// Example route that throws an error
app.get("/error", (req, res, next) => {
  const error = new Error("Network problem");
  next(error); // Pass error to error-handling middleware
});

// Unknown route handler (404)
app.use(unknownEndpoint);

// Error-handling middleware MUST be last
app.use(errorHandler);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
