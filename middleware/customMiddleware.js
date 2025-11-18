// middleware/customMiddleware.js

// For unknown routes (404)
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

// Optional: log every request
const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

// Error-handling middleware (must have 4 params!)
const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  response.status(500).json({
    message: "Something went wrong!",
  });
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
};
