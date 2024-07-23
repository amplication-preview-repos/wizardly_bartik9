import { Bet } from "../bet/Bet";

export type Game = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  date: Date | null;
  result?: "Option1" | null;
  teamA: string | null;
  teamB: string | null;
  bets?: Array<Bet>;
};
