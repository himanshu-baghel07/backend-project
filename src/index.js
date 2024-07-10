//require('dotenv').config()

import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({
    path: './env'
})


connectDB()
    .then(() => {
        app.on("Error", (error) => {
            console.log("ERRR:", error)
            throw error
        })

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on PORT ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("Mongo DB connection Failed !!", err)
    })













// import express from "express";

// const app = express()

//     (async () => {
//         try {
//             await mongoose.connect(` ${process.env.MONGODB_URI}/${DB_NAME}`)
//             app.on("Errror", (error) => {
//                 console.log("Error", error)
//                 throw error
//             })
//             app.listen(process.env.PORT, () => {
//                 console.log(`App is listing on port ${process.env.PORT}`)
//             })
//         } catch (error) {
//             console.log("Error hai", error)
//             throw error
//         }
//     })()