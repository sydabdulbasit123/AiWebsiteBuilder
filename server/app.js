import AuthRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import UserRouter from "./routes/user.route.js";
import websiteRouter from "./routes/website.route.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api/auth", AuthRouter);
app.use("/api/user", UserRouter);
app.use("/api/website", websiteRouter);

export default app;
