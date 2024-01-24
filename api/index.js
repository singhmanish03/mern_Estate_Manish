import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import { error } from 'console';
import userRouter from "./routes/user.route.js";

dotenv.config();

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Connected to Db");
    })
    .catch((error) => {
        console.log("This is error----->", error);
    });

const app = express();

app.listen(3000, () => {
    console.log("Server running at 3000  ddS@@@ !!");
});

//api route
app.use("/api/user", userRouter);
