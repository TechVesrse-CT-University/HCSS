const UserModel = require("../models/userModel");
const bcryptjs = require("bcryptjs");
const email = "teacher@gmail.com";

UserModel.findOne({ email: email })
.then((res) => {
  if (res) {
    console.log("Teacher exists");
  } else {
    let UserObj = new UserModel();
    UserObj.name = "harshal";
    UserObj.email = email;
    UserObj.password = bcryptjs.hashSync("harshal", 10);
    UserObj.userType = 1
    UserObj.save()
    .then((userData)=>{
        console.log("Teacher seeded");
        
    }).catch(()=>{
        console.log("Teacher not seeded");
        
    })
  }
}).catch(()=>{
    console.log("Internal server error");
    
})
