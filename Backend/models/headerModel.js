import mongoose from "mongoose";

const headerSchema = new mongoose.Schema({
  logo: { type: String, required: true, trim: true },
});

const headerModel = mongoose.model("headers", headerSchema);

export default headerModel;
