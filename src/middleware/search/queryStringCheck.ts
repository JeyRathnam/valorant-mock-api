
import { Request, Response, NextFunction } from "express";
import { http400Error } from "../../utils/httpErrors";

export const checkSearchParams = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.query.q) {
        throw new http400Error('Missing q parameter');
    } else {
        next();
    }
}