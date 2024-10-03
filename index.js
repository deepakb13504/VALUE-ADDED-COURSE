import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Event from "./model/routers/eventfield/eventrouter.js";
import Participant from "./model/routers/participant/participantrouter.js";
import Venue from "./model/routers/venue/venuerouter.js";
const app = express();
dotenv.config();
app.use(bodyParser.json());
const PORT = process.env.PORT;
app.use("/evt", Event);
app.use("/pant", Participant);
app.use("/ven", Venue);
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MONGODB IS CONNECTED");
  app.listen(PORT, () => {
    console.log("server is start", PORT);
  });
});
