import { SecurityData } from "./SecurityData";
import { SecurityDataFilter } from "./SecurityDataFilter";

export interface ISecurityDataStorage {
  storeAccessToken(securityData: SecurityData): Promise<void>;

  findAccessToken(params: SecurityDataFilter): Promise<SecurityData>;

  getApiKey?(params: SecurityDataFilter): Promise<string>;
}
