import { Router } from "express"
import {  } from "../controllers/classController"

const classRouter = Router()

classRouter.post("/", createClass)

classRouter.get("/", getClasss)

classRouter.get("/students", getAllClassStudents)

classRouter.get("/:class_name", getClassByName)

export default classRouter
