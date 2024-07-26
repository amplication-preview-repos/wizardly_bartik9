import { AppointmentUpdateManyWithoutAgentsInput } from "./AppointmentUpdateManyWithoutAgentsInput";

export type AgentUpdateInput = {
  lastName?: string | null;
  email?: string | null;
  firstName?: string | null;
  phoneNumber?: string | null;
  appointments?: AppointmentUpdateManyWithoutAgentsInput;
};
