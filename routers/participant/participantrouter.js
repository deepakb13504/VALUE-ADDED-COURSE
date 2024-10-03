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
  }),
  router.put("/put/:id", async (req, res) => {
    try {
      const participant = await Participant.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!participant) {
        return res.send("Participant is not found");
      }
      res.send(participant);
    } catch (error) {
      res.send("error");
    }
  }),
  router.delete("/delete/:id", async (req, res) => {
    try {
      const participant = await Participant.findByIdAndDelete(req.params.id);
      if (!participant) {
        return res.send("Participant is not found");
      }
      res.send("deleted");
    } catch (error) {
      res.send(error);
    }
  });
export default router;
