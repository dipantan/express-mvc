import express from "express";
import { join } from "path";
import router from "./routes/index.js";
import * as dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/", router);
app.use(express.static(join(__dirname, "./public")));

app.set("view engine", "pug");
app.set("views", "./views");

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
