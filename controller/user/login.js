const UserModel = require("../../models/userModel")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const SECRET = "MyProject@123"

login = (req, res) => {
    let validation = []
    let formData = req.body
    if (!formData.email) {
        validation.push("Email is required!")
    } if (!formData.password) {
        validation.push("Password is required!")
    } if (validation.length > 0) {
        res.json({
            status: 422,
            success: false,
            message: validation
        })
    } else {
        UserModel.findOne({ email: formData.email })
            .then((userData) => {
                // console.log(userData);
                if (!userData) {
                    res.json({
                        status: 200,
                        success: false,
                        message: "No User Found!"
                    })
                } else {
                    let comparePass = bcryptjs.compareSync(formData.password, userData.password)
                    if (comparePass) {
                        let payload = {
                            userId: userData._id,
                            name: userData.name,
                            email: userData.email,
                            userType: userData.userType
                        }
                        let token = jwt.sign(payload, SECRET, { expiresIn: "7d" })
                        // console.log(token );
                        res.json({
                            status: 200,
                            success: true,
                            message: "Login successfully!",
                            data: userData,
                            token: token
                        })
                    } else {
                        res.json({
                            status: 200,
                            success: false,
                            message: "Invalid Credentials!"
                        })
                    }
                }
            })
            .catch((err) => {
                res.json({
                    status: 500,
                    success: false,
                    message: "Internal server error!"
                })
            })
    }
}

updatescore=(req,res)=>{
    const {userid,score}=req.body;
    UserModel.findByIdAndUpdate(userid,{score},{new:true})
.then((updatedUser)=>{
    if(!updatedUser){
        return res.json({
            status:404,
            success:false,
            message:"user not found" })
    }
    res.json({
        status:202,
        success:true,
        message:"score updated",
        date:updatedUser})
    }).catch(()=>{
        res.json({
            status:500,
        success:false,
        message:"server error",
        })
})
}
all = (req, res) => {
  UserModel.find().then((userData) => {
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
  });
};

module.exports = { login }