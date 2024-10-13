import mongoose, { Schema, Document, Types } from "mongoose"
import { IUser } from "./userModel"
import { ITest } from "./testModel"

export interface IClass extends Document {
    class_name: string
    teacher_id: Types.ObjectId | IUser
    students_id: Types.ObjectId[] | IUser[]
    tests_id: Types.ObjectId[] | ITest[]
}

const ClassSchema = new Schema<IClass>({
    class_name: {
        type: String,
        minlength: [3, "username is to short!"],
        maxlength: [30, "username is to long!"],
        required: [true, "username must be provided"],
        unique: true
      },
    teacher_id: {
        type: Types.ObjectId,
        ref: "User",
        required: [true, "class must heve a teacher! teachcer id must be provided"],
        unique: true,
    },
    students_id: {
        type: [Types.ObjectId],
        ref: "User",
        default: []
    },
    tests_id: {
        type: [Types.ObjectId],
        ref: "Test",
        default: []
    }
})

export default mongoose.model<IClass>("Class", ClassSchema)
