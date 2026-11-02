import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const googleAuth = async (req, res) => {
  try {
    const { email, name, avatar } = req.body;
    if (!email) {
      return res.status(400).json({
        message: "email is required",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      const user = await User.create({ email, name, avatar });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      maxage: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: `google Auth error ${error}` });
  }
};
export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "logout successfully" });
  } catch (error) {
    return res.status(500).json({ message: `logout error ${error}` });
  }
};
