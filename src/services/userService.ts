import { Types } from "mongoose"
import newTeacherDTO from "../DTO/newTeacherDTO"
import newTeacherResDTO from "../DTO/newTeacherResDTO"
import classModel, { IMyClass } from "../models/classModel"
import userModel, { IUser } from "../models/userModel"

export const createTeacherService = async (newTeacher: newTeacherDTO): Promise<newTeacherResDTO> => {
    try {
        const dbTecher = new userModel(newTeacher)
        await dbTecher.save()
        const newClass = {
            class_name: newTeacher.class_name,
            teacher_id: dbTecher._id as Types.ObjectId,
        }
        const dbClass: IMyClass = new classModel(newClass)
        dbClass.save()
        return {
            user: dbTecher,
            myClass: dbClass
        }
    } catch (err) {
        console.log(err)
        throw err
    }
}
