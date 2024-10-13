import mongoose, { Schema, Document, Types } from "mongoose"
import userModel, { IUser } from "./userModel"
import { IClass } from "./classModel"


export interface ITest extends Document {
    test_name: string
    score: number
    student_id: Types.ObjectId | IUser
    class_id: Types.ObjectId | IClass
}

const TestSchema = new Schema<ITest>({
    test_name: {
      type: String,
      minlength: [3, "username is to short!"],
      maxlength: [30, "username is to long!"],
      required: [true, "username must be provided"],
      unique: true
    },
    score: {
        type: Number
    },
    student_id: {
        type: Types.ObjectId,
        ref: "User",
        required: [true, "student id must be provided"]
    },
    class_id: {
        type: Types.ObjectId,
        ref: "Class",
        required: [true, "class id mus be provided"]
    }
  })

export default mongoose.model<ITest>("Test", TestSchema)
