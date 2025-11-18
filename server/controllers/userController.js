 
import User from "../models/user.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const generateToken = (userId)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'7d'})
    return token;
}

 //controller for user register:
 //POST: /api/users/register

 export const registerUser = async(req,res)=>{
    try {
       const {name,email,password} = req.body;

       //check if required fields are present
       if(!name||!email||!password){
        return res.status(400).json({message:"Missing required fields"})
       }

       //check user already exist
       const user = await User.findOne({email})

       if(user){
        return res.status(400).json({message:"User already exists"})
       }

       //if not create new user
       const hashedPassword = await bcrypt.hash(password,10)
       const newUser = await User.create({name,email,password:hashedPassword})

       //return success meassage

     const token =generateToken(newUser._id)
       newUser.password = undefined;
       return res.status(201).json({message:"User created successfully!",token,user:newUser})

      
        
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
 }


 //controller for login:
 //POST:/api/users/login

 export const loginUser = async(req,res)=>{
  try {
    const{email,password}=req.body;

    //check if user exists
    const user = await User.findOne({email})

    if(!user){
      return res.status(400).json({message:"Invalid email or password"})

    }

    //check if password is correct
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
      return res.status(400).json({message:"Invalid credentials"})
    }

    //return success message
    const token = generateToken(user._id)
    user.password = undefined;
    return res.status(200).json({message:"Login successfull",token,user:user})
    
  } catch (error) {
    return res.status(400).json({message:error.message})
  }
 }
 