/*
 *   Copyright (c) 2025 RCUBE PLANET PVT LTD
 *   All rights reserved.
 */
import { StatusCodes } from "http-status-codes";
import User from "../models/userModels.js";
import Job from "../models/jobModels.js";
import cloudinary from "cloudinary";
import { formatImage } from "../middleware/multerMiddleware.js";

export const getCurrentUser = async (req, res) => {
  // alternative way
  // const user = await User.findById(req.user.user_id);
  const user = await User.findOne({ _id: req.user.user_id });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const jobs = await Job.countDocuments();
  res.status(StatusCodes.OK).json({ users, jobs });
};

export const updateUser = async (req, res) => {
  const newUser = { ...req.body };
  delete newUser.password;
  if (req.file) {
    const file = formatImage(req.file);
    const response = await cloudinary.v2.uploader.upload(file);
    // await fs.unlink(req.file.path); it is removed coz we are not retreiving the image inside the public/uploads folder
    newUser.avatar = response.secure_url;
    newUser.avatarPublicId = response.public_id;
  }
  const updatedUser = await User.findByIdAndUpdate(req.user.user_id, newUser);
  if (req.file && updatedUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
  }
  res.status(StatusCodes.OK).json({ msg: "update user" });
};
