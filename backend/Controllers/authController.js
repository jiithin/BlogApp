import User from "../Models/UserModel.js";
import bcryptjs from 'bcryptjs'
import { errorHandlr } from "../Utils/Error.js";

export const signup = async (req,res,next) => {
    const {username, email, password}=req.body;
if(!username || !email || !password || username === ''|| email === '' || password === ''){
    next(errorHandlr(400, 'All fields are required'));
}

const hashedPassword=bcryptjs.hashSync(password,10);

const newUser=new User({username,email,password: hashedPassword});

 try{
    await newUser.save();
    res.json('Signup  succesful');
 }catch(error){

    next(error);
 }


}