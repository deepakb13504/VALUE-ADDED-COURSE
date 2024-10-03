import mongoose from "mongoose";
const participantSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: false,
  },
});
const Participant = mongoose.model("Participant", participantSchema);
export default Participant;
