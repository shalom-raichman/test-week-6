import { Request, Response } from "express"
import { createStudentService, createTeacherService } from "../services/userService"
import newTeacherDTO from "../DTO/newTeacherDTO"
import newTeacherResDTO from "../DTO/newTeacherResDTO"
import { IUser } from "../models/userModel"

export const createTeacher = async (
    req: Request<any, any, newTeacherDTO>,
    res: Response) => {
    try {
        const response: newTeacherResDTO = await createTeacherService(req.body)
        res.status(201).json({
            err: false,
            msg: response
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            err: true,
            msg: (err as Error).message
        })
    }
}

export const createStudent = async (
    req: Request<any, any, newTeacherDTO>,
    res: Response) => {
    try {
        const response: IUser = await createStudentService(req.body)
        res.status(201).json({
            err: false,
            msg: response
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            err: true,
            msg: (err as Error).message

        })
    }
}

// export const getUsers = async (req: Request, res: Response) => { } optional

// export const getUser = async (req: Request, res: Response) => { } optional

