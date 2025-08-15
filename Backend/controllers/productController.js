import { getAllProducts, getOneProduct } from "../services/productService.js";

const getProducts = async (req, res) => {
  const product = await getAllProducts();
  res.status(200).json({ success: true, data: product });
};

const getProductOne = async (req, res) => {
  const result = await getOneProduct(req.params.id);
  res.status(200).json({ success: true, data: result });
};

export { getProductOne };

export default getProducts;
