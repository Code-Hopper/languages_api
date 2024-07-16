import express from "express"
import dotenv from "dotenv"

import { router } from "./routers/router.js"

import { apiRouter } from "./routers/apiRouter.js"

import "./Database/connection.js"

dotenv.config({ path: "./config.env" })

const app = express()

let port = process.env.PORT || 8800

// .use() : to configure any model from different part of the project to the server file

app.use(router)

// special router only for api's

app.use(apiRouter)

app.listen(port, () => {
    console.log(`server is running on port: ${port} , http://localhost:${port} `)
})