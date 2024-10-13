import classModel, { IMyClass } from "../models/classModel"

export const getAllStudentsDataSrvice = async (className: string): Promise<any> => {
    try {
        const data = await classModel.find({ class_name: className }).populate("students_id").populate("tests_id")
        return data
    } catch (err) {
        console.log(err)
        throw err
    }
}

// export const getClassAvarageSrvice = async (className: string): Promise<any> => {
//     try {
//         const data = await classModel.aggregate([
//             {
//                 $group:
//                   {
//                     _id: "$tests_id",
//                     avgAmount: { $avg: { $multiply: [ "$price", "$quantity" ] } },
//                     avgQuantity: { $avg: "$quantity" }
//                   }
//               }
//         ])
//         return data
//     } catch (err) {
//         console.log(err)
//         throw err
//     }
// }
// tring to aggregate avarage