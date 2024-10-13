import classModel, { IMyClass } from "../models/classModel"
import { IUser } from "../models/userModel"

export const getAllStudentsDataSrvice = async (className: string): Promise<any> => {
    try {
        const data = await classModel.find({ class_name: className }).populate("students_id").populate("tests_id")
        return data
    } catch (err) {
        console.log(err)
        throw err
    }
}