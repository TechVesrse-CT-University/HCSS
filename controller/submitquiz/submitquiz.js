const UserModel = require("../../models/userModel");

// POST /api/submit-quiz
submitQuiz = async (req, res) => {
  const { userId, score } = req.body;

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { score: score },
      { new: true }
    );

    if (!updatedUser) {
      return res.json({
        success: false,
        message: "User not found"
      });
    } else {

      res.json({
        success: true,
        message: "Score updated successfully",
        data: updatedUser
      });
    }

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating score",
      error: error.message
    });
  }
};

module.exports = { submitQuiz };
