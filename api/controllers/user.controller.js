import bcrypt from 'bcrypt';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';

export const test = (req, res) => {
  res.send("Hello wOooooo");
}

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)  //checking very.js id and parameter id 
    return next(errorHandler(401, 'You can only update your own account!'));
  try {
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {   //set will check if data is change or it will ignore 
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }  //this will return and save new information
    );

    const { password, ...rest } = updatedUser._doc;  //seprate password and rest
    res.status(200).json(rest);

  } catch (error) {
    next(error);
  }
};


//delete user function 
export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, 'You can only delete your own account!'));
  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie('access_token');
    res.status(200).json('User has been deleted!');
  } catch (error) {
    next(error);
  }
};
