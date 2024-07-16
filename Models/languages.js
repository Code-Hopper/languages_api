// schema will helps us to read or write any data in mongodb collection

import mongoose, { model } from "mongoose";

let LanguageSchema = mongoose.Schema({
    _id: Number,
    name: String,
    level: String,
    duration: String,
    scope: Array
})

let LanguageModel = new model("languages", LanguageSchema)

export { LanguageModel }