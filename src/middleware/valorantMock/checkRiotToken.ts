
import { Request, Response, NextFunction } from "express";

const errorObject = {
    status : {
        message : "Unauthorized",
        status_code : 401
    }
}

export const checkRiotToken = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.get('X-Riot-Token')) {
        return res.status(401).send(errorObject);
    } else {
        next();
    }
}