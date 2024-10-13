import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import { IUser } from "../models/userModel"
import { roleEnum } from "../enums/roleEnum"

export const onlyTeachers = async (
    req: Request<any, any, any>, //add DTO
    res: Response,
    next: NextFunction) => {
    try {
        // get the token from cookie
        const token = req.cookies.token
        // verify
        const userData: IUser = await jwt.verify(token, process.env.TOKEN_SECRET!) as IUser
        if (userData.role != roleEnum.teacher) {
            res.status(403).json({ msg: "shtzchhhhhhhhh...." })
        }
        // add the user to the req obj
        //@ts-ignore
        req.user = userData
        // call next
        next()
    } catch (err) {
        console.log(err)
        res.status(401).json({
            msg: "not aloud",
        })
    }
}

export const onlyUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // get the token from cookie
        const token = req.cookies.token
        // verify
        const userData = await jwt.verify(token, process.env.TOKEN_SECRET!)
        // add the user to the req obj
        //@ts-ignore
        req.user = userData
        // call next
        next()
    } catch (err) {
        console.log(err)
        res.status(401).json({
            msg: "not aloud",
        })
    }
}