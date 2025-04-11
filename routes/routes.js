const express = require("express");
const router = express.Router();
const studentController = require("../controller/student/student");
const UserController = require("../controller/user/login");
const { submitQuiz } = require("../controller/submitquiz/submitquiz");
router.post("/login", UserController.login);
// student routes
router.post("/register", studentController.register);
router.post("/all", studentController.all);
router.post("/single", studentController.single);
router.post("/update", studentController.update);
// router.post("/submit-Quiz",submitQuiz)

module.exports = router;
