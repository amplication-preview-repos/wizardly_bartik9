import { Appointment } from "../appointment/Appointment";

export type Agent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  lastName: string | null;
  email: string | null;
  firstName: string | null;
  phoneNumber: string | null;
  appointments?: Array<Appointment>;
};
