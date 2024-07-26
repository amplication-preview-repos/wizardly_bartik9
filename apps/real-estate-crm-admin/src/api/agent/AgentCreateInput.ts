import { AppointmentCreateNestedManyWithoutAgentsInput } from "./AppointmentCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  lastName?: string | null;
  email?: string | null;
  firstName?: string | null;
  phoneNumber?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutAgentsInput;
};
