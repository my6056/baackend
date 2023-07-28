const express = require("express");
const router = express.Router();
const {
  CreateVolunteer,
  GetAll,
} = require("../controller/volunteerController");
router.get("/", (req, res) => {
  return res.json("Success");
});
router.post("/api/volunteer/register", CreateVolunteer);
router.get("/api/volunteer/lists", GetAll);

module.exports = router;
