import classModel from "../models/classModel"
import testModel, { ITest } from "../models/testModel"

export const createTestService = async (newTest: ITest): Promise<ITest> => {
    try {
        const dbTest = new testModel(newTest)
        await dbTest.save()
        await classModel.findByIdAndUpdate(
            newTest.class_id,
            { $push: { tests_id: dbTest.id } }
        )
        return dbTest
    } catch (err) {
        console.log(err)
        throw err
    }
}