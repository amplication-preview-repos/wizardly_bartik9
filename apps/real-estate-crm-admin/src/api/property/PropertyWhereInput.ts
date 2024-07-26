import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";

export type PropertyWhereInput = {
  id?: StringFilter;
  price?: FloatNullableFilter;
  description?: StringNullableFilter;
  name?: StringNullableFilter;
  address?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
};
