import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import { IUser } from "../models/userModel"

export const onlyCommanders = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // get the token from cookie
        const token = req.cookies.token
        // verify
        const userData = await jwt.verify(token, process.env.TOKEN_SECRET!)
        if (userData.role != "commander") {
            res.status(403).json({ msg: "shtzchhhhhhhhh...." })
        }
        // add the user to the req obj
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

export const onlySoldiersAndCommanders = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // get the token from cookie
        const token = req.cookies.token
        // verify
        const userData = await jwt.verify(token, process.env.TOKEN_SECRET!)
        // add the user to the req obj
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