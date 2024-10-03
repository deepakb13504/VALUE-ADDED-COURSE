import { Router, request, response } from "express";
import Participant from "../../participantfield.js";

const router = Router();
router.post("/post", async (req, res) => {
  try {
    const participant = Participant(req.body);
    await participant.save();
    res.send("created");
  } catch (error) {
    res.send("error");
  }
}),
  router.get("/get", async (req, res) => {
    try {
      const participant = await Participant.find();
      res.send(participant);
    } catch (error) {
      res.send("error");
    }
  });
export default router;
