import { Request, Response } from "express"
import { loginService } from "../services/authService"

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const token: string = await loginService(req.body)
        res.cookie("token", token)
        res.json({
            msg: `Welcome ${req.body.user_name}! so good to se you!!`
        })
    } catch (err) {
        console.log(err)
        res.status(400).send((err as Error).message)
    }
}

export const logout = async (req: Request, res: Response) => {
    try {
        res.clearCookie("token")
        res.sendStatus(200)
    } catch (err) {
        res.sendStatus(400)
    }
}