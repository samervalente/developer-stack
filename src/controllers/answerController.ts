import {Request, Response} from "express"
import { createAnswer as insertAnswer } from "../services/answerService"

export async function createAnswer(req: Request, res: Response) {
    const questionId = Number(req.params.id)
    const answer = {...req.body, questionId}
    await insertAnswer(answer)

    return res.status(201).send("Answer registered successfully")

  }