import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import listingRouter from './routes/listing.route.js';
import path from "path";
dotenv.config();

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Connected to Db");
    })
    .catch((error) => {
        console.log("This is error----->", error);
    });

//for deploying creating dynamic directory 
const _dirname = path.resolve();


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

//after api route we have to deploying 
app.use(express.static(path.join(_dirname,'/client/dist')));
app.get('*',(req,res) => {
    res.sendFile(path.join(_dirname,'client','dist','index.html')) ;
})

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