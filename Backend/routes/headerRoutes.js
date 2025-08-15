import express from "express";
import { getHeaders } from "../controllers/headerController.js";

const router = express.Router();

router.get("/", getHeaders);

export default router;
