import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  price?: number | null;
  description?: string | null;
  name?: string | null;
  address?: string | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
};
