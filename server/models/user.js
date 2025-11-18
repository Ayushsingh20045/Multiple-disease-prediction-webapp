import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const userShema = new mongoose.Schema(
    {
        name:{
            type:String,
            requires:true,
            trim:true
        },
        email:{
            type:String,
            unique:true,
            required:true,
            lowercase:true,
            trim:true
        },
        password:{
            type:String,
            required:true
        },
    },
    {timestamps:true}
)



const User = mongoose.model("User",userShema)

export default User;