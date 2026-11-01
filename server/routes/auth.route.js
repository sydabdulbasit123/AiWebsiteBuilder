import { Router } from "express";
import { googleAuth, logout } from "../controllers/auth.controller.js";

const AuthRouter = Router();

AuthRouter.post("/google", googleAuth);
AuthRouter.get("/logout", logout);

export default AuthRouter;
