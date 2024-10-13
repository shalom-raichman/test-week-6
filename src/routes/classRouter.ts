import { Router } from "express"
import { getAllStudentsData, getClassAvarege } from "../controllers/classController"

const classRouter = Router()

classRouter.get("/", getAllStudentsData)

classRouter.get("/avarege", getClassAvarege)

// classRouter.get("/students", getAllClassStudents)

// classRouter.get("/:class_name", getClassByName)

export default classRouter
