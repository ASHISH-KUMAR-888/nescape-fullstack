import "dotenv/config";
import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT;

connectDB();

app.listen(PORT, () =>
  console.log(`Server is running on this url : http://localhost:${PORT}`)
);
