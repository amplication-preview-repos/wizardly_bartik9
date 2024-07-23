import { User } from "../user/User";

export type Transaction = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  typeField?: "Option1" | null;
  status?: "Option1" | null;
  user?: User | null;
};
