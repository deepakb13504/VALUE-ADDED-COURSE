import mongoose from "mongoose";
const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  organizer: {
    type: String,
    require: false,
  },
  capacity: {
    type: Number,
    require: true,
  },
});
const Event = mongoose.model("event", eventSchema);
export default Event;
