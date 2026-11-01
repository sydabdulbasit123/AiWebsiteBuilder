import mongoose from "mongoose";

async function connectdb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("db is connected");
  } catch (error) {
    console.log("db connect error", error);
    process.exit(1);
  }
}

export default connectdb;
