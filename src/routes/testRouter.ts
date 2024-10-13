import { Router } from "express"
import { createTest, getTestByStudentName, updateTest } from "../controllers/testController"

const testRouter = Router()

testRouter.post("/", createTest)

testRouter.patch("/update", updateTest)

testRouter.get("/:student_name", getTestByStudentName)

export default testRouter
