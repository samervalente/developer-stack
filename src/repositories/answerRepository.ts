import { answerType } from "../types/answerTypes";
import client from "../../database/prisma";


export async function createAnswer(answer: answerType){
    await client.answers.create({data: answer})
}

