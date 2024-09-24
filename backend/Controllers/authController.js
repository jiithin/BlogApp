import User from "../Models/UserModel.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../Utils/Error.js";
import jwt from 'jsonwebtoken';


//signup post request and validation
export const signup = async (req,res,next) => {
    const {username, email, password}=req.body;
if(!username || !email || !password || username === ''|| email === '' || password === ''){
    next(errorHandler(400, 'All fields are required'));
}

const hashedPassword=bcryptjs.hashSync(password,10);

const newUser=new User({username,email,password: hashedPassword});

 try{
    await newUser.save();
    res.json('Signup  succesful');
 }catch(error){

    next(error);
 }
};


// signin form validation
export const signin=async(req,res,next)=>{
    const {email,password}= req.body;
    if(!email || !password || email === ''|| password === ''){
        next(errorHandler(400, 'All fields are required.'));
    }
    try{
        const validUser=await User.findOne({email});
        if(!validUser){
            return next(errorHandler(404, 'Invalid email or password'));
        }
        const validPassword=bcryptjs.compareSync(password,validUser.password);
        if (!validPassword){
            return next(errorHandler(401, 'Invalid email or password'));//returns if password is wrong
        }
        const token=jwt.sign({id:validUser._id},process.env.SECRET_KEY);
        const {password:pass, ...rest}=validUser._doc;//not gonna sent password back
        res.status(200).cookie('access_token',token,{httpOnly:true,

        }).json(rest);

    }catch(error){
        next(error);

    }
}