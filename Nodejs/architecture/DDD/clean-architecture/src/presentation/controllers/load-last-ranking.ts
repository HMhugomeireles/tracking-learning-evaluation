import { LastRankingLoader } from '@/domain/user-cases';
import { Controller, HttpResponse, ok, serverError } from '../contracts';
import { RankingScoreViewModels } from '../view-models';

export class LoadLastRankingController implements Controller {
  constructor(private readonly lastRankingLoader: LastRankingLoader) {}

  async handle(): Promise<HttpResponse<RankingScoreViewModels[]>> {
    try {
      const ranking = await this.lastRankingLoader.load();
      return ok(RankingScoreViewModels.mapCollection(ranking));
    } catch (error) {
      return serverError(error);
    }
  }
}
