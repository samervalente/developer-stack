import * as questionRepository from "../repositories/questionRepository"
import * as answerRepository from "../repositories/answerRepository"
import { answerType } from "../types/answerTypes"

export async function createAnswer(answer: answerType){
    const question = await questionRepository.getQuestionById(answer.questionId)
    if(!question){
        throw {type: "not_found", message: "Question not found"}
    }
    await answerRepository.createAnswer(answer)
}

