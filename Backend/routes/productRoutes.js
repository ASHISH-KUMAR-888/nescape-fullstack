import express from "express";
const router = express.Router();
import getProducts, {
  getProductOne,
} from "../controllers/productController.js";

router.get("/", getProducts);

router.get("/:id", getProductOne);

export default router;
