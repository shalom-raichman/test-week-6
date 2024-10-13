import jwt from "jsonwebtoken"
import userModel, { IUser } from "../models/userModel"
import bcrypt from "bcrypt"

export const loginService = async (user: IUser): Promise<string> => {
    try {
        const dbUser: IUser | null = await userModel.findOne({ user_name: user.user_name })

        if (!dbUser) throw new Error("user not found")

        if (!(await bcrypt.compare(user.password, dbUser.password))) {
            throw new Error("wrong password")
        }

        const token: string = await jwt.sign(
            {
                user_name: dbUser.user_name,
                role: dbUser.role,
                id: dbUser._id,
            },
            process.env.TOKEN_SECRET!,
            {
                expiresIn: "3m",
            }
        )
        return token
    } catch (err) {
        console.log(err)
        throw err
    }
}
