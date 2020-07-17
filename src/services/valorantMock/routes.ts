import { Request, Response } from "express";
import { httpError, HTTP404Error } from '../../utils/httpErrors'

export default [
  {
    path: "/val/content/v1/contents",
    method: "get",
    handler: async (req: Request, res: Response) => {
      let err = new HTTP404Error();
      console.log("err", err.name);
      throw err;
    }
  }
];