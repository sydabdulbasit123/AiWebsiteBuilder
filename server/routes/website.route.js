import { Router } from "express";
import isAuth from "../middleweres/isauth.js";
import {
  websitegenerator,
  Getwebsitebyid,
} from "../controllers/website.controllers.js";

const websiteRouter = Router();

websiteRouter.post("/generate", isAuth, websitegenerator);
websiteRouter.get("/get-by-id/:id", isAuth, Getwebsitebyid);

export default websiteRouter;
