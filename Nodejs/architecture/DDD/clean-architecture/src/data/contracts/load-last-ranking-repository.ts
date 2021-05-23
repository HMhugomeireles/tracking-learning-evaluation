import { RankingScore } from "@/domain/entities";

export interface loadLastRankingRepository {
  loadLastRanking: () => Promise<RankingScore[]>
}