import { makeLoadLastRankingController } from '@/main/factories';
import { Controller } from '@/presentation/contracts';
import { Request, Response } from 'express';

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response): Promise<void> => {
    const httpResponse = await controller.handle();
    res.status(httpResponse.statusCode).json(httpResponse.data);
  };
};
