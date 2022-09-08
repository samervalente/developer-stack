import * as questionService from "../services/questionService"
import { Request, Response } from 'express';

export async function createQuestion(req: Request, res: Response) {
  const question = req.body
  await questionService.createQuestion(question)

  res.status(201).send("Question created!")
}



export async function get(req: Request, res: Response) {
  const questions = await questionService.getAllQuestions()
  res.status(200).send({questions})
}

export async function getById(req: Request, res: Response) {
  const questionId: number = Number(req.params.id)
  const question = await questionService.getQuestionById(questionId)

  res.status(200).send(question)
}
