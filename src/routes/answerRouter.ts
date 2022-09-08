import {Router} from "express"
import { answerSchema } from '../schemas/answerSchema';
import { createAnswer } from "../controllers/answerController";
import { validateSchemaMiddleware } from './../middlewares/validateSchema';

const answerRouter = Router()

answerRouter.post(
    '/questions/:id/answers',
    validateSchemaMiddleware(answerSchema), createAnswer);

    export default answerRouter