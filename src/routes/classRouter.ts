import { Router } from "express"
import { getAllStudentsData, getClassAvarege } from "../controllers/classController"

const classRouter = Router()

classRouter.get("/:class_name", getAllStudentsData)

classRouter.get("/avarege/:class_name", getClassAvarege)

// classRouter.get("/students", getAllClassStudents)

// classRouter.get("/:class_name", getClassByName)

export default classRouter
