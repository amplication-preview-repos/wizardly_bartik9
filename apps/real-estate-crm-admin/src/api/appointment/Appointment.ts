import { Client } from "../client/Client";
import { Property } from "../property/Property";
import { Agent } from "../agent/Agent";

export type Appointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  time: Date | null;
  client?: Client | null;
  property?: Property | null;
  agent?: Agent | null;
};
