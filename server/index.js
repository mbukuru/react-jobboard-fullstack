import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import jobRoute from "./routes/jobs.js"

const app = express();
dotenv.config();

app.use(cors());

// app.use("/jobs", jobRoutes);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
        } catch (error) {
        throw error;
        }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!")
});

app.use(express.json());

app.use("/jobs", jobRoute);

// app.use((err, req, res, next) => {
//     const errorStatus = err.status || 500
//     const errorMessage = err.message || "something went wrong"
//     return res.status(errorStatus).json({
//         success: false,
//         status: errorStatus,
//         message: errorMessage,
//         stack: err.stack,
//     })
// })

app.listen(8800, () => {
    connect()
    console.log("Connected to backend")
});