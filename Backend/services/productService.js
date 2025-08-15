import productModel from "../models/productModel.js";

const getAllProducts = async () => await productModel.find();

const getOneProduct = async (id)=> await productModel.findById(id);

export { getAllProducts, getOneProduct };
