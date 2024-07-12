import express from "express"

import { GetHome, GetAbout, GetServices,Get404 } from "../controllers/controller.js"

let router = express()

router.get("/", GetHome)

router.get("/about", GetAbout)

router.get("/service", GetServices)

// check all routes
// router.get("*", Get404)

export { router }