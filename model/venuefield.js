import mongoose from "mongoose";
const venueSchema = new mongoose.Schema({
  venueName: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  capacity: {
    type: Number,
    require: false,
  },
});
const Venue = mongoose.model("Venue", venueSchema);
export default Venue;
