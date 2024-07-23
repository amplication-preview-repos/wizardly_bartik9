import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BetListRelationFilter } from "../bet/BetListRelationFilter";

export type GameWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  result?: "Option1";
  teamA?: StringNullableFilter;
  teamB?: StringNullableFilter;
  bets?: BetListRelationFilter;
};
