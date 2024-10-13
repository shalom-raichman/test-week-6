import mongoose, { Schema, Document, Types } from "mongoose"
import { IUser } from "./userModel"
import { IClass } from "./classModel"


export interface ITest extends Document {
    _id: Types.ObjectId
    test_name: string
    score: number
    student_id: Types.ObjectId | IUser
    class_id: Types.ObjectId | IClass
}

const TestSchema = new Schema<ITest>({})

export default mongoose.model<ITest>("Test", TestSchema)
