import { SecurityDataFilter } from "./SecurityDataFilter";

export type SecurityData = {
  accessToken: string;
  refreshToken: string;
} & SecurityDataFilter;
