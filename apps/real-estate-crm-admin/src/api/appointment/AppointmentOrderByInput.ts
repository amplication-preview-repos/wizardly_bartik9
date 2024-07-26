import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  time?: SortOrder;
  clientId?: SortOrder;
  propertyId?: SortOrder;
  agentId?: SortOrder;
};
