import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
//controller for signup
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save()
    res.status(201).json("User created Successfully")
  } catch (error) {
    next(error);
  }
};

//controller for signin 

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //validation of email
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found !!"));
    //validation of password
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, 'Wrong Credentials !'));
    //token
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    //hiding password with everyone so sending everything except password
    const { password: pass, ...rest } =validUser._doc;  //doc ke andar sab kuch hai 
    res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
  } catch (error) {
    next(error);
  }
}