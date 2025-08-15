import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  images: [{ type: String, required: true, trim: true }],
  name: { type: String, required: true, trim: true },
  type: { type: String, required: true, trim: true },
  taste: { type: String, required: true, trim: true },
  coffee_type: { type: String, required: true, trim: true },
  size: {
    name: { type: String, required: true, trim: true },
    amount: [{ type: String, required: true, trim: true }],
  },
  description: { type: String, required: true, trim: true },
});

const productModel = mongoose.model("products", productSchema);

export default productModel;
