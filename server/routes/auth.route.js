import { Router } from "express";
import { googleAuth, logout } from "../controllers/auth.controller.js";
import isAuth from "../middleweres/isauth.js";

const AuthRouter = Router();

AuthRouter.post("/google", googleAuth);
AuthRouter.get("/logout",isAuth ,logout);

export default AuthRouter;
