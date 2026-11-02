import { Router } from "express";
import { GetCurrentUser } from "../controllers/user.controller.js";
import isAuth from "../middleweres/isauth.js";

const UserRouter = Router();

UserRouter.get("/me", isAuth, GetCurrentUser);

export default UserRouter;
