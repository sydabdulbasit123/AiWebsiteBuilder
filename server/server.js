import app from "./app.js";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
dotenv.config();

const port = process.env.PORT || 3000;

connectdb();

app.listen(port, () => {
  console.log("server is running at", port, "port");
});
