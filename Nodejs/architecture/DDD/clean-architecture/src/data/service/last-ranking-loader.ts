import { RankingScore } from '@/domain/entities';
import { LastRankingLoader } from '@/domain/user-cases';
import { loadLastRankingRepository } from '@/data/contracts';
import { RankingUnavailableError } from '@/domain/exception';

export class LastRankingLoaderService implements LastRankingLoader {
  constructor(
    private readonly loadLastRankingRepository: loadLastRankingRepository,
  ) {}

  async load(): Promise<RankingScore[]> {
    if (new Date().getHours() > 21) {
      throw new RankingUnavailableError();
    }
    return this.loadLastRankingRepository.loadLastRanking();
  }
}
