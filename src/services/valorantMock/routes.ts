import { Request, Response } from "express";
import { httpError, HTTP404Error } from '../../utils/httpErrors';
import { getValContentV1, getValmatchV1 } from './valorantMockController';
import { checkRiotToken } from '../../middleware/valorantMock/checkRiotToken';

export default [
  {
    path: "/val/content/v1/contents",
    method: "get",
    handler: [
        checkRiotToken,
        async (req: Request, res: Response) => {
          const content = await getValContentV1();
        res.status(200).send(content);
      }
    ]
  },
  {
    path: "/val/content/v1/matches/:matchId",
    method: "get",
    handler: [
        checkRiotToken,
        async (req: Request, res: Response) => {
          const content = await getValmatchV1(req.params.matchId);
        res.status(200).send(content);
      }
    ]
  }
];