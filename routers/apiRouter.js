import express from "express"

import { GetHello , GetRandomLanguage } from "../controllers/apiController.js"

let apiRouter = express()

apiRouter.get("/api/hello",GetHello)

apiRouter.get("/api/random",GetRandomLanguage)

export {apiRouter}