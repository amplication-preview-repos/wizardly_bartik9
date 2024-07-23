import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BetUpdateInput = {
  amount?: number | null;
  odds?: number | null;
  potentialPayout?: number | null;
  status?: "Option1" | null;
  game?: GameWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
