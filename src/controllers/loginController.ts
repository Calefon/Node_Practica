import { Request, Response, NextFunction } from 'express';


export const login = (req: Request, res: Response, next: NextFunction) => {
    res.status(200);
    res.send("<h1>Estás en el Login!!!</h1>")
}
