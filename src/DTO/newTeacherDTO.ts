import { roleEnum } from "../enums/roleEnum"
import { IMyClass } from "../models/classModel"

export default interface newTeacherDTO {
    user_name: string
    email: string
    password: string
    role: roleEnum
    class_name: string
}