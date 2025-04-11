const express = require("express");
const router = express.Router();
const UserModel = require("../models/userModel");

// ✅ Route to update the user's quiz score
router.post("/updateScore", async (req, res) => {
  const { userId, score } = req.body;
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    user.score = score;
    await user.save();

    res.status(200).json({ success: true, message: "Score updated",score });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error", error: err.message });
  }
});

module.exports = router;
