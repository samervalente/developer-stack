import { answers } from "@prisma/client";

export type answerType = Omit<answers, "id">