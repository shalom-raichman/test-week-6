import { Request, Response } from "express"
import { ITest } from "../models/testModel"
import { createTestService } from "../services/testService"

export const createTest = async (
    req: Request,
    res: Response) => {
    try {
        const response: ITest = await createTestService(req.body)
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

export const updateTest = async (req: Request, res: Response) => { }

export const getTestByStudentName = async (req: Request, res: Response) => { }