/*
 *   Copyright (c) 2025 RCUBE PLANET PVT LTD
 *   All rights reserved.
 */
import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
  // a random value that is added to the password before hashing
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const comparePassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};
