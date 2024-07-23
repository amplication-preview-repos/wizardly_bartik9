import { Game } from "../game/Game";
import { User } from "../user/User";

export type Bet = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  odds: number | null;
  potentialPayout: number | null;
  status?: "Option1" | null;
  game?: Game | null;
  user?: User | null;
};
