import { loadLastRankingRepository } from "@/data/contracts";
import { RankingScore } from "@/domain/entities";
import { ranking } from '@/infra/data-sources'

export class FakeRankingRepository implements loadLastRankingRepository {
  async loadLastRanking (): Promise<RankingScore[]> {
    return ranking.map(item => ({
      player: item.user,
      score: item.score,
      matchDate: new Date(item.date),
      heroes: item.heroes
    }))
  };
  
}