import { BetUpdateManyWithoutGamesInput } from "./BetUpdateManyWithoutGamesInput";

export type GameUpdateInput = {
  name?: string | null;
  date?: Date | null;
  result?: "Option1" | null;
  teamA?: string | null;
  teamB?: string | null;
  bets?: BetUpdateManyWithoutGamesInput;
};
