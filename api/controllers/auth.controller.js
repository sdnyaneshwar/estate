import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
export const signup = async(req,res,next)=>{
    const {username,email,password} = req.body;
    const hashedassword =bcryptjs.hashSync(password,10);
    const newUser= new User({username,email,password:hashedassword});
    try {
        await newUser.save();
        res.status(200).json("user created sccessfully");
    
    } catch (error) {
        next(error)
    }
}