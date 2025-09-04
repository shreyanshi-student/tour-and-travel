const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true }, // e.g., Guide, Coordinator
    bio: { type: String }, // short intro
    image: { type: String }, // store image URL or Base64
    socialLinks: {
      facebook: { type: String },
      instagram: { type: String },
      linkedin: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", teamSchema);
