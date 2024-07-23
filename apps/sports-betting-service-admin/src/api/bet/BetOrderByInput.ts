import { SortOrder } from "../../util/SortOrder";

export type BetOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  odds?: SortOrder;
  potentialPayout?: SortOrder;
  status?: SortOrder;
  gameId?: SortOrder;
  userId?: SortOrder;
};
