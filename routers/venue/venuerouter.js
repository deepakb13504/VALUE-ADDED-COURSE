import { Router, request, response } from "express";
import Venue from "../../venuefield.js";

const router = Router();
router.post("/post", async (req, res) => {
  try {
    const venue = Venue(req.body);
    await venue.save();
    res.send("created");
  } catch (error) {
    res.send("error");
  }
}),
  router.get("/get", async (req, res) => {
    try {
      const venue = await Venue.find();
      res.send(venue);
    } catch (error) {
      res.send("error");
    }
  }),
  router.put("/put/:id", async (req, res) => {
    try {
      const venue = await Venue.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!venue) {
        return res.send("Venue is not found");
      }
      res.send(venue);
    } catch (error) {
      res.send("error");
    }
  });
router.delete("/delete/:id", async (req, res) => {
  try {
    const venue = await Venue.findByIdAndDelete(req.params.id);
    if (!venue) {
      return res.send("Venue is not found");
    }
    res.send("deleted");
  } catch (error) {
    res.send(error);
  }
});
export default router;
