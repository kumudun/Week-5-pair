const { default: mongoose } = require("mongoose");
const Tour = require("../models/tourModel.js");

// GET /tours
const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find({}).sort({ createdAt: -1 });
    res.status(200).json(tours);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Validation error", error: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

// POST /tours
const createTour = async (req, res) => {
  try {
    const newTour = await Tour.create({ ...req.body }); // Spread the req.body object
    res.status(201).json(newTour);
  } catch (error) {
    if (error.name === "validationError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

// GET /tours/:tourId
const getTourById = async (req, res) => {
  const { tourId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(tourId)) {
    return res.status(400).json({ message: "Invalid tour ID" });
  }
  try {
    const tour = await Tour.findById(tourId);
    if (tour) {
      res.json(tour);
    } else {
      res.status(404).json({ message: "Tour not found" });
    }
  } catch (error) {
    if (error.name === "MongoNetworkError") {
      return res
        .status(503)
        .json({ message: "Service Unavailable. Please try again later." });
    }
    res.status(500).json({ message: error.message });
  }
};

// PUT /tours/:tourId

const updateTour = async (req, res) => {
  const { tourId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(tourId)) {
    return res.status(400).json({ message: "Invalid tour ID" });
  }
  try {
    const updatedTour = await Tour.findOneAndUpdate({ _id: tourId }, req.body, {
      new: true,
    });
    if (updatedTour) {
      res.json(updatedTour);
    } else {
      res.status(404).json({ message: "Tour not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /tours/:tourId
const deleteTour = async (req, res) => {
  const { tourId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(tourId)) {
    return res.status(400).json({ message: "Invalid tour ID" });
  }
  try {
    const deletedTour = await Tour.findOneAndDelete(tourId);
    if (deletedTour) {
      res.json({ message: "Tour deleted successfully" });
    } else {
      res.status(404).json({ message: "Tour not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};
