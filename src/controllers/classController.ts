import { Request, Response } from "express"
import { getAllStudentsDataSrvice } from "../services/classService"

export const getAllStudentsData = async (
    req: Request,
    res: Response) => {
    try {
        const data = await getAllStudentsDataSrvice(req.params.class_name)
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
        res.status(400).json({
            msg: (err as Error).message
        })
    }
}

export const getClassAvarege = async (req: Request, res: Response) => {
    try {
        const data = await getAllStudentsDataSrvice(req.params.class_name)
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
        res.status(400).json({
            msg: (err as Error).message
        })
    }
}

// export const getUser = async (req: Request, res: Response) => { } optional
