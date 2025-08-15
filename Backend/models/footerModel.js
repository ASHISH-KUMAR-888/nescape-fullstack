import { Schema, model } from "mongoose";

const footerSchema = new Schema({
  anchor: { type: String, required: true, trim: true },
});

const footerModel = model("footers", footerSchema);

export default footerModel;
