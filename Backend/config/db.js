import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection Successful");
  } catch (error) {
    console.error("Connection Failed", error.message);
    process.exit(1);
  }
};

export { connectDB };
