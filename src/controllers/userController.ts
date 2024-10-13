import { Request, Response } from "express"
import { createTeacherService } from "../services/userService"
import newTeacherDTO from "../DTO/newTeacherDTO"
import newTeacherResDTO from "../DTO/newTeacherResDTO"
export const createTeacher = async (
    req: Request<any, any, newTeacherDTO>,
    res: Response) => {
    try {
        const newClass: newTeacherResDTO = await createTeacherService(req.body)
        res.status(201).json({
            err: false,
            msg: newClass
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            err: true,
            msg: (err as Error).message
        })
    }
}

export const createStudent = async (req: Request, res: Response) => { }

// export const getUsers = async (req: Request, res: Response) => { } optional

// export const getUser = async (req: Request, res: Response) => { } optional

