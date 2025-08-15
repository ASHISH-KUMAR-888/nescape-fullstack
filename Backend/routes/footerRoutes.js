import express from "express";
import getFooters from "../controllers/footerController.js";
const router = express.Router();

router.get("/", getFooters);

export default router;
