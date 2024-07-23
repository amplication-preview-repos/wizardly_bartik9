import { InputJsonValue } from "../../types";
import { BetUpdateManyWithoutUsersInput } from "./BetUpdateManyWithoutUsersInput";
import { TransactionUpdateManyWithoutUsersInput } from "./TransactionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  bets?: BetUpdateManyWithoutUsersInput;
  transactions?: TransactionUpdateManyWithoutUsersInput;
};
