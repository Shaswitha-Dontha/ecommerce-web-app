import express from "express";
import User from "../models/User.js";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

const router=express.Router();

router.post(
"/register",
async(req,res)=>{

try{

const {
name,
email,
password
}=req.body;

const existing=
await User.findOne({
email
});

if(existing){

return res
.status(400)
.json({
message:
"User Exists"
});

}

const hashed=
await bcrypt.hash(
password,
10
);

const user=
await User.create({

name,

email,

password:hashed

});

res.json({

message:
"Registration Success"

});

}

catch{

res
.status(500)
.json({
message:
"Error"
});

}

}
);

router.post(
"/login",
async(req,res)=>{

const {
email,
password
}=req.body;

const user=
await User.findOne({
email
});

if(!user){

return res
.status(404)
.json({
message:
"User not found"
});

}

const match=
await bcrypt.compare(
password,
user.password
);

if(!match){

return res
.status(400)
.json({
message:
"Wrong Password"
});

}

const token=
jwt.sign(

{

id:user._id,

role:user.role

},

process.env.JWT_SECRET

);

res.json({

token,

user

});

}

);

export default router;