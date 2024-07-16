import mongoose from "mongoose";

import dotenv from "dotenv"

dotenv.config({ path: "./config.env" })

let conn = async () => {

    try {
        let result = await mongoose.connect(process.env.MONGODBSTRING)
        console.log("connection with mongoDB was successfull !")
    } catch (err) {
        console.log("unable to connect with mongoDB", err)
    }

}

conn()