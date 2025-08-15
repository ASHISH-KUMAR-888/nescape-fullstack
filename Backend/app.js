import express from "express";
import product from "./routes/productRoutes.js";
import header from "./routes/headerRoutes.js";
import footer from "./routes/footerRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use("/api/products", product);
app.use("/api/headers", header);
app.use("/api/footers", footer);

app.use(express.static("public/images"));

export default app;
