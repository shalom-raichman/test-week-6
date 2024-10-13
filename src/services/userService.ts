import { Types } from "mongoose"
import newTeacherDTO from "../DTO/newTeacherDTO"
import newTeacherResDTO from "../DTO/newTeacherResDTO"
import classModel, { IMyClass } from "../models/classModel"
import userModel, { IUser } from "../models/userModel"
import { roleEnum } from "../enums/roleEnum"

export const createTeacherService = async (newTeacher: newTeacherDTO): Promise<newTeacherResDTO> => {
    try {
        if(newTeacher.role != roleEnum.teacher) throw new Error("try to use the rigth EP")
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

export const createStudentService = async (newStudent: newTeacherDTO): Promise<IUser> => {
    try {
        if(newStudent.role != roleEnum.student) throw new Error("try to use the rigth EP")
        const dbStudent = new userModel(newStudent)
        await dbStudent.save()
        await classModel.findOneAndUpdate(
            { class_name: newStudent.class_name },
            { $push: { students_id: dbStudent._id } }
        )
        return dbStudent
    } catch (err) {
        console.log(err)
        throw err
    }
}
