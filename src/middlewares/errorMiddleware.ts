import { NextFunction, Request, Response } from 'express';

export function errorHandlerMiddleware(
  err: Error | any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const {type, message} = err

  if (type === 'conflict') return res.status(409).send(message);
  if (type === 'not_found') return  res.status(404).send(message);
  if (type === 'unauthorized') return  res.status(401).send(message);

  return res.sendStatus(500);
}

