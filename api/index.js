import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import listingRouter from './routes/listing.route.js';
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

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
    console.log("Server running at 3000  ddS@@@ !!");
});

//api route
app.use("/api/user", userRouter);
app.use("/api/auth",authRouter);
app.use("/api/listing",listingRouter);

//middleware for handling error
app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500 ;
    const message =err.message || "Internal server message";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});