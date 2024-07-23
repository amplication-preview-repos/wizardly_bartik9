import { InputJsonValue } from "../../types";
import { BetCreateNestedManyWithoutUsersInput } from "./BetCreateNestedManyWithoutUsersInput";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  bets?: BetCreateNestedManyWithoutUsersInput;
  transactions?: TransactionCreateNestedManyWithoutUsersInput;
};
