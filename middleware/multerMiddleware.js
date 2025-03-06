/*
 *   Copyright (c) 2025 RCUBE PLANET PVT LTD
 *   All rights reserved.
 */
import multer from "multer";
import DataURIParser from "datauri/parser.js";
import path from "path";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const parser = new DataURIParser();
export const formatImage = (file) => {
  const fileExtension = path.extname(file.originalname).toString();
  return parser.format(fileExtension, file.buffer).content;
};

export default upload;
