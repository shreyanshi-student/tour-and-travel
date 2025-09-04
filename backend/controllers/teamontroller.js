const Team = require("../models/team");

// Create Team Member
exports.createTeamMember = async (req, res) => {
  try {
    const teamMember = new Team(req.body);
    const savedMember = await teamMember.save();
    res.status(201).json(savedMember);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Team Members
exports.getTeamMembers = async (req, res) => {
  try {
    const members = await Team.find().sort({ createdAt: -1 });
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Single Team Member by ID
exports.getTeamMemberById = async (req, res) => {
  try {
    const member = await Team.findById(req.params.id);
    if (!member) return res.status(404).json({ error: "Team member not found" });
    res.json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Team Member
exports.updateTeamMember = async (req, res) => {
  try {
    const updatedMember = await Team.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedMember) return res.status(404).json({ error: "Team member not found" });
    res.json(updatedMember);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Team Member
exports.deleteTeamMember = async (req, res) => {
  try {
    const deletedMember = await Team.findByIdAndDelete(req.params.id);
    if (!deletedMember) return res.status(404).json({ error: "Team member not found" });
    res.json({ message: "Team member deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
