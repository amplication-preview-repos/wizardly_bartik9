import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BetWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  odds?: FloatNullableFilter;
  potentialPayout?: FloatNullableFilter;
  status?: "Option1";
  game?: GameWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
