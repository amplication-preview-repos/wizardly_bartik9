import { Appointment } from "../appointment/Appointment";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  price: number | null;
  description: string | null;
  name: string | null;
  address: string | null;
  appointments?: Array<Appointment>;
};
