import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoute.js";

//config dotenv
dotenv.config();

//Database Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connection Successful"))
  .catch((err) => {
    console.log(err);
  });

//Rest Object
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/v1/auth", authRoutes);

//Port
const PORT = process.env.PORT || 8080;

//Listen
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
