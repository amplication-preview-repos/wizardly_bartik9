import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  typeField?: "Option1" | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
