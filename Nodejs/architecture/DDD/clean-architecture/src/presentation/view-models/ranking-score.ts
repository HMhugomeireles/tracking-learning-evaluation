import { RankingScore } from "@/domain/entities"

export class RankingScoreViewModels {
  player: Player
  score: number
  matchDate: string
  heroes: Hero[]

  static map (entity: RankingScore): RankingScoreViewModels {
    return {
      ...entity,
      matchDate: entity.matchDate.toISOString()
    }
  }

  static mapCollection (entities: RankingScore[]): RankingScoreViewModels[] {
    // return entities.map(RankingScoreViewModels.map)
    return entities.map(entity => RankingScoreViewModels.map(entity))
  }
}

type Player = {
  name: string
  country: string
}

type Hero = {
  name: string
  level: number
}