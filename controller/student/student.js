const UserModel = require("../../models/userModel");
const bcryptjs = require("bcryptjs");

register = async (req, res) => {
  let formData = req.body;
  if (await UserModel.findOne({ email: formData.email })) {
    res.json({
      message: "User already exists",
      status: 200,
      success: false,
    });
  } else {
    let userObj = new UserModel(); //Instance of UserModel()
    userObj.name = formData.name;
    userObj.email = formData.email;
    userObj.phone = formData.phone;
    userObj.password = bcryptjs.hashSync(formData.password, 10);
    userObj.userType = 2;
    userObj
      .save()
      .then((stuData) => {
        if (!stuData) {
          res.json({
            message: "No User Found",
            status: 400,
            success: false,
          });
        } else {
          res.json({
            message: "User registered",
            status: 200,
            success: true,
            data: stuData,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Internal server error",
          status: 500,
          success: false,
        });
      });
  }
};

single = (req, res) => {
  UserModel.findOne({ _id: req.body._id })
  .then((userData) => {
    if (userData) {
      res.json({
        status: 200,
        message: "Data loaded",
        success: true,
        data: userData,
      });
    } else {
      res.json({
        status: 400,
        message: "No data found",
        success: false,
      });
    }
  }).catch((err) => {
    res.json({
      status: 500,
      message: "Internal server error",
      success: false,
    });
  }
  )
};
all = (req, res) => {
  UserModel.find()
  .then((userData) => {
    if (userData.length > 0) {
      res.json({
        status: 200,
        message: "Data loaded",
        success: true,
        data: userData,
      });
    } else {
      res.json({
        status: 400,
        message: "No data found",
        success: false,
      });
    }
  }).catch((err) => {
    res.json({
      status: 500,
      message: "Internal server error",
      success: false,
    });
  }
  )
};
update = (req, res) => {
  let validation = [];
  let formData = req.body;
  if (!formData._id) {
    validation.push("_id is required");
  }
  if (validation.length > 0) {
    res.json({
      success: true,
      status: 422,
      message: validation,
    });
  } else {
    UserModel.findOne({ _id: formData._id })
      .then((userData) => {
        // console.log(res);
        if (!!userData) {
          if (!!formData.score) {
            userData.score = formData.score;
          }
          userData
            .save()
            .then((data) => {
              // console.log(data);
              if (!!data) {
                res.json({
                  status: 200,
                  success: true,
                  message: "Data updated",
                  data: data,
                });
              } else {
                res.json({
                  status: 400,
                  success: false,
                  message: "not updated",
                });
              }
            })
            .catch((err) => {
              res.json({
                status: 500,
                success: false,
                message: "Internal server error",
              });
            })
        } else {
          res.json({
            status: 400,
            message: "No data found",
            success: false,
          });
        }
      })
      .catch((err) => {
        res.json({
          status: 500,
          message: "Internal server error",
          success: false,
        });
      })
  }
};

module.exports = { register, all, single, update };
