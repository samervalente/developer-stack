import * as questionRepository from "../repositories/questionRepository"
import { QuestionType } from "../types/questionTypes";

export async function createQuestion(question: QuestionType){
    await questionRepository.insertQuestion(question)
}

export async function getAllQuestions(){
    const questions = await questionRepository.getAllQuestions()
    return questions
}

export async function getQuestionById(questionId: number){
    const question = await questionRepository.getQuestionById(questionId)
   
    if(!question){
        throw {type: "not_found", message: "Question not found"}
    }
    return question
}