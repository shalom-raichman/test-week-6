import { roleEnum } from "../enums/roleEnum"
import { IMyClass } from "../models/classModel"
import { IUser } from "../models/userModel"

export default interface newTeacherDTO {
    user: IUser
    myClass: IMyClass
}