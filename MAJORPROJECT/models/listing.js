const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: String,
  image: {
    filename: {
      type: String,
      default:
        "https://unsplash.com/photos/ornate-domed-ceiling-in-bucharest-A1-mvASloGI",
    },

    url: {
      type: String,
      set: (v) =>
        v === ""
          ? "https://unsplash.com/photos/ornate-domed-ceiling-in-bucharest-A1-mvASloGI"
          : v,
    },
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({
      _id: { $in: listing.reviews },
    });
  }
});

const Listing = mongoose.model("listing", listingSchema);
module.exports = Listing;
