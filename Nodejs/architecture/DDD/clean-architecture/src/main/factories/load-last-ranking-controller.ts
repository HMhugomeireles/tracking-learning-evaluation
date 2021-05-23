import { LastRankingLoaderService } from '@/data/service';
import { FakeRankingRepository } from '@/infra/repositories';
import { Controller } from '@/presentation/contracts';
import { LoadLastRankingController } from '@/presentation/controllers';

export const makeLoadLastRankingController = (): Controller => {
  const repo = new FakeRankingRepository();
  const loader = new LastRankingLoaderService(repo);
  return new LoadLastRankingController(loader);
};
