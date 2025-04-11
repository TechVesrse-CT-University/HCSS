const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  name: { type: String, default: "" },
  email: { type: String, default: "" },
  phone: { type: Number, default: 0 },
  password: { type: String, default: "" },
  userType: { type: Number, default: 2 },
  status: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now() },
  score: { type: Number, default: 0 },
});

module.exports = mongoose.model("UserModel", UserSchema);
