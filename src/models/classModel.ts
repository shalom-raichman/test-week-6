import mongoose, { Schema, Document, Types } from "mongoose"
import { IUser } from "./userModel"
import { ITest } from "./testModel"

export interface IClass extends Document {
    _id: Types.ObjectId
    class_name: string
    teacher_id: Types.ObjectId | IUser
    students_id: Types.ObjectId[] | IUser[]
    tests_id: Types.ObjectId[] | ITest[]
}

const ClassSchema = new Schema<IClass>({})

export default mongoose.model<IClass>("Class", ClassSchema)
