import express from "express"

import { GetHello , GetRandomLanguage , GetLanguages , GetSearchData } from "../controllers/apiController.js"

let apiRouter = express()

apiRouter.get("/api/hello",GetHello)

apiRouter.get("/api/random",GetRandomLanguage)

apiRouter.get("/api/search",GetSearchData)

apiRouter.get("/api/languages",GetLanguages)

export {apiRouter}