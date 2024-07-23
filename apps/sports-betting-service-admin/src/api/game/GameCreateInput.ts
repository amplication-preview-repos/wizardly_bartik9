import { BetCreateNestedManyWithoutGamesInput } from "./BetCreateNestedManyWithoutGamesInput";

export type GameCreateInput = {
  name?: string | null;
  date?: Date | null;
  result?: "Option1" | null;
  teamA?: string | null;
  teamB?: string | null;
  bets?: BetCreateNestedManyWithoutGamesInput;
};
