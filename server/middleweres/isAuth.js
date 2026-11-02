import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

const isAuth= async (req, res, next) => {
  const token = req.cookies.token;
  try {
    if (!token) {
      return res.json("token is required");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ message: `isuserAuthenticated error ${error}` });
  }
};
export default isAuth