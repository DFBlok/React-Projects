import express, { response } from "express";
import { PORT, monogoDB } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRouter from "./routes/booksRoutes.js";

const app = express();

//middleware for parsing request body
app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.send("Welcome To MERN Stack Tutorial");
});

app.use("/books", booksRouter);

mongoose
  .connect(monogoDB)
  .then(() => {
    console.log("App is connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
//PASSWORD - hMusDAmJHYkIdDY9
//user = root
