import { SortOrder } from "../../util/SortOrder";

export type AgentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  lastName?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  phoneNumber?: SortOrder;
};
