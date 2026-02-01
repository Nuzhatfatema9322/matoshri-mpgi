import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//login request handle loginAdmin
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body; //from frontend email and password

    // 1️⃣ user find //User collection
    const user = await User.findOne({ email }); //email match

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials (email)" });
    }

    // 2️⃣ password match
    const isMatch = await bcrypt.compare(password, user.password); //plain vs hashed 
    // password compare

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials (password)" });
    }

    // 3️⃣ token generate //user id //role (admin) //expiry 1 day
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // 4️⃣ response === frontend // postman
    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
