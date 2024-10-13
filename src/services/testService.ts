import { Request } from "express"
import classModel from "../models/classModel"
import testModel, { ITest } from "../models/testModel"
import updateTestDTO from "../DTO/updateTestDTO"

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

export const updateTestService = async (testToUpdate: updateTestDTO): Promise<void> => {
    try {
        await testModel.findByIdAndUpdate(
            testToUpdate.test_id,
            {score: testToUpdate.score}
        )
    } catch (err) {
        console.log(err)
        throw err
    }
}