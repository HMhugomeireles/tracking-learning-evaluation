import { adaptResolver } from '@/main/adapters';
import { makeLoadLastRankingController } from '@/main/factories';

export default {
  Query: {
    lastRanking: async (): Promise<unknown> => {
      return adaptResolver(makeLoadLastRankingController());
    },
  },
};
