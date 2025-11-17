/*
{
  "name": "Adventures in Tokyo - 5 Day Tour",
  "info": "Discover the vibrant mix of tradition and modernity in Tokyo. Visit ancient temples like Senso-ji, explore futuristic districts such as Shibuya and Akihabara, and enjoy authentic Japanese cuisine from sushi to ramen. Guided tours will take you through bustling markets, serene gardens, and hidden alleyways filled with local charm.",
  "image": "https://tx00-web-en.github.io/resources/img/tours/tour-2.jpeg",
  "price": "1,450",
  "duration": "5 days",
  "rating": 4.8,
  "season": "Spring 2025",
  "specialOffer": "Early bird discount 10%"
}
*/

const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: String, // kept as string since data uses "1,450"
      required: true,
    },
    duration: {
      type: String, // e.g. "5 days"
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    season: {
      type: String,
      required: true,
    },
    specialOffer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;
