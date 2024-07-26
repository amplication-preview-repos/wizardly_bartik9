import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  price?: number | null;
  description?: string | null;
  name?: string | null;
  address?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
};
