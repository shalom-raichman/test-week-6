import { Router } from "express"
import { createStudent, createTeacher } from "../controllers/userController"

const userRouter = Router()

userRouter.post("/techer", createTeacher)

userRouter.post("/student", createStudent)

// userRouter.get("/", getUsers) optional

// userRouter.get("/:username", getUser) optional

export default userRouter
