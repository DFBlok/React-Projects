import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";

const app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//Example Route
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
