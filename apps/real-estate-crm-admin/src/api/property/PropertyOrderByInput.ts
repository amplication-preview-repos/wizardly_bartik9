import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  price?: SortOrder;
  description?: SortOrder;
  name?: SortOrder;
  address?: SortOrder;
};
