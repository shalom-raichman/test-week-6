import { Router } from "express"
import { createTest, getTestByStudentName, updateTest } from "../controllers/testController"
import { onlyTeachers, onlyUsers } from "../middlewares/authMiddleware"

const testRouter = Router()

testRouter.post("/", onlyTeachers, createTest)

testRouter.patch("/update/:id", onlyTeachers, updateTest)

testRouter.get("/:student_name", onlyUsers, getTestByStudentName)

export default testRouter
