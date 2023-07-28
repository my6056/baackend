const Volunteer = require("../model/VolunteerModel");

// Handle volunteer registration
module.exports.CreateVolunteer = async (req, res) => {
  const { fullName, contactNumber, location, spokenLanguages, availability } =
    req.body;
  try {
    const newVolunteer = new Volunteer({
      fullName,
      contactNumber,
      location,
      spokenLanguages,
      availability,
    });
    await newVolunteer
      .save()
      .then(() =>
        res.json({
          message: "Volunteer registered successfully",
          status: true,
          newVolunteer,
        })
      )
      .catch((err) =>
        res.json({
          message: "Internal Server Error !",
          status: false,
        })
      );
  } catch (error) {
    return res.json({
      message: "Internal Server Error !",
      status: false,
    });
  }
};

module.exports.GetAll = async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    return res.json({
      status: true,
      message: "List Fetched Successfull",
      volunteers,
    });
  } catch (error) {
    return res.json({
      message: "Internal Server Error !",
      status: false,
    });
  }
};
