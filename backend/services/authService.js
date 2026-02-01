import Admin from "../models/Admin.js";
import bcrypt from "bcrypt";

// 🔐 login logic yahan hoga
export const loginService = async (email, password) => {
  const admin = await Admin.findOne({ email });

  if (!admin) {
    return null;
  }

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    return null;
  }

  return admin;
};
