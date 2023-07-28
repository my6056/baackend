const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// volunteerSchema creaation
const volunteerSchema = new Schema({
  fullName: {
    type: String,
    require: true,
  },

  contactNumber: {
    type: String,
    require: true,
  },

  location: {
    type: String,
    require: true,
  },

  spokenLanguages: [
    {
      type: String,
      require: true,
    },
  ],

  availability: [
    {
      type: String,
      require: true,
    },
  ],

  classroomId: {
    type: Number,
    default: null,
  }, // For automatic allocation (optional)
});

const VolunteerModel = mongoose.model("VolunteerModel", volunteerSchema);

module.exports = VolunteerModel;
