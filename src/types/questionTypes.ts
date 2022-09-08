import { questions } from "@prisma/client";
export type QuestionType = Omit<questions, "id">