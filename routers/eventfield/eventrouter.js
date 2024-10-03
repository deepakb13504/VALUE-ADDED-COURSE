import { Router, request, response } from "express";
import Event from "../../eventfields.js";

const router = Router();
router.post("/post", async (req, res) => {
  try {
    const event = Event(req.body);
    await event.save();
    res.send("created");
  } catch (error) {
    console.log("error");
  }
});
router.get("/get/:id", async (req, res) => {
  try {
    const event = await Event.find();
    res.send(event);
  } catch (error) {
    res.send("error");
  }
});
export default router;
