import { QuestionType } from "../types/questionTypes";
import client from "../../database/prisma";


export async function insertQuestion(question: QuestionType){
    await client.questions.create({data: question})
}

export async function getAllQuestions(){
    const questions = await client.questions.findMany()
    return questions
}

export async function getQuestionById(questionId: number){
    const question = await client.questions.findUnique({where: {id: questionId}, include:{answers:{select: {answeredBy: true, answer: true}}}})
    return question
}